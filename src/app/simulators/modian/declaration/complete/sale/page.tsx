//src/app/simulators/modian/declaration/complete/sale/page.tsx

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

export default function SaleInformationPage() {
    const [showCancelModal, setShowCancelModal] = useState(false);

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

    const currentStep = 2;

    return (
        <div className="w-full px-6 py-8 bg-gray-50 min-h-screen">

                        <div className="rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between">

                    {/* سمت راست: دکمه بازگشت + عنوان */}
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => router.push('/simulators/modian/declaration/complete')}
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
                                               ${isActive || isCompleted
                                                    ? 'bg-green-600 text-white'
                                                    : 'bg-gray-200 text-gray-500'
                                                }
                                           `}
                                        >
                                            {stepNumber}
                                        </div>

                                        <span
                                            className={`text-xs whitespace-nowrap
                                                ${isActive || isCompleted
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

                {/* Sales Table Section */}
                <div className="border-b bg-gray-100 px-4 py-3 font-semibold text-sm">
                    الف - اطلاعات فروش خاص کالاها و خدمات
                </div>

                <div className="px-6 py-6">
                    <div className="overflow-x-auto border rounded">
                        <table className="w-full text-sm text-right border-collapse">
                            <thead className="bg-green-100">
                                <tr>
                                    <th className="border px-3 py-2 w-12">ردیف</th>
                                    <th className="border px-3 py-2">شرح</th>
                                    <th className="border px-3 py-2 w-24">نرخ/درصد</th>
                                    <th className="border px-3 py-2">
                                        بهای بارگذاری شده از سامانه مودیان
                                    </th>
                                    <th className="border px-3 py-2">
                                        بهای خارج از سامانه مودیان
                                    </th>
                                    <th className="border px-3 py-2">جمع بها</th>
                                    <th className="border px-3 py-2">
                                        مالیات و عوارض فروش (ریال)
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2">1</td>
                                    <td className="border px-3 py-2">
                                        فروش خالص کالاها و خدمات مشمول موضوع ماده (7) (نقدی و نسیه)
                                    </td>
                                    <td className="border px-3 py-2 text-center">10</td>
                                    <td className="border px-3 py-2 text-right">
                                        ۲۷۵,۴۳۸,۰۸۵,۰۱۶
                                    </td>
                                    <td className="border px-3 py-2">
                                        <input
                                            type="text"
                                            className="w-full border rounded px-2 py-1 text-right"
                                        />
                                    </td>
                                    <td className="border px-3 py-2 text-right">۰</td>
                                    <td className="border px-3 py-2 text-right">
                                        ۲۷,۵۴۳,۸۰۸,۵۰۱
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border px-3 py-2">2</td>
                                    <td className="border px-3 py-2">
                                        فروش خالص کالاها و خدمات معاف (نقدی و نسیه)
                                    </td>
                                    <td className="border px-3 py-2 text-center">0</td>
                                    <td className="border px-3 py-2 text-right">۰</td>
                                    <td className="border px-3 py-2">
                                        <input
                                            type="text"
                                            className="w-full border rounded px-2 py-1 text-right"
                                        />
                                    </td>
                                    <td className="border px-3 py-2 text-right">۰</td>
                                    <td className="border px-3 py-2 text-right">۰</td>
                                </tr>

                                <tr className="bg-green-900 text-white font-semibold">
                                    <td
                                        colSpan={6}
                                        className="border px-3 py-2 text-right"
                                    >
                                        جمع مالیات و عوارض ارزش افزوده فروش یا صادرات کالاها و خدمات
                                    </td>
                                    <td className="border px-3 py-2 text-right">
                                        ۲۷,۵۴۳,۸۰۸,۵۰۱
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6">

                <button
                    onClick={() => router.push('/simulators/modian/declaration/complete')}
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                    گام قبلی
                </button>

                <button
                    onClick={() => router.push('/simulators/modian/declaration/complete/purchase')}
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

        </div>
    );
}
