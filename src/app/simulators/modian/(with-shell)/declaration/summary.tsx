//src/app/simulators/modian/declaration/summary.tsx
'use client';
import React from 'react';

export default function SummaryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">اظهارنامه پیش فرض</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">نام/نام تجاری مودی</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">نام/نام تجاری بیمه گذار</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">وضعیت</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">نوع</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">کد رهگیری اظهارنامه</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">نام شرکت</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">نام شرکت بیمه گذار</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  فعال
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">نوع اظهارنامه</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">123456</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-700">
            1 تا 10 از 100
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded text-sm">قبلی</button>
          <button className="px-3 py-1 border rounded text-sm bg-blue-500 text-white">1</button>
          <button className="px-3 py-1 border rounded text-sm">2</button>
          <button className="px-3 py-1 border rounded text-sm">3</button>
          <button className="px-3 py-1 border rounded text-sm">بعدی</button>
        </div>
      </div>
      
      <div className="mt-8">
        <button
          type="button"
          className="rounded-md px-6 py-3 text-white bg-blue-600 hover:bg-blue-700"
        >
          ارسال بازخورد
        </button>
      </div>
    </div>
  );
}