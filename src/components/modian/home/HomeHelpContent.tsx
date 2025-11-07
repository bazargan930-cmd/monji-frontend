// src/components/modian/home/HomeHelpContent.tsx
import React from 'react';

export default function HomeHelpContent() {
  return (
    <>
      <section>
        <h3 className="font-semibold mb-1">این صفحه چیست؟</h3>
        <p>
          «خانهٔ کارپوشهٔ مالیاتی» است. در بالای صفحه میانبرهای عملیاتی و در پایین، تب‌های
          <strong> اطلاعیه‌ها / سوالات متداول</strong> قرار دارد. ستون سمت راست وضعیت کاربر و منوی ناوبری است.
        </p>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">میانبرهای بالای صفحه</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>ویرایش دسترسی سریع: شخصی‌سازی کارت‌های میانبر.</li>
          <li>دریافت شناسه یکتای حافظه مالیاتی.</li>
          <li>مشاهده صورت‌حساب‌های فروش/خرید نیازمند اقدام دوره جاری.</li>
          <li>مشاهده صورت‌حساب‌های خرید در انتظار واکنش دوره جاری.</li>
        </ul>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">از کجا شروع کنم؟</h3>
        <ol className="list-decimal pr-6 space-y-1">
          <li>اگر کاری فوری دارید، از کارت‌های میانبر بالای صفحه استفاده کنید.</li>
          <li>برای ورود به پرونده‌ها، از منوی راست به «صورت‌حساب‌ها» یا «کاربران و نقش‌ها» بروید.</li>
          <li>اطلاعیه‌های جدید را در تب «اطلاعیه‌ها» بررسی کنید.</li>
        </ol>
      </section>
    </>
  );
}
