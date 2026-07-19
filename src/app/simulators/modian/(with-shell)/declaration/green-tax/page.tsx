//src/app/simulators/modian/declaration/green-tax/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function GreenTaxPage() {
  const router = useRouter();

  const rows = [
    { title: 'فروش واحد آلاینده با نرخ نیم درصد', rate: '0.5' },
    { title: 'فروش واحد آلاینده با نرخ یک درصد', rate: '1' },
    { title: 'فروش واحد آلاینده با نرخ یک و نیم درصد', rate: '1.5' },
    { title: 'فروش کارمزدی واحد آلاینده با نرخ دو و نیم درصد', rate: '2.5' },
    { title: 'فروش کارمزدی واحد آلاینده با نرخ پنج درصد', rate: '5' },
    { title: 'فروش کارمزدی واحد آلاینده با نرخ هفت و نیم درصد', rate: '7.5' },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8" dir="rtl">
      <div className="rounded-lg bg-white shadow border border-gray-200 p-6 md:p-8">

        {/* تیتر + فلش */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => router.back()}
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            ←
          </button>

          <h1 className="text-xl md:text-2xl font-bold text-center flex-1">
            اظهارنامه عوارض سبز
          </h1>

          <div className="w-6" />
        </div>

        {/* جدول */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-center">
            <thead className="bg-green-100">
              <tr>
                <th className="border p-2">شرح</th>
                <th className="border p-2">نرخ عوارض (درصد)</th>
                <th className="border p-2">مبلغ فروش مشمول عوارض (ریال)</th>
                <th className="border p-2">مبلغ عوارض (ریال)</th>
              </tr>
            </thead>

            <tbody>
              {/* ردیف‌های 1 تا 6 */}
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="border p-2 text-right">{row.title}</td>

                  <td className="border p-2 bg-gray-50">
                    {row.rate}
                  </td>

                  <td className="border p-2">
                    <input
                      type="text"
                      className="w-full border rounded px-2 py-1"
                    />
                  </td>

                </tr>
              ))}

              {/* ردیف 7 - بدهی عوارض */}
              <tr className="bg-gray-50">
                <td className="border p-2 text-right font-medium">
                  بدهی عوارض
                </td>
                <td className="border p-2" colSpan={2}></td>
              </tr>

              {/* ردیف 8 - کسر می شود */}
              <tr>
                <td className="border p-2 text-right">
                  کسر می شود: سرمایه‌گذاری (موضوع تبصره 7 ماده 27 قانون)
                </td>
                <td className="border p-2" colSpan={2}></td>
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
              </tr>

              {/* ردیف 9 - جمع کل */}
              <tr>
                <td colSpan={4} className="bg-green-800 text-white text-right p-3 font-bold">
                  جمع مبلغ عوارض سبز
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* دکمه‌ها */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="rounded-md px-6 py-2 border border-black bg-white text-black hover:bg-gray-600"
          >
            انصراف
          </button>

          <div className="space-x-3 space-x-reverse">
            <button className="rounded-md px-6 py-2 bg-black text-white hover:bg-gray-800">
              ثبت موقت
            </button>

            <button className="rounded-md px-6 py-2 bg-green-600 text-white hover:bg-green-700">
              ثبت نهایی
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

