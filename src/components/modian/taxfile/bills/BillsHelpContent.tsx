// src/components/modian/taxfile/bills/BillsHelpContent.tsx
import React from 'react';

export default function BillsHelpContent() {
  return (
    <>
      <section>
        <h3 className="font-semibold mb-1">این صفحه چیست؟</h3>
        <p>
          این صفحه شبیه‌ساز بخش «قبوض» کارپوشهٔ مودیان است. می‌توانید فهرست قبوض را ببینید، جستجو
          کنید و قبض جدید اضافه/ویرایش/حذف کنید.
        </p>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">جستجو و فیلتر</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>بر اساس <strong>نوع قبض</strong> (آب/برق/گاز/مخابرات) و <strong>شناسه قبض</strong> جستجو کنید.</li>
          <li>برای اعمال فیلتر، دکمهٔ «جستجو» را بزنید.</li>
        </ul>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">افزودن/ویرایش قبض</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>
            در افزودن/ویرایش، <strong>کدپستی (شعبه)</strong> را از لیست شعب انتخاب کنید؛ نام شعبه به‌صورت
            خودکار پر می‌شود.
          </li>
          <li><strong>درصد اشتراک</strong> در این نسخه نمایشی است (۱۰۰٪).</li>
          <li>در صورت تکراری بودن شناسه قبض، پیام خطا نمایش داده می‌شود.</li>
        </ul>
      </section>
    </>
  );
}
