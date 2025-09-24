//src\app\simulators\modian\admin\layout.tsx

'use client';

import ModianHeader from '@/components/layout/ModianHeader';
import ModianSubHeader from '@/components/layout/ModianSubHeader';
import ModianSidebar from '@/components/modian/ModianSidebar';
import ModianFooter from '@/components/layout/ModianFooter';
import HelpGuideButton from '@/components/common/HelpGuideButton';

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* هدر اصلی */}
      <ModianHeader />
      {/* ساب‌هدر مدیان */}
      <ModianSubHeader />

      {/* بدنه با سایدبارِ چسبیده به راست */}
      <div className="flex-1 w-full py-6 pr-0 pl-2 sm:pl-3">
        {/* موبایل = گرید ستونی | دسکتاپ = فلکس افقی بدون فاصله */}
        <div className="grid grid-cols-12 gap-y-4 lg:flex lg:flex-row lg:gap-16">
          {/* سایدبار اصلی (عرض ثابت در دسکتاپ) */}
          <aside className="col-span-12 order-2 lg:order-1 lg:w-72 lg:shrink-0">           
            <ModianSidebar />
          </aside>
          {/* محتوای صفحات داخلی */}
          <main className="col-span-12 order-1 lg:order-2 lg:flex-1 lg:min-w-0">
            <div className="flex items-center justify-between mb-0">
              <div />
              <HelpGuideButton title="راهنمای صفحه" lines={['این راهنما بزودی تکمیل خواهد شد']} />
            </div>
            {children}
          </main>
        </div>
      </div>

      {/* فوتر */}
      <ModianFooter />
    </div>
  );
}
