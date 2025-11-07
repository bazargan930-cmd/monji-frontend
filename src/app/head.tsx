export default function Head() {
  return (
    <>
      <title>منجی | شبیه‌ساز مالیات بر حقوق</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* ==== SEO / Social ==== */}
      <meta property="og:title" content="منجی | شبیه‌ساز مالیات بر حقوق" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fa_IR" />
      <meta property="og:image" content="/images/Poster_Input1.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="منجی | شبیه‌ساز مالیات بر حقوق" />
      <meta name="theme-color" content="#0f172a" />

      {/* Canonical */}
      <link rel="canonical" href="https://moadian.com" />

      {/* JSON-LD: WebSite + Organization */}
      <script
        type="application/ld+json"
        // توجه: از اطلاعات ارسالی شما استفاده شده (دامنه و مسیر لوگو)
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                'url': 'https://moadian.com',
                'name': 'منجی',
                'inLanguage': 'fa-IR'
              },
              {
                '@type': 'Organization',
                'url': 'https://moadian.com',
                'name': 'منجی',
                'logo': 'https://moadian.com/images/Logo1.jpg'
              }
            ]
          })
        }}
      />

      {/* Preload پوستر ویدئو برای بهبود LCP (بدون اجبار به دانلود خود ویدئو) */}
      <link
        rel="preload"
        as="image"
        href="/images/Poster_Input1.jpg"
        // اگر نسخه‌های چندسایزی ساختید، می‌توانید imagesrcset اضافه کنید:
        // imagesrcset="/images/Poster_Input1.jpg 1x, /images/Poster_Input1@2x.jpg 2x"
        // imagesizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* حذف CDN برای سخت‌تر شدن CSP و کاهش ریسک MITM */}
    </>
  );
}
