"use client";

import { useState } from "react";
import SalaryTaxResult from "@/components/salary-tax/SalaryTaxResult";
import SalaryTaxForm from "./SalaryTaxForm";

export default function SalaryTaxPage() {
  const [result, setResult] = useState<null | {
    taxableSalary: number;
    taxAmount: number;
    exemptionAmount: number;
    effectiveTaxRate: number;
  }>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCalculate = async (formData: any) => {
  setLoading(true);
  setError("");
  setResult(null);

  const token = localStorage.getItem("access_token");

  const requestBody = {
    salaryComponents: {
      baseSalary: Number(formData.monthlySalary),
      bonuses: Number(formData.bonuses),
      overtime: Number(formData.overtime),
    },
    insurance: Number(formData.insurance),
    month: 2,
    year: 1404,
  };

  try {
    const res = await fetch("http://localhost:3001/simulators/salary-tax/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!res.ok) throw new Error("خطا در دریافت پاسخ");

    const data = await res.json();
    setResult(data);
  } catch (err: any) {
    setError(err.message || "خطای نامشخص");
  } finally {
    setLoading(false);
  }
};


  return (
  <main className="p-6 max-w-3xl mx-auto space-y-6">
    <h1 className="text-2xl font-bold">محاسبه مالیات حقوق</h1>

    <SalaryTaxForm onSubmit={handleCalculate} />

    {loading && <p className="text-blue-600">در حال محاسبه...</p>}
    {error && <p className="text-red-600">خطا: {error}</p>}
    {result && <SalaryTaxResult result={result} />}
  </main>
);
}
