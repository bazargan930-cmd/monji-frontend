// src/app/simulators/modian/purchase-announcements/bourse/page.tsx

'use client';

import React from 'react';

import {
  ColumnsVisibilityBar,
  EmptyTableRow,
  InvoicesSearchHeader,
  ScrollableTableShell,
  ColumnsIcon,
  IconExcelExport,
  type FilterField,
} from '@/components/modian';

// داده‌ی نمایشی برای چند ردیف اعلامیه واردات (فعلاً ماک)
type Row = {
  taxNo: string;
  year: string;
  period: string;
  declarationTotal: string;
  vatTotal: string;
  status: string;
  role: string;
  branch: string;
  branchCode: string;
  issueDate: string;
  inboxDate: string;
  topic: string;
};

// ⚠️ برای تست نمای خالی جدول، فعلاً داده‌ی نمایشی را خالی نگه می‌داریم
const demoRows: Row[] = [];

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

// ستون‌های قابل‌تنظیم (بدون ستون‌های ثابت: چک‌باکس، ردیف، شماره مالیاتی و جزئیات)
// ترتیب بر اساس سناریوی شما:
// مجموع اعلامیه، مالیات بر ارزش افزوده، وضعیت اعلامیه، تاریخ صدور، نقش مودی،
// موضوع اعلامیه، شعبه، تاریخ درج در کارپوشه
const columnsConfig: ColumnConfig[] = [
  {
    key: 'declarationTotal',
    label: 'مجموع اعلامیه (ریال)',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.declarationTotal,
  },
  {
    key: 'vatTotal',
    label: 'مالیات بر ارزش افزوده (ریال)',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.vatTotal,
  },
  {
    key: 'status',
    label: 'وضعیت اعلامیه',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.status,
  },
  {
    key: 'issueDate',
    label: 'تاریخ صدور اعلامیه',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.issueDate,
  },
  {
    key: 'role',
    label: 'نقش مودی',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.role,
  },
  {
    key: 'topic',
    label: 'موضوع اعلامیه',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.topic,
  },
  {
    key: 'branch',
    label: 'شعبه',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.branch,
  },
  {
    key: 'inboxDate',
    label: 'تاریخ درج در کارپوشه',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.inboxDate,
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

const filtersConfig: FilterField[] = [
  { type: 'period', name: 'period', label: 'سال / دوره مالیاتی' },
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
  {
    type: 'status',
    name: 'status',
    label: 'وضعیت اعلامیه',
    options: [
      { value: 'رد شده', label: 'رد شده' },
      { value: 'تایید شده', label: 'تایید شده' },
      { value: 'تایید سیستمی', label: 'تایید سیستمی' },
      { value: 'در انتظار واکنش', label: 'در انتظار واکنش' },
      { value: 'عدم امکان واکنش', label: 'عدم امکان واکنش' },
      { value: 'عدم نیاز به واکنش', label: 'عدم نیاز به واکنش' },
      { value: 'ابطال شده', label: 'ابطال شده' },
    ],
  },
  { type: 'button', name: 'advanced', label: 'پیشرفته' },
  { type: 'submit', name: 'search', label: 'جستجو' },
];

export default function PurchaseAnnouncementsImportsPage() {
  // نمایش/مخفی‌سازی ستون‌ها
  const [showColsOpen, setShowColsOpen] = React.useState(false);
  const [colsVisible, setColsVisible] = React.useState<Record<string, boolean>>(
    () => ({ ...defaultColsVisible }),
  );

  const toggleCol = (key: string) =>
    setColsVisible((s) => ({ ...s, [key]: !s[key] }));
  const showAllCols = () =>
    setColsVisible(
      Object.keys(columnLabels).reduce(
        (a, k) => ((a[k] = true), a),
        {} as Record<string, boolean>,
      ),
    );
  const setDefaultCols = () =>
    setColsVisible(() => ({ ...defaultColsVisible }));

  return (
    <div className="space-y-4 mx-auto w-full max-w-[1200px] px-4">
      {/* تیتر صفحه */}
      <h1 className="text-xl md:text-2xl font-bold">
        اعلامیه‌های خرید از بورس کالا
      </h1>

      {/* هدر جستجو با دو تب (بر اساس الگوی خرید داخلی) */}
      <InvoicesSearchHeader
        defaultTab="filter"
        filtersConfig={filtersConfig}
        onSubmitFilters={(vals) => {
          // TODO: اتصال به API واقعی اعلامیه‌ها
          console.log('purchase-announcements/imports filters', vals);
        }}
        onSubmitTaxId={(taxId) => {
          // TODO: جستجو بر اساس شماره مالیاتی اعلامیه
          console.log('purchase-announcements/imports taxId', taxId);
        }}
      />


      {/* نوار ابزار بین جستجو و جدول: آیکون‌ها + دکمه انتقال شعبه */}
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

        {/* دکمه‌ها (چپ) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-black bg-white px-3 py-1.5 text-sm text-black"
          >
            انتقال شعبه
          </button>
        </div>
      </div>

      {/* نوار نمایش/مخفی‌سازی ستون‌ها */}
      <ColumnsVisibilityBar
        open={showColsOpen}
        columnLabels={columnLabels}
        colsVisible={colsVisible}
        onToggleCol={toggleCol}
        onShowAllCols={showAllCols}
        onSetDefaultCols={setDefaultCols}
      />

      {/* جدول اعلامیه‌ها با اسکرول افقی و کنترل نمایش ستون‌ها */}
      <ScrollableTableShell>
        <table className="w-full text-sm whitespace-nowrap">
          <thead className="bg-[#d1f7f5ff] text-gray-700">
            <tr>
              {/* ستون‌های ثابت: چک‌باکس، ردیف، شماره مالیاتی اعلامیه */}
              <th className="px-3 py-2 text-right w-10">
                <input type="checkbox" aria-label="انتخاب همه" />
              </th>
              <th className={COMMON_HEADER_CLASS}>ردیف</th>
              <th className={COMMON_HEADER_CLASS}>شماره مالیاتی اعلامیه</th>

              {/* ستون‌های قابل‌تنظیم (در منوی نمایش ستون‌ها) */}
              {columnsConfig.map((col) => (
                <th
                  key={col.key}
                  style={{
                    display: colsVisible[col.key] ? 'table-cell' : 'none',
                  }}
                  className={col.headerClassName}
                >
                  {col.label}
                </th>
              ))}
              {/* ستون ثابت: «جزئیات» (بدون تیتر) — لبهٔ چپ + خط طوسی پررنگ در راست */}
              <th
                className="w-24 min-w-[6rem] sticky left-0 bg-[#d1f7f5ff] z-10"
                style={{
                  // خط طوسیِ راست ستون ثابت + سایه نرم
                  boxShadow:
                    'inset -2px 0 0 #9CA3AF, inset 8px 0 8px -8px rgba(0,0,0,0.15)',
                }}
              />
            </tr>
          </thead>
          <tbody>
            {demoRows.length === 0 ? (
              <EmptyTableRow colSpan={columnsConfig.length + 4} />
            ) : (
              demoRows.map((r, i) => (
                <tr key={i} className="border-t">
                  {/* ستون‌های ثابت: چک‌باکس، ردیف، شماره مالیاتی اعلامیه */}
                  <td className="px-3 py-2 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className={COMMON_CELL_CLASS}>{i + 1}</td>
                  <td className={COMMON_CELL_CLASS}>{r.taxNo}</td>

                  {/* ستون‌های قابل‌تنظیم */}
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
                      // همان خط طوسیِ راست برای ردیف‌ها + سایه نرم
                      boxShadow:
                        'inset -2px 0 0 #9CA3AF, inset 8px 0 8px -8px rgba(0,0,0,0.12)',
                    }}
                  >
                    جزئیات
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </ScrollableTableShell>

      <div className="text-xs text-gray-500">
        این صفحه فعلاً نمایشی است و در مراحل بعدی به سرویس‌های بک‌اند مودیان متصل می‌شود.
      </div>
    </div>
  );
}
