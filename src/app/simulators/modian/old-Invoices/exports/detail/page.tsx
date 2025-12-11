//src\app\simulators\modian\old-Invoices\exports\detail\page.tsx
'use client';
import Link from 'next/link';
import React from 'react';

import {
  ColumnsIcon,
  InvoiceHeaderArrowIcon,
  ColumnsVisibilityBar,
  InvoiceDetailSection,
  ScrollableTableShell,
} from '@/components/modian';

export default function ModianInvoiceSalesDetailPage() {
  // وضعیت‌های ممکن صورتحساب (فعلاً ثابت، بعداً از API خوانده می‌شود)
  type InvoiceStatus =
    | 'در انتظار واکنش'
    | 'عدم نیاز به واکنش'
    | 'ابطالی';

  const invoiceStatus: InvoiceStatus = 'در انتظار واکنش';
  // وضعیت نمایش/عدم نمایش نوار «نمایش ستون‌ها» برای جدول اقلام
  const [showItemsColsOpen, setShowItemsColsOpen] = React.useState(false);

  // لیبل ستون‌های جدول اقلام صورتحساب (فروش صادراتی – قبل از ۱۴۰۲/۰۳/۲۶)
  const itemsColumnLabels: Record<string, string> = {
    c1: 'ردیف',
    c2: 'شناسه کالا/خدمت',
    c3: 'شرح', // شرح (پیشفرض)
    c4: 'واحد اندازه‌گیری',
    c5: 'مقدار/تعداد',
    c6: 'مبلغ واحد (ریال)',
    c7: 'ارزش ریالی کالا',
    c8: 'نوع ارز',
    c9: 'نرخ برابری ارز با ریال',
    c10: 'ارزش ارزی کالا',
    c11: 'وزن خالص',
    c12: 'نرخ مالیات بر ارزش افزوده',
    c13: 'مبلغ مالیات بر ارزش افزوده (ریال)',
    c14: 'موضوع سایر مالیات و عوارض',
    c15: 'نرخ سایر مالیات و عوارض',
    c16: 'مبلغ سایر مالیات و عوارض (ریال)',
    c17: 'موضوع سایر وجوه قانونی',
    c18: 'نرخ سایر وجوه قانونی',
    c19: 'مبلغ سایر وجوه قانونی (ریال)',
    c22: 'شماره قرارداد حق‌العملکاری',
    c23: 'وضعیت واکنش آمر',
  };

  const createDefaultItemsCols = () =>
    ({
      // دو ستون اول همیشه قابل نمایش هستند (ردیف، شناسه کالا/خدمت)
      c1: true,
      c2: true,
      // ستون‌های پیش‌فرض طبق توضیحات (فقط موارد با برچسب «پیشفرض» روشن باشند)
      c3: true,  // شرح (پیشفرض)
      c4: true,  // واحد اندازه‌گیری (پیشفرض)
      c5: true,  // مقدار/تعداد (پیشفرض)
      c6: true,  // مبلغ واحد (پیشفرض)
      c7: false, // ارزش ریالی کالا
      c8: false, // نوع ارز
      c9: false, // نرخ برابری ارز با ریال
      c10: false, // ارزش ارزی کالا
      c11: false, // وزن خالص
      c12: false, // نرخ مالیات بر ارزش افزوده
      c13: true,  // مبلغ مالیات بر ارزش افزوده (پیشفرض)
      c14: false, // موضوع سایر مالیات و عوارض
      c15: false, // نرخ سایر مالیات و عوارض
      c16: false, // مبلغ سایر مالیات و عوارض
      c17: false, // موضوع سایر وجوه قانونی
      c18: false, // نرخ سایر وجوه قانونی
      c19: false, // مبلغ سایر وجوه قانونی
      c22: true,  // شماره قرارداد حق‌العملکاری (پیشفرض)
      c23: true,  // وضعیت واکنش آمر (پیشفرض)
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
  
  return (
    <div className="space-y-10 mx-auto w-full max-w-[1200px] px-4 pt-0 pb-4 -mt-4">
      {/* سرتیتر بالا – عنوان صورتحساب فروش صادراتی + آیکون + وضعیت */}
      <div className="flex items-center justify-between">
        {/* آیکون فلش مربعی در سمت راست، سپس تیتر صورتحساب فروش صادراتی */}
        <div className="flex items-center gap-2">
          <Link
            href="/simulators/modian/old-Invoices/exports"
            aria-label="بازگشت به لیست صورتحساب‌های فروش صادراتی"
          >
            <button
              type="button"
              className="h-8 w-8 border border-gray-300 rounded-md bg-white flex items-center justify-center"
             >
              <InvoiceHeaderArrowIcon className="h-4 w-4" />
            </button>
          </Link>
          <span className="text-sm font-bold">جزئیات صورتحساب فروش صادراتی</span>
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
                {/* 1 - ردیف */}
                <th
                  style={{
                    display: itemsColsVisible.c1 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ردیف
                </th>
                {/* 2 - شناسه کالا/خدمت */}
                <th
                  style={{
                    display: itemsColsVisible.c2 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  شناسه کالا/خدمت
                </th>
                {/* 3 - شرح */}
                <th
                  style={{
                    display: itemsColsVisible.c3 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  شرح
                </th>
                {/* 4 - واحد اندازه‌گیری */}
                <th
                  style={{
                    display: itemsColsVisible.c4 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  واحد اندازه‌گیری
                </th>
                {/* 5 - مقدار/تعداد */}
                <th
                  style={{
                    display: itemsColsVisible.c5 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مقدار/تعداد
                </th>
                {/* 6 - مبلغ واحد (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c6 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ واحد (ریال)
                </th>
                {/* 7 - ارزش ریالی کالا */}
                <th
                  style={{
                    display: itemsColsVisible.c7 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  ارزش ریالی کالا
                </th>
                {/* 8 - نوع ارز */}
                <th
                  style={{
                    display: itemsColsVisible.c8 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  نوع ارز
                </th>
                {/* 9 - نرخ برابری ارز با ریال */}
                <th
                  style={{
                    display: itemsColsVisible.c9 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  نرخ برابری ارز با ریال
                </th>
                {/* 10 - ارزش ارزی کالا */}
                <th
                  style={{
                    display: itemsColsVisible.c10 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  ارزش ارزی کالا
                </th>
                {/* 11 - وزن خالص */}
                <th
                  style={{
                    display: itemsColsVisible.c11 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  وزن خالص
                </th>
                {/* 12 - نرخ مالیات بر ارزش افزوده */}
                <th
                  style={{
                    display: itemsColsVisible.c12 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  نرخ مالیات بر ارزش افزوده
                </th>
                {/* 13 - مبلغ مالیات بر ارزش افزوده (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c13 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ مالیات بر ارزش افزوده (ریال)
                </th>
                {/* 14 - موضوع سایر مالیات و عوارض */}
                <th
                  style={{
                    display: itemsColsVisible.c14 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  موضوع سایر مالیات و عوارض
                </th>
                {/* 15 - نرخ سایر مالیات و عوارض */}
                <th
                  style={{
                    display: itemsColsVisible.c15 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  نرخ سایر مالیات و عوارض
                </th>
                {/* 16 - مبلغ سایر مالیات و عوارض (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c16 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ سایر مالیات و عوارض (ریال)
                </th>
                {/* 17 - موضوع سایر وجوه قانونی */}
                <th
                  style={{
                    display: itemsColsVisible.c17 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  موضوع سایر وجوه قانونی
                </th>
                {/* 18 - نرخ سایر وجوه قانونی */}
                <th
                  style={{
                    display: itemsColsVisible.c18 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  نرخ سایر وجوه قانونی
                </th>
                {/* 19 - مبلغ سایر وجوه قانونی (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c19 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ سایر وجوه قانونی (ریال)
                </th>
                {/* 20 - شماره قرارداد حق‌العملکاری */}
                <th
                  style={{
                    display: itemsColsVisible.c22 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  شماره قرارداد حق‌العملکاری
                </th>
                {/* 21 - وضعیت واکنش آمر */}
                <th
                  style={{
                    display: itemsColsVisible.c23 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  وضعیت واکنش آمر
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50">
                {/* 1 - ردیف */}
                <td
                  style={{
                    display: itemsColsVisible.c1 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ۱
                </td>
                {/* 2 */}
                <td
                  style={{
                    display: itemsColsVisible.c2 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ---
                </td>
                {/* 3 */}
                <td
                  style={{
                    display: itemsColsVisible.c3 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 text-right"
                >
                  ---
                </td>
                {/* 4 */}
                <td
                  style={{
                    display: itemsColsVisible.c4 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
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
                    display: itemsColsVisible.c22 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ---
                </td>
                {/* 21 */}
                <td
                  style={{
                    display: itemsColsVisible.c23 ? 'table-cell' : 'none',
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
    </div>
  );
}
