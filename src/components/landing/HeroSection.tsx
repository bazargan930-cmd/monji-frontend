// src/components/landing/HeroSection.tsx
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* عنوان اصلی — Fade In + Slide Up */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
        >
          محاسبه دقیق مالیات و بیمه
          <br />
          <span className="text-yellow-300">فقط در چند ثانیه</span>
        </motion.h1>

        {/* زیرعنوان — Fade In با تأخیر */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          با «تراز»، محاسبه حقوق و دستمزد، مالیات و بیمه تامین اجتماعی را به صورت کاملاً هوشمند و مطابق آخرین قوانین انجام دهید — بدون نیاز به نرم‌افزارهای پیچیده.
        </motion.p>

        {/* دکمه‌ها — Fade In با تأخیر بیشتر */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/auth/signup"
            className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ثبت‌نام رایگان
          </Link>
          <Link
            href="#free-demos"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
          >
            مشاهده دموها
          </Link>
        </motion.div>

        {/* آیکون پیکان — Bounce */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 animate-bounce"
        >
          <Link href="#free-demos">
            <span className="sr-only">اسکرول به بخش دموها</span>
            <svg
              className="mx-auto h-8 w-8 text-white opacity-80"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}