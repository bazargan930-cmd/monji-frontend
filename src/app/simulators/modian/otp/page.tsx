// src/app/simulators/modian/otp/page.tsx

'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ModianFooter } from '@/features/modian';

export default function ModianOtpPage() {
  const router = useRouter();
  const [otpCode, setOtpCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState(''); // کد تولید شده
  const [timeLeft, setTimeLeft] = useState(360); // 6 دقیقه = 360 ثانیه
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // تولید کد 6 رقمی رندوم هنگام لود صفحه
  useEffect(() => {
    const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6 رقم رندوم
    setGeneratedCode(code);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      // زمان تمام شد - بازگشت به صفحه لاگین
      router.push('/simulators/modian/login');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, router]);

  // محاسبه درصد پیشرفت (از 100% به 0%)
  const progressPercent = (timeLeft / 360) * 100;

  // فرمت کردن زمان به MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    // TODO: اعتبارسنجی OTP
    setErrorMsg('');
    setIsSubmitting(true);
    
    // شبیه‌سازی تأخیر سرور
    setTimeout(() => {
      if (otpCode === generatedCode) {
        // کد صحیح است - به پرتال می‌رویم
        router.push('/simulators/modian/portal');
      } else {
        setErrorMsg('امکان احراز هویت با این مشخصات مقدور نمی‌باشد.');
        setIsSubmitting(false);
      }
    }, 1000);
  };

  const handleCancel = () => {
    router.push('/simulators/modian/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#021a0f] via-[#064e3b] to-[#022c22] text-white font-sans relative overflow-hidden">
      {/* لوگو اصلی - مشابه صفحه لاگین */}
      <div className="mt-8 flex flex-col items-center space-y-2 z-10">
      </div>

      {/* محتوای اصلی */}
      <div className="flex-1 flex flex-col lg:flex-row-reverse items-start justify-start pt-12 pb-20 z-10 gap-8 px-4">
        {/* ستون چپ: نمایش موبایل */}
        <div className="hidden lg:flex flex-col items-center order-1">
          {/* قاب موبایل */}
          <div className="relative w-72 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
            {/* ناچ بالای موبایل */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl" />
            
            {/* صفحه نمایش */}
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
              {/* هدر پیامک */}
              <div className="bg-gray-100 p-4 text-center border-b">
                <div className="text-xs text-gray-500">پیامک از سامانه مودیان</div>
              </div>
              
              {/* محتوای پیامک */}
              <div className="flex-1 p-4 flex flex-col">
                <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800 text-sm leading-relaxed text-right">
                    <span className="block">
                        سامانه شبیه ساز منجی
                    </span>
                    کاربر گرامی، کد محرمانه زیر را جهت ورود به پنجره واحد خدمات منجی وارد نمایید:
                    <br />
                    کد رمز:
                  </p>
                  <div className="mt-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 tracking-widest bg-white py-3 px-6 rounded-lg shadow-sm border-2 border-blue-200">
                      {generatedCode || '------'}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    این کد به مدت ۶ دقیقه معتبر است
                  </p>
                </div>
              </div>
              
              {/* زمان پیامک */}
              <div className="p-3 bg-gray-50 text-center text-xs text-gray-400 border-t">
                {new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            
            {/* دکمه Home */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full" />
          </div>
          
          {/* برچسب */}
          <div className="mt-4 text-sm text-gray-300">
            <i className="fa-solid fa-mobile-screen ms-2" />
            پیامک ارسالی به تلفن همراه
          </div>
        </div>
        
        {/* ستون چپ: فرم و دکمه‌ها */}
        <div className="flex-1 flex flex-col items-center order-2">
          {/* کادر متن راهنما */}
          <div className="w-full max-w-2xl bg-white text-gray-900 rounded-lg p-6 mb-6 text-center shadow-lg">

          <p className="text-sm md:text-base leading-relaxed">
            خواهشمند است رمز یکبار مصرف شش رقمی که از طریق پیامک برای تلفن همراه شما ارسال شده است، در کادر زیر ثبت نمایید.
          </p>
        </div>

        {/* فیلد ورود OTP */}
        <div className="w-full max-w-2xl relative mb-2">
          <input
            type="text"
            value={otpCode}
            onChange={(e) => {
              // فقط اعداد و حداکثر 6 رقم
              const value = e.target.value.replace(/\D/g, '').slice(0, 6);
              setOtpCode(value);
              setErrorMsg(''); // پاک کردن خطا هنگام تایپ              
            }}
            placeholder="کد پیامک شده"
            className="w-full px-4 py-3 text-center text-lg rounded-t-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-800"
            maxLength={6}
          />
          
          {/* نوار شمارنده */}
          <div className="relative h-6 bg-gray-200 rounded-b-lg overflow-hidden">
            {/* نوار پیشرفت - از راست به چپ */}
            <div
              className="absolute top-0 left-0 h-full transition-all duration-1000 ease-linear"
              style={{
                width: `${progressPercent}%`,
                background: `linear-gradient(90deg, 
                  rgba(59, 130, 246, 0.3) 0%, 
                  rgba(59, 130, 246, 0.6) 50%, 
                  #3b82f6 100%)`,
              }}
            />
            {/* نمایش زمان */}
            <div
            className="absolute top-0 h-full flex items-center px-3 transition-all duration-1000 ease-linear"
            style={{
              left: `${progressPercent}%`,
              transform: 'translateX(-100%)',
            }}
          >
            <span className="text-sm font-semibold text-wight drop-shadow-sm">
              {formatTime(timeLeft)}
            </span>
          </div>
          </div>
        </div>

          {/* پیام خطا */}
          {errorMsg && (
            <div className="w-full max-w-2xl bg-red-600 text-white text-center py-2 px-4 rounded-lg mt-4 shadow-lg">
              <p className="text-sm">{errorMsg}</p>
            </div>
          )}

        {/* دکمه‌ها - راست‌چین */}
        <div className="w-full max-w-2xl flex justify-start gap-3 mt-6">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-2.5 bg-blue-400 hover:bg-blue-400 text-white rounded-lg font-semibold transition-colors shadow-md"
          >
            تایید
          </button>
          <button
            onClick={handleCancel}
            className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors shadow-md"
          >
            انصراف
          </button>
        </div>  
        </div>
      </div>

      {/* فوتر */}
      <div className="login-footer-wrapper">
        <style>{`
          .login-footer-wrapper footer {
            background-color: rgba(20, 83, 45, 0.4) !important; /* green-900/40 */
            border-color: rgba(74, 222, 128, 0.3) !important;   /* green-400/30 */
            color: rgba(255, 255, 255, 0.9) !important;
          }
          .login-footer-wrapper footer p {
            color: rgba(255, 255, 255, 0.9) !important;
          }
        `}</style>
        <ModianFooter />
      </div>

      {/* افکت پس‌زمینه */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-green-900/40 to-transparent pointer-events-none" />
    </div>
  );
}