// src/app/simulators/modian/contracts/commission/page.tsx

'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { ColumnsIcon, IconExcelExport } from '@/components/modian';
// eslint-disable-next-line no-restricted-imports -- rule فعلاً این Barrel را هم محدود کرده؛ موقت تا اصلاح Rule سراسری
import { SearchByFilters, type FilterField } from '@/components/modian/common/search';
// eslint-disable-next-line no-restricted-imports -- rule فعلاً این Barrel را هم محدود کرده؛ موقت تا اصلاح Rule سراسری
import {
  ColumnsVisibilityBar,
  EmptyTableRow,
  ScrollableTableShell,
} from '@/components/modian/common/table';

// این دو ثابت فقط مخصوص همین صفحه هستند.
// اگر بخواهی نسخه‌های مشابه بسازی، کافی است این دو مقدار را عوض کنی.
const PAGE_TITLE = 'قراردادهای حق‌العملکاری';
const COMMISSION_STORAGE_KEY = 'modian.commission.contracts';

type Row = {
  contractNo: string;
  role: string;
  employerEconomicCode: string;
  contractorEconomicCode: string;
  employerIdentityCode: string;
  contractorIdentityCode: string;
  employerName: string;
  contractorName: string;
  contractType: string;
  internalContractNo: string;
  contractDate: string;
  registrationDate: string;
  totalAmount: string;
  contractSubject: string;
  contractStatus: string;
  };
  
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
      key: 'contractNo',
      label: 'شماره قرارداد',
      defaultVisible: true,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.contractNo,
    },
    {
      key: 'c4',
      label: 'نقش مودی',
      defaultVisible: false,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.role,
    },
    {
      key: 'c5',
      label: 'شماره اقتصادی آمر',
      defaultVisible: true,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.employerEconomicCode,
    },
    {
      key: 'c6',
      label: 'شماره اقتصادی حق‌العملکار',
      defaultVisible: true,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.contractorEconomicCode,
    },
    {
      key: 'c7',
      label: 'شناسه هویتی آمر',
      defaultVisible: false,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.employerIdentityCode,
    },
    {
      key: 'c8',
      label: 'شناسه هویتی حق‌العملکار',
      defaultVisible: false,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.contractorIdentityCode,
    },
    {
      key: 'c9',
      label: 'نام آمر',
      defaultVisible: false,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.employerName,
    },
    {
      key: 'c10',
      label: 'نام حق‌العملکار',
      defaultVisible: false,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.contractorName,
    },
    {
      key: 'c11',
      label: 'نوع قرارداد',
      defaultVisible: true,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.contractType,
    },
    {
      key: 'c12',
      label: 'شماره داخلی قرارداد',
      defaultVisible: false,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.internalContractNo,
    },
    {
      key: 'c13',
      label: 'تاریخ عقد قرارداد',
      defaultVisible: true,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.contractDate,
  
    },
  
    {
      key: 'c14',
      label: 'تاریخ ثبت در سامانه',
      defaultVisible: false,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.registrationDate,
    },
  
    {
      key: 'c15',
      label: 'مبلغ کل قرارداد (ریال)',
      defaultVisible: false,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.totalAmount,
    },
    {
      key: 'c16',
      label: 'موضوع قرارداد',
      defaultVisible: false,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.contractSubject,
    },
    {
      key: 'c18',
      label: 'وضعیت قرارداد',
      defaultVisible: true,
      headerClassName: COMMON_HEADER_CLASS,
      cellClassName: COMMON_CELL_CLASS,
      renderCell: (row) => row.contractStatus,
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
  
  export default function ModianContractscommissionPage() {
    const router = useRouter();
    const [showColsOpen, setShowColsOpen] = React.useState(false);
    const [colsVisible, setColsVisible] = React.useState<Record<string, boolean>>(
      () => ({ ...defaultColsVisible }),
    );
    const [rows, setRows] = React.useState<Row[]>([]);
    React.useEffect(() => {
      try {
        const raw = localStorage.getItem(COMMISSION_STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        setRows(Array.isArray(parsed) ? (parsed as Row[]) : []);
      } catch {
        setRows([]);
      }
    }, []);
    const isEmpty = rows.length === 0;
    const visibleColumns = React.useMemo(
      () => columnsConfig.filter((c) => colsVisible[c.key]),
      [colsVisible],
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
  
          {/* کادر جستجو */}
          <SearchByFilters
            fields={filtersConfig}
            summaryTitle=""
            onSubmit={(vals) => {
              // TODO: اتصال به API لیست قراردادهای حق العملکاری
              console.log('filters (contracts/commission)', vals);
            }}
          />
  
          {/* نوار ابزار بین جستجو و جدول: دکمه ثبت قرارداد جدید + آیکون‌های خروجی اکسل و نمایش ستون‌ها */}
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
  
            {/* دکمه ثبت قرارداد جدید (چپ، مثل سامانه اصلی) */}
            <div>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                onClick={() =>
                  router.push('/simulators/modian/contracts/commission/new')
                }
              >
                ثبت قرارداد جدید
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
          {/* وقتی جدول خالی است باید غیرفعال باشد: اسکرول کار نکند و Empty-State داخل محدوده‌ی قابل مشاهده فیکس شود */}
          {isEmpty ? (
            <div className="w-full overflow-hidden rounded-md border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead className="bg-[#d1f7f5ff] text-gray-700">
                  <tr>
                  {visibleColumns.map((col) => (
                      <th
                        key={col.key}
                        className={col.headerClassName}
                      >
                        {col.key === 'c1' ? (
                          <input type="checkbox" aria-label="انتخاب همه" />
                        ) : (
                          col.label
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <EmptyTableRow colSpan={visibleColumns.length} />
                </tbody>
              </table>
            </div>
          ) : (
            <ScrollableTableShell>
              <table className="w-full text-sm whitespace-nowrap">
              <thead className="bg-[#d1f7f5ff] text-gray-700">
                <tr>
                  {visibleColumns.map((col) => (
                    <th
                      key={col.key}
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
              {rows.map((r, i) => (
                    <tr key={i} className="border-t">
                      {visibleColumns.map((col) => (
                        <td
                          key={col.key}
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
                        <Link
                          href={`/simulators/modian/contracts/commission/detail?contractNo=${encodeURIComponent(
                            r.contractNo,
                          )}`}
                        >
                          جزئیات
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            </ScrollableTableShell>
          )}
        </div>
      </>
    );
  }
  
  // پیکربندی فیلدهای نوار جستجو برای «قراردادهای حق العملکاری»
  // فقط در این صفحه استفاده می‌شود.
  const filtersConfig: FilterField[] = [
    {
      type: 'roles',
      name: 'role',
      label: 'نقش مودی',
      options: [
        { value: 'normal', label: 'عادی' },
        { value: 'commission', label: 'حق العملکار' },
        { value: 'orderer', label: 'آمر' },
      ],
    },
  
    { type: 'button', name: 'advanced', label: 'جستجو پیشرفته' },
    { type: 'submit', name: 'search', label: 'جستجو' },
  ];
  
  
  