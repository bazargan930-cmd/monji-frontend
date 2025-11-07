//src/components/landing/ComparisonTable.tsx
'use client';
import { memo } from 'react';

const rows = [
  { k: 'تعامل و تمرین', course: 'تماشا و آزمون انتهایی', sim: 'تمرین تعاملی در پنل واقعی' },
  { k: 'به‌روزرسانی مقررات', course: 'وابسته به نسخهٔ ویدئو', sim: 'همگام با قوانین ۱۴۰۴' },
  { k: 'ارزیابی فوری', course: 'معمولاً ندارد', sim: 'بازخورد لحظه‌ای و «خطای امن»' },
  { k: 'زمان تا مهارت', course: 'طولانی و تئوری‌محور', sim: 'چند ساعت تمرین سناریومحور' },
  { k: 'انتقال به کار واقعی', course: 'نیاز به تجربهٔ بعدی', sim: 'همان فرم‌ها و جریان واقعی' },
];

function ComparisonTableImpl() {
  return (
    <section aria-label="مقایسهٔ روش‌ها" className="w-full bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
          شبیه‌ساز منجی یا دورهٔ ویدئویی؟
        </h2>
        {/* wrapper اسکرول برای موبایل */}
        <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200 bg-white">
          {/* کاهش حداقل‌عرض و تایپوگرافی فشرده‌تر برای 320/360 */}
          <table className="w-full min-w-[520px] table-fixed text-right text-[11px] sm:text-sm">
            <caption className="sr-only">مقایسهٔ دورهٔ ویدئویی با شبیه‌ساز تعاملی منجی</caption>
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-2 py-2.5 sm:px-4 sm:py-3 text-slate-500 font-semibold w-1/3">
                  معیار
                </th>
                <th scope="col" className="px-2 py-2.5 sm:px-4 sm:py-3 text-slate-700 font-extrabold">
                  دورهٔ ویدئویی
                </th>
                <th scope="col" className="px-2 py-2.5 sm:px-4 sm:py-3 text-blue-700 font-extrabold">
                  شبیه‌ساز منجی
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.k} className={i % 2 ? 'bg-white' : 'bg-gray-50'}>
                  <th scope="row" className="px-2.5 py-2.5 sm:px-4 sm:py-4 text-slate-700 font-semibold align-top">
                    {r.k}
                  </th>
                  <td className="px-2.5 py-2.5 sm:px-4 sm:py-4 text-slate-600 align-top">{r.course}</td>
                  <td className="px-2.5 py-2.5 sm:px-4 sm:py-4 text-slate-900 font-bold align-top">{r.sim}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* توضیح زیر جدول */}
        <p className="text-center text-xs text-slate-500 mt-4">
          * هدف: گرفتن تصمیم آگاهانه پیش از ثبت‌نام؛ برای تجربهٔ عملی، «اجرای دمو» را بزنید.
        </p>
      </div>
    </section>
  );
}

export default memo(ComparisonTableImpl);


