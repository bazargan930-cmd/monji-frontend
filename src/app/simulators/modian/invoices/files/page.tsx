//src\app\simulators\modian\invoices\files\page.tsx
'use client';

import React from 'react';

import { FieldGrid, FormField } from '@/components/modian/ui';
import {
  ModianJalaliDateField,
  ScrollableTableShell,
} from '@/components/modian/common';

// گزینه‌ها مطابق صفحه «صورتحساب‌های فروش داخلی»
// (فیلدهای ۱ تا ۳ هدر جستجو)
const INVOICE_STATUS_OPTIONS = [
  { value: 'رد شده', label: 'رد شده' },
  { value: 'تایید شده', label: 'تایید شده' },
  { value: 'تایید سیستمی', label: 'تایید سیستمی' },
  { value: 'در انتظار واکنش', label: 'در انتظار واکنش' },
  { value: 'عدم امکان واکنش', label: 'عدم امکان واکنش' },
  { value: 'عدم نیاز به واکنش', label: 'عدم نیاز به واکنش' },
  { value: 'ابطال شده', label: 'ابطال شده' },
  { value: 'رد خودکار', label: 'رد خودکار' },
];

const INVOICE_TYPE_OPTIONS = [
  { value: 'نوع اول', label: 'نوع اول' },
  { value: 'نوع دوم', label: 'نوع دوم' },
  { value: 'نوع سوم', label: 'نوع سوم' },
];

// گزینه‌های «الگوی صورتحساب» براساس منطق صفحه فروش داخلی
// (آرایه base به‌علاوه «الگوی بورس کالا»)
const INVOICE_PATTERN_OPTIONS = [
  { value: 'sell', label: 'الگو فروش' },
  { value: 'sell_fx', label: 'الگو فروش ارز' },
  { value: 'gold_jewel', label: 'الگو طلا، جواهر و پلاتین' },
  { value: 'contracting', label: 'الگو پیمانکاری' },
  { value: 'utilities', label: 'الگو قبوض خدماتی' },
  { value: 'air_ticket', label: 'الگو بلیط هواپیما' },
  { value: 'waybill', label: 'الگو بارنامه' },
  { value: 'refining', label: 'الگو پالایش و پخش' },
  { value: 'الگوی بورس کالا', label: 'الگوی بورس کالا' },
  { value: 'insurance', label: 'الگو بیمه' },
];

