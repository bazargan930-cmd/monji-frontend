//src/app/privacy/page.tsx

export const metadata = {
  title: 'حریم خصوصی | منجی',
  description:
    'سیاست‌های حریم خصوصی منجی دربارهٔ گردآوری، استفاده و نگهداری داده‌های کاربران.',
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 leading-8 text-slate-800">
      <h1 className="mb-6 text-3xl font-bold">سیاست حریم خصوصی</h1>
      <p className="mb-4 text-slate-700">
        آخرین به‌روزرسانی: <time dateTime="2025-10-17">۱۴۰۴/۰۷/۲۵</time>
      </p>
      <section className="space-y-4">
        <h2 id="collection" className="text-xl font-semibold">جمع‌آوری داده</h2>
        <p>
          اطلاعاتی مانند نام، ایمیل و رخدادهای تحلیلی ناشناس برای بهبود تجربهٔ کاربری
          جمع‌آوری می‌شود. ورود با JWT انجام می‌شود و کوکی امن «__Host-…» استفاده می‌گردد.
        </p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 id="usage" className="text-xl font-semibold">نحوهٔ استفاده</h2>
        <p>
          داده‌ها برای ارائهٔ خدمات، بهبود عملکرد و تحلیل استفاده می‌شوند. انتقال به
          اشخاص ثالث فقط در چهارچوب قانون و یا با رضایت کاربر صورت می‌گیرد.
        </p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 id="security" className="text-xl font-semibold">امنیت</h2>
        <p>
          ما از روش‌های متعارف برای حفاظت از داده‌ها بهره می‌بریم؛ بااین‌حال هیچ
          روشی صددرصد امن نیست. توصیه می‌شود از رمزهای قوی و یکتا استفاده کنید.
        </p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 id="retention" className="text-xl font-semibold">نگهداری و حذف</h2>
        <p>
          داده‌ها تا زمانی که برای اهداف آموزشی/عملیاتی لازم باشد حفظ می‌شوند و سپس
          طبق سیاست نگهداری حذف یا ناشناس‌سازی خواهند شد.
        </p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 id="contact" className="text-xl font-semibold">تماس</h2>
        <p>
          برای درخواست‌های مرتبط با حریم خصوصی، از بخش «تماس با ما» در سایت اقدام کنید.
        </p>
      </section>
    </main>
  );
}

