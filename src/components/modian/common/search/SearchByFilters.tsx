// src/components/modian/common/search/SearchByFilters.tsx
'use client';

import { usePathname } from 'next/navigation';
import * as React from 'react';

// فاصله‌گذاری مناسب بین importها
import { Card, FieldGrid, FormField, IconChevronDown, IconSearch, IconFilter } from '@/components/modian/ui'; // اصلاح شده
import { ModianJalaliDateField } from '@/components/modian/common'; // اصلاح شده

export type Option = { value: string; label: string };

export type FilterField =
  | { type: 'select'; name: string; label: string; options: Option[] }
  | { type: 'roles';  name: string; label: string; options: Option[] } // چندانتخابی با چک‌باکس
  | { type: 'status'; name: string; label: string; options: Option[] } // چندانتخابی با چک‌باکس
  | { type: 'period'; name: string; label: string }
  | { type: 'button'; name: 'advanced'; label: string }
  | { type: 'submit'; name: 'search'; label: string };

// آیکون چرخ‌دنده‌ی ساده برای صفحات «صورتحساب‌های قبل از ۱۴۰۲/۰۳/۲۶»
const OldInvoicesAdvancedIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* دایره‌ی مرکزی */}
    <circle cx="12" cy="12" r="3" />
    {/* دندانه‌های اصلی */}
    <path d="M12 3v2.5" />
    <path d="M12 18.5V21" />
    <path d="M3 12h2.5" />
    <path d="M18.5 12H21" />
    {/* دندانه‌های مورّب ساده */}
    <path d="M6.2 6.2l1.8 1.8" />
    <path d="M16 16l1.8 1.8" />
    <path d="M17.8 6.2L16 8" />
    <path d="M8 16l-1.8 1.8" />
  </svg>
);

type Props = {
  fields: FilterField[];
  onSubmit: (values: Record<string, string>) => void;
  /** عنوان ردیف اول (پیش‌فرض: «اطلاعات زمانی») */
  summaryTitle?: string;
};

// --- کمکی‌ها: تبدیل ارقام فارسی → انگلیسی و استخراج year/month ---
const toEnDigits = (s: string): string =>
  s.replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));

const pick = (obj: unknown, keys: string[]): unknown => {
  if (!obj || typeof obj !== 'object') return undefined;
  const rec = obj as Record<string, unknown>;
  for (const k of keys) {
    if (k in rec && rec[k] != null) {
      return rec[k];
    }
  }
  return undefined;
};

