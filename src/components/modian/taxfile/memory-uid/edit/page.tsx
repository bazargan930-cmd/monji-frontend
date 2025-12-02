//dev/null
// src/components/modian/taxfile/memory-uid/edit/page.tsx

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function MemoryUIDEditPage() {
  const router = useRouter();
  const qp = useSearchParams();
  const _uid = qp.get('uid') || '';
  const [method, setMethod] = useState<'opt1' | 'opt2' | null>(null);
  // گام‌های ویزارد: 0=تعیین نحوه ارسال، 1=انتخاب شرکت/سامانه، 2=کلید/گواهی، 3=موفقیت
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  // در گام اول، برای هر دو گزینه (opt1/opt2) «بعدی» فعال باشد تا به گام انتخاب شرکت برویم
  const nextEnabled = step === 0 ? method === 'opt1' || method === 'opt2' : false;
  // استپر با نام‌گذاری دقیق مراحل و رنگ خطوط/نقاط
  const Stepper = ({
    showAll,
    currentStep,
  }: {
    showAll: boolean;
    currentStep: 0 | 1 | 2 | 3;
  }) => {
    // سناریوها:
    // opt1 (با کلید مودی): 4 گام
    // opt2 (با کلید شرکت/سامانه دولتی): 3 گام (بدون مرحله «کلید/گواهی»)
    const steps =
      method === 'opt2'
        ? [
            'تعیین نحوه ارسال صورتحساب',
            'تعیین شرکت معتمد/سامانه دولتی',
            'موفقیت',
          ]
        : [
            'تعیین نحوه ارسال صورتحساب',
            'تعیین شرکت معتمد/سامانه دولتی',
            'تعیین کلید عمومی/گواهی امضا حافظه',
            'موفقیت',
          ];
    // از پراپ‌های ورودی استفاده می‌کنیم؛ خطای Duplicate identifier برطرف می‌شود
    const list = showAll ? steps : [steps[0]];
    return (
      <div className="w-full flex flex-col items-center mt-4 mb-6 select-none">
        <div className="flex items-center justify-center w-full">
          {list.map((label, i) => {
            const isDone = i < currentStep;         // مراحل قبل: تیک + خط سبز
            const isCurrent = i === currentStep;    // مرحله فعلی: نقطه سبز
            const dotGreen = isDone || isCurrent;
            const lineGreen = i < currentStep;      // خطوط قبل سبز، بعدی‌ها خاکستری
            return (
              <div className="flex items-center" key={i}>
                <div className="flex flex-col items-center">
                  {isDone ? (
                    <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-green-600 text-white text-[10px] mb-2">
                      ✓
                    </span>
                  ) : (
                    <span
                      className={`inline-block h-2 w-2 rounded-full mb-2 ${
                        dotGreen ? 'bg-green-600' : 'bg-gray-400'
                      }`}
                    />
                  )}
                  <span className={`text-xs ${dotGreen ? 'text-gray-700' : 'text-gray-500'}`}>
                    {label}
                  </span>
                </div>
                {i < list.length - 1 && (
                  <div
                    className={`h-0.5 mx-6 w-28 ${lineGreen ? 'bg-green-600' : 'bg-gray-300'}`}
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <section className="rtl text-sm">
      {/* کادر سفید بزرگ: استپر داخل کادر */}
      <div className="w-full">
        <div className="rounded-md border bg-white shadow-sm p-6 pt-4 min-h-[420px] flex flex-col">
          {/* استپر داخل کادر سفید */}
          <Stepper showAll={step > 0 || method === 'opt1' || method === 'opt2'} currentStep={step} />

          {/* محتوای گام 0: انتخاب نحوه ارسال */}
          {step === 0 && (
            <>
              <p className="text-right text-gray-700 mb-4">نحوه ارسال صورتحساب را انتخاب کنید.</p>
              <div className="space-y-4 w-[520px] ml-auto">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sendMethod"
                    className="accent-green-600"
                    checked={method === 'opt1'}
                    onChange={() => setMethod('opt1')}
                  />
                  <span>توسط شرکت معتمد / سامانه‌های دولتی — با کلید مودی</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sendMethod"
                    className="accent-green-600"
                    checked={method === 'opt2'}
                    onChange={() => setMethod('opt2')}
                  />
                  <span>توسط شرکت معتمد / سامانه‌های دولتی — با کلید شرکت معتمد / سامانه‌های دولتی</span>
                </label>
              </div>
            </>
          )}

          {/* محتوای گام 1: انتخاب شرکت/سامانه دولتی */}
          {step === 1 && (
            <>
              {/* جمله‌ی راهنما: چپ‌چین زیر استپر */}
              <p className="text-left text-gray-700 mb-4">
                لطفا یک شرکت معتمد/سامانه دولتی انتخاب کنید.
              </p>
              {/* جدول چهارستونه؛ در صورت خالی بودن پیام «موردی ثبت نشده» */}
              <div className="border rounded-md overflow-hidden">
                <div className="grid grid-cols-4 bg-gray-100 text-right px-4 py-3 text-sm">
                  <div>شناسه شرکت معتمد</div>
                  <div>نام شرکت معتمد</div>
                  <div>نوع مجوز خدمات</div>
                  <div>تاریخ انقضا مجوز</div>
                </div>
                <div className="py-10 text-center text-gray-500">موردی ثبت نشده</div>
              </div>
              {/* جمله‌ی زیر جدول */}
              <p className="mt-4 text-right text-gray-600">
                برای ثبت خدمت شرکت معتمد مورد نظر، می‌توانید به بخش شرکت‌های معتمد/سامانه‌های دولتی مراجعه کنید.
              </p>
            </>
          )}

          {/* دکمه‌ها: «انصراف» چپ، «قبلی/بعدی» راست */}
          <div className="mt-auto pt-6 flex items-center justify-between">
            <button
              type="button"
              className="px-4 py-2 rounded-md border border-black text-black"
              onClick={() => router.back()}
            >
              انصراف
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className={`px-4 py-2 rounded-md ${step === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white border border-black'}`}
                disabled={step === 0}
                onClick={() => setStep((s) => (s > 0 ? ((s - 1) as 0 | 1 | 2 | 3) : s))}
              >
                قبلی
              </button>
              <button
                type="button"
                className={
                  nextEnabled && step === 0
                    ? 'px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700'
                    : 'px-4 py-2 rounded-md bg-gray-200 text-gray-500 cursor-not-allowed'
                }
                disabled={!(nextEnabled && step === 0)}
                onClick={() => {
                  if (step === 0 && nextEnabled) setStep(1);
                }}
                title={step === 0 ? (nextEnabled ? 'فعال' : 'غیرفعال') : 'غیرفعال'}
              >
                بعدی
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
