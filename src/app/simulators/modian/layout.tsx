// src/app/simulators/modian/layout.tsx
'use client';

import { usePathname } from 'next/navigation';
import React, { Suspense } from 'react';

import {
  ModianFooter,
  ModianHeader,
  ModianSidebar,
  ModianSubHeader,
} from '@/components/modian';

export default function ModianLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // سایدبار در صفحه «پورتال» و «خلاصه اظهارنامه» نمایش داده نشود
  const hideSidebar =
    pathname === '/simulators/modian' ||
    pathname === '/simulators/modian/declaration/summary' ||
    pathname === '/simulators/modian/declaration/details' ||
    pathname === '/simulators/modian/declaration/feedback'||
    pathname === '/simulators/modian/declaration/complete';
  return (
     <div className="min-h-screen flex flex-col bg-gray-50">
       {/* هدر بالا */}
       <ModianHeader />

       {/* ساب‌هدر + بدنه زیر یک مرز Suspense: برای پوشش useSearchParams در SubHeader و صفحات فرزند */}
       <Suspense fallback={<div className="p-4 text-gray-500">در حال بارگذاری…</div>}>
         {/* ساب‌هدر: چسبیده به هدر و تمام‌عرض */}
         <div className="w-full bg-white border-y">
           <ModianSubHeader />
         </div>

         {/* بدنه: سایدبار راست و محتوای صفحه با فاصله مناسب */}
         <div className="container mx-auto flex-1 w-full px-4 py-4">
           <div className="flex gap-6">
             {/* سایدبار (در پورتال مخفی) */}
             {!hideSidebar && (
               <aside className="w-72 shrink-0 bg-white border rounded-md">
                 <ModianSidebar />
               </aside>
             )}
             {/* محتوای وسط */}
             <main className="flex-1">{children}</main>
           </div>
         </div>
       </Suspense>
       {/* فوتر پایین */}
       <ModianFooter />
     </div>
   );
 }
