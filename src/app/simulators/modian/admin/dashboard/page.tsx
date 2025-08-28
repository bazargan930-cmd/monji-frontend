// src/app/simulators/modian/admin/dashboard/page.tsx

'use client';

import ModianShell from '@/components/layout/ModianShell';
import ModianSidebar from '@/components/modian/ModianSidebar';
import HelpGuideButton from '@/components/common/HelpGuideButton';
import { FaSyncAlt } from 'react-icons/fa';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

/* ===== اعداد فارسی/انگلیسی ===== */
const faDigits = '۰۱۲۳۴۵۶۷۸۹';
const faToEnDigits = (s: string) => s.replace(/[۰-۹]/g, (d) => String(faDigits.indexOf(d)));
const enToFaDigits = (s: string) => s.replace(/\d/g, (d) => faDigits[+d]);
const formatFA = (n: number) => enToFaDigits(Math.trunc(n).toLocaleString('en-US'));

/* ===== کمک‌تابع سال/ماه شمسی از مرورگر ===== */
const getJalaliYearMonth = () => {
  const now = new Date();
  const fa = now.toLocaleDateString('fa-IR', { year: 'numeric', month: 'numeric' });
  const [faYear, faMonth] = fa.split('/'); // "۱۴۰۴/۵"
  const year = parseInt(faToEnDigits(faYear), 10);
  const month = parseInt(faToEnDigits(faMonth), 10);
  return { year, month };
};

const SEASONS = ['بهار', 'تابستان', 'پاییز', 'زمستان'] as const;
const monthToSeasonIndex = (m: number) => (m <= 3 ? 0 : m <= 6 ? 1 : m <= 9 ? 2 : 3);

/* ===== مقدار ثابت معافیت ماده ۱۰۱ (فعلاً داخلی تا آماده شدن API ادمین) ===== */
const EXEMPTION_101: Record<number, number> = {
  1404: 2_000_000_000, // ریال
  // در صورت نیاز سال‌های دیگر را بعداً اضافه می‌کنیم
};

/* ===== Mini Donut (SVG) بدون وابستگی ===== */
type DonutSlice = { label: string; value: number; color: string };
function Donut({ data, size = 180, stroke = 22 }: { data: DonutSlice[]; size?: number; stroke?: number }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  let offset = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        {data.map((d, i) => {
          const len = (d.value / total) * circumference;
          const circle = (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={d.color}
              strokeWidth={stroke}
              strokeDasharray={`${len} ${circumference - len}`}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return circle;
        })}
      </g>
      {/* حلقه داخلی سفید */}
      <circle cx={size / 2} cy={size / 2} r={radius - stroke / 1.8} fill="#fff" />
    </svg>
  );
}


