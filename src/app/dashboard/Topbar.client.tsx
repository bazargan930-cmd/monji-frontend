// src/app/dashboard/Topbar.client.tsx
'use client';
import { useEffect, useMemo, useState } from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type Props = { userName: string; userRole?: string };

export default function Topbar({ userName, userRole }: Props) {
  const [open, setOpen] = useState(false);          // بازشونده‌ی منوی کاربر
  const [mobileOpen, setMobileOpen] = useState(false); // Drawer موبایل
  const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';

  // --- i18n سبک (fa پیش‌فرض)
  const STR = {
    fa: {
      welcome: 'خوش آمدید،',
      profile: 'پروفایل',
      logout: 'خروج',
    },
  } as const;
  const t = STR.fa;

  // --- تم: dark/light
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('monji-theme') as 'light' | 'dark' | null;
    if (saved) return saved;
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('monji-theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme((p) => (p === 'dark' ? 'light' : 'dark'));

  // --- Badge محیط (محلی/تولید)
  const envBadge = useMemo(() => {
    const isLocal = typeof window !== 'undefined' && location.hostname === 'localhost';
    const env = process.env.NODE_ENV;
    if (isLocal || env !== 'production') return 'LOCAL';
    return 'PROD';
  }, []);

  // --- الگوی واحد دکمه‌ها (cva)
  const btn = cva(
    'inline-flex items-center justify-center rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    {
      variants: {
        variant: {
          primary: 'bg-green-600 text-white hover:bg-green-700',
          outline: 'border border-border hover:bg-muted/20',
          ghost: 'hover:bg-muted/20',
        },
        size: {
          sm: 'px-2.5 py-1 text-sm',
          md: 'px-3 py-1.5 text-sm',
        },
      },
      defaultVariants: { variant: 'outline', size: 'sm' },
    }
  );

  // --- telemetry: ارسال سبک با sendBeacon (بدون بلاک‌کردن UI)
  function track(event: string, meta?: Record<string, any>) {
    try {
      const payload = JSON.stringify({ event, meta, ts: Date.now() });
      const blob = new Blob([payload], { type: 'application/json' });
      navigator.sendBeacon?.('/api/telemetry', blob);
    } catch {}
  }
  async function logout() {
    try {
      track('logout_click', { where: 'topbar' });
      // توکن CSRF از کوکی (double-submit)
      const csrf = document.cookie.split('; ').find((c) => c.startsWith('csrf_token='))?.split('=')[1];
      // ابتدا Route داخلی اگر وجود داشت
      const r1 = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: csrf ? { 'x-csrf-token': csrf } : {},
      });
      if (!r1.ok) {
        // فالبک: بک‌اند خارجی
        await fetch(`${apiBase}/auth/logout`, { method: 'POST', credentials: 'include' });
      }
    } catch {}
    window.location.href = '/auth/signin';
  }

  return (
    <header className="h-16 shrink-0 border-b border-border bg-card">
      <div className="container h-full flex items-center relative">
        {/* دکمه منوی موبایل → Drawer داخلی */}
        <button
          className={clsx(btn({ variant: 'outline', size: 'sm' }), 'md:hidden gap-2')}
          onClick={() => {
            setMobileOpen(true);
            track('drawer_open', { where: 'topbar' });
            // اطمینان از داشتن CSRF (lazy init)
            fetch('/api/csrf').catch(() => {});
          }}
          aria-label="نمایش منو"
        >
          <i className="fa-solid fa-bars" />
          منو
        </button>
        {/* منوی کاربر در سمت چپ */}
        <div className="ms-auto relative flex items-center gap-3">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-100">
            {envBadge}
          </span>
          <button
            onClick={() => { toggleTheme(); track('theme_toggle', { theme }); }}
            className={clsx(btn({ variant: 'outline', size: 'sm' }), 'gap-2')}
            aria-label="تغییر پوسته"
            title={theme === 'dark' ? 'پوسته روشن' : 'پوسته تیره'}
          >
            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
          </button>
          <span className="text-sm text-muted/90">{t.welcome}</span>
          <button
            className="flex items-center gap-2 px-3 py-1 rounded-lg border border-border hover:bg-muted/20 transition"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={open}
            aria-label="منوی کاربر"
          >
            <span className="h-7 w-7 rounded-full bg-blue-600 text-white grid place-items-center text-xs">
              {userName?.[0] ?? 'U'}
            </span>
            <span className="text-sm font-semibold">{userName}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
              {userRole ?? 'USER'}
            </span>
            <i className="fa-solid fa-chevron-down text-xs" />
          </button>
          {open && (
            <div
              className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-border bg-popover shadow-lg z-50"
              role="menu"
              onMouseLeave={() => setOpen(false)}
            >
              <a
                href="/profile"
                className="block px-3 py-2 text-sm hover:bg-muted/20"
                role="menuitem"
              >
                <i className="fa-solid fa-user ms-2" />
                {t.profile}
              </a>
              <button
                onClick={logout}
                className="w-full text-start px-3 py-2 text-sm hover:bg-muted/20"
                role="menuitem"
              >
                <i className="fa-solid fa-right-from-bracket ms-2" />
                {t.logout}
              </button>
            </div>
          )}
        </div>

        {/* Drawer موبایل */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
            {/* بک‌دراپ */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => { setMobileOpen(false); track('drawer_close', { how: 'backdrop' }); }}
              aria-hidden="true"
            />
            {/* پنل */}
            <div className="absolute top-0 bottom-0 left-0 w-72 bg-card border-e border-border shadow-xl p-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="font-bold">
                  <i className="fa-solid fa-layer-group ms-1" /> پنل منجی
                </div>
                <button
                  className={btn({ variant: 'outline', size: 'sm' })}
                  onClick={() => { setMobileOpen(false); track('drawer_close', { how: 'button' }); }}
                >
                  بستن
                </button>
              </div>
              <nav className="space-y-2">
                <a href="/dashboard" className="nav-item block" onClick={() => { setMobileOpen(false); track('nav_click', { to: '/dashboard', where: 'drawer' }); }}>
                  <i className="fa-solid fa-gauge ms-2" /> داشبورد
                </a>
                <div className="mt-4 text-xs uppercase text-muted/80">شبیه‌سازها</div>
                <a href="/simulators/salary-tax/dashboard" className="nav-item block" onClick={() => { setMobileOpen(false); track('nav_click', { to: '/simulators/salary-tax/dashboard', where: 'drawer' }); }}>
                  <i className="fa-solid fa-file-invoice-dollar ms-2" /> مالیات بر حقوق
                </a>
                <a href="/simulators/insurance/single" className="nav-item block" onClick={() => { setMobileOpen(false); track('nav_click', { to: '/simulators/insurance/single', where: 'drawer' }); }}>
                  <i className="fa-solid fa-shield-heart ms-2" /> بیمه تأمین اجتماعی
                </a>
                <a href="/simulators/modian/portal" className="nav-item block" onClick={() => { setMobileOpen(false); track('nav_click', { to: '/simulators/modian/portal', where: 'drawer' }); }}>
                  <i className="fa-solid fa-building-columns ms-2" /> سامانه مودیان
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
