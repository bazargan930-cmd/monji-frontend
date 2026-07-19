//src/app/simulators/modian/declaration/complete/calculation/page.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function CalculationPage() {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [detailsModalRow, setDetailsModalRow] = useState<number | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isDraftSaved, setIsDraftSaved] = useState(false);

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

  const currentStep = 5;

  const [transferToNext, setTransferToNext] = useState(true);
  const [hasRemission, setHasRemission] = useState(true);

  useEffect(() => {
    const draftSaved = localStorage.getItem('modianDraftSaved');
    if (draftSaved === 'true') {
        setIsDraftSaved(true);
    }
  }, []);


  const rows = [
    {
      title:
        'مالیات و عوارض ارزش افزوده فروش کالاها و خدمات برابر با مقدار مندرج در ردیف آخر جدول الف',
      value: 2758408506,
    },
    {
      title:
        'مالیات و عوارض خرید کالا و خدمات برابر با مقدار مندرج در ردیف آخر جدول ج',
      value: 2856932338,
    },
    {
      title:
        'مالیات و عوارض فروش یا ارائه خدمات در دوره‌هایی که به علت معافیت در دوره جاری لحاظ نشده است.',
      value: 0,
    },
    {
      title:
        'کسر میشود: جمع مالیات و عوارض صورتحسابهای الکترونیکی فروش دوره‌های قبل که در دوره جاری باید کسر شود',
      value: 0,
      hasDetails: true,
    },
    {
      title:
        'اضافه میشود: جمع مالیات و عوارض صورتحسابهای الکترونیکی فروش دوره‌های قبل که در دوره جاری لحاظ نشده است',
      value: 0,
      hasDetails: true,
    },
    {
      title:
        'مالیات و عوارض فروش و ارائه خدمات صادراتی',
      value: 0,
    },
    {
      title:
        'کسر میشود: مالیات و عوارض مربوط به فروش کالا و خدمات معاف',
      value: 0,
    },
    {
      title:
        'کسر میشود: مالیات و عوارض فروش به مناطق آزاد و ویژه اقتصادی',
      value: 0,
    },
    {
      title:
        'کسر میشود: سایر کسورات قانونی',
      value: 0,
    },
    {
      title: 'مالیات بر ارزش افزوده مانده در دوره جاری',
      value: -9852370,
      bold: true,
    },
  ];

  return (
    <div className="w-full px-6 py-8 bg-gray-50 min-h-screen">

      {/* Header */}
        <div className="rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">

                {/* سمت راست: دکمه بازگشت + عنوان */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => router.push('/simulators/modian/declaration/complete/credit')}
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
                      className={`text-xs whitespace-nowrap ${
                        isActive || isCompleted
                          ? 'text-gray-700 font-medium'
                          : 'text-gray-400'
                      }`}
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

        {/* Title */}
        <div className="border-b bg-gray-100 px-4 py-3 font-semibold text-sm">
          د - محاسبه مانده بدهی مالیات و عوارض ارزش افزوده با اعتبار قابل استرداد
        </div>

        {/* Table */}
        <div className="px-6 py-6">
          <div className="overflow-x-auto border rounded">
            <table className="w-full text-sm text-right border-collapse">

              <thead className="bg-green-100">
                <tr>
                  <th className="border px-3 py-2 w-12">ردیف</th>
                  <th className="border px-3 py-2">شرح</th>
                  <th className="border px-3 py-2 w-64">مالیات و عوارض (ریال)</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={r.bold ? 'bg-green-50 font-bold' : ''}>
                    <td className="border px-3 py-2">{i + 1}</td>
                    <td className="border px-3 py-2">
                      <div className="flex flex-col gap-2">
                        <span>{r.title}</span>

                        {r.hasDetails && (
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
                    <td className="border px-3 py-2 text-left">
                      {r.value.toLocaleString('fa-IR')}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Transfer Options */}
          <div className="mt-6 space-y-3 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={transferToNext}
                onChange={() => setTransferToNext(true)}
                className="accent-green-600"
              />
              درخواست انتقال بستانکاری مالیات بر ارزش افزوده به دوره بعد
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={!transferToNext}
                onChange={() => setTransferToNext(false)}
                className="accent-green-600"
              />
              درخواست استرداد بستانکاری مالیات بر ارزش افزوده
            </label>
          </div>

          {/* Remission Block */}
          <div className="mt-4 border rounded bg-gray-50 p-4 text-sm flex items-center justify-between gap-4">
            <p className="text-gray-600 flex-1">
              بدین وسیله درخواست بخشودگی جرائم موضوع بند ب ماده(36) قانون مالیات بر ارزش افزوده تا تاریخ پایان مهلت تسلیم اظهارنامه مالیات بر ارزش افزوده دوره جاری را
            </p>
            <div className="flex items-center gap-6 text-left">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="remission"
                  checked={hasRemission}
                  onChange={() => setHasRemission(true)}
                  className="accent-green-600"
                />
                دارم
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="remission"
                  checked={!hasRemission}
                  onChange={() => setHasRemission(false)}
                  className="accent-green-600"
                />
                ندارم
              </label>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">

        <button
          onClick={() =>
            router.push(
              '/simulators/modian/declaration/complete/credit'
            )
          }
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          گام قبلی
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => setShowSubmitModal(true)}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            ثبت موقت
          </button>

            <button
                    onClick={() =>
                        router.push(
                        '/simulators/modian/declaration/complete/final'
                        )
                    }
                    disabled={!isDraftSaved}
                    className={`px-6 py-2 rounded border
                    ${
                        isDraftSaved
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
            >
                گام بعدی
            </button>
        </div>

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
                  {detailsModalRow === 4
                    ? 'توضیح محاسبات مربوط به ردیف (۴)'
                    : 'توضیح محاسبات مربوط به ردیف (۵)'}
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
                    {(detailsModalRow === 4
                      ? [
                          'خالص مالیات و عوارض فروش بابت صورتحساب‌های الکترونیکی فروش اصلاحی تأیید شده با مبلغ مالیات کمتر از صورتحساب مرجع یا صورتحساب برگشت از فروش تأیید شده (به غیر از صورتحساب الکترونیکی صادرات) که تاریخ صدور صورتحساب مرجع آنها مربوط به تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۳/۰۶/۳۱ بوده و باید از مالیات و عوارض فروش شما در این دوره کسر شود.',
                          'مالیات و عوارض صورتحساب‌های الکترونیکی مربوط به تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۳/۰۶/۳۱ که احتساب بوده‌اند و در این دوره عدم احتساب شده‌اند.',
                          'پرداخت‌های مربوط به تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۳/۰۶/۳۱ که در این دوره ابطال شده‌اند.',
                          'خالص مالیات و عوارض فروش بابت صورتحساب‌های الکترونیکی ارجاعی صادرات که تاریخ صدور صورتحساب مرجع آنها مربوط به تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۳/۰۶/۳۱ بوده و باید از مالیات و عوارض فروش شما در این دوره کسر شود.',
                        ]
                      : [
                          'مالیات و عوارض صورتحساب‌های الکترونیکی فروش نسیه مربوط به تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۲/۰۶/۳۱ که مبلغی از آن در دوره جاری وصول شده است.',
                          'مالیات و عوارض فروش بابت صورتحساب‌های الکترونیکی اصلاحی تأیید شده با مبلغ بیشتر از صورتحساب مرجع (به غیر از صورتحساب الکترونیکی صادرات) که تاریخ صدور صورتحساب مرجع آنها مربوط به تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۲/۰۶/۳۱ بوده و باید به مالیات و عوارض فروش شما در این دوره اضافه شود.',
                          'مالیات و عوارض صورتحساب‌های الکترونیکی فروش مربوط به تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۲/۰۶/۳۱ که عدم احتساب بوده‌اند و در دوره جاری (پاییز ۱۴۰۳) احتساب شده‌اند.',
                          'بدهکاری ناشی از ابطال صورتحساب‌های الکترونیکی مجازی سمت فروش مربوط به تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۲/۰۶/۳۱ در این دوره که بدهکاری فروشنده صورتحساب مادر را به اندازه بدهی آمر در صورتحساب مجازی افزایش می‌دهد.',
                          'مالیات و عوارض فروش بابت صورتحساب‌های الکترونیکی ارجاعی صادرات که تاریخ صدور صورتحساب مرجع آنها مربوط به تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۲/۰۶/۳۱ بوده و باید به مالیات و عوارض فروش شما در این دوره اضافه شود.',
                          '[جمع بدهی های مربوط به صورتحساب‌های الکترونیکیمربوط به تاریخ ۱۴۰۲/۱۰/۰۱ لغایت ۱۴۰۳/۰۶/۳۱ که بایستی در این دوره اعمال شود. ]',
                        ]
                    ).map((text, i) => (
                      <tr key={i}>
                        <td className="border px-3 py-2">{text}</td>
                        <td className="border px-3 py-2 text-right">۰</td>
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

        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="bg-white w-[1000px] max-h-[85vh] rounded-lg shadow-lg flex flex-col p-6">

              {/* Title */}
              <h2 className="text-lg font-semibold mb-4">
                پوشش خرید و فروش
              </h2>
              <p className="text-gray-500 mb-4 text-sm">
                مقادیر محاسبه شده در نتیجه فرم تکمیلی شما به شرح زیر است.
              </p>

              {/* Skeleton grid (placeholder for API data) */}
              <div className="grid grid-cols-2 gap-6 flex-1 overflow-auto">

                {[
                  'فروش داخل سامانه',
                  'خرید داخل سامانه',
                  'فروش خارج سامانه',
                  'خرید خارج سامانه',
                  'فروش کل',
                  'خرید کل',
                  'نسبت فروش داخل',                  
                  'نسبت خرید داخل',
                ].map((label, i) => (
                  <div
                    key={i}
                    className="border border-dashed rounded p-4 bg-green-50 flex justify-between text-sm"
                  >
                    <span>{label}:</span>
                    <span className="text-gray-500">
                      {label.includes('نسبت') ? '٪ ۰' : '۰ ریال'}
                    </span>
                  </div>
                ))}

              </div>

              {/* Footer buttons */}
              <div className="flex justify-end gap-3 mt-6">

                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="border px-6 py-2 rounded hover:bg-gray-100"
                >
                  انصراف
                </button>

                <button
                  onClick={() => {
                    // ذخیره وضعیت draft (موقت - تا قبل از اتصال API)
                    localStorage.setItem('modianDraftSaved', 'true');

                    setIsDraftSaved(true);
                    setShowSubmitModal(false);
                    
                    // ذخیره وضعیت ثبت موقت
                    localStorage.setItem('modian_draft_status', 'draft');

                    // انتقال فوری به summary
                    router.push('/simulators/modian/declaration/summary');
                    }}

                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  ثبت موقت
                </button>

              </div>

            </div>
          </div>
        )}
        
    </div>
  );
}
