// src/app/simulators/modian/declaration/details/page.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function DeclarationDetailsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const year = searchParams.get('year');
  const season = searchParams.get('season');

  return (
    <div className="w-full px-6 py-8">

      {/* Header */}
      <div className="rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-xl text-gray-600 hover:text-black"
            aria-label="بازگشت"
          >
            →
          </button>

          <h1 className="text-xl font-bold">
            جزئیات اظهارنامه پیش‌فرض ارزش افزوده{' '}
            {season && year && `${season} ${year}`}
          </h1>
        </div>

        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100"
          title="دریافت PDF"
        >
          📄
        </button>
        </div>
      </div>

      {/* Meta info (top section from screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 text-sm bg-white border rounded p-4">

        <div className="flex items-center gap-2">
            <span className="text-gray-500 whitespace-nowrap">وضعیت:</span>
            <span className="font-medium">خلاصه عملکرد</span>
        </div>

        <div className="flex items-center gap-2">
            <span className="text-gray-500 whitespace-nowrap">
            زمان بروزرسانی داده‌های سامانه:
            </span>
            <span className="font-medium">۱۴۰۴/۰۵/۱۰ - ۱۴:۴۸</span>
        </div>

        <div className="flex items-center gap-2">
            <span className="text-gray-500 whitespace-nowrap">
            زمان تایید/ویرایش مودی:
            </span>
            <span className="font-medium">—</span>
        </div>

        <div className="flex items-center gap-2">
            <span className="text-gray-500 whitespace-nowrap">
            کد رهگیری اظهارنامه:
            </span>
            <span className="font-medium">—</span>
        </div>

        </div>

      {/* Section A - Sales */}
      <div className="mb-10">
        <h2 className="text-sm font-bold mb-2">
          الف- اطلاعات فروش خالص کالاها و خدمات
        </h2>

        <div className="overflow-x-auto bg-white border rounded">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-green-50 text-gray-700">
              <tr>
                <th className="px-3 py-2 text-right border">ردیف</th>
                <th className="px-3 py-2 text-right border">شرح</th>
                <th className="px-3 py-2 text-center border">نرخ/درصد</th>
                <th className="px-3 py-2 text-right border">
                  بها-بارگذاری از سامانه مودیان (ریال)
                </th>
                <th className="px-3 py-2 text-right border">
                  بها-خارج از سامانه مودیان (ریال)
                </th>
                <th className="px-3 py-2 text-right border">بها-جمع (ریال)</th>
                <th className="px-3 py-2 text-right border">
                  مالیات و عوارض (ریال)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 border text-center">1</td>
                <td className="px-3 py-2 border">
                  فروش خالص کالا و خدمات موضوع ماده (7) (نقدی و نسیه)
                </td>
                <td className="px-3 py-2 border text-center">10%</td>
                <td className="px-3 py-2 border text-right">۲۷۵٬۴۳۸٬۸۰۵٬۰۶۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۲۷۵٬۴۳۸٬۸۰۵٬۰۶۰</td>
                <td className="px-3 py-2 border text-right">۲۷٬۵۴۳٬۸۸۰٬۵۰۶</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="px-3 py-2 border text-center">2</td>
                <td className="px-3 py-2 border">
                  فروش خالص کالا و خدمات معاف (نقدی و نسیه)
                </td>
                <td className="px-3 py-2 border text-center">0%</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
              </tr>

              <tr className="bg-green-800 text-white font-bold">
                <td colSpan={6} className="px-3 py-2 border text-right">
                  جمع مالیات و عوارض ارزش افزوده فروش یا صادرات کالاها و خدمات
                </td>
                <td className="px-3 py-2 border text-right">
                  ۲۷٬۵۴۳٬۸۸۰٬۵۰۶
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section B - Purchases */}
      <div>
        <h2 className="text-sm font-bold mb-2">
          ب- اطلاعات خرید خالص کالاها و خدمات
        </h2>

        <div className="overflow-x-auto bg-white border rounded">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-green-50 text-gray-700">
              <tr>
                <th className="px-3 py-2 text-right border">ردیف</th>
                <th className="px-3 py-2 text-right border">شرح</th>
                <th className="px-3 py-2 text-center border">نرخ/درصد</th>
                <th className="px-3 py-2 text-right border">
                  بها-بارگذاری از سامانه مودیان (ریال)
                </th>
                <th className="px-3 py-2 text-right border">
                  بها-خارج از سامانه مودیان (ریال)
                </th>
                <th className="px-3 py-2 text-right border">بها-جمع (ریال)</th>
                <th className="px-3 py-2 text-right border">
                  مالیات و عوارض (ریال)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 border text-center">1</td>
                <td className="px-3 py-2 border">
                  خرید خالص کالا و خدمات موضوع ماده (7) (نقدی و نسیه)
                </td>
                <td className="px-3 py-2 border text-center">10%</td>
                <td className="px-3 py-2 border text-right">۲۷۵٬۶۹۳٬۳۳۲٬۸۵۱</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۲۷۵٬۶۹۳٬۳۳۲٬۸۵۱</td>
                <td className="px-3 py-2 border text-right">۲۷٬۵۶۹٬۳۳۳٬۲۸۵</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 border text-center">2</td>
                <td className="px-3 py-2 border">
                  خرید خالص کالا و خدمات معاف (نقدی و نسیه)
                </td>
                <td className="px-3 py-2 border text-center">0%</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="px-3 py-2 border text-center">3</td>
                <td className="px-3 py-2 border">
                  خرید کالا و خدماتی که از فروشندگان فراخوان نشده انجام شده است
                </td>
                <td className="px-3 py-2 border text-center">—</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="px-3 py-2 border text-center">4</td>
                <td className="px-3 py-2 border">
                  کسر می‌شود: اعتبار مالیاتی مربوط به خریدهای غیرنقدی(نسیه) کالاها و خدمات موضوع ماده (7)
                </td>
                <td className="px-3 py-2 border text-center">—</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="px-3 py-2 border text-center">5</td>
                <td className="px-3 py-2 border">
                  کسر می‌شود: اعتبار مالیاتی مربوط به خریدهای نقدی مازاد بر سقف مقرر موضوع ماده (6)
                </td>
                <td className="px-3 py-2 border text-center">—</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
                <td className="px-3 py-2 border text-right">۰</td>
              </tr>

              <tr className="bg-green-800 text-white font-bold">
                <td colSpan={6} className="px-3 py-2 border text-right">
                  جمع مالیات و عوارض ارزش افزوده خرید یا واردات کالاها و خدمات
                </td>
                <td className="px-3 py-2 border text-right">
                  ۲۷٬۵۶۹٬۳۳۳٬۲۸۵
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* ======================= Section C ======================= */}
      <div className="mt-12">
        <h2 className="text-sm font-bold mb-2">
          ج- محاسبه مالیات و عوارض پرداختی قابل کسر یا استرداد (اعتبار مالیاتی)
        </h2>
        <div className="bg-white border rounded overflow-hidden">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-green-50">
              <tr>
                <th className="border px-3 py-2 text-center w-16">ردیف</th>
                <th className="border px-3 py-2 text-right">شرح</th>
                <th className="border px-3 py-2 text-right w-48">مالیات و عوارض (ریال)</th>
              </tr>
            </thead>
            <tbody>
              {[
                "مالیات و عوارض پرداختی بابت خرید و واردات کالا و خدمات برابر با مقدار مندرج در ردیف آخر جدول ب",
                "اضافه می‌شود: جمع اعتبارهای صورتحساب‌های الکترونیکی مربوط به خرید دوره‌های قبل که در دوره جاری بایستی لحاظ شود(بابت صورتحساب های الکترونیکی ثبت شده در سامانه مودیان با تاریخ صدور1402/10/01)",
                "کسر می‌شود: جمع اعتبارهای صورتحساب‌های الکترونیکی مربوط به خرید دوره‌های قبل که در دوره جاری بایستی کسر شود(بابت صورتحساب های الکترونیکی ثبت شده در سامانه مودیان با تاریخ صدور1402/10/01)",
                "کسر می‌شود: مالیات و عوارض پرداختی بابت خرید و واردات نهاده های مربوط به فروش کالا و خدمات معاف موضوع تبصره(2) و (3) ماده (۸)",
                "کسر می‌شود: مالیات و عوارض پرداختی بابت خرید نهاده‌های تملک دارایی سرمایه ای(عمرانی) موضوع تبصره(1)ماده(۸) وتبصره(4)بند الف ماده (26)",
                "به منظور پرهیز از اعمال جریمه ماده 37 و بند ب ماده(36)، کسرمیشود: مالیات و عوارض مربوط به خریدها و واردات هایی که اعتبار آن نمی بایست به شما تعلق گیرد، مالیات و عوارض مربوط به خریدهای خارج از سامانه مودیان که فروشنده با نرخی کمتر از نرخ قانونی اقدام به فروش و اخذ مالیات و عوارض نموده است. 2- مالیات و عوارض مربوط به حق العملکاری واردات که نباید برای شما لحاظ شود..."
              ].map((text, i) => (
                <tr key={i} className="bg-gray-50">
                  <td className="border px-3 py-2 text-center">{i + 1}</td>
                  <td className="border px-3 py-2">{text}</td>
                  <td className="border px-3 py-2 text-right">۰</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================= Section D ======================= */}
      <div className="mt-12">
        <h2 className="text-sm font-bold mb-2">
          د- محاسبه مانده بدهی مالیات بر ارزش افزوده یا اعتبار قابل استرداد
        </h2>
        <div className="bg-white border rounded overflow-hidden">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-green-50">
              <tr>
                <th className="border px-3 py-2 text-center w-16">ردیف</th>
                <th className="border px-3 py-2 text-right">شرح</th>
                <th className="border px-3 py-2 text-right w-48">مالیات و عوارض (ریال)</th>
              </tr>
            </thead>
            <tbody>
              {[
                "مالیات و عوارض متعلقه بابت فروش کالا و ارائه خدمات(نقدی و نسیه) برابر با مقدار مندرج در ردیف آخر جدول الف",
                "مالیات و عوارض خرید قابل کسر از مالیات فروش نتیجه اطلاعات مندج در جدول ج",
                "مالیات و عوارض فروش کالاها و ارائه خدمات(نسیه) در دوره جاری که وجه آن در دوره **بهار 1404** دریافت نشده",
                "کسر می‌شود: جمع مالیات و عوارض صورتحساب های الکترونیکی فروش دوره‌های قبل که در دوره جاری بایستی کسر شود(بابت صورتحساب های الکترونیکی ثبت شده در سامانه مودیان با تاریخ صدور1402/10/01)",
                "اضافه می‌شود: جمع مالیات و عوارض صورتحساب های الکترونیکی فروش دوره‌های قبل که در دوره جاری بایستی کسر شود(بابت صورتحساب های الکترونیکی ثبت شده در سامانه مودیان با تاریخ صدور1402/10/01)",
                "مالیات برارزش افزوده متعلقه در دوره جاری",
                "اضافه پرداختی مالیات برارزش افزوده انتقالی از دوره قبل بابت اظهارنامه در موعد مقرر",
                "مبالغ علی‌الحساب پرداختی در دوره **بهار 1404** (شامل افزایش حد مجاز فروش، تبصره(1) ماده(17) و ...)"
              ].map((text, i) => (
                <tr key={i} className="bg-gray-50">
                  <td className="border px-3 py-2 text-center">{i + 1}</td>
                  <td className="border px-3 py-2">{text}</td>
                  <td className="border px-3 py-2 text-right">۰</td>
                </tr>
              ))}
              <tr className="bg-green-800 text-white font-bold">
                <td colSpan={2} className="border px-3 py-2 text-right">
                  مانده بدهی مالیات بر ارزش افزوده
                </td>
                <td className="border px-3 py-2 text-right">-۲۵٬۸۵۴٬۳۷۰</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================= Notes Between D and Attachments ======================= */}
        <div className="mt-8 space-y-3">
        <div className="bg-white border rounded px-4 py-3 flex items-start gap-3">
            <input
            type="checkbox"
            className="mt-1 w-4 h-4 accent-green-700"
            defaultChecked
            />
            <p className="text-sm leading-6">
            درخواست انتقال مانده اعتبار مالیات بر ارزش افزوده به دوره بعد
            </p>
        </div>

        <div className="bg-white border rounded px-4 py-3 flex items-start gap-3">
            <input
            type="checkbox"
            className="mt-1 w-4 h-4 accent-green-700"
            defaultChecked
            />
            <p className="text-sm leading-6">
            اینجانب صحت اطلاعات اظهارشده را تأیید نموده و مسئولیت آن را طبق مقررات
            مالیات بر ارزش افزوده می‌پذیرم.
            </p>
        </div>
        </div>

      {/* ======================= Attachment Tables ======================= */}
      {[
        {
          title: "جدول ضمیمه 1 - توضیح محاسبات مربوط به ردیف(2) جدول(ج)",
          rows: [
            "مالیات و عوارض مربوط به مبالغ پرداختی بابت صورتحساب‌های الکترونیکی خریدهای نسیه مربوط به تاریخ 1402/10/01 لغایت 1403/12/30 که در این دوره تسویه شده است.",
            "خالص مالیات و عوارض خرید بابت صورتحساب های الکترونیکی ارجاعی مربوط به خرید که تاریخ صدور صورتحساب مرجع آنها مربوط به تاریخ 1402/10/01 لغایت 1403/12/30 بوده و باید به مالیات و عوارض خرید شما در این دوره اضافه شود.",
            "جمع اعتبارهای مربوط به صورتحساب های الکترونیکی مربوط به تاریخ 1402/10/01 لغایت 1403/12/30 که دروره جاری بایستی لحاظ شود"
          ]
        },
        {
          title: "جدول ضمیمه 2 - توضیح محاسبات مربوط به ردیف(3) جدول(ج)",
          rows: [
            "خالص مالیات و عوارض خرید بابت صورت حسابهای الکترونیکی ارجاعی مربوط به خرید که تاریخ صدور صورتحساب مرجع آنها مربوط به تاریخ 1402/10/01 لغایت 1403/12/30  بوده و باید از مالیات و عوارض  خرید شمادر این دوره کسر گردد.",
            "جمع اعتبارهای مربوط به صورتحساب های الکترونیکی مربوط به تاریخ 1402/10/01 لغایت 1403/12/30  بوده که دوره جاری بایستی کسر شود.",
          ]
        },
        {
          title: "جدول ضمیمه 3 - توضیح محاسبات مربوط به ردیف(5) جدول(د)",
          rows: [
            "مالیات و عوارض صورتحسابهای الکترونیکی فروش نسیه مربوط به تاریخ 1402/10/01 لغایت 1403/12/30 که مبلغی از آن در دوره جاری، وصول شده است.",
            "مالیات و عوارض فروش بابت صورتحسابهای الکترونیکی ارجاعی(به غیر از صورتحساب الکترونیکی صادرات) که تاریخ صدور صورتحساب مرجع آنها مربوط به تاریخ 1402/10/01 لغایت 1403/12/30  بوده و باید به مالیات و عوارض فروش شما در این دوره اضافه شود.",
            "مالیات و عوارض صورت حسابهای الکترونیکی فروش مربوط به تاریخ 1402/10/01 لغایت 1403/12/30 که عدم احتساب بوده اند و در این دوره احتساب شده اند.",
            "بدهکاری ناشی از عدم تایید صورتحساب های الکترونیکی مجازی سمت فروش  مربوط به تاریخ 1402/10/01 لغایت 1403/12/30 در این دوره، که بدهکاری حق العملکار را به اندازه بدهی آمر در صورتحساب مجازی افزایش میدهد.",
            "جمع بدهی های مربوط به صورتحساب های الکترونیکی  مربوط به تاریخ 1402/10/01 لغایت 1403/12/30 که بایستی در این دوره اعمال شود."
          ]
        },
        {
          title: "جدول ضمیمه 4 - توضیح محاسبات مربوط به ردیف(4) جدول(د)",
          rows: [
            "خالص مالیات و عوارض فروش بابت صورت حسابهای المترونیکی ارجاعی (به غیر از صورتحساب الکترونیکی صادرات) که تاریخ صدور صورتحاب مرجع آهنا مربوط به تاریخ 1402/10/01 لغایت 1403/12/30 بوده و باید از مالیات و عوارض فروش شما در این دوره کسر ود.",
            "مالیات و عوارض صورتحساب های الکترونیکی مربوط به تاریخ 1402/10/01 لغایت 1403/12/30 که احتساب بوده اند و ور این دوره عدم احتساب شده اند.",
            "پرداخت‌های مربوط به تاریخ 1402/10/01 لغایت 1403/12/30 که در این دوره ابطال شده اند",
            "جمع بدهی های مربوط به صورتحساب های الکترونیکی  مربوط به تاریخ 1402/10/01 لغایت 1403/12/30 که بایستی در این دوره عودت داده شود."
          ]
        }
      ].map((table, index) => (
        <div className="mt-12" key={index}>
          <h2 className="text-sm font-bold mb-2">
            {table.title}
          </h2>
          <div className="bg-white border rounded overflow-hidden">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-green-50">
                <tr>
                  <th className="border px-3 py-2 text-center w-16">ردیف</th>
                  <th className="border px-3 py-2 text-right">شرح</th>
                  <th className="border px-3 py-2 text-right w-48">مالیات و عوارض (ریال)</th>
                </tr>
              </thead>
              <tbody>
                {table.rows.map((text, i) => (
                  <tr key={i} className="bg-gray-50">
                    <td className="border px-3 py-2 text-center">{i + 1}</td>
                    <td className="border px-3 py-2">{text}</td>
                    <td className="border px-3 py-2 text-right">۰</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

    </div>
  );
}
