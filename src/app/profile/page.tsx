import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import ChangePasswordForm from '@/components/auth/ChangePasswordForm';

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    redirect('/auth/login');
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/api/utils/user-info`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    redirect('/auth/login');
  }

  const user = await res.json();

  return (
    <main className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6 text-sm sm:text-base text-gray-700 space-y-4">
      <h1 className="text-xl font-bold text-center text-blue-700 mb-6">پروفایل کاربر</h1>
      <div className="flex justify-between">
        <span className="font-semibold">نام کامل:</span>
        <span>{user.fullName}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">کد ملی:</span>
        <span>{user.nationalId}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">سطح دسترسی:</span>
        <span>{user.accessLevel}</span>
      </div>
      <ChangePasswordForm />
    </main> 
  );
}
