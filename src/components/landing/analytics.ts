//src/components/landing/analytics.ts
'use client';

interface AnalyticsDataLayerItem extends Record<string, unknown> {
  event: string;
  ts: number;
}

interface AnalyticsWindow extends Window {
  dataLayer?: AnalyticsDataLayerItem[];
}

// رویداد تحلیلی سبک برای MVP
export default function track(
  event: string,
  payload: Record<string, unknown> = {},
) {
  try {
    const detail: AnalyticsDataLayerItem = { event, ts: Date.now(), payload };
    // 1) رویداد CustomEvent برای شنونده‌های سفارشی/QA
    window.dispatchEvent(new CustomEvent('monji:analytics', { detail }));
    // 2) dataLayer (در صورت وجود) برای اتصال آینده به GA/Umami
    //  - نام رویداد با prefix تا متمایز باشد
    const w = window as AnalyticsWindow;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: `monji_${event}`, ts: detail.ts, ...payload });
  } catch {
    // هیچ: عدم شکست UI در محیط‌هایی که window وجود ندارد
  }
}