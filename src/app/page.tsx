// src/app/page.tsx
'use client';
import {
   LandingShell,
   HeroSection,
   TrustStrip,
   HowItWorks,
   MiniAnchorNav,
   FeatureCard,
   LandingFooter,
   track,
   initPerfMetrics,
 } from '@/components/landing';
import dynamic from 'next/dynamic';
import { FaChartLine, FaGraduationCap, FaAward, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { LandingActiveProvider } from '@/components/landing';
import {StickyPromoBar} from '@/components/landing';

// ↓ سکشن‌های کم‌اولویت را به‌صورت داینامیک لود می‌کنیم (تقسیم کد)
const ComparisonTable = dynamic(() => import('@/components/landing/ComparisonTable'));
const SocialProof = dynamic(() => import('@/components/landing/SocialProof'));
const DemoCard = dynamic(() => import('@/components/landing/DemoCard'));
const ArticlePreview = dynamic(() => import('@/components/landing/ArticlePreview'));
// داده‌های استاتیک mock برای MVP
const features = [
  {
    title: "شبیه‌ساز واقعی",
    description:
      "به‌جای تماشا، تمرین می‌کنی؛ سناریوهای واقعی، داده‌های به‌روز، و «خطای امن» برای یادگیری سریع.",
    icon: <FaChartLine className="text-blue-600" />,
    badge: "REAL SIMULATOR",
  },
  {
    title: "آموزش تعاملی",
    description:
      "راهنمای درون‌صفحه و چک‌لیست هر مرحله؛ اگر اشتباه کنی، راهنمایی فوری می‌گیری و ادامه می‌دهی.",
    icon: <FaGraduationCap className="text-green-600" />,
  },
  {
    title: "گواهینامه معتبر",
    description:
      "کسب گواهینامه منجی علاوه بر پیشرفت شغلی، به شما در رفع شکاف‌های دانش، مهارت‌ها و توانایی‌هایتان کمک کند",
    icon: <FaAward className="text-yellow-500" />,
  },
  {
    title: "پشتیبانی هوش مصنوعی",
    description:
      "سؤال بپرس و در همان فرم، پاسخ کاربردی بگیر؛ بدون خروج از روند کار.",
    icon: <FaRobot className="text-purple-600" />,
  },
];

const demos = [
  {
    title: "دمو رایگان: مالیات بر حقوق",
    description: "شبیه‌سازی لحظه‌ای حقوق و مالیات کارمندان.",
    link: "/simulators/salary-tax/free",
    cta: "امتحان کنید",
  },
  {
    title: "دمو رایگان: بیمه تامین اجتماعی",
    description: "محاسبه حق بیمه و سهم کارفرما و کارمند.",
    link: "/simulators/insurance/free", // ← تغییر از /single به /free
    cta: "امتحان کنید",
  },
];

const articles = [
  {
    title: "راهنمای جامع محاسبه مالیات حقوق در سال 1403",
    excerpt: "با آخرین تغییرات قانونی و نحوه محاسبه حقیقی آشنا شوید.",
    link: "/articles/1",
    date: "1403/02/15",
  },
  {
    title: "تفاوت سقف بیمه تامین اجتماعی و مالیات چیست؟",
    excerpt: "در این مقاله به تفاوت‌های کلیدی و تأثیر آن بر حقوق پرداختی می‌پردازیم.",
    link: "/articles/2",
    date: "1403/02/10",
  },
  {
    title: "چگونه از معافیت‌های مالیاتی استفاده کنیم؟",
    excerpt: "معرفی انواع معافیت‌ها و نحوه اعمال آن‌ها در فرم محاسبه.",
    link: "/articles/3",
    date: "1403/02/05",
  },
];

 export default function HomePage() {
  useEffect(() => {
    initPerfMetrics();
  }, []);
  return (
    <div lang="fa" dir="rtl">
    <LandingActiveProvider>
      
      <LandingShell>
      {/* Skip link برای پرش سریع به دموها (بهبود دسترس‌پذیری کیبورد/اسکرین‌ریدر) */}
      <a
        href="#free-demos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-50 focus:bg-yellow-300 focus:text-blue-900 focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg"
      >
        پرش به دموهای رایگان
      </a>
      {/* Hero Section (حذف شد تا دوبار رندر نشود) */}
      {/* Mini-Anchor Navigation — میان‌برهای صفحه */}
      <MiniAnchorNav />
      {/* Trust Strip — دلایل اعتماد (زیر هِرو) */}
      <TrustStrip />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="comparison">
        <ComparisonTable />
      </section>
      {/* Social Proof — نقل‌قول‌ها و اعداد نتیجه */}
      <SocialProof />
      {/* Features Grid */}
      <section role="region" aria-labelledby="why-monji-heading" className="py-16 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <h2 id="why-monji-heading" className="text-3xl font-bold text-center mb-12">چرا منجی؟</h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* ظرف کارت با Badge اختیاری برای کارت اول */}
                <div className="relative">
                  {feature.badge && (
                    <span
                      aria-label="نشان تمایز"
                      className="absolute -top-3 -left-3 z-10 rounded-full bg-blue-600 text-white text-[10px] font-bold tracking-wider px-3 py-1 shadow-md"
                    >
                      {feature.badge}
                    </span>
                  )}
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* نوار چسبان: برای جلوگیری از تکرار CTA در هیرو، موقتاً غیرفعال شد */}
      <StickyPromoBar visibleAt="never" />
      <section
        id="free-demos"
        role="region"
        aria-labelledby="free-demos-heading"
        className="py-16 w-full"
      >
        <div className="container mx-auto px-4">
          <h2 id="free-demos-heading" className="text-3xl font-bold text-center mb-12">دموهای رایگان</h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {demos.map((demo, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() =>
                  track('demo_card_click', {
                    index,
                    title: demo.title,
                    link: demo.link
                  })
                }
              >
                <DemoCard
                  title={demo.title}
                  description={demo.description}
                  link={demo.link}
                  cta={demo.cta}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" role="region" aria-labelledby="articles-heading" className="py-16 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <h2 id="articles-heading" className="text-3xl font-bold text-center mb-12">مقالات آموزشی</h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ArticlePreview
                  title={article.title}
                  excerpt={article.excerpt}
                  link={article.link}
                  date={article.date}
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Link
              href="/articles"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => track('articles_all_click', { from: 'articles_section' })}
            >
              مشاهده همه مقالات
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
        <LandingFooter />
      </LandingShell>
    </LandingActiveProvider>
    </div>
  );
}
