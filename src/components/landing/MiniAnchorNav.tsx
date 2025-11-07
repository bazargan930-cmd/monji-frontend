//src/components/landing/MiniAnchorNav.tsx
'use client';
import { memo, useEffect } from 'react';
import Link from 'next/link';
import { useActiveSection } from './LandingShell';

type Item = { href: string; label: string; };
const items: Item[] = [
  { href: '#how-it-works', label: 'چطور کار می‌کند؟' },
  { href: '#comparison', label: 'مقایسه' },
  { href: '#free-demos', label: 'دموها' },
  { href: '#articles', label: 'مقالات' },
];

function MiniAnchorNavImpl() {
  const active = useActiveSection();

  // پس از جابه‌جایی هش، فوکوس را به سکشن مقصد منتقل می‌کنیم (A11y بهتر برای کیبورد/اسکرین‌ریدر)
  useEffect(() => {
    const focusTarget = () => {
      const hash = window.location.hash?.replace('#', '');
      if (!hash) return;
      const el = document.getElementById(hash);
      if (el) {
        // اگر فوکوس‌پذیر نیست، موقتاً فوکوس‌پذیرش می‌کنیم
        const prevTabIndex = (el as HTMLElement).getAttribute('tabindex');
        (el as HTMLElement).setAttribute('tabindex', '-1');
        (el as HTMLElement).focus({ preventScroll: true });
        if (prevTabIndex !== null) (el as HTMLElement).setAttribute('tabindex', prevTabIndex);
        else (el as HTMLElement).removeAttribute('tabindex');
      }
    };
    window.addEventListener('hashchange', focusTarget);
    // اجرای اولیه اگر کاربر مستقیم با هش وارد شد
    focusTarget();
    return () => window.removeEventListener('hashchange', focusTarget);
  }, []);

  return (
    <nav
      aria-label="میان‌برهای صفحه"
      className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-white/50"
    >
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap items-center gap-2 py-2 text-sm">
          {items.map((it) => {
            const isActive = active && it.href === `#${active}`;
            return (
            <li key={it.href}>
              <Link
                href={it.href}
                aria-current={isActive ? 'true' : undefined}
                aria-label={`رفتن به بخش ${it.label}`}
                aria-controls={it.href.replace('#','')}
                className={`inline-block px-3 py-1 rounded-lg transition-colors
                ${isActive ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'}`}
              >
                {it.label}
              </Link>
            </li>
          );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default memo(MiniAnchorNavImpl);

