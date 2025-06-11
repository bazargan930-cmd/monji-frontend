'use client';

import { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export type SalaryRow = {
  firstName: string;
  lastName: string;
  nationalCode: string;
  baseSalary: number;
  bonuses: number;
  overtime: number;
  insurance: number;
  year: number;
  month: number;
};

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

export default function SalaryTaxBatchPage() {
  const [rows, setRows] = useState<SalaryRow[]>([
    {
      firstName: '',
      lastName: '',
      nationalCode: '',
      baseSalary: 0,
      bonuses: 0,
      overtime: 0,
      insurance: 0,
      year: 1404,
      month: 2,
    },
  ]);

  const [results, setResults] = useState<SalaryResult[]>([]);

  const numericFields: (keyof SalaryRow)[] = [
    'baseSalary',
    'bonuses',
    'overtime',
    'insurance',
    'year',
    'month',
  ];

  const handleChange = (index: number, field: keyof SalaryRow, value: string | number) => {
    const updated = [...rows];
    updated[index] = {
      ...updated[index],
      [field]: numericFields.includes(field) ? Number(value) : value,
    };
    setRows(updated);
  };

  const handleAdd = () => {
    setRows([
      ...rows,
      {
        firstName: '',
        lastName: '',
        nationalCode: '',
        baseSalary: 0,
        bonuses: 0,
        overtime: 0,
        insurance: 0,
        year: 1404,
        month: 2,
      },
    ]);
  };
  const handleRemove = (index: number) => {
  const updated = [...rows];
  updated.splice(index, 1);
  setRows(updated);
};

  const handleCalculate = async () => {
    try {
      // ✅ اعتبارسنجی اولیه
      for (const [i, row] of rows.entries()) {
        if (!row.firstName.trim() || !row.lastName.trim()) {
          alert(`نام یا نام خانوادگی در ردیف ${i + 1} وارد نشده است.`);
          return;
        }

        if (!/^\d{10}$/.test(row.nationalCode)) {
          alert(`کد ملی در ردیف ${i + 1} نامعتبر است. باید 10 رقم باشد.`);
          return;
        }

        if (row.year < 1400 || row.year > 1405) {
          alert(`سال در ردیف ${i + 1} باید بین 1400 تا 1405 باشد.`);
          return;
        }

        if (row.month < 1 || row.month > 12) {
          alert(`ماه در ردیف ${i + 1} باید بین 1 تا 12 باشد.`);
          return;
        }

        const numberFields = ['baseSalary', 'bonuses', 'overtime', 'insurance'] as const;
        for (const field of numberFields) {
          if (row[field] < 0) {
            alert(`مقدار ${field} در ردیف ${i + 1} نمی‌تواند منفی باشد.`);
            return;
          }
        }
      }

      const response = await fetch('http://localhost:3001/simulators/salary-tax/batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // "Authorization": `Bearer ${token}`, // در صورت نیاز به توکن
        },
        body: JSON.stringify({ rows }),
      });

      if (!response.ok) throw new Error('خطا در محاسبه مالیات');

      const data = await response.json();
      setResults(data);
    } catch (err) {
      alert('محاسبه با خطا مواجه شد');
      console.error(err);
    }
  };


