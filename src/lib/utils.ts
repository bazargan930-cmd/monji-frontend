import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';




/** حذف کلاس‌های تکراری TailWind */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** دریافت تاریخ شمسی امروز به فرم کامل: شنبه ۱۶ مرداد ۱۴۰۴ */
const moment = require('moment-jalaali');
moment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

export function getTodayJalali(): string {
  return moment().format('dddd jD jMMMM jYYYY');
}
