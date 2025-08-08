// src/components/modian/ModianQuickAccess.tsx

import { ArrowLeft, Plus, Database } from 'lucide-react';

const quickItems = [
  { color: 'text-green-300', bg: 'bg-white100', text: 'مشاهده صورتحساب های خرید در انتظار واکنش دوره جاری' },
  { color: 'text-blue-300', bg: 'bg-white100', text: 'مشاهده صورتحساب های خرید نیازمند اقدام دوره جاری' },
  { color: 'text-rose-300', bg: 'bg-white100', text: 'مشاهده صورتحساب های فروش نیازمند اقدام دوره جاری' },
  { color: 'text-orange-300', bg: 'bg-white100', text: 'دریافت شناسه یکتای حافظه مالیاتی' },
];

export default function ModianQuickAccess() {
  return (
    <section className="relative bg-white rounded-md pt-12 pb-6 px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 min-h-[230px] border border-gray-200">
      {/* عنوان بالا-راست */}
      <h2 className="text-sm font-semibold text-right text-black col-span-full -mt-6 mb-1">
        دسترسی سریع
      </h2>
      {quickItems.map((item, index) => (
        <div
          key={index}
          className={`relative ${item.bg} rounded-md py-3 flex flex-col items-center justify-start min-h-[95px] shadow-sm`}
        >
          <Database className={`w-6 h-6 ${item.color}`} />
          <span className="text-sm mt-2 font-medium leading-tight text-right max-w-[85%]">
            {item.text}
          </span>
          <ArrowLeft className="absolute bottom-2 left-2 w-4 h-4 text-gray-700" />
        </div>
      ))}

      {/* ویرایش دسترسی سریع */}
      <div className="bg-white rounded-md py-6 flex flex-col items-center justify-center min-h-[140px] shadow-sm">
        <Plus className="w-6 h-6 text-gray-600" />
        <span className="text-sm mt-3 font-medium">ویرایش دسترسی سریع</span>
      </div>
    </section>
  );
}
