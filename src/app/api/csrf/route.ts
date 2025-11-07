// src/app/api/csrf/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const ck = await cookies();
  let token = ck.get('csrf_token')?.value;
  if (!token) {
    // توکن ساده‌ی تصادفی برای دم‌دستی (در آینده: رمزنگاری/چرخش)
    token = Math.random().toString(36).slice(2) + Date.now().toString(36);
    // کوکی CSRF عمداً HttpOnly نیست تا کلاینت بتواند مقدارش را در هدر بفرستد
    ck.set('csrf_token', token, {
      httpOnly: false,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // ۱ روز
    });
  }
  return NextResponse.json({ token });
}

