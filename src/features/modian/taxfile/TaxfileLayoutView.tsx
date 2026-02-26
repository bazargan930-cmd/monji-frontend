//src/features/modian/taxfile/TaxfileLayoutView.tsx
'use client';
import React from 'react';

export default function TaxfileLayoutView({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* محتوای صفحه‌های داخلی */}
      <div className="col-span-12 md:col-span-8">
        {children}
      </div>
    </div>
  );
}