// src/app/auth/login/page.tsx


import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginForm from '@/components/auth/LoginForm';

export default async function LoginPage() {
  const cookieStore = await cookies(); // ✅ اضافه‌شدن await
  const token = cookieStore.get('accessToken')?.value;

  if (token) {
    redirect('/dashboard'); // یا مسیر دلخواه شما
  }

  return <LoginForm />;
}
