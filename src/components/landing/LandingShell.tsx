// src/components/landing/LandingShell.tsx
'use client';
import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

type LandingShellProps = PropsWithChildren<{
  id?: string;
  maxWidthClass?: string;           // برای یکدست‌سازی Container (پیش‌فرض: max-w-6xl)
  sectionGap?: { sm: string; md: string; lg: string }; // ریتم عمودی سکشن‌ها
}>;

// === Rhythm Spacing (ثابت‌های سراسری فاز ۶) ===
export const sectionGapSm = 'py-10';
export const sectionGapMd = 'md:py-14';
export const sectionGapLg = 'lg:py-20';

export default function LandingShell({
  id = 'landing-root',
  maxWidthClass = 'max-w-7xl',
  sectionGap = { sm: sectionGapSm, md: sectionGapMd, lg: sectionGapLg },
  children,
}: LandingShellProps) {
  return (
    <main id={id} className="w-full">
      <div className={`mx-auto px-4 ${maxWidthClass}`}>
        {/* راهنما: هر سکشن داخلی بهتر است از کلاس‌های sectionGap استفاده کند */}
        <div className={`${sectionGap.sm} ${sectionGap.md} ${sectionGap.lg}`}>
          {children}
        </div>
      </div>
    </main>
  );
}

// ===== CTAهای واحد (مصرف در سکشن‌ها) =====
export function PrimaryCTA(props: React.ComponentProps<'a'>) {
  return <a {...props} className={`inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 ${props.className ?? ''}`} />;
}
export function SecondaryCTA(props: React.ComponentProps<'a'>) {
  return <a {...props} className={`inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-black ${props.className ?? ''}`} />;
}

// ===== Active Section (برای MiniAnchorNav) =====
const ActiveSectionCtx = createContext<string | null>(null);
export function useActiveSection() { return useContext(ActiveSectionCtx); }
export function LandingActiveProvider({ children }: PropsWithChildren) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const secs = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    if (secs.length === 0) return;
    const io = new IntersectionObserver((entries) => {
      const vis = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (vis[0]?.target?.id) setActive(vis[0].target.id);
    }, { threshold: [0.25, 0.5, 0.75] });
    secs.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);
  return <ActiveSectionCtx.Provider value={active}>{children}</ActiveSectionCtx.Provider>;
}