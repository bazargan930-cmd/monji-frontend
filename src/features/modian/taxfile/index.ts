//src\features\modian\taxfile\index.ts

// Barrel for Modian Taxfile (Admin) (Phase D)
// export { RegistrationCard } from './RegistrationCard';

// Barrel: صادرکنندهٔ صفحات و کامپوننت‌های «پرونده مالیاتی»
// هدف: جلوگیری از import عمیق از مسیرهای فرعی
export { default as TaxfileLayoutView } from './TaxfileLayoutView';
export { default as TaxfilePageView } from './TaxfilePageView';
export { default as TaxfilePage } from './TaxfilePageView';
export { default as TaxfileSubmenu } from './TaxfileSubmenu';

// Bank Accounts
export { BankAccountsPage } from './bank-accounts/BankAccountsPage';
export { default as BankAccountsHelpContent } from './bank-accounts/BankAccountsHelpContent';

// Bills
export { default as BillsPage } from './bills/BillsPage';
export { default as BillsHelpContent } from './bills/BillsHelpContent';

// Registration Information
export { default as RegistrationInfoPage } from './registration-information/RegistrationInformationPage';
export * from './registration-information/types';

// اطمینان از خروجی ثابت/نوع‌های نام‌برده (در صورت نبود export نامی در فایل مبدا، این خط را نگه دارید)
export { REGISTRATION_BRANCHES } from './registration-information/RegistrationInformationPage';
export type { BranchInfo } from './registration-information/types';

// سازگارسازی با مصرف‌کننده‌های فعلی:
// برخی صفحات از نام RegistrationInformation استفاده کرده‌اند.
// این alias، بدون تغییر سایر فایل‌ها، import موجود را به خروجی درست متصل می‌کند.
export { default as RegistrationInformation } from './registration-information/RegistrationInformationPage';

// Trusted Companies
export { default as TrustedCompaniesPage } from './trusted-companies/TrustedCompaniesPage';
export { default as TrustedHelpContent } from './trusted-companies/TrustedHelpContent';

// Memory UID (list/add/details/edit/page)
export { default as MemoryUIDPage } from './memory-uid/Memory-uidpage';
export { default as MemoryUIDHelpContent } from './memory-uid/MemoryUidHelpContent';
export { default as MemoryUIDAddPage } from './memory-uid/add/Addpage';
export { default as MemoryUIDDetailsPage } from './memory-uid/details/Detailspage';
export { default as MemoryUIDEditPage } from './memory-uid/edit/page';
export { default as PaymentsPage } from './payments/PaymentsPage';