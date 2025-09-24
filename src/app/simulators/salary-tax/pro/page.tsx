//src\app\simulators\salary-tax\single\page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

type PayrollItem = {
  code: string;
  title: string;
  isTaxable: boolean;
};

type Entry = {
  itemCode: string;
  value: number;
};

type TaxResult = {
  taxableBase: number;
  exemptionsApplied: number;
  taxRate: number;
  finalTax: number;
};

export default function SalaryTaxProfessionalForm() {
  const [items, setItems] = useState<PayrollItem[]>([]);
  const [form, setForm] = useState<Record<string, number>>({});
  const [result, setResult] = useState<TaxResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get<PayrollItem[]>(`${process.env.NEXT_PUBLIC_API_BASE}/core/payroll/items`)
      .then((res) => {
        const taxableItems = res.data.filter((item) => item.isTaxable);
        setItems(taxableItems);
      });
  }, []);

  const handleChange = (code: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [code]: parseInt(value.replace(/,/g, '')) || 0,
    }));
  };

  const handleSubmit = async () => {
    const entries: Entry[] = Object.entries(form)
      .filter(([key, v]) => v > 0 && key !== 'nonTaxableOthers')
      .map(([itemCode, value]) => ({ itemCode, value }));

    if (entries.length === 0) {
      setResult(null);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post<TaxResult>(
        `${process.env.NEXT_PUBLIC_API_BASE}/simulators/salary-tax/from-core`,
        { entries }
      );
      setResult(res.data);
    } catch (err) {
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">🧾 محاسبه دقیق مالیات حقوق (نسخه حرفه‌ای)</h1>

      {items.map((item) => (
        <div key={item.code} className="mb-3">
          <label className="block font-medium mb-1">{item.title}</label>
          <input
            type="number"
            className="border p-2 rounded w-full"
            value={form[item.code] || ''}
            onChange={(e) => handleChange(item.code, e.target.value)}
          />
        </div>
      ))}

      {/* ✅ آیتم غیر مشمول */}
      <div className="mb-3 mt-6">
        <label className="block font-medium mb-1 text-gray-600">
          سایر مزایای غیر مشمول مالیات
        </label>
        <input
          type="number"
          className="border p-2 rounded w-full"
          value={form['nonTaxableOthers'] || ''}
          onChange={(e) => handleChange('nonTaxableOthers', e.target.value)}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-700 text-white py-2 px-4 rounded mt-4"
      >
        {loading ? 'در حال محاسبه...' : 'محاسبه مالیات'}
      </button>

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded text-sm leading-7">
          <div>🔸 <strong>جمع درآمد مشمول:</strong> {result.taxableBase.toLocaleString()} ریال</div>
          <div>🎁 <strong>معافیت اعمال‌شده:</strong> {result.exemptionsApplied?.toLocaleString() ?? '۰'} ریال</div>
          <div>📊 <strong>نرخ مالیات:</strong> {(result.taxRate * 100).toFixed(0)}%</div>
          <div className="mt-2 text-lg font-bold">
            💰 مالیات نهایی: {result.finalTax?.toLocaleString() ?? '۰'} ریال
 ریال
          </div>
        </div>
      )}
    </div>
  );
}
