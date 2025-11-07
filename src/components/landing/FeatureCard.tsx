// src/components/landing/FeatureCard.tsx
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // ✅ تغییر از string به ReactNode
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col items-center text-center group">
      {/* آیکون */}
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}{/* ✅ حالا می‌تواند آیکون کامپوننت باشد */}
      </div>

      {/* عنوان */}
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {title}
      </h3>

      {/* توضیحات */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
