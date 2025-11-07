//src/lib/i18n/digits.ts
// Utility functions for site-wide digit localization (FA/EN).
// Display should be Persian (fa-IR), logic/state/API must remain English.

const FA_DIGITS = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
const EN_DIGITS = ['0','1','2','3','4','5','6','7','8','9'];

/** Convert any numeric characters in a string to Persian digits. */
export function toFaDigits(input: unknown): string {
  const s = String(input ?? '');
  return s.replace(/\d/g, (d) => FA_DIGITS[Number(d)]);
}

/** Convert any Persian (and Arabic) digits in a string to Latin English digits. */
export function toEnDigits(input: unknown): string {
  const s = String(input ?? '');
  // Persian ۰-۹: \u06F0-\u06F9  | Arabic ٠-٩: \u0660-\u0669
  return s
    .replace(/[\u06F0-\u06F9]/g, (ch) => EN_DIGITS[ch.charCodeAt(0) - 0x06F0])
    .replace(/[\u0660-\u0669]/g, (ch) => EN_DIGITS[ch.charCodeAt(0) - 0x0660]);
}

/** Number formatter helper when you deal with a pure number (not a mixed string). */
export function formatNumberFa(n: number | string, options?: Intl.NumberFormatOptions): string {
  const num = Number(toEnDigits(n));
  if (Number.isNaN(num)) return toFaDigits(String(n));
  return new Intl.NumberFormat('fa-IR', options).format(num);
}

/** Normalize user input for calculations / API. */
export function normalizeDigitsForLogic(input: unknown): string {
  return toEnDigits(input);
}


