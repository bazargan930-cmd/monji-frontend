//src/app/simulators/modian/portal/page.tsx

import { cookies } from 'next/headers';
import ModianShell from '@/components/layout/ModianShell';
import ModianPortal from '@/components/modian/ModianPortal';
import { redirect } from 'next/navigation';

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/utils/user-info`, {
    method: 'GET',
    headers: {
      Cookie: `accessToken=${token}`,
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
