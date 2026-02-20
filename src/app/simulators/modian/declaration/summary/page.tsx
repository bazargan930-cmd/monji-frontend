// src/app/simulators/modian/declaration/summary/page.tsx
 'use client';
 
 import { useRouter } from 'next/navigation';
 import React from 'react';
 
 export default function SummaryPage() {
  const router = useRouter();

  const [year] = React.useState('1404');
  const [season] = React.useState('بهار');

  const [status, setStatus] = React.useState<'draft' | 'default'>('default');

  React.useEffect(() => {
    const savedStatus = localStorage.getItem('modian_draft_status');
    if (savedStatus === 'draft') {
      setStatus('draft');
    }
  }, []);

   return (
    <div className="w-full px-6 py-8">

       <div className="rounded-lg p-6 mb-6">

        <div className="flex items-center mb-6">
       <h1 className="text-1xl font-bold">اظهارنامه پیش فرض ارزش افزوده دوره</h1>      
        <div className="relative mr-2">
            <label className="absolute top-0 left-0 text-gray-500 text-sm transition-all duration-200">سال</label>
            <select className="border rounded px-2 py-1 w-24">
                <option value="1404">1404</option>
                <option value="1403">1403</option>
                <option value="1402">1402</option>
            </select>
       </div>
       <div className="relative mr-2">
            <label className="absolute top-0 left-0 text-gray-500 text-sm transition-all duration-200">فصل</label>
            <select className="border rounded px-2 py-1 w-24">
                <option value="بهار">بهار</option>
                <option value="تابستان">تابستان</option>
                <option value="پاییز">پاییز</option>
            </select>
       </div>
       <span className="text-1xl font-bold">(موضوع ماده 3 قانون تسهیل تکالیف مودیان)</span>
       </div>
        </div>

     <div className="flex justify-end mb-4">
            <button
                type="button"
                disabled
                className="rounded-md px-6 py-3 text-gray-400 border border-gray-300 bg-white opacity-50 cursor-not-allowed"
                title="به‌زودی فعال می‌شود"
            >
                ایجاد نسخه جدید
            </button>
        </div>
       
       <div className="overflow-x-auto bg-white border rounded-lg">
         <table className="min-w-full divide-y divide-gray-200">
           <thead className="bg-blue-50">
             <tr>
               <th className="px-4 py-[12px] text-[13px] font-medium text-gray-600 tracking-wider">کد رهگیری اظهارنامه</th>
               <th className="px-4 py-[12px] text-[13px] font-medium text-gray-600 tracking-wider">نسخه</th>
               <th className="px-4 py-[12px] text-[13px] font-medium text-gray-600 tracking-wider">وضعیت</th>
               <th className="px-4 py-[12px] text-[13px] font-medium text-gray-600 tracking-wider">زمان بروزرسانی داده های سامانه</th>
               <th className="px-4 py-[12px] text-[13px] font-medium text-gray-600 tracking-wider">زمان تایید/ویرایش مودی</th>
               <th className="px-4 py-[12px] text-[13px] font-medium text-gray-600 tracking-wider"></th>
               <th className="px-4 py-[12px] text-[13px] font-medium text-gray-600 tracking-wider"></th>
               <th className="px-4 py-[12px] text-[13px] font-medium text-gray-600 tracking-wider"></th>
             </tr>
           </thead>
           <tbody className="bg-gray-100 divide-y divide-gray-200 text-[14px]">
             <tr>
               <td className="px-4 py-[12px] h-[56px] whitespace-nowrap text-sm text-gray-900">نام شرکت</td>
               <td className="px-4 py-[12px] h-[56px] whitespace-nowrap text-sm text-gray-900">نام شرکت بیمه گذار</td>
               <td className="px-4 py-[12px] h-[56px] whitespace-nowrap">
                 <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                   {status === 'draft' ? 'ثبت موقت' : 'خلاصه عملکرد'}
                 </span>
               </td>
               <td className="px-4 py-[12px] h-[56px] whitespace-nowrap text-sm text-gray-900">نوع اظهارنامه</td>
               <td className="px-4 py-[12px] h-[56px] whitespace-nowrap text-sm text-gray-900">123456</td>
               <td className="px-4 py-[12px] h-[56px] whitespace-nowrap text-sm">
                 <button
                   type="button"
                   onClick={() =>
                     router.push(
                       `/simulators/modian/declaration/details?year=${year}&season=${season}`
                     )
                   }
                   className="text-[#0f766e] hover:text-[#115e59] font-medium"
                 >
                   مشاهده
                 </button>
               </td>
               <td className="px-4 py-[12px] h-[56px] whitespace-nowrap text-sm">
                <button
                  type="button"
                  onClick={() =>
                    router.push(
                      `/simulators/modian/declaration/complete?year=${year}&season=${season}`
                    )
                  }
                  className="text-[#0f766e] hover:text-[#115e59] font-medium"
                >
                  تکمیل اطلاعات
                </button>
              </td>
               <td className="px-4 py-[12px] h-[56px] whitespace-nowrap text-sm text-gray-400">قبوض</td>
             </tr>
           </tbody>
         </table>
       </div>
       
       <div className="mt-4 flex justify-between items-center">
         <div>
           <span className="text-sm text-gray-700">
             1 تا 10 از 100
           </span>
         </div>
         <div className="flex space-x-2">
           <button className="px-4 h-9 flex items-center justify-center border rounded-md text-sm">قبلی</button>
           <button className="px-4 h-9 flex items-center justify-center border rounded-md text-sm bg-blue-500 text-white">1</button>
           <button className="px-4 h-9 flex items-center justify-center border rounded-md text-sm">2</button>
           <button className="px-4 h-9 flex items-center justify-center border rounded-md text-sm">3</button>
           <button className="px-4 h-9 flex items-center justify-center border rounded-md text-sm">بعدی</button>
         </div>
       </div>
       
       <div className="mt-8 border border-gray-300 bg-gray-50 rounded-lg px-6 py-4">
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                به منظور ثبت درخواست جهت بررسی "بروزرسانی" و "محاسبه مجدد" مقادیر بارگذاری شده از سامانه مؤدیان، را از طریق فرم ارسال بازخورد اقدام نمایید.
                </p>
                <button
                type="button"
                onClick={() => router.push('/simulators/modian/declaration/feedback')}
                className="rounded-md h-10 px-6 rounded-md border border-gray-900 text-sm font-medium bg-white hover:bg-gray-300"
                >
                ارسال بازخورد
                </button>
            </div>
        </div>
    </div>
   );
 }