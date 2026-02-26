// src\features\modian/menu-items.ts
'use client';

import type { IconType } from 'react-icons';
import { BsClipboardCheck } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { FiHome, FiGrid, FiUsers } from 'react-icons/fi';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuListTodo } from 'react-icons/lu';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiFileListLine } from 'react-icons/ri';
 

// 🔹 مسیر پایه و مسیر پیش‌فرض این گروه
export const TAXFILE_BASE = '/simulators/modian/taxfile';
export const TAXFILE_DEFAULT = `${TAXFILE_BASE}/registration`;

export type MenuItem = {
  label: string;
  href: string;       // می‌تواند '#'/base باشد
  icon: IconType;
  children?: MenuItem[]; // ← زیرمنو
  disabled?: boolean; // ← آیتم غیرفعال (فعلاً غیرقابل کلیک)
};

export const modianMenu: MenuItem[][] = [
  [
    { label: 'پیشخوان', href: '/simulators/modian/portal', icon: MdSpaceDashboard },
  ],
  [
    { label: 'خانه', href: '/simulators/modian/home', icon: FiHome },
    { label: 'داشبورد مدیریتی', href: '/simulators/modian/dashboard', icon: FiGrid },
  ],
  [
    // 🔹 گروه کشویی با ۷ آیتم
    {
      label: 'پرونده مالیاتی و عضویت',
      href: TAXFILE_BASE, // ← کلیک روی والد به صفحه پیش‌فرض هدایت می‌شود (در سایدبار هندل می‌کنیم)
      icon: BsClipboardCheck,
      children: [
        { label: 'اطلاعات ثبت نامی', href: '/simulators/modian/taxfile/registration', icon: HiOutlineDocumentReport },
        { label: 'قبوض', href: `${TAXFILE_BASE}/bills`, icon: HiOutlineDocumentReport },
        { label: 'شرکت معتمد / سامانه دولتی', href: `${TAXFILE_BASE}/trusted`, icon: HiOutlineDocumentReport },
        { label: 'شناسه یکتا حافظه مالیاتی', href: `${TAXFILE_BASE}/memory-uid`, icon: HiOutlineDocumentReport },
        { label: 'شناسه یکتا پایانه پرداخت', href: `${TAXFILE_BASE}/payment-terminal-uid`, icon: HiOutlineDocumentReport },
        { label: 'ابزار پرداخت', href: `${TAXFILE_BASE}/payment-tools`, icon: HiOutlineDocumentReport },
        { label: 'حساب بانکی', href: `${TAXFILE_BASE}/bank-accounts`, icon: HiOutlineDocumentReport },
      ],
    },

    // 👇 سایر آیتم‌ها مثل قبل
    { label: 'کاربران و نقش‌ها', href: '/simulators/modian/users-roles', icon: FiUsers },
    {
      label: 'اظهارنامه پیش‌فرض',
      href: '/simulators/modian/declaration',
      icon: LuListTodo,
    },
    {
      label: 'صورت‌حساب‌ها',
      href: '/simulators/modian/invoices',
      icon: HiOutlineDocumentReport,
      children: [
        { label: 'خرید داخلی',    href: '/simulators/modian/invoices/buy',     icon: HiOutlineDocumentReport },
        { label: 'فروش داخلی',    href: '/simulators/modian/invoices/sales',   icon: HiOutlineDocumentReport },
        { label: 'فروش صادراتی',  href: '/simulators/modian/invoices/exports', icon: HiOutlineDocumentReport },
        { label: 'فایل‌های خروجی', href: '/simulators/modian/invoices/files',  icon: HiOutlineDocumentReport },
      ],
    },
    {
      label: 'صورتحساب‌های قبل از ۱۴۰۲/۰۳/۲۶',
      href: '/simulators/modian/old-Invoices',
      icon: HiOutlineDocumentReport,
      children: [
        {
          label: 'خرید داخلی',
          href: '/simulators/modian/old-Invoices/buy',
          icon: HiOutlineDocumentReport,
        },
        {
          label: 'فروش داخلی',
          href: '/simulators/modian/old-Invoices/sales',
          icon: HiOutlineDocumentReport,
        },
        {
          label: 'فروش صادراتی',
          href: '/simulators/modian/old-Invoices/exports',
          icon: HiOutlineDocumentReport,
        },
      ],
    },

    // 🔹 منوی جدید: اعلامیه‌های خرید (بازشونده با دو زیرمنو)
    {
      label: 'اعلامیه‌های خرید',
      href: '/simulators/modian/purchase-announcements',
      icon: HiOutlineDocumentReport,
      children: [
        {
          label: 'وارداتی',
          href: '/simulators/modian/purchase-announcements/imports',
          icon: HiOutlineDocumentReport,
        },
        {
          label: 'خرید از بورس',
          href: '/simulators/modian/purchase-announcements/bourse',
          icon: HiOutlineDocumentReport,
        },
      ],
    },

    // 🔹 منوی «قراردادها» با دو زیرمنو: پیمانکاری و حق‌العملکاری
    {
      label: 'قراردادها',
      href: '/simulators/modian/contracts',
      icon: FaHandshake,
      children: [
        {
          label: 'پیمانکاری',
          href: '/simulators/modian/contracts/contracting',
          icon: HiOutlineDocumentReport,
        },
        {
          label: 'حق‌العملکاری',
          href: '/simulators/modian/contracts/commission',
          icon: HiOutlineDocumentReport,
        },
      ],
    },
    { label: 'اطلاعیه‌های خرید', href: '#', icon: FaHandshake, disabled: true },
    { label: 'صدور قبوض مالیاتی', href: '/simulators/modian/tax-bills', icon: HiOutlineDocumentReport },
    {
      label: 'درخواست‌ها',
      href: '/simulators/modian/requests',
      icon: RiFileListLine,
      children: [
        {
          label: 'افزایش حد مجاز فروش',
          href: '/simulators/modian/requests/increase-sales-limit',
          icon: HiOutlineDocumentReport,
        },
        {
          label: 'رد خودکار صورت‌حساب‌ ارجاعی',
          href: '/simulators/modian/requests/auto-reject-referred-invoices',
          icon: HiOutlineDocumentReport,
        },
        {
          label: 'تعویق اثر مالیاتی صورتحساب',
          href: '/simulators/modian/requests/defer-invoice-tax-effect',
          icon: HiOutlineDocumentReport,
        },
      ],
    },
    { label: 'اطلاعیه تخلف', href: '#', icon: RiFileListLine, disabled: true },
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
