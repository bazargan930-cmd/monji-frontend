// src/app/simulators/modian/contracts/contracting/new/page.tsx

'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

// eslint-disable-next-line no-restricted-imports -- rule فعلاً این Barrel را هم محدود کرده؛ موقت تا اصلاح Rule سراسری
import {
  ContractsContractDateField,
  ContractsContractTypeField,
} from '@/components/modian/common/search';
// eslint-disable-next-line no-restricted-imports -- rule فعلاً این Barrel را هم محدود کرده؛ موقت تا اصلاح Rule سراسری
import { EmptyTableRow } from '@/components/modian/common/table';
import Stepper from '@/components/Stepper';

type Role = 'employer' | 'contractor';

const STEPS = [
  { key: 'role', label: 'تعیین نقش' },
  { key: 'identity', label: 'اطلاعات هویتی' },
  { key: 'counterparty', label: 'اطلاعات تکمیلی طرف مقابل' },
  { key: 'typeDate', label: 'نوع و تاریخ قرارداد' },
  { key: 'contractInfo', label: 'اطلاعات قرارداد' },
  { key: 'finalConfirm', label: 'تایید نهایی' },
];

const CONTRACTING_STORAGE_KEY = 'modian.contracting.contracts';
export default function ModianContractsContractingNewPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(0);
  const [role, setRole] = React.useState<Role>('employer');
  const counterpartyLabel = role === 'employer' ? 'پیمانکار' : 'کارفرما';
  const selfRoleLabel = role === 'employer' ? 'کارفرما' : 'پیمانکار';
  const [showCancelModal, setShowCancelModal] = React.useState(false);
  const [useIdentityAndPostalMode, setUseIdentityAndPostalMode] =
    React.useState(false);
  const [personType, setPersonType] = React.useState('');
  const [economicCode, setEconomicCode] = React.useState('');
  const [economicCodeErrorMessage, setEconomicCodeErrorMessage] =
    React.useState('');
  const [showMonjiInfoModal, setShowMonjiInfoModal] =
    React.useState(false);
  const [monjiMode, setMonjiMode] = React.useState<'flow' | 'pre'>('flow');
  const identityMonjiShownOnceRef = React.useRef(false);
  const [registeredUsersChecked, setRegisteredUsersChecked] =
    React.useState(false);
  const [registeredUsersMode, setRegisteredUsersMode] = React.useState(false);
  const [registeredCaseConfirmed, setRegisteredCaseConfirmed] =
    React.useState(false);
  const monjiInfoModalDisabledRef = React.useRef(false);
  const [showEconomicCodeModal, setShowEconomicCodeModal] =
    React.useState(false);
  const [showIdentityResultModal, setShowIdentityResultModal] =
    React.useState(false);
  const [showEconomicCodeToast, setShowEconomicCodeToast] =
    React.useState(false);
  const [showVat18EmployerToast, setShowVat18EmployerToast] =
    React.useState(false);
  const [toastProgressActive, setToastProgressActive] = React.useState(false);
  const [toastCycle, setToastCycle] = React.useState(0);
  const [monjiContext, setMonjiContext] =
    React.useState<'economic' | 'identity' | null>(null);
  const [nationalOrForeignId, setNationalOrForeignId] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  const [
    nationalOrForeignIdErrorMessage,
    setNationalOrForeignIdErrorMessage,
  ] = React.useState('');
  const [postalCodeErrorMessage, setPostalCodeErrorMessage] =
    React.useState('');
  const [legalId, setLegalId] = React.useState('');
  const [legalIdErrorMessage, setLegalIdErrorMessage] = React.useState('');
  const [partnershipId, setPartnershipId] = React.useState('');
  const [partnershipIdErrorMessage, setPartnershipIdErrorMessage] =
    React.useState('');

  const [contractorMobile, setContractorMobile] = React.useState('');
  const [contractorMobileErrorMessage, setContractorMobileErrorMessage] =
    React.useState('');
  const [contractorFullName, setContractorFullName] = React.useState('');
  const [contractorEconomicCode, setContractorEconomicCode] =
    React.useState('');
  const [contractorTradeName, setContractorTradeName] = React.useState('');
  const [contractorAddress, setContractorAddress] = React.useState('');

  const [employerType, setEmployerType] = React.useState('');
  const [contractType, setContractType] = React.useState('');
  const [contractTypeErrorMessage, setContractTypeErrorMessage] =
    React.useState('');
  const [contractDate, setContractDate] = React.useState('');
  const [contractDateErrorMessage, setContractDateErrorMessage] =
    React.useState('');
  // مرحله پنجم: اطلاعات قرارداد
  const [contractTotalAmountRial, setContractTotalAmountRial] = React.useState('');
  const [contractTotalAmountRialErrorMessage, setContractTotalAmountRialErrorMessage] =
    React.useState('');
  const [contractStartDateDisplay, setContractStartDateDisplay] = React.useState('');
  const [contractStartDateShown, setContractStartDateShown] = React.useState('');
  const [contractStartDateErrorMessage, setContractStartDateErrorMessage] =
    React.useState('');
  const [contractEstimatedEndDateDisplay, setContractEstimatedEndDateDisplay] =
    React.useState('');
  const [contractEstimatedEndDateShown, setContractEstimatedEndDateShown] =
    React.useState('');
  const [contractTitle, setContractTitle] = React.useState('');
  const [contractInternalNo, setContractInternalNo] = React.useState('');
  const [contractDescription, setContractDescription] = React.useState('');

  // فیلدهای شرطی برای «قرارداد حجمی تامین نیروی انسانی»
  const [humanResourceCount, setHumanResourceCount] = React.useState('');
  const [humanResourceCountErrorMessage, setHumanResourceCountErrorMessage] =
    React.useState('');
  const [humanResourceWageReferenceRial, setHumanResourceWageReferenceRial] =
    React.useState('');

  // مودال: ثبت پیش‌پرداخت و علی‌الحساب (اسکلت)
  const [showAdvancePaymentModal, setShowAdvancePaymentModal] =
    React.useState(false);
  const [advancePaymentAmountRial, setAdvancePaymentAmountRial] =
    React.useState('');
  const [advancePaymentDateDisplay, setAdvancePaymentDateDisplay] =
    React.useState('');
  const [advancePaymentType, setAdvancePaymentType] = React.useState('');
  const [advancePaymentSayadId, setAdvancePaymentSayadId] = React.useState('');
  const [advancePaymentUniquePaymentId, setAdvancePaymentUniquePaymentId] =
    React.useState('');
  const [advancePayments, setAdvancePayments] = React.useState<
    Array<{
      amountRial: string;
      dateISO: string;
      type: string;
      sayadId: string;
      uniquePaymentId: string;
    }>
  >([]);
  // متن نمایشی تاریخِ انتخاب‌شده (همان چیزی که کاربر در فیلد تاریخ می‌بیند)
  const [contractDateDisplay, setContractDateDisplay] = React.useState('');
  // برای خواندن مقدار input داخلی کامپوننت تاریخ
  const contractDateFieldRef = React.useRef<HTMLDivElement | null>(null);
  const contractStartDateFieldRef = React.useRef<HTMLDivElement | null>(null);
  const contractEstimatedEndDateFieldRef = React.useRef<HTMLDivElement | null>(
    null,
  );
  const advancePaymentDateFieldRef = React.useRef<HTMLDivElement | null>(null);

  const [showContractsInquiryPanel, setShowContractsInquiryPanel] =
    React.useState(false);

  const [showContractsInquiryFilters, setShowContractsInquiryFilters] =
    React.useState(false);
  const [inquiryContractNo, setInquiryContractNo] = React.useState('');
  const [inquiryContractStatus, setInquiryContractStatus] = React.useState('');
  const [inquiryAmountFrom, setInquiryAmountFrom] = React.useState('');
  const [inquiryAmountTo, setInquiryAmountTo] = React.useState('');

  const [errors, setErrors] = React.useState<Record<string, boolean>>({});

  // وقتی با «قبلی/بعدی» بین مراحل جابجا می‌شویم، ممکن است فیلد قبلاً مقدار داشته باشد
  // ولی خطای اجباری بودن از قبل روی state مانده باشد (بدون اینکه onChange اجرا شود).
  // اینجا اگر مقدار وجود دارد، خطا و پیام را پاک می‌کنیم.
  React.useEffect(() => {
    if (currentStep === 3) {
      const hasType = Boolean((contractType || '').trim());
      const hasDate = Boolean((contractDate || contractDateDisplay || '').trim());

      if (hasType && errors.contractType) {
        setErrors((prev) => ({ ...prev, contractType: false }));
      }
      if (hasDate && errors.contractDate) {
        setErrors((prev) => ({ ...prev, contractDate: false }));
      }
      if (hasType) setContractTypeErrorMessage('');
      if (hasDate) setContractDateErrorMessage('');
    }

    if (currentStep === 4) {
      const hasTotal = Boolean((contractTotalAmountRial || '').trim());
      const hasStart = Boolean((contractStartDateDisplay || '').trim());

      const isVolumeHumanResource =
        (contractType || '').trim() === 'volume_human_resource' ||
        (contractType || '').trim() === 'قرارداد حجمی تامین نیروی انسانی';
      const hasHumanCount = Boolean((humanResourceCount || '').trim());

      if (hasTotal && errors.contractTotalAmountRial) {
        setErrors((prev) => ({ ...prev, contractTotalAmountRial: false }));
      }
      if (hasStart && errors.contractStartDate) {
        setErrors((prev) => ({ ...prev, contractStartDate: false }));
      }
      if (isVolumeHumanResource && hasHumanCount && errors.humanResourceCount) {
        setErrors((prev) => ({ ...prev, humanResourceCount: false }));
      }
      if (hasTotal) setContractTotalAmountRialErrorMessage('');
      if (hasStart) setContractStartDateErrorMessage('');
      if (isVolumeHumanResource && hasHumanCount) setHumanResourceCountErrorMessage('');
    }
  }, [
    currentStep,
    contractType,
    contractDate,
    contractDateDisplay,
    contractTotalAmountRial,
    contractStartDateDisplay,
    humanResourceCount,
    errors.contractType,
    errors.contractDate,
    errors.contractTotalAmountRial,
    errors.contractStartDate,
    errors.humanResourceCount,
  ]);

  const validateContractInfoRequiredFields = () => {
    const nextErrors: Record<string, boolean> = {};

    const totalAmount = (contractTotalAmountRial || '').trim();
    const startDate = (contractStartDateDisplay || '').trim();
    const isVolumeHumanResource =
      (contractType || '').trim() === 'volume_human_resource' ||
      (contractType || '').trim() === 'قرارداد حجمی تامین نیروی انسانی';
    const countValue = (humanResourceCount || '').trim();

    if (!totalAmount) {
      nextErrors.contractTotalAmountRial = true;
      setContractTotalAmountRialErrorMessage('پرکردن فیلد اجباری است.');
    }

    if (!startDate) {
      nextErrors.contractStartDate = true;
      setContractStartDateErrorMessage('پرکردن فیلد اجباری است.');
    }

    if (isVolumeHumanResource && !countValue) {
      nextErrors.humanResourceCount = true;
      setHumanResourceCountErrorMessage('پرکردن فیلد اجباری است.');
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...nextErrors }));
      return false;
    }

    return true;
  };


  const resolveContractTypeLabel = (value: string) => {
    const v = (value || '').trim();
    if (!v) return '';
    // اگر مقدار فارسی باشد، همان را برگردان
    if (/[\u0600-\u06FF]/.test(v)) return v;

    // کلیدهای شناخته‌شده طبق گزینه‌های UI
    if (v === 'volume_human_resource') return 'قرارداد حجمی تامین نیروی انسانی';
    if (v === 'other_contracts') return 'سایر قراردادهای پیمانکاری';

    return v;
  };

  const resolveEmployerTypeLabel = (value: string) => {
    const v = (value || '').trim();
    if (!v) return '';
    if (v === 'article_18_vat') return 'کارفرما موضوع ماده 18 قانون ارزش افزوده';
    if (v === 'other_employers') return 'سایر کارفرماها';
    return v;
  };

  const toLatinDigits = React.useCallback(
    (input: string) =>
      (input || '')
        .replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
        .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d))),
    [],
  );

  // تبدیل تاریخ جلالی (yyyy/mm/dd) به تاریخ میلادی جهت مقایسه‌های زمانی
  const jalaliToGregorian = (jy: number, jm: number, jd: number) => {
    const jDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    const gDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const jy2 = jy - 979;
    const jm2 = jm - 1;
    const jd2 = jd - 1;

    let jDayNo =
      365 * jy2 +
      Math.floor(jy2 / 33) * 8 +
      Math.floor(((jy2 % 33) + 3) / 4);

    for (let i = 0; i < jm2; ++i) jDayNo += jDaysInMonth[i];
    jDayNo += jd2;

    let gDayNo = jDayNo + 79;

    let gy = 1600 + 400 * Math.floor(gDayNo / 146097);
    gDayNo %= 146097;

    let leap = true;
    if (gDayNo >= 36525) {
      gDayNo--;
      gy += 100 * Math.floor(gDayNo / 36524);
      gDayNo %= 36524;

      if (gDayNo >= 365) gDayNo++;
      else leap = false;
    }

    gy += 4 * Math.floor(gDayNo / 1461);
    gDayNo %= 1461;

    if (gDayNo >= 366) {
      leap = false;
      gDayNo--;
      gy += Math.floor(gDayNo / 365);
      gDayNo %= 365;
    }

    let i = 0;
    for (
      i = 0;
      gDayNo >= gDaysInMonth[i] + (i === 1 && leap ? 1 : 0);
      i++
    ) {
      gDayNo -= gDaysInMonth[i] + (i === 1 && leap ? 1 : 0);
    }

    const gm = i + 1;
    const gd = gDayNo + 1;

    return { gy, gm, gd };
  };

  const parsePersianOrISODateToDate = (raw: string) => {
    const v = toLatinDigits((raw || '').trim());
    if (!v) return null;

    // ISO (yyyy-mm-dd)
    if (/^\d{4}-\d{2}-\d{2}/.test(v) && !v.startsWith('0000-')) {
      const iso = v.slice(0, 10);
      const d = new Date(iso);
      if (!Number.isNaN(d.getTime())) return d;
    }

    // جلالی (yyyy/mm/dd یا yyyy-mm-dd)
    const m = v.match(/^(\d{4})[/-](\d{2})[/-](\d{2})$/);
    if (!m) return null;

    const jy = Number(m[1]);
    const jm = Number(m[2]);
    const jd = Number(m[3]);

    if (
      Number.isNaN(jy) ||
      Number.isNaN(jm) ||
      Number.isNaN(jd) ||
      jy < 1200 ||
      jy > 1600 ||
      jm < 1 ||
      jm > 12 ||
      jd < 1 ||
      jd > 31
    )
      return null;

    const g = jalaliToGregorian(jy, jm, jd);
    const d = new Date(Date.UTC(g.gy, g.gm - 1, g.gd));
    if (!Number.isNaN(d.getTime())) return d;

    return null;
  };

  const isNewerOrEqualToOneMonthAgo = (d: Date) => {
    const now = new Date();
    const oneMonthAgoUtc = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
    );
    oneMonthAgoUtc.setUTCMonth(oneMonthAgoUtc.getUTCMonth() - 1);

    const targetUtc = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    return targetUtc >= oneMonthAgoUtc.getTime();
  };

  const formatISOToJalali = React.useCallback((iso: string) => {
    const v = (iso || '').trim();
    if (!v) return '';

    const vLatin = toLatinDigits(v);

    // 1) تاریخ شمسی (با یا بدون تایم). مثال: 1404/09/23 یا 1404-09-23T...
    const jalaliLike = vLatin.match(/^(\d{4})[-/](\d{2})[-/](\d{2})(?:\b|T)/);
    if (jalaliLike) {
      const year = Number(jalaliLike[1]);
      if (year >= 1300 && year <= 1499) {
        return `${jalaliLike[1]}/${jalaliLike[2]}/${jalaliLike[3]}`;
      }
    }

    // 2) تاریخ ISO گرگوری (به‌صورت سخت‌گیرانه فقط yyyy-mm-dd را می‌گیریم)
    const gregIso = vLatin.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (gregIso) {
      const y = Number(gregIso[1]);
      const m = Number(gregIso[2]);
      const d = Number(gregIso[3]);

      if (
        Number.isFinite(y) &&
        Number.isFinite(m) &&
        Number.isFinite(d) &&
        m >= 1 &&
        m <= 12 &&
        d >= 1 &&
        d <= 31
      ) {
        const date = new Date(Date.UTC(y, m - 1, d));
        try {
          return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'UTC',
          }).format(date);
        } catch {
          return v;
        }
      }
    }

    try {
      return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'UTC',
      }).format(new Date(vLatin));
    } catch {
      return v;
    }
  }, [toLatinDigits]);

  const extractShownJalaliFromDateField = (host: HTMLDivElement | null) => {
    if (!host) return '';

    const inputs = Array.from(host.querySelectorAll('input')) as HTMLInputElement[];
    const visibleInput =
      inputs.find(
        (i) =>
          i.type !== 'hidden' &&
          (i.offsetParent !== null || i.getClientRects().length > 0),
      ) ?? null;

    const inputShown = (visibleInput?.value ?? '').trim();
    if (inputShown) return inputShown;

    const text = (host.innerText ?? '').trim();
    const m = text.match(
      /([0-9۰-۹]{4})[/-]([0-9۰-۹]{2})[/-]([0-9۰-۹]{2})/,
    );
    return m ? `${m[1]}/${m[2]}/${m[3]}` : '';
  };

  const extractISOFromDateField = (host: HTMLDivElement | null) => {
    if (!host) return '';

    const inputs = Array.from(
      host.querySelectorAll('input'),
    ) as HTMLInputElement[];

    // اولویت: input hidden (خیلی از DatePickerها مقدار ISO واقعی را اینجا نگه می‌دارند)
    const hidden = inputs.find((i) => i.type === 'hidden' && i.value) ?? null;
    const hiddenValue = (hidden?.value ?? '').trim();
    if (/^\d{4}-\d{2}-\d{2}/.test(hiddenValue) && !hiddenValue.startsWith('0000-')) {
      return hiddenValue;
    }

    // fallback: هر input دیگری که مقدار ISO قابل‌قبول داشته باشد
    for (const input of inputs) {
      const v = (input.value ?? '').trim();
      if (/^\d{4}-\d{2}-\d{2}/.test(v) && !v.startsWith('0000-')) return v;
    }

    return '';
  };

  const formatISOToJalaliSafe = React.useCallback((value: string) => {
    const v = (value || '').trim();
    if (!v) return '';
    // جلوگیری از نمایش تاریخ‌های منفی ناشی از خروجی‌های نامعتبر مثل 0000-...
    if (v.startsWith('0000-') || v.startsWith('0000/')) return '';
    return formatISOToJalali(v);
  }, [formatISOToJalali]);

  // قانون min-date:
  // تاریخ‌های «تاریخ شروع قرارداد» باید از «تاریخ عقد قرارداد» به بعد قابل انتخاب باشند.
  // برای عدم وابستگی به فایل‌های دیگر، min تاریخ را روی window و بر اساس id فیلد ذخیره می‌کنیم
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const minJalali = (
      (contractDateDisplay || '') ||
      (contractDate ? formatISOToJalaliSafe(contractDate) : '')
    ).trim();

    const w = window as unknown as {
      __monjiMinJalaliById?: Record<string, string>;
    };

    w.__monjiMinJalaliById = {
      ...(w.__monjiMinJalaliById ?? {}),
      contractStartDate: minJalali,
    };
  }, [contractDate, contractDateDisplay, formatISOToJalaliSafe]);

  const getStoredContracts = React.useCallback(() => {
    try {
      const raw = localStorage.getItem(CONTRACTING_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }, []);

  const generateMonjiEconomicCode = () => {
    const random7 = Math.floor(Math.random() * 10_000_000)
      .toString()
      .padStart(7, '0');
    return `1020${random7}`;
  };

  const generateNextMonjiCompanyName = () => {
    const rows = getStoredContracts();
    let maxIndex = 0;

    for (const row of rows) {
      const a = String(row?.employerName ?? '').trim();
      const b = String(row?.contractorName ?? '').trim();
      for (const name of [a, b]) {
        const m = name.match(/^شرکت منجی(\d+)$/);
        if (m) {
          const n = Number(m[1]);
          if (Number.isFinite(n) && n > maxIndex) maxIndex = n;
        }
      }
    }

    return `شرکت منجی${maxIndex + 1}`;
  };

  const inquiryResults = React.useMemo(() => {
    if (!showContractsInquiryPanel) return [];

    const targetType = (resolveContractTypeLabel(contractType) || '').trim();
    const targetDate =
      (contractDateDisplay || '').trim() ||
      (contractDate ? formatISOToJalaliSafe(contractDate) : '');
    const targetDateNormalized = toLatinDigits(targetDate).trim();

    const noFilter = (inquiryContractNo || '').trim();
    const statusFilter = (inquiryContractStatus || '').trim();
    const amountFrom = Number((inquiryAmountFrom || '').trim() || 0);
    const amountToRaw = (inquiryAmountTo || '').trim();
    const amountTo = amountToRaw ? Number(amountToRaw) : null;

    return getStoredContracts()
      .filter((row) => {
        const rowType = (row?.contractType || '').trim();
        const rowDateRaw = (row?.contractDate || '').trim();
        const rowDate = rowDateRaw ? formatISOToJalaliSafe(rowDateRaw) : '';
        const rowDateNormalized = toLatinDigits(rowDate).trim();

        if (targetType && rowType && rowType !== targetType) return false;
        if (targetDateNormalized && rowDateNormalized && rowDateNormalized !== targetDateNormalized)
          return false;

        if (noFilter && String(row?.contractNo || '').trim() !== noFilter)
          return false;

        if (
          statusFilter &&
          String(row?.contractStatus || '').trim() !== statusFilter
        )
          return false;

        const total = Number(
          String(row?.totalAmount || '').replace(/\D/g, '') || 0,
        );
        if (amountFrom && total < amountFrom) return false;
        if (amountTo != null && total > amountTo) return false;

        return true;
      });
  }, [
    showContractsInquiryPanel,
    contractType,
    contractDate,
    contractDateDisplay,
    inquiryContractNo,
    inquiryContractStatus,
    inquiryAmountFrom,
    inquiryAmountTo,
    getStoredContracts,
    toLatinDigits,
    formatISOToJalaliSafe,
  ]);
  // مقدار نهایی برای کنترل DateField:
  // اولویت با ISO معتبر است؛ اگر نبود، تاریخ جلالی (yyyy/mm/dd) را نگه می‌داریم تا هم نمایش و هم ولیدیشن درست شود.
  const normalizeDateForField = (raw: string, isoFromDom: string, shown: string) => {
    const r = (raw || '').trim();
    if (isoFromDom) return isoFromDom;
    if (/^\d{4}-\d{2}-\d{2}/.test(r) && !r.startsWith('0000-')) return r;
    const jalaliLike = r.match(/^(\d{4})[-/](\d{2})[-/](\d{2})/);
    if (jalaliLike) {
      const y = Number(jalaliLike[1]);
      if (y >= 1300 && y <= 1499) {
        return `${jalaliLike[1]}/${jalaliLike[2]}/${jalaliLike[3]}`;
      }
    }
    const s = (shown || '').trim();
    return s || '';
  };

  // برای ثابت‌شدن عمودی مودال نسبت به کارت اصلی
    const cardRef = React.useRef<HTMLDivElement | null>(null);
  const [economicModalTop, setEconomicModalTop] = React.useState<number | null>(
    null,
  );
  // محاسبه موقعیت عمودی مودال‌های نتیجه نسبت به کارت اصلی
  React.useEffect(() => {
    if (!showEconomicCodeModal && !showIdentityResultModal) return;

    const updatePosition = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const targetTop = rect.top + rect.height * 0.18;
      setEconomicModalTop(targetTop);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [showEconomicCodeModal, showIdentityResultModal]);

  // کنترل انیمیشن نوار توست ۶ ثانیه‌ای
  React.useEffect(() => {
    const toastVisible = showEconomicCodeToast || showVat18EmployerToast;
    if (!toastVisible) return;

    setToastProgressActive(false);

    const rafId = window.requestAnimationFrame(() => {
      setToastProgressActive(true);
    });

    const timer = window.setTimeout(() => {
      setShowEconomicCodeToast(false);
      setShowVat18EmployerToast(false);
      setToastProgressActive(false);
    }, 6000);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timer);
    };
  }, [toastCycle, showEconomicCodeToast, showVat18EmployerToast]);

  // ریست «اولین کلیک» پیام منجی با خروج از مرحله «اطلاعات هویتی»
  React.useEffect(() => {
    if (currentStep !== 1) identityMonjiShownOnceRef.current = false;
  }, [currentStep]);
  const handleCancelClick = () => {
    setShowCancelModal(true);
  };

  const handleCancelConfirm = () => {
    setShowCancelModal(false);
    router.push('/simulators/modian/contracts/contracting');
  };

  const handleMonjiInfoConfirm = () => {
    setShowMonjiInfoModal(false);

    // اگر پیام منجی با «اولین کلیک» در مرحله اطلاعات هویتی باز شده باشد،
    // فقط بسته شود و وارد سناریوهای بعدی نشویم.
    if (monjiMode === 'pre') {
      if (registeredUsersChecked) {
        const code = generateMonjiEconomicCode();
        const name = generateNextMonjiCompanyName();

        setRegisteredUsersMode(true);
        setRegisteredCaseConfirmed(false);
        setEconomicCode(code);
        setContractorEconomicCode(code);
        setContractorFullName(name);

        // اگر کاربر «ثبت نام شدگان» را انتخاب کند، پیام منجی دیگر نمایش داده نشود
        monjiInfoModalDisabledRef.current = true;
        setMonjiMode('flow');
        return;
      }
      if (!registeredUsersChecked) {
        monjiInfoModalDisabledRef.current = true;
      }
      setMonjiMode('flow');
      return;
    }

    // اگر کاربر «ثبت نام شدگان» را انتخاب کرده باشد، بدون نمایش توست/مودال‌های خطا
    // به مرحله بعدی برویم و اطلاعات ساختگی را جایگذاری کنیم.
    if (registeredUsersChecked) {
      const code = generateMonjiEconomicCode();
      const name = generateNextMonjiCompanyName();

      setRegisteredUsersMode(true);
      setRegisteredCaseConfirmed(false);
      setEconomicCode(code);
      setContractorEconomicCode(code);
      setContractorFullName(name);

      monjiInfoModalDisabledRef.current = true;
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
      return;
    }

    // شروع نمایش توست ۶ ثانیه‌ای برای هر دو سناریو
    setToastCycle((prev) => prev + 1);
    setShowEconomicCodeToast(true);

    if (monjiContext === 'economic') {
      // نتیجه جستجو بر اساس شماره اقتصادی پیمانکار
      setShowEconomicCodeModal(true);
    } else if (monjiContext === 'identity') {
      // نتیجه جستجو بر اساس شناسه هویتی و کدپستی
      setShowIdentityResultModal(true);
    }
  };
  const validateCurrentStep = () => {
    const nextErrors: Record<string, boolean> = {};

    // ریست پیام‌های خطای فیلدهای شناسه/کدپستی در هر بار ولیدیشن
    setNationalOrForeignIdErrorMessage('');
    setPostalCodeErrorMessage('');
    setLegalIdErrorMessage('');
    setPartnershipIdErrorMessage('');
    setContractorMobileErrorMessage('');
    setContractTypeErrorMessage('');
    setContractDateErrorMessage('');
    setContractTotalAmountRialErrorMessage('');
    setContractStartDateErrorMessage('');
    setHumanResourceCountErrorMessage('');

    if (currentStep === 1) {
      if (!useIdentityAndPostalMode) {
        const length = economicCode.trim().length;
        if (length === 0) {
          nextErrors.economicCode = true;
          setEconomicCodeErrorMessage('پرکردن فیلد اجباری است.');
        } else if (length < 11) {
          nextErrors.economicCode = true;
          setEconomicCodeErrorMessage('مقدار وارد شده غیر مجاز است.');
        }
      } else {
        if (!personType) {
          nextErrors.personType = true;
        }

        if (
          personType === 'حقیقی غیر ایرانی' ||
          personType === 'حقیقی ایرانی'
        ) {
          const idValue = nationalOrForeignId.trim();
          const postalValue = postalCode.trim();

          // ولیدیشن شناسه (شماره فراگیر / شماره ملی)
          if (!idValue) {
            nextErrors.nationalOrForeignId = true;
            setNationalOrForeignIdErrorMessage('پرکردن فیلد اجباری است.');
          } else if (
            personType === 'حقیقی غیر ایرانی' &&
            idValue.length < 12
          ) {
            nextErrors.nationalOrForeignId = true;
            setNationalOrForeignIdErrorMessage(
              'مقدار وارد شده باید ۱۲ رقمی باشد.',
            );
          } else if (
            personType === 'حقیقی ایرانی' &&
            idValue.length < 10
          ) {
            // (فعلاً برای ایرانی هم ۱۰ رقم درنظر گرفتیم)
            nextErrors.nationalOrForeignId = true;
            setNationalOrForeignIdErrorMessage(
              'مقدار وارد شده باید ۱۰ رقمی باشد.',
            );
          }

          // ولیدیشن کدپستی (هر دو حالت ۱۰ رقم)
          if (!postalValue) {
            nextErrors.postalCode = true;
            setPostalCodeErrorMessage('پرکردن فیلد اجباری است.');
          } else if (postalValue.length < 10) {
            nextErrors.postalCode = true;
            setPostalCodeErrorMessage('مقدار وارد شده باید ۱۰ رقمی باشد.');
          }
        }

        if (personType === 'حقوقی') {
          const value = legalId.trim();
          if (!value) {
            nextErrors.legalId = true;
            setLegalIdErrorMessage('پرکردن فیلد اجباری است.');
          } else if (value.length < 11) {
            nextErrors.legalId = true;
            setLegalIdErrorMessage('مقدار وارد شده باید ۱۱ رقمی باشد.');
          }
        }

        if (personType === 'مشارکت مدنی') {
          const value = partnershipId.trim();
          if (!value) {
            nextErrors.partnershipId = true;
            setPartnershipIdErrorMessage('پرکردن فیلد اجباری است.');
          } else if (value.length < 11) {
            nextErrors.partnershipId = true;
            setPartnershipIdErrorMessage(
              'مقدار وارد شده باید ۱۱ رقمی باشد.',
            );
          }
        }
      }
    }

    if (currentStep === 4) {
      const totalAmount = (contractTotalAmountRial || '').trim();
      const startDate = (contractStartDateDisplay || '').trim();
      const isVolumeHumanResource =
        (contractType || '').trim() === 'volume_human_resource' ||
        (contractType || '').trim() === 'قرارداد حجمی تامین نیروی انسانی';
      const countValue = (humanResourceCount || '').trim();

      if (!totalAmount) {
        nextErrors.contractTotalAmountRial = true;
        setContractTotalAmountRialErrorMessage('پرکردن فیلد اجباری است.');
      }

      if (!startDate) {
        nextErrors.contractStartDate = true;
        setContractStartDateErrorMessage('پرکردن فیلد اجباری است.');
      }

      if (isVolumeHumanResource && !countValue) {
        nextErrors.humanResourceCount = true;
        setHumanResourceCountErrorMessage('پرکردن فیلد اجباری است.');
      }
    }

    if (currentStep === 2) {
      // اگر در حالت «ثبت نام شدگان» هستیم، این مرحله فقط تایید پرونده است
      if (registeredUsersMode) {
        if (!registeredCaseConfirmed) {
          nextErrors.registeredCaseConfirmed = true;
        }
      } else {
      if (
          personType === 'حقیقی غیر ایرانی' ||
          personType === 'حقیقی ایرانی' ||
          personType === 'حقوقی' ||
          personType === 'مشارکت مدنی'
        ) {
          const mobile = contractorMobile.trim();

          if (!mobile) {
            nextErrors.contractorMobile = true;
            setContractorMobileErrorMessage('پرکردن فیلد اجباری است.');
          } else if (mobile.length < 11) {
            nextErrors.contractorMobile = true;
            setContractorMobileErrorMessage('مقدار وارد شده غیرمجاز است.');
          }
        }
      }
    }

    if (currentStep === 3) {
      const typeValue = contractType.trim();
      const dateValue = contractDate.trim();

      if (!typeValue) {
        nextErrors.contractType = true;
        setContractTypeErrorMessage('پرکردن فیلد اجباری است.');
      }

      if (!dateValue) {
        nextErrors.contractDate = true;
        setContractDateErrorMessage('پرکردن فیلد اجباری است.');
      }
      // بررسی موفقیت اعتبارسنجی
        if (Object.keys(nextErrors).length === 0) {
          setContractTypeErrorMessage('');
          setContractDateErrorMessage('');
        }
    }

    if (!nextErrors.economicCode) {
      setEconomicCodeErrorMessage('');
    }

    if (!nextErrors.contractorMobile) {
      setContractorMobileErrorMessage('');
    }

    if (!nextErrors.contractType) {
      setContractTypeErrorMessage('');
    }

    if (!nextErrors.contractDate) {
      setContractDateErrorMessage('');
    }

    if (!nextErrors.contractTotalAmountRial) {
      setContractTotalAmountRialErrorMessage('');
    }

    if (!nextErrors.contractStartDate) {
      setContractStartDateErrorMessage('');
    }
    if (!nextErrors.humanResourceCount) {
      setHumanResourceCountErrorMessage('');
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleCancelClose = () => {
    setShowCancelModal(false);
  };

    const handleNextClick = () => {
    if (!validateCurrentStep()) return;
    // مرحله آخر: «تایید نهایی» -> ثبت خروجی و انتقال به لیست قراردادها
    if (currentStep === STEPS.length - 1) {
      const nextRow = {
        contractNo: `CN-${Date.now()}`,
        role: selfRoleLabel,
        employerEconomicCode: '—',
        contractorEconomicCode: '—',
        employerIdentityCode: '—',
        contractorIdentityCode: '—',
        employerName: role === 'contractor' ? (contractorFullName || '—') : '—',
        contractorName: role === 'employer' ? (contractorFullName || '—') : '—',
        contractType: resolveContractTypeLabel(contractType) || '—',
        internalContractNo: contractInternalNo || '—',
        contractDate:
          contractDateDisplay ||
          (contractDate ? formatISOToJalali(contractDate) : '—/—/—'),
        registrationDate: '—/—/—',
        totalAmount: contractTotalAmountRial || '—',
        contractSubject: '—',
        article18Responsibility: '—',
        contractStatus: 'در انتظار واکنش',
      };

      try {
        const raw = localStorage.getItem(CONTRACTING_STORAGE_KEY);
        const prev = raw ? JSON.parse(raw) : [];
        const next = Array.isArray(prev) ? prev : [];
        next.unshift(nextRow);
        localStorage.setItem(CONTRACTING_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // silent
      }

      router.push('/simulators/modian/contracts/contracting');
      return;
    }

    if (currentStep === 1) {
      // اگر «ثبت نام شدگان» فعال شده باشد، مستقیماً وارد مرحله بعد شویم
      if (registeredUsersMode) {
        setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
        return;
      }
      if (!useIdentityAndPostalMode) {
        const length = economicCode.trim().length;
        if (length >= 11 && length <= 14) {
          // اگر کاربر «ثبت نام شدگان» را انتخاب نکرده باشد و پیام منجی را یکبار دیده باشد،
          // دیگر پیام منجی نمایش داده نشود و مستقیم سناریو اجرا شود.
          if (monjiInfoModalDisabledRef.current) {
            setMonjiMode('flow');
            setMonjiContext('economic');
            setToastCycle((prev) => prev + 1);
            setShowEconomicCodeToast(true);
            setShowEconomicCodeModal(true);
            return;
          }

          // ابتدا پیام راهنمای منجی برای سناریوی شماره اقتصادی نمایش داده می‌شود
          setMonjiMode('flow');
          setMonjiContext('economic');
          setShowMonjiInfoModal(true);
          return;
        }
      } else {
        // سناریوی «ثبت با شناسه هویتی و کدپستی» پس از ورود صحیح اطلاعات
        if (monjiInfoModalDisabledRef.current) {
          setMonjiMode('flow');
          setMonjiContext('identity');
          setToastCycle((prev) => prev + 1);
          setShowEconomicCodeToast(true);
          setShowIdentityResultModal(true);
          return;
        }
        setMonjiMode('flow');
        setMonjiContext('identity');
        setShowMonjiInfoModal(true);
        return;
      }
    }

    if (currentStep === 3) {
      const isVat18 = (employerType || '').trim() === 'article_18_vat';
      if (isVat18) {
        const d =
          parsePersianOrISODateToDate(contractDate) ||
          parsePersianOrISODateToDate(contractDateDisplay);

          if (d && isNewerOrEqualToOneMonthAgo(d)) {
          setToastCycle((prev) => prev + 1);
          setShowVat18EmployerToast(true);
          return;
        }
      }
    }

    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  };

  const handlePrevClick = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const renderStepContent = () => {
    // مرحله اول: انتخاب نقش
    if (currentStep === 0) {
      return (
        <>
          <div className="mb-8 text-center">
            <p className="text-base md:text-lg text-gray-700">
              کدام گزینه بیان‌کننده نقش شما در قرارداد خواهد بود؟
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-[520px] flex-col gap-4">
            {/* گزینه کارفرما */}
            <label
              className={[
                'flex cursor-pointer items-center rounded-md border px-4 py-3 transition',
                role === 'employer'
                  ? 'border-green-600 bg-green-50'
                  : 'border-gray-300 bg-white hover:bg-gray-50',
              ].join(' ')}
            >
              <input
                type="radio"
                className="sr-only"
                checked={role === 'employer'}
                onChange={() => setRole('employer')}
              />
              <span className="ml-3 inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-400">
                {role === 'employer' && (
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                )}
              </span>
              <span className="text-sm md:text-base text-gray-800">
                کارفرما
              </span>
            </label>

            {/* گزینه پیمانکار */}
            <label
              className={[
                'flex cursor-pointer items-center rounded-md border px-4 py-3 transition',
                role === 'contractor'
                  ? 'border-green-600 bg-green-50'
                  : 'border-gray-300 bg-white hover:bg-gray-50',
              ].join(' ')}
            >
              <input
                type="radio"
                className="sr-only"
                checked={role === 'contractor'}
                onChange={() => setRole('contractor')}
              />
              <span className="ml-3 inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-400">
                {role === 'contractor' && (
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                )}
              </span>
              <span className="text-sm md:text-base text-gray-800">
                پیمانکار
              </span>
            </label>
          </div>
        </>
      );
    }

    // مرحله دوم: ثبت با شماره اقتصادی / یا شناسه هویتی و کدپستی «طرف مقابل»
    if (currentStep === 1) {
      // حالت پیش‌فرض: ثبت با شماره اقتصادی طرف مقابل
      if (!useIdentityAndPostalMode) {
        return (
          <div className="mt-4 flex flex-col items-center">
            <div className="mb-24 text-center">
              <p className="text-base md:text-lg font-medium text-gray-800">
              ثبت قرارداد با شماره اقتصادی {counterpartyLabel}
              </p>
            </div>

            <div className="w-full max-w-[360px]">
              <label className="relative block">
                <span
                  className={[
                    'pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs',
                    errors.economicCode ? 'text-red-600' : 'text-green-700',
                  ].join(' ')}
                >
                  شماره اقتصادی {counterpartyLabel}
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  className={[
                    'peer w-full rounded-md border px-4 py-3 text-center text-sm md:text-base text-gray-800 outline-none focus:ring-0',
                    errors.economicCode
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-green-600 focus:border-green-700',
                  ].join(' ')}
                  value={economicCode}
                  onChange={(e) => {
                    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 14);
                    setEconomicCode(digitsOnly);
                    if (errors.economicCode) {
                      setErrors((prev) => ({ ...prev, economicCode: false }));
                    }
                    if (economicCodeErrorMessage) {
                      setEconomicCodeErrorMessage('');
                    }
                  }}
                />
              </label>
              {errors.economicCode && economicCodeErrorMessage && (
                <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>{economicCodeErrorMessage}</span>
                </div>
              )}
              <div className="mt-3 flex items-center justify-start gap-2 text-sm text-green-700">
                <button
                  type="button"
                  className="border-b border-green-700 text-green-700 hover:text-green-800"
                  onClick={() => {
                    setUseIdentityAndPostalMode(true);
                    setErrors({});
                  }}
                >
                  ثبت قرارداد با شناسه هویتی و کدپستی
                </button>
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-black text-xs text-black text-bold">
                  !
                </span>
              </div>
            </div>
          </div>
        );
      }

      // حالت جایگزین: ثبت با شناسه هویتی و کدپستی
      return (
        <div className="mt-4 flex flex-col items-center">
          <div className="mb-4 text-center">
            <p className="text-base md:text-lg font-medium text-gray-800">
              ثبت قرارداد با شناسه هویتی و کدپستی
            </p>
          </div>

          <div className="mb-8 flex items-center justify-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400">
              <span className="relative block h-6 w-6">
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full border border-gray-500" />
                <span className="absolute left-1/2 bottom-0 h-3 w-5 -translate-x-1/2 rounded-full border border-gray-500 border-t-0" />
                <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2">
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gray-500" />
                  <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gray-500" />
                </span>
              </span>
            </span>
          </div>

          <div className="w-full max-w-[360px]">
            <label className="relative block">
              <span
                className={[
                  'pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs',
                  errors.personType ? 'text-red-600' : 'text-gray-700',
                ].join(' ')}
              >
                نوع شخص:
              </span>
              <select
                className={[
                  'peer w-full rounded-md border px-4 py-3 text-right text-sm md:text-base text-gray-800 outline-none focus:ring-0',
                  errors.personType
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-300 focus:border-green-700',
                ].join(' ')}
                value={personType}
                onChange={(e) => {
                  setPersonType(e.target.value);
                  if (errors.personType) {
                    setErrors((prev) => ({ ...prev, personType: false }));
                  }
                }}
              >
                <option value="" disabled>
                  انتخاب کنید
                </option>
                <option value="حقیقی غیر ایرانی">حقیقی غیر ایرانی</option>
                <option value="حقیقی ایرانی">حقیقی ایرانی</option>
                <option value="حقوقی">حقوقی</option>
                <option value="مشارکت مدنی">مشارکت مدنی</option>
              </select>
            </label>
            {errors.personType && (
              <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                    fill="currentColor"
                  />
                </svg>
                <span>پرکردن فیلد اجباری است.</span>
              </div>
            )}
            {(personType === 'حقیقی غیر ایرانی' ||
              personType === 'حقیقی ایرانی') && (
              <div className="mt-4 space-y-3">
                <label className="relative block">
                  <span
                    className={[
                      'pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs',
                      errors.nationalOrForeignId
                        ? 'text-red-600'
                        : 'text-gray-700',
                    ].join(' ')}
                  >
                    {personType === 'حقیقی غیر ایرانی'
                      ? 'شماره فراگیر اتباع غیر ایرانی:'
                      : 'شماره ملی'}
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    className={[
                      'peer w-full rounded-md border px-4 py-3 text-center text-sm md:text-base text-gray-800 outline-none focus:ring-0',
                      errors.nationalOrForeignId
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-green-600 focus:border-green-700',
                    ].join(' ')}
                    value={nationalOrForeignId}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/\D/g, '');
                      const maxLength =
                        personType === 'حقیقی غیر ایرانی' ? 12 : 10;
                      const digitsOnly = raw.slice(0, maxLength);
                      setNationalOrForeignId(digitsOnly);
                      if (errors.nationalOrForeignId) {
                        setErrors((prev) => ({
                          ...prev,
                          nationalOrForeignId: false,
                        }));
                      }
                      if (nationalOrForeignIdErrorMessage) {
                        setNationalOrForeignIdErrorMessage('');
                      }
                    }}
                  />
                </label>
                {errors.nationalOrForeignId && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>
                      {nationalOrForeignIdErrorMessage ||
                        'پرکردن فیلد اجباری است.'}
                    </span>
                  </div>
                )}

                <label className="relative block">
                  <span
                    className={[
                      'pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs',
                      errors.postalCode ? 'text-red-600' : 'text-gray-700',
                    ].join(' ')}
                  >
                    کد پستی:
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    className={[
                      'peer w-full rounded-md border px-4 py-3 text-center text-sm md:text-base text-gray-800 outline-none focus:ring-0',
                      errors.postalCode
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-green-600 focus:border-green-700',
                    ].join(' ')}
                    value={postalCode}
                    onChange={(e) => {
                      const digitsOnly = e.target.value
                        .replace(/\D/g, '')
                        .slice(0, 10);
                      setPostalCode(digitsOnly);
                      if (errors.postalCode) {
                        setErrors((prev) => ({ ...prev, postalCode: false }));
                      }
                      if (postalCodeErrorMessage) {
                        setPostalCodeErrorMessage('');
                      }
                    }}
                  />
                </label>
                {errors.postalCode && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>
                      {postalCodeErrorMessage || 'پرکردن فیلد اجباری است.'}
                    </span>
                  </div>
                )}
              </div>
            )}

            {personType === 'حقوقی' && (
              <div className="mt-4 space-y-3">
                <label className="relative block">
                  <span
                    className={[
                      'pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs',
                      errors.legalId ? 'text-red-600' : 'text-gray-700',
                    ].join(' ')}
                  >
                    شناسه ملی
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    className={[
                      'peer w-full rounded-md border px-4 py-3 text-center text-sm md:text-base text-gray-800 outline-none focus:ring-0',
                      errors.legalId
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-green-600 focus:border-green-700',
                    ].join(' ')}
                    value={legalId}
                    onChange={(e) => {
                      const digitsOnly = e.target.value
                        .replace(/\D/g, '')
                        .slice(0, 11);
                      setLegalId(digitsOnly);
                      if (errors.legalId) {
                        setErrors((prev) => ({ ...prev, legalId: false }));
                        }
                      if (legalIdErrorMessage) {
                        setLegalIdErrorMessage('');
                      }
                    }}
                  />
                </label>
                {errors.legalId && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>
                      {legalIdErrorMessage || 'پرکردن فیلد اجباری است.'}
                    </span>
                  </div>
                )}
              </div>
            )}

            {personType === 'مشارکت مدنی' && (
              <div className="mt-4 space-y-3">
                <label className="relative block">
                  <span
                    className={[
                      'pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs',
                      errors.partnershipId ? 'text-red-600' : 'text-gray-700',
                    ].join(' ')}
                  >
                    شناسه مشارکت مدنی
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    className={[
                      'peer w-full rounded-md border px-4 py-3 text-center text-sm md:text-base text-gray-800 outline-none focus:ring-0',
                      errors.partnershipId
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-green-600 focus:border-green-700',
                    ].join(' ')}
                    value={partnershipId}
                    onChange={(e) => {
                      const digitsOnly = e.target.value
                        .replace(/\D/g, '')
                        .slice(0, 11);
                      setPartnershipId(digitsOnly);
                      if (errors.partnershipId) {
                        setErrors((prev) => ({
                          ...prev,
                          partnershipId: false,
                        }));
                      }
                      if (partnershipIdErrorMessage) {
                        setPartnershipIdErrorMessage('');
                      }
                    }}
                  />
                </label>
                {errors.partnershipId && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>
                      {partnershipIdErrorMessage || 'پرکردن فیلد اجباری است.'}
                    </span>
                  </div>
                )}
              </div>
            )}
            <div className="mt-3 flex items-center justify-start text-sm text-green-700">
              <button
                type="button"
                className="border-b border-green-700 text-green-700 hover:text-green-800"
                onClick={() => {
                  setUseIdentityAndPostalMode(false);
                  setErrors({});
                }}
              >
                ثبت قرارداد با شماره اقتصادی {counterpartyLabel}
              </button>
            </div>
          </div>
        </div>
      );
    }
    // مرحله سوم – اطلاعات هویتی / نشانی و تماس طرف مقابل
    if (currentStep === 2) {
      if (registeredUsersMode) {
        return (
          <div className="mt-6 flex flex-col items-center" dir="rtl">
            <p className="w-full max-w-[720px] text-right text-sm md:text-base text-gray-800">
              با توجه به اطلاعات ورودی شما طرف مقابل قرارداد در پرونده تحت عنوان{' '}
              <span className="font-semibold text-green-700">
                {contractorFullName || '—'}
              </span>{' '}
              می‌باشد. آیا تایید می‌کنید؟
            </p>

            <label className="mt-4 flex w-full max-w-[720px] items-center justify-start gap-2 text-sm text-gray-800">
              <input
                type="checkbox"
                className="h-4 w-4 accent-green-600"
                checked={registeredCaseConfirmed}
                onChange={(e) => {
                  setRegisteredCaseConfirmed(e.target.checked);
                  if (errors.registeredCaseConfirmed) {
                    setErrors((prev) => ({
                      ...prev,
                      registeredCaseConfirmed: false,
                    }));
                  }
                }}
              />
              <span>ادامه با این پرونده را تایید می‌کنم</span>
            </label>

            {errors.registeredCaseConfirmed && (
              <div className="mt-3 flex items-center gap-1 text-xs text-red-600">
                <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                    fill="currentColor"
                  />
                </svg>
                <span>پرکردن فیلد اجباری است.</span>
              </div>
            )}
          </div>
        );
      }

      // تعیین متن و مقدار شناسه «طرف مقابل» بر اساس نوع شخص
      let identityLabel = `شناسه ${counterpartyLabel} وارد شده:`;
      let identityValue = '';

      if (personType === 'حقیقی غیر ایرانی') {
        identityLabel = `شماره فراگیر اتباع غیر ایرانی ${counterpartyLabel} وارد شده:`;
        identityValue = nationalOrForeignId;
      } else if (personType === 'حقیقی ایرانی') {
        identityLabel = `شماره ملی ${counterpartyLabel} وارد شده:`;
        identityValue = nationalOrForeignId;
      } else if (personType === 'حقوقی') {
        identityLabel = 'شناسه ملی پیمانکار وارد شده:';
        identityValue = legalId;
      } else if (personType === 'مشارکت مدنی') {
        identityLabel = `شناسه مشارکت مدنی ${counterpartyLabel} وارد شده:`;
        identityValue = partnershipId;
      }

      return (
        <div className="mt-4 flex flex-col items-center">
          {/* تیتر مرحله */}
          <div className="mb-6 text-center">
            <p className="text-base md:text-lg font-medium text-gray-800">
              اطلاعات هویتی / نشانی و تماس
            </p>
          </div>

          <div className="w-full max-w-[520px] space-y-6">
            {/* فیلدهای اطلاعات هویتی / نشانی و تماس برای اشخاص حقیقی (ایرانی / غیرایرانی) و حقوقی */}
            {personType === 'حقیقی غیر ایرانی' ||
            personType === 'حقیقی ایرانی' ? (
              <div className="space-y-4">
                {/* شماره تلفن همراه (الزامی) */}
                <label className="relative block">
                  <span
                    className={[
                      'pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs',
                      errors.contractorMobile ? 'text-red-600' : 'text-gray-700',
                    ].join(' ')}
                  >
                    شماره تلفن همراه:
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    className={[
                      'peer w-full rounded-md border px-4 py-3 text-center text-sm md:text-base text-gray-800 outline-none focus:ring-0',
                      errors.contractorMobile
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-green-600 focus:border-green-700',
                    ].join(' ')}
                    value={contractorMobile}
                    onChange={(e) => {
                      const digitsOnly = e.target.value
                        .replace(/\D/g, '')
                        .slice(0, 11);
                      setContractorMobile(digitsOnly);
                      if (errors.contractorMobile) {
                        setErrors((prev) => ({
                          ...prev,
                          contractorMobile: false,
                        }));
                      }
                      if (contractorMobileErrorMessage) {
                        setContractorMobileErrorMessage('');
                      }
                    }}
                  />
                </label>
                {errors.contractorMobile && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 01-1-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>
                      {contractorMobileErrorMessage ||
                        'پرکردن فیلد اجباری است.'}
                    </span>
                  </div>
                )}

                {/* نام و نام خانوادگی پیمانکار (اختیاری) */}
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                  نام و نام خانوادگی {counterpartyLabel}: (اختیاری)
                  </span>
                  <input
                    type="text"
                    className="peer w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm md:text-base text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                    value={contractorFullName}
                    onChange={(e) => setContractorFullName(e.target.value)}
                  />
                </label>

                {/* شماره اقتصادی پیمانکار (اختیاری) */}
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                  شماره اقتصادی {counterpartyLabel}: (اختیاری)
                  </span>
                  <input
                    type="text"
                    className="peer w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm md:text-base text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                    value={contractorEconomicCode}
                    onChange={(e) => setContractorEconomicCode(e.target.value)}
                  />
                </label>

                {/* نام تجاری پیمانکار (اختیاری) */}
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                  نام تجاری {counterpartyLabel}: (اختیاری)
                  </span>
                  <input
                    type="text"
                    className="peer w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm md:text-base text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                    value={contractorTradeName}
                    onChange={(e) => setContractorTradeName(e.target.value)}
                  />
                </label>

                {/* نشانی (اختیاری) */}
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                    نشانی: (اختیاری)
                  </span>
                  <textarea
                    rows={4}
                    className="peer w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm md:text-base text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                    value={contractorAddress}
                    onChange={(e) => setContractorAddress(e.target.value)}
                  />
                </label>
              </div>
           ) : personType === 'حقوقی' ? (
              <div className="space-y-4">
                {/* شماره تلفن همراه مدیرعامل (الزامی) */}
                <label className="relative block">
                  <span
                    className={[
                      'pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs',
                      errors.contractorMobile ? 'text-red-600' : 'text-gray-700',
                    ].join(' ')}
                  >
                    شماره تلفن همراه مدیرعامل:
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    className={[
                      'peer w-full rounded-md border px-4 py-3 text-center text-sm md:text-base text-gray-800 outline-none focus:ring-0',
                      errors.contractorMobile
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-green-600 focus:border-green-700',
                    ].join(' ')}
                    value={contractorMobile}
                    onChange={(e) => {
                      const digitsOnly = e.target.value
                        .replace(/\D/g, '')
                        .slice(0, 11);
                      setContractorMobile(digitsOnly);
                      if (errors.contractorMobile) {
                        setErrors((prev) => ({
                          ...prev,
                          contractorMobile: false,
                        }));
                      }
                      if (contractorMobileErrorMessage) {
                        setContractorMobileErrorMessage('');
                      }
                    }}
                  />
                </label>
                {errors.contractorMobile && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 01-1-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>
                      {contractorMobileErrorMessage ||
                        'پرکردن فیلد اجباری است.'}
                    </span>
                  </div>
                )}

                {/* نام (اختیاری) */}
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                    نام: (اختیاری)
                  </span>
                  <input
                    type="text"
                    className="peer w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm md:text-base text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                    value={contractorFullName}
                    onChange={(e) => setContractorFullName(e.target.value)}
                  />
                </label>

                {/* نام تجاری پیمانکار (اختیاری) */}
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                  نام تجاری {counterpartyLabel}: (اختیاری)
                  </span>
                  <input
                    type="text"
                    className="peer w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm md:text-base text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                    value={contractorTradeName}
                    onChange={(e) => setContractorTradeName(e.target.value)}
                  />
                </label>

                {/* نشانی (اختیاری) */}
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                    نشانی: (اختیاری)
                  </span>
                  <textarea
                    rows={4}
                    className="peer w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm md:text-base text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                    value={contractorAddress}
                    onChange={(e) => setContractorAddress(e.target.value)}
                  />
                </label>
              </div>
            ) : personType === 'مشارکت مدنی' ? (
              <div className="space-y-4">
                {/* شماره تلفن همراه نماینده مشارکت (الزامی) */}
                <label className="relative block">
                  <span
                    className={[
                      'pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs',
                      errors.contractorMobile ? 'text-red-600' : 'text-gray-700',
                    ].join(' ')}
                  >
                    شماره تلفن همراه نماینده مشارکت:
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    className={[
                      'peer w-full rounded-md border px-4 py-3 text-center text-sm md:text-base text-gray-800 outline-none focus:ring-0',
                      errors.contractorMobile
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-green-600 focus:border-green-700',
                    ].join(' ')}
                    value={contractorMobile}
                    onChange={(e) => {
                      const digitsOnly = e.target.value
                        .replace(/\D/g, '')
                        .slice(0, 11);
                      setContractorMobile(digitsOnly);
                      if (errors.contractorMobile) {
                        setErrors((prev) => ({
                          ...prev,
                          contractorMobile: false,
                        }));
                      }
                      if (contractorMobileErrorMessage) {
                        setContractorMobileErrorMessage('');
                      }
                    }}
                  />
                </label>
                {errors.contractorMobile && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 01-1-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>
                      {contractorMobileErrorMessage ||
                        'پرکردن فیلد اجباری است.'}
                    </span>
                  </div>
                )}

                {/* نام (اختیاری) */}
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                    نام: (اختیاری)
                  </span>
                  <input
                    type="text"
                    className="peer w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm md:text-base text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                    value={contractorFullName}
                    onChange={(e) => setContractorFullName(e.target.value)}
                  />
                </label>

                {/* نام تجاری پیمانکار (اختیاری) */}
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                  نام تجاری {counterpartyLabel}: (اختیاری)
                  </span>
                  <input
                    type="text"
                    className="peer w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm md:text-base text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                    value={contractorTradeName}
                    onChange={(e) => setContractorTradeName(e.target.value)}
                  />
                </label>

                {/* نشانی (اختیاری) */}
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                    نشانی: (اختیاری)
                  </span>
                  <textarea
                    rows={4}
                    className="peer w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm md:text-base text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                    value={contractorAddress}
                    onChange={(e) => setContractorAddress(e.target.value)}
                  />
                </label>
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-gray-300 bg-gray-50 py-10 text-center text-xs md:text-sm text-gray-400">
                در این بخش فیلدهای «اطلاعات هویتی / نشانی و تماس» پیمانکار قرار
                خواهد گرفت.
              </div>
            )}

            {/* باکس‌های سبز تأیید شناسه و کدپستی پیمانکار */}
            <div className="space-y-3">
              <div className="rounded-md bg-green-50 px-4 py-3 text-center text-xs md:text-sm text-green-800">
                {identityLabel}{' '}
                <span className="font-semibold">
                  {identityValue || '—'}
                </span>
              </div>

              {postalCode &&
                (personType === 'حقیقی غیر ایرانی' ||
                  personType === 'حقیقی ایرانی') && (
                  <div className="rounded-md bg-green-50 px-4 py-3 text-center text-xs md:text-sm text-green-800">
                    کدپستی {counterpartyLabel} وارد شده:{' '}
                    <span className="font-semibold">{postalCode}</span>
                  </div>
                )}
            </div>
          </div>
        </div>
      );
    }
    // مرحله چهارم: نوع و تاریخ قرارداد
    if (currentStep === 3) {
      const inquiryPartyPrefix =
        role === 'employer' ? 'نام پیمانکار:' : 'نام کارفرما:';
      const inquiryEmployerTypeLabel =
        role === 'contractor' ? resolveEmployerTypeLabel(employerType) : '';
      const inquiryContractDateLabel =
        contractDateDisplay ||
        (/^\d{4}-\d{2}-\d{2}/.test(contractDate) && !contractDate.startsWith('0000-')
          ? formatISOToJalali(contractDate)
          : '—');
      const inquiryContractTypeLabel = resolveContractTypeLabel(contractType);
      return (
        <div className="mt-4 flex flex-col items-center">
          <div className="mb-10 text-center">
            <p className="text-base md:text-lg font-medium text-gray-800">
              نوع و تاریخ قرارداد
            </p>
          </div>

        {/* اطمینان از این که فیلدها در کنار هم نیستند و در حالت عادی زیر هم قرار بگیرند */}
        <div className="w-full max-w-[420px] space-y-6">
        {role === 'contractor' && (
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                    نوع کارفرما:
                  </span>
                  <select
                    className="peer w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-3 text-right text-sm md:text-base text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                    value={employerType}
                    onChange={(e) => setEmployerType(e.target.value)}
                  >
                    <option value="" disabled>
                      انتخاب کنید
                    </option>
                    <option value="article_18_vat">
                      کارفرما موضوع ماده 18 قانون ارزش افزوده
                    </option>
                    <option value="other_employers">سایر کارفرماها</option>
                  </select>
                </label>
              )}
          
               <ContractsContractTypeField
                value={contractType}
                hasError={Boolean(errors.contractType)}
                onChange={(nextValue) => {
                  setContractType(nextValue);
                  if (errors.contractType) {
                    setErrors((prev) => ({ ...prev, contractType: false }));
                  }
                  if (contractTypeErrorMessage) {
                    setContractTypeErrorMessage('');
                  }
                }}
              />

              <div ref={contractDateFieldRef}>
                <ContractsContractDateField
                  id="contractDate"
                  valueISO={contractDate ?? ''}
                  onChangeISO={(iso) => {
                    const nextRaw = (iso ?? '').trim();
                    // اگر کاربر تاریخ را پاک کرد، هر دو مقدار پاک شوند
                    if (!nextRaw) {
                      setContractDate('');
                      setContractDateDisplay('');
                    }

                    window.requestAnimationFrame(() => {
                      const host = contractDateFieldRef.current;
                      const isoFromDom = extractISOFromDateField(host);
                      const draftISO =
                        isoFromDom ||
                        (/^\d{4}-\d{2}-\d{2}/.test(nextRaw) && !nextRaw.startsWith('0000-')
                          ? nextRaw
                          : '');

                      // IMPORTANT: مقدار کنترل‌شونده‌ی DateField باید ISO معتبر باشد
                      if (draftISO) setContractDate(draftISO);
                      const inputs = Array.from(
                        host?.querySelectorAll('input') ?? [],
                      ) as HTMLInputElement[];

                      // اولویت: input قابل مشاهده (نه hidden) که کاربر واقعاً می‌بیند
                      const visibleInput =
                        inputs.find(
                          (i) =>
                            i.type !== 'hidden' &&
                            // اگر hidden/نمایش‌نداده باشد offsetParent null می‌شود
                            (i.offsetParent !== null || i.getClientRects().length > 0),
                        ) ?? null;

                      const inputShown = (visibleInput?.value ?? '').trim();

                      // fallback قطعی: استخراج تاریخِ جلالی از متنِ نمایش‌داده‌شده‌ی کامپوننت
                      const text = (host?.innerText ?? '').trim();
                      const m = text.match(
                        /([0-9۰-۹]{4})[/-]([0-9۰-۹]{2})[/-]([0-9۰-۹]{2})/,
                      );
                      const textShown = m ? `${m[1]}/${m[2]}/${m[3]}` : '';

                      const shown = inputShown || textShown;
                      if (shown) {
                        setContractDateDisplay(shown);
                        // اگر ISO معتبر نداریم (خروجی DateField جلالی است)، همان را در state نگه می‌داریم تا ولیدیشن/بازگشت مرحله درست شود.
                        if (!draftISO) setContractDate(shown);
                        return;
                      }

                      // اگر خروجی ISO مشکل‌دار مثل 0000-... بود، اجازه نده تاریخ منفی تولید شود
                      const safe = (nextRaw || '').trim();
                      if (
                        /^\d{4}-\d{2}-\d{2}/.test(safe) &&
                        !safe.startsWith('0000-')
                      ) {
                        setContractDateDisplay(formatISOToJalali(safe));
                      }
                    });

                    if (errors.contractDate) {
                      setErrors((prev) => ({ ...prev, contractDate: false }));
                    }
                    if (contractDateErrorMessage) {
                      setContractDateErrorMessage('');
                    }
                  }}
                />
              </div>
            </div>
            {errors.contractDate && (
              <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                    fill="currentColor"
                  />
                </svg>
                <span>{contractDateErrorMessage || 'پرکردن فیلد اجباری است.'}</span>
              </div>
            )}

            {/* دکمه استعلام */}
            <div className="mt-6 w-full max-w-[420px]">
              <button
                type="button"
                className="w-full rounded-md border border-green-600 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-100"
                onClick={() => {
                  const nextErrors: Record<string, boolean> = {};
                  if (!contractType.trim()) {
                    nextErrors.contractType = true;
                    setContractTypeErrorMessage('پرکردن فیلد اجباری است.');
                  }
                  if (!contractDate.trim()) {
                    nextErrors.contractDate = true;
                    setContractDateErrorMessage('پرکردن فیلد اجباری است.');
                  }
                  if (Object.keys(nextErrors).length > 0) {
                    setErrors((prev) => ({ ...prev, ...nextErrors }));
                    setShowContractsInquiryPanel(false);
                    return;
                  }
                  setShowContractsInquiryPanel(true);
                }}
              >
                استعلام قراردادهای موجود در تاریخ وارد شده
              </button>
            </div>

            {showContractsInquiryPanel && (
              <div className="mt-6 w-full max-w-[900px] rounded-md bg-white p-6">
                <h3 className="mb-3 text-start text-sm md:text-base font-semibold text-orange-600">
                  پیشگیری از ثبت قرارداد تکراری
                </h3>

                <p className="mb-2 text-start text-xs md:text-sm text-gray-700">
                  قراردادهای مشابه در تاریخ وارد شده به شرح زیر می‌باشد.
                </p>
                <p className="mb-6 text-start text-xs md:text-sm text-gray-700">
                  در صورتی که قرارداد مد نظر شما موجود نیست با انتخاب دکمه «بعدی»، می‌توانید اطلاعات قرارداد خود را وارد کنید.
                </p>

                {/* ردیف فیلترها (فعلاً اسکلت UI) */}
                <div className="mb-4 flex flex-col gap-3">
                  {/* ردیف بالا: فقط نام کارفرما/پیمانکار */}
                  <div className="flex justify-start md:justify-end">
                    <div className="inline-flex items-center gap-2 rounded-md border border-green-600 border-r-8 border-r-green-600 px-3 py-2">
                      <span className="whitespace-nowrap text-xs md:text-sm text-black">
                        {inquiryPartyPrefix}
                      </span>
                      <span className="text-right text-xs md:text-sm text-gray-900">
                      {inquiryEmployerTypeLabel
                          ? `${inquiryEmployerTypeLabel} - `
                          : ''}
                        {contractorFullName}
                      </span>
                    </div>
                  </div>

                  {/* ردیف هم‌تراز با فیلتر: نوع + تاریخ */}
                  <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <button
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50"
                      aria-label="فیلتر"
                      aria-expanded={showContractsInquiryFilters}
                    onClick={() =>
                      setShowContractsInquiryFilters((prev) => !prev)
                    }
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M4 6h16l-6 7v5l-4 2v-7L4 6z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div className="flex flex-col gap-3 md:flex-row-reverse md:items-end md:justify-start">
                      <div className="inline-flex items-center rounded-md border border-green-600 border-r-8 border-r-green-600 px-3 py-2">
                        <span className="text-right text-xs md:text-sm text-gray-900">
                          {inquiryContractDateLabel}
                        </span>
                      </div>

                      <div className="inline-flex items-center rounded-md border border-green-600 border-r-8 border-r-green-600 px-3 py-2">
                        <span className="text-right text-xs md:text-sm text-gray-900">
                          {inquiryContractTypeLabel}
                        </span>
                      </div>

                    </div>
                  </div>

                  {showContractsInquiryFilters && (
                    <div className="relative mt-4 w-full rounded-md border border-black bg-white p-4">
                      <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                        فیلتر شده بر اساس:
                      </span>

                      <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end">
                        {/* 1) شماره قرارداد */}
                        <label className="relative block w-full md:w-1/4">
                          <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                            شماره قرارداد:
                          </span>
                          <input
                            type="text"
                            inputMode="numeric"
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                            value={inquiryContractNo}
                            onChange={(e) =>
                              setInquiryContractNo(
                                e.target.value.replace(/\D/g, ''),
                              )
                            }
                          />
                        </label>

                        {/* 2) وضعیت قرارداد */}
                        <label className="relative block w-full md:w-1/4">
                          <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                            وضعیت قرارداد:
                          </span>
                          <select
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                            value={inquiryContractStatus}
                            onChange={(e) =>
                              setInquiryContractStatus(e.target.value)
                            }
                          >
                            <option value="" disabled>
                              انتخاب کنید
                            </option>
                            <option value="در انتظار واکنش">در انتظار واکنش</option>
                            <option value="ثبت نهایی">ثبت نهایی</option>
                            <option value="ابطال شده">ابطال شده</option>
                          </select>
                        </label>

                        {/* 3) مبلغ قرارداد از */}
                        <label className="relative block w-full md:w-1/4">
                          <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                            مبلغ قرارداد از:
                          </span>
                          <input
                            type="text"
                            inputMode="numeric"
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                            value={inquiryAmountFrom}
                            onChange={(e) =>
                              setInquiryAmountFrom(
                                e.target.value.replace(/\D/g, ''),
                              )
                            }
                          />
                        </label>

                        {/* 4) مبلغ قرارداد تا */}
                        <label className="relative block w-full md:w-1/4">
                          <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                            مبلغ قرارداد تا:
                          </span>
                          <input
                            type="text"
                            inputMode="numeric"
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm text-gray-800 outline-none focus:border-green-700 focus:ring-0"
                            value={inquiryAmountTo}
                            onChange={(e) =>
                              setInquiryAmountTo(
                                e.target.value.replace(/\D/g, ''),
                              )
                            }
                          />
                        </label>
                      </div>
                    </div>
                  )}                  
                </div>

                {/* جدول (فعلاً اسکلت UI) */}
                <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
                  <table className="w-full min-w-full table-fixed text-sm">
                    <thead className="bg-green-50 text-gray-800">
                      <tr className="text-xs">
                        <th className="px-3 py-2 text-right">ردیف</th>
                        <th className="px-3 py-2 text-right">شماره قرارداد</th>
                        <th className="px-3 py-2 text-right">مبلغ کل قرارداد(ریال)</th>
                        <th className="px-3 py-2 text-right">وضعیت قرارداد</th>
                        <th className="px-3 py-2 text-right">جزئیات بیشتر</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiryResults.length === 0 ? (
                        <EmptyTableRow colSpan={5} />
                      ) : (
                        inquiryResults.map((row, idx) => (
                          <tr
                            key={`${row?.contractNo || 'row'}-${idx}`}
                            className="text-xs text-gray-800"
                          >
                            <td className="border-t border-gray-200 px-3 py-3 text-right">
                              {idx + 1}
                            </td>
                            <td className="border-t border-gray-200 px-3 py-3 text-right">
                              {row?.contractNo || '—'}
                            </td>
                            <td className="border-t border-gray-200 px-3 py-3 text-right">
                              {row?.totalAmount || '—'}
                            </td>
                            <td className="border-t border-gray-200 px-3 py-3 text-right">
                              {row?.contractStatus || '—'}
                            </td>
                            <td className="border-t border-gray-200 px-3 py-3 text-right">
                              <button
                                type="button"
                                className="text-gray-700 hover:text-gray-900"
                                aria-label="جزئیات بیشتر"
                              >
                                ...
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
      );
    }

    // مرحله پنجم: اطلاعات قرارداد
    if (currentStep === 4) {
      const isVolumeHumanResource =
        (contractType || '').trim() === 'volume_human_resource' ||
        (contractType || '').trim() === 'قرارداد حجمی تامین نیروی انسانی';
      return (
        <div className="mt-4 flex flex-col items-center">
          <div className="mb-10 text-center">
            <p className="text-base md:text-lg font-medium text-gray-800">
              اطلاعات قرارداد
            </p>
          </div>

          <div className="w-full max-w-[360px] space-y-6">
            {/* مبلغ کل قرارداد(ریال) */}
            <label className="relative block">
              <span
                className={[
                  'pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs',
                  errors.contractTotalAmountRial ? 'text-red-600' : 'text-gray-700',
                ].join(' ')}
              >
                مبلغ کل قرارداد(ریال)
              </span>
              <input
                type="text"
                inputMode="numeric"
                className={[
                  'w-full rounded-md border px-4 py-3 text-right text-sm text-gray-800 outline-none',
                  errors.contractTotalAmountRial
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-300 focus:border-green-700',
                ].join(' ')}
                value={contractTotalAmountRial}
                onChange={(e) => {
                  const nextValue = e.target.value.replace(/\D/g, '');
                  setContractTotalAmountRial(nextValue);

                  if (errors.contractTotalAmountRial) {
                    setErrors((prev) => ({
                      ...prev,
                      contractTotalAmountRial: false,
                    }));
                  }

                  if (contractTotalAmountRialErrorMessage) {
                    setContractTotalAmountRialErrorMessage('');
                  }
                }}
              />
            </label>
            {errors.contractTotalAmountRial && (
              <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                    fill="currentColor"
                  />
                </svg>
                <span>
                  {contractTotalAmountRialErrorMessage ||
                    'پرکردن فیلد اجباری است.'}
                </span>
              </div>
            )}

            {/* تعداد نیروی انسانی (فقط برای قرارداد حجمی تامین نیروی انسانی) */}
            {isVolumeHumanResource && (
              <>
                <label className="relative block">
                  <span
                    className={[
                      'pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs',
                      errors.humanResourceCount ? 'text-red-600' : 'text-gray-700',
                    ].join(' ')}
                  >
                    تعداد نیروی انسانی
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    className={[
                      'w-full rounded-md border px-4 py-3 text-right text-sm text-gray-800 outline-none',
                      errors.humanResourceCount
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-green-700',
                    ].join(' ')}
                    value={humanResourceCount}
                    onChange={(e) => {
                      const nextValue = e.target.value.replace(/\D/g, '');
                      setHumanResourceCount(nextValue);

                      if (errors.humanResourceCount) {
                        setErrors((prev) => ({
                          ...prev,
                          humanResourceCount: false,
                        }));
                      }

                      if (humanResourceCountErrorMessage) {
                        setHumanResourceCountErrorMessage('');
                      }
                    }}
                  />
                </label>
                {errors.humanResourceCount && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>
                      {humanResourceCountErrorMessage || 'پرکردن فیلد اجباری است.'}
                    </span>
                  </div>
                )}
              </>
            )}

            {/* تاریخ شروع قرارداد */}
            <div ref={contractStartDateFieldRef}>
              <ContractsContractDateField
                id="contractStartDate"
                label="تاریخ شروع قرارداد"
                placeholder="انتخاب کنید"
                valueISO={contractStartDateDisplay ?? ''}
                onChangeISO={(iso) => {
                  const nextRaw = (iso ?? '').trim();
                  if (!nextRaw) {
                    setContractStartDateDisplay('');
                    setContractStartDateShown('');
                  }
                  window.requestAnimationFrame(() => {
                    const host = contractStartDateFieldRef.current;
                    const isoFromDom = extractISOFromDateField(host);
                    const draftISO =
                      isoFromDom ||
                      (/^\d{4}-\d{2}-\d{2}/.test(nextRaw) &&
                      !nextRaw.startsWith('0000-')
                        ? nextRaw
                        : '');

                    const shown = extractShownJalaliFromDateField(host);

                  // IMPORTANT: مقدار کنترل‌شونده‌ی DateField باید مقدار معتبر باشد (ISO یا جلالی)
                    const normalized = normalizeDateForField(nextRaw, draftISO, shown);
                    setContractStartDateDisplay(normalized);

                    if (shown) setContractStartDateShown(shown);
                  });

                  if (errors.contractStartDate) {
                    setErrors((prev) => ({ ...prev, contractStartDate: false }));
                  }
                  if (contractStartDateErrorMessage) {
                    setContractStartDateErrorMessage('');
                  }
                }}
              />
            </div>
            {errors.contractStartDate && (
              <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3L3 21h18L12 3zm0 6a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm0 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                    fill="currentColor"
                  />
                </svg>
                <span>
                  {contractStartDateErrorMessage ||
                    'پرکردن فیلد اجباری است.'}
                </span>
              </div>
            )}

            {/* تاریخ پیش بینی اتمام قرارداد (اختیاری) */}
            <div ref={contractEstimatedEndDateFieldRef}>
              <ContractsContractDateField
                id="contractEstimatedEndDate"
                label="تاریخ پیش بینی اتمام قرارداد (اختیاری)"
                placeholder="انتخاب کنید"
                valueISO={contractEstimatedEndDateDisplay ?? ''}
                onChangeISO={(iso) => {
                  const nextRaw = (iso ?? '').trim();
                  if (!nextRaw) {
                    setContractEstimatedEndDateDisplay('');
                    setContractEstimatedEndDateShown('');
                  }
                  window.requestAnimationFrame(() => {
                    const host = contractEstimatedEndDateFieldRef.current;
                    const isoFromDom = extractISOFromDateField(host);
                    const draftISO =
                      isoFromDom ||
                      (/^\d{4}-\d{2}-\d{2}/.test(nextRaw) &&
                      !nextRaw.startsWith('0000-')
                        ? nextRaw
                        : '');

                    const shown = extractShownJalaliFromDateField(host);

                    // IMPORTANT: مقدار کنترل‌شونده‌ی DateField باید مقدار معتبر باشد (ISO یا جلالی)
                    const normalized = normalizeDateForField(nextRaw, draftISO, shown);
                    setContractEstimatedEndDateDisplay(normalized);

                    if (shown) setContractEstimatedEndDateShown(shown);
                  });
                }}
              />
            </div>

            {/* عنوان قرارداد (اختیاری) */}
            <label className="relative block">
              <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                عنوان قرارداد: (اختیاری)
              </span>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm text-gray-800 outline-none focus:border-green-700"
                value={contractTitle}
                onChange={(e) => setContractTitle(e.target.value)}
              />
            </label>

            {/* شماره داخلی قرارداد (اختیاری) */}
            <label className="relative block">
              <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                شماره داخلی قرارداد: (اختیاری)
              </span>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm text-gray-800 outline-none focus:border-green-700"
                value={contractInternalNo}
                onChange={(e) => setContractInternalNo(e.target.value)}
              />
            </label>

            {/* مبلغ (ریال) مرجع حقوق نیروی انسانی (اختیاری) - فقط برای قرارداد حجمی */}
            {isVolumeHumanResource && (
              <label className="relative block">
                <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                  مبلغ (ریال) مرجع حقوق نیروی انسانی (اختیاری)
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm text-gray-800 outline-none focus:border-green-700"
                  value={humanResourceWageReferenceRial}
                  onChange={(e) => {
                    const nextValue = e.target.value.replace(/\D/g, '');
                    setHumanResourceWageReferenceRial(nextValue);
                  }}
                />
              </label>
            )}

            {/* توضیحات (اختیاری) */}
            <label className="relative block">
              <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                توضیحات: (اختیاری)
              </span>
              <textarea
                className="w-full min-h-[140px] resize-none rounded-md border border-gray-300 px-4 py-3 text-right text-sm text-gray-800 outline-none focus:border-green-700"
                value={contractDescription}
                onChange={(e) => setContractDescription(e.target.value)}
              />
            </label>
          </div>

          {/* پیش‌پرداخت / علی‌الحساب */}
          {advancePayments.length === 0 ? (
            <div className="mt-8 w-full max-w-[360px]">
              <div className="pt-2 text-center text-sm text-gray-700">
                جدول پیش پرداخت و علی الحساب ها
              </div>
              <button
                type="button"
                className="mt-3 w-full rounded-md bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700"
                onClick={() => {
                  if (!validateContractInfoRequiredFields()) return;
                  setShowAdvancePaymentModal(true);
                }}
              >
                ثبت پیش پرداخت و علی الحساب
              </button>
            </div>
          ) : (
            <div className="mt-10 w-full max-w-[820px] mx-auto" dir="rtl">
              <div className="flex flex-row-reverse items-start justify-between">
                <button
                  type="button"
                  className="mb-3 rounded-md bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                  onClick={() => {
                    if (!validateContractInfoRequiredFields()) return;
                    setShowAdvancePaymentModal(true);
                  }}
                >
                  افزودن پرداخت
                </button>
                <div className="rounded-t-md bg-green-600 px-4 py-3 text-xs font-medium text-white">
                  جدول پیش پرداخت و علی الحسابها
                </div>
              </div>

              <div className="-mt-px overflow-hidden rounded-md border border-green-600">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="bg-white text-xs text-gray-800">
                      <th className="w-[64px] border-b border-green-600 px-3 py-3 text-right">
                        ردیف
                      </th>
                      <th className="border-b border-green-600 px-3 py-3 text-right">
                        شناسه یکتا پرداخت
                      </th>
                      <th className="border-b border-green-600 px-3 py-3 text-right">
                        مبلغ پرداخت(ریال)
                      </th>
                      <th className="border-b border-green-600 px-3 py-3 text-right">
                        تاریخ پرداخت
                      </th>
                      <th className="border-b border-green-600 px-3 py-3 text-right">
                        نوع پرداخت
                      </th>
                      <th className="border-b border-green-600 px-3 py-3 text-right">
                        شناسه صیاد
                      </th>
                      <th className="w-[96px] border-b border-green-600 px-3 py-3 text-right">
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-xs text-gray-800">
                    {advancePayments.map((row, idx) => (
                      <tr key={`${row.type}-${row.dateISO}-${idx}`} className="bg-white">
                        <td className="border-b border-gray-200 px-3 py-3 text-right">
                          {idx + 1}
                        </td>
                        <td className="border-b border-gray-200 px-3 py-3 text-right">
                          {row.uniquePaymentId || '—'}
                        </td>
                        <td className="border-b border-gray-200 px-3 py-3 text-right">
                          {row.amountRial || '—'}
                        </td>
                        <td className="border-b border-gray-200 px-3 py-3 text-right">
                          {row.dateISO ? (formatISOToJalaliSafe(row.dateISO) || '—') : '—'}
                        </td>
                        <td className="border-b border-gray-200 px-3 py-3 text-right">
                          {row.type || '—'}
                        </td>
                        <td className="border-b border-gray-200 px-3 py-3 text-right">
                          {row.sayadId || '—'}
                        </td>
                        <td className="border-b border-gray-200 px-3 py-3 text-right">
                          <button
                            type="button"
                            aria-label="حذف"
                            className="inline-flex items-center justify-center text-red-600 hover:text-red-700"
                            onClick={() =>
                              setAdvancePayments((prev) =>
                                prev.filter((_, i) => i !== idx),
                              )
                            }
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                              <path
                                d="M6 7h12M9 7V5h6v2m-7 3v9m4-9v9m4-9v9M8 7l1 14h6l1-14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      );
    }

    // مرحله ششم: تایید نهایی (اسکلت)
    if (currentStep === 5) {
      const isVolumeHumanResource =
        (contractType || '').trim() === 'volume_human_resource' ||
        (contractType || '').trim() === 'قرارداد حجمی تامین نیروی انسانی';
      return (
        <div className="mt-6 flex flex-col items-center" dir="rtl">
          <div className="mb-6 w-full max-w-[920px]">
            <div className="flex w-full flex-row-reverse items-center justify-end gap-3 text-right">          
              <h2 className="text-right text-lg font-semibold text-gray-800">
                تایید اطلاعات وارد شده
              </h2>
              <span className="h-6 w-[2px] bg-green-600" aria-hidden="true" />
            </div>
            <p className="mt-3 text-right text-sm text-gray-700">
              آیا اطلاعات زیر را برای ثبت قرارداد جدید تایید می‌کنید؟
            </p>
          </div>

          <div className="w-full max-w-[920px] space-y-8">
            {/* کارت: اطلاعات طرف مقابل */}
            <div className="rounded-md border border-gray-200 bg-white px-6 py-6">
              <h3 className="mb-5 text-center text-base font-semibold text-gray-800">
              اطلاعات {counterpartyLabel}
              </h3>
              <div className="space-y-4 text-sm text-gray-800">
                <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-3">
                  <span className="text-gray-700">شماره اقتصادی :</span>
                  <span className="min-w-[120px] text-left">
                  {contractorEconomicCode || economicCode || '—'}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-3">
                  <span className="text-gray-700">نام :</span>
                  <span className="min-w-[120px] text-left">
                  {contractorFullName || '—'}
                  </span>
                </div>
              </div>
            </div>

            {/* کارت: اطلاعات قرارداد */}
            <div className="rounded-md border border-gray-200 bg-white px-6 py-6">
              <h3 className="mb-5 text-center text-base font-semibold text-gray-800">
                اطلاعات قرارداد
              </h3>
              <div className="space-y-4 text-sm text-gray-800">
                <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-3">
                  <span className="text-gray-700">شماره داخلی قرارداد :</span>
                  <span className="min-w-[120px] text-left">
                    {contractInternalNo || '—'}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-3">
                  <span className="text-gray-700">مبلغ کل قرارداد(ریال) :</span>
                  <span className="min-w-[120px] text-left">
                    {contractTotalAmountRial || '—'}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-3">
                  <span className="text-gray-700">نوع قرارداد :</span>
                  <span className="min-w-[120px] text-left">
                    {resolveContractTypeLabel(contractType) || '—'}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-3">
                  <span className="text-gray-700">موضوع قرارداد :</span>
                  <span className="min-w-[120px] text-left">—</span>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-3">
                  <span className="text-gray-700">عنوان قرارداد :</span>
                  <span className="min-w-[120px] text-left">
                    {contractTitle || '—'}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-3">
                  <span className="text-gray-700">تاریخ عقد قرارداد :</span>
                  <span className="min-w-[120px] text-left">
                    {contractDateDisplay ||
                      (contractDate ? formatISOToJalali(contractDate) : '—')}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-3">
                  <span className="text-gray-700">تاریخ شروع قرارداد :</span>
                  <span className="min-w-[120px] text-left">
                    {contractStartDateShown ||
                      (formatISOToJalaliSafe(contractStartDateDisplay) || '—')}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-3">
                  <span className="text-gray-700">
                    تاریخ پیش‌بینی اتمام قرارداد :
                  </span>
                  <span className="min-w-[120px] text-left">
                    {contractEstimatedEndDateShown ||
                      (formatISOToJalaliSafe(contractEstimatedEndDateDisplay) || '—')}
                  </span>
                </div>

                {isVolumeHumanResource && (
                  <>
                    <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-3">
                      <span className="text-gray-700">تعداد نیروی انسانی :</span>
                      <span className="min-w-[120px] text-left">
                        {humanResourceCount || '—'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-dashed border-gray-300 pb-3">
                      <span className="text-gray-700">
                        مبلغ مرجع حقوق نیروی انسانی (ریال) :
                      </span>
                      <span className="min-w-[120px] text-left">
                        {humanResourceWageReferenceRial || '—'}
                      </span>
                    </div>
                  </>
                )}

                <div className="flex items-start justify-between border-b border-dashed border-gray-300 pb-3">
                  <span className="text-gray-700">توضیحات :</span>
                  <span className="min-w-[120px] whitespace-pre-wrap text-left">
                    {contractDescription || '—'}
                  </span>
                </div>
              </div>
            </div>

            {/* جدول پیش‌پرداخت‌ها */}
            {advancePayments.length > 0 && (
              <div className="w-full">
                <div className="mb-4 flex w-full flex-row-reverse items-center justify-end gap-3 text-right">
                  <h3 className="text-right text-base font-semibold text-gray-800">
                    جدول پیش پرداخت و علی الحساب ها
                  </h3>
                  <span className="h-6 w-[2px] bg-green-600" aria-hidden="true" />
                </div>

                <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
                  <table className="w-full table-fixed">
                    <thead>
                      <tr className="bg-green-50 text-xs text-gray-800">
                        <th className="w-[64px] px-3 py-3 text-right">ردیف</th>
                        <th className="px-3 py-3 text-right">
                          شناسه یکتا پرداخت
                        </th>
                        <th className="px-3 py-3 text-right">
                          مبلغ پرداخت(ریال)
                        </th>
                        <th className="px-3 py-3 text-right">تاریخ پرداخت</th>
                        <th className="px-3 py-3 text-right">نوع پرداخت</th>
                        <th className="px-3 py-3 text-right">شناسه صیاد</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs text-gray-800">
                      {advancePayments.map((row, idx) => (
                        <tr
                          key={`${row.type}-${row.dateISO}-${idx}`}
                          className="bg-white"
                        >
                          <td className="border-t border-gray-200 px-3 py-3 text-right">
                            {idx + 1}
                          </td>
                          <td className="border-t border-gray-200 px-3 py-3 text-right">
                            {row.uniquePaymentId || '—'}
                          </td>
                          <td className="border-t border-gray-200 px-3 py-3 text-right">
                            {row.amountRial || '—'}
                          </td>
                          <td className="border-t border-gray-200 px-3 py-3 text-right">
                            {row.dateISO
                              ? formatISOToJalaliSafe(row.dateISO) || '—'
                              : '—'}
                          </td>
                          <td className="border-t border-gray-200 px-3 py-3 text-right">
                            {row.type || '—'}
                          </td>
                          <td className="border-t border-gray-200 px-3 py-3 text-right">
                            {row.sayadId || '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    // سایر مراحل فعلاً بدون محتوای اختصاصی
    return null;
  };
  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 py-6">
      {(showEconomicCodeToast || showVat18EmployerToast) && (
        <div className="mb-4 mx-auto flex w-full max-w-[520px] flex-col rounded-md bg-red-600 text-right text-sm text-white">
          <div className="flex items-center justify-start gap-2 px-4 py-4">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-200 text-red-600">
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6.75 6.75l10.5 10.5M17.25 6.75l-10.5 10.5"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>
              {showVat18EmployerToast
                ? 'کاربر گرامی، با توجه به موضوع ماده ۱۸ قانون مالیات بر ارزش افزوده چون مهلت یکماه ثبت قرارداد برای کارفرما به اتمام نرسیده است شما قادر به ثبت اطلاعات قرارداد خود نمی‌باشید.'
                : 'پرونده موردنظر یافت نشد.'}
            </span>
          </div>
          {/* خط سفید زیر پیام که طی ۶ ثانیه از راست به چپ باز می‌شود */}
          <div className="flex h-2 w-full overflow-hidden justify-start">
            <div
              className={[
                'h-full bg-red-200',
                'transition-[width] duration-[6000ms] ease-linear',
                toastProgressActive ? 'w-full' : 'w-0',
              ].join(' ')}
            />
          </div>
        </div>
      )}

            {/* کارت واحد شامل استپر و بدنه فرم */}
            <div
              ref={cardRef}
              onClickCapture={(e) => {
                // مرحله «اطلاعات هویتی» = index 1
                if (currentStep !== 1) return;
                if (monjiInfoModalDisabledRef.current) return;
                if (identityMonjiShownOnceRef.current) return;
                if (showMonjiInfoModal) return;

                const target = e.target as HTMLElement | null;
                // استثنا: کلیک روی دکمه «قبلی»
                if (target?.closest('[data-monji-skip="true"]')) return;

                identityMonjiShownOnceRef.current = true;
                setMonjiMode('pre');
                setMonjiContext('economic');
                setShowMonjiInfoModal(true);
                e.preventDefault();
                e.stopPropagation();
              }}
              className="rounded-lg border border-gray-200 bg-white px-6 py-10"
            >
              {/* نوار مراحل بالای صفحه (استپر) */}

        <div className="mb-10">
          <Stepper
            titles={STEPS.map((step) => step.label)}
            current={currentStep + 1}
          />
        </div>

        {/* بدنهٔ محتوای مرحله جاری */}
        {renderStepContent()}

        {/* دکمه‌های پایین فرم در عرض کامل کارت */}
        <div className="mt-8 flex items-center justify-between">
          {/* دکمه انصراف (سمت راست کارت) */}
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-black bg-white px-4 py-2 text-sm text-black hover:bg-gray-50"
            onClick={handleCancelClick}
          >
            انصراف
          </button>

          {/* دکمه‌های مرحله‌ای (سمت چپ کارت) */}
          <div className="flex items-center gap-3">
            {currentStep > 0 && (
              <button
                type="button"
                data-monji-skip="true"
                className="inline-flex items-center rounded-md border border-black bg-white px-4 py-2 text-sm text-black hover:bg-gray-50"
                onClick={handlePrevClick}
              >
                قبلی
              </button>
            )}
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700"
              onClick={handleNextClick}
            >
              {currentStep === STEPS.length - 1 ? 'تایید نهایی' : 'بعدی'}
            </button>
          </div>
        </div>
      </div>
      {/* مودال اطلاع‌رسانی منجی قبل از نمایش نتیجه جستجوی شماره اقتصادی پیمانکار */}
            {showMonjiInfoModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 lg:pr-[280px]">
          <div className="w-full max-w-[720px] rounded-md border border-blue-300 bg-blue-50 p-6 text-right shadow-lg">
            <h2 className="mb-4 text-lg md:text-xl font-bold text-blue-900 text-center">
              پیام منجی
            </h2>
            <p className="mb-1 text-sm font-bold text-gray-800">کاربر گرامی</p>

            {monjiContext === 'economic' && (
              <>
                <p className="mb-1 text-sm text-gray-800">
                در حالت واقعی اطلاعات کارفرما/پیمانکار در سامانه ثبت نام الکترونیکی سازمان امور مالیاتی کنترل میشود
                </p>
                <p className="mb-1 text-sm text-gray-800">
                  در صورتیکه این اطلاعات یافت نشود پیامهایی را صادر میکند
                </p>
                <p className="mb-1 text-sm text-gray-800">
                  در این سایت پیش فرض بر این است که این اطلاعات در سامانه یافت نشده، لذا همان پیامها را به شما نمایش میدهیم
                </p>
                <p className="mb-1 text-sm text-gray-800">
                  -------------------------------------------------------------------------------------------------
                </p>
                <div className="mb-6 flex flex-wrap items-center justify-start gap-3 text-sm text-gray-800">
                  <span>
                    اگر مایلید که فرایند ثبت نام شدگان را تجربه کنید، چک باکس ثبت نام شدگان را تیک بزنید
                  </span>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-blue-600"
                      checked={registeredUsersChecked}
                      onChange={(e) => setRegisteredUsersChecked(e.target.checked)}
                    />
                    <span>ثبت نام شدگان</span>
                  </label>
                </div>
              </>
            )}

            {monjiContext === 'identity' && (
              <p className="mb-6 text-sm text-gray-800">
                این قسمت بزودی تکمیل میشود
              </p>
            )}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
                onClick={handleMonjiInfoConfirm}
              >
                ادامه
              </button>
            </div>
          </div>
        </div>
      )}
      {/* مودال پیام برای نتیجه جستجوی شماره اقتصادی پیمانکار */}
      {showEconomicCodeModal && (
        <div className="fixed inset-0 z-40 flex items-start justify-center bg-black/40 lg:pr-[280px]">
          <div
            className="w-full mx-auto max-w-[860px] rounded-md bg-white p-8 shadow-lg"
            style={
              economicModalTop != null ? { marginTop: economicModalTop } : {}
            }
          >
            <p className="mb-6 text-sm text-gray-800 text-right">
              کاربر گرامی، اطلاعات طرف دیگر قرارداد در سامانه ثبت نام الکترونیکی یافت نشد، 
              برای ثبت قرارداد می‌توانید از طریق ثبت با شناسه هویتی و کدپستی، مشخصات طرف دیگر را وارد کنید.
            </p>
            <div className="flex justify-end gap-6">
              <button
                type="button"
                className="text-sm font-medium text-red-600 hover:text-red-700"
                onClick={() => {
                  setShowEconomicCodeModal(false);
                  // بستن توست و ریست نوار برای دفعات بعد
                  setShowEconomicCodeToast(false);
                  setToastProgressActive(false);
                }}
              >
                انصراف
              </button>
              <button
                type="button"
                className="text-sm font-medium text-green-700 hover:text-green-800"
                onClick={() => {
                  setShowEconomicCodeModal(false);
                  setUseIdentityAndPostalMode(true);
                  setShowEconomicCodeToast(false);
                  setToastProgressActive(false);
                }}
              >
                ادامه با شناسه هویتی و کدپستی
              </button>              
            </div>
          </div>
        </div>
      )}

            {/* مودال پیام برای نتیجه جستجو بر اساس شناسه هویتی و کدپستی */}
      {showIdentityResultModal && (
        <div className="fixed inset-0 z-40 flex items-start justify-center bg-black/40 lg:pr-[280px]">
          <div
            className="w-full mx-auto max-w-[860px] rounded-md bg-white p-8 shadow-lg"
            style={
              economicModalTop != null ? { marginTop: economicModalTop } : {}
            }
          >
            <p className="mb-6 text-sm text-gray-800 text-right">
              کاربر گرامی، اطلاعات پیمانکار یافت نشد. به منظور ثبت قرارداد باید
              با انتخاب گزینه «تایید» سایر اطلاعات پیمانکار را وارد کنید.
            </p>
            <div className="flex justify-end gap-6">
              <button
                type="button"
                className="text-sm font-medium text-red-600 hover:text-red-700"
                onClick={() => {
                  setShowIdentityResultModal(false);
                  setShowEconomicCodeToast(false);
                  setToastProgressActive(false);
                }}
              >
                انصراف
              </button>
              <button
                type="button"
                className="text-sm font-medium text-green-700 hover:text-green-800"
                onClick={() => {
                  setShowIdentityResultModal(false);
                  setShowEconomicCodeToast(false);
                  setToastProgressActive(false);
                  // حرکت به مرحله بعد پس از تایید کاربر
                  setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
                }}
              >
                تایید
              </button>
            </div>
          </div>
        </div>
      )}

      {/* مودال: افزودن پرداخت (اسکلت مطابق اسکرین) */}
      {showAdvancePaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 lg:pr-[280px]">
          <div className="w-full max-w-3xl rounded-md bg-white p-10 shadow-lg">
            <h2 className="mb-12 text-start text-sm font-semibold text-black">
              افزودن پرداخت
            </h2>

            <div className="flex">
              <div className="w-full max-w-md space-y-6">
                {/* مبلغ پرداخت (ریال) */}
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                    مبلغ پرداخت: (ریال)
                  </span>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm text-gray-800 outline-none focus:border-green-700"
                    value={advancePaymentAmountRial}
                    onChange={(e) => setAdvancePaymentAmountRial(e.target.value)}
                  />
                </label>

                {/* تاریخ پرداخت */}
                <div ref={advancePaymentDateFieldRef}>
                  <ContractsContractDateField
                    id="advancePaymentDate"
                    label="تاریخ پرداخت:"
                    placeholder="انتخاب کنید"
                    valueISO={advancePaymentDateDisplay ?? ''}
                    onChangeISO={(iso) => {
                      const nextRaw = (iso ?? '').trim();
                      if (!nextRaw) {
                        setAdvancePaymentDateDisplay('');
                        return;
                      }
                      window.requestAnimationFrame(() => {
                        const host = advancePaymentDateFieldRef.current;
                        const isoFromDom = extractISOFromDateField(host);
                        const draftISO =
                          isoFromDom ||
                          (/^\d{4}-\d{2}-\d{2}/.test(nextRaw) &&
                          !nextRaw.startsWith('0000-')
                            ? nextRaw
                            : '');
                        const shown = extractShownJalaliFromDateField(host);
                        const normalized = normalizeDateForField(nextRaw, draftISO, shown);
                        setAdvancePaymentDateDisplay(normalized);
                      });
                    }}
                  />
                </div>

                {/* نوع پرداخت (اختیاری) */}
                <label className="relative block">
                  <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                    نوع پرداخت: (اختیاری)
                  </span>
                  <select
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-right text-sm text-gray-800 outline-none focus:border-green-700"
                    value={advancePaymentType}
                    onChange={(e) => {
                      const nextValue = e.target.value;
                      setAdvancePaymentType(nextValue);

                      // ریست فیلدهای شرطی در صورت تغییر نوع پرداخت
                      if (nextValue !== 'چک') setAdvancePaymentSayadId('');
                      if (nextValue !== 'الکترونیکی')
                        setAdvancePaymentUniquePaymentId('');
                    }}
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="چک">چک</option>
                    <option value="تهاتر">تهاتر</option>
                    <option value="نقدی">نقدی</option>
                    <option value="الکترونیکی">الکترونیکی</option>
                    <option value="سایر">سایر</option>
                  </select>
                </label>

                {/* فیلد شرطی: شناسه صیاد (فقط در حالت چک) */}
                {advancePaymentType === 'چک' && (
                  <label className="relative block">
                    <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                      شناسه صیاد:
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={16}
                      className="w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm text-gray-800 outline-none focus:border-green-700"
                      value={advancePaymentSayadId}
                      onChange={(e) =>
                        setAdvancePaymentSayadId(
                          e.target.value.replace(/\D/g, '').slice(0, 16),
                        )
                      }
                    />
                  </label>
                )}

                {/* فیلد شرطی: شناسه یکتا پرداخت (فقط در حالت الکترونیکی) */}
                {advancePaymentType === 'الکترونیکی' && (
                  <label className="relative block">
                    <span className="pointer-events-none absolute right-4 -top-2 bg-white px-1 text-xs text-gray-700">
                      شناسه یکتا پرداخت:
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={16}
                      className="w-full rounded-md border border-gray-300 px-4 py-3 text-right text-sm text-gray-800 outline-none focus:border-green-700"
                      value={advancePaymentUniquePaymentId}
                      onChange={(e) =>
                        setAdvancePaymentUniquePaymentId(
                          e.target.value.replace(/\D/g, '').slice(0, 16),
                        )
                      }
                    />
                  </label>
                )}                
              </div>
              <div className="flex-1" />
            </div>

            <div className="mt-16 flex items-center justify-end gap-8">
              <button
                type="button"
                className="text-sm font-medium text-red-600 hover:text-red-700"
                onClick={() => setShowAdvancePaymentModal(false)}
              >
                انصراف
              </button>
              <button
                type="button"
                className="text-sm font-medium text-green-700 hover:text-green-800"
                onClick={() => {
                  setAdvancePayments((prev) => [
                    ...prev,
                    {
                      amountRial: (advancePaymentAmountRial || '').trim(),
                      dateISO: (advancePaymentDateDisplay || '').trim(),
                      type: (advancePaymentType || '').trim(),
                      sayadId: (advancePaymentSayadId || '').trim(),
                      uniquePaymentId: (advancePaymentUniquePaymentId || '').trim(),
                    },
                  ]);

                  setShowAdvancePaymentModal(false);
                }}
              >
                ثبت
              </button>              
            </div>
          </div>
        </div>
      )}

      {/* مودال تایید انصراف */}
      {showCancelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 lg:pr-[280px]">
          <div className="w-full max-w-2xl rounded-md bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-red-600">!</span>
              <h2 className="text-sm font-semibold text-black">
                انصراف از ثبت قرارداد
              </h2>
            </div>
            <p className="mb-6 text-sm text-gray-800">
              همه اطلاعات ثبت شده حذف خواهد شد. آیا از اقدام خود اطمینان دارید؟
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 hover:bg-gray-50"
                onClick={handleCancelClose}
              >
                خیر
              </button>
              <button
                type="button"
                className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
                onClick={handleCancelConfirm}
              >
                بله
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
