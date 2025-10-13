//src/components/landing/HowItWorks.tsx
'use client';
import { memo } from 'react';

const steps = [
  {
    n: '۱',
    title: 'دمو را اجرا کن',
    desc: 'بدون ثبت‌نام، همین حالا محیط شبیه‌ساز را باز کن و حس کار واقعی را بگیر.',
  },
  {
    n: '۲',
    title: 'ثبت‌نام کن و ادامه بده',
    desc: 'برای ذخیرهٔ پیشرفت و دسترسی به تمام سناریوها، یک حساب رایگان بساز یا وارد شو.',
  },
  {
    n: '۳',
    title: 'گواهی بگیر',
    desc: 'پس از تکمیل سناریوها در حساب کاربری‌ات، گزارش عملکرد و گواهی قابل‌ارائه دریافت کن.',
  },
];

function HowItWorksImpl() {
  return (
    <section id="how-it-works" aria-label="چطور کار می‌کند؟" className="w-full bg-white">
      <div className="container mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-center mb-10">چطور کار می‌کند؟</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl bg-gray-50 border border-gray-200 p-6 text-right shadow-sm"
            >
              <span className="absolute -top-3 -left-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-extrabold shadow-md">
                {s.n}
              </span>
              <div className="text-lg font-extrabold text-slate-800 mb-2">{s.title}</div>
              <p className="text-sm leading-6 text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
        <p className="text-center text-xs text-slate-500 mt-6">
          * نکته: برای صدور گواهی و ذخیرهٔ پیشرفت، ورود/ثبت‌نام الزامی است.
        </p>
      </div>
    </section>
  );
}

export default memo(HowItWorksImpl);
