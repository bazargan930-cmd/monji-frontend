// src/app/simulators/modian/invoices/buy/page.tsx
'use client';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Tabs } from '@/components/modian/ui';

export default function ModianInvoicesBuyPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl md:text-2xl font-bold">صورتحساب‌های خرید داخلی</h1>

      {/* === کادر تب‌ها: «جستجو با فیلتر» / «جستجو با شماره مالیاتی» (کامپوننت مشترک) === */}
      <Tabs
        aria-label="انواع جستجو"
        items={[
          { id: 'filter', title: 'جستجو با فیلتر', content: <FilterForm /> },
          { id: 'taxid',  title: 'جستجو با شماره مالیاتی', content: <TaxIdForm /> },
        ]}
        defaultValue="filter"
        className="bg-transparent"
      />
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

// (تاب‌ها اکنون از کامپوننت مشترک Tabs استفاده می‌کنند)

function FilterForm() {
  return (
    <form className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <select className="rounded border border-gray-300 bg-white px-2 py-1 text-sm">
          <option>نقش مودی</option>
        </select>
        <select className="rounded border border-gray-300 bg-white px-2 py-1 text-sm">
          <option>وضعیت صورت‌حساب</option>
        </select>
        <select className="rounded border border-gray-300 bg-white px-2 py-1 text-sm">
          <option>اطلاعات زمانی (سال/دوره)</option>
        </select>
        <div className="ms-auto flex items-center gap-2">
          <button type="button" className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-700">
            فیلتر پیشرفته
          </button>
          <button type="submit" className="rounded-md bg-green-600 px-3 py-1.5 text-sm text-white">
            جستجو
          </button>
        </div>
      </div>
    </form>
  );
}

function TaxIdForm() {
  return (
    <form>
      {/* ناحیهٔ کارتِ تب: ارتفاع بیشتر + مرکزچینی عمودی/افقی */}
      <div className="min-h-[220px] md:min-h-[260px] flex items-center justify-center">
        <div className="w-full text-center space-y-3 flex flex-col items-center">
          <input
            type="text"
            inputMode="numeric"
            placeholder="شماره مالیاتی صورتحساب مورد نظرتان را جستجو کنید"
            className="w-full md:w-[380px] rounded border border-gray-300 bg-white px-3 py-2 text-sm"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-[380px] rounded-md bg-green-600 py-2 text-sm text-white flex items-center justify-center gap-2"
            >
              <span>جستجو</span>
              <FaSearch className="text-[0.9rem]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
