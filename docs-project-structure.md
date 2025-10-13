# مستند «ساختار پروژه» (ghaaanoon – به‌روزرسانی)


> این فایل حاصل جمع‌بندی همین گفتگو و **تنها** مبتنی بر فایل‌ها و خروجی‌های ارسال‌شده در بخش *project* است. هدف: شفافیت ساختار، استانداردسازی مسیرها، و حذف خطاهای تکراری در بیلد/لینت.


---

## 1) نمای کلی ریپوها و نسخه‌ها

- **Frontend:** `ghaaanoon-frontend` — Next.js (App Router), TypeScript, TailwindCSS.  
  - **Next.js:** `15.3.1` (طبق خروجی `npm run build`)
  - **React:** `^19.0.0` (طبق `package.json`)
  - **TypeScript:** `^5.9.2` (طبق `package.json`)
  - **TailwindCSS:** `^3.4.17` (طبق `package.json`)
  - **ESLint:** `^9` + `eslint-config-next@15.3.1` (طبق `package.json`)
- **Backend:** `ghaaanoon-backend` — (فایل `tsconfig.json` ارسال شده است؛ مسیر `src/app/` در بک‌اند وجود ندارد.)

> نکته: هشدار تکراری بیلد
> ```
> ESLint: Failed to patch ESLint because the calling module was not recognized ...
> ```
> مطابق لاگ‌های بیلد مشاهده می‌شود و **مانع بیلد نیست**.


---

## 2) قرارداد نام‌گذاری و ساختار پوشه‌ها (Frontend)

- همه‌ی مسیرها زیر `src/` قرار می‌گیرند.
- ماژول‌ها (شبیه‌سازها) تحت `src/app/simulators/*`:
  - `modian`  (سامانه مودیان)  
  - `salary-tax`  (سامانه مالیات بر حقوق)  
  - `insurance`  (سامانه بیمه تأمین اجتماعی)
- کامپوننت‌های اشتراکی/ماژولار در `src/components/*` با **نام‌گذاری ماژول‌محور و لایه‌بندی واضح**:
  - `src/components/layout/*` — شِل/هدر/ساب‌هدر سراسری سایت
  - `src/components/modian/layout/*` — شِل/هدر اختصاصی ماژول مودیان
  - `src/components/salary-tax/layout/*` — شِل/هدر اختصاصی مالیات بر حقوق
  - `src/components/insurance/layout/*` — شِل/هدر اختصاصی بیمه
  - سایر اجزاء ماژول‌ها به تفکیک همان ماژول: `src/components/modian/...`، `src/components/salary-tax/...`، ...

> چرا این تفکیک؟ برای جلوگیری از «آدرس‌های اشتباه» و **عدم تداخل نام** (دقیقاً مشکل اشاره‌شده در گفتگو).


---

## 3) الگوی صفحات (App Router) و *Client/Server*

### 3.1 اصل کلی
- به درخواست شما، **صفحات کلیدی ماژول مودیان «کلاینت» شدند**؛
- هر صفحه‌ای که از هوک‌های **کلاینتی** استفاده می‌کند (`useSearchParams`, `useRouter`, ...) باید یا:
  1) خودش `use client` در ابتدای فایل داشته باشد، **یا**
  2) الگوی «**wrapper Server + Client child**» را رعایت کند تا خطای
     `useSearchParams() should be wrapped in a suspense boundary` رفع شود.

### 3.2 الگوی پیشنهادی (استفاده‌شده برای خطاهای اخیر)
- `page.tsx` (Server): فقط یک شِل سبک + رندر یک **Client Component** داخل `<Suspense>`
- `PageClient.tsx` (Client): منطق واقعی صفحه (استفاده از `useSearchParams` و ...)

نمونه‌ی مینیمال:
```tsx
// page.tsx (Server)
import { Suspense } from 'react';
import PageClient from './PageClient';

export default function Page() {
  return (
    <Suspense>
      <PageClient />
    </Suspense>
  );
}
```

```tsx
// PageClient.tsx (Client)
'use client';
import { useSearchParams } from 'next/navigation';

export default function PageClient() {
  const q = useSearchParams();
  // ...
  return <div>...</div>;
}
```

