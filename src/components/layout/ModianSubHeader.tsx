// src/components/layout/ModianSubHeader.tsx
'use client';

import { usePathname } from 'next/navigation';
import { FiLogOut, FiBell, FiUser } from 'react-icons/fi';
import { MdSpaceDashboard } from 'react-icons/md';
import { modianMenu, normalizePath } from '@/components/modian/menu-items';

export default function ModianSubHeader() {
  const pathname = normalizePath(usePathname());

  const s0s1 = [...modianMenu[0], ...modianMenu[1]];
  const activeTop = s0s1.find((i) => pathname === i.href || pathname.startsWith(i.href + '/'));
  const isPortal = activeTop?.label === 'پیشخوان';

  // والد/فرزند گروه سوم (پرونده مالیاتی و عضویت)
  const group = modianMenu[2].find((g) => Array.isArray(g.children) && g.children.length > 0);
  const activeChild = group?.children?.find((c) => pathname === c.href || pathname.startsWith(c.href + '/'));
  const inTaxFile = Boolean(activeChild);

  return (
    <div className="w-full bg-white border-t border-b border-gray-300 py-2 px-6 flex items-center justify-between text-sm text-gray-700">
      {/* breadcrumb */}
      <div className="flex items-center gap-2 rtl:space-x-reverse text-sm">
        <span className={`${isPortal || inTaxFile ? 'text-gray-600' : 'text-green-600'} flex items-center gap-1`}>
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
          </>
        ) : !isPortal ? (
          <>
            <span className="text-gray-400">{'>'}</span>
            <span className="flex items-center gap-1 text-green-600">
              {activeTop?.icon && <activeTop.icon />}
              {activeTop?.label || 'عنوان صفحه'}
            </span>
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
