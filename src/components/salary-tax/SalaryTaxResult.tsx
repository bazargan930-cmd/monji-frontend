// src/components/salary-tax/SalaryTaxResult.tsx


export type SalaryResult = {
  index: number;
  status: 'success' | 'error';
  result?: {
    totalIncome: number;
    totalTaxableIncome: number;
    insurance: number;
    taxAmount: number;
    taxRate: number;
    effectiveTaxRate: number;
    exemptionsApplied: number;
  };
  message?: string;
};




type SalaryTaxResultProps = {
  result: {
    taxableSalary?: number;
    taxAmount?: number;
    exemptionAmount?: number;
    effectiveTaxRate?: number;
  };
};

export default function SalaryTaxResult({ result }: { result: SalaryResult }) {
  if (result.status === 'error') {
    return <div className="text-red-600">خطا: {result.message}</div>;
  }

  return (
    <div className="border rounded p-2 bg-gray-50 mt-2 text-sm">
      <div>درآمد کل: {result.result?.totalIncome.toLocaleString()}</div>
      <div>درآمد مشمول مالیات: {result.result?.totalTaxableIncome.toLocaleString()}</div>
      <div>بیمه: {result.result?.insurance.toLocaleString()}</div>
      <div>میزان مالیات: {result.result?.taxAmount.toLocaleString()}</div>
      <div>نرخ مالیات: {result.result?.taxRate * 100}٪</div>
      <div>تعداد معافیت: {result.result?.exemptionsApplied}</div>
    </div>
  );
}