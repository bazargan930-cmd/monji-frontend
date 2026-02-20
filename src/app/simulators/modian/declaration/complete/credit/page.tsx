// src/app/simulators/modian/declaration/complete/credit/page.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

export default function CreditInformationPage() {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [detailsModalRow, setDetailsModalRow] = useState<number | null>(null);
  const [showRiskModal, setShowRiskModal] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const year = searchParams.get('year') || '1404';
  const season = searchParams.get('season') || 'بهار';

  const steps = [
    'سوالات اظهارنامه',
    'الف - اطلاعات فروش',
    'ب - اطلاعات خرید',
    'ج - اعتبار مالیاتی',
    'د - محاسبه مانده بدهی مالیات',
    'ثبت نهایی',
  ];

  const currentStep = 4;

  return (
    <div className="w-full px-6 py-8 bg-gray-50 min-h-screen">

      {/* Header */}
        <div className="rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">

                {/* سمت راست: دکمه بازگشت + عنوان */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => router.push('/simulators/modian/declaration/complete/purchase')}
                        className="text-xl text-gray-600 hover:text-black"
                        aria-label="بازگشت"
                    >
                        →
                    </button>

                    <h1 className="text-lg font-bold">
                        اظهارنامه ارزش افزوده دوره {season} {year}
                    </h1>
                </div>

                {/* سمت چپ: دکمه انصراف */}
                <button
                    onClick={() => setShowCancelModal(true)}
                    className="bg-white border border-black rounded px-4 py-2 text-sm hover:bg-white"
                >
                    انصراف
                </button>

            </div>
        </div>

      <div className="bg-white rounded-lg border">

        {/* Stepper */}
        <div className="bg-white rounded-lg border mb-6 py-6">
          <div className="flex items-center justify-between relative">

            {steps.map((step, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === currentStep;
              const isCompleted = stepNumber < currentStep;
              const isLast = index === steps.length - 1;

              return (
                <React.Fragment key={step}>
                  <div className="flex items-center bg-white z-10">
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-semibold
                        ${
                          isActive || isCompleted
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                        }
                      `}
                    >
                      {stepNumber}
                    </div>

                    <span
                      className={`text-xs whitespace-nowrap
                        ${
                          isActive || isCompleted
                            ? 'text-gray-700 font-medium'
                            : 'text-gray-400'
                        }
                      `}
                    >
                      {step}
                    </span>
                  </div>

                  {!isLast && (
                    <div className="flex-1 h-[2px] bg-gray-300"></div>
                  )}
                </React.Fragment>
              );
            })}

          </div>
        </div>

        {/* Credit Section */}
        <div className="border-b bg-gray-100 px-4 py-3 font-semibold text-sm">
          ج - اعتبار مالیاتی
        </div>

        <div className="px-6 py-6">

          <div className="overflow-x-auto border rounded">
            <table className="w-full text-sm text-right border-collapse">

              <thead className="bg-green-100">
                <tr>
                  <th className="border px-3 py-2 w-12">ردیف</th>
                  <th className="border px-3 py-2">شرح</th>
                  <th className="border px-3 py-2 w-64">
                    مالیات و عوارض (ریال)
                  </th>
                </tr>
              </thead>

              <tbody>

                {[
                  {
                    title:
                      'جمع مالیات و عوارض پرداختی بابت خرید و واردات کالا و خدمات برابر با مقدار مندرج در ردیف آخر جدول ب',
                    editable: false,
                    hasDetails: false,
                  },
                  {
                    title:
                      'اضافه میشود:جمع اعتبارهای صورتحسابهای الکترونیکی مربوط به خرید دوره های قبل که در دوره جاری بایستی لحاظ شود. (بابت صورتحسابهای الکترونیکی ثبت شده در سامانه مودیان با تاریخ صدور 1402/10/01 به بعد)',
                    editable: false,
                    hasDetails: true,
                  },
                  {
                    title:
                      'کسر میشود:جمع اعتبارهای صورتحسابهای الکترونیکی مربوط به خرید دوره های قبل که در دوره جاری بایستی کسر شود. (بابت صورتحسابهای الکترونیکی ثبت شده در سامانه مودیان با تاریخ صدور 1402/10/01 به بعد)',
                    editable: false,
                    hasDetails: true,
                  },
                  {
                    title:
                      'کسر میشود:مالیات و عوارض پرداختی بابت خرید و واردات نهاده های مربوط به فروش کالا و خدمات معاف موضوع تبصره(2)و(3) ماده(8)',
                    editable: true,
                    hasDetails: false,
                  },
                  {
                    title:
                      'کسر میشود:مالیات و عوارض پرداختی بابت خرید و واردات نهاده های تملک دارایی سرمایه ای(عمرانی) موضوع تبصره(1) ماده(8)وتبصره(4)بند الف ماده(26)',
                    editable: true,
                    hasDetails: false,
                  },
                  {
                    title:
                      'به منظور پرهیز از اعمال جریمه ماده37 و بند ب ماده(36)، کسر میشود: مالیات و عوارض مربوط به خریدها و واردات هایی که اعتبار آن نمی بایست به شما تعلق گرید، اعم از: 1- مالیات و عوارض مربوط به خریدهای خارج از سامانه مودیان که فروشنده با نرخی کمتراز نرخ قانونی اقدام به فروش و اخذ مالیات و عوارض نموده است. 2- مالیات و عوارض مربوط به حق العملکاری واردات که نباید برای شما لحاظ شود. و...',
                    editable: true,
                    hasDetails: false,
                  },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="border px-3 py-2">{i + 1}</td>

                    <td className="border px-3 py-2">
                      <div className="flex flex-col gap-2">
                        <span>{row.title}</span>

                        {row.hasDetails && (
                          <button
                            type="button"
                            onClick={() => setDetailsModalRow(i + 1)}
                            className="self-start border border-green-600 text-green-600 px-3 py-1 rounded text-xs hover:bg-green-50"
                          >
                            جزئیات بیشتر
                          </button>
                        )}
                      </div>
                    </td>

                    <td className="border px-3 py-2">
                      {row.editable ? (
                        <input
                          type="text"
                          className="w-full border rounded px-2 py-1 text-left"
                          placeholder="۰"
                        />
                      ) : (
                        <span>۰</span>
                      )}
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">

        <button
          onClick={() =>
            router.push(
              '/simulators/modian/declaration/complete/purchase'
            )
          }
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          گام قبلی
        </button>

        <button
            onClick={() => setShowRiskModal(true)}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
            گام بعدی
        </button>

      </div>
       {showCancelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="bg-white w-[380px] rounded-lg shadow-lg p-6 relative">

                {/* Close (X) */}
                <button
                    onClick={() => setShowCancelModal(false)}
                    className="absolute left-4 top-4 text-gray-400 hover:text-black text-xl"
                >
                    ×
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <span className="text-3xl text-gray-400">?</span>
                    </div>
                </div>

                {/* Text */}
                <p className="text-center text-gray-700 mb-6">
                    در صورت تایید، اطلاعات وارد شده پاک خواهند شد!
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setShowCancelModal(false)}
                        className="px-6 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-700"
                    >
                        انصراف
                    </button>

                    <button
                        onClick={() => router.push('/simulators/modian/declaration/summary')}
                        className="px-6 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                        تایید
                    </button>
                </div>

            </div>
        </div>
    )}
    {detailsModalRow !== null && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

        <div className="bg-white w-[900px] max-h-[80vh] rounded-lg shadow-lg flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-3 font-semibold">
            <span>
              {detailsModalRow === 2
                ? 'توضیح محاسبات مربوط به ردیف (۲) جدول (ج)'
                : 'توضیح محاسبات مربوط به ردیف (۳) جدول (ج)'}
            </span>

            <button
              onClick={() => setDetailsModalRow(null)}
              className="text-gray-400 hover:text-black text-xl"
            >
              ×
            </button>
          </div>

          {/* Table */}
           <div className="overflow-auto p-4">
             <table className="w-full text-sm border-collapse text-right">

               <thead className="bg-green-100">
                 <tr>
                    <th className="border px-3 py-2">
                     شرح
                   </th>
                   <th className="border px-3 py-2 w-40">
                     مالیات و عوارض (ریال)
                   </th>                  
                 </tr>
               </thead>

               <tbody>

                {(detailsModalRow === 2
                  ? [
                      'مالیات و عوارض مربوط به مبالغ پرداختی بابت صورت‌حساب‌های الکترونیکی خریدهای نسیه با تاریخ صدور از تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۳/۰۶/۳۱ که در دوره جاری تسویه شده‌است.',
                      'خالص مالیات و عوارض خرید بابت صورت‌حساب‌های الکترونیکی ارجاعی (اصلاحی تأیید شده با مبلغ مالیات و عوارض بیشتر از صورت‌حساب مرجع) مربوط به خرید که تاریخ صدور صورت‌حساب مرجع آنها از تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۳/۰۶/۳۱ بوده و باید به مالیات و عوارض (اعتبار) مؤدی در این دوره اضافه شود.',
                      'جمع اعتبارهای مربوط به صورت‌حساب‌های الکترونیکی مربوط به تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۳/۰۶/۳۱ که در دوره جاری می‌بایست لحاظ شود.',
                    ]
                  : [
                      'جمع اعتبارهای مربوط به صورت‌حساب‌های الکترونیکی دوره یا دوره‌های قبل (با تاریخ صدور ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۳/۰۶/۳۱) که بایستی از اعتبارات دوره جاری کسر شود.',
                    ]
                ).map((text, i) => (
                  <tr key={i}>
                    <td className="border px-3 py-2">
                      {text}
                    </td>
                    <td className="border px-3 py-2 text-right">
                      ۰
                    </td>

                    
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="border-t p-4 flex justify-end">
            <button
              onClick={() => setDetailsModalRow(null)}
              className="px-6 py-2 border rounded hover:bg-gray-100"
            >
              بستن
            </button>
          </div>

        </div>
      </div>
    )}

    {showRiskModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

        <div className="bg-white w-[900px] rounded-lg shadow-lg p-6">

          {/* Table */}
          <div className="overflow-auto border rounded mb-6">
            <table className="w-full text-sm border-collapse text-right">

              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">
                    عنوان ردیف
                  </th>
                  <th className="border px-3 py-2 w-48">
                    مقدار پیش‌فرض (ریال)
                  </th>                  
                </tr>
              </thead>

              <tbody>
                {[
                  'کسر می‌شود: مالیات و عوارض پرداختی بابت خرید و واردات نهاده‌های مربوط به فروش کالا و خدمات معاف موضوع تبصره(2)و(3) ماده(8)',
                  'کسر می‌شود: مالیات و عوارض پرداختی بابت خرید نهاده‌های صادرات مواد خام و مواد اولیه تولید موضوع تبصره(2) ماده(10)',
                  'کسر می‌شود: مالیات و عوارض پرداختی بابت خرید نهاده‌های نفتی که به عنوان مواد اولیه اصلی توسط واحدهای تولید استفاده نشده است، موضوع تبصره(3) بند الف ماده(26)',
                  'کسر می‌شود: اعتبار مربوط به فروش مشمول یارانه موضوع جزء(ج) تبصره(2) ماده(5)',
                ].map((text, i) => (
                  <tr key={i}>
                    <td className="border px-3 py-2">{text}</td>
                    <td className="border px-3 py-2 text-right">۰</td>                   
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            مقادیر پیش‌فرض در جدول(ج) بر اساس احکام قانونی ذکر شده در هر ردیف و مبتنی بر سابقه رفتاری شما
            در دوره های گذشته و دوره جاری و همچنین نوع کسب و کار شما (تولیدی یاخدماتی یا بازرگانی بودن و نوع فعالیت ثبت نامی)
            به صورت شخصی سازی شده برای شما محاسبه شده است.
          </p>

          {/* Buttons */}
          <div className="flex justify-between">

            <button
              onClick={() => setShowRiskModal(false)}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              اصلاح مقادیر
            </button>

            <button
              onClick={() =>
                router.push(
                  '/simulators/modian/declaration/complete/calculation'
                )
              }
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              پذیرش ریسک و تایید مقادیر وارد شده در جدول ج
            </button>

          </div>

        </div>
      </div>
    )}
    </div>
  );
}
