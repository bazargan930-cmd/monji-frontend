//src\app\simulators\modian\users-roles\page.tsx
'use client';

 import { useState } from 'react';
import HelpTrigger from '@/components/common/help/HelpTrigger';
import { ToolbarBar, ToolbarSearch, SimulatorBadge } from '@/components/modian/ui';
import { UsersRolesHelpContent } from '@/components/modian/users-roles';

 export default function UsersRolesPage() {
   const [tab, setTab] = useState<'users' | 'roles'>('users');
   const [q, setQ] = useState('');

   return (
  <div dir="rtl" className="space-y-4">
    {/* لی‌اوت، هدر/ساب‌هدر/سایدبار را فراهم می‌کند؛ اینجا فقط محتوای صفحه */}

    {/* هدر صفحه: راست=تیتر | وسط=حالت آموزشی | چپ=راهنمای صفحه */}
    <div className="relative mb-2 min-h-[42px]">
      {/* راست: تیتر صفحه */}
      <h1 className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl font-bold">
        کاربران و نقش‌ها
      </h1>

      {/* وسط: حالت آموزشی (کاملاً وسط ظرف) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <SimulatorBadge />
      </div>
    {/* راهنمای صفحه (مودال مشترک + محتوای اختصاصی) – زیر ساب‌هدر، سمت چپ */}
    <div className="px-0 flex justify-end">
      <HelpTrigger
        buttonTitle="راهنمای کاربران و نقش‌ها"
        modalTitle="راهنمای صفحهٔ کاربران و نقش‌ها"
        size="lg"
      >
        <UsersRolesHelpContent />
      </HelpTrigger>      
    </div>
  </div>
       {/* تب‌ها */}
       <div className="border-b border-gray-200">
         <nav className="flex gap-6">
           <button
             type="button"
             onClick={() => setTab('users')}
             className={`py-2 -mb-px border-b-2 ${
               tab === 'users'
                 ? 'border-green-600 text-green-700 font-medium'
                 : 'border-transparent text-gray-500 hover:text-gray-700'
             }`}
           >
             کاربران
           </button>
           <button
             type="button"
             onClick={() => setTab('roles')}
             className={`py-2 -mb-px border-b-2 ${
               tab === 'roles'
                 ? 'border-green-600 text-green-700 font-medium'
                 : 'border-transparent text-gray-500 hover:text-gray-700'
             }`}
           >
             نقش‌ها
           </button>
         </nav>
       </div>

       {/* نوار ابزار بالای جدول (جستجو راست، اکشن اصلی چپ) */}
       {tab === 'users' && (
         <ToolbarBar
           right={
             <ToolbarSearch
               value={q}
               onChange={setQ}
               placeholder="جستجو با نام خانوادگی، کد ملی/کد فراگیر یا موبایل…"
               widthClass="w-[440px] border border-gray-300"  /* ← بزرگ‌تر طبق کادر آبی */
             />
           }
           left={
             <a
               href="/simulators/modian/users-roles/add"
               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
             >
               افزودن کاربر
             </a>
           }
         />
       )}

      {/* نوار ابزار تب «نقش‌ها» (جستجو کوچک‌تر + دکمه ایجاد نقش) */}
      {tab === 'roles' && (
        <ToolbarBar
          right={
            <ToolbarSearch
              value={q}
              onChange={setQ}
              placeholder="جستجو با نام نقش…"
              widthClass="w-[360px] border border-gray-300"  /* ← کمی کوچک‌تر از تب کاربران */
            />
          }
          left={
            <a
              href="/simulators/modian/roles/add"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              ایجاد نقش
            </a>
          }
        />
      )}

       {/* جدول کاربران (خالی) */}
       {tab === 'users' && (
         <div className="border rounded-md overflow-hidden bg-white">
           <table className="w-full text-sm">
             <thead className="bg-green-50 text-gray-700">
               <tr>
                 <th className="py-2 px-3 text-right w-16">ردیف</th>
                 <th className="py-2 px-3 text-right">نام و نام خانوادگی</th>
                 <th className="py-2 px-3 text-right">کدملی/کد فراگیر</th>
                 <th className="py-2 px-3 text-right">شماره همراه</th>
                 <th className="py-2 px-3 text-right w-32"></th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td colSpan={5} className="py-10 text-center text-gray-500">
                   موردی ثبت نشده
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
       )}

       {/* جدول نقش‌ها (خالی) */}
      {tab === 'roles' && (
        <div className="border rounded-md overflow-hidden bg-white">
          <table className="w-full text-sm">
            <thead className="bg-green-50 text-gray-700">
              <tr>
                <th className="py-2 px-3 text-right w-16">ردیف</th>
                <th className="py-2 px-3 text-right">نام نقش</th>
                <th className="py-2 px-3 text-right w-32"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} className="py-10 text-center text-gray-500">
                  موردی ثبت نشده
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
     </div>
   );
 }
