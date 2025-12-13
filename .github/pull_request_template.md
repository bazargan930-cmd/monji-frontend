## PR Gate / Definition of Done (قبل از Merge)

- [ ] **Sync ساختار با tree** (در صورت تغییر در `src/app` یا `src/components`):
  - `npm run docs:scan`
  - `npm run docs:all`
  - و اطمینان از آپدیت‌شدن: `app-tree.txt` + `components-tree.txt` + `docs-project-structure.updated.md`
- [ ] **Barrel-only برای Modian + منع import عمیق**
  - import فقط از Barrelها: `@/components/modian`، `@/components/modian/ui`، `@/components/modian/common` (و Barrelهای رسمی)
  - import مستقیم از فایل‌های داخلی `modian/*` ممنوع (ESLint: `no-restricted-imports` + `import/order`)
- [ ] **CI (Baseline صفر هشدار روی main)**
  - `npm run lint:ci` باید بدون error/warning باشد
  - `npm run typecheck` باید سبز باشد
  - `npm run build` باید سبز باشد
- [ ] **الگوی Next App Router برای Client/Server + Suspense**
  - اگر صفحه/کامپوننت کلاینت از هوک‌هایی مثل `useSearchParams` استفاده می‌کند، باید با الگوی
    «Server Wrapper + Client Component» و `<Suspense>` در لایهٔ سروری پوشش داده شود

## Security Gate (تغییرات حساس)

- [ ] اگر چیزی زیر `src/app/api/**` تغییر کرده:
  - [ ] یک Reviewer از تیم/نقش Security/Structure روی PR اضافه شده
  - [ ] تغییرات API فرانت توضیح داده شده (Endpoint، ورودی/خروجی، لاگ/telemetry، ریسک‌ها)

## خلاصه تغییرات
- ...

## ریسک‌ها / نکات امنیتی
- ...

