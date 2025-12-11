//src\components\layout\ModianShell.tsx

'use client';
import { usePathname } from 'next/navigation';

import ModianFooter from './ModianFooter';
import ModianHeader from './ModianHeader';
import ModianSubHeader from './ModianSubHeader';


export default function ModianShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // مسیرهایی که نباید هدر داشته باشند (مثل لاگین)
  if (pathname === '/simulators/modian/login') return <>{children}</>;

  // تعیین عنوان صفحه بر اساس مسیر
  let pageTitle = 'پیشخوان';
  if (pathname === '/simulators/modian/home') {
    pageTitle = 'خانه';
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f6]">
      <ModianHeader />
      {/* ModianSubHeader پراپ title ندارد؛ از overrideTailLabel استفاده کن */}
      <ModianSubHeader overrideTailLabel={pageTitle} />
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      <ModianFooter />
    </div>
  );
}
