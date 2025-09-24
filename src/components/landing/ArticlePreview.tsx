// src/components/landing/ArticlePreview.tsx
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

interface ArticlePreviewProps {
  title: string;
  excerpt: string;
  link: string;
  date: string; // فرمت: "1403/02/15" — در MVP استاتیک، در آینده از API تاریخ شمسی استفاده می‌شود
}

export default function ArticlePreview({ title, excerpt, link, date }: ArticlePreviewProps) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-100 flex flex-col h-full">
      {/* بدنه مقاله */}
      <div className="p-6 flex flex-col flex-grow">
        {/* تاریخ */}
        <div className="text-sm text-gray-500 mb-3 flex items-center">
            <FaCalendarAlt className="ml-2" />
            <span>{date}</span>
        </div>

        {/* عنوان */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight hover:text-blue-600 transition-colors">
          <Link href={link} className="block">
            {title}
          </Link>
        </h3>

        {/* چکیده */}
        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
          {excerpt}
        </p>
      </div>

      {/* دکمه "ادامه مطلب" */}
      <div className="px-6 pb-6">
        <Link
          href={link}
          className="inline-block text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
        >
          ادامه مطلب →
        </Link>
      </div>
    </article>
  );
}