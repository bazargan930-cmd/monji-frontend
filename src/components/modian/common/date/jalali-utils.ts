// src/components/modian/common/date/jalali-utils.ts
// استخراج از ModianJalaliDatePicker.tsx (منطق/ثابت‌ها)

/** تبدیل به Date معتبر برای Intl */
export function safeDate(input: Date): Date {
  return (input instanceof Date && !Number.isNaN(input.getTime())) ? input : new Date();
}

/** تبدیل اعداد فارسی/عربی به انگلیسی */
export function toEnDigits(s: string): string {
  return s
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 1776))
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 1632));
}

const faFmt = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long',
});

export function partsFa(d: Date) {
  const parts = faFmt.formatToParts(safeDate(d));
  const pick = (t: string): string => {
    const v = parts.find(p => p.type === t)?.value;
    return typeof v === 'string' ? v : '';
  };
  return {
    jy: Number(toEnDigits(pick('year'))),
    jm: Number(toEnDigits(pick('month'))),
    jd: Number(toEnDigits(pick('day'))),
    weekday: pick('weekday') as
      | 'شنبه' | 'یکشنبه' | 'دوشنبه' | 'سه‌شنبه' | 'چهارشنبه' | 'پنجشنبه' | 'جمعه',
  };
}

/** امروزِ شمسی */
export function jalaliNow() {
  return partsFa(new Date());
}

/** نگاشت سریع تاریخ شمسی → Date میلادی (برای UI کافی است) */
export function gDateFromJalali(jy: number, jm: number, jd: number): Date {
  const start = new Date(jy + 621, 0, 1);
  const cursor = new Date(start);
  for (let i = 0; i < 800; i++) {
    const p = partsFa(cursor);
    if (p.jy === jy && p.jm === jm && p.jd === jd) return cursor;
    cursor.setDate(cursor.getDate() + 1);
  }
  return start;
}

export const JALALI_YEARS = Array.from({ length: 1450 - 1360 + 1 }, (_, i) => 1360 + i);
export const JALALI_MONTH_NAMES = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];

/** طول ماه شمسی (تقریبی؛ کبیسه در TODO) */
export function monthLength(jy:number, jm:number){
  if (jm<=6) return 31;
  if (jm<=11) return 30;
  return 29; // TODO: کبیسه
}

/** نمایش رقم‌ها به فارسی *بدون* جداکنندهٔ هزارگان */
export const toFa = (n: number | string) => {
  const num = typeof n === 'number' ? n : Number(String(n).replace(/[^\d]/g, ''));
  return num.toLocaleString('fa-IR', { useGrouping: false });
};
