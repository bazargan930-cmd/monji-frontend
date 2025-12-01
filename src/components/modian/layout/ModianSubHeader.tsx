// src/components/layout/ModianSubHeader.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { FiLogOut, FiBell, FiUser } from 'react-icons/fi';
import { MdSpaceDashboard } from 'react-icons/md';
import { modianMenu, normalizePath } from '@/components/modian/menu-items';

type Props = {
  /** اگر مقدار بدهید، برچسب سبز انتهایی نوار مسیر با همین متن نشان داده می‌شود */
  overrideTailLabel?: string;
};

export default function ModianSubHeader({ overrideTailLabel }: Props) {
  const pathname = normalizePath(usePathname());
  const search = useSearchParams();
  // تشخیص صفحه فقط بر اساس pathname تا تفاوت SSR/CSR ایجاد نشود
  const isAddPage =
    pathname.endsWith('/trusted/add') || pathname.endsWith('/memory-uid/add');
  const isDetailsPage =
    pathname.endsWith('/trusted/details') || pathname.endsWith('/memory-uid/details');
  const isEditPage =
    pathname.endsWith('/trusted/edit') || pathname.endsWith('/memory-uid/edit');
  // اگر صفحهٔ details با کوئری mode=edit باز شده باشد، ساب‌هدر باید «ویرایش» نشان دهد
  const forceEdit = search.get('mode') === 'edit';
  const s0s1 = [...modianMenu[0], ...modianMenu[1]];
  const activeTop = s0s1.find((i) => pathname === i.href || pathname.startsWith(i.href + '/'));
  const isPortal = activeTop?.label === 'پیشخوان';

  // والد/فرزند گروه سوم (پرونده مالیاتی و عضویت)
  const group = modianMenu[2].find((g) => Array.isArray(g.children) && g.children.length > 0);
  const activeChild = group?.children?.find((c) => pathname === c.href || pathname.startsWith(c.href + '/'));
  const inTaxFile = Boolean(activeChild);
  // حالت مخصوص «افزودن کاربر» در ماژول مودیان
  const isUsersRolesAdd = pathname.endsWith('/simulators/modian/users-roles/add');
  const isRoleAdd       = pathname.endsWith('/simulators/modian/roles/add');
  // ★ تشخیص صفحه «اظهارنامه پیش‌فرض»
  const isDeclaration   = pathname.startsWith('/simulators/modian/declaration');
  // ★ تشخیص «صورت‌حساب‌ها» + فرزند فعال آن
  const allGroups = modianMenu
    .flat()
    .filter((g) => {
      const item = g as { children?: unknown[] };
      return Array.isArray(item.children) && item.children.length > 0;
    });
  const invoicesGroup = allGroups.find(
    (g) => g && typeof g === 'object' && 'label' in g && g.label === 'صورت‌حساب‌ها',
  );
  const invoicesActiveChild = invoicesGroup?.children?.find(
    (c) =>
      c &&
      typeof c === 'object' &&
      'href' in c &&
      typeof c.href === 'string' &&
      (pathname === c.href || pathname.startsWith(`${c.href}/`)),
  );
  const inInvoices = Boolean(invoicesActiveChild) || pathname === normalizePath(invoicesGroup?.href || '');

  return (
    <div className="w-full bg-white border-t border-b border-gray-300 py-2 px-6 flex items-center justify-between text-sm text-gray-700">
      {/* breadcrumb */}
      <div className="flex items-center gap-2 rtl:space-x-reverse text-sm">
        {/* «پیشخوان» فقط وقتی صفحهٔ فعلی خودِ پیشخوان است سبز می‌شود؛ در بقیه صفحات خاکستری */}
        <span className={`${isPortal ? 'text-green-600' : 'text-gray-600'} flex items-center gap-1`}>
          <MdSpaceDashboard />
          پیشخوان
        </span>

        {inTaxFile ? (
          <>
            <span className="text-gray-400">{'>'}</span>
            <span className="text-gray-600 flex items-center gap-1">
              {group?.icon && <group.icon />}
              {group?.label}
            </span>
            <span className="text-gray-400">{'>'}</span>
            <span className="flex items-center gap-1 text-green-600">
              {activeChild?.icon && <activeChild.icon />}
              {activeChild?.label || 'اطلاعات ثبت نامی'}
            </span>
            {isAddPage && (
              <>
                <span className="text-gray-400">{'>'}</span>
                <span className="text-green-600">افزودن</span>
              </>
            )}
           {!isAddPage && isDetailsPage && !forceEdit && (
              <>
                <span className="text-gray-400">{'>'}</span>
                <span className="text-green-600">جزئیات</span>
              </>
            )}
            {!isAddPage && ( (!isDetailsPage && isEditPage) || forceEdit ) && (
              <>
                <span className="text-gray-400">{'>'}</span>
                <span className="text-green-600">ویرایش</span>
              </>
            )}           
          </>
        ) : inInvoices ? (
          <>
            <span className="text-gray-400">{'>'}</span>
            <span className="text-gray-600 flex items-center gap-1">
              {invoicesGroup?.icon && <invoicesGroup.icon />}
              {invoicesGroup?.label || 'صورت‌حساب‌ها'}
            </span>
            <span className="text-gray-400">{'>'}</span>
            <span className="flex items-center gap-1 text-green-600">
              {invoicesActiveChild?.icon && <invoicesActiveChild.icon />}
              {invoicesActiveChild?.label || 'خرید داخلی'}
            </span>                      
          </>
        ) : !isPortal ? (
          <>
            <span className="text-gray-400">{'>'}</span>
            {/* اگر صفحهٔ افزودن کاربر است: «کاربران و نقش‌ها» خاکستری ← «افزودن کاربر» سبز */}
            {isUsersRolesAdd ? (
              <>
                <span className="text-gray-600">کاربران و نقش‌ها</span>
                <span className="text-gray-400">{'>'}</span>
                <span className="text-green-600">افزودن کاربر</span>
              </>
            ) : isRoleAdd ? (
              <>
                <span className="text-gray-600">کاربران و نقش‌ها</span>
                <span className="text-gray-400">{'>'}</span>
                <span className="text-green-600">ایجاد نقش</span>
              </>             
            ) : (
              <span className="flex items-center gap-1 text-green-600">
                {/* حالت عادی: فقط برچسب انتهایی سبز */}
                {overrideTailLabel
                  || (isDeclaration ? 'اظهارنامه پیش‌فرض' : undefined)
                  || activeTop?.label
                  || 'کاربران و نقش‌ها'}
              </span>
            )}
          </>
        ) : null}
      </div>

      {/* آیکون‌ها و خروج */}
      <div className="flex items-center gap-3">
        <button className="text-gray-600 hover:text-green-600 text-lg" aria-label="notifications"><FiBell /></button>
        <button className="text-gray-600 hover:text-green-600 text-lg" aria-label="profile"><FiUser /></button>
        <button
          onClick={async () => {
            await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
            window.location.href = '/simulators/modian/login';
          }}
          className="flex items-center gap-1 text-xs text-gray-600 hover:text-red-500 border px-3 py-1 rounded-md shadow-sm bg-white"
        >
          <FiLogOut className="text-base" />
          <span>خروج از سامانه</span>
        </button>
      </div>
    </div>
  );
}
