//src\app\simulators\insurance\single\page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { InsuranceResult } from '../../../../components/insurance/tax-result.interface';

type PayrollItem = {
  code: string;
  title: string;
  isInsurable: boolean;
};

type Entry = {
  itemCode: string;
  value: number;
};

export default function InsuranceSinglePage() {
  const [items, setItems] = useState<PayrollItem[]>([]);
  const [otherItems, setOtherItems] = useState<PayrollItem[]>([]);
  const [form, setForm] = useState<Record<string, number>>({});
  const [hasUnemploymentInsurance, setHasUnemploymentInsurance] = useState(true);
  const [result, setResult] = useState<InsuranceResult | null>(null);
  const isFreeUser = false;

  useEffect(() => {
    axios.get<PayrollItem[]>(`${process.env.NEXT_PUBLIC_API_BASE}/core/payroll/items`)
      .then(res => {
        const insurableItems = res.data.filter(item => item.isInsurable);
        const nonInsurableItems = res.data.filter(item => !item.isInsurable);
        setItems(insurableItems);
        setOtherItems(nonInsurableItems);
      });
  }, []);

  const handleChange = (code: string, value: string) => {
    setForm(prev => ({
      ...prev,
      [code]: parseInt(value) || 0,
    }));
  };

  const handleSubmit = async () => {
    const entries: Entry[] = Object.entries(form)
      .filter(([_, v]) => v > 0)
      .map(([code, value]) => ({ itemCode: code, value }));

    const res = await axios.post<InsuranceResult>(
      `${process.env.NEXT_PUBLIC_API_BASE}/simulators/insurance/from-core`,
      { entries, hasUnemploymentInsurance }
    );

    setResult(res.data);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">🧾 شبیه‌ساز بیمه تامین اجتماعی</h1>

      {items.map(item => (
        <div key={item.code} className="mb-3">
          <label className="block font-medium mb-1">{item.title}</label>
          <input
            type="number"
            className="border p-2 rounded w-full"
            value={form[item.code] || ''}
            onChange={e => handleChange(item.code, e.target.value)}
          />
        </div>
      ))}

      {otherItems.length > 0 && (
        <>
          <hr className="my-4" />       
          {otherItems.map(item => (
            <div key={item.code} className="mb-2">
              <label className="block text-sm font-medium mb-1">{item.title}</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                value={form[item.code] || ''}
                onChange={e => handleChange(item.code, e.target.value)}
              />
            </div>
          ))}

        </>
      )}

      <label className="flex items-center gap-2 my-4">
        <input
          type="checkbox"
          checked={hasUnemploymentInsurance}
          onChange={e => setHasUnemploymentInsurance(e.target.checked)}
        />
        بیمه بیکاری دارد؟
      </label>

      <button onClick={handleSubmit} className="bg-blue-600 text-white py-2 px-4 rounded">
        محاسبه بیمه
      </button>

      {result && (
        <>
          {isFreeUser ? (
            <div className="mt-6 border p-4 rounded bg-gray-100">
              <h2 className="font-bold mb-2">📊 نتیجه:</h2>
              <div>👤 سهم کارگر: {result.employeeShare.toLocaleString()} ریال</div>
            </div>
          ) : (
            <div className="mt-6 border p-4 rounded bg-gray-100">
              <h2 className="font-bold mb-2">📊 نتیجه:</h2>
              <div>🔹 جمع حقوق و مزایای مشمول: {result.insurableBase.toLocaleString()} ریال</div>
              <div>👤 سهم کارگر: {result.employeeShare.toLocaleString()} ریال</div>
              <div>🏢 سهم کارفرما: {result.employerShare.toLocaleString()} ریال</div>
              <div>⚖️ بیمه بیکاری: {result.unemploymentShare.toLocaleString()} ریال</div>
              <div className="font-bold mt-2">💰 مجموع بیمه: {result.totalInsurance.toLocaleString()} ریال</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
