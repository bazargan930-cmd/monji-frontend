// src/app/simulators/modian/invoices/exports/detail/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import InvoiceHeaderArrowIcon, {
  ColumnsIcon,
  IconExcelExport,
} from '@/components/modian/ui/icons';
import InvoiceDetailSection from '@/components/modian/common/InvoiceDetailSection';
import ScrollableTableShell from '@/components/modian/common/table/ScrollableTableShell';
import ColumnsVisibilityBar from '@/components/modian/common/table/ColumnsVisibilityBar';

export default function ModianInvoiceExportsDetailPage() {

  // وضعیت‌های ممکن صورتحساب (فعلاً ثابت، بعداً از API خوانده می‌شود)
  type InvoiceStatus =
    | 'در انتظار واکنش'
    | 'عدم نیاز به واکنش'
    | 'ابطالی';

  const invoiceStatus: InvoiceStatus = 'در انتظار واکنش';

  // دکمه «صورتحساب مرجع» فقط در این دو وضعیت نمایش داده می‌شود
  const shouldShowReferenceInvoiceButton =
    (['عدم نیاز به واکنش', 'ابطالی'] as InvoiceStatus[]).includes(
      invoiceStatus,
    );
  // وضعیت نمایش/عدم نمایش نوار «نمایش ستون‌ها» برای جدول اقلام
  const [showItemsColsOpen, setShowItemsColsOpen] = React.useState(false);

  // لیبل ستون‌های جدول اقلام صورتحساب
  const itemsColumnLabels: Record<string, string> = {
    c1: 'انتخاب',
    c2: 'ردیف',
    c3: 'شناسه کالا/خدمت',
    c4: 'شرح',
    c5: 'واحد اندازه‌گیری',
    c6: 'تعداد/مقدار',
    c7: 'مبلغ واحد (ریال)',
    c8: 'میزان ارز',
    c9: 'نوع ارز',
    c10: 'نرخ برابری ارز با ریال/نرخ فروش ارز (ریال)',
    c11: 'مبلغ قبل از تخفیف (ریال)',
    c12: 'مبلغ تخفیف (ریال)',
    c13: 'مبلغ بعد از تخفیف (ریال)',
    c14: 'نرخ مالیات بر ارزش افزوده',
    c15: 'مبلغ مالیات بر ارزش افزوده',
    c16: 'موضوع سایر مالیات و عوارض',
    c17: 'نرخ سایر مالیات و عوارض',
    c18: 'مبلغ سایر مالیات و عوارض (ریال)',
    c19: 'موضوع سایر وجوه قانونی',
    c20: 'نرخ سایر وجوه قانونی',
    c21: 'مبلغ سایر وجوه قانونی (ریال)',
    c22: 'سهم مالیات بر ارزش افزوده از پرداخت (ریال)',
    c23: 'سهم نقدی از پرداخت (ریال)',
    c24: 'مبلغ کل کالا/خدمت (ریال)',
    c25: 'شماره قرارداد حق‌العملکاری',
    c27: 'وضعیت واکنش آمر',
    c28: 'تاریخ و زمان واکنش آمر',
    c29: 'روزهای باقیمانده جهت واکنش آمر',
  };

  const createDefaultItemsCols = () =>
    ({
      // سه ستون اول همیشه قابل نمایش هستند
      c1: true, // انتخاب
      c2: true, // ردیف
      c3: true, // شناسه کالا/خدمت
      // ستون‌های پیشفرض (مطابق چیپ‌های سبز)
      c4: true, // شرح
      c5: true, // واحد اندازه‌گیری
      c6: true, // تعداد/مقدار
      c7: true, // مبلغ واحد (ریال)
      c8: false, // میزان ارز
      c9: false, // نوع ارز
      c10: false, // نرخ برابری ارز با ریال/نرخ فروش ارز (ریال)
      c11: true, // مبلغ قبل از تخفیف (ریال)
      c12: false, // مبلغ تخفیف (ریال)
      c13: false, // مبلغ بعد از تخفیف (ریال)
      c14: false, // نرخ مالیات بر ارزش افزوده
      c15: true, // مبلغ مالیات بر ارزش افزوده
      c16: false, // موضوع سایر مالیات و عوارض
      c17: false, // نرخ سایر مالیات و عوارض
      c18: false, // مبلغ سایر مالیات و عوارض (ریال)
      c19: false, // موضوع سایر وجوه قانونی
      c20: false, // نرخ سایر وجوه قانونی
      c21: false, // مبلغ سایر وجوه قانونی (ریال)
      c22: false, // سهم مالیات بر ارزش افزوده از پرداخت (ریال)
      c23: false, // سهم نقدی از پرداخت (ریال)
      c24: true, // مبلغ کل کالا/خدمت (ریال)
      c25: false, // شماره قرارداد حق‌العملکاری
      c26: false, // وضعیت عملیات قانونی
      c27: false, // وضعیت واکنش آمر
      c28: false, // تاریخ و زمان واکنش آمر
      c29: false, // روزهای باقیمانده جهت واکنش آمر
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

  // هدرهای ثابت خروجی اکسل جدول پرداخت (مستقل از نمایش ستون‌ها در UI)
  const paymentsExcelHeaders: string[] = [
    'شماره مالیاتی صورتحساب',
    'تاریخ پرداخت',
    'مبلغ پرداختی (ریال)',
    'سهم مالیات بر ارزش افزوده از پرداخت (ریال)',
    'سهم سایر مالیات، عوارض و وجوه قانونی از پرداخت (ریال)',
    'وضعیت پرداخت',
    'وضعیت اعتبار خریدار',
    'روش پرداخت',
    'مجموع مبلغ پرداختی (ریال)',
    'زمان واکنش روی پرداخت',
    'اعتبار خریدار از این پرداخت',
    'ثبت کننده',
    'وضعیت عدول از حد مجاز ماده ۶',
    'زمان ابطال پرداخت',
    'زمان ثبت در کارپوشه',
    'روزهای باقیمانده جهت واکنش',
  ];

  // یک ردیف نمونه با داده‌های فرضی برای تست خروجی اکسل جدول پرداخت
  const paymentsExcelSampleRow: (string | number)[] = [
    1,
    '۱۴۰۴/۰۵/۰۴',
    3_650_000,
    'مودی',
    'نقدی',
    'در انتظار واکنش',
    '---',
    43_200,
    0,
    3_650_000,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];

  // NOTE: پیش‌نویس هندلر خروجی اکسل جدول پرداخت (فعلاً در UI استفاده نمی‌شود)
  // برای جلوگیری از خطای ESLint (no-unused-vars) موقتاً با پیشوند _ نگه داشته شده است.
  const _handlePaymentsExcelExport = () => {
    const rows = [paymentsExcelHeaders, paymentsExcelSampleRow];

    const csvContent = rows
      .map((row) =>
        row
          .map((value) => {
            const text = value != null ? String(value) : '';
            const safe = text.replace(/"/g, '""');
            return `"${safe}"`;
          })
          .join(','),
      )
      .join('\r\n');

    const blob = new Blob([csvContent], {
      type:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8;',
    });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'modian-export-invoice-payments-sample.xlsx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // هِدرهای ثابت خروجی اکسل اقلام صورتحساب (مستقل از نمایش ستون‌ها در UI)
  const itemsExcelHeaders: string[] = [
    'شناسه صورت‌حساب',
    'اعتبار تعلق گرفته به خریدار قلم کالا',
    'سهم نقدی از پرداخت اصلاح شده',
    'مبلغ سایر مالیات و عوارض قلم کالا',
    'مبلغ سایر وجوه قانونی قلم کالا',
    'مبلغ کل کالا/خدمت',
    'مبلغ مالیات بر ارزش افزوده قلم کالا',
    'بدهی مالیات بر ارزش افزوده قلم کالا',
    'سهم مالیات بر ارزش افزوده از پرداخت اصلاح شده',
    'بهای کالا/خدمت بدون مالیات‌ها و عوارض قلم کالا',
  ];

  // یک ردیف نمونه با اعداد فرضی برای تست خروجی اکسل
  const itemsExcelSampleRow: (string | number)[] = [
    13714567712,
    0,
    510000,
    0,
    0,
    510000,
    0,
    0,
    0,
    510000,
  ];

  // هندلر خروجی اکسل (فعلاً اسکلت CSV با پسوند .xlsx برای تست UI)
  const handleItemsExcelExport = () => {
    const rows = [itemsExcelHeaders, itemsExcelSampleRow];

    const csvContent = rows
      .map((row) =>
        row
          .map((value) => {
            const text = value != null ? String(value) : '';
            // Escape دابل کوتیشن‌ها در CSV
            const safe = text.replace(/"/g, '""');
            return `"${safe}"`;
          })
          .join(','),
      )
      .join('\r\n');

    const blob = new Blob([csvContent], {
      type:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8;',
    });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'modian-export-invoice-items-sample.xlsx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // وضعیت نمایش/عدم نمایش نوار «نمایش ستون‌ها» برای جدول پرداخت (WIP)
  const [_showPaymentsColsOpen, _setShowPaymentsColsOpen] =
    React.useState(false);

  // لیبل ستون‌های جدول پرداخت
  const paymentsColumnLabels: Record<string, string> = {
    p1: 'تاریخ پرداخت',
    p2: 'مبلغ پرداختی (ریال)',
    p3: 'ثبت‌کننده',
    p4: 'روش پرداخت',
    p5: 'وضعیت پرداخت',
    p6: 'وضعیت اعتبار خریدار',
    p7: 'سهم مالیات بر ارزش افزوده از پرداخت (ریال)',
    p8: 'سهم سایر مالیات، عوارض و وجوه قانونی از پرداخت (ریال)',
    p9: 'مجموع مبلغ پرداختی (ریال)',
    p10: 'روزهای باقیمانده جهت واکنش',
    p11: 'تاریخ واکنش مودی',
  };

  const createDefaultPaymentsCols = () =>
    ({
      // ستون‌های اصلی پرداخت در حالت پیشفرض روشن هستند
      p1: true, // تاریخ پرداخت
      p2: true, // مبلغ پرداختی (ریال)
      p3: true, // ثبت‌کننده
      p4: false, // روش پرداخت
      p5: true, // وضعیت پرداخت
      p6: false, // وضعیت اعتبار خریدار
      p7: true, // سهم مالیات بر ارزش افزوده از پرداخت (ریال)
      p8: false, // سهم سایر مالیات، عوارض و وجوه قانونی از پرداخت (ریال)
      p9: false, // مجموع مبلغ پرداختی (ریال)
      p10: false, // روزهای باقیمانده جهت واکنش
      // بقیه ستون‌ها در حالت پیشفرض خاموش هستند و در صورت نیاز توسط کاربر فعال می‌شوند
      p11: false, // تاریخ واکنش مودی
    } as Record<string, boolean>);

  const [_paymentsColsVisible, _setPaymentsColsVisible] =
    React.useState<Record<string, boolean>>(createDefaultPaymentsCols);

  const _togglePaymentsCol = (key: string) => {
    _setPaymentsColsVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const _showAllPaymentsCols = () => {
    _setPaymentsColsVisible(
      Object.keys(paymentsColumnLabels).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as Record<string, boolean>,
      ),
    );
  };

  const _setPaymentsDefaultCols = () => {
    _setPaymentsColsVisible(createDefaultPaymentsCols());
  };

  // وضعیت باز/بسته بودن مودال «جزئیات پرداخت»
  const [isPaymentDetailsModalOpen, setIsPaymentDetailsModalOpen] =
    React.useState(false);

  // وضعیت کلید کشویی «نمایش صورتحساب صحیح» (روشن/خاموش)
  const [showCorrectInvoice, setShowCorrectInvoice] = React.useState(true);

  return (
    <div className="space-y-10 mx-auto w-full max-w-[1200px] px-4 pt-0 pb-4 -mt-4">
      {/* سرتیتر بالا – عنوان صورتحساب فروش + آیکون + وضعیت */}
      <div className="flex items-center justify-between">
        {/* آیکون فلش مربعی در سمت راست، سپس تیتر صورتحساب فروش */}
        <div className="flex items-center gap-2">
          <Link
            href="/simulators/modian/invoices/exports"
            aria-label="بازگشت به لیست صورتحساب‌های فروش صادراتی"
          >
            <button
              type="button"
              className="h-8 w-8 border border-gray-300 rounded-md bg-white flex items-center justify-center"
            >
              <InvoiceHeaderArrowIcon className="h-4 w-4" />
            </button>
          </Link>
          <span className="text-sm font-bold">صورتحساب صادرات</span>
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
              <span className="text-sm font-mono">A11EHH0FC3*********53</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">نقش مودی:</span>
              <span className="text-sm">عادی</span>
            </div>
          </div>
        }
        more={
          <div className="mt-4 grid gap-4 md:grid-cols-2 items-start">
            
            {/* ستون راست – مشخصات اصلی صورتحساب */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">تاریخ و زمان صدور:</span>
                <span className="text-sm">۱۴۰۴/۰۵/۰۹ - ۰۸:۱۹</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">نوع صورتحساب:</span>
                <span className="text-sm">نوع اول</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">الگوی صورتحساب:</span>
                <span className="text-sm">صادرات</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">موضوع صورتحساب:</span>
                <span className="text-sm">اصلی</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">سریال صورتحساب:</span>
                <span className="text-sm font-mono">*********۵۲</span>
              </div>
            </div>

            {/* ستون چپ – اطلاعات صادراتی */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">شماره مالیاتی صورتحساب مرجع:</span>
                <span className="text-sm">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">شماره کوتاژ اظهارنامه گمرکی:</span>
                <span className="text-sm">۴۶۴۴۹۹</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">تاریخ کوتاژ اظهارنامه گمرکی:</span>
                <span className="text-sm">۱۴۰۳/۰۵/۱۲</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">شماره پروانه گمرکی:</span>
                <span className="text-sm">۴۶۴۴۹۹</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">کد گمرک محل اظهار:</span>
                <span className="text-sm">۱۵۲۰۳</span>
              </div>
            </div>
          </div>
        }
      />

      {/* مشخصات فروشنده */}
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
            </div>
          </div>
        }
      />

      {/* جدول اقلام صورتحساب */}
      <section className="mt-6">
        {/* نوار بالای جدول (لیبل + آیکون‌ها + دکمه‌ها) */}
        <div className="flex items-center justify-between pt-2 pb-0 w-full">
          {/* عنوان اقلام صورتحساب + آیکون‌ها */}
          <div className="flex items-center gap-2 text-sm font-semibold">
            <div className="bg-green-700 text-white px-4 py-2 rounded-t-md border border-green-700 border-b-0 -mb-px">
              اقلام صورتحساب
            </div>
            <button
              type="button"
              aria-label="خروجی اکسل اقلام صورتحساب"
              onClick={handleItemsExcelExport}
            >
              <IconExcelExport className="h-9 w-9" />
            </button>
            <button
              type="button"
              className="h-8 w-8 flex items-center justify-center rounded border border-black bg-white text-green-700"
              aria-label="نمایش ستون‌ها"
              onClick={() => setShowItemsColsOpen((v) => !v)}
            >
              <ColumnsIcon className="h-6 w-6" />
            </button>
          </div>

          {/* دکمه‌های عملیات در سمت چپ هدر (فقط عملیات حق‌العملکاری در صفحه فروش) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-3 py-2 text-xs border border-green-700 rounded-md text-white bg-green-700 hover:bg-green-800"
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

        {/* خود جدول اقلام */}
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
                {/* 3 - شناسه کالا/خدمت */}
                <th
                  style={{
                    display: itemsColsVisible.c3 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  شناسه کالا/خدمت
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
                {/* 6 - تعداد/مقدار */}
                <th
                  style={{
                    display: itemsColsVisible.c6 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  تعداد/مقدار
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
                {/* 8 - میزان ارز */}
                <th
                  style={{
                    display: itemsColsVisible.c8 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  میزان ارز
                </th>
                {/* 9 - نوع ارز */}
                <th
                  style={{
                    display: itemsColsVisible.c9 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  نوع ارز
                </th>
                {/* 10 - نرخ برابری ارز با ریال/نرخ فروش ارز (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c10 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  نرخ برابری ارز با ریال/نرخ فروش ارز (ریال)
                </th>
                {/* 11 - مبلغ قبل از تخفیف (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c11 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ قبل از تخفیف (ریال)
                </th>
                {/* 12 - مبلغ تخفیف (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c12 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ تخفیف (ریال)
                </th>
                {/* 13 - مبلغ بعد از تخفیف (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c13 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ بعد از تخفیف (ریال)
                </th>
                {/* 14 - نرخ مالیات بر ارزش افزوده */}
                <th
                  style={{
                    display: itemsColsVisible.c14 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  نرخ مالیات بر ارزش افزوده
                </th>
                {/* 15 - مبلغ مالیات بر ارزش افزوده */}
                <th
                  style={{
                    display: itemsColsVisible.c15 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ مالیات بر ارزش افزوده
                </th>
                {/* 16 - موضوع سایر مالیات و عوارض */}
                <th
                  style={{
                    display: itemsColsVisible.c16 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  موضوع سایر مالیات و عوارض
                </th>
                {/* 17 - نرخ سایر مالیات و عوارض */}
                <th
                  style={{
                    display: itemsColsVisible.c17 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  نرخ سایر مالیات و عوارض
                </th>
                {/* 18 - مبلغ سایر مالیات و عوارض (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c18 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ سایر مالیات و عوارض (ریال)
                </th>
                {/* 19 - موضوع سایر وجوه قانونی */}
                <th
                  style={{
                    display: itemsColsVisible.c19 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  موضوع سایر وجوه قانونی
                </th>
                {/* 20 - نرخ سایر وجوه قانونی */}
                <th
                  style={{
                    display: itemsColsVisible.c20 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  نرخ سایر وجوه قانونی
                </th>
                {/* 21 - مبلغ سایر وجوه قانونی (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c21 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ سایر وجوه قانونی (ریال)
                </th>
                {/* 22 - سهم مالیات بر ارزش افزوده از پرداخت (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c22 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  سهم مالیات بر ارزش افزوده از پرداخت (ریال)
                </th>
                {/* 23 - سهم نقدی از پرداخت (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c23 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  سهم نقدی از پرداخت (ریال)
                </th>
                {/* 24 - مبلغ کل کالا/خدمت (ریال) */}
                <th
                  style={{
                    display: itemsColsVisible.c24 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  مبلغ کل کالا/خدمت (ریال)
                </th>
                {/* 25 - شماره قرارداد حق‌العملکاری */}
                <th
                  style={{
                    display: itemsColsVisible.c25 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  شماره قرارداد حق‌العملکاری
                </th>
                {/* 26 - وضعیت عملیات قانونی */}
                <th
                  style={{
                    display: itemsColsVisible.c26 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  وضعیت عملیات قانونی
                </th>
                {/* 27 - وضعیت واکنش آمر */}
                <th
                  style={{
                    display: itemsColsVisible.c27 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  وضعیت واکنش آمر
                </th>
                {/* 28 - تاریخ و زمان واکنش آمر */}
                <th
                  style={{
                    display: itemsColsVisible.c28 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  تاریخ و زمان واکنش آمر
                </th>
                {/* 29 - روزهای باقیمانده جهت واکنش آمر */}
                <th
                  style={{
                    display: itemsColsVisible.c29 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1 whitespace-nowrap"
                >
                  روزهای باقیمانده جهت واکنش آمر
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
                {/* 21 */}
                <td
                  style={{
                    display: itemsColsVisible.c21 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ---
                </td>
                {/* 22 */}
                <td
                  style={{
                    display: itemsColsVisible.c22 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ---
                </td>
                {/* 23 */}
                <td
                  style={{
                    display: itemsColsVisible.c23 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ---
                </td>
                {/* 24 */}
                <td
                  style={{
                    display: itemsColsVisible.c24 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ---
                </td>
                {/* 25 */}
                <td
                  style={{
                    display: itemsColsVisible.c25 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ---
                </td>
                {/* 26 */}
                <td
                  style={{
                    display: itemsColsVisible.c26 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ---
                </td>
                {/* 27 */}
                <td
                  style={{
                    display: itemsColsVisible.c27 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ---
                </td>
                {/* 28 */}
                <td
                  style={{
                    display: itemsColsVisible.c28 ? 'table-cell' : 'none',
                  }}
                  className="border px-2 py-1"
                >
                  ---
                </td>
                {/* 29 */}
                <td
                  style={{
                    display: itemsColsVisible.c29 ? 'table-cell' : 'none',
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
                <span className="text-sm">مجموع سایر مالیات، عوارض و وجوه قانونی:</span>
                <span className="text-sm font-bold">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">مجموع ارزش ارزی:</span>
                <span className="text-sm font-bold">---</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">مجموع ارزش ریالی:</span>
                <span className="text-sm font-bold">---</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  مجموع وزن خالص:
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
                <span className="text-sm">وضعیت تطابق:</span>
                <span className="text-sm">در انتظار بررسی</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">تاریخ درج در کارپوشه:</span>
                <span className="text-sm">۱۴۰۴/۰۵/۰۴ - ۱۲:۳۴</span>
              </div>
            </div>
          </div>
        }
      />

      {/* دکمه‌ها و کلید کشویی پایین صفحه */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-4 pb-10">
        <div className="flex items-center gap-3 text-sm">
          <span>نمایش صورتحساب صحیح :</span>
          <button
            type="button"
            aria-pressed={showCorrectInvoice}
            onClick={() => setShowCorrectInvoice((v) => !v)}
            className="focus:outline-none"
          >
            <span
              className={`flex h-6 w-10 items-center rounded-full border transition-colors
                ${
                  showCorrectInvoice
                    ? 'justify-end bg-green-600 border-green-600'
                    : 'justify-start bg-gray-300 border-gray-300'
                }`}
            >
              <span className="h-4 w-4 rounded-full bg-white shadow" />
            </span>
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {shouldShowReferenceInvoiceButton && (
            <button className="inline-flex items-center rounded-md bg-green-600 px-4 py-1.5 text-sm text-white cursor-not-allowed">
              صورتحساب مرجع
            </button>
          )}
          <button className="inline-flex items-center rounded-md bg-green-600 px-4 py-1.5 text-sm text-white cursor-not-allowed">
            صورتحساب ارجاعی
          </button>
          <button className="inline-flex items-center rounded-md border border-gray-400 px-4 py-1.5 text-sm text-gray-500 cursor-not-allowed">
            رد صورتحساب
          </button>
          <button className="inline-flex items-center rounded-md bg-gray-400 px-4 py-1.5 text-sm text-white cursor-not-allowed">
            تایید صورتحساب
          </button>
          <button className="inline-flex items-center rounded-md border border-black bg-gray-200 px-3 py-1.5 text-sm cursor-not-allowed">
            انتقال
          </button>
          {/* آیکون خروجی PDF قبل از دکمه انتقال */}
          <button
            type="button"
            aria-label="خروجی PDF"
            className="inline-flex items-center justify-center bg-transparent p-0"
          >
            <span className="flex h-9 w-9 items-center justify-center border border-black">
              <span className="relative flex h-6 w-6">
                <span className="absolute left-0 bottom-0 h-5 w-[3px] bg-black" />
                <span className="absolute left-0 bottom-0 h-[3px] w-5 bg-black" />
                <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center border-[3px] border-black bg-white">
                  <span className="text-[7px] font-bold leading-none text-black">
                    PDF
                  </span>
                </span>
              </span>
            </span>
          </button>
        </div>
      </section>

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

            {/* بدنه مودال */}
            <div className="flex justify-start px-16 py-10">
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
