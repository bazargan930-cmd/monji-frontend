// src/components/landing/DemoCard.tsx
import Link from 'next/link';
import React from 'react';

interface DemoCardProps {
  title: string;
  description: string;
  link: string;
  cta: string;
}

export default function DemoCard({ title, description, link, cta }: DemoCardProps) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-200 hover:border-emerald-300 flex flex-col h-full">
      {/* عنوان */}
      <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
        {title}
      </h3>

      {/* توضیحات */}
      <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      {/* دکمه CTA */}
      <Link
        href={link}
        className="inline-block mt-auto px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg text-center hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 transition-all duration-300 transform hover:-translate-y-1"
      >
        {cta}
      </Link>
    </div>
  );
}