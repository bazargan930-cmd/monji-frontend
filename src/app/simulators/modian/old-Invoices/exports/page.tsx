// src\app\simulators\modian\old-Invoices\exports\page.tsx

'use client';

import React from 'react';
import Link from 'next/link';

import {
  SearchByFilters,
  type FilterField,
  ColumnsVisibilityBar,
  ScrollableTableShell,
} from '@/components/modian/common';
import { ColumnsIcon, IconExcelExport } from '@/components/modian/ui';

// این دو ثابت فقط مخصوص همین صفحه هستند.
// اگر بخواهی نسخه‌های مشابه بسازی، کافی است این دو مقدار را عوض کنی.
const PAGE_TITLE = 'فروش صادراتی';
const DETAIL_LINK = '/simulators/modian/old-Invoices/exports/detail';
// داده‌ی نمایشی برای چند ردیف (فعلاً ماک)
type Row = {
  taxNo: string;
  total: string;
  vat: string;
  status: string;
  matchStatus: string;
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
  matchStatus: '—',
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
    label: 'شماره مالیاتی',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.taxNo,
  },
  {
    key: 'c4',
    label: 'مجموع صورتحساب',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.total,
  },
  {
    key: 'c5',
    label: 'مجموع مالیات بر ارزش افزوده',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.vat,
  },
  {
    key: 'c6',
    label: 'نقش مودی',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.role,
  },
  {
    key: 'c7',
    label: 'شماره قرارداد حق‌العملکاری',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: () => '—',
  },
  {
    key: 'c8',
    label: 'وضعیت واکنش آمر',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: () => '—',
  },
  {
    key: 'c9',
    label: 'شماره اقتصادی آمر',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.economicCode,
  },
  {
    key: 'c10',
    label: 'شماره کوتاژ اظهارنامه',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: () => '—',
  },
  {
    key: 'c11',
    label: 'تاریخ کوتاژ اظهارنامه',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.inboxDate,
  },
  {
    key: 'c12',
    label: 'تاریخ صدور صورتحساب',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.issueDate,
  },
  {
    key: 'c13',
    label: 'وضعیت تطابق',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.limitStatus,
  },
  {
    key: 'c14',
    label: 'وضعیت صورتحساب',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.status,
  },
  {
    key: 'c15',
    label: 'موضوع صورتحساب',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.topic,
  },
  {
    key: 'c16',
    label: 'کد شعبه فروشنده',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.branch,
  },
  {
    key: 'c17',
    label: 'سال مالیاتی',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.year,
  },
  {
    key: 'c18',
    label: 'دوره مالیاتی',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.period,
  },
  {
    key: 'c19',
    label: 'زمان صدور',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: () => '—',
  },
];

const columnLabels: Record<string, string> = columnsConfig.reduce(
  (acc, col) => {
    acc[col.key] = col.label;
    return acc;
  },
  {} as Record<string, string>,
);

const defaultColsVisible: Record<string, boolean> = columnsConfig.reduce(
  (acc, col) => {
    acc[col.key] = col.defaultVisible;
    return acc;
  },
  {} as Record<string, boolean>,
);

export default function ModianOldInvoicesExportsPage() {
  const [showColsOpen, setShowColsOpen] = React.useState(false);
  const [colsVisible, setColsVisible] = React.useState<Record<string, boolean>>(
    () => ({ ...defaultColsVisible }),
  );

  const toggleCol = (key: string) =>
    setColsVisible((s) => ({ ...s, [key]: !s[key] }));

  const showAllCols = () =>
    setColsVisible(
      Object.keys(columnLabels).reduce(
        (a, k) => {
          a[k] = true;
          return a;
        },
        {} as Record<string, boolean>,
      ),
    );

  const setDefaultCols = () => {
    setColsVisible(() => ({ ...defaultColsVisible }));
  };

  return (
    <>
      {/* کانتینر مرکزی مثل سایت اصلی: صفحه همیشه وسط و عرض ثابت */}
      <div className="space-y-4 mx-auto w-full max-w-[1200px] px-4">
        {/* تیتر صفحه مطابق منوی اصلی */}
        <h1 className="text-xl md:text-2xl font-bold">{PAGE_TITLE}</h1>

        {/* کادر جستجو بدون تب، مخصوص «صورتحساب‌های قبل از ۱۴۰۲/۰۳/۲۶» */}
        <SearchByFilters
          fields={filtersConfig}
          summaryTitle=""
          onSubmit={(vals) => {
            // TODO: اتصال به API لیست صورتحساب‌های قبل از ۱۴۰۲/۰۳/۲۶
            console.log('filters (old invoices)', vals);
          }}
        />

        {/* نوار ابزار بین جستجو و جدول: فقط آیکون‌های خروجی اکسل و نمایش ستون‌ها */}
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
            {/* نمایش ستون‌ها */}
            <button
              type="button"
              title="نمایش ستون‌ها"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-2"
              onClick={() => setShowColsOpen((v) => !v)}
            >
              <ColumnsIcon className="h-5 w-5" />
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

        {/* جدول با ستون ثابت «جزئیات» و اسکرول افقی */}
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
                {/* ستون ثابت: «جزئیات» (بدون تیتر) — لبهٔ چپ */}
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
                        display: colsVisible[col.key]
                          ? 'table-cell'
                          : 'none',
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
                    <Link href={DETAIL_LINK}>جزئیات</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollableTableShell>

        {/* یادداشت نمایشی */}
        <div className="text-xs text-gray-500">
          این صفحه فعلاً نمایشی است و به‌زودی به سرویس‌های صورتحساب‌های قبل از
          ۱۴۰۲/۰۳/۲۶ متصل می‌شود.
        </div>
      </div>
    </>
  );
}

// پیکربندی فیلدهای نوار جستجو برای «صورتحساب‌های قبل از ۱۴۰۲/۰۳/۲۶»
// فقط در این صفحه استفاده می‌شود و به صفحات دیگرِ مودیان دست نمی‌زند.
const filtersConfig: FilterField[] = [
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
  
  { type: 'button', name: 'advanced', label: 'جستجو پیشرفته' },
  { type: 'submit', name: 'search', label: 'جستجو' },
];
