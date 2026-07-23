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

### 1.2) Update (2026-02-27) — وضعیت مرج‌ها، برنچ‌ها و آماده‌سازی DB

- **Frontend (Modian):**
  - مرج «backend integration + انتقال ساختار Modian به features» به `main` انجام شده و baseline کیفیت روی `main` سبز است (lint/build).
  - سیاست Import برای ماژول مودیان **Barrel-only** باقی می‌ماند؛ اما مسیر مرجع برای عناصر مودیان از `src/components/modian/*`
    به `src/features/modian/*` منتقل شده است و Wrapperهای `src/app/simulators/modian/**` فقط خروجی‌های Barrel را مصرف می‌کنند.
- **Backend:**
  - فاز زیرساخت Multi-tenant و الزام `businessId` در مدل‌ها تثبیت شده است.
  - یک فیکس عملیاتی به `main` اضافه شد: هنگام ایجاد UtilityBill، مقدار `businessId` (از طریق ریشه‌ی داده معتبر) ست می‌شود تا build سبز بماند.
  - برنچ کاری جدید برای آماده‌سازی اتصال DB ایجاد شد: `feature/backend-db-integration-prep`.
  - پاکسازی برنچ‌ها: در ریموت و لوکال فقط `main` و برنچ کاری جدید نگه داشته می‌شوند (سیاست Hygiene).
> نکته: هشدار تکراری بیلد
> ```
> ESLint: Failed to patch ESLint because the calling module was not recognized ...
> ```
> مطابق لاگ‌های بیلد مشاهده می‌شود و **مانع بیلد نیست**.

### 1.1) به‌روزرسانی خودکار «ساختار پروژه»
برای هم‌راستا نگه‌داشتن این سند با ساختار واقعی سورس، از اسکریپت‌های زیر استفاده کن:
```bash
# تولید اسنپ‌شات مسیرها
npm run docs:scan      # → app-tree.txt + components-tree.txt

# تزریق خودکار در همین سند (DOCS)
npm run docs:all       # docs:scan + docs:update-structure
```
> این اسکریپت‌ها در `package.json` تعریف شده‌اند و محتوا را بین بلوک‌های

 ## APP_TREE
 <!-- BEGIN:APP_TREE -->
 src/app
 ├── head.tsx
 ├── layout.tsx
 ├── page.tsx
 ├── admin/
 │   └── notices/
 │       │   page.tsx
 │       ├── new/
 │       │       page.tsx
 │       └── [id]/
 │           └── edit/
 │                   page.tsx
 ├── api/
 │   ├─ auth/
 │   │  └─ logout/
│   │     └─ route.ts
│   ├─ business/
│   │  ├─ create/
│   │  │  └─ route.ts
│   │  ├─ onboarding/
│   │  │  └─ step-1/
│   │  │     └─ route.ts
│   │  └─ switch/
 │   │     └─ route.ts
 │   ├── csrf/
 │   │       route.ts
 │   ├── simulators/
 │   │   └── insurance/
 │   │       └── calculate/
 │   │               route.ts
 │   ├── telemetry/
 │   │       route.ts
 │   └── utils/
 │       ├── today/
 │       │       route.ts
 │       └── user-info/
 │               route.ts
 ├── auth/
 │   ├── signin/
 │   │       page.tsx
 │   └── signup/
 │           page.tsx
 ├── auth-debug/
 │       page.tsx
 ├── business/
 │   │   ├── step-1/
 │   │   │       page.tsx
 │   │   └── step-2/
 │   │           page.tsx
 │   └── registration-status/
 │           route.ts
 ├── dashboard/
 │       layout.tsx
 │       page.tsx
 │       Topbar.client.tsx
 ├── privacy/
 │       page.tsx
 ├── profile/
 │       page.tsx
 ├── simulators/
 │   ├── insurance/
 │   │   ├── free/
 │   │   │       page.tsx
 │   │   └── single/
 │   │           page.tsx
 │   ├── karpooshe/
 │   │   └── login/
 │   │           page.tsx
 │   ├── modian/
 │   │   │   layout.tsx
 │   │   ├── contracts/
 │   │   │   ├── commission/
 │   │   │   │   │   page.tsx
 │   │   │   │   ├── detail/
 │   │   │   │   │       page.tsx
 │   │   │   │   └── new/
 │   │   │   │           page.tsx
 │   │   │   └── contracting/
 │   │   │       │   page.tsx
 │   │   │       ├── detail/
 │   │   │       │       page.tsx
 │   │   │       └── new/
 │   │   │               page.tsx
 │   │   ├── dashboard/
 │   │   │       layout.tsx
 │   │   │       page.tsx
 │   │   ├── declaration/
 │   │   │   │   page.tsx
 │   │   │   │   statement.tsx
 │   │   │   │   summary.tsx
 │   │   │   ├── complete/
 │   │   │   │   │   page.tsx
 │   │   │   │   ├── calculation/
 │   │   │   │   │       page.tsx
 │   │   │   │   ├── credit/
 │   │   │   │   │       page.tsx
 │   │   │   │   ├── final/
 │   │   │   │   │       page.tsx
 │   │   │   │   ├── purchase/
 │   │   │   │   │       page.tsx
 │   │   │   │   └── sale/
 │   │   │   │           page.tsx
 │   │   │   ├── details/
 │   │   │   │       page.tsx
 │   │   │   ├── feedback/
 │   │   │   │       page.tsx
 │   │   │   ├── green-tax/
 │   │   │   │       page.tsx
 │   │   │   └── summary/
 │   │   │           page.tsx
 │   │   ├── home/
 │   │   │       layout.tsx
 │   │   │       page.tsx
 │   │   ├── invoices/
 │   │   │   │   layout.tsx
 │   │   │   ├── buy/
 │   │   │   │   │   page.tsx
 │   │   │   │   └── detail/
 │   │   │   │           page.tsx
 │   │   │   ├── exports/
 │   │   │   │   │   page.tsx
 │   │   │   │   └── detail/
 │   │   │   │           page.tsx
 │   │   │   ├── files/
 │   │   │   │       page.tsx
 │   │   │   └── sales/
 │   │   │       │   page.tsx
 │   │   │       └── detail/
 │   │   │               page.tsx
 │   │   ├── login/
 │   │   │       layout.tsx
 │   │   │       page.tsx
 │   │   ├── old-Invoices/
 │   │   │   ├── buy/
 │   │   │   │   │   page.tsx
 │   │   │   │   ── detail/
 │   │   │   │           page.tsx
 │   │   │   ├── exports/
 │   │   │   │   │   page.tsx
 │   │   │   │   └── detail/
 │   │   │   │           page.tsx
 │   │   │   └── sales/
 │   │   │       │   page.tsx
 │   │   │       └── detail/
 │   │   │               page.tsx
 │   │   ├── otp/
 │   │   │       layout.tsx
 │   │   │       page.tsx
 │   │   ├── portal/
 │   │   │       layout.tsx
 │   │   │       page.tsx
 │   │   ├── purchase-announcements/
 │   │   │   │   page.tsx
 │   │   │   ├── bourse/
 │   │   │   │       page.tsx
 │   │   │   └── imports/
 │   │   │           page.tsx
 │   │   ├── requests/
 │   │   │   ├── auto-reject-referred-invoices/
 │   │   │   │       page.tsx
 │   │   │   ├── defer-invoice-tax-effect/
 │   │   │   │       page.tsx
 │   │   │   └── increase-sales-limit/
 │   │   │           page.tsx
 │   │   ├── roles/
 │   │   │   │   layout.tsx
 │   │   │   └── add/
 │   │   │           layout.tsx
 │   │   │           page.tsx
 │   │   ├── tax-bills/
 │   │   │       page.tsx
 │   │   ├── taxfile/
 │   │   │   │   layout.tsx
 │   │   │   │   page.tsx
 │   │   │   ├── bank-accounts/
 │   │   │   │       layout.tsx
 │   │   │   │       page.tsx
 │   │   │   ├── bills/
 │   │   │   │       layout.tsx
 │   │   │   │       page.tsx
 │   │   │   ├── memory-uid/
 │   │   │   │   │   layout.tsx
 │   │   │   │   │   page.tsx
 │   │   │   │   ├── add/
 │   │   │   │   │       page.tsx
 │   │   │   │   └── details/
 │   │   │   │           page.tsx
 │   │   │   ├── payments/
 │   │   │   │       page.tsx
 │   │   │   ├── registration/
 │   │   │   │       layout.tsx
 │   │   │   │       page.tsx
 │   │   │   ├── trusted/
 │   │   │   │   │   layout.tsx
 │   │   │   │   │   page.tsx
 │   │   │   │   └── add/
 │   │   │   │           page.tsx
 │   │   │   └── trusted-companies/
 │   │   │           page.tsx
 │   │   └── users-roles/
 │   │       │   layout.tsx
 │   │       │   page.tsx
 │   │       └── add/
 │   │               layout.tsx
 │   │               page.tsx
 │   └── salary-tax/
 │       ├── batch/
 │       │       page.tsx
 │       ├── dashboard/
 │       │       page.tsx
 │       ├── free/
 │       │       page.tsx
 │       ├── login/
 │       │       page.tsx
 │       └── pro/
 │               page.tsx
 └── terms/
         page.tsx
 <!-- END:APP_TREE -->

 ## COMPONENTS_TREE
    <!-- BEGIN:COMPONENTS_TREE -->
 src/components
 ├── Stepper.tsx
 ├── admin/
 │       NoticeForm.tsx
 ├── auth/
 │       ChangePasswordForm.tsx
 │       LoginForm.tsx
 ├─ business/
 │  └─ onboarding/
 │     ├─ AddBranchModal.tsx
 │     ├─ OnboardingChoiceModal.tsx
 │     ├─ Step2Tabs.tsx
 │     └─ StepRegistration.tsx
 ├── common/
 │   │   Captcha.tsx
 │   │   FaDigits.tsx
 │   │   HelpGuideButton.tsx
 │   │   InputField.tsx
 │   ├── date/
 │   │       JalaliDateField.tsx
 │   └── help/
 │           HelpModal.tsx
 │           HelpTrigger.tsx
 ├── insurance/
 │       InputGroup.tsx
 │       InsuranceResultBox.tsx
 │       InsuranceSingleForm.tsx
 │       tax-result.interface.ts
 ├── landing/
 │       analytics.ts
 │       ArticlePreview.tsx
 │       ComparisonTable.tsx
 │       DemoCard.tsx
 │       FeatureCard.tsx
 │       HeroSection.tsx
 │       HowItWorks.tsx
 │       index.ts
 │       LandingFooter.tsx
 │       LandingShell.tsx
 │       MiniAnchorNav.tsx
 │       perf-metrics.ts
 │       SocialProof.tsx
 │       StickyPromoBar.tsx
 │       TrustStrip.tsx
 ├── salary-tax/
 │       page.tsx
 │       SalaryTaxForm.tsx
 │       SalaryTaxResult.tsx
 │       SimulatorHeader.tsx
 ├── simulators/
 │   └── karpooshe/
 │           KarpoosheLoginForm.tsx
 └── ui/
         button.tsx
         card.tsx
         dialog.tsx
         input.tsx
         label.tsx
         SkeletonLoader.tsx
         table.tsx
         tabs.tsx

 src/features
 └── modian/
     │   faq-data.ts
     │   index.ts
     │   karpooshe-code-search.tsx
     │   menu-items.ts
     │   ModianFaqTab.tsx
     │   ModianHome.tsx
     │   ModianNoticesTabs.tsx
     │   ModianPortal.tsx
     │   ModianQuickAccess.tsx
     │   ModianSidebar.tsx
     │   ModianWorkspace.tsx
     ├── admin/
     │   │   index.ts
     │   └── dashboard/
     │           AdminDashboardHelpContent.tsx
     ├── auth/
     │       index.ts
     │       ModianLoginForm.tsx
     │       ModianOtpForm.tsx
     ├── common/
     │   │   index.ts
     │   │   InvoiceDetailSection.tsx
     │   │   memoryKey.utils.ts
     │   │   ModianJalaliDateField.tsx
     │   │   useMemoryPublicKey.ts
     │   ├── date/
     │   │       jalali-utils.ts
     │   ├── search/
     │   │       index.ts
     │   │       InvoicesSearchHeader.tsx
     │   │       SearchByFilters.tsx
     │   │       SearchByTaxId.tsx
     │   └── table/
     │           ColumnsVisibilityBar.tsx
     │           EmptyTableRow.tsx
     │           index.ts
     │           ScrollableTableShell.tsx
     ├── declaration/
     │       DeclarationHelpContent.tsx
     │       index.ts
     ├── home/
     │       HomeHelpContent.tsx
     │       index.ts
     ├── layout/
     │       index.ts
     │       ModianFooter.tsx
     │       ModianHeader.tsx
     │       ModianShell.tsx
     │       ModianSubHeader.tsx
     ├── otp/
     │       Otppage.tsx
     ├── portal/
     │       index.ts
     │       PortalHelpContent.tsx
     ├── roles/
     │       index.ts
     ├── taxfile/
     │   │   index.ts
     │   │   TaxfileLayoutView.tsx
     │   │   TaxfilePageView.tsx
     │   │   TaxfileSubmenu.tsx
     │   ├── bank-accounts/
     │   │       BankAccountsHelpContent.tsx
     │   │       BankAccountsPage.tsx
     │   ├── bills/
     │   │       BillsHelpContent.tsx
     │   │       BillsPage.tsx
     │   ├── memory-uid/
     │   │   │   Memory-uidpage.tsx
     │   │   │   MemoryUidHelpContent.tsx
     │   │   ├── add/
     │   │   │       Addpage.tsx
     │   │   ├── details/
     │   │   │       Detailspage.tsx
     │   │   └── edit/
     │   │           page.tsx
     │   ├── payments/
     │   │       PaymentsPage.tsx
     │   ├── pos-uid/
     │   │       page.tsx
     │   ├── registration-information/
     │   │       RegistrationInformationPage.tsx
     │   │       types.ts
     │   └── trusted-companies/
     │           TrustedCompaniesPage.tsx
     │           TrustedHelpContent.tsx
     ├── ui/
     │   │   Card.tsx
     │   │   FieldGrid.tsx
     │   │   FormField.tsx
     │   │   FormToolbar.tsx
     │   │   icons.tsx
     │   │   index.ts
     │   │   PageShell.tsx
     │   │   Section.tsx
     │   │   SimulatorBadge.tsx
     │   │   Tabs.tsx
     │   │   ToolbarControls.tsx
     │   │   UploadPublicKeyModal.tsx
     │   └── date/
     │           ModianJalaliDatePicker.tsx
     ├── users-roles/
     │       index.ts
     │       UsersRolesHelpContent.tsx
     └── workspace/
             index.ts
 <!-- END:COMPONENTS_TREE -->

### BACKEND_SRC_TREE
 <!-- BEGIN:BACKEND_SRC_TREE -->
 src
 ├── app.module.ts
 ├── main.ts
 ├── admin/
 │       admin.controller.ts
 │       admin.module.ts
 ├── auth/
 │   │   access-level.decorator.ts
 │   │   access-level.guard.ts
 │   │   auth.controller.spec.ts
 │   │   auth.controller.ts
 │   │   auth.module.ts
 │   │   auth.service.spec.ts
 │   │   auth.service.ts
 │   │   dev-bypass.guard.ts
 │   │   hash.service.ts
 │   │   jwt-auth.guard.ts
 │   │   jwt-payload.interface.ts
 │   │   jwt.strategy.ts
 │   │   roles.decorator.ts
 │   ├── dto/
 │   │       change-password.dto.ts
 │   │       login.dto.ts
 │   │       register.dto.ts
 │   │       signin.dto.ts
 │   │       signup.dto.ts
 │   └── interfaces/
 │           request-with-user.interface.ts
 ├── business/
 │   │   business.controller.ts
 │   │   business.module.ts
 │   │   business.service.ts
 │   └── dto/
 │           onboarding-step1.dto.ts
 ├── common/
 │   ├── context/
 │   │       business-context.middleware.ts
 │   │       business-context.module.ts
 │   │       business-context.service.ts
 │   │       context.middleware.ts
 │   │       request-context.interface.ts
 │   │       request-context.service.ts
 │   └── decorators/
 │           public.decorator.ts
 ├── core/
 │   │   core.module.ts
 │   └── payroll/
 │       │   calculateSalaryTax.ts
 │       │   payroll-entry.entity.ts
 │       │   payroll-item.entity.ts
 │       │   payroll.controller.ts
 │       │   payroll.service.ts
 │       ├── dto/
 │       │       create-entry-wrapper.dto.ts
 │       └── tax-brackets/
 │               1404.tax-brackets.ts
 │               tax-bracket.interface.ts
 ├── health/
 │       health.controller.ts
 │       health.module.ts
 │       health.service.ts
 ├── modules/
 │   ── business-profile/
 │           business-profile.controller.ts
 │           business-profile.service.ts
 ├── notice/
 │   │   notice.controller.ts
 │   │   notice.module.ts
 │   │   notice.service.ts
 │   └── dto/
 │           create-notice.dto.ts
 ├── orders/
 │       orders.controller.ts
 │       orders.module.ts
 │       orders.service.ts
 ├── prisma/
 │   │   prisma.middleware.ts
 │   │   prisma.module.ts
 │   │   prisma.service.spec.ts
 │   │   prisma.service.ts
 │   └── extensions/
 │           businessIsolation.extension.ts
 │           tenantTransaction.extension.ts
 ├── registration/
 │       registration.controller.ts
 │       registration.module.ts
 │       registration.service.ts
 ├── services/
 ├── simulator/
 │   │   simulator-access.service.ts
 │   │   simulator.controller.ts
 │   │   simulator.module.ts
 │   │   simulator.service.ts
 │   │   test-tax.ts
 │   ├── dto/
 │   │       insurance-single.dto.ts
 │   ├── interfaces/
 │   │       simple-tax-result.interface.ts
 │   │       tax-result.interface.ts
 │   ├── karpooshe/
 │   │       karpooshe.controller.ts
 │   │       karpooshe.service.ts
 │   ├── logic/
 │   │       calculateSalaryTaxBatch.ts
 │   └── salary-tax/
 │       ── dto/
 │               create-simulator.dto.ts
 │               salary-tax-batch.dto.ts
 │               salary-tax.dto.ts
 │               update-simulator.dto.ts
 ├── simulator-modian/
 │   │   bills.controller.ts
 │   │   bills.service.ts
 │   │   registration.controller.ts
 │   │   registration.service.ts
 │   │   simulator-modian.controller.ts
 │   │   simulator-modian.module.ts
 │   │   simulator-modian.service.ts
 │   └── dto/
 │           create-utility-bill.dto.ts
 │           query-bills.dto.ts
 │           update-utility-bill.dto.ts
 ├── types/
 │       ambient.d.ts
 ├── user/
 │       user.controller.ts
 │       user.module.ts
 └── utils/
         utils.controller.ts
         utils.module.ts
 <!-- END:BACKEND_SRC_TREE -->
