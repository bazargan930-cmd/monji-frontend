// src/app/simulators/modian/declaration/feedback/page.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function FeedbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openModal, setOpenModal] = React.useState(false);
  const [rowNameOpen, setRowNameOpen] = React.useState(false);
  const [rowName, setRowName] = React.useState('');
  const season = searchParams.get('season') || 'بهار';
  const year = searchParams.get('year') || '1404';

  return (
    <div className="w-full px-6 py-6">

      {/* Header */}
      <div className="rounded-lg px-6 py-4 mb-6 flex items-center justify-start">

        {/* Back */}
        <button
          onClick={() => router.back()}
          className="w-9 h-9 rounded border text-xl hover:bg-gray-100"
          aria-label="بازگشت"
        >
          →
        </button>

        {/* Title */}
        <h1 className="text-lg font-bold">
          ارسال بازخورد دوره {season} {year}
        </h1>

        
      </div>
      {/* Left actions */}
        <div className="flex justify-end gap-2 mb-6">
            <button className="w-9 h-9 rounded bg-green-500 text-white text-lg hover:bg-green-600">
            ↻
          </button>
          <button
            onClick={() => setOpenModal(true)}
            className="w-9 h-9 rounded bg-green-500 text-white text-lg font-bold hover:bg-green-600"
          >
            +
          </button>
          
        </div>

      {/* Content */}
      <div className="bg-white border rounded-lg p-6 text-center text-gray-500">
          اطلاعاتی برای نمایش وجود ندارد
      </div>
      {/* Modal Skeleton */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded shadow relative">

            {/* Modal Header */}
            <div className="px-6 py-4 border-b text-right">
              <h2 className="text-lg font-bold">
                ثبت بازخورد
              </h2>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Warning Message */}
              <div className="w-full bg-red-50 border border-red-200 rounded p-4 text-right">
                <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                  <span>▲</span>
                  <span>توجه</span>
                </div>
                <p className="text-amber-800 text-sm leading-relaxed">
                  لطفاً در انتخاب بازه و اعلام مقدار فعلی در اظهارنامه دقت نمایید؛ در صورت عدم تطابق مقدار وارد شده با مقدار قابل پرداخت در اظهارنامه، بازخورد خطا نمایش می‌شود.
                </p>
              </div>

              {/* Form Body */}
              <div className="mt-6 space-y-6 text-right">

                {/* Row 1 */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 relative">
                    <input className="w-full border rounded px-3 py-2" />
                    <label className="absolute top-0 right-3 -translate-y-1/2 bg-white px-1 text-sm">
                      دوره مالیاتی*
                    </label>
                  </div>
                  <div className="col-span-2 relative">
                    <input className="w-full border rounded px-3 py-2" />
                    <label className="absolute top-0 right-3 -translate-y-1/2 bg-white px-1 text-sm">
                      آخرین زمان بروزرسانی سامانه*
                    </label>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative">
                    <select
                      className="w-full border rounded px-3 py-2"
                      defaultValue=""
                    >
                      <option value="" disabled hidden></option>
                      <option className="whitespace-normal">
                        جدول الف: اطلاعات فروش
                      </option>
                      <option>جدول ب: اطلاعات خرید</option>
                      <option>جدول ج: اعتبار مالیاتی</option>
                      <option>جدول د: محاسبه مانده بدهی مالیاتی</option>
                      <option>جدول جزئیات بیشتر ردیف 2 جدول ج</option>
                      <option>جدول جزئیات بیشتر ردیف 3 جدول ج</option>
                      <option>جدول جزئیات بیشتر ردیف 4 جدول د</option>
                      <option>جدول جزئیات بیشتر ردیف 5 جدول د</option>
                    </select>
                    <label className="absolute top-0 right-3 -translate-y-1/2 bg-white px-1 text-sm">
                      نام جدول*
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setRowNameOpen(v => !v)}
                      className="w-full border rounded px-3 py-2 text-right bg-white flex items-center justify-between"
                    >
                      <span className="truncate">{rowName || ' '}</span>
                      <span className="text-gray-500 text-sm">▼</span>
                    </button>

                    {rowNameOpen && (
                      <div className="absolute z-20 mt-1 w-full max-h-56 overflow-y-auto border rounded bg-white shadow">
                        {[
                          'فروش خالص کالاها و خدمات موضوع ماده(7)(نقدی و نسیه)',
                          'فروش خالص کالاها و خدمات از دستگاه کاتخوان ویا درگاه پرداخت اینترنتی',
                          'درآمد مربوط به اجرت ساخت،حق العمل و سود فروشندگان طلا، جواهر و پلاتین',
                          'فروش خالص کالاها و خدمات معاف(نقدی و نسیه)',
                          'کل صادرات کالاها و خدمات به غیراز صادرات کالاهای موضوع تبصره(2) ماده(10) و فروش بورس کالا و گواهی سپرده کالایی(تایید نشده)',
                          'کل صادرات کالاهای موضوع تبصره(2) ماده(10)(تایید نشده)',
                          'فروش خالص کالاها و خدمات',
                          'خرید کالاها و خدمات',
                          'حق العمل کاری ها',
                          'پیمانکاری ها',
                          'سایر موارد',
                        ].map(item => (
                          <div
                            key={item}
                            onClick={() => {
                              setRowName(item);
                              setRowNameOpen(false);
                            }}
                            className="px-3 py-2 cursor-pointer hover:bg-gray-100 whitespace-normal break-words text-sm"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                    <label className="absolute top-0 right-3 -translate-y-1/2 bg-white px-1 text-sm">
                      نام ردیف*
                    </label>
                  </div>
                  <div className="relative">
                    <select
                      className="w-full border rounded px-3 py-2"
                      defaultValue=""
                    >
                      <option value="" disabled hidden></option>
                      <option className="whitespace-normal">
                        بهای کالاها و خدمات - بارگذاری از سامانه مودیان
                      </option>
                    </select>
                    <label className="absolute top-0 right-3 -translate-y-1/2 bg-white px-1 text-sm">
                      نام ستون*
                    </label>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input className="w-full border rounded px-3 py-2" />
                    <label className="absolute top-0 right-3 -translate-y-1/2 bg-white px-1 text-sm">
                      مقدار فعلی ردیف انتخاب شده در اظهارنامه*
                    </label>
                  </div>
                  <div className="relative">
                    <input className="w-full border rounded px-3 py-2" />
                    <label className="absolute top-0 right-3 -translate-y-1/2 bg-white px-1 text-sm">
                      مقدار مورد انتظار مودی از ردیف انتخاب شده*
                    </label>
                  </div>
                </div>

                {/* Row 4 */}
                <div>
                  <input
                    className="w-full border rounded px-3 py-3"
                    placeholder="توضیحات(اختیاری)"
                  />
                </div>

                {/* Row 5 */}
                <div>
                  <input
                    className="w-full border rounded px-3 py-3"
                    placeholder="باید: صورت حسابهایی که باید محاسبه شود"
                  />
                </div>

                {/* Row 6 */}
                <div>
                  <input
                    className="w-full border rounded px-3 py-3"
                    placeholder="نباید: صورت حسابهایی که نباید محاسبه شود"
                  />
                </div>

              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t flex justify-end gap-2">
              <button className="px-6 py-2 rounded bg-green-500 text-white hover:bg-green-600">
                ثبت
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 rounded border hover:bg-gray-100"
              >
                انصراف
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}