//src/app/simulators/modian/users-roles/add/layout.tsx

'use client';
import React, { Suspense } from 'react';

export default function UsersRolesAddLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="p-4 text-gray-500">در حال بارگذاری…</div>}>
      {children}
    </Suspense>
  );
}
