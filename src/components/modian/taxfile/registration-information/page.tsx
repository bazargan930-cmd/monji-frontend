// src/components/modian/taxfile/registration-information/page.tsx
'use client';

import { useState, useEffect } from 'react';
// Footer در لایهٔ والد رندر می‌شود؛ در این صفحه نیاز نیست

// آدرس بک‌اند (قابل‌تغییر با NEXT_PUBLIC_API_BASE)
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';

// ----- Final locked DTO/Types for Registration page -----
export type RegistrationInfo = {
  // اطلاعات پرونده
  tradeName: string; // نام تجاری
  nationalOrForeignOrLegalId: string; // کد ملی/کدفراگیر/شناسه ملی
  registrationTrackingNumber: string; // شماره رهگیری ثبت نام
  entityName: string; // نام شرکت/مودی/تشکل قانونی/واحد صنفی
  taxpayerType: string; // نوع مودی
  economicCode: string; // شماره اقتصادی
  businessRegistrationNo: string; // شماره ثبت/شماره پرونده کسب
  activityStartDate: string; // تاریخ شروع فعالیت

  // اطلاعات تماس،نشانی و اقامتگاه قانونی
  province: string; // استان
  city: string; // شهر
  county: string; // شهرستان
  postalCode: string; // کد پستی
  landline: string; // تلفن ثابت
  mobile: string; // شماره موبایل
  address: string; // آدرس

  // سکشن‌های پایین
  branches: Array<{
    row: number; // ردیف
    branchCode: string; // کد شعبه
    branchName: string; // نام شعبه
    province: string; // استان
    city: string; // شهر
    county: string; // شهرستان
    postalCode: string; // کدپستی
    branchAddress: string; // آدرس شعبه
  }>;

  members: Array<{
    row: number; // ردیف
    fullNameOrCompany: string; // نام و نام خانوادگی/نام شرکت
    idCode: string; // کدملی/شناسه ملی/کدفراگیر اتباع خارجی
    nationality: string; // ملیت
    role: string; // سمت
    personType: string; // نوع شخص
  }>;

  activities: Array<{
    row: number; // ردیف
    activityPercent: number; // درصد فعالیت
    isicCode: string; // کد آیسیک
    isicTitle: string; // عنوان آیسیک
    activityType: string; // نوع فعالیت
    activityTitle: string; // عنوان فعالیت
  }>;

  taxOffices: Array<{
    row: number; // ردیف
    officeId: string; // شناسه اداره
    officeName: string; // نام اداره
    unitCode: string; // کد واحد
    taxType: string; // نوع مالیات
  }>;
};


 type KV = {
   label: string;
   value?: string | number | null;
   colSpan?: number; // برای ردیف‌هایی مثل «آدرس» که باید یک‌سره نمایش داده شوند
 };

// هر ردیف دو آیتم دارد؛ دومی می‌تواند خالی باشد (برای مواردی مثل «فکس» در ستون چپ)
type Row = [KV, (KV | null)?]; 

// نگاشت کد نوع فعالیت به برچسب (fallback: نمایش مقدار خام)
const ACTIVITY_TYPE_LABEL: Record<string, string> = {
 'تولیدی':   '1',
 'خدماتی':   '2',
 'بازرگانی': '3',
 'سایر':     '4',
};

// =========================
// انواع نهایی (DTO/Types) برای API
// =========================
export type TaxfileInfo = {
  نام_تجاری: string;
  نوع_مودی: string;
  شماره_رهگیری_ثبت_نام: string;
  شماره_اقتصادی: string;
  کد_ملی: string;             // «کد ملی/کد فراگیر/شناسه ملی» در نمایشیِ بالا استفاده می‌شود
  شماره_ثبت: string;          // «شماره ثبت/شماره پرونده کسب»
  نام_شرکت_یا_واحد: string;   // «نام شرکت/مودی/تشکل قانونی/واحد صنفی»
  تاریخ_شروع_فعالیت: string;
};

export type LegalInfo = {
  استان: string;
  شهرستان: string;
  شهر: string;
  کدپستی: string;
  شماره_موبایل: string;
  تلفن_ثابت: string;
  آدرس: string;
  فکس: string;
};

// --- جدید: تایپ و داده‌ی قابل استفادهٔ مجدد برای «اطلاعات شعب» ---
export type BranchInfo = {
  ردیف: number;
  کد_شعبه: string;
  نام_شعبه: string;
  استان: string;
  شهر: string;
  شهرستان: string;
  کدپستی: string;
  آدرس_شعبه: string;
};

export type MemberInfo = {
  ردیف: number;
  نام: string;   // «نام و نام خانوادگی/نام شرکت»
  شناسه: string; // «کد ملی/شناسه ملی/کدفراگیر اتباع خارجی»
  ملیت: string;
  سمت: string;
  نوع_شخص: string;
  درصد_سهم: string;
};

export type ActivityInfo = {
  ردیف: number;
  درصد_فعالیت: string;
  عنوان_فعالیت: string;
  عنوان_آیسیک: string;
  کد_آیسیک: string;
};

export type TaxOfficeInfo = {
  ردیف: number;
  نام_اداره: string;
  شناسه_اداره: string;
  کد_واحد: string;
  نوع_مالیات: string;
};

export type RegistrationDTO = {
  taxfile: TaxfileInfo;
  legal: LegalInfo;
  branches: BranchInfo[];
  members: MemberInfo[];
  activities: ActivityInfo[];
  offices: TaxOfficeInfo[];
};

// — تبدیل ارقام لاتین به فارسی برای نمایش (فقط UI)
function toFaDigits(input: string | number | null | undefined) {
  if (input === null || input === undefined) return '';
  const map = '۰۱۲۳۴۵۶۷۸۹';
  return String(input).replace(/\d/g, d => map[Number(d)]);
}

export const REGISTRATION_BRANCHES: BranchInfo[] = [
  {
    ردیف: 1,
    کد_شعبه: '0001',
    نام_شعبه: 'شعبه مرکزی',
    استان: 'تهران',
    شهر: 'تهران',
    شهرستان: 'جنت آباد',
    کدپستی: '13471210',
    آدرس_شعبه: 'ایران تهران پلاک ۱ سایت آموزشی منجی',
  },
];

function InfoSection({
  title,
  rows,
}: {
  title: string;
  rows: Row[];
}) {
  return (
    <section className="relative border border-green-600 rounded-md p-4 pb-3 bg-white">
      {/* لیبل بالای کادر (نه روی بردر) */}
      <span className="absolute -top-7 right-8 md:right-12 lg:right-0">
        <span className="inline-block bg-green-600 text-white text-xs md:text-sm px-3 py-1 rounded shadow">
          {title}
        </span>
      </span>

      {/* خط عمودی کم‌رنگ بین دو ستون (مطابق اسکرین اصلی) */}
      <span className="pointer-events-none absolute inset-y-4 left-1/2 w-px bg-gray-200" />    
      {/* چهار ستون: [label,value,label,value]؛ در حالت colSpan==2 مقدار، سه ستون را می‌گیرد */}
      <div className="grid grid-cols-1 gap-4 mt-2">
        {rows.map((pair, idx) => {
          const [a, b] = pair;
          return (
            //* فاصلهٔ افقی بیشتر، مخصوصاً حوالی خط عمودی وسط */
            <div key={idx} className="grid grid-cols-4 items-center gap-y-2 gap-x-20 text-sm">
              {/* ستون ۱: لیبل آیتم اول */}
              <span className="text-gray-500 text-right">{a?.label}</span>
              {/* ستون ۲..۴: مقدار آیتم اول (در صورت colSpan=2 سه‌ستونه) */}
              <span
                className={`text-gray-900 font-medium text-right ${a?.colSpan === 2 ? 'col-span-3' : ''}`}
              >
                {toFaDigits(a?.value ?? '') || '—'}
              </span>

              {/* اگر آیتم دوم داشتیم و colSpan=2 نبود، لیبل/مقدار دوم را رندر کن */}
              {b && a?.colSpan !== 2 && (
                <>
                  {/* پَدینگ/مارجین سمتِ چپ فقط برای ستون دوم تا از دیوایدر فاصله بگیرد */}
                  <span className="text-gray-500 text-right ml-4 md:ml-6">{b.label}</span>
                  <span className="text-gray-900 font-medium text-right ml-4 md:ml-6">
                    {toFaDigits(b.value ?? '') || '—'}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ✅ تنها اکسپورت پیش‌فرض: همین تابع باید رندر شود
export default function RegistrationInformation() {
  const [data, setData] = useState<RegistrationDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // تب‌ها را بی‌قیدوشرط تعریف کن تا ترتیب هوک‌ها ثابت بماند
   const tabs = [
     'اطلاعات شعب',
     'اطلاعات پرونده-اعضا',
     'اطلاعات پرونده‌-فعالیت ها-مجوزها',
     'اطلاعات پرونده-اداره مالیاتی',
   ];
   const [activeTab, setActiveTab] = useState<string | null>(null);
   useEffect(() => {
     if (!activeTab && tabs.length) setActiveTab(tabs[0]);
   }, [activeTab, tabs]);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${API_BASE}/simulators/modian/registration`, {
          credentials: 'include',
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json as RegistrationDTO);
      } catch (e: any) {
        setError(e?.message ?? 'خطای نامشخص');
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

    if (loading) return <div className="p-6 text-sm text-gray-600">در حال بارگذاری…</div>;
  if (error)   return <div className="p-6 text-sm text-red-600">خطا در دریافت اطلاعات: {error}</div>;
  if (!data)   return <div className="p-6 text-sm text-gray-600">داده‌ای یافت نشد.</div>;




  const { taxfile, legal } = data;
  const branches   = data.branches ?? [];
  const members    = data.members ?? [];
  const activities = data.activities ?? [];
  const offices    = data.offices ?? [];


  return (
    <>
    <div className="lg:pr-4 pr-2">
      {/* تیتر صفحه */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="relative -top-4 leading-tight text-lg font-semibold text-gray-800">
          اطلاعات ثبت نامی پرونده مالیاتی
        </h1>
      </div>
      <div className="space-y-12 mt-12">
        {/* سکشن ۱ */}
        <InfoSection
          title="اطلاعات پرونده"
          rows={[
            // ردیف 1
            [
              { label: 'نام تجاری', value: data.taxfile.نام_تجاری },
              { label: 'نوع مودی', value: data.taxfile.نوع_مودی },
            ],
            // ردیف 2
            [
              { label: 'کد ملی/کدفراگیر/شناسه ملی', value: data.taxfile.کد_ملی },
              { label: 'شماره اقتصادی', value: data.taxfile.شماره_اقتصادی },
            ],
            // ردیف 3
            [
              { label: 'شماره رهگیری ثبت نام', value: data.taxfile.شماره_رهگیری_ثبت_نام },
              { label: 'شماره ثبت/شماره پرونده کسب', value: data.taxfile.شماره_ثبت },
            ],
            // ردیف 4
            [
              { label: 'نام شرکت/مودی/تشکل قانونی/واحد صنفی', value: data.taxfile.نام_شرکت_یا_واحد },
              { label: 'تاریخ شروع فعالیت', value: data.taxfile.تاریخ_شروع_فعالیت },
            ],
          ]}
        />
        {/* سکشن ۲ */}
        <InfoSection
          title="اطلاعات تماس نشانی و اقامتگاه قانونی"
          rows={[
            // ردیف 1
            [
              { label: 'استان', value: data.legal.استان },
              { label: 'شهر', value: data.legal.شهر },
            ],
            // ردیف 2
            [
              { label: 'شهرستان', value: data.legal.شهرستان },
              { label: 'کد پستی', value: data.legal.کدپستی },
            ],
            // ردیف 3
            [
              { label: 'شماره موبایل', value: data.legal.شماره_موبایل },
              { label: 'تلفن ثابت', value: data.legal.تلفن_ثابت },
            ],
            // ردیف 4
            [  
              { label: 'آدرس', value: data.legal.آدرس},
              { label: 'فکس', value: toFaDigits(data.legal.فکس) },
            ],
            
          ]}
        />

        {/* کادر «برچسب‌ها» */}
        <section className="relative border border-green-600 rounded-md p-4 bg-white">
          {/* لیبل بالای کادر (نه روی بردر) */}
          <span className="absolute -top-7 right-8 md:right-12 lg:right-0">
            <span className="inline-block bg-green-600 text-white text-xs md:text-sm px-3 py-1 rounded shadow">
              برچسب‌ها
            </span>
          </span>

          {/* برچسب سبز مطابق اسکرین اصلی */}
          <div className="mt-6 flex justify-start">
            <span
              className="
                  relative inline-flex items-center px-4 py-2 text-sm rounded-md
                  border border-green-600 bg-green-50 text-black
                  before:content-[''] before:absolute before:inset-y-[0px] before:right-[0px]
                  before:w-2 before:rounded-r-md before:bg-green-600
              "
            >
              اشخاص مشمول موضوع بند ح ماده۱قانون پایانه‌های فروشگاهی
            </span>
          </div>

          {/* فاصله عمودی سبک مثل اسکرین */}
          <div className="h-6" />
        </section>


        {/* ردیف «سکشن‌ها/تب‌ها» + محتوای تب فعال */}
        <section className="bg-white border border-green-200 rounded-md p-3">
          {/* تب‌ها */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {tabs.map((t) => {
              const active = t === activeTab;
              return (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={
                    active
                      ? 'px-3 py-1.5 text-sm rounded border border-green-400 bg-green-50 text-green-800'
                      : 'px-3 py-1.5 text-sm rounded border border-gray-300 bg-white text-gray-700 hover:border-green-400'
                  }
                >
                  {t}
                </button>
              );
            })}
          </div>

          {/* محتوای تب‌ها */}
          {activeTab === 'اطلاعات شعب' && (
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-green-50 text-gray-700">
                    {['ردیف', 'کد شعبه', 'نام شعبه', 'استان', 'شهر', 'شهرستان', 'کد پستی', 'آدرس شعبه'].map((th) => (
                      <th key={th} className="border-b border-gray-200 px-3 py-2 text-right font-medium">
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(
                    // اگر شعب خالی بود و «نشانی قانونی» داریم، یک ردیف پیش‌فرض بساز
                    (branches && branches.length > 0)
                      ? branches
                      : (legal
                          ? [{
                              ردیف: 1,
                              کد_شعبه: '****',
                              نام_شعبه: 'مرکزی',
                              استان: legal.استان ?? '',
                              شهر: legal.شهر ?? '',
                              شهرستان: legal.شهرستان ?? '',
                              کدپستی: legal.کدپستی ?? '',
                              آدرس_شعبه: legal.آدرس ?? '',
                            }]
                          : [])
                  ).length ? (
                    ((
                      (branches && branches.length > 0)
                        ? branches
                        : [{
                            ردیف: 1,
                            کد_شعبه: '****',
                            نام_شعبه: 'مرکزی',
                            استان: legal.استان ?? '',
                            شهر: legal.شهر ?? '',
                            شهرستان: legal.شهرستان ?? '',
                            کدپستی: legal.کدپستی ?? '',
                            آدرس_شعبه: legal.آدرس ?? '',
                          }]
                    )).map((b) => (
                      <tr key={b.ردیف} className="odd:bg-white even:bg-gray-50">
                        <td className="px-3 py-2 border-t text-right">{toFaDigits(b.ردیف)}</td>
                        <td className="px-3 py-2 border-t text-right">{toFaDigits(b.کد_شعبه)}</td>
                        <td className="px-3 py-2 border-t text-right">{toFaDigits(b.نام_شعبه)}</td>
                        <td className="px-3 py-2 border-t text-right">{toFaDigits(b.استان)}</td>
                        <td className="px-3 py-2 border-t text-right">{toFaDigits(b.شهر)}</td>
                        <td className="px-3 py-2 border-t text-right">{toFaDigits(b.شهرستان)}</td>
                        <td className="px-3 py-2 border-t text-right">{toFaDigits(b.کدپستی)}</td>
                        <td className="px-3 py-2 border-t text-right">{toFaDigits(b.آدرس_شعبه)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr><td className="px-3 py-6 text-center text-gray-500" colSpan={7}>داده‌ای برای نمایش وجود ندارد.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'اطلاعات پرونده-اعضا' && (
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-green-50 text-gray-700">
                  {[
                      'ردیف',
                      'نام و نام خانوادگی/نام شرکت',
                      'کد ملی/شناسه ملی/کدفراگیر اتباع خارجی',
                      'ملیت',
                      'سمت',
                      'نوع شخص',
                      'درصد سهم',
                    ].map((th) => (
                      <th key={th} className="border-b border-gray-200 px-3 py-2 text-right font-medium">{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {members.map((m) => (
                    <tr key={m.ردیف} className="odd:bg-white even:bg-gray-50">
                      <td className="px-3 py-2 border-t text-right">{toFaDigits(m.ردیف)}</td>
                      <td className="px-3 py-2 border-t text-right">{toFaDigits(m.نام)}</td>
                      <td className="px-3 py-2 border-t text-right">{toFaDigits(m.شناسه)}</td>
                      <td className="px-3 py-2 border-t text-right">{toFaDigits(m.ملیت)}</td>
                      <td className="px-3 py-2 border-t text-right">{toFaDigits(m.سمت)}</td>
                      <td className="px-3 py-2 border-t text-right">{toFaDigits(m.نوع_شخص)}</td>
                      <td className="px-3 py-2 border-t text-right">{toFaDigits(m.درصد_سهم)}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'اطلاعات پرونده‌-فعالیت ها-مجوزها' && (
            <div className="overflow-x-auto">
                          <table className="w-full border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-green-50 text-gray-700">
                    {['ردیف','درصد فعالیت','کد آیسیک','عنوان آیسیک','نوع فعالیت','عنوان فعالیت'].map((th) => (
                      <th key={th} className="border-b border-gray-200 px-3 py-2 text-center font-medium">
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                  <tbody>
                    {activities.map((r, idx) => {
                      // به‌خاطر اختلاف نام‌فیلدها در مدل فعلی، امن‌سازی با cast به any  پوشش کلیدهای فارسی
                      const row: any = r as any;
                      const sharePercent =
                        row.sharePercent ?? row.share_percent ?? row.percent ?? row['درصد_فعالیت'] ?? '';
                      const sharePercentText =
                        sharePercent === ''
                          ? ''
                          : String(sharePercent).includes('%')
                            ? String(sharePercent)
                            : `${sharePercent}%`;
                      const isicCode =
                        row.isicCode ?? row.isic_code ?? row['کد_آیسیک'] ?? '';
                      const isicTitle =

                        row.isicTitle ?? row.isic_title ?? row['عنوان_آیسیک'] ?? '';
                      const activityType =
                        row.activityType ?? row.activity_type ?? row.type ?? row['نوع_فعالیت'] ?? '';  
                      const activityTitle =
                        row.activityTitle ?? row.activity_title ?? row.title ?? row['عنوان_فعالیت'] ?? '';

                      return (
                        <tr key={idx} className="text-center odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-2 border-t">{toFaDigits(idx  +1)}</td>
                          <td className="px-3 py-2 border-t">{toFaDigits(sharePercentText)}</td>
                          <td className="px-3 py-2 border-t">{toFaDigits(isicCode)}</td>
                          <td className="px-3 py-2 border-t">{toFaDigits(isicTitle)}</td>
                          <td className="px-3 py-2 border-t">{toFaDigits(ACTIVITY_TYPE_LABEL[String(activityType)] ?? String(activityType ?? ''))}</td>
                          <td className="px-3 py-2 border-t">{toFaDigits(activityTitle)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
              </table>
            </div>
          )}

          {activeTab === 'اطلاعات پرونده-اداره مالیاتی' && (
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-green-50 text-gray-700">
                    {['ردیف', 'شناسه اداره', 'نام اداره', 'کد واحد', 'نوع مالیات'].map((th) => (
                      <th key={th} className="border-b border-gray-200 px-3 py-2 text-right font-medium">{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {offices.map((o) => (
                    <tr key={o.ردیف} className="odd:bg-white even:bg-gray-50">
                      <td className="px-3 py-2 border-t text-right">{toFaDigits(o.ردیف)}</td>
                      <td className="px-3 py-2 border-t text-right">{toFaDigits(o.شناسه_اداره)}</td>
                      <td className="px-3 py-2 border-t text-right">{toFaDigits(o.نام_اداره)}</td>
                      <td className="px-3 py-2 border-t text-right">{toFaDigits(o.کد_واحد)}</td>
                      <td className="px-3 py-2 border-t text-right">{toFaDigits(o.نوع_مالیات)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div> 
    </div> 
    </>
  );
}