export default function ModianInvoicesFilesPage() {
  const [isRequestModalOpen, setIsRequestModalOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'invoices' | 'declaration'>(
    'invoices',
  );
  const [requestType, setRequestType] = React.useState<
    | 'salesInternal'
    | 'buyInternal'
    | 'salesExport'
    | 'importDeclaration'
    | 'boursePurchaseDeclaration'
  >('salesInternal');
  const [dateFilters, setDateFilters] = React.useState<{
    issueDateFrom?: string;
    issueDateTo?: string;
    inboxDateFrom?: string;
    inboxDateTo?: string;
  }>({});

  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 pt-0 pb-4 -mt-4 space-y-6">
      {/* هدر صفحه: تیتر + دکمه درخواست فایل خروجی */}
      <header className="flex items-center justify-between pt-4">
        {/* تیتر راست‌چین */}
        <h1 className="text-sm font-bold text-right flex-1">
          گزارش فایل های خروجی
        </h1>

        {/* دکمه درخواست فایل خروجی (سمت مخالف تیتر) */}
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-green-600 px-4 py-1.5 text-sm text-white hover:bg-green-700"
          onClick={() => setIsRequestModalOpen(true)}
        >
          درخواست فایل خروجی
        </button>
      </header>

      {/* جدول گزارش فایل‌های خروجی */}
      <section>
        <ScrollableTableShell>
          <table className="w-full border-collapse text-center text-sm whitespace-nowrap">
            <thead className="bg-[#d1f7f5] text-gray-800">
              <tr>
                <th className="border px-2 py-1">شناسه درخواست</th>
                <th className="border px-2 py-1">وضعیت</th>
                <th className="border px-2 py-1 whitespace-nowrap">
                  تاریخ و زمان ثبت درخواست
                </th>
                <th className="border px-2 py-1 whitespace-nowrap">
                  <div className="flex items-center justify-center gap-1">
                    <span>تاریخ و زمان گزارش</span>
                    {/* آیکون آبی + تولتیپ روی hover */}
                    <div className="relative group">
                      {/* آیکون شش‌ضلعی آبی */}
                      <span
                        className="flex h-5 w-5 items-center justify-center text-xs font-bold text-white bg-[#008fd3]"
                        style={{
                          clipPath:
                            'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                        }}
                      >
                        !
                      </span>
                      {/* تولتیپ خاکستری: بالای آیکون، با ارتفاع کافی برای نمایش کامل متن */}
                      <div className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-50 hidden w-72 -translate-x-1/2 transform rounded-md bg-gray-700 px-3 py-2 text-xs leading-relaxed text-white shadow-lg whitespace-normal group-hover:block">
                        تمامی اطلاعات مندرج در این گزارش مربوط به این تاریخ و
                        زمان است. تغییرات بعد از تاریخ و زمان مذکور در این
                        گزارش اعمال نشده است.
                        {/* مثلث پایین تولتیپ (چسبیده به آیکون) */}
                        <div className="absolute left-1/2 top-full -mt-[3px] h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-700" />
                      </div>
                    </div>
                  </div>
                </th>
                <th className="border px-2 py-1">نوع گزارش</th>
                <th className="border px-2 py-1">نوع درخواست</th>
                <th className="border px-2 py-1">فایل</th>
                {/* ستون آخر بدون نام */}
                <th className="border px-2 py-1 w-10" />
              </tr>
            </thead>
            <tbody>
              {/* ردیف نمونه / حالت بدون داده (فعلاً برای اسکلت صفحه) */}
              <tr className="odd:bg-white even:bg-gray-50">
                <td
                  colSpan={8}
                  className="border px-2 py-6 text-center text-gray-500"
                >
                  درخواستی ثبت نشده
                </td>
              </tr>
            </tbody>
          </table>
        </ScrollableTableShell>
      </section>

      {/* مودال درخواست فایل خروجی */}
      {isRequestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-4xl rounded-md bg-white p-6 shadow-lg">
            {/* بخش ۱: تیتر + تب‌ها و توضیح زیر تب فعال */}
            <div className="space-y-2">
              <h2 className="text-base font-bold text-right">
                درخواست فایل خروجی
              </h2>

              {/* تب‌ها */}
              <div className="flex border-b border-gray-200 text-sm">
                <button
                  type="button"
                  onClick={() => setActiveTab('invoices')}
                  className={`px-4 pb-2 pt-1 border-b-2 ${
                    activeTab === 'invoices'
                      ? 'border-green-600 text-green-700 font-semibold'
                      : 'border-transparent text-gray-600'
                  }`}
                >
                  فایل صورتحساب‌ها
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('declaration')}
                  className={`px-4 pb-2 pt-1 border-b-2 ${
                    activeTab === 'declaration'
                      ? 'border-green-600 text-green-700 font-semibold'
                      : 'border-transparent text-gray-600'
                  }`}
                >
                  جزئیات ردیف‌های اظهارنامه
                </button>
              </div>

              {/* توضیح زیر تب فعال */}
              {activeTab === 'invoices' && (
                <p className="pt-2 text-xs leading-relaxed text-gray-700">
                  با مقداردهی فیلترهای زیر، درخواست فایل خروجی مورد نظر خود را
                  ثبت کنید. صورتحساب‌ها/اعلامیه‌های وارداتی در فایل خروجی، تنها
                  مربوط به شعب تخصیص یافته به شما می‌باشند.
                </p>
              )}
              {activeTab === 'declaration' && (
                <p className="pt-2 text-xs leading-relaxed text-gray-700">
                  در صورتی که تمایل دارید بدانید ردیف‌های اظهارنامه کارپوشه شما
                  به چه شکل محاسبه شده‌اند، می‌توانید لیست صورتحساب‌های مؤثر بر
                  آن ردیف‌ها را در فایل خروجی مشاهده کنید.
                </p>
              )}
            </div>

            {activeTab === 'invoices' ? (
              <>
                {/* بخش ۲: چک‌باکس‌های نوع خروجی */}
                <div className="mt-4 space-y-2 border-b border-gray-200 pb-4 text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked
                      disabled
                      className="h-4 w-4"
                    />
                    <span>خروجی از صورتحساب‌ها</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>خروجی از اقلام کالا/خدمت صورتحساب‌ها</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>خروجی از پرداخت‌های صورتحساب‌ها</span>
                  </label>
                </div>

                {/* بخش ۳: انتخاب نوع درخواست + سه فیلد بالایی */}
                <div className="mt-4 space-y-3 border-b border-gray-200 pb-4 text-xs">
                  {/* رادیوهای نوع درخواست */}
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="request-type"
                        className="h-4 w-4 accent-green-600"
                        value="salesInternal"
                        checked={requestType === 'salesInternal'}
                        onChange={() => setRequestType('salesInternal')}
                      />
                      <span>فروش داخلی</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="request-type"
                        className="h-4 w-4 accent-green-600"
                        value="buyInternal"
                        checked={requestType === 'buyInternal'}
                        onChange={() => setRequestType('buyInternal')}
                      />
                      <span>خرید داخلی</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="request-type"
                        className="h-4 w-4 accent-green-600"
                        checked={requestType === 'salesExport'}
                        onChange={() => setRequestType('salesExport')}
                      />
                      <span>فروش صادراتی</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="request-type"
                        className="h-4 w-4 accent-green-600"
                        value="importDeclaration"
                        checked={requestType === 'importDeclaration'}
                        onChange={() => setRequestType('importDeclaration')}
                      />
                      <span>اعلامیه وارداتی</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="request-type"
                        className="h-4 w-4 accent-green-600"
                        value="boursePurchaseDeclaration"
                        checked={
                          requestType === 'boursePurchaseDeclaration'
                        }
                        onChange={() =>
                          setRequestType('boursePurchaseDeclaration')
                        }
                      />
                      <span>اعلامیه خرید از بورس</span>
                    </label>
                  </div>

                  {/* سه فیلد بالایی؛ بر اساس فیلدهای ۱ تا ۳ صفحه فروش داخلی */}
                  <div className="grid gap-3 md:grid-cols-3">
                    {/* وضعیت صورتحساب */}
                    <FormField label="وضعیت صورتحساب" variant="floating">
                      <select
                        aria-label="وضعیت صورتحساب"
                        className="w-full rounded border border-gray-300 bg-white px-2 py-1 text-xs"
                        defaultValue=""
                      >
                        <option value="" />
                        {INVOICE_STATUS_OPTIONS.map((op) => (
                          <option key={op.value} value={op.value}>
                            {op.label}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    {/* نوع صورتحساب — فقط برای «فروش داخلی» */}
                    {requestType === 'salesInternal' && (
                      <FormField label="نوع صورتحساب" variant="floating">
                        <select
                          aria-label="نوع صورتحساب"
                          className="w-full rounded border border-gray-300 bg-white px-2 py-1 text-xs"
                          defaultValue=""
                        >
                          <option value="" />
                          {INVOICE_TYPE_OPTIONS.map((op) => (
                            <option key={op.value} value={op.value}>
                              {op.label}
                            </option>
                          ))}
                        </select>
                      </FormField>
                    )}

                    {/* الگوی صورتحساب — برای «فروش داخلی» و «خرید داخلی» */}
                    {(requestType === 'salesInternal' ||
                      requestType === 'buyInternal') && (
                      <FormField label="الگوی صورتحساب" variant="floating">
                        <select
                          aria-label="الگوی صورتحساب"
                          className="w-full rounded border border-gray-300 bg-white px-2 py-1 text-xs"
                          defaultValue=""
                        >
                          <option value="" />
                          {INVOICE_PATTERN_OPTIONS.map((op) => (
                            <option key={op.value} value={op.value}>
                              {op.label}
                            </option>
                          ))}
                        </select>
                      </FormField>
                    )}
                  </div>
                </div>

                {/* بخش ۴: فیلدهای دوره و بازه‌های زمانی */}
                <div className="mt-4 space-y-3 border-b border-gray-200 pb-4 text-xs">
                  <div className="grid gap-3 md:grid-cols-2">
                    {/* این دو فیلد از نظر استایل بر اساس فیلد «اطلاعات زمانی (سال/دوره)» هستند */}
                    <FormField
                      label="سال صدور صورتحساب"
                      variant="floating"
                    >
                      <select
                        aria-label="سال صدور صورتحساب"
                        className="w-full rounded border border-gray-300 bg-white px-2 py-1 text-xs"
                        defaultValue=""
                      >
                        <option value="" />
                        <option value="1404">۱۴۰۴</option>
                        <option value="1403">۱۴۰۳</option>
                      </select>
                    </FormField>

                    <FormField
                      label="دوره صدور صورتحساب"
                      variant="floating"
                    >
                      <select
                        aria-label="دوره صدور صورتحساب"
                        className="w-full rounded border border-gray-300 bg-white px-2 py-1 text-xs"
                        defaultValue=""
                      >
                        <option value="" />
                        <option value="spring">بهار</option>
                        <option value="summer">تابستان</option>
                        <option value="autumn">پائیز</option>
                        <option value="winter">زمستان</option>
                      </select>
                    </FormField>
                  </div>

                  {/* بازه‌های تاریخ با استفاده از کامپوننت تاریخ جلالی مشترک */}
                  <FieldGrid cols={2} className="gap-3">
                    <FormField
                      label="تاریخ صدور از"
                      htmlFor="requestIssueFrom"
                      variant="floating"
                    >
                      <ModianJalaliDateField
                        id="requestIssueFrom"
                        valueISO={dateFilters.issueDateFrom ?? ''}
                        onChangeISO={(v) =>
                          setDateFilters((s) => ({
                            ...s,
                            issueDateFrom: v ?? '',
                          }))
                        }
                        placeholder="انتخاب کنید"
                      />
                    </FormField>

                    <FormField
                      label="تاریخ صدور تا"
                      htmlFor="requestIssueTo"
                      variant="floating"
                    >
                      <ModianJalaliDateField
                        id="requestIssueTo"
                        valueISO={dateFilters.issueDateTo ?? ''}
                        onChangeISO={(v) =>
                          setDateFilters((s) => ({
                            ...s,
                            issueDateTo: v ?? '',
                          }))
                        }
                        placeholder="انتخاب کنید"
                      />
                    </FormField>

                    <FormField
                      label="تاریخ درج از"
                      htmlFor="requestInboxFrom"
                      variant="floating"
                    >
                      <ModianJalaliDateField
                        id="requestInboxFrom"
                        valueISO={dateFilters.inboxDateFrom ?? ''}
                        onChangeISO={(v) =>
                          setDateFilters((s) => ({
                            ...s,
                            inboxDateFrom: v ?? '',
                          }))
                        }
                        placeholder="انتخاب کنید"
                      />
                    </FormField>

                    <FormField
                      label="تاریخ درج تا"
                      htmlFor="requestInboxTo"
                      variant="floating"
                    >
                      <ModianJalaliDateField
                        id="requestInboxTo"
                        valueISO={dateFilters.inboxDateTo ?? ''}
                        onChangeISO={(v) =>
                          setDateFilters((s) => ({
                            ...s,
                            inboxDateTo: v ?? '',
                          }))
                        }
                        placeholder="انتخاب کنید"
                      />
                    </FormField>
                  </FieldGrid>
                </div>

                {/* بخش ۵: دکمه‌های پایین مودال */}
                <div className="mt-6 flex justify-start gap-2 border-t border-gray-200 pt-4">
                  <button
                    type="button"
                    className="rounded border border-gray-300 px-4 py-1.5 text-sm"
                    onClick={() => setIsRequestModalOpen(false)}
                  >
                    انصراف
                  </button>
                  <button
                    type="button"
                    className="rounded bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-700"
                  >
                    درخواست فایل خروجی
                  </button>
                </div>
              </>
            ) : (
              // تب «جزئیات ردیف‌های اظهارنامه»
              <div className="mt-4 space-y-6">
                {/* بخش اصلی: دریافت جزئیات (گزارش محاسبات) اظهارنامه */}
                <div className="space-y-4 rounded border border-gray-200 px-4 py-4">
                  <div className="flex items-center justify بین">
                    <span className="text-sm font-semibold text-gray-800">
                      دریافت جزئیات (گزارش محاسبات) اظهارنامه
                    </span>
                  </div>

                  {/* ردیف سال / دوره */}
                  <FieldGrid cols={2} className="gap-3">
                    <FormField label="سال" variant="floating">
                      <select
                        aria-label="سال"
                        className="w-full rounded border border-gray-300 bg-white px-2 py-1 text-xs"
                        defaultValue=""
                      >
                        <option value="" />
                        <option value="1404">۱۴۰۴</option>
                        <option value="1403">۱۴۰۳</option>
                      </select>
                    </FormField>

                    <FormField label="دوره" variant="floating">
                      <select
                        aria-label="دوره"
                        className="w-full rounded border border-gray-300 bg-white px-2 py-1 text-xs"
                        defaultValue=""
                      >
                        <option value="" />
                        <option value="spring">بهار</option>
                        <option value="summer">تابستان</option>
                        <option value="autumn">پائیز</option>
                        <option value="winter">زمستان</option>
                      </select>
                    </FormField>
                  </FieldGrid>

                  {/* ردیف جدول / ردیف */}
                  <div className="space-y-3">
                    <FormField label="جدول" variant="floating">
                      <select
                        aria-label="جدول"
                        className="w-full rounded border border-gray-300 bg-white px-2 py-1 text-xs"
                        defaultValue=""
                      >
                        <option value="" />
                      </select>
                    </FormField>

                    <FormField label="ردیف" variant="floating">
                      <select
                        aria-label="ردیف"
                        className="w-full rounded border border-gray-300 bg-white px-2 py-1 text-xs"
                        defaultValue=""
                      >
                        <option value="" />
                      </select>
                    </FormField>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
