// src/components/modian/portal/PortalHelpContent.tsx
import React from 'react';

export default function PortalHelpContent() {
  return (
    <>
      <section>
        <h3 className="font-semibold mb-1">این صفحه چیست؟</h3>
        <p>«خانهٔ کارپوشهٔ مالیاتی» شماست؛ در پایین صفحه فهرست پرونده‌های مالیاتی نمایش داده می‌شود.</p>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">چطور شروع کنم؟</h3>
        <ol className="list-decimal pr-6 space-y-1">
          <li>در جدول <strong>لیست پرونده‌های مالیاتی</strong> روی <strong>ورود به پرونده</strong> کلیک کنید.</li>
        </ol>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">نکات نمایش</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>اگر جدول خالی بود، اتصال شبیه‌ساز/دادهٔ آزمایشی را بررسی کنید.</li>
          <li>برای تازه‌سازی اطلاعات، صفحه را ریفرش کنید.</li>
        </ul>
      </section>
    </>
  );
}
