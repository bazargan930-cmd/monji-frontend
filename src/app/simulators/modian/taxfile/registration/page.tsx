// src/app/simulators/modian/taxfile/registration/page.tsx
'use client';

import { RegistrationInformation } from '@/components/modian/taxfile';
import HelpTrigger from '@/components/common/help/HelpTrigger';

export default function RegistrationInformationPage() {
  
  return (
    <section className="w-full p-4" dir="rtl">
      {/* راهنمای صفحه (مودال مشترک) – زیر ساب‌هدر، سمت چپ */}
      <div className="mt-2 mb-3 flex justify-end">
        <HelpTrigger
          buttonTitle="راهنمای اطلاعات ثبت‌نامی"
          modalTitle="راهنمای بخش «اطلاعات ثبت‌نامی»"
          size="lg"
        >
          <section>
            <h3 className="font-semibold mb-1">این صفحه چیست؟</h3>
            <p>مشخصات ثبت‌نامی و نشانی قانونی مؤدی را نمایش می‌دهد. اگر «اطلاعات شعب» خالی باشد، از نشانی قانونی یک شعبهٔ پیش‌فرض ساخته می‌شود.</p>
          </section>
          <section>
            <h3 className="font-semibold mt-3 mb-1">منطق تکمیل خودکار «اطلاعات شعب»</h3>
            <ul className="list-disc pr-6 space-y-1">
              <li>کد شعبه: <strong>****</strong> (وقتی فقط یک کدپستی داریم).</li>
              <li>نام شعبه: <strong>مرکزی</strong>.</li>
              <li>سایر فیلدها (استان/شهر/شهرستان/کدپستی/آدرس) از «اطلاعات تماس نشانی و اقامتگاه قانونی» خوانده می‌شود.</li>
            </ul>
          </section>
        </HelpTrigger>
      </div>

      <RegistrationInformation />
    </section>
  );
}
