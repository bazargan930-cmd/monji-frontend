// src/app/simulators/modian/taxfile/registration/page.tsx
'use client';
import HelpTrigger from '@/components/common/help/HelpTrigger';
import { RegistrationInformation } from '@/features/modian';

export default function RegistrationInformationPage() {
  
  return (
    <section className="w-full max-w-7xl mx-auto px-4" dir="rtl">


      {/* Page Help */}
      <div className="mb-2 flex justify-end">
        <HelpTrigger
          buttonTitle="راهنمای اطلاعات ثبت‌نامی"
          modalTitle="راهنمای بخش «اطلاعات ثبت‌نامی»"
          size="lg"
        >
          <div className="space-y-3 text-sm leading-6">
            <div>
              <h3 className="font-semibold">این صفحه چیست؟</h3>
              <p>
                مشخصات ثبت‌نامی و نشانی قانونی مؤدی را نمایش می‌دهد. اگر «اطلاعات شعب»
                خالی باشد، از نشانی قانونی یک شعبهٔ پیش‌فرض ساخته می‌شود.
              </p>
            </div>

          </div>
        </HelpTrigger>
      </div>

      <RegistrationInformation />

    </section>
  );
}
