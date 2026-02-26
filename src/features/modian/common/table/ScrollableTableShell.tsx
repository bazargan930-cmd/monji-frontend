//src\components\modian\common\table\ScrollableTableShell.tsx

import React from 'react';

type ScrollableTableShellProps = {
  children: React.ReactNode;
};

export default function ScrollableTableShell({ children }: ScrollableTableShellProps) {
  // دو اسکرول‌بار هم‌زمان: اصلیِ جدول + «کرسر» پایین
  const mainRef = React.useRef<HTMLDivElement>(null);
  const proxyRef = React.useRef<HTMLDivElement>(null);
  // ظرفی که جدول داخلش قرار می‌گیرد (یک <div> با display:inline-block)
  const tableRef = React.useRef<HTMLDivElement>(null);
  const proxyInnerRef = React.useRef<HTMLDivElement>(null);

  // همگام‌سازی اسکرول‌ها
  const syncMainToProxy = (e: React.UIEvent<HTMLDivElement>) => {
    if (!proxyRef.current) return;
    proxyRef.current.scrollLeft = (e.currentTarget as HTMLDivElement).scrollLeft;
  };
  const syncProxyToMain = (e: React.UIEvent<HTMLDivElement>) => {
    if (!mainRef.current) return;
    mainRef.current.scrollLeft = (e.currentTarget as HTMLDivElement).scrollLeft;
  };

  // عرض اسکرول‌بار پایین را با scrollWidth محتوای اسکرولی همگام کن
  React.useEffect(() => {
    if (!tableRef.current || !proxyInnerRef.current) return;
    const update = () => {
      // اگر جدول یا ظرف پروکسی هنوز رندر نشده‌اند، محاسبه را انجام نده
      const tableEl = tableRef.current;
      const proxyEl = proxyInnerRef.current;
      if (!tableEl || !proxyEl) return;

      const w = tableEl.scrollWidth || 0;
      proxyEl.style.width = `${w}px`;
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(tableRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* لایه‌ی محافظ: اجازه‌ی کش‌آمدن صفحه را نمی‌دهد */}
      <div className="relative w-full overflow-hidden">
        {/* لایه‌ی اسکرول واقعی */}
        <div
          ref={mainRef}
          onScroll={syncMainToProxy}
          /* ترفند مخفی‌سازی بصری اسکرول‌بار اصلی: فقط کرسر پایین دیده شود */
          className="w-full overflow-x-auto rounded-md border border-gray-200 bg-white pb-4 -mb-4"
        >
          {/* پوشش inline-block با حداقل عرض؛ اسکرول فقط داخل این کانتینر فعال می‌شود */}
          <div ref={tableRef} className="inline-block min-w-[2200px] align-top">
            {children}
          </div>
        </div>
      </div>

      {/* کرسر پایین برای حرکت افقی ستون‌ها (اسکرول همگام با جدول) */}
      <div
        ref={proxyRef}
        onScroll={syncProxyToMain}
        className="w-full overflow-x-auto h-3 rounded bg-gray-100"
        aria-hidden="true"
      >
        {/* این div فقط برای ایجاد اسکرول‌بار دوم است؛ عرض آن با scrollWidth جدول همگام می‌شود */}
        <div ref={proxyInnerRef} className="h-3" />
      </div>
    </>
  );
}
