// src/components/modian/taxfile/memory-uid/MemoryUidHelpContent.tsx
import React from 'react';

export default function MemoryUidHelpContent() {
  return (
    <>
      <section>
        <h3 className="font-semibold mb-1">این صفحه چیست؟</h3>
        <p>
          مدیریت «شناسه‌های یکتای حافظه مالیاتی» را شبیه‌سازی می‌کند؛ می‌توانید فهرست شناسه‌ها را ببینید،
          جستجو کنید، ستون‌ها را کم/زیاد کنید و وضعیت شناسه‌ها را مدیریت نمایید.
        </p>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">شروع سریع</h3>
        <ol className="list-decimal pr-6 space-y-1">
          <li>برای دریافت/فعالسازی شناسهٔ جدید، دکمهٔ «دریافت/فعالسازی شناسه یکتا حافظه مالیاتی» را بزنید.</li>
          <li>با «فیلتر» می‌توانید بر اساس <strong>نحوه ارسال صورت‌حساب</strong> و <strong>وضعیت شناسه</strong> محدود کنید.</li>
          <li>در «نمایش ستون‌ها» می‌توانید ستون‌های «شناسه کلید امضا»، «نام شرکت معتمد» و «وضعیت شناسه» را تنظیم کنید.</li>
        </ol>
      </section>
      <section>
        <h3 className="font-semibold mt-3 mb-1">نکات</h3>
        <ul className="list-disc pr-6 space-y-1">
          <li>گزینهٔ «غیرفعالسازی همه/تکی» وضعیت شناسه‌ها را به «غیرفعال» تغییر می‌دهد.</li>
          <li>در صورت انتخاب «شرکت معتمد» در صفحهٔ مربوطه، نام شرکت و نحوهٔ ارسال به‌صورت خودکار در ردیف جدید درج می‌شود.</li>
        </ul>
      </section>
    </>
  );
}
