'use client';

import { useEffect, useState } from 'react';
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaPlusCircle,
  FaMinusCircle,
} from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { faqData } from './faq-data';

const tabs = ['اطلاعیه‌ها', 'سوالات متداول'];
const itemsPerPage = 6;

// تبدیل اعداد فارسی به انگلیسی
function convertPersianDigitsToEnglish(str: string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str.replace(/[۰-۹]/g, (d) => persianDigits.indexOf(d).toString());
}

// ساخت لینک اطلاعیه
function generateNoticeLink(title: string): string {
  const base = 'https://www.intamedia.ir/news/';
  const cleaned = convertPersianDigitsToEnglish(
    title
      .replace(/[():]/g, '')
      .replace(/\s+/g, '-')
      .replace(/[‌]/g, '-') // فاصله صفر عرض
      .trim()
  );
  return `${base}${encodeURI(cleaned)}`;
}

type Notice = {
  title: string;
  date: string;
};

export default function ModianNoticesTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(notices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = notices.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    fetch('http://localhost:3001/notices', {
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) throw new Error('خطا در دریافت اطلاعیه');
        return res.json();
      })
      .then((data) => setNotices(data))
      .catch((err) => {
        console.error('⛔️ خطا در دریافت اطلاعیه‌ها:', err);
        setNotices([]);
      })
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className="bg-white rounded-xl p-4 shadow border text-sm min-h-[520px] flex flex-col justify-start">
      {/* تب‌ها */}
      <div className="flex border-b mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveTab(i);
              setOpenQuestionIndex(null);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 border-b-2 ${
              i === activeTab
                ? 'border-green-600 text-green-600 font-semibold'
                : 'border-transparent text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* محتوای تب اطلاعیه‌ها */}
      {activeTab === 0 ? (
        loading ? (
          <div className="text-center text-gray-500 py-10">در حال بارگذاری اطلاعیه‌ها...</div>
        ) : (
          <>
            <div className="flex flex-col flex-grow justify-between overflow-hidden">
              <div className="space-y-3 overflow-y-auto pr-2 scroll-smooth" style={{ maxHeight: '440px' }}>
                {currentItems.map((item, index) => {
                  const link = generateNoticeLink(item.title);
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b pb-2 text-sm"
                    >
                      {/* عنوان اطلاعیه (لینک‌دار) */}
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-800 hover:text-green-600 hover:underline transition cursor-pointer"

                      >
                        {item.title}
                      </a>
                      {/* تاریخ و آیکون لینک */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 whitespace-nowrap">{item.date}</span>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-800"
                        >
                          <HiExternalLink className="text-base" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* شمارنده صفحات */}
              <div className="flex justify-center items-center gap-1 pt-4 mt-4">
                <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} className="p-1 text-gray-600 hover:text-green-700 disabled:opacity-30">
                  <FaAngleDoubleRight />
                </button>
                <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="p-1 text-gray-600 hover:text-green-700 disabled:opacity-30">
                  <FaAngleRight />
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 text-sm rounded border ${
                      currentPage === i + 1
                        ? 'bg-green-600 text-white font-bold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="p-1 text-gray-600 hover:text-green-700 disabled:opacity-30">
                  <FaAngleLeft />
                </button>
                <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} className="p-1 text-gray-600 hover:text-green-700 disabled:opacity-30">
                  <FaAngleDoubleLeft />
                </button>
              </div>
            </div>
          </>

        )
      ) : (
        <div className="space-y-3 max-h-[440px] overflow-y-auto pr-2 scroll-smooth">
          {faqData.map((faq, index) => {
            const isOpen = openQuestionIndex === index;
            return (
              <div key={index} className="border border-gray-200 rounded-lg px-4 py-2 bg-white shadow-sm">
                <button
                  onClick={() => setOpenQuestionIndex(isOpen ? null : index)}
                  className="w-full text-right flex justify-between items-center gap-2"
                >
                  <span className="text-sm text-gray-800 font-medium leading-6">{faq.question}</span>
                  {isOpen ? (
                    <FaMinusCircle className="text-green-600" />
                  ) : (
                    <FaPlusCircle className="text-green-600" />
                  )}
                </button>

                {isOpen && (
                  <div className="mt-2 text-gray-600 text-sm leading-6 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
