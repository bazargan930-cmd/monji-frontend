// src/components/modian/menu-items.ts
'use client';

import type { IconType } from 'react-icons';
import { MdSpaceDashboard } from 'react-icons/md';
import { FiHome, FiGrid, FiUsers } from 'react-icons/fi';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuListTodo } from 'react-icons/lu';
import { FaHandshake } from 'react-icons/fa';
import { BsClipboardCheck } from 'react-icons/bs';
import { RiFileListLine } from 'react-icons/ri';

// 🔹 مسیر پایه و مسیر پیش‌فرض این گروه
export const TAXFILE_BASE = '/simulators/modian/admin/taxfile';
export const TAXFILE_DEFAULT = `${TAXFILE_BASE}/registration`;

export type MenuItem = {
  label: string;
  href: string;       // می‌تواند '#'/base باشد
  icon: IconType;
  children?: MenuItem[]; // ← زیرمنو
};

export const modianMenu: MenuItem[][] = [
  [
    { label: 'پیشخوان', href: '/simulators/modian/portal', icon: MdSpaceDashboard },
  ],
  [
    { label: 'خانه', href: '/simulators/modian/home', icon: FiHome },
    { label: 'داشبورد مدیریتی', href: '/simulators/modian/admin/dashboard', icon: FiGrid },
  ],
  [
    // 🔹 گروه کشویی با ۷ آیتم
    {
      label: 'پرونده مالیاتی و عضویت',
      href: TAXFILE_BASE, // ← کلیک روی والد به صفحه پیش‌فرض هدایت می‌شود (در سایدبار هندل می‌کنیم)
      icon: BsClipboardCheck,
      children: [
        { label: 'اطلاعات ثبت نامی', href: '/simulators/modian/admin/taxfile/registration', icon: HiOutlineDocumentReport },
        { label: 'قبوض', href: `${TAXFILE_BASE}/bills`, icon: HiOutlineDocumentReport },
        { label: 'شرکت معتمد / سامانه دولتی', href: `${TAXFILE_BASE}/trusted`, icon: HiOutlineDocumentReport },
        { label: 'شناسه یکتا حافظه مالیاتی', href: `${TAXFILE_BASE}/memory-uid`, icon: HiOutlineDocumentReport },
        { label: 'شناسه یکتا پایانه پرداخت', href: `${TAXFILE_BASE}/payment-terminal-uid`, icon: HiOutlineDocumentReport },
        { label: 'ابزار پرداخت', href: `${TAXFILE_BASE}/payment-tools`, icon: HiOutlineDocumentReport },
        { label: 'حساب بانکی', href: `${TAXFILE_BASE}/bank-accounts`, icon: HiOutlineDocumentReport },
      ],
    },

    // 👇 سایر آیتم‌ها مثل قبل
    // مسیر صحیح صفحه «کاربران و نقش‌ها» در شبیه‌ساز
    { label: 'کاربران و نقش‌ها', href: '/simulators/modian/users-roles', icon: FiUsers },
    {
      label: 'اظهارنامه پیش‌فرض',
      href: '/simulators/modian/declaration', // لینک به صفحه جدید
      icon: LuListTodo,
    },
    {
      label: 'صورت‌حساب‌ها',
      href: '/simulators/modian/invoices',             // والد گروه (برای هایلایت و بازبودن آکاردئون)
      icon: HiOutlineDocumentReport,
      children: [
        { label: 'خرید داخلی',    href: '/simulators/modian/invoices/buy',     icon: HiOutlineDocumentReport },
        { label: 'فروش داخلی',    href: '/simulators/modian/invoices/sales',   icon: HiOutlineDocumentReport },
        { label: 'فروش صادراتی',  href: '/simulators/modian/invoices/exports', icon: HiOutlineDocumentReport },
        { label: 'فایل‌های خروجی', href: '/simulators/modian/invoices/files',  icon: HiOutlineDocumentReport },
      ],
    },
    { label: 'صورت‌حساب‌های قبل از ۱۴۰۲/۰۳/۲۶', href: '#', icon: HiOutlineDocumentReport },
    { label: 'اعلامیه‌های خرید', href: '#', icon: HiOutlineDocumentReport },
    { label: 'قراردادها', href: '#', icon: FaHandshake },
    { label: 'درخواست‌ها', href: '#', icon: RiFileListLine },
  ],
];

// Helpers
export const normalizePath = (p: string) =>
  (p || '')
    .split('?')[0]
    .split('#')[0]
    .replace(/\/+$/, '') || '/';


export const isActive = (pathname: string, href: string) => {
  const a = normalizePath(pathname);
  const b = normalizePath(href);

  // والد "پرونده مالیاتی و عضویت" (BASE) فقط در حالت ورود دقیق به خودش فعال شود
  if (b === TAXFILE_BASE) return a === b;

  // برای سایر آیتم‌ها، تطبیق دقیق (و در صورت داشتن زیرمسیر، آن‌ها هم فعال محسوب شوند)
  return a === b || a.startsWith(b + '/');
};