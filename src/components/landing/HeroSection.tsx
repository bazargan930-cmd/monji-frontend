// src/components/landing/HeroSection.tsx
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { track } from './analytics';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* ستون متن/CTA */}
        <div className="text-center lg:text-right">
          {/* عنوان اصلی — Fade In + Slide Up */}
          <motion.h1
          initial={typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
        >
          تراز: شبیه‌ساز <span className="text-yellow-300">واقعیِ سامانه مودیان</span>
          </motion.h1>

        {/* زیرعنوان — Fade In با تأخیر */}
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          با «تراز» به‌صورت تعاملی در <strong>پنل واقعیِ تمرینی</strong> کار می‌کنید؛
          نه با ویدیو و عکسِ مات، بلکه با سناریوهای واقعی و به‌روز.
          <br />
          همین حالا دمو را اجرا کنید و در چند دقیقه «حسِ واقعی کار» را بگیرید
          </motion.p>

          {/* دکمه‌ها — Fade In با تأخیر بیشتر */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#free-demos"
            aria-label="مشاهدهٔ دموی زنده"
            className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => track('hero_demo_click', { from: 'hero', anchor: '#free-demos' })}
          >
            اجرای دمو (بی‌درنگ)
          </Link>
          <Link
            href="/auth/signup"
            aria-label="ثبت‌نام رایگان"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
            onClick={() => track('hero_signup_click', { from: 'hero' })}
          >
            ثبت‌نام رایگان
          </Link>
          </motion.div>
        </div>

        {/* ستون پیش‌نمایش — ویدئو واقعی */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="order-first lg:order-none"
          aria-label="پیش‌نمایش زندهٔ شبیه‌ساز"
          role="img"
        >
          <div className="rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden">
            {/* نوار بالای پنجره مرورگر (موکاپ) */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20">
              <span className="w-3 h-3 rounded-full bg-red-400/90" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/90" />
              <span className="w-3 h-3 rounded-full bg-green-400/90" />
              <div className="ml-auto text-xs text-white/80">demo.taraaz.app</div>
            </div>
            {/* ویدئوی پیش‌نمایش (mp4) */}
            <div className="relative aspect-video bg-black">
              <video
                className="w-full h-full"
                src="/video/MainHeder.mp4"
                muted
                playsInline
                loop
                // احترام به prefers-reduced-motion: در حالت reduce، کنترل بده و اتوپلی نکن
                autoPlay={!(typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)}
                controls={typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches}
                aria-label="پیش‌نمایش ویدیویی از کار با شبیه‌ساز تراز"
              />
              <div className="absolute bottom-3 right-3 text-xs bg-black/40 text-white px-2 py-1 rounded">
                پیش‌نمایش ویدیویی — ۹ ثانیه (لوپ)
              </div>
            </div>
          </div>
        </motion.div>

        {/* آیکون پیکان — Bounce */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 animate-bounce col-span-full text-center"
        >
          <Link href="#free-demos">
            <span className="sr-only">اسکرول به بخش دموها</span>
            <svg
              className="mx-auto h-8 w-8 text-white"
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