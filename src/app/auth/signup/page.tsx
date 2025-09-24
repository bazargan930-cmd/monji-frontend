// src/app/auth/signup/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // اعتبارسنجی‌ها
    if (!fullName.trim()) {
        setError('نام و نام خانوادگی الزامی است');
        return;
    }
    if (!/^(09|\+989)\d{9}$/.test(phone)) {
        setError('شماره موبایل معتبر نیست');
        return;
    }
    if (password.length < 8) {
        setError('رمز عبور باید حداقل ۸ کاراکتر باشد');
        return;
    }
    if (password !== confirmPassword) {
        setError('رمز عبور و تکرار آن یکسان نیستند');
        return;
    }
    if (!acceptTerms) {
        setError('پذیرش قوانین الزامی است');
        return;
    }

    setIsSubmitting(true); // ✅ فعال کردن لودینگ

    try {
        const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fullName,
            phone,
            password,
        }),
        });

        let data;
        try {
        data = await res.json();
        } catch (jsonError) {
        throw new Error('خطای نامشخص از سرور');
        }

        if (!res.ok) {
        throw new Error(data?.error || 'ثبت‌نام ناموفق بود');
        }

        setSuccess('ثبت‌نام با موفقیت انجام شد. در حال انتقال به صفحه ورود...');
        setTimeout(() => {
        router.push('/auth/signin');
        }, 1500);
    } catch (err: any) {
        setError(err.message);
    } finally {
        setIsSubmitting(false); // ✅ غیرفعال کردن لودینگ — حتی در صورت خطا
    }
    };

    if (success) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
                <div className="animate-pulse flex flex-col items-center">
                <div className="w-16 h-16 bg-green-200 rounded-full mb-4"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
            </div>
            </div>
        );
        }

  return (
    <div className="max-w-md mx-auto bg-white border rounded-xl p-6 mt-12 shadow-lg">
      <h1 className="text-lg font-bold mb-4 text-center text-blue-700">ثبت‌نام در تراز</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">نام و نام خانوادگی</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="مثلاً: علی رضایی"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">شماره تلفن همراه</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="09123456789"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">رمز عبور</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="حداقل ۸ کاراکتر"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">تکرار رمز عبور</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="رمز عبور را دوباره وارد کنید"
          />
        </div>
        <div className="flex items-start">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="mr-2 text-sm text-gray-700">
            <span className="text-red-500">*</span> قوانین و مقررات سایت را می‌پذیرم.
          </label>
        </div>
        {error && <div className="text-sm text-red-500 mt-2">{error}</div>}
        {success && <div className="text-sm text-green-600 mt-2">{success}</div>}
        <button
          type="submit"
          disabled={isSubmitting} // ✅ غیرفعال کردن دکمه در حالت لودینگ
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-4 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              در حال ثبت‌نام...
            </span>
          ) : 'ثبت‌نام'}
        </button>
        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">قبلاً ثبت‌نام کرده‌اید؟ </span>
          <Link href="/auth/signin" className="text-blue-600 hover:underline font-medium text-sm">
            ورود
          </Link>
        </div>
      </form>
    </div>
  );
}