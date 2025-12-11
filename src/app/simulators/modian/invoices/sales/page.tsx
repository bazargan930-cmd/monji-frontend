// src/app/simulators/modian/invoices/sales/page.tsx

'use client';
import Link from 'next/link';
import React from 'react';

import {
  ColumnsVisibilityBar,
  InvoicesSearchHeader,
  ScrollableTableShell,
  ColumnsIcon,
  IconExcelExport,
  type FilterField,
} from '@/components/modian';

// داده‌ی نمایشی برای چند ردیف (فعلاً ماک)
type Row = {
  taxNo: string;
  total: string;
  vat: string;
  status: string;
  issueDate: string;
  identityCode: string;
  topic: string;
  role: string;
  limitStatus: string;
  sellerName: string;
  invoiceType: string;
  pattern: string;
  year: string;
  period: string;
  inboxDate: string;
  branch: string;
  personType: string;
  tradeName: string;
  economicCode: string;
};

const demoRows: Row[] = Array.from({ length: 10 }).map((_, i) => ({
  taxNo: `A***${i}…${100 + i}`,
  total: '—',
  vat: '—',
  status: i % 5 === 3 ? 'ابطال شده' : 'در انتظار واکنش',
  issueDate: '—/—/—',
  identityCode: `10*********${i}`,
  topic: 'اصلی',
  role: 'عادی',
  limitStatus: 'عدم عدول از حد مجاز',
  sellerName: '—',
  invoiceType: 'عادی',
  pattern: 'الگو فروش',
  year: '—',
  period: '—',
  inboxDate: '—/—/—',
  branch: '—',
  personType: 'حقیقی',
  tradeName: '—',
  economicCode: `1010***${300 + i}`,
}));

type ColumnConfig = {
  key: string;
  label: string;
  defaultVisible: boolean;
  headerClassName: string;
  cellClassName: string;
  renderCell: (row: Row, index: number) => React.ReactNode;
};

const COMMON_HEADER_CLASS = 'px-3 py-2 text-right';
const COMMON_CELL_CLASS = 'px-3 py-2';

const columnsConfig: ColumnConfig[] = [
  {
    key: 'c1',
    label: 'انتخاب همه',
    defaultVisible: true,
    headerClassName: 'px-3 py-2 text-right w-10',
    cellClassName: 'px-3 py-2 text-center',
    renderCell: () => <input type="checkbox" />,
  },
  {
    key: 'c2',
    label: 'ردیف',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (_row, index) => index + 1,
  },
  {
    key: 'c3',
    label: 'شماره مالیاتی صورتحساب',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.taxNo,
  },
  {
    key: 'c4',
    label: 'مجموع صورتحساب (ریال)',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.total,
  },
  {
    key: 'c5',
    label: 'مالیات بر ارزش افزوده (ریال)',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.vat,
  },
  {
    key: 'c6',
    label: 'وضعیت صورتحساب',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.status,
  },
  {
    key: 'c7',
    label: 'تاریخ صدور صورتحساب',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.issueDate,
  },
  {
    key: 'c8',
    label: 'شناسه هویتی خریدار/حق‌العملکار',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.identityCode,
  },
  {
    key: 'c9',
    label: 'موضوع صورتحساب',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.topic,
  },
  {
    key: 'c10',
    label: 'نقش مودی',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.role,
  },
  {
    key: 'c11',
    label: 'وضعیت حد مجاز',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.limitStatus,
  },
  {
    key: 'c12',
    label: 'نام خریدار/حق‌العملکار',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.sellerName,
  },
  {
    key: 'c13',
    label: 'نوع صورتحساب',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.invoiceType,
  },
  {
    key: 'c14',
    label: 'الگوی صورتحساب',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.pattern,
  },
  {
    key: 'c15',
    label: 'سال',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.year,
  },
  {
    key: 'c16',
    label: 'دوره',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.period,
  },
  {
    key: 'c17',
    label: 'تاریخ درج در کارپوشه',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.inboxDate,
  },
  {
    key: 'c18',
    label: 'شعبه',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.branch,
  },
  {
    key: 'c19',
    label: 'نوع شخص خریدار/حق‌العملکار',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.personType,
  },
  {
    key: 'c20',
    label: 'نام تجاری خریدار/حق‌العملکار',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.tradeName,
  },
  {
    key: 'c21',
    label: 'شماره اقتصادی خریدار/حق‌العملکار',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.economicCode,
  },
];

