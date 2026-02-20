//src/app/simulators/modian/requests/increase-sales-limit/page.tsx
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

const PAGE_TITLE = 'افزایش حد مجاز فروش';
const STORAGE_KEY = 'modian.requests.increase-sales-limit';

type Option = { value: string; label: string };

// فعلاً برای اسکلت، همان لیست سال/دوره‌ی موجود در صفحات مشابه استفاده می‌شود
const YEAR_PERIOD_OPTIONS: Option[] = [
  { value: '1404-winter', label: 'زمستان ۱۴۰۴' },
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

const REQUEST_TYPE_OPTIONS: Option[] = [
  { value: 'cash-payment', label: 'پرداخت-نقدی' },
  { value: 'provide-guarantee', label: 'ارائه تضمین' },
];

const GUARANTEE_TYPE_OPTIONS: Option[] = [
  { value: 'sayad-cashable', label: 'چک صیادی (بنفش رنگ)' },
  { value: 'electronic-check', label: 'چک الکترونیکی' },
  { value: 'bank-guarantee', label: 'ضمانت بانکی' },
  { value: 'bank-collateral', label: 'وثیقه بانکی' },
  { value: 'bank-deposit', label: 'ارائه تضمین (سپرده بانکی)' },
];

const DISABLED_GUARANTEE_TYPE_VALUES = new Set([
  'bank-guarantee',
  'bank-collateral',
  'bank-deposit',
]);
const STATUS_OPTIONS: Option[] = [
  { value: 'waiting-payment', label: 'در انتظار پرداخت' },
  { value: 'waiting-approve', label: 'در انتظار تایید' },
  { value: 'approved', label: 'تایید شده' },
  { value: 'rejected', label: 'رد شده' },
  { value: 'expired', label: 'منقضی شده' },
  { value: 'partially-approved', label: 'بخشی تایید شده' },
];

const PROBABLE_SALES_RATE_OPTIONS: Option[] = [
  { value: 'general-10', label: '۱۰٪ - عمومی - ماده ۷ قانون مالیات بر ارزش افزوده' },
  {
    value: 'gasoline-airfuel-30',
    label: '۳۰٪ - بنزین و سوخت هواپیما - جزءا بند الف ماده ۲۶ قانون مالیات بر ارزش افزوده',
  },
  {
    value: 'kerosene-dieseloil-15',
    label: '۱۵٪ - نفت سفید نفت گاز - جزء۲ بند الف ماده ۲۶ قانون مالیات بر ارزش افزوده',
  },
  { value: 'gold-10', label: '۱۰٪ - طلا - جزء۲ بند ب ماده ۲۶ قانون مالیات بر ارزش افزوده' },
  { value: 'soda-16', label: '۱۶٪ - نوشابه - بند پ ماده ۲۶ قانون مالیات بر ارزش افزوده' },
  { value: 'soda-36', label: '۳۶٪ - نوشابه - بند پ ماده ۲۶ قانون مالیات بر ارزش افزوده' },
  { value: 'tobacco-45', label: '۴۵٪ - دخانیات - جزءا بند ت ماده ۲۶ قانون مالیات بر ارزش افزوده' },
  { value: 'tobacco-60', label: '۶۰٪ - دخانیات - جزء۲ بند ت ماده ۲۶ قانون مالیات بر ارزش افزوده' },
  { value: 'tobacco-85', label: '۸۵٪ - دخانیات - جزء۳ بند ت ماده ۲۶ قانون مالیات بر ارزش افزوده' },
  { value: 'tobacco-30', label: '۳۰٪ - دخانیات - جزء۴ بند ت ماده ۲۶ قانون مالیات بر ارزش افزوده' },
  { value: 'tobacco-55', label: '۵۵٪ - دخانیات - جزء۵ بند ت ماده ۲۶ قانون مالیات بر ارزش افزوده' },
];

const normalizeDigits = (input: string) =>
  input
    .replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));

