//dev/null
//src/app/simulators/modian/admin/taxfile/trusted/add/page.tsx

'use client';

import { useRouter } from 'next/navigation';
import {
  useCallback,
  useMemo,
  useState,
  useRef,
  useLayoutEffect,
  type ReactNode,
} from 'react';
import Stepper from '../../../../../../../components/Stepper';

export default function TrustedAddPage() {
  const router = useRouter();
  const rows = Array.from({ length: 12 }).map((_, i) => ({
    id: `TP${1000 + i}`,
    name: `شرکت معتمد نمونه ${i + 1}`,
    serviceType: 'نوع ۱',
    expire: '1404/05/31',
  }));

  /** اجزای کوچک و استاندارد برای نمایش نقطه/تیک و خط بین مراحل
   *  بیرون از JSX تعریف می‌کنیم تا TSX دچار خطای پارس نشود. */
  const Dot: React.FC<{ state: 'done' | 'active' | 'idle' }> = ({ state }) => {
    if (state === 'done') {
      return (
        <span className="flex items-center justify-center w-4 h-4 rounded-full border border-green-600 text-green-600">
          ✓
        </span>
      );
    }
    return (
      <span
        className={`w-2 h-2 rounded-full ${
          state === 'active' ? 'bg-green-600' : 'bg-gray-300'
        }`}
      />
    );
  };

  const Line: React.FC<{ color?: 'gray' | 'green' }> = ({ color = 'gray' }) => (
    <span
      aria-hidden
      /* از کلاس استاندارد tailwind برای ارتفاع استفاده شده تا از نبودن کلاس
         دلخواه جلوگیری شود؛ همچنین مطمئن می‌شویم خط عرض کامل ستون را بگیرد */
      className={`block h-0.5 w-full justify-self-stretch ${
        color === 'green' ? 'bg-green-600' : 'bg-gray-300'
      }`}
    />
  );
  /** انتخابِ ردیف */
  const [selectedId, setSelectedId] = useState<string>('');
  /** مرحله‌ها: 1) انتخاب شرکت معتمد  2) انتخاب نوع مجوز  3) انتخاب شناسه یکتا  4) تایید  5) موفقیت */
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  /** انتخاب نوع مجوز در مرحله ۲ (پیش‌فرض: نوع ۱ با کلید شرکت معتمد/سامانه دولتی) */
  const [permitType, setPermitType] = useState<'trusted' | 'taxpayer' | ''>('trusted');
   /** نمایش مودال موفقیت */
  const [showSuccess, setShowSuccess] = useState(false);
  /** نمایش مودال تأیید انصراف */
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
    /** جستجو */
    const [queryText, setQueryText] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = useCallback(() => {
      setSearchTerm(queryText.trim());
    }, [queryText]);
    const handleClear = useCallback(() => {
      setQueryText('');
      setSearchTerm('');
    }, []);
    const filteredRows = useMemo(() => {
      if (!searchTerm) return rows;
      const q = searchTerm.toLowerCase();
      return rows.filter((r) =>
        [r.id, r.name, r.serviceType, r.expire]
          .some((v) => String(v).toLowerCase().includes(q))
      );
    }, [rows, searchTerm]);

    // --- اندازه‌گیری عرض تیترها (Rules of Hooks: در سطح کامپوننت) ---
    const titleRefs = useRef<HTMLSpanElement[]>([]);
    const [titleWidths, setTitleWidths] = useState<number[]>([]);
    useLayoutEffect(() => {
      // بعد از رندر، پهنای واقعی هر تیتر خوانده می‌شود
      const ws = titleRefs.current
        .slice(0)
        .filter(Boolean)
        .map((el: HTMLSpanElement) => Math.ceil(el.getBoundingClientRect().width));
      if (ws.length && JSON.stringify(ws) !== JSON.stringify(titleWidths)) {
        setTitleWidths(ws);
      }
    }, [step]);
      /** ذخیرهٔ نتیجه و انتقال به لیست */
  const persistAndGoToList = () => {
    try {
      const key = 'modian_trusted_companies';
      const selected = rows.find(r => r.id === selectedId) || null;
      // تاریخ امروز به‌صورت شمسی برای نمایش در جدول لیست
      const faNow = new Intl.DateTimeFormat('fa-IR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(new Date());
      const payload = selected
        ? {
            code: selected.id,
            name: selected.name,
            // تاریخ انتخاب به‌صورت شمسی
            selectedAt: faNow,
            // تاریخ انقضا/ابطال مجوز از خودِ ردیف انتخاب‌شده
            expireAt: selected.expire ?? '',
            // خدمات دریافتی طبق نوع مجوز مرحله ۲
            services:
              permitType === 'trusted'
                ? 'نوع ۱ - با کلید شرکت معتمد / سامانه دولتی'
                : permitType === 'taxpayer'
                ? 'نوع ۱ - با کلید مودی'
                : '',
            permitType,
          }
        : {
            code: '',
            name: '',
            selectedAt: faNow,
            expireAt: '',
            services: '',
            permitType,
          };
      const list = JSON.parse(localStorage.getItem(key) || '[]');
      const idx = list.findIndex((x: any) => x.code === payload.code && payload.code);
      if (idx >= 0) list[idx] = payload; else list.push(payload);
      localStorage.setItem(key, JSON.stringify(list));
    } catch {}
    window.location.href = '/simulators/modian/admin/taxfile/trusted';
  };


  return (
    /* فاصله از سایدبار باید روی والد اعمال شود تا خودِ کادر جابه‌جا شود (عرض سایدبار: w-80) */
    <div className="rtl box-border w-full lg:pr-[70px]">
      <section className="relative z-0 text-sm bg-white border rounded-lg shadow p-4 w-full">
      {/* استپر مراحل */}
      <div className="my-6 text-center">
        {(() => {
          const fullTitles = [
            'انتخاب شرکت معتمد / سامانه دولتی',
            'انتخاب نوع مجوز',
            'انتخاب شناسه یکتا',
            'تایید',
            'موفقیت',
          ];
          const titles = step === 1 ? fullTitles.slice(0, 2) : fullTitles;
          return <Stepper titles={titles} current={step} />;
        })()}
      </div>
         {/* بدنه مرحله ۱: پیام‌ها  جستجو  جدول */}
      {step === 1 && (
        <>
          <div className="mb-2 text-right font-medium">
            لطفا یک شرکت معتمد / سامانه دولتی را انتخاب کنید
          </div>
          <div className="mb-4 text-right text-xs text-gray-600">
            شرکت های معتمد / سامانه های دولتی دارای مجوز:
          </div>
          {/* جستجو: ضربدر داخل input (سمت چپ)، دکمهٔ جستجو بیرون از input */}
          <div className="mb-3 flex justify-start">
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  className="border rounded-md pr-3 pl-8 py-2 w-72 text-right"
                  placeholder="جستجو"
                  value={queryText}
                  onChange={(e) => setQueryText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  aria-label="عبارت جستجو"
                />
                {queryText && (
                  <button
                    type="button"
                    onClick={handleClear}
                    aria-label="پاک کردن"
                    title="پاک کردن"
                    className="absolute inset-y-0 left-0 px-2 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>
              <button
                type="button"
                onClick={handleSearch}
                aria-label="جستجو"
                title="جستجو"
                className="h-9 w-9 border rounded-md flex items-center justify-center text-gray-600 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </div>
          {/* جدول */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-2 border w-12"></th>
                  <th className="p-2 border">نام</th>
                  <th className="p-2 border">شناسه</th>
                  <th className="p-2 border">نوع مجوز خدمات</th>
                  <th className="p-2 border">تاریخ انقضا/ابطال مجوز</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((r, idx) => (
                  <tr key={r.id} className={idx % 2 ? 'bg-gray-50' : ''}>
                    <td className="p-2 border">
                      <input
                        type="checkbox"
                        aria-label={`انتخاب ${r.name}`}
                        checked={selectedId === r.id}
                        onChange={() =>
                          setSelectedId((prev) => (prev === r.id ? '' : r.id))
                        }
                      />
                    </td>
                    <td className="p-2 border text-right">{r.name}</td>
                    <td className="p-2 border">{r.id}</td>
                    <td className="p-2 border">{r.serviceType}</td>
                    <td className="p-2 border">{r.expire}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* بدنه مرحله ۲: سؤال و انتخاب نوع مجوز */}
      {step === 2 && (
        <div className="mt-6">
          {/* سؤال */}
          <div className="text-right font-medium mb-4">
            متقاضی دریافت کدام یک از خدمات شرکت معتمد می‌باشید؟
          </div>
          {/* گزینه‌ها: زیر سؤال و در سمت راست (ستونی) */}
          <div className="flex flex-col items-start gap-3 text-right">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="permitType"
                value="trusted"
                checked={permitType === 'trusted'}
                onChange={() => setPermitType('trusted')}
              />
              <span>نوع ۱ - با کلید شرکت معتمد / سامانه دولتی</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="permitType"
                value="taxpayer"
                checked={permitType === 'taxpayer'}
                onChange={() => setPermitType('taxpayer')}
              />
              <span>نوع ۱ - با کلید مودی</span>
            </label>
          </div>
        </div>
      )}
      
      {/* بدنه مرحله ۳: انتخاب شناسه یکتا */}
      {step === 3 && (
        <div className="mt-6">
          {/* پیام بالای جدول */}
          <div className="text-right font-medium mb-8">
            لطفا شناسه های یکتا برای پوشش معتمد را انتخاب کنید. (اختیاری)
          </div>

          {/* جدول شناسه یکتا */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-2 border w-12"></th>
                  <th className="p-2 border">شناسه یکتا</th>
                  <th className="p-2 border">نام شرکت معتمد</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2 border font-mono">A1EHH</td>
                  <td className="p-2 border">ندارد</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* بدنه مرحله ۴: تایید */}
      {step === 4 && (
        <div className="mt-6">
          <div className="text-right font-medium mb-8 leading-8">
            مودی گرامی، واگذاری اختیار استفاده به شرکت معتمد/سامانه‌های دولتی انتخاب‌شده
            به معنی واگذاری تمامی حقوق و اختیارات حافظهٔ مذکور جهت ارسال صورت‌حساب است.
            آیا از این واگذاری حق اطمینان دارید؟
          </div>
        </div>
      )}

      {/* بدنه مرحله ۵: موفقیت -> به صورت مودال روی صفحه */}
      {step === 5 && showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="mx-4 w-full max-w-[720px] rounded-md bg-white shadow-lg border p-6">
            <div className="text-center text-base md:text-lg font-medium mb-6">
              کاربر گرامی انتخاب شرکت معتمد/سامانه دولتی شما با موفقیت به ثبت رسید
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
                // ذخیره در localStorage و سپس بازگشت به لیست
                onClick={persistAndGoToList}
              >
                تایید
              </button>
            </div>
          </div>
        </div>
      )}

      {/* مودال تأیید انصراف */}
      {showCancelConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="mx-4 w-full max-w-[560px] rounded-md bg-white shadow-lg border overflow-hidden">
            {/* هدر مودال */}
            <div className="flex items-center gap-2 px-4 py-3 border-b">
              <span className="flex items-center justify-center w-6 h-6 rounded-full border border-red-600 text-red-600">!</span>
              <h3 className="m-0 font-semibold">انصراف</h3>
            </div>
            {/* متن هشدار */}
            <div className="px-4 py-5 text-right">
              همه اطلاعات ثبت شده حذف خواهد شد. آیا از اقدام خود اطمینان دارید؟
            </div>
            {/* دکمه‌ها */}
            <div className="px-4 py-3 flex justify-end gap-2 border-t">
              <button
                type="button"
                className="px-5 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                onClick={() => router.push('/simulators/modian/admin/taxfile/trusted')}
              >
                بله
              </button>
              <button
                type="button"
                className="px-5 py-2 rounded-md border hover:bg-gray-50"
                onClick={() => setShowCancelConfirm(false)}
              >
                خیر
              </button>
            </div>
          </div>
        </div>
      )}

      {/* کنترل‌های پایین صفحه */}
      <div className="flex items-center justify-between mt-4">
        <button
          type="button"
          onClick={() => setShowCancelConfirm(true)}
          className="px-4 py-2 rounded-md border border-black hover:bg-gray-50"
        >
          انصراف
        </button>
        <div className="flex items-center gap-2">
          {/* قبلی: از مرحله ۲ به بعد فعال است (در مرحله ۵ غیرفعال) */}
          <button
            type="button"
            onClick={() => {
              if (step === 2) setStep(1);
              else if (step === 3) setStep(2);
              else if (step === 4) setStep(3);
            }}
            disabled={step === 1 || step === 5}
            aria-disabled={step === 1 || step === 5}
            className={
              (step === 1 || step === 5)
                ? 'px-4 py-2 rounded-md border bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700'
            }
          >
            قبلی
          </button>
          {/* بعدی */}
          <button
            type="button"
            onClick={() => {
              if (step === 1 && selectedId) setStep(2);
              else if (step === 2 && permitType) setStep(3);
              else if (step === 3) setStep(4);
              else if (step === 4) {
                setStep(5);
                setShowSuccess(true); // نمایش مودال موفقیت
              }
            }}
            disabled={(step === 1 && !selectedId) || (step === 2 && !permitType) || step === 5}
            aria-disabled={(step === 1 && !selectedId) || (step === 2 && !permitType) || step === 5}
            className={
              ((step === 1 && !selectedId) || (step === 2 && !permitType) || step === 5)
                ? 'px-4 py-2 rounded-md border bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700'
            }
          >
            {step === 4 ? 'اتمام' : 'بعدی'}
          </button>
        </div>
      </div>
    </section>
  </div>
  );
}
