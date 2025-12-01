// src/app/admin/notices/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Notice {
  id: number;
  title: string;
  date: string;
}

export default function NoticesListPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  const fetchNotices = async () => {
    try {
      const res = await fetch('http://localhost:3001/notices', {
        credentials: 'include',
      });
      if (!res.ok) throw new Error('خطا در دریافت اطلاعیه‌ها');
      const data = await res.json();
      setNotices(data);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'خطای ناشناخته';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('آیا از حذف اطلاعیه مطمئن هستید؟')) return;
    try {
      const res = await fetch(`http://localhost:3001/notices/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!res.ok) throw new Error('خطا در حذف اطلاعیه');
      setNotices((prev) => prev.filter((n) => n.id !== id));
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : '⛔️ خطای حذف';
      alert(message);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4 text-green-700">لیست اطلاعیه‌ها</h1>

      {loading && <p className="text-gray-500">در حال بارگذاری...</p>}
      {error && <p className="text-red-600 font-bold">❌ {error}</p>}
      {!loading && !error && notices.length === 0 && (
        <p className="text-gray-600">هیچ اطلاعیه‌ای ثبت نشده است.</p>
      )}

      <ul className="space-y-2 mt-4">
        {notices.map((notice) => (
          <li key={notice.id} className="p-4 border rounded shadow-sm">
            <p className="font-semibold text-lg">{notice.title}</p>
            <p className="text-sm text-gray-500">📅 {notice.date}</p>
            <div className="mt-2 space-x-2 rtl:space-x-reverse">
              <button
                onClick={() => router.push(`/admin/notices/${notice.id}/edit`)}
                className="text-blue-600 hover:underline"
              >
                ✏️ ویرایش
              </button>
              <button
                onClick={() => handleDelete(notice.id)}
                className="text-red-600 hover:underline"
              >
                🗑 حذف
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
