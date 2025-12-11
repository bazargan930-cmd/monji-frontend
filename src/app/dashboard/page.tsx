// src/app/dashboard/page.tsx

'use client';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { z } from 'zod';

const UserInfoSchema = z.object({
  fullName: z.string().optional(),
  nationalId: z.string().optional(),
  accessLevel: z.string().optional(),
});
type UserInfo = z.infer<typeof UserInfoSchema>;

export default function DashboardPage() {
  const [error, setError] = useState('');

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
      modian: 'باز کردن مودیان',
      salary: 'مالیات بر حقوق',
      insurance: 'بیمه تأمین اجتماعی',
      recent: 'آیتم‌های اخیر',
      none: 'فعلاً موردی ثبت نشده است.',
      start_scenario: 'شروع یک سناریوی جدید',
    },
  } as const;
  const t = STR.fa;

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
                onClick={() => track('quickstart_click', { to: 'modian' })}
              >
                <i className="fa-solid fa-building-columns ms-2" /> {t.modian}
              </a>
              <a
                href="/simulators/salary-tax/dashboard"
                className={clsx(btn({ variant: 'outline', size: 'md' }))}
                onClick={() => track('quickstart_click', { to: 'salary-tax' })}
              >
                <i className="fa-solid fa-file-invoice-dollar ms-2" /> {t.salary}
              </a>
              <a
                href="/simulators/insurance/single"
                className={clsx(btn({ variant: 'outline', size: 'md' }))}
                onClick={() => track('quickstart_click', { to: 'insurance' })}
              >
                <i className="fa-solid fa-shield-heart ms-2" /> {t.insurance}
              </a>
            </div>
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
    </main>
  );
}
