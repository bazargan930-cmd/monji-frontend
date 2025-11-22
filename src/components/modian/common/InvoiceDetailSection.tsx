// src/components/modian/common/InvoiceDetailSection.tsx
'use client';

import React, { useState } from 'react';

type Props = {
  title: string;
  summary: React.ReactNode;
  more?: React.ReactNode;
};

export default function InvoiceDetailSection({ title, summary, more }: Props) {
  const [open, setOpen] = useState(false);
  const hasMore = !!more;

  return (
    <section className="relative mt-4 border border-green-700 rounded-d-md bg-white">
      {/* لیبل بالای کادر؛ چسبیده به راست و مماس با خط بالا */}
      <div className="absolute top-0 right-0 -translate-y-full">
        <span className="inline-block bg-green-700 text-white px-4 py-1 text-sm font-bold rounded-t-md">
          {title}
        </span>
      </div>

      {/* محتوای داخل کادر */}
      <div className="relative px-6 pt-6 pb-8">
        {/* خط طوسی جداکننده وسط کادر (فقط دسکتاپ) */}
        <div className="hidden md:block pointer-events-none absolute inset-y-3 left-1/2 w-px bg-gray-300" />

        {summary}

        {hasMore && open && (
          <div className="mt-4">
            {more}
          </div>
        )}

        {/* دکمه بیضی بیشتر/کمتر – وسط لبه پایین کادر */}
        {hasMore && (
          <div className="absolute left-1/2 -bottom-4 -translate-x-1/2">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-1 border border-green-700 rounded-full px-5 py-1 text-sm text-black bg-white"
            >
              <span>{open ? 'کمتر' : 'بیشتر'}</span>
              <span className="text-xs inline-block">
                {open ? <span className="inline-block rotate-180">˅</span> : '˅'}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
