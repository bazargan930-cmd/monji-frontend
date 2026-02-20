// src/app/simulators/modian/requests/tax-effect-deferral-invoices/page.tsx
'use client';

import React, { useState } from 'react';

import { EmptyTableRow, ScrollableTableShell } from '@/components/modian';

const PAGE_TITLE = 'درخواست تعویق اثر مالیاتی صورتحساب باطل شده در خارج از موعد';

type Row = {
  taxNumber: string;
  requester: string;
  requesterEconomicNumber: string;
  periodYear: string;
  declarationType: string;
  status: string;
  requestDateTime: string;
  responseDateTime: string;
};

const columns = [
  {
    key: 'index',
    label: 'ردیف',
    headerClassName: 'py-3 px-4 text-right w-20',
    cellClassName: 'py-3 px-4 text-right tabular-nums',
    renderCell: (_: Row, i: number) => String(i + 1),
  },
  {
    key: 'taxNumber',
    label: 'شماره مالیاتی',
    headerClassName: 'py-3 px-4 text-right',
    cellClassName: 'py-3 px-4 text-right',
    renderCell: (r: Row) => r.taxNumber,
  },
  {
    key: 'requester',
    label: 'درخواست دهنده',
    headerClassName: 'py-3 px-4 text-right',
    cellClassName: 'py-3 px-4 text-right',
    renderCell: (r: Row) => r.requester,
  },
  {
    key: 'requesterEconomicNumber',
    label: 'شماره اقتصادی درخواست دهنده',
    headerClassName: 'py-3 px-4 text-right',
    cellClassName: 'py-3 px-4 text-right',
    renderCell: (r: Row) => r.requesterEconomicNumber,
  },
  {
    key: 'periodYear',
    label: 'دوره/سال',
    headerClassName: 'py-3 px-4 text-right',
    cellClassName: 'py-3 px-4 text-right',
    renderCell: (r: Row) => r.periodYear,
  },
  {
    key: 'declarationType',
    label: 'نوع اظهارنامه',
    headerClassName: 'py-3 px-4 text-right',
    cellClassName: 'py-3 px-4 text-right',
    renderCell: (r: Row) => r.declarationType,
  },
  {
    key: 'status',
    label: 'وضعیت',
    headerClassName: 'py-3 px-4 text-right',
    cellClassName: 'py-3 px-4 text-right',
    renderCell: (r: Row) => r.status,
  },
  {
    key: 'requestDateTime',
    label: 'تاریخ و زمان درخواست',
    headerClassName: 'py-3 px-4 text-right',
    cellClassName: 'py-3 px-4 text-right',
    renderCell: (r: Row) => r.requestDateTime,
  },
  {
    key: 'responseDateTime',
    label: 'تاریخ و زمان واکنش',
    headerClassName: 'py-3 px-4 text-right',
    cellClassName: 'py-3 px-4 text-right',
    renderCell: (r: Row) => r.responseDateTime,
  },
  {
    key: 'actions',
    label: 'اقدامات',
    headerClassName: 'py-3 px-4 text-right w-40',
    cellClassName: 'py-3 px-4 text-right',
    renderCell: () => (
      <div className="flex justify-center gap-2">
        <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600">
          ویرایش
        </button>
        <button className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">
          حذف
        </button>
      </div>
    ),
  },
] as const;

export default function TaxEffectDeferralInvoicesPage() {
  const [rows] = useState<Row[]>([]);
  const isEmpty = rows.length === 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-4 mx-auto w-full max-w-[1200px] px-4">
      <h1 className="text-xl md:text-2xl font-bold">{PAGE_TITLE}</h1>
      
      <div className="rounded border border-blue-200 bg-blue-100 px-4 py-3 text-sm text-gray-700 flex items-center gap-2">
        <span aria-hidden="true">ℹ️</span>
        <span>
          در مواردی که در مهلت مقرر برای ارسال صورتحساب‌های الکترونیکی اقدام به اصلاح یا ابطال صورتحساب‌های الکترونیکی نوع اول خود در دوره گذشته ننموده‌اید، پس از صدور صورتحساب ارجاعی بر روی آن
          و اخذ تأیید خریدار می‌توانید تا آخرین مهلت واکنش به صورتحساب‌های الکترونیکی در دوره گذشته، درخواست خود برای انتقال آثار مالیاتی آن صورتحساب به دوره آتی را برای خریدار ارسال نمایید. در صورت
            پذیرش درخواست شما توسط خریدار، آثار مالیاتی مؤثر آن صورتحساب برای شما و خریدار در دوره آتی لحاظ خواهد شد. تعداد این درخواست‌ها برای منع مالیات بر ارزش افزوده در هر دوره محدود به 3 
            درخواست خواهد بود.
        </span>
      </div>

      <div className="flex items-center justify-end">
       <button
         type="button"
         onClick={() => setIsModalOpen(true)}
         className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 cursor-not-allowed"
       >
         ثبت درخواست
       </button>
     </div>

      {isEmpty ? (
        <div className="w-full overflow-hidden rounded-md border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-[#d1f7f5ff] text-gray-700">
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className={col.headerClassName}>
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <EmptyTableRow colSpan={columns.length} />
            </tbody>
          </table>
        </div>
      ) : (
        <ScrollableTableShell>
          <table className="w-full text-sm whitespace-nowrap">
            <thead className="bg-[#d1f7f5ff] text-gray-700">
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className={col.headerClassName}>
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t">
                  {columns.map((col) => (
                    <td key={col.key} className={col.cellClassName}>
                      {col.renderCell(r, i)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollableTableShell>
      )}
     {/* Modal for request submission */}
     {isModalOpen && (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
         <div className="w-[580px] rounded-md bg-white shadow-xl">
           <div className="px-6 pt-6 text-start">
             <h2 className="text-lg font-bold text-gray-900">
               ثبت درخواست تعویق اثر مالیاتی صورتحساب
             </h2>
           </div>
           <div className="px-6 pt-4">
             <div className="grid grid-cols-1 gap-4">
               {/* Request Type Dropdown */}
               <div className="space-y-1">
                 <label className="block text-sm font-medium text-gray-700">
                   نوع اظهارنامه
                 </label>
                 <select
                   className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                   defaultValue=""
                 >
                   <option value="" disabled>انتخاب کنید</option>
                   <option value="1">اظهارنامه ارزش افزوده تابستان 1404</option>
                   <option value="2">اظهارنامه عملکرد 1404</option>
                 </select>
               </div>

               {/* Tax Number Field */}
               <div className="space-y-1">
                 <label className="block text-sm font-medium text-gray-700">
                   شماره مالیاتی
                 </label>
                 <input
                   type="text"
                   className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                   placeholder="شماره مالیاتی را وارد کنید"
                 />
               </div>
               <div className="px-6 pt-2 text-start text-sm text-gray-600">
                  <p>
                    مقدار مجاز 22 کاراکتر
                  </p>
                </div>
             </div>
           </div>
           <div className="px-6 pb-6 pt-6 flex items-center justify-end gap-3">
             <button
               type="button"
               onClick={() => setIsModalOpen(false)}
               className="inline-flex items-center rounded-md border border-gray-800 bg-white px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
             >
               انصراف
             </button>
             <button
               type="button"
               className="inline-flex items-center rounded-md border border-black bg-black px-8 py-2 text-sm font-medium text-white hover:bg-black"
             >
               ثبت
             </button>
           </div>
         </div>
       </div>
     )}
    </div>
  );
}