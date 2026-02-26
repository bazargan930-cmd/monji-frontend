//src\components\modian\common\table\ColumnsVisibilityBar.tsx

import React from 'react';

type ColumnsVisibilityBarProps = {
  open: boolean;
  columnLabels: Record<string, string>;
  colsVisible: Record<string, boolean>;
  onToggleCol: (key: string) => void;
  onShowAllCols: () => void;
  onSetDefaultCols: () => void;
};

export default function ColumnsVisibilityBar({
  open,
  columnLabels,
  colsVisible,
  onToggleCol,
  onShowAllCols,
  onSetDefaultCols,
}: ColumnsVisibilityBarProps) {
  if (!open) return null;

  return (
    <>
      {/* نوار نمایش ستون‌ها – مشابه صفحه شرکت‌های معتمد */}
      <div className="border rounded-md bg-white p-2 mt-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="px-3 py-1 text-xs border border-black rounded-md hover:bg-gray-50"
            onClick={onSetDefaultCols}
          >
            پیشفرض
          </button>
          <button
            type="button"
            className="px-3 py-1 text-xs border border-black rounded-md hover:bg-gray-50"
            onClick={onShowAllCols}
          >
            همه ستون‌ها
          </button>
          {Object.entries(columnLabels)
            // سه ستون اول (انتخاب همه، ردیف، شماره مالیاتی صورتحساب) در نوار نمایش ستون‌ها نشان داده نشوند
            .filter(([key]) => key !== 'c1' && key !== 'c2' && key !== 'c3')
            .map(([key, label]) => {
              const active = colsVisible[key];
              return (
                <span
                  key={key}
                  // در حالت غیرفعال با کلیک روی کل بیضی، ستون دوباره فعال می‌شود
                  onClick={() => {
                    if (!active) onToggleCol(key);
                  }}
                  className={
                    active
                      ? 'flex items-center gap-1 px-2 py-1 text-xs text-green-600 rounded-full border border-green-600 bg-white cursor-pointer'
                      : 'flex items-center gap-1 px-2 py-1 text-xs text-black rounded-full border border-gray-300 bg-gray-100 cursor-pointer'
                  }
                >
                  {label}
                  <button
                    type="button"
                    aria-label={`حذف ${label}`}
                    onClick={(e) => {
                      // نگذار کلیک روی ضربدر کلیکِ خودِ بیضی را هم اجرا کند
                      e.stopPropagation();
                      onToggleCol(key);
                    }}
                    className={
                      active
                        ? 'flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white hover:bg-green-600'
                        : 'flex items-center justify-center w-6 h-6 rounded-full bg-gray-300 text-white'
                    }
                  >
                    ✕
                  </button>
                </span>
              );
            })}
        </div>
      </div>
    </>
  );
}
