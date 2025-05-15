// src/components/salary-tax/SalaryTaxResult.tsx
type SalaryTaxResultProps = {
  result: {
    taxableSalary?: number;
    taxAmount?: number;
    exemptionAmount?: number;
    effectiveTaxRate?: number;
  };
};

export default function SalaryTaxResult({ result }: SalaryTaxResultProps) {
  return (
    <div className="border rounded-xl p-6 shadow-md bg-white w-full max-w-xl space-y-4">
      <h2 className="text-xl font-bold text-gray-800">نتیجه محاسبه مالیات</h2>
      <div className="text-sm text-gray-700">
        <p>حقوق مشمول مالیات: <span className="font-semibold">{result.taxableSalary?.toLocaleString() ?? "—"} تومان</span></p>
        <p>میزان معافیت: <span className="font-semibold">{result.exemptionAmount?.toLocaleString() ?? "—"} تومان</span></p>
        <p>میزان مالیات محاسبه‌شده: <span className="font-semibold text-red-600">{result.taxAmount?.toLocaleString() ?? "—"} تومان</span></p>
        <p>نرخ مؤثر مالیاتی: <span className="font-semibold">{result.effectiveTaxRate?.toFixed(2) ?? "—"}٪</span></p>
      </div>
    </div>
  );
}
