import React from 'react';

interface InsuranceResult {
  employeeShare: number;
  employerShare: number;
  unemploymentInsurance: number;
  total: number;
}

interface Props {
  result: InsuranceResult;
}

export default function InsuranceResultBox({ result }: Props) {
  return (
    <div className="bg-white rounded shadow p-4 border text-right">
      <h3 className="text-lg font-bold mb-4">نتایج محاسبه بیمه</h3>

      <ul className="space-y-2 text-sm">
        <li>
          <span className="font-medium">سهم کارمند:</span>{' '}
          {result.employeeShare.toLocaleString()} ریال
        </li>
        <li>
          <span className="font-medium">سهم کارفرما:</span>{' '}
          {result.employerShare.toLocaleString()} ریال
        </li>
        <li>
          <span className="font-medium">بیمه بیکاری:</span>{' '}
          {result.unemploymentInsurance.toLocaleString()} ریال
        </li>
        <li className="font-bold mt-2">
          <span className="text-blue-600">مجموع کل:</span>{' '}
          {result.total.toLocaleString()} ریال
        </li>
      </ul>
    </div>
  );
}
