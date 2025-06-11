'use client';

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

export default function SalaryTaxResult({ result }: { result: SalaryResult }) {
  if (result.status === 'error') {
    return <div className="text-red-600 mt-2">خطا در محاسبه: {result.message}</div>;
  }

  return (
    <div className="mt-4 p-4 rounded border bg-green-50 text-sm space-y-1">
      <div>💼 درآمد کل: {result.result?.totalIncome?.toLocaleString() ?? '—'}</div>
      <div>📈 درآمد مشمول مالیات: {result.result?.totalTaxableIncome?.toLocaleString() ?? '—'}</div>
      <div>🛡️ بیمه: {result.result?.insurance?.toLocaleString() ?? '—'}</div>
      <div>💰 مالیات نهایی: {result.result?.taxAmount?.toLocaleString() ?? '—'}</div>
      <div>📊 نرخ مالیات: {(result.result?.taxRate ?? 0) * 100}%</div>
      <div>🎯 نرخ مؤثر: {(result.result?.effectiveTaxRate ?? 0) * 100}%</div>
      <div>🎁 معافیت‌ها: {result.result?.exemptionsApplied ?? '—'}</div>
    </div>
  );
}
