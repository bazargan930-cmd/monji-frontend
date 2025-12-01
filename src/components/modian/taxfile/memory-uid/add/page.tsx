// src/components/modian/taxfile/memory-uid/add/page.tsx

'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const LS_KEY = 'modian_tax_memory_uids';
const LS_TRUSTED = 'modian_trusted_companies';
// API ثبت‌نام (همان که در صفحه‌ی اطلاعات ثبت‌نامی استفاده شده است) :contentReference[oaicite:0]{index=0}
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001';

const STEPS = [
  'تعیین نحوه ارسال صورتحساب',
  'تعیین کلید عمومی امضا حافظه',
  'تعیین شعب مرتبط با شناسه یکتا',
  'تخصیص ابزار پرداخت به شناسه یکتا',
  'اطلاعات حافظه مالیاتی و پایانه فروشگاهی',
  'تایید نهایی',
  'دریافت شناسه یکتا',
];

export default function MemoryUIDAddPage() {
  const router = useRouter();
  // --- افزودن state و ref برای کنترل فیلد آپلود ---
  const [fileName, setFileName] = React.useState<string>('');
  const pathname = usePathname();
  const backToList = React.useMemo(() => pathname.replace(/\/add$/, ''), [pathname]);

  // مرحله جاری (۰ = تعیین نحوه ارسال)
  const [step, setStep] = React.useState<number>(0);
  // انتخاب مرحله اول
  const [selected, setSelected] = React.useState<
    'taxpayer' | 'trusted_taxpayer_key' | 'trusted_trusted_key'
  >('taxpayer');
  // فایل مرحله دوم
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  // ورودی متنی شناسه/نام فایل به‌صورت «غیرکنترل‌شده»
  const textInputRef = React.useRef<HTMLInputElement | null>(null);  
  // باز/بسته بودن پنجرهٔ صوری انتخاب فایل
  const [showMockPicker, setShowMockPicker] = React.useState(false);
  // تصویر اسکرین‌شات پنجرهٔ ویندوز (مسیر public با فاصله در نام فایل)
  const OPEN_DIALOG_IMG = '/images/Public%20key%20signature%20memory.png';
  // نام کلید ذخیره در «دیتابیس شبیه‌ساز» (localStorage)
  const LS_MEMORY_PUBKEYS = 'modian_memory_public_keys';
  // ذخیره انتخاب کدپستی‌ها برای این مرحله
  const LS_SELECTED_BRANCHES = 'modian_memory_selected_postal_codes';
  // ذخیره انتخاب «ابزار پرداخت» در این مرحله (اختیاری)
  const LS_SELECTED_PAYTOOLS = 'modian_memory_selected_paytools';
  // ذخیره «مشخصات حافظه» و «پایانه‌های فروشگاهی» (مرحله بعدی)
  const LS_MEMORY_DEVICE     = 'modian_memory_device';
  const LS_POS_TERMINALS     = 'modian_pos_terminals';  
  // ذخیره شناسه یکتا (مرحله پایانی)
  const LS_MEMORY_UNIQUE_IDS = 'modian_memory_unique_ids';
  // مقدار فعلی «File name» در پنجرهٔ صوری
  const [mockName, setMockName] = React.useState<string>('');
  // ref برای ورودی File name روی پنجره صوری (جهت Select All)
  const mockInputRef = React.useRef<HTMLInputElement | null>(null);  

  // داده‌های مرحله ۲ (شعب/کدپستی)
  type BranchRow = { id: string; postalCode: string; address: string };
  const [branches, setBranches] = React.useState<BranchRow[]>([]);
  const [branchesLoading, setBranchesLoading] = React.useState(false);
  const [branchesError, setBranchesError] = React.useState<string | null>(null);
  const [selectedPostalCodes, setSelectedPostalCodes] = React.useState<Set<string>>(new Set());
  const [branchPage, setBranchPage] = React.useState(1);
  const PAGE_SIZE = 5;

  // داده‌های مرحله ۳ (ابزار پرداخت)
  type PayToolRow = {
    id: string;
    switchNo: string;     // شماره سوئیچ پرداخت
    merchantId: string;   // کد پذیرنده فروشگاهی
    terminalId: string;   // شماره پایانه
    type: string;         // نوع ابزار پرداخت
  };

  type MemoryPublicKeyRecord = {
    key?: string;
    phoneLast4?: string;
    createdAt?: string;
  };

  type MemoryUniqueIdRecord = {
    phoneLast4?: string;
    uid?: string;
    createdAt?: string;
  };

  type MemoryListRow = {
    uid?: string;
    owner?: string;
    status?: string;
  };

  type TrustedCompanyRecord = {
    name?: string;
  };

  type RegistrationBranchApi = {
    کدپستی?: string;
    postalCode?: string;
    آدرس_شعبه?: string;
    branchAddress?: string;
    address?: string;
  };

  const [paytools] = React.useState<PayToolRow[]>([]);
  const [selectedPaytools, setSelectedPaytools] = React.useState<Set<string>>(new Set());
  const [payPage, setPayPage] = React.useState(1);
  const PAY_PAGE_SIZE = 5;
  // نرمال‌سازی ورودی: فقط a-z و 0-9 و '-'، حداکثر ۳۶ کاراکتر (حروف کوچک)
  const normalizeUid = React.useCallback((s: string) => {
    return s.toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 36);
  }, []);

  // اعتبارسنجی کلید ۳۶کاراکتری
  const isValidPubKey = React.useCallback((s: string) => /^[a-z0-9-]{36}$/.test(s), []);

  // وقتی پنجره باز شد و مقدار mockName تنظیم شد، فوکوس و Select-All انجام شود
  React.useEffect(() => {
    if (showMockPicker && mockInputRef.current) {
      // در فریم رندر بعدی، فوکوس و انتخاب کل متن
      requestAnimationFrame(() => {
        mockInputRef.current?.focus();
        mockInputRef.current?.select();
      });
    }
  }, [showMockPicker, mockName]);

  // ابزار تصادفی
  const pick = React.useCallback(
    (s: string) => s[Math.floor(Math.random() * s.length)],
    [],
  );
  const randDigit = React.useCallback(() => pick('0123456789'), [pick]);
  const randAlnum = React.useCallback(
    (n: number) => {
      const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let out = '';
      for (let i = 0; i < n; i += 1) out += pick(chars);
      return out;
    },
    [pick],
  );
  const randUpperAlnum = React.useCallback(
    (n: number) => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let out = '';
      for (let i = 0; i < n; i += 1) out += pick(chars);
      return out;
    },
    [pick],
  );
  // چهار رقم آخر موبایل: تلاش از localStorage یا متن صفحه؛ در نهایت '0000'
  const getUserPhoneLast4 = React.useCallback(() => {
    try {
      const candidates = [
        localStorage.getItem('modian_user_info'),
        localStorage.getItem('user'),
        localStorage.getItem('auth_user'),
      ].filter(Boolean) as string[];
      for (const c of candidates) {
        const m = c.match(/09\d{9}/);
        if (m) return m[0].slice(-4);
      }
      const body = document?.body?.innerText || '';
      const m2 = body.match(/09\d{9}/);
      if (m2) return m2[0].slice(-4);
    } catch {
      /* ignore */
    }
    return '0000';
  }, []);
  // سازندهٔ کلید مطابق الگوی شما: 8-4-4-4-12 (همه حروف کوچک)
  const genMemoryPublicKey = React.useCallback(() => {
    const part1 = 'mo' + randDigit() + randAlnum(5);                     // mo + 1 رقم + 5 تصادفی
    const part2 = 'n' + randDigit() + randAlnum(2);                       // n + رقم + 2 تصادفی
    const part3 = randAlnum(2) + randDigit() + 'j';                       // 2 تصادفی + رقم + j
    const part4 = getUserPhoneLast4();                                    // 4 رقم آخر موبایل
    const part5 = randAlnum(10) + randDigit() + 'i';                      // 10 تصادفی + رقم + i
    return `${part1}-${part2}-${part3}-${part4}-${part5}`.toLowerCase();
  }, [randDigit, randAlnum, getUserPhoneLast4]);
  // ذخیره در «دیتابیس شبیه‌ساز»: برای هر کاربر (phoneLast4) رکورد قبلی replace شود
  const savePublicKey = (key: string) => {
    const phoneLast4 = getUserPhoneLast4();
    const rec = { key, phoneLast4, createdAt: new Date().toISOString() };
    try {
      const prev = JSON.parse(localStorage.getItem(LS_MEMORY_PUBKEYS) || '[]') as unknown;
      const arr: MemoryPublicKeyRecord[] = Array.isArray(prev)
        ? (prev as MemoryPublicKeyRecord[])
        : [];
      const filtered = arr.filter((r) => r.phoneLast4 !== phoneLast4);
      const next = [rec, ...filtered];
      localStorage.setItem(LS_MEMORY_PUBKEYS, JSON.stringify(next));
    } catch { /* ignore */ }
  };
  // تولید و ذخیره «شناسه یکتا» (TZ + 4 کاراکتر تصادفی Upper/Num)
  // الزام: در چهار کاراکتر حتماً حداقل یک عدد وجود داشته باشد
  const genUniqueId = React.useCallback(() => {
    let s = '';
    do {
      s = randUpperAlnum(4);
    } while (!/[0-9]/.test(s));
    return `TZ${s}`;
  }, [randUpperAlnum]);
  const saveUniqueId = React.useCallback((uid: string) => {
    const phoneLast4 = getUserPhoneLast4();
    try {
      // 1) نگهداری به ازای کاربر
      const prev = JSON.parse(localStorage.getItem(LS_MEMORY_UNIQUE_IDS) || '[]') as unknown;
      const arr: MemoryUniqueIdRecord[] = Array.isArray(prev)
        ? (prev as MemoryUniqueIdRecord[])
        : [];
      const filtered = arr.filter((r) => r.phoneLast4 !== phoneLast4);
      localStorage.setItem(
        LS_MEMORY_UNIQUE_IDS,
        JSON.stringify([{ phoneLast4, uid, createdAt: new Date().toISOString() }, ...filtered]),
      );
      // 2) به‌روزرسانی ردیف همان مالک در لیست اصلی
      const listPrev = JSON.parse(localStorage.getItem(LS_KEY) || '[]') as unknown;
      const arrList: MemoryListRow[] = Array.isArray(listPrev)
        ? (listPrev as MemoryListRow[])
        : [];
      let updated = false;
      const merged: MemoryListRow[] = arrList.map((r) => {
        if (r.owner === phoneLast4) {
          updated = true;
          return { ...r, uid };
        }
        return r;
      });
      // اگر به هر دلیل ردیفی برای این مالک نبود، یک ردیف مینیمال بسازیم
      const next: MemoryListRow[] = updated
        ? merged
        : [{ uid, owner: phoneLast4, status: 'فعال' }, ...merged];
      localStorage.setItem(LS_KEY, JSON.stringify(next));
    } catch {}
  }, [getUserPhoneLast4]);
  const getSavedUniqueIdForCurrentUser = React.useCallback((): string | null => {
    try {
      const phoneLast4 = getUserPhoneLast4();
      const prev = JSON.parse(localStorage.getItem(LS_MEMORY_PUBKEYS) || '[]');
      const arr = Array.isArray(prev) ? prev : [];
      const rec = arr.find((r) => r?.phoneLast4 === phoneLast4);
      return rec?.key || null;
    } catch {
      return null;
    }
  }, [getUserPhoneLast4]);
  // اگر کاربر قبلاً کلید دارد، برگردان (برای جلوگیری از صدور کلید جدید در دفعات بعد)
  const getSavedPublicKeyForCurrentUser = React.useCallback((): string | null => {
    try {
      const phoneLast4 = getUserPhoneLast4();
      const prev = JSON.parse(localStorage.getItem(LS_MEMORY_PUBKEYS) || '[]') as unknown;
      const arr: MemoryPublicKeyRecord[] = Array.isArray(prev)
        ? (prev as MemoryPublicKeyRecord[])
        : [];
      const rec = arr.find((r) => r.phoneLast4 === phoneLast4);
      return rec?.key || null;
    } catch {
      return null;
    }
  }, [getUserPhoneLast4]);
  // بارگذاری شعب از API ثبت‌نام (همان استفاده‌ی صفحه‌ی registration-information) :contentReference[oaicite:1]{index=1}
  const loadBranches = React.useCallback(async () => {
    setBranchesLoading(true);
    setBranchesError(null);
    try {
      const res = await fetch(`${API_BASE}/simulators/modian/registration`, { credentials: 'include' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as { branches?: RegistrationBranchApi[] | null };
      const arr = json.branches ?? [];
      const mapped: BranchRow[] = arr
        .map((b, i) => ({
          id: String(b.کدپستی ?? b.postalCode ?? i),
          postalCode: String(b.کدپستی ?? b.postalCode ?? ''),
          address: String(b.آدرس_شعبه ?? b.branchAddress ?? b.address ?? ''),
        }))
        .filter((r) => r.postalCode || r.address);
      setBranches(mapped);
      setBranchPage(1);
    } catch (e: unknown) {
      const msg =
        e instanceof Error
          ? e.message
          : (e as { message?: unknown } | null | undefined)?.message?.toString() ??
            'خطا در دریافت شعب';
      console.error(e);
      setBranchesError(msg);
    } finally {
      setBranchesLoading(false);
    }
  }, []);
  // وقتی وارد مرحله ۲ شدیم، یکبار داده را لود کن
  React.useEffect(() => {
    if (step === 2 && !branchesLoading && branches.length === 0) {
      loadBranches();
    }
  }, [step, branchesLoading, branches.length, loadBranches]);

  const genId = (prefix = '') =>
    prefix +
    Math.random().toString(36).slice(2, 8).toUpperCase() +
    Math.random().toString(36).slice(2, 4).toUpperCase();

  /** یک ردیف کامل برای مالک فعلی می‌سازد/به‌روزرسانی می‌کند (در مرحلهٔ پایانی صدا زده می‌شود) */
  const upsertRowForOwner = React.useCallback(
    (finalUid: string) => {
    const phoneLast4 = getUserPhoneLast4();
    // نام شرکت معتمد: برای «مودی» = ندارد، در غیر این صورت آخرین شرکت انتخاب‌شده
    let companyName = 'ندارد';
    try {
      if (selected !== 'taxpayer') {
        const list = JSON.parse(localStorage.getItem(LS_TRUSTED) || '[]') as unknown;
        if (Array.isArray(list) && list.length) {
          const typed = list as TrustedCompanyRecord[];
          companyName = typed[typed.length - 1]?.name || 'ندارد';
        }
      }
    } catch {
      /* ignore */
    }
    const faNow = new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric', month: '2-digit', day: '2-digit',
    }).format(new Date());
    const sendMethod =
      selected === 'trusted_trusted_key'
        ? 'با کلید شرکت معتمد / سامانه دولتی'
        : selected === 'trusted_taxpayer_key'
        ? 'با کلید مودی'
        : 'مودی';
    // کلید امضا ذخیره‌شده برای همین کاربر (یا مقدار تایپ‌شده در فیلد)
    const signKey = getSavedPublicKeyForCurrentUser() || fileName || '';

    const newRow = {
      uid: finalUid,
      signKey,
      companyName,
      sendMethod,
      status: 'فعال',
      createdAt: faNow,
      owner: phoneLast4,
    };
    try {
      const prev = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
      const arr  = Array.isArray(prev) ? prev : [];
      // همهٔ ردیف‌های مالکان دیگر حفظ شوند؛ ردیفِ همین مالک جایگزین شود
      const others = arr.filter((r) => r?.owner && r.owner !== phoneLast4);
      localStorage.setItem(LS_KEY, JSON.stringify([newRow, ...others]));
    } catch {
      /* ignore */
    }
  },
    [selected, fileName, getSavedPublicKeyForCurrentUser, getUserPhoneLast4],
  );
  const onNext = () => {
    if (step === 0) setStep(1); // از مرحله ۱ به ۲
    else if (step < STEPS.length - 1) setStep(step + 1);
  };
  const onPrev = () => setStep((s) => Math.max(0, s - 1));
  // فعال/غیرفعال بودن دکمه «بعدی» (مرحله ۲: حداقل یک کدپستی تیک خورده باشد)
  const isNextEnabled =
    step === 0
      ? true
      : step === 1
      ? isValidPubKey(fileName)
      : step === 2
      ? selectedPostalCodes.size > 0
      : step === 3
      ? true // مرحله ابزار پرداخت اختیاری است
      : step === 4
      ? true // «اطلاعات حافظه/پایانه» — فعلاً اختیاری
      : true;


    /** استپر بالای کارت */
  const Stepper = () => {
    // در مرحله اول فقط همین مرحله + خط‌چین تا انتهای کادر نمایش داده شود
    if (step === 0) {
      return (
        <div className="px-1">
          <div className="flex items-start">
            <div className="flex flex-col items-center mr-2">
              <span className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-green-600" />
              <span className="mt-2 text-[11px] text-gray-600 text-center leading-4">
                {STEPS[0]}
              </span>
            </div>
            {/* خط‌چین تا انتهای کادر */}
            <div className="mt-1 flex-1 border-t border-dashed border-gray-400" />
          </div>
        </div>
      );
    }

    // از مرحله دوم به بعد: استپر کامل
    return (
      <div className="px-1">
        <div className="flex items-start gap-4">
          {STEPS.map((t, i) => {
            const isDone = i < step;
            const isCurrent = i === step;
            return (
              <div key={t} className="flex items-start gap-2 min-w-[120px]">
                <div className="flex flex-col items-center">
                  {/* نقطه‌ی مرحله: جاری = دایره سبز، تمام‌شده = تیک سبز بدون دایره، بعدی‌ها = خاکستری */}
                  {isCurrent ? (
                    <span className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-green-600" />
                  ) : isDone ? (
                    /* تیک سبز بزرگ بدون هیچ حاشیه/دایره‌ای */
                    <svg
                      className="h-4 w-4 text-green-600"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3.5 8.5l2.5 2.5 6-6" />
                    </svg>
                  ) : (
                    <span className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-gray-300" />
                  )}
                  <span className="mt-2 text-[11px] text-gray-600 text-center leading-4">
                    {t}
                  </span>
                </div>
                {i !== STEPS.length - 1 && (
                  /* اتصال بین نقاط: قبل از مرحله فعلی = خط سبز توپر، بقیه = خط‌چین خاکستری */
                  <div
                    className={
                      'mt-1 h-0.5 w-14 border-t ' +
                      (i < step ? 'border-green-600' : 'border-dashed border-gray-400')
                    }
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  /** محتوای داخل کارت برای هر مرحله */
  const StepContent = () => {
    // مرحله ۰: تعیین نحوه ارسال
    if (step === 0) {
      return (
        <>
          <h2 className="mt-6 pr-1 text-right text-base md:text-lg text-gray-700">
            نحوه ارسال صورت‌حساب را انتخاب کنید
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 pr-1 ml-auto">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="sendMethod"
                className="h-4 w-4"
                checked={selected === 'taxpayer'}
                onChange={() => setSelected('taxpayer')}
              />
              <span>توسط مودی</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="sendMethod"
                className="h-4 w-4"
                checked={selected === 'trusted_taxpayer_key'}
                onChange={() => setSelected('trusted_taxpayer_key')}
              />
              <span>توسط شرکت معتمد / سامانه های دولتی - با کلید مودی</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="sendMethod"
                className="h-4 w-4"
                checked={selected === 'trusted_trusted_key'}
                onChange={() => setSelected('trusted_trusted_key')}
              />
              <span>
                توسط شرکت معتمد / سامانه های دولتی - با کلید شرکت معتمد / سامانه های دولتی
              </span>
            </label>
          </div>
        </>
      );
    }

    // مرحله ۱: تعیین کلید عمومی امضا حافظه
    return (
      <>
        <h2 className="mt-6 pr-1 text-right text-base md:text-lg text-gray-700">
          لطفا کلید عمومی امضا حافظه را بارگذاری کنید.
        </h2>
        {/* لیبل سمت راستِ بالای فیلد */}
        <div className="mt-6 pr-1 text-right text-xs text-gray-500">بارگذاری فایل</div>
        {/* فیلد بارگذاری فایل با آیکون گیره و دکمه × */}
        <div className="mt-1 flex items-center">
          <div className="relative w-full max-w-3xl ml-auto">
            {/* input واقعی برای انتخاب فایل */}
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                // اگر از انتخاب واقعی فایل استفاده شد، نام را در state بنویس
                setFileName(f ? normalizeUid(f.name) : '');
              }}
            />
            {/* کادر قابل نوشتن */}
            <div className="flex h-11 w-full items-center justify-between rounded-md border bg-white px-3">
              <input
                ref={textInputRef}
                type="text"
                dir="ltr"
                value={fileName}
                maxLength={36}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                inputMode="text"
                // تایپ آزاد (بدون فیلتر لحظه‌ای) تا ۳۶ کاراکتر
                onChange={(e) => setFileName(e.target.value.slice(0, 36))}
                // نرمال‌سازی هنگام ترک فیلد
                onBlur={() => setFileName((v) => normalizeUid(v))}
                // پیست: پاکسازی و محدودسازی
                onPaste={(e) => {
                  e.preventDefault();
                  const t = e.clipboardData.getData('text');
                  setFileName(normalizeUid(t));
                }}
                placeholder=""
                className="flex-grow bg-transparent outline-none text-gray-700 text-right truncate"
              />
              {/* دکمه */}
              <button
                type="button"
                onClick={() => {
                  setFileName('');
                  if (fileInputRef.current) fileInputRef.current.value = '';
                }}
                className="px-1 text-2xl leading-none text-gray-700"
                title="حذف فایل"
              >
                ×
              </button>
              {/* دکمه گیره برای باز کردن پنجره انتخاب فایل */}
              <button
                type="button"
                onClick={() => {
                  // اگر کلید قبلاً برای این کاربر وجود دارد همان را نمایش بده؛ وگرنه یکی بساز
                  const existing = getSavedPublicKeyForCurrentUser();
                  const k = existing || genMemoryPublicKey();
                  setMockName(k); // مقدار File name پنجره صوری
                  setShowMockPicker(true);
                }}
                className="ml-2 text-gray-600 rotate-12"
                title="انتخاب فایل"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.5V7a5 5 0 0 0-10 0v9a3 3 0 0 0 6 0V8.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* پنجرهٔ صوری انتخاب فایل (کاملاً شبیه ویندوز با تصویر پس‌زمینه) */}
        {showMockPicker && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/30"
            onClick={() => setShowMockPicker(false)}
          >
            {/* ظرف اصلی با موقعیت relative برای لایه‌گذاری */}
            <div
              className="mt-10 w-[860px] max-w-[95vw] rounded-md border bg-white shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* تصویر کامل پنجره ویندوز */}
              <img
                src={OPEN_DIALOG_IMG}
                alt="Open dialog mock"
                className="w-full h-auto select-none pointer-events-none rounded-md"
              />

              {/* یادداشت ما: داخل کادر قرمز اسکرین (با جایگذاری شناور) */}
              <div
                className="absolute text-right leading-7 p-4 bg-transparent rounded-md"
                style={{
                  /* جای‌گذاری روی مربع قرمزِ اسکرین (تقریبی و واکنش‌گرا) */
                  top: '21%',
                  left: '26%',
                  right: '4%',
                  bottom: '33%',
                }}
              >
                <div className="font-semibold mb-2">کاربر گرامی</div>
                <div>این یک پلتفرم آموزشی است</div>
                <div className="mt-1">
                  جهت کسب اطلاعات از نحوه تهیه فایل «کلید عمومی امضا حافظه»
                  <br />
                  به کلید <span className="px-1 font-medium">راهنمای صفحه</span> مراجعه کنید.
                </div>

                <div className="mt-3">
                  در این مرحله با فشردن کلید <b>Open</b> از «فایل آماده» استفاده نمایید.
                </div>
              </div>

              {/* فیلد File name واقعی روی تصویر (Overlay) */}
              <input
                ref={mockInputRef}
                value={mockName}
                onChange={(e) => setMockName(normalizeUid(e.target.value))}
                className="absolute right-[255px] bg-transparent bottom-[22px] flex gap-[12px] bottom-[7px]"
                style={{
                  // موقعیت‌دهی روی فیلد File name در تصویر
                  left: '32%',
                  right: '24%',
                  bottom: '10.5%',
                }}
                dir="ltr"
                maxLength={36}
              />

              {/* دکمه‌های فعال Open/Cancel در پایین راست تصویر */}
              <div className="absolute right-4 bottom-4 flex gap-2">
                {/* ابتدا Cancel سپس Open */}
                <button
                  type="button"
                  onClick={() => setShowMockPicker(false)}
                  className="absolute right-[40px] bottom-[22px] flex gap-[12px] bottom-[7px]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const key = normalizeUid(mockName || genMemoryPublicKey());
                    // نشاندن مقدار در فیلد (کنترل‌شده با state)
                    setFileName(key);
                    // ذخیره در دیتابیس شبیه‌ساز
                    savePublicKey(key);
                    setShowMockPicker(false);
                  }}
                  className="absolute right-[155px] bottom-[22px] flex gap-[12px] bottom-[7px]"
                >
                  Open
                </button>
              </div>

            </div>
          </div>
        )}      
      </>
    );
  };

  // ابزارهای مرحله ۲
  const toggleSelect = (pc: string, checked: boolean) => {
    setSelectedPostalCodes((prev) => {
      const next = new Set(prev);
      if (checked) next.add(pc);
      else next.delete(pc);
      return next;
    });
  };
  const totalPages = Math.max(1, Math.ceil(branches.length / PAGE_SIZE));
  const pageSlice = branches.slice((branchPage - 1) * PAGE_SIZE, branchPage * PAGE_SIZE);

  // کمکی‌های مرحله ۳
  const togglePaytool = (id: string, checked: boolean) => {
    setSelectedPaytools((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  };
  const payTotalPages = Math.max(1, Math.ceil(paytools.length / PAY_PAGE_SIZE));
  const paySlice = paytools.slice((payPage - 1) * PAY_PAGE_SIZE, payPage * PAY_PAGE_SIZE);

  // اگر داده‌ای برای ابزار پرداخت نداریم، به‌صورت پیش‌فرض خالی می‌ماند؛
  // در آینده می‌توان از API خواند و setPaytools(...) کرد.

  // ----------------------------
  // مرحله ۴: «اطلاعات حافظه و پایانه فروشگاهی»
  // ----------------------------
  type TerminalRow = { id: string; serial: string; type: string; model: string };
  const [memSerial, setMemSerial] = React.useState<string>('');
  const [memType, setMemType]     = React.useState<string>(''); // 'hardware' | 'software'
  const [memModel, setMemModel]   = React.useState<string>('');
  const [posRows, setPosRows]     = React.useState<TerminalRow[]>([
    { id: genId('POS-'), serial: '', type: '', model: '' },
  ]);

  const addPosRow = () =>
    setPosRows((r) => [...r, { id: genId('POS-'), serial: '', type: '', model: '' }]);
  const removePosRow = (id: string) =>
    setPosRows((r) => (r.length > 1 ? r.filter((x) => x.id !== id) : r)); // حداقل یک ردیف بماند

  // پرکردن اولیه از localStorage وقتی وارد مرحله ۴ می‌شویم
  React.useEffect(() => {
    if (step !== 4) return;
    try {
      const md = JSON.parse(localStorage.getItem(LS_MEMORY_DEVICE) || '{}');
      if (md) {
        setMemSerial(md.serial || '');
        setMemType(md.type || '');
        setMemModel(md.model || '');
      }
      const prs = JSON.parse(localStorage.getItem(LS_POS_TERMINALS) || '[]') as unknown;
      if (Array.isArray(prs) && prs.length) {
        setPosRows(
          (prs as Array<{ id?: string; serial?: unknown; type?: unknown; model?: unknown }>).map(
            (p) => ({
              id: p.id || genId('POS-'),
              serial: String(p.serial ?? ''),
              type: String(p.type ?? ''),
              model: String(p.model ?? ''),
            }),
          ),
        );
      }
    } catch {
      /* ignore: در صورت خطا فقط از مقادیر پیش‌فرض استفاده می‌شود */
    }
  }, [step]);

  // ----------------------------
  // مرحله ۵: «تایید نهایی» — وضعیت‌های کمکی
  // ----------------------------
  const [showPubKey, setShowPubKey] = React.useState(false);
  // اگر کاربر صفحه را ریفرش کرد یا از مسیر دیگری برگشت، دادهٔ شعب/انتخاب‌ها را برای خلاصه‌نمایش بارگیری کن
  React.useEffect(() => {
    if (step !== 5) return;
    // ۱) اگر شعب خالی است، از API بگیر
    if (branches.length === 0 && !branchesLoading) {
      loadBranches().catch(() => void 0);
    }
    // ۲) انتخاب‌ها را از localStorage بازگردانی کن (در صورت خالی بودن set)
    try {
      if (selectedPostalCodes.size === 0) {
        const raw = localStorage.getItem(LS_SELECTED_BRANCHES);
        if (raw) setSelectedPostalCodes(new Set<string>(JSON.parse(raw)));
      }
    } catch {
      /* ignore */
    }
  }, [step, branches.length, branchesLoading, selectedPostalCodes.size, loadBranches]);

  // ----------------------------
  // مرحله ۶: «دریافت شناسه یکتا» — ایجاد/بازیابی و ذخیره
  // ----------------------------
  const [finalUID, setFinalUID] = React.useState<string>('');
  React.useEffect(() => {
    if (step !== 6) return;
    // اگر شناسهٔ ذخیره‌شده با قاعدهٔ جدید ناسازگار است، حذف و دوباره بساز
    const existing = getSavedUniqueIdForCurrentUser();
    const isValidWithDigit =
      typeof existing === 'string' &&
      existing.length === 6 &&
      existing.startsWith('TZ') &&
      /^[A-Z0-9]{6}$/.test(existing) &&
      /\d/.test(existing.slice(2)); // در ۴ کاراکتر انتهایی حداقل یک رقم باشد

    let uid = existing || '';
    if (!isValidWithDigit) {
      // پاک کردن رکورد قبلی این کاربر از localStorage
      try {
        const phoneLast4 = getUserPhoneLast4();
        const prev = JSON.parse(localStorage.getItem(LS_MEMORY_UNIQUE_IDS) || '[]');
        const arr: MemoryUniqueIdRecord[] = Array.isArray(prev)
          ? (prev as MemoryUniqueIdRecord[])
          : [];
        const filtered = arr.filter((r) => r.phoneLast4 !== phoneLast4);
        localStorage.setItem(LS_MEMORY_UNIQUE_IDS, JSON.stringify(filtered));
      } catch {
        /* ignore */
      }
      // تولید و ذخیره شناسهٔ جدید مطابق قاعدهٔ تازه
      uid = genUniqueId();
      saveUniqueId(uid);
    }
    setFinalUID(uid);
    // همیشه بعد از نهایی شدن شناسه، ردیف کاربر را در لیست ذخیره/جایگزین کن
    upsertRowForOwner(uid);
  }, [step, genUniqueId, saveUniqueId, getSavedUniqueIdForCurrentUser, upsertRowForOwner, getUserPhoneLast4]);
  return (
    <section className="rtl text-sm">
      {/* کادر سفید مرحله */}
      <div className="m-4 rounded-md border bg-white p-6">
        <Stepper />

        {/* محتوای هر مرحله */}
        {step <= 1 && <StepContent />}
        {step === 2 && (
          <>
            <h2 className="mt-6 pr-1 text-right text-base md:text-lg text-gray-700">
              لطفا یک یا چند کد پستی را انتخاب کنید.
            </h2>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full max-w-4xl ml-auto border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-green-50 text-gray-700">
                    <th className="w-12 px-2 py-2 text-center border-b">—</th>
                    <th className="w-48 px-3 py-2 text-right border-b">کد پستی</th>
                    <th className="px-3 py-2 text-right border-b">آدرس</th>
                  </tr>
                </thead>
                <tbody>
                  {branchesLoading && (
                    <tr><td colSpan={3} className="px-3 py-6 text-center text-gray-500">در حال بارگذاری…</td></tr>
                  )}
                  {branchesError && !branchesLoading && (
                    <tr><td colSpan={3} className="px-3 py-6 text-center text-red-600">{branchesError}</td></tr>
                  )}
                  {!branchesLoading && !branchesError && pageSlice.map((r) => (
                    <tr key={r.id} className="odd:bg-white even:bg-gray-50">
                      <td className="px-2 py-2 border-t text-center">
                        <input
                          type="checkbox"
                          checked={selectedPostalCodes.has(r.postalCode)}
                          onChange={(e) => toggleSelect(r.postalCode, e.target.checked)}
                          className="h-4 w-4"
                        />
                      </td>
                      <td className="px-3 py-2 border-t text-right">{r.postalCode || '—'}</td>
                      <td className="px-3 py-2 border-t text-right">{r.address || '—'}</td>
                    </tr>
                  ))}
                  {!branchesLoading && !branchesError && pageSlice.length === 0 && (
                    <tr><td colSpan={3} className="px-3 py-6 text-center text-gray-500">داده‌ای برای نمایش وجود ندارد.</td></tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* صفحه‌بندی ساده */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                disabled={branchPage <= 1}
                onClick={() => setBranchPage((p) => Math.max(1, p - 1))}
                className={`px-2 py-1 rounded border ${branchPage <= 1 ? 'text-gray-400 bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
                aria-label="صفحه قبلی"
              >
                «
              </button>
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-600 text-white">
                {branchPage}
              </span>
              <button
                type="button"
                disabled={branchPage >= totalPages}
                onClick={() => setBranchPage((p) => Math.min(totalPages, p + 1))}
                className={`px-2 py-1 rounded border ${branchPage >= totalPages ? 'text-gray-400 bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
                aria-label="صفحه بعدی"
              >
                »
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="mt-6 pr-1 text-right text-base md:text-lg text-gray-700">
              لطفا یک یا چند ابزار پرداخت به شناسه یکتا حافظه مالیاتی تخصیص دهید (اختیاری).
            </h2>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full max-w-5xl ml-auto border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-green-50 text-gray-700">
                    <th className="w-12 px-2 py-2 text-center border-b">—</th>
                    <th className="w-48 px-3 py-2 text-right border-b">شماره سوئیچ پرداخت</th>
                    <th className="w-56 px-3 py-2 text-right border-b">کد پذیرنده فروشگاهی</th>
                    <th className="w-40 px-3 py-2 text-right border-b">شماره پایانه</th>
                    <th className="px-3 py-2 text-right border-b">نوع ابزار پرداخت</th>
                  </tr>
                </thead>
                <tbody>
                  {paySlice.map((r) => (
                    <tr key={r.id} className="odd:bg-white even:bg-gray-50">
                      <td className="px-2 py-2 border-t text-center">
                        <input
                          type="checkbox"
                          checked={selectedPaytools.has(r.id)}
                          onChange={(e) => togglePaytool(r.id, e.target.checked)}
                          className="h-4 w-4"
                        />
                      </td>
                      <td className="px-3 py-2 border-t text-right">{r.switchNo || '—'}</td>
                      <td className="px-3 py-2 border-t text-right">{r.merchantId || '—'}</td>
                      <td className="px-3 py-2 border-t text-right">{r.terminalId || '—'}</td>
                      <td className="px-3 py-2 border-t text-right">{r.type || '—'}</td>
                    </tr>
                  ))}

                  {/* حالت بدون داده: نمایش تصویر/آیکون POS + پیام */}
                  {paySlice.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-3 py-10">
                        <div className="flex flex-col items-center justify-center text-gray-500">
                          {/* SVG ساده POS با بالون پیام */}
                          <svg width="96" height="96" viewBox="0 0 96 96" aria-hidden="true">
                            <rect x="26" y="20" width="44" height="52" rx="6" stroke="#9CA3AF" fill="none" strokeWidth="2"/>
                            <rect x="32" y="28" width="32" height="6" rx="2" fill="#E5E7EB"/>
                            <rect x="32" y="40" width="32" height="6" rx="2" fill="#E5E7EB"/>
                            <rect x="36" y="58" width="24" height="10" rx="3" fill="#D1D5DB"/>
                            <path d="M78 34c5 0 9 3.5 9 7.8 0 2.9-1.9 5.4-4.8 6.7l1.3 5.5-5.4-3c-.7.1-1.4.2-2.1.2-5 0-9-3.5-9-7.8S73 34 78 34z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1.5"/>
                          </svg>
                          <div className="mt-3 text-sm">داده‌ای یافت نشد.</div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* صفحه‌بندی */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                disabled={payPage <= 1}
                onClick={() => setPayPage((p) => Math.max(1, p - 1))}
                className={`px-2 py-1 rounded border ${payPage <= 1 ? 'text-gray-400 bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
                aria-label="صفحه قبلی"
              >
                «
              </button>
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-600 text-white">
                {payPage}
              </span>
              <button
                type="button"
                disabled={payPage >= payTotalPages}
                onClick={() => setPayPage((p) => Math.min(payTotalPages, p + 1))}
                className={`px-2 py-1 rounded border ${payPage >= payTotalPages ? 'text-gray-400 bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
                aria-label="صفحه بعدی"
              >
                »
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            {/* کادر ۱: مشخصات حافظه مالیاتی */}
            <section className="relative border border-green-600 rounded-md p-4 bg-white mt-6 max-w-5xl ml-auto">
              <span className="absolute -top-7 right-8">
                <span className="inline-block bg-green-600 text-white text-xs md:text-sm px-3 py-1 rounded shadow">
                  مشخصات حافظه مالیاتی
                </span>
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-600 text-right">سریال حافظه مالیاتی</label>
                  <input
                    value={memSerial}
                    onChange={(e) => setMemSerial(e.target.value)}
                    className="border rounded-md px-3 py-2 text-right"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-600 text-right">نوع حافظه مالیاتی</label>
                  <select
                    value={memType}
                    onChange={(e) => setMemType(e.target.value)}
                    className="border rounded-md px-3 py-2 text-right bg-white"
                  >
                    <option value="">— انتخاب کنید —</option>
                    <option value="hardware">سخت افزاری</option>
                    <option value="software">نرم افزاری</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-600 text-right">مدل حافظه مالیاتی</label>
                  <input
                    value={memModel}
                    onChange={(e) => setMemModel(e.target.value)}
                    className="border rounded-md px-3 py-2 text-right"
                  />
                </div>
              </div>
            </section>

            {/* کادر ۲: مشخصات پایانه‌های فروشگاهی */}
            <section className="relative border border-green-600 rounded-md p-4 bg-white mt-10 max-w-5xl ml-auto">
              <span className="absolute -top-7 right-8">
                <span className="inline-block bg-green-600 text-white text-xs md:text-sm px-3 py-1 rounded shadow">
                  مشخصات پایانه های فروشگاهی
                </span>
              </span>

              <div className="space-y-3 mt-4">
                {/* هدر ستون‌ها */}
                <div className="grid grid-cols-12 text-xs text-gray-600 pr-1">
                  <div className="col-span-1" />
                  <div className="col-span-4 text-right">سریال پایانه فروشگاهی</div>
                  <div className="col-span-4 text-right">نوع پایانه فروشگاهی</div>
                  <div className="col-span-3 text-right">مدل پایانه فروشگاهی</div>
                </div>

                {posRows.map((r) => (
                  <div key={r.id} className="grid grid-cols-12 items-center gap-3">
                    {/* حذف */}
                    <button
                      type="button"
                      onClick={() => removePosRow(r.id)}
                      className="col-span-1 text-center text-xl text-gray-500 hover:text-red-600"
                      title="حذف"
                    >
                      ×
                    </button>

                    {/* سریال */}
                    <input
                      value={r.serial}
                      onChange={(e) =>
                        setPosRows((rows) =>
                          rows.map((x) => (x.id === r.id ? { ...x, serial: e.target.value } : x)),
                        )
                      }
                      className="col-span-4 border rounded-md px-3 py-2 text-right"
                    />

                    {/* نوع */}
                    <select
                      value={r.type}
                      onChange={(e) =>
                        setPosRows((rows) =>
                          rows.map((x) => (x.id === r.id ? { ...x, type: e.target.value } : x)),
                        )
                      }
                      className="col-span-4 border rounded-md px-3 py-2 text-right bg-white"
                    >
                      <option value="">— انتخاب کنید —</option>
                      <option>پایانه فروش ثابت</option>
                      <option>پایانه فروش سیار</option>
                      <option>موبایل پوز یا MPOS</option>
                      <option>دستگاه‌های PC-POS</option>
                      <option>دستگاه PDA</option>
                      <option>پایانه فروش بلوتوثی</option>
                      <option>پایانه فروش اینترنتی یا وای‌فای</option>
                      <option>پایانه فروش شبکه‌ای یا LAN</option>
                    </select>

                    {/* مدل */}
                    <input
                      value={r.model}
                      onChange={(e) =>
                        setPosRows((rows) =>
                          rows.map((x) => (x.id === r.id ? { ...x, model: e.target.value } : x)),
                        )
                      }
                      className="col-span-3 border rounded-md px-3 py-2 text-right"
                    />
                  </div>
                ))}

                {/* افزودن ردیف */}
                <button
                  type="button"
                  onClick={addPosRow}
                  className="mt-2 text-sm text-green-700 hover:text-green-800 pr-1"
                >
                  + افزودن پایانه فروشگاهی
                </button>
              </div>
            </section>
          </>
        )}

        {/* دکمه‌ها: فقط تا قبل از «تایید نهایی» (یعنی step < 5) */}
        {step < 5 && (
          <div className="mt-10 flex w-full items-center justify-between pr-1">
            {/* سمت چپ: انصراف */}
            <button
              type="button"
              onClick={() => router.push(backToList)}
              className="px-4 py-2 rounded-md border border-black hover:bg-gray-50"
            >
              انصراف
            </button>

            {/* سمت راست: قبلی و بعدی */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onPrev}
                className="px-4 py-2 rounded-md border border-black text-black"
              >
                قبلی
              </button>
              <button
                type="button"
                disabled={!isNextEnabled}
                onClick={() => {
                if (step === 0) {
                  // حرکت به مرحله بعد
                  onNext();
                } else if (step === 1) {
                  // در این مرحله دیگر چیزی در لیست ثبت نمی‌کنیم؛
                  // ثبت ردیف نهایی فقط در مرحله «دریافت شناسه یکتا» انجام می‌شود (saveUniqueId).
                  onNext();
                } else if (step === 2) {
                  // ذخیره انتخاب کدپستی‌ها و رفتن به مرحله بعد
                  try {
                    localStorage.setItem(LS_SELECTED_BRANCHES, JSON.stringify(Array.from(selectedPostalCodes)));
                  } catch {
                    /* ignore: خطای localStorage نباید مانع ادامه سناریوی آموزشی شود */
                  }
                  onNext();
                } else if (step === 3) {
                  // مرحله اختیاری: ذخیره انتخاب ابزار پرداخت (اگر بود) و ادامه
                  try {
                    localStorage.setItem(LS_SELECTED_PAYTOOLS, JSON.stringify(Array.from(selectedPaytools)));
                  } catch {
                    /* ignore: خطای localStorage نباید مانع ادامه سناریوی آموزشی شود */
                  }
                  onNext();
                } else if (step === 4) {
                  // ذخیره «مشخصات حافظه» و «پایانه‌ها» و سپس ادامه
                  try {
                    localStorage.setItem(
                      LS_MEMORY_DEVICE,
                      JSON.stringify({ serial: memSerial, type: memType, model: memModel }),
                    );
                    localStorage.setItem(LS_POS_TERMINALS, JSON.stringify(posRows));
                  } catch {
                    /* ignore: خطای localStorage نباید مانع ادامه سناریوی آموزشی شود */
                  }
                  onNext();     
                } else {
                  onNext();
                }
              }}
              className={`px-4 py-2 rounded-md ${
                isNextEnabled
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              بعدی
            </button>
            </div>
          </div>
        )}
        {step === 5 && (
          <>
            {/* ردیف بالا: کلید عمومی امضا و سپس نحوه ارسال */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl ml-auto">
              {/* کلید عمومی امضا */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-600 text-right">کلید عمومی امضا</label>
                <div className="flex items-center gap-2">
                  <input
                    dir="ltr"
                    readOnly
                    value={
                      showPubKey
                        ? (getSavedPublicKeyForCurrentUser() || fileName || '')
                        : (getSavedPublicKeyForCurrentUser() || fileName || '').replace(/./g, '•')
                    }
                    className="flex-1 border rounded-md px-3 py-2 bg-gray-50 text-right"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPubKey((v) => !v)}
                    className="h-9 w-9 border rounded-md flex items-center justify-center bg-white hover:bg-gray-50"
                    title={showPubKey ? 'مخفی کردن' : 'نمایش'}
                    aria-label="toggle-visibility"
                  >
                    {/* آیکون چشم ساده */}
                    {showPubKey ? (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.11 1 12c.74-1.73 2-3.42 3.53-4.94M9.9 4.24A10.94 10.94 0 0 1 12 4c5 0 9.27 3.89 11 8-1 2.33-2.67 4.55-4.73 6.06M1 1l22 22" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* نحوه ارسال صورتحساب */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-600 text-right">نحوه ارسال صورت‌حساب</label>
                <input
                  value={
                    selected === 'trusted_trusted_key'
                      ? 'شرکت معتمد / سامانه‌های دولتی (کلید شرکت معتمد)'
                      : selected === 'trusted_taxpayer_key'
                      ? 'شرکت معتمد / سامانه‌های دولتی (با کلید مودی)'
                      : 'مودی'
                  }
                  readOnly
                  className="border rounded-md px-3 py-2 text-right bg-gray-50"
                />
              </div>              
            </div>

            {/* کادر شعب مرتبط */}
            <section className="relative border border-green-600 rounded-md p-4 bg-white mt-8 max-w-5xl ml-auto">
              <span className="absolute -top-7 right-8">
                <span className="inline-block bg-green-600 text-white text-xs md:text-sm px-3 py-1 rounded shadow">
                  شعب مرتبط با شناسه یکتا
                </span>
              </span>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-green-50 text-gray-700">
                      <th className="w-48 px-3 py-2 text-right border-b">کد پستی</th>
                      <th className="px-3 py-2 text-right border-b">آدرس</th>
                    </tr>
                  </thead>
                  <tbody>
                    {branches
                      .filter((b) => selectedPostalCodes.has(b.postalCode))
                      .map((b) => (
                        <tr key={b.id} className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-2 border-t text-right">{b.postalCode}</td>
                          <td className="px-3 py-2 border-t text-right">{b.address}</td>
                        </tr>
                      ))}
                    {Array.from(selectedPostalCodes).length === 0 && (
                      <tr>
                        <td colSpan={2} className="px-3 py-6 text-center text-gray-500">
                          داده‌ای یافت نشد.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* دکمه‌ها: در مرحله تایید نهایی زیر جدول شعب نمایش داده شود */}
            <div className="mt-10 flex w-full items-center justify-between pr-1 max-w-5xl ml-auto">
              <button
                type="button"
                onClick={() => router.push(backToList)}
                className="px-4 py-2 rounded-md border border-black hover:bg-gray-50"
              >
                انصراف
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onPrev}
                  className="px-4 py-2 rounded-md border border-black text-black"
                >
                  قبلی
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
                >
                  اتمام
                </button>              </div>
            </div>
          </>
        )}
        {step === 6 && (
          <>
            <div className="mt-16 text-right pr-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                شناسه یکتا شما:
                <span className="text-blue-600 mr-3 select-all" dir="ltr">{finalUID}</span>
              </h2>
              <div className="mt-10 flex justify-end">
                <button
                  type="button"
                  onClick={() => router.push(backToList)}
                  className="px-5 py-2.5 rounded-md bg-green-600 text-white hover:bg-green-700"
                >
                  بستن
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
