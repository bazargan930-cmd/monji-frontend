// src\features\modian/common/table/EmptyTableRow.tsx

'use client';

import React from 'react';

type EmptyTableRowProps = {
  colSpan: number;
};

export default function EmptyTableRow({ colSpan }: EmptyTableRowProps) {
  return (
    <tr>
      <td colSpan={colSpan} className="p-8 text-gray-500">
        <div className="flex flex-col items-center gap-3">
          {/* ردیف اول: تمام‌عرض؛ خطوط dashed که به دو طرف می‌چسبند */}
          <div className="hidden sm:flex w-full items-center justify-between">
            {/* راست */}
            <div className="flex flex-1 items-center justify-start gap-4 text-gray-300 overflow-hidden">
              <span className="h-2 w-2 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-200" />
            </div>
            {/* 🔹 آیکون مانیتور داخل جعبه با حباب گفتگو */}
            <div className="shrink-0 px-6">
              <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">

              {/* Shadow */}
              <ellipse cx="64" cy="114" rx="54" ry="10" fill="#E5E7EB" />

              {/* Box (main) */}
              <rect x="18" y="66" width="92" height="44" rx="10" fill="#CFCFCF" />

              {/* Box inner opening */}
              <path d="M26 66H102L94 58H34L26 66Z" fill="#D9D9D9" />

              {/* Box side walls (darker triangles like the reference) */}
              <path d="M18 70L32 58V96L18 86V70Z" fill="#B7B7B7" />
              <path d="M110 70L96 58V96L110 86V70Z" fill="#B7B7B7" />

              {/* Paper */}
              <path
                d="M38 22H90
                  a6 6 0 0 1 6 6
                  V78
                  c0 0-10 10-32 10
                  c-22 0-32-10-32-10
                  V28
                  a6 6 0 0 1 6-6Z"
                fill="#F3F4F6"
              />

              {/* Paper top block */}
              <rect x="44" y="30" width="40" height="26" rx="4" fill="#BDBDBD" />

              {/* Paper lines */}
              <rect x="44" y="62" width="40" height="5" rx="2.5" fill="#C9C9C9" />
              <rect x="44" y="72" width="40" height="5" rx="2.5" fill="#C9C9C9" />

              {/* Paper bottom notch */}
              <path
                d="M48 82
                  c6 5 12 7 16 7
                  c4 0 10-2 16-7
                  v10
                  c-6 5-12 7-16 7
                  c-4 0-10-2-16-7Z"
                fill="#EDEFF2"
              />

              {/* Chat bubble (moved away from the paper) */}
              <ellipse cx="104" cy="16" rx="20" ry="14" fill="#BDBDBD" />
              <path d="M90 22L84 34L98 26Z" fill="#BDBDBD" />

              {/* Icons inside bubble (smaller + aligned) */}
              <path d="M95 17.5L97.8 13.2L100.6 17.5Z" fill="#FFFFFF" />
              <rect x="102.5" y="13.2" width="6.6" height="6.6" rx="1.2" fill="#FFFFFF" />
              <circle cx="114.2" cy="16.5" r="3.3" fill="#FFFFFF" />
              </svg>
            </div>


            {/* چپ */}
            <div className="flex flex-1 items-center justify-end gap-4 text-gray-300 overflow-hidden">
              <span className="h-2 w-16 rounded-full bg-gray-200" />
              <span className="h-2 w-16 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-300" />
            </div>
          </div>
          {/* ردیف دوم: دو قطعه‌ی موازی و هم‌تراز که به دو طرف می‌چسبند */}
          <div className="hidden sm:flex w-full items-center mt-2">
            {/* چپ (میله کوتاهِ چسبیده به لبه چپ) */}
            <div className="flex-1 flex justify-start gap-4 overflow-hidden">
              <span className="h-2 w-2 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-300" />
            </div>
            {/* فاصله‌ی زیرِ آیکون (مرکز) */}
            <div className="w-20" />
            {/* راست (میله کوتاهِ چسبیده به لبه راست) */}
            <div className="flex-1 flex justify-end gap-4 overflow-hidden">
              <span className="h-2 w-16 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-300" />
            </div>
          </div>
          {/* متن وضعیت خالی */}
          <div className="items-center text-gray-600 font-bold">موردی یافت نشد</div>
        </div>
      </td>
    </tr>
  );
}
