//src\components\Stepper.tsx
'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';

type Props = {
  titles: string[];       // فهرست تیترها به ترتیبی که باید نمایش داده شود
  current: number;        // شماره مرحله فعال (۱-مبنایی)
};

const Dot: React.FC<{ state: 'done' | 'active' | 'idle' }> = ({ state }) => {
  if (state === 'done') {
    // بدون دایره، کمی بزرگ‌تر برای خوانایی بهتر
    return (
      <span
        aria-hidden
        className="inline-block leading-none text-green-600 text-[15px] sm:text-[16px]"
      >
        ✓
      </span>
    );
  }
  return (
    <span
      className={`w-2 h-2 rounded-full ${
        state === 'active' ? 'bg-green-600' : 'bg-gray-300'
      }`}
    />
  );
};

const Line: React.FC<{ color?: 'gray' | 'green' }> = ({ color = 'gray' }) => (
  <span
    className={`block h-[2px] w-full ${
      color === 'green' ? 'bg-green-600' : 'bg-gray-300'
    }`}
  />
);

export default function Stepper({ titles, current }: Props) {
  const total = titles.length;
  const titleRefs = useRef<HTMLSpanElement[]>([]);
  const [widths, setWidths] = useState<number[]>([]);

  // اندازه‌گیری عرض واقعی تیترها برای ساخت template ستونی
  useLayoutEffect(() => {
    const ws = titles.map((_, i) => {
      const el = titleRefs.current[i];
      return el ? Math.ceil(el.getBoundingClientRect().width) : 0;
    });
    if (ws.every(Boolean)) setWidths(ws);
  }, [titles.join('|')]);

  // حداقل عرض برای ستون «خط» تا حتی در تنگ‌ترین حالت هم صفر نشود
  const LINE_MIN = 72; // می‌توانید بر اساس UI اصلی 56/64/72 انتخاب کنید
  // [تیتر(px)] [خط(minmax)] ... [تیتر(px)]
  const template =
    widths.length === total
      ? widths
          .map((w, i) =>
            i < total - 1 ? `${w}px minmax(${LINE_MIN}px,1fr)` : `${w}px`
          )
          .join(' ')
      : // fallback اولیه تا پرش دیداری نداشته باشیم
        (total === 2 ? `auto ${LINE_MIN}px auto`
            : `auto minmax(${LINE_MIN}px,1fr) auto minmax(${LINE_MIN}px,1fr) auto minmax(${LINE_MIN}px,1fr) auto`);
  // ردیف خطوط: جای ستونِ دایره خالی، بین‌شان Line
  const lineRow = Array.from({ length: total * 2 - 1 }, (_, i) =>
    i % 2 === 0 ? <span key={`ld${i}`} /> : <Line key={`l${i}`} color={((i + 1) / 2) < current ? 'green' : 'gray'} />,
  );

  // ردیف دایره‌ها
  const iconRow = Array.from({ length: total * 2 - 1 }, (_, i) => {
    if (i % 2 === 0) {
      const idx = i / 2 + 1; // ۱-مبنایی
      const state: 'done' | 'active' | 'idle' =
        idx < current ? 'done' : idx === current ? 'active' : 'idle';
      return <Dot key={`d${i}`} state={state} />;
    }
    return <span key={`i${i}`} />; // ستون خط (پر می‌شود در ردیف خطوط)
  });

  // ردیف تیترها
  const titleRow = titles.flatMap((t, i) => [
    <span
      key={`t${i}`}
      ref={(el) => {
        if (el) titleRefs.current[i] = el;
      }}
      className={`justify-self-center text-center whitespace-nowrap px-3 ${
        i + 1 === current ? 'text-gray-900 font-medium' : 'text-gray-400'
      }`}
    >
      {t}
    </span>,
    ...(i < total - 1 ? [<span key={`tsp${i}`} />] : []), // زیر ستون خط
  ]);

  return (
    <div className="inline-flex flex-col items-center gap-2">
      {/* ردیف خطوط */}
      <div className="grid items-center gap-x-0 w-full" style={{ gridTemplateColumns: template }}>
        {lineRow}
      </div>
      {/* ردیف علائم */}
      <div className="grid items-center justify-items-center gap-x-0" style={{ gridTemplateColumns: template }}>
        {iconRow}
      </div>
      {/* ردیف تیترها */}
      <div className="grid items-center justify-items-center gap-x-0 text-xs sm:text-sm mt-2" style={{ gridTemplateColumns: template }}>
        {titleRow}
      </div>
    </div>
  );
}
