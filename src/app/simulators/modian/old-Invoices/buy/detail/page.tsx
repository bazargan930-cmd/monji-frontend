//src\app\simulators\modian\old-Invoices\buy\detail\page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import {
  InvoiceHeaderArrowIcon,
  ColumnsIcon,
} from '@/components/modian/ui';
import {
  InvoiceDetailSection,
  ScrollableTableShell,
  ColumnsVisibilityBar,
} from '@/components/modian/common';

export default function ModianInvoiceBuyDetailPage() {
  // وضعیت‌های ممکن صورتحساب (فعلاً ثابت، بعداً از API خوانده می‌شود)
  type InvoiceStatus =
    | 'در انتظار واکنش'
    | 'عدم نیاز به واکنش'
    | 'ابطالی';

  const invoiceStatus: InvoiceStatus = 'در انتظار واکنش';
  // وضعیت نمایش/عدم نمایش نوار «نمایش ستون‌ها» برای جدول اقلام
  const [showItemsColsOpen, setShowItemsColsOpen] = React.useState(false);

  // لیبل ستون‌های جدول اقلام صورتحساب
  const itemsColumnLabels: Record<string, string> = {
    c1: 'انتخاب',
    c2: 'ردیف',
    c3: 'شناسه خدمت/کالا',
    c4: 'شرح',
    c5: 'واحد اندازه‌گیری',
    c6: 'مقدار/تعداد',
    c7: 'مبلغ واحد (ریال)',
    c8: 'مبلغ قبل از تخفیف (ریال)',
    c9: 'مبلغ تخفیف (ریال)',
    c10: 'نرخ مالیات بر ارزش افزوده',
    c11: 'مبلغ مالیات بر ارزش افزوده (ریال)',
    c12: 'موضوع سایر مالیات و عوارض',
    c13: 'مبلغ سایر مالیات و عوارض (ریال)',
    c14: 'مبلغ سایر وجوه قانونی (ریال)',
    c15: 'نرخ سایر وجوه قانونی',
    c16: 'موضوع سایر وجوه قانونی',
    c17: 'سهم نقدی از پرداخت (ریال)',
    c18: 'سهم مالیات بر ارزش افزوده از پرداخت (ریال)',
    c19: 'شماره قرارداد حق‌العملکاری',
    c20: 'وضعیت واکنش آمر',
  };

  const createDefaultItemsCols = () =>
    ({
      // سه ستون اول همیشه قابل نمایش هستند
      c1: true, // انتخاب
      c2: true, // ردیف
      c3: true, // شناسه خدمت/کالا
      // ستون‌های پیش‌فرض طبق سایت اصلی
      c4: true,  // شرح
      c5: true,  // واحد اندازه‌گیری
      c6: true,  // مقدار/تعداد
      c7: true,  // مبلغ واحد (ریال)
      c8: false, // مبلغ قبل از تخفیف (ریال)
      c9: false, // مبلغ تخفیف (ریال)
      c10: false, // نرخ مالیات بر ارزش افزوده
      c11: true,  // مبلغ مالیات بر ارزش افزوده (ریال)
      c12: false, // موضوع سایر مالیات و عوارض
      c13: false, // مبلغ سایر مالیات و عوارض (ریال)
      c14: false, // مبلغ سایر وجوه قانونی (ریال)
      c15: false, // نرخ سایر وجوه قانونی
      c16: false, // موضوع سایر وجوه قانونی
      c17: false, // سهم نقدی از پرداخت (ریال)
      c18: false, // سهم مالیات بر ارزش افزوده از پرداخت (ریال)
      c19: true,  // شماره قرارداد حق‌العملکاری
      c20: true,  // وضعیت واکنش آمر
    } as Record<string, boolean>);

  const [itemsColsVisible, setItemsColsVisible] = React.useState<
    Record<string, boolean>
  >(createDefaultItemsCols);

  const toggleItemsCol = (key: string) =>
    setItemsColsVisible((s) => ({ ...s, [key]: !s[key] }));

  const showAllItemsCols = () =>
    setItemsColsVisible(
      Object.keys(itemsColumnLabels).reduce((a, k) => {
        a[k] = true;
        return a;
      }, {} as Record<string, boolean>),
    );

  const setItemsDefaultCols = () => {
    setItemsColsVisible(createDefaultItemsCols());
  };

  // وضعیت نمایش/عدم نمایش نوار «نمایش ستون‌ها» برای جدول پرداخت
  const [showPaymentsColsOpen, setShowPaymentsColsOpen] = React.useState(false);

  // لیبل ستون‌های جدول پرداخت (طبق سایت اصلی – ۷ ستون)
  const paymentsColumnLabels: Record<string, string> = {
    p1: 'تاریخ ثبت',
    p2: 'مبلغ',
    p3: 'ثبت کننده',
    p4: 'وضعیت',
    p5: 'عدم پرداخت مالیات بر ارزش افزوده خریدار',
    p6: 'عملیات',
  };

  // در این جدول همه ستون‌ها در حالت پیش‌فرض روشن هستند
  const createDefaultPaymentsCols = () =>
    ({
      p1: true, // تاریخ ثبت
      p2: true, // مبلغ
      p3: true, // ثبت کننده
      p4: true, // وضعیت
      p5: true, // عدم پرداخت مالیات بر ارزش افزوده خریدار
      p6: true, // عملیات
    } as Record<string, boolean>);

  const [paymentsColsVisible, setPaymentsColsVisible] =
    React.useState<Record<string, boolean>>(createDefaultPaymentsCols);

  const togglePaymentsCol = (key: string) => {
    setPaymentsColsVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const showAllPaymentsCols = () => {
    setPaymentsColsVisible(
      Object.keys(paymentsColumnLabels).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as Record<string, boolean>,
      ),
    );
  };

  const setPaymentsDefaultCols = () => {
    // در این جدول «پیشفرض» یعنی روشن بودن همه ستون‌ها
    setPaymentsColsVisible(createDefaultPaymentsCols());
  };

  // وضعیت باز/بسته بودن مودال «جزئیات پرداخت»
  const [isPaymentDetailsModalOpen, setIsPaymentDetailsModalOpen] =
    React.useState(false);

  return (
    <div className="space-y-10 mx-auto w-full max-w-[1200px] px-4 pt-0 pb-4 -mt-4">
      {/* سرتیتر بالا – عنوان صورتحساب خرید + آیکون + وضعیت */}
      <div className="flex items-center justify-between">
        {/* آیکون فلش مربعی در سمت راست، سپس تیتر صورتحساب خرید */}
        <div className="flex items-center gap-2">
          <Link
            href="/simulators/modian/old-Invoices/buy"
            aria-label="بازگشت به لیست صورتحساب‌های خرید"
          >
            <button
              type="button"
              className="h-8 w-8 border border-gray-300 rounded-md bg-white flex items-center justify-center"
            >
              <InvoiceHeaderArrowIcon className="h-4 w-4" />
            </button>
          </Link>
          <span className="text-sm font-bold">صورتحساب خرید</span>
        </div>
        {/* وضعیت صورتحساب */}
        <span className="inline-flex items-center rounded-full bg-orange-100 text-orange-700 px-3 py-1 text-xs font-semibold">
          {invoiceStatus}
        </span>
      </div>

      {/* مشخصات صورتحساب */}
      <InvoiceDetailSection
        title="مشخصات صورتحساب"
        summary={
          <div className="grid gap-4 md:grid-cols-2 items-center">
            <div className="flex items-center justify-between">
              <span className="text-sm">شماره مالیاتی:</span>
              <span className="text-sm font-mono">A***.***</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">نقش مودی:</span>
              <span className="text-sm">عادی</span>
            </div>
          </div>
        }
        more={
          <div className="mt-4 grid gap-4 md:grid-cols-2 items-start">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">تاریخ و زمان صدور:</span>
                <span className="text-sm">۱۴۰۴/۰۵/۰۴ - ۰۰:۰۱</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">نوع صورتحساب:</span>
                <span className="text-sm">نوع اول</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">الگوی صورتحساب:</span>
                <span className="text-sm">الگوی پیش‌فرض</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">موضوع صورتحساب:</span>
                <span className="text-sm">اصلی</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">سریال صورتحساب:</span>
                <span className="text-sm font-mono">۱۲۳۴۵۶۷۸۹</span>
              </div>
            </div>
          </div>
        }
      />

      {/* مشخصات فروشنده – با همان استایل کادر بالا */}
      <InvoiceDetailSection
        title="مشخصات فروشنده"
        summary={
          <div className="grid gap-4 md:grid-cols-2 items-start">
            <div className="flex items-center justify-between">
              <span className="text-sm">نام:</span>
              <span className="text-sm">---</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">نوع شخص:</span>
              <span className="text-sm">---</span>
            </div>
          </div>
        }
        more={
          <div className="mt-4 grid gap-4 md:grid-cols-2 items-start">
            {/* ستون چپ */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">شماره اقتصادی:</span>
                <span className="text-sm">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">شناسه هویتی:</span>
                <span className="text-sm">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">کدپستی:</span>
                <span className="text-sm">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">شماره پروانه گمرکی:</span>
                <span className="text-sm">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">کد گمرک محل اظهار:</span>
                <span className="text-sm">---</span>
              </div>
            </div>
            {/* ستون راست */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">نام تجاری:</span>
                <span className="text-sm">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">شعبه:</span>
                <span className="text-sm">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">آدرس:</span>
                <span className="text-sm">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">شماره قرارداد پیمانکاری:</span>
                <span className="text-sm">---</span>
              </div>
            </div>
          </div>
        }
      />

      {/* مشخصات خریدار – با همان استایل مشخصات فروشنده */}
      <InvoiceDetailSection
        title="مشخصات خریدار"
        summary={
          <div className="grid gap-4 md:grid-cols-2 items-start">
            <div className="flex items-center justify-between">
              <span className="text-sm">نام:</span>
              <span className="text-sm">---</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">نوع شخص:</span>
              <span className="text-sm">---</span>
            </div>
          </div>
        }
        more={
          <div className="mt-4 grid gap-4 md:grid-cols-2 items-start">
            {/* ستون چپ */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">شماره اقتصادی:</span>
                <span className="text-sm">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">شناسه هویتی:</span>
                <span className="text-sm">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">کدپستی:</span>
                <span className="text-sm">---</span>
              </div>
            </div>
            {/* ستون راست */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">نام تجاری:</span>
                <span className="text-sm">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">شعبه:</span>
                <span className="text-sm">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">آدرس:</span>
                <span className="text-sm max-w-[380px] text-right">---</span>
              </div>
            </div>
          </div>
        }
      />

      {/* جدول اقلام صورتحساب */}
      <section className="mt-6">
        {/* نوار بالای جدول (لیبل + آیکون‌ها + دکمه‌ها) */}
        <div className="flex items-center justify-between pt-2 pb-0 w-full">
          {/* عنوان اقلام صورتحساب + آیکون‌ها (سمت راست مثل سایت اصلی) */}
          <div className="flex items-center gap-2 text-sm font-semibold">
            <div className="bg-green-700 text-white px-4 py-2 rounded-t-md border border-green-700 border-b-0 -mb-px">
              اقلام صورتحساب
            </div>
            <button
              type="button"
              className="h-8 w-8 flex items-center justify-center rounded border border-black bg-white text-green-700"
              aria-label="نمایش ستون‌ها"
              onClick={() => setShowItemsColsOpen((v) => !v)}
            >
              <ColumnsIcon className="h-6 w-6" />
            </button>
          </div>

          {/* دکمه‌های عملیات در سمت چپ هدر */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-3 py-2 text-xs border border-gray-400 rounded-md text-white bg-gray-400 hover:bg-gray-200"
            >
              عملیات قانونی
            </button>
            <button
              type="button"
              disabled
              className="px-3 py-2 text-xs border border-gray-400 rounded-md text-white bg-gray-400 cursor-not-allowed"
            >
              عملیات حق‌العملکاری
            </button>
          </div>
        </div>

        {/* نوار نمایش ستون‌ها برای جدول اقلام صورتحساب */}
        <ColumnsVisibilityBar
          open={showItemsColsOpen}
          columnLabels={itemsColumnLabels}
          colsVisible={itemsColsVisible}
          onToggleCol={toggleItemsCol}
          onShowAllCols={showAllItemsCols}
          onSetDefaultCols={setItemsDefaultCols}
        />

        {/* خود جدول اقلام با اسکرول افقی دوگانه (استفاده از ScrollableTableShell) */}
        <ScrollableTableShell>
          <table className="w-full border-collapse text-center text-sm whitespace-nowrap">
                <thead className="bg-[#d1f7f5] text-gray-800">
              <tr>
                {/* 1 - چک باکس */}
                <th
                  style={{
                    display: itemsColsVisible.c1 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 w-10"
                >
                  انتخاب
                </th>
                {/* 2 - ردیف */}
                <th
                  style={{
                    display: itemsColsVisible.c2 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ردیف
                </th>
                {/* 3 - شناسه خدمت/کالا */}
                <th
                  style={{
                    display: itemsColsVisible.c3 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  شناسه خدمت/کالا
                </th>
                {/* 4 - شرح */}
                <th
                  style={{
                    display: itemsColsVisible.c4 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  شرح
                </th>
                {/* 5 - واحد اندازه‌گیری */}
                <th
                  style={{
                    display: itemsColsVisible.c5 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  واحد اندازه‌گیری
                </th>
                {/* 6 - مقدار/تعداد */}
                <th
                  style={{
                    display: itemsColsVisible.c6 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مقدار/تعداد
                </th>
                {/* 7 - مبلغ واحد (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c7 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ واحد (ریال)
                </th>
                {/* 8 - مبلغ قبل از تخفیف (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c8 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ قبل از تخفیف (ریال)
                </th>
                {/* 9 - مبلغ تخفیف (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c9 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ تخفیف (ریال)
                </th>
                {/* 10 - نرخ مالیات بر ارزش افزوده */}
                <th
                  style={{
                    display: itemsColsVisible.c10 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  نرخ مالیات بر ارزش افزوده
                </th>
                {/* 11 - مبلغ مالیات بر ارزش افزوده (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c11 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ مالیات بر ارزش افزوده (ریال)
                </th>
                {/* 12 - موضوع سایر مالیات و عوارض */}
                <th
                  style={{
                    display: itemsColsVisible.c12 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  موضوع سایر مالیات و عوارض
                </th>
                {/* 13 - مبلغ سایر مالیات و عوارض (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c13 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ سایر مالیات و عوارض (ریال)
                </th>
                {/* 14 - مبلغ سایر وجوه قانونی (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c14 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ سایر وجوه قانونی (ریال)
                </th>
                {/* 15 - نرخ سایر وجوه قانونی */}
                <th
                  style={{
                    display: itemsColsVisible.c15 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  نرخ سایر وجوه قانونی
                </th>
                {/* 16 - موضوع سایر وجوه قانونی */}
                <th
                  style={{
                    display: itemsColsVisible.c16 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  موضوع سایر وجوه قانونی
                </th>
                {/* 17 - سهم نقدی از پرداخت (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c17 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  سهم نقدی از پرداخت (ریال)
                </th>
                {/* 18 - سهم مالیات بر ارزش افزوده از پرداخت (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c18 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  سهم مالیات بر ارزش افزوده از پرداخت (ریال)
                </th>
                {/* 19 - شماره قرارداد حق‌العملکاری */}
                <th
                  style={{
                    display: itemsColsVisible.c19 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  شماره قرارداد حق‌العملکاری
                </th>
                {/* 20 - وضعیت واکنش آمر */}
                <th
                  style={{
                    display: itemsColsVisible.c20 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  وضعیت واکنش آمر
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50">
                    {/* 1 - چک باکس */}
                    <td
                      style={{
                        display: itemsColsVisible.c1 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      <input type="checkbox" className="h-4 w-4" />
                    </td>
                    {/* 2 - ردیف */}
                    <td
                      style={{
                        display: itemsColsVisible.c2 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ۱
                    </td>
                    {/* 3 */}
                    <td
                      style={{
                        display: itemsColsVisible.c3 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 4 */}
                    <td
                      style={{
                        display: itemsColsVisible.c4 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1 text-right"
                    >
                      ---
                    </td>
                    {/* 5 */}
                    <td
                      style={{
                        display: itemsColsVisible.c5 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 6 */}
                    <td
                      style={{
                        display: itemsColsVisible.c6 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 7 */}
                    <td
                      style={{
                        display: itemsColsVisible.c7 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 8 */}
                    <td
                      style={{
                        display: itemsColsVisible.c8 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 9 */}
                    <td
                      style={{
                        display: itemsColsVisible.c9 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 10 */}
                    <td
                      style={{
                        display: itemsColsVisible.c10 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 11 */}
                    <td
                      style={{
                        display: itemsColsVisible.c11 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 12 */}
                    <td
                      style={{
                        display: itemsColsVisible.c12 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 13 */}
                    <td
                      style={{
                        display: itemsColsVisible.c13 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 14 */}
                    <td
                      style={{
                        display: itemsColsVisible.c14 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 15 */}
                    <td
                      style={{
                        display: itemsColsVisible.c15 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 16 */}
                    <td
                      style={{
                        display: itemsColsVisible.c16 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 17 */}
                    <td
                      style={{
                        display: itemsColsVisible.c17 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 18 */}
                    <td
                      style={{
                        display: itemsColsVisible.c18 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 19 */}
                    <td
                      style={{
                        display: itemsColsVisible.c19 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                    {/* 20 */}
                    <td
                      style={{
                        display: itemsColsVisible.c20 ? 'table-cell' : 'none',
                      }}
                      className="border px-2 py-1"
                    >
                      ---
                    </td>
                  </tr>
            </tbody>
          </table>
        </ScrollableTableShell>
      </section>

      {/* اطلاعات پرداخت */}
      <InvoiceDetailSection
        title="اطلاعات پرداخت"
        summary={
          <div className="grid gap-4 md:grid-cols-2 items-center">
            <div className="flex items-center justify-between">
              <span className="text-sm">روش تسویه:</span>
              <span className="text-sm">نقدی</span>
            </div>
          </div>
        }
        more={
          <div className="mt-4 grid gap-4 md:grid-cols-2 items-start">
            <div className="flex items-center justify-between">
              <span className="text-sm">مالیات موضوع ماده ۱۷:</span>
              <span className="text-sm">---</span>
            </div>
          </div>
        }
      />

      {/* جدول پرداخت */}
      <section className="mt-6">
        {/* نوار بالای جدول پرداخت (لیبل + آیکون‌ها) */}
        <div className="flex items-center justify-between pt-2 pb-0 w-full">
          {/* عنوان جدول پرداخت + آیکون‌ها (سمت راست) */}
          <div className="flex items-center gap-2 text-sm font-semibold">
            <div className="bg-green-700 text-white px-4 py-2 rounded-t-md border border-green-700 border-b-0 -mb-px">
              جدول پرداخت
            </div>
            <button
              type="button"
              className="h-8 w-8 flex items-center justify-center rounded border border-black bg-white text-green-700"
              aria-label="نمایش ستون‌های جدول پرداخت"
              onClick={() => setShowPaymentsColsOpen((v) => !v)}
            >
              <ColumnsIcon className="h-6 w-6" />
            </button>
          </div>
          {/* در جدول پرداخت دکمه‌های عملیات قانونی / حق‌العملکاری نداریم */}
          <div />
        </div>

        {/* نوار نمایش ستون‌ها برای جدول پرداخت */}
        <ColumnsVisibilityBar
          open={showPaymentsColsOpen}
          columnLabels={paymentsColumnLabels}
          colsVisible={paymentsColsVisible}
          onToggleCol={togglePaymentsCol}
          onShowAllCols={showAllPaymentsCols}
          onSetDefaultCols={setPaymentsDefaultCols}
        />

        {/* خود جدول پرداخت با اسکرول افقی */}
        <ScrollableTableShell>
          <table className="w-full text-sm text-center border-collapse">
            <thead className="bg-[#d1f7f5ff]">
              <tr>
                {/* ردیف (ستون ثابت ساده) */}
                <th className="border px-2 py-1 whitespace-nowrap">ردیف</th>

                {/* 1 - تاریخ ثبت */}
                <th
                  style={{
                    display: paymentsColsVisible.p1 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  تاریخ ثبت
                </th>
                {/* 2 - مبلغ */}
                <th
                  style={{
                    display: paymentsColsVisible.p2 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ
                </th>
                {/* 3 - ثبت‌کننده */}
                <th
                  style={{
                    display: paymentsColsVisible.p3 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  ثبت‌کننده
                </th>
                {/* 4 - وضعیت */}
                <th
                  style={{
                    display: paymentsColsVisible.p4 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  وضعیت
                </th>
                {/* 5 - عدم پرداخت مالیات بر ارزش افزوده خریدار */}
                <th
                  style={{
                    display: paymentsColsVisible.p5 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  عدم پرداخت مالیات بر ارزش افزوده خریدار
                </th>
                {/* 6 - عملیات */}
                <th
                  style={{
                    display: paymentsColsVisible.p6 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50">
                {/* ردیف */}
                <td className="border px-2 py-1">۱</td>

                {/* 1 - تاریخ ثبت */}
                <td
                  style={{
                    display: paymentsColsVisible.p1 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  ۱۴۰۴/۰۵/۰۴
                </td>
                {/* 2 - مبلغ */}
                <td
                  style={{
                    display: paymentsColsVisible.p2 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  ۳٬۶۵۰٬۰۰۰
                </td>
                {/* 3 - ثبت‌کننده */}
                <td
                  style={{
                    display: paymentsColsVisible.p3 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مودی
                </td>
                {/* 4 - وضعیت */}
                <td
                  style={{
                    display: paymentsColsVisible.p4 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  در انتظار واکنش
                </td>
                {/* 5 - عدم پرداخت مالیات بر ارزش افزوده خریدار */}
                <td
                  style={{
                    display: paymentsColsVisible.p5 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  ---
                </td>
                {/* 6 - عملیات */}
                <td
                  style={{
                    display: paymentsColsVisible.p6 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap text-green-600"
                >
                  <button
                    type="button"
                    onClick={() => setIsPaymentDetailsModalOpen(true)}
                  >
                    جزئیات
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </ScrollableTableShell>
      </section>

      {/* جمع کل */}
      <InvoiceDetailSection
        title="جمع کل"
        summary={
          <div className="grid gap-4 md:grid-cols-2 items-center">
            <div className="flex items-center justify-between">
              <span className="text-sm">مجموع مالیات بر ارزش افزوده:</span>
              <span className="text-sm font-bold">---</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">مجموع صورتحساب:</span>
              <span className="text-sm font-bold">---</span>
            </div>
          </div>
        }
        more={
          <div className="mt-4 grid gap-4 md:grid-cols-2 items-start">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">مجموع مبلغ قبل از کسر تخفیف:</span>
                <span className="text-sm font-bold">---</span>
              </div>              
              <div className="flex items-center justify-between">
                <span className="text-sm">مجموع مبلغ پس از کسر تخفیف:</span>
                <span className="text-sm font-bold">---</span>
              </div>              
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">مجموع تخفیفات:</span>
                <span className="text-sm font-bold">---</span>
              </div>  
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  مجموع سایر مالیات، عوارض و وجوه قانونی:
                </span>
                <span className="text-sm font-bold">---</span>
              </div>
            </div> 
          </div>
        }
      />

      {/* اطلاعات تکمیلی */}
      <InvoiceDetailSection
        title="اطلاعات تکمیلی"
        summary={
          <div className="grid gap-4 md:grid-cols-2 items-center">
            <div className="flex items-center justify-between">
              <span className="text-sm">تاریخ و زمان ایجاد صورتحساب:</span>
                <span className="text-sm">-.-</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">وضعیت صورتحساب:</span>
              <span className="text-sm">{invoiceStatus}</span>
            </div>
          </div>          
        }
        more={
          <div className="mt-4 grid gap-4 md:grid-cols-2 items-start">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">تاریخ درج در کارپوشه:</span>
                <span className="text-sm">۱۴۰۴/۰۵/۰۴ - ۱۲:۳۴</span>
              </div>
            </div>
          </div>
        }
      />
      {/* مودال جزئیات پرداخت */}
      {isPaymentDetailsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div
            className="relative w-full max-w-[900px] rounded-md shadow-lg bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/DetailsModalBackground.jpg')",
            }}
          >
            {/* هدر مودال */}
            <div className="flex items-center justify-between px-6 py-4">
              <h2 className="text-sm font-bold">جزئیات پرداخت</h2>
            </div>

            {/* بدنه مودال: پنل تزئینی + بخش اطلاعات */}
            <div className="flex justify-start px-16 py-10">
              {/* کادر اطلاعات «جزئیات تراکنش» (تنها باکگراند غیر از تصویر) */}
              <div className="w-[360px] bg-gray-100 px-10 py-10">
                <h3 className="flex justify-center mb-6 text-sm text-green-600 font-semibold">
                  جزئیات تراکنش ۱
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between">
                    <span>شماره مرجع</span>
                    <span>---</span>
                  </li>
                  <li className="flex justify-between">
                    <span>شماره سوئیچ پرداخت</span>
                    <span>---</span>
                  </li>
                  <li className="flex justify-between">
                    <span>شماره پذیرنده فروشگاهی</span>
                    <span>---</span>
                  </li>
                  <li className="flex justify-between">
                    <span>شماره پایانه</span>
                    <span>---</span>
                  </li>
                  <li className="flex justify-between">
                    <span>شماره پیگیری</span>
                    <span>---</span>
                  </li>
                  <li className="flex justify-between">
                    <span>شماره کارت پرداخت‌کننده</span>
                    <span>---</span>
                  </li>
                  <li className="flex justify-between">
                    <span>شناسه هویتی پرداخت کننده</span>
                    <span>---</span>
                  </li>
                  <li className="flex justify-between">
                    <span>مبلغ</span>
                    <span>---</span>
                  </li>
                </ul>
              </div>

              {/* فلش‌های پیمایش تراکنش‌ها */}
              <button
                type="button"
                className="absolute right-6 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-green-700 text-2xl"
                aria-label="تراکنش بعدی"
              >
                ‹
              </button>
              <button
                type="button"
                className="absolute left-6 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-green-700 text-2xl"
                aria-label="تراکنش قبلی"
              >
                ›
              </button>
            </div>

            {/* فوتر مودال – دکمه بستن */}
            <div className="flex justify-end px-6 py-4">
              <button
                type="button"
                className="rounded-md bg-gray-400 px-6 py-2 text-sm text-white"
                onClick={() => setIsPaymentDetailsModalOpen(false)}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
