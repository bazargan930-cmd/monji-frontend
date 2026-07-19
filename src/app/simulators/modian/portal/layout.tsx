//src/app/simulators/modian/portal/layout.tsx

'use client';
import React, { Suspense } from 'react';
import {
  ModianFooter,
  ModianHeader,
  ModianSidebar,
  ModianSubHeader,
} from '@/features/modian';

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="modian-theme min-h-screen flex flex-col bg-gray-50">
      {/* هدر بالا */}
      <ModianHeader />
      
      {/* ساب‌هدر + بدنه زیر یک مرز Suspense */}
      <Suspense fallback={<div className="p-4 text-gray-500">در حال بارگذاری…</div>}>
        {/* ساب‌هدر: چسبیده به هدر و تمام‌عرض */}
        <div className="w-full bg-white border-y">
          <ModianSubHeader />
        </div>
        
        {/* بدنه: سایدبار راست و محتوای صفحه با فاصله مناسب */}
        <div className="flex-1 w-full max-w-none px-4 py-4">
          <div className="flex w-full gap-6">
            
            {/* محتوای وسط */}
            <main className="flex-1 min-w-0">
              {children}
            </main>
          </div>
        </div>
      </Suspense>
      
      {/* فوتر پایین */}
      <ModianFooter />
    </div>
  );
}
