//src/components/layout/ModianSubHeader.tsx

'use client';

import { FiLogOut, FiHome, FiBell, FiUser } from 'react-icons/fi';
import { MdSpaceDashboard } from 'react-icons/md';

export default function ModianSubHeader({ title = 'پیشخوان' }: { title?: string }) {
  const isHome = title === 'خانه';
  const isPortal = title === 'پیشخوان';

  return (
    <div className="w-full bg-white border-t border-b border-gray-300 py-2 px-6 flex items-center justify-between text-sm text-gray-700">
      {/* مسیر صفحات */}
      <div className="flex items-center gap-2 rtl:space-x-reverse text-sm">
        {isPortal ? (
          <span className="flex items-center gap-1 text-green-600 font-medium">
            <MdSpaceDashboard />
            پیشخوان
          </span>
        ) : (
          <>
            <span className="text-gray-600 flex items-center gap-1">
              <MdSpaceDashboard />
              پیشخوان
            </span>
            <span className="text-gray-400">/</span>
            <span className="flex items-center gap-1 text-green-600 font-medium">
              <FiHome />
              {title}
            </span>
          </>
        )}
      </div>

      {/* دکمه خروج و آیکون‌ها */}
      <div className="flex items-center gap-3">
        {/* آیکون زنگ */}
        <button className="text-gray-600 hover:text-green-600 text-lg">
          <FiBell />
        </button>

        {/* آیکون کاربر */}
        <button className="text-gray-600 hover:text-green-600 text-lg">
          <FiUser />
        </button>

        {/* دکمه خروج */}
        <button
          onClick={async () => {
            await fetch('/api/auth/logout', { method: 'POST' });
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
