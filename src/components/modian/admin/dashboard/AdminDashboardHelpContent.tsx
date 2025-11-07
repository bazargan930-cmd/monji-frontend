// src/components/modian/admin/dashboard/AdminDashboardHelpContent.tsx
import React from 'react';

export default function AdminDashboardHelpContent() {
  return (
    <>
      <section>
        <h3 className="font-semibold mb-1">این صفحه چیست؟</h3>
        <p>
          «داشبورد مدیریتی» کارپوشهٔ مالیاتی است. در این صفحه حد مجاز فروش دوره، نمودارهای دوره‌ای،
          خلاصهٔ مالیات دوره و خلاصهٔ عضویت نمایش داده می‌شود.
        </p>
      </section>

      <section>
        <h3 className="font-semibold mt-3 mb-1">حد مجاز فروش دوره</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>سال و دوره را انتخاب کنید، نرخ مالیات را وارد نمایید و روی «محاسبه حد مجاز» بزنید.</li>
          <li>اگر سابقهٔ دوره مشابه سال قبل دارید، «مالیات پرداخت‌شده» و «نرخ مؤثر» را وارد کنید.</li>
          <li>خروجی شامل «سقف حد مجاز فروش» و «باقیمانده حد مجاز» است.</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold mt-3 mb-1">نمودارهای دوره‌ای و خرید/فروش دوره</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>برای نمودارها سال/دوره را انتخاب کرده و «نمایش اطلاعات دوره» را بزنید.</li>
          <li>نمودار دونات وضعیت صورتحساب‌ها (تأیید شده، در انتظار واکنش، …) را نشان می‌دهد.</li>
          <li>نمودار میله‌ای، نمای نزدیک به خرید/فروش دوره است (دادهٔ نمونه/آزمایشی).</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold mt-3 mb-1">خلاصه مالیات دوره و عضویت</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>اقلام «اعتبار/بدهکاری ارزش افزوده» به‌صورت خلاصه نمایش داده می‌شود.</li>
          <li>در «خلاصه عضویت»، آیتم‌هایی مثل حساب‌های بانکی مرتبط و شناسه‌های یکتا دیده می‌شود.</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold mt-3 mb-1">نکات</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>این صفحه آموزشی است و در آینده به API واقعی متصل می‌شود.</li>
          <li>برای تازه‌سازی کارت‌ها از دکمه‌های «به‌روزرسانی/نمایش اطلاعات دوره» استفاده کنید.</li>
        </ul>
      </section>
    </>
  );
}
