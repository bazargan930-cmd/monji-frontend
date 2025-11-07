//src/components/modian/common/index.ts
// Barrel for Modian common widgets (Phase D)
// export { ModianSidebar } from './ModianSidebar';
export { default as ModianJalaliDateField } from "./ModianJalaliDateField";
// موقتاً برای عقب‌سازگاری، DatePicker را از مسیر جدید UI ری‌اکسپورت می‌کنیم
export { default as ModianJalaliDatePicker } from "../ui/date/ModianJalaliDatePicker";
export { default as useMemoryPublicKey } from "./useMemoryPublicKey";
export * as memoryKeyUtils from "./memoryKey.utils";
// اکسپورت utilهای تاریخ جلالی (برای مصرف در سایر ماژول‌ها)
export {
  safeDate, toEnDigits, partsFa, jalaliNow, gDateFromJalali,
  JALALI_YEARS, JALALI_MONTH_NAMES, monthLength, toFa
} from "./date/jalali-utils";
