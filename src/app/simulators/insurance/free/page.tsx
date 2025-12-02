// src/app/simulators/insurance/free/page.tsx
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function InsuranceSimpleFreeForm() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<{
    employeeShare: number;
    employerShare: number;
    totalInsurance: number;
  } | null>(null);
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
        setIsLoading(true); // ✅ شروع لودینگ
        axios
          .post<{ success: boolean; result: { employeeShare: number; employerShare: number; totalInsurance: number } }>(
            '/api/simulators/insurance/calculate',
            { taxableIncome: numericInput }
          )
          .then((res) => {
            if (res.data.success) {
              setResult(res.data.result); // ✅ اصلاح: res.data.result
            } else {
              setResult(null);
            }
          })
          .catch(() => setResult(null));
      } else {
        setResult(null);
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [input, numericInput]);

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">🧾 شبیه‌ساز بیمه تامین اجتماعی (نسخه رایگان)</h1>
      <label className="block font-medium mb-2">حقوق مشمول بیمه (ریال)</label>
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
      ) : result ? (
        <div className="mt-4 bg-yellow-100 text-sm p-4 rounded font-medium text-gray-800 text-center w-full">
          💼 سهم کارگر (7%): {result.employeeShare.toLocaleString()} ریال &nbsp; | &nbsp;
          🏢 سهم کارفرما (20%+3%): {result.employerShare.toLocaleString()} ریال &nbsp; | &nbsp;
          💰 مجموع بیمه (30%): {result.totalInsurance.toLocaleString()} ریال
        </div>
      ) : null}
      <div className="mt-6 text-center">
        <a
          href="/auth/signup"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          ثبت‌نام برای دسترسی کامل
        </a>
      </div>
    </div>
  );
}
