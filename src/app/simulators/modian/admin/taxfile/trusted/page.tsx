// src/app/simulators/modian/admin/taxfile/trusted/page.tsx
'use client';

import TrustedCompaniesPage from '@/components/modian/taxfile/trusted-companies/page';

export default function Page() {
  return (
    <section className="bg-white border rounded-lg shadow p-4 w-full">
      <TrustedCompaniesPage />
    </section>
  );
}
