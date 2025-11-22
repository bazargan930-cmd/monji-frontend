// src/components/modian/common/search/SearchByFilters.tsx
'use client';
import * as React from 'react';
import { Card, FieldGrid, FormField, IconChevronDown, IconSearch, IconFilter } from '@/components/modian/ui';
import { ModianJalaliDateField } from '@/components/modian/common';

export type Option = { value: string; label: string };

export type FilterField =
  | { type: 'select'; name: string; label: string; options: Option[] }
  | { type: 'roles';  name: string; label: string; options: Option[] } // چندانتخابی با چک‌باکس
  | { type: 'status'; name: string; label: string; options: Option[] } // چندانتخابی با چک‌باکس
  | { type: 'period'; name: string; label: string }
  | { type: 'button'; name: 'advanced'; label: string }
  | { type: 'submit'; name: 'search'; label: string };

type Props = {
  fields: FilterField[];
  onSubmit: (values: Record<string, string>) => void;
  /** عنوان ردیف اول (پیش‌فرض: «اطلاعات زمانی») */
  summaryTitle?: string;
};

export default function SearchByFilters({ fields, onSubmit, summaryTitle = 'اطلاعات زمانی' }: Props) {
  const [values, setValues] = React.useState<Record<string, string>>({});
  const [advancedOpen, setAdvancedOpen] = React.useState(false);
  // گزینه‌های «سال و دوره» که از today پر می‌شوند (آیتم اول: دورهٔ جاری)
  const [periodOpts, setPeriodOpts] = React.useState<Array<{ value: string; label: string }>>([]);
  // باز/بسته بودن منوهای سفارشی (برای نقش مودی)
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  // گزینه‌های «موضوع صورتحساب» در پنل پیشرفته
  const topicOptions = React.useMemo(
    () => [
      { value: 'main', label: 'اصلی' },
      { value: 'edit', label: 'اصلاحی' },
      { value: 'return', label: 'برگشت از فروش' },
      { value: 'cancel', label: 'ابطال' },
    ],
    []
  );
  // گزینه‌های «الگوی صورتحساب» (چندانتخابی) — ترتیب طبق اسکرین مرجع
  const invoicePatternOptions = React.useMemo(
    () => [
      { value: 'sell',            label: 'الگو فروش' },
      { value: 'sell_fx',         label: 'الگو فروش ارز' },
      { value: 'gold_jewel',      label: 'الگو طلا، جواهر و پلاتین' },
      { value: 'contracting',     label: 'الگو پیمانکاری' },
      { value: 'utilities',       label: 'الگو قبوض خدماتی' },
      { value: 'air_ticket',      label: 'الگو بلیط هواپیما' },
      { value: 'waybill',         label: 'الگو بارنامه' },
      { value: 'refining',        label: 'الگو پالایش و پخش' },
      { value: 'insurance',       label: 'الگو بیمه' },
    ],
    []
  );
  // گزینه‌های «نوع شخص فروشنده/حق‌العملکار» (چندانتخابی)
  const personTypeOptions = React.useMemo(
    () => [
      { value: 'natural',           label: 'حقیقی' },
      { value: 'legal',             label: 'حقوقی' },
      { value: 'civil_partnership', label: 'مشارکت مدنی' },
      { value: 'foreign_national',  label: 'اتباع غیر ایرانی' },
    ],
    []
  );

  // --- کمکی‌ها: تبدیل ارقام فارسی → انگلیسی و استخراج year/month ---
  const toEnDigits = (s: string) =>
    s.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));

  const pick = (obj: any, keys: string[]) => {
    for (const k of keys) if (obj && obj[k] != null) return obj[k];
    return undefined;
  };

  /** تلاش برای استخراج سال/ماه جلالی از شکل‌های مختلف پاسخ today */
  const extractJalaliYM = (data: any): { y: number; m: number } | undefined => {
    // 1) شیء‌های متداول
    const j =
      data?.jalali ?? data?.fa ?? data?.j ?? data?.persian ?? data?.shamsi ?? data;
    let y = pick(j, ["year", "y", "jy", "jYear"]);
    let m = pick(j, ["month", "m", "jm", "jMonth"]);
    if (typeof y === "string") y = parseInt(toEnDigits(y), 10);
    if (typeof m === "string") m = parseInt(toEnDigits(m), 10);
    if (Number.isInteger(y) && Number.isInteger(m)) return { y, m };

    // 2) رشته‌های تاریخ: "1404/08/17" یا "۱۴۰۴-۰۸-۱۷"
    const cand = String(j ?? data ?? "");
    const enCand = toEnDigits(cand);
    const m1 = enCand.match(/(?:(13|14)\d{2}).*?([01]?\d)\D/);
    if (m1) {
      // دو رقم پایانی سال از همان رشتهٔ انگلیسی‌شده
      const last2 = enCand.match(/\d{2}/)?.[0] ?? "";
      const yy = parseInt(m1[1] + last2, 10) || parseInt(m1[0], 10);
      const mm = Math.max(1, Math.min(12, parseInt(m1[2], 10)));
      if (yy && mm) return { y: yy, m: mm };
    }
    return undefined;
  };

  const handleSelect = (name: string, v: string) =>
    setValues((s) => ({ ...s, [name]: v }));

  const toggleRole = (name: string, val: string) => {
    const cur = (values[name] || '').split(',').filter(Boolean);
    const has = cur.includes(val);
    const next = has ? cur.filter(x => x !== val) : [...cur, val];
    setValues(s => ({ ...s, [name]: next.join(',') }));
  };

  // ---- ورودی‌های عددی مشترک ----
  const onlyDigits = (s: string) => toEnDigits(s).replace(/\D+/g, '');
  const formatMoney = (digits: string) => digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // فیلد عددی با «ضربدر سبز» برای پاک‌سازی — راه حل سریع: state محلی + فیلتر ارقام
  // این نسخه از state محلی برای جلوگیری از مشکلات ری‌ریِندر والد استفاده می‌کند
const NumericInputWithClear = ({
  name,
  maxLength,
  placeholder,
}: { name: string; maxLength?: number; placeholder?: string }) => {
  const [local, setV] = React.useState<string>(values[name] ?? '');

  // تابع کمکی برای فیلتر فقط عدد (انگلیسی و فارسی)
  const toDigitsOnly = (input: string): string => {
    if (!input) return '';
    // تبدیل اعداد فارسی و عربی به انگلیسی
    const persianToEnglish = input.replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0));
    const arabicToEnglish = persianToEnglish.replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660));
    // حذف هر کاراکتر غیر عددی
    return arabicToEnglish.replace(/[^0-9]/g, '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value ?? '';
    const filtered = toDigitsOnly(raw);
    setV(filtered);
  };

  const handleClear = () => {
    setV('');
  };

  return (
    <div className="relative">
      <input
        type="text"
        inputMode="numeric"
        dir="ltr"
        autoComplete="off"
        maxLength={maxLength}
        value={local}
        onChange={handleChange}
        className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm text-right"
        placeholder={placeholder}
      />
      {Boolean(local) && (
        <button
          type="button"
          aria-label="پاک‌کردن"
          onClick={handleClear}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-green-600 font-bold text-xl leading-none"
        >
          ×
        </button>
      )}
    </div>
  );
};


  // فیلد مبلغ با «ریال» و جداکننده سه‌رقمی — نسخه‌ی کاملاً کنترل‌شده
