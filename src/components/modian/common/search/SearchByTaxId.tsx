// src/components/modian/common/search/SearchByTaxId.tsx
'use client';
import * as React from 'react';
import { FaSearch } from 'react-icons/fa';


type Props = {
  onSubmit: (taxId: string) => void;
  placeholder?: string;
  minHeight?: number; // px
  width?: number;     // px (برای دسکتاپ)
  className?: string;
};

export default function SearchByTaxId({
  onSubmit,
  placeholder = 'شماره مالیاتی صورتحساب مورد نظرتان را جستجو کنید',
  minHeight = 260,
  width = 520,
  className,
}: Props) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {/* کارت سفید مرکز‌چین با ارتفاع قابل‌پیکربندی */}
      <div
        className="flex items-center justify-center"
        style={{ minHeight: `${minHeight}px` }}
      >
        <div className="w-full text-center space-y-3 flex flex-col items-center">
          <input
            type="text"
            inputMode="numeric"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="w-full md:w-[var(--search-width)] rounded border border-gray-300 bg-white px-3 py-2"
            style={{ width: `${width}px` }}
          />
          <button
            type="submit"
            className="w-full md:w-[var(--search-width)] rounded-md bg-green-600 py-2 text-sm text-white font-bold"
            style={{ width: `${width}px` }}
          >
            <span>جستجو</span>
            <FaSearch className="text-[0.9rem]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  );
}
