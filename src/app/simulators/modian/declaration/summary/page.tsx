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
    <div className="w-full px-16 py-16 bg-[#f3f4f6]">

       <div className="mb-8">

        <div className="flex items-start justify-between mb-10">
       <div className="flex items-center gap-4">
          <h1 className="text-[20px] font-semibold text-gray-900 leading-none">
           اظهارنامه پیش فرض ارزش افزوده دوره
          </h1>      
        <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">سال</span>
            <select className="h-9 border border-gray-300 rounded-md px-3 text-sm bg-white">
                <option value="1404">1404</option>
                <option value="1403">1403</option>
                <option value="1402">1402</option>
            </select>
       </div>
       <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">فصل</span>
            <select className="h-9 border border-gray-300 rounded-md px-3 text-sm bg-white">

                <option value="بهار">بهار</option>
                <option value="تابستان">تابستان</option>
                <option value="پاییز">پاییز</option>
            </select>
       </div>
       <span className="text-[15px] text-gray-600">
        (موضوع ماده 3 قانون تسهیل تکالیف مودیان)
        </span>
        </div>
       </div>
        </div>

     <div className="flex justify-end mb-14">
            <button
                type="button"
                disabled
                className="h-10 px-6 rounded-md border border-gray-300 bg-gray-100 text-gray-400 text-sm font-medium cursor-not-allowed"
                title="به‌زودی فعال می‌شود"
            >
                ایجاد نسخه جدید
            </button>
        </div>
       
       <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
         <table className="min-w-full table-fixed divide-y divide-gray-200 text-right">
           <thead className="bg-[#f1f5f9]">
             <tr>
               <th className="w-[22%] border-l border-gray-200 h-[56px] text-[13px] font-medium text-gray-600 tracking-wider">کد رهگیری اظهارنامه</th>
               <th className="w-[6%] border-l border-gray-200 h-[56px] text-[13px] font-medium text-gray-600 tracking-wider">نسخه</th>
               <th className="w-[14%] border-l border-gray-200 h-[56px] text-[13px] font-medium text-gray-600 tracking-wider">وضعیت</th>
               <th className="w-[14%] border-l border-gray-200 h-[56px] text-[13px] font-medium text-gray-600 tracking-wider">زمان بروزرسانی داده های سامانه</th>
               <th className="w-[14%] border-l border-gray-200 h-[56px] text-[13px] font-medium text-gray-600 tracking-wider">زمان تایید/ویرایش مودی</th>
               <th className="w-[10%] border-l border-gray-200 h-[56px] text-[13px] font-medium text-gray-600 tracking-wider"></th>
               <th className="w-[10%] border-l border-gray-200 text-[13px] font-medium text-gray-600 tracking-wider"></th>
               <th className="w-[10%] border-l border-gray-200 text-[13px] font-medium text-gray-600 tracking-wider"></th>
             </tr>
           </thead>
           <tbody className="bg-gray-100 divide-y divide-gray-200 text-[14px]">
             <tr>
               <td className="px-8 py-[18px] h-[56px] whitespace-nowrap text-gray-800 border-l border-gray-200">-</td>
               <td className="px-8 py-[18px] h-[56px] whitespace-nowrap text-gray-800 border-l border-gray-200">-</td>
               <td className="px-4 py-[12px] h-[56px] whitespace-nowrap">
                 <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                   {status === 'draft' ? 'ثبت موقت' : 'خلاصه عملکرد'}
                 </span>
               </td>
               <td className="px-8 py-[18px] h-[56px] whitespace-nowrap text-gray-800 border-l border-gray-200">1404/04/25-13:48</td>
               <td className="px-8 py-[18px] h-[56px] whitespace-nowrap text-gray-800 border-l border-gray-200">-</td>
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
       
       <div className="bg-white mt-14 flex items-center justify-between">
         <div className="flex gap-2 order-1">
           <button className="px-4 h-9 flex items-center justify-center border rounded-md text-sm">قبلی</button>
           <button className="px-4 h-9 flex items-center justify-center border border-blue-600 rounded-md text-sm bg-blue-600 text-white">1</button>
           <button className="px-4 h-9 flex items-center justify-center border rounded-md text-sm">2</button>
           <button className="px-4 h-9 flex items-center justify-center border rounded-md text-sm">3</button>
           <button className="px-4 h-9 flex items-center justify-center border rounded-md text-sm">بعدی</button>
         </div>
         <div className="order-2">
           <span className="text-sm text-gray-700">
             1 تا 10 از 100
           </span>
         </div>        
       </div>
       
       <div className="mt-12 border border-gray-200 bg-white rounded-lg px-8 py-6 shadow-sm">
            <div className="flex items-center">
                <p className="text-sm text-gray-600 ml-52">
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