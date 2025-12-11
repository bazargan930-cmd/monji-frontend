//src/components/modian/taxfile/layout.tsx
'use client';
import React from 'react';

import { ModianSubHeader } from '@/components/modian';
import { ModianSidebar } from '@/components/modian';
import { TaxfileSubmenu } from '@/components/modian';

export default function TaxfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <ModianSubHeader />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-4">
          {/* ستون راست (سایدبار اصلی) */}
          <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
            <ModianSidebar />
          </div>

          {/* محتوای میانی + زیرمنوی پرونده سمت راست داخلی */}
          <div className="col-span-12 lg:col-span-9 order-1 lg:order-2">
            <div className="grid grid-cols-12 gap-4">
              {/* زیرمنوی این بخش */}
              <div className="col-span-12 md:col-span-4">
                <TaxfileSubmenu />
              </div>
              {/* محتوای صفحه‌های داخلی */}
              <div className="col-span-12 md:col-span-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