const columnLabels: Record<string, string> = columnsConfig.reduce(
  (acc, col) => {
    acc[col.key] = col.label;
    return acc;
  },
  {} as Record<string, string>
);

const defaultColsVisible: Record<string, boolean> = columnsConfig.reduce(
  (acc, col) => {
    acc[col.key] = col.defaultVisible;
    return acc;
  },
  {} as Record<string, boolean>
);

export default function ModianInvoicesSalesPage() {
  // نمایش/مخفی‌سازی ستون‌ها
  const [showColsOpen, setShowColsOpen] = React.useState(false);
  const [colsVisible, setColsVisible] = React.useState<Record<string, boolean>>(
    () => ({ ...defaultColsVisible })
  );

  const toggleCol = (key: string) =>
    setColsVisible((s) => ({ ...s, [key]: !s[key] }));

  const showAllCols = () =>
    setColsVisible(
      Object.keys(columnLabels).reduce((a, k) => {
        a[k] = true;
        return a;
      }, {} as Record<string, boolean>)
    );

  const setDefaultCols = () => setColsVisible(() => ({ ...defaultColsVisible }));

  return (
    <>
      {/* کانتینر مرکزی مثل سایت اصلی: صفحه همیشه وسط و عرض ثابت */}
      <div className="space-y-4 mx-auto w-full max-w-[1200px] px-4">
        <h1 className="text-xl md:text-2xl font-bold">
          صورتحساب‌های فروش داخلی
        </h1>

        {/* هدر مشترک جستجو (دو تب) با پیکربندی فیلدها */}
        <InvoicesSearchHeader
          defaultTab="filter"
          filtersConfig={filtersConfig}
          onSubmitFilters={(vals) => {
            // TODO: اتصال به API لیست صورتحساب‌های فروش
            console.log('filters', vals);
          }}
          onSubmitTaxId={(taxId) => {
            // TODO: اتصال به API جستجوی تکی صورتحساب فروش
            console.log('taxId', taxId);
          }}
        />

        {/* نوار ابزار بین جستجو و جدول: ۲ آیکون راست‌چین + ۳ دکمه چپ‌چین */}
        <div className="flex items-center justify-between">
          {/* آیکون‌ها (راست) */}
          <div className="relative flex items-center gap-2">
            {/* خروجی اکسل */}
            <button
              type="button"
              title="خروجی اکسل"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-1.5"
            >
              <IconExcelExport className="h-7 w-7" />
            </button>
            {/* نمایش ستون‌ها (کامپوننت موجود) */}
            <button
              type="button"
              title="نمایش ستون‌ها"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-2"
              onClick={() => setShowColsOpen((v) => !v)}
            >
              <ColumnsIcon className="h-5 w-5" />
            </button>
          </div>

          {/* دکمه‌ها (چپ) — فعلاً غیرفعال */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled
              className="cursor-not-allowed inline-flex items-center rounded-md border border-black bg-white px-3 py-1.5 text-sm text-black"
            >
              انتقال صورتحساب
            </button>
          </div>
        </div>

        <ColumnsVisibilityBar
          open={showColsOpen}
          columnLabels={columnLabels}
          colsVisible={colsVisible}
          onToggleCol={toggleCol}
          onShowAllCols={showAllCols}
          onSetDefaultCols={setDefaultCols}
        />

        {/* جدول ۲۲ ستونه با ستون «جزئیات» ثابت و اسکرول افقی + کرسر پایین */}
        <ScrollableTableShell>
          <table className="w-full text-sm whitespace-nowrap">
            <thead className="bg-[#d1f7f5ff] text-gray-700">
              <tr>
                {columnsConfig.map((col) => (
                  <th
                    key={col.key}
                    style={{
                      display: colsVisible[col.key] ? 'table-cell' : 'none',
                    }}
                    className={col.headerClassName}
                  >
                    {col.key === 'c1' ? (
                      <input type="checkbox" aria-label="انتخاب همه" />
                    ) : (
                      col.label
                    )}
                  </th>
                ))}
                {/* ستون ثابت: «جزئیات» (بدون تیتر) — لبهٔ چپ + خط طوسی پررنگ در راست */}
                <th
                  className="w-24 min-w-[6rem] sticky left-0 bg-[#d1f7f5ff] z-10"
                  style={{
                    boxShadow:
                      'inset -2px 0 0 #9CA3AF, inset 8px 0 8px -8px rgba(0,0,0,0.15)',
                  }}
                />
              </tr>
            </thead>
            <tbody>
              {demoRows.map((r, i) => (
                <tr key={i} className="border-t">
                  {columnsConfig.map((col) => (
                    <td
                      key={col.key}
                      style={{
                        display: colsVisible[col.key] ? 'table-cell' : 'none',
                      }}
                      className={col.cellClassName}
                    >
                      {col.renderCell(r, i)}
                    </td>
                  ))}
                  {/* ستون ثابت «جزئیات» — انتهای ردیف و چسبیده به لبهٔ چپ */}
                  <td
                    className="sticky left-0 bg-white z-10 px-3 py-2 text-green-700"
                    style={{
                      boxShadow:
                        'inset -2px 0 0 #9CA3AF, inset 8px 0 8px -8px rgba(0,0,0,0.12)',
                    }}
                  >
                    {/* TODO: ایجاد صفحه جزئیات فروش داخلی و به‌روزرسانی مسیر در این لینک */}
                    <Link href="/simulators/modian/invoices/sales/detail">
                      جزئیات
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollableTableShell>

        {/* یادداشت نمایشی */}
        <div className="text-xs text-gray-500">
          این صفحه فعلاً نمایشی است و به‌زودی به سرویس‌های بک‌اند متصل می‌شود.
        </div>
      </div>
    </>
  );
}

// پیکربندی فیلدهای تب «جستجو با فیلتر»
const filtersConfig: FilterField[] = [
  { type: 'period', name: 'period', label: 'اطلاعات زمانی (سال/دوره)' },
 
  // نقش مودی: چندانتخابی با چک‌باکس‌ها
  {
    type: 'roles',
    name: 'role',
    label: 'نقش مودی',
    options: [
      { value: 'normal', label: 'عادی' },
      { value: 'commission', label: 'حق‌العملکار' },
      { value: 'orderer', label: 'آمر' },
    ],
  },
  // وضعیت صورتحساب: چندانتخابی با چک‌باکس‌ها (ترتیب طبق اسکرین خرید داخلی)
  {
    type: 'status',
    name: 'status',
    label: 'وضعیت صورتحساب',
    options: [
      { value: 'رد شده', label: 'رد شده' },
      { value: 'تایید شده', label: 'تایید شده' },
      { value: 'تایید سیستمی', label: 'تایید سیستمی' },
      { value: 'در انتظار واکنش', label: 'در انتظار واکنش' },
      { value: 'عدم امکان واکنش', label: 'عدم امکان واکنش' },
      { value: 'عدم نیاز به واکنش', label: 'عدم نیاز به واکنش' },
      { value: 'ابطال شده', label: 'ابطال شده' },
      { value: 'رد خودکار', label: 'رد خودکار' },
    ],
  },
  // نوع صورتحساب: چندانتخابی با چک‌باکس‌ها (مطابق اسکرین فروش داخلی)
  {
    type: 'roles',
    name: 'invoiceType',
    label: 'نوع صورتحساب',
    options: [
      { value: 'نوع اول', label: 'نوع اول' },
      { value: 'نوع دوم', label: 'نوع دوم' },
      { value: 'نوع سوم', label: 'نوع سوم' },
    ],
  },
  { type: 'button', name: 'advanced', label: 'پیشرفته' },
  { type: 'submit', name: 'search', label: 'جستجو' },
];
