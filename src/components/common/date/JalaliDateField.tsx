// src/components/common/date/JalaliDateField.tsx
'use client';
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { ISOString, parseJalali, toJalali } from '@/lib/date/jalali';
import { IconCalendar } from '@/components/modian/ui'; // آیکون داخلی پروژه :contentReference[oaicite:1]{index=1}

type Props = {
  id: string;
  label?: string;
  valueISO?: ISOString | null;
  onChangeISO: (value: ISOString | null) => void;
  placeholder?: string; // پیش‌فرض: "انتخاب کنید"
  className?: string;
};

export default function JalaliDateField({ id, label, valueISO, onChangeISO, placeholder = 'انتخاب کنید', className }: Props) {
  const [display, setDisplay] = useState<string>(valueISO ? toJalali(valueISO) : '');
  const [open, setOpen] = useState(false);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const error = useMemo(() => (display && !parseJalali(display) ? 'تاریخ نامعتبر' : null), [display]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (hostRef.current && !hostRef.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <div ref={hostRef} className={`relative ${className ?? ''}`}>
      <input
        id={id}
        type="text"
        dir="ltr"
        value={display}
        onChange={(e) => {
          const v = e.target.value;
          setDisplay(v);
          onChangeISO(parseJalali(v));
        }}
        onFocus={() => setOpen(true)}
        placeholder={placeholder}
        className="w-full border rounded-md px-3 py-2 pr-10"
        aria-label={label}
      />
      <span className="pointer-events-none absolute inset-y-0 left-2 flex items-center text-gray-500">
        <IconCalendar className="h-4 w-4" />
      </span>
      {open && (
        <div className="absolute z-30 mt-1 w-64 bg-white border rounded-md shadow p-2" data-jdp>
          {/* اینجا در آینده می‌توانیم DatePicker کتابخانه‌ای وصل کنیم؛ فعلاً ورودی دستی کفایت می‌کند */}
          <p className="text-xs text-gray-500 px-1 py-0.5">تاریخ را به صورت ۱۴۰۴/۰۷/۲۳ وارد کنید</p>
        </div>
      )}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
