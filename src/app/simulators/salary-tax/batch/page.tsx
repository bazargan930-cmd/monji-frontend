'use client';

import { useState } from 'react';
import SalaryTaxResult from '@/components/salary-tax/SalaryTaxResult';
import type { SalaryResult } from '@/components/salary-tax/SalaryTaxResult';

// تعریف نوع دقیق برای هر کارمند
export type SalaryRow = {
  firstName: string;
  lastName: string;
  baseSalary: number;
  bonuses: number;
  overtime: number;
  insurance: number;
};

export default function SalaryTaxBatchPage() {
  const [rows, setRows] = useState<SalaryRow[]>([
    { firstName: '', lastName: '', baseSalary: 0, bonuses: 0, overtime: 0, insurance: 0 },
  ]);

  const [results, setResults] = useState<SalaryResult[]>([]);

  const handleChange = (
  index: number,
  field: keyof SalaryRow,
  value: string
) => {
  const updated = [...rows];

  updated[index] = {
    ...updated[index],
    [field]: numericFields.includes(field)
      ? Number(value)
      : value,
  } as SalaryRow;

  setRows(updated);
};

    const numericFields: (keyof SalaryRow)[] = [
    'baseSalary',
    'bonuses',
    'overtime',
    'insurance',
  ];
  
  const handleAdd = () => {
    setRows([
      ...rows,
      { firstName: '', lastName: '', baseSalary: 0, bonuses: 0, overtime: 0, insurance: 0 },
    ]);
  };

  return (
    <div className="space-y-6 p-4">
      {rows.map((row, index) => (
        <div key={index} className="border rounded-lg p-4">
          {results[index] && <SalaryTaxResult result={results[index]} />}

          <input
            type="text"
            placeholder="نام"
            value={row.firstName}
            onChange={(e) => handleChange(index, 'firstName', e.target.value)}
            className="w-full border px-3 py-1 rounded"
          />

          <input
            type="text"
            placeholder="نام خانوادگی"
            value={row.lastName}
            onChange={(e) => handleChange(index, 'lastName', e.target.value)}
            className="w-full border px-3 py-1 rounded mt-2"
          />

          {/* سایر فیلدهای عددی */}
          <input
            type="number"
            placeholder="حقوق پایه"
            value={row.baseSalary}
            onChange={(e) => handleChange(index, 'baseSalary', e.target.value)}
            className="w-full border px-3 py-1 rounded mt-2"
          />
          <input
            type="number"
            placeholder="پاداش"
            value={row.bonuses}
            onChange={(e) => handleChange(index, 'bonuses', e.target.value)}
            className="w-full border px-3 py-1 rounded mt-2"
          />
          <input
            type="number"
            placeholder="اضافه کار"
            value={row.overtime}
            onChange={(e) => handleChange(index, 'overtime', e.target.value)}
            className="w-full border px-3 py-1 rounded mt-2"
          />
          <input
            type="number"
            placeholder="بیمه"
            value={row.insurance}
            onChange={(e) => handleChange(index, 'insurance', e.target.value)}
            className="w-full border px-3 py-1 rounded mt-2"
          />
        </div>
      ))}

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        افزودن کارمند جدید
      </button>
    </div>
  );
}
