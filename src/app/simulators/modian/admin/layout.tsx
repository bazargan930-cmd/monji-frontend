//src\app\simulators\modian\admin\layout.tsx

'use client';

import HelpGuideButton from '@/components/common/HelpGuideButton';

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <section>
      {/* دکمه راهنما را در حالت RTL به سمت چپ می‌بریم */}
      <div className="flex items-center justify-end mb-0"> 
         <HelpGuideButton title="راهنمای صفحه" lines={['این راهنما بزودی تکمیل خواهد شد']} />
      </div>    
          {/* محتوای صفحات داخلی */}
          <main className="col-span-12 order-1 lg:order-2 lg:flex-1 lg:min-w-0">          
            {children}
          </main>
    </section>
  );
}
