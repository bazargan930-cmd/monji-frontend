// src/app/dashboard/layout.tsx+

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Topbar from './Topbar.client';
import { Suspense } from 'react';
import { z } from 'zod';

const UserInfoSchema = z.object({
  fullName: z.string().optional(),
  nationalId: z.string().optional(),
  accessLevel: z.string().optional(),
});
async function getUser() {
  // آدرس مطلق اپ را از هدرها می‌سازیم تا به Route داخلی خودمان بزنیم
  const h = await headers();
  const proto = h.get('x-forwarded-proto') ?? 'http';
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'localhost:3000';
  const baseUrl = `${proto}://${host}`;

  // کوکی‌های کاربر را پاس می‌دهیم تا auth سمت سرور انجام شود
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c: { name: string; value: string }) => `${c.name}=${c.value}`)
    .join('; ');

  try {
    const res = await fetch(`${baseUrl}/api/utils/user-info`, {
      headers: { Cookie: cookieHeader },
      // دادهٔ کم‌تغییر → revalidate ملایم
      next: { revalidate: 30 },
    });
    if (!res.ok) return null;
    const raw = await res.json();
    const parsed = UserInfoSchema.safeParse(raw);
    if (!parsed.success) {
      // داده نامعتبر → کاربر را لاگین‌نشده تلقی می‌کنیم
      return null;
    }
    return parsed.data;
  } catch {
    return null;
  }
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();
  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <div className="min-h-screen grid md:grid-cols-[260px_1fr] bg-background text-foreground">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col border-l md:border-l-0 md:border-r border-border bg-card">
        <div className="h-16 flex items-center px-4 font-bold text-lg">
          <i className="fa-solid fa-layer-group ms-1" /> پنل منجی
        </div>
        <nav className="flex-1 px-2 py-3 space-y-1">
          <Link href="/dashboard" className="nav-item">
            <i className="fa-solid fa-gauge ms-2" /> داشبورد
          </Link>
          <div className="mt-4 px-2 text-xs uppercase text-muted/80">شبیه‌سازها</div>
          <Link href="/simulators/salary-tax/dashboard" className="nav-item">
            <i className="fa-solid fa-file-invoice-dollar ms-2" /> مالیات بر حقوق
          </Link>
          <Link href="/simulators/insurance/single" className="nav-item">
            <i className="fa-solid fa-shield-heart ms-2" /> بیمه تأمین اجتماعی
          </Link>
          <Link href="/simulators/modian/portal" className="nav-item">
            <i className="fa-solid fa-building-columns ms-2" /> سامانه مودیان
          </Link>
        </nav>
        <footer className="p-3 text-xs text-muted/90 border-t border-border">
          © {new Date().getFullYear()} Monji
        </footer>
      </aside>

      {/* Main */}
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors">
        {/* Topbar (Client Component) */}
        <Topbar userName={user?.fullName ?? 'کاربر'} userRole={user?.accessLevel ?? 'USER'} />
        <main className="container py-6">
          <Suspense
            fallback={
              <div className="space-y-3" aria-label="در حال بارگذاری">
                <div className="h-8 w-40 bg-slate-200 rounded animate-pulse" />
                <div className="h-28 bg-slate-100 rounded animate-pulse" />
              </div>
            }
          >
            {children}
          </Suspense>
        </main>
      </div>
    </div>
  );
}

