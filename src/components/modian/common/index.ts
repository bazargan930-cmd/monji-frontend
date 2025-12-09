//src/components/modian/common/index.ts
// Barrel for Modian common widgets (Phase D)
// export { ModianSidebar } from './ModianSidebar';
export { default as ModianJalaliDateField } from "./ModianJalaliDateField";
// موقتاً برای عقب‌سازگاری، DatePicker را از مسیر جدید UI ری‌اکسپورت می‌کنیم
export { default as ModianJalaliDatePicker } from "../ui/date/ModianJalaliDatePicker";
export { default as useMemoryPublicKey } from "./useMemoryPublicKey";
export * as memoryKeyUtils from "./memoryKey.utils";

// Shared search suite (صورتحساب‌ها، اعلان‌ها، قراردادها)
export { default as InvoicesSearchHeader } from "./search/InvoicesSearchHeader";
export { default as SearchByFilters } from "./search/SearchByFilters";
export type { FilterField } from "./search/SearchByFilters";
export { default as SearchByTaxId } from "./search/SearchByTaxId";

// Shared table shell & helpers
export { default as ColumnsVisibilityBar } from "./table/ColumnsVisibilityBar";
export { default as EmptyTableRow } from "./table/EmptyTableRow";
export { default as ScrollableTableShell } from "./table/ScrollableTableShell";

// بلوک مشترک جزئیات صورتحساب
export { default as InvoiceDetailSection } from "./InvoiceDetailSection";

// اکسپورت utilهای تاریخ جلالی (برای مصرف در سایر ماژول‌ها)
export {
  safeDate,
  toEnDigits,
  partsFa,
  jalaliNow,
  gDateFromJalali,
  JALALI_YEARS,
  JALALI_MONTH_NAMES,
  monthLength,
  toFa,
} from "./date/jalali-utils";
