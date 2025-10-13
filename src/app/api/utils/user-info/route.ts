// src/app/api/utils/user-info/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
export const dynamic = 'force-dynamic'; // جلوگیری از کش سمت سرور

export async function GET(req: NextRequest) {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';

  // ✅ headers() در Next 15 Promise است → await
  const hdrs = await headers();
  const ck = await cookies(); // ← در Next 15 باید await شود
  const cookieHeader =
    req.headers.get('cookie') ??
    hdrs.get('cookie') ??
    (await cookies()).toString() ??
    '';

  // یک فانکشن کوچک برای فراخوانی با پاس‌ترو کوکی
  const call = (path: string) =>
    fetch(`${apiBase}${path}`, {
      method: 'GET',
      headers: { cookie: cookieHeader },
      cache: 'no-store',
      credentials: 'include',
    });

  let res = await call('/utils/user-info');

  // --- سایلنت‌ریفِرش: اگر 401 شد و refresh_token داریم، قبل از ری‌دایرکت لاگین یک‌بار رفرش کن
  if (res.status === 401 && cookieHeader.includes('refresh_token=')) {
    const refreshRes = await fetch(`${apiBase}/auth/refresh`, {
      method: 'POST',
      headers: { cookie: cookieHeader },
      credentials: 'include',
    });
    if (refreshRes.ok) {
      // کوکی‌های جدید را به مرورگر پاس بده
      const setCookie = refreshRes.headers.get('set-cookie');
      // دوباره user-info را بخوان
      res = await call('/utils/user-info');
      const ct2 = res.headers.get('content-type') ?? 'application/json';
      const body2 = await res.text();
      const out2 = new NextResponse(body2, {
        status: res.status,
        headers: { 'content-type': ct2 },
      });
      if (setCookie) out2.headers.set('set-cookie', setCookie);
      return out2;
    }
  }

  // پاس‌ترو (status + content-type)
  const ct = res.headers.get('content-type') ?? 'application/json';
  const body = await res.text();
  return new NextResponse(body, {
    status: res.status,
    headers: { 'content-type': ct },
  });
}