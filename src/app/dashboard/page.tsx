// src/app/dashboard/page.tsx

'use client';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { z } from 'zod';
import { BusinessCreationEligibilityModal } from "@/components/business/BusinessCreationEligibilityModal";
import { useBusinessCreationEligibility } from "@/hooks/useBusinessCreationEligibility";

const UserInfoSchema = z.object({
  fullName: z.string().optional(),
  nationalId: z.string().optional(),
  accessLevel: z.string().optional(),
});
type UserInfo = z.infer<typeof UserInfoSchema>;

const BusinessSchema = z.object({
  id: z.string(),
  entityName: z.string().nullable().optional(),
  nationalId: z.string().nullable().optional(),
  taxpayerType: z.string().nullable().optional(),
  postalCode: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
 userRole: z.string().nullable().optional(), // ✅ اضافه کردن فیلد نقش
});
type BusinessInfo = z.infer<typeof BusinessSchema>;

export default function DashboardPage() {
  const [error, setError] = useState('');

  const {
  checkAndNavigate,
  closeModal,
  modalState,
} = useBusinessCreationEligibility();

  const [businessRequiredModal, setBusinessRequiredModal] = useState<{ open: boolean; platform: string }>({ open: false, platform: '' });


  // --- i18n سبک (فعلاً fa پیش‌فرض؛ بعداً می‌توان en را هم پر کرد)
  const STR = {
    fa: {
      title: 'داشبورد منجی',
      subtitle: 'نمای کلی وضعیت حساب و میانبرهای دسترسی سریع به شبیه‌سازها.',
      loading: 'در حال دریافت اطلاعات… اگر وارد نشده باشید به صفحهٔ ورود هدایت می‌شوید.',
      retry: 'تلاش مجدد',
      kpi_access: 'سطح دسترسی',
      kpi_status: 'وضعیت حساب',
      kpi_status_active: 'فعال',
      kpi_last_login: 'آخرین ورود',
      profile: 'پروفایل',
      name: 'نام:',
      nid: 'کد/ملی:',
      quickstart: 'شروع سریع',
      CreateBusiness: 'ایجاد کسب و کار',
      salary: 'مالیات بر حقوق',
      insurance: 'بیمه تأمین اجتماعی',
      recent: 'آیتم‌های اخیر',
      none: 'فعلاً موردی ثبت نشده است.',
      start_scenario: 'شروع یک سناریوی جدید',
    },
  } as const;
  const t = STR.fa;

   // -------------------------------
  // NEW: کنترل کلیک برای چک وضعیت ثبت‌نامی
  // -------------------------------
  async function handleSimulatorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    targetUrl: string,
    platformName: string
  ) {
    e.preventDefault();
    // اگر کاربر هیچ کسب‌وکاری نساخته باشد، مودال نمایش داده می‌شود
    if (!businesses || businesses.length === 0) {
      setBusinessRequiredModal({ open: true, platform: platformName });
      return;
    }
    window.location.href = targetUrl;
  }

  // دکمه‌ی استاندارد (همسان با Topbar)
  const btn = cva(
    'inline-flex items-center justify-center rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    {
      variants: {
        variant: {
          primary: 'bg-green-600 text-white hover:bg-green-700',
          outline: 'border border-gray-300 text-gray-800 hover:bg-gray-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-700/60',
        },
        size: { md: 'px-3 py-1.5 text-sm' },
      },
      defaultVariants: { variant: 'outline', size: 'md' },
    }
  );

  // --- SWR: دریافت و کش ملایم اطلاعات کاربر
  const fetcher = async (url: string) => {
    const res = await fetch(url, { credentials: 'include', cache: 'no-store' });
    if (res.status === 401) {
      // هدایت به ورود با next=/dashboard
      if (typeof window !== 'undefined') window.location.href = '/auth/signin?next=/dashboard';
      // یک خطا پرتاب می‌کنیم تا SWR مسیر error را طی کند (ولی عملاً ریدایرکت شده)
      const err = new Error('Unauthorized') as Error & { status?: number };
      err.status = 401;
      throw err;
    }
    if (!res.ok) {
      const text = await res.text();
      const err = new Error(text || res.statusText) as Error & { status?: number };
      err.status = res.status;
      throw err;
    }
    const raw = await res.json();
    const parsed = UserInfoSchema.safeParse(raw);
    if (!parsed.success) throw new Error('ساختار پاسخ کاربر نامعتبر است');
    return parsed.data as UserInfo;
  };
  const { data: user, error: swrError, isLoading } = useSWR<UserInfo>('/api/utils/user-info', fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: true,
    errorRetryCount: 2,
  });

  const fetchBusinesses = async (url: string) => {
    const res = await fetch(url, { credentials: 'include', cache: 'no-store' });
    if (res.status === 401) {
      if (typeof window !== 'undefined') window.location.href = '/auth/signin?next=/dashboard';
      const err = new Error('Unauthorized') as Error & { status?: number };
      err.status = 401;
      throw err;
    }
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || res.statusText);
    }

    const raw = await res.json();
    const parsed = z.array(BusinessSchema).safeParse(raw);
    if (!parsed.success) throw new Error('ساختار پاسخ کسب‌وکارها نامعتبر است');
    return parsed.data as BusinessInfo[];
  };

  const {
    data: businesses,
    error: businessesError,
    isLoading: businessesLoading,
  } = useSWR<BusinessInfo[]>('http://localhost:3001/businesses/me', fetchBusinesses, {
    revalidateOnFocus: false,
    shouldRetryOnError: true,
    errorRetryCount: 2,
  });

  useEffect(() => {
    if (swrError) setError(swrError.message || 'دریافت اطلاعات کاربر ناموفق بود.');
    else setError('');
  }, [swrError]);

  // telemetry سبک
  function track(event: string, meta?: Record<string, unknown>) {
    try {
      const payload = JSON.stringify({ event, meta, ts: Date.now() });
      const blob = new Blob([payload], { type: 'application/json' });
      navigator.sendBeacon?.('/api/telemetry', blob);
    } catch { /* ignore */ }
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{t.title}</h1>
      <p className="text-[15px] md:text-base text-slate-700 mt-2 mb-6">{t.subtitle}</p>

      {error && (
        <div className="mb-4 rounded border border-red-200 bg-red-50 p-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Skeleton هنگام بارگذاری */}
      {isLoading && !error && (
        <div aria-label="در حال بارگذاری" className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="h-20 rounded bg-slate-100 animate-pulse" />
            <div className="h-20 rounded bg-slate-100 animate-pulse" />
            <div className="h-20 rounded bg-slate-100 animate-pulse" />
            <div className="h-20 rounded bg-slate-100 animate-pulse" />
          </div>
          <div className="h-28 rounded bg-slate-100 animate-pulse" />
          <div className="h-40 rounded bg-slate-100 animate-pulse" />
        </div>
      )}
 
      {/* پیام خطا + دکمهٔ تلاش مجدد */}
      {!isLoading && error && (
        <div className="mb-4 rounded border border-red-200 bg-red-50 p-3 text-red-700 text-sm">
          {error}
          <button
            onClick={() => {
              // رفرش کش SWR با reload ساده
              window.location.reload();
            }}
            className="ms-3 inline-flex items-center px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
          >
            {t.retry}
          </button>
        </div>
      )}


      {!isLoading && !error && user && (
        <>
          {/* ردیف KPI + کارت پروفایل */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* KPI 1 */}
            <div className="rounded border bg-white p-4 shadow-sm dark:bg-slate-800 dark:border-slate-700">
              <div className="text-xs text-slate-500 mb-1">{t.kpi_access}</div>
              <div className="text-lg font-bold">{user.accessLevel || '—'}</div>
            </div>
            {/* KPI 2 */}
            <div className="rounded border bg-white p-4 shadow-sm dark:bg-slate-800 dark:border-slate-700">
              <div className="text-xs text-slate-500 mb-1">{t.kpi_status}</div>
              <div className="text-lg font-bold">{t.kpi_status_active}</div>
            </div>
            {/* KPI 3 */}
            <div className="rounded border bg-white p-4 shadow-sm dark:bg-slate-800 dark:border-slate-700">
              <div className="text-xs text-slate-500 mb-1">{t.kpi_last_login}</div>
              <div className="text-lg font-bold">—</div>
            </div>
            {/* کارت پروفایل فشرده */}
            <div className="rounded border bg-white p-4 shadow-sm dark:bg-slate-800 dark:border-slate-700">
              <div className="text-xs text-slate-500 mb-1">{t.profile}</div>
              <div className="text-sm text-gray-700">
              {t.name} <b>{user.fullName || '—'}</b>
              </div>
              <div className="text-sm text-gray-700">
              {t.nid} <b>{user.nationalId || '—'}</b>
              </div>
            </div>
          </section>

          {/* شروع سریع بر اساس نقش/نیاز عمومی */}
          <section className="rounded border bg-white p-4 shadow mb-6 dark:bg-slate-800 dark:border-slate-700">
            <h2 className="text-base md:text-lg font-semibold mb-3">{t.quickstart}</h2>
            <div className="flex flex-wrap gap-2">
              <a
                href="/simulators/modian/portal"
                className={clsx(btn({ variant: 'outline', size: 'md' }))}
                onClick={(e) => {
                  track('quickstart_click', { to: 'modian' });
                  handleSimulatorClick(e, "/simulators/modian/portal", "سامانه مودیان");
                }}
              >
                 <i className="fa-solid fa-building ms-2" /> سامانه مودیان
              </a>
              <a
                href="/simulators/salary-tax/dashboard"
                className={clsx(btn({ variant: 'outline', size: 'md' }))}
                onClick={(e) => {
                  track('quickstart_click', { to: 'salary-tax' });
                  handleSimulatorClick(e, "/simulators/salary-tax/dashboard", "مالیات بر حقوق");
                }}
              >
                <i className="fa-solid fa-file-invoice-dollar ms-2" /> {t.salary}
              </a>
              <a
                href="/simulators/insurance/single"
                className={clsx(btn({ variant: 'outline', size: 'md' }))}
                onClick={(e) => {
                  track('quickstart_click', { to: 'insurance' });
                  handleSimulatorClick(e, "/simulators/insurance/single", "بیمه تأمین اجتماعی");
                }}
              >
                <i className="fa-solid fa-shield-heart ms-2" /> {t.insurance}
              </a>
            </div>
          </section>

          {/* کسب و کارها */}
          <section className="rounded border bg-white p-4 shadow mb-6 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base md:text-lg font-semibold">کسب و کارها</h2>
              <button
                 type="button"
                 onClick={() => checkAndNavigate()}
                 className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
               >
                 ایجاد کسب و کار
               </button>
            </div>

            {businessesLoading && !businessesError && (
              <div className="py-6 text-center text-slate-500">در حال دریافت لیست کسب‌وکارها...</div>
            )}

            {!businessesLoading && businessesError && (
              <div className="py-6 text-center text-red-600">
                خطا در دریافت کسب‌وکارها: {businessesError.message}
              </div>
            )}

            {!businessesLoading && !businessesError && businesses && businesses.length > 0 && (
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b bg-slate-50 text-slate-600 dark:bg-slate-700 dark:text-slate-200">
                      <th className="px-4 py-3 text-right">ردیف</th>
                      <th className="px-4 py-3 text-right">نام پرونده</th>
                      <th className="px-4 py-3 text-right">شناسه/کد ملی/اتباع</th>
                      <th className="px-4 py-3 text-right">نوع پرونده</th>
                      <th className="px-4 py-3 text-right">کد پستی</th>
                      <th className="px-4 py-3 text-right">آدرس</th>
                    </tr>
                  </thead>
                  <tbody>
                    {businesses.map((business, index) => (
                      <tr key={business.id} className="border-b last:border-0">
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">{business.entityName || '-'}</td>
                        <td className="px-4 py-3">{business.nationalId || '-'}</td>
                        <td className="px-4 py-3">{business.taxpayerType || '-'}</td>
                        <td className="px-4 py-3">{business.postalCode || '-'}</td>
                        <td className="px-4 py-3">{business.address || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {!businessesLoading && !businessesError && businesses && businesses.length === 0 && (
              <div className="py-6 text-center text-slate-500">
                هنوز کسب‌وکاری ثبت نشده است.
              </div>
            )}
          </section>


          {/* Empty State ساده برای «آیتم‌های اخیر» (فعلاً داده‌ای نداریم) */}
          <section className="rounded border bg-white p-6 shadow text-center text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200">
            <div className="mb-2 text-slate-800 font-semibold">{t.recent}</div>
            <div className="mb-3">{t.none}</div>
            <a href="/simulators/modian/portal" className="btn btn-primary">
              {t.start_scenario}
            </a>
          </section>
        </>
      )}

      {businessRequiredModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-lg bg-white p-6 space-y-4 shadow-lg">
            <h2 className="text-lg font-bold text-center">
              ورود به «{businessRequiredModal.platform}»
            </h2>
            <p className="text-sm text-center text-gray-600">
              برای دسترسی به {businessRequiredModal.platform} لازم است ابتدا یک کسب‌وکار ثبت کنید.
            </p>
            <div className="flex justify-center gap-3 pt-4">
              <button
                onClick={() => setBusinessRequiredModal({ open: false, platform: '' })}
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
              >
                انصراف
              </button>
              <button
                 onClick={() => checkAndNavigate()}
                className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
              >
                ایجاد کسب‌وکار
              </button>
            </div>
          </div>
        </div>
      )}

      <BusinessCreationEligibilityModal
        open={modalState.open}
        reason={modalState.reason}
        message={modalState.message}
        onOpenChange={(open) => {
          if (!open) {
            closeModal();
          }
        }}
      />

    </main>
  );
}
