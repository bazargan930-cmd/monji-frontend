'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function EditNoticePage() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/notices/${id}`, { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title || '');
        setDate(data.date || '');
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3001/notices/${id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, date }),
      });
      if (!res.ok) throw new Error('خطا در ویرایش اطلاعیه');
      alert('✅ اطلاعیه با موفقیت ویرایش شد');
      router.push('/admin/notices');
    } catch (err: any) {
      alert(err.message || '⛔️ خطا در ویرایش');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-lg font-bold mb-4 text-green-700">ویرایش اطلاعیه</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl bg-white border p-4 rounded">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="عنوان اطلاعیه"
          required
        />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="تاریخ (مثلاً ۱۴۰۳/۰۴/۲۲)"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {loading ? 'در حال ذخیره...' : 'ذخیره تغییرات'}
        </button>
      </form>
    </div>
  );
}