export default function Page() {
  const [refreshing, setRefreshing] = useState(false);

  /* سال/دوره */
  const { year: currentYearJ, month: currentMonthJ } = getJalaliYearMonth();
  const currentSeasonIndex = monthToSeasonIndex(currentMonthJ);
  const [year, setYear] = useState<number>(currentYearJ);
  const [seasonIndex, setSeasonIndex] = useState<number>(currentSeasonIndex);

  const seasonOptions = useMemo(() => {
    const prev = (currentSeasonIndex + 3) % 4;
    const next = (currentSeasonIndex + 1) % 4;
    return [
      { label: SEASONS[prev], value: prev, yearDelta: currentSeasonIndex === 0 ? -1 : 0 },
      { label: SEASONS[currentSeasonIndex], value: currentSeasonIndex, yearDelta: 0 },
      { label: SEASONS[next], value: next, yearDelta: currentSeasonIndex === 3 ? +1 : 0 },
    ];
  }, [currentSeasonIndex]);

  const yearOptions = currentSeasonIndex === 0 ? [currentYearJ - 1, currentYearJ] : [currentYearJ];

  // state های محلی کارت نمودارها (بالای return و کنار بقیه stateها اضافه کن)
  const [chartYear, setChartYear] = useState<number>(currentYearJ);
  const [chartSeasonIndex, setChartSeasonIndex] = useState<number>(currentSeasonIndex);
  const chartSeasonOptions = useMemo(() => {
   
    // فقط دوره جاری و دوره قبلی
    const prev = (currentSeasonIndex + 3) % 4;
    return [
      { label: SEASONS[prev],              value: prev,              yearDelta: currentSeasonIndex === 0 ? -1 : 0 },            // جاری
      { label: SEASONS[currentSeasonIndex], value: currentSeasonIndex, yearDelta: 0 }, // قبلی
    ];
  }, [currentSeasonIndex]);
   // گزینه‌های سال برای کارت نمودارها: فقط اگر دوره جاری = بهار باشد، سال قبل هم مجاز است
    const chartYearOptions = currentSeasonIndex === 0
      ? [currentYearJ - 1, currentYearJ]
      : [currentYearJ];


  /* نرخ مالیات (همان ورودی موجود) */
  const [taxRate, setTaxRate] = useState<string>('10');
  const [taxTouched, setTaxTouched] = useState(false);
  const taxError = taxTouched && taxRate.trim() === '';

  /* ===== منطق حد مجاز فروش ===== */
  // فروش دوره فعلاً ۰ تا زمان اتصال به API صورتحساب
  const periodSalesNum = 0;

  // وضعیت‌های مودال
  const [showModal, setShowModal] = useState(false);
  const [hasHistory, setHasHistory] = useState<null | boolean>(null);
  const [paidTaxLY, setPaidTaxLY] = useState<string>(''); // مالیات پرداخت‌شده دوره مشابه سال قبل (ریال)
  const [effRateLY, setEffRateLY] = useState<string>(''); // نرخ مؤثر همان دوره (%)

  // خروجی‌ها
  const [saleCeiling, setSaleCeiling] = useState<number>(0);
  const remaining = Math.max(0, saleCeiling - periodSalesNum);

  // محاسبه بر اساس گزینه شما (گزینه ۲)
  const handleConfirm = () => {
    if (hasHistory === false) {
      // فاقد سابقه: ۵ × معافیت همان سال
      const ex = EXEMPTION_101[year] ?? 0;
      setSaleCeiling(5 * ex);
      setShowModal(false);
      return;
    }
    if (hasHistory === true) {
      const paid = Number(faToEnDigits(paidTaxLY.replace(/[^\d۰-۹]/g, '')) || 0);
      const rate = Number(faToEnDigits(effRateLY.replace(/[^\d۰-۹]/g, '')) || 0);
      if (paid <= 0 || rate <= 0) {
        // ورودی ناقص؛ محاسبه نکن و مودال باز بماند
        return;
      }
      const lastYearSales = paid / (rate / 100); // فروش دوره مشابه سال قبل
      setSaleCeiling(5 * Math.floor(lastYearSales));
      setShowModal(false);
      return;
    }
    // اگر هیچ‌کدام انتخاب نشده بود، کاری نکن
  };

  const handleCancel = () => {
    // هیچ عملیاتی انجام نشود؛ فقط مودال بسته شود
    setShowModal(false);
  };
  const [lastComputeDateFa, setLastComputeDateFa] = useState<string>('');
  const nowFa = () => new Date().toLocaleDateString('fa-IR'); // ۱۴۰۴/۰۵/۱۵

  return (
    <ModianShell>
      <div className="flex flex-row gap-6 px-6 py-8">
        {/* منوی کناری */}
        <div className="w-1/4">
          <ModianSidebar />
        </div>

        {/* محتوای داشبورد مدیریتی */}
        <div className="w-3/4 space-y-1 relative">

          {/* دکمه راهنما: سمت چپ، خارج از کارت و بدون اثر روی ارتفاع */}
          <HelpGuideButton className="absolute -top-12 left-0" />

          {/* حد مجاز فروش */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-lg font-bold text-black">حد مجاز فروش دوره</div>
                <div className="text-sm font-normal text-gray-700">آخرین بروزرسانی لحظاتی پیش</div>
              </div>

              {/* سال/دوره/مالیات/دکمه محاسبه — ساختار صفحه حفظ شده */}
              <div className="flex flex-wrap justify-start items-start gap-x-2 gap-y-2 rtl">
                {/* سال */}
                <div className="relative w-[155px]">
                  <label className="absolute -top-2 right-3 bg-white px-1 text-[11px] text-gray-600">سال</label>
                  <select
                    className="w-full border rounded px-3 py-3 text-sm"
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value, 10))}
                  >
                    {yearOptions.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>

                {/* دوره */}
                <div className="relative w-[155px]">
                  <label className="absolute -top-2 right-3 bg-white px-1 text-[11px] text-gray-600">دوره</label>
                  <select
                    className="w-full border rounded px-3 py-3 text-sm"
                    value={chartSeasonIndex}
                    onChange={(e) => {
                      const v = parseInt(e.target.value, 10);
                      setChartSeasonIndex(v);
                      // اگر دوره جاری بهار است و کاربر «زمستان» (دوره قبلی) را انتخاب کند، سال = سال قبل
                      const prev = (currentSeasonIndex + 3) % 4;
                      if (currentSeasonIndex === 0 && v === prev) {
                        setChartYear(currentYearJ - 1);
                      } else {
                        setChartYear(currentYearJ);
                      }
                    }}
                  >
                    {chartSeasonOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>

                {/* نرخ مالیات (بدون تغییر ظاهری) */}
                <div className="relative w-[170px]">
                  <label className="absolute -top-2 right-3 bg-white px-1 text-[11px] text-gray-600">نرخ مالیات</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={taxRate}
                    onChange={(e) => {
                      let v = e.target.value.replace(/[^\d]/g, '');
                      if (v.length > 3) v = v.slice(0, 3);
                      if (v !== '' && parseInt(v, 10) > 100) v = '100';
                      setTaxRate(v);
                    }}
                    onBlur={() => setTaxTouched(true)}
                    className={`w-full border rounded px-3 py-3 text-sm text-right pr-12 pl-12 ${
                      taxError ? 'border-red-500 focus:border-red-500 focus:ring-0' : ''
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 select-none">٪</span>
                  {taxRate !== '' && (
                    <button
                      type="button"
                      onClick={() => setTaxRate('')}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-700 font-extrabold text-xl"
                      aria-label="پاک کردن نرخ"
                      title="پاک کردن"
                    >
                      ×
                    </button>
                  )}
                  {taxError && <div className="text-[11px] text-red-500 mt-1">فیلد اجباری پر نشده است</div>}
                </div>

                {/* دکمه محاسبه حد مجاز — باز کردن مودال */}
                <div className="flex items-end -translate-x-3">
                  <Button
                    className="flex gap-1 items-center bg-black text-white hover:bg-black/90 py-2.5 px-2"
                    onClick={() => {
                      setHasHistory(null);
                      setPaidTaxLY('');
                      setEffRateLY('');
                      setShowModal(true);
                    }}
                  >
                    محاسبه حد مجاز
                  </Button>
                </div>
              </div>

              {/* نتایج — عددی و فارسی */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-dashed border-black bg-blue-100 rounded px-3 py-3.5 text-sm">
                  <span className="text-gray-600">سقف حد مجاز فروش:</span>{' '}
                  {saleCeiling > 0 ? formatFA(saleCeiling) : '—'}
                </div>
                <div className="border border-dashed border-black bg-blue-100 rounded px-3 py-3.5 text-sm">
                  <span className="text-gray-600">باقیمانده حد مجاز فروش:</span>{' '}
                  {saleCeiling > 0 ? formatFA(remaining) : '—'}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* نمودارها */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            

            <Card>
              <CardContent className="p-4 space-y-3">
                {/* عنوان سکشن */}
                <div className="text-lg font-bold text-black">نمودارهای دوره‌ای</div>
                
                {/* فیلدهای سال/دوره + کلید (هم‌استایل حد مجاز) */}
                <div className="flex flex-wrap justify-start items-start gap-x-2 gap-y-2 rtl">
                  {/* سال */}
                  <div className="relative w-[155px]">
                    <label className="absolute -top-2 right-3 bg-white px-1 text-[11px] text-gray-600">سال</label>
                    <select
                      className="w-full border rounded px-3 py-3 text-sm"
                      value={chartYear}
                      onChange={(e) => setChartYear(parseInt(e.target.value, 10))}
                    >
                      {chartYearOptions.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>

                  </div>

                  {/* دوره (فقط جاری/قبلی با مدیریت yearDelta) */}
                  <div className="relative w-[155px]">
                    <label className="absolute -top-2 right-3 bg-white px-1 text-[11px] text-gray-600">دوره</label>
                    <select
                      className="w-full border rounded px-3 py-3 text-sm"
                      value={chartSeasonIndex}
                      onChange={(e) => {
                        const v = parseInt(e.target.value, 10);
                        setChartSeasonIndex(v);
                        const opt = chartSeasonOptions.find(o => o.value === v);
                        if (opt && opt.yearDelta) setChartYear((prev) => prev + opt.yearDelta);
                      }}
                    >
                      {chartSeasonOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>

                  <Button
                    className="bg-black hover:bg-black/90 text-white py-2.5 px-4 text-xs"
                    onClick={() => setLastComputeDateFa(nowFa())}
                  >
                    نمایش اطلاعات دوره
                  </Button>

                </div>


                {/* عنوان زیر فیلدها */}
                <div className="text-lg font-bold text-black">صورتحساب‌های دوره</div>

                {/* بدنه: (چپ) لیست وضعیت‌ها | (راست) دونات */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  {/* لیست وضعیت‌ها - ستون چپ */}
                  <ul className="text-sm text-gray-700 space-y-0 pr-2 order-2 md:order-1">
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full inline-block" style={{background:'#16a34a'}}></span>
                      تایید شده
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full inline-block" style={{background:'#f59e0b'}}></span>
                      در انتظار واکنش
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full inline-block" style={{background:'#ef4444'}}></span>
                      رد شده
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full inline-block" style={{background:'#9ca3af'}}></span>
                      تایید سیستمی
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full inline-block" style={{background:'#080808'}}></span>
                      عدم امکان واکنش
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full inline-block" style={{background:'#7bd4c8'}}></span>
                      عدم نیاز به واکنش
                    </li>
                  </ul>

                  {/* دونات - ستون راست */}
                  <div className="flex justify-center md:justify-end order-1 md:order-2">
                    <Donut
                      data={[
                        { label: 'تایید شده',       value: 60, color: '#16a34a' },
                        { label: 'در انتظار واکنش',   value: 20, color: '#f59e0b' },
                        { label: 'رد شده',   value: 10, color: '#ef4444' },
                        { label: 'تایید سیستمی',          value: 7,  color: '#9ca3af' },
                        { label: 'عدم امکان واکنش',          value: 3,  color: '#080808' },
                        { label: 'عدم نیاز به واکنش',          value: 3,  color: '#7bd4c8' },
                      ]}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            
            <Card>
              <CardContent className="p-4">
                {/* ردیف عنوان + تاریخ محاسبه */}
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-gray-700 text-sm">خرید و فروش دوره</div>
                  {lastComputeDateFa && (
                    <div className="text-[12px] text-gray-600">
                      تاریخ محاسبه: {lastComputeDateFa}
                    </div>
                  )}
                </div>

                {/* نمودار میله‌ای سبک (Placeholder شبیه اسکرین) */}
                <div className="border border-gray-200 rounded bg-white p-3">
                  <div className="h-48 relative">
                    {/* محور و برچسب‌ها خیلی سبک، فقط نمای نزدیک به اسکرین */}
                    <svg viewBox="0 0 500 170" className="w-full h-full">
                      {/* محور عمودی */}
                      <line x1="50" y1="10" x2="50" y2="150" stroke="#d1d5db" strokeWidth="1" />
                      {/* تیک‌های محور */}
                      {[10, 30, 50, 70, 90, 110, 130].map((y) => (
                        <line key={y} x1="46" y1={y} x2="50" y2={y} stroke="#9ca3af" strokeWidth="1" />
                      ))}
                      {/* سه ستون برای ماه‌های فصل (نمونه) */}
                      {/* تیر */}
                      <rect x="120" y="100" width="28" height="50" fill="#10b981" />
                      <rect x="155" y="30" width="28" height="120" fill="#9ca3af" opacity="0.5" />
                      {/* مرداد */}
                      <rect x="230" y="130" width="28" height="20" fill="#10b981" />
                      <rect x="265" y="30" width="28" height="120" fill="#9ca3af" opacity="0.5" />
                      {/* شهریور */}
                      <rect x="340" y="140" width="28" height="10" fill="#10b981" />
                      <rect x="375" y="30" width="28" height="120" fill="#9ca3af" opacity="0.5" />
                    </svg>
                  </div>

                  {/* ردیف لیگند پایین کارت (مثل سایت اصلی) */}
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-gray-700">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#10b981' }}></span>
                      خرید مشمول
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#9ca3af' }}></span>
                      خرید معاف
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#22c55e' }}></span>
                      فروش مشمول
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#94a3b8' }}></span>
                      فروش معاف
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#0ea5e9' }}></span>
                      خرید کل
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#f59e0b' }}></span>
                      فروش کل
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>


          </div>

          {/* خلاصه مالیات دوره */}
          <Card>
            <CardContent className="p-4">
              <div className="font-semibold text-gray-700 text-sm mb-2">خلاصه مالیات دوره</div>
              <ul className="text-sm text-gray-600 list-disc pr-4 space-y-1">
                <li>اعتبار مالیات بر ارزش افزوده دوره جاری: ۵,۰۰۰,۰۰۰</li>
                <li>بدهکاری مالیات بر ارزش افزوده دوره قبل: ۱,۲۰۰,۰۰۰</li>
                <li>جمع اعتبار مالیات بر ارزش افزوده: ۶,۲۰۰,۰۰۰</li>
              </ul>
            </CardContent>
          </Card>

          {/* خلاصه عضویت */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="font-semibold text-gray-700 text-sm">خلاصه عضویت</div>
                <div className="font-semibold text-red-700 text-sm">(در آینده اطلاعات از API گرفته می‌شود)</div>
                <Button size="sm" variant="outline" onClick={() => setRefreshing(true)}>
                  <FaSyncAlt className="ml-1" /> به‌روزرسانی
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-dashed border-black bg-blue-100 rounded px-3 py-3.5 text-sm">
                  <span className="text-gray-600">حساب‌های بانکی مرتبط با پرونده مالیاتی:</span>{' '}
                  {formatFA(24)}
                </div>
                <div className="border border-dashed border-black bg-blue-100 rounded px-3 py-3.5 text-sm">
                  <span className="text-gray-600">شرکت‌های معتمد / سامانه‌های دولتی انتخاب‌شده:</span>{' '}
                  {formatFA(0)}
                </div>
                <div className="border border-dashed border-black bg-blue-100 rounded px-3 py-3.5 text-sm">
                  <span className="text-gray-600">شناسه یکتا فعال حافظه مالیاتی:</span>{' '}
                  {formatFA(1)}
                </div>
                <div className="border border-dashed border-black bg-blue-100 rounded px-3 py-3.5 text-sm">
                  <span className="text-gray-600">شناسه یکتا فعال پایانه پرداخت:</span>{' '}
                  {formatFA(0)}
                </div>
                <div className="border border-dashed border-black bg-blue-100 rounded px-3 py-3.5 text-sm ">
                  <span className="text-gray-600">ابزار پرداخت فعال (دستگاه POS و درگاه پرداخت):</span>{' '}
                  {formatFA(0)}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ===== مودال کوچک محاسبه حد مجاز ===== */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-[680px] p-4 space-y-3">
            <div className="text-sm font-semibold text-gray-800">
              محاسبه حد مجاز فروش 
            </div>

            <div className="text-sm text-gray-700">آیا در دوره مشابه سال قبل سابقه فروش دارید؟</div>
            <div className="flex gap-3">
              <Button
                variant={hasHistory === true ? 'default' : 'outline'}
                size="sm"
                onClick={() => setHasHistory(true)}
              >
                بله، دارم
              </Button>
              <Button
                variant={hasHistory === false ? 'default' : 'outline'}
                size="sm"
                onClick={() => setHasHistory(false)}
              >
                خیر، ندارم
              </Button>
            </div>

            {hasHistory === true && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="relative">
                  <label className="absolute -top-2 right-3 bg-white px-1 text-[11px] text-red-600 font-semibold">
                    مالیات پرداخت‌شده همان دوره (ریال)
                  </label>
                  <input
                    inputMode="numeric"
                    value={paidTaxLY}
                    onChange={(e) => setPaidTaxLY(e.target.value.replace(/[^\d۰-۹]/g, ''))}
                    className="w-full border rounded px-3 py-2 text-right"
                    placeholder="مثلاً ۳,۰۰۰,۰۰۰,۰۰۰"
                  />
                </div>
                <div className="relative">
                  <label className="absolute -top-2 right-3 bg-white px-1 text-[11px] text-red-600 font-semibold">
                    نرخ مؤثر همان دوره (%)
                  </label>
                  <input
                    inputMode="numeric"
                    value={effRateLY}
                    onChange={(e) => {
                      let v = e.target.value.replace(/[^\d۰-۹]/g, '');
                      const en = faToEnDigits(v);
                      if (en !== '' && parseInt(en, 10) > 100) v = enToFaDigits('100');
                      setEffRateLY(v);
                    }}
                    className="w-full border rounded px-3 py-2 text-right pr-8"
                    placeholder="مثلاً 10"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 select-none">٪</span>
                </div>
              </div>
            )}

            {hasHistory === false && (
              <div className="text-xs text-gray-600">
                محاسبه با فرض «فاقد سابقه»: سقف = ۵ × معافیت ماده ۱۰۱ سال {enToFaDigits(String(year))}.
              </div>
            )}

            <div className="flex justify-end gap-20 pt-1">
              <Button
                onClick={handleCancel}
                className="bg-red-600 hover:bg-red-700 text-white w-24"
              >
                انصراف
              </Button>
              <Button
                onClick={handleConfirm}
                className="bg-green-600 hover:bg-green-700 text-white w-24"
              >
                تأیید
              </Button>
            </div>

          </div>
        </div>
      )}
    </ModianShell>
  );
}
