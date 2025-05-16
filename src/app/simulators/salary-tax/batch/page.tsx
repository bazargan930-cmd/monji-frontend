"use client";
type Row = {
  baseSalary: number;
  bonuses: number;
  overtime: number;
  insurance: number;
};

import { useState } from "react";

export default function SalaryTaxBatchPage() {
  const [rows, setRows] = useState<Row[]>([]);

  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (index: number, field: keyof Row, value: number) => {
  const updated = [...rows];
  updated[index] = {
    ...updated[index],
    [field]: value,
  };
  setRows(updated);
};

const handleRemove = (index: number) => {
  const updated = [...rows];
  updated.splice(index, 1);
  setRows(updated);

  const updatedResults = [...results];
  updatedResults.splice(index, 1);
  setResults(updatedResults);
};


  const handleSubmit = async () => {
    setLoading(true);
    setResults([]);

    const token = localStorage.getItem("access_token");

    const payload = {
      rows: rows.map((row) => ({
        
          baseSalary: row.baseSalary,
          bonuses: row.bonuses,
          overtime: row.overtime,
          insuranceDeduction: row.insurance,
          month: 2,
          year: 1404,
      })),
    };
    console.log("📦 payload:", JSON.stringify(payload, null, 2));

    try {
      const res = await fetch("http://localhost:3001/simulators/salary-tax/batch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setResults(data);
    } catch (e) {
      alert("خطا در دریافت پاسخ از سرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">محاسبه مالیات دسته‌ای</h1>

      {rows.map((row, idx) => (
        <div key={idx} className="border p-4 rounded bg-white shadow space-y-2">
          <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">کارمند {idx + 1}</h2>
          <button
            onClick={() => handleRemove(idx)}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            ❌ حذف
          </button>
        </div>

          <input
            type="number"
            placeholder="حقوق پایه"
            value={row.baseSalary}
            onChange={(e) => handleChange(idx, "baseSalary", +e.target.value)}
            className="w-full border px-3 py-1 rounded"
          />
          <input
            type="number"
            placeholder="پاداش"
            value={row.bonuses}
            onChange={(e) => handleChange(idx, "bonuses", +e.target.value)}
            className="w-full border px-3 py-1 rounded"
          />
          <input
            type="number"
            placeholder="اضافه‌کار"
            value={row.overtime}
            onChange={(e) => handleChange(idx, "overtime", +e.target.value)}
            className="w-full border px-3 py-1 rounded"
          />
          <input
            type="number"
            placeholder="بیمه پرداختی"
            value={row.insurance}
            onChange={(e) => handleChange(idx, "insurance", +e.target.value)}
            className="w-full border px-3 py-1 rounded"
          />
          {results[idx] && (
            <div className="mt-4 p-3 border rounded bg-green-50 text-sm">
              <p>💰 مالیات محاسبه‌شده: <strong>{results[idx].taxAmount?.toLocaleString() ?? "—"} تومان</strong></p>
              <p>📉 نرخ مؤثر مالیاتی: <strong>{results[idx].effectiveTaxRate?.toFixed(2) ?? "—"}٪</strong></p>
            </div>
          )}

        </div>
      ))}
    <div className="space-x-4 mt-6"></div>  
      <button
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
        onClick={() =>
          setRows([...rows, { baseSalary: 0, bonuses: 0, overtime: 0, insurance: 0 }])
        }
      >
        ➕ افزودن کارمند جدید
      </button>

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        onClick={handleSubmit}
      >
        {loading ? "در حال محاسبه..." : "محاسبه مالیات دسته‌ای"}
      </button>

      {results.length > 0 && (
        <div className="space-y-4 mt-6">
          <h2 className="text-xl font-bold">نتایج:</h2>
          {results.map((res, i) => (
            <div key={i} className="border p-4 rounded bg-green-50">
              <p>کارمند {i + 1}</p>
              <p>مالیات: {res.taxAmount?.toLocaleString() ?? "—"} تومان</p>
              <p>نرخ مؤثر: {res.effectiveTaxRate?.toFixed(2) ?? "—"}٪</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