const MoneyInput = ({
  name,
  maxLength,
  placeholder,
}: { name: string; maxLength?: number; placeholder?: string }) => {
  const [local, setV] = React.useState<string>(values[name] ?? '');

  // تابع کمکی برای فیلتر فقط عدد (انگلیسی و فارسی)
  const toDigitsOnly = (input: string): string => {
    if (!input) return '';
    // تبدیل اعداد فارسی و عربی به انگلیسی
    const persianToEnglish = input.replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0));
    const arabicToEnglish = persianToEnglish.replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660));
    // حذف هر کاراکتر غیر عددی
    return arabicToEnglish.replace(/[^0-9]/g, '');
  };

  // تابع فرمت سه‌رقمی با ویرگول
  const formatWithCommas = (numStr: string): string => {
    if (!numStr) return '';
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value ?? '';
    const filtered = toDigitsOnly(raw);
    const formatted = formatWithCommas(filtered);
    setV(formatted);
  };

  const handleClear = () => {
    setV('');
  };

  return (
    <div className="relative">
      <input
        type="text"
        inputMode="numeric"
        dir="ltr"
        autoComplete="off"
        maxLength={maxLength}
        value={local}
        onChange={handleChange}
        className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm text-right"
        placeholder={placeholder}
      />
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-xs">
        ریال
      </span>
    </div>
  );
};

  
  // ---- منطق مشترک خلاصهٔ نمایش برای فیلدهای چندانتخابی ----
  const multiSummary = (name: string, options: Option[]) => {
    const sel = (values[name] || '').split(',').filter(Boolean);
    if (sel.length === 0) return '';
    if (sel.length === 1) {
      const one = options.find(op => op.value === sel[0]);
      return one?.label ?? '';
    }
    return `انتخاب شده +${sel.length}`;
  };

  // ---- رندر مشترک فیلد چندانتخابی ----
  const MultiSelect = ({
    name,
    label,
    options,
  }: {
    name: string;
    label: string;
    options: Option[];
  }) => {
    const selected = (values[name] || '').split(',').filter(Boolean);
    const summary = multiSummary(name, options);
    return (
      <FormField label={label} variant="floating">
        <div className="relative">
          <button
            type="button"
            className="w-full h-10 rounded border border-gray-300 bg-white pe-12 ps-10 text-[13px] text-right"
            onClick={() => setOpenMenu(s => (s === name ? null : name))}
            aria-haspopup="listbox"
            aria-expanded={openMenu === name}
          >
            {summary}
          </button>
          {selected.length > 0 && (
            <button
              type="button"
              aria-label="حذف همه انتخاب‌ها"
              className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-bold leading-none text-gray-500 hover:text-gray-800"
              onClick={() => setValues(s => ({ ...s, [name]: '' }))}
            >
              ×
            </button>
          )}
          <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-gray-800">
            <IconChevronDown className="h-4 w-4" />
          </span>
          {openMenu === name && (
            <div role="listbox" className="absolute z-20 mt-1 w-full rounded border bg-white shadow">
              <div className="max-h-56 overflow-auto py-1">
                {options.map(op => {
                  const checked = selected.includes(op.value);
                  return (
                    <label
                      key={op.value}
                      className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer select-none ${
                        checked ? 'bg-green-50' : ''
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-green-600"
                        checked={checked}
                        onChange={() => toggleRole(name, op.value)}
                      />
                      <span className={checked ? 'text-green-700 font-medium' : ''}>{op.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </FormField>
    );
  };

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onSubmit(values);
  };

  // فیلد متنی آزاد با «ضربدر سبز» برای پاک‌سازی — نسخه‌ی اصلاح‌شده
const TextInputWithClear = ({
  name,
  placeholder,
}: { name: string; placeholder?: string }) => {
  const [v, setV] = React.useState("");

  return (
    <div className="relative">
      <input
        type="text"
        dir="rtl"
        autoComplete="off"
        value={v}
        onChange={(e) => setV(e.target.value)}
        className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm text-right focus:outline-none focus:ring-1 focus:ring-green-500"
        placeholder={placeholder}
      />

      {v && (
        <button
          type="button"
          aria-label="پاک‌کردن"
          onClick={() => setV("")}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-700 font-bold text-xl leading-none"
        >
          ×
        </button>
      )}
    </div>
  );
};

  // بارگیری تاریخ جاری (جلالی) و تولید گزینه‌های فصل
  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/api/utils/today', { credentials: 'include' });
        const raw = await res.json();
        const jm = extractJalaliYM(raw);
        if (!jm) throw new Error("unrecognized today payload");
        const y = jm.y, m = jm.m;

        // نگاشت ماه جلالی → فصل (۱..۱۲)
        // بهار: 1-3 | تابستان: 4-6 | پاییز: 7-9 | زمستان: 10-12
        const seasonIdx = m <= 3 ? 1 : m <= 6 ? 2 : m <= 9 ? 3 : 4;
        const seasonName = ['','بهار','تابستان','پاییز','زمستان'][seasonIdx];

        // مقدار و برچسب «فصل/سال جاری»
        const currentVal   = `${y}-Q${seasonIdx}`;
        const currentLabel = `${seasonName} ${y}`;

        // فقط فصل‌های قبلی همان سال برای انتخاب (Q1..Q(seasonIdx-1))
        const labels = ['','بهار','تابستان','پاییز','زمستان'];
        // لیست فصل‌های قبلی همان سال به‌صورت نزولی (جدیدتر → قدیمی‌تر)
        const prevOpts = Array.from({ length: Math.max(0, seasonIdx - 1) }, (_, i) => {
          const q = (seasonIdx - 1) - i; // Q3,Q2,...,Q1
          return { value: `${y}-Q${q}`, label: `${labels[q]} ${y}` };
        });

        if (!mounted) return;
        // لیست نهایی: «جاری» + «قبلی‌ها»
        setPeriodOpts([{ value: currentVal, label: currentLabel }, ...prevOpts]);
        // مقدار پیش‌فرض (اگر کاربر قبلاً انتخاب نکرده باشد)
        setValues((s) => (s.period ? s : { ...s, period: currentVal }));
      } catch {
        // Fallback: استخراج سال/ماه جلالی از Intl (بدون وابستگی به API)
        try {
          const fmt = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric', month: 'numeric' });
          const parts = fmt.formatToParts(new Date());
          const py = toEnDigits(parts.find(p => p.type === 'year')?.value || '');
          const pm = toEnDigits(parts.find(p => p.type === 'month')?.value || '');
          const y = parseInt(py, 10);
          const m = Math.max(1, Math.min(12, parseInt(pm, 10)));
          if (!y || !m) throw new Error('intl-fallback-failed');

          const seasonIdx = m <= 3 ? 1 : m <= 6 ? 2 : m <= 9 ? 3 : 4;
          const labels = ['','بهار','تابستان','پاییز','زمستان'];
          const currentVal   = `${y}-Q${seasonIdx}`;
          const currentLabel = `${labels[seasonIdx]} ${y}`;
          // نزولی (فصل اخیرتر بالاتر)
          const prevOpts = Array.from({ length: Math.max(0, seasonIdx - 1) }, (_, i) => {
            const q = (seasonIdx - 1) - i;
            return { value: `${y}-Q${q}`, label: `${labels[q]} ${y}` };
          });
          if (!mounted) return;
          setPeriodOpts([{ value: currentVal, label: currentLabel }, ...prevOpts]);
          setValues((s) => (s.period ? s : { ...s, period: currentVal }));
        } catch {
          // آخرین پناه: مقدار تهی (بدون کرش UI)
          if (!mounted) return;
          setPeriodOpts([]);
          setValues((s) => ({ ...s, period: s.period ?? "" }));
        }
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <form onSubmit={submit} dir="rtl">
      {/* ردیف ۱: عنوان بخش */}
      <div className="text-xs sm:text-sm text-gray-600 mb-2">{summaryTitle}</div>

      {/* ردیف ۲: فیلدهای خلاصه با لیبل شناور (چهار ستون هم‌اندازه) */}
      <FieldGrid cols={4} className="gap-2">
        {fields.map((f, idx) => {
          // ----- نقش مودی: استفاده از رندر مشترک -----
          if (f.type === 'roles') {
            return <MultiSelect key={idx} name={f.name} label={f.label} options={f.options} />;
          }
          // ----- وضعیت صورتحساب: استفاده از رندر مشترک -----
      if (f.type === 'status') {
        return <MultiSelect key={idx} name={f.name} label={f.label} options={f.options} />;
      }
          if (f.type === 'select') {
            return (
              <FormField key={idx} label={f.label} variant="floating">
                <select
                  aria-label={f.label}
                  onChange={(e) => handleSelect(f.name, e.target.value)}
                  className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm"
                  defaultValue=""
                >
                  <option value=""></option>
                  {f.options.map((op) => (
                    <option key={op.value} value={op.value}>{op.label}</option>
                  ))}
                </select>
              </FormField>
            );
          }
          if (f.type === 'period') {
            return (
              <FormField key={idx} label={f.label} variant="floating">
                <select
                  aria-label={f.label}
                  value={values.period ?? ''}
                  onChange={(e) => handleSelect('period', e.target.value)}
                  className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm"
                >
                  {/* اگر به هر دلیل مقدار پیش‌فرض ست نشد */}
                  {!values.period && <option value=""></option>}
                  {periodOpts.map((op) => (
                    <option key={op.value} value={op.value}>{op.label}</option>
                  ))}
                </select>
              </FormField>
            );
          }
          return null;
        })}
      </FieldGrid>

      {/* ردیف ۳: نوار کنترل بالا (حالت بستهٔ «پیشرفته») */}
      <div className="mt-3 flex items-center justify-between">
        {/* چپ: دکمهٔ «پیشرفته» */}
        {fields.find((f) => f.type === 'button' && f.name === 'advanced') ? (
          <button
            type="button"
            onClick={() => setAdvancedOpen((s) => !s)}
            className="inline-flex items-center gap-1 rounded-md px-3 h-9 text-sm text-gray-700 hover:bg-gray-50"
            aria-expanded={advancedOpen}
            aria-controls="advanced-panel"
          >
            {(fields.find((f) => f.type === 'button' && f.name === 'advanced') as any).label}
            <IconChevronDown className={`h-4 w-4 transition-transform ${advancedOpen ? 'rotate-180' : ''}`} />
          </button>
        ) : null}

        {/* راست: جفت دکمه‌های بالا (فقط وقتی پیشرفته بسته است) */}
        {(!advancedOpen) && fields.find((f) => f.type === 'submit' && f.name === 'search') ? (
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border border-black px-3 h-9 text-sm"
            >
              <IconFilter className="h-4 w-4" />
              فیلتر پیش‌فرض
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 h-9 text-sm text-white"
            >
              <IconSearch className="h-4 w-4" />
              {(fields.find((f) => f.type === 'submit' && f.name === 'search') as any).label}
            </button>
          </div>
        ) : <span /> }
      </div>

      {/* پنل «پیشرفته» (باز/بسته) — زیر ردیف سوم */}
      {advancedOpen ? (
        <Card id="advanced-panel" className="mt-3">
          {/* چیدمان چهـارستونه مانند سایت اصلی */}
          <FieldGrid cols={4}>
            {/* ردیف ۱: بازه‌های تاریخ */}
            <FormField label="تاریخ صدور صورتحساب از" htmlFor="advIssueFrom" variant="floating">
              <ModianJalaliDateField
                id="advIssueFrom"
                valueISO={values.issueDateFrom ?? ''}
                onChangeISO={(v) => setValues((s) => ({ ...s, issueDateFrom: v ?? '' }))}
                placeholder="انتخاب کنید"
              />
            </FormField>
            <FormField label="تاریخ صدور صورتحساب تا" htmlFor="advIssueTo" variant="floating">
              <ModianJalaliDateField
                id="advIssueTo"
                valueISO={values.issueDateTo ?? ''}
                onChangeISO={(v) => setValues((s) => ({ ...s, issueDateTo: v ?? '' }))}
                placeholder="انتخاب کنید"
              />
            </FormField>
            <FormField label="تاریخ درج در کارپوشه از" htmlFor="advInboxFrom" variant="floating">
              <ModianJalaliDateField
                id="advInboxFrom"
                valueISO={values.inboxDateFrom ?? ''}
                onChangeISO={(v) => setValues((s) => ({ ...s, inboxDateFrom: v ?? '' }))}
                placeholder="انتخاب کنید"
              />
            </FormField>
            <FormField label="تاریخ درج در کارپوشه تا" htmlFor="advInboxTo" variant="floating">
              <ModianJalaliDateField
                id="advInboxTo"
                valueISO={values.inboxDateTo ?? ''}
                onChangeISO={(v) => setValues((s) => ({ ...s, inboxDateTo: v ?? '' }))}
                placeholder="انتخاب کنید"
              />
            </FormField>
            {/* ردیف ۲: موضوع، کد شعبه و مجموع صورتحسابها */}
            {/* موضوع صورتحساب: استفاده از رندر مشترک */}
            <MultiSelect name="topic" label="موضوع صورتحساب" options={topicOptions} />
            <FormField label="کد شعبه" variant="floating">
              <NumericInputWithClear name="branchCode" maxLength={10} />
            </FormField>
            <FormField label="مجموع صورتحساب از" variant="floating">
              <MoneyInput name="sumFrom" />
            </FormField>
            <FormField label="مجموع صورتحساب تا" variant="floating">
              <MoneyInput name="sumTo" />
            </FormField>

            {/* ردیف ۳: الگو، حد مجاز و شناسه‌ها */}
            {/* الگوی صورتحساب: استفاده از رندر مشترک (MultiSelect) */}
            <MultiSelect name="pattern" label="الگوی صورتحساب" options={invoicePatternOptions} />
            {/* فیلد جدید: وضعیت حد مجاز (منوی بازشونده دوگزینه‌ای) */}
            <FormField label="وضعیت حد مجاز" variant="floating">
              <select
                aria-label="وضعیت حد مجاز"
                value={values.limitStatus ?? ''}
                onChange={(e) => handleSelect('limitStatus', e.target.value)}
                className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm"
              >
                <option value=""></option>
                <option value="exceeded">عدول از حد مجاز</option>
                <option value="not_exceeded">عدم عدول از حد مجاز</option>
              </select>
            </FormField>
            {/* برچسب تک‌خطی: شماره اقتصادی فروشنده∕حق‌العملکار (∕ = U+2215 تا نقطه شکست ایجاد نشود) */}
            <FormField
              label={"شماره\u202Fاقتصادی\u202Fفروشنده\u2215حق\u200cالعملکار"}
              variant="floating"
            >
              <NumericInputWithClear name="economicCode" maxLength={20} />
            </FormField>
            {/* برچسب تک‌خطی: شناسه هویتی فروشنده∕حق‌العملکار */}
            <FormField
              label={"شناسه\u202Fهویتی\u202Fفروشنده\u2215حق\u200cالعملکار"}
              variant="floating"
            >
              <NumericInputWithClear name="identityCode" maxLength={20} />
            </FormField>

            {/* ردیف 4: نام و نوع فروشنده/حق العملکار */}
            <FormField label="نام فروشنده/حق العملکار" variant="floating">
              <TextInputWithClear name="sellerName" />
            </FormField>
            <FormField label="نام تجاری فروشنده/حق العملکار" variant="floating">
              <TextInputWithClear name="sellerTradeName" />
            </FormField>
            {/* نوع شخص فروشنده/حق‌العملکار: چندانتخابی با منطق مشترک */}
            <MultiSelect name="personType" label="نوع شخص فروشنده/حق العملکار" options={personTypeOptions} />
            {/* چک‌باکس انتهای سطر آخر */}
          <div className="mt-3 flex items-center gap-2">
            <input id="onlyWithAction" type="checkbox" className="h-4 w-4" />
            <label htmlFor="onlyWithAction" className="text-sm text-gray-700">
              فقط موارد دارای اقدام
            </label>
          </div>
          </FieldGrid>

          

          {/* دکمه‌ها اینجا نداریم؛ فقط جفت دکمهٔ پایین/بالا نمایش شرطی دارند */}
        </Card>
      ) : null}

      {/* نوار کنترل پایینی (وقتی «پیشرفته» باز است) */}
      {advancedOpen && fields.find((f) => f.type === 'submit' && f.name === 'search') ? (
        <div className="mt-3 flex items-center justify-end gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-black px-3 h-9 text-sm"
          >
            <IconFilter className="h-4 w-4" />
            فیلتر پیش‌فرض
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 h-9 text-sm text-white"
          >
            <IconSearch className="h-4 w-4" />
            {(fields.find((f) => f.type === 'submit' && f.name === 'search') as any).label}
          </button>
        </div>
      ) : null}

      {/* استایل محدود به همین کامپوننت: لیبل‌های پنل پیشرفته همیشه تک‌خطی و کمی کوچک */}
      <style jsx>{`
        /* لیبل‌های داخل پنل پیشرفته همیشه تک‌خطی باشند؛
           در صورت کمبود فضا، با ellipsis بریده شوند */
        #advanced-panel :global(label),
        #advanced-panel :global(label *){
          white-space: nowrap !important;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 12px;
          line-height: 1;
        }
      `}</style>
    </form>
  );
}
