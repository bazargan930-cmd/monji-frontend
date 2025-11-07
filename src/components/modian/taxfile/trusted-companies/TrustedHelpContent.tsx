// src/components/modian/taxfile/trusted-companies/TrustedHelpContent.tsx
import React from 'react';

export default function TrustedHelpContent() {
  return (
    <>
      <section>
        <h3 className="font-semibold mb-1">این صفحه چیست؟</h3>
        <p>
          فهرست «شرکت‌های معتمد / سامانه‌های دولتیِ انتخاب‌شده» را نمایش می‌دهد. می‌توانید
          با جستجو و فیلتر تاریخ، لیست را محدود کنید و ستون‌های جدول را کم/زیاد کنید.
        </p>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">ابزارهای بالای صفحه</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li><strong>فیلتر</strong>: بازهٔ تاریخ «انتخاب» و «انقضا/ابطال مجوز» را تعیین کنید.</li>
          <li><strong>نمایش ستون‌ها</strong>: ستون‌های «تاریخ انتخاب»، «تاریخ انقضا»، «خدمات دریافتی» را مدیریت کنید.</li>
          <li><strong>جستجو</strong>: بر اساس نام/شناسه/خدمات جستجو کنید.</li>
          <li><strong>انتخاب شرکت/سامانه</strong>: برای افزودن مورد جدید از دکمهٔ سبز استفاده کنید.</li>
        </ul>
      </section>
    </>
  );
}
