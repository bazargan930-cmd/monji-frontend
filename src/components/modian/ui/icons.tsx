import * as React from 'react';
import type { SVGProps } from 'react';

/** آیکون فیلتر (مطابق اسکچ سادهٔ فعلی صفحه) */
export function IconFilter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M3 4h18l-7 8v5l-4 3v-8L3 4z" />
    </svg>
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

/** آیکون شبکه/ستون‌ها (چهار مربع) */
export function IconColumns(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

/** آیکون جستجو (ذره‌بین) */
export function IconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

/** آیکون تقویم برای ورودی تاریخ */
export function IconCalendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/** آیکون فلش پایین برای Select */
export function IconChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}


