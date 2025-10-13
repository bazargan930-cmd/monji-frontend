// src/app/auth/signin/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SigninPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\D/g, '');
    return (
      cleaned.length === 11 &&
      /^09\d{9}$/.test(cleaned)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!isValidPhone(phone)) {
      setError('شماره موبایل معتبر نیست');
      setIsSubmitting(false);
      return;
    }

    if (password.length < 8) {
      setError('رمز عبور باید حداقل ۸ کاراکتر باشد');
      setIsSubmitting(false);
      return;
    }

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';
      const res = await fetch(`${apiBase}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // ✅ ضروری برای آینده
        body: JSON.stringify({ phone, password }),
      });

      const ct = res.headers.get('content-type') || '';
      if (!res.ok) {
        let msg = 'ورود ناموفق بود';
        try {
          if (ct.includes('application/json')) {
            const err = await res.json();
            const m = Array.isArray(err?.message) ? err.message.join('، ') : err?.message;
            msg = m || err?.error || res.statusText;
          } else {
            msg = await res.text();
          }
        } catch {}
        throw new Error(msg);
      }
      // موفقیت: اگر پاسخ JSON است بخوان
      const data = ct.includes('application/json') ? await res.json() : null;

      // ✅ کوکی صادر شد — به next یا داشبورد برو
      const next = new URLSearchParams(window.location.search).get('next') ?? '/dashboard';
      router.replace(next);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white border rounded-xl p-6 mt-12 shadow-lg">
      <h1 className="text-lg font-bold mb-4 text-center text-blue-700">ورود به تراز</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            placeholder="رمز عبور خود را وارد کنید"
          />
        </div>
        {error && <div className="text-sm text-red-500 mt-2">{error}</div>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-4 disabled:opacity-70 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              در حال ورود...
            </>
          ) : (
            'ورود'
          )}
        </button>
        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">حساب کاربری ندارید؟ </span>
          <Link href="/auth/signup" className="text-blue-600 hover:underline font-medium text-sm">
            ثبت‌نام
          </Link>
        </div>
      </form>
    </div>
  );
}