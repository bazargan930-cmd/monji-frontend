// src/app/api/user-info/route.ts
import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // جلوگیری از کش سمت سرور

export async function GET(req: NextRequest) {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';

  // ساخت کوکی پاس‌ترو صحیح
  const hdrs = await headers();
  const ck = await cookies();
  const incomingCookie =
    req.headers.get('cookie') ??
    hdrs.get('cookie') ??
    ck.getAll().map((c) => `${c.name}=${c.value}`).join('; ');
  const cookieHeader = incomingCookie ?? '';

  // درصورت وجود توکن در کوکی، Authorization را هم پاس بده (Bearer)
  const authToken =
    ck.get('__Host-auth-token')?.value ??
    ck.get('auth_token')?.value ??
    ck.get('access_token')?.value ??
    null;
  const baseHeaders: Record<string, string> = { cookie: cookieHeader };
  if (authToken) baseHeaders.Authorization = `Bearer ${authToken}`;

  // فراخوان کمکی با پاس‌ترو کوکی/Authorization
  const call = (path: string) =>
    fetch(`${apiBase}${path}`, {
      method: 'GET',
      headers: baseHeaders,
      cache: 'no-store',
      credentials: 'include',
    });

  let res = await call('/utils/user-info');

  // Silent refresh اگر 401 و refresh_token داریم
  if (res.status === 401 && (cookieHeader.includes('refresh_token=') || ck.get('refresh_token'))) {
    const refreshRes = await fetch(`${apiBase}/auth/refresh`, {
      method: 'POST',
      headers: { cookie: cookieHeader },
      credentials: 'include',
    });
    if (refreshRes.ok) {
      const setCookie = refreshRes.headers.get('set-cookie');
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

  // پاس‌ترو پاسخ نهایی
  const ct = res.headers.get('content-type') ?? 'application/json';
  const body = await res.text();
  const out = new NextResponse(body, {
    status: res.status,
    headers: { 'content-type': ct },
  });
  const passthroughCookie = res.headers.get('set-cookie');
  if (passthroughCookie) out.headers.set('set-cookie', passthroughCookie);
  return out;
}

