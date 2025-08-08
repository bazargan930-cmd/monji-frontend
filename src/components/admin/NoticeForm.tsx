'use client';

import { useState } from 'react';

export default function NoticeForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date) return;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/notices', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, date }),
      });


      if (!res.ok) throw new Error('خطا در ثبت اطلاعیه');

      alert('✅ اطلاعیه با موفقیت ثبت شد');
      setTitle('');
      setDate('');
    } catch (error) {
      console.error(error);
      alert('⛔️ خطا در ثبت اطلاعیه');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md bg-white max-w-xl mx-auto">
      <div>
        <label className="block mb-1 font-semibold">عنوان اطلاعیه</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">تاریخ (مثلاً ۱۴۰۳/۰۴/۲۲)</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? 'در حال ثبت...' : 'ثبت اطلاعیه'}
      </button>
    </form>
  );
}
