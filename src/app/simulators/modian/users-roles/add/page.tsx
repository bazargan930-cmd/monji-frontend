//src/app/simulators/modian/users-roles/add/page.tsx
'use client';
 
import { useState } from 'react';

import HelpGuideButton from '@/components/common/HelpGuideButton';

export default function UsersRolesAddPage() {
  const [isIranian, setIsIranian] = useState(true);
  const [code, setCode] = useState('');

  return (
    <div dir="rtl" className="space-y-6">
      {/* ① راهنمای صفحه در بالای صفحه (سمت چپ) */}
      <div className="flex justify-end">
        <HelpGuideButton title="راهنمای صفحه" />
      </div>
      {/* کارت سفید اصلی مثل اسکرین */}
      <div className="border rounded-md bg-white">
        <div className="p-6 space-y-6">
          {/* عنوان */}
          <h2 className="text-right text-lg font-semibold">
            کد ملی / کد فراگیر کاربر جدید را وارد کنید.
          </h2>

          {/* متن راهنمای کوتاه */}
          <p className="text-sm text-gray-600 text-right leading-7">
            قبل از این مرحله ضروری است کاربر شما در درگاه ملی خدمات الکترونیک سازمان امور مالیاتی کشور حساب کاربری
            داشته باشد.
          </p>

          {/* ② رادیوها (عمودی: کاربر غیرایرانی زیرِ کاربر ایرانی) */}
          <div className="flex flex-col gap-4">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="citizen"
                checked={isIranian}
                onChange={() => setIsIranian(true)}
                className="accent-green-600"
              />
              <span>کاربر ایرانی</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="citizen"
                checked={!isIranian}
                onChange={() => setIsIranian(false)}
                className="accent-green-600"
              />
              <span>کاربر غیر ایرانی</span>
            </label>
          </div>

          {/* ③ ورودی کد: راست‌چین + لیبل شناور پویا (ایرانی: کد ملی / غیرایرانی: کد فراگیر) */}
          <div className="w-full flex justify-start">
            <div className="relative max-w-md w-full">
              <input
                id="user-code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={isIranian ? 'وارد کنید' : 'وارد کنید'}
                className="w-full border rounded-md px-3 py-3 text-right"
              />
              <label
                htmlFor="user-code"
                className="absolute right-3 -top-2 bg-white px-1 text-xs text-gray-600"
              >
                {isIranian ? 'کد ملی' : 'کد فراگیر'}
              </label>
            </div>
          </div>

          {/* ④ دکمه‌ها: «انصراف» راست، «استعلام» چپ (تمام‌عرض) */}
          <div className="w-full flex justify-between">
            {/* دکمه سمت چپ */}
            <a
              href="/simulators/modian/users-roles"
              className="px-5 py-2 rounded-md border border-black bg-white text-gray-700 hover:bg-gray-50"
            >
              انصراف
            </a>

            {/* دکمه سمت راست */}
            <button
              type="button"
              className="px-5 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
              onClick={() => console.log('استعلام', { isIranian, code })}
            >
              استعلام
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
