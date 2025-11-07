// src/components/modian/common/search/SearchByFilters.tsx
'use client';
import * as React from 'react';
import { Card, FieldGrid, FormField, IconChevronDown, IconSearch, IconFilter } from '@/components/modian/ui';

export type Option = { value: string; label: string };

export type FilterField =
  | { type: 'select'; name: string; label: string; options: Option[] }
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

  const handleSelect = (name: string, v: string) =>
    setValues((s) => ({ ...s, [name]: v }));

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={submit} dir="rtl">
      {/* ردیف ۱: عنوان بخش */}
      <div className="text-xs sm:text-sm text-gray-600 mb-2">{summaryTitle}</div>

      {/* ردیف ۲: سه فیلد خلاصه (سال/دوره، نقش مودی، وضعیت صورتحساب) */}
      <div className="flex flex-wrap items-center gap-2">
        {fields.map((f, idx) => {
          if (f.type === 'select') {
            return (
              <select
                key={idx}
                aria-label={f.label}
                onChange={(e) => handleSelect(f.name, e.target.value)}
                className="h-9 rounded border border-gray-300 bg-white px-2 text-sm"
                defaultValue=""
              >
                <option value="">{f.label}</option>
                {f.options.map((op) => (
                  <option key={op.value} value={op.value}>
                    {op.label}
                  </option>
                ))}
              </select>
            );
          }
          if (f.type === 'period') {
            return (
              <select
                key={idx}
                aria-label={f.label}
                onChange={(e) => handleSelect(f.name, e.target.value)}
                className="h-9 rounded border border-gray-300 bg-white px-2 text-sm"
                defaultValue=""
              >
                <option value="">{f.label}</option>
                {/* گزینه‌های نمایشی */}
                <option value="1404-Q2">بهار ۱۴۰۴</option>
                <option value="1404-Q3">تابستان ۱۴۰۴</option>
              </select>
            );
          }
          if (f.type === 'button' && f.name === 'advanced') {
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setAdvancedOpen((s) => !s)}
                className="inline-flex items-center gap-1 rounded-md border px-3 h-9 text-sm text-gray-700 hover:bg-gray-50"
                aria-expanded={advancedOpen}
                aria-controls="advanced-panel"
              >
                {f.label}
                <IconChevronDown className={`h-4 w-4 transition-transform ${advancedOpen ? 'rotate-180' : ''}`} />
              </button>
            );
          }
          if (f.type === 'submit' && f.name === 'search') {
            // دکمه جستجو در حالت «بسته» زیر همین ردیف می‌آید؛
            // در حالت «باز»، پایین پنل پیشرفته رندر می‌شود (در ادامه).
            return !advancedOpen ? (
              <div key="actions" className="ms-auto flex items-center gap-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 h-9 text-sm text-white"
                >
                  <IconSearch className="h-4 w-4" />
                  {f.label}
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md border px-3 h-9 text-sm"
                >
                  <IconFilter className="h-4 w-4" />
                  فیلتر پیش‌فرض
                </button>
              </div>
            ) : null;
          }
          return null;
        })}
      </div>

      {/* ردیف ۳: پنل «پیشرفته» (باز/بسته) */}
      {advancedOpen ? (
        <Card id="advanced-panel" className="mt-3">
          <FieldGrid cols={2}>
            {/* سطر ۱ */}
            <FormField label="نقش مودی" variant="floating">
              <select className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm">
                <option>انتخاب کنید…</option>
                <option value="seller">فروشنده</option>
                <option value="buyer">خریدار</option>
              </select>
            </FormField>
            <FormField label="وضعیت صورتحساب" variant="floating">
              <select className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm">
                <option>انتخاب کنید…</option>
                <option value="pending">در انتظار واکنش</option>
                <option value="approved">تأیید شده</option>
              </select>
            </FormField>

            {/* سطر ۲ */}
            <FormField label="تاریخ صدور صورتحساب از" variant="floating">
              <input type="date" className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm" />
            </FormField>
            <FormField label="تا تاریخ صدور صورتحساب" variant="floating">
              <input type="date" className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm" />
            </FormField>

            {/* سطر ۳ */}
            <FormField label="تاریخ درج در کارپوشه از" variant="floating">
              <input type="date" className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm" />
            </FormField>
            <FormField label="تا تاریخ درج در کارپوشه" variant="floating">
              <input type="date" className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm" />
            </FormField>

            {/* سطر ۴ */}
            <FormField label="مجموع صورتحساب از (ریال)" variant="floating">
              <input inputMode="numeric" className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm" />
            </FormField>
            <FormField label="تا مجموع صورتحساب (ریال)" variant="floating">
              <input inputMode="numeric" className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm" />
            </FormField>

            {/* سطر ۵ */}
            <FormField label="موضوع صورتحساب" variant="floating">
              <input className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm" />
            </FormField>
            <FormField label="الگوی صورتحساب" variant="floating">
              <input className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm" />
            </FormField>

            {/* سطر ۶ */}
            <FormField label="نام فروشنده/خریدار" variant="floating">
              <input className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm" />
            </FormField>
            <FormField label="کد مالیاتی طرف معامله" variant="floating">
              <input className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm" />
            </FormField>

            {/* سطر ۷ */}
            <FormField label="شماره مالیاتی صورتحساب" variant="floating">
              <input className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm" />
            </FormField>
            <FormField label="کد رهگیری/شناسه پرداخت" variant="floating">
              <input className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm" />
            </FormField>
          </FieldGrid>

          {/* چک‌باکس انتهای سطر آخر */}
          <div className="mt-3 flex items-center gap-2">
            <input id="onlyWithAction" type="checkbox" className="h-4 w-4" />
            <label htmlFor="onlyWithAction" className="text-sm text-gray-700">
              فقط موارد دارای اقدام
            </label>
          </div>

          {/* اکشن‌ها: پایینِ پنل و سمت چپ (مطابق اسکرین) */}
          <div className="mt-4 flex items-center gap-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 h-9 text-sm text-white"
            >
              <IconSearch className="h-4 w-4" />
              جستجو
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border px-3 h-9 text-sm"
            >
              <IconFilter className="h-4 w-4" />
              فیلتر پیش‌فرض
            </button>
          </div>
        </Card>
      ) : null}
    </form>
  );
}
