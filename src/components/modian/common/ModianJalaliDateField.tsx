// src/components/modian/common/ModianJalaliDateField.tsx

'use client';
import React, { useEffect, useRef, useState } from 'react';

import { ModianJalaliDatePicker } from '@/components/modian';
import { parseJalali } from '@/lib/date/jalali';
import { toFaDigits } from '@/lib/i18n/digits';
type Props = {
  id?: string;
  label?: string;
  valueISO?: string | null;
  placeholder?: string;
  onChangeISO?: (iso: string | null) => void;
  className?: string;
};

/** توجه: input «فقط-خواندنی» است و با کلیک روی هر نقطه باز می‌شود */
export default function ModianJalaliDateField({
  id: _id,
  label,
  valueISO: _valueISO,
  placeholder = 'انتخاب کنید',
  onChangeISO,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState<string>(''); // رشته‌ی شمسی برای UI
  const anchorRef = useRef<HTMLDivElement>(null);
  
  const toLatinDigits = (input: string) =>
    (input || '')
      .replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
      .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));

  const formatISOToJalali = (iso: string) => {
    const v = (iso || '').trim();
    if (!v) return '';

    const vLatin = toLatinDigits(v);

    // اگر ورودی خودش شمسی بود، همان را برگردان
    const jalaliLike = vLatin.match(/^(\d{4})[-/](\d{2})[-/](\d{2})(?:\b|T)?/);
    if (jalaliLike) {
      const year = Number(jalaliLike[1]);
      if (year >= 1300 && year <= 1499) {
        return `${jalaliLike[1]}/${jalaliLike[2]}/${jalaliLike[3]}`;
      }
    }

    // ISO گرگوری: yyyy-mm-dd
    const gregIso = vLatin.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (gregIso) {
      const y = Number(gregIso[1]);
      const m = Number(gregIso[2]);
      const d = Number(gregIso[3]);
      if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
        const date = new Date(Date.UTC(y, m - 1, d));
        try {
          return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'UTC',
          }).format(date);
        } catch {
          return v;
        }
      }
    }

    try {
      return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'UTC',
      }).format(new Date(vLatin));
    } catch {
      return v;
    }
  };

  const normalizeJalaliComparable = (jalali: string) => {
    const v = toLatinDigits((jalali || '').trim()).replace(/-/g, '/');
    const m = v.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
    if (!m) return '';
    const yy = m[1];
    const mm = m[2].padStart(2, '0');
    const dd = m[3].padStart(2, '0');
    return `${yy}/${mm}/${dd}`;
  };

  // سینک شدن نمایش با مقدار کنترل‌شونده (برای برگشت به مرحله قبل)
  useEffect(() => {
    const v = (_valueISO || '').trim();
    if (!v) {
      if (display) setDisplay('');
      return;
    }
    const next = formatISOToJalali(v);
    if (next && next !== display) setDisplay(next);
  }, [_valueISO]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`w-full ${className || ''}`}>
      {label && <div className="text-xs text-gray-600 mb-1 text-right">{label}</div>}

      {/* ظرف کلیک‌پذیر */}
      <div ref={anchorRef}
           onClick={()=>setOpen(true)}
           /* راست‌به‌چپ برای قرارگیری متن در سمت راست و آیکون در چپ */
           dir="rtl"
           className="relative h-10 w-full cursor-pointer rounded border border-gray-300 bg-white
                      pr-4 pl-14 flex items-center justify-between text-sm">
        {/* آیکون تقویم تک‌رنگ مانند سایت اصلی (stroke currentColor) */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-700">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M8 3v4M16 3v4M3 9h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </span>
        {/* دکمه‌ی پاک‌کردن مقدار (ضربدر) – فقط وقتی فیلد مقدار دارد نشان داده می‌شود */}
        {display && (
          <button
            type="button"
            aria-label="پاک کردن تاریخ"
            title="پاک کردن"
            className="absolute left-8 top-1/2 -translate-y-1/2 text-black hover:opacity-80"
            onClick={(e) => {
              e.stopPropagation();           // از باز شدن پیکر جلوگیری شود
              setDisplay('');                // متن نمایشی پاک شود
              onChangeISO?.(null);           // مقدار اصلی پاک شود
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        )}      
        {/* متن/placeholder — کاملاً راست‌چین */}
        <span
          className={`block w-full truncate text-right ${display ? 'text-gray-800' : 'text-gray-400'}`}
        >
          {display ? toFaDigits(display) : placeholder}
        </span>
      </div>

      {/* پیکرِ تقویم */}
      <ModianJalaliDatePicker
        anchorEl={anchorRef.current}
        open={open}
        onClose={()=>setOpen(false)}
        onPick={(jalaliStr)=>{
          // قانون: اگر برای این فیلد min تعیین شده، تاریخ‌های قبل از آن قابل انتخاب نباشند
          const minMap =
            typeof window !== 'undefined'
              ? ((window as unknown as { __monjiMinJalaliById?: Record<string, string> })
                  .__monjiMinJalaliById ?? {})
              : {};
          const minJalali = _id ? (minMap[_id] || '').trim() : '';
          if (minJalali) {
            const pickedComparable = normalizeJalaliComparable(jalaliStr);
            const minComparable = normalizeJalaliComparable(minJalali);
            if (pickedComparable && minComparable && pickedComparable < minComparable) {
              // انتخاب را نادیده بگیر (عملاً قبل از min غیرقابل انتخاب می‌شود)
              return;
            }
          }

          setDisplay(jalaliStr);
          // تبدیل رشتهٔ جلالی به ISO با یوتیل پروژه
          const iso = parseJalali(jalaliStr);
          onChangeISO?.(iso);
        }}
      />
    </div>
  );
}

