//src/components/landing/SocialProof.tsx
'use client';
import { memo } from 'react';

// تاریخ آخرین به‌روزرسانی محتوای Social Proof (قابل ویرایش در هر انتشار)
const LAST_UPDATED = '۱۴۰۴/۰۷';
const quotes = [
  {
    name: 'محدثه س.',
    role: 'کارشناس حسابداری (تهران)',
    text:
      'با شبیه‌ساز منجی، فرم‌ها و سناریوها را مثل محیط واقعی تمرین کردم و همان هفته توی کار واقعی استفاده کردم.',
  },
  {
    name: 'آرش ک.',
    role: 'حسابدار تازه‌کار (مشهد)',
    text:
      'بدون کلاس طولانی؛ سناریوها را حل کردم و گزارش عملکرد گرفتم. مصاحبه‌ی شغلیم خیلی بهتر پیش رفت.',
  },
  {
    name: 'شرکت پیشرو',
    role: 'کارفرما',
    text:
      'کارآموزانی که با منجی تمرین کرده‌اند، خیلی سریع‌تر وارد روند واقعی می‌شوند و خطای عملیاتی کمتر دارند.',
  },
];

function SocialProofImpl() {
  return (
    <section aria-label="تجربهٔ کاربران و اعداد نتیجه" className="w-full bg-white">
      <div className="container mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-center mb-2">کاربران چه می‌گویند؟</h2>
        <p className="text-center text-xs text-slate-500 mb-8" data-last-updated={LAST_UPDATED}>
          آخرین به‌روزرسانی داده‌ها: {LAST_UPDATED}
        </p>
        {/* اعداد نتیجه (Metrics) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
            <div className="text-3xl font-extrabold text-blue-700">۳۵</div>
            <div className="text-sm text-slate-600 mt-1">سناریوی واقعی تمرینی</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
            <div className="text-3xl font-extrabold text-blue-700">۱۴۰۴</div>
            <div className="text-sm text-slate-600 mt-1">همگام با آخرین مقررات</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
            <div className="text-3xl font-extrabold text-blue-700">۶ ساعت</div>
            <div className="text-sm text-slate-600 mt-1">میانگین زمان تا مهارت پایه</div>
          </div>
        </div>
        {/* نقل‌قول‌ها */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <li
              key={i}
              className="rounded-2xl bg-gray-50 border border-gray-200 p-6 shadow-sm text-right"
            >
              <p className="text-slate-700 leading-7">“{q.text}”</p>
              <div className="mt-4 text-sm">
                <div className="font-extrabold text-slate-900">{q.name}</div>
                <div className="text-slate-500">{q.role}</div>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-center text-xs text-slate-500 mt-6">
          * اعداد بالا مربوط به نسخهٔ تمرینی (MVP) است و ممکن است در انتشارهای بعدی تغییر کند.
        </p>
      </div>
    </section>
  );
}

export default memo(SocialProofImpl);


