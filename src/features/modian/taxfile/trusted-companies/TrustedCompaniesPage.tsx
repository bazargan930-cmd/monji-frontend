 //src\features\modian\taxfile\trusted-companies\page.tsx
 
'use client';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

import HelpTrigger from '@/components/common/help/HelpTrigger';
import { 
  IconFilter,
  ColumnsIcon,
  IconSearch,
  IconChevronDown,
  ModianJalaliDateField,
  FormField,
  TrustedHelpContent,
 } from '@/features/modian';
import type { ISOString } from '@/lib/date/jalali';

 export default function TrustedCompaniesPage() {
   // ستون‌های ثابت (همیشه نمایش داده می‌شوند)
   const fixedColumns = [
     { id: 'name', label: 'نام' },
     { id: 'code', label: 'شناسه' },
   ] as const;
   // ستون‌های قابل‌نمایش (در پنل نمایش ستون‌ها)
   const allColumns = [
     { id: 'selectedAt', label: 'تاریخ انتخاب' },
     { id: 'expireAt', label: 'تاریخ انقضا/ابطال مجوز' },
     { id: 'services', label: 'خدمات دریافتی شما' },
   ] as const;

   const [visibleCols, setVisibleCols] = useState<Set<string>>(
     () => new Set(allColumns.map(c => c.id))
   );
   const _toggleCol = (id: string) => {
     setVisibleCols(prev => {
       const next = new Set(prev);
       if (next.has(id)) next.delete(id);
       else next.add(id);
       return next;
     });
   };
   const visibleColumns = allColumns.filter(c => visibleCols.has(c.id));

   const [isColsOpen, setIsColsOpen] = useState(false);
  const colsBtnRef = useRef<HTMLButtonElement | null>(null);
  const colsTrayRef = useRef<HTMLDivElement | null>(null);
   // فیلتر
   const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterBtnRef = useRef<HTMLButtonElement | null>(null);
  const filterTrayRef = useRef<HTMLFieldSetElement | null>(null);
    useEffect(() => {
     function onDocClick(e: MouseEvent) {
      const t = e.target as Node;
      // ستون‌ها: فقط وقتی بیرون از «دکمه» و «خود پنل ستون‌ها» کلیک شد ببند
      if (
        isColsOpen &&
        (!colsBtnRef.current || !colsBtnRef.current.contains(t)) &&
        (!colsTrayRef.current || !colsTrayRef.current.contains(t))
      ) {
        setIsColsOpen(false);
      }
      // فیلتر: فقط وقتی بیرون از «دکمه» و «خود پنل فیلتر» کلیک شد ببند
      if (
        isFilterOpen &&
        (!filterBtnRef.current || !filterBtnRef.current.contains(t)) &&
        (!filterTrayRef.current || !filterTrayRef.current.contains(t))
      ) {
        setIsFilterOpen(false);
      }
    }
     function onEsc(e: KeyboardEvent) {
       if (e.key === 'Escape') {
         setIsColsOpen(false);
         setIsFilterOpen(false);
       }
     }
     document.addEventListener('mousedown', onDocClick);
     document.addEventListener('keydown', onEsc);
     return () => {
       document.removeEventListener('mousedown', onDocClick);
       document.removeEventListener('keydown', onEsc);
     };
   }, [isColsOpen, isFilterOpen]);

  // ---- داده‌های ذخیره‌شده در localStorage ----
  type Row = {
    code: string;
    name: string;
    selectedAt: string;
    expireAt: string;
    services: string;
    permitType?: 'trusted' | 'taxpayer' | '';
  };
  const [rows, setRows] = useState<Row[]>([]);
  useEffect(() => {
    try {
      const key = 'modian_trusted_companies';
      const list = JSON.parse(localStorage.getItem(key) || '[]');
      setRows(Array.isArray(list) ? list : []);
    } catch {
      setRows([]);
    }
  }, []);

  // --- جستجو ---
  const [q, setQ] = useState('');
  const displayRows = useMemo(() => {
    const t = q.trim();
    if (!t) return rows;
    const low = t.toLowerCase();
    return rows.filter(
      (r) =>
        r.name.toLowerCase().includes(low) ||
        r.code.toLowerCase().includes(low) ||
        (r.services || '').toLowerCase().includes(low),
    );
  }, [rows, q]);

  // --- فیلترهای تاریخ (خروجی ISO/UTC طبق قرارداد پروژه) ---
  const [fromISO, setFromISO] = useState<ISOString | null>(null);
  const [toISO, setToISO] = useState<ISOString | null>(null);
  const [expireFromISO, setExpireFromISO] = useState<ISOString | null>(null);
  const [expireToISO, setExpireToISO] = useState<ISOString | null>(null);

  return (
    /* محدوده‌ی صفحه را محدود می‌کنیم تا از هدر جلو نزند */
    <div className="rtl text-sm max-w-6xl mx-auto px-4">
      {/* دکمهٔ راهنما (مودال مشترک) – زیر ساب‌هدر، سمت چپ */}
      <div className="mt-4 flex justify-end">
        <HelpTrigger
          buttonTitle="راهنمای صفحه شرکت‌های معتمد"
          modalTitle="راهنمای شرکت‌های معتمد / سامانه‌های دولتی"
          size="lg"
        >
          <TrustedHelpContent />
        </HelpTrigger>
      </div>

      {/* تیتر صفحه */}
      <div className="flex items-center justify-between my-7">
        <h2 className="text-base font-bold text-right m-0">
          شرکت‌های معتمد/سامانه‌های دولتی انتخاب شده
        </h2>
      </div>
       {/* نوار بالایی: آیکون‌های ستون/فیلتر در یک سمت، جستجو در سمت مقابل، دکمه سبز در انتها */}
       <div className="flex items-center justify-between mb-3">
            <div className="relative flex items-center gap-1">
              {/* فیلتر ← جلوتر از نمایش ستون‌ها */}
              <button
                ref={filterBtnRef}
                type="button"
                className={`h-9 w-9 border rounded-md flex items-center justify-center bg-white hover:bg-gray-50 ${
                  isFilterOpen ? 'text-green-600 border-green-500' : 'text-gray-600'
                }`}
                aria-haspopup="dialog"
                aria-expanded={isFilterOpen}
                aria-controls="filters-tray"
                aria-label="فیلتر"
                title="فیلتر"
                onClick={() => {
                  setIsFilterOpen(o => !o);
                  setIsColsOpen(false);
                }}
              >
                <IconFilter className="h-5 w-5" />
              </button>
              {/* نمایش ستون‌ها */}
              <button
                ref={colsBtnRef}
                type="button"
                className={`h-9 w-9 border rounded-md flex items-center justify-center bg-white hover:bg-gray-50 ${
                  isColsOpen ? 'text-green-600 border-green-500' : 'text-gray-600'
                }`}
                aria-haspopup="menu"
                aria-expanded={isColsOpen}
                aria-controls="columns-tray"
                aria-label="نمایش ستون‌ها"
                title="نمایش ستون‌ها"
                onClick={() => {
                  setIsColsOpen(o => !o);
                  setIsFilterOpen(false);
                }}
              >
                <ColumnsIcon className="h-5 w-5" />
              </button>
              {/* فیلد جستجو (بدون لیبل ظاهری) + دکمه آیکون جداگانه مطابق اسکرین */}
              <input
                className="border rounded-md pr-3 py-2 w-60 text-right"
                placeholder="جستجو (نام/شناسه/خدمات)"
                aria-label="جستجو"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Escape') setQ(''); }}
              />
              <button
                type="button"
                className="h-9 w-9 border rounded-md flex items-center justify-center text-gray-600 hover:bg-gray-50"
                aria-label="جستجو"
                title="جستجو"
              >
                <IconSearch className="h-5 w-5" />
              </button>
            </div>

            {/* دکمه انتخاب شرکت/سامانه دولتی → لینک به صفحه افزودن */}
            <Link
              href="/simulators/modian/taxfile/trusted/add"
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
            >
              انتخاب شرکت معتمد / سامانه های دولتی
            </Link>
      </div>
      {/* کادر فیلتر داده‌ها */}
      {isFilterOpen && (
        <fieldset
          ref={filterTrayRef}
          id="filters-tray"
          className="border border-black rounded-md p-4 mt-3 shadow-sm bg-white"
        >
          <legend className="px-2 text-sm font-medium">فیلتر داده ها بر اساس:</legend>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
            {/* 1 - نوع مجوز خدمات (لیبل شناور + آیکون کشویی در چپ) */}
            <FormField label="نوع مجوز خدمات" htmlFor="filterLicenseType" variant="floating" rightIcon={<IconChevronDown className="h-4 w-4" />}>
              <select
                id="filterLicenseType"
                defaultValue=""
                className="w-full border rounded-md py-2 pr-3 pl-10 appearance-none"
              >
                <option value="" disabled></option>
                <option value="type1">نوع اول</option>
                <option value="type2">نوع دوم</option>
                <option value="type3">نوع سوم</option>
              </select>
            </FormField> 

            {/* 2 - انتخاب از (نسخهٔ مودیان: غیرقابل‌نوشتن و با تقویم شمسی) */}
            <FormField label="انتخاب از" htmlFor="filterFrom" variant="floating">
              <ModianJalaliDateField
                id="filterFrom"
                valueISO={fromISO}
                onChangeISO={setFromISO}
                placeholder="انتخاب کنید"
              />
            </FormField>
            {/* 3 - انتخاب تا */}
            <FormField label="انتخاب تا" htmlFor="filterTo" variant="floating">
              <ModianJalaliDateField
                id="filterTo"
                valueISO={toISO}
                onChangeISO={setToISO}
                placeholder="انتخاب کنید"
              />
            </FormField>
            {/* 4 - تاریخ انقضا مجوز از */}
            <FormField label="تاریخ انقضا مجوز از" htmlFor="filterExpireFrom" variant="floating">
              <ModianJalaliDateField
                id="filterExpireFrom"
                valueISO={expireFromISO}
                onChangeISO={setExpireFromISO}
                placeholder="انتخاب کنید"
              />
            </FormField>
            {/* 5 - تاریخ انقضا مجوز تا */}
            <FormField label="تاریخ انقضا مجوز تا" htmlFor="filterExpireTo" variant="floating">
              <ModianJalaliDateField
                id="filterExpireTo"
                valueISO={expireToISO}
                onChangeISO={setExpireToISO}
                placeholder="انتخاب کنید"
              />
            </FormField>
            <div className="hidden md:block" />
          </div>

          {/* نیازی به استایل قبلی input نیست؛ فیلد مودیان خودِ متن را راست‌چین و غیرقابل‌نوشتن نمایش می‌دهد */}

          <div className="mt-4 flex items-center gap-2 justify-end">
            <button type="button" className="px-4 py-2 text-sm text-red-700 border border-red-200 rounded-md hover:bg-gray-50">
              حذف فیلتر
            </button>
            <button type="button" className="px-4 py-2 text-sm rounded-md bg-green-600 text-white hover:bg-green-700">
              جستجو
            </button>
          </div>
        </fieldset>
      )}
      {/* کادر سفید افقی زیر نوار ابزار، مطابق سایت اصلی */}
      {isColsOpen && (
        <div
          ref={colsTrayRef}
          id="columns-tray"
          className="border rounded-md bg-white p-2 mt-3 shadow-sm"
        >
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="px-3 py-1 text-xs border border-black rounded-md hover:bg-gray-50"
              onClick={() => setVisibleCols(new Set(allColumns.map(c => c.id)))}
            >
              همه ستون‌ها
            </button>
            {allColumns
              .filter(c => visibleCols.has(c.id))
              .map(c => (
                <span
                  key={c.id}
                  className="flex items-center gap-1 px-2 py-1 text-xs text-green-600 rounded-full border border-green-600 bg-white"
                >
                  {c.label}
                  <button
                  type="button"
                  aria-label={`حذف ${c.label}`}
                  onClick={() => {
                    const next = new Set(visibleCols);
                    next.delete(c.id);
                    setVisibleCols(next);
                  }}
                  className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white hover:bg-green-600"
                >
                  ✕
                </button>

                </span>
              ))}
          </div>
        </div>
      )} 
       {/* کارت سفید شامل جدول و متن راهنما */}
       <section className="bg-white border rounded-lg shadow">
         {/* تیتر به بالای صفحه منتقل شد */}

         {/* جدول */}
         <div className="overflow-x-auto">
           <table className="w-full border-collapse text-center">
             <thead>
               <tr className="bg-gray-100 text-gray-700">
                 <th className="p-2 border w-16">ردیف</th>
                {/* ستون‌های ثابت */}
                {fixedColumns.map(col => (
                  <th key={col.id} className="p-2 border">{col.label}</th>
                ))}
                {/* ستون‌های قابل‌نمایش */}
                {visibleColumns.map(col => (
                   <th key={col.id} className="p-2 border">{col.label}</th>
                 ))}
               </tr>
             </thead>
             <tbody>
               {/* اگر داده‌ای نیست → نمای خالی */}
               {displayRows.length === 0 ? (
                 <tr>
                   <td colSpan={1 + fixedColumns.length + visibleColumns.length} className="p-8 text-gray-500">
                     <div className="flex flex-col items-center gap-3">
                    {/* ردیف اول: تمام‌عرض؛ خطوط dashed که به دو طرف می‌چسبند */}
                    <div className="hidden sm:flex w-full items-center gap-4">
                      {/* راست */}
                      <div className="flex items-center gap-60 flex-1 text-gray-300">
                        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                        <span className="h-2 w-16 rounded-full bg-gray-300"></span>
                        <span className="h-2 w-16 rounded-full bg-gray-200"></span>
                      </div>                      
                        {/* 🔹 آیکون مانیتور داخل جعبه با حباب گفتگو */}
                        <svg
                          width="128"
                          height="128"
                          viewBox="0 0 128 128"
                        >
                          {/* Box (light gray) */}
                          <rect x="8" y="60" width="112" height="56" rx="10" fill="#d1d5db" />
                          {/* Monitor (darker gray) */}
                          <rect x="28" y="24" width="72" height="46" rx="6" fill="#9ca3af" />
                          {/* Monitor stand */}
                          <rect x="60" y="70" width="8" height="16" rx="2" fill="#9ca3af" />
                          <rect x="44" y="98" width="40" height="6" rx="3" fill="#9ca3af" />
                          {/* Chat bubble (with gap) */}
                          <ellipse cx="106" cy="10" rx="18" ry="12" fill="#9ca3af" />
                          <polygon points="86,15 82,26 94,20" fill="#9ca3af" />
                          {/* Dots inside bubble */}
                          <circle cx="100" cy="10" r="2.5" fill="white" />
                          <circle cx="106" cy="10" r="2.5" fill="white" />
                          <circle cx="112" cy="10" r="2.5" fill="white" />
                        </svg>

                      {/* چپ */}
                      <div className="flex items-center gap-60 flex-1 text-gray-300">
                        <span className="h-2 w-16 rounded-full bg-gray-200"></span>
                        <span className="h-2 w-16 rounded-full bg-gray-300"></span>
                        <span className="h-2 w-16 rounded-full bg-gray-300"></span>
                      </div>
                    </div>
                     {/* ردیف دوم: دو قطعه‌ی موازی و هم‌تراز که به دو طرف می‌چسبند */}
                     <div className="hidden sm:flex w-full items-center mt-2">
                       {/* چپ (میله کوتاهِ چسبیده به لبه چپ) */}
                       <div className="flex-1 flex gap-60 justify-start">
                         <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                         <span className="h-2 w-16 rounded-full bg-gray-300"></span>
                         <span className="h-2 w-16 rounded-full bg-gray-300"></span>
                       </div>
                       {/* فاصله‌ی زیرِ آیکون (مرکز) */}
                       <div className="w-20"></div>
                       {/* راست (میله کوتاهِ چسبیده به لبه راست) */}
                       <div className="flex-1 flex gap-60 justify-end">
                         <span className="h-2 w-16 rounded-full bg-gray-300"></span>
                         <span className="h-2 w-16 rounded-full bg-gray-300"></span>
                         <span className="h-2 w-16 rounded-full bg-gray-300"></span>
                       </div>
                     </div>
                       {/* متن وضعیت خالی */}
                       <div className="items-center text-gray-600 font-bold">موردی ثبت نشده</div>
                     </div>
                   </td>
                 </tr>
               ) : (
                 /* اگر داده هست → ردیف‌ها را بساز */
                 <>
                   {displayRows.map((r, idx) => (
                     <tr key={r.code} className="odd:bg-white even:bg-gray-50">
                       <td className="p-2 border">{idx + 1}</td>
                       {/* ستون‌های ثابت */}
                       <td className="p-2 border">{r.name}</td>
                       <td className="p-2 border">{r.code}</td>
                       {/* ستون‌های قابل‌نمایش مطابق انتخاب کاربر */}
                       {visibleColumns.map(col => (
                         <td key={col.id} className="p-2 border">
                           {col.id === 'selectedAt' && r.selectedAt}
                           {col.id === 'expireAt'   && r.expireAt}
                           {col.id === 'services'   && r.services}
                         </td>
                       ))}
                     </tr>
                   ))}
                 </>
               )}
              </tbody>
           </table>
         </div>
        </section>
         {/* متون راهنما بیرون از کادر سفید */}
          <div className="mt-8 space-y-2 leading-7 text-gray-700">
            <p>
              <span className="font-semibold text-green-600">مجوز نوع اول: </span>
              مجوز فعالیت‌های مرتبط با حوزه صدور، جمع‌آوری، نگهداری و ارسال صورت‌حساب الکترونیکی به سازمان امور مالیاتی، و نظارت بر عملکرد مودیان در این حوزه می‌باشد. شرکتهای دارنده این مجوز قادر به ارائه خدمات نامبرده به خود نیز میباشند.
            </p>
            <p>
              <span className="font-semibold text-green-600">مجوز نوع دوم: </span>
              مجوز فعالیت‌های مرتبط با حوزه آموزش به مودیان مالیاتی احراز تسلط آنها به حقوق و تکالیف خوددر ارتباط با قانون پایانه فروشگاهی و سامانه مودیان و سایر قوانین مالیاتی مرتبط با مودی می باشد.
            </p>
            <p>
              <span className="font-semibold text-green-600">مجوز نوع سوم: </span>
              مجوز فعالیت‌های مرتبط با حوزه خدمات مشاوره و حسابداری مالیاتی مانند مشاوره فنی و غیرمالیاتی، مشاوره مالیاتی، کمک به تنظیم اظهارنامه‌های مالیاتی، تهیه و نگهداری دفاتر و سایر موارد غیرحاکمیتی به تشخیص سازمان امور مالیاتی در این حوزه می‌باشد.
            </p>
          </div>         
     </div>
   );
 }
