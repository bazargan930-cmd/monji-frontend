//src/app/simulators/modian/requests/auto-reject-referred-invoices/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { EmptyTableRow, ScrollableTableShell } from '@/features/modian';

const PAGE_TITLE = 'درخواست رد خودکار صورتحساب‌های ارجاعی';

type Row = {
  requestType: string;
  createdAt: string;
};

const columns = [
  {
    key: 'index',
    label: 'ردیف',
    headerClassName: 'py-3 px-4 text-right w-20',
    cellClassName: 'py-3 px-4 text-right tabular-nums',
    renderCell: (_: Row, i: number) => String(i + 1),
  },
  {
    key: 'requestType',
    label: 'نوع درخواست',
    headerClassName: 'py-3 px-4 text-right',
    cellClassName: 'py-3 px-4 text-right',
    renderCell: (r: Row) => r.requestType,
  },
  {
    key: 'createdAt',
    label: 'زمان ثبت درخواست',
    headerClassName: 'py-3 px-4 text-right',
    cellClassName: 'py-3 px-4 text-right tabular-nums',
    renderCell: (r: Row) => r.createdAt,
  },
] as const;

export default function AutoRejectReferredInvoicesPage() {
  const [rows] = React.useState<Row[]>([]);
  const isEmpty = rows.length === 0;
  const [agreementModalOpen, setAgreementModalOpen] = React.useState(false);
  const [otpModalOpen, setOtpModalOpen] = React.useState(false);
  const [agreementAccepted, setAgreementAccepted] = React.useState(false);

  // OTP state
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]); // refs برای ورودی‌های OTP
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [otpError, setOtpError] = useState(false);

  // Timer state
  const [timerSeconds, setTimerSeconds] = useState(120); // 2 minutes = 120 seconds
  const [generatedOtp, setGeneratedOtp] = useState('');

  // Timer effect: start when modal opens, stop when closes or timer ends
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (otpModalOpen && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => Math.max(0, prev - 1));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [otpModalOpen, timerSeconds]);

 // Generate OTP when modal opens
 useEffect(() => {
    if (otpModalOpen) {
      generateNewOtp();
    }
  }, [otpModalOpen]);

  // helpers
  const isOtpComplete = otpCode.every((c) => c && c.length === 1);

  // تابع ورود به باکس‌ها با استفاده از refs
  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/[^0-9]/g, '').slice(0, 1);

    if (otpError) setOtpError(false);

    const nextOtp = [...otpCode];
    nextOtp[index] = digit;
    setOtpCode(nextOtp);

    // هدایت به فیلد بعدی اگر رقم وارد شد
    if (digit && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const generateNewOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setTimerSeconds(120);
    setOtpCode(['', '', '', '', '', '']);
    setOtpError(false); // 👈 مهم
    setTimeout(() => otpInputRefs.current[0]?.focus(), 0);
  };

  return (
    <div className="space-y-4 mx-auto w-full max-w-[1200px] px-4">
      <h1 className="text-xl md:text-2xl font-bold">{PAGE_TITLE}</h1>

      <div className="rounded border border-blue-200 bg-blue-100 px-4 py-3 text-sm text-gray-700 flex items-center gap-2">
        <span aria-hidden="true">ℹ️</span>
        <span>
          در صورت فعال‌سازی رد خودکار صورتحساب ارجاعی، تمامی صورتحساب‌های ارجاعی (ابطالی، اصلاحی و برگشت از فروش)
          با وضعیت در انتظار واکنش، پس از گذشت سی روز از درج صورتحساب در کارپوشه، به صورت خودکار رد می‌شوند.
        </span>
      </div>

      <div className="flex items-center justify-end">
        <button
          type="button"
          onClick={() => {
            setAgreementAccepted(false);
            setAgreementModalOpen(true);
          }}
          className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
        >
          فعال‌سازی رد خودکار
        </button>
      </div>

      {/* OTP Test Display (readonly helper modal) */}
      {mounted && otpModalOpen && timerSeconds > 0 &&
        createPortal(
          <div className="fixed top-6 right-6 z-[9999] pointer-events-auto">
            <div className="w-56 rounded-md border border-red-300 bg-white shadow-2xl ring-2 ring-red-300">
              <div className="px-3 py-2 border-b border-red-200 bg-red-50 text-sm font-medium text-red-700 text-center">
                لطفا این کد را وارد کنید
              </div>
              <div className="px-3 py-4 text-center">
                <span className="font-mono text-2xl tracking-widest text-gray-900 select-all">
                  {generatedOtp}
                </span>
              </div>
            </div>
          </div>,
          document.body
        )
      }

      {isEmpty ? (
        <div className="w-full overflow-hidden rounded-md border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-[#d1f7f5ff] text-gray-700">
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className={col.headerClassName}>
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <EmptyTableRow colSpan={columns.length} />
            </tbody>
          </table>
        </div>
      ) : (
        <ScrollableTableShell>
          <table className="w-full text-sm whitespace-nowrap">
            <thead className="bg-[#d1f7f5ff] text-gray-700">
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className={col.headerClassName}>
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t">
                  {columns.map((col) => (
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

      {agreementModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-5xl rounded-md bg-white shadow-xl">
            <div className="px-8 pt-8 text-start">
              <h2 className="text-xl font-bold">موافقت نامه ثبت درخواست رد خودکار صورتحساب‌های ارجاعی</h2>
            </div>

            <div className="px-10 pt-4 text-start text-sm text-gray-600 leading-8">
              <p>
                با آگاهی و اطلاعات کامل از مراحل و ضوابط تایید سیستمی شدن صورتحساب‌ها بر اساس تبصره بند «ب» ماده (۵)
                قانون پایانه‌های فروشگاهی، موارد ذیل را تصدیق و اعلام می‌نمایم:
              </p>
              <p className="mt-4">
                موافقت می‌نمایم پس از گذشت ۲۹ روز و ۲۳ ساعت و ۵۹ دقیقه از تاریخ درج صورتحساب ارجاعی در کارپوشه، در صورت
                عدم واکنش بر روی صورتحساب ارجاعی (ابطالی، اصلاحی و برگشت از فروش) که مرجع آن، صورتحساب تایید شده (تایید
                توسط مودی یا تایید سیستمی) است، عدم واکنش به منزله رد (عدم تایید) صورتحساب ارجاعی مذکور بوده و این
                صورتحساب به صورت خودکار رد شود.
              </p>
            </div>

            <div className="px-10 pt-8 flex items-center justify-start gap-3">
              <input
                type="checkbox"
                checked={agreementAccepted}
                onChange={(e) => setAgreementAccepted(e.target.checked)}
                className="h-5 w-5 rounded border-gray-300 accent-emerald-600"
                aria-label="صحت مندرجات فوق را می‌پذیرم."
              />
              <span className="text-sm text-gray-700">صحت مندرجات فوق را می‌پذیرم.</span>
            </div>

            <div className="px-10 pb-8 pt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setAgreementModalOpen(false)}
                className="inline-flex items-center rounded-md border border-gray-800 bg-white px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
              >
                انصراف
              </button>
              <button
                type="button"
                disabled={!agreementAccepted}
                onClick={() => {
                  // TODO: دریافت کد تایید (فعلاً اسکلت)
                  console.log('request otp for auto reject referred invoices');
                  setAgreementModalOpen(false);
                  setOtpModalOpen(true);
                }}
                className={`inline-flex items-center rounded-md px-5 py-2 text-sm font-medium text-white ${
                  agreementAccepted ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                دریافت کد تایید
              </button>              
            </div>
          </div>
        </div>
      ) : null}

      {/* OTP Modal */}
      {otpModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-[720px] rounded-md bg-white shadow-xl">
            <div className="px-6 pt-6 text-start">
              <h2 className="text-lg font-bold text-gray-900">
                ثبت درخواست رد خودکار صورتحساب‌های ارجاعی
              </h2>
            </div>
            <div className="px-6 pt-4 text-start text-sm text-gray-600">
              <p>
                جهت اعمال فرآیند رد خودکار صورتحساب‌ ارجاعی، رمز یکبار مصرف ۶ رقمی که از طریق پیامک به شماره
                <span className="font-bold">۰۹۳۵۶۷۸۹۱۲۳</span>
                ارسال شده است را در کادر زیر وارد نمایید.
              </p>
            </div>

            {/* OTP + Timer aligned to last input */}
            <div className="mt-6 px-6" style={{ direction: 'ltr' }}>
              <div
                className="grid gap-x-3 gap-y-2 justify-center"
                style={{ gridTemplateColumns: 'repeat(6, 3rem)' }}
              >
                {[...Array(6)].map((_, i) => (
                  <input
                    key={i}
                    id={`otp-input-${i}`}
                    ref={(el) => { otpInputRefs.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className={`w-12 h-12 text-center text-xl font-mono rounded-md focus:outline-none focus:ring-2
                      ${otpError
                        ? 'border border-red-500 focus:ring-red-500'
                        : 'border border-gray-300 focus:ring-green-700'
                      }`}
                    value={otpCode[i]}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onPaste={(e) => {
                      const pasted = e.clipboardData
                        .getData('text')
                        .replace(/\D/g, '')
                        .slice(0, 6);
                      if (pasted.length === 6) {
                        const arr = pasted.split('');
                        setOtpCode(arr);
                        setTimeout(() => otpInputRefs.current[5]?.focus(), 0);
                        e.preventDefault();
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Backspace' && otpCode[i] === '' && i > 0) {
                        otpInputRefs.current[i - 1]?.focus();
                      }
                    }}
                    aria-label={`ورود رقم ${i + 1}`}
                  />
                ))}

                {otpError && (
                  <div className="col-span-6 text-end">
                    <span className="text-xs text-red-600">
                      کد وارد شده معتبر نیست
                    </span>
                  </div>
                )}
                <div className="col-span-6 flex justify-end">
                  <span className="text-xs text-gray-500 tabular-nums whitespace-nowrap flex gap-1">
                    <span dir="rtl">باقی مانده است</span>
                    <span dir="ltr">
                      {String(Math.floor(timerSeconds / 60)).padStart(2, '0')}:
                      {String(timerSeconds % 60).padStart(2, '0')}
                    </span>
                  </span>
                </div>

              </div>
            </div>

            <div className="px-6 pb-2 pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setOtpModalOpen(false)}
                  className="inline-flex items-center rounded-md border border-gray-800 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                >
                  انصراف
                </button>
                {timerSeconds > 0 ? (
                  <button
                    type="button"
                    className="inline-flex items-center border border-green-800 rounded-md bg-green-800 px-7 py-2 text-sm font-medium text-white hover:bg-green-700"
                    onClick={() => {
                      const code = otpCode.join('');
                      if (code !== generatedOtp) {
                        setOtpError(true);
                        return;
                      }

                      setOtpError(false);
                      console.log('OTP صحیح است');
                      console.log('OTP entered:', code);
                      // اینجا بعداً API واقعی را می‌زنی
                    }}
                    disabled={!isOtpComplete}
                  >
                    تایید
                  </button>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center border border-green-800 rounded-md bg-green-800 px-6 py-2 text-sm font-medium text-white hover:bg-green-700"
                    onClick={generateNewOtp}
                  >
                    دریافت مجدد کد تایید
                  </button>
                )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}