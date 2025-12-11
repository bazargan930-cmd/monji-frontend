// src/components/modian/ModianFaqTab.tsx

'use client';

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

import { faqData, FaqItem } from './faq-data';

export default function ModianFaqTab() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-h-[550px] overflow-y-auto pr-2 space-y-2">
      {faqData.map((qa: FaqItem, index: number) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl bg-white shadow-sm"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full text-right flex items-center justify-between px-4 py-3 text-sm text-gray-800 font-medium hover:bg-gray-50"
          >
            <span className="text-right">{index + 1} - {qa.question}</span>
            <span className="ml-2 text-green-600 text-lg">
              {openIndex === index ? <FiMinus /> : <FiPlus />}
            </span>
          </button>

          {openIndex === index && (
            <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
              {qa.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