> علت ساخت فایل‌های خالی/حداقلی: **Next.js هر سگمنت باید یک کامپوننت برگرداند**؛ همچنین برای رفع خطای `CSR bailout`، نیاز به **مرز Suspense در لایه‌ی سروری** داریم.


---

## 4) مسیرها/صفحات کلاینت مودیان (طبق فهرست ارسالی شما)

این مسیرها «کلاینت» در نظر گرفته شدند (یا با الگوی Wrapper+Client پیاده شدند):

```
/simulators/modian/admin
/simulators/modian/home
/simulators/modian/invoice
/simulators/modian/login
/simulators/modian/otp
/simulators/modian/portal
/simulators/modian/roles
/simulators/modian/taxfile
/simulators/modian/users-roles
/simulators/modian/workspace
```

> علاوه بر این، برای زیرمسیرهای خاص (مثل `roles/add`, `admin/taxfile/bank-accounts`, `taxfile/registration` و…)،
> فایل‌های `layout.tsx` و/یا `page.tsx` حداقلی ایجاد شد تا خطاهای
> «**Expected to return a React component**» و **Missing Suspense** برطرف شود.


---

## 5) لایه‌های Layout

- **نکته‌ی مهم:** وجود `layout.tsx` در سطح سگمنت باعث می‌شود همه‌ی زیرصفحات، شِل مناسب و هدر/ساب‌هدر مشترک داشته باشند و نیاز به تکرار در هر صفحه نباشد.
- چینش توصیه‌شده برای مودیان:
  - `src/app/simulators/modian/layout.tsx` — شِل ماژول مودیان (می‌تواند سروری باشد و عناصر سراسری ماژول را رندر کند)
  - برای هر زیربخش با نیاز به شِل متفاوت (مثل `portal/`, `roles/`, `admin/`): یک `layout.tsx` حداقلی در همان فولدر

> اگر صفحه‌ای کاملاً کلاینت است، **layout می‌تواند Server بماند** و صرفاً `<Suspense>` یا Container بدهد.


---

## 6) Middleware و احراز هویت (Frontend)

- فایل ارسالی شما: `src/middleware.ts` با استفاده از `jsonwebtoken` و کوکی `__Host-auth-token`.
- مسیرهای محافظت‌شده نمونه: `/dashboard`, `/profile`, `/settings` (طبق فایل ارسالی).  
- ریدایرکت به `/auth/signin?redirect=...` در صورت نبود/نااعتباری توکن.

> توجه: اجرای Middleware در **Edge Runtime** است؛ کتابخانه‌هایی مثل `jsonwebtoken` ممکن است محدودیت داشته باشند.
> تا وقتی بیلد/ران تایید شد، **همین پیاده‌سازی مستند می‌شود**؛ در صورت نیاز به مهاجرت، باید به سمت
> بررسی توکن با `next/headers` و/یا JWT سروری (داخل API Route) برویم.


---

## 7) Tailwind و `globals.css`

