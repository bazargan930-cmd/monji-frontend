// src/app/dashboard/Topbar.client.tsx
'use client';

type Props = { userName: string };

export default function Topbar({ userName }: Props) {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';

  async function logout() {
    try {
      await fetch(`${apiBase}/auth/logout`, { method: 'POST', credentials: 'include' });
      window.location.href = '/auth/signin';
    } catch {
      window.location.href = '/auth/signin';
    }
  }

  return (
    <header className="h-16 shrink-0 border-b border-border bg-card">
      <div className="container h-full flex items-center justify-between">
        <button
          className="md:hidden inline-flex items-center gap-2 btn"
          onClick={() => document.documentElement.classList.toggle('sidebar-open')}
          aria-label="نمایش منو"
        >
          <i className="fa-solid fa-bars" />
          منو
        </button>
        <div className="flex items-center gap-3">
          <div className="text-sm text-muted/90">خوش آمدید،</div>
          <div className="text-sm font-semibold">{userName}</div>
        </div>
        <button onClick={logout} className="btn btn-primary">
          <i className="fa-solid fa-right-from-bracket ms-2" />
          خروج
        </button>
      </div>
    </header>
  );
}
