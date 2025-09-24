// src/app/simulators/modian/admin/taxfile/registration/page.tsx
'use client';

import ModianSidebar from '@/components/modian/ModianSidebar';

// ⬇️ این را اضافه کنید
import RegistrationInformation from '@/components/modian/taxfile/registration-information/page';
import HelpGuideButton from '@/components/common/HelpGuideButton';

export default function RegistrationInformationPage() {
  // متن راهنمای اختصاصی این صفحه
  const helpLinesReg = ['صفحه اطلاعات ثبت نامی', 'توضیحات بیشتر در حال تکمیل است'];
 
      {/* بدنه با منوی سمت راست */}
      <div className="flex flex-1 p-4 gap-4 bg-gray-50">
        {/* منوی سمت راست */}
        <div className="w-64 shrink-0">
          <ModianSidebar />
        </div>

         {/* محتوای اصلی */}
          <main className="flex-1">
            {/* تیتر و کلید راهنما - هم‌راستا با کادر اطلاعات (بدون padding اضافی) */}
             <div className="flex items-center justify-between mb-3 -mr-2 md:-mr-4 lg:-mr-6">
                <h2 className="text-lg font-semibold text-gray-800 pr-16">
                  اطلاعات ثبت نامی پرونده مالیاتی
                </h2>
                <HelpGuideButton lines={helpLinesReg} />
              </div>
              {/* نمایش ماژول اطلاعات ثبت‌نامی */}
            <RegistrationInformation />
          </main>
        </div>
return <RegistrationInformation />;
}
