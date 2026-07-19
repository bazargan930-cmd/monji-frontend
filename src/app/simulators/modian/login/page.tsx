// src/app/simulators/modian/login/page.tsx
'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';

// نوع داده برای کسب‌وکارها
interface BusinessInfo {
  id: string;
  nationalId: string | null;
  name: string;
}

export default function ModianLoginPage() {
  const router = useRouter();
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const captchaInputRef = useRef<HTMLInputElement>(null);
  
  // State برای فیلدهای عملیاتی
  const [nationalId, setNationalId] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaChars, setCaptchaChars] = useState<Array<{char: string, color: string, rotation: number}>>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [businesses, setBusinesses] = useState<BusinessInfo[]>([]);
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);
  const nationalIdInputRef = useRef<HTMLInputElement>(null);

  // تابع تولید کپچای ۴ کاراکتری تصادفی
  const generateCaptcha = useCallback(() => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    const colors = ['#e11d48', '#0891b2', '#7c3aed', '#db2777', '#059669', '#d97706', '#2563eb'];
    return Array.from({ length: 4 }, () => ({
      char: chars.charAt(Math.floor(Math.random() * chars.length)),
      color: colors[Math.floor(Math.random() * colors.length)],
       rotation: Math.random() * 20 - 10, // چرخش تصادفی بین -10 تا +10 درجه
    }));
  }, []);
 
  // تابع کمکی برای به‌روزرسانی همزمان captchaChars و captchaString
  const updateCaptcha = useCallback((newCaptcha: Array<{char: string, color: string, rotation: number}>) => {
   setCaptchaChars(newCaptcha);
 }, []);

 const captchaString = captchaChars
   .map(c => c.char)
   .join('')
   .toLowerCase();

  // مقداردهی اولیه کپچا هنگام لود شدن صفحه
  useEffect(() => {
    const captcha = generateCaptcha();
    updateCaptcha(captcha);
    // ✅ مقداردهی اولیه captchaInput برای جلوگیری از مقایسه با مقدار خالی
    setCaptchaInput('');
    
    // دریافت لیست کسب‌وکارهای کاربر
    fetchBusinesses();
  }, []);

  // دریافت لیست کسب‌وکارها
  const fetchBusinesses = async () => {
    try {
      const res = await fetch('http://localhost:3001/businesses/me', {
        credentials: 'include',
        cache: 'no-store',
      });
      if (res.ok) {
        const data = await res.json();
        setBusinesses(data);
         } else {
      console.error('[Fetch Businesses] Failed:', res.status, res.statusText);
     }

    } catch (error) {
      console.error('Error fetching businesses:', error);
    }
  };

  // انتخاب کسب‌وکار و پر کردن خودکار فیلدها
  const handleBusinessSelect = (business: BusinessInfo) => {
    if (!business.nationalId) return;

   setNationalId(business.nationalId);

   requestAnimationFrame(() => {
     setShowBusinessDropdown(false);
     passwordInputRef.current?.focus();
   });
  };

  // هندلر ورود
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(''); // پاک کردن خطاهای قبلی    
    setLoading(true);
    
     // ۱. بررسی کپچا در سمت کلاینت (بدون حساسیت به حروف بزرگ/کوچک)
    const input = captchaInput.toLowerCase().trim();
    
    // ✅ مقایسه با captchaString که همیشه sync است

    if (!captchaString || input !== captchaString) {      setLoading(false);
      setErrorMsg('کلمه امنیتی معتبر نیست.');
      const captcha = generateCaptcha();
      updateCaptcha(captcha);
      setCaptchaInput('');
      return;
    }

    // ۲. ارسال به API
    try {
      const res = await fetch('/api/simulators/modian/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ nationalId, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'خطا در ورود');
      }

      // موفقیت: انتقال به پرتال
      router.push('/simulators/modian/otp');
    } catch (err: any) {
      setLoading(false);
      setErrorMsg(err.message || 'نام کاربری و کلمه عبور معتبر نمی باشد.');
      const captcha = generateCaptcha();
      updateCaptcha(captcha);
      setCaptchaInput('');
    }
  };

  // آیکون‌ها (SVG ساده برای جلوگیری از وابستگی خارجی)
  const IconChevron = () => (
    <svg className="w-4 h-4 inline-block rotate-180 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
  );

  return (
    <div className="flex flex-col items-center text-white font-sans relative overflow-hidden">
      
      {/* لوگو اصلی */}
      <div className="mt-12 flex flex-col items-center space-y-2 z-10">
        <div className="w-full max-w-3xl bg-white/10 rounded-lg p-4 text-center z-10">
          {/* تیتر اصلی در یک خط + پرچم */}
          <div className="flex items-center justify-center gap-3">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-white whitespace-nowrap">
              درگاه خدمات الکترونیک سامانه شبیه ساز منجی
            </h1>
            <img 
              src="/images/Iran-flag1.png" 
              alt="پرچم ایران" 
              className="w-auto h-8 md:h-10 lg:h-12 object-contain rounded-sm shadow-sm" 
            />
          </div>
          {/* عبارت پرانتزی در خط بعد - سمت چپ با فونت کوچکتر */}
          <div className="flex justify-end mt-1">
            <span className="text-xs md:text-sm text-white/90">
              (پنجره واحد خدمات منجی)
            </span>
          </div>
        </div>
      </div>

      {/* محتوای اصلی */}
      <div className="flex-1 w-full max-w-7xl flex flex-col lg:flex-row gap-8 p-4 lg:p-8 z-10 mt-8">

        {/* ستون راست: احراز هویت (عملیاتی - فلش‌های قرمز) */}
        <div className="w-full lg:w-1/4 flex flex-col space-y-6">

          <div className="text-center text-sm font-bold border-b border-white/30 pb-2">
            احراز هویت
          </div>

          {/* تب‌های بالا (نمایشی) */}
          <div className="flex gap-1 text-[10px] opacity-60 justify-center">
            <span className="bg-white/20 px-2 py-1 rounded-t cursor-pointer hover:bg-white/30">تغییر شماره همراه</span>
            <span className="bg-white/20 px-2 py-1 rounded-t cursor-pointer hover:bg-white/30">فراموشی کلمه عبور</span>
            <span className="bg-white/20 px-2 py-1 rounded-t cursor-pointer hover:bg-white/30">دریافت اطلاعات کاربری</span>
            <span className="bg-white/40 px-2 py-1 rounded-t font-bold">ورود به درگاه ملی</span>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* فیلد ۱: شناسه ملی */}
            <div className="relative">
              <input 
                ref={nationalIdInputRef}
                type="text" 
                placeholder="شماره ملی/شناسه ملی/شماره فیدا" 
                 className="w-full px-3 py-2.5 rounded-lg bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-center"
                 dir="ltr"
                 autoComplete="off"
                 spellCheck={false}
                 value={nationalId}
                onChange={(e) => {
                  setNationalId(e.target.value);
                  setShowBusinessDropdown(true);
                }}
                onFocus={() => {
                  setShowBusinessDropdown(true);
                }}
                onClick={() => {
                  setShowBusinessDropdown(true);
                }}

                onKeyDown={(e) => {
                  // اگر Shift+Tab بود، اجازه بده به‌طور پیش‌فرض عمل کند (چون فیلد قبلی ندارد)
                  // اگر Tab عادی بود، اجازه بده به‌طور پیش‌فرض به فیلد بعدی (رمز) برود
                }}

                required
              />
              {/* Dropdown لیست کسب‌وکارها */}
              {showBusinessDropdown && businesses.length > 0 && (
              <div 
                className="absolute z-[9999] w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-auto border border-gray-200"
                style={{ top: '100%', left: 0, right: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="py-1">
                  {businesses
                    .filter(b => b.nationalId)
                    .map((business) => (
                      <button
                        key={business.id}
                        type="button"
                        onMouseDown={(e) => {
                           console.log('MOUSEDOWN');
                          e.preventDefault();
                          e.stopPropagation();
                          handleBusinessSelect(business);
                        }}
                        className="w-full px-3 py-2 text-right text-sm text-gray-800 hover:bg-gray-100 border-b border-gray-100 last:border-0"
                      >
                        <div className="font-semibold">{business.nationalId}</div>
                        {business.name && (
                          <div className="text-xs text-gray-500 truncate">{business.name}</div>
                        )}
                      </button>
                    ))}
                </div>
              </div>
            )}
            </div>

            {/* فیلد ۲: کلمه عبور */}
            <div className="relative">
              <input 
                ref={passwordInputRef}
                type={showPassword ? 'text' : 'password'} 
                placeholder="کلمه عبور" 
                className="w-full px-3 py-2.5 rounded-lg bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-center"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Tab' && !e.shiftKey) {
                    e.preventDefault();
                    captchaInputRef.current?.focus();
                  }
                }}
                required
              />
              {/* آیکون نمایش/مخفی کردن رمز */}
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-3 text-gray-500 cursor-pointer hover:text-gray-700"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* فیلد ۳: کپچا - تصویر بالا، ورودی پایین */}
            <div className="space-y-2">
              {/* تصویر کپچا با حروف رنگی */}
              <div 
                className="w-full h-[50px] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative select-none cursor-pointer"
                onClick={() => {
                  const captcha = generateCaptcha();
                  updateCaptcha(captcha);
                  setCaptchaInput('');
                  setErrorMsg('');
                }}
             
                title="برای تغییر کلیک کنید"
              >
                <div
                  dir="ltr"
                  className="flex items-center justify-center gap-1"
                >
                  {captchaChars.map((item, index) => (
                  <span
                    key={index}
                    className="text-3xl font-serif font-bold select-none"
                    style={{ 
                      color: item.color,
                      transform: `rotate(${item.rotation}deg)`,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    {item.char}
                  </span>
                ))}
                </div>
                {/* دکمه رفرش بزرگتر و خاکستری */}
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={(e) => {
                    e.stopPropagation();
                   const captcha = generateCaptcha();
                    updateCaptcha(captcha);
                    setCaptchaInput('');
                    setErrorMsg('');
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  title="تغییر کپچا"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
              {/* فیلد ورود کپچا */}
              <input 
                ref={captchaInputRef}
                type="text" 
                placeholder="تصویر امنیتی" 
                dir="ltr"
                className="
                w-full
                px-3
                py-2.5
                rounded-lg
                bg-white
                text-gray-800
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-400
                text-center
                tracking-wider
                "
                style={{
                 direction: 'ltr',
                 unicodeBidi: 'plaintext'
                }}
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Tab') {
                    e.preventDefault();
                    if (e.shiftKey) {
                      // Shift+Tab: برگشت به فیلد رمز عبور
                      passwordInputRef.current?.focus();
                    } else {
                      // Tab عادی: برگشت به فیلد شناسه ملی (حلقه‌ای)
                      nationalIdInputRef.current?.focus();
                    }
                  }
                }}
                required
              />
            </div>

            {/* پیام خطا (بیضی شکل باریک - مطابق اسکرین‌شات) */}
            {errorMsg && (
              <div className="bg-amber-100/90 text-amber-800 text-center py-1 px-2 rounded-full text-xs font-medium shadow-sm border border-amber-200">
                {errorMsg}
              </div>
            )}

            {/* دکمه ورود */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold transition-colors shadow-lg shadow-purple-900/50 disabled:opacity-50 disabled:cursor-not-allowed"
              tabIndex={-1} // ✅ دکمه ورود از ترتیب Tab حذف شود            
            >
              {loading ? 'در حال پردازش...' : 'ورود به درگاه ملی'}
            </button>
          </form>

          {/* دکمه‌های پایینی (نمایشی) */}
          <div className="space-y-2 pt-4">
            <button className="w-full py-2 rounded-lg bg-green-900/80 hover:bg-green-800 text-xs font-bold transition-colors border border-green-700">
              ورود از طریق دولت من ویژه اشخاص حقیقی
            </button>
            <button className="w-full py-2 rounded-lg bg-green-900/80 hover:bg-green-800 text-xs font-bold transition-colors border border-green-700">
              ورود از طریق دولت من ویژه اشخاص حقوقی
            </button>
          </div>

        </div>
        
        {/* ستون وسط: ملاحظات (نمایشی) */}
        <div className="w-full lg:w-1/2 text-center space-y-4 mt-4 lg:mt-0">
            <div className="text-sm font-bold border-b border-white/30 pb-2 inline-block">ملاحظات</div>
            <p className="text-xs leading-7 text-justify opacity-90">
                <span className="block mb-2">• هر ایرانی امکان مراجعه به این درگاه و دسترسی به اطلاعات مالیاتی (و حتی اگر مودی نباشد) را دارد.</span>
                <span className="block mb-2">• دریافت اطلاعات کاربری برای تمامی افراد از طریق شماره/شناسه ملی (و برای اتباع غیر ایرانی از طریق شماره فیدا) می‌باشد.</span>
                <span className="block mb-2">• از در اختیار قرار دادن کلمه عبور به شخص ثالث جدا پرهیز نمایید. مسئولیت ناشی از این موضوع بر عهده شما می باشد.</span>
                <span className="block">• دسترسی به تمامی خدمات الکترونیک از طریق همین پنجره می‌باشد.</span>
            </p>
        </div>

        {/* ستون چپ: دسترسی سریع (نمایشی) */}
        <div className="w-full lg:w-1/4 space-y-4 opacity-80 hover:opacity-100 transition-opacity">
          <div className="border-b border-white/30 pb-2 text-center font-bold text-sm mb-4">
            دسترسی سریع
          </div>
          {[
            'پرداخت الکترونیک',
            'میز خدمت عملیات الکترونیک مالیاتی',
            'پایگاه خبری سازمان امور مالیاتی کشور',
            'ثبت شکایت و ارتباط با سازمان',
            'پنجره ملی خدمات دولت هوشمند',
            'سوالات متداول'
          ].map((item, idx) => (
            <button key={idx} className="block w-full text-right px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs border border-white/10 backdrop-blur-sm flex items-center justify-between group">
              <span>{item}</span>
              <span className="transform group-hover:-translate-x-1 transition-transform">❮</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* افکت پس‌زمینه (نورپردازی) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-green-900/40 to-transparent pointer-events-none" />
    </div>
  );
}