//src/app/simulators/modian/portal/page.tsx

import { headers } from 'next/headers';
import { Suspense } from 'react';
import ModianPortal from '@/components/modian/ModianPortal';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Page() {

  // ساختن baseUrl با fallback به host جاری (برای زمانی که NEXT_PUBLIC_SITE_URL تعریف نشده است)
  const hdrs = await headers();
  const host = hdrs.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `${protocol}://${host}`;

  // 🔁 پاس‌ترو کامل هدر کوکی جاری (access_token و ... را حمل می‌کند)
  const cookieHeader = hdrs.get('cookie') ?? '';
  const res = await fetch(`${baseUrl}/api/utils/user-info`, {
    method: 'GET',
    headers: { cookie: cookieHeader },
    cache: 'no-store',
  });

  if (!res.ok) {
    return redirect('/simulators/modian/login');
  }

  const user = (await res.json()) as any;

  return (
    <Suspense fallback={<div className="p-4 text-gray-500">در حال بارگذاری…</div>}>
        <ModianPortal user={user} />
    </Suspense>
  );
}
