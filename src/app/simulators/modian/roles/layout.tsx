//src/app/simulators/modian/roles/layout.tsx
'use client';

import React, { Suspense } from 'react';

export default function RolesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div className="p-4 text-gray-500">در حال بارگذاری…</div>}>
      {children}
    </Suspense>
  );
}
