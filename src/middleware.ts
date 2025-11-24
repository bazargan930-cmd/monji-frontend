// src/middleware.ts
import { jwtVerify, type JWTPayload } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

// نام کوکی مطابق بک‌اند (HttpOnly)
const ACCESS_COOKIE = 'access_token';

// قوانین مسیرها
const RULES: Array<
  | { pattern: RegExp; auth: true }
  | { pattern: RegExp; requireRole: 'ADMIN' }
> = [
  { pattern: /^\/admin(\/|$)/, requireRole: 'ADMIN' },      // نمونه مسیر ادمین
  { pattern: /^\/dashboard(\/|$)/, auth: true },
  { pattern: /^\/profile(\/|$)/, auth: true },
  { pattern: /^\/settings(\/|$)/, auth: true },
  { pattern: /^\/simulators(\/|$)/, auth: true },           // پوشش شبیه‌سازها
];

const AUTH_PAGES = [/^\/auth\/signin$/, /^\/auth\/signup$/];

async function verify(token: string): Promise<{ ok: boolean; payload?: JWTPayload }> {
  // secret باید با بک‌اند یکی باشد؛ فقط از JWT_SECRET سروری استفاده می‌کنیم
  const secretEnv = process.env.JWT_SECRET;

  if (!secretEnv) {
    if (process.env.NODE_ENV !== 'production') {
      // در محیط توسعه به‌جای پذیرش توکن ناامن، هشدار می‌دهیم
      console.warn(
        '[middleware] JWT_SECRET is not set; treating all tokens as invalid.',
      );
    }
    return { ok: false };
  }

  const secret = new TextEncoder().encode(secretEnv);

  try {
    const { payload } = await jwtVerify(token, secret); // HS256
    return { ok: true, payload };
  } catch {
    return { ok: false };
  }
}


type AdminLikePayload = JWTPayload & {
  role?: string;
  Role?: string;
  userRole?: string;
  roles?: string[];
  isAdmin?: boolean;
  accessLevel?: string;
};

function isAdmin(payload?: JWTPayload): boolean {
  if (!payload) return false;

  // انعطاف‌پذیر برای انواع ساختار نقش:
  // role: 'ADMIN' | roles: string[] | isAdmin: boolean | accessLevel: 'ADMIN'
  const p = payload as AdminLikePayload;
  const role = p.role ?? p.Role ?? p.userRole;
  const roles = p.roles;

  return (
    role === 'ADMIN' ||
    roles?.includes?.('ADMIN') ||
    p.isAdmin === true ||
    p.accessLevel === 'ADMIN'
  );
}


export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const token = req.cookies.get(ACCESS_COOKIE)?.value;
  const hasRefresh = !!req.cookies.get('refresh_token')?.value;

  const rule = RULES.find((r) => r.pattern.test(pathname));
  const isAuthPage = AUTH_PAGES.some((rx) => rx.test(pathname));

  // کاربر لاگین‌کرده → اجازه ورود به صفحات احراز هویت نده
  if (isAuthPage && token) {
    const { ok } = await verify(token);
    if (ok) return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // مسیر محافظت‌شده؟
  if (!rule) return NextResponse.next();

  // اگر توکن نیست → ریدایرکت با next
  if (!token) {
    // ⬇️ اگر رفرش دارید، اجازه‌ی عبور بده تا کلاینت /auth/refresh را صدا بزند
    if (hasRefresh) {
      return NextResponse.next();
    }
    const url = new URL('/auth/signin', req.url);
    url.search = '';
    url.searchParams.set('next', pathname + (search || ''));
    return NextResponse.redirect(url);
  }

  const { ok, payload } = await verify(token);
  if (!ok) {
    if (hasRefresh) {
      // ⬇️ توکن خراب/منقضی است ولی رفرش داریم: عبور کن تا صفحه خودش رفرش کند
      return NextResponse.next();
    }
    const url = new URL('/auth/signin', req.url);
    url.search = '';
    url.searchParams.set('next', pathname + (search || ''));
    return NextResponse.redirect(url);
  }

  // نیاز به نقش خاص؟
  if ('requireRole' in rule && rule.requireRole === 'ADMIN' && !isAdmin(payload)) {
    // اگر admin نیست → یا 403 بده یا به داشبورد برگردانیم؛ اینجا ریدایرکت می‌کنیم
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

// فقط مسیرهای لازم را match کن؛ API/استاتیک تحت تأثیر قرار نمی‌گیرد
export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*', '/profile/:path*', '/settings/:path*', '/simulators/:path*', '/auth/:path*'],
};
