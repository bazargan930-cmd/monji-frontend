// src/app/dashboard/layout.tsx+

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Topbar from './Topbar.client';

async function getUser() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';
  // در Next.js 15، cookies() یک Promise است → await
  const cookieStore = await cookies();
  // تمام کوکی‌ها را به بک‌اند پاس بده (HttpOnly هم شامل می‌شود)
  const cookieHeader = cookieStore
    .getAll()
    .map((c: { name: string; value: string }) => `${c.name}=${c.value}`)
    .join('; ');
  const res = await fetch(`${apiBase}/utils/user-info`, {
    headers: { Cookie: cookieHeader },
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return res.json();
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
          <i className="fa-solid fa-layer-group ms-1" /> پنل تراز
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
          © {new Date().getFullYear()} Taraz
        </footer>
      </aside>

      {/* Main */}
      <div className="flex min-h-screen flex-col">
        {/* Topbar (Client Component) */}
        <Topbar userName={user?.fullName ?? 'کاربر'} />
        <main className="container py-6">{children}</main>
      </div>
    </div>
  );
}

