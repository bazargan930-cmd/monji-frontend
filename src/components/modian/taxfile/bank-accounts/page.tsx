//src\components\modian\taxfile\bank-accounts\page.tsx
'use client';

import { useState } from 'react';

import HelpTrigger from '@/components/common/help/HelpTrigger';
import {
  ToolbarBar,
  ToolbarIconButton,
  ToolbarSearch,
  ColumnsIcon,
  BankAccountsHelpContent,
} from '@/components/modian';

export default function BankAccountsPage() {
  // state جستجو برای ورودی کلاینتی
   const [query, setQuery] = useState('');
   const handleSearch = () => {
     // فعلاً اکشن خالی؛ بعداً به فیلترینگ دیتا متصل می‌شود
   };
   // باز/بسته‌کردن پنل فیلتر
   const [showFilter, setShowFilter] = useState(false);
   // باز/بسته‌کردن کادر «نمایش ستون‌ها»
   const [showColumns, setShowColumns] = useState(false);
   // باز/بسته‌کردن نمایش تصویر «افزودن حساب بانکی»
   const [showAddImage, setShowAddImage] = useState(false);

   return (
    <section className="bg-white rounded-lg shadow p-10 text-sm rtl">

      {/* دکمه/مودال راهنمای صفحه – زیر ساب‌هدر، سمت چپ */}
      <div className="mb-2 -mt-6 px-0 flex justify-end">
        <HelpTrigger
          buttonTitle="راهنمای حساب‌های بانکی"
          modalTitle="راهنمای صفحهٔ حساب‌های بانکی"
          size="lg"
        >
          <BankAccountsHelpContent />
        </HelpTrigger>
      </div>

      {/* تیتر اصلی */}
      <h2 className="text-xl font-bold mb-6">مدیریت حساب‌های بانکی</h2>

      {/* نوار ابزار */}
      <ToolbarBar
        right={
          <>
            {/* آیکون فیلتر: SVG + toggle پنل */}
            <ToolbarIconButton
              title="فیلتر"
              isActive={showFilter}
              onClick={() => setShowFilter((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5h18l-7 8v4l-4 2v-6L3 5z" />
              </svg>
            </ToolbarIconButton>
            <ToolbarIconButton
              title="نمایش ستون‌ها"
              isActive={showColumns}
              onClick={() => setShowColumns((v) => !v)}
            >
              <ColumnsIcon />
            </ToolbarIconButton>
            <ToolbarSearch
              value={query}
              onChange={setQuery}
              onSearch={handleSearch}
              placeholder="جستجو شماره شبا"
            />
          </>
        }
        left={
          <button
            className="px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
            onClick={() => setShowAddImage(true)}
          >
            افزودن حساب بانکی
          </button>
        }
      />

      {/* نمایش «تمام‌صفحه» تصویر + متن و کلید بازگشت */}
      {showAddImage && (
        <div className="fixed inset-0 z-[60] bg-black/80">
          {/* تصویر تمام‌صفحه */}
          <img
            src="/images/Electronic-Tax-Services.jpg"
            alt="راهنمای خدمات الکترونیک مالیاتی"
            className="w-full h-full object-contain"
          />
          {/* متن و دکمه در هدر سمت چپ (روی تصویر) */}
          <button
            type="button"
            className="absolute top-28 left-16 h-10 px-4 rounded-md border bg-green-600 text-white hover:bg-red-500"
            onClick={() => setShowAddImage(false)}
          >
            بازگشت
          </button>
          <div className="absolute top-16 left-48 bg-white/90 rounded-md px-3 py-2 text-sm leading-6">
            <div className="font-bold">کاربر گرامی</div>
            <div>این یک پلتفرم آموزشی است</div>
            <div>جهت آشنایی بیشتر با این قسمت به راهنمای صفحه مراجعه کنید</div>
          </div>
        </div>
      )}
      {/* کادر «نمایش ستون‌ها» (زیر نوارابزار؛ مثل فیلتر) */}
      {showColumns && (
        <div className="relative border rounded-md p-3 mb-4 bg-white">
          <div className="flex items-center gap-2 flex-wrap">
            {/* دکمه همه ستون‌ها */}
            <button
              type="button"
              className="px-3 py-1 border border-black text-gray-700 bg-white hover:bg-gray-50"
            >
              همه ستون‌ها
            </button>
            {/* گزینه‌ها با دایرهٔ سبز و ضربدر سفید */}
            {['نام بانک', 'نام شعبه', 'شماره حساب'].map((label) => (
              <button
                key={label}
                type="button"
                className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-700 bg-white text-green-700"
              >
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-700">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                <span className="text-sm">{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* پنل فیلتر (مانند اسکرین مرجع) */}
      {showFilter && (
        <div className="relative border border-black rounded-md p-6 mb-4 bg-white">
          {/* لیبل بالای کادر فیلتر */}
          <span className="absolute -top-3 right-4 bg-white px-2 text-xs text-gray-600">
            فیلتر داده‌ها بر اساس:
          </span>

          <div className="grid grid-cols-1 md:grid-cols-8 gap-3">
            {/* نوع حساب */}
            <div className="relative">
              <label className="absolute -top-2 right-3 bg-white px-1 text-xs text-gray-400">
                نوع حساب
              </label>
              <input
                className="w-full h-12 border rounded-md px-2 text-right"
                placeholder=" "
              />
            </div>
            {/* نام بانک */}
            <div className="relative md:col-span-2">
              <label className="absolute -top-2 right-3 bg-white px-1 text-xs text-gray-400">
                نام بانک
              </label>
              <input
                className="w-full h-12 border rounded-md px-3 text-right"
                placeholder=" "
              />
            </div>
          </div>
          {/* دکمه‌ها: سمت چپ + استایل قرمز برای حذف فیلتر */}
          <div className="mt-3 flex items-center gap-2 justify-end">
            <button className="px-3 py-2 rounded-md bg-white text-red-600 border border-red-300 hover:bg-red-50">
              حذف فیلتر
            </button>
            <button className="px-6 py-2 rounded-md bg-green-600 text-white hover:bg-green-700">
              جستجو
            </button>
          </div>
        </div>
      )}

      {/* جدول */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border p-2">ردیف</th>
              <th className="border p-2">شماره شبا</th>
              <th className="border p-2">نام بانک</th>
              <th className="border p-2">نام شعبه</th>
              <th className="border p-2">شماره حساب</th>
              <th className="border p-2">نوع حساب</th>
              <th className="border p-2">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="text-center text-gray-500 py-6">
                موردی ثبت نشده
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
