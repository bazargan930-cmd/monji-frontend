import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/auth/login');
  }

  // ارسال درخواست به بک‌اند NestJS (فرض بر این است که 3001 API Nest است)
  const resUser = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/api/utils/user-info`, {
    credentials: 'include',
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: 'no-store',
  });

  if (!resUser.ok) {
    redirect('/auth/login');
  }

  const user = await resUser.json();
  const allowedLevels = ['NORMAL', 'PRO', 'VIP', 'ADMIN'];

  if (!allowedLevels.includes(user.accessLevel)) {
    redirect('/auth/login');
  }

  // می‌توان ادامه داد به نمایش داشبورد
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎛 داشبورد شبیه‌سازها</h1>
      {/* ادامه نمایش شبیه‌سازها */}
    </main>
  );
}
