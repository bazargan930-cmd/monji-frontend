// src/components/modian/declaration/DeclarationHelpContent.tsx
import React from 'react';

export default function DeclarationHelpContent() {
  return (
    <>
      <section>
        <h3 className="font-semibold mb-1">این صفحه چیست؟</h3>
        <p>
          این نما راهنمای «اظهارنامهٔ پیش‌فرض ارزش‌افزوده» است. متن اصلی صفحه، الزامات و نکات اجرایی
          را برای تکمیل/اصلاح اظهارنامه توضیح می‌دهد.
        </p>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">نکات مهم</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>اطلاعات صورت‌حساب‌ها، خرید/فروش، واردات و صادرات به‌صورت سیستمی بارگذاری می‌شود.</li>
          <li>اصلاح مقادیر سیستمی مستقیم ممکن نیست؛ از ستون «خارج از سامانه» برای اصلاح/تکمیل استفاده کنید.</li>
          <li>«ارسال بازخورد» برای بررسی و محاسبهٔ مجدد مقادیر فراهم است و نیاز به مراجعهٔ حضوری ندارد.</li>
        </ul>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">وضعیت دکمه‌ها</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>دکمهٔ «مشاهده اظهارنامه‌ها و خلاصه عملکرد» در این نسخه آموزشی غیرفعال است.</li>
        </ul>
      </section>
    </>
  );
}
