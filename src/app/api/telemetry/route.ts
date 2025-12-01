// src/app/api/telemetry/route.ts
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

// رویدادها نباید کش شوند
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const h = await headers();
  const ua = h.get('user-agent') || '';
  const ip =
    h.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    h.get('x-real-ip') ||
    'unknown';

  // بدنه ممکن است text/plain یا application/json باشد (sendBeacon)
  let bodyText = '';
  try {
    bodyText = await req.text();
  } catch {
    bodyText = '';
  }

  let payload: Record<string, unknown> | string | null = null;
  try {
    payload = bodyText ? JSON.parse(bodyText) : null;
  } catch {
    // اگر JSON نبود، همان متن خام را نگه می‌داریم
    payload = bodyText || null;
  }

  const event = {
    ts: Date.now(),
    ua,
    ip,
    ...((payload && typeof payload === 'object') ? payload : { raw: payload }),
  };

  // لاگ محلی برای دیباگ
  console.log('[telemetry]', event);

  // --- فوروارد غیرمسدودکننده به بک‌اند
  const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';
  try {
    // عمداً await نمی‌کنیم تا پاسخ سریع برگردد
    // اگر ترجیح می‌دهید منتظر نتیجه بمانیم، می‌توانید await را اضافه کنید
    void fetch(`${apiBase}/telemetry`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      // در صورت نیاز می‌توانید credentials: 'include' را اضافه کنید
      body: JSON.stringify(event),
      cache: 'no-store',
    }).catch(() => {});
  } catch {
    // فوروارد شکست خورد → نادیده بگیر، پاسخ را سریع بده
  }

  // پاسخ سبک بدون بدنه
  return new NextResponse(null, { status: 204 });
}

// روش‌های دیگر فعال نیستند
export function GET() {
  return new NextResponse('Method Not Allowed', { status: 405 });
}