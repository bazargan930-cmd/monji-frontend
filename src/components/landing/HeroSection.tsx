// src/components/landing/HeroSection.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import track from './analytics';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    try {
      if (videoRef.current) {
        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      // اگر مرورگر اجازه نداد، کنترل‌ها را نشان بدهیم
      if (videoRef.current) {
        videoRef.current.controls = true;
      }
    }
  };

  // ── Autoplay با تأخیر 2.5s وقتی ویدئو در دید کاربر است (و reduce-motion فعال نیست)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) return; // در این حالت اتوپلی نکن
    const el = videoRef.current;
    if (!el) return;

    let delayTimer: ReturnType<typeof setTimeout> | null = null;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;
        // وقتی حداقل 50٪ عنصر دیده شد، بعد از 2.5s پخش کن
        if (e.isIntersecting) {
          delayTimer = setTimeout(async () => {
            try {
              await el.play();
              setIsPlaying(true);
            } catch {
              // اگر مرورگر اتوپلی را نپذیرفت، کاربر هنوز می‌تواند با کلیک پخش کند
            }
          }, 3000);
        } else {
          // از دید خارج شد: تایمر را پاک کن و (در صورت پخش) مکث کن
          if (delayTimer) { clearTimeout(delayTimer); delayTimer = null; }
          if (!el.paused) {
            el.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      if (delayTimer) clearTimeout(delayTimer);
      io.disconnect();
    };
  }, []);
  return (
    <>
    {/* full-bleed واقعی: بخش را به عرض viewport می‌بریم و با margin‌های منفی گوترها را صفر می‌کنیم */}
    <section
      id="hero"
      className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2
                 -mt-10 sm:-mt-12 md:-mt-14                /* افزایش خنثی‌سازی گپ بالایی */
                 bg-gradient-to-r from-blue-600 to-indigo-700 text-white
                 py-20 px-4 sm:px-6 lg:px-8"
    >
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
          شبیه‌ساز <span className="text-yellow-300">واقعیِ سامانه مودیان</span>
          </motion.h1>

        {/* زیرعنوان — Fade In با تأخیر */}
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          با «منجی» به‌صورت تعاملی در <strong>پنل واقعیِ تمرینی</strong> کار می‌کنید؛
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
            data-testid="cta-hero-demo"
          >
            اجرای دمو (بی‌درنگ)
          </Link>
          <Link
            href="/auth/signup"
            aria-label="ثبت‌نام رایگان"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
            onClick={() => track('hero_signup_click', { from: 'hero' })}
            data-testid="cta-hero-signup"
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
              <div className="ml-auto text-xs text-white/80">demo.monji.app</div>
            </div>
            {/* ویدئوی پیش‌نمایش (mp4) */}
            <div className="relative aspect-video bg-black">
              <video
                ref={videoRef}
                className="w-full h-full"
                src="/video/MainHeder.mp4"
                poster="/images/Poster_Input1.jpg"
                muted
                playsInline
                loop
                preload="metadata"
                // پوستر ابتدا نمایش داده می‌شود؛ پخش خودکار با تأخیر در useEffect انجام می‌شود
                autoPlay={false}
                controls={false}
                aria-label="پیش‌نمایش ویدیویی از کار با شبیه‌ساز منجی"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              {/* دکمه پخش روی پوستر (فقط وقتی در حال پخش نیست) */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="پخش ویدئو"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="rounded-full bg-white/90 text-blue-700 shadow-lg px-5 py-3 text-sm font-extrabold">
                    ▶︎ پخش پیش‌نمایش
                  </span>
                </button>
              )}
              <div className="absolute bottom-3 right-3 text-xs bg-black/40 text-white px-2 py-1 rounded">
                پیش‌نمایش ویدیویی — ۹ ثانیه (لوپ)
              </div>
            </div>
          </div>
        </motion.div>
        {/* CTA: از همین یک بلوک موجود در هیرو استفاده شود؛
           بلوک افزوده قبلی حذف شد تا تکرار رخ ندهد. */}
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
    </>    
  );
}
