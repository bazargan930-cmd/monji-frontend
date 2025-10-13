//src/components/landing/analytics.ts
'use client';

// رویداد تحلیلی سبک برای MVP
export function track(event: string, payload: Record<string, unknown> = {}) {
  try {
    const detail = { event, payload, ts: Date.now() };
    // 1) رویداد CustomEvent برای شنونده‌های سفارشی/QA
    window.dispatchEvent(new CustomEvent('taraaz:analytics', { detail }));
    // 2) dataLayer (در صورت وجود) برای اتصال آینده به GA/Umami
    //  - نام رویداد با prefix تا متمایز باشد
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: `taraaz_${event}`, ...payload, ts: detail.ts });
  } catch {
    // هیچ: عدم شکست UI در محیط‌هایی که window وجود ندارد
  }
}


