// src/components/modian/common/table/EmptyTableRow.tsx

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
          <div className="hidden sm:flex w-full items-center gap-4">
            {/* راست */}
            <div className="flex items-center gap-60 flex-1 text-gray-300">
              <span className="h-2 w-2 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-200" />
            </div>
            {/* 🔹 آیکون مانیتور داخل جعبه با حباب گفتگو */}
            <svg width="128" height="128" viewBox="0 0 128 128">
              {/* Box (light gray) */}
              <rect x="8" y="60" width="112" height="56" rx="10" fill="#d1d5db" />
              {/* Monitor (darker gray) */}
              <rect x="28" y="24" width="72" height="46" rx="6" fill="#9ca3af" />
              {/* Monitor stand */}
              <rect x="60" y="70" width="8" height="16" rx="2" fill="#9ca3af" />
              <rect x="44" y="98" width="40" height="6" rx="3" fill="#9ca3af" />
              {/* Chat bubble (with gap) */}
              <ellipse cx="106" cy="10" rx="18" ry="12" fill="#9ca3af" />
              <polygon points="86,15 82,26 94,20" fill="#9ca3af" />
              {/* Dots inside bubble */}
              <circle cx="100" cy="10" r="2.5" fill="white" />
              <circle cx="106" cy="10" r="2.5" fill="white" />
              <circle cx="112" cy="10" r="2.5" fill="white" />
            </svg>
            {/* چپ */}
            <div className="flex items-center gap-60 flex-1 text-gray-300">
              <span className="h-2 w-16 rounded-full bg-gray-200" />
              <span className="h-2 w-16 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-300" />
            </div>
          </div>
          {/* ردیف دوم: دو قطعه‌ی موازی و هم‌تراز که به دو طرف می‌چسبند */}
          <div className="hidden sm:flex w-full items-center mt-2">
            {/* چپ (میله کوتاهِ چسبیده به لبه چپ) */}
            <div className="flex-1 flex gap-60 justify-start">
              <span className="h-2 w-2 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-300" />
            </div>
            {/* فاصله‌ی زیرِ آیکون (مرکز) */}
            <div className="w-20" />
            {/* راست (میله کوتاهِ چسبیده به لبه راست) */}
            <div className="flex-1 flex gap-60 justify-end">
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
