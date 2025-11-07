//src\components\modian\ModianPortal.tsx

'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


type Props = {
  user: {
    fullName: string;
    nationalId: string;
    accessLevel: string;
  };
};

export default function ModianPortal({ user }: Props) {
  const router = useRouter();
  const handleEnter = () => {
  router.push('/simulators/modian/home');
};

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 text-right space-y-10">

      {/* ✅ پیام خوش‌آمد */}
      <p className="text-sm text-right leading-relaxed">
        <span className="text-green-700 font-bold">{user.fullName}</span>
        <span className="text-gray-900">، به کارپوشه خود خوش آمدید.</span>
      </p>

      {/* ✅ بخش اصلی: نقشه و اسناد */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* ستون چپ: نقشه ایران */}
        <div className="flex justify-center">
          <Image
            src="/images/iran-map-green.png"
            alt="نقشه ایران"
            width={400}
            height={400}
          />
        </div>

        {/* ستون راست: منابع و اسناد */}
        <div className="bg-white border rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">اسناد و منابع</h2>
          <input
            type="text"
            placeholder="جستجو کنید"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 text-sm"
          />
          <ul className="text-sm text-gray-700 space-y-3">
            <li>بسته توسعه نرم‌افزار (SDK) به زبان جاوا (نسخه قدیم بدون گواهی امضا)</li>
            <li>بسته توسعه نرم‌افزار (SDK) به زبان جاوا (نسخه با گواهی امضا)</li>
            <li>واحدهای انفورماتیک / UIS / خدمت آزمایشی 1403</li>
            <li>دستورالعمل صدور صورت‌حساب الکترونیکی آزادگاه 1403</li>
          </ul>
        </div>
      </div>

      {/* ✅ جدول پرونده‌ها */}
      <div className="bg-white shadow rounded p-4 border">
        <h2 className="text-sm font-bold text-gray-700 mb-4">لیست پرونده‌های مالیاتی</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="border px-2 py-1">ردیف</th>
                <th className="border px-2 py-1">نام پرونده</th>
                <th className="border px-2 py-1">کد اقتصادی</th>
                <th className="border px-2 py-1">کد رهگیری ثبت نام</th>
                <th className="border px-2 py-1">نوع پرونده</th>
                <th className="border px-2 py-1">سمت در پرونده</th>
                <th className="border px-2 py-1">کد پستی</th>
                <th className="border px-2 py-1">وضعیت کارپوشه</th>
                <th className="border px-2 py-1">عملیات</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr>
                <td className="border px-2 py-1 text-center">1</td>
                <td className="border px-2 py-1">سایت آموزشی منجی</td>
                <td className="border px-2 py-1">10103770077</td>
                <td className="border px-2 py-1">100505078</td>
                <td className="border px-2 py-1">حقوقی</td>
                <td className="border px-2 py-1">کاربر حقوقی</td>
                <td className="border px-2 py-1">1847165768</td>
                <td>
                  <span className="text-green-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full border border-green-500"></span>
                    فعال مجاز
                  </span>
                </td>
                <td className="border px-2 py-1">
                  <button
                    onClick={handleEnter}
                    className="text-green-600 hover:underline focus:outline-none"
                  >
                    ورود به پرونده
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