- فایل ارسالی: `src/globals.css`
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    background-color: #d9e3f1;
  }
  ```
- در لاگ بیلد قبلی، خطای «`bg-background` class does not exist» دیده شد؛
  چون چنین کلاسی در `@layer`ها تعریف نشده است. دو راه استاندارد:
  1) **عدم استفاده** از `bg-background` در JSX/CSS، یا
  2) تعریف کلاس سفارشی:
     ```css
     @layer utilities {
       .bg-background { background-color: hsl(0 0% 100% / 1); } /* نمونه */
     }
     ```


---

## 8) ESLint و TypeScript

- فایل ESLint ارسالی (Flat Config):
  ```js
  // eslint.config.mjs
  import { dirname } from "path";
  import { fileURLToPath } from "url";
  import { FlatCompat } from "@eslint/eslintrc";

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const compat = new FlatCompat({ baseDirectory: __dirname });

  const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
  ];

  export default eslintConfig;
  ```

- فایل `tsconfig.json` ارسالی: `strict: true`, `skipLibCheck: true`, `noEmit: true` و تنظیمات استاندارد App Router.


---

## 9) اسکریپت‌ها (طبق `package.json`)

- `dev` → `next dev`
- `build` → `next build`
- `start` → `next start`
- `lint` → `next lint`
- مستندسازی خودکار ساختار (اسامی اسکریپت‌ها دیده می‌شود):
  - `docs:app-tree` ، `docs:components-tree` ، `docs:scan`
  - `docs:update-structure`  
  (فایل‌های `tools/gen-tree.js` و `tools/update-docs.js` در این گفتگو ارسال نشده‌اند؛ فقط نام اسکریپت‌ها مستند می‌شود.)


---

## 10) چک‌لیست افزودن یک صفحه/سگمنت جدید (استاندارد)

1) مسیر را زیر ماژول صحیح بسازید:  
   `src/app/simulators/<module>/<segment>/...`
2) اگر صفحه کلاینت است و از هوک‌های کلاینتی استفاده می‌کند:  
   - **الگوی Wrapper+Client** را پیاده کنید (بخش 3.2).
3) اگر زیرشاخه نیاز به شِل دارد: `layout.tsx` حداقلی بسازید (Server).
4) از کلاس‌های Tailwind تعریف‌نشده (مثل `bg-background`) استفاده نکنید؛ یا قبلش در `@layer` تعریف کنید.
5) مسیرهای جدید را –در صورت نیاز– در `middleware` هم در نظر بگیرید.
6) اجرای سه فرمان پس از تغییرات:
   ```bash
   npm run lint
   npm run typecheck
   npm run build
   ```


---

## 11) پرسش‌های باز/آیتم‌های بعدی

- همسان‌سازی کامل نام‌گذاری پوشه‌های کامپوننت‌ها (حروف کوچک/کبکِیس).  
- خروجی‌های تست (Integration/E2E) برای مسیرهای کلید‌ی مودیان.  
- در صورت تمایل به حذف هشدار ESLintِ «patch»: بررسی سازگاری نسخه‌ها یا حذف patch غیرضروری.


---

## 12) خلاصه‌ی تصمیمات کلیدی این به‌روزرسانی

- **تفکیک ماژول‌ها و لایه‌های layout به‌صورت استاندارد.**
- **کلاینت‌سازی صفحات مودیان** + حل خطای `useSearchParams` با **مرز `Suspense`**.
- ساخت **فایل‌های حداقلی** (`page.tsx`/`layout.tsx`) فقط برای پاس کردن قرارداد App Router و جلوگیری از خطای «باید یک کامپوننت برگردد».
- صریح‌سازی درباره‌ی **Tailwind custom utility**‌ها (مثل `bg-background`).


---

> آخرین ویرایش: بر مبنای فایل‌های ارسال‌شده در همین گفتگو (بخش project) و لاگ‌های `npm run build`.

### APP_TREE
<!-- BEGIN:APP_TREE -->
```txt
src\app
├─ admin/
│  └─ notices/
│     ├─ [id]/
│     │  └─ edit/
│     │     └─ page.tsx
│     ├─ new/
│     │  └─ page.tsx
│     └─ page.tsx
├─ api/
│  ├─ auth/
│  │  └─ logout/
│  │     └─ route.ts
│  ├─ simulators/
│  │  └─ insurance/
│  │     └─ calculate/
│  │        └─ route.ts
│  └─ utils/
│     ├─ today/
│     │  └─ route.ts
│     └─ user-info/
│        └─ route.ts
├─ auth/
│  ├─ signin/
│  │  └─ page.tsx
│  └─ signup/
│     └─ page.tsx
├─ auth-debug/
│  └─ page.tsx
├─ dashboard/
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ Topbar.client.tsx
├─ profile/
│  └─ page.tsx
├─ simulators/
│  ├─ insurance/
│  │  ├─ free/
│  │  │  └─ page.tsx
│  │  └─ single/
│  │     └─ page.tsx
│  ├─ karpooshe/
│  │  └─ login/
│  │     └─ page.tsx
│  ├─ modian/
│  │  ├─ admin/
│  │  │  ├─ dashboard/
│  │  │  │  ├─ layout.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ taxfile/
│  │  │  │  ├─ bank-accounts/
│  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ bills/
│  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ memory-uid/
│  │  │  │  │  ├─ add/
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ details/
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ registration/
│  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ trusted/
│  │  │  │     ├─ add/
│  │  │  │     │  └─ page.tsx
│  │  │  │     ├─ layout.tsx
│  │  │  │     └─ page.tsx
│  │  │  └─ layout.tsx
│  │  ├─ home/
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ invoice/
│  │  │  ├─ new/
│  │  │  │  ├─ layout.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  └─ route.ts
│  │  ├─ login/
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ otp/
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ portal/
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ roles/
│  │  │  ├─ add/
│  │  │  │  ├─ layout.tsx
│  │  │  │  └─ page.tsx
│  │  │  └─ layout.tsx
│  │  ├─ users-roles/
│  │  │  ├─ add/
│  │  │  │  ├─ layout.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ workspace/
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  └─ layout.tsx
│  └─ salary-tax/
│     ├─ batch/
│     │  └─ page.tsx
│     ├─ dashboard/
│     │  └─ page.tsx
│     ├─ free/
│     │  └─ page.tsx
│     ├─ login/
│     │  └─ page.tsx
│     └─ pro/
│        └─ page.tsx
├─ head.tsx
├─ layout.tsx
└─ page.tsx
```
<!-- END:APP_TREE -->

### COMPONENTS_TREE
<!-- BEGIN:COMPONENTS_TREE -->
```txt
src\components
├─ admin/
│  └─ NoticeForm.tsx
├─ auth/
│  ├─ ChangePasswordForm.tsx
│  └─ LoginForm.tsx
├─ common/
│  ├─ Captcha.tsx
│  ├─ HelpGuideButton.tsx
│  └─ InputField.tsx
├─ insurance/
│  ├─ InputGroup.tsx
│  ├─ InsuranceResultBox.tsx
│  ├─ InsuranceSingleForm.tsx
│  └─ tax-result.interface.ts
├─ landing/
│  ├─ ArticlePreview.tsx
│  ├─ DemoCard.tsx
│  ├─ FeatureCard.tsx
│  ├─ HeroSection.tsx
│  └─ LandingFooter.tsx
├─ layout/
├─ modian/
│  ├─ common/
│  │  ├─ memoryKey.utils.ts
│  │  ├─ SimulatorBadge.tsx
│  │  ├─ ToolbarControls.tsx
│  │  ├─ UploadPublicKeyModal.tsx
│  │  └─ useMemoryPublicKey.ts
│  ├─ layout/
│  │  ├─ index.ts
│  │  ├─ ModianFooter.tsx
│  │  ├─ ModianHeader.tsx
│  │  ├─ ModianShell.tsx
│  │  └─ ModianSubHeader.tsx
│  ├─ otp/
│  │  └─ page.tsx
│  ├─ taxfile/
│  │  ├─ bank-accounts/
│  │  │  └─ page.tsx
│  │  ├─ bills/
│  │  │  └─ page.tsx
│  │  ├─ memory-uid/
│  │  │  ├─ add/
│  │  │  │  └─ page.tsx
│  │  │  ├─ details/
│  │  │  │  └─ page.tsx
│  │  │  ├─ edit/
│  │  │  │  └─ page.tsx
│  │  │  └─ page.tsx
│  │  ├─ payments/
│  │  │  └─ page.tsx
│  │  ├─ pos-uid/
│  │  │  └─ page.tsx
│  │  ├─ registration-information/
│  │  │  ├─ page.tsx
│  │  │  └─ types.ts
│  │  ├─ trusted-companies/
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ TaxfileSubmenu.tsx
│  ├─ faq-data.ts
│  ├─ index.ts
│  ├─ InvoiceForm.tsx
│  ├─ karpooshe-code-search.tsx
│  ├─ menu-items.ts
│  ├─ ModianFaqTab.tsx
│  ├─ ModianHome.tsx
│  ├─ ModianLoginForm.tsx
│  ├─ ModianNoticesTabs.tsx
│  ├─ ModianOtpForm.tsx
│  ├─ ModianPortal.tsx
│  ├─ ModianQuickAccess.tsx
│  ├─ ModianSidebar.tsx
│  └─ ModianWorkspace.tsx
├─ salary-tax/
│  ├─ page.tsx
│  ├─ SalaryTaxForm.tsx
│  ├─ SalaryTaxResult.tsx
│  └─ SimulatorHeader.tsx
├─ simulators/
│  └─ karpooshe/
│     └─ KarpoosheLoginForm.tsx
├─ ui/
│  ├─ button.tsx
│  ├─ card.tsx
│  ├─ input.tsx
│  └─ SkeletonLoader.tsx
└─ Stepper.tsx
```
<!-- END:COMPONENTS_TREE -->
