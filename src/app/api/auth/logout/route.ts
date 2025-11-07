//src/app/api/auth/logout/route.ts

import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';

export async function POST() {
  // CSRF: توکن موجود در هدر و کوکی باید یکسان باشد (Double-Submit)
  const hdrs = await headers();
  const ck = await cookies();
  const headerToken = hdrs.get('x-csrf-token');
  const cookieToken = ck.get('csrf_token')?.value;
  if (!headerToken || !cookieToken || headerToken !== cookieToken) {
    return NextResponse.json({ message: 'CSRF token invalid' }, { status: 403 });
  }
  const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';

  // تلاش برای خروج سمت بک‌اند (ابطال/بی‌اعتبارسازی توکن‌ها)
  try {
    await fetch(`${apiBase}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
  } catch {
    // اگر بک‌اند در دسترس نبود، صرفاً پاکسازی کوکی سمت فرانت انجام می‌شود
  }

  // پاسخ موفق به کلاینت
  const res = NextResponse.json({ message: 'خروج موفق' });

  // حذف ایمن کوکی‌ها (نام‌های رایج)
  const toClear = [
    '__Host-auth-token',
    '__Host-refresh-token',
    'auth_token',
    'refresh_token',
    'access_token',
    'accessToken',
  ];
  for (const name of toClear) {
    res.cookies.set(name, '', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 0,
    });
  }

  return res;
}
