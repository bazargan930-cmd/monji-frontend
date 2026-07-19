// src/app/simulators/modian/invoices/layout.tsx
import React from 'react';

export default function InvoicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 md:p-6">
      {children}
    </div>
  );
}
