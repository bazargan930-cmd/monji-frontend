//src/app/simulators/modian/declaration/complete/page.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

export default function CompleteDeclarationPage() {
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

    const currentStep = 1; // این صفحه مرحله 1 است


    const QuestionRow = ({ text }: { text: string }) => (
        <div className="flex items-center justify-between py-3 border-b">
            <span className="text-sm text-gray-800">{text}</span>
            <div className="flex items-center gap-4">
                <label className="flex items-center gap-1 text-sm">
                    <input type="radio" name={text} className="accent-green-600" />
                    بله
                </label>
                <label className="flex items-center gap-1 text-sm">
                    <input type="radio" name={text} defaultChecked className="accent-green-600" />
                    خیر
                </label>
            </div>
        </div>
    );

    return (
        <div className="w-full px-6 py-8 bg-gray-50 min-h-screen">

            {/* Header */}
            <div className="rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between">

                    {/* سمت راست: دکمه بازگشت + عنوان */}
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => router.push('/simulators/modian/declaration')}
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

                                    {/* Step */}
                                    <div className="flex items-center bg-white z-10">

                                        {/* Circle */}
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

                                        {/* Label */}
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

                                    {/* Line (بین مراحل) */}
                                    {!isLast && (
                                        <div className="flex-1 h-[2px] bg-gray-300"></div>
                                    )}

                                </React.Fragment>
                            );
                        })}

                    </div>
                </div>




                {/* Section A */}
                <div className="border-b bg-gray-100 px-4 py-3 font-semibold text-sm">
                    الف - سوالات مربوط به فروش
                </div>

                <div className="px-6">

                    <QuestionRow text="1- آیا در دوره فوق فروش طلا، جواهر و پلاتین داشته‌اید؟" />
                    <QuestionRow text="2- آیا در دوره فوق بخشی از فروش شما مشمول یارانه های موضوع جزء(ج) تبصره(2) ماده(5)، بوده است؟" />
                    <QuestionRow text="3- آیا در دوره فوق اقدام به صادرات کالاوخدمات یا فروش در بورس کالا نموده‌اید؟" />
                    <QuestionRow text="4- آیا در دوره فوق اقدام به فروش نوشابه های قندی گازدار و یا بدون گاز نموده‌اید؟" />
                    <QuestionRow text="5- آیا در دوره فوق فروش کالاهای نفتی موضوع بند (الف) ماده (26) نموده‌اید؟" />
                    <QuestionRow text="6- آیا در دوره فوق اقدام به فروش سیگار و محصولات دخانی نموده‌اید؟" />
                    <QuestionRow text="7- آیا در دوره فوق اقدام به فروش کالا موضوع تبصره (5) ماده (17) به اشخاص زنجیره(آب و برق) نموده‌اید؟" />
                    <QuestionRow text="8- آیا در دوره فوق اقدام به فروش کالا موضوع تبصره (5) ماده (17) به اشخاص زنجیره(کالای نفتی) نموده‌اید؟" />

                    <div className="flex items-center justify-between py-4 border-b">
                        <div className="text-sm text-gray-800">
                            <p className="mb-3">
                                9- آیا در دوره فوق بابت موارد زیر تعدیلات داشته‌اید؟
                            </p>
                            <ul className="space-y-2 pr-4 list-disc">
                                <li>فروش خارج از سامانه مربوط به دوره های قبل از تاریخ 1404/01/01</li>
                                <li>صورتحساب‌های الکترونیکی فروش که اولین مرجع آ« به تاریخ قبل از 1402/0101 برمی گردد</li>
                                <li>مالیات و عوارض مربوط به مبالغ دریافتی بابت صورتحسابهای الکترونیکی نسیه مربوط به قبل از تاریخ 1402/01/01 که در این دوره تسویه شده است.</li>
                            </ul>
                        </div>

                        <div className="mt-4 flex items-center gap-4">
                            <label className="flex items-center gap-1 text-sm">
                                <input type="radio" name="adjust-sale-a" className="accent-green-600" />
                                بله
                            </label>
                            <label className="flex items-center gap-1 text-sm">
                                <input
                                    type="radio"
                                    name="adjust-sale-a"
                                    defaultChecked
                                    className="accent-green-600"
                                />
                                خیر
                            </label>
                        </div>
                    </div>

                </div>

                {/* Section B */}
                <div className="border-b bg-gray-100 px-4 py-3 font-semibold text-sm">
                    ب - سوالات مربوط به خرید
                </div>

                <div className="px-6">

                    <QuestionRow text="1- آیا در دوره فوق خرید طلا، جواهر و پلاتین داشته‌اید؟" />
                    <QuestionRow text="2- آیا در دوره فوق اقدام به خرید نوشابه های قندی گازدار و یا بدون گاز نموده‌اید؟" />
                    <QuestionRow text="3- آیا در دوره فوق اقدام به خرید کالاهای نفتی موضوع بند (الف) ماده (26) نموده‌اید؟" />
                    <QuestionRow text="4- آیا در دوره فوق اقدام به خرید سیگار و محصولات دخانی نموده‌اید؟" />
                    <QuestionRow text="5- آیا در دوره فوق اقدام به واردات کالا و خدمات نموده‌اید؟" />
                    <QuestionRow text="6- آیا در دوره فوق اقدام به خرید کالا موضوع تبصره (5) ماده (17) به اشخاص زنجیره(آب و برق) نموده‌اید؟؟" />
                    <QuestionRow text="7- آیا در دوره فوق اقدام به خرید کالا موضوع تبصره (5) ماده (17) به اشخاص زنجیره(کالای نفتی) نموده‌اید؟" />

                    <div className="flex items-center justify-between py-4">
                        <div className="text-sm text-gray-800">
                            <p className="mb-3">
                                8- آیا در دوره فوق بابت موارد زیر تعدیلات داشته‌اید؟
                            </p>
                            <ul className="space-y-2 pr-4 list-disc">
                                <li>خریدهای خارج از سامانه مربوط به دوره‌های قبل</li>
                                <li>صورتحساب‌های اصلاحی</li>
                                <li>مالیات و عوارض پرداختی مرتبط با دوره‌های قبل</li>
                            </ul>
                        </div>

                        <div className="mt-4 flex items-center gap-4">
                            <label className="flex items-center gap-1 text-sm">
                                <input type="radio" name="adjust-sale" className="accent-green-600" />
                                بله
                            </label>
                            <label className="flex items-center gap-1 text-sm">
                                <input
                                    type="radio"
                                    name="adjust-sale"
                                    defaultChecked
                                    className="accent-green-600"
                                />
                                خیر
                            </label>
                        </div>
                    </div>

                </div>

            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6">

                {/* Previous Step (Disabled) */}
                <button
                    disabled
                    className="bg-gray-200 text-gray-400 px-6 py-2 rounded cursor-not-allowed"
                >
                    گام قبلی
                </button>

                {/* Next Step */}
                <button
                    onClick={() => router.push('/simulators/modian/declaration/complete/sale')}
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