```

<!-- END:BACKEND_SRC_TREE -->
> به‌روزرسانی می‌کنند. :contentReference[oaicite:5]{index=5}
---

## 2) قرارداد نام‌گذاری و ساختار پوشه‌ها (Frontend)

- همه‌ی مسیرها زیر `src/` قرار می‌گیرند.
- ماژول‌ها (شبیه‌سازها) تحت `src/app/simulators/*`:
 همه‌ی مسیرها زیر `src/` قرار می‌گیرند.

 معماری Frontend بر اساس تفکیک بین **Shared/Core Components** و **Platform Features**
 سازمان‌دهی می‌شود.

 **Shared/Core Components**

 مسیر:

 `src/components/*`

 برای اجزای عمومی، UI مشترک و Domainهای قابل استفاده توسط چند Platform استفاده می‌شود.

 نمونه‌های Shared/Core:

 - `src/components/ui/*`
 - `src/components/common/*`
 - `src/components/business/*`

 نکته:

 `Business` یک Platform مستقل نیست؛
 بلکه یک Shared Core Domain است که توسط Platformهای مختلف استفاده می‌شود.

 Platformهای مصرف‌کننده شامل:

 - Modian
 - Insurance
 - Salary Tax

بنابراین Business در `src/components` باقی می‌ماند و به `src/features`
 منتقل نمی‌شود.

 **Platform Features**

 مسیر:

 `src/features/*`

 برای Platformهای مستقل و Featureهای دامنه‌ای استفاده می‌شود.

 **Route Layer**

 مسیر:

 `src/app/*`

 مسئول ساختار URL، Routing و Composition لایه‌های Next.js است.

 مسیرهای Platform مانند:

 `src/app/simulators/modian/*`

 صرفاً لایه Route بوده و منطق و Componentهای Domain را از Feature مربوطه مصرف می‌کنند.

## Platform Migration Status

معماری Frontend در حال مهاجرت تدریجی Platformها به ساختار Feature-Based است.

وضعیت فعلی Migration:

- Modian:
  - وضعیت: منتقل شده
  - مسیر مرجع:
    `src/features/modian/*`

- Insurance:
  - وضعیت: در انتظار Migration
  - مسیر فعلی:
    `src/components/insurance/*`

- Salary Tax:
  - وضعیت: در انتظار Migration
  - مسیر فعلی:
    `src/components/salary-tax/*`

Migration این Platformها پس از تکمیل و تثبیت Modian انجام خواهد شد.

نکته:

`Business` در این Migration قرار ندارد، زیرا یک Domain مشترک بین Platformها است.
مسیر مرجع:
`src/components/business/*`

**یادداشت تغییر ساختاری (مودیان):**
- مسیر استاندارد «پروندهٔ مالیاتی» از این به بعد **بدون سگمنت ادمین** است:
  `src/app/simulators/modian/taxfile/...`
  (تمام صفحات مرتبط با «پروندهٔ مالیاتی و عضویت» زیر همین مسیر مدیریت می‌شوند.)
  اگر لینک/ارجاع قدیمی با پیشوند `/admin/taxfile` وجود داشت، باید **redirect 301/308**
  به مسیر جدید (`/simulators/modian/taxfile/:path*`) اعمال شود. این سیاست در `next.config.ts`
  تحت بخش `redirects()` نگه‌داری می‌شود.

> چرا این تفکیک؟ برای جلوگیری از «آدرس‌های اشتباه» و **عدم تداخل نام** (دقیقاً مشکل اشاره‌شده در گفتگو).

**افزودنی جدید (اصلاح ساختار ماژول مودیان):**
- ساختار ماژول مودیان به معماری Feature-Based منتقل شده است.

 مسیر مرجع Domain و Componentهای اختصاصی مودیان:

 ```
 src/features/modian/
 ```

 این مسیر شامل بخش‌های اختصاصی مودیان مانند:

 - layout
 - common
 - taxfile
 - declaration
 - portal
 - roles

 است.

- تمام صفحات `modian` باید Component و منطق Domain خود را از Feature مربوطه مصرف کنند.

 مسیر:

 ```
 src/app/simulators/modian/
 ```

 صرفاً مسئول Route، URL Structure و Composition لایه‌های Next.js است.

  **قانون مسیرها (مودیان):** استفاده از سگمنت `admin/` در زیرشاخهٔ `modian/` ممنوع است؛
  هرگونه بخش مدیریتی یا داشبورد داخلی باید با نام‌گذاری معنایی خودش در زیر `modian/` تعریف شود
  (مثلاً `modian/dashboard`, `modian/taxfile`, ...). برای لینک‌های قدیمی، قانون redirect در `next.config.ts`
  نگه‌داری می‌شود تا از بروز لینک شکسته جلوگیری گردد


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

> در ماژول مودیان، این الگو هم‌اکنون در صفحات `otp`, `portal`, `users-roles/add` و چند صفحهٔ مشابه اعمال شده است.

> فایل‌های کلاینتی (مثل `ModianOtpForm.tsx`, `ModianLoginForm.tsx`) درون پوشهٔ `src/components/modian/` قرار دارند و از طریق Wrapper در `page.tsx` سروری فراخوانی می‌شوند.

### 3.3 معماری یکپارچه و Proxy مسیرهای حساس (Business Onboarding)
لایه‌های `app/api/` به‌عنوان پروکسی امنیتی بین Browser و NestJS عمل می‌کنند:

- `POST /api/business/create` مسیر اصلی MVP است و درخواست را به `POST /businesses/create` فوروارد می‌کند.
- Proxy، Body کامل `RegistrationStep1Input`، Cookie نشست و Authorization موجود را به Backend منتقل می‌کند.
- پاسخ Backend به‌همراه `Set-Cookie` مربوط به `access_token` تازه به مرورگر بازگردانده می‌شود.
- `POST /api/business/onboarding/step-1` و `POST /api/business/switch` در Flow ایجاد جدید مصرف نمی‌شوند و فعلاً Legacy هستند.
- پس از موفقیت، Modal موفقیت نمایش داده و کاربر بدون Login/Switch مجدد به `/dashboard` هدایت می‌شود.
- این الگو coupling مستقیم فرانت↔بک‌اند را کاهش می‌دهد و منبع حقیقت مالکیت را در Backend نگه می‌دارد.

### 3.4 ساختار Flow نهایی Create Business در MVP

```text
User
 |
Create Business
 |
 +-------------------------+
 |                         |
Auto-fill Template         Manual Form
 |                         |
Form Prefill               Empty Form
 +------------+------------+
              |
     RegistrationStep1Input
              |
   POST /api/business/create
              |
   Backend Prisma Transaction
   ├── Business
   ├── UserBusiness
   ├── TaxFile
   ├── BusinessContact
   └── BusinessRegistration
              |
       Fresh access_token
              |
          Dashboard
```

قواعد ساختاری:

- Signup فقط `User` ایجاد می‌کند؛ User بدون Business یک وضعیت معتبر است.
- `OnboardingChoiceModal` فقط روش ورود اطلاعات را تعیین می‌کند.
- هر دو روش از `StepRegistration`، `react-hook-form`، Zod Schema و Submit Handler مشترک استفاده می‌کنند.
- Auto-fill فقط فرم را با Template ثابت آموزشی پر می‌کند و قبل از ثبت نهایی قابل ویرایش است.
- صفحه `src/app/business/onboarding/step-1/page.tsx` فقط برای سازگاری مسیر قدیمی به `/business/onboarding` Redirect می‌کند.
- حذف فیزیکی Routeهای Legacy به موفقیت تست‌های Rollback/Regression وابسته است.

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
/simulators/modian/users-roles
/simulators/modian/workspace
```

> علاوه بر این، برای زیرمسیرهای خاص (مثل `roles/add`, `admin/taxfile/bank-accounts`, `taxfile/registration` و…)،
> فایل‌های `layout.tsx` و/یا `page.tsx` حداقلی ایجاد شد تا خطاهای
> «**Expected to return a React component**» و **Missing Suspense** برطرف شود.

### تحویل‌های جدید (۱۴۰۵/۰۳/۱۳)
**صفحه Login (`/simulators/modian/login`):**
- اصلاح کپچا (کاراکترهای رنگی و چرخشی).
- اصلاح جریان Tab Navigation (پرش مستقیم از رمز عبور به کپچا).
- افزودن دکمه نمایش رمز عبور با `tabIndex={-1}`.
- افزودن Dropdown انتخاب کسب‌وکار (فراخوانی `businesses/me`).

**صفحه OTP (`/simulators/modian/otp`):**
- پیاده‌سازی تایمر ۶ دقیقه‌ای با نوار پیشرفت گرافیکی.
- افزودن ماکاپ موبایل (نمایش کد پیامک).

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

### 6.1) Update (2026-02-27) — نکته عملیاتی مرج/PR
- بعد از هر PR Merge، حتماً روی `main` (لوکال و ریموت) **صحت SHA** و **سبز بودن build** کنترل شود:
  - `git log -1 --oneline` (روی main)
  - `npm run build`
- اگر PR ظاهراً merge شد ولی `main` هنوز خطا داشت، بازیابی امن از `git reflog` و `cherry-pick` مجاز است (طبق فرآیند مرج امن در §21).

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

## 8.1 الگوی مجاز ایمپورت برای «مودیان»
- مجاز: `@/features/modian` و Barrelهای رسمی زیر Feature مودیان مثل:
  - `@/features/modian/common`
  - `@/features/modian/taxfile`
  - `@/features/modian/layout`

- **غیرمجاز:** اشاره مستقیم به فایل‌های داخلی زیر Feature مودیان
  (مثل `@/features/modian/taxfile/bills/page`)؛ مصرف‌کنندگان باید از Barrelهای رسمی استفاده کنند.

- **یادداشت UI:** برای زیرپوشهٔ `ui/*` فقط از Barrel رسمی:
  `@/features/modian/ui`
  استفاده شود.
- این سیاست در ESLint با قاعده‌ی `no-restricted-imports` enforce شده و گروه‌بندی ایمپورت‌ها نیز طبق `import/order` برقرار است. این نکته در گزارش تیم صفحه اصلی هم تأیید شده است. :contentReference[oaicite:0]{index=0}

## 8.2 Governance تمیزکاری مودیان (صورتحساب‌ها)
- Global (src/components/ui, src/components/common): فقط اجزای کاملاً عمومی (دکمه، اینپوت عمومی، تاریخ جلالی عمومی).
- Modian (src/components/modian/*): هر جزء مربوط به UX/منطق مودیان: جداول/فیلترهای صورتحساب، DatePicker/DateField اختصاصی، آیکون/Toolbar خاص.
- ایمپورت فقط از Barrel مجاز است؛ ایمپورت عمیق مستقیم ممنوع (قاعدهٔ ESLint).

## 8.3 Inventory — Modian Components & Utilities (v1)
> منبع: components-tree.txt + app-tree.txt (این لیست با PRهای بعدی کامل می‌شود).

| نام | مسیر | نوع | قلمرو | کاربرد کلیدی | وضعیت تکثیر | اقدام |
|---|---|---|---|---|---|---|
| InvoicesSearchHeader | src/components/modian/common/search/InvoicesSearchHeader.tsx | Component | Modian | هدر جستجو در صفحات صورتحساب | **تأیید و در مصرف** | استاندارد مرجع برای تب‌ها/تیتر/چینش؛ مصرف صرفاً از Barrel |
| SearchByFilters | src/components/modian/common/search/SearchByFilters.tsx | Component | Modian | فیلترهای صورتحساب | **تأیید و در مصرف** | اتصال یکسان DateFields به util جلالی مشترک؛ منع import عمیق |
| SearchByTaxId | src/components/modian/common/search/SearchByTaxId.tsx | Component | Modian | جستجو بر اساس شناسه/کد مالیاتی | نامشخص | استفاده از Barrel؛ حذف import عمیق |
| ModianJalaliDateField | src/components/modian/common/ModianJalaliDateField.tsx | Component | Modian | فیلد تاریخ اختصاصی مودیان | **مرجع دامنه‌ای** | استفاده یکنواخت؛ خروج util‌های تبدیل/پارسه از WIP به shared |
| ModianJalaliDatePicker | src/components/modian/common/ModianJalaliDatePicker.tsx | Component | Modian | DatePicker اختصاصی | احتمال همپوشانی | همان بالا |
| InvoiceDetailSection | src/components/modian/common/InvoiceDetailSection.tsx | Component | Modian | بلوک مشترک برای «مشخصات صورتحساب/فروشنده/خریدار/اطلاعات پرداخت» در صفحات جزئیات صورتحساب | بدون‌تکثیر | مصرف صرفاً از Barrel؛ در طراحی صفحات جزئیات بعدی reuse شود |
| ToolbarControls | src/components/modian/common/ToolbarControls.tsx | Component | Modian | کنترل‌های ابزارک جدول | **استاندارد رفتار دکمه‌ها** | هم‌راستاسازی با منطق «پیشرفته باز/بسته» در Toolbar |
| SimulatorBadge | src/components/modian/common/SimulatorBadge.tsx | Component | Modian | نشانگر وضعیت سیمولاتور | نامشخص | تثبیت Barrel |
| icons | src/components/modian/ui/icons.tsx | Module | Modian | آیکون‌های محلی مودیان | احتمال تکرار با Global | در صورت عمومی‌شدن → انتقال به Global |
| Card / FormField / PageShell ... | src/components/modian/ui/*.tsx | UI Building Blocks | Modian | اسکلت‌بندی صفحات مودیان | بررسی همپوشانی | یا تجمیع در Global یا حفظ Modian-Scoped |
| JalaliDateField | src/components/common/date/JalaliDateField.tsx | Component | Global | تاریخ جلالی عمومی | — | مرجع عمومی؛ در صورت نیاز Adapter Modian بسازید |

> معیار «وضعیت تکثیر»: (نامشخص/بدون‌تکثیر/تکثیر-یافت‌شده). این ستون در هر PR به‌روز می‌شود.
  ```

- فایل `tsconfig.json` ارسالی: `strict: true`, `skipLibCheck: true`, `noEmit: true` و تنظیمات استاندارد App Router.

### 8.4 Route Wrappers (App Router)
برای یکسان‌سازی URL و جداسازی UI از Routing، بعضی صفحات در `app/…` فقط یک **Wrapper** هستند و محتوای اصلی را از بشکه‌ی feature می‌گیرند:

- `app/simulators/modian/taxfile/bills/page.tsx` ⟶ `<BillsPage />` از
`@/features/modian/taxfile`. (الگوی Route Wrapper برای حفظ URL فعلی.)
  _یادداشت:_ همین الگو در سایر زیردامنه‌های Taxfile نیز استفاده می‌شود (مثل صفحات Memory UID و Registration Information) و درخت‌های پروژه آن را نشان می‌دهند. :contentReference[oaicite:1]{index=1}

### 8.5 لایه API فرانت
- یوتیل فرانت `src/lib/modianApi.ts` برای فراخوانی‌های Bills (GET/POST) اضافه شده است و قراردادهای پارامتر/بدنه را متمرکز می‌کند. :contentReference[oaicite:2]{index=2}
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
- **«نمایش ستون‌ها» در جداول صورتحساب**: در صفحه جزئیات صورتحساب خرید داخلی، منوی انتخاب ستون‌ها برای جدول اقلام همراه با دکمه «پیش‌فرض» پیاده‌سازی شده؛ اما محل نگه‌داری تنظیمات (مثلاً `localStorage` یا سمت سرور) و دامنهٔ خروجی اکسل (همهٔ رکوردهای فیلترشده یا فقط صفحهٔ جاری) هنوز نیاز به تصمیم محصول دارد.
- **یکنواختی تاریخ جلالی در فیلترها**: ریسک ناسازگاری بین صفحات؛ پیشنهاد ایجاد یک util مرکزی (مثلاً `toISOJalali / parseJalali`) و مصرف یکنواخت در `SearchByFilters`. :contentReference[oaicite:3]{index=3}
- **واژگان/enum «موضوع صورتحساب»**: تأیید نهایی دامنه و تولی...د `enum/constant` مشترک فرانت/بک برای جلوگیری از دوباره‌کاری UI.
- **استانداردسازی Barrel-only در مودیان**: پایش مستمر ایمپور...ست barrel و قوانین ESLint (no-restricted-imports, import/order).

> یادداشت: نوار ابزار جدول «خرید داخلی» (آیکون اکسل + دکمه‌ی نمایش ستون‌ها) پیاده‌سازی شده و پایدار است؛ ادامه‌ی کار روی «پنل انتخاب ستون‌ها» و ذخیره‌سازی تنظیمات طبق تصمیم بالا انجام می‌شود. :contentReference[oaicite:6]{index=6}
- **صفحه «جزئیات صورتحساب خرید داخلی»**: اسکلت صفحه شامل هدر، بلوک‌های اطلاعاتی مشترک، جدول ۲۹ ستونی «اقلام صورتحساب» با منوی انتخاب ستون‌ها و بخش «اطلاعات پرداخت» تکمیل شده است؛ جدول «پرداخت‌ها» و اتصال به داده‌های واقعی (یا Mock ساختارمند) برای اسپرینت بعدی برنامه‌ریزی شده‌اند.
- **یکپارچگی تاریخ جلالی**: فیلدهای تاریخ اختصاصی مودیان (Jalali) در Shared Search Suite مصرف می‌شوند؛ ذخیره/ارسال به ISO در لایهٔ فرانت انجام شود.
- **صفحه «جزئیات صورتحساب‌های خرید داخلی»**: اسکلت صفحه در مسیر `src/app/simulators/modian/invoices/buy/detail/page.tsx` شامل هدر «صورتحساب خرید»، بلوک‌های «مشخصات صورتحساب/فروشنده/خریدار»، جدول ۲۹ ستونهٔ اقلام با اسکرول افقی و منوی «نمایش ستون‌ها» و بخش «اطلاعات پرداخت» پیاده شده است؛ جدول «پرداخت‌ها» و اتصال دادهٔ واقعی/Mock باید در اسپرینت بعدی تکمیل شود.
- **استخراج کامپوننت‌های مشترک صفحه جزئیات**: طبق برنامه تیم مودیان، کامپوننت‌های `InvoiceDetailSection`, `InvoiceExpandableCard`, `InvoiceColumnsChooser` به‌صورت ماژولار استخراج می‌شوند تا در سایر صفحات جزئیات صورتحساب قابل‌استفاده باشند.
 ---

## 12) خلاصه‌ی تصمیمات کلیدی این به‌روزرسانی

- **تفکیک ماژول‌ها و لایه‌های layout به‌صورت استاندارد.**
- **کلاینت‌سازی صفحات مودیان** + حل خطای `useSearchParams` با **مرز `Suspense`**.
- ساخت **فایل‌های حداقلی** (`page.tsx`/`layout.tsx`) فقط برای پاس کردن قرارداد App Router و جلوگیری از خطای «باید یک کامپوننت برگردد».
- صریح‌سازی درباره‌ی **Tailwind custom utility**‌ها (مثل `bg-background`).

## یادداشت تغییر ساختاری (مودیان) — حذف سگمنت `admin`
از این به بعد، مسیر استاندارد «پروندهٔ مالیاتی و عضویت» در مودیان **بدون سگمنت `admin`** است:

```text
/simulators/modian/taxfile/...    ✅ استاندارد
/simulators/modian/admin/taxfile  ⛔ غیراستاندارد (صرفاً برای Redirectهای موقت)
```

- اگر لینک/ارجاعی در کد هنوز به مسیر قدیمی (`/simulators/modian/admin/...`) اشاره می‌کند، باید در اولین فرصت به مسیرهای جدید منتقل شود و فقط Redirect سمت سرور/فرانت برای حفظ سازگاری باقی بماند.
- **قاعدهٔ نام‌گذاری:** استفاده از سگمنت `admin/` در زیرشاخهٔ `modian/` ممنوع است. هر بخش مدیریتی باید با نام معنایی خودش در همان سطح قرار گیرد
  (مثلاً `modian/dashboard`, `modian/taxfile`, ...). لینک‌های قدیمی صرفاً با Redirect حفظ سازگاری می‌شوند و نباید در کد به‌صورت مستقیم استفاده شوند.
---
## 13) ESLint حوزه‌ای (Modian) — قوانین و اسکریپت‌ها

این بخش برای هم‌راستاسازی با **Phase C** در «checklist_package_1» اضافه شد و معیار ممیزی را مستند می‌کند.
قوانین الزامی:
1) `react-hooks/rules-of-hooks` و `react-hooks/exhaustive-deps` **فعال** باشند.
2) `import/order` با گروه‌بندی استاندارد: `builtin`, `external`, `internal`, `parent`, `sibling`, `index` و **یک خط فاصله** بین گروه‌ها.
3) `no-restricted-imports` برای منع import مستقیم از مسیرهای داخلی `modian/ui/*` و `modian/common/*`؛ **مصرف فقط از Barrel**:
   - `@/components/modian/ui`
   - `@/components/modian/common`
4) اسکریپت‌های مورد انتظار (برای استناد CI و پذیرش):
   - `lint` ، `lint:strict` ، `typecheck` ، `build`

نکته: هشدارهای ESLint می‌توانند در فازهای قبلی وجود داشته باشند؛ اما برای **خروجی نهایی بسته ۱**، آستانهٔ پیشنهادی «صفر هشدار» است.

## 14) CI — lint/typecheck/build (الزامات سبک)

- اجرای Jobهای `lint:ci`، `typecheck` و `build` روی Pull Request/Merge Request.
 - شکست خودکار PR اگر هرکدام از این Jobها (به‌خصوص `lint:ci`) خطا یا هشدار جدیدی تولید کنند
   نسبت به baseline صفر هشدار روی `main`.
- خروجی این Jobها به‌عنوان معیار پذیرش فنی ثبت می‌شود.

- **الزام اجرایی (Governance):**
  - PR بدون عبور از چک‌های CI نباید merge شود (Branch Protection باید این چک‌ها را *Required* کند).
  - علاوه بر lint/typecheck/build، یک Job مستقل برای **Docs Sync** لازم است:
    - اجرای `npm run docs:all` و سپس fail شدن PR در صورت وجود `git diff`
    - هدف: جلوگیری از Drift بین مستندات ساختار و treeهای واقعی.
  - تغییرات زیر `src/app/api/**` **حساس امنیتی** هستند:
    - باید Review اجباری Security/Structure داشته باشند (ترجیحاً با `CODEOWNERS`).
  - PR Template باید شامل چک‌لیست «PR Gate / Definition of Done» باشد تا دورزدن فرآیند سخت شود.

## 15) Definition of Done — checklist_package_1

- `eslint.config.mjs` به‌روزرسانی و قوانین حوزه‌ای فعال (بندهای 13.1 تا 13.3).
- ساختار `components/modian` ماژولار و **Barrel-only** (قوانین 13.3).
- `npm run build` سبز + `npm run lint:ci` **بدون هیچ هشدار و خطا**.
 - وضعیت فعلی `main` با همین معیار سنجیده شده و در زمان نگارش این سند، هر دو فرمان
   `npm run lint:ci` و `npm run build` روی `main` سبز و بدون هشدار هستند (baseline صفر هشدار).
- مستندات (همین فایل) با قوانین ESLint، CI و ساختار به‌روزرسانی شده است (این پچ).

## 16) گزارش وضعیت تیم مودیان — ۱۴۰۴/۰۸/۱۹
**جمع‌بندی کارهای Done**
- هدر جستجو/فیلتر «صورتحساب‌های خرید داخلی» به نسخهٔ قابل‌اس...رستونه و «موضوع صورتحساب».
- منطق Toolbar: در حالت «پیشرفته باز» فقط یک جفت دکمه در پای...تر پیش‌فرض» نیز هماهنگ شد.

**تصمیمات و استانداردها**
- پیش‌فرض فیلدهای تاریخ فیلترها: «فصل جاری جلالی» (همراستا با مرجع و کاهش کلیک).
- مصرف صرفاً از Barrelهای تعیین‌شده در Modian UI/Common (تکرار تأکید).

**WIP/ریسک‌ها و اقدام متقابل**
- پیش‌فرض فیلدهای تاریخ فیلترها: «فصل جاری جلالی» (همراستا با مرجع و کاهش کلیک).
- مصرف صرفاً از Barrelهای تعیین‌شده در Modian UI/Common (تکرار تأکید).

**وضعیت کیفی**
- Build ✅ / Lint ✅ (اخطارهای سابق پراکنده در محدوده‌های غیردامنه‌ای در حال پاکسازی).

## 17) گزارش وضعیت کلی پروژه — ۱۴۰۴/۰۹/۰۵

بر اساس فایل `project-status-report14040905.txt`.

### 17.1) مستندات و استانداردهای عمومی

- ساختار «گزارش وضعیت تیم» بر اساس فایل‌های `team-status-report-prompt.txt` و `team-status-report-template.md`
  تثبیت شده و همین گزارش، خروجی همان ساختار است. این قالب به‌عنوان الگوی رسمی برای گزارش وضعیت تیم‌ها در
  فرانت‌اند استفاده می‌شود.

### 17.2) استانداردهای UI و Barrelها در مودیان

- استفاده از barrelهای مودیان برای ایمپورت‌ها (کد نمونه در SearchByFilters):
  - `@/components/modian/ui` برای کامپوننت‌های UI عمومی مودیان مثل:
    `Card`, `FieldGrid`, `FormField`, `IconChevronDown`, `IconSearch`, `IconFilter`, ...
  - `@/components/modian/common` برای اجزای مشترک دامنه‌ای مثل:
    `ModianJalaliDateField` و سایر کامپوننت‌های مشترک مودیان.
- الگوی `FormField` با `variant="floating"` به‌عنوان استاندارد لیبل‌های شناور
  در فیلدهای summary و advanced برای فرم‌های مودیان تثبیت شد.
- utilityهای زیر در SearchByFilters به‌عنوان مرجع واحد برای صفحات مشابه (صورتحساب‌ها، گزارش‌ها و …) تعریف شده‌اند:
  - `toEnDigits`, `onlyDigits`, `formatMoney` برای تبدیل و فرمت‌کردن ورودی‌های عددی (به‌خصوص ارقام فارسی ↔ انگلیسی).
  - `extractJalaliYM` برای استخراج سال/ماه جلالی از خروجی‌های مختلف `/api/utils/today`
    (ساختارهای متفاوت JSON یا رشته‌های تاریخ مثل `"1404/08/17"`، `"۱۴۰۴-۰۸-۱۷"` و …).

### 17.3) کیت UI مودیان (مصرف‌شده در این دوره)

برای رهگیری مهاجرت به کیت UI مودیان، لیست زیر مجموعه‌ی کامپوننت‌هایی است که در این بازه مصرف شده‌اند:

- `Card`, `FieldGrid`, `FormField`, `IconChevronDown`, `IconSearch`, `IconFilter`
- `ModianJalaliDateField`
- `ModianSubHeader` (layout ساب‌هدر مودیان و breadcrumb بالای صفحات)

## 18) گزارش وضعیت تیم مودیان — ۱۴۰۴/۰۹/۰۵

بر اساس فایل `team2-status-report-14040905.txt`.

### 18.1) موارد نیازمند تصمیم/تأیید مدیر پروژه

1. **پیش‌فرض دوره/سال در تب «اظهارنامه» صفحهٔ گزارش فایل‌های خروجی**
   - در UI فعلی، دورهٔ پیش‌فرض بر اساس فصل جاری محاسبه می‌شود (مثلاً اگر فصل فعلی Q3 باشد، مقدار پیش‌فرض Q2 همان سال است).
   - لازم است این رفتار در سطح محصول/بک‌اند تأیید شود یا در صورت نیاز، با منطق دقیق‌تری (مثلاً بر اساس تاریخ شروع/پایان دوره)
     جایگزین گردد.

2. **سطح «ماک» بودن صفحهٔ گزارش فایل‌های خروجی**
   - گزینهٔ A: مرج UI و رفتارهای فرمی صفحه با داده‌های ماک صرفاً برای دمو و تست UX.
   - گزینهٔ B: بلوکه‌کردن مرج تا زمانی که اتصال به API لیست فایل‌ها و وضعیت آن‌ها پیاده‌سازی شود.
   - پیشنهاد تیم مودیان: گزینهٔ A، به‌شرطی که «ماک بودن» به‌صورت صریح در توضیحات فیچر و لاگ اسپرینت ثبت شود.

### 18.2) مستندات، استانداردها و کیت UI در فیچر «گزارش فایل‌های خروجی»

- الگوی «گزارش وضعیت تیم» و پرامپت چت تیم توسعه مطالعه و به‌عنوان مبنای همین گزارش استفاده شده است
  (هم‌راستا با `project-status-report14040905.txt`).
- کامپوننت‌های کیت UI مودیان که در این فیچر (گزارش فایل‌های خروجی صورتحساب‌ها) مصرف شده‌اند:
  - `ScrollableTableShell` برای جدول اصلی گزارش فایل‌ها.
  - `FieldGrid` و `FormField` برای چیدمان فیلدها و لیبل شناور فرم (summary و advanced).
  - `ModianJalaliDateField` برای فیلدهای تاریخ با تقویم جلالی در تب «فایل صورتحساب‌ها».

## 19) گزارش وضعیت تیم مودیان — ۱۴۰۴/۰۹/۰۷

بر اساس فایل `team2-status-report-14040907.txt`.

### 19.1) تغییرات ساختاری و مسیرها

- تعریف گروه منوی جدید «صورتحساب‌های قبل از ۱۴۰۲/۰۳/۲۶» در سایدبار مودیان و زیرمنوی «خرید داخلی» و اتصال آن به مسیر
  `/simulators/modian/old-Invoices/buy` بدون تغییر در منوهای قبلی.
- ساخت اسکلت صفحه `src/app/simulators/modian/old-Invoices/buy/page.tsx` با استفادهٔ مجدد از کامپوننت‌های موجود
  (Header، Table، Actions) و تنظیم عنوان و زیرمنو مطابق اسکرین سامانهٔ اصلی.
- ساده‌سازی نوار جستجو در صفحه‌ی `old-Invoices/buy`:
  - تبدیل تب‌های قبلی به یک کادر سادهٔ واحد.
  - چسباندن سه فیلد خلاصه به سمت راست.
  - انتقال دکمه‌های «جستجو» و «جستجو پیشرفته» به همان ردیف فیلدها.
  - غیرفعال‌کردن سه فیلد بالایی (حالت فقط نمایشی) و تنظیم عرض و پس‌زمینه مطابق نمونهٔ اصلی سامانه.

### 19.2) به‌روزرسانی‌های SearchByFilters برای old-Invoices

- اضافه‌شدن تشخیص مسیر `old-Invoices` (پرچم منطقی `isOldInvoicesPage`) و اعمال تفاوت‌های UI فقط در این صفحه:
  - فرم بیرونی به‌صورت کارت سفید یک‌تکه با پس‌زمینه و بوردر مجزا، بدون تأثیر روی صفحات دیگر.
  - چیدمان اختصاصی ردیف خلاصه: سه فیلد در سمت راست + دکمه‌های جستجو در همان ردیف.
  - پنل «جستجو پیشرفته» با تیتر «جستجو پیشرفته» در سمت راست و دکمه‌ی «بستن» در سمت چپ هدر، همراه با خط سبز زیر تیتر
    و دکمه‌ی پایین فرم که فقط در حالت old-Invoices فعال است.
- حذف برخی فیلدها فقط در حالت old-Invoices (تاریخ درج در کارپوشه از/تا، مجموع صورتحساب از/تا، شماره اقتصادی،
  شناسه هویتی، نام/نام تجاری فروشنده و چک‌باکس «فقط موارد دارای اقدام») و بازچینش فیلدها مطابق اسکرین رسمی:
  - ردیف اول: «کد شعبه، موضوع صورتحساب، الگوی صورتحساب، وضعیت حد مجاز».
  - ردیف دوم: «تاریخ صدور صورتحساب از/تا».
- تنظیم آیکون و استایل دکمه‌ی «جستجو پیشرفته» (آیکون چرخ‌دنده بدون بوردر، فاصله‌ها، پهنای فیلدها و راست‌چین‌بودن اجزا)
  برای رسیدن به شباهت حداکثری با UI رسمی مودیان.

### 19.3) ریسک‌ها و توصیه‌های ساختاری

- **پیچیدگی کامپوننت SearchByFilters**
  به‌دلیل اضافه شدن شاخه‌های شرطی مانند `isOldInvoicesPage` و (در ادامه) `isExportsPage`، ریسک رگرسیون در سایر صفحات
  مصرف‌کننده‌ی SearchByFilters (خرید/فروش فعلی) وجود دارد. در گزارش تیم پیشنهاد شده:
  - تست دستی روی همهٔ صفحات مصرف‌کنندهٔ SearchByFilters انجام شود.
  - در صورت امکان، تست‌های واحد/اسنپ‌شات برای سناریوهای `invoices/*` و `old-Invoices/*` نوشته شود.
- **عدم اتصال API برای old-Invoices در این فاز**
  در این دوره فقط UI صفحه‌ی `old-Invoices/buy` پیاده‌سازی شده و منطق ارسال فیلترها به API واقعی/شبیه‌ساز هنوز متصل نشده است.
  لازم است در اسپرینت بعدی، اتصال به API و نگاشت فیلدهای جستجو در سند `docs-modian-endpoints.updated.md` تکمیل و به‌روزرسانی شود.

## 20) گزارش وضعیت تیم مودیان — ۱۴۰۴/۰۹/۰۹

بر اساس فایل `team2-status-report-14040909.txt`.

### 20.1) مسیرها و صفحات جدید در ماژول old-Invoices

- گسترش پوشش ماژول `src/app/simulators/modian/old-Invoices` به سناریوهای زیر:
  - `buy/page.tsx`
    - هم‌ترازسازی کامل جدول لیست خرید داخلی قدیمی با سامانه اصلی (ستون‌ها، ترتیب، پیش‌فرض نمایش/عدم‌نمایش).
    - حذف دکمه‌های اضافی بالای جدول (تأیید، رد، انتقال صورتحساب).
    - فعال‌سازی ستون ثابت «جزئیات» برای هر ردیف و مسیریابی به صفحهٔ جزئیات خرید داخلی.
  - `buy/detail/page.tsx`
    - پیاده‌سازی صفحهٔ جزئیات خرید داخلی قدیمی بر اساس الگوی جزئیات خرید فعلی:
      سکشن‌های «مشخصات صورتحساب»، «فروشنده»، «خریدار»، «اقلام»، «جمع کل»، «اطلاعات تکمیلی» و مدال جزئیات پرداخت.
  - `sales/page.tsx` و `sales/detail/page.tsx`
    - کپی‌برداری کنترل‌شده از اسکلت خرید داخلی و تطبیق متون و مسیریابی با سناریوی «فروش داخلی».
    - فعال‌سازی ستون «جزئیات» در لیست فروش داخلی و اتصال آن به صفحهٔ جزئیات فروش داخلی.
  - `exports/page.tsx` و `exports/detail/page.tsx`
    - پیاده‌سازی لیست و جزئیات «فروش صادراتی» مطابق اسکرین‌های مرجع؛
      در جزئیات صادرات، سکشن‌های خریدار و پرداخت طبق اسکرین حذف شده‌اند و تمرکز روی جدول اقلام و اطلاعات صادراتی است.

### 20.2) تنظیمات ستون‌ها و جستجو

- خرید داخلی – لیست (`old-Invoices/buy/page.tsx`):
  - ساختار ستون‌ها براساس سناریوی واقعی سامانه تنظیم شده و حالت پیش‌فرض نمایش برای ستون‌های اصلی فعال است.
  - ستون ثابت «جزئیات» به‌عنوان آخرین ستون اضافه شده تا navigation بین لیست و جزئیات پایدار باشد.
- خرید داخلی – پنل جستجو (`buy/page.tsx` + `SearchByFilters.tsx`):
  - اضافه‌شدن زیرمنوی ثابت «سال مالیاتی» (۱۴۰۰ تا ۱۴۰۳) و «دوره مالیاتی» (بهار، تابستان، پاییز، زمستان) به‌صورت گزینه‌های بدون چک‌باکس.
  - در حالت باز بودن پنل پیشرفته، دکمهٔ «جستجوی پیشرفته» به «حذف فیلتر» با استیت رنگی مشخص تبدیل می‌شود
    و با کلیک تمام فیلترها را ریست می‌کند؛ در حالت بسته، رفتار همان جستجوی پیشرفته است.
- فروش داخلی – لیست و جزئیات:
  - ستون‌ها و جزئیات از خرید داخلی مشتق شده و فقط برچسب‌ها/متن‌ها با سناریوی فروش داخلی هماهنگ شده است؛
    این کار ریسک divergence بین دو صفحه را کاهش می‌دهد.
- فروش صادراتی – لیست:
  - حذف فیلدهای «نوع صورتحساب» و «الگوی صورتحساب» از فیلترهای ساده بالای صفحه برای نزدیک‌تر شدن به اسکرین اصلی.
  - در جستجوی پیشرفته:
    - لیبل «وضعیت صورتحساب» به «وضعیت تطابق» تغییر یافته است،
    - این فیلد در حال حاضر غیرفعال (read-only) است و با بوردر خط‌چین نمایش داده می‌شود تا متمایز باشد.
  - تعریف مجدد ستون‌های جدول صادراتی شامل ستون‌های صادرات‌محور (شماره قرارداد حق‌العملکاری، وضعیت واکنش آمر،
    تاریخ/شماره کوتاژ و …) و تنظیم پیش‌فرض: فقط ستون‌های «مجموع صورتحساب»، «مجموع مالیات بر ارزش افزوده»،
    «تاریخ صدور صورتحساب» و «وضعیت تطابق» روشن هستند.
- فروش صادراتی – جزئیات:
  - جدول اقلام براساس نیازهای صادراتی بازطراحی شده است (ستون‌های نرخ/مبلغ مالیات، سایر وجوه قانونی، وزن، ارزش ارزی و …)،
    و ستون‌های پیش‌فرض با برچسب «(پیشفرض)» روشن هستند.
  - در منوی «نمایش ستون‌ها»، ستون «شرح» اضافه و جفت تکراری «نرخ سایر وجوه قانونی / مبلغ سایر وجوه قانونی» حذف شده است.

### 20.3) ریسک‌ها و تصمیم‌های معوق

- **وابستگی UI به API نهایی old-Invoices**
  در حال حاضر ستون‌ها و فیلترها در فرانت‌اند به‌صورت ماک تعریف شده‌اند و هنوز به سرویس‌های واقعی old-Invoices متصل نیستند.
  اگر نام فیلدهای API نهایی متفاوت از نام‌های فعلی باشد، نیاز به نگاشت زمان‌بر بین UI و بک‌اند خواهیم داشت.
- **پیشنهاد تیم مودیان برای مدیریت ریسک mapping**
  قبل از اتصال نهایی، باید یک فایل mapping رسمی بین نام ستون‌ها/فیلترهای فرانت‌اند و فیلدهای پاسخ/QueryString بک‌اند
  در سند `docs-modian-endpoints` تعریف شود و هر دو تیم به آن متعهد بمانند.
- **استاندارد اشتراک‌گذاری کانفیگ ستون‌ها**
  - گزینهٔ A: ایجاد یک ماژول کانفیگ مشترک فقط برای old-Invoices در همین ماژول.
  - گزینهٔ B: ارتقاء این کانفیگ به «Registry ستون‌ها» در کیت UI مودیان برای استفادهٔ سایر ماژول‌ها.
  پیشنهاد فعلی تیم: انتخاب گزینهٔ A در این اسپرینت (ساده‌تر و سریع‌تر)، با امکان مهاجرت به B در آینده.
- **رفتار فیلد «وضعیت تطابق» در جستجوی پیشرفتهٔ صادرات**
  - گزینهٔ A: باقی‌ماندن دائمی به‌صورت read-only و صرفاً informtional.
  - گزینهٔ B: تبدیل به فیلتر فعال در نسخه‌های بعدی.
  پیشنهاد فعلی تیم: گزینهٔ A تا زمانی که سناریوی دقیق بک‌اند برای این فیلد مشخص شود.
---

  پیشنهاد فعلی تیم: گزینهٔ A تا زمانی که سناریوی دقیق بک‌اند برای این فیلد مشخص شود.

## 21) فرآیند استاندارد مرج‌های بزرگ به main (Feature + Lint)

این فرآیند برای زمانی است که یک یا چند فیچر بزرگ و یک برنچ ساختاری/لینت باید با ریسک کم روی `main` اعمال شوند.

### 21.2) چک‌لیست مرج امن به main (۷ مرحله)

  1. **تکمیل و تست برنچ integration**
    - ادغام برنچ‌های فیچر و لینت روی برنچ integration
    - اجرای کامل `npm run lint:ci`، بعد `npm run build` و در نهایت `npm run dev` برای تست دستی سناریوهای کلیدی
    - تا وقتی این سه تست سبز نشدن، مرج به `main` ممنوع است.

  2. **پاک بودن وضعیت روت ریپو روی main**
    - در worktree اصلی روی `main`:
      - `git status` → بدون فایل تغییر‌یافته/استیج‌نشده (وجود فولدرهای کمکی مثل `backups/` به صورت *untracked* مجاز است)
      - `git fetch origin && git pull --ff-only origin main`

  3. **ساخت برنچ‌ها و تگ‌های بکاپ**
    - ساخت برنچ و تگ برای:
      - `backup/main-before-<integration-branch>`
      - `backup/<integration-branch>`
    - بدون این بکاپ‌ها، مرج به `main` شروع نمی‌شود.

  4. **مرج کنترل‌شدهٔ integration به main**
    - فقط از روت ریپو و روی `main`:
      ```bash
      git merge --no-ff <integration-branch> -m "Merge <integration-branch> into main"
      ```
    - در صورت conflict:
      - هیچ `git add` / `git commit` جدید تا زمان تصمیم‌گیری زده نمی‌شود
      - در صورت نیاز:
        ```bash
        git merge --abort
        ```

  5. **تست مجدد روی main بعد از مرج**
    - روی `main`:
      ```bash
      npm run lint:ci
      npm run build
      - معیار «سبز بودن» برای `npm run lint:ci` یعنی: هیچ خطا و هیچ هشدار فعالی در خروجی باقی نمانده باشد
      (حفظ baseline صفر هشدار روی `main`).
      # در صورت نیاز:
      npm run dev
      ```
    - اگر مشکل جدی دیده شد و تصمیم به بازگشت گرفته شد:
      ```bash
      git reset --hard backup/main-before-<integration-branch>
      ```

  6. **push نهایی و انتشار بکاپ‌ها روی ریموت**
    - پس از سبز بودن تست‌ها روی main:
      ```bash
      git push origin main
      git push origin backup/main-before-<integration-branch>
      git push origin backup/<integration-branch>
      git push origin --tags
      ```

  7. **تمیزکاری تدریجی برنچ‌ها**
    - بعد از دورهٔ اطمینان (چند روز یا یک اسپرینت) و پایدار بودن `main`:
      - حذف برنچ‌های کاری: `feature/...`، `chore/...`، `integrate/...`
    - برنچ‌ها و تگ‌های `backup/...` فقط با تصمیم صریح مدیر پروژه حذف می‌شوند.

### 21.3) Playbook بازیابی مرج (Reflog / Cherry-pick)
گاهی ممکن است «merge در UI گیت‌هاب» انجام نشده باشد یا روی `main` اثر نگذارد (مثلاً به‌دلیل حذف برنچ قبل از Verify).
در این حالت، مسیر امن بازیابی:
1) روی `main`:
   - `git status` باید clean باشد.
2) یافتن SHA کامیت از reflog:
   - `git reflog --all --date=local | findstr /i "<keyword>"`
3) اعمال تغییر روی `main`:
   - `git cherry-pick <SHA>`
4) تست و Push:
   - `npm run build`
   - `git push origin main`

## 22) گزارش وضعیت تیم مودیان — ۱۴۰۴/۰۹/۱۴

بر اساس فایل `team2-status-report-14040914.txt`.

### 22.1) مسیرها و صفحات جدید در زیرمنوی «اعلامیه‌های خرید»

- مطابق `app-tree.txt` و خروجی تیم مودیان، زیرمنوی جدید «اعلامیه‌های خرید» در ساختار Routing مودیان اضافه شده است:
  - `src/app/simulators/modian/purchase-announcements/page.tsx`
    - شِل/Wrapper اصلی زیرمنو که layout و ساب‌هدر را فراهم می‌کند.
  - `src/app/simulators/modian/purchase-announcements/imports/page.tsx`
    - صفحهٔ «اعلامیه‌های واردات» با دو تب:
      - «جستجو با فیلتر» (SearchByFilters + InvoicesSearchHeader)
      - «جستجو با شماره مالیاتی».
    - نوار ابزار بین فرم جستجو و جدول شامل:
      - خروجی اکسل
      - نمایش/مخفی‌سازی ستون‌ها
      - انتقال شعبه.
    - جدول با حدود ۱۵ ستون قابل تنظیم و ستون چسبان «جزئیات» در انتهای هر ردیف.
  - `src/app/simulators/modian/purchase-announcements/bourse/page.tsx`
    - صفحهٔ «خرید از بورس کالا» که الگوی واردات را کپی کرده و با سناریوی بورس سفارشی شده است:
      - تیتر و متون صفحه متناسب با «خرید از بورس کالا».
      - تنظیم مجدد فیلترهای پیشرفته (حذف فیلدهای اضافی مانند الگو، حد مجاز، شناسه‌ها و چک‌باکس‌های نامرتبط).
      - محدود کردن «موضوع اعلامیه» به گزینه‌های «اصلی» و «ابطالی».
      - تعریف مجدد ترتیب و پیش‌فرض ستون‌های جدول مطابق نیاز سناریوی بورس.

### 22.2) کیت UI و کامپوننت‌های مشترک در «اعلامیه‌های خرید»

- استفاده‌ی مجدد از الگوی Search/Header صورتحساب‌ها:
  - `InvoicesSearchHeader` برای هدر جستجو، تیتر و تب‌های «فیلتر / شماره مالیاتی».
  - `SearchByFilters` برای فرم فیلتر ساده + پیشرفته، همراه با دکمه‌های:
    - «جستجو»
    - «فیلتر پیش‌فرض»
    - باز/بسته‌کردن پنل پیشرفته.
- نوار ابزار جدول:
  - استفاده از همان الگوی Toolbar ستون‌ها (آیکون نمایش ستون‌ها، خروجی اکسل، انتقال شعبه) که در سایر صفحات صورتحساب نیز استفاده شده است.
- نمای خالی مشترک جدول:
  - استخراج کامپوننت `EmptyTableRow` در مسیر:
    - `src/components/modian/common/table/EmptyTableRow.tsx`
  - این کامپوننت شامل آیکون مانیتور + حباب گفتگو و متن «موردی یافت نشد» است و به‌عنوان نمای خالی استاندارد
    در جدول‌های اعلامیه واردات و خرید از بورس استفاده می‌شود.

### 22.3) وضعیت کیفی، ریسک‌ها و اقدامات بعدی

- **کیفیت و CI**
  - در گزارش تیم مودیان برای این بازه، اجرای `Build/Lint/Test` از سمت تیم مودیان انجام و ثبت نشده است
    و وابسته به پایپ‌لاین CI ریپو اصلی است؛ در نتیجه:
    - پس از ادغام این فیچر، اجرای `npm run lint:ci` و `npm run build` روی برنچ اصلی (ساختار/مودیان) الزامی است.
- **اتصال به سرویس‌های واقعی مودیان**
  - در حال حاضر، زیرمنوی «اعلامیه‌های خرید» صرفاً UI/شبیه‌ساز است و به سرویس‌های واقعی مودیان متصل نشده است.
  - مشابه ماژول `old-Invoices`، لازم است در سند `docs-modian-endpoints.updated.md`:
    - mapping رسمی بین فیلدهای فیلتر (وضعیت اعلامیه، موضوع اعلامیه، بازهٔ تاریخ، سناریوی واردات/بورس و …) و پارامترهای API
      در نسخه‌های بعدی مستند شود.
- **ریسک هم‌گرایی با UI رسمی**
  - به‌دلیل کپی الگو از صفحهٔ واردات و سفارشی‌سازی برای بورس کالا، در صورت تغییر در اسکرین‌های رسمی، احتمال divergence بین
    این دو صفحه وجود دارد؛ بنابراین پیشنهاد می‌شود:
    - هر تغییر عمده در اسکرین‌های مودیان برای اعلامیه‌ها، با به‌روزرسانی هم‌زمان در هر دو زیرصفحه و در این سند همراه باشد.

---

> آخرین ویرایش: بر مبنای فایل‌های ارسال‌شده در همین گفتگو (بخش project) و لاگ‌های `npm run build`.

## 23) به‌روزرسانی ساختار ماژول مودیان — ۱۴۰۴/۰۹/۱۷

بر اساس فایل project-structure-update-notes-14040917.txt و آخرین نسخهٔ app-tree.txt و components-tree.txt، این بخش وضعیت جدید ساختار مودیان را در سطح مسیرها، لایه‌های کامپوننت و استانداردهای lint/Barrel مستند می‌کند.

 ## 23.1) اصلاح معماری قبوض مودیان

 بر اساس Refactor انجام‌شده در Backend:

 ### ساختار نهایی ماژول مودیان

 src/simulator-modian/
 ├── bills.controller.ts
 ├── bills.service.ts
 ├── registration.controller.ts
 ├── registration.service.ts
 ├── simulator-modian.controller.ts
 ├── simulator-modian.module.ts
 └── dto/
     ├── create-utility-bill.dto.ts
     ├── query-bills.dto.ts
     └── update-utility-bill.dto.ts

 ### حذف شده

 src/simulator-modian/simulator-modian.service.ts

 علت حذف:
 - مربوط به معماری MVP اولیه بود.
 - مسئولیت CRUD قبوض را برعهده داشت.
 - با معماری Multi-Tenant جدید هم‌راستا نبود.

 ### قرارداد جدید

 مسیر استاندارد قبوض:

 BillsController
        |
        v
 BillsService
        |
        v
 RequestContextService
        |
        v
 businessId + registrationId
        |
        v
 UtilityBill

 ### الزامات امنیتی

 - Client نباید businessId یا registrationId را به عنوان منبع حقیقت ارسال کند.
 - مالکیت رکوردها از JWT Context استخراج می‌شود.
 - عملیات Create/List/Update/Delete با Business Scope انجام می‌شود.

 ### Validation

 - ValidationPipe سراسری NestJS فعال شد.
 - DTO validation برای ورودی‌های API فعال است.

 ### وضعیت تست

 - npm run build: موفق
 - npm run start:dev: موفق
 - Create Bill: موفق
 - List Bill: موفق
 - Update Bill: موفق
 - Soft Delete: موفق

### 23.1) تغییرات ساختاری در مسیرها (app-tree)

- زیرمسیر جدید «قراردادها» در ماژول مودیان:
مسیرها:
src/app/simulators/modian/contracts/contracting/page.tsx
src/app/simulators/modian/contracts/contracting/new/page.tsx
src/app/simulators/modian/contracts/commission/page.tsx
توضیح نقش‌ها:
contracting/: لیست قراردادهای پیمانکاری + ویزارد ثبت قرارداد جدید.
commission/: لیست قراردادهای حق‌العملکاری.
- تکمیل ساختار old-Invoices:
مسیرهای موجود:
src/app/simulators/modian/old-Invoices/buy/page.tsx
src/app/simulators/modian/old-Invoices/buy/detail/page.tsx
src/app/simulators/modian/old-Invoices/sales/page.tsx
src/app/simulators/modian/old-Invoices/sales/detail/page.tsx
src/app/simulators/modian/old-Invoices/exports/page.tsx
src/app/simulators/modian/old-Invoices/exports/detail/page.tsx
این زیرشاخه به‌عنوان «گروه صورتحساب‌های قبل از ۱۴۰۲/۰۳/۲۶» در سایدبار و ساختار Routing مودیان در نظر گرفته می‌شود.
- زیرمنوی «اعلامیه‌های خرید»:
مسیرها:
src/app/simulators/modian/purchase-announcements/page.tsx
src/app/simulators/modian/purchase-announcements/imports/page.tsx
src/app/simulators/modian/purchase-announcements/bourse/page.tsx
این زیرشاخه به‌عنوان منوی جدید در سایدبار مودیان ثبت می‌شود و صفحات imports و bourse از Search Suite مشترک و جدول اسکرول‌دار مشترک استفاده می‌کنند.

### 23.2) به‌روزرسانی ساختار components (Barrelها و ماژول‌ها)

#### 23.2.1) لایهٔ modian/common

- ساختار جدید src/components/modian/common شامل موارد زیر است:
پوشهٔ search/ شامل:
InvoicesSearchHeader.tsx
SearchByFilters.tsx
SearchByTaxId.tsx
index.ts
کامپوننت‌ها و utilهای دامنه‌ای:
ModianJalaliDateField.tsx
memoryKey.utils.ts
useMemoryPublicKey.ts
- در سند، این لایه به‌عنوان «مودیان — Common Layer» توصیف می‌شود:
نقش: نگه‌داری کامپوننت‌ها و utilهای دامنه‌ای مشترک مودیان (JalaliDateField اختصاصی، Search Suite، Memory Key utilities، بلوک‌های جزئیات صورتحساب و …).
Barrel اصلی:
@/components/modian/common تنها نقطهٔ مجاز import این لایه از دید صفحات و سایر ماژول‌ها است.
 شامل فایل‌ها و پوشه‌های زیر (مطابق components-tree):
   - ModianJalaliDatePicker.tsx
   - SimulatorBadge.tsx
   - Tabs.tsx
   - ToolbarControls.tsx
   - UploadPublicKeyModal.tsx
   - memoryKey.utils.ts
   - useMemoryPublicKey.ts

#### 23.2.2) لایهٔ modian/ui

شامل فایل‌های دقیق مطابق components-tree:
   - Card.tsx
   - FieldGrid.tsx
   - FormField.tsx
   - FormToolbar.tsx
   - PageShell.tsx
   - Section.tsx
   - icons.tsx
   - index.ts (Barrel)
- در نسخه‌های اخیر، کامپوننت‌های UI خالص مودیان (مانند مدال‌هایی مثل UploadPublicKeyModal در صورت قرارگرفتن زیر این لایه) نیز باید فقط از Barrel همین مسیر export شوند.
- در سند تأکید می‌شود که:
تمام UIهای خالص و اتمیک مودیان فقط از @/components/modian/ui import می‌شوند.
import مستقیم از فایل‌های زیرمسیری (مثل @/components/modian/ui/icons) در صفحات ممنوع است و توسط ESLint (no-restricted-imports) کنترل می‌شود.

#### 23.2.3) لایهٔ modian/layout

- پوشهٔ src/components/modian/layout/ شامل:
ModianHeader.tsx
ModianFooter.tsx
ModianShell.tsx
ModianSubHeader.tsx
index.ts
- این لایه در سند به‌عنوان «شِل اختصاصی مودیان» تعریف می‌شود:
وظایف: رندر هدر، فوتر، سایدبار/ساب‌هدر و شِل اصلی محیط مودیان.
مصرف معمولاً در:
src/app/simulators/modian/layout.tsx
و زیرlayoutهای خاص مثل portal/, dashboard/ و … .

#### 23.2.4) Search Suite مودیان (ماژول مشترک)

- یک زیر‌بخش جدید «Shared Search Suite (صورتحساب‌ها، اعلامیه‌ها، قراردادها)» برای این لایه در نظر گرفته می‌شود:
محل فایل‌ها:
src/components/modian/common/search/InvoicesSearchHeader.tsx
src/components/modian/common/search/SearchByFilters.tsx
src/components/modian/common/search/SearchByTaxId.tsx
src/components/modian/common/search/index.ts
نقش:
فراهم‌کردن هدر جستجو و فرم فیلتر ساده/پیشرفته برای:
 - `invoices/*`
 - `old-Invoices/*`
 - `purchase-announcements/*`
 - `contracts/contracting/*` (و در آینده `contracts/commission/*`)

استاندارد مصرف:
صفحات فقط از Barrel @/components/modian/common یا در صورت نیاز @/components/modian/common/search استفاده کنند، نه از فایل منفرد.

#### 23.2.5) نمای خالی مشترک جدول‌ها

- کامپوننت مشترک نمای خالی جدول:
مسیر: src/components/modian/common/table/EmptyTableRow.tsx
این کامپوننت به‌عنوان «نمای خالی استاندارد جدول‌های مودیان» معرفی می‌شود و:
در صفحات اعلامیه‌های خرید و سایر جداول جدید مودیان استفاده می‌شود.
پیام/استایل ثابت دارد و فقط داده‌های جدول در سناریوهای مختلف تغییر می‌کند.

### 23.3) الگوی Client/Server برای صفحات مودیان (App Router)

- اصل کلی:
هر صفحه‌ای که از هوک‌های کلاینتی Next.js (مثل useSearchParams) استفاده می‌کند باید:
یا خودش با use client تعریف شود،
یا از الگوی «Server page + Client child» و <Suspense> پیروی کند.
- الگوی پیشنهادی (و اعمال‌شده در مودیان):
Server page (page.tsx):
حداقلی، بدون استفاده از هوک‌های کلاینتی.
رندر یک Client Component داخل <Suspense>.
Client page (مثل PageClient.tsx):
با use client در ابتدای فایل.
استفاده از useSearchParams, useRouter, state و … در این لایه.
- در سند اشاره می‌شود که این الگو برای صفحاتی مثل otp, portal, users-roles/add و چند صفحهٔ دیگر مودیان به‌کار رفته تا خطاهای
useSearchParams() و CSR bailout در بیلد رفع شود.

### 23.4) استاندارد Barrel-only برای مودیان و ESLint

- سیاست import در مودیان:
مسیرهای مجاز:
@/features/modian
@/features/modian/ui
@/features/modian/common
زیرBarrelهای رسمی مانند:
- `@/features/modian/declaration`
- `@/features/modian/home`
- `@/features/modian/portal`
- `@/features/modian/users-roles`
- و سایر indexهای ماژولار.

مسیرهای غیرمجاز:
import مستقیم از مسیر فایل داخلی (مثلاً @/components/modian/ui/icons,
 یا `@/components/modian/common/search/SearchByFilters` در صفحات) مگر داخل خود ماژول‌های سطح پایین.

- این سیاست توسط ESLint rule no-restricted-imports enforce می‌شود و باید در سند به‌صورت صریح ثبت شود.
- دربارهٔ import/order:
گروه‌بندی importها:
builtin → external → internal → parent → sibling → index
بین هر گروه یک خط خالی لازم است.
این قاعده برای یک‌دست‌شدن importهای صفحات مودیان (به‌خصوص صفحات جدید invoices, old-Invoices, purchase-announcements, contracts) اعمال شده و lint روی آن نظارت می‌کند.
-  وضعیت فعلی lint در main:
 - در حال حاضر `npm run lint:ci` روی برنچ `main` بدون خطا و بدون هیچ هشدار فعالی اجرا می‌شود.
 - این وضعیت به‌عنوان baseline رسمی پروژه ثبت می‌شود؛
   هر برنچ جدید (feature/chore/...) موظف است بدون اضافه‌کردن هشدار/خطای جدید به main ادغام شود.
 - در صورت لزوم، بسته‌های تمیزکاری بعدی فقط برای حفظ این baseline (و نه رسیدن به آن) استفاده می‌شوند.


### 23.5) وضعیت Search Suite و ریسک پیچیدگی

- در بخش مربوط به SearchByFilters و InvoicesSearchHeader، نکات زیر به‌روزرسانی می‌شود:
شاخه‌های شرطی برای سناریوهای مختلف اضافه شده‌اند:
صفحات نسل فعلی صورتحساب‌ها (invoices/*)
صفحات old-Invoices (old-Invoices/*)
صفحات اعلامیه‌های خرید (purchase-announcements/*)
صفحات قراردادها (contracts/contracting/* در حال حاضر)
ریسک:
کامپوننت SearchByFilters به‌دلیل شاخه‌های شرطی متعدد پیچیده شده و در refactorهای بعدی نیاز به تست‌های واحد/اسنپ‌شات دارد تا رگرسیون ایجاد نشود.
پیشنهاد:
در صورت افزایش سناریوها، جداسازی configها (مثلاً per-module config برای ستون‌ها و فیلدها) در یک «Config Registry» برای کیت UI بررسی شود.

### 23.6) چک‌لیست اضافه‌کردن صفحهٔ جدید در مودیان (به‌روزرسانی)

- پیش از ساخت صفحهٔ جدید:
مسیر درست زیر src/app/simulators/modian انتخاب شود:
مثل contracts/...، purchase-announcements/...، old-Invoices/... و غیره.
- هنگام پیاده‌سازی صفحه:
اگر صفحه کلاینتی است و از هوک استفاده می‌کند، الگوی «Server Wrapper + Client Component» رعایت شود.
برای کامپوننت‌های UI:
از @/components/modian/ui import شود.
برای اجزای دامنه‌ای مشترک:
از @/components/modian/common import شود.
اگر صفحه نیاز به Search Suite دارد:
فقط از InvoicesSearchHeader و SearchByFilters/SearchByTaxId (از Barrel) استفاده شود؛
 از کپی‌کردن فرم‌ها/فیلترهای جدید خودداری شود.

- پیش از تحویل برنچ:
اجرای npm run lint:ci و رفع همهٔ خطاها و هشدارهای مربوط به مسیر مودیان الزامی است.
در صورت اضافه‌شدن مسیر جدید:
اسکریپت ساختار (docs:scan) اجرا شود و بخش‌های APP_TREE و COMPONENTS_TREE در همین سند به‌روزرسانی شوند.

### 23.7) PR Gate / Definition of Done (قبل از Merge)

این چک‌لیست باید در توضیحات PR تیک بخورد و معیار merge امن است:

- [ ] **Sync مستندات ساختار با tree**: اگر route/component اضافه/حذف شد:
  - `npm run docs:scan` (تولید `app-tree.txt` و `components-tree.txt`)
  - `npm run docs:all` (تزریق خودکار در همین سند)
  - و اطمینان از آپدیت‌شدن بلوک‌های `APP_TREE` و `COMPONENTS_TREE` در همین فایل
- [ ] **Barrel-only برای Modian + منع import عمیق**:
  - import فقط از Barrelها: `@/components/modian`، `@/components/modian/ui`، `@/components/modian/common` (و زیرbarrelهای رسمی)
  - import مستقیم از فایل‌های داخلی زیر `modian/*` ممنوع (ESLint: `no-restricted-imports` + `import/order`)
- [ ] **Baseline رسمی lint روی main**:
  - `npm run lint:ci` باید بدون error/warning باشد
  - PR نباید warning/error جدید نسبت به baseline «صفر هشدار» روی `main` وارد کند
- [ ] **الگوی Next App Router برای Client/Server + Suspense**:
  - اگر صفحه/کامپوننت کلاینت از هوک‌هایی مثل `useSearchParams` استفاده می‌کند، باید با الگوی
    «Server Wrapper + Client Component» و `<Suspense>` در لایهٔ سروری پوشش داده شود (برای جلوگیری از `CSR bailout` / `missing-suspense-with-csr-bailout`)

---

## 24) گزارش وضعیت تیم مودیان — ۱۴۰۴/۱۰/۰۶ (تکمیل منوی قراردادها)

بر اساس فایل `team2-status-report-14041006.txt` و ادامهٔ گزارش‌های تکمیلی قراردادها. fileciteturn12file2turn12file0

### 24.1) مسیرها و صفحات درگیر (Contracts)

- تکمیل منوی قراردادها و اصلاح مسیر/Flow «ثبت قرارداد جدید» در قراردادهای حق‌العملکاری. fileciteturn12file2
- مسیرهای اصلی که در این دوره درگیر بوده‌اند: fileciteturn12file0
  - `src/app/simulators/modian/contracts/commission/page.tsx`
  - `src/app/simulators/modian/contracts/commission/new/page.tsx`
  - `src/app/simulators/modian/contracts/contracting/page.tsx`
  - `src/app/simulators/modian/contracts/contracting/new/page.tsx`

> یادداشت: Snapshotهای APP_TREE/COMPONENTS_TREE که از `app-tree.txt` و `components-tree.txt` تولید شده‌اند،
ممکن است هنوز مسیر `contracts/commission/new` را نشان ندهند؛ در اولین بروزرسانی treeها باید بازتولید شوند. fileciteturn12file0

### 24.2) Barrelها و سیاست Import (common/search + common/table)

- در راستای سیاست «عدم ایمپورت مستقیم از فایل‌های داخلی زیر `modian/*`»، تیم مودیان موارد زیر را اضافه/به‌روزرسانی کرد: fileciteturn12file0turn12file2
  - `src/components/modian/common/search/index.ts` (Update)
  - `src/components/modian/common/table/index.ts` (New)

- نکتهٔ lint: گزارش شده که Rule فعلی `no-restricted-imports` حتی روی Barrelهای تازه‌اضافه‌شده هم Warning می‌دهد؛
  پیشنهاد تیم: اصلاح مرکزی Rule (Allowlist کردن Barrelها) و استفادهٔ موقت از `eslint-disable-next-line` فقط برای unblock تحویل. fileciteturn12file0turn12file13

### 24.3) کیت UI مودیان — کامپوننت‌های مصرف‌شده/درگیر در قراردادها

- `Stepper`
- `SearchByFilters`
- `ContractsContractDateField`
- `ContractsContractTypeField`
- `ColumnsVisibilityBar`
- `ScrollableTableShell`
- `EmptyTableRow` fileciteturn12file0


## 25) گزارش وضعیت تیم مودیان — ۱۴۰۴/۱۰/۱۷ (Requests + Tax Bills UI Flow)

بر اساس فایل `team2-status-report-14041017.txt`.

### 25.1) دامنه تغییرات (در سطح ساختار/مسیرها)

- گزارش این دوره مربوط به **UI/Flow** در مسیرهای مودیان بوده است (نه افزودن endpoint بک‌اند).
- مسیرهای مرتبط در اسنپ‌شات `app-tree.txt` قابل مشاهده‌اند و باید در استانداردسازی Route Ownership
  به‌عنوان زیرشاخه‌های رسمی مودیان حفظ شوند:
  - `src/app/simulators/modian/requests/increase-sales-limit/page.tsx`
  - `src/app/simulators/modian/requests/auto-reject-referred-invoices/page.tsx`
  - `src/app/simulators/modian/requests/defer-invoice-tax-effect/page.tsx`
  - `src/app/simulators/modian/tax-bills/page.tsx`

### 25.2) استانداردهای ساختاری تثبیت‌شده از گزارش

- منوی کشویی «درخواست‌ها» باید رفتار **toggle-only** داشته باشد و از redirect خودکار به اولین زیرمنو پرهیز شود
  (استاندارد UX/Navigation برای جلوگیری از coupling ناخواسته منو ↔ route).
- Flowهای چندمرحله‌ای (مودال‌های پشت‌سرهم) باید در همان route دامنه‌ای نگه داشته شوند و از پراکندگی state
  بین مسیرهای نامرتبط جلوگیری شود.
- اعتبارسنجی‌های دامنه‌ای در حال تکمیل (مثل «شناسه صیاد = 16 رقم») باید تا زمان نهایی‌شدن، به‌وضوح با وضعیت WIP
  در گزارش/PR ثبت شوند تا با «قرارداد نهایی» اشتباه نشوند.

### 25.3) کنترل انحراف تیم‌ها (Project Governance)

- هر تغییر UI در شاخه `requests/*` یا `tax-bills` که منجر به افزودن/حذف route شود، الزاماً باید با بازتولید
  `app-tree.txt` و همگام‌سازی همین سند همراه باشد (`docs:scan` / `docs:all`).
- گزارش این دوره حاوی تحویل UI/Flow است؛ بنابراین **بدون مستند endpoint جداگانه** نباید به‌عنوان API-ready تفسیر شود.

---

## 26) گزارش وضعیت تیم مودیان — ۱۴۰۴/۱۲/۰۶ (زیرساخت Multi-tenant در بک‌اند)

بر اساس فایل‌های `team2-status-report-14041206.txt` و `team2-status2-report-14041206.txt`.

### 26.1) تغییرات ساختاری ثبت‌شده در بک‌اند (Infrastructure Layer)

- لایهٔ context در مسیر `src/common/context/` برای نگهداری `businessId` به‌صورت request-scoped مستقر شده است:
  - `business-context.middleware.ts`
  - `business-context.module.ts`
  - `business-context.service.ts`
- لایهٔ Prisma نیز دارای اجزای مرتبط با isolation است:
  - `src/prisma/businessIsolation.extension.ts`
  - `src/prisma/prisma.middleware.ts`

### 26.2) استانداردهای ساختاری/امنیتی (الزامی)

- `businessId` باید فقط از JWT وارد Context شود؛ دریافت آن از body/query/request به‌عنوان منبع حقیقت ممنوع است.
- اتصال middleware/context برای هر request محافظت‌شده باید جزء الزامات بازبینی ساختاری باشد
  (در غیر این صورت `getBusinessId()` ممکن است `undefined` برگرداند).
- در تست‌ها/دموهای endpointهای محافظت‌شده، نوع توکن (access vs refresh) باید صریحاً کنترل شود؛
  این مورد اکنون یک ریسک ساختاری-عملیاتی ثبت‌شده است.

### 26.3) اثر روی فرآیند استانداردسازی پروژه (برای مدیر پروژه)

- تغییرات Multi-tenant فاز اول «زیرساختی» هستند؛ بنابراین تیم‌ها مجاز نیستند تفسیر دامنه‌ای/محصولی مستقل
  (مثلاً انتخاب business فعال) را قبل از تصمیم رسمی پروژه در کد ثابت کنند.
- تصمیم دربارهٔ استراتژی `active business` باید به‌صورت مرکزی تصویب و سپس در مستندات endpoint/structure
  به‌روزرسانی شود.

### 26.4) Update (2026-02-27) — وضعیت فعلی شاخه‌ها و آماده‌سازی DB
- پس از تثبیت `businessId` و سبز شدن build روی `main`، برنچ‌های اضافی حذف و فقط موارد زیر نگه داشته شدند:
  - `main`
  - `feature/backend-db-integration-prep`
- هدف برنچ DB integration prep:
  - آماده‌سازی فایل‌ها/ماژول‌ها برای اتصال کامل به DB و حذف hardcodeهای موقت (مثلاً registrationId پیش‌فرض)
  - تثبیت جریان Context → Service → Prisma در تمام سرویس‌های محافظت‌شده

### 26.5) Update (1405-03-13) — بهبود متد findBusinessesByUserId
تغییرات اعمال‌شده در `src/business/business.service.ts`:
- متد `findBusinessesByUserId` بروزرسانی شد تا فیلدهای `economicCode` و `trackingCode` را نیز بازگرداند.
- منطق جدید برای پر کردن این فیلدها:
  1. اولویت با جدول `BusinessRegistration` (اگر ثبت‌نام تکمیل شده باشد).
  2. fallback به جدول `Business` (اگر ثبت‌نام تکمیل نشده باشد).

### 26.6) Update (2026-07-20) — Business Ownership و Onboarding اتمیک

#### Backend

- `src/auth/auth.service.ts`
  - Signup فقط User ایجاد می‌کند.
  - Signin/Refresh برای User بدون Business معتبر است و `businessId` می‌تواند `null` باشد.
- `src/business/business.controller.ts`
  - `POST /businesses/create` بدنه `RegistrationStep1Dto` می‌گیرد.
  - پس از ایجاد موفق، `access_token` تازه با Business جدید صادر می‌شود.
- `src/business/business.service.ts`
  - ایجاد `Business`, `UserBusiness`, `TaxFile`, `BusinessContact` و `BusinessRegistration` در یک Prisma Transaction انجام می‌شود.
- `src/business/dto/onboarding-step1.dto.ts`
  - فیلدهای اصلی non-empty، `Contact` تعریف‌شده و nested، و `workshopCode` اختیاری است.
- Migration جدید Prisma در این فاز ایجاد نشد.

#### Frontend

- `src/app/api/business/create/route.ts`
  - Body و Cookie را به Backend فوروارد و `Set-Cookie` پاسخ را منتقل می‌کند.
- `src/app/business/onboarding/page.tsx`
  - فقط یک Submit به `/api/business/create` دارد.
  - Manual و Auto-fill از یک فرم و endpoint مشترک استفاده می‌کنند.
- `src/components/business/onboarding/OnboardingChoiceModal.tsx`
  - انتخاب «تکمیل خودکار با قالب آموزشی منجی» یا «تکمیل دستی فرم».
- `src/components/business/onboarding/StepRegistration.tsx`
  - فرم مشترک و قابل ویرایش هر دو روش.
- `src/lib/validation/onboarding.schema.ts`
  - Schema مشترک؛ `workshopCode` اختیاری.
- `src/app/business/onboarding/step-1/page.tsx`
  - مسیر قدیمی را به `/business/onboarding` Redirect می‌کند.

#### وضعیت تست و Git

- Backend Build/Runtime: موفق
- Frontend Build/Runtime: موفق
- User A — Manual E2E: موفق
- User B — Auto-fill E2E و ویرایش Template: موفق
- Isolation بین Businessهای User A و User B: موفق
- Frontend Commit: `89083b9 feat: add editable auto-fill onboarding template`
- Frontend Branch: `feature/modian-component-structure-refactor`
- Backend Branch: `migration/backend-architecture-v2`
- تست‌های باقی‌مانده: Rollback عمدی Transaction، Double Submit، Missing/Invalid Cookie و Business دوم برای FREE
- Routeهای `/api/business/onboarding/step-1` و `/api/business/switch` تا پایان این تست‌ها Legacy باقی می‌مانند.

## Checkpoint: Stable Main Baseline After Business Creation Eligibility

Date: 1405-04-30

### Repository Synchronization Status

Frontend:

- Branch: main
- Latest Commit:
  - dbb731e chore: remove unused dashboard import
- Status:
  - Merged from feature/business-create-eligibility
  - TypeScript check passed
  - Production build passed
  - Runtime E2E test passed

Backend:

- Branch: main
- Latest Commit:
  - 31ffb2f feat: add business creation eligibility endpoint
- Status:
  - Merged from migration/backend-architecture-v2
  - Backend build passed
  - Runtime E2E test passed

---

### Implemented Capability: Business Creation Eligibility

The platform now performs an eligibility check before starting business creation flow.

Flow:

Dashboard
    ↓
Frontend Eligibility Hook
    ↓
Next.js API Proxy
    ↓
Backend /businesses/create-eligibility
    ↓
BusinessService Eligibility Check
    ↓
UserBusiness ownership validation

---

### Supported Scenarios

1. User with existing business:

- FREE user with existing UserBusiness association receives:
  - allowed=false
  - reason=FREE_BUSINESS_LIMIT_REACHED

2. User without business:

- User can continue to onboarding flow.

---

### Environment Note

Frontend runtime requires:

NEXT_PUBLIC_BACKEND_URL

Example:

NEXT_PUBLIC_BACKEND_URL=http://localhost:3001

This variable is required by:

src/app/api/business/create-eligibility/route.ts

---

### Baseline Status

Frontend main and Backend main are now synchronized and represent the current stable development baseline.

---






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
│  ├─ csrf/
│  │  └─ route.ts
│  ├─ simulators/
│  │  └─ insurance/
│  │     └─ calculate/
│  │        └─ route.ts
│  ├─ telemetry/
│  │  └─ route.ts
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
├─ privacy/
│  └─ page.tsx
├─ profile/
│  └─ page.tsx
├─ business/
│  └─ onboarding/
│     ├─ page.tsx
│     ├─ step-1/
│     │  └─ page.tsx
│     ├─ step-2/
│     │  └─ page.tsx
│     └─ step/
│        └─ 1/
│           └─ route.ts
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
│  │  ├─ declaration/
│  │  │  ├─ page.tsx
│  │  │  ├─ statement.tsx
│  │  │  └─ summary.tsx
│  │  ├─ home/
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ invoices/
│  │  │  ├─ buy/
│  │  │  │  └─ page.tsx
│  │  │  ├─ exports/
│  │  │  │  └─ page.tsx
│  │  │  ├─ files/
│  │  │  │  └─ page.tsx
│  │  │  ├─ sales/
│  │  │  │  └─ page.tsx
│  │  │  └─ layout.tsx
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
├─ terms/
│  └─ page.tsx
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
│  ├─ date/
│  │  └─ JalaliDateField.tsx
│  ├─ help/
│  │  ├─ HelpModal.tsx
│  │  └─ HelpTrigger.tsx
│  ├─ Captcha.tsx
│  ├─ FaDigits.tsx
│  ├─ HelpGuideButton.tsx
│  └─ InputField.tsx
├─ insurance/
│  ├─ InputGroup.tsx
│  ├─ InsuranceResultBox.tsx
│  ├─ InsuranceSingleForm.tsx
│  └─ tax-result.interface.ts
├─ landing/
│  ├─ analytics.ts
│  ├─ ArticlePreview.tsx
│  ├─ ComparisonTable.tsx
│  ├─ DemoCard.tsx
│  ├─ FeatureCard.tsx
│  ├─ HeroSection.tsx
│  ├─ HowItWorks.tsx
│  ├─ LandingFooter.tsx
│  ├─ MiniAnchorNav.tsx
│  ├─ perf-metrics.ts
│  ├─ SocialProof.tsx
│  └─ TrustStrip.tsx
├─ layout/
├─ modian/
│  ├─ admin/
│  │  ├─ dashboard/
│  │  │  └─ AdminDashboardHelpContent.tsx
│  │  └─ index.ts
│  ├─ auth/
│  │  ├─ index.ts
│  │  ├─ ModianLoginForm.tsx
│  │  └─ ModianOtpForm.tsx
│  ├─ common/
│  │  ├─ search/
│  │  │  ├─ index.ts
│  │  │  ├─ InvoicesSearchHeader.tsx
│  │  │  ├─ SearchByFilters.tsx
│  │  │  └─ SearchByTaxId.tsx
│  │  ├─ index.ts
│  │  ├─ memoryKey.utils.ts
│  │  ├─ ModianJalaliDateField.tsx
│  │  ├─ ModianJalaliDatePicker.tsx
│  │  ├─ SimulatorBadge.tsx
│  │  ├─ Tabs.tsx
│  │  ├─ ToolbarControls.tsx
│  │  ├─ UploadPublicKeyModal.tsx
│  │  └─ useMemoryPublicKey.ts
│  ├─ declaration/
│  │  ├─ DeclarationHelpContent.tsx
│  │  └─ index.ts
│  ├─ home/
│  │  ├─ HomeHelpContent.tsx
│  │  └─ index.ts
│  ├─ layout/
│  │  ├─ index.ts
│  │  ├─ ModianFooter.tsx
│  │  ├─ ModianHeader.tsx
│  │  ├─ ModianShell.tsx
│  │  └─ ModianSubHeader.tsx
│  ├─ otp/
│  │  └─ page.tsx
│  ├─ portal/
│  │  ├─ index.ts
│  │  └─ PortalHelpContent.tsx
│  ├─ roles/
│  │  └─ index.ts
│  ├─ taxfile/
│  │  ├─ bank-accounts/
│  │  │  ├─ BankAccountsHelpContent.tsx
│  │  │  └─ page.tsx
│  │  ├─ bills/
│  │  │  ├─ BillsHelpContent.tsx
│  │  │  └─ page.tsx
│  │  ├─ memory-uid/
│  │  │  ├─ add/
│  │  │  │  └─ page.tsx
│  │  │  ├─ details/
│  │  │  │  └─ page.tsx
│  │  │  ├─ edit/
│  │  │  │  └─ page.tsx
│  │  │  ├─ MemoryUidHelpContent.tsx
│  │  │  └─ page.tsx
│  │  ├─ payments/
│  │  │  └─ page.tsx
│  │  ├─ pos-uid/
│  │  │  └─ page.tsx
│  │  ├─ registration-information/
│  │  │  ├─ page.tsx
│  │  │  └─ types.ts
│  │  ├─ trusted-companies/
│  │  │  ├─ page.tsx
│  │  │  └─ TrustedHelpContent.tsx
│  │  ├─ index.ts
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ TaxfileSubmenu.tsx
│  ├─ ui/
│  │  ├─ Card.tsx
│  │  ├─ FieldGrid.tsx
│  │  ├─ FormField.tsx
│  │  ├─ FormToolbar.tsx
│  │  ├─ icons.tsx
│  │  ├─ index.ts
│  │  ├─ PageShell.tsx
│  │  └─ Section.tsx
│  ├─ users-roles/
│  │  ├─ index.ts
│  │  └─ UsersRolesHelpContent.tsx
│  ├─ workspace/
│  │  └─ index.ts
│  ├─ faq-data.ts
│  ├─ index.ts
│  ├─ karpooshe-code-search.tsx
│  ├─ menu-items.ts
│  ├─ ModianFaqTab.tsx
│  ├─ ModianHome.tsx
│  ├─ ModianNoticesTabs.tsx
│  ├─ ModianPortal.tsx
│  ├─ ModianQuickAccess.tsx
│  ├─ ModianSidebar.tsx
│  └─ ModianWorkspace.tsx
│  ├─ ui/
│  │  ├─ date/
│  │  │  └─ ModianJalaliDatePicker.tsx
│  │  ├─ Card.tsx
│  │  ├─ FieldGrid.tsx
│  │  ├─ FormField.tsx
│  │  ├─ FormToolbar.tsx
│  │  ├─ icons.tsx
│  │  ├─ index.ts
│  │  ├─ PageShell.tsx
│  │  ├─ Section.tsx
│  │  ├─ SimulatorBadge.tsx
│  │  ├─ Tabs.tsx
│  │  ├─ ToolbarControls.tsx
│  │  └─ UploadPublicKeyModal.tsx
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
