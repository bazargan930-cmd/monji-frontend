// src/app/simulators/salary-tax/free/page.tsx
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SalaryTaxSimpleFreeForm() {
  const [input, setInput] = useState<string>(''); // مقدار خام
  const [tax, setTax] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false); // ✅ افزودن state جدید

  const formatNumber = (value: string): string => {
    const num = value.replace(/,/g, '');
    return parseInt(num || '0').toLocaleString();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, '').replace(/[^0-9]/g, '');
    setInput(raw);
  };

  const numericInput = parseInt(input.replace(/,/g, '')) || 0;

  useEffect(() => {
    const delay = setTimeout(() => {
      if (numericInput > 0) {
        setIsLoading(true);
        axios
          .post<{ result: number }>(
            '/api/simulators/salary-tax/calculate',
            { taxableIncome: numericInput }
          )
          .then((res) => setTax(Math.round(res.data.result)))
          .catch(() => setTax(null))
          .finally(() => setIsLoading(false));
      } else {
        setTax(null);
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [input]);

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">🧾 محاسبه مالیات حقوق (نسخه رایگان)</h1>
      <label className="block font-medium mb-2">حقوق مشمول مالیات (ریال)</label>
      <input
        type="text"
        inputMode="numeric"
        value={formatNumber(input)}
        onChange={handleInputChange}
        placeholder="مثلاً 300000000"
        className="border p-2 rounded w-full mb-4 text-right"
      />
      {isLoading ? (
        <div className="mt-4 bg-yellow-100 p-4 rounded animate-pulse">
          <div className="h-6 bg-yellow-200 rounded w-1/3 mx-auto mb-2"></div>
          <div className="h-4 bg-yellow-200 rounded w-2/3 mx-auto"></div>
        </div>
      ) : tax !== null ? (
        <div className="mt-4 bg-yellow-100 text-sm p-4 rounded font-medium text-gray-800 text-center w-full">
          💰 مالیات: {tax.toLocaleString()} ریال &nbsp; | &nbsp;
          💳 حقوق دریافتی: {(numericInput - tax).toLocaleString()} ریال
        </div>
      ) : null}
    </div>
  );
}