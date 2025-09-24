//src/app/simulators/modian/portal/page.tsx

import { cookies, headers } from 'next/headers';
import ModianShell from '@/components/layout/ModianShell';
import ModianPortal from '@/components/modian/ModianPortal';
import { redirect } from 'next/navigation';

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  // ساختن baseUrl با fallback به host جاری (برای زمانی که NEXT_PUBLIC_SITE_URL تعریف نشده است)
  const hdrs = await headers();
  const host = hdrs.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/utils/user-info`, {
    method: 'GET',
    headers: {
      ...(token ? { Cookie: `accessToken=${token}` } : {}),
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    return redirect('/simulators/modian/login');
  }

  const user = await res.json();

  return (
    <ModianShell>
      <ModianPortal user={user} />
    </ModianShell>
  );
}
