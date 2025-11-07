//src\app\simulators\modian\login\page.tsx
// این صفحه Server Component است و گزینه‌های سروری را در همین فایل ست می‌کنیم
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import { Suspense } from 'react';
import { ModianLoginForm } from '@/components/modian/auth';

export default function ModianLoginPage() {
  return (
    <Suspense fallback={<div className="p-4">در حال بارگذاری…</div>}>
      <ModianLoginForm />
    </Suspense>
  );
}
