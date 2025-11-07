declare module 'moment-jalaali' {
  // تعریف مینیمال بدون import برای جلوگیری از خطای Lint
  // از unknown استفاده می‌کنیم تا هشدار no-explicit-any هم حذف شود
  const moment: unknown;
  export = moment;
}

// افزودن اعلانِ متدِ سفارشی بدون وابستگی به import
declare namespace moment {
  function loadPersian(opts?: { usePersianDigits: boolean }): void;
}