/** تلاش برای استخراج سال/ماه جلالی از شکل‌های مختلف پاسخ today */
const extractJalaliYM = (
  data: unknown,
): { y: number; m: number } | undefined => {
  // 1) شیء‌های متداول
  const jSource =
    pick(data, ['jalali']) ??
    pick(data, ['fa']) ??
    pick(data, ['j']) ??
    pick(data, ['persian']) ??
    pick(data, ['shamsi']) ??
    data;

  let y = pick(jSource, ['year', 'y', 'jy', 'jYear']);
  let m = pick(jSource, ['month', 'm', 'jm', 'jMonth']);

  if (typeof y === 'string') y = parseInt(toEnDigits(y), 10);
  if (typeof m === 'string') m = parseInt(toEnDigits(m), 10);

  if (
    typeof y === 'number' &&
    Number.isInteger(y) &&
    typeof m === 'number' &&
    Number.isInteger(m)
  ) {
    return { y, m };
  }

  // 2) رشته‌های تاریخ: "1404/08/17" یا "۱۴۰۴-۰۸-۱۷"
  const cand = String(jSource ?? data ?? '');
  const enCand = toEnDigits(cand);
  const m1 = enCand.match(/(?:(13|14)\d{2}).*?([01]?\d)\D/);
  if (m1) {
    // دو رقم پایانی سال از همان رشتهٔ انگلیسی‌شده
    const last2 = enCand.match(/\d{2}/)?.[0] ?? '';
    const yy = parseInt(m1[1] + last2, 10) || parseInt(m1[0], 10);
    const mm = Math.max(1, Math.min(12, parseInt(m1[2], 10)));
    if (yy && mm) return { y: yy, m: mm };
  }
  return undefined;
};
export default function SearchByFilters({ fields, onSubmit, summaryTitle = 'اطلاعات زمانی' }: Props) {
  const pathname = usePathname();
  const isSalesPage = pathname?.includes('/simulators/modian/invoices/sales');
  const isExportsPage = pathname?.includes('/simulators/modian/invoices/exports');
  const isOldInvoicesPage = pathname?.includes('/simulators/modian/old-Invoices');
  const isOldExportsPage = pathname?.includes(
    '/simulators/modian/old-Invoices/exports',
  );
  const isPurchaseAnnouncementsImportsPage = pathname?.includes(
    '/simulators/modian/purchase-announcements/imports',
  );
  const isPurchaseAnnouncementsBoursePage = pathname?.includes(
    '/simulators/modian/purchase-announcements/bourse',
  );
  // در صفحه «صورتحساب‌های فروش داخلی» طرف مقابل «خریدار» است؛
  // در سایر صفحات (مثل خرید داخلی) همچنان «فروشنده» باقی می‌ماند.
  const counterpartyLabel = isSalesPage ? 'خریدار' : 'فروشنده';
  // برچسب دکمه‌ی «جستجوی پیشرفته» (بالا)
  const advancedButtonLabel = isOldInvoicesPage ? 'جستجوی پیشرفته' : 'فیلتر پیش‌فرض';
  // برچسب دکمه‌ی «حذف فیلتر» (پایین، فقط وقتی پنل پیشرفته باز است)
  const filterResetButtonLabel = isOldInvoicesPage ? 'حذف فیلتر' : 'فیلتر پیش‌فرض';
  // آیکون مورد استفاده در دکمه‌ی «پیشرفته» بسته به مسیر
  const AdvancedIconComponent = isOldInvoicesPage ? OldInvoicesAdvancedIcon : IconFilter;

  const advancedField =
    fields.find((f) => f.type === 'button' && f.name === 'advanced');
  const advancedFieldLabel = advancedField?.label ?? advancedButtonLabel;

  const searchButtonLabel =
    fields.find((f) => f.type === 'submit' && f.name === 'search')?.label ??
    'جستجو';
  const [values, setValues] = React.useState<Record<string, string>>({});
  const [advancedOpen, setAdvancedOpen] = React.useState(false);
  // گزینه‌های «سال و دوره» که از today پر می‌شوند (آیتم اول: دورهٔ جاری)
  const [periodOpts, setPeriodOpts] = React.useState<Array<{ value: string; label: string }>>([]);
  // باز/بسته بودن منوهای سفارشی (برای نقش مودی)
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  // گزینه‌های «موضوع صورتحساب/اعلامیه» در پنل پیشرفته
  const topicOptions = React.useMemo(
    () => {
      // در صفحه «اعلامیه‌های خرید از بورس کالا» فقط دو گزینه «اصلی» و «ابطالی» نمایش داده می‌شود
      if (isPurchaseAnnouncementsBoursePage) {
        return [
          { value: 'main',   label: 'اصلی' },
          { value: 'cancel', label: 'ابطالی' },
        ];
      }

      // در صفحه «فروش صادراتی» و «اعلامیه‌های واردات» سه گزینه «اصلی»، «ابطالی»، «اصلاحی» داریم
      if (isExportsPage || isPurchaseAnnouncementsImportsPage) {
        return [
          { value: 'main',   label: 'اصلی' },
          { value: 'cancel', label: 'ابطالی' },
          { value: 'edit',   label: 'اصلاحی' },
        ];
      }

      // در سایر صفحات، لیست کامل شامل «برگشت از فروش» نیز هست
      return [
        { value: 'main',   label: 'اصلی' },
        { value: 'edit',   label: 'اصلاحی' },
        { value: 'return', label: 'برگشت از فروش' },
        { value: 'cancel', label: 'ابطال' },
      ];
    },
    [isExportsPage, isPurchaseAnnouncementsImportsPage, isPurchaseAnnouncementsBoursePage],
  );  // گزینه‌های «الگوی صورتحساب» (چندانتخابی) — ترتیب طبق اسکرین مرجع
  const invoicePatternOptions = React.useMemo(
    () => {
      // لیست پایه برای همهٔ صفحات (خرید و فروش)
      const base = [
        { value: 'sell',        label: 'الگو فروش' },
        { value: 'sell_fx',     label: 'الگو فروش ارز' },
        { value: 'gold_jewel',  label: 'الگو طلا، جواهر و پلاتین' },
        { value: 'contracting', label: 'الگو پیمانکاری' },
        { value: 'utilities',   label: 'الگو قبوض خدماتی' },
        { value: 'air_ticket',  label: 'الگو بلیط هواپیما' },
        { value: 'waybill',     label: 'الگو بارنامه' },
        { value: 'refining',    label: 'الگو پالایش و پخش' },
        { value: 'insurance',   label: 'الگو بیمه' },
      ];

      // برای صفحات غیرِ فروش داخلی، همان لیست پایه برگردانده می‌شود
      if (!isSalesPage) {
        return base;
      }

      // در صفحهٔ فروش داخلی، «الگوی بورس کالا» قبل از «الگو بیمه» اضافه می‌شود
      const result = [...base];
      const insuranceIndex = result.findIndex(
        (option) => option.value === 'insurance',
      );
      const insertIndex =
        insuranceIndex === -1 ? result.length : insuranceIndex;

      result.splice(insertIndex, 0, {
        value: 'الگوی بورس کالا',
        label: 'الگوی بورس کالا',
      });

      return result;
    },
    [isSalesPage],
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

  // گزینه‌های «وضعیت تطابق» (فقط در صفحهٔ فروش صادراتی استفاده می‌شود)
  const matchStatusOptions = React.useMemo(
    () => [
      { value: 'accepted', label: 'پذیرفته شده' },
      { value: 'rejected', label: 'پذیرفته نشده' },
      { value: 'pending',  label: 'در انتظار بررسی' },
    ],
    [],
  );

  // اصلاح نوع‌ها به جای استفاده از any
  const handleSelect = (name: string, v: string): void =>
    setValues((s: Record<string, string>) => ({ ...s, [name]: v }));

  const toggleRole = (name: string, val: string) => {
    const cur = (values[name] || '').split(',').filter(Boolean);
    const has = cur.includes(val);
    const next = has ? cur.filter(x => x !== val) : [...cur, val];
    setValues(s => ({ ...s, [name]: next.join(',') }));
  };

  // ---- ورودی‌های عددی مشترک ----

  // فیلد عددی با «ضربدر سبز» برای پاک‌سازی
  // این نسخه علاوه بر state محلی، مقدار را در state اصلی فیلترها نیز به‌روزرسانی می‌کند
const NumericInputWithClear = ({
  name,
  maxLength,
  placeholder,
}: { name: string; maxLength?: number; placeholder?: string }) => {
  const [local, setV] = React.useState<string>(values[name] ?? '');
  const valueForName = values[name] ?? '';

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
    setValues((prev) => ({ ...prev, [name]: filtered }));
  };
  React.useEffect(() => {
    setV(valueForName);
  }, [valueForName]);

  const handleClear = () => {
    setV('');
    setValues((prev) => ({ ...prev, [name]: '' }));
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


  // فیلد مبلغ با «ریال» و جداکننده سه‌رقمی — هم‌زمان با state اصلی فیلترها
const MoneyInput = ({
  name,
  maxLength,
  placeholder,
}: { name: string; maxLength?: number; placeholder?: string }) => {
  const [local, setV] = React.useState<string>(values[name] ?? '');
  const valueForName = values[name] ?? '';

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
    setValues((prev) => ({ ...prev, [name]: formatted }));
  };

  React.useEffect(() => {
    setV(valueForName);
  }, [valueForName]);

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
    disabled = false,
  }: {
    name: string;
    label: string;
    options: Option[];
    disabled?: boolean;
  }) => {
    const selected = (values[name] || '').split(',').filter(Boolean);
    const summary = multiSummary(name, options);
    return (
      <FormField label={label} variant="floating">
        <div className="relative">
          <button
            type="button"
            className={`w-full h-10 rounded border border-gray-300 pe-12 ps-10 text-[13px] text-right ${
              disabled ? 'bg-white text-gray-500 cursor-default' : 'bg-white'
            }`}
            onClick={() => {
              if (disabled) return;
              setOpenMenu((s) => (s === name ? null : name));
            }}
            aria-haspopup="listbox"
            aria-expanded={openMenu === name}
            disabled={disabled}
          >
            {summary}
          </button>
          {selected.length > 0 && !disabled && (
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
          {openMenu === name && !disabled && (
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

  // رندر مشترک فیلدهای خلاصه (ردیف بالایی)
  const renderSummaryFields = () =>
    fields.map((f, idx) => {
      // ----- نقش مودی: استفاده از رندر مشترک -----
      if (f.type === 'roles') {
        return (
          <MultiSelect
            key={idx}
            name={f.name}
            label={f.label}
            options={f.options}
            disabled={isOldInvoicesPage}
          />
        );
      }
      // ----- وضعیت صورتحساب: استفاده از رندر مشترک -----
      if (f.type === 'status') {
        return (
          <MultiSelect
            key={idx}
            name={f.name}
            label={f.label}
            options={f.options}
            disabled={isOldInvoicesPage}
          />
        );
      }
      if (f.type === 'select') {
        return (
          <FormField key={idx} label={f.label} variant="floating">
            <select
              aria-label={f.label}
              onChange={(e) => handleSelect(f.name, e.target.value)}
              className={`w-full h-10 rounded border border-gray-300 px-2 text-sm ${
                isOldInvoicesPage ? 'bg-white text-gray-500 cursor-default' : 'bg-white'
              }`}
              disabled={isOldInvoicesPage}
              defaultValue=""
            >
              <option value=""></option>
              {f.options.map((op) => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
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
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </select>
          </FormField>
        );
      }
      return null;
    });
  // فیلد متنی آزاد با «ضربدر سبز» برای پاک‌سازی — نسخه‌ی اصلاح‌شده
const TextInputWithClear = ({
  name,
  placeholder,
}: { name: string; placeholder?: string }) => {
  const [v, setV] = React.useState(values[name] ?? "");

  const valueForName = values[name] ?? "";

  React.useEffect(() => {
    setV(valueForName);
  }, [valueForName]);

  return (
    <div className="relative">
      <input
        type="text"
        dir="rtl"
        autoComplete="off"
        value={v}
        onChange={(e) => {
          const next = e.target.value ?? "";
          setV(next);
          setValues((prev) => ({ ...prev, [name]: next }));
        }}
        className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm text-right focus:outline-none focus:ring-1 focus:ring-green-500"
        placeholder={placeholder}
      />

      {v && (
        <button
          type="button"
          aria-label="پاک‌کردن"
          onClick={() => {
            setV("");
            setValues((prev) => ({ ...prev, [name]: "" }));
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-700 font-bold text-xl leading-none"
        >
          ×
        </button>
      )}
    </div>
  );
};

  // بارگیری تاریخ جاری (جلالی) و تولید گزینه‌های فصل
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // فهرست کلیدهای فیلتر در صفحه old-Invoices که برای «حذف فیلتر» در نظر گرفته می‌شود
  const oldInvoicesFilterKeys = [
    'branchCode',
    'taxYear',
    'taxPeriod',
    'limitStatus',
    'issueDateFrom',
    'issueDateTo',
  ];

  // اگر هر کدام از فیلترهای بالا مقداری داشته باشند، دکمهٔ «حذف فیلتر» به حالت قرمز می‌رود
  const hasAnyFilterSelected =
    isOldInvoicesPage &&
    oldInvoicesFilterKeys.some((key) => Boolean(values[key]));

    return (
    <form
      onSubmit={submit}
      dir="rtl"
      className={isOldInvoicesPage
        ? 'bg-white border border-gray-300 rounded-md px-4 py-3'
        : undefined}
    >
      {/* ردیف ۱: عنوان بخش (در صورت وجود متن) */}
      {summaryTitle && (
        <div className="text-xs sm:text-sm text-gray-600 mb-2">
          {summaryTitle}
        </div>
      )}

      {/* ردیف ۲: فیلدهای خلاصه + دکمه‌ها */}
      {isOldInvoicesPage ? (
        // حالت مخصوص «صورتحساب‌های قبل از ۱۴۰۲/۰۳/۲۶»
        // فرم خودش کارت سفید است؛ اینجا فقط چیدمان ردیف اول را کنترل می‌کنیم
        <div className="flex items-center justify-between gap-4">
            {/* فیلدها، چسبیده به راست و با عرض بیشتر (هر کدام تقریباً دو برابر قبل) */}
            <div className="flex-1 flex justify-end">
              <FieldGrid
                cols={3}
                className="gap-2 w-[720px] max-w-full ml-auto"
              >
                {renderSummaryFields()}
              </FieldGrid>
            </div>

            {/* دکمه‌های بالا در همان سطر، سمت چپ (فقط وقتی «پیشرفته» بسته است) */}
            {!advancedOpen &&
            fields.find((f) => f.type === 'submit' && f.name === 'search') ? (
              <div className="flex items-center justify-end gap-2">
                {/* دکمهٔ جستجوی پیشرفته / حذف فیلتر */}
                {fields.find((f) => f.type === 'button' && f.name === 'advanced') ? (
                  <button
                    type="button"
                    onClick={() => setAdvancedOpen((s) => !s)}
                    className="inline-flex items-center gap-1 rounded-md h-9 text-sm px-0 text-gray-700 hover:bg-transparent"
                    aria-expanded={advancedOpen}
                    aria-controls="advanced-panel"
                  >
                    <AdvancedIconComponent className="h-4 w-4" />
                    {advancedButtonLabel}
                  </button>
                ) : null}

                {/* دکمهٔ «جستجو» */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 h-9 text-sm text-white"
                >
                  <IconSearch className="h-4 w-4" />
                  {searchButtonLabel}
                </button>
              </div>
            ) : null}
         </div>       
      ) : (
        <>
          {/* حالت پیش‌فرض برای سایر صفحات صورتحساب‌ها (Buy/Sales/Exports) */}
          <FieldGrid cols={4} className="gap-2">
            {renderSummaryFields()}
          </FieldGrid>

          {/* ردیف ۳: نوار کنترل بالا (حالت بستهٔ «پیشرفته») - فقط برای صفحات غیرِ old-Invoices */}
          <div className="mt-3 flex items-center justify-between">
            {/* چپ: دکمهٔ «پیشرفته» */}
            {advancedField ? (
              <button
                type="button"
                onClick={() => setAdvancedOpen((s) => !s)}
                className="inline-flex items-center gap-1 rounded-md h-9 text-sm px-3 text-gray-700 hover:bg-gray-50"
                aria-expanded={advancedOpen}
                aria-controls="advanced-panel"
              >
                {advancedFieldLabel}
                <IconChevronDown
                  className={`h-4 w-4 transition-transform ${
                    advancedOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            ) : null}

            {/* راست: جفت دکمه‌های بالا (فقط وقتی پیشرفته بسته است) */}
            {!advancedOpen &&
            fields.find((f) => f.type === 'submit' && f.name === 'search') ? (
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md h-9 text-sm border border-black px-3"
                >
                  <AdvancedIconComponent className="h-4 w-4" />
                  {advancedButtonLabel}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 h-9 text-sm text-white"
                >
                  <IconSearch className="h-4 w-4" />
                  {searchButtonLabel}
                </button>
              </div>
            ) : (
              <span />
            )}
          </div>
        </>
      )}

            {/* پنل «پیشرفته» (باز/بسته) — زیر ردیف سوم */}
      {advancedOpen ? (
        <Card id="advanced-panel" className="mt-3">
          {/* هدر پنل پیشرفته: عنوان «جستجو پیشرفته» راست + دکمه «بستن» چپ – فقط برای old-Invoices */}
          {isOldInvoicesPage && (
          <div className="mb-4">
            <div className="flex items-center justify-between">
              {/* عنوان «جستجو پیشرفته» در سمت راست */}
              <span className="text-sm font-medium text-gray-700">
                جستجو پیشرفته
              </span>

              {/* دکمه بستن پنل در سمت چپ */}
              <button
                type="button"
                onClick={() => setAdvancedOpen(false)}
                className="inline-flex items-center gap-1 text-xs text-gray-600"
              >
                <IconChevronDown className="h-3 w-3 rotate-180" />
                <span>بستن</span>
              </button>
            </div>

            {/* خط سبز زیر هدر (برای صفحات old-Invoices) */}
            <div className="mt-2 border-t border-green-500" />
          </div>
          )}

          {/* چیدمان چهـارستونه */}
          <FieldGrid cols={4}>
            {isOldInvoicesPage ? (
              <>
                {/* ردیف ۱ (old-Invoices): شماره مالیاتی، سال مالیاتی، دوره مالیاتی، وضعیت صورتحساب */}
                <FormField label="شماره مالیاتی" variant="floating">
                  <NumericInputWithClear name="branchCode" maxLength={10} />
                </FormField>
                <FormField label="سال مالیاتی" variant="floating">
                  <select
                    aria-label="سال مالیاتی"
                    value={values.taxYear ?? ''}
                    onChange={(e) => handleSelect('taxYear', e.target.value)}
                    className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm"
                  >
                    <option value=""></option>
                    <option value="1400">1400</option>
                    <option value="1401">1401</option>
                    <option value="1402">1402</option>
                    <option value="1403">1403</option>
                  </select>
                </FormField>
                {!isExportsPage && (
                  <FormField label="دوره مالیاتی" variant="floating">
                    <select
                      aria-label="دوره مالیاتی"
                      value={values.taxPeriod ?? ''}
                      onChange={(e) => handleSelect('taxPeriod', e.target.value)}
                      className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm"
                    >
                      <option value=""></option>
                      <option value="spring">بهار</option>
                      <option value="summer">تابستان</option>
                      <option value="autumn">پاییز</option>
                      <option value="winter">زمستان</option>
                    </select>
                  </FormField>
                )}
                <FormField
                  label={isOldExportsPage ? 'وضعیت تطابق' : 'وضعیت صورتحساب'}
                  variant="floating"
                >
                  <select
                    aria-label={
                      isOldExportsPage ? 'وضعیت تطابق' : 'وضعیت صورتحساب'
                    }
                    value={values.limitStatus ?? ''}
                    onChange={(e) => handleSelect('limitStatus', e.target.value)}
                    className={`w-full h-10 rounded bg-white px-2 text-sm ${
                      isOldExportsPage
                        ? 'border border-dashed border-gray-400 text-gray-500 cursor-default'
                        : 'border border-gray-300'
                    }`}
                    disabled={isOldExportsPage}
                  >
                    <option value=""></option>
                    <option value="exceeded">در انتظار واکنش</option>
                    <option value="not_exceeded">تایید شده</option>
                    <option value="not_exceeded">رد شده</option>
                    <option value="not_exceeded">تایید سیستمی</option>
                  </select>
                </FormField>

                {/* ردیف ۲ (old-Invoices): بازه تاریخ صدور صورتحساب در انتهای فیلدها */}
                <FormField
                  label="تاریخ از"
                  htmlFor="advIssueFrom"
                  variant="floating"
                >
                  <ModianJalaliDateField
                    id="advIssueFrom"
                    valueISO={values.issueDateFrom ?? ''}
                    onChangeISO={(v) =>
                      setValues((s) => ({ ...s, issueDateFrom: v ?? '' }))
                    }
                    placeholder="انتخاب کنید"
                  />
                </FormField>
                <FormField
                  label="تاریخ تا"
                  htmlFor="advIssueTo"
                  variant="floating"
                >
                  <ModianJalaliDateField
                    id="advIssueTo"
                    valueISO={values.issueDateTo ?? ''}
                    onChangeISO={(v) =>
                      setValues((s) => ({ ...s, issueDateTo: v ?? '' }))
                    }
                    placeholder="انتخاب کنید"
                  />
                </FormField>
              </>
            ) : (
              <>
                {/* ردیف ۱: بازه‌های تاریخ */}
                <FormField
                  label={
                    isPurchaseAnnouncementsImportsPage
                      ? 'تاریخ صدور اعلامیه از'
                      : 'تاریخ صدور صورتحساب از'
                  }
                  htmlFor="advIssueFrom"
                  variant="floating"
                >
                  <ModianJalaliDateField
                    id="advIssueFrom"
                    valueISO={values.issueDateFrom ?? ''}
                    onChangeISO={(v) =>
                      setValues((s) => ({ ...s, issueDateFrom: v ?? '' }))
                    }
                    placeholder="انتخاب کنید"
                  />
                </FormField>
                <FormField
                  label={
                    isPurchaseAnnouncementsImportsPage
                      ? 'تاریخ صدور اعلامیه تا'
                      : 'تاریخ صدور صورتحساب تا'
                  }
                  htmlFor="advIssueTo"
                  variant="floating"
                >
                  <ModianJalaliDateField
                    id="advIssueTo"
                    valueISO={values.issueDateTo ?? ''}
                    onChangeISO={(v) =>
                      setValues((s) => ({ ...s, issueDateTo: v ?? '' }))
                    }
                    placeholder="انتخاب کنید"
                  />
                </FormField>
                {!isOldInvoicesPage && (
                  <FormField
                    label="تاریخ درج در کارپوشه از"
                    htmlFor="advInboxFrom"
                    variant="floating"
                  >
                    <ModianJalaliDateField
                      id="advInboxFrom"
                      valueISO={values.inboxDateFrom ?? ''}
                      onChangeISO={(v) =>
                        setValues((s) => ({ ...s, inboxDateFrom: v ?? '' }))
                      }
                      placeholder="انتخاب کنید"
                    />
                  </FormField>
                )}
                {!isOldInvoicesPage && (
                  <FormField
                    label="تاریخ درج در کارپوشه تا"
                    htmlFor="advInboxTo"
                    variant="floating"
                  >
                    <ModianJalaliDateField
                      id="advInboxTo"
                      valueISO={values.inboxDateTo ?? ''}
                      onChangeISO={(v) =>
                        setValues((s) => ({ ...s, inboxDateTo: v ?? '' }))
                      }
                      placeholder="انتخاب کنید"
                    />
                  </FormField>
                )}

                {/* ردیف ۲: موضوع، کد شعبه و مجموع مبلغ */}
                <MultiSelect
                  name="topic"
                  label={
                    isPurchaseAnnouncementsImportsPage
                      ? 'موضوع اعلامیه'
                      : 'موضوع صورتحساب'
                  }
                  options={topicOptions}
                />
                <FormField label="کد شعبه" variant="floating">
                  <NumericInputWithClear name="branchCode" maxLength={10} />
                </FormField>
                {!isOldInvoicesPage && (
                  <FormField
                    label={
                      isPurchaseAnnouncementsImportsPage
                        ? 'مجموع مبلغ اعلامیه از'
                        : 'مجموع صورتحساب از'
                    }
                    variant="floating"
                  >
                    <MoneyInput name="sumFrom" />
                  </FormField>
                )}
                {!isOldInvoicesPage && (
                  <FormField
                    label={
                      isPurchaseAnnouncementsImportsPage
                        ? 'مجموع مبلغ اعلامیه تا'
                        : 'مجموع صورتحساب تا'
                    }
                    variant="floating"
                  >
                    <MoneyInput name="sumTo" />
                  </FormField>
                )}

                {/* ردیف ۳: الگو، حد مجاز و شناسه‌ها */}
                {!isExportsPage &&
                 !isPurchaseAnnouncementsImportsPage &&
                 !isPurchaseAnnouncementsBoursePage && (
                  <MultiSelect
                    name="pattern"
                    label="الگوی صورتحساب"
                    options={invoicePatternOptions}
                  />
                )}
                {!isPurchaseAnnouncementsBoursePage && (
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
                )}
                {!isExportsPage &&
                 !isOldInvoicesPage &&
                 !isPurchaseAnnouncementsImportsPage &&
                 !isPurchaseAnnouncementsBoursePage && (
                  <FormField
                    label={`شماره\u202Fاقتصادی\u202F${counterpartyLabel}\u2215حق\u200cالعملکار`}
                    variant="floating"
                  >
                    <NumericInputWithClear name="economicCode" maxLength={20} />
                  </FormField>
                )}
                {!isExportsPage &&
                 !isOldInvoicesPage &&
                 !isPurchaseAnnouncementsImportsPage &&
                 !isPurchaseAnnouncementsBoursePage && (
                  <FormField
                    label={`شناسه\u202Fهویتی\u202F${counterpartyLabel}\u2215حق\u200cالعملکار`}
                    variant="floating"
                  >
                    <NumericInputWithClear name="identityCode" maxLength={20} />
                  </FormField>
                )}

                {/* ردیف ۴: نام و نوع فروشنده/حق العملکار — در صادراتی، old-Invoices و صفحات اعلامیه واردات/بورس مخفی می‌شود */}
                {!isExportsPage &&
                 !isOldInvoicesPage &&
                 !isPurchaseAnnouncementsImportsPage &&
                 !isPurchaseAnnouncementsBoursePage && (
                  <FormField
                    label={`نام ${counterpartyLabel}/حق العملکار`}
                    variant="floating"
                  >
                    <TextInputWithClear name="sellerName" />
                  </FormField>
                )}
                {!isExportsPage &&
                 !isOldInvoicesPage &&
                 !isPurchaseAnnouncementsImportsPage &&
                 !isPurchaseAnnouncementsBoursePage && (
                  <FormField
                    label={`نام تجاری ${counterpartyLabel}/حق العملکار`}
                    variant="floating"
                  >
                    <TextInputWithClear name="sellerTradeName" />
                  </FormField>
                )}
                {!isExportsPage &&
                 !isOldInvoicesPage &&
                 !isPurchaseAnnouncementsImportsPage &&
                 !isPurchaseAnnouncementsBoursePage && (
                  <MultiSelect
                    name="personType"
                    label={`نوع شخص ${counterpartyLabel}/حق العملکار`}
                    options={personTypeOptions}
                  />
                )}
                {isExportsPage && (
                  <MultiSelect
                    name="matchStatus"
                    label="وضعیت تطابق"
                    options={matchStatusOptions}
                  />
                )}
                {!isExportsPage &&
                 !isOldInvoicesPage &&
                 !isPurchaseAnnouncementsImportsPage &&
                 !isPurchaseAnnouncementsBoursePage && (
                  <div className="mt-3 flex items-center gap-2">
                    <input id="onlyWithAction" type="checkbox" className="h-4 w-4" />
                    <label htmlFor="onlyWithAction" className="text-sm text-gray-700">
                      فقط موارد دارای اقدام
                    </label>
                  </div>
                )}
              </>
            )}
          </FieldGrid>

          {/* دکمه‌ها اینجا نداریم؛ فقط جفت دکمهٔ پایین/بالا نمایش شرطی دارند */}
        </Card>
      ) : null}

      {/* نوار کنترل پایینی (وقتی «پیشرفته» باز است) – فقط برای old-Invoices */}
      {advancedOpen &&
       isOldInvoicesPage &&
       fields.find((f) => f.type === 'submit' && f.name === 'search') ? (
        <div className="mt-3 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => {
              const cleared: Record<string, string> = { ...values };
              oldInvoicesFilterKeys.forEach((key) => {
                cleared[key] = '';
              });
              setValues(cleared);
              setOpenMenu(null);
            }}
            className={`inline-flex items-center gap-1 rounded-md h-9 text-sm px-3 ${
              hasAnyFilterSelected
                ? 'border-red-500 bg-white text-red-600'
                : 'border-gray-300 bg-gray-400 text-white'
            }`}
          >
            <span className="text-base font-bold">×</span>
            <span>{filterResetButtonLabel}</span>
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 h-9 text-sm text-white"
          >
            <IconSearch className="h-4 w-4" />
            {searchButtonLabel}
          </button>
        </div>
      ) : null}

      {/* نوار کنترل پایینی (وقتی «پیشرفته» باز است) – برای صفحات
+          «اعلامیه‌های واردات» و «اعلامیه‌های خرید از بورس کالا» */}
      {advancedOpen &&
       (isPurchaseAnnouncementsImportsPage || isPurchaseAnnouncementsBoursePage) &&
       fields.find((f) => f.type === 'submit' && f.name === 'search') ? (
        <div className="mt-3 flex items-center justify-end gap-2">
          {/* دکمه «فیلتر پیش‌فرض» با همان استایل بالای فرم */}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md h-9 text-sm border border-black px-3"
          >
            <AdvancedIconComponent className="h-4 w-4" />
            {advancedButtonLabel}
          </button>

          {/* دکمه «جستجو» سبز */}
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 h-9 text-sm text-white"
          >
            <IconSearch className="h-4 w-4" />
            {searchButtonLabel}
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