const handleDownloadExcel = () => {
  if (results.length === 0) {
    alert('نتیجه‌ای برای دانلود وجود ندارد.');
    return;
  }

  const worksheetData = results.map((r, i) => ({
    ردیف: i + 1,
    'درآمد کل': r.result?.totalIncome ?? 0,
    'درآمد مشمول': r.result?.totalTaxableIncome ?? 0,
    'بیمه': r.result?.insurance ?? 0,
    'مالیات نهایی': r.result?.taxAmount ?? 0,
    'نرخ مالیات (%)': (r.result?.taxRate ?? 0) * 100,
    'نرخ مؤثر (%)': (r.result?.effectiveTaxRate ?? 0) * 100,
    'معافیت‌ها': r.result?.exemptionsApplied ?? 0,
    وضعیت: r.status === 'success' ? 'موفق' : `خطا: ${r.message}`,
  }));

  const worksheet = XLSX.utils.json_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'نتایج مالیات');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

  const now = new Date();
  const fileName = `salary-tax-result-${now.getFullYear()}-${now.getMonth() + 1}.xlsx`;
  saveAs(blob, fileName);
};

  return (
  <div className="space-y-6 p-6">
    {/* دکمه‌های دانلود */}
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => {
          const now = new Date();
          const fileName = `salary-tax-result-${now.getFullYear()}-${now.getMonth() + 1}.json`;
          const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          a.click();
          URL.revokeObjectURL(url);
        }}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        📥 دانلود خروجی مالیات
      </button>

      <button
        onClick={handleDownloadExcel}
        className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
      >
        📤 دانلود فایل Excel
      </button>
    </div>

    {/* فرم ورود اطلاعات */}
    {rows.map((row, index) => (
      <div key={index} className="border p-4 rounded bg-gray-50 space-y-4 shadow">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="نام" value={row.firstName} onChange={(e) => handleChange(index, 'firstName', e.target.value)} className="input" />
          <input type="text" placeholder="نام خانوادگی" value={row.lastName} onChange={(e) => handleChange(index, 'lastName', e.target.value)} className="input" />
          <input type="text" placeholder="کد ملی" value={row.nationalCode} onChange={(e) => handleChange(index, 'nationalCode', e.target.value)} className="input" />
          <input type="number" placeholder="حقوق پایه" value={row.baseSalary} onChange={(e) => handleChange(index, 'baseSalary', e.target.value)} className="input" />
          <input type="number" placeholder="پاداش" value={row.bonuses} onChange={(e) => handleChange(index, 'bonuses', e.target.value)} className="input" />
          <input type="number" placeholder="اضافه کار" value={row.overtime} onChange={(e) => handleChange(index, 'overtime', e.target.value)} className="input" />
          <input type="number" placeholder="بیمه" value={row.insurance} onChange={(e) => handleChange(index, 'insurance', e.target.value)} className="input" />
          <input type="number" placeholder="سال" value={row.year} onChange={(e) => handleChange(index, 'year', e.target.value)} className="input" />
          <input type="number" placeholder="ماه" value={row.month} onChange={(e) => handleChange(index, 'month', e.target.value)} className="input" />
        </div>

        <div className="text-left">
          <button
            onClick={() => handleRemove(index)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            ❌ حذف
          </button>
        </div>
      </div>


    ))}

    {/* دکمه‌های فرم */}
    <div className="flex gap-4">
      <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">➕ افزودن کارمند جدید</button>
      <button onClick={handleCalculate} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">📊 محاسبه مالیات</button>
    </div>

    {/* جدول نتایج */}
    {results.length > 0 && (
      <div className="mt-6 overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">جدول نتایج مالیات</h2>
        <table className="min-w-full text-sm text-right border rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">ردیف</th>
              <th className="px-4 py-2 border">درآمد کل</th>
              <th className="px-4 py-2 border">درآمد مشمول</th>
              <th className="px-4 py-2 border">بیمه</th>
              <th className="px-4 py-2 border">مالیات</th>
              <th className="px-4 py-2 border">نرخ مالیات</th>
              <th className="px-4 py-2 border">نرخ مؤثر</th>
              <th className="px-4 py-2 border">معافیت</th>
              <th className="px-4 py-2 border">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {results.map((res, i) => (
              <tr key={i} className="bg-white border-t">
                <td className="px-4 py-2 border">{i + 1}</td>
                <td className="px-4 py-2 border">{res.result?.totalIncome?.toLocaleString() ?? '—'}</td>
                <td className="px-4 py-2 border">{res.result?.totalTaxableIncome?.toLocaleString() ?? '—'}</td>
                <td className="px-4 py-2 border">{res.result?.insurance?.toLocaleString() ?? '—'}</td>
                <td className="px-4 py-2 border text-green-800 font-bold">{res.result?.taxAmount?.toLocaleString() ?? '—'}</td>
                <td className="px-4 py-2 border">{(res.result?.taxRate ?? 0) * 100}%</td>
                <td className="px-4 py-2 border">{(res.result?.effectiveTaxRate ?? 0) * 100}%</td>
                <td className="px-4 py-2 border">{res.result?.exemptionsApplied ?? '—'}</td>
                <td className="px-4 py-2 border">{res.status === 'success' ? '✅ موفق' : '❌ خطا'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>

);
}
