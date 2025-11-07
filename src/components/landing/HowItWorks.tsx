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
              {/* اسکرین‌شات کوچک (SVG سبک؛ جایگزین تصویر واقعی در آینده) */}
              <div className="mb-4">
                <div
                  className="w-full aspect-video rounded-xl border border-gray-200 bg-white overflow-hidden"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 320 180" className="w-full h-full">
                    <rect x="0" y="0" width="320" height="180" fill="#f8fafc" />
                    <rect x="16" y="16" width="288" height="24" rx="6" fill="#e2e8f0" />
                    <rect x="16" y="56" width="180" height="12" rx="6" fill="#cbd5e1" />
                    <rect x="16" y="76" width="220" height="12" rx="6" fill="#cbd5e1" />
                    <rect x="16" y="96" width="200" height="12" rx="6" fill="#cbd5e1" />
                    <rect x="16" y="124" width="100" height="28" rx="8" fill="#60a5fa" />
                    <rect x="132" y="124" width="84" height="28" rx="8" fill="#22d3ee" />
                  </svg>
                </div>
              </div>
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
