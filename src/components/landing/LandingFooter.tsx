// src/components/landing/LandingFooter.tsx
'use client'; // ✅ لازم است چون از useEffect و fetch استفاده می‌کنیم

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

import { toFaDigits } from '@/lib/i18n/digits';

interface PersianDateResponse {
  success: boolean;
  date?: string;
  error?: string;
}

export default function LandingFooter() {
  const [persianDate, setPersianDate] = useState<string>("در حال بارگذاری...");

  useEffect(() => {
    const fetchPersianDate = async () => {
      try {
        const res = await fetch('/api/utils/today', {
          method: 'GET',
          cache: 'force-cache', // یا 'no-store' برای real-time
        });

        if (!res.ok) {
          throw new Error('Failed to fetch date');
        }

        const data: PersianDateResponse = await res.json();

        if (data.success && data.date) {
          // اطمینان از ارقام فارسی در نمایش تاریخ
          setPersianDate(toFaDigits(data.date));        } else {
          setPersianDate(toFaDigits("1403/02/20")); // fallback
        }
      } catch (error) {
        console.error("Error fetching Persian date:", error);
        setPersianDate(toFaDigits("1403/02/20")); // fallback
      }
    };

    fetchPersianDate();
  }, []);

  return (
    <footer
      role="contentinfo"
      aria-labelledby="footer-title"
      className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="footer-title" className="sr-only">پاورقی وب‌سایت منجی</h2>
        {/* بخش بالایی فوتر: لوگو و لینک‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* درباره منجی */}
          <div>
            <h3 className="text-xl font-bold mb-4">منجی</h3>
            <p className="text-gray-400 leading-relaxed">
              هوشمندترین راه برای محاسبه دقیق مالیات و بیمه تامین اجتماعی — بدون نیاز به نرم‌افزارهای پیچیده.
            </p>
          </div>

          {/* لینک‌های حقوقی */}
          <div>
            <h4 className="text-lg font-semibold mb-4">لینک‌های مهم</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  حریم خصوصی
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  شرایط استفاده
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>

          {/* لینک‌های آموزشی */}
          <div>
            <h4 className="text-lg font-semibold mb-4">آموزش</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-white transition-colors">
                  مقالات آموزشی
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white transition-colors">
                  دوره‌های آموزشی
                </Link>
              </li>
              <li>
                <Link href="/simulators" className="text-gray-400 hover:text-white transition-colors">
                  دموهای رایگان
                </Link>
              </li>
            </ul>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ما را دنبال کنید</h4>
            <nav aria-label="شبکه‌های اجتماعی">
            <ul className="flex space-x-4 space-x-reverse">
              <li>
                <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xl"
                aria-label="اینستاگرام"
              >
                <FaInstagram />
              </a>
              </li>
              <li>
                <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xl"
                aria-label="توییتر"
              >
                <FaTwitter />
              </a>
              </li>
              <li>
                <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xl"
                aria-label="لینکدین"
              >
                <FaLinkedin />
              </a>
              </li>
              <li>
                <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xl"
                aria-label="یوتیوب"
              >
                <FaYoutube />
              </a>
              </li>
            </ul>
            </nav>
          </div>
        </div>

        {/* نوار اعتماد: سیاست‌ها و انطباق با مقررات */}
        <div className="rounded-xl bg-gray-800/50 border border-gray-800 px-4 sm:px-6 py-4 mb-8">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-block w-2.5 h-2.5 rounded-full bg-emerald-400" aria-hidden="true"></span>
              <div>
                <div className="font-bold">همگام با قوانین ۱۴۰۴+</div>
                <div className="text-gray-300">سناریوها و محاسبات با بروزرسانی منظم مقررات</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-block w-2.5 h-2.5 rounded-full bg-blue-400" aria-hidden="true"></span>
              <div>
                <div className="font-bold">حریم خصوصی و امنیت</div>
                <div className="text-gray-300">
                  اطلاعات شما محفوظ است — <Link href="/privacy" className="underline underline-offset-4">سیاست حریم خصوصی</Link>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-block w-2.5 h-2.5 rounded-full bg-amber-400" aria-hidden="true"></span>
              <div>
                <div className="font-bold">شرایط شفاف استفاده</div>
                <div className="text-gray-300">
                  نحوه استفاده از سرویس — <Link href="/terms" className="underline underline-offset-4">شرایط استفاده</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* خط جداکننده */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* بخش پایینی فوتر: کپی‌رایت و تاریخ */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {toFaDigits(new Date().getFullYear())} تمامی حقوق برای «منجی» محفوظ است.</p>
          <p className="mt-4 md:mt-0 flex items-center" aria-live="polite">
            <span className="ml-2">📅</span>
            آخرین به‌روزرسانی: <span>{persianDate}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
