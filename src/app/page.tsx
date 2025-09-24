// src/app/page.tsx
'use client'; // فقط در صورتی که از هک‌های تعاملی (مثل کاروسل) استفاده کنید لازم است — در MVP استاتیک می‌توانید حذفش کنید.

import HeroSection from '@/components/landing/HeroSection';
import FeatureCard from '@/components/landing/FeatureCard';
import DemoCard from '@/components/landing/DemoCard';
import ArticlePreview from '@/components/landing/ArticlePreview';
import LandingFooter from '@/components/landing/LandingFooter';
import { FaChartLine, FaGraduationCap, FaAward, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

// داده‌های استاتیک mock برای MVP
const features = [
  {
    title: "شبیه‌سازی واقعی",
    description: "محاسبه دقیق مالیات بر حقوق و بیمه تامین اجتماعی مطابق آخرین قوانین.",
    icon: <FaChartLine className="text-blue-600" />, // ✅
  },
  {
    title: "آموزش تعاملی",
    description: "آموزش گام به گام با مثال‌های عملی و تمرین‌های تعاملی.",
    icon: <FaGraduationCap className="text-green-600" />, // ✅
  },
  {
    title: "گواهینامه معتبر",
    description: "دریافت گواهینامه پس از اتمام دوره‌های آموزشی.",
    icon: <FaAward className="text-yellow-500" />, // ✅
  },
  {
    title: "پشتیبانی هوش مصنوعی",
    description: "پاسخ به سوالات شما در لحظه با کمک هوش مصنوعی.",
    icon: <FaRobot className="text-purple-600" />, // ✅
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
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">چرا تراز؟</h2>
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
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Free Demos Carousel (در MVP یک گرید ساده) */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">دموهای رایگان</h2>
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
      <section className="py-16 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">مقالات آموزشی</h2>
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
            <a
              href="/articles"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              مشاهده همه مقالات
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <LandingFooter />
    </main>
  );
}