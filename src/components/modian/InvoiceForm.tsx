'use client';

import { useState } from 'react';

export default function InvoiceForm() {
  const [data, setData] = useState({
    invoiceNumber: '',
    invoiceDate: '',
    buyerNationalId: '',
    totalAmount: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setMessage('');
    setError('');

    if (!data.invoiceNumber || !data.invoiceDate || !data.totalAmount) {
      setError('لطفاً تمام فیلدهای ضروری را وارد کنید');
      return;
    }

    try {
      const res = await fetch('/api/simulators/modian/invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('ارسال با خطا مواجه شد');

      const result = await res.json();
      setMessage(`✅ صورتحساب با کد پیگیری ${result.trackingCode} ثبت شد`);
    } catch (err: any) {
      setError(err.message || 'خطای ناشناخته');
    }
  };

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow max-w-lg mx-auto">
      <div>
        <label className="block mb-1">شماره صورتحساب *</label>
        <input
          name="invoiceNumber"
          value={data.invoiceNumber}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block mb-1">تاریخ صدور *</label>
        <input
          name="invoiceDate"
          type="date"
          value={data.invoiceDate}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block mb-1">کد/شناسه ملی خریدار</label>
        <input
          name="buyerNationalId"
          value={data.buyerNationalId}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block mb-1">مبلغ کل (ریال) *</label>
        <input
          name="totalAmount"
          value={data.totalAmount}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {message && <p className="text-green-600 text-sm">{message}</p>}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ارسال صورتحساب
      </button>
    </div>
  );
}
