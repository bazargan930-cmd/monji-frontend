//src/app/simulators/modian/tax-bills/page.tsx
'use client';

import React from 'react';

import {
  ColumnsVisibilityBar,
  EmptyTableRow,
  ScrollableTableShell,
  ColumnsIcon,
  FieldGrid,
  FormField,
} from '@/components/modian';

const PAGE_TITLE = 'صدور قبوض مالیاتی';
const TAX_BILLS_STORAGE_KEY = 'modian.tax-bills';

type Option = { value: string; label: string };

const YEAR_PERIOD_OPTIONS: Option[] = [
  { value: '1404-fall', label: 'پاییز ۱۴۰۴' },
  { value: '1404-summer', label: 'تابستان ۱۴۰۴' },
  { value: '1404-spring', label: 'بهار ۱۴۰۴' },
  { value: '1403-winter', label: 'زمستان ۱۴۰۳' },
  { value: '1403-fall', label: 'پاییز ۱۴۰۳' },
  { value: '1403-summer', label: 'تابستان ۱۴۰۳' },
  { value: '1403-spring', label: 'بهار ۱۴۰۳' },
  { value: '1402-winter', label: 'زمستان ۱۴۰۲' },
  { value: '1402-fall', label: 'پاییز ۱۴۰۲' },
  { value: '1402-summer', label: 'تابستان ۱۴۰۲' },
  { value: '1402-spring', label: 'بهار ۱۴۰۲' },
];

const STATUS_OPTIONS: Option[] = [
  { value: 'waiting-payment', label: 'در انتظار پرداخت' },
  { value: 'waiting-approve', label: 'در انتظار تایید' },
  { value: 'approved', label: 'تایید شده' },
];

const BILL_TYPE_OPTIONS: Option[] = [
  { value: 'vat-note-17', label: 'ارزش افزوده - تبصره ماده ۱۷' },
  { value: 'vat-note', label: 'ارزش افزوده' },
];

const SOURCE_OPTIONS: Option[] = [
  { value: 'art-75-general', label: 'موضوع ماده ۷۵ قانون مالیات بر ارزش افزوده (عمومی)' },
  {
    value: 'art-26-a-fuel',
    label:
      'موضوع بند الف ماده ۲۶ قانون مالیات بر ارزش افزوده (بنزین و سوخت هواپیما)',
  },
  {
    value: 'art-26-a-kerosene-diesel',
    label:
      'موضوع بند الف ماده ۲۶ قانون مالیات بر ارزش افزوده (نفت سفید، نفت گاز)',
  },
  { value: 'art-26-b-gold', label: 'موضوع بند ب ماده ۲۶ قانون مالیات بر ارزش افزوده (طلا)' },
  {
    value: 'art-26-b-softdrink',
    label: 'موضوع بند ب ماده ۲۶ قانون مالیات بر ارزش افزوده (نوشابه)',
  },
  {
    value: 'art-26-t-tobacco',
    label: 'موضوع بند ت ماده ۲۶ قانون مالیات بر ارزش افزوده (دخانیات)',
  },
];

function MultiSelectDropdown({
  ariaLabel,
  options,
  values,
  onChange,
}: {
  ariaLabel: string;
  options: Option[];
  values: string[];
  onChange: (next: string[]) => void;
}) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      const el = rootRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, []);

  const toggle = (value: string) => {
    if (values.includes(value)) onChange(values.filter((v) => v !== value));
    else onChange([...values, value]);
  };

  const displayText = values.length
    ? options
        .filter((o) => values.includes(o.value))
        .map((o) => o.label)
        .join('، ')
    : '—';

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm flex items-center justify-between"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="truncate">{displayText}</span>
        <span className="shrink-0 text-gray-500">▾</span>
      </button>

      {open ? (
        <div className="absolute z-50 mt-1 w-full rounded border border-gray-200 bg-white shadow-lg max-h-64 overflow-y-auto">
          {options.map((opt) => {
            const checked = values.includes(opt.value);
            return (
              <label
                key={opt.value}
                className="flex items-center justify-between px-3 py-2 text-sm cursor-pointer hover:bg-gray-50"
              >
                <span className="text-gray-700">{opt.label}</span>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(opt.value)}
                  className="h-4 w-4"
                />
              </label>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

type Row = {
  depositOrNumber: string;
  billIdentifier: string;
  trackingCode: string;
  billType: string;
  yearPeriod: string;
  status: string;
  amountRial: string;
  source: string;
  registrationDate: string;
  confirmDate: string;
  paymentDate: string;
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
    key: 'row',
    label: 'ردیف',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (_row, index) => index + 1,
  },
  {
    key: 'billType',
    label: 'نوع',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.billType,
  },
  {
    key: 'yearPeriod',
    label: 'سال و دوره',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.yearPeriod,
  },
  {
    key: 'status',
    label: 'وضعیت',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.status,
  },
  {
    key: 'amountRial',
    label: 'مبلغ قبض (ریال)',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.amountRial,
  },
  {
    key: 'source',
    label: 'منبع',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.source,
  },
  {
    key: 'registrationDate',
    label: 'تاریخ ثبت',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.registrationDate,
  },
  {
    key: 'trackingCode',
    label: 'کد رهگیری',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.trackingCode,
  },
  {
    key: 'billIdentifier',
    label: 'شناسه قبض',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.billIdentifier,
  },
  {
    key: 'depositOrNumber',
    label: 'شناسه واریز ۳۰ رقمی',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.depositOrNumber,
  },
  {
    key: 'paymentDate',
    label: 'تاریخ پرداخت قبض',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.paymentDate,
  },
  {
    key: 'confirmDate',
    label: 'تاریخ تأیید قبض',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.confirmDate,
  },
  {
    key: 'actions',
    label: 'اقدامات',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: () => <span className="text-gray-400 select-none">—</span>,
  },
];

// «ردیف» باید در جدول باشد، ولی در آیتم‌های نمایش ستون‌ها نمایش داده نشود
const columnsForVisibilityBar = columnsConfig.filter((c) => c.key !== 'row');

const columnLabels: Record<string, string> = columnsForVisibilityBar.reduce(
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

export default function ModianTaxBillsPage() {
  const [showColsOpen, setShowColsOpen] = React.useState(false);
  const [issueModalOpen, setIssueModalOpen] = React.useState(false);
  const [issueForm, setIssueForm] = React.useState({
    billType: '',
    source: '',
    yearPeriod: '',
    amountRial: '',
  });
  const [colsVisible, setColsVisible] = React.useState<Record<string, boolean>>(
    () => ({ ...defaultColsVisible }),
  );
  const [rows, setRows] = React.useState<Row[]>([]);
  const [filters, setFilters] = React.useState({
    billType: [] as string[],
    status: [] as string[],
    yearPeriod: '',
  });

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(TAX_BILLS_STORAGE_KEY);
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
      (s) => ({
        ...s,
        ...Object.keys(columnLabels).reduce(
          (a, k) => {
            a[k] = true;
            return a;
          },
          {} as Record<string, boolean>,
        ),
      }),
    );

  const setDefaultCols = () => {
    setColsVisible(() => ({ ...defaultColsVisible }));
  };

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: اتصال به API «صدور قبوض مالیاتی»
    console.log('filters (tax-bills)', filters);
  };

  const onClearFilters = () => {
    setFilters({ billType: [], status: [], yearPeriod: '' });
  };

  React.useEffect(() => {
    if (!issueModalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [issueModalOpen]);

  const onOpenIssueModal = () => {
    setIssueForm({ billType: '', source: '', yearPeriod: '', amountRial: '' });
    setIssueModalOpen(true);
  };

  const onCloseIssueModal = () => setIssueModalOpen(false);

  const onSubmitIssueModal = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: در مراحل بعدی: ارسال اطلاعات صدور قبض
    onCloseIssueModal();
  };

  return (
    <div className="space-y-4 mx-auto w-full max-w-[1200px] px-4">
      <h1 className="text-xl md:text-2xl font-bold">{PAGE_TITLE}</h1>

      {/* کادر جستجو مثل سامانه اصلی */}
      <form
        onSubmit={onSearch}
        className="rounded-md border border-gray-200 bg-white p-4"
      >
        <FieldGrid cols={3} className="gap-2">
          {/* ترتیب معکوس نسبت به حالت فعلی (در RTL، این یکی سمت راست می‌نشیند) */}
          <FormField label="سال و دوره" variant="floating">
            <select
              aria-label="سال و دوره"
              className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm"
              value={filters.yearPeriod}
              onChange={(e) =>
                setFilters((s) => ({ ...s, yearPeriod: e.target.value }))
              }
            >
              <option value="">—</option>
              {YEAR_PERIOD_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="وضعیت" variant="floating">
            <MultiSelectDropdown
              ariaLabel="وضعیت"
              options={STATUS_OPTIONS}
              values={filters.status}
              onChange={(next) => setFilters((s) => ({ ...s, status: next }))}
            />
          </FormField>

          <FormField label="نوع" variant="floating">
            <MultiSelectDropdown
              ariaLabel="نوع"
              options={BILL_TYPE_OPTIONS}
              values={filters.billType}
              onChange={(next) => setFilters((s) => ({ ...s, billType: next }))}
            />
          </FormField>
        </FieldGrid>

        <div className="mt-4 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClearFilters}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            حذف فیلتر
          </button>
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            جستجو
          </button>
        </div>
      </form>

      {/* نوار ابزار بالای جدول (چپ: صدور قبض / راست: نمایش ستون‌ها) */}
      <div className="flex items-center justify-between">
        <div className="relative flex items-center gap-2">
          <button
            type="button"
            title="نمایش ستون‌ها"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-2"
            onClick={() => setShowColsOpen((v) => !v)}
          >
            <ColumnsIcon className="h-5 w-5" />
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
          onClick={onOpenIssueModal}
        >
          صدور قبض
        </button>
      </div>

      <ColumnsVisibilityBar
        open={showColsOpen}
        columnLabels={columnLabels}
        colsVisible={colsVisible}
        onToggleCol={toggleCol}
        onShowAllCols={showAllCols}
        onSetDefaultCols={setDefaultCols}
      />

      {/* جدول */}
      {isEmpty ? (
        <div className="w-full overflow-hidden rounded-md border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-[#d1f7f5ff] text-gray-700">
              <tr>
                {visibleColumns.map((col) => (
                  <th key={col.key} className={col.headerClassName}>
                    {col.label}
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
                  <th key={col.key} className={col.headerClassName}>
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t">
                  {visibleColumns.map((col) => (
                    <td key={col.key} className={col.cellClassName}>
                      {col.renderCell(r, i)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollableTableShell>
      )}

      {/* مودال صدور قبض (اسکلت) */}
      {issueModalOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="صدور قبوض مالیاتی"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onCloseIssueModal();
          }}
        >
          <div className="w-full max-w-4xl rounded-md bg-white shadow-xl">
            <div className="px-6 pt-6">
              <h2 className="text-lg font-bold text-right">صدور قبوض مالیاتی</h2>
            </div>

            <form onSubmit={onSubmitIssueModal} className="px-6 pb-6 pt-4">
              <FieldGrid cols={3} className="gap-3">
                <FormField label="سال و دوره" variant="floating">
                  <select
                    aria-label="سال و دوره"
                    className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm"
                    value={issueForm.yearPeriod}
                    onChange={(e) =>
                      setIssueForm((s) => ({ ...s, yearPeriod: e.target.value }))
                    }
                  >
                    <option value="">—</option>
                    {YEAR_PERIOD_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="منبع" variant="floating">
                  <select
                    aria-label="منبع"
                    className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm"
                    value={issueForm.source}
                    onChange={(e) =>
                      setIssueForm((s) => ({ ...s, source: e.target.value }))
                    }
                  >
                    <option value="">—</option>
                    {SOURCE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="نوع" variant="floating">
                  <select
                    aria-label="نوع"
                    className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm"
                    value={issueForm.billType}
                    onChange={(e) =>
                      setIssueForm((s) => ({ ...s, billType: e.target.value }))
                    }
                  >
                    <option value="">—</option>
                    {BILL_TYPE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </FormField>
              </FieldGrid>

              <div className="mt-4 border-t border-gray-200 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FormField label="مبلغ قبض" variant="floating">
                    <div className="flex items-center w-full h-10 rounded border border-gray-300 bg-white overflow-hidden">
                      <input
                        aria-label="مبلغ قبض"
                        className="flex-1 h-full px-2 text-sm outline-none"
                        value={issueForm.amountRial}
                        onChange={(e) =>
                          setIssueForm((s) => ({ ...s, amountRial: e.target.value }))
                        }
                      />
                      <div className="h-full px-3 flex items-center border-l border-gray-300 text-sm text-gray-700">
                        ریال
                      </div>
                    </div>
                  </FormField>
                  <div />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-2">                
                <button
                  type="button"
                  onClick={onCloseIssueModal}
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                  ثبت
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
