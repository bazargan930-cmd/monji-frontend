// src/app/dashboard/page.tsx

'use client';

import { useEffect, useState } from 'react';

type UserInfo = { fullName?: string; nationalId?: string; accessLevel?: string };

export default function DashboardPage() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/api/utils/user-info', {
          credentials: 'include',
          cache: 'no-store',
        });
        if (!res.ok) {
          const t = await res.text();
          throw new Error(t || res.statusText);
        }
        const data = await res.json();
        if (mounted) setUser(data);
      } catch (e: any) {
        if (mounted) setError(e?.message || 'دریافت اطلاعات کاربر ناموفق بود.');
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">داشبورد تراز</h1>

      {error && (
        <div className="mb-4 rounded border border-red-200 bg-red-50 p-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      {!user && !error && <div className="text-gray-500">در حال دریافت اطلاعات…</div>}

      {user && (
        <section className="rounded border bg-white p-4 shadow">
          <div className="text-sm text-gray-700">نام: <b>{user.fullName || '—'}</b></div>
          <div className="text-sm text-gray-700">کد/ملی: <b>{user.nationalId || '—'}</b></div>
          <div className="text-sm text-gray-700">سطح دسترسی: <b>{user.accessLevel || '—'}</b></div>
        </section>
      )}
    </main>
  );
}
