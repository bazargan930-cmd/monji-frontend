//src/app/terms/page.tsx

export const metadata = {
  title: 'قوانین و شرایط استفاده | منجی',
  description:
    'شرایط استفاده از پلتفرم آموزشی منجی، الزامات کاربری، مالکیت محتوا، و سیاست‌های مسئولیت.',
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 leading-8 text-slate-800">
      <h1 className="mb-6 text-3xl font-bold">قوانین و شرایط استفاده</h1>
      <p className="mb-4 text-slate-700">
        آخرین به‌روزرسانی: <time dateTime="2025-10-17">۱۴۰۴/۰۷/۲۵</time>
      </p>
      <section className="space-y-4">
        <h2 id="scope" className="text-xl font-semibold">دامنهٔ خدمات</h2>
        <p>
          «منجی» یک پلتفرم آموزشی برای حسابداران و مدیران مالی است که شامل شبیه‌سازهای
          واقعی سامانه‌های دولتی می‌شود. دسترسی به بخش‌ها براساس سطوح {`Free/Normal/Pro/VIP`} است.
        </p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 id="accounts" className="text-xl font-semibold">حساب کاربری و دسترسی</h2>
        <p>
          مسئولیت حفظ محرمانگی اطلاعات ورود برعهدهٔ کاربر است. هرگونه استفادهٔ
          غیرمجاز از حساب باید فوراً به پشتیبانی گزارش شود.
        </p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 id="content" className="text-xl font-semibold">مالکیت محتوا</h2>
        <p>
          کلیهٔ محتوای آموزشی، رابط کاربری و شبیه‌سازها متعلق به منجی است. هرگونه
          تکثیر یا استفادهٔ تجاری بدون مجوز کتبی ممنوع است.
        </p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 id="liability" className="text-xl font-semibold">محدودیت مسئولیت</h2>
        <p>
          نتایج شبیه‌سازها برای آموزش طراحی شده و ممکن است با سامانه‌های واقعی در
          بازه‌های زمانی خاص اختلاف جزئی داشته باشند. مسئولیت تصمیم‌های عملیاتی برعهدهٔ کاربر است.
        </p>
      </section>
      <section className="mt-8 space-y-4">
        <h2 id="changes" className="text-xl font-semibold">تغییرات</h2>
        <p>
          منجی می‌تواند این شرایط را به‌روزرسانی کند. ادامهٔ استفاده به‌منزلهٔ پذیرش
          نسخهٔ جدید است. تاریخ آخرین به‌روزرسانی در همین صفحه درج می‌شود.
        </p>
      </section>
    </main>
  );
}

