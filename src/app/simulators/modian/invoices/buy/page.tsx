// src/app/simulators/modian/invoices/buy/page.tsx
'use client';
import React from 'react';

export default function ModianInvoicesBuyPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl md:text-2xl font-bold">صورتحساب‌های خرید داخلی</h1>

      {/* فیلترهای نمایشی (در آینده Hook/Schema اضافه می‌شود) */}
      <div className="rounded-md border border-gray-200 bg-white p-3">
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <span>فیلتر شماره مالیاتی</span>
          <span> | </span>
          <span>نقش مودی</span>
          <span> | </span>
          <span>دوره مالیاتی</span>
        </div>
      </div>

      {/* جدول Placeholder */}
      <div className="rounded-md border border-gray-200 bg-white overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-3 py-2 text-right">ردیف</th>
              <th className="px-3 py-2 text-right">شماره مالیاتی صورت‌حساب</th>
              <th className="px-3 py-2 text-right">مجموع صورت‌حساب (ریال)</th>
              <th className="px-3 py-2 text-right">مالیات بر ارزش افزوده (ریال)</th>
              <th className="px-3 py-2 text-right">وضعیت</th>
              <th className="px-3 py-2 text-right">تاریخ</th>
              <th className="px-3 py-2 text-right">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((_, i) => (
              <tr key={i} className="border-t">
                <td className="px-3 py-2">{i + 1}</td>
                <td className="px-3 py-2">—</td>
                <td className="px-3 py-2">—</td>
                <td className="px-3 py-2">—</td>
                <td className="px-3 py-2">در انتظار واکنش</td>
                <td className="px-3 py-2">—/—/—</td>
                <td className="px-3 py-2 text-green-700">جزئیات</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* یادداشت نمایشی */}
      <div className="text-xs text-gray-500">
        این صفحه فعلاً نمایشی است و به‌زودی به سرویس‌های بک‌اند متصل می‌شود.
      </div>
    </div>
  );
}
