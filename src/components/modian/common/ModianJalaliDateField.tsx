// src/components/modian/common/ModianJalaliDateField.tsx

'use client';
import React, { useRef, useState } from 'react';
import { toFaDigits } from '../../../lib/i18n/digits';
import { ModianJalaliDatePicker } from '@/components/modian/ui';
import { parseJalali } from '@/lib/date/jalali';
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
          setDisplay(jalaliStr);
          // تبدیل رشتهٔ جلالی به ISO با یوتیل پروژه
          const iso = parseJalali(jalaliStr);
          onChangeISO?.(iso);
        }}
      />
    </div>
  );
}
