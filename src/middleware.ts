// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify, type JWTPayload } from 'jose';

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
  // secret باید با بک‌اند یکی باشد؛ از متغیر محیطی فرانت استفاده می‌کنیم
  const secret = new TextEncoder().encode(
    process.env.NEXT_PUBLIC_JWT_SECRET ?? process.env.JWT_SECRET ?? 'dev-secret'
  );
  try {
    const { payload } = await jwtVerify(token, secret); // HS256
    return { ok: true, payload };
  } catch {
    return { ok: false };
  }
}

function isAdmin(payload?: JWTPayload): boolean {
  if (!payload) return false;
  // انعطاف‌پذیر برای انواع پروژه‌ها:
  // role: 'ADMIN' | roles: string[] | isAdmin: boolean | accessLevel: 'ADMIN'
  const role = (payload as any).role ?? (payload as any).Role ?? (payload as any).userRole;
  const roles = (payload as any).roles as string[] | undefined;
  return (
    role === 'ADMIN' ||
    roles?.includes?.('ADMIN') ||
    (payload as any).isAdmin === true ||
    (payload as any).accessLevel === 'ADMIN'
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
