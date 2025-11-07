//src\components\modian\auth\ModianLoginForm.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaLock, FaStarOfLife } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa';

export default function ModianLoginForm() {
  const [nationalId, setnationalId] = useState('');
  const [password, setPassword] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [expectedResult, setExpectedResult] = useState(0);
  const [error, setError] = useState('');
  // اگر ادمین باشد، فرم نمایش داده نشود
  const [isAdmin, setIsAdmin] = useState<null | boolean>(null);
  const router = useRouter();
  const bypassRedirected = useRef(false); // جلوگیری از ریدایرکت چندباره

  // ⛳️ کوکی سبک برای علامت‌گذاری «ورود از بایپس ادمین» (Dev فقط)
  // دلیل: پورتال/میان‌افزار در SSR به sessionStorage دسترسی ندارد و فقط کوکی‌ها را می‌بیند.
  const markAdminBypassCookie = () => {
    try {
      document.cookie = `modian_bypass=1; Max-Age=120; Path=/; SameSite=Lax`;
      document.cookie = `justLoggedIn=1; Max-Age=120; Path=/; SameSite=Lax`;
    } catch {}
  };
  useEffect(() => {
  generateCaptcha();
}, []);

  // ⛳️ بایپس لاگین برای ادمین
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch('/api/utils/user-info', {
          credentials: 'include',
          cache: 'no-store',
        });
        if (!r.ok) return setIsAdmin(false);
        const u = await r.json();
        const level = u?.accessLevel ?? u?.user?.accessLevel ?? u?.role ?? '';
        if (String(level).toUpperCase() === 'ADMIN') {
          setIsAdmin(true);
          // فلگ سشن مانند لاگین عادی تا پورتال بداند از لاگین آمده‌ایم
          if (!bypassRedirected.current && window.location.pathname.endsWith('/login')) {
            bypassRedirected.current = true;
            try { window.sessionStorage.setItem('justLoggedIn', 'true'); } catch {}
            markAdminBypassCookie();                              // ✅ اضافه شد
            try { router.prefetch('/simulators/modian/portal'); } catch {}
            router.replace('/simulators/modian/portal');          // ریدایرکت بدون بازگشت
            }
        } else {
          setIsAdmin(false);
        }
      } catch {
        setIsAdmin(false);
      }
    })();
  }, [router]);

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 90) + 10;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setNum1(n1);
    setNum2(n2);
    setExpectedResult(n1 + n2);
    setCaptchaAnswer('');
  };

const handleLogin = async () => {
  setError('');
  
  if (!nationalId.trim()) return setError('کد ملی وارد نشده است');
  if (!password.trim()) return setError('کلمه عبور وارد نشده است');
  if (!captchaAnswer.trim()) return setError('تصویر امنیتی وارد نشده است');
  if (parseInt(captchaAnswer) !== expectedResult) return setError('کد امنیتی اشتباه است');

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: nationalId, password }),
      credentials: 'include',
    });

    if (!res.ok) {
      const { error } = await res.json();
      throw new Error(error || 'ورود ناموفق بود');
    }

    const data = await res.json(); // ❗️ خیلی مهم

    // ذخیره وضعیت لاگین موقت
    window.sessionStorage.setItem('justLoggedIn', 'true');

    // ریدایرکت به مسیر مشخص‌شده در پاسخ
    setTimeout(() => {
      router.push(data.redirect || '/simulators/modian/portal');
    }, 500);

  } catch (err: any) {
    setError(err.message);
  }
};

  // در حال بررسی نقش یا هدایت ادمین → فرم را نمایش نده
  if (isAdmin === null || isAdmin === true) {
    return <div className="w-full max-w-sm mx-auto p-6 text-center text-gray-500">در حال هدایت…</div>;
  }

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-[420px] flex justify-center items-start mx-auto">
      <div className="relative w-full bg-white border border-gray-200 rounded-xl shadow-lg min-h-[600px] flex flex-col justify-start pt-8">
        <div className="px-6 pt-8 flex flex-col items-center space-y-6">

          {/* فیلد کد ملی */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="شماره ملی / شناسه ملی"
              value={nationalId}
              onChange={(e) => setnationalId(e.target.value)}
              className="text-right text-sm h-9 w-full pr-8 border-b border-gray-400 placeholder:text-gray-500 focus:outline-none"
            />
            <span className="absolute right-2 top-2/3 -translate-y-1/2 text-gray-400 text-sm">
              <FaUser />
            </span>
          </div>

          {/* فیلد رمز */}
          <div className="relative w-full">
            <input
              type="password"
              placeholder="کلمه عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-right text-sm h-9 w-full pr-8 border-b border-gray-400 placeholder:text-gray-500 focus:outline-none"
            />
            <span className="absolute right-2 top-2/3 -translate-y-1/2 text-gray-400 text-sm">
              <FaLock />
            </span>
          </div>

          {/* کپچا */}
          <div className="w-full">
            <div className="flex justify-between items-center text-sm mb-1">
              <img
                src="/images/refresh-icon.png"
                onClick={generateCaptcha}
                alt="تولید مجدد"
                className="w-4 h-4 cursor-pointer hover:opacity-80"
              />
              <span>? = <b>{num2}</b> + <b>{num1}</b></span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="حاصل عبارت را وارد کنید"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                className="text-right text-sm h-9 w-full pr-8 border-b border-gray-400 placeholder:text-gray-500 focus:outline-none"
              />
              <span className="absolute right-2 top-2/3 -translate-y-1/2 text-gray-400 text-sm">
                <FaStarOfLife />
              </span>
            </div>
          </div>

          {error && <p className="text-sm text-red-500 text-center w-full">{error}</p>}
        </div>

        {/* دکمه ورود */}
        <div className="mt-10 px-6 flex justify-end">
          <button
            onClick={handleLogin}
            type="button"
            className="w-full h-12 flex items-center justify-between flex-row-reverse rounded-full border border-gray-300 bg-white px-4 cursor-pointer hover:bg-gray-50 transition"
          >
            <span className="text-lg text-gray-500">
              <FaAngleLeft />
            </span>
            <span className="text-blue-600 text-sm font-medium">ورود به سامانه</span>
          </button>

        </div>

        {/* دکمه‌های دولت من */}
        <div className="mt-10 px-6 space-y-2 text-center text-xs text-gray-400">
          <button className="w-full py-2 border border-gray-200 bg-gray-100 rounded cursor-not-allowed">ورود از طریق دولت من (ویژه اشخاص حقیقی)</button>
          <button className="w-full py-2 border border-gray-200 bg-gray-100 rounded cursor-not-allowed">ورود از طریق دولت من (ویژه اشخاص حقوقی)</button>
        </div>
      </div>
    </div>
  );
}
