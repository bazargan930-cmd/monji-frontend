// src/components/landing/TrustStrip.tsx
'use client';
import { memo, type ReactNode } from 'react';

type Item = { label: string; sub?: string; icon?: ReactNode };

// آیکون‌های سبک SVG داخلی (بدون وابستگی خارجی)
const IconSim = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M4 6h16v12H4z" fill="currentColor" opacity=".1" />
    <rect x="6" y="8" width="8" height="2" rx="1" fill="currentColor" />
    <rect x="6" y="12" width="12" height="2" rx="1" fill="currentColor" />
  </svg>
);
const IconLaw = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12 3l8 4-8 4-8-4 8-4zM4 11l8 4 8-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 15l8 4 8-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
const IconGuide = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5">
    <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" opacity=".1" />
    <path d="M7 8h10M7 12h6M7 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconCert = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M7 4h10a2 2 0 012 2v8a2 2 0 01-2 2l-3 4-3-4H7a2 2 0 01-2-2V6a2 2 0 012-2z" fill="currentColor" opacity=".1"/>
    <path d="M9 8h6M9 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconAI = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5">
    <circle cx="12" cy="12" r="6" fill="currentColor" opacity=".1" />
    <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const items: Item[] = [
  { label: 'شبیه‌ساز واقعی', sub: 'محیط تمرینی شبیه پنل اصلی', icon: <IconSim /> },
  { label: 'مطابق قوانین ۱۴۰۴', sub: 'به‌روزرسانی منظم مقررات', icon: <IconLaw /> },
  { label: 'راهنمای درون‌صفحه', sub: 'قدم‌به‌قدم در هر سناریو', icon: <IconGuide /> },
  { label: 'گواهی پایان دوره', sub: 'قابل ارائه به کارفرما', icon: <IconCert /> },
  { label: 'پشتیبانی هوش مصنوعی', sub: 'پاسخ فوری داخل پنل', icon: <IconAI /> },
];

function TrustStripImpl() {
  return (
    <section
      aria-label="دلایل اعتماد به تراز"
      className="w-full bg-white/80 backdrop-blur-sm border-y border-white/40"
    >
      <div className="container mx-auto px-4 py-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {items.map((it, i) => (
            <li
              key={i}
              className="rounded-xl bg-white shadow-sm px-4 py-3 flex items-start gap-3 text-right"
            >
              {/* آیکون */}
              <div className="mt-1 text-blue-700" aria-hidden="true">
                {it.icon}
              </div>
              {/* متن‌ها */}
              <div className="flex-1">
                <div className="text-sm font-extrabold text-slate-800 tracking-tight">
                  {it.label}
                </div>
                {it.sub && (
                  <div className="text-xs text-slate-600 leading-5">{it.sub}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const TrustStrip = memo(TrustStripImpl);
export default TrustStrip;