const parseRial = (input: string) => {
  const digitsOnly = normalizeDigits(input).replace(/[^\d]/g, '');
  if (!digitsOnly) return 0;
  const n = Number.parseInt(digitsOnly, 10);
  return Number.isFinite(n) ? n : 0;
};

const getProbableSalesRatePercent = (value: string) => {
  const opt = PROBABLE_SALES_RATE_OPTIONS.find((o) => o.value === value);
  if (!opt) return null;
  const m = opt.label.match(/^([^٪]+)٪/);
  if (!m) return null;
  const num = Number.parseInt(normalizeDigits(m[1]).replace(/[^\d]/g, ''), 10);
  return Number.isFinite(num) ? num : null;
};

const pad2 = (n: number) => String(n).padStart(2, '0');

const getComputedCheckDateByYearPeriod = (yearPeriod: string) => {
  // format: "YYYY-season" مثل "1404-winter"
  const [yearRaw, seasonRaw] = yearPeriod.split('-');
  const year = Number.parseInt(normalizeDigits(yearRaw || '').replace(/[^\d]/g, ''), 10);
  const season = seasonRaw as 'spring' | 'summer' | 'fall' | 'winter';
  if (!Number.isFinite(year) || !season) return '';

  const nextSeason: Record<typeof season, typeof season> = {
    spring: 'summer',
    summer: 'fall',
    fall: 'winter',
    winter: 'spring',
  };
  const nextYear = season === 'winter' ? year + 1 : year;
  const ns = nextSeason[season];

  // ماه دومِ فصل بعد: بهار=2، تابستان=5، پاییز=8، زمستان=11
  const secondMonthOfSeason: Record<typeof ns, number> = {
    spring: 2,
    summer: 5,
    fall: 8,
    winter: 11,
  };
  const month = secondMonthOfSeason[ns];
  const lastDay = month <= 6 ? 31 : 30; // ماه 2/5 => 31 ، ماه 8/11 => 30

  return `${nextYear}/${pad2(month)}/${pad2(lastDay)}`;
};

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
  year: string;
  period: string;
  requestType: string;
  requestStatus: string;
  amountRial: string;
  trackingCode: string;
  registrationDate: string;
  billIdentifier: string;
  source: string;
  sayadIdentifier: string;
  lastUpdateDate: string;
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
    key: 'year',
    label: 'سال',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.year,
  },
  {
    key: 'period',
    label: 'دوره',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.period,
  },
  {
    key: 'requestType',
    label: 'نوع درخواست',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.requestType,
  },
  {
    key: 'requestStatus',
    label: 'وضعیت درخواست',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.requestStatus,
  },
  {
    key: 'amountRial',
    label: 'مبلغ درخواست(ریال)',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.amountRial,
  },
  {
    key: 'trackingCode',
    label: 'کد رهگیری',
    defaultVisible: true,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.trackingCode,
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
    key: 'lastUpdateDate',
    label: 'تاریخ آخرین بروزرسانی',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.lastUpdateDate,
  },
  {
    key: 'sayadIdentifier',
    label: 'شناسه صیاد',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.sayadIdentifier,
  },
  {
    key: 'source',
    label: 'منبع',
    defaultVisible: false,
    headerClassName: COMMON_HEADER_CLASS,
    cellClassName: COMMON_CELL_CLASS,
    renderCell: (row) => row.source,
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

export default function IncreaseSalesLimitPage() {
  const [showColsOpen, setShowColsOpen] = React.useState(false);
  const [colsVisible, setColsVisible] = React.useState<Record<string, boolean>>(
    () => ({ ...defaultColsVisible }),
  );
  const [createModalOpen, setCreateModalOpen] = React.useState(false);
  const [createModalStep, setCreateModalStep] = React.useState<1 | 2 | 3 | 4 | 5>(1);
  const [createForm, setCreateForm] = React.useState({
    requestType: 'cash-payment',
    yearPeriod: '1404-winter',
  });
  const [guaranteeForm, setGuaranteeForm] = React.useState({
    guaranteeType: '',
  });
  const [cashPaymentForm, setCashPaymentForm] = React.useState({
    paidAmountRial: '',
    probableSalesRate: '',
    increaseAmountRial: '',
  });
  const [checkDetailsForm, setCheckDetailsForm] = React.useState({
    sayadIdentifier: '',
    checkAmountRial: '',
    checkDate: '',
  });
  const [checkDetailsErrors, setCheckDetailsErrors] = React.useState({
    sayadIdentifier: '',
  });

  const computedCheckDate = React.useMemo(
    () => getComputedCheckDateByYearPeriod(createForm.yearPeriod),
    [createForm.yearPeriod],
  );

  const computedPaidAmountRial = React.useMemo(() => {
    const increase = parseRial(cashPaymentForm.increaseAmountRial);
    const percent = getProbableSalesRatePercent(cashPaymentForm.probableSalesRate);
    if (!increase || !percent) return '';
    const paid = Math.floor((increase * percent) / 100);
    return String(paid);
  }, [cashPaymentForm.increaseAmountRial, cashPaymentForm.probableSalesRate]);

  React.useEffect(() => {
    if (!computedCheckDate) return;
    setCheckDetailsForm((s) => {
      if (s.checkDate === computedCheckDate) return s;
      return { ...s, checkDate: computedCheckDate };
    });
  }, [computedCheckDate]);

  React.useEffect(() => {
    setCashPaymentForm((s) => {
      if (s.paidAmountRial === computedPaidAmountRial) return s;
      return { ...s, paidAmountRial: computedPaidAmountRial };
    });
  }, [computedPaidAmountRial]);

  const selectedYearPeriodLabel =
    YEAR_PERIOD_OPTIONS.find((o) => o.value === createForm.yearPeriod)?.label ||
    createForm.yearPeriod ||
    '—';
  const selectedRequestTypeLabel =
    REQUEST_TYPE_OPTIONS.find((o) => o.value === createForm.requestType)?.label ?? '—';
  const selectedGuaranteeTypeLabel =
    GUARANTEE_TYPE_OPTIONS.find((o) => o.value === guaranteeForm.guaranteeType)?.label ?? '—';
  const selectedProbableSalesRateLabel =
    PROBABLE_SALES_RATE_OPTIONS.find((o) => o.value === cashPaymentForm.probableSalesRate)?.label ?? '';
  const selectedSourceText = selectedProbableSalesRateLabel
    ? selectedProbableSalesRateLabel.split(' - ').slice(1).join(' - ')
    : '—';
  const formattedIncreaseAmountRial = React.useMemo(() => {
    const n = parseRial(cashPaymentForm.increaseAmountRial);
    if (!n) return '—';
    return new Intl.NumberFormat('fa-IR').format(n);
  }, [cashPaymentForm.increaseAmountRial]);

  const formattedCheckAmountRial = React.useMemo(() => {
    const n = parseRial(checkDetailsForm.checkAmountRial);
    if (!n) return '—';
    return new Intl.NumberFormat('fa-IR').format(n);
  }, [checkDetailsForm.checkAmountRial]);
  const [filters, setFilters] = React.useState({
    yearPeriod: '',
    requestType: [] as string[],
    status: [] as string[],
  });

  const [rows, setRows] = React.useState<Row[]>([]);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
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
    setColsVisible((s) => ({
      ...s,
      ...Object.keys(columnLabels).reduce(
        (a, k) => {
          a[k] = true;
          return a;
        },
        {} as Record<string, boolean>,
      ),
    }));

  const setDefaultCols = () => setColsVisible(() => ({ ...defaultColsVisible }));

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: اتصال به API درخواست «افزایش حد مجاز فروش»
    console.log('filters (increase-sales-limit)', filters);
  };

  const onClearFilters = () => setFilters({ yearPeriod: '', requestType: [], status: [] });

  const onCreateRequest = () => {
    setCreateForm({ requestType: 'cash-payment', yearPeriod: '1404-winter' });
    setCreateModalStep(1);
    setGuaranteeForm({ guaranteeType: '' });
    setCheckDetailsForm({
      sayadIdentifier: '',
      checkAmountRial: '',
      checkDate: getComputedCheckDateByYearPeriod('1404-winter'),
    });
    setCheckDetailsErrors({ sayadIdentifier: '' });
    setCreateModalOpen(true);
  };

  React.useEffect(() => {
    if (!createModalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [createModalOpen]);

  const onCloseCreateModal = () => {
    setCreateModalOpen(false);
    setCreateModalStep(1);
  };

  const onSubmitCreateModal = (e: React.FormEvent) => {
    e.preventDefault();
    // مرحله دوم برای «پرداخت نقدی» و «ارائه تضمین» نمایش داده شود
    setCreateModalStep(2);
  };

  return (
    <div className="space-y-4 mx-auto w-full max-w-[1200px] px-4">
      <h1 className="text-xl md:text-2xl font-bold">{PAGE_TITLE}</h1>

      {/* نوار اطلاع‌رسانی */}
      <div className="rounded border border-blue-200 bg-blue-100 px-4 py-3 text-sm text-gray-700 flex items-center gap-2">
        <span aria-hidden="true">ℹ️</span>
        <span>
          برای ثبت چک در سامانه صیاد از شناسه ملی <span className="font-medium">۱۴۰۰۰۱۸۷۵۰۹</span> به نام وزارت
          امور اقتصادی و دارایی استفاده نمایید.
        </span>
      </div>

      {/* فیلترها */}
      <form onSubmit={onSearch} className="rounded-md border border-gray-200 bg-white p-4">
        <FieldGrid cols={3} className="gap-2">
          <FormField label="سال و دوره" variant="floating">
            <select
              aria-label="سال و دوره"
              className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm"
              value={filters.yearPeriod}
              onChange={(e) => setFilters((s) => ({ ...s, yearPeriod: e.target.value }))}
            >
              <option value="">—</option>
              {YEAR_PERIOD_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="نوع درخواست" variant="floating">
            <MultiSelectDropdown
              ariaLabel="نوع درخواست"
              options={REQUEST_TYPE_OPTIONS}
              values={filters.requestType}
              onChange={(next) => setFilters((s) => ({ ...s, requestType: next }))}
            />
          </FormField>

          <FormField label="وضعیت" variant="floating">
            <MultiSelectDropdown
              ariaLabel="وضعیت"
              options={STATUS_OPTIONS}
              values={filters.status}
              onChange={(next) => setFilters((s) => ({ ...s, status: next }))}
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

      {/* نوار ابزار بالای جدول */}
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
          onClick={onCreateRequest}
          className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
        >
          ثبت درخواست
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

      {/* مودال ثبت درخواست (مرحله اول - اسکلت) */}
      {createModalOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="افزایش حد مجاز فروش"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onCloseCreateModal();
          }}
        >
          {createModalStep === 1 ? (
            <div className="w-full max-w-xl min-h-[280px] rounded-md bg-white shadow-xl">
              <div className="px-6 pt-6 pb-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-right">افزایش حد مجاز فروش</h2>
              </div>

              <form onSubmit={onSubmitCreateModal} className="px-6 pb-6 pt-8">
                <div className="space-y-5">
                  {/* ردیف: نوع درخواست */}
                  <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-4">
                    <div className="text-sm text-gray-700 whitespace-nowrap">نوع درخواست</div>
                    <div className="flex items-center gap-10">
                      <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                        <input
                          type="radio"
                          name="requestType"
                          value="cash-payment"
                          checked={createForm.requestType === 'cash-payment'}
                          onChange={() =>
                            setCreateForm((s) => ({ ...s, requestType: 'cash-payment' }))
                          }
                          className="h-4 w-4 accent-green-600"
                        />
                        پرداخت نقدی
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                        <input
                          type="radio"
                          name="requestType"
                          value="provide-guarantee"
                          checked={createForm.requestType === 'provide-guarantee'}
                          onChange={() =>
                            setCreateForm((s) => ({ ...s, requestType: 'provide-guarantee' }))
                          }
                          className="h-4 w-4 accent-green-600"
                        />
                        ارائه تضمین
                      </label>
                    </div>
                  </div>

                  {/* ردیف: سال و دوره */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm text-gray-700 whitespace-nowrap">سال و دوره</div>
                    <div className="flex items-center gap-10">
                      <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                        <input
                          type="radio"
                          name="yearPeriod"
                          value="1404-winter"
                          checked={createForm.yearPeriod === '1404-winter'}
                          onChange={() =>
                            setCreateForm((s) => ({ ...s, yearPeriod: '1404-winter' }))
                          }
                          className="h-4 w-4 accent-green-600"
                        />
                        زمستان ۱۴۰۴
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                        <input
                          type="radio"
                          name="yearPeriod"
                          value="1404-fall"
                          checked={createForm.yearPeriod === '1404-fall'}
                          onChange={() =>
                            setCreateForm((s) => ({ ...s, yearPeriod: '1404-fall' }))
                          }
                          className="h-4 w-4 accent-green-600"
                        />
                        پاییز ۱۴۰۴
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={onCloseCreateModal}
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    انصراف
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                  >
                    ادامه
                  </button>
                </div>
              </form>
            </div>
          ) : createModalStep === 2 ? (
            <div className="w-full max-w-4xl rounded-md bg-white shadow-xl">
              <div className="px-6 pt-6 pb-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-right">
                  ماشین محاسبه حد مجاز فروش درخواستی بابت زمستان 1404
                </h2>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (createForm.requestType === 'cash-payment') {
                    setCreateModalStep(3);
                    return;
                  }

                  // حالت «ارائه تضمین»: اگر چک صیادی/چک الکترونیکی انتخاب شد، به مودال «مشخصات چک» برو
                  if (
                    createForm.requestType === 'provide-guarantee' &&
                    (guaranteeForm.guaranteeType === 'sayad-cashable' ||
                      guaranteeForm.guaranteeType === 'electronic-check')
                  ) {
                    setCheckDetailsForm((s) => ({
                      ...s,
                      checkAmountRial: cashPaymentForm.paidAmountRial || '',
                      checkDate: computedCheckDate || s.checkDate,
                    }));
                    setCreateModalStep(4);
                  }
                }}
                className="px-6 pb-6 pt-8"
              >
                {createForm.requestType === 'provide-guarantee' ? (
                  <div className="mb-6 flex items-start justify-start">
                    <div className="w-full max-w-[320px]">
                      <FormField label="نوع ارائه تضمین" variant="floating">
                        <div className="relative">
                          <select
                            aria-label="نوع ارائه تضمین"
                            className="w-full h-10 rounded border border-gray-300 bg-white pr-10 pl-10 px-2 text-sm appearance-none"
                            value={guaranteeForm.guaranteeType}
                            onChange={(e) =>
                              setGuaranteeForm((s) => {
                                const next = e.target.value;
                                if (DISABLED_GUARANTEE_TYPE_VALUES.has(next)) return s;
                                return { ...s, guaranteeType: next };
                              })
                            }
                          >
                            <option value="">—</option>
                            {GUARANTEE_TYPE_OPTIONS.map((opt) => (
                              <option
                                key={opt.value}
                                value={opt.value}
                                disabled={DISABLED_GUARANTEE_TYPE_VALUES.has(opt.value)}
                              >
                                {opt.label}
                              </option>
                            ))}
                          </select>

                          {/* آیکن‌ها داخل فیلد (مشابه اسکرین) */}
                          <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500">
                            <span aria-hidden="true">▾</span>
                            {guaranteeForm.guaranteeType ? (
                              <button
                                type="button"
                                aria-label="پاک کردن نوع ارائه تضمین"
                                className="leading-none"
                                onClick={() => setGuaranteeForm({ guaranteeType: '' })}
                              >
                                ×
                              </button>
                            ) : null}
                          </div>
                        </div>
                      </FormField>
                    </div>
                  </div>
                ) : null}

                <div className="flex items-center gap-4">
                  {/* مبلغ پرداختی (سمت راست) */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between w-full h-10 rounded border border-dashed border-gray-300 bg-gray-50 px-3">
                      <span className="text-base text-gray-400 text-right">مبلغ پرداختی</span>
                      <div
                        className="flex items-center justify-start text-left gap-1 text-sm font-medium text-green-600"
                        dir="ltr"
                      >
                        <span>ریال</span>
                        <span className="text-base tabular-nums">
                          {cashPaymentForm.paidAmountRial || ''}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-2xl font-bold text-green-600 select-none">=</span>

                  {/* نرخ احتمالی فروش (وسط) */}
                  <div className="flex-1">
                    <FormField label="نرخ احتمالی فروش" variant="floating">
                      <select
                        aria-label="نرخ احتمالی فروش"
                        className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm"
                        value={cashPaymentForm.probableSalesRate}
                        onChange={(e) =>
                          setCashPaymentForm((s) => ({
                            ...s,
                            probableSalesRate: e.target.value,
                          }))
                        }
                      >
                        <option value="">—</option>
                        {PROBABLE_SALES_RATE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  <span className="text-2xl font-bold text-green-600 select-none">×</span>

                  {/* مبلغ افزایش حد مجاز درخواست (سمت چپ) */}
                  <div className="flex-1">
                    <FormField label="مبلغ افزایش حد مجاز درخواست" variant="floating">
                      <div className="flex items-center w-full h-10 rounded border border-gray-300 bg-white overflow-hidden">
                        <input
                          aria-label="مبلغ افزایش حد مجاز درخواست"
                          className="flex-1 h-full px-2 text-sm outline-none"
                          value={cashPaymentForm.increaseAmountRial}
                          onChange={(e) =>
                            setCashPaymentForm((s) => ({
                              ...s,
                              increaseAmountRial: e.target.value,
                            }))
                          }
                        />
                        <div className="h-full px-3 flex items-center border-l border-gray-300 text-sm text-gray-700">
                          ریال
                        </div>
                      </div>
                    </FormField>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={onCloseCreateModal}
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    انصراف
                  </button>
                  <button
                    type="button"
                    onClick={() => setCreateModalStep(1)}
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    قبلی
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                  >
                    ادامه
                  </button>
                </div>
              </form>
            </div>
          ) : createModalStep === 4 ? (
            <div className="w-full max-w-3xl rounded-md bg-white shadow-xl">
              <div className="px-6 pt-6 pb-4 text-start">
                <h2 className="text-lg font-bold">مشخصات چک</h2>
              </div>

              {/* نوار اطلاع‌رسانی */}
              <div className="mx-6 rounded border border-blue-200 bg-blue-100 px-4 py-3 text-sm text-gray-700 flex items-center gap-2">
                <span aria-hidden="true">ℹ️</span>
                <span>
                  برای ثبت چک در سامانه صیاد از شناسه ملی <span className="font-medium">۱۴۰۰۰۱۸۷۵۰۹</span> به نام وزارت
                  امور اقتصادی و دارایی استفاده نمایید.
                </span>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const sayadDigits = normalizeDigits(checkDetailsForm.sayadIdentifier).replace(
                    /[^\d]/g,
                    '',
                  );
                  if (sayadDigits.length < 16) {
                    setCheckDetailsErrors((s) => ({
                      ...s,
                      sayadIdentifier: 'این فیلد حداقل ۱۶ کاراکتر داشته باشد.',
                    }));
                    return;
                  }
                  setCreateModalStep(5);
                }}
                className="px-6 pb-6 pt-6"
              >
                <div className="space-y-5">
                  <FormField label="شناسه صیاد" variant="floating">
                    <input
                      aria-label="شناسه صیاد"
                      className={`w-full h-10 rounded border bg-white px-2 text-sm ${
                        checkDetailsErrors.sayadIdentifier
                          ? 'border-red-500'
                          : 'border-gray-300'
                      }`}
                      inputMode="numeric"
                      pattern="\d*"
                      maxLength={16}
                      aria-invalid={Boolean(checkDetailsErrors.sayadIdentifier)}
                      aria-describedby={
                        checkDetailsErrors.sayadIdentifier ? 'sayad-identifier-error' : undefined
                      }
                      value={checkDetailsForm.sayadIdentifier}
                      onChange={(e) =>
                        setCheckDetailsForm((s) => {
                          const next = normalizeDigits(e.target.value)
                            .replace(/[^\d]/g, '')
                            .slice(0, 16);
                          if (next.length === 16) {
                            setCheckDetailsErrors((errs) => ({ ...errs, sayadIdentifier: '' }));
                          }
                          return { ...s, sayadIdentifier: next };
                        })
                      }
                    />
                  </FormField>
                  {checkDetailsErrors.sayadIdentifier ? (
                    <div
                      id="sayad-identifier-error"
                      className="-mt-3 flex items-center gap-2 text-xs text-red-600"
                    >
                      <span aria-hidden="true">⚠</span>
                      <span>{checkDetailsErrors.sayadIdentifier}</span>
                    </div>
                  ) : null}

                  <FormField label="مبلغ چک" variant="floating">
                    <div dir="ltr" className="flex items-center w-full h-10 rounded border border-gray-300 bg-white overflow-hidden">
                      <div className="h-full px-3 flex items-center border-gray-300 text-sm text-gray-700 bg-white">
                        ریال
                      </div>
                      <input
                        aria-label="مبلغ چک"
                        dir="ltr"
                        className="flex-1 h-full px-2 text-sm outline-none text-right tabular-nums"
                        value={checkDetailsForm.checkAmountRial}
                        onChange={(e) =>
                          setCheckDetailsForm((s) => ({ ...s, checkAmountRial: e.target.value }))
                        }
                      />
                    </div>
                  </FormField>

                  <FormField label="تاریخ چک" variant="floating">
                    <input
                      aria-label="تاریخ چک"
                      className="w-full h-10 rounded border border-gray-300 bg-white px-2 text-sm text-gray-400"
                      placeholder="۱۴۰۴/۰۷/۳۱"
                      value={checkDetailsForm.checkDate}
                      readOnly
                    />
                  </FormField>
                </div>

                <div className="mt-6 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={onCloseCreateModal}
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    انصراف
                  </button>
                  <button
                    type="button"
                    onClick={() => setCreateModalStep(2)}
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    قبلی
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                  >
                    ادامه
                  </button>
                </div>
              </form>
            </div>
          ) : createModalStep === 5 ? (
            <div className="w-full max-w-2xl rounded-md bg-white shadow-xl">
              <div className="px-6 pt-6 pb-4 text-start">
                <h2 className="text-lg font-bold">بررسی نهایی</h2>
              </div>

              <div className="px-6 pb-6 text-start text-sm text-gray-700">
                آیا از ثبت درخواست افزایش حد مجازتان با اطلاعات زیر اطمینان دارید؟
              </div>

              <div className="px-6 pb-2">
                <div className="grid grid-cols-2 gap-10 text-sm">
                  <div className="space-y-6 text-right">
                    <div>
                      <div className="text-gray-500">نوع درخواست</div>
                      <div className="mt-1 font-medium text-gray-800">{selectedRequestTypeLabel}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">مبلغ افزایش حد مجاز درخواستی</div>
                      <div className="mt-1 font-bold text-green-600 tabular-nums">
                        {formattedIncreaseAmountRial}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">سال و دوره</div>
                      <div className="mt-1 font-medium text-gray-800">{selectedYearPeriodLabel}</div>                      
                    </div> 
                    <div>                                      
                      <div className="text-gray-500">تاریخ چک</div>
                      <div className="mt-1 font-medium text-gray-800 tabular-nums">{checkDetailsForm.checkDate || '—'}</div>                          
                    </div>
                  </div>

                  <div className="space-y-6 text-right">
                    <div>
                      <div className="text-gray-500">نوع ارائه تضمین</div>
                      <div className="mt-1 font-medium text-gray-800">{selectedGuaranteeTypeLabel}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">مبلغ چک (ریال)</div>
                      <div className="mt-1 font-medium text-gray-800 tabular-nums">{formattedCheckAmountRial}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">شناسه صیاد</div>
                      <div className="mt-1 font-medium text-gray-800 tabular-nums">
                        {checkDetailsForm.sayadIdentifier || '—'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-6 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onCloseCreateModal}
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  انصراف
                </button>
                <button
                  type="button"
                  onClick={() => setCreateModalStep(4)}
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  قبلی
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // TODO: ثبت نهایی درخواست (فعلاً اسکلت)
                    console.log('final review (increase-sales-limit / guarantee)', {
                      createForm,
                      guaranteeForm,
                      cashPaymentForm,
                      checkDetailsForm,
                    });
                  }}
                  className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                  ادامه
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-2xl rounded-md bg-white shadow-xl">
              <div className="px-6 pt-6 pb-4 text-start">
                <h2 className="text-lg font-bold">بررسی نهایی</h2>
              </div>

              <div className="px-6 pb-2 text-start text-sm text-gray-700">
                <div>آیا از ثبت درخواست افزایش حد مجازتان با اطلاعات زیر اطمینان دارید؟</div>
                <div className="mt-1 text-xs text-start text-gray-500">
                  (مبلغ پرداختی در تسویه بدهی منبع {selectedSourceText} منظور میگردد)
                </div>
              </div>

              <div className="px-6 pt-4">
                <div className="grid grid-cols-3 gap-6 text-sm">
                  <div className="text-right">
                    <div className="text-gray-500">سال و دوره</div>
                    <div className="mt-1 font-medium text-gray-800">{selectedYearPeriodLabel}</div>
                  </div>

                  <div className="text-right">
                    <div className="text-gray-500">نوع درخواست</div>
                    <div className="mt-1 font-medium text-gray-800">{selectedRequestTypeLabel}</div>
                  </div>

                  <div className="text-right">
                    <div className="text-gray-500">مبلغ افزایش حد مجاز درخواستی</div>
                    <div className="mt-1 font-bold text-green-600 tabular-nums">{formattedIncreaseAmountRial}</div>
                  </div>

                  <div className="col-span-3 text-right mt-2">
                    <div className="text-gray-500">منبع</div>
                    <div className="mt-1 font-medium text-gray-800">{selectedSourceText}</div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-6 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onCloseCreateModal}
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  انصراف
                </button>
                <button
                  type="button"
                  onClick={() => setCreateModalStep(2)}
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  قبلی
                </button>                
                <button
                  type="button"
                  onClick={() => {
                    // TODO: ثبت نهایی درخواست (فعلاً اسکلت)
                    console.log('final review (increase-sales-limit)', {
                      createForm,
                      cashPaymentForm,
                      sourceText: selectedSourceText,
                    });
                  }}
                  className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                  ادامه
                </button>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

