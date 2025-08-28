
// src/components/modian/taxfile/registration-information/types.ts
// اسکیمای نهایی مطابق سند «صفحه اطلاعات ثبت نامی.txt»
// توجه: تمام فیلدها string هستند تا با فرمت‌های نمایشی (ماسک/خط تیره/…)
// بدون از دست دادن اطلاعات سازگار باشند.

/** اطلاعات ثبت‌نامی > اطلاعات پرونده (بالای صفحه) */
export interface RegistrationBasicInfo {
  /** نام تجاری */
  tradeName: string;
  /** کد ملی/کدفراگیر/شناسه ملی */
  nationalIdentifier: string;
  /** شماره رهگیری ثبت نام */
  registrationTrackingNumber: string;
  /** نام شرکت/مودی/تشکل قانونی/واحد صنفی */
  taxpayerName: string;

  /** نوع مودی */
  taxpayerType: string;
  /** شماره اقتصادی */
  economicCode: string;
  /** شماره ثبت/شماره پرونده کسب */
  businessRegistrationNumber: string;
  /** تاریخ شروع فعالیت */
  activityStartDate: string;
}

/** اطلاعات تماس، نشانی و اقامتگاه قانونی */
export interface LegalContactInfo {
  /** استان */
  province: string;
  /** شهرستان */
  county: string;
  /** شهر */
  city: string;
  /** کد پستی */
  postalCode: string;
  /** تلفن ثابت */
  landline: string;
  /** شماره موبایل */
  mobile: string;
  /** آدرس */
  address: string;
}

/** جدول «اطلاعات شعب» در انتهای صفحه */
export interface BranchInfo {
  /** ردیف */
  row: number | string;
  /** نام شعبه */
  branchName: string;
  /** کد شعبه */
  branchCode: string;
  /** استان */
  province: string;
  /** شهر */
  city: string;
  /** شهرستان */
  county: string;
  /** کد پستی */
  postalCode: string;
  /** آدرس شعبه */
  branchAddress: string;
}

/** مدل تجمیعی صفحه اطلاعات ثبت‌نامی */
export interface RegistrationInfo {
  basic: RegistrationBasicInfo;
  contact: LegalContactInfo;
  branches: BranchInfo[];
}

/** نگاشت لیبل‌ها برای رندر مطابق سند (ستون‌های بالا) */
export const BASIC_LEFT_ORDER: Array<[keyof RegistrationBasicInfo, string]> = [
  ["tradeName", "نام تجاری"],
  ["nationalIdentifier", "کد ملی/کدفراگیر/شناسه ملی"],
  ["registrationTrackingNumber", "شماره رهگیری ثبت نام"],
  ["taxpayerName", "نام شرکت/مودی/تشکل قانونی/واحد صنفی"],
];

export const BASIC_RIGHT_ORDER: Array<[keyof RegistrationBasicInfo, string]> = [
  ["taxpayerType", "نوع مودی"],
  ["economicCode", "شماره اقتصادی"],
  ["businessRegistrationNumber", "شماره ثبت/شماره پرونده کسب"],
  ["activityStartDate", "تاریخ شروع فعالیت"],
];

/** سرستون‌های جدول شعب دقیقاً مطابق سند و به همان ترتیب */
export const BRANCH_TABLE_COLUMNS: Array<keyof BranchInfo | { key: keyof BranchInfo; label: string }> = [
  { key: "row",           label: "ردیف" },
  { key: "branchName",    label: "نام شعبه" },
  { key: "branchCode",    label: "کد شعبه" },
  { key: "province",      label: "استان" },
  { key: "city",          label: "شهر" },
  { key: "county",        label: "شهرستان" },
  { key: "postalCode",    label: "کد پستی" },
  { key: "branchAddress", label: "آدرس شعبه" },
];

