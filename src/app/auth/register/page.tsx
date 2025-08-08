//src\app\auth\register\page.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    if (!fullName.trim() || !phone.trim() || !password.trim()) {
      setError('همه فیلدها الزامی هستند');
      return;
    }

    if (password !== confirmPassword) {
      setError('رمز عبور و تکرار آن یکسان نیستند');
      return;
    }

    try {
      const res = await fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          password,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.error || 'ثبت‌نام ناموفق بود');
      }

      setSuccess('ثبت‌نام با موفقیت انجام شد. اکنون وارد می‌شوید...');
      setTimeout(() => {
        router.push('/auth/login');
      }, 1500);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white border rounded-xl p-6 mt-12 shadow-lg">
      <h1 className="text-lg font-bold mb-4 text-center text-blue-700">ثبت‌نام کاربر جدید</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">نام و نام خانوادگی</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">شماره تلفن همراه</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">رمز عبور</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">تکرار رمز عبور</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm"
          />
        </div>

        {error && <div className="text-sm text-red-500 mt-2">{error}</div>}
        {success && <div className="text-sm text-green-600 mt-2">{success}</div>}

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-4"
        >
          ثبت‌نام
        </button>
      </div>
    </div>
  );
}
