
//src\components\modian\common\ToolbarControls.tsx
'use client';

import React from 'react';

/** دکمه آیکونی استاندارد با حالت فعال/غیرفعال */
export function ToolbarIconButton({
  title,
  ariaLabel,
  isActive = false,
  onClick,
  buttonRef,
  children,
}: {
  title?: string;
  ariaLabel?: string;
  isActive?: boolean;
  onClick?: () => void;
  buttonRef?: React.Ref<HTMLButtonElement>;
  children: React.ReactNode;
}) {
  const cls =
    'h-9 w-9 border rounded-md flex items-center justify-center bg-white hover:bg-gray-50 ' +
    (isActive ? 'text-green-600 border-green-500' : 'text-gray-600');
  return (
    <button
      ref={buttonRef}
      type="button"
      className={cls}
      title={title}
      aria-label={ariaLabel || title}
      aria-pressed={isActive}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/** ورودی جستجو کوچک + دکمه آیکون جستجو */
export function ToolbarSearch({
  value,
  onChange,
  onSearch,
  placeholder = 'جستجو',
  widthClass = 'w-60',
}: {
  value: string;
  onChange: (v: string) => void;
  onSearch?: () => void;
  placeholder?: string;
  widthClass?: string;
}) {
  return (
    <div className="flex items-center gap-1">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`border rounded-md pr-3 py-2 text-right ${widthClass}`}
      />
      <button
        type="button"
        className="h-9 w-9 border rounded-md flex items-center justify-center text-gray-600 bg-white hover:bg-gray-50"
        title="جستجو"
        aria-label="جستجو"
        onClick={onSearch}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
}

/** ظرف چیدمان: راست (گروه آیکون‌ها/جستجو) و چپ (اکشن اصلی) */
export function ToolbarBar({
  right,
  left,
  className = '',
}: {
  right?: React.ReactNode;
  left?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-between mb-3 ${className}`}>
      <div className="flex items-center gap-1">{right}</div>
      <div className="flex items-center gap-2">{left}</div>
    </div>
  );
}

/** آیکون استاندارد «نمایش ستون‌ها»:
 *  یک مربع با دو خط عمودی مشکی که داخل مربع را به سه قسمت مساوی تقسیم می‌کند. */
export function ColumnsIcon({
  className = 'h-5 w-5',
  stroke = '#111',
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {/* کادر مربع داخلی (بزرگ‌تر: 16px با حاشیه 4px) */}
      <rect x="4" y="4" width="16" height="16" rx="1.5" fill="none" stroke={stroke} strokeWidth="2" />
      {/* دو خط عمودی برای سه قسمت مساوی (در موقعیت‌های 1/3 و 2/3) */}
      <line x1="9.33" y1="4" x2="9.33" y2="20" stroke={stroke} strokeWidth="2" />
      <line x1="14.67" y1="4" x2="14.67" y2="20" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}
