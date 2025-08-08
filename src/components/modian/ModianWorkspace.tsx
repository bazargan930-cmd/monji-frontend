import React from 'react';

export default function ModianWorkspace() {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 text-right">
      <h1 className="text-xl font-bold mb-6 text-blue-700">ورود به کارپوشه سامانه مودیان</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* بخش فعال */}
        <button
          className="border-2 border-blue-600 bg-blue-50 text-blue-700 font-medium py-6 rounded-lg shadow hover:bg-blue-100 transition"
        >
          ورود به کارپوشه
        </button>

        {/* بخش‌های غیرفعال */}
        <div className="border border-gray-300 bg-gray-100 text-gray-400 py-6 rounded-lg text-center cursor-not-allowed">
          مشاهده گزارشات مالیاتی (غیرفعال)
        </div>

        <div className="border border-gray-300 bg-gray-100 text-gray-400 py-6 rounded-lg text-center cursor-not-allowed">
          ارسال صورتحساب (غیرفعال)
        </div>

        <div className="border border-gray-300 bg-gray-100 text-gray-400 py-6 rounded-lg text-center cursor-not-allowed">
          مدیریت کارتابل سازمانی (غیرفعال)
        </div>
      </div>

      <p className="mt-10 text-xs text-gray-400">
        سایر بخش‌های سامانه به زودی فعال خواهند شد.
      </p>
    </div>
  );
}
