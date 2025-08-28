// src/components/layout/ModianSidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import {
  modianMenu,
  normalizePath,
  type MenuItem,
} from '@/components/modian/menu-items';

/**
 * سایدبار سه‌بخشی مثل سایت اصلی:
 * ۱) کارت کاربر
 * ۲) منوهای قبل از «پرونده مالیاتی و عضویت»
 * ۳) «پرونده…» (آکاردئون) + منوهای بعد از آن (دارای اسکرول)
 *
 * نکته مهم: حتماً منوی دوبعدی را فلت می‌کنیم تا TypeScript ایراد نگیره.
 */

export default function ModianSidebar() {
  const router = useRouter();
  const pathname = normalizePath(usePathname());

  /** ---------- فلت کردن منو و پیدا کردن گروه «پرونده…» ---------- */
  const flatMenu: MenuItem[] = useMemo(
    () => (modianMenu as MenuItem[][]).flat() as MenuItem[],
    []
  );

  const taxfileGroup = useMemo<MenuItem | undefined>(
    () =>
      flatMenu.find(
        (it) =>
          it?.label?.includes('پرونده مالیاتی و عضویت') &&
          Array.isArray(it.children) &&
          it.children.length > 0
      ),
    [flatMenu]
  );

  const taxfileIndex = useMemo(() => {
    if (!taxfileGroup) return -1;
    return flatMenu.findIndex((it) => it === taxfileGroup);
  }, [flatMenu, taxfileGroup]);

  const beforeTaxfile: MenuItem[] = useMemo(() => {
    if (taxfileIndex <= 0) return [];
    return flatMenu.slice(0, taxfileIndex);
  }, [flatMenu, taxfileIndex]);

  const afterTaxfile: MenuItem[] = useMemo(() => {
    if (taxfileIndex < 0) return [];
    return flatMenu.slice(taxfileIndex + 1);
  }, [flatMenu, taxfileIndex]);

  // آدرس پیش‌فرضِ زیرمنو (اولویت با «اطلاعات ثبت نامی»، وگرنه اولین آیتم زیرمنو)
  const defaultTaxfileChild = useMemo(
    () => taxfileGroup?.children?.find(c => c.label?.includes('اطلاعات ثبت نامی')) ?? taxfileGroup?.children?.[0],
    [taxfileGroup]
  );


  /** ---------- تشخیص وضعیت اکتیو و باز/بسته بودن آکاردئون ---------- */
  const isActive = (href?: string) =>
    !!href &&
    (pathname === normalizePath(href) ||
      pathname.startsWith(normalizePath(href) + '/'));

  // آیا واقعاً داخل یکی از زیرصفحه‌های «پرونده…» هستیم؟
  const isInTaxfileGroup = useMemo(() => {
    if (!taxfileGroup?.children) return false;

    // ریشه‌های زیرمنوها
    const roots = taxfileGroup.children
      .map((c) => c.href)
      .filter((h): h is string => !!h && h.trim() !== '')
      .map((h) => normalizePath(h));

    // اگر آدرس فعلی با یکی از ریشه‌ها برابر/شروع شود یعنی داخل مجموعه‌ایم
    return roots.some(
      (root) => pathname === root || pathname.startsWith(root + '/')
    );
  }, [pathname, taxfileGroup]);

  const [openTaxfile, setOpenTaxfile] = useState(false);
  // اگر روی والد «پرونده…» هستیم و آکاردئون باز شد، بعد از رندر به اولین زیرمنو برو
  useEffect(() => {
  const onParent = pathname === normalizePath(taxfileGroup?.href || '');
  if (openTaxfile && onParent && defaultTaxfileChild?.href) {
    router.replace(defaultTaxfileChild.href);
  }
}, [openTaxfile, pathname, taxfileGroup, defaultTaxfileChild?.href, router]);

  /** ---------- آیتم‌های نمایشی ---------- */
  const SimpleItem = ({ item }: { item: MenuItem }) => {
    const active = isActive(item.href);
    return (
      <Link
        href={item.href || '#'}
        className={`flex items-center justify-between px-3 py-2 text-sm rounded
          ${active ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
      >
        <span className="flex items-center gap-2">
          {item.icon && <item.icon className="text-base" />}
          {item.label}
        </span>
      </Link>
    );
  };

  const TaxfileAccordion = ({ item }: { item: MenuItem }) => {
    const parentHasActiveChild = item.children?.some((c) => isActive(c.href));
    const open = openTaxfile || isInTaxfileGroup;

    return (
      <>
        {/* سرآیند آکاردئون (خودش زمینه سبز نمی‌گیرد) */}
                <button
                  type="button"
                  onClick={() => {
                    setOpenTaxfile((prev) => {
                      const next = !prev;

                      // اگر کاربر با «کلیک اول» آکاردئون را باز می‌کند و الان داخل مجموعه «پرونده…» نیست،
                      // به آیتم پیش‌فرض («اطلاعات ثبت نامی» اگر وجود داشت) هدایت کن.
                      if (!prev && !isInTaxfileGroup) {
                        const target =
                          defaultTaxfileChild?.href || item.children?.[0]?.href;
                        if (target) {
                          // replace: بدون اضافه شدن به history
                          router.replace(target);
                        }
                      }

                      return next;
                    });
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded
                    ${parentHasActiveChild ? 'text-green-700' : 'text-gray-700'} hover:bg-gray-50`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon && <item.icon className="text-base" />}
                    {item.label}
                  </span>
                  {open ? <FiChevronUp /> : <FiChevronDown />}
                </button>

        {/* بدنه آکاردئون */}
        {open && (
          <div className="mt-1">
            {item.children?.map((ch, cidx) => {
              const active = isActive(ch.href);
              return (
                <Link
                  key={ch.label + '-' + cidx}
                  href={ch.href || '#'}
                  className={`flex items-center justify-between px-3 py-2 text-sm rounded
                    ${active ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <span className="flex items-center gap-2">
                    {ch.icon && <ch.icon className="text-base" />}
                    {ch.label}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </>
    );
  };

  /** ---------- UI ---------- */
  return (
    <aside className="w-72 shrink-0 bg-white">
      <div className="p-3 flex flex-col gap-3">
        {/* بخش ۱: کارت کاربر */}
        <div className="rounded-md overflow-hidden">
          <div className="bg-green-50 px-3 py-3">
            <div className="text-gray-700 text-sm">کاربر تستی</div>
            <div className="mt-2 inline-flex items-center rounded-full bg-green-300 text-green-700 px-3 py-0.5 text-xs">
              فعال
            </div>
          </div>
        </div>

        {/* جداکننده کم‌رنگ بین بخش ۱ و ۲ */}
        <div className="border-t border-gray-200" />

        {/* بخش ۲: آیتم‌های قبل از «پرونده…» (بدون خط/کادر بین آیتم‌ها) */}
        {beforeTaxfile.length > 0 && (
          <div className="flex flex-col gap-1">
            {beforeTaxfile.map((item, idx) =>
              item.children && item.children.length > 0 ? (
                <TaxfileAccordion key={item.label + '-' + idx} item={item} />
              ) : (
                <SimpleItem key={item.label + '-' + idx} item={item} />
              )
            )}
          </div>
        )}

        {/* جداکننده کم‌رنگ بین بخش ۲ و ۳ */}
        <div className="border-t border-gray-200" />

        {/* بخش ۳: خود «پرونده…» + آیتم‌های بعد از آن (دارای اسکرول) */}
        <div className="flex-1 min-h-0">
          <div className="flex flex-col gap-1 max-h-[calc(100vh-360px)] overflow-y-auto pr-1">
            {taxfileGroup && <TaxfileAccordion item={taxfileGroup} />}

            {!(openTaxfile || isInTaxfileGroup) && afterTaxfile.map((item, idx) => (
              item.children && item.children.length > 0
                ? <TaxfileAccordion key={item.label + '-' + idx} item={item} />
                : <SimpleItem       key={item.label + '-' + idx} item={item} />
            ))}

          </div>
        </div>
      </div>
    </aside>
  );
}
