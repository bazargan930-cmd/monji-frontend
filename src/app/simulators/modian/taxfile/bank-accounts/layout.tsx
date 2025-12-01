// src/app/simulators/modian/taxfile/bank-accounts/layout.tsx
import { Suspense } from 'react';
import type { ReactNode } from 'react';

export default function BankAccountsLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div className="p-4 text-gray-500">در حال بارگذاری…</div>}>
      {children}
    </Suspense>
  );
}
