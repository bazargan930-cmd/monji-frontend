// src/components/modian/taxfile/bank-accounts/BankAccountsHelpContent.tsx
import React from 'react';

export default function BankAccountsHelpContent() {
  return (
    <>
      <section>
        <h3 className="font-semibold mb-1">این صفحه چیست؟</h3>
        <p>
          مدیریت «حساب‌های بانکی» مؤدی را شبیه‌سازی می‌کند. در بالا نوار ابزار جستجو/فیلتر و
          نمایش ستون‌ها قرار دارد و در پایین جدول حساب‌ها نمایش داده می‌شود.
        </p>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">جستجو و فیلتر</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>با جعبهٔ جستجو می‌توانید بر اساس «شماره شبا» جستجو کنید.</li>
          <li>از «فیلتر» برای محدود کردن نتایج (مانند نوع حساب و نام بانک) استفاده کنید.</li>
          <li>در «نمایش ستون‌ها» می‌توانید ستون‌های جدول را کم/زیاد کنید.</li>
        </ul>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">افزودن حساب بانکی</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>با دکمهٔ «افزودن حساب بانکی» فرم/راهنمای افزودن نمایش داده می‌شود.</li>
          <li>پس از تکمیل، حساب جدید به جدول اضافه خواهد شد (در این نسخه شبیه‌سازی شده است).</li>
        </ul>
      </section>
    </>
  );
}
