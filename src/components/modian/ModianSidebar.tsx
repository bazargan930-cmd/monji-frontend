'use client';

import {
  HiOutlineDocumentReport
} from 'react-icons/hi';
import { FiHome, FiGrid, FiUsers } from 'react-icons/fi';
import { MdSpaceDashboard } from 'react-icons/md';
import { LuListTodo } from 'react-icons/lu';
import { FaHandshake } from 'react-icons/fa';
import { BsClipboardCheck } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiFileListLine } from 'react-icons/ri';

export default function ModianSidebar() {
  const pathname = usePathname();
  const [user, setUser] = useState<{ fullName: string } | null>(null);

  useEffect(() => {
    fetch('/api/utils/user-info', { credentials: 'include' })
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data) setUser(data);
      });
  }, []);

  // کل منوها به صورت سه دسته
  const menuItems = [
    // بخش اول
    [
      { label: 'پیشخوان', href: '/simulators/modian/portal', icon: <MdSpaceDashboard /> }, 
    ],
    // بخش دوم
    [
      { label: 'خانه', href: '/simulators/modian/home', icon: <FiHome /> },
      { label: 'داشبورد مدیریتی', href: '/simulators/modian/admin/dashboard', icon: <FiGrid /> },      
    ],

    // بقیه
    [
      { label: 'پرونده مالیاتی و عضویت', href: '#', icon: <BsClipboardCheck /> },
      { label: 'کاربران و نقش‌ها', href: '#', icon: <FiUsers /> },
      { label: 'اظهارنامه پیش‌فرض', href: '#', icon: <LuListTodo /> },
      { label: 'صورت‌حساب‌ها', href: '#', icon: <HiOutlineDocumentReport /> },
      { label: 'صورت‌حساب‌های قبل از ۱۴۰۲/۰۳/۲۶', href: '#', icon: <HiOutlineDocumentReport /> },
      { label: 'اعلامیه‌های خرید', href: '#', icon: <HiOutlineDocumentReport /> },
      { label: 'قراردادها', href: '#', icon: <FaHandshake /> },
      { label: 'درخواست‌ها', href: '#', icon: <RiFileListLine /> },
    ],
  ];

  const renderItem = (item: any, index: number) => {
    const isActive = pathname === item.href;
    const uniqueKey = item.href !== '#' ? item.href : `${item.label}-${index}`;
    return (
      <Link
        key={uniqueKey}
        href={item.href}
        className={`flex flex-row-reverse items-center justify-between px-3 py-2 rounded gap-2 ${
          isActive
            ? 'bg-green-600 text-white font-bold'
            : 'text-gray-700 hover:text-green-600'
        }`}
      >
        <span className="flex-1 text-right">{item.label}</span>
        {item.icon && <span className="text-xl">{item.icon}</span>}
      </Link>
    );
  };

  return (
    <aside className="bg-white shadow rounded-lg p-4 text-sm">

      {/* اطلاعات کاربر */}
      <div className="bg-green-50 rounded p-3 mb-4">
        <div className="flex flex-col items-start">
          <span className="font-bold text-green-800">{user?.fullName || '...'}</span>
          <span className="bg-green-200 text-green-800 text-xs px-3 py-0.5 rounded-full mt-1">
            فعال
          </span>
        </div>
      </div>

      {/* منو راست‌چین با فاصله بیشتر و جداکننده‌ها */}
      <nav className="flex flex-col text-right space-y-3">
        
        {menuItems[0].map(renderItem)}
        <hr className="border-t border-gray-200" />
        
        {menuItems[1].map(renderItem)}
        <hr className="border-t border-gray-200" />
        {menuItems[2].map(renderItem)}
      </nav>



    </aside>
  );
}
