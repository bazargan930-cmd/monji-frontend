'use client';

import { useState } from 'react';

type TaxResult = {
  taxAmount: number;
  taxRate: number;
  exemptionsApplied: number;
  totalTaxableIncome: number;
  insurance: number;
};

export default function SalaryTaxFormPage() {
  const [income, setIncome] = useState<number>(0);
  const [result, setResult] = useState<TaxResult | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculate = async () => {
    setError("");
    setResult(null);

    if (income <= 0) {
      setError("لطفاً عدد مشمول مالیات معتبر وارد کنید.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/simulators/salary-tax/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          salaryComponents: {
            baseSalary: income,
            overtime: 0,
            gift: 0,
            leaveBuyback: 0
          },
          insurance: 0,
          month: 2,
          year: 1404
        }),
      });

      if (!response.ok) throw new Error("محاسبه با خطا مواجه شد");

      const data = await response.json();
      setResult(data.result);
    } catch (err) {
      setError("خطا در ارتباط با سرور");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 space-y-6 p-6 border rounded shadow bg-white">
      <h1 className="text-xl font-bold text-center">محاسبه مالیات حقوق (تکی)</h1>

      <input
        type="number"
        className="input border p-2 w-full rounded"
        placeholder="مبلغ مشمول مالیات (تومان)"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
      />

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        📊 محاسبه مالیات
      </button>

      {error && <div className="text-red-600 text-center">{error}</div>}

      {result && (
        <div className="bg-green-50 p-4 rounded text-sm space-y-1">
          <div>💰 مالیات نهایی: <b>{result.taxAmount.toLocaleString()}</b> تومان</div>
          <div>📊 نرخ مالیات: {(result.taxRate * 100).toFixed(1)}%</div>
          <div>🎁 معافیت اعمال‌شده: {result.exemptionsApplied.toLocaleString()} تومان</div>
        </div>
      )}
    </div>
  );
}
