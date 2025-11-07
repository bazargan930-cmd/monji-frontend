//src/hooks/useDigits.ts
import { toEnDigits, toFaDigits, formatNumberFa, normalizeDigitsForLogic } from '@/lib/i18n/digits';

export function useDigits() {
  return {
    toFaDigits,
    toEnDigits,
    formatNumberFa,
    normalizeDigitsForLogic,
  };
}


