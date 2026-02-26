//src\components\modian\taxfile\TaxfileSubmenu.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { label: 'اطلاعات ثبت‌نامی', href: '/simulators/modian/taxfile/registration-information' },
  { label: 'قبوض', href: '/simulators/modian/taxfile/bills' },
  { label: 'شرکت معتمد / سامانه دولتی', href: '/simulators/modian/taxfile/trusted-companies' },
  { label: 'شناسه یکتا حافظه مالیاتی', href: '/simulators/modian/taxfile/memory-uid' },
  { label: 'شناسه یکتا پایانه پرداخت', href: '/simulators/modian/taxfile/pos-uid' },
  { label: 'ابزار پرداخت', href: '/simulators/modian/taxfile/payments' },
  { label: 'حساب بانکی', href: '/simulators/modian/taxfile/bank-accounts' },
];

export default function TaxfileSubmenu() {
  const pathname = usePathname();

  return (
    <aside className="bg-white rounded-lg p-4 shadow text-sm">
      <div className="bg-green-50 rounded p-3 mb-3">
        <div className="flex flex-col items-start">
          <span className="font-bold text-green-800">پرونده مالیاتی</span>
          <span className="bg-green-200 text-green-800 text-xs px-3 py-0.5 rounded-full mt-1">فعال</span>
        </div>
      </div>

      <nav className="flex flex-col text-right space-y-2">
        {items.map((it) => {
          const active = pathname === it.href;
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`flex flex-row-reverse items-center justify-between px-3 py-2 rounded transition
              ${active ? 'bg-green-600 text-white font-bold' : 'bg-white text-gray-700 hover:text-green-600 border border-gray-200'}`}
            >
              <span className="flex-1 text-right">{it.label}</span>
              <span className="w-2 h-2 rounded-full ml-2 bg-current" />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
