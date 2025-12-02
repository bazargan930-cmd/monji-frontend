// src/app/auth/signup/page.tsx
'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isValidPhone = (phone: string): boolean => {
  // حذف تمام کاراکترهای غیر عددی
  const cleaned = phone.replace(/\D/g, '');
  // بررسی طول و شروع
  return (
    cleaned.length === 11 && // ۱۱ رقم (09 + 9 رقم)
    /^09\d{9}$/.test(cleaned) // شروع با 09 و 9 رقم بعد از آن
  );
};
 const isLatinOnly = (str: string): boolean => {
   return /^[\x20-\x7E]*$/.test(str); // فقط کاراکترهای قابل چاپ ASCII (فضا تا ~)
 };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // اعتبارسنجی‌ها
    if (!fullName.trim()) {
        setError('نام و نام خانوادگی الزامی است');
        return;
    }
    if (!isValidPhone(phone)) {
      setError('شماره موبایل معتبر نیست');
      return;
    }
    if (password.length < 8) {
        setError('رمز عبور باید حداقل ۸ کاراکتر باشد');
        return;
    }
    if (!isLatinOnly(password)) {
       setError('رمز عبور فقط می‌تواند شامل حروف و نمادهای انگلیسی باشد');
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

    setIsSubmitting(true);
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';
      const res = await fetch(`${apiBase}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          fullName,
          phone: phone.replace(/\D/g, ''), // نرمال‌سازی
          password,
        }),
      });
      const ct = res.headers.get('content-type') || '';
      if (!res.ok) {
        let msg = 'خطای نامشخص';
        try {
          if (ct.includes('application/json')) {
            const data = await res.json();
            const m = Array.isArray(data?.message) ? data.message.join('، ') : data?.message;
            msg = m || data?.error || res.statusText;
          } else {
            msg = await res.text();
          }
        } catch {}
        setError(msg);
        return;
      }
      // موفقیت
      setShowSuccessModal(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'ثبت‌نام ناموفق بود';
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
    };

  return (
    <div className="max-w-md mx-auto bg-white border rounded-xl p-6 mt-12 shadow-lg">
      <h1 className="text-lg font-bold mb-4 text-center text-blue-700">ثبت‌نام در منجی</h1>
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
        {showSuccessModal && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
           <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
             <h3 className="text-lg font-bold text-green-600 mb-4">ثبت‌نام شما با موفقیت انجام شد</h3>
             <button
               onClick={() => router.push('/auth/signin')}
               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium"
             >
               تایید
             </button>
           </div>
         </div>
       )}
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
              در حال ثبت‌نام...
            </>
          ) : (
            'ثبت‌نام'
          )}
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
