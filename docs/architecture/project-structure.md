# ظ…ط³طھظ†ط¯ آ«ط³ط§ط®طھط§ط± ظ¾ط±ظˆعکظ‡آ» (ghaaanoon â€“ ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ)


> ط§غŒظ† ظپط§غŒظ„ ط­ط§طµظ„ ط¬ظ…ط¹â€Œط¨ظ†ط¯غŒ ظ‡ظ…غŒظ† ع¯ظپطھع¯ظˆ ظˆ **طھظ†ظ‡ط§** ظ…ط¨طھظ†غŒ ط¨ط± ظپط§غŒظ„â€Œظ‡ط§ ظˆ ط®ط±ظˆط¬غŒâ€Œظ‡ط§غŒ ط§ط±ط³ط§ظ„â€Œط´ط¯ظ‡ ط¯ط± ط¨ط®ط´ *project* ط§ط³طھ. ظ‡ط¯ظپ: ط´ظپط§ظپغŒطھ ط³ط§ط®طھط§ط±طŒ ط§ط³طھط§ظ†ط¯ط§ط±ط¯ط³ط§ط²غŒ ظ…ط³غŒط±ظ‡ط§طŒ ظˆ ط­ط°ظپ ط®ط·ط§ظ‡ط§غŒ طھع©ط±ط§ط±غŒ ط¯ط± ط¨غŒظ„ط¯/ظ„غŒظ†طھ.


---

## 1) ظ†ظ…ط§غŒ ع©ظ„غŒ ط±غŒظ¾ظˆظ‡ط§ ظˆ ظ†ط³ط®ظ‡â€Œظ‡ط§

- **Frontend:** `ghaaanoon-frontend` â€” Next.js (App Router), TypeScript, TailwindCSS.
  - **Next.js:** `15.3.1` (ط·ط¨ظ‚ ط®ط±ظˆط¬غŒ `npm run build`)
  - **React:** `^19.0.0` (ط·ط¨ظ‚ `package.json`)
  - **TypeScript:** `^5.9.2` (ط·ط¨ظ‚ `package.json`)
  - **TailwindCSS:** `^3.4.17` (ط·ط¨ظ‚ `package.json`)
  - **ESLint:** `^9` + `eslint-config-next@15.3.1` (ط·ط¨ظ‚ `package.json`)
- **Backend:** `ghaaanoon-backend` â€” (ظپط§غŒظ„ `tsconfig.json` ط§ط±ط³ط§ظ„ ط´ط¯ظ‡ ط§ط³طھط› ظ…ط³غŒط± `src/app/` ط¯ط± ط¨ع©â€Œط§ظ†ط¯ ظˆط¬ظˆط¯ ظ†ط¯ط§ط±ط¯.)

### 1.2) Update (2026-02-27) â€” ظˆط¶ط¹غŒطھ ظ…ط±ط¬â€Œظ‡ط§طŒ ط¨ط±ظ†ع†â€Œظ‡ط§ ظˆ ط¢ظ…ط§ط¯ظ‡â€Œط³ط§ط²غŒ DB

- **Frontend (Modian):**
  - ظ…ط±ط¬ آ«backend integration + ط§ظ†طھظ‚ط§ظ„ ط³ط§ط®طھط§ط± Modian ط¨ظ‡ featuresآ» ط¨ظ‡ `main` ط§ظ†ط¬ط§ظ… ط´ط¯ظ‡ ظˆ baseline ع©غŒظپغŒطھ ط±ظˆغŒ `main` ط³ط¨ط² ط§ط³طھ (lint/build).
  - ط³غŒط§ط³طھ Import ط¨ط±ط§غŒ ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ† **Barrel-only** ط¨ط§ظ‚غŒ ظ…غŒâ€Œظ…ط§ظ†ط¯ط› ط§ظ…ط§ ظ…ط³غŒط± ظ…ط±ط¬ط¹ ط¨ط±ط§غŒ ط¹ظ†ط§طµط± ظ…ظˆط¯غŒط§ظ† ط§ط² `src/components/modian/*`
    ط¨ظ‡ `src/features/modian/*` ظ…ظ†طھظ‚ظ„ ط´ط¯ظ‡ ط§ط³طھ ظˆ Wrapperظ‡ط§غŒ `src/app/simulators/modian/**` ظپظ‚ط· ط®ط±ظˆط¬غŒâ€Œظ‡ط§غŒ Barrel ط±ط§ ظ…طµط±ظپ ظ…غŒâ€Œع©ظ†ظ†ط¯.
- **Backend:**
  - ظپط§ط² ط²غŒط±ط³ط§ط®طھ Multi-tenant ظˆ ط§ظ„ط²ط§ظ… `businessId` ط¯ط± ظ…ط¯ظ„â€Œظ‡ط§ طھط«ط¨غŒطھ ط´ط¯ظ‡ ط§ط³طھ.
  - غŒع© ظپغŒع©ط³ ط¹ظ…ظ„غŒط§طھغŒ ط¨ظ‡ `main` ط§ط¶ط§ظپظ‡ ط´ط¯: ظ‡ظ†ع¯ط§ظ… ط§غŒط¬ط§ط¯ UtilityBillطŒ ظ…ظ‚ط¯ط§ط± `businessId` (ط§ط² ط·ط±غŒظ‚ ط±غŒط´ظ‡â€ŒغŒ ط¯ط§ط¯ظ‡ ظ…ط¹طھط¨ط±) ط³طھ ظ…غŒâ€Œط´ظˆط¯ طھط§ build ط³ط¨ط² ط¨ظ…ط§ظ†ط¯.
  - ط¨ط±ظ†ع† ع©ط§ط±غŒ ط¬ط¯غŒط¯ ط¨ط±ط§غŒ ط¢ظ…ط§ط¯ظ‡â€Œط³ط§ط²غŒ ط§طھطµط§ظ„ DB ط§غŒط¬ط§ط¯ ط´ط¯: `feature/backend-db-integration-prep`.
  - ظ¾ط§ع©ط³ط§ط²غŒ ط¨ط±ظ†ع†â€Œظ‡ط§: ط¯ط± ط±غŒظ…ظˆطھ ظˆ ظ„ظˆع©ط§ظ„ ظپظ‚ط· `main` ظˆ ط¨ط±ظ†ع† ع©ط§ط±غŒ ط¬ط¯غŒط¯ ظ†ع¯ظ‡ ط¯ط§ط´طھظ‡ ظ…غŒâ€Œط´ظˆظ†ط¯ (ط³غŒط§ط³طھ Hygiene).
> ظ†ع©طھظ‡: ظ‡ط´ط¯ط§ط± طھع©ط±ط§ط±غŒ ط¨غŒظ„ط¯
> ```
> ESLint: Failed to patch ESLint because the calling module was not recognized ...
> ```
> ظ…ط·ط§ط¨ظ‚ ظ„ط§ع¯â€Œظ‡ط§غŒ ط¨غŒظ„ط¯ ظ…ط´ط§ظ‡ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯ ظˆ **ظ…ط§ظ†ط¹ ط¨غŒظ„ط¯ ظ†غŒط³طھ**.

### 1.1) ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ط®ظˆط¯ع©ط§ط± آ«ط³ط§ط®طھط§ط± ظ¾ط±ظˆعکظ‡آ»
ط¨ط±ط§غŒ ظ‡ظ…â€Œط±ط§ط³طھط§ ظ†ع¯ظ‡â€Œط¯ط§ط´طھظ† ط§غŒظ† ط³ظ†ط¯ ط¨ط§ ط³ط§ط®طھط§ط± ظˆط§ظ‚ط¹غŒ ط³ظˆط±ط³طŒ ط§ط² ط§ط³ع©ط±غŒظ¾طھâ€Œظ‡ط§غŒ ط²غŒط± ط§ط³طھظپط§ط¯ظ‡ ع©ظ†:
```bash
# طھظˆظ„غŒط¯ ط§ط³ظ†ظ¾â€Œط´ط§طھ ظ…ط³غŒط±ظ‡ط§
npm run docs:scan      # â†’ app-tree.txt + components-tree.txt

# طھط²ط±غŒظ‚ ط®ظˆط¯ع©ط§ط± ط¯ط± ظ‡ظ…غŒظ† ط³ظ†ط¯ (DOCS)
npm run docs:all       # docs:scan + docs:update-structure
```
> ط§غŒظ† ط§ط³ع©ط±غŒظ¾طھâ€Œظ‡ط§ ط¯ط± `package.json` طھط¹ط±غŒظپ ط´ط¯ظ‡â€Œط§ظ†ط¯ ظˆ ظ…ط­طھظˆط§ ط±ط§ ط¨غŒظ† ط¨ظ„ظˆع©â€Œظ‡ط§غŒ

 ## APP_TREE
 <!-- BEGIN:APP_TREE -->
 src/app
 â”œâ”€â”€ head.tsx
 â”œâ”€â”€ layout.tsx
 â”œâ”€â”€ page.tsx
 â”œâ”€â”€ admin/
 â”‚   â””â”€â”€ notices/
 â”‚       â”‚   page.tsx
 â”‚       â”œâ”€â”€ new/
 â”‚       â”‚       page.tsx
 â”‚       â””â”€â”€ [id]/
 â”‚           â””â”€â”€ edit/
 â”‚                   page.tsx
 â”œâ”€â”€ api/
 â”‚   â”œâ”€ auth/
 â”‚   â”‚  â””â”€ logout/
â”‚   â”‚     â””â”€ route.ts
â”‚   â”œâ”€ business/
â”‚   â”‚  â”œâ”€ create/
â”‚   â”‚  â”‚  â””â”€ route.ts
â”‚   â”‚  â”œâ”€ onboarding/
â”‚   â”‚  â”‚  â””â”€ step-1/
â”‚   â”‚  â”‚     â””â”€ route.ts
â”‚   â”‚  â””â”€ switch/
 â”‚   â”‚     â””â”€ route.ts
 â”‚   â”œâ”€â”€ csrf/
 â”‚   â”‚       route.ts
 â”‚   â”œâ”€â”€ simulators/
 â”‚   â”‚   â””â”€â”€ insurance/
 â”‚   â”‚       â””â”€â”€ calculate/
 â”‚   â”‚               route.ts
 â”‚   â”œâ”€â”€ telemetry/
 â”‚   â”‚       route.ts
 â”‚   â””â”€â”€ utils/
 â”‚       â”œâ”€â”€ today/
 â”‚       â”‚       route.ts
 â”‚       â””â”€â”€ user-info/
 â”‚               route.ts
 â”œâ”€â”€ auth/
 â”‚   â”œâ”€â”€ signin/
 â”‚   â”‚       page.tsx
 â”‚   â””â”€â”€ signup/
 â”‚           page.tsx
 â”œâ”€â”€ auth-debug/
 â”‚       page.tsx
 â”œâ”€â”€ business/
 â”‚   â”‚   â”œâ”€â”€ step-1/
 â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â””â”€â”€ step-2/
 â”‚   â”‚           page.tsx
 â”‚   â””â”€â”€ registration-status/
 â”‚           route.ts
 â”œâ”€â”€ dashboard/
 â”‚       layout.tsx
 â”‚       page.tsx
 â”‚       Topbar.client.tsx
 â”œâ”€â”€ privacy/
 â”‚       page.tsx
 â”œâ”€â”€ profile/
 â”‚       page.tsx
 â”œâ”€â”€ simulators/
 â”‚   â”œâ”€â”€ insurance/
 â”‚   â”‚   â”œâ”€â”€ free/
 â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â””â”€â”€ single/
 â”‚   â”‚           page.tsx
 â”‚   â”œâ”€â”€ karpooshe/
 â”‚   â”‚   â””â”€â”€ login/
 â”‚   â”‚           page.tsx
 â”‚   â”œâ”€â”€ modian/
 â”‚   â”‚   â”‚   layout.tsx
 â”‚   â”‚   â”œâ”€â”€ contracts/
 â”‚   â”‚   â”‚   â”œâ”€â”€ commission/
 â”‚   â”‚   â”‚   â”‚   â”‚   page.tsx
 â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ detail/
 â”‚   â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”‚   â””â”€â”€ new/
 â”‚   â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â”‚   â””â”€â”€ contracting/
 â”‚   â”‚   â”‚       â”‚   page.tsx
 â”‚   â”‚   â”‚       â”œâ”€â”€ detail/
 â”‚   â”‚   â”‚       â”‚       page.tsx
 â”‚   â”‚   â”‚       â””â”€â”€ new/
 â”‚   â”‚   â”‚               page.tsx
 â”‚   â”‚   â”œâ”€â”€ dashboard/
 â”‚   â”‚   â”‚       layout.tsx
 â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”œâ”€â”€ declaration/
 â”‚   â”‚   â”‚   â”‚   page.tsx
 â”‚   â”‚   â”‚   â”‚   statement.tsx
 â”‚   â”‚   â”‚   â”‚   summary.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ complete/
 â”‚   â”‚   â”‚   â”‚   â”‚   page.tsx
 â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ calculation/
 â”‚   â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ credit/
 â”‚   â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ final/
 â”‚   â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ purchase/
 â”‚   â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”‚   â””â”€â”€ sale/
 â”‚   â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ details/
 â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ feedback/
 â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ green-tax/
 â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â””â”€â”€ summary/
 â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â”œâ”€â”€ home/
 â”‚   â”‚   â”‚       layout.tsx
 â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”œâ”€â”€ invoices/
 â”‚   â”‚   â”‚   â”‚   layout.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ buy/
 â”‚   â”‚   â”‚   â”‚   â”‚   page.tsx
 â”‚   â”‚   â”‚   â”‚   â””â”€â”€ detail/
 â”‚   â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ exports/
 â”‚   â”‚   â”‚   â”‚   â”‚   page.tsx
 â”‚   â”‚   â”‚   â”‚   â””â”€â”€ detail/
 â”‚   â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ files/
 â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â””â”€â”€ sales/
 â”‚   â”‚   â”‚       â”‚   page.tsx
 â”‚   â”‚   â”‚       â””â”€â”€ detail/
 â”‚   â”‚   â”‚               page.tsx
 â”‚   â”‚   â”œâ”€â”€ login/
 â”‚   â”‚   â”‚       layout.tsx
 â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”œâ”€â”€ old-Invoices/
 â”‚   â”‚   â”‚   â”œâ”€â”€ buy/
 â”‚   â”‚   â”‚   â”‚   â”‚   page.tsx
 â”‚   â”‚   â”‚   â”‚   â”€â”€ detail/
 â”‚   â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ exports/
 â”‚   â”‚   â”‚   â”‚   â”‚   page.tsx
 â”‚   â”‚   â”‚   â”‚   â””â”€â”€ detail/
 â”‚   â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â”‚   â””â”€â”€ sales/
 â”‚   â”‚   â”‚       â”‚   page.tsx
 â”‚   â”‚   â”‚       â””â”€â”€ detail/
 â”‚   â”‚   â”‚               page.tsx
 â”‚   â”‚   â”œâ”€â”€ otp/
 â”‚   â”‚   â”‚       layout.tsx
 â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”œâ”€â”€ portal/
 â”‚   â”‚   â”‚       layout.tsx
 â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”œâ”€â”€ purchase-announcements/
 â”‚   â”‚   â”‚   â”‚   page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ bourse/
 â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â””â”€â”€ imports/
 â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â”œâ”€â”€ requests/
 â”‚   â”‚   â”‚   â”œâ”€â”€ auto-reject-referred-invoices/
 â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ defer-invoice-tax-effect/
 â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â””â”€â”€ increase-sales-limit/
 â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â”œâ”€â”€ roles/
 â”‚   â”‚   â”‚   â”‚   layout.tsx
 â”‚   â”‚   â”‚   â””â”€â”€ add/
 â”‚   â”‚   â”‚           layout.tsx
 â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â”œâ”€â”€ tax-bills/
 â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”œâ”€â”€ taxfile/
 â”‚   â”‚   â”‚   â”‚   layout.tsx
 â”‚   â”‚   â”‚   â”‚   page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ bank-accounts/
 â”‚   â”‚   â”‚   â”‚       layout.tsx
 â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ bills/
 â”‚   â”‚   â”‚   â”‚       layout.tsx
 â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ memory-uid/
 â”‚   â”‚   â”‚   â”‚   â”‚   layout.tsx
 â”‚   â”‚   â”‚   â”‚   â”‚   page.tsx
 â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ add/
 â”‚   â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”‚   â””â”€â”€ details/
 â”‚   â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ payments/
 â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ registration/
 â”‚   â”‚   â”‚   â”‚       layout.tsx
 â”‚   â”‚   â”‚   â”‚       page.tsx
 â”‚   â”‚   â”‚   â”œâ”€â”€ trusted/
 â”‚   â”‚   â”‚   â”‚   â”‚   layout.tsx
 â”‚   â”‚   â”‚   â”‚   â”‚   page.tsx
 â”‚   â”‚   â”‚   â”‚   â””â”€â”€ add/
 â”‚   â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â”‚   â””â”€â”€ trusted-companies/
 â”‚   â”‚   â”‚           page.tsx
 â”‚   â”‚   â””â”€â”€ users-roles/
 â”‚   â”‚       â”‚   layout.tsx
 â”‚   â”‚       â”‚   page.tsx
 â”‚   â”‚       â””â”€â”€ add/
 â”‚   â”‚               layout.tsx
 â”‚   â”‚               page.tsx
 â”‚   â””â”€â”€ salary-tax/
 â”‚       â”œâ”€â”€ batch/
 â”‚       â”‚       page.tsx
 â”‚       â”œâ”€â”€ dashboard/
 â”‚       â”‚       page.tsx
 â”‚       â”œâ”€â”€ free/
 â”‚       â”‚       page.tsx
 â”‚       â”œâ”€â”€ login/
 â”‚       â”‚       page.tsx
 â”‚       â””â”€â”€ pro/
 â”‚               page.tsx
 â””â”€â”€ terms/
         page.tsx
 <!-- END:APP_TREE -->

 ## COMPONENTS_TREE
    <!-- BEGIN:COMPONENTS_TREE -->
 src/components
 â”œâ”€â”€ Stepper.tsx
 â”œâ”€â”€ admin/
 â”‚       NoticeForm.tsx
 â”œâ”€â”€ auth/
 â”‚       ChangePasswordForm.tsx
 â”‚       LoginForm.tsx
 â”œâ”€ business/
 â”‚  â””â”€ onboarding/
 â”‚     â”œâ”€ AddBranchModal.tsx
 â”‚     â”œâ”€ OnboardingChoiceModal.tsx
 â”‚     â”œâ”€ Step2Tabs.tsx
 â”‚     â””â”€ StepRegistration.tsx
 â”œâ”€â”€ common/
 â”‚   â”‚   Captcha.tsx
 â”‚   â”‚   FaDigits.tsx
 â”‚   â”‚   HelpGuideButton.tsx
 â”‚   â”‚   InputField.tsx
 â”‚   â”œâ”€â”€ date/
 â”‚   â”‚       JalaliDateField.tsx
 â”‚   â””â”€â”€ help/
 â”‚           HelpModal.tsx
 â”‚           HelpTrigger.tsx
 â”œâ”€â”€ insurance/
 â”‚       InputGroup.tsx
 â”‚       InsuranceResultBox.tsx
 â”‚       InsuranceSingleForm.tsx
 â”‚       tax-result.interface.ts
 â”œâ”€â”€ landing/
 â”‚       analytics.ts
 â”‚       ArticlePreview.tsx
 â”‚       ComparisonTable.tsx
 â”‚       DemoCard.tsx
 â”‚       FeatureCard.tsx
 â”‚       HeroSection.tsx
 â”‚       HowItWorks.tsx
 â”‚       index.ts
 â”‚       LandingFooter.tsx
 â”‚       LandingShell.tsx
 â”‚       MiniAnchorNav.tsx
 â”‚       perf-metrics.ts
 â”‚       SocialProof.tsx
 â”‚       StickyPromoBar.tsx
 â”‚       TrustStrip.tsx
 â”œâ”€â”€ salary-tax/
 â”‚       page.tsx
 â”‚       SalaryTaxForm.tsx
 â”‚       SalaryTaxResult.tsx
 â”‚       SimulatorHeader.tsx
 â”œâ”€â”€ simulators/
 â”‚   â””â”€â”€ karpooshe/
 â”‚           KarpoosheLoginForm.tsx
 â””â”€â”€ ui/
         button.tsx
         card.tsx
         dialog.tsx
         input.tsx
         label.tsx
         SkeletonLoader.tsx
         table.tsx
         tabs.tsx

 src/features
 â””â”€â”€ modian/
     â”‚   faq-data.ts
     â”‚   index.ts
     â”‚   karpooshe-code-search.tsx
     â”‚   menu-items.ts
     â”‚   ModianFaqTab.tsx
     â”‚   ModianHome.tsx
     â”‚   ModianNoticesTabs.tsx
     â”‚   ModianPortal.tsx
     â”‚   ModianQuickAccess.tsx
     â”‚   ModianSidebar.tsx
     â”‚   ModianWorkspace.tsx
     â”œâ”€â”€ admin/
     â”‚   â”‚   index.ts
     â”‚   â””â”€â”€ dashboard/
     â”‚           AdminDashboardHelpContent.tsx
     â”œâ”€â”€ auth/
     â”‚       index.ts
     â”‚       ModianLoginForm.tsx
     â”‚       ModianOtpForm.tsx
     â”œâ”€â”€ common/
     â”‚   â”‚   index.ts
     â”‚   â”‚   InvoiceDetailSection.tsx
     â”‚   â”‚   memoryKey.utils.ts
     â”‚   â”‚   ModianJalaliDateField.tsx
     â”‚   â”‚   useMemoryPublicKey.ts
     â”‚   â”œâ”€â”€ date/
     â”‚   â”‚       jalali-utils.ts
     â”‚   â”œâ”€â”€ search/
     â”‚   â”‚       index.ts
     â”‚   â”‚       InvoicesSearchHeader.tsx
     â”‚   â”‚       SearchByFilters.tsx
     â”‚   â”‚       SearchByTaxId.tsx
     â”‚   â””â”€â”€ table/
     â”‚           ColumnsVisibilityBar.tsx
     â”‚           EmptyTableRow.tsx
     â”‚           index.ts
     â”‚           ScrollableTableShell.tsx
     â”œâ”€â”€ declaration/
     â”‚       DeclarationHelpContent.tsx
     â”‚       index.ts
     â”œâ”€â”€ home/
     â”‚       HomeHelpContent.tsx
     â”‚       index.ts
     â”œâ”€â”€ layout/
     â”‚       index.ts
     â”‚       ModianFooter.tsx
     â”‚       ModianHeader.tsx
     â”‚       ModianShell.tsx
     â”‚       ModianSubHeader.tsx
     â”œâ”€â”€ otp/
     â”‚       Otppage.tsx
     â”œâ”€â”€ portal/
     â”‚       index.ts
     â”‚       PortalHelpContent.tsx
     â”œâ”€â”€ roles/
     â”‚       index.ts
     â”œâ”€â”€ taxfile/
     â”‚   â”‚   index.ts
     â”‚   â”‚   TaxfileLayoutView.tsx
     â”‚   â”‚   TaxfilePageView.tsx
     â”‚   â”‚   TaxfileSubmenu.tsx
     â”‚   â”œâ”€â”€ bank-accounts/
     â”‚   â”‚       BankAccountsHelpContent.tsx
     â”‚   â”‚       BankAccountsPage.tsx
     â”‚   â”œâ”€â”€ bills/
     â”‚   â”‚       BillsHelpContent.tsx
     â”‚   â”‚       BillsPage.tsx
     â”‚   â”œâ”€â”€ memory-uid/
     â”‚   â”‚   â”‚   Memory-uidpage.tsx
     â”‚   â”‚   â”‚   MemoryUidHelpContent.tsx
     â”‚   â”‚   â”œâ”€â”€ add/
     â”‚   â”‚   â”‚       Addpage.tsx
     â”‚   â”‚   â”œâ”€â”€ details/
     â”‚   â”‚   â”‚       Detailspage.tsx
     â”‚   â”‚   â””â”€â”€ edit/
     â”‚   â”‚           page.tsx
     â”‚   â”œâ”€â”€ payments/
     â”‚   â”‚       PaymentsPage.tsx
     â”‚   â”œâ”€â”€ pos-uid/
     â”‚   â”‚       page.tsx
     â”‚   â”œâ”€â”€ registration-information/
     â”‚   â”‚       RegistrationInformationPage.tsx
     â”‚   â”‚       types.ts
     â”‚   â””â”€â”€ trusted-companies/
     â”‚           TrustedCompaniesPage.tsx
     â”‚           TrustedHelpContent.tsx
     â”œâ”€â”€ ui/
     â”‚   â”‚   Card.tsx
     â”‚   â”‚   FieldGrid.tsx
     â”‚   â”‚   FormField.tsx
     â”‚   â”‚   FormToolbar.tsx
     â”‚   â”‚   icons.tsx
     â”‚   â”‚   index.ts
     â”‚   â”‚   PageShell.tsx
     â”‚   â”‚   Section.tsx
     â”‚   â”‚   SimulatorBadge.tsx
     â”‚   â”‚   Tabs.tsx
     â”‚   â”‚   ToolbarControls.tsx
     â”‚   â”‚   UploadPublicKeyModal.tsx
     â”‚   â””â”€â”€ date/
     â”‚           ModianJalaliDatePicker.tsx
     â”œâ”€â”€ users-roles/
     â”‚       index.ts
     â”‚       UsersRolesHelpContent.tsx
     â””â”€â”€ workspace/
             index.ts
 <!-- END:COMPONENTS_TREE -->

### BACKEND_SRC_TREE
 <!-- BEGIN:BACKEND_SRC_TREE -->
 src
 â”œâ”€â”€ app.module.ts
 â”œâ”€â”€ main.ts
 â”œâ”€â”€ admin/
 â”‚       admin.controller.ts
 â”‚       admin.module.ts
 â”œâ”€â”€ auth/
 â”‚   â”‚   access-level.decorator.ts
 â”‚   â”‚   access-level.guard.ts
 â”‚   â”‚   auth.controller.spec.ts
 â”‚   â”‚   auth.controller.ts
 â”‚   â”‚   auth.module.ts
 â”‚   â”‚   auth.service.spec.ts
 â”‚   â”‚   auth.service.ts
 â”‚   â”‚   dev-bypass.guard.ts
 â”‚   â”‚   hash.service.ts
 â”‚   â”‚   jwt-auth.guard.ts
 â”‚   â”‚   jwt-payload.interface.ts
 â”‚   â”‚   jwt.strategy.ts
 â”‚   â”‚   roles.decorator.ts
 â”‚   â”œâ”€â”€ dto/
 â”‚   â”‚       change-password.dto.ts
 â”‚   â”‚       login.dto.ts
 â”‚   â”‚       register.dto.ts
 â”‚   â”‚       signin.dto.ts
 â”‚   â”‚       signup.dto.ts
 â”‚   â””â”€â”€ interfaces/
 â”‚           request-with-user.interface.ts
 â”œâ”€â”€ business/
 â”‚   â”‚   business.controller.ts
 â”‚   â”‚   business.module.ts
 â”‚   â”‚   business.service.ts
 â”‚   â””â”€â”€ dto/
 â”‚           onboarding-step1.dto.ts
 â”œâ”€â”€ common/
 â”‚   â”œâ”€â”€ context/
 â”‚   â”‚       business-context.middleware.ts
 â”‚   â”‚       business-context.module.ts
 â”‚   â”‚       business-context.service.ts
 â”‚   â”‚       context.middleware.ts
 â”‚   â”‚       request-context.interface.ts
 â”‚   â”‚       request-context.service.ts
 â”‚   â””â”€â”€ decorators/
 â”‚           public.decorator.ts
 â”œâ”€â”€ core/
 â”‚   â”‚   core.module.ts
 â”‚   â””â”€â”€ payroll/
 â”‚       â”‚   calculateSalaryTax.ts
 â”‚       â”‚   payroll-entry.entity.ts
 â”‚       â”‚   payroll-item.entity.ts
 â”‚       â”‚   payroll.controller.ts
 â”‚       â”‚   payroll.service.ts
 â”‚       â”œâ”€â”€ dto/
 â”‚       â”‚       create-entry-wrapper.dto.ts
 â”‚       â””â”€â”€ tax-brackets/
 â”‚               1404.tax-brackets.ts
 â”‚               tax-bracket.interface.ts
 â”œâ”€â”€ health/
 â”‚       health.controller.ts
 â”‚       health.module.ts
 â”‚       health.service.ts
 â”œâ”€â”€ modules/
 â”‚   â”€â”€ business-profile/
 â”‚           business-profile.controller.ts
 â”‚           business-profile.service.ts
 â”œâ”€â”€ notice/
 â”‚   â”‚   notice.controller.ts
 â”‚   â”‚   notice.module.ts
 â”‚   â”‚   notice.service.ts
 â”‚   â””â”€â”€ dto/
 â”‚           create-notice.dto.ts
 â”œâ”€â”€ orders/
 â”‚       orders.controller.ts
 â”‚       orders.module.ts
 â”‚       orders.service.ts
 â”œâ”€â”€ prisma/
 â”‚   â”‚   prisma.middleware.ts
 â”‚   â”‚   prisma.module.ts
 â”‚   â”‚   prisma.service.spec.ts
 â”‚   â”‚   prisma.service.ts
 â”‚   â””â”€â”€ extensions/
 â”‚           businessIsolation.extension.ts
 â”‚           tenantTransaction.extension.ts
 â”œâ”€â”€ registration/
 â”‚       registration.controller.ts
 â”‚       registration.module.ts
 â”‚       registration.service.ts
 â”œâ”€â”€ services/
 â”œâ”€â”€ simulator/
 â”‚   â”‚   simulator-access.service.ts
 â”‚   â”‚   simulator.controller.ts
 â”‚   â”‚   simulator.module.ts
 â”‚   â”‚   simulator.service.ts
 â”‚   â”‚   test-tax.ts
 â”‚   â”œâ”€â”€ dto/
 â”‚   â”‚       insurance-single.dto.ts
 â”‚   â”œâ”€â”€ interfaces/
 â”‚   â”‚       simple-tax-result.interface.ts
 â”‚   â”‚       tax-result.interface.ts
 â”‚   â”œâ”€â”€ karpooshe/
 â”‚   â”‚       karpooshe.controller.ts
 â”‚   â”‚       karpooshe.service.ts
 â”‚   â”œâ”€â”€ logic/
 â”‚   â”‚       calculateSalaryTaxBatch.ts
 â”‚   â””â”€â”€ salary-tax/
 â”‚       â”€â”€ dto/
 â”‚               create-simulator.dto.ts
 â”‚               salary-tax-batch.dto.ts
 â”‚               salary-tax.dto.ts
 â”‚               update-simulator.dto.ts
 â”œâ”€â”€ simulator-modian/
 â”‚   â”‚   bills.controller.ts
 â”‚   â”‚   bills.service.ts
 â”‚   â”‚   registration.controller.ts
 â”‚   â”‚   registration.service.ts
 â”‚   â”‚   simulator-modian.controller.ts
 â”‚   â”‚   simulator-modian.module.ts
 â”‚   â”‚   simulator-modian.service.ts
 â”‚   â””â”€â”€ dto/
 â”‚           create-utility-bill.dto.ts
 â”‚           query-bills.dto.ts
 â”‚           update-utility-bill.dto.ts
 â”œâ”€â”€ types/
 â”‚       ambient.d.ts
 â”œâ”€â”€ user/
 â”‚       user.controller.ts
 â”‚       user.module.ts
 â””â”€â”€ utils/
         utils.controller.ts
         utils.module.ts
 <!-- END:BACKEND_SRC_TREE -->
```

<!-- END:BACKEND_SRC_TREE -->
> ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ظ…غŒâ€Œع©ظ†ظ†ط¯. :contentReference[oaicite:5]{index=5}
---

## 2) ظ‚ط±ط§ط±ط¯ط§ط¯ ظ†ط§ظ…â€Œع¯ط°ط§ط±غŒ ظˆ ط³ط§ط®طھط§ط± ظ¾ظˆط´ظ‡â€Œظ‡ط§ (Frontend)

- ظ‡ظ…ظ‡â€ŒغŒ ظ…ط³غŒط±ظ‡ط§ ط²غŒط± `src/` ظ‚ط±ط§ط± ظ…غŒâ€Œع¯غŒط±ظ†ط¯.
- ظ…ط§عکظˆظ„â€Œظ‡ط§ (ط´ط¨غŒظ‡â€Œط³ط§ط²ظ‡ط§) طھط­طھ `src/app/simulators/*`:
  - `modian`  (ط³ط§ظ…ط§ظ†ظ‡ ظ…ظˆط¯غŒط§ظ†)
  - `salary-tax`  (ط³ط§ظ…ط§ظ†ظ‡ ظ…ط§ظ„غŒط§طھ ط¨ط± ط­ظ‚ظˆظ‚)
  - `insurance`  (ط³ط§ظ…ط§ظ†ظ‡ ط¨غŒظ…ظ‡ طھط£ظ…غŒظ† ط§ط¬طھظ…ط§ط¹غŒ)
- ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒ ط§ط´طھط±ط§ع©غŒ/ظ…ط§عکظˆظ„ط§ط± ط¯ط± `src/components/*` ط¨ط§ **ظ†ط§ظ…â€Œع¯ط°ط§ط±غŒ ظ…ط§عکظˆظ„â€Œظ…ط­ظˆط± ظˆ ظ„ط§غŒظ‡â€Œط¨ظ†ط¯غŒ ظˆط§ط¶ط­**:
  - `src/components/layout/*` â€” ط´ظگظ„/ظ‡ط¯ط±/ط³ط§ط¨â€Œظ‡ط¯ط± ط³ط±ط§ط³ط±غŒ ط³ط§غŒطھ
  - `src/components/modian/layout/*` â€” ط´ظگظ„/ظ‡ط¯ط± ط§ط®طھطµط§طµغŒ ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ†
  - `src/components/salary-tax/layout/*` â€” ط´ظگظ„/ظ‡ط¯ط± ط§ط®طھطµط§طµغŒ ظ…ط§ظ„غŒط§طھ ط¨ط± ط­ظ‚ظˆظ‚
  - `src/components/insurance/layout/*` â€” ط´ظگظ„/ظ‡ط¯ط± ط§ط®طھطµط§طµغŒ ط¨غŒظ…ظ‡
  - ط³ط§غŒط± ط§ط¬ط²ط§ط، ظ…ط§عکظˆظ„â€Œظ‡ط§ ط¨ظ‡ طھظپع©غŒع© ظ‡ظ…ط§ظ† ظ…ط§عکظˆظ„: `src/components/modian/...`طŒ `src/components/salary-tax/...`طŒ ...

**غŒط§ط¯ط¯ط§ط´طھ طھط؛غŒغŒط± ط³ط§ط®طھط§ط±غŒ (ظ…ظˆط¯غŒط§ظ†):**
- ظ…ط³غŒط± ط§ط³طھط§ظ†ط¯ط§ط±ط¯ آ«ظ¾ط±ظˆظ†ط¯ظ‡ظ” ظ…ط§ظ„غŒط§طھغŒآ» ط§ط² ط§غŒظ† ط¨ظ‡ ط¨ط¹ط¯ **ط¨ط¯ظˆظ† ط³ع¯ظ…ظ†طھ ط§ط¯ظ…غŒظ†** ط§ط³طھ:
  `src/app/simulators/modian/taxfile/...`
  (طھظ…ط§ظ… طµظپط­ط§طھ ظ…ط±طھط¨ط· ط¨ط§ آ«ظ¾ط±ظˆظ†ط¯ظ‡ظ” ظ…ط§ظ„غŒط§طھغŒ ظˆ ط¹ط¶ظˆغŒطھآ» ط²غŒط± ظ‡ظ…غŒظ† ظ…ط³غŒط± ظ…ط¯غŒط±غŒطھ ظ…غŒâ€Œط´ظˆظ†ط¯.)
  ط§ع¯ط± ظ„غŒظ†ع©/ط§ط±ط¬ط§ط¹ ظ‚ط¯غŒظ…غŒ ط¨ط§ ظ¾غŒط´ظˆظ†ط¯ `/admin/taxfile` ظˆط¬ظˆط¯ ط¯ط§ط´طھطŒ ط¨ط§غŒط¯ **redirect 301/308**
  ط¨ظ‡ ظ…ط³غŒط± ط¬ط¯غŒط¯ (`/simulators/modian/taxfile/:path*`) ط§ط¹ظ…ط§ظ„ ط´ظˆط¯. ط§غŒظ† ط³غŒط§ط³طھ ط¯ط± `next.config.ts`
  طھط­طھ ط¨ط®ط´ `redirects()` ظ†ع¯ظ‡â€Œط¯ط§ط±غŒ ظ…غŒâ€Œط´ظˆط¯.

> ع†ط±ط§ ط§غŒظ† طھظپع©غŒع©طں ط¨ط±ط§غŒ ط¬ظ„ظˆع¯غŒط±غŒ ط§ط² آ«ط¢ط¯ط±ط³â€Œظ‡ط§غŒ ط§ط´طھط¨ط§ظ‡آ» ظˆ **ط¹ط¯ظ… طھط¯ط§ط®ظ„ ظ†ط§ظ…** (ط¯ظ‚غŒظ‚ط§ظ‹ ظ…ط´ع©ظ„ ط§ط´ط§ط±ظ‡â€Œط´ط¯ظ‡ ط¯ط± ع¯ظپطھع¯ظˆ).

**ط§ظپط²ظˆط¯ظ†غŒ ط¬ط¯غŒط¯ (ط§طµظ„ط§ط­ ط³ط§ط®طھط§ط± ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ†):**
- طھظ…ط§ظ… ط¹ظ†ط§طµط± ظ†ظ…ط§غŒط´غŒ ظ…ظˆط¯غŒط§ظ† (Header, Footer, SubHeader, Shell) ط§ط² `src/components/layout/` ط¨ظ‡ ظ…ط³غŒط± ط²غŒط± ظ…ظ†طھظ‚ظ„ ط´ط¯ظ†ط¯:
  ```
  src/components/modian/layout/
  â”œâ”€ ModianHeader.tsx
  â”œâ”€ ModianFooter.tsx
  â”œâ”€ ModianSubHeader.tsx
  â”œâ”€ ModianShell.tsx
  â””â”€ index.ts
  ```
- طھظ…ط§ظ… طµظپط­ط§طھ `modian` ط§ط² ط§غŒظ† ظ¾ط³ ظ‡ط¯ط± ظˆ ظپظˆطھط± ط®ظˆط¯ ط±ط§ ط§ط² `@/components/modian/layout` ط§غŒظ…ظ¾ظˆط±طھ ظ…غŒâ€Œع©ظ†ظ†ط¯.
  **ظ‚ط§ظ†ظˆظ† ظ…ط³غŒط±ظ‡ط§ (ظ…ظˆط¯غŒط§ظ†):** ط§ط³طھظپط§ط¯ظ‡ ط§ط² ط³ع¯ظ…ظ†طھ `admin/` ط¯ط± ط²غŒط±ط´ط§ط®ظ‡ظ” `modian/` ظ…ظ…ظ†ظˆط¹ ط§ط³طھط›
  ظ‡ط±ع¯ظˆظ†ظ‡ ط¨ط®ط´ ظ…ط¯غŒط±غŒطھغŒ غŒط§ ط¯ط§ط´ط¨ظˆط±ط¯ ط¯ط§ط®ظ„غŒ ط¨ط§غŒط¯ ط¨ط§ ظ†ط§ظ…â€Œع¯ط°ط§ط±غŒ ظ…ط¹ظ†ط§غŒغŒ ط®ظˆط¯ط´ ط¯ط± ط²غŒط± `modian/` طھط¹ط±غŒظپ ط´ظˆط¯
  (ظ…ط«ظ„ط§ظ‹ `modian/dashboard`, `modian/taxfile`, ...). ط¨ط±ط§غŒ ظ„غŒظ†ع©â€Œظ‡ط§غŒ ظ‚ط¯غŒظ…غŒطŒ ظ‚ط§ظ†ظˆظ† redirect ط¯ط± `next.config.ts`
  ظ†ع¯ظ‡â€Œط¯ط§ط±غŒ ظ…غŒâ€Œط´ظˆط¯ طھط§ ط§ط² ط¨ط±ظˆط² ظ„غŒظ†ع© ط´ع©ط³طھظ‡ ط¬ظ„ظˆع¯غŒط±غŒ ع¯ط±ط¯ط¯


---

## 3) ط§ظ„ع¯ظˆغŒ طµظپط­ط§طھ (App Router) ظˆ *Client/Server*

### 3.1 ط§طµظ„ ع©ظ„غŒ
- ط¨ظ‡ ط¯ط±ط®ظˆط§ط³طھ ط´ظ…ط§طŒ **طµظپط­ط§طھ ع©ظ„غŒط¯غŒ ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ† آ«ع©ظ„ط§غŒظ†طھآ» ط´ط¯ظ†ط¯**ط›
- ظ‡ط± طµظپط­ظ‡â€Œط§غŒ ع©ظ‡ ط§ط² ظ‡ظˆع©â€Œظ‡ط§غŒ **ع©ظ„ط§غŒظ†طھغŒ** ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ط¯ (`useSearchParams`, `useRouter`, ...) ط¨ط§غŒط¯ غŒط§:
  1) ط®ظˆط¯ط´ `use client` ط¯ط± ط§ط¨طھط¯ط§غŒ ظپط§غŒظ„ ط¯ط§ط´طھظ‡ ط¨ط§ط´ط¯طŒ **غŒط§**
  2) ط§ظ„ع¯ظˆغŒ آ«**wrapper Server + Client child**آ» ط±ط§ ط±ط¹ط§غŒطھ ع©ظ†ط¯ طھط§ ط®ط·ط§غŒ
     `useSearchParams() should be wrapped in a suspense boundary` ط±ظپط¹ ط´ظˆط¯.

### 3.2 ط§ظ„ع¯ظˆغŒ ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ (ط§ط³طھظپط§ط¯ظ‡â€Œط´ط¯ظ‡ ط¨ط±ط§غŒ ط®ط·ط§ظ‡ط§غŒ ط§ط®غŒط±)
- `page.tsx` (Server): ظپظ‚ط· غŒع© ط´ظگظ„ ط³ط¨ع© + ط±ظ†ط¯ط± غŒع© **Client Component** ط¯ط§ط®ظ„ `<Suspense>`
- `PageClient.tsx` (Client): ظ…ظ†ط·ظ‚ ظˆط§ظ‚ط¹غŒ طµظپط­ظ‡ (ط§ط³طھظپط§ط¯ظ‡ ط§ط² `useSearchParams` ظˆ ...)

ظ†ظ…ظˆظ†ظ‡â€ŒغŒ ظ…غŒظ†غŒظ…ط§ظ„:
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

> ط¹ظ„طھ ط³ط§ط®طھ ظپط§غŒظ„â€Œظ‡ط§غŒ ط®ط§ظ„غŒ/ط­ط¯ط§ظ‚ظ„غŒ: **Next.js ظ‡ط± ط³ع¯ظ…ظ†طھ ط¨ط§غŒط¯ غŒع© ع©ط§ظ…ظ¾ظˆظ†ظ†طھ ط¨ط±ع¯ط±ط¯ط§ظ†ط¯**ط› ظ‡ظ…ع†ظ†غŒظ† ط¨ط±ط§غŒ ط±ظپط¹ ط®ط·ط§غŒ `CSR bailout`طŒ ظ†غŒط§ط² ط¨ظ‡ **ظ…ط±ط² Suspense ط¯ط± ظ„ط§غŒظ‡â€ŒغŒ ط³ط±ظˆط±غŒ** ط¯ط§ط±غŒظ….

> ط¯ط± ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ†طŒ ط§غŒظ† ط§ظ„ع¯ظˆ ظ‡ظ…â€Œط§ع©ظ†ظˆظ† ط¯ط± طµظپط­ط§طھ `otp`, `portal`, `users-roles/add` ظˆ ع†ظ†ط¯ طµظپط­ظ‡ظ” ظ…ط´ط§ط¨ظ‡ ط§ط¹ظ…ط§ظ„ ط´ط¯ظ‡ ط§ط³طھ.

> ظپط§غŒظ„â€Œظ‡ط§غŒ ع©ظ„ط§غŒظ†طھغŒ (ظ…ط«ظ„ `ModianOtpForm.tsx`, `ModianLoginForm.tsx`) ط¯ط±ظˆظ† ظ¾ظˆط´ظ‡ظ” `src/components/modian/` ظ‚ط±ط§ط± ط¯ط§ط±ظ†ط¯ ظˆ ط§ط² ط·ط±غŒظ‚ Wrapper ط¯ط± `page.tsx` ط³ط±ظˆط±غŒ ظپط±ط§ط®ظˆط§ظ†غŒ ظ…غŒâ€Œط´ظˆظ†ط¯.

### 3.3 ظ…ط¹ظ…ط§ط±غŒ غŒع©ظ¾ط§ط±ع†ظ‡ ظˆ Proxy ظ…ط³غŒط±ظ‡ط§غŒ ط­ط³ط§ط³ (Business Onboarding)
ظ„ط§غŒظ‡â€Œظ‡ط§غŒ `app/api/` ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ظ¾ط±ظˆع©ط³غŒ ط§ظ…ظ†غŒطھغŒ ط¨غŒظ† Browser ظˆ NestJS ط¹ظ…ظ„ ظ…غŒâ€Œع©ظ†ظ†ط¯:

- `POST /api/business/create` ظ…ط³غŒط± ط§طµظ„غŒ MVP ط§ط³طھ ظˆ ط¯ط±ط®ظˆط§ط³طھ ط±ط§ ط¨ظ‡ `POST /businesses/create` ظپظˆط±ظˆط§ط±ط¯ ظ…غŒâ€Œع©ظ†ط¯.
- ProxyطŒ Body ع©ط§ظ…ظ„ `RegistrationStep1Input`طŒ Cookie ظ†ط´ط³طھ ظˆ Authorization ظ…ظˆط¬ظˆط¯ ط±ط§ ط¨ظ‡ Backend ظ…ظ†طھظ‚ظ„ ظ…غŒâ€Œع©ظ†ط¯.
- ظ¾ط§ط³ط® Backend ط¨ظ‡â€Œظ‡ظ…ط±ط§ظ‡ `Set-Cookie` ظ…ط±ط¨ظˆط· ط¨ظ‡ `access_token` طھط§ط²ظ‡ ط¨ظ‡ ظ…ط±ظˆط±ع¯ط± ط¨ط§ط²ع¯ط±ط¯ط§ظ†ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯.
- `POST /api/business/onboarding/step-1` ظˆ `POST /api/business/switch` ط¯ط± Flow ط§غŒط¬ط§ط¯ ط¬ط¯غŒط¯ ظ…طµط±ظپ ظ†ظ…غŒâ€Œط´ظˆظ†ط¯ ظˆ ظپط¹ظ„ط§ظ‹ Legacy ظ‡ط³طھظ†ط¯.
- ظ¾ط³ ط§ط² ظ…ظˆظپظ‚غŒطھطŒ Modal ظ…ظˆظپظ‚غŒطھ ظ†ظ…ط§غŒط´ ط¯ط§ط¯ظ‡ ظˆ ع©ط§ط±ط¨ط± ط¨ط¯ظˆظ† Login/Switch ظ…ط¬ط¯ط¯ ط¨ظ‡ `/dashboard` ظ‡ط¯ط§غŒطھ ظ…غŒâ€Œط´ظˆط¯.
- ط§غŒظ† ط§ظ„ع¯ظˆ coupling ظ…ط³طھظ‚غŒظ… ظپط±ط§ظ†طھâ†”ط¨ع©â€Œط§ظ†ط¯ ط±ط§ ع©ط§ظ‡ط´ ظ…غŒâ€Œط¯ظ‡ط¯ ظˆ ظ…ظ†ط¨ط¹ ط­ظ‚غŒظ‚طھ ظ…ط§ظ„ع©غŒطھ ط±ط§ ط¯ط± Backend ظ†ع¯ظ‡ ظ…غŒâ€Œط¯ط§ط±ط¯.

### 3.4 ط³ط§ط®طھط§ط± Flow ظ†ظ‡ط§غŒغŒ Create Business ط¯ط± MVP

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
   â”œâ”€â”€ Business
   â”œâ”€â”€ UserBusiness
   â”œâ”€â”€ TaxFile
   â”œâ”€â”€ BusinessContact
   â””â”€â”€ BusinessRegistration
              |
       Fresh access_token
              |
          Dashboard
```

ظ‚ظˆط§ط¹ط¯ ط³ط§ط®طھط§ط±غŒ:

- Signup ظپظ‚ط· `User` ط§غŒط¬ط§ط¯ ظ…غŒâ€Œع©ظ†ط¯ط› User ط¨ط¯ظˆظ† Business غŒع© ظˆط¶ط¹غŒطھ ظ…ط¹طھط¨ط± ط§ط³طھ.
- `OnboardingChoiceModal` ظپظ‚ط· ط±ظˆط´ ظˆط±ظˆط¯ ط§ط·ظ„ط§ط¹ط§طھ ط±ط§ طھط¹غŒغŒظ† ظ…غŒâ€Œع©ظ†ط¯.
- ظ‡ط± ط¯ظˆ ط±ظˆط´ ط§ط² `StepRegistration`طŒ `react-hook-form`طŒ Zod Schema ظˆ Submit Handler ظ…ط´طھط±ع© ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ظ†ط¯.
- Auto-fill ظپظ‚ط· ظپط±ظ… ط±ط§ ط¨ط§ Template ط«ط§ط¨طھ ط¢ظ…ظˆط²ط´غŒ ظ¾ط± ظ…غŒâ€Œع©ظ†ط¯ ظˆ ظ‚ط¨ظ„ ط§ط² ط«ط¨طھ ظ†ظ‡ط§غŒغŒ ظ‚ط§ط¨ظ„ ظˆغŒط±ط§غŒط´ ط§ط³طھ.
- طµظپط­ظ‡ `src/app/business/onboarding/step-1/page.tsx` ظپظ‚ط· ط¨ط±ط§غŒ ط³ط§ط²ع¯ط§ط±غŒ ظ…ط³غŒط± ظ‚ط¯غŒظ…غŒ ط¨ظ‡ `/business/onboarding` Redirect ظ…غŒâ€Œع©ظ†ط¯.
- ط­ط°ظپ ظپغŒط²غŒع©غŒ Routeظ‡ط§غŒ Legacy ط¨ظ‡ ظ…ظˆظپظ‚غŒطھ طھط³طھâ€Œظ‡ط§غŒ Rollback/Regression ظˆط§ط¨ط³طھظ‡ ط§ط³طھ.

---

## 4) ظ…ط³غŒط±ظ‡ط§/طµظپط­ط§طھ ع©ظ„ط§غŒظ†طھ ظ…ظˆط¯غŒط§ظ† (ط·ط¨ظ‚ ظپظ‡ط±ط³طھ ط§ط±ط³ط§ظ„غŒ ط´ظ…ط§)

ط§غŒظ† ظ…ط³غŒط±ظ‡ط§ آ«ع©ظ„ط§غŒظ†طھآ» ط¯ط± ظ†ط¸ط± ع¯ط±ظپطھظ‡ ط´ط¯ظ†ط¯ (غŒط§ ط¨ط§ ط§ظ„ع¯ظˆغŒ Wrapper+Client ظ¾غŒط§ط¯ظ‡ ط´ط¯ظ†ط¯):

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

> ط¹ظ„ط§ظˆظ‡ ط¨ط± ط§غŒظ†طŒ ط¨ط±ط§غŒ ط²غŒط±ظ…ط³غŒط±ظ‡ط§غŒ ط®ط§طµ (ظ…ط«ظ„ `roles/add`, `admin/taxfile/bank-accounts`, `taxfile/registration` ظˆâ€¦)طŒ
> ظپط§غŒظ„â€Œظ‡ط§غŒ `layout.tsx` ظˆ/غŒط§ `page.tsx` ط­ط¯ط§ظ‚ظ„غŒ ط§غŒط¬ط§ط¯ ط´ط¯ طھط§ ط®ط·ط§ظ‡ط§غŒ
> آ«**Expected to return a React component**آ» ظˆ **Missing Suspense** ط¨ط±ط·ط±ظپ ط´ظˆط¯.

### طھط­ظˆغŒظ„â€Œظ‡ط§غŒ ط¬ط¯غŒط¯ (غ±غ´غ°غµ/غ°غ³/غ±غ³)
**طµظپط­ظ‡ Login (`/simulators/modian/login`):**
- ط§طµظ„ط§ط­ ع©ظ¾ع†ط§ (ع©ط§ط±ط§ع©طھط±ظ‡ط§غŒ ط±ظ†ع¯غŒ ظˆ ع†ط±ط®ط´غŒ).
- ط§طµظ„ط§ط­ ط¬ط±غŒط§ظ† Tab Navigation (ظ¾ط±ط´ ظ…ط³طھظ‚غŒظ… ط§ط² ط±ظ…ط² ط¹ط¨ظˆط± ط¨ظ‡ ع©ظ¾ع†ط§).
- ط§ظپط²ظˆط¯ظ† ط¯ع©ظ…ظ‡ ظ†ظ…ط§غŒط´ ط±ظ…ط² ط¹ط¨ظˆط± ط¨ط§ `tabIndex={-1}`.
- ط§ظپط²ظˆط¯ظ† Dropdown ط§ظ†طھط®ط§ط¨ ع©ط³ط¨â€Œظˆع©ط§ط± (ظپط±ط§ط®ظˆط§ظ†غŒ `businesses/me`).

**طµظپط­ظ‡ OTP (`/simulators/modian/otp`):**
- ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ طھط§غŒظ…ط± غ¶ ط¯ظ‚غŒظ‚ظ‡â€Œط§غŒ ط¨ط§ ظ†ظˆط§ط± ظ¾غŒط´ط±ظپطھ ع¯ط±ط§ظپغŒع©غŒ.
- ط§ظپط²ظˆط¯ظ† ظ…ط§ع©ط§ظ¾ ظ…ظˆط¨ط§غŒظ„ (ظ†ظ…ط§غŒط´ ع©ط¯ ظ¾غŒط§ظ…ع©).

---

## 5) ظ„ط§غŒظ‡â€Œظ‡ط§غŒ Layout

- **ظ†ع©طھظ‡â€ŒغŒ ظ…ظ‡ظ…:** ظˆط¬ظˆط¯ `layout.tsx` ط¯ط± ط³ط·ط­ ط³ع¯ظ…ظ†طھ ط¨ط§ط¹ط« ظ…غŒâ€Œط´ظˆط¯ ظ‡ظ…ظ‡â€ŒغŒ ط²غŒط±طµظپط­ط§طھطŒ ط´ظگظ„ ظ…ظ†ط§ط³ط¨ ظˆ ظ‡ط¯ط±/ط³ط§ط¨â€Œظ‡ط¯ط± ظ…ط´طھط±ع© ط¯ط§ط´طھظ‡ ط¨ط§ط´ظ†ط¯ ظˆ ظ†غŒط§ط² ط¨ظ‡ طھع©ط±ط§ط± ط¯ط± ظ‡ط± طµظپط­ظ‡ ظ†ط¨ط§ط´ط¯.
- ع†غŒظ†ط´ طھظˆطµغŒظ‡â€Œط´ط¯ظ‡ ط¨ط±ط§غŒ ظ…ظˆط¯غŒط§ظ†:
  - `src/app/simulators/modian/layout.tsx` â€” ط´ظگظ„ ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ† (ظ…غŒâ€Œطھظˆط§ظ†ط¯ ط³ط±ظˆط±غŒ ط¨ط§ط´ط¯ ظˆ ط¹ظ†ط§طµط± ط³ط±ط§ط³ط±غŒ ظ…ط§عکظˆظ„ ط±ط§ ط±ظ†ط¯ط± ع©ظ†ط¯)
  - ط¨ط±ط§غŒ ظ‡ط± ط²غŒط±ط¨ط®ط´ ط¨ط§ ظ†غŒط§ط² ط¨ظ‡ ط´ظگظ„ ظ…طھظپط§ظˆطھ (ظ…ط«ظ„ `portal/`, `roles/`, `admin/`): غŒع© `layout.tsx` ط­ط¯ط§ظ‚ظ„غŒ ط¯ط± ظ‡ظ…ط§ظ† ظپظˆظ„ط¯ط±

> ط§ع¯ط± طµظپط­ظ‡â€Œط§غŒ ع©ط§ظ…ظ„ط§ظ‹ ع©ظ„ط§غŒظ†طھ ط§ط³طھطŒ **layout ظ…غŒâ€Œطھظˆط§ظ†ط¯ Server ط¨ظ…ط§ظ†ط¯** ظˆ طµط±ظپط§ظ‹ `<Suspense>` غŒط§ Container ط¨ط¯ظ‡ط¯.


---

## 6) Middleware ظˆ ط§ط­ط±ط§ط² ظ‡ظˆغŒطھ (Frontend)

- ظپط§غŒظ„ ط§ط±ط³ط§ظ„غŒ ط´ظ…ط§: `src/middleware.ts` ط¨ط§ ط§ط³طھظپط§ط¯ظ‡ ط§ط² `jsonwebtoken` ظˆ ع©ظˆع©غŒ `__Host-auth-token`.
- ظ…ط³غŒط±ظ‡ط§غŒ ظ…ط­ط§ظپط¸طھâ€Œط´ط¯ظ‡ ظ†ظ…ظˆظ†ظ‡: `/dashboard`, `/profile`, `/settings` (ط·ط¨ظ‚ ظپط§غŒظ„ ط§ط±ط³ط§ظ„غŒ).
- ط±غŒط¯ط§غŒط±ع©طھ ط¨ظ‡ `/auth/signin?redirect=...` ط¯ط± طµظˆط±طھ ظ†ط¨ظˆط¯/ظ†ط§ط§ط¹طھط¨ط§ط±غŒ طھظˆع©ظ†.

> طھظˆط¬ظ‡: ط§ط¬ط±ط§غŒ Middleware ط¯ط± **Edge Runtime** ط§ط³طھط› ع©طھط§ط¨ط®ط§ظ†ظ‡â€Œظ‡ط§غŒغŒ ظ…ط«ظ„ `jsonwebtoken` ظ…ظ…ع©ظ† ط§ط³طھ ظ…ط­ط¯ظˆط¯غŒطھ ط¯ط§ط´طھظ‡ ط¨ط§ط´ظ†ط¯.
> طھط§ ظˆظ‚طھغŒ ط¨غŒظ„ط¯/ط±ط§ظ† طھط§غŒغŒط¯ ط´ط¯طŒ **ظ‡ظ…غŒظ† ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ظ…ط³طھظ†ط¯ ظ…غŒâ€Œط´ظˆط¯**ط› ط¯ط± طµظˆط±طھ ظ†غŒط§ط² ط¨ظ‡ ظ…ظ‡ط§ط¬ط±طھطŒ ط¨ط§غŒط¯ ط¨ظ‡ ط³ظ…طھ
> ط¨ط±ط±ط³غŒ طھظˆع©ظ† ط¨ط§ `next/headers` ظˆ/غŒط§ JWT ط³ط±ظˆط±غŒ (ط¯ط§ط®ظ„ API Route) ط¨ط±ظˆغŒظ….

### 6.1) Update (2026-02-27) â€” ظ†ع©طھظ‡ ط¹ظ…ظ„غŒط§طھغŒ ظ…ط±ط¬/PR
- ط¨ط¹ط¯ ط§ط² ظ‡ط± PR MergeطŒ ط­طھظ…ط§ظ‹ ط±ظˆغŒ `main` (ظ„ظˆع©ط§ظ„ ظˆ ط±غŒظ…ظˆطھ) **طµط­طھ SHA** ظˆ **ط³ط¨ط² ط¨ظˆط¯ظ† build** ع©ظ†طھط±ظ„ ط´ظˆط¯:
  - `git log -1 --oneline` (ط±ظˆغŒ main)
  - `npm run build`
- ط§ع¯ط± PR ط¸ط§ظ‡ط±ط§ظ‹ merge ط´ط¯ ظˆظ„غŒ `main` ظ‡ظ†ظˆط² ط®ط·ط§ ط¯ط§ط´طھطŒ ط¨ط§ط²غŒط§ط¨غŒ ط§ظ…ظ† ط§ط² `git reflog` ظˆ `cherry-pick` ظ…ط¬ط§ط² ط§ط³طھ (ط·ط¨ظ‚ ظپط±ط¢غŒظ†ط¯ ظ…ط±ط¬ ط§ظ…ظ† ط¯ط± آ§21).

---

## 7) Tailwind ظˆ `globals.css`

- ظپط§غŒظ„ ط§ط±ط³ط§ظ„غŒ: `src/globals.css`
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    background-color: #d9e3f1;
  }
  ```
- ط¯ط± ظ„ط§ع¯ ط¨غŒظ„ط¯ ظ‚ط¨ظ„غŒطŒ ط®ط·ط§غŒ آ«`bg-background` class does not existآ» ط¯غŒط¯ظ‡ ط´ط¯ط›
  ع†ظˆظ† ع†ظ†غŒظ† ع©ظ„ط§ط³غŒ ط¯ط± `@layer`ظ‡ط§ طھط¹ط±غŒظپ ظ†ط´ط¯ظ‡ ط§ط³طھ. ط¯ظˆ ط±ط§ظ‡ ط§ط³طھط§ظ†ط¯ط§ط±ط¯:
  1) **ط¹ط¯ظ… ط§ط³طھظپط§ط¯ظ‡** ط§ط² `bg-background` ط¯ط± JSX/CSSطŒ غŒط§
  2) طھط¹ط±غŒظپ ع©ظ„ط§ط³ ط³ظپط§ط±ط´غŒ:
     ```css
     @layer utilities {
       .bg-background { background-color: hsl(0 0% 100% / 1); } /* ظ†ظ…ظˆظ†ظ‡ */
     }
     ```


---

## 8) ESLint ظˆ TypeScript

- ظپط§غŒظ„ ESLint ط§ط±ط³ط§ظ„غŒ (Flat Config):
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

## 8.1 ط§ظ„ع¯ظˆغŒ ظ…ط¬ط§ط² ط§غŒظ…ظ¾ظˆط±طھ ط¨ط±ط§غŒ آ«ظ…ظˆط¯غŒط§ظ†آ»
- ظ…ط¬ط§ط²: `@/components/modian` ظˆ `@/components/modian/<barrel>` ظ…ط«ظ„ `@/components/modian/common`طŒ `@/components/modian/taxfile`طŒ `@/components/modian/layout`.
- **ط؛غŒط±ظ…ط¬ط§ط²:** ط§ط´ط§ط±ظ‡ ظ…ط³طھظ‚غŒظ… ط¨ظ‡ ظپط§غŒظ„â€Œظ‡ط§ ط²غŒط± ظ‡ط± ظ¾ظˆط´ظ‡ظ” ظ…ظˆط¯غŒط§ظ† (ظ…ط«ظ„ `@/components/modian/taxfile/bills/page`)ط› ظ‡ظ…ظ‡ظ” ظ…طµط±ظپâ€Œع©ظ†ظ†ط¯ع¯ط§ظ† ط¨ط§غŒط¯ ط§ط² Barrel ط§غŒظ…ظ¾ظˆط±طھ ع©ظ†ظ†ط¯.
- **غŒط§ط¯ط¯ط§ط´طھ UI:** ط¨ط±ط§غŒ ط²غŒط±ظ¾ظˆط´ظ‡ظ” `ui/*` ظپظ‚ط· ط§ط² Barrel `@/components/modian/ui` ط§ط³طھظپط§ط¯ظ‡ ط´ظˆط¯.
- ط§غŒظ† ط³غŒط§ط³طھ ط¯ط± ESLint ط¨ط§ ظ‚ط§ط¹ط¯ظ‡â€ŒغŒ `no-restricted-imports` enforce ط´ط¯ظ‡ ظˆ ع¯ط±ظˆظ‡â€Œط¨ظ†ط¯غŒ ط§غŒظ…ظ¾ظˆط±طھâ€Œظ‡ط§ ظ†غŒط² ط·ط¨ظ‚ `import/order` ط¨ط±ظ‚ط±ط§ط± ط§ط³طھ. ط§غŒظ† ظ†ع©طھظ‡ ط¯ط± ع¯ط²ط§ط±ط´ طھغŒظ… طµظپط­ظ‡ ط§طµظ„غŒ ظ‡ظ… طھط£غŒغŒط¯ ط´ط¯ظ‡ ط§ط³طھ. :contentReference[oaicite:0]{index=0}

## 8.2 Governance طھظ…غŒط²ع©ط§ط±غŒ ظ…ظˆط¯غŒط§ظ† (طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§)
- Global (src/components/ui, src/components/common): ظپظ‚ط· ط§ط¬ط²ط§غŒ ع©ط§ظ…ظ„ط§ظ‹ ط¹ظ…ظˆظ…غŒ (ط¯ع©ظ…ظ‡طŒ ط§غŒظ†ظ¾ظˆطھ ط¹ظ…ظˆظ…غŒطŒ طھط§ط±غŒط® ط¬ظ„ط§ظ„غŒ ط¹ظ…ظˆظ…غŒ).
- Modian (src/components/modian/*): ظ‡ط± ط¬ط²ط، ظ…ط±ط¨ظˆط· ط¨ظ‡ UX/ظ…ظ†ط·ظ‚ ظ…ظˆط¯غŒط§ظ†: ط¬ط¯ط§ظˆظ„/ظپغŒظ„طھط±ظ‡ط§غŒ طµظˆط±طھط­ط³ط§ط¨طŒ DatePicker/DateField ط§ط®طھطµط§طµغŒطŒ ط¢غŒع©ظˆظ†/Toolbar ط®ط§طµ.
- ط§غŒظ…ظ¾ظˆط±طھ ظپظ‚ط· ط§ط² Barrel ظ…ط¬ط§ط² ط§ط³طھط› ط§غŒظ…ظ¾ظˆط±طھ ط¹ظ…غŒظ‚ ظ…ط³طھظ‚غŒظ… ظ…ظ…ظ†ظˆط¹ (ظ‚ط§ط¹ط¯ظ‡ظ” ESLint).

## 8.3 Inventory â€” Modian Components & Utilities (v1)
> ظ…ظ†ط¨ط¹: components-tree.txt + app-tree.txt (ط§غŒظ† ظ„غŒط³طھ ط¨ط§ PRظ‡ط§غŒ ط¨ط¹ط¯غŒ ع©ط§ظ…ظ„ ظ…غŒâ€Œط´ظˆط¯).

| ظ†ط§ظ… | ظ…ط³غŒط± | ظ†ظˆط¹ | ظ‚ظ„ظ…ط±ظˆ | ع©ط§ط±ط¨ط±ط¯ ع©ظ„غŒط¯غŒ | ظˆط¶ط¹غŒطھ طھع©ط«غŒط± | ط§ظ‚ط¯ط§ظ… |
|---|---|---|---|---|---|---|
| InvoicesSearchHeader | src/components/modian/common/search/InvoicesSearchHeader.tsx | Component | Modian | ظ‡ط¯ط± ط¬ط³طھط¬ظˆ ط¯ط± طµظپط­ط§طھ طµظˆط±طھط­ط³ط§ط¨ | **طھط£غŒغŒط¯ ظˆ ط¯ط± ظ…طµط±ظپ** | ط§ط³طھط§ظ†ط¯ط§ط±ط¯ ظ…ط±ط¬ط¹ ط¨ط±ط§غŒ طھط¨â€Œظ‡ط§/طھغŒطھط±/ع†غŒظ†ط´ط› ظ…طµط±ظپ طµط±ظپط§ظ‹ ط§ط² Barrel |
| SearchByFilters | src/components/modian/common/search/SearchByFilters.tsx | Component | Modian | ظپغŒظ„طھط±ظ‡ط§غŒ طµظˆط±طھط­ط³ط§ط¨ | **طھط£غŒغŒط¯ ظˆ ط¯ط± ظ…طµط±ظپ** | ط§طھطµط§ظ„ غŒع©ط³ط§ظ† DateFields ط¨ظ‡ util ط¬ظ„ط§ظ„غŒ ظ…ط´طھط±ع©ط› ظ…ظ†ط¹ import ط¹ظ…غŒظ‚ |
| SearchByTaxId | src/components/modian/common/search/SearchByTaxId.tsx | Component | Modian | ط¬ط³طھط¬ظˆ ط¨ط± ط§ط³ط§ط³ ط´ظ†ط§ط³ظ‡/ع©ط¯ ظ…ط§ظ„غŒط§طھغŒ | ظ†ط§ظ…ط´ط®طµ | ط§ط³طھظپط§ط¯ظ‡ ط§ط² Barrelط› ط­ط°ظپ import ط¹ظ…غŒظ‚ |
| ModianJalaliDateField | src/components/modian/common/ModianJalaliDateField.tsx | Component | Modian | ظپغŒظ„ط¯ طھط§ط±غŒط® ط§ط®طھطµط§طµغŒ ظ…ظˆط¯غŒط§ظ† | **ظ…ط±ط¬ط¹ ط¯ط§ظ…ظ†ظ‡â€Œط§غŒ** | ط§ط³طھظپط§ط¯ظ‡ غŒع©ظ†ظˆط§ط®طھط› ط®ط±ظˆط¬ utilâ€Œظ‡ط§غŒ طھط¨ط¯غŒظ„/ظ¾ط§ط±ط³ظ‡ ط§ط² WIP ط¨ظ‡ shared |
| ModianJalaliDatePicker | src/components/modian/common/ModianJalaliDatePicker.tsx | Component | Modian | DatePicker ط§ط®طھطµط§طµغŒ | ط§ط­طھظ…ط§ظ„ ظ‡ظ…ظ¾ظˆط´ط§ظ†غŒ | ظ‡ظ…ط§ظ† ط¨ط§ظ„ط§ |
| InvoiceDetailSection | src/components/modian/common/InvoiceDetailSection.tsx | Component | Modian | ط¨ظ„ظˆع© ظ…ط´طھط±ع© ط¨ط±ط§غŒ آ«ظ…ط´ط®طµط§طھ طµظˆط±طھط­ط³ط§ط¨/ظپط±ظˆط´ظ†ط¯ظ‡/ط®ط±غŒط¯ط§ط±/ط§ط·ظ„ط§ط¹ط§طھ ظ¾ط±ط¯ط§ط®طھآ» ط¯ط± طµظپط­ط§طھ ط¬ط²ط¦غŒط§طھ طµظˆط±طھط­ط³ط§ط¨ | ط¨ط¯ظˆظ†â€Œطھع©ط«غŒط± | ظ…طµط±ظپ طµط±ظپط§ظ‹ ط§ط² Barrelط› ط¯ط± ط·ط±ط§ط­غŒ طµظپط­ط§طھ ط¬ط²ط¦غŒط§طھ ط¨ط¹ط¯غŒ reuse ط´ظˆط¯ |
| ToolbarControls | src/components/modian/common/ToolbarControls.tsx | Component | Modian | ع©ظ†طھط±ظ„â€Œظ‡ط§غŒ ط§ط¨ط²ط§ط±ع© ط¬ط¯ظˆظ„ | **ط§ط³طھط§ظ†ط¯ط§ط±ط¯ ط±ظپطھط§ط± ط¯ع©ظ…ظ‡â€Œظ‡ط§** | ظ‡ظ…â€Œط±ط§ط³طھط§ط³ط§ط²غŒ ط¨ط§ ظ…ظ†ط·ظ‚ آ«ظ¾غŒط´ط±ظپطھظ‡ ط¨ط§ط²/ط¨ط³طھظ‡آ» ط¯ط± Toolbar |
| SimulatorBadge | src/components/modian/common/SimulatorBadge.tsx | Component | Modian | ظ†ط´ط§ظ†ع¯ط± ظˆط¶ط¹غŒطھ ط³غŒظ…ظˆظ„ط§طھظˆط± | ظ†ط§ظ…ط´ط®طµ | طھط«ط¨غŒطھ Barrel |
| icons | src/components/modian/ui/icons.tsx | Module | Modian | ط¢غŒع©ظˆظ†â€Œظ‡ط§غŒ ظ…ط­ظ„غŒ ظ…ظˆط¯غŒط§ظ† | ط§ط­طھظ…ط§ظ„ طھع©ط±ط§ط± ط¨ط§ Global | ط¯ط± طµظˆط±طھ ط¹ظ…ظˆظ…غŒâ€Œط´ط¯ظ† â†’ ط§ظ†طھظ‚ط§ظ„ ط¨ظ‡ Global |
| Card / FormField / PageShell ... | src/components/modian/ui/*.tsx | UI Building Blocks | Modian | ط§ط³ع©ظ„طھâ€Œط¨ظ†ط¯غŒ طµظپط­ط§طھ ظ…ظˆط¯غŒط§ظ† | ط¨ط±ط±ط³غŒ ظ‡ظ…ظ¾ظˆط´ط§ظ†غŒ | غŒط§ طھط¬ظ…غŒط¹ ط¯ط± Global غŒط§ ط­ظپط¸ Modian-Scoped |
| JalaliDateField | src/components/common/date/JalaliDateField.tsx | Component | Global | طھط§ط±غŒط® ط¬ظ„ط§ظ„غŒ ط¹ظ…ظˆظ…غŒ | â€” | ظ…ط±ط¬ط¹ ط¹ظ…ظˆظ…غŒط› ط¯ط± طµظˆط±طھ ظ†غŒط§ط² Adapter Modian ط¨ط³ط§ط²غŒط¯ |

> ظ…ط¹غŒط§ط± آ«ظˆط¶ط¹غŒطھ طھع©ط«غŒط±آ»: (ظ†ط§ظ…ط´ط®طµ/ط¨ط¯ظˆظ†â€Œطھع©ط«غŒط±/طھع©ط«غŒط±-غŒط§ظپطھâ€Œط´ط¯ظ‡). ط§غŒظ† ط³طھظˆظ† ط¯ط± ظ‡ط± PR ط¨ظ‡â€Œط±ظˆط² ظ…غŒâ€Œط´ظˆط¯.
  ```

- ظپط§غŒظ„ `tsconfig.json` ط§ط±ط³ط§ظ„غŒ: `strict: true`, `skipLibCheck: true`, `noEmit: true` ظˆ طھظ†ط¸غŒظ…ط§طھ ط§ط³طھط§ظ†ط¯ط§ط±ط¯ App Router.

### 8.4 Route Wrappers (App Router)
ط¨ط±ط§غŒ غŒع©ط³ط§ظ†â€Œط³ط§ط²غŒ URL ظˆ ط¬ط¯ط§ط³ط§ط²غŒ UI ط§ط² RoutingطŒ ط¨ط¹ط¶غŒ طµظپط­ط§طھ ط¯ط± `app/â€¦` ظپظ‚ط· غŒع© **Wrapper** ظ‡ط³طھظ†ط¯ ظˆ ظ…ط­طھظˆط§غŒ ط§طµظ„غŒ ط±ط§ ط§ط² ط¨ط´ع©ظ‡â€ŒغŒ feature ظ…غŒâ€Œع¯غŒط±ظ†ط¯:

- `app/simulators/modian/taxfile/bills/page.tsx` âں¶ `<BillsPage />` ط§ط² `@/components/modian/taxfile`. (ط§ظ„ع¯ظˆغŒ Route Wrapper ط¨ط±ط§غŒ ط­ظپط¸ URL ظپط¹ظ„غŒ.)
  _غŒط§ط¯ط¯ط§ط´طھ:_ ظ‡ظ…غŒظ† ط§ظ„ع¯ظˆ ط¯ط± ط³ط§غŒط± ط²غŒط±ط¯ط§ظ…ظ†ظ‡â€Œظ‡ط§غŒ Taxfile ظ†غŒط² ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯ (ظ…ط«ظ„ طµظپط­ط§طھ Memory UID ظˆ Registration Information) ظˆ ط¯ط±ط®طھâ€Œظ‡ط§غŒ ظ¾ط±ظˆعکظ‡ ط¢ظ† ط±ط§ ظ†ط´ط§ظ† ظ…غŒâ€Œط¯ظ‡ظ†ط¯. :contentReference[oaicite:1]{index=1}

### 8.5 ظ„ط§غŒظ‡ API ظپط±ط§ظ†طھ
- غŒظˆطھغŒظ„ ظپط±ط§ظ†طھ `src/lib/modianApi.ts` ط¨ط±ط§غŒ ظپط±ط§ط®ظˆط§ظ†غŒâ€Œظ‡ط§غŒ Bills (GET/POST) ط§ط¶ط§ظپظ‡ ط´ط¯ظ‡ ط§ط³طھ ظˆ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ظ¾ط§ط±ط§ظ…طھط±/ط¨ط¯ظ†ظ‡ ط±ط§ ظ…طھظ…ط±ع©ط² ظ…غŒâ€Œع©ظ†ط¯. :contentReference[oaicite:2]{index=2}
---

## 9) ط§ط³ع©ط±غŒظ¾طھâ€Œظ‡ط§ (ط·ط¨ظ‚ `package.json`)

- `dev` â†’ `next dev`
- `build` â†’ `next build`
- `start` â†’ `next start`
- `lint` â†’ `next lint`
- ظ…ط³طھظ†ط¯ط³ط§ط²غŒ ط®ظˆط¯ع©ط§ط± ط³ط§ط®طھط§ط± (ط§ط³ط§ظ…غŒ ط§ط³ع©ط±غŒظ¾طھâ€Œظ‡ط§ ط¯غŒط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯):
  - `docs:app-tree` طŒ `docs:components-tree` طŒ `docs:scan`
  - `docs:update-structure`
  (ظپط§غŒظ„â€Œظ‡ط§غŒ `tools/gen-tree.js` ظˆ `tools/update-docs.js` ط¯ط± ط§غŒظ† ع¯ظپطھع¯ظˆ ط§ط±ط³ط§ظ„ ظ†ط´ط¯ظ‡â€Œط§ظ†ط¯ط› ظپظ‚ط· ظ†ط§ظ… ط§ط³ع©ط±غŒظ¾طھâ€Œظ‡ط§ ظ…ط³طھظ†ط¯ ظ…غŒâ€Œط´ظˆط¯.)


---

## 10) ع†ع©â€Œظ„غŒط³طھ ط§ظپط²ظˆط¯ظ† غŒع© طµظپط­ظ‡/ط³ع¯ظ…ظ†طھ ط¬ط¯غŒط¯ (ط§ط³طھط§ظ†ط¯ط§ط±ط¯)

1) ظ…ط³غŒط± ط±ط§ ط²غŒط± ظ…ط§عکظˆظ„ طµط­غŒط­ ط¨ط³ط§ط²غŒط¯:
   `src/app/simulators/<module>/<segment>/...`
2) ط§ع¯ط± طµظپط­ظ‡ ع©ظ„ط§غŒظ†طھ ط§ط³طھ ظˆ ط§ط² ظ‡ظˆع©â€Œظ‡ط§غŒ ع©ظ„ط§غŒظ†طھغŒ ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ط¯:
   - **ط§ظ„ع¯ظˆغŒ Wrapper+Client** ط±ط§ ظ¾غŒط§ط¯ظ‡ ع©ظ†غŒط¯ (ط¨ط®ط´ 3.2).
3) ط§ع¯ط± ط²غŒط±ط´ط§ط®ظ‡ ظ†غŒط§ط² ط¨ظ‡ ط´ظگظ„ ط¯ط§ط±ط¯: `layout.tsx` ط­ط¯ط§ظ‚ظ„غŒ ط¨ط³ط§ط²غŒط¯ (Server).
4) ط§ط² ع©ظ„ط§ط³â€Œظ‡ط§غŒ Tailwind طھط¹ط±غŒظپâ€Œظ†ط´ط¯ظ‡ (ظ…ط«ظ„ `bg-background`) ط§ط³طھظپط§ط¯ظ‡ ظ†ع©ظ†غŒط¯ط› غŒط§ ظ‚ط¨ظ„ط´ ط¯ط± `@layer` طھط¹ط±غŒظپ ع©ظ†غŒط¯.
5) ظ…ط³غŒط±ظ‡ط§غŒ ط¬ط¯غŒط¯ ط±ط§ â€“ط¯ط± طµظˆط±طھ ظ†غŒط§ط²â€“ ط¯ط± `middleware` ظ‡ظ… ط¯ط± ظ†ط¸ط± ط¨ع¯غŒط±غŒط¯.
6) ط§ط¬ط±ط§غŒ ط³ظ‡ ظپط±ظ…ط§ظ† ظ¾ط³ ط§ط² طھط؛غŒغŒط±ط§طھ:
   ```bash
   npm run lint
   npm run typecheck
   npm run build
   ```


---

## 11) ظ¾ط±ط³ط´â€Œظ‡ط§غŒ ط¨ط§ط²/ط¢غŒطھظ…â€Œظ‡ط§غŒ ط¨ط¹ط¯غŒ

- ظ‡ظ…ط³ط§ظ†â€Œط³ط§ط²غŒ ع©ط§ظ…ظ„ ظ†ط§ظ…â€Œع¯ط°ط§ط±غŒ ظ¾ظˆط´ظ‡â€Œظ‡ط§غŒ ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§ (ط­ط±ظˆظپ ع©ظˆع†ع©/ع©ط¨ع©ظگغŒط³).
- ط®ط±ظˆط¬غŒâ€Œظ‡ط§غŒ طھط³طھ (Integration/E2E) ط¨ط±ط§غŒ ظ…ط³غŒط±ظ‡ط§غŒ ع©ظ„غŒط¯â€ŒغŒ ظ…ظˆط¯غŒط§ظ†.
- ط¯ط± طµظˆط±طھ طھظ…ط§غŒظ„ ط¨ظ‡ ط­ط°ظپ ظ‡ط´ط¯ط§ط± ESLintظگ آ«patchآ»: ط¨ط±ط±ط³غŒ ط³ط§ط²ع¯ط§ط±غŒ ظ†ط³ط®ظ‡â€Œظ‡ط§ غŒط§ ط­ط°ظپ patch ط؛غŒط±ط¶ط±ظˆط±غŒ.
- **آ«ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§آ» ط¯ط± ط¬ط¯ط§ظˆظ„ طµظˆط±طھط­ط³ط§ط¨**: ط¯ط± طµظپط­ظ‡ ط¬ط²ط¦غŒط§طھ طµظˆط±طھط­ط³ط§ط¨ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒطŒ ظ…ظ†ظˆغŒ ط§ظ†طھط®ط§ط¨ ط³طھظˆظ†â€Œظ‡ط§ ط¨ط±ط§غŒ ط¬ط¯ظˆظ„ ط§ظ‚ظ„ط§ظ… ظ‡ظ…ط±ط§ظ‡ ط¨ط§ ط¯ع©ظ…ظ‡ آ«ظ¾غŒط´â€Œظپط±ط¶آ» ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡ط› ط§ظ…ط§ ظ…ط­ظ„ ظ†ع¯ظ‡â€Œط¯ط§ط±غŒ طھظ†ط¸غŒظ…ط§طھ (ظ…ط«ظ„ط§ظ‹ `localStorage` غŒط§ ط³ظ…طھ ط³ط±ظˆط±) ظˆ ط¯ط§ظ…ظ†ظ‡ظ” ط®ط±ظˆط¬غŒ ط§ع©ط³ظ„ (ظ‡ظ…ظ‡ظ” ط±ع©ظˆط±ط¯ظ‡ط§غŒ ظپغŒظ„طھط±ط´ط¯ظ‡ غŒط§ ظپظ‚ط· طµظپط­ظ‡ظ” ط¬ط§ط±غŒ) ظ‡ظ†ظˆط² ظ†غŒط§ط² ط¨ظ‡ طھطµظ…غŒظ… ظ…ط­طµظˆظ„ ط¯ط§ط±ط¯.
- **غŒع©ظ†ظˆط§ط®طھغŒ طھط§ط±غŒط® ط¬ظ„ط§ظ„غŒ ط¯ط± ظپغŒظ„طھط±ظ‡ط§**: ط±غŒط³ع© ظ†ط§ط³ط§ط²ع¯ط§ط±غŒ ط¨غŒظ† طµظپط­ط§طھط› ظ¾غŒط´ظ†ظ‡ط§ط¯ ط§غŒط¬ط§ط¯ غŒع© util ظ…ط±ع©ط²غŒ (ظ…ط«ظ„ط§ظ‹ `toISOJalali / parseJalali`) ظˆ ظ…طµط±ظپ غŒع©ظ†ظˆط§ط®طھ ط¯ط± `SearchByFilters`. :contentReference[oaicite:3]{index=3}
- **ظˆط§عکع¯ط§ظ†/enum آ«ظ…ظˆط¶ظˆط¹ طµظˆط±طھط­ط³ط§ط¨آ»**: طھط£غŒغŒط¯ ظ†ظ‡ط§غŒغŒ ط¯ط§ظ…ظ†ظ‡ ظˆ طھظˆظ„غŒ...ط¯ `enum/constant` ظ…ط´طھط±ع© ظپط±ط§ظ†طھ/ط¨ع© ط¨ط±ط§غŒ ط¬ظ„ظˆع¯غŒط±غŒ ط§ط² ط¯ظˆط¨ط§ط±ظ‡â€Œع©ط§ط±غŒ UI.
- **ط§ط³طھط§ظ†ط¯ط§ط±ط¯ط³ط§ط²غŒ Barrel-only ط¯ط± ظ…ظˆط¯غŒط§ظ†**: ظ¾ط§غŒط´ ظ…ط³طھظ…ط± ط§غŒظ…ظ¾ظˆط±...ط³طھ barrel ظˆ ظ‚ظˆط§ظ†غŒظ† ESLint (no-restricted-imports, import/order).

> غŒط§ط¯ط¯ط§ط´طھ: ظ†ظˆط§ط± ط§ط¨ط²ط§ط± ط¬ط¯ظˆظ„ آ«ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒآ» (ط¢غŒع©ظˆظ† ط§ع©ط³ظ„ + ط¯ع©ظ…ظ‡â€ŒغŒ ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§) ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡ ظˆ ظ¾ط§غŒط¯ط§ط± ط§ط³طھط› ط§ط¯ط§ظ…ظ‡â€ŒغŒ ع©ط§ط± ط±ظˆغŒ آ«ظ¾ظ†ظ„ ط§ظ†طھط®ط§ط¨ ط³طھظˆظ†â€Œظ‡ط§آ» ظˆ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ طھظ†ط¸غŒظ…ط§طھ ط·ط¨ظ‚ طھطµظ…غŒظ… ط¨ط§ظ„ط§ ط§ظ†ط¬ط§ظ… ظ…غŒâ€Œط´ظˆط¯. :contentReference[oaicite:6]{index=6}
- **طµظپط­ظ‡ آ«ط¬ط²ط¦غŒط§طھ طµظˆط±طھط­ط³ط§ط¨ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒآ»**: ط§ط³ع©ظ„طھ طµظپط­ظ‡ ط´ط§ظ…ظ„ ظ‡ط¯ط±طŒ ط¨ظ„ظˆع©â€Œظ‡ط§غŒ ط§ط·ظ„ط§ط¹ط§طھغŒ ظ…ط´طھط±ع©طŒ ط¬ط¯ظˆظ„ غ²غ¹ ط³طھظˆظ†غŒ آ«ط§ظ‚ظ„ط§ظ… طµظˆط±طھط­ط³ط§ط¨آ» ط¨ط§ ظ…ظ†ظˆغŒ ط§ظ†طھط®ط§ط¨ ط³طھظˆظ†â€Œظ‡ط§ ظˆ ط¨ط®ط´ آ«ط§ط·ظ„ط§ط¹ط§طھ ظ¾ط±ط¯ط§ط®طھآ» طھع©ظ…غŒظ„ ط´ط¯ظ‡ ط§ط³طھط› ط¬ط¯ظˆظ„ آ«ظ¾ط±ط¯ط§ط®طھâ€Œظ‡ط§آ» ظˆ ط§طھطµط§ظ„ ط¨ظ‡ ط¯ط§ط¯ظ‡â€Œظ‡ط§غŒ ظˆط§ظ‚ط¹غŒ (غŒط§ Mock ط³ط§ط®طھط§ط±ظ…ظ†ط¯) ط¨ط±ط§غŒ ط§ط³ظ¾ط±غŒظ†طھ ط¨ط¹ط¯غŒ ط¨ط±ظ†ط§ظ…ظ‡â€Œط±غŒط²غŒ ط´ط¯ظ‡â€Œط§ظ†ط¯.
- **غŒع©ظ¾ط§ط±ع†ع¯غŒ طھط§ط±غŒط® ط¬ظ„ط§ظ„غŒ**: ظپغŒظ„ط¯ظ‡ط§غŒ طھط§ط±غŒط® ط§ط®طھطµط§طµغŒ ظ…ظˆط¯غŒط§ظ† (Jalali) ط¯ط± Shared Search Suite ظ…طµط±ظپ ظ…غŒâ€Œط´ظˆظ†ط¯ط› ط°ط®غŒط±ظ‡/ط§ط±ط³ط§ظ„ ط¨ظ‡ ISO ط¯ط± ظ„ط§غŒظ‡ظ” ظپط±ط§ظ†طھ ط§ظ†ط¬ط§ظ… ط´ظˆط¯.
- **طµظپط­ظ‡ آ«ط¬ط²ط¦غŒط§طھ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒآ»**: ط§ط³ع©ظ„طھ طµظپط­ظ‡ ط¯ط± ظ…ط³غŒط± `src/app/simulators/modian/invoices/buy/detail/page.tsx` ط´ط§ظ…ظ„ ظ‡ط¯ط± آ«طµظˆط±طھط­ط³ط§ط¨ ط®ط±غŒط¯آ»طŒ ط¨ظ„ظˆع©â€Œظ‡ط§غŒ آ«ظ…ط´ط®طµط§طھ طµظˆط±طھط­ط³ط§ط¨/ظپط±ظˆط´ظ†ط¯ظ‡/ط®ط±غŒط¯ط§ط±آ»طŒ ط¬ط¯ظˆظ„ غ²غ¹ ط³طھظˆظ†ظ‡ظ” ط§ظ‚ظ„ط§ظ… ط¨ط§ ط§ط³ع©ط±ظˆظ„ ط§ظپظ‚غŒ ظˆ ظ…ظ†ظˆغŒ آ«ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§آ» ظˆ ط¨ط®ط´ آ«ط§ط·ظ„ط§ط¹ط§طھ ظ¾ط±ط¯ط§ط®طھآ» ظ¾غŒط§ط¯ظ‡ ط´ط¯ظ‡ ط§ط³طھط› ط¬ط¯ظˆظ„ آ«ظ¾ط±ط¯ط§ط®طھâ€Œظ‡ط§آ» ظˆ ط§طھطµط§ظ„ ط¯ط§ط¯ظ‡ظ” ظˆط§ظ‚ط¹غŒ/Mock ط¨ط§غŒط¯ ط¯ط± ط§ط³ظ¾ط±غŒظ†طھ ط¨ط¹ط¯غŒ طھع©ظ…غŒظ„ ط´ظˆط¯.
- **ط§ط³طھط®ط±ط§ط¬ ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒ ظ…ط´طھط±ع© طµظپط­ظ‡ ط¬ط²ط¦غŒط§طھ**: ط·ط¨ظ‚ ط¨ط±ظ†ط§ظ…ظ‡ طھغŒظ… ظ…ظˆط¯غŒط§ظ†طŒ ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒ `InvoiceDetailSection`, `InvoiceExpandableCard`, `InvoiceColumnsChooser` ط¨ظ‡â€Œطµظˆط±طھ ظ…ط§عکظˆظ„ط§ط± ط§ط³طھط®ط±ط§ط¬ ظ…غŒâ€Œط´ظˆظ†ط¯ طھط§ ط¯ط± ط³ط§غŒط± طµظپط­ط§طھ ط¬ط²ط¦غŒط§طھ طµظˆط±طھط­ط³ط§ط¨ ظ‚ط§ط¨ظ„â€Œط§ط³طھظپط§ط¯ظ‡ ط¨ط§ط´ظ†ط¯.
 ---

## 12) ط®ظ„ط§طµظ‡â€ŒغŒ طھطµظ…غŒظ…ط§طھ ع©ظ„غŒط¯غŒ ط§غŒظ† ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ

- **طھظپع©غŒع© ظ…ط§عکظˆظ„â€Œظ‡ط§ ظˆ ظ„ط§غŒظ‡â€Œظ‡ط§غŒ layout ط¨ظ‡â€Œطµظˆط±طھ ط§ط³طھط§ظ†ط¯ط§ط±ط¯.**
- **ع©ظ„ط§غŒظ†طھâ€Œط³ط§ط²غŒ طµظپط­ط§طھ ظ…ظˆط¯غŒط§ظ†** + ط­ظ„ ط®ط·ط§غŒ `useSearchParams` ط¨ط§ **ظ…ط±ط² `Suspense`**.
- ط³ط§ط®طھ **ظپط§غŒظ„â€Œظ‡ط§غŒ ط­ط¯ط§ظ‚ظ„غŒ** (`page.tsx`/`layout.tsx`) ظپظ‚ط· ط¨ط±ط§غŒ ظ¾ط§ط³ ع©ط±ط¯ظ† ظ‚ط±ط§ط±ط¯ط§ط¯ App Router ظˆ ط¬ظ„ظˆع¯غŒط±غŒ ط§ط² ط®ط·ط§غŒ آ«ط¨ط§غŒط¯ غŒع© ع©ط§ظ…ظ¾ظˆظ†ظ†طھ ط¨ط±ع¯ط±ط¯ط¯آ».
- طµط±غŒط­â€Œط³ط§ط²غŒ ط¯ط±ط¨ط§ط±ظ‡â€ŒغŒ **Tailwind custom utility**â€Œظ‡ط§ (ظ…ط«ظ„ `bg-background`).

## غŒط§ط¯ط¯ط§ط´طھ طھط؛غŒغŒط± ط³ط§ط®طھط§ط±غŒ (ظ…ظˆط¯غŒط§ظ†) â€” ط­ط°ظپ ط³ع¯ظ…ظ†طھ `admin`
ط§ط² ط§غŒظ† ط¨ظ‡ ط¨ط¹ط¯طŒ ظ…ط³غŒط± ط§ط³طھط§ظ†ط¯ط§ط±ط¯ آ«ظ¾ط±ظˆظ†ط¯ظ‡ظ” ظ…ط§ظ„غŒط§طھغŒ ظˆ ط¹ط¶ظˆغŒطھآ» ط¯ط± ظ…ظˆط¯غŒط§ظ† **ط¨ط¯ظˆظ† ط³ع¯ظ…ظ†طھ `admin`** ط§ط³طھ:

```text
/simulators/modian/taxfile/...    âœ… ط§ط³طھط§ظ†ط¯ط§ط±ط¯
/simulators/modian/admin/taxfile  â›” ط؛غŒط±ط§ط³طھط§ظ†ط¯ط§ط±ط¯ (طµط±ظپط§ظ‹ ط¨ط±ط§غŒ Redirectظ‡ط§غŒ ظ…ظˆظ‚طھ)
```

- ط§ع¯ط± ظ„غŒظ†ع©/ط§ط±ط¬ط§ط¹غŒ ط¯ط± ع©ط¯ ظ‡ظ†ظˆط² ط¨ظ‡ ظ…ط³غŒط± ظ‚ط¯غŒظ…غŒ (`/simulators/modian/admin/...`) ط§ط´ط§ط±ظ‡ ظ…غŒâ€Œع©ظ†ط¯طŒ ط¨ط§غŒط¯ ط¯ط± ط§ظˆظ„غŒظ† ظپط±طµطھ ط¨ظ‡ ظ…ط³غŒط±ظ‡ط§غŒ ط¬ط¯غŒط¯ ظ…ظ†طھظ‚ظ„ ط´ظˆط¯ ظˆ ظپظ‚ط· Redirect ط³ظ…طھ ط³ط±ظˆط±/ظپط±ط§ظ†طھ ط¨ط±ط§غŒ ط­ظپط¸ ط³ط§ط²ع¯ط§ط±غŒ ط¨ط§ظ‚غŒ ط¨ظ…ط§ظ†ط¯.
- **ظ‚ط§ط¹ط¯ظ‡ظ” ظ†ط§ظ…â€Œع¯ط°ط§ط±غŒ:** ط§ط³طھظپط§ط¯ظ‡ ط§ط² ط³ع¯ظ…ظ†طھ `admin/` ط¯ط± ط²غŒط±ط´ط§ط®ظ‡ظ” `modian/` ظ…ظ…ظ†ظˆط¹ ط§ط³طھ. ظ‡ط± ط¨ط®ط´ ظ…ط¯غŒط±غŒطھغŒ ط¨ط§غŒط¯ ط¨ط§ ظ†ط§ظ… ظ…ط¹ظ†ط§غŒغŒ ط®ظˆط¯ط´ ط¯ط± ظ‡ظ…ط§ظ† ط³ط·ط­ ظ‚ط±ط§ط± ع¯غŒط±ط¯
  (ظ…ط«ظ„ط§ظ‹ `modian/dashboard`, `modian/taxfile`, ...). ظ„غŒظ†ع©â€Œظ‡ط§غŒ ظ‚ط¯غŒظ…غŒ طµط±ظپط§ظ‹ ط¨ط§ Redirect ط­ظپط¸ ط³ط§ط²ع¯ط§ط±غŒ ظ…غŒâ€Œط´ظˆظ†ط¯ ظˆ ظ†ط¨ط§غŒط¯ ط¯ط± ع©ط¯ ط¨ظ‡â€Œطµظˆط±طھ ظ…ط³طھظ‚غŒظ… ط§ط³طھظپط§ط¯ظ‡ ط´ظˆظ†ط¯.
---
## 13) ESLint ط­ظˆط²ظ‡â€Œط§غŒ (Modian) â€” ظ‚ظˆط§ظ†غŒظ† ظˆ ط§ط³ع©ط±غŒظ¾طھâ€Œظ‡ط§

ط§غŒظ† ط¨ط®ط´ ط¨ط±ط§غŒ ظ‡ظ…â€Œط±ط§ط³طھط§ط³ط§ط²غŒ ط¨ط§ **Phase C** ط¯ط± آ«checklist_package_1آ» ط§ط¶ط§ظپظ‡ ط´ط¯ ظˆ ظ…ط¹غŒط§ط± ظ…ظ…غŒط²غŒ ط±ط§ ظ…ط³طھظ†ط¯ ظ…غŒâ€Œع©ظ†ط¯.
ظ‚ظˆط§ظ†غŒظ† ط§ظ„ط²ط§ظ…غŒ:
1) `react-hooks/rules-of-hooks` ظˆ `react-hooks/exhaustive-deps` **ظپط¹ط§ظ„** ط¨ط§ط´ظ†ط¯.
2) `import/order` ط¨ط§ ع¯ط±ظˆظ‡â€Œط¨ظ†ط¯غŒ ط§ط³طھط§ظ†ط¯ط§ط±ط¯: `builtin`, `external`, `internal`, `parent`, `sibling`, `index` ظˆ **غŒع© ط®ط· ظپط§طµظ„ظ‡** ط¨غŒظ† ع¯ط±ظˆظ‡â€Œظ‡ط§.
3) `no-restricted-imports` ط¨ط±ط§غŒ ظ…ظ†ط¹ import ظ…ط³طھظ‚غŒظ… ط§ط² ظ…ط³غŒط±ظ‡ط§غŒ ط¯ط§ط®ظ„غŒ `modian/ui/*` ظˆ `modian/common/*`ط› **ظ…طµط±ظپ ظپظ‚ط· ط§ط² Barrel**:
   - `@/components/modian/ui`
   - `@/components/modian/common`
4) ط§ط³ع©ط±غŒظ¾طھâ€Œظ‡ط§غŒ ظ…ظˆط±ط¯ ط§ظ†طھط¸ط§ط± (ط¨ط±ط§غŒ ط§ط³طھظ†ط§ط¯ CI ظˆ ظ¾ط°غŒط±ط´):
   - `lint` طŒ `lint:strict` طŒ `typecheck` طŒ `build`

ظ†ع©طھظ‡: ظ‡ط´ط¯ط§ط±ظ‡ط§غŒ ESLint ظ…غŒâ€Œطھظˆط§ظ†ظ†ط¯ ط¯ط± ظپط§ط²ظ‡ط§غŒ ظ‚ط¨ظ„غŒ ظˆط¬ظˆط¯ ط¯ط§ط´طھظ‡ ط¨ط§ط´ظ†ط¯ط› ط§ظ…ط§ ط¨ط±ط§غŒ **ط®ط±ظˆط¬غŒ ظ†ظ‡ط§غŒغŒ ط¨ط³طھظ‡ غ±**طŒ ط¢ط³طھط§ظ†ظ‡ظ” ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ آ«طµظپط± ظ‡ط´ط¯ط§ط±آ» ط§ط³طھ.

## 14) CI â€” lint/typecheck/build (ط§ظ„ط²ط§ظ…ط§طھ ط³ط¨ع©)

- ط§ط¬ط±ط§غŒ Jobظ‡ط§غŒ `lint:ci`طŒ `typecheck` ظˆ `build` ط±ظˆغŒ Pull Request/Merge Request.
 - ط´ع©ط³طھ ط®ظˆط¯ع©ط§ط± PR ط§ع¯ط± ظ‡ط±ع©ط¯ط§ظ… ط§ط² ط§غŒظ† Jobظ‡ط§ (ط¨ظ‡â€Œط®طµظˆطµ `lint:ci`) ط®ط·ط§ غŒط§ ظ‡ط´ط¯ط§ط± ط¬ط¯غŒط¯غŒ طھظˆظ„غŒط¯ ع©ظ†ظ†ط¯
   ظ†ط³ط¨طھ ط¨ظ‡ baseline طµظپط± ظ‡ط´ط¯ط§ط± ط±ظˆغŒ `main`.
- ط®ط±ظˆط¬غŒ ط§غŒظ† Jobظ‡ط§ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ظ…ط¹غŒط§ط± ظ¾ط°غŒط±ط´ ظپظ†غŒ ط«ط¨طھ ظ…غŒâ€Œط´ظˆط¯.

- **ط§ظ„ط²ط§ظ… ط§ط¬ط±ط§غŒغŒ (Governance):**
  - PR ط¨ط¯ظˆظ† ط¹ط¨ظˆط± ط§ط² ع†ع©â€Œظ‡ط§غŒ CI ظ†ط¨ط§غŒط¯ merge ط´ظˆط¯ (Branch Protection ط¨ط§غŒط¯ ط§غŒظ† ع†ع©â€Œظ‡ط§ ط±ط§ *Required* ع©ظ†ط¯).
  - ط¹ظ„ط§ظˆظ‡ ط¨ط± lint/typecheck/buildطŒ غŒع© Job ظ…ط³طھظ‚ظ„ ط¨ط±ط§غŒ **Docs Sync** ظ„ط§ط²ظ… ط§ط³طھ:
    - ط§ط¬ط±ط§غŒ `npm run docs:all` ظˆ ط³ظ¾ط³ fail ط´ط¯ظ† PR ط¯ط± طµظˆط±طھ ظˆط¬ظˆط¯ `git diff`
    - ظ‡ط¯ظپ: ط¬ظ„ظˆع¯غŒط±غŒ ط§ط² Drift ط¨غŒظ† ظ…ط³طھظ†ط¯ط§طھ ط³ط§ط®طھط§ط± ظˆ treeظ‡ط§غŒ ظˆط§ظ‚ط¹غŒ.
  - طھط؛غŒغŒط±ط§طھ ط²غŒط± `src/app/api/**` **ط­ط³ط§ط³ ط§ظ…ظ†غŒطھغŒ** ظ‡ط³طھظ†ط¯:
    - ط¨ط§غŒط¯ Review ط§ط¬ط¨ط§ط±غŒ Security/Structure ط¯ط§ط´طھظ‡ ط¨ط§ط´ظ†ط¯ (طھط±ط¬غŒط­ط§ظ‹ ط¨ط§ `CODEOWNERS`).
  - PR Template ط¨ط§غŒط¯ ط´ط§ظ…ظ„ ع†ع©â€Œظ„غŒط³طھ آ«PR Gate / Definition of Doneآ» ط¨ط§ط´ط¯ طھط§ ط¯ظˆط±ط²ط¯ظ† ظپط±ط¢غŒظ†ط¯ ط³ط®طھ ط´ظˆط¯.

## 15) Definition of Done â€” checklist_package_1

- `eslint.config.mjs` ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ظˆ ظ‚ظˆط§ظ†غŒظ† ط­ظˆط²ظ‡â€Œط§غŒ ظپط¹ط§ظ„ (ط¨ظ†ط¯ظ‡ط§غŒ 13.1 طھط§ 13.3).
- ط³ط§ط®طھط§ط± `components/modian` ظ…ط§عکظˆظ„ط§ط± ظˆ **Barrel-only** (ظ‚ظˆط§ظ†غŒظ† 13.3).
- `npm run build` ط³ط¨ط² + `npm run lint:ci` **ط¨ط¯ظˆظ† ظ‡غŒع† ظ‡ط´ط¯ط§ط± ظˆ ط®ط·ط§**.
 - ظˆط¶ط¹غŒطھ ظپط¹ظ„غŒ `main` ط¨ط§ ظ‡ظ…غŒظ† ظ…ط¹غŒط§ط± ط³ظ†ط¬غŒط¯ظ‡ ط´ط¯ظ‡ ظˆ ط¯ط± ط²ظ…ط§ظ† ظ†ع¯ط§ط±ط´ ط§غŒظ† ط³ظ†ط¯طŒ ظ‡ط± ط¯ظˆ ظپط±ظ…ط§ظ†
   `npm run lint:ci` ظˆ `npm run build` ط±ظˆغŒ `main` ط³ط¨ط² ظˆ ط¨ط¯ظˆظ† ظ‡ط´ط¯ط§ط± ظ‡ط³طھظ†ط¯ (baseline طµظپط± ظ‡ط´ط¯ط§ط±).
- ظ…ط³طھظ†ط¯ط§طھ (ظ‡ظ…غŒظ† ظپط§غŒظ„) ط¨ط§ ظ‚ظˆط§ظ†غŒظ† ESLintطŒ CI ظˆ ط³ط§ط®طھط§ط± ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ط´ط¯ظ‡ ط§ط³طھ (ط§غŒظ† ظ¾ع†).

## 16) ع¯ط²ط§ط±ط´ ظˆط¶ط¹غŒطھ طھغŒظ… ظ…ظˆط¯غŒط§ظ† â€” غ±غ´غ°غ´/غ°غ¸/غ±غ¹
**ط¬ظ…ط¹â€Œط¨ظ†ط¯غŒ ع©ط§ط±ظ‡ط§غŒ Done**
- ظ‡ط¯ط± ط¬ط³طھط¬ظˆ/ظپغŒظ„طھط± آ«طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒآ» ط¨ظ‡ ظ†ط³ط®ظ‡ظ” ظ‚ط§ط¨ظ„â€Œط§ط³...ط±ط³طھظˆظ†ظ‡ ظˆ آ«ظ…ظˆط¶ظˆط¹ طµظˆط±طھط­ط³ط§ط¨آ».
- ظ…ظ†ط·ظ‚ Toolbar: ط¯ط± ط­ط§ظ„طھ آ«ظ¾غŒط´ط±ظپطھظ‡ ط¨ط§ط²آ» ظپظ‚ط· غŒع© ط¬ظپطھ ط¯ع©ظ…ظ‡ ط¯ط± ظ¾ط§غŒ...طھط± ظ¾غŒط´â€Œظپط±ط¶آ» ظ†غŒط² ظ‡ظ…ط§ظ‡ظ†ع¯ ط´ط¯.

**طھطµظ…غŒظ…ط§طھ ظˆ ط§ط³طھط§ظ†ط¯ط§ط±ط¯ظ‡ط§**
- ظ¾غŒط´â€Œظپط±ط¶ ظپغŒظ„ط¯ظ‡ط§غŒ طھط§ط±غŒط® ظپغŒظ„طھط±ظ‡ط§: آ«ظپطµظ„ ط¬ط§ط±غŒ ط¬ظ„ط§ظ„غŒآ» (ظ‡ظ…ط±ط§ط³طھط§ ط¨ط§ ظ…ط±ط¬ط¹ ظˆ ع©ط§ظ‡ط´ ع©ظ„غŒع©).
- ظ…طµط±ظپ طµط±ظپط§ظ‹ ط§ط² Barrelظ‡ط§غŒ طھط¹غŒغŒظ†â€Œط´ط¯ظ‡ ط¯ط± Modian UI/Common (طھع©ط±ط§ط± طھط£ع©غŒط¯).

**WIP/ط±غŒط³ع©â€Œظ‡ط§ ظˆ ط§ظ‚ط¯ط§ظ… ظ…طھظ‚ط§ط¨ظ„**
- ظ¾غŒط´â€Œظپط±ط¶ ظپغŒظ„ط¯ظ‡ط§غŒ طھط§ط±غŒط® ظپغŒظ„طھط±ظ‡ط§: آ«ظپطµظ„ ط¬ط§ط±غŒ ط¬ظ„ط§ظ„غŒآ» (ظ‡ظ…ط±ط§ط³طھط§ ط¨ط§ ظ…ط±ط¬ط¹ ظˆ ع©ط§ظ‡ط´ ع©ظ„غŒع©).
- ظ…طµط±ظپ طµط±ظپط§ظ‹ ط§ط² Barrelظ‡ط§غŒ طھط¹غŒغŒظ†â€Œط´ط¯ظ‡ ط¯ط± Modian UI/Common (طھع©ط±ط§ط± طھط£ع©غŒط¯).

**ظˆط¶ط¹غŒطھ ع©غŒظپغŒ**
- Build âœ… / Lint âœ… (ط§ط®ط·ط§ط±ظ‡ط§غŒ ط³ط§ط¨ظ‚ ظ¾ط±ط§ع©ظ†ط¯ظ‡ ط¯ط± ظ…ط­ط¯ظˆط¯ظ‡â€Œظ‡ط§غŒ ط؛غŒط±ط¯ط§ظ…ظ†ظ‡â€Œط§غŒ ط¯ط± ط­ط§ظ„ ظ¾ط§ع©ط³ط§ط²غŒ).

## 17) ع¯ط²ط§ط±ط´ ظˆط¶ط¹غŒطھ ع©ظ„غŒ ظ¾ط±ظˆعکظ‡ â€” غ±غ´غ°غ´/غ°غ¹/غ°غµ

ط¨ط± ط§ط³ط§ط³ ظپط§غŒظ„ `project-status-report14040905.txt`.

### 17.1) ظ…ط³طھظ†ط¯ط§طھ ظˆ ط§ط³طھط§ظ†ط¯ط§ط±ط¯ظ‡ط§غŒ ط¹ظ…ظˆظ…غŒ

- ط³ط§ط®طھط§ط± آ«ع¯ط²ط§ط±ط´ ظˆط¶ط¹غŒطھ طھغŒظ…آ» ط¨ط± ط§ط³ط§ط³ ظپط§غŒظ„â€Œظ‡ط§غŒ `team-status-report-prompt.txt` ظˆ `team-status-report-template.md`
  طھط«ط¨غŒطھ ط´ط¯ظ‡ ظˆ ظ‡ظ…غŒظ† ع¯ط²ط§ط±ط´طŒ ط®ط±ظˆط¬غŒ ظ‡ظ…ط§ظ† ط³ط§ط®طھط§ط± ط§ط³طھ. ط§غŒظ† ظ‚ط§ظ„ط¨ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ط§ظ„ع¯ظˆغŒ ط±ط³ظ…غŒ ط¨ط±ط§غŒ ع¯ط²ط§ط±ط´ ظˆط¶ط¹غŒطھ طھغŒظ…â€Œظ‡ط§ ط¯ط±
  ظپط±ط§ظ†طھâ€Œط§ظ†ط¯ ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯.

### 17.2) ط§ط³طھط§ظ†ط¯ط§ط±ط¯ظ‡ط§غŒ UI ظˆ Barrelظ‡ط§ ط¯ط± ظ…ظˆط¯غŒط§ظ†

- ط§ط³طھظپط§ط¯ظ‡ ط§ط² barrelظ‡ط§غŒ ظ…ظˆط¯غŒط§ظ† ط¨ط±ط§غŒ ط§غŒظ…ظ¾ظˆط±طھâ€Œظ‡ط§ (ع©ط¯ ظ†ظ…ظˆظ†ظ‡ ط¯ط± SearchByFilters):
  - `@/components/modian/ui` ط¨ط±ط§غŒ ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒ UI ط¹ظ…ظˆظ…غŒ ظ…ظˆط¯غŒط§ظ† ظ…ط«ظ„:
    `Card`, `FieldGrid`, `FormField`, `IconChevronDown`, `IconSearch`, `IconFilter`, ...
  - `@/components/modian/common` ط¨ط±ط§غŒ ط§ط¬ط²ط§غŒ ظ…ط´طھط±ع© ط¯ط§ظ…ظ†ظ‡â€Œط§غŒ ظ…ط«ظ„:
    `ModianJalaliDateField` ظˆ ط³ط§غŒط± ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒ ظ…ط´طھط±ع© ظ…ظˆط¯غŒط§ظ†.
- ط§ظ„ع¯ظˆغŒ `FormField` ط¨ط§ `variant="floating"` ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ط§ط³طھط§ظ†ط¯ط§ط±ط¯ ظ„غŒط¨ظ„â€Œظ‡ط§غŒ ط´ظ†ط§ظˆط±
  ط¯ط± ظپغŒظ„ط¯ظ‡ط§غŒ summary ظˆ advanced ط¨ط±ط§غŒ ظپط±ظ…â€Œظ‡ط§غŒ ظ…ظˆط¯غŒط§ظ† طھط«ط¨غŒطھ ط´ط¯.
- utilityظ‡ط§غŒ ط²غŒط± ط¯ط± SearchByFilters ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ظ…ط±ط¬ط¹ ظˆط§ط­ط¯ ط¨ط±ط§غŒ طµظپط­ط§طھ ظ…ط´ط§ط¨ظ‡ (طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§طŒ ع¯ط²ط§ط±ط´â€Œظ‡ط§ ظˆ â€¦) طھط¹ط±غŒظپ ط´ط¯ظ‡â€Œط§ظ†ط¯:
  - `toEnDigits`, `onlyDigits`, `formatMoney` ط¨ط±ط§غŒ طھط¨ط¯غŒظ„ ظˆ ظپط±ظ…طھâ€Œع©ط±ط¯ظ† ظˆط±ظˆط¯غŒâ€Œظ‡ط§غŒ ط¹ط¯ط¯غŒ (ط¨ظ‡â€Œط®طµظˆطµ ط§ط±ظ‚ط§ظ… ظپط§ط±ط³غŒ â†” ط§ظ†ع¯ظ„غŒط³غŒ).
  - `extractJalaliYM` ط¨ط±ط§غŒ ط§ط³طھط®ط±ط§ط¬ ط³ط§ظ„/ظ…ط§ظ‡ ط¬ظ„ط§ظ„غŒ ط§ط² ط®ط±ظˆط¬غŒâ€Œظ‡ط§غŒ ظ…ط®طھظ„ظپ `/api/utils/today`
    (ط³ط§ط®طھط§ط±ظ‡ط§غŒ ظ…طھظپط§ظˆطھ JSON غŒط§ ط±ط´طھظ‡â€Œظ‡ط§غŒ طھط§ط±غŒط® ظ…ط«ظ„ `"1404/08/17"`طŒ `"غ±غ´غ°غ´-غ°غ¸-غ±غ·"` ظˆ â€¦).

### 17.3) ع©غŒطھ UI ظ…ظˆط¯غŒط§ظ† (ظ…طµط±ظپâ€Œط´ط¯ظ‡ ط¯ط± ط§غŒظ† ط¯ظˆط±ظ‡)

ط¨ط±ط§غŒ ط±ظ‡ع¯غŒط±غŒ ظ…ظ‡ط§ط¬ط±طھ ط¨ظ‡ ع©غŒطھ UI ظ…ظˆط¯غŒط§ظ†طŒ ظ„غŒط³طھ ط²غŒط± ظ…ط¬ظ…ظˆط¹ظ‡â€ŒغŒ ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒغŒ ط§ط³طھ ع©ظ‡ ط¯ط± ط§غŒظ† ط¨ط§ط²ظ‡ ظ…طµط±ظپ ط´ط¯ظ‡â€Œط§ظ†ط¯:

- `Card`, `FieldGrid`, `FormField`, `IconChevronDown`, `IconSearch`, `IconFilter`
- `ModianJalaliDateField`
- `ModianSubHeader` (layout ط³ط§ط¨â€Œظ‡ط¯ط± ظ…ظˆط¯غŒط§ظ† ظˆ breadcrumb ط¨ط§ظ„ط§غŒ طµظپط­ط§طھ)

## 18) ع¯ط²ط§ط±ط´ ظˆط¶ط¹غŒطھ طھغŒظ… ظ…ظˆط¯غŒط§ظ† â€” غ±غ´غ°غ´/غ°غ¹/غ°غµ

ط¨ط± ط§ط³ط§ط³ ظپط§غŒظ„ `team2-status-report-14040905.txt`.

### 18.1) ظ…ظˆط§ط±ط¯ ظ†غŒط§ط²ظ…ظ†ط¯ طھطµظ…غŒظ…/طھط£غŒغŒط¯ ظ…ط¯غŒط± ظ¾ط±ظˆعکظ‡

1. **ظ¾غŒط´â€Œظپط±ط¶ ط¯ظˆط±ظ‡/ط³ط§ظ„ ط¯ط± طھط¨ آ«ط§ط¸ظ‡ط§ط±ظ†ط§ظ…ظ‡آ» طµظپط­ظ‡ظ” ع¯ط²ط§ط±ط´ ظپط§غŒظ„â€Œظ‡ط§غŒ ط®ط±ظˆط¬غŒ**
   - ط¯ط± UI ظپط¹ظ„غŒطŒ ط¯ظˆط±ظ‡ظ” ظ¾غŒط´â€Œظپط±ط¶ ط¨ط± ط§ط³ط§ط³ ظپطµظ„ ط¬ط§ط±غŒ ظ…ط­ط§ط³ط¨ظ‡ ظ…غŒâ€Œط´ظˆط¯ (ظ…ط«ظ„ط§ظ‹ ط§ع¯ط± ظپطµظ„ ظپط¹ظ„غŒ Q3 ط¨ط§ط´ط¯طŒ ظ…ظ‚ط¯ط§ط± ظ¾غŒط´â€Œظپط±ط¶ Q2 ظ‡ظ…ط§ظ† ط³ط§ظ„ ط§ط³طھ).
   - ظ„ط§ط²ظ… ط§ط³طھ ط§غŒظ† ط±ظپطھط§ط± ط¯ط± ط³ط·ط­ ظ…ط­طµظˆظ„/ط¨ع©â€Œط§ظ†ط¯ طھط£غŒغŒط¯ ط´ظˆط¯ غŒط§ ط¯ط± طµظˆط±طھ ظ†غŒط§ط²طŒ ط¨ط§ ظ…ظ†ط·ظ‚ ط¯ظ‚غŒظ‚â€Œطھط±غŒ (ظ…ط«ظ„ط§ظ‹ ط¨ط± ط§ط³ط§ط³ طھط§ط±غŒط® ط´ط±ظˆط¹/ظ¾ط§غŒط§ظ† ط¯ظˆط±ظ‡)
     ط¬ط§غŒع¯ط²غŒظ† ع¯ط±ط¯ط¯.

2. **ط³ط·ط­ آ«ظ…ط§ع©آ» ط¨ظˆط¯ظ† طµظپط­ظ‡ظ” ع¯ط²ط§ط±ط´ ظپط§غŒظ„â€Œظ‡ط§غŒ ط®ط±ظˆط¬غŒ**
   - ع¯ط²غŒظ†ظ‡ظ” A: ظ…ط±ط¬ UI ظˆ ط±ظپطھط§ط±ظ‡ط§غŒ ظپط±ظ…غŒ طµظپط­ظ‡ ط¨ط§ ط¯ط§ط¯ظ‡â€Œظ‡ط§غŒ ظ…ط§ع© طµط±ظپط§ظ‹ ط¨ط±ط§غŒ ط¯ظ…ظˆ ظˆ طھط³طھ UX.
   - ع¯ط²غŒظ†ظ‡ظ” B: ط¨ظ„ظˆع©ظ‡â€Œع©ط±ط¯ظ† ظ…ط±ط¬ طھط§ ط²ظ…ط§ظ†غŒ ع©ظ‡ ط§طھطµط§ظ„ ط¨ظ‡ API ظ„غŒط³طھ ظپط§غŒظ„â€Œظ‡ط§ ظˆ ظˆط¶ط¹غŒطھ ط¢ظ†â€Œظ‡ط§ ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ظˆط¯.
   - ظ¾غŒط´ظ†ظ‡ط§ط¯ طھغŒظ… ظ…ظˆط¯غŒط§ظ†: ع¯ط²غŒظ†ظ‡ظ” AطŒ ط¨ظ‡â€Œط´ط±ط·غŒ ع©ظ‡ آ«ظ…ط§ع© ط¨ظˆط¯ظ†آ» ط¨ظ‡â€Œطµظˆط±طھ طµط±غŒط­ ط¯ط± طھظˆط¶غŒط­ط§طھ ظپغŒع†ط± ظˆ ظ„ط§ع¯ ط§ط³ظ¾ط±غŒظ†طھ ط«ط¨طھ ط´ظˆط¯.

### 18.2) ظ…ط³طھظ†ط¯ط§طھطŒ ط§ط³طھط§ظ†ط¯ط§ط±ط¯ظ‡ط§ ظˆ ع©غŒطھ UI ط¯ط± ظپغŒع†ط± آ«ع¯ط²ط§ط±ط´ ظپط§غŒظ„â€Œظ‡ط§غŒ ط®ط±ظˆط¬غŒآ»

- ط§ظ„ع¯ظˆغŒ آ«ع¯ط²ط§ط±ط´ ظˆط¶ط¹غŒطھ طھغŒظ…آ» ظˆ ظ¾ط±ط§ظ…ظ¾طھ ع†طھ طھغŒظ… طھظˆط³ط¹ظ‡ ظ…ط·ط§ظ„ط¹ظ‡ ظˆ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ظ…ط¨ظ†ط§غŒ ظ‡ظ…غŒظ† ع¯ط²ط§ط±ط´ ط§ط³طھظپط§ط¯ظ‡ ط´ط¯ظ‡ ط§ط³طھ
  (ظ‡ظ…â€Œط±ط§ط³طھط§ ط¨ط§ `project-status-report14040905.txt`).
- ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒ ع©غŒطھ UI ظ…ظˆط¯غŒط§ظ† ع©ظ‡ ط¯ط± ط§غŒظ† ظپغŒع†ط± (ع¯ط²ط§ط±ط´ ظپط§غŒظ„â€Œظ‡ط§غŒ ط®ط±ظˆط¬غŒ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§) ظ…طµط±ظپ ط´ط¯ظ‡â€Œط§ظ†ط¯:
  - `ScrollableTableShell` ط¨ط±ط§غŒ ط¬ط¯ظˆظ„ ط§طµظ„غŒ ع¯ط²ط§ط±ط´ ظپط§غŒظ„â€Œظ‡ط§.
  - `FieldGrid` ظˆ `FormField` ط¨ط±ط§غŒ ع†غŒط¯ظ…ط§ظ† ظپغŒظ„ط¯ظ‡ط§ ظˆ ظ„غŒط¨ظ„ ط´ظ†ط§ظˆط± ظپط±ظ… (summary ظˆ advanced).
  - `ModianJalaliDateField` ط¨ط±ط§غŒ ظپغŒظ„ط¯ظ‡ط§غŒ طھط§ط±غŒط® ط¨ط§ طھظ‚ظˆغŒظ… ط¬ظ„ط§ظ„غŒ ط¯ط± طھط¨ آ«ظپط§غŒظ„ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§آ».

## 19) ع¯ط²ط§ط±ط´ ظˆط¶ط¹غŒطھ طھغŒظ… ظ…ظˆط¯غŒط§ظ† â€” غ±غ´غ°غ´/غ°غ¹/غ°غ·

ط¨ط± ط§ط³ط§ط³ ظپط§غŒظ„ `team2-status-report-14040907.txt`.

### 19.1) طھط؛غŒغŒط±ط§طھ ط³ط§ط®طھط§ط±غŒ ظˆ ظ…ط³غŒط±ظ‡ط§

- طھط¹ط±غŒظپ ع¯ط±ظˆظ‡ ظ…ظ†ظˆغŒ ط¬ط¯غŒط¯ آ«طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¨ظ„ ط§ط² غ±غ´غ°غ²/غ°غ³/غ²غ¶آ» ط¯ط± ط³ط§غŒط¯ط¨ط§ط± ظ…ظˆط¯غŒط§ظ† ظˆ ط²غŒط±ظ…ظ†ظˆغŒ آ«ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒآ» ظˆ ط§طھطµط§ظ„ ط¢ظ† ط¨ظ‡ ظ…ط³غŒط±
  `/simulators/modian/old-Invoices/buy` ط¨ط¯ظˆظ† طھط؛غŒغŒط± ط¯ط± ظ…ظ†ظˆظ‡ط§غŒ ظ‚ط¨ظ„غŒ.
- ط³ط§ط®طھ ط§ط³ع©ظ„طھ طµظپط­ظ‡ `src/app/simulators/modian/old-Invoices/buy/page.tsx` ط¨ط§ ط§ط³طھظپط§ط¯ظ‡ظ” ظ…ط¬ط¯ط¯ ط§ط² ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒ ظ…ظˆط¬ظˆط¯
  (HeaderطŒ TableطŒ Actions) ظˆ طھظ†ط¸غŒظ… ط¹ظ†ظˆط§ظ† ظˆ ط²غŒط±ظ…ظ†ظˆ ظ…ط·ط§ط¨ظ‚ ط§ط³ع©ط±غŒظ† ط³ط§ظ…ط§ظ†ظ‡ظ” ط§طµظ„غŒ.
- ط³ط§ط¯ظ‡â€Œط³ط§ط²غŒ ظ†ظˆط§ط± ط¬ط³طھط¬ظˆ ط¯ط± طµظپط­ظ‡â€ŒغŒ `old-Invoices/buy`:
  - طھط¨ط¯غŒظ„ طھط¨â€Œظ‡ط§غŒ ظ‚ط¨ظ„غŒ ط¨ظ‡ غŒع© ع©ط§ط¯ط± ط³ط§ط¯ظ‡ظ” ظˆط§ط­ط¯.
  - ع†ط³ط¨ط§ظ†ط¯ظ† ط³ظ‡ ظپغŒظ„ط¯ ط®ظ„ط§طµظ‡ ط¨ظ‡ ط³ظ…طھ ط±ط§ط³طھ.
  - ط§ظ†طھظ‚ط§ظ„ ط¯ع©ظ…ظ‡â€Œظ‡ط§غŒ آ«ط¬ط³طھط¬ظˆآ» ظˆ آ«ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡آ» ط¨ظ‡ ظ‡ظ…ط§ظ† ط±ط¯غŒظپ ظپغŒظ„ط¯ظ‡ط§.
  - ط؛غŒط±ظپط¹ط§ظ„â€Œع©ط±ط¯ظ† ط³ظ‡ ظپغŒظ„ط¯ ط¨ط§ظ„ط§غŒغŒ (ط­ط§ظ„طھ ظپظ‚ط· ظ†ظ…ط§غŒط´غŒ) ظˆ طھظ†ط¸غŒظ… ط¹ط±ط¶ ظˆ ظ¾ط³â€Œط²ظ…غŒظ†ظ‡ ظ…ط·ط§ط¨ظ‚ ظ†ظ…ظˆظ†ظ‡ظ” ط§طµظ„غŒ ط³ط§ظ…ط§ظ†ظ‡.

### 19.2) ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒâ€Œظ‡ط§غŒ SearchByFilters ط¨ط±ط§غŒ old-Invoices

- ط§ط¶ط§ظپظ‡â€Œط´ط¯ظ† طھط´ط®غŒطµ ظ…ط³غŒط± `old-Invoices` (ظ¾ط±ع†ظ… ظ…ظ†ط·ظ‚غŒ `isOldInvoicesPage`) ظˆ ط§ط¹ظ…ط§ظ„ طھظپط§ظˆطھâ€Œظ‡ط§غŒ UI ظپظ‚ط· ط¯ط± ط§غŒظ† طµظپط­ظ‡:
  - ظپط±ظ… ط¨غŒط±ظˆظ†غŒ ط¨ظ‡â€Œطµظˆط±طھ ع©ط§ط±طھ ط³ظپغŒط¯ غŒع©â€Œطھع©ظ‡ ط¨ط§ ظ¾ط³â€Œط²ظ…غŒظ†ظ‡ ظˆ ط¨ظˆط±ط¯ط± ظ…ط¬ط²ط§طŒ ط¨ط¯ظˆظ† طھط£ط«غŒط± ط±ظˆغŒ طµظپط­ط§طھ ط¯غŒع¯ط±.
  - ع†غŒط¯ظ…ط§ظ† ط§ط®طھطµط§طµغŒ ط±ط¯غŒظپ ط®ظ„ط§طµظ‡: ط³ظ‡ ظپغŒظ„ط¯ ط¯ط± ط³ظ…طھ ط±ط§ط³طھ + ط¯ع©ظ…ظ‡â€Œظ‡ط§غŒ ط¬ط³طھط¬ظˆ ط¯ط± ظ‡ظ…ط§ظ† ط±ط¯غŒظپ.
  - ظ¾ظ†ظ„ آ«ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡آ» ط¨ط§ طھغŒطھط± آ«ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡آ» ط¯ط± ط³ظ…طھ ط±ط§ط³طھ ظˆ ط¯ع©ظ…ظ‡â€ŒغŒ آ«ط¨ط³طھظ†آ» ط¯ط± ط³ظ…طھ ع†ظ¾ ظ‡ط¯ط±طŒ ظ‡ظ…ط±ط§ظ‡ ط¨ط§ ط®ط· ط³ط¨ط² ط²غŒط± طھغŒطھط±
    ظˆ ط¯ع©ظ…ظ‡â€ŒغŒ ظ¾ط§غŒغŒظ† ظپط±ظ… ع©ظ‡ ظپظ‚ط· ط¯ط± ط­ط§ظ„طھ old-Invoices ظپط¹ط§ظ„ ط§ط³طھ.
- ط­ط°ظپ ط¨ط±ط®غŒ ظپغŒظ„ط¯ظ‡ط§ ظپظ‚ط· ط¯ط± ط­ط§ظ„طھ old-Invoices (طھط§ط±غŒط® ط¯ط±ط¬ ط¯ط± ع©ط§ط±ظ¾ظˆط´ظ‡ ط§ط²/طھط§طŒ ظ…ط¬ظ…ظˆط¹ طµظˆط±طھط­ط³ط§ط¨ ط§ط²/طھط§طŒ ط´ظ…ط§ط±ظ‡ ط§ظ‚طھطµط§ط¯غŒطŒ
  ط´ظ†ط§ط³ظ‡ ظ‡ظˆغŒطھغŒطŒ ظ†ط§ظ…/ظ†ط§ظ… طھط¬ط§ط±غŒ ظپط±ظˆط´ظ†ط¯ظ‡ ظˆ ع†ع©â€Œط¨ط§ع©ط³ آ«ظپظ‚ط· ظ…ظˆط§ط±ط¯ ط¯ط§ط±ط§غŒ ط§ظ‚ط¯ط§ظ…آ») ظˆ ط¨ط§ط²ع†غŒظ†ط´ ظپغŒظ„ط¯ظ‡ط§ ظ…ط·ط§ط¨ظ‚ ط§ط³ع©ط±غŒظ† ط±ط³ظ…غŒ:
  - ط±ط¯غŒظپ ط§ظˆظ„: آ«ع©ط¯ ط´ط¹ط¨ظ‡طŒ ظ…ظˆط¶ظˆط¹ طµظˆط±طھط­ط³ط§ط¨طŒ ط§ظ„ع¯ظˆغŒ طµظˆط±طھط­ط³ط§ط¨طŒ ظˆط¶ط¹غŒطھ ط­ط¯ ظ…ط¬ط§ط²آ».
  - ط±ط¯غŒظپ ط¯ظˆظ…: آ«طھط§ط±غŒط® طµط¯ظˆط± طµظˆط±طھط­ط³ط§ط¨ ط§ط²/طھط§آ».
- طھظ†ط¸غŒظ… ط¢غŒع©ظˆظ† ظˆ ط§ط³طھط§غŒظ„ ط¯ع©ظ…ظ‡â€ŒغŒ آ«ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡آ» (ط¢غŒع©ظˆظ† ع†ط±ط®â€Œط¯ظ†ط¯ظ‡ ط¨ط¯ظˆظ† ط¨ظˆط±ط¯ط±طŒ ظپط§طµظ„ظ‡â€Œظ‡ط§طŒ ظ¾ظ‡ظ†ط§غŒ ظپغŒظ„ط¯ظ‡ط§ ظˆ ط±ط§ط³طھâ€Œع†غŒظ†â€Œط¨ظˆط¯ظ† ط§ط¬ط²ط§)
  ط¨ط±ط§غŒ ط±ط³غŒط¯ظ† ط¨ظ‡ ط´ط¨ط§ظ‡طھ ط­ط¯ط§ع©ط«ط±غŒ ط¨ط§ UI ط±ط³ظ…غŒ ظ…ظˆط¯غŒط§ظ†.

### 19.3) ط±غŒط³ع©â€Œظ‡ط§ ظˆ طھظˆطµغŒظ‡â€Œظ‡ط§غŒ ط³ط§ط®طھط§ط±غŒ

- **ظ¾غŒع†غŒط¯ع¯غŒ ع©ط§ظ…ظ¾ظˆظ†ظ†طھ SearchByFilters**
  ط¨ظ‡â€Œط¯ظ„غŒظ„ ط§ط¶ط§ظپظ‡ ط´ط¯ظ† ط´ط§ط®ظ‡â€Œظ‡ط§غŒ ط´ط±ط·غŒ ظ…ط§ظ†ظ†ط¯ `isOldInvoicesPage` ظˆ (ط¯ط± ط§ط¯ط§ظ…ظ‡) `isExportsPage`طŒ ط±غŒط³ع© ط±ع¯ط±ط³غŒظˆظ† ط¯ط± ط³ط§غŒط± طµظپط­ط§طھ
  ظ…طµط±ظپâ€Œع©ظ†ظ†ط¯ظ‡â€ŒغŒ SearchByFilters (ط®ط±غŒط¯/ظپط±ظˆط´ ظپط¹ظ„غŒ) ظˆط¬ظˆط¯ ط¯ط§ط±ط¯. ط¯ط± ع¯ط²ط§ط±ط´ طھغŒظ… ظ¾غŒط´ظ†ظ‡ط§ط¯ ط´ط¯ظ‡:
  - طھط³طھ ط¯ط³طھغŒ ط±ظˆغŒ ظ‡ظ…ظ‡ظ” طµظپط­ط§طھ ظ…طµط±ظپâ€Œع©ظ†ظ†ط¯ظ‡ظ” SearchByFilters ط§ظ†ط¬ط§ظ… ط´ظˆط¯.
  - ط¯ط± طµظˆط±طھ ط§ظ…ع©ط§ظ†طŒ طھط³طھâ€Œظ‡ط§غŒ ظˆط§ط­ط¯/ط§ط³ظ†ظ¾â€Œط´ط§طھ ط¨ط±ط§غŒ ط³ظ†ط§ط±غŒظˆظ‡ط§غŒ `invoices/*` ظˆ `old-Invoices/*` ظ†ظˆط´طھظ‡ ط´ظˆط¯.
- **ط¹ط¯ظ… ط§طھطµط§ظ„ API ط¨ط±ط§غŒ old-Invoices ط¯ط± ط§غŒظ† ظپط§ط²**
  ط¯ط± ط§غŒظ† ط¯ظˆط±ظ‡ ظپظ‚ط· UI طµظپط­ظ‡â€ŒغŒ `old-Invoices/buy` ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡ ظˆ ظ…ظ†ط·ظ‚ ط§ط±ط³ط§ظ„ ظپغŒظ„طھط±ظ‡ط§ ط¨ظ‡ API ظˆط§ظ‚ط¹غŒ/ط´ط¨غŒظ‡â€Œط³ط§ط² ظ‡ظ†ظˆط² ظ…طھطµظ„ ظ†ط´ط¯ظ‡ ط§ط³طھ.
  ظ„ط§ط²ظ… ط§ط³طھ ط¯ط± ط§ط³ظ¾ط±غŒظ†طھ ط¨ط¹ط¯غŒطŒ ط§طھطµط§ظ„ ط¨ظ‡ API ظˆ ظ†ع¯ط§ط´طھ ظپغŒظ„ط¯ظ‡ط§غŒ ط¬ط³طھط¬ظˆ ط¯ط± ط³ظ†ط¯ `docs-modian-endpoints.updated.md` طھع©ظ…غŒظ„ ظˆ ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ط´ظˆط¯.

## 20) ع¯ط²ط§ط±ط´ ظˆط¶ط¹غŒطھ طھغŒظ… ظ…ظˆط¯غŒط§ظ† â€” غ±غ´غ°غ´/غ°غ¹/غ°غ¹

ط¨ط± ط§ط³ط§ط³ ظپط§غŒظ„ `team2-status-report-14040909.txt`.

### 20.1) ظ…ط³غŒط±ظ‡ط§ ظˆ طµظپط­ط§طھ ط¬ط¯غŒط¯ ط¯ط± ظ…ط§عکظˆظ„ old-Invoices

- ع¯ط³طھط±ط´ ظ¾ظˆط´ط´ ظ…ط§عکظˆظ„ `src/app/simulators/modian/old-Invoices` ط¨ظ‡ ط³ظ†ط§ط±غŒظˆظ‡ط§غŒ ط²غŒط±:
  - `buy/page.tsx`
    - ظ‡ظ…â€Œطھط±ط§ط²ط³ط§ط²غŒ ع©ط§ظ…ظ„ ط¬ط¯ظˆظ„ ظ„غŒط³طھ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ ظ‚ط¯غŒظ…غŒ ط¨ط§ ط³ط§ظ…ط§ظ†ظ‡ ط§طµظ„غŒ (ط³طھظˆظ†â€Œظ‡ط§طŒ طھط±طھغŒط¨طŒ ظ¾غŒط´â€Œظپط±ط¶ ظ†ظ…ط§غŒط´/ط¹ط¯ظ…â€Œظ†ظ…ط§غŒط´).
    - ط­ط°ظپ ط¯ع©ظ…ظ‡â€Œظ‡ط§غŒ ط§ط¶ط§ظپغŒ ط¨ط§ظ„ط§غŒ ط¬ط¯ظˆظ„ (طھط£غŒغŒط¯طŒ ط±ط¯طŒ ط§ظ†طھظ‚ط§ظ„ طµظˆط±طھط­ط³ط§ط¨).
    - ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ط³طھظˆظ† ط«ط§ط¨طھ آ«ط¬ط²ط¦غŒط§طھآ» ط¨ط±ط§غŒ ظ‡ط± ط±ط¯غŒظپ ظˆ ظ…ط³غŒط±غŒط§ط¨غŒ ط¨ظ‡ طµظپط­ظ‡ظ” ط¬ط²ط¦غŒط§طھ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ.
  - `buy/detail/page.tsx`
    - ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ طµظپط­ظ‡ظ” ط¬ط²ط¦غŒط§طھ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ ظ‚ط¯غŒظ…غŒ ط¨ط± ط§ط³ط§ط³ ط§ظ„ع¯ظˆغŒ ط¬ط²ط¦غŒط§طھ ط®ط±غŒط¯ ظپط¹ظ„غŒ:
      ط³ع©ط´ظ†â€Œظ‡ط§غŒ آ«ظ…ط´ط®طµط§طھ طµظˆط±طھط­ط³ط§ط¨آ»طŒ آ«ظپط±ظˆط´ظ†ط¯ظ‡آ»طŒ آ«ط®ط±غŒط¯ط§ط±آ»طŒ آ«ط§ظ‚ظ„ط§ظ…آ»طŒ آ«ط¬ظ…ط¹ ع©ظ„آ»طŒ آ«ط§ط·ظ„ط§ط¹ط§طھ طھع©ظ…غŒظ„غŒآ» ظˆ ظ…ط¯ط§ظ„ ط¬ط²ط¦غŒط§طھ ظ¾ط±ط¯ط§ط®طھ.
  - `sales/page.tsx` ظˆ `sales/detail/page.tsx`
    - ع©ظ¾غŒâ€Œط¨ط±ط¯ط§ط±غŒ ع©ظ†طھط±ظ„â€Œط´ط¯ظ‡ ط§ط² ط§ط³ع©ظ„طھ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ ظˆ طھط·ط¨غŒظ‚ ظ…طھظˆظ† ظˆ ظ…ط³غŒط±غŒط§ط¨غŒ ط¨ط§ ط³ظ†ط§ط±غŒظˆغŒ آ«ظپط±ظˆط´ ط¯ط§ط®ظ„غŒآ».
    - ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ط³طھظˆظ† آ«ط¬ط²ط¦غŒط§طھآ» ط¯ط± ظ„غŒط³طھ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ ظˆ ط§طھطµط§ظ„ ط¢ظ† ط¨ظ‡ طµظپط­ظ‡ظ” ط¬ط²ط¦غŒط§طھ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ.
  - `exports/page.tsx` ظˆ `exports/detail/page.tsx`
    - ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ظ„غŒط³طھ ظˆ ط¬ط²ط¦غŒط§طھ آ«ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒآ» ظ…ط·ط§ط¨ظ‚ ط§ط³ع©ط±غŒظ†â€Œظ‡ط§غŒ ظ…ط±ط¬ط¹ط›
      ط¯ط± ط¬ط²ط¦غŒط§طھ طµط§ط¯ط±ط§طھطŒ ط³ع©ط´ظ†â€Œظ‡ط§غŒ ط®ط±غŒط¯ط§ط± ظˆ ظ¾ط±ط¯ط§ط®طھ ط·ط¨ظ‚ ط§ط³ع©ط±غŒظ† ط­ط°ظپ ط´ط¯ظ‡â€Œط§ظ†ط¯ ظˆ طھظ…ط±ع©ط² ط±ظˆغŒ ط¬ط¯ظˆظ„ ط§ظ‚ظ„ط§ظ… ظˆ ط§ط·ظ„ط§ط¹ط§طھ طµط§ط¯ط±ط§طھغŒ ط§ط³طھ.

### 20.2) طھظ†ط¸غŒظ…ط§طھ ط³طھظˆظ†â€Œظ‡ط§ ظˆ ط¬ط³طھط¬ظˆ

- ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ â€“ ظ„غŒط³طھ (`old-Invoices/buy/page.tsx`):
  - ط³ط§ط®طھط§ط± ط³طھظˆظ†â€Œظ‡ط§ ط¨ط±ط§ط³ط§ط³ ط³ظ†ط§ط±غŒظˆغŒ ظˆط§ظ‚ط¹غŒ ط³ط§ظ…ط§ظ†ظ‡ طھظ†ط¸غŒظ… ط´ط¯ظ‡ ظˆ ط­ط§ظ„طھ ظ¾غŒط´â€Œظپط±ط¶ ظ†ظ…ط§غŒط´ ط¨ط±ط§غŒ ط³طھظˆظ†â€Œظ‡ط§غŒ ط§طµظ„غŒ ظپط¹ط§ظ„ ط§ط³طھ.
  - ط³طھظˆظ† ط«ط§ط¨طھ آ«ط¬ط²ط¦غŒط§طھآ» ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ط¢ط®ط±غŒظ† ط³طھظˆظ† ط§ط¶ط§ظپظ‡ ط´ط¯ظ‡ طھط§ navigation ط¨غŒظ† ظ„غŒط³طھ ظˆ ط¬ط²ط¦غŒط§طھ ظ¾ط§غŒط¯ط§ط± ط¨ط§ط´ط¯.
- ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ â€“ ظ¾ظ†ظ„ ط¬ط³طھط¬ظˆ (`buy/page.tsx` + `SearchByFilters.tsx`):
  - ط§ط¶ط§ظپظ‡â€Œط´ط¯ظ† ط²غŒط±ظ…ظ†ظˆغŒ ط«ط§ط¨طھ آ«ط³ط§ظ„ ظ…ط§ظ„غŒط§طھغŒآ» (غ±غ´غ°غ° طھط§ غ±غ´غ°غ³) ظˆ آ«ط¯ظˆط±ظ‡ ظ…ط§ظ„غŒط§طھغŒآ» (ط¨ظ‡ط§ط±طŒ طھط§ط¨ط³طھط§ظ†طŒ ظ¾ط§غŒغŒط²طŒ ط²ظ…ط³طھط§ظ†) ط¨ظ‡â€Œطµظˆط±طھ ع¯ط²غŒظ†ظ‡â€Œظ‡ط§غŒ ط¨ط¯ظˆظ† ع†ع©â€Œط¨ط§ع©ط³.
  - ط¯ط± ط­ط§ظ„طھ ط¨ط§ط² ط¨ظˆط¯ظ† ظ¾ظ†ظ„ ظ¾غŒط´ط±ظپطھظ‡طŒ ط¯ع©ظ…ظ‡ظ” آ«ط¬ط³طھط¬ظˆغŒ ظ¾غŒط´ط±ظپطھظ‡آ» ط¨ظ‡ آ«ط­ط°ظپ ظپغŒظ„طھط±آ» ط¨ط§ ط§ط³طھغŒطھ ط±ظ†ع¯غŒ ظ…ط´ط®طµ طھط¨ط¯غŒظ„ ظ…غŒâ€Œط´ظˆط¯
    ظˆ ط¨ط§ ع©ظ„غŒع© طھظ…ط§ظ… ظپغŒظ„طھط±ظ‡ط§ ط±ط§ ط±غŒط³طھ ظ…غŒâ€Œع©ظ†ط¯ط› ط¯ط± ط­ط§ظ„طھ ط¨ط³طھظ‡طŒ ط±ظپطھط§ط± ظ‡ظ…ط§ظ† ط¬ط³طھط¬ظˆغŒ ظ¾غŒط´ط±ظپطھظ‡ ط§ط³طھ.
- ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ â€“ ظ„غŒط³طھ ظˆ ط¬ط²ط¦غŒط§طھ:
  - ط³طھظˆظ†â€Œظ‡ط§ ظˆ ط¬ط²ط¦غŒط§طھ ط§ط² ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ ظ…ط´طھظ‚ ط´ط¯ظ‡ ظˆ ظپظ‚ط· ط¨ط±ع†ط³ط¨â€Œظ‡ط§/ظ…طھظ†â€Œظ‡ط§ ط¨ط§ ط³ظ†ط§ط±غŒظˆغŒ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ ظ‡ظ…ط§ظ‡ظ†ع¯ ط´ط¯ظ‡ ط§ط³طھط›
    ط§غŒظ† ع©ط§ط± ط±غŒط³ع© divergence ط¨غŒظ† ط¯ظˆ طµظپط­ظ‡ ط±ط§ ع©ط§ظ‡ط´ ظ…غŒâ€Œط¯ظ‡ط¯.
- ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒ â€“ ظ„غŒط³طھ:
  - ط­ط°ظپ ظپغŒظ„ط¯ظ‡ط§غŒ آ«ظ†ظˆط¹ طµظˆط±طھط­ط³ط§ط¨آ» ظˆ آ«ط§ظ„ع¯ظˆغŒ طµظˆط±طھط­ط³ط§ط¨آ» ط§ط² ظپغŒظ„طھط±ظ‡ط§غŒ ط³ط§ط¯ظ‡ ط¨ط§ظ„ط§غŒ طµظپط­ظ‡ ط¨ط±ط§غŒ ظ†ط²ط¯غŒع©â€Œطھط± ط´ط¯ظ† ط¨ظ‡ ط§ط³ع©ط±غŒظ† ط§طµظ„غŒ.
  - ط¯ط± ط¬ط³طھط¬ظˆغŒ ظ¾غŒط´ط±ظپطھظ‡:
    - ظ„غŒط¨ظ„ آ«ظˆط¶ط¹غŒطھ طµظˆط±طھط­ط³ط§ط¨آ» ط¨ظ‡ آ«ظˆط¶ط¹غŒطھ طھط·ط§ط¨ظ‚آ» طھط؛غŒغŒط± غŒط§ظپطھظ‡ ط§ط³طھطŒ
    - ط§غŒظ† ظپغŒظ„ط¯ ط¯ط± ط­ط§ظ„ ط­ط§ط¶ط± ط؛غŒط±ظپط¹ط§ظ„ (read-only) ط§ط³طھ ظˆ ط¨ط§ ط¨ظˆط±ط¯ط± ط®ط·â€Œع†غŒظ† ظ†ظ…ط§غŒط´ ط¯ط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯ طھط§ ظ…طھظ…ط§غŒط² ط¨ط§ط´ط¯.
  - طھط¹ط±غŒظپ ظ…ط¬ط¯ط¯ ط³طھظˆظ†â€Œظ‡ط§غŒ ط¬ط¯ظˆظ„ طµط§ط¯ط±ط§طھغŒ ط´ط§ظ…ظ„ ط³طھظˆظ†â€Œظ‡ط§غŒ طµط§ط¯ط±ط§طھâ€Œظ…ط­ظˆط± (ط´ظ…ط§ط±ظ‡ ظ‚ط±ط§ط±ط¯ط§ط¯ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒطŒ ظˆط¶ط¹غŒطھ ظˆط§ع©ظ†ط´ ط¢ظ…ط±طŒ
    طھط§ط±غŒط®/ط´ظ…ط§ط±ظ‡ ع©ظˆطھط§عک ظˆ â€¦) ظˆ طھظ†ط¸غŒظ… ظ¾غŒط´â€Œظپط±ط¶: ظپظ‚ط· ط³طھظˆظ†â€Œظ‡ط§غŒ آ«ظ…ط¬ظ…ظˆط¹ طµظˆط±طھط­ط³ط§ط¨آ»طŒ آ«ظ…ط¬ظ…ظˆط¹ ظ…ط§ظ„غŒط§طھ ط¨ط± ط§ط±ط²ط´ ط§ظپط²ظˆط¯ظ‡آ»طŒ
    آ«طھط§ط±غŒط® طµط¯ظˆط± طµظˆط±طھط­ط³ط§ط¨آ» ظˆ آ«ظˆط¶ط¹غŒطھ طھط·ط§ط¨ظ‚آ» ط±ظˆط´ظ† ظ‡ط³طھظ†ط¯.
- ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒ â€“ ط¬ط²ط¦غŒط§طھ:
  - ط¬ط¯ظˆظ„ ط§ظ‚ظ„ط§ظ… ط¨ط±ط§ط³ط§ط³ ظ†غŒط§ط²ظ‡ط§غŒ طµط§ط¯ط±ط§طھغŒ ط¨ط§ط²ط·ط±ط§ط­غŒ ط´ط¯ظ‡ ط§ط³طھ (ط³طھظˆظ†â€Œظ‡ط§غŒ ظ†ط±ط®/ظ…ط¨ظ„ط؛ ظ…ط§ظ„غŒط§طھطŒ ط³ط§غŒط± ظˆط¬ظˆظ‡ ظ‚ط§ظ†ظˆظ†غŒطŒ ظˆط²ظ†طŒ ط§ط±ط²ط´ ط§ط±ط²غŒ ظˆ â€¦)طŒ
    ظˆ ط³طھظˆظ†â€Œظ‡ط§غŒ ظ¾غŒط´â€Œظپط±ط¶ ط¨ط§ ط¨ط±ع†ط³ط¨ آ«(ظ¾غŒط´ظپط±ط¶)آ» ط±ظˆط´ظ† ظ‡ط³طھظ†ط¯.
  - ط¯ط± ظ…ظ†ظˆغŒ آ«ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§آ»طŒ ط³طھظˆظ† آ«ط´ط±ط­آ» ط§ط¶ط§ظپظ‡ ظˆ ط¬ظپطھ طھع©ط±ط§ط±غŒ آ«ظ†ط±ط® ط³ط§غŒط± ظˆط¬ظˆظ‡ ظ‚ط§ظ†ظˆظ†غŒ / ظ…ط¨ظ„ط؛ ط³ط§غŒط± ظˆط¬ظˆظ‡ ظ‚ط§ظ†ظˆظ†غŒآ» ط­ط°ظپ ط´ط¯ظ‡ ط§ط³طھ.

### 20.3) ط±غŒط³ع©â€Œظ‡ط§ ظˆ طھطµظ…غŒظ…â€Œظ‡ط§غŒ ظ…ط¹ظˆظ‚

- **ظˆط§ط¨ط³طھع¯غŒ UI ط¨ظ‡ API ظ†ظ‡ط§غŒغŒ old-Invoices**
  ط¯ط± ط­ط§ظ„ ط­ط§ط¶ط± ط³طھظˆظ†â€Œظ‡ط§ ظˆ ظپغŒظ„طھط±ظ‡ط§ ط¯ط± ظپط±ط§ظ†طھâ€Œط§ظ†ط¯ ط¨ظ‡â€Œطµظˆط±طھ ظ…ط§ع© طھط¹ط±غŒظپ ط´ط¯ظ‡â€Œط§ظ†ط¯ ظˆ ظ‡ظ†ظˆط² ط¨ظ‡ ط³ط±ظˆغŒط³â€Œظ‡ط§غŒ ظˆط§ظ‚ط¹غŒ old-Invoices ظ…طھطµظ„ ظ†غŒط³طھظ†ط¯.
  ط§ع¯ط± ظ†ط§ظ… ظپغŒظ„ط¯ظ‡ط§غŒ API ظ†ظ‡ط§غŒغŒ ظ…طھظپط§ظˆطھ ط§ط² ظ†ط§ظ…â€Œظ‡ط§غŒ ظپط¹ظ„غŒ ط¨ط§ط´ط¯طŒ ظ†غŒط§ط² ط¨ظ‡ ظ†ع¯ط§ط´طھ ط²ظ…ط§ظ†â€Œط¨ط± ط¨غŒظ† UI ظˆ ط¨ع©â€Œط§ظ†ط¯ ط®ظˆط§ظ‡غŒظ… ط¯ط§ط´طھ.
- **ظ¾غŒط´ظ†ظ‡ط§ط¯ طھغŒظ… ظ…ظˆط¯غŒط§ظ† ط¨ط±ط§غŒ ظ…ط¯غŒط±غŒطھ ط±غŒط³ع© mapping**
  ظ‚ط¨ظ„ ط§ط² ط§طھطµط§ظ„ ظ†ظ‡ط§غŒغŒطŒ ط¨ط§غŒط¯ غŒع© ظپط§غŒظ„ mapping ط±ط³ظ…غŒ ط¨غŒظ† ظ†ط§ظ… ط³طھظˆظ†â€Œظ‡ط§/ظپغŒظ„طھط±ظ‡ط§غŒ ظپط±ط§ظ†طھâ€Œط§ظ†ط¯ ظˆ ظپغŒظ„ط¯ظ‡ط§غŒ ظ¾ط§ط³ط®/QueryString ط¨ع©â€Œط§ظ†ط¯
  ط¯ط± ط³ظ†ط¯ `docs-modian-endpoints` طھط¹ط±غŒظپ ط´ظˆط¯ ظˆ ظ‡ط± ط¯ظˆ طھغŒظ… ط¨ظ‡ ط¢ظ† ظ…طھط¹ظ‡ط¯ ط¨ظ…ط§ظ†ظ†ط¯.
- **ط§ط³طھط§ظ†ط¯ط§ط±ط¯ ط§ط´طھط±ط§ع©â€Œع¯ط°ط§ط±غŒ ع©ط§ظ†ظپغŒع¯ ط³طھظˆظ†â€Œظ‡ط§**
  - ع¯ط²غŒظ†ظ‡ظ” A: ط§غŒط¬ط§ط¯ غŒع© ظ…ط§عکظˆظ„ ع©ط§ظ†ظپغŒع¯ ظ…ط´طھط±ع© ظپظ‚ط· ط¨ط±ط§غŒ old-Invoices ط¯ط± ظ‡ظ…غŒظ† ظ…ط§عکظˆظ„.
  - ع¯ط²غŒظ†ظ‡ظ” B: ط§ط±طھظ‚ط§ط، ط§غŒظ† ع©ط§ظ†ظپغŒع¯ ط¨ظ‡ آ«Registry ط³طھظˆظ†â€Œظ‡ط§آ» ط¯ط± ع©غŒطھ UI ظ…ظˆط¯غŒط§ظ† ط¨ط±ط§غŒ ط§ط³طھظپط§ط¯ظ‡ظ” ط³ط§غŒط± ظ…ط§عکظˆظ„â€Œظ‡ط§.
  ظ¾غŒط´ظ†ظ‡ط§ط¯ ظپط¹ظ„غŒ طھغŒظ…: ط§ظ†طھط®ط§ط¨ ع¯ط²غŒظ†ظ‡ظ” A ط¯ط± ط§غŒظ† ط§ط³ظ¾ط±غŒظ†طھ (ط³ط§ط¯ظ‡â€Œطھط± ظˆ ط³ط±غŒط¹â€Œطھط±)طŒ ط¨ط§ ط§ظ…ع©ط§ظ† ظ…ظ‡ط§ط¬ط±طھ ط¨ظ‡ B ط¯ط± ط¢غŒظ†ط¯ظ‡.
- **ط±ظپطھط§ط± ظپغŒظ„ط¯ آ«ظˆط¶ط¹غŒطھ طھط·ط§ط¨ظ‚آ» ط¯ط± ط¬ط³طھط¬ظˆغŒ ظ¾غŒط´ط±ظپطھظ‡ظ” طµط§ط¯ط±ط§طھ**
  - ع¯ط²غŒظ†ظ‡ظ” A: ط¨ط§ظ‚غŒâ€Œظ…ط§ظ†ط¯ظ† ط¯ط§ط¦ظ…غŒ ط¨ظ‡â€Œطµظˆط±طھ read-only ظˆ طµط±ظپط§ظ‹ informtional.
  - ع¯ط²غŒظ†ظ‡ظ” B: طھط¨ط¯غŒظ„ ط¨ظ‡ ظپغŒظ„طھط± ظپط¹ط§ظ„ ط¯ط± ظ†ط³ط®ظ‡â€Œظ‡ط§غŒ ط¨ط¹ط¯غŒ.
  ظ¾غŒط´ظ†ظ‡ط§ط¯ ظپط¹ظ„غŒ طھغŒظ…: ع¯ط²غŒظ†ظ‡ظ” A طھط§ ط²ظ…ط§ظ†غŒ ع©ظ‡ ط³ظ†ط§ط±غŒظˆغŒ ط¯ظ‚غŒظ‚ ط¨ع©â€Œط§ظ†ط¯ ط¨ط±ط§غŒ ط§غŒظ† ظپغŒظ„ط¯ ظ…ط´ط®طµ ط´ظˆط¯.
---

  ظ¾غŒط´ظ†ظ‡ط§ط¯ ظپط¹ظ„غŒ طھغŒظ…: ع¯ط²غŒظ†ظ‡ظ” A طھط§ ط²ظ…ط§ظ†غŒ ع©ظ‡ ط³ظ†ط§ط±غŒظˆغŒ ط¯ظ‚غŒظ‚ ط¨ع©â€Œط§ظ†ط¯ ط¨ط±ط§غŒ ط§غŒظ† ظپغŒظ„ط¯ ظ…ط´ط®طµ ط´ظˆط¯.

## 21) ظپط±ط¢غŒظ†ط¯ ط§ط³طھط§ظ†ط¯ط§ط±ط¯ ظ…ط±ط¬â€Œظ‡ط§غŒ ط¨ط²ط±ع¯ ط¨ظ‡ main (Feature + Lint)

ط§غŒظ† ظپط±ط¢غŒظ†ط¯ ط¨ط±ط§غŒ ط²ظ…ط§ظ†غŒ ط§ط³طھ ع©ظ‡ غŒع© غŒط§ ع†ظ†ط¯ ظپغŒع†ط± ط¨ط²ط±ع¯ ظˆ غŒع© ط¨ط±ظ†ع† ط³ط§ط®طھط§ط±غŒ/ظ„غŒظ†طھ ط¨ط§غŒط¯ ط¨ط§ ط±غŒط³ع© ع©ظ… ط±ظˆغŒ `main` ط§ط¹ظ…ط§ظ„ ط´ظˆظ†ط¯.

### 21.2) ع†ع©â€Œظ„غŒط³طھ ظ…ط±ط¬ ط§ظ…ظ† ط¨ظ‡ main (غ· ظ…ط±ط­ظ„ظ‡)

  1. **طھع©ظ…غŒظ„ ظˆ طھط³طھ ط¨ط±ظ†ع† integration**
    - ط§ط¯ط؛ط§ظ… ط¨ط±ظ†ع†â€Œظ‡ط§غŒ ظپغŒع†ط± ظˆ ظ„غŒظ†طھ ط±ظˆغŒ ط¨ط±ظ†ع† integration
    - ط§ط¬ط±ط§غŒ ع©ط§ظ…ظ„ `npm run lint:ci`طŒ ط¨ط¹ط¯ `npm run build` ظˆ ط¯ط± ظ†ظ‡ط§غŒطھ `npm run dev` ط¨ط±ط§غŒ طھط³طھ ط¯ط³طھغŒ ط³ظ†ط§ط±غŒظˆظ‡ط§غŒ ع©ظ„غŒط¯غŒ
    - طھط§ ظˆظ‚طھغŒ ط§غŒظ† ط³ظ‡ طھط³طھ ط³ط¨ط² ظ†ط´ط¯ظ†طŒ ظ…ط±ط¬ ط¨ظ‡ `main` ظ…ظ…ظ†ظˆط¹ ط§ط³طھ.

  2. **ظ¾ط§ع© ط¨ظˆط¯ظ† ظˆط¶ط¹غŒطھ ط±ظˆطھ ط±غŒظ¾ظˆ ط±ظˆغŒ main**
    - ط¯ط± worktree ط§طµظ„غŒ ط±ظˆغŒ `main`:
      - `git status` â†’ ط¨ط¯ظˆظ† ظپط§غŒظ„ طھط؛غŒغŒط±â€ŒغŒط§ظپطھظ‡/ط§ط³طھغŒط¬â€Œظ†ط´ط¯ظ‡ (ظˆط¬ظˆط¯ ظپظˆظ„ط¯ط±ظ‡ط§غŒ ع©ظ…ع©غŒ ظ…ط«ظ„ `backups/` ط¨ظ‡ طµظˆط±طھ *untracked* ظ…ط¬ط§ط² ط§ط³طھ)
      - `git fetch origin && git pull --ff-only origin main`

  3. **ط³ط§ط®طھ ط¨ط±ظ†ع†â€Œظ‡ط§ ظˆ طھع¯â€Œظ‡ط§غŒ ط¨ع©ط§ظ¾**
    - ط³ط§ط®طھ ط¨ط±ظ†ع† ظˆ طھع¯ ط¨ط±ط§غŒ:
      - `backup/main-before-<integration-branch>`
      - `backup/<integration-branch>`
    - ط¨ط¯ظˆظ† ط§غŒظ† ط¨ع©ط§ظ¾â€Œظ‡ط§طŒ ظ…ط±ط¬ ط¨ظ‡ `main` ط´ط±ظˆط¹ ظ†ظ…غŒâ€Œط´ظˆط¯.

  4. **ظ…ط±ط¬ ع©ظ†طھط±ظ„â€Œط´ط¯ظ‡ظ” integration ط¨ظ‡ main**
    - ظپظ‚ط· ط§ط² ط±ظˆطھ ط±غŒظ¾ظˆ ظˆ ط±ظˆغŒ `main`:
      ```bash
      git merge --no-ff <integration-branch> -m "Merge <integration-branch> into main"
      ```
    - ط¯ط± طµظˆط±طھ conflict:
      - ظ‡غŒع† `git add` / `git commit` ط¬ط¯غŒط¯ طھط§ ط²ظ…ط§ظ† طھطµظ…غŒظ…â€Œع¯غŒط±غŒ ط²ط¯ظ‡ ظ†ظ…غŒâ€Œط´ظˆط¯
      - ط¯ط± طµظˆط±طھ ظ†غŒط§ط²:
        ```bash
        git merge --abort
        ```

  5. **طھط³طھ ظ…ط¬ط¯ط¯ ط±ظˆغŒ main ط¨ط¹ط¯ ط§ط² ظ…ط±ط¬**
    - ط±ظˆغŒ `main`:
      ```bash
      npm run lint:ci
      npm run build
      - ظ…ط¹غŒط§ط± آ«ط³ط¨ط² ط¨ظˆط¯ظ†آ» ط¨ط±ط§غŒ `npm run lint:ci` غŒط¹ظ†غŒ: ظ‡غŒع† ط®ط·ط§ ظˆ ظ‡غŒع† ظ‡ط´ط¯ط§ط± ظپط¹ط§ظ„غŒ ط¯ط± ط®ط±ظˆط¬غŒ ط¨ط§ظ‚غŒ ظ†ظ…ط§ظ†ط¯ظ‡ ط¨ط§ط´ط¯
      (ط­ظپط¸ baseline طµظپط± ظ‡ط´ط¯ط§ط± ط±ظˆغŒ `main`).
      # ط¯ط± طµظˆط±طھ ظ†غŒط§ط²:
      npm run dev
      ```
    - ط§ع¯ط± ظ…ط´ع©ظ„ ط¬ط¯غŒ ط¯غŒط¯ظ‡ ط´ط¯ ظˆ طھطµظ…غŒظ… ط¨ظ‡ ط¨ط§ط²ع¯ط´طھ ع¯ط±ظپطھظ‡ ط´ط¯:
      ```bash
      git reset --hard backup/main-before-<integration-branch>
      ```

  6. **push ظ†ظ‡ط§غŒغŒ ظˆ ط§ظ†طھط´ط§ط± ط¨ع©ط§ظ¾â€Œظ‡ط§ ط±ظˆغŒ ط±غŒظ…ظˆطھ**
    - ظ¾ط³ ط§ط² ط³ط¨ط² ط¨ظˆط¯ظ† طھط³طھâ€Œظ‡ط§ ط±ظˆغŒ main:
      ```bash
      git push origin main
      git push origin backup/main-before-<integration-branch>
      git push origin backup/<integration-branch>
      git push origin --tags
      ```

  7. **طھظ…غŒط²ع©ط§ط±غŒ طھط¯ط±غŒط¬غŒ ط¨ط±ظ†ع†â€Œظ‡ط§**
    - ط¨ط¹ط¯ ط§ط² ط¯ظˆط±ظ‡ظ” ط§ط·ظ…غŒظ†ط§ظ† (ع†ظ†ط¯ ط±ظˆط² غŒط§ غŒع© ط§ط³ظ¾ط±غŒظ†طھ) ظˆ ظ¾ط§غŒط¯ط§ط± ط¨ظˆط¯ظ† `main`:
      - ط­ط°ظپ ط¨ط±ظ†ع†â€Œظ‡ط§غŒ ع©ط§ط±غŒ: `feature/...`طŒ `chore/...`طŒ `integrate/...`
    - ط¨ط±ظ†ع†â€Œظ‡ط§ ظˆ طھع¯â€Œظ‡ط§غŒ `backup/...` ظپظ‚ط· ط¨ط§ طھطµظ…غŒظ… طµط±غŒط­ ظ…ط¯غŒط± ظ¾ط±ظˆعکظ‡ ط­ط°ظپ ظ…غŒâ€Œط´ظˆظ†ط¯.

### 21.3) Playbook ط¨ط§ط²غŒط§ط¨غŒ ظ…ط±ط¬ (Reflog / Cherry-pick)
ع¯ط§ظ‡غŒ ظ…ظ…ع©ظ† ط§ط³طھ آ«merge ط¯ط± UI ع¯غŒطھâ€Œظ‡ط§ط¨آ» ط§ظ†ط¬ط§ظ… ظ†ط´ط¯ظ‡ ط¨ط§ط´ط¯ غŒط§ ط±ظˆغŒ `main` ط§ط«ط± ظ†ع¯ط°ط§ط±ط¯ (ظ…ط«ظ„ط§ظ‹ ط¨ظ‡â€Œط¯ظ„غŒظ„ ط­ط°ظپ ط¨ط±ظ†ع† ظ‚ط¨ظ„ ط§ط² Verify).
ط¯ط± ط§غŒظ† ط­ط§ظ„طھطŒ ظ…ط³غŒط± ط§ظ…ظ† ط¨ط§ط²غŒط§ط¨غŒ:
1) ط±ظˆغŒ `main`:
   - `git status` ط¨ط§غŒط¯ clean ط¨ط§ط´ط¯.
2) غŒط§ظپطھظ† SHA ع©ط§ظ…غŒطھ ط§ط² reflog:
   - `git reflog --all --date=local | findstr /i "<keyword>"`
3) ط§ط¹ظ…ط§ظ„ طھط؛غŒغŒط± ط±ظˆغŒ `main`:
   - `git cherry-pick <SHA>`
4) طھط³طھ ظˆ Push:
   - `npm run build`
   - `git push origin main`

## 22) ع¯ط²ط§ط±ط´ ظˆط¶ط¹غŒطھ طھغŒظ… ظ…ظˆط¯غŒط§ظ† â€” غ±غ´غ°غ´/غ°غ¹/غ±غ´

ط¨ط± ط§ط³ط§ط³ ظپط§غŒظ„ `team2-status-report-14040914.txt`.

### 22.1) ظ…ط³غŒط±ظ‡ط§ ظˆ طµظپط­ط§طھ ط¬ط¯غŒط¯ ط¯ط± ط²غŒط±ظ…ظ†ظˆغŒ آ«ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯آ»

- ظ…ط·ط§ط¨ظ‚ `app-tree.txt` ظˆ ط®ط±ظˆط¬غŒ طھغŒظ… ظ…ظˆط¯غŒط§ظ†طŒ ط²غŒط±ظ…ظ†ظˆغŒ ط¬ط¯غŒط¯ آ«ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯آ» ط¯ط± ط³ط§ط®طھط§ط± Routing ظ…ظˆط¯غŒط§ظ† ط§ط¶ط§ظپظ‡ ط´ط¯ظ‡ ط§ط³طھ:
  - `src/app/simulators/modian/purchase-announcements/page.tsx`
    - ط´ظگظ„/Wrapper ط§طµظ„غŒ ط²غŒط±ظ…ظ†ظˆ ع©ظ‡ layout ظˆ ط³ط§ط¨â€Œظ‡ط¯ط± ط±ط§ ظپط±ط§ظ‡ظ… ظ…غŒâ€Œع©ظ†ط¯.
  - `src/app/simulators/modian/purchase-announcements/imports/page.tsx`
    - طµظپط­ظ‡ظ” آ«ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ظˆط§ط±ط¯ط§طھآ» ط¨ط§ ط¯ظˆ طھط¨:
      - آ«ط¬ط³طھط¬ظˆ ط¨ط§ ظپغŒظ„طھط±آ» (SearchByFilters + InvoicesSearchHeader)
      - آ«ط¬ط³طھط¬ظˆ ط¨ط§ ط´ظ…ط§ط±ظ‡ ظ…ط§ظ„غŒط§طھغŒآ».
    - ظ†ظˆط§ط± ط§ط¨ط²ط§ط± ط¨غŒظ† ظپط±ظ… ط¬ط³طھط¬ظˆ ظˆ ط¬ط¯ظˆظ„ ط´ط§ظ…ظ„:
      - ط®ط±ظˆط¬غŒ ط§ع©ط³ظ„
      - ظ†ظ…ط§غŒط´/ظ…ط®ظپغŒâ€Œط³ط§ط²غŒ ط³طھظˆظ†â€Œظ‡ط§
      - ط§ظ†طھظ‚ط§ظ„ ط´ط¹ط¨ظ‡.
    - ط¬ط¯ظˆظ„ ط¨ط§ ط­ط¯ظˆط¯ غ±غµ ط³طھظˆظ† ظ‚ط§ط¨ظ„ طھظ†ط¸غŒظ… ظˆ ط³طھظˆظ† ع†ط³ط¨ط§ظ† آ«ط¬ط²ط¦غŒط§طھآ» ط¯ط± ط§ظ†طھظ‡ط§غŒ ظ‡ط± ط±ط¯غŒظپ.
  - `src/app/simulators/modian/purchase-announcements/bourse/page.tsx`
    - طµظپط­ظ‡ظ” آ«ط®ط±غŒط¯ ط§ط² ط¨ظˆط±ط³ ع©ط§ظ„ط§آ» ع©ظ‡ ط§ظ„ع¯ظˆغŒ ظˆط§ط±ط¯ط§طھ ط±ط§ ع©ظ¾غŒ ع©ط±ط¯ظ‡ ظˆ ط¨ط§ ط³ظ†ط§ط±غŒظˆغŒ ط¨ظˆط±ط³ ط³ظپط§ط±ط´غŒ ط´ط¯ظ‡ ط§ط³طھ:
      - طھغŒطھط± ظˆ ظ…طھظˆظ† طµظپط­ظ‡ ظ…طھظ†ط§ط³ط¨ ط¨ط§ آ«ط®ط±غŒط¯ ط§ط² ط¨ظˆط±ط³ ع©ط§ظ„ط§آ».
      - طھظ†ط¸غŒظ… ظ…ط¬ط¯ط¯ ظپغŒظ„طھط±ظ‡ط§غŒ ظ¾غŒط´ط±ظپطھظ‡ (ط­ط°ظپ ظپغŒظ„ط¯ظ‡ط§غŒ ط§ط¶ط§ظپغŒ ظ…ط§ظ†ظ†ط¯ ط§ظ„ع¯ظˆطŒ ط­ط¯ ظ…ط¬ط§ط²طŒ ط´ظ†ط§ط³ظ‡â€Œظ‡ط§ ظˆ ع†ع©â€Œط¨ط§ع©ط³â€Œظ‡ط§غŒ ظ†ط§ظ…ط±طھط¨ط·).
      - ظ…ط­ط¯ظˆط¯ ع©ط±ط¯ظ† آ«ظ…ظˆط¶ظˆط¹ ط§ط¹ظ„ط§ظ…غŒظ‡آ» ط¨ظ‡ ع¯ط²غŒظ†ظ‡â€Œظ‡ط§غŒ آ«ط§طµظ„غŒآ» ظˆ آ«ط§ط¨ط·ط§ظ„غŒآ».
      - طھط¹ط±غŒظپ ظ…ط¬ط¯ط¯ طھط±طھغŒط¨ ظˆ ظ¾غŒط´â€Œظپط±ط¶ ط³طھظˆظ†â€Œظ‡ط§غŒ ط¬ط¯ظˆظ„ ظ…ط·ط§ط¨ظ‚ ظ†غŒط§ط² ط³ظ†ط§ط±غŒظˆغŒ ط¨ظˆط±ط³.

### 22.2) ع©غŒطھ UI ظˆ ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒ ظ…ط´طھط±ع© ط¯ط± آ«ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯آ»

- ط§ط³طھظپط§ط¯ظ‡â€ŒغŒ ظ…ط¬ط¯ط¯ ط§ط² ط§ظ„ع¯ظˆغŒ Search/Header طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§:
  - `InvoicesSearchHeader` ط¨ط±ط§غŒ ظ‡ط¯ط± ط¬ط³طھط¬ظˆطŒ طھغŒطھط± ظˆ طھط¨â€Œظ‡ط§غŒ آ«ظپغŒظ„طھط± / ط´ظ…ط§ط±ظ‡ ظ…ط§ظ„غŒط§طھغŒآ».
  - `SearchByFilters` ط¨ط±ط§غŒ ظپط±ظ… ظپغŒظ„طھط± ط³ط§ط¯ظ‡ + ظ¾غŒط´ط±ظپطھظ‡طŒ ظ‡ظ…ط±ط§ظ‡ ط¨ط§ ط¯ع©ظ…ظ‡â€Œظ‡ط§غŒ:
    - آ«ط¬ط³طھط¬ظˆآ»
    - آ«ظپغŒظ„طھط± ظ¾غŒط´â€Œظپط±ط¶آ»
    - ط¨ط§ط²/ط¨ط³طھظ‡â€Œع©ط±ط¯ظ† ظ¾ظ†ظ„ ظ¾غŒط´ط±ظپطھظ‡.
- ظ†ظˆط§ط± ط§ط¨ط²ط§ط± ط¬ط¯ظˆظ„:
  - ط§ط³طھظپط§ط¯ظ‡ ط§ط² ظ‡ظ…ط§ظ† ط§ظ„ع¯ظˆغŒ Toolbar ط³طھظˆظ†â€Œظ‡ط§ (ط¢غŒع©ظˆظ† ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§طŒ ط®ط±ظˆط¬غŒ ط§ع©ط³ظ„طŒ ط§ظ†طھظ‚ط§ظ„ ط´ط¹ط¨ظ‡) ع©ظ‡ ط¯ط± ط³ط§غŒط± طµظپط­ط§طھ طµظˆط±طھط­ط³ط§ط¨ ظ†غŒط² ط§ط³طھظپط§ط¯ظ‡ ط´ط¯ظ‡ ط§ط³طھ.
- ظ†ظ…ط§غŒ ط®ط§ظ„غŒ ظ…ط´طھط±ع© ط¬ط¯ظˆظ„:
  - ط§ط³طھط®ط±ط§ط¬ ع©ط§ظ…ظ¾ظˆظ†ظ†طھ `EmptyTableRow` ط¯ط± ظ…ط³غŒط±:
    - `src/components/modian/common/table/EmptyTableRow.tsx`
  - ط§غŒظ† ع©ط§ظ…ظ¾ظˆظ†ظ†طھ ط´ط§ظ…ظ„ ط¢غŒع©ظˆظ† ظ…ط§ظ†غŒطھظˆط± + ط­ط¨ط§ط¨ ع¯ظپطھع¯ظˆ ظˆ ظ…طھظ† آ«ظ…ظˆط±ط¯غŒ غŒط§ظپطھ ظ†ط´ط¯آ» ط§ط³طھ ظˆ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ظ†ظ…ط§غŒ ط®ط§ظ„غŒ ط§ط³طھط§ظ†ط¯ط§ط±ط¯
    ط¯ط± ط¬ط¯ظˆظ„â€Œظ‡ط§غŒ ط§ط¹ظ„ط§ظ…غŒظ‡ ظˆط§ط±ط¯ط§طھ ظˆ ط®ط±غŒط¯ ط§ط² ط¨ظˆط±ط³ ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯.

### 22.3) ظˆط¶ط¹غŒطھ ع©غŒظپغŒطŒ ط±غŒط³ع©â€Œظ‡ط§ ظˆ ط§ظ‚ط¯ط§ظ…ط§طھ ط¨ط¹ط¯غŒ

- **ع©غŒظپغŒطھ ظˆ CI**
  - ط¯ط± ع¯ط²ط§ط±ط´ طھغŒظ… ظ…ظˆط¯غŒط§ظ† ط¨ط±ط§غŒ ط§غŒظ† ط¨ط§ط²ظ‡طŒ ط§ط¬ط±ط§غŒ `Build/Lint/Test` ط§ط² ط³ظ…طھ طھغŒظ… ظ…ظˆط¯غŒط§ظ† ط§ظ†ط¬ط§ظ… ظˆ ط«ط¨طھ ظ†ط´ط¯ظ‡ ط§ط³طھ
    ظˆ ظˆط§ط¨ط³طھظ‡ ط¨ظ‡ ظ¾ط§غŒظ¾â€Œظ„ط§غŒظ† CI ط±غŒظ¾ظˆ ط§طµظ„غŒ ط§ط³طھط› ط¯ط± ظ†طھغŒط¬ظ‡:
    - ظ¾ط³ ط§ط² ط§ط¯ط؛ط§ظ… ط§غŒظ† ظپغŒع†ط±طŒ ط§ط¬ط±ط§غŒ `npm run lint:ci` ظˆ `npm run build` ط±ظˆغŒ ط¨ط±ظ†ع† ط§طµظ„غŒ (ط³ط§ط®طھط§ط±/ظ…ظˆط¯غŒط§ظ†) ط§ظ„ط²ط§ظ…غŒ ط§ط³طھ.
- **ط§طھطµط§ظ„ ط¨ظ‡ ط³ط±ظˆغŒط³â€Œظ‡ط§غŒ ظˆط§ظ‚ط¹غŒ ظ…ظˆط¯غŒط§ظ†**
  - ط¯ط± ط­ط§ظ„ ط­ط§ط¶ط±طŒ ط²غŒط±ظ…ظ†ظˆغŒ آ«ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯آ» طµط±ظپط§ظ‹ UI/ط´ط¨غŒظ‡â€Œط³ط§ط² ط§ط³طھ ظˆ ط¨ظ‡ ط³ط±ظˆغŒط³â€Œظ‡ط§غŒ ظˆط§ظ‚ط¹غŒ ظ…ظˆط¯غŒط§ظ† ظ…طھطµظ„ ظ†ط´ط¯ظ‡ ط§ط³طھ.
  - ظ…ط´ط§ط¨ظ‡ ظ…ط§عکظˆظ„ `old-Invoices`طŒ ظ„ط§ط²ظ… ط§ط³طھ ط¯ط± ط³ظ†ط¯ `docs-modian-endpoints.updated.md`:
    - mapping ط±ط³ظ…غŒ ط¨غŒظ† ظپغŒظ„ط¯ظ‡ط§غŒ ظپغŒظ„طھط± (ظˆط¶ط¹غŒطھ ط§ط¹ظ„ط§ظ…غŒظ‡طŒ ظ…ظˆط¶ظˆط¹ ط§ط¹ظ„ط§ظ…غŒظ‡طŒ ط¨ط§ط²ظ‡ظ” طھط§ط±غŒط®طŒ ط³ظ†ط§ط±غŒظˆغŒ ظˆط§ط±ط¯ط§طھ/ط¨ظˆط±ط³ ظˆ â€¦) ظˆ ظ¾ط§ط±ط§ظ…طھط±ظ‡ط§غŒ API
      ط¯ط± ظ†ط³ط®ظ‡â€Œظ‡ط§غŒ ط¨ط¹ط¯غŒ ظ…ط³طھظ†ط¯ ط´ظˆط¯.
- **ط±غŒط³ع© ظ‡ظ…â€Œع¯ط±ط§غŒغŒ ط¨ط§ UI ط±ط³ظ…غŒ**
  - ط¨ظ‡â€Œط¯ظ„غŒظ„ ع©ظ¾غŒ ط§ظ„ع¯ظˆ ط§ط² طµظپط­ظ‡ظ” ظˆط§ط±ط¯ط§طھ ظˆ ط³ظپط§ط±ط´غŒâ€Œط³ط§ط²غŒ ط¨ط±ط§غŒ ط¨ظˆط±ط³ ع©ط§ظ„ط§طŒ ط¯ط± طµظˆط±طھ طھط؛غŒغŒط± ط¯ط± ط§ط³ع©ط±غŒظ†â€Œظ‡ط§غŒ ط±ط³ظ…غŒطŒ ط§ط­طھظ…ط§ظ„ divergence ط¨غŒظ†
    ط§غŒظ† ط¯ظˆ طµظپط­ظ‡ ظˆط¬ظˆط¯ ط¯ط§ط±ط¯ط› ط¨ظ†ط§ط¨ط±ط§غŒظ† ظ¾غŒط´ظ†ظ‡ط§ط¯ ظ…غŒâ€Œط´ظˆط¯:
    - ظ‡ط± طھط؛غŒغŒط± ط¹ظ…ط¯ظ‡ ط¯ط± ط§ط³ع©ط±غŒظ†â€Œظ‡ط§غŒ ظ…ظˆط¯غŒط§ظ† ط¨ط±ط§غŒ ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§طŒ ط¨ط§ ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ظ‡ظ…â€Œط²ظ…ط§ظ† ط¯ط± ظ‡ط± ط¯ظˆ ط²غŒط±طµظپط­ظ‡ ظˆ ط¯ط± ط§غŒظ† ط³ظ†ط¯ ظ‡ظ…ط±ط§ظ‡ ط¨ط§ط´ط¯.

---

> ط¢ط®ط±غŒظ† ظˆغŒط±ط§غŒط´: ط¨ط± ظ…ط¨ظ†ط§غŒ ظپط§غŒظ„â€Œظ‡ط§غŒ ط§ط±ط³ط§ظ„â€Œط´ط¯ظ‡ ط¯ط± ظ‡ظ…غŒظ† ع¯ظپطھع¯ظˆ (ط¨ط®ط´ project) ظˆ ظ„ط§ع¯â€Œظ‡ط§غŒ `npm run build`.

## 23) ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ط³ط§ط®طھط§ط± ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ† â€” غ±غ´غ°غ´/غ°غ¹/غ±غ·

ط¨ط± ط§ط³ط§ط³ ظپط§غŒظ„ project-structure-update-notes-14040917.txt ظˆ ط¢ط®ط±غŒظ† ظ†ط³ط®ظ‡ظ” app-tree.txt ظˆ components-tree.txtطŒ ط§غŒظ† ط¨ط®ط´ ظˆط¶ط¹غŒطھ ط¬ط¯غŒط¯ ط³ط§ط®طھط§ط± ظ…ظˆط¯غŒط§ظ† ط±ط§ ط¯ط± ط³ط·ط­ ظ…ط³غŒط±ظ‡ط§طŒ ظ„ط§غŒظ‡â€Œظ‡ط§غŒ ع©ط§ظ…ظ¾ظˆظ†ظ†طھ ظˆ ط§ط³طھط§ظ†ط¯ط§ط±ط¯ظ‡ط§غŒ lint/Barrel ظ…ط³طھظ†ط¯ ظ…غŒâ€Œع©ظ†ط¯.

 ## 23.1) ط§طµظ„ط§ط­ ظ…ط¹ظ…ط§ط±غŒ ظ‚ط¨ظˆط¶ ظ…ظˆط¯غŒط§ظ†

 ط¨ط± ط§ط³ط§ط³ Refactor ط§ظ†ط¬ط§ظ…â€Œط´ط¯ظ‡ ط¯ط± Backend:

 ### ط³ط§ط®طھط§ط± ظ†ظ‡ط§غŒغŒ ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ†

 src/simulator-modian/
 â”œâ”€â”€ bills.controller.ts
 â”œâ”€â”€ bills.service.ts
 â”œâ”€â”€ registration.controller.ts
 â”œâ”€â”€ registration.service.ts
 â”œâ”€â”€ simulator-modian.controller.ts
 â”œâ”€â”€ simulator-modian.module.ts
 â””â”€â”€ dto/
     â”œâ”€â”€ create-utility-bill.dto.ts
     â”œâ”€â”€ query-bills.dto.ts
     â””â”€â”€ update-utility-bill.dto.ts

 ### ط­ط°ظپ ط´ط¯ظ‡

 src/simulator-modian/simulator-modian.service.ts

 ط¹ظ„طھ ط­ط°ظپ:
 - ظ…ط±ط¨ظˆط· ط¨ظ‡ ظ…ط¹ظ…ط§ط±غŒ MVP ط§ظˆظ„غŒظ‡ ط¨ظˆط¯.
 - ظ…ط³ط¦ظˆظ„غŒطھ CRUD ظ‚ط¨ظˆط¶ ط±ط§ ط¨ط±ط¹ظ‡ط¯ظ‡ ط¯ط§ط´طھ.
 - ط¨ط§ ظ…ط¹ظ…ط§ط±غŒ Multi-Tenant ط¬ط¯غŒط¯ ظ‡ظ…â€Œط±ط§ط³طھط§ ظ†ط¨ظˆط¯.

 ### ظ‚ط±ط§ط±ط¯ط§ط¯ ط¬ط¯غŒط¯

 ظ…ط³غŒط± ط§ط³طھط§ظ†ط¯ط§ط±ط¯ ظ‚ط¨ظˆط¶:

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

 ### ط§ظ„ط²ط§ظ…ط§طھ ط§ظ…ظ†غŒطھغŒ

 - Client ظ†ط¨ط§غŒط¯ businessId غŒط§ registrationId ط±ط§ ط¨ظ‡ ط¹ظ†ظˆط§ظ† ظ…ظ†ط¨ط¹ ط­ظ‚غŒظ‚طھ ط§ط±ط³ط§ظ„ ع©ظ†ط¯.
 - ظ…ط§ظ„ع©غŒطھ ط±ع©ظˆط±ط¯ظ‡ط§ ط§ط² JWT Context ط§ط³طھط®ط±ط§ط¬ ظ…غŒâ€Œط´ظˆط¯.
 - ط¹ظ…ظ„غŒط§طھ Create/List/Update/Delete ط¨ط§ Business Scope ط§ظ†ط¬ط§ظ… ظ…غŒâ€Œط´ظˆط¯.

 ### Validation

 - ValidationPipe ط³ط±ط§ط³ط±غŒ NestJS ظپط¹ط§ظ„ ط´ط¯.
 - DTO validation ط¨ط±ط§غŒ ظˆط±ظˆط¯غŒâ€Œظ‡ط§غŒ API ظپط¹ط§ظ„ ط§ط³طھ.

 ### ظˆط¶ط¹غŒطھ طھط³طھ

 - npm run build: ظ…ظˆظپظ‚
 - npm run start:dev: ظ…ظˆظپظ‚
 - Create Bill: ظ…ظˆظپظ‚
 - List Bill: ظ…ظˆظپظ‚
 - Update Bill: ظ…ظˆظپظ‚
 - Soft Delete: ظ…ظˆظپظ‚

### 23.1) طھط؛غŒغŒط±ط§طھ ط³ط§ط®طھط§ط±غŒ ط¯ط± ظ…ط³غŒط±ظ‡ط§ (app-tree)

- ط²غŒط±ظ…ط³غŒط± ط¬ط¯غŒط¯ آ«ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§آ» ط¯ط± ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ†:
ظ…ط³غŒط±ظ‡ط§:
src/app/simulators/modian/contracts/contracting/page.tsx
src/app/simulators/modian/contracts/contracting/new/page.tsx
src/app/simulators/modian/contracts/commission/page.tsx
طھظˆط¶غŒط­ ظ†ظ‚ط´â€Œظ‡ط§:
contracting/: ظ„غŒط³طھ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ + ظˆغŒط²ط§ط±ط¯ ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ط¬ط¯غŒط¯.
commission/: ظ„غŒط³طھ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ.
- طھع©ظ…غŒظ„ ط³ط§ط®طھط§ط± old-Invoices:
ظ…ط³غŒط±ظ‡ط§غŒ ظ…ظˆط¬ظˆط¯:
src/app/simulators/modian/old-Invoices/buy/page.tsx
src/app/simulators/modian/old-Invoices/buy/detail/page.tsx
src/app/simulators/modian/old-Invoices/sales/page.tsx
src/app/simulators/modian/old-Invoices/sales/detail/page.tsx
src/app/simulators/modian/old-Invoices/exports/page.tsx
src/app/simulators/modian/old-Invoices/exports/detail/page.tsx
ط§غŒظ† ط²غŒط±ط´ط§ط®ظ‡ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† آ«ع¯ط±ظˆظ‡ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¨ظ„ ط§ط² غ±غ´غ°غ²/غ°غ³/غ²غ¶آ» ط¯ط± ط³ط§غŒط¯ط¨ط§ط± ظˆ ط³ط§ط®طھط§ط± Routing ظ…ظˆط¯غŒط§ظ† ط¯ط± ظ†ط¸ط± ع¯ط±ظپطھظ‡ ظ…غŒâ€Œط´ظˆط¯.
- ط²غŒط±ظ…ظ†ظˆغŒ آ«ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯آ»:
ظ…ط³غŒط±ظ‡ط§:
src/app/simulators/modian/purchase-announcements/page.tsx
src/app/simulators/modian/purchase-announcements/imports/page.tsx
src/app/simulators/modian/purchase-announcements/bourse/page.tsx
ط§غŒظ† ط²غŒط±ط´ط§ط®ظ‡ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ظ…ظ†ظˆغŒ ط¬ط¯غŒط¯ ط¯ط± ط³ط§غŒط¯ط¨ط§ط± ظ…ظˆط¯غŒط§ظ† ط«ط¨طھ ظ…غŒâ€Œط´ظˆط¯ ظˆ طµظپط­ط§طھ imports ظˆ bourse ط§ط² Search Suite ظ…ط´طھط±ع© ظˆ ط¬ط¯ظˆظ„ ط§ط³ع©ط±ظˆظ„â€Œط¯ط§ط± ظ…ط´طھط±ع© ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ظ†ط¯.

### 23.2) ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ط³ط§ط®طھط§ط± components (Barrelظ‡ط§ ظˆ ظ…ط§عکظˆظ„â€Œظ‡ط§)

#### 23.2.1) ظ„ط§غŒظ‡ظ” modian/common

- ط³ط§ط®طھط§ط± ط¬ط¯غŒط¯ src/components/modian/common ط´ط§ظ…ظ„ ظ…ظˆط§ط±ط¯ ط²غŒط± ط§ط³طھ:
ظ¾ظˆط´ظ‡ظ” search/ ط´ط§ظ…ظ„:
InvoicesSearchHeader.tsx
SearchByFilters.tsx
SearchByTaxId.tsx
index.ts
ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§ ظˆ utilظ‡ط§غŒ ط¯ط§ظ…ظ†ظ‡â€Œط§غŒ:
ModianJalaliDateField.tsx
memoryKey.utils.ts
useMemoryPublicKey.ts
- ط¯ط± ط³ظ†ط¯طŒ ط§غŒظ† ظ„ط§غŒظ‡ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† آ«ظ…ظˆط¯غŒط§ظ† â€” Common Layerآ» طھظˆطµغŒظپ ظ…غŒâ€Œط´ظˆط¯:
ظ†ظ‚ط´: ظ†ع¯ظ‡â€Œط¯ط§ط±غŒ ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§ ظˆ utilظ‡ط§غŒ ط¯ط§ظ…ظ†ظ‡â€Œط§غŒ ظ…ط´طھط±ع© ظ…ظˆط¯غŒط§ظ† (JalaliDateField ط§ط®طھطµط§طµغŒطŒ Search SuiteطŒ Memory Key utilitiesطŒ ط¨ظ„ظˆع©â€Œظ‡ط§غŒ ط¬ط²ط¦غŒط§طھ طµظˆط±طھط­ط³ط§ط¨ ظˆ â€¦).
Barrel ط§طµظ„غŒ:
@/components/modian/common طھظ†ظ‡ط§ ظ†ظ‚ط·ظ‡ظ” ظ…ط¬ط§ط² import ط§غŒظ† ظ„ط§غŒظ‡ ط§ط² ط¯غŒط¯ طµظپط­ط§طھ ظˆ ط³ط§غŒط± ظ…ط§عکظˆظ„â€Œظ‡ط§ ط§ط³طھ.
 ط´ط§ظ…ظ„ ظپط§غŒظ„â€Œظ‡ط§ ظˆ ظ¾ظˆط´ظ‡â€Œظ‡ط§غŒ ط²غŒط± (ظ…ط·ط§ط¨ظ‚ components-tree):
   - ModianJalaliDatePicker.tsx
   - SimulatorBadge.tsx
   - Tabs.tsx
   - ToolbarControls.tsx
   - UploadPublicKeyModal.tsx
   - memoryKey.utils.ts
   - useMemoryPublicKey.ts

#### 23.2.2) ظ„ط§غŒظ‡ظ” modian/ui

ط´ط§ظ…ظ„ ظپط§غŒظ„â€Œظ‡ط§غŒ ط¯ظ‚غŒظ‚ ظ…ط·ط§ط¨ظ‚ components-tree:
   - Card.tsx
   - FieldGrid.tsx
   - FormField.tsx
   - FormToolbar.tsx
   - PageShell.tsx
   - Section.tsx
   - icons.tsx
   - index.ts (Barrel)
- ط¯ط± ظ†ط³ط®ظ‡â€Œظ‡ط§غŒ ط§ط®غŒط±طŒ ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒ UI ط®ط§ظ„طµ ظ…ظˆط¯غŒط§ظ† (ظ…ط§ظ†ظ†ط¯ ظ…ط¯ط§ظ„â€Œظ‡ط§غŒغŒ ظ…ط«ظ„ UploadPublicKeyModal ط¯ط± طµظˆط±طھ ظ‚ط±ط§ط±ع¯ط±ظپطھظ† ط²غŒط± ط§غŒظ† ظ„ط§غŒظ‡) ظ†غŒط² ط¨ط§غŒط¯ ظپظ‚ط· ط§ط² Barrel ظ‡ظ…غŒظ† ظ…ط³غŒط± export ط´ظˆظ†ط¯.
- ط¯ط± ط³ظ†ط¯ طھط£ع©غŒط¯ ظ…غŒâ€Œط´ظˆط¯ ع©ظ‡:
طھظ…ط§ظ… UIظ‡ط§غŒ ط®ط§ظ„طµ ظˆ ط§طھظ…غŒع© ظ…ظˆط¯غŒط§ظ† ظپظ‚ط· ط§ط² @/components/modian/ui import ظ…غŒâ€Œط´ظˆظ†ط¯.
import ظ…ط³طھظ‚غŒظ… ط§ط² ظپط§غŒظ„â€Œظ‡ط§غŒ ط²غŒط±ظ…ط³غŒط±غŒ (ظ…ط«ظ„ @/components/modian/ui/icons) ط¯ط± طµظپط­ط§طھ ظ…ظ…ظ†ظˆط¹ ط§ط³طھ ظˆ طھظˆط³ط· ESLint (no-restricted-imports) ع©ظ†طھط±ظ„ ظ…غŒâ€Œط´ظˆط¯.

#### 23.2.3) ظ„ط§غŒظ‡ظ” modian/layout

- ظ¾ظˆط´ظ‡ظ” src/components/modian/layout/ ط´ط§ظ…ظ„:
ModianHeader.tsx
ModianFooter.tsx
ModianShell.tsx
ModianSubHeader.tsx
index.ts
- ط§غŒظ† ظ„ط§غŒظ‡ ط¯ط± ط³ظ†ط¯ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† آ«ط´ظگظ„ ط§ط®طھطµط§طµغŒ ظ…ظˆط¯غŒط§ظ†آ» طھط¹ط±غŒظپ ظ…غŒâ€Œط´ظˆط¯:
ظˆط¸ط§غŒظپ: ط±ظ†ط¯ط± ظ‡ط¯ط±طŒ ظپظˆطھط±طŒ ط³ط§غŒط¯ط¨ط§ط±/ط³ط§ط¨â€Œظ‡ط¯ط± ظˆ ط´ظگظ„ ط§طµظ„غŒ ظ…ط­غŒط· ظ…ظˆط¯غŒط§ظ†.
ظ…طµط±ظپ ظ…ط¹ظ…ظˆظ„ط§ظ‹ ط¯ط±:
src/app/simulators/modian/layout.tsx
ظˆ ط²غŒط±layoutظ‡ط§غŒ ط®ط§طµ ظ…ط«ظ„ portal/, dashboard/ ظˆ â€¦ .

#### 23.2.4) Search Suite ظ…ظˆط¯غŒط§ظ† (ظ…ط§عکظˆظ„ ظ…ط´طھط±ع©)

- غŒع© ط²غŒط±â€Œط¨ط®ط´ ط¬ط¯غŒط¯ آ«Shared Search Suite (طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§طŒ ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§طŒ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§)آ» ط¨ط±ط§غŒ ط§غŒظ† ظ„ط§غŒظ‡ ط¯ط± ظ†ط¸ط± ع¯ط±ظپطھظ‡ ظ…غŒâ€Œط´ظˆط¯:
ظ…ط­ظ„ ظپط§غŒظ„â€Œظ‡ط§:
src/components/modian/common/search/InvoicesSearchHeader.tsx
src/components/modian/common/search/SearchByFilters.tsx
src/components/modian/common/search/SearchByTaxId.tsx
src/components/modian/common/search/index.ts
ظ†ظ‚ط´:
ظپط±ط§ظ‡ظ…â€Œع©ط±ط¯ظ† ظ‡ط¯ط± ط¬ط³طھط¬ظˆ ظˆ ظپط±ظ… ظپغŒظ„طھط± ط³ط§ط¯ظ‡/ظ¾غŒط´ط±ظپطھظ‡ ط¨ط±ط§غŒ:
 - `invoices/*`
 - `old-Invoices/*`
 - `purchase-announcements/*`
 - `contracts/contracting/*` (ظˆ ط¯ط± ط¢غŒظ†ط¯ظ‡ `contracts/commission/*`)

ط§ط³طھط§ظ†ط¯ط§ط±ط¯ ظ…طµط±ظپ:
طµظپط­ط§طھ ظپظ‚ط· ط§ط² Barrel @/components/modian/common غŒط§ ط¯ط± طµظˆط±طھ ظ†غŒط§ط² @/components/modian/common/search ط§ط³طھظپط§ط¯ظ‡ ع©ظ†ظ†ط¯طŒ ظ†ظ‡ ط§ط² ظپط§غŒظ„ ظ…ظ†ظپط±ط¯.

#### 23.2.5) ظ†ظ…ط§غŒ ط®ط§ظ„غŒ ظ…ط´طھط±ع© ط¬ط¯ظˆظ„â€Œظ‡ط§

- ع©ط§ظ…ظ¾ظˆظ†ظ†طھ ظ…ط´طھط±ع© ظ†ظ…ط§غŒ ط®ط§ظ„غŒ ط¬ط¯ظˆظ„:
ظ…ط³غŒط±: src/components/modian/common/table/EmptyTableRow.tsx
ط§غŒظ† ع©ط§ظ…ظ¾ظˆظ†ظ†طھ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† آ«ظ†ظ…ط§غŒ ط®ط§ظ„غŒ ط§ط³طھط§ظ†ط¯ط§ط±ط¯ ط¬ط¯ظˆظ„â€Œظ‡ط§غŒ ظ…ظˆط¯غŒط§ظ†آ» ظ…ط¹ط±ظپغŒ ظ…غŒâ€Œط´ظˆط¯ ظˆ:
ط¯ط± طµظپط­ط§طھ ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯ ظˆ ط³ط§غŒط± ط¬ط¯ط§ظˆظ„ ط¬ط¯غŒط¯ ظ…ظˆط¯غŒط§ظ† ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯.
ظ¾غŒط§ظ…/ط§ط³طھط§غŒظ„ ط«ط§ط¨طھ ط¯ط§ط±ط¯ ظˆ ظپظ‚ط· ط¯ط§ط¯ظ‡â€Œظ‡ط§غŒ ط¬ط¯ظˆظ„ ط¯ط± ط³ظ†ط§ط±غŒظˆظ‡ط§غŒ ظ…ط®طھظ„ظپ طھط؛غŒغŒط± ظ…غŒâ€Œع©ظ†ط¯.

### 23.3) ط§ظ„ع¯ظˆغŒ Client/Server ط¨ط±ط§غŒ طµظپط­ط§طھ ظ…ظˆط¯غŒط§ظ† (App Router)

- ط§طµظ„ ع©ظ„غŒ:
ظ‡ط± طµظپط­ظ‡â€Œط§غŒ ع©ظ‡ ط§ط² ظ‡ظˆع©â€Œظ‡ط§غŒ ع©ظ„ط§غŒظ†طھغŒ Next.js (ظ…ط«ظ„ useSearchParams) ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ط¯ ط¨ط§غŒط¯:
غŒط§ ط®ظˆط¯ط´ ط¨ط§ use client طھط¹ط±غŒظپ ط´ظˆط¯طŒ
غŒط§ ط§ط² ط§ظ„ع¯ظˆغŒ آ«Server page + Client childآ» ظˆ <Suspense> ظ¾غŒط±ظˆغŒ ع©ظ†ط¯.
- ط§ظ„ع¯ظˆغŒ ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ (ظˆ ط§ط¹ظ…ط§ظ„â€Œط´ط¯ظ‡ ط¯ط± ظ…ظˆط¯غŒط§ظ†):
Server page (page.tsx):
ط­ط¯ط§ظ‚ظ„غŒطŒ ط¨ط¯ظˆظ† ط§ط³طھظپط§ط¯ظ‡ ط§ط² ظ‡ظˆع©â€Œظ‡ط§غŒ ع©ظ„ط§غŒظ†طھغŒ.
ط±ظ†ط¯ط± غŒع© Client Component ط¯ط§ط®ظ„ <Suspense>.
Client page (ظ…ط«ظ„ PageClient.tsx):
ط¨ط§ use client ط¯ط± ط§ط¨طھط¯ط§غŒ ظپط§غŒظ„.
ط§ط³طھظپط§ط¯ظ‡ ط§ط² useSearchParams, useRouter, state ظˆ â€¦ ط¯ط± ط§غŒظ† ظ„ط§غŒظ‡.
- ط¯ط± ط³ظ†ط¯ ط§ط´ط§ط±ظ‡ ظ…غŒâ€Œط´ظˆط¯ ع©ظ‡ ط§غŒظ† ط§ظ„ع¯ظˆ ط¨ط±ط§غŒ طµظپط­ط§طھغŒ ظ…ط«ظ„ otp, portal, users-roles/add ظˆ ع†ظ†ط¯ طµظپط­ظ‡ظ” ط¯غŒع¯ط± ظ…ظˆط¯غŒط§ظ† ط¨ظ‡â€Œع©ط§ط± ط±ظپطھظ‡ طھط§ ط®ط·ط§ظ‡ط§غŒ
useSearchParams() ظˆ CSR bailout ط¯ط± ط¨غŒظ„ط¯ ط±ظپط¹ ط´ظˆط¯.

### 23.4) ط§ط³طھط§ظ†ط¯ط§ط±ط¯ Barrel-only ط¨ط±ط§غŒ ظ…ظˆط¯غŒط§ظ† ظˆ ESLint

- ط³غŒط§ط³طھ import ط¯ط± ظ…ظˆط¯غŒط§ظ†:
ظ…ط³غŒط±ظ‡ط§غŒ ظ…ط¬ط§ط²:
@/components/modian
@/components/modian/ui
@/components/modian/common
ط²غŒط±Barrelظ‡ط§غŒ ط±ط³ظ…غŒ ظ…ط§ظ†ظ†ط¯:
 - `@/components/modian/declaration`
 - `@/components/modian/home`
 - `@/components/modian/portal`
 - `@/components/modian/users-roles`
 - ظˆ ط³ط§غŒط± indexظ‡ط§غŒ ظ…ط§عکظˆظ„ط§ط±.

ظ…ط³غŒط±ظ‡ط§غŒ ط؛غŒط±ظ…ط¬ط§ط²:
import ظ…ط³طھظ‚غŒظ… ط§ط² ظ…ط³غŒط± ظپط§غŒظ„ ط¯ط§ط®ظ„غŒ (ظ…ط«ظ„ط§ظ‹ @/components/modian/ui/icons,
 غŒط§ `@/components/modian/common/search/SearchByFilters` ط¯ط± طµظپط­ط§طھ) ظ…ع¯ط± ط¯ط§ط®ظ„ ط®ظˆط¯ ظ…ط§عکظˆظ„â€Œظ‡ط§غŒ ط³ط·ط­ ظ¾ط§غŒغŒظ†.

- ط§غŒظ† ط³غŒط§ط³طھ طھظˆط³ط· ESLint rule no-restricted-imports enforce ظ…غŒâ€Œط´ظˆط¯ ظˆ ط¨ط§غŒط¯ ط¯ط± ط³ظ†ط¯ ط¨ظ‡â€Œطµظˆط±طھ طµط±غŒط­ ط«ط¨طھ ط´ظˆط¯.
- ط¯ط±ط¨ط§ط±ظ‡ظ” import/order:
ع¯ط±ظˆظ‡â€Œط¨ظ†ط¯غŒ importظ‡ط§:
builtin â†’ external â†’ internal â†’ parent â†’ sibling â†’ index
ط¨غŒظ† ظ‡ط± ع¯ط±ظˆظ‡ غŒع© ط®ط· ط®ط§ظ„غŒ ظ„ط§ط²ظ… ط§ط³طھ.
ط§غŒظ† ظ‚ط§ط¹ط¯ظ‡ ط¨ط±ط§غŒ غŒع©â€Œط¯ط³طھâ€Œط´ط¯ظ† importظ‡ط§غŒ طµظپط­ط§طھ ظ…ظˆط¯غŒط§ظ† (ط¨ظ‡â€Œط®طµظˆطµ طµظپط­ط§طھ ط¬ط¯غŒط¯ invoices, old-Invoices, purchase-announcements, contracts) ط§ط¹ظ…ط§ظ„ ط´ط¯ظ‡ ظˆ lint ط±ظˆغŒ ط¢ظ† ظ†ط¸ط§ط±طھ ظ…غŒâ€Œع©ظ†ط¯.
-  ظˆط¶ط¹غŒطھ ظپط¹ظ„غŒ lint ط¯ط± main:
 - ط¯ط± ط­ط§ظ„ ط­ط§ط¶ط± `npm run lint:ci` ط±ظˆغŒ ط¨ط±ظ†ع† `main` ط¨ط¯ظˆظ† ط®ط·ط§ ظˆ ط¨ط¯ظˆظ† ظ‡غŒع† ظ‡ط´ط¯ط§ط± ظپط¹ط§ظ„غŒ ط§ط¬ط±ط§ ظ…غŒâ€Œط´ظˆط¯.
 - ط§غŒظ† ظˆط¶ط¹غŒطھ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† baseline ط±ط³ظ…غŒ ظ¾ط±ظˆعکظ‡ ط«ط¨طھ ظ…غŒâ€Œط´ظˆط¯ط›
   ظ‡ط± ط¨ط±ظ†ع† ط¬ط¯غŒط¯ (feature/chore/...) ظ…ظˆط¸ظپ ط§ط³طھ ط¨ط¯ظˆظ† ط§ط¶ط§ظپظ‡â€Œع©ط±ط¯ظ† ظ‡ط´ط¯ط§ط±/ط®ط·ط§غŒ ط¬ط¯غŒط¯ ط¨ظ‡ main ط§ط¯ط؛ط§ظ… ط´ظˆط¯.
 - ط¯ط± طµظˆط±طھ ظ„ط²ظˆظ…طŒ ط¨ط³طھظ‡â€Œظ‡ط§غŒ طھظ…غŒط²ع©ط§ط±غŒ ط¨ط¹ط¯غŒ ظپظ‚ط· ط¨ط±ط§غŒ ط­ظپط¸ ط§غŒظ† baseline (ظˆ ظ†ظ‡ ط±ط³غŒط¯ظ† ط¨ظ‡ ط¢ظ†) ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆظ†ط¯.


### 23.5) ظˆط¶ط¹غŒطھ Search Suite ظˆ ط±غŒط³ع© ظ¾غŒع†غŒط¯ع¯غŒ

- ط¯ط± ط¨ط®ط´ ظ…ط±ط¨ظˆط· ط¨ظ‡ SearchByFilters ظˆ InvoicesSearchHeaderطŒ ظ†ع©ط§طھ ط²غŒط± ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ظ…غŒâ€Œط´ظˆط¯:
ط´ط§ط®ظ‡â€Œظ‡ط§غŒ ط´ط±ط·غŒ ط¨ط±ط§غŒ ط³ظ†ط§ط±غŒظˆظ‡ط§غŒ ظ…ط®طھظ„ظپ ط§ط¶ط§ظپظ‡ ط´ط¯ظ‡â€Œط§ظ†ط¯:
طµظپط­ط§طھ ظ†ط³ظ„ ظپط¹ظ„غŒ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§ (invoices/*)
طµظپط­ط§طھ old-Invoices (old-Invoices/*)
طµظپط­ط§طھ ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯ (purchase-announcements/*)
طµظپط­ط§طھ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ (contracts/contracting/* ط¯ط± ط­ط§ظ„ ط­ط§ط¶ط±)
ط±غŒط³ع©:
ع©ط§ظ…ظ¾ظˆظ†ظ†طھ SearchByFilters ط¨ظ‡â€Œط¯ظ„غŒظ„ ط´ط§ط®ظ‡â€Œظ‡ط§غŒ ط´ط±ط·غŒ ظ…طھط¹ط¯ط¯ ظ¾غŒع†غŒط¯ظ‡ ط´ط¯ظ‡ ظˆ ط¯ط± refactorظ‡ط§غŒ ط¨ط¹ط¯غŒ ظ†غŒط§ط² ط¨ظ‡ طھط³طھâ€Œظ‡ط§غŒ ظˆط§ط­ط¯/ط§ط³ظ†ظ¾â€Œط´ط§طھ ط¯ط§ط±ط¯ طھط§ ط±ع¯ط±ط³غŒظˆظ† ط§غŒط¬ط§ط¯ ظ†ط´ظˆط¯.
ظ¾غŒط´ظ†ظ‡ط§ط¯:
ط¯ط± طµظˆط±طھ ط§ظپط²ط§غŒط´ ط³ظ†ط§ط±غŒظˆظ‡ط§طŒ ط¬ط¯ط§ط³ط§ط²غŒ configظ‡ط§ (ظ…ط«ظ„ط§ظ‹ per-module config ط¨ط±ط§غŒ ط³طھظˆظ†â€Œظ‡ط§ ظˆ ظپغŒظ„ط¯ظ‡ط§) ط¯ط± غŒع© آ«Config Registryآ» ط¨ط±ط§غŒ ع©غŒطھ UI ط¨ط±ط±ط³غŒ ط´ظˆط¯.

### 23.6) ع†ع©â€Œظ„غŒط³طھ ط§ط¶ط§ظپظ‡â€Œع©ط±ط¯ظ† طµظپط­ظ‡ظ” ط¬ط¯غŒط¯ ط¯ط± ظ…ظˆط¯غŒط§ظ† (ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ)

- ظ¾غŒط´ ط§ط² ط³ط§ط®طھ طµظپط­ظ‡ظ” ط¬ط¯غŒط¯:
ظ…ط³غŒط± ط¯ط±ط³طھ ط²غŒط± src/app/simulators/modian ط§ظ†طھط®ط§ط¨ ط´ظˆط¯:
ظ…ط«ظ„ contracts/...طŒ purchase-announcements/...طŒ old-Invoices/... ظˆ ط؛غŒط±ظ‡.
- ظ‡ظ†ع¯ط§ظ… ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ طµظپط­ظ‡:
ط§ع¯ط± طµظپط­ظ‡ ع©ظ„ط§غŒظ†طھغŒ ط§ط³طھ ظˆ ط§ط² ظ‡ظˆع© ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ط¯طŒ ط§ظ„ع¯ظˆغŒ آ«Server Wrapper + Client Componentآ» ط±ط¹ط§غŒطھ ط´ظˆط¯.
ط¨ط±ط§غŒ ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒ UI:
ط§ط² @/components/modian/ui import ط´ظˆط¯.
ط¨ط±ط§غŒ ط§ط¬ط²ط§غŒ ط¯ط§ظ…ظ†ظ‡â€Œط§غŒ ظ…ط´طھط±ع©:
ط§ط² @/components/modian/common import ط´ظˆط¯.
ط§ع¯ط± طµظپط­ظ‡ ظ†غŒط§ط² ط¨ظ‡ Search Suite ط¯ط§ط±ط¯:
ظپظ‚ط· ط§ط² InvoicesSearchHeader ظˆ SearchByFilters/SearchByTaxId (ط§ط² Barrel) ط§ط³طھظپط§ط¯ظ‡ ط´ظˆط¯ط›
 ط§ط² ع©ظ¾غŒâ€Œع©ط±ط¯ظ† ظپط±ظ…â€Œظ‡ط§/ظپغŒظ„طھط±ظ‡ط§غŒ ط¬ط¯غŒط¯ ط®ظˆط¯ط¯ط§ط±غŒ ط´ظˆط¯.

- ظ¾غŒط´ ط§ط² طھط­ظˆغŒظ„ ط¨ط±ظ†ع†:
ط§ط¬ط±ط§غŒ npm run lint:ci ظˆ ط±ظپط¹ ظ‡ظ…ظ‡ظ” ط®ط·ط§ظ‡ط§ ظˆ ظ‡ط´ط¯ط§ط±ظ‡ط§غŒ ظ…ط±ط¨ظˆط· ط¨ظ‡ ظ…ط³غŒط± ظ…ظˆط¯غŒط§ظ† ط§ظ„ط²ط§ظ…غŒ ط§ط³طھ.
ط¯ط± طµظˆط±طھ ط§ط¶ط§ظپظ‡â€Œط´ط¯ظ† ظ…ط³غŒط± ط¬ط¯غŒط¯:
ط§ط³ع©ط±غŒظ¾طھ ط³ط§ط®طھط§ط± (docs:scan) ط§ط¬ط±ط§ ط´ظˆط¯ ظˆ ط¨ط®ط´â€Œظ‡ط§غŒ APP_TREE ظˆ COMPONENTS_TREE ط¯ط± ظ‡ظ…غŒظ† ط³ظ†ط¯ ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ط´ظˆظ†ط¯.

### 23.7) PR Gate / Definition of Done (ظ‚ط¨ظ„ ط§ط² Merge)

ط§غŒظ† ع†ع©â€Œظ„غŒط³طھ ط¨ط§غŒط¯ ط¯ط± طھظˆط¶غŒط­ط§طھ PR طھغŒع© ط¨ط®ظˆط±ط¯ ظˆ ظ…ط¹غŒط§ط± merge ط§ظ…ظ† ط§ط³طھ:

- [ ] **Sync ظ…ط³طھظ†ط¯ط§طھ ط³ط§ط®طھط§ط± ط¨ط§ tree**: ط§ع¯ط± route/component ط§ط¶ط§ظپظ‡/ط­ط°ظپ ط´ط¯:
  - `npm run docs:scan` (طھظˆظ„غŒط¯ `app-tree.txt` ظˆ `components-tree.txt`)
  - `npm run docs:all` (طھط²ط±غŒظ‚ ط®ظˆط¯ع©ط§ط± ط¯ط± ظ‡ظ…غŒظ† ط³ظ†ط¯)
  - ظˆ ط§ط·ظ…غŒظ†ط§ظ† ط§ط² ط¢ظ¾ط¯غŒطھâ€Œط´ط¯ظ† ط¨ظ„ظˆع©â€Œظ‡ط§غŒ `APP_TREE` ظˆ `COMPONENTS_TREE` ط¯ط± ظ‡ظ…غŒظ† ظپط§غŒظ„
- [ ] **Barrel-only ط¨ط±ط§غŒ Modian + ظ…ظ†ط¹ import ط¹ظ…غŒظ‚**:
  - import ظپظ‚ط· ط§ط² Barrelظ‡ط§: `@/components/modian`طŒ `@/components/modian/ui`طŒ `@/components/modian/common` (ظˆ ط²غŒط±barrelظ‡ط§غŒ ط±ط³ظ…غŒ)
  - import ظ…ط³طھظ‚غŒظ… ط§ط² ظپط§غŒظ„â€Œظ‡ط§غŒ ط¯ط§ط®ظ„غŒ ط²غŒط± `modian/*` ظ…ظ…ظ†ظˆط¹ (ESLint: `no-restricted-imports` + `import/order`)
- [ ] **Baseline ط±ط³ظ…غŒ lint ط±ظˆغŒ main**:
  - `npm run lint:ci` ط¨ط§غŒط¯ ط¨ط¯ظˆظ† error/warning ط¨ط§ط´ط¯
  - PR ظ†ط¨ط§غŒط¯ warning/error ط¬ط¯غŒط¯ ظ†ط³ط¨طھ ط¨ظ‡ baseline آ«طµظپط± ظ‡ط´ط¯ط§ط±آ» ط±ظˆغŒ `main` ظˆط§ط±ط¯ ع©ظ†ط¯
- [ ] **ط§ظ„ع¯ظˆغŒ Next App Router ط¨ط±ط§غŒ Client/Server + Suspense**:
  - ط§ع¯ط± طµظپط­ظ‡/ع©ط§ظ…ظ¾ظˆظ†ظ†طھ ع©ظ„ط§غŒظ†طھ ط§ط² ظ‡ظˆع©â€Œظ‡ط§غŒغŒ ظ…ط«ظ„ `useSearchParams` ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ط¯طŒ ط¨ط§غŒط¯ ط¨ط§ ط§ظ„ع¯ظˆغŒ
    آ«Server Wrapper + Client Componentآ» ظˆ `<Suspense>` ط¯ط± ظ„ط§غŒظ‡ظ” ط³ط±ظˆط±غŒ ظ¾ظˆط´ط´ ط¯ط§ط¯ظ‡ ط´ظˆط¯ (ط¨ط±ط§غŒ ط¬ظ„ظˆع¯غŒط±غŒ ط§ط² `CSR bailout` / `missing-suspense-with-csr-bailout`)

---

## 24) ع¯ط²ط§ط±ط´ ظˆط¶ط¹غŒطھ طھغŒظ… ظ…ظˆط¯غŒط§ظ† â€” غ±غ´غ°غ´/غ±غ°/غ°غ¶ (طھع©ظ…غŒظ„ ظ…ظ†ظˆغŒ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§)

ط¨ط± ط§ط³ط§ط³ ظپط§غŒظ„ `team2-status-report-14041006.txt` ظˆ ط§ط¯ط§ظ…ظ‡ظ” ع¯ط²ط§ط±ط´â€Œظ‡ط§غŒ طھع©ظ…غŒظ„غŒ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§. îˆ€fileciteîˆ‚turn12file2îˆ‚turn12file0îˆپ

### 24.1) ظ…ط³غŒط±ظ‡ط§ ظˆ طµظپط­ط§طھ ط¯ط±ع¯غŒط± (Contracts)

- طھع©ظ…غŒظ„ ظ…ظ†ظˆغŒ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ ظˆ ط§طµظ„ط§ط­ ظ…ط³غŒط±/Flow آ«ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ط¬ط¯غŒط¯آ» ط¯ط± ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ. îˆ€fileciteîˆ‚turn12file2îˆپ
- ظ…ط³غŒط±ظ‡ط§غŒ ط§طµظ„غŒ ع©ظ‡ ط¯ط± ط§غŒظ† ط¯ظˆط±ظ‡ ط¯ط±ع¯غŒط± ط¨ظˆط¯ظ‡â€Œط§ظ†ط¯: îˆ€fileciteîˆ‚turn12file0îˆپ
  - `src/app/simulators/modian/contracts/commission/page.tsx`
  - `src/app/simulators/modian/contracts/commission/new/page.tsx`
  - `src/app/simulators/modian/contracts/contracting/page.tsx`
  - `src/app/simulators/modian/contracts/contracting/new/page.tsx`

> غŒط§ط¯ط¯ط§ط´طھ: Snapshotظ‡ط§غŒ APP_TREE/COMPONENTS_TREE ع©ظ‡ ط§ط² `app-tree.txt` ظˆ `components-tree.txt` طھظˆظ„غŒط¯ ط´ط¯ظ‡â€Œط§ظ†ط¯طŒ
ظ…ظ…ع©ظ† ط§ط³طھ ظ‡ظ†ظˆط² ظ…ط³غŒط± `contracts/commission/new` ط±ط§ ظ†ط´ط§ظ† ظ†ط¯ظ‡ظ†ط¯ط› ط¯ط± ط§ظˆظ„غŒظ† ط¨ط±ظˆط²ط±ط³ط§ظ†غŒ treeظ‡ط§ ط¨ط§غŒط¯ ط¨ط§ط²طھظˆظ„غŒط¯ ط´ظˆظ†ط¯. îˆ€fileciteîˆ‚turn12file0îˆپ

### 24.2) Barrelظ‡ط§ ظˆ ط³غŒط§ط³طھ Import (common/search + common/table)

- ط¯ط± ط±ط§ط³طھط§غŒ ط³غŒط§ط³طھ آ«ط¹ط¯ظ… ط§غŒظ…ظ¾ظˆط±طھ ظ…ط³طھظ‚غŒظ… ط§ط² ظپط§غŒظ„â€Œظ‡ط§غŒ ط¯ط§ط®ظ„غŒ ط²غŒط± `modian/*`آ»طŒ طھغŒظ… ظ…ظˆط¯غŒط§ظ† ظ…ظˆط§ط±ط¯ ط²غŒط± ط±ط§ ط§ط¶ط§ظپظ‡/ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ع©ط±ط¯: îˆ€fileciteîˆ‚turn12file0îˆ‚turn12file2îˆپ
  - `src/components/modian/common/search/index.ts` (Update)
  - `src/components/modian/common/table/index.ts` (New)

- ظ†ع©طھظ‡ظ” lint: ع¯ط²ط§ط±ط´ ط´ط¯ظ‡ ع©ظ‡ Rule ظپط¹ظ„غŒ `no-restricted-imports` ط­طھغŒ ط±ظˆغŒ Barrelظ‡ط§غŒ طھط§ط²ظ‡â€Œط§ط¶ط§ظپظ‡â€Œط´ط¯ظ‡ ظ‡ظ… Warning ظ…غŒâ€Œط¯ظ‡ط¯ط›
  ظ¾غŒط´ظ†ظ‡ط§ط¯ طھغŒظ…: ط§طµظ„ط§ط­ ظ…ط±ع©ط²غŒ Rule (Allowlist ع©ط±ط¯ظ† Barrelظ‡ط§) ظˆ ط§ط³طھظپط§ط¯ظ‡ظ” ظ…ظˆظ‚طھ ط§ط² `eslint-disable-next-line` ظپظ‚ط· ط¨ط±ط§غŒ unblock طھط­ظˆغŒظ„. îˆ€fileciteîˆ‚turn12file0îˆ‚turn12file13îˆپ

### 24.3) ع©غŒطھ UI ظ…ظˆط¯غŒط§ظ† â€” ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒ ظ…طµط±ظپâ€Œط´ط¯ظ‡/ط¯ط±ع¯غŒط± ط¯ط± ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§

- `Stepper`
- `SearchByFilters`
- `ContractsContractDateField`
- `ContractsContractTypeField`
- `ColumnsVisibilityBar`
- `ScrollableTableShell`
- `EmptyTableRow` îˆ€fileciteîˆ‚turn12file0îˆپ


## 25) ع¯ط²ط§ط±ط´ ظˆط¶ط¹غŒطھ طھغŒظ… ظ…ظˆط¯غŒط§ظ† â€” غ±غ´غ°غ´/غ±غ°/غ±غ· (Requests + Tax Bills UI Flow)

ط¨ط± ط§ط³ط§ط³ ظپط§غŒظ„ `team2-status-report-14041017.txt`.

### 25.1) ط¯ط§ظ…ظ†ظ‡ طھط؛غŒغŒط±ط§طھ (ط¯ط± ط³ط·ط­ ط³ط§ط®طھط§ط±/ظ…ط³غŒط±ظ‡ط§)

- ع¯ط²ط§ط±ط´ ط§غŒظ† ط¯ظˆط±ظ‡ ظ…ط±ط¨ظˆط· ط¨ظ‡ **UI/Flow** ط¯ط± ظ…ط³غŒط±ظ‡ط§غŒ ظ…ظˆط¯غŒط§ظ† ط¨ظˆط¯ظ‡ ط§ط³طھ (ظ†ظ‡ ط§ظپط²ظˆط¯ظ† endpoint ط¨ع©â€Œط§ظ†ط¯).
- ظ…ط³غŒط±ظ‡ط§غŒ ظ…ط±طھط¨ط· ط¯ط± ط§ط³ظ†ظ¾â€Œط´ط§طھ `app-tree.txt` ظ‚ط§ط¨ظ„ ظ…ط´ط§ظ‡ط¯ظ‡â€Œط§ظ†ط¯ ظˆ ط¨ط§غŒط¯ ط¯ط± ط§ط³طھط§ظ†ط¯ط§ط±ط¯ط³ط§ط²غŒ Route Ownership
  ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ط²غŒط±ط´ط§ط®ظ‡â€Œظ‡ط§غŒ ط±ط³ظ…غŒ ظ…ظˆط¯غŒط§ظ† ط­ظپط¸ ط´ظˆظ†ط¯:
  - `src/app/simulators/modian/requests/increase-sales-limit/page.tsx`
  - `src/app/simulators/modian/requests/auto-reject-referred-invoices/page.tsx`
  - `src/app/simulators/modian/requests/defer-invoice-tax-effect/page.tsx`
  - `src/app/simulators/modian/tax-bills/page.tsx`

### 25.2) ط§ط³طھط§ظ†ط¯ط§ط±ط¯ظ‡ط§غŒ ط³ط§ط®طھط§ط±غŒ طھط«ط¨غŒطھâ€Œط´ط¯ظ‡ ط§ط² ع¯ط²ط§ط±ط´

- ظ…ظ†ظˆغŒ ع©ط´ظˆغŒغŒ آ«ط¯ط±ط®ظˆط§ط³طھâ€Œظ‡ط§آ» ط¨ط§غŒط¯ ط±ظپطھط§ط± **toggle-only** ط¯ط§ط´طھظ‡ ط¨ط§ط´ط¯ ظˆ ط§ط² redirect ط®ظˆط¯ع©ط§ط± ط¨ظ‡ ط§ظˆظ„غŒظ† ط²غŒط±ظ…ظ†ظˆ ظ¾ط±ظ‡غŒط² ط´ظˆط¯
  (ط§ط³طھط§ظ†ط¯ط§ط±ط¯ UX/Navigation ط¨ط±ط§غŒ ط¬ظ„ظˆع¯غŒط±غŒ ط§ط² coupling ظ†ط§ط®ظˆط§ط³طھظ‡ ظ…ظ†ظˆ â†” route).
- Flowظ‡ط§غŒ ع†ظ†ط¯ظ…ط±ط­ظ„ظ‡â€Œط§غŒ (ظ…ظˆط¯ط§ظ„â€Œظ‡ط§غŒ ظ¾ط´طھâ€Œط³ط±ظ‡ظ…) ط¨ط§غŒط¯ ط¯ط± ظ‡ظ…ط§ظ† route ط¯ط§ظ…ظ†ظ‡â€Œط§غŒ ظ†ع¯ظ‡ ط¯ط§ط´طھظ‡ ط´ظˆظ†ط¯ ظˆ ط§ط² ظ¾ط±ط§ع©ظ†ط¯ع¯غŒ state
  ط¨غŒظ† ظ…ط³غŒط±ظ‡ط§غŒ ظ†ط§ظ…ط±طھط¨ط· ط¬ظ„ظˆع¯غŒط±غŒ ط´ظˆط¯.
- ط§ط¹طھط¨ط§ط±ط³ظ†ط¬غŒâ€Œظ‡ط§غŒ ط¯ط§ظ…ظ†ظ‡â€Œط§غŒ ط¯ط± ط­ط§ظ„ طھع©ظ…غŒظ„ (ظ…ط«ظ„ آ«ط´ظ†ط§ط³ظ‡ طµغŒط§ط¯ = 16 ط±ظ‚ظ…آ») ط¨ط§غŒط¯ طھط§ ط²ظ…ط§ظ† ظ†ظ‡ط§غŒغŒâ€Œط´ط¯ظ†طŒ ط¨ظ‡â€Œظˆط¶ظˆط­ ط¨ط§ ظˆط¶ط¹غŒطھ WIP
  ط¯ط± ع¯ط²ط§ط±ط´/PR ط«ط¨طھ ط´ظˆظ†ط¯ طھط§ ط¨ط§ آ«ظ‚ط±ط§ط±ط¯ط§ط¯ ظ†ظ‡ط§غŒغŒآ» ط§ط´طھط¨ط§ظ‡ ظ†ط´ظˆظ†ط¯.

### 25.3) ع©ظ†طھط±ظ„ ط§ظ†ط­ط±ط§ظپ طھغŒظ…â€Œظ‡ط§ (Project Governance)

- ظ‡ط± طھط؛غŒغŒط± UI ط¯ط± ط´ط§ط®ظ‡ `requests/*` غŒط§ `tax-bills` ع©ظ‡ ظ…ظ†ط¬ط± ط¨ظ‡ ط§ظپط²ظˆط¯ظ†/ط­ط°ظپ route ط´ظˆط¯طŒ ط§ظ„ط²ط§ظ…ط§ظ‹ ط¨ط§غŒط¯ ط¨ط§ ط¨ط§ط²طھظˆظ„غŒط¯
  `app-tree.txt` ظˆ ظ‡ظ…ع¯ط§ظ…â€Œط³ط§ط²غŒ ظ‡ظ…غŒظ† ط³ظ†ط¯ ظ‡ظ…ط±ط§ظ‡ ط¨ط§ط´ط¯ (`docs:scan` / `docs:all`).
- ع¯ط²ط§ط±ط´ ط§غŒظ† ط¯ظˆط±ظ‡ ط­ط§ظˆغŒ طھط­ظˆغŒظ„ UI/Flow ط§ط³طھط› ط¨ظ†ط§ط¨ط±ط§غŒظ† **ط¨ط¯ظˆظ† ظ…ط³طھظ†ط¯ endpoint ط¬ط¯ط§ع¯ط§ظ†ظ‡** ظ†ط¨ط§غŒط¯ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† API-ready طھظپط³غŒط± ط´ظˆط¯.

---

## 26) ع¯ط²ط§ط±ط´ ظˆط¶ط¹غŒطھ طھغŒظ… ظ…ظˆط¯غŒط§ظ† â€” غ±غ´غ°غ´/غ±غ²/غ°غ¶ (ط²غŒط±ط³ط§ط®طھ Multi-tenant ط¯ط± ط¨ع©â€Œط§ظ†ط¯)

ط¨ط± ط§ط³ط§ط³ ظپط§غŒظ„â€Œظ‡ط§غŒ `team2-status-report-14041206.txt` ظˆ `team2-status2-report-14041206.txt`.

### 26.1) طھط؛غŒغŒط±ط§طھ ط³ط§ط®طھط§ط±غŒ ط«ط¨طھâ€Œط´ط¯ظ‡ ط¯ط± ط¨ع©â€Œط§ظ†ط¯ (Infrastructure Layer)

- ظ„ط§غŒظ‡ظ” context ط¯ط± ظ…ط³غŒط± `src/common/context/` ط¨ط±ط§غŒ ظ†ع¯ظ‡ط¯ط§ط±غŒ `businessId` ط¨ظ‡â€Œطµظˆط±طھ request-scoped ظ…ط³طھظ‚ط± ط´ط¯ظ‡ ط§ط³طھ:
  - `business-context.middleware.ts`
  - `business-context.module.ts`
  - `business-context.service.ts`
- ظ„ط§غŒظ‡ظ” Prisma ظ†غŒط² ط¯ط§ط±ط§غŒ ط§ط¬ط²ط§غŒ ظ…ط±طھط¨ط· ط¨ط§ isolation ط§ط³طھ:
  - `src/prisma/businessIsolation.extension.ts`
  - `src/prisma/prisma.middleware.ts`

### 26.2) ط§ط³طھط§ظ†ط¯ط§ط±ط¯ظ‡ط§غŒ ط³ط§ط®طھط§ط±غŒ/ط§ظ…ظ†غŒطھغŒ (ط§ظ„ط²ط§ظ…غŒ)

- `businessId` ط¨ط§غŒط¯ ظپظ‚ط· ط§ط² JWT ظˆط§ط±ط¯ Context ط´ظˆط¯ط› ط¯ط±غŒط§ظپطھ ط¢ظ† ط§ط² body/query/request ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ظ…ظ†ط¨ط¹ ط­ظ‚غŒظ‚طھ ظ…ظ…ظ†ظˆط¹ ط§ط³طھ.
- ط§طھطµط§ظ„ middleware/context ط¨ط±ط§غŒ ظ‡ط± request ظ…ط­ط§ظپط¸طھâ€Œط´ط¯ظ‡ ط¨ط§غŒط¯ ط¬ط²ط، ط§ظ„ط²ط§ظ…ط§طھ ط¨ط§ط²ط¨غŒظ†غŒ ط³ط§ط®طھط§ط±غŒ ط¨ط§ط´ط¯
  (ط¯ط± ط؛غŒط± ط§غŒظ† طµظˆط±طھ `getBusinessId()` ظ…ظ…ع©ظ† ط§ط³طھ `undefined` ط¨ط±ع¯ط±ط¯ط§ظ†ط¯).
- ط¯ط± طھط³طھâ€Œظ‡ط§/ط¯ظ…ظˆظ‡ط§غŒ endpointظ‡ط§غŒ ظ…ط­ط§ظپط¸طھâ€Œط´ط¯ظ‡طŒ ظ†ظˆط¹ طھظˆع©ظ† (access vs refresh) ط¨ط§غŒط¯ طµط±غŒط­ط§ظ‹ ع©ظ†طھط±ظ„ ط´ظˆط¯ط›
  ط§غŒظ† ظ…ظˆط±ط¯ ط§ع©ظ†ظˆظ† غŒع© ط±غŒط³ع© ط³ط§ط®طھط§ط±غŒ-ط¹ظ…ظ„غŒط§طھغŒ ط«ط¨طھâ€Œط´ط¯ظ‡ ط§ط³طھ.

### 26.3) ط§ط«ط± ط±ظˆغŒ ظپط±ط¢غŒظ†ط¯ ط§ط³طھط§ظ†ط¯ط§ط±ط¯ط³ط§ط²غŒ ظ¾ط±ظˆعکظ‡ (ط¨ط±ط§غŒ ظ…ط¯غŒط± ظ¾ط±ظˆعکظ‡)

- طھط؛غŒغŒط±ط§طھ Multi-tenant ظپط§ط² ط§ظˆظ„ آ«ط²غŒط±ط³ط§ط®طھغŒآ» ظ‡ط³طھظ†ط¯ط› ط¨ظ†ط§ط¨ط±ط§غŒظ† طھغŒظ…â€Œظ‡ط§ ظ…ط¬ط§ط² ظ†غŒط³طھظ†ط¯ طھظپط³غŒط± ط¯ط§ظ…ظ†ظ‡â€Œط§غŒ/ظ…ط­طµظˆظ„غŒ ظ…ط³طھظ‚ظ„
  (ظ…ط«ظ„ط§ظ‹ ط§ظ†طھط®ط§ط¨ business ظپط¹ط§ظ„) ط±ط§ ظ‚ط¨ظ„ ط§ط² طھطµظ…غŒظ… ط±ط³ظ…غŒ ظ¾ط±ظˆعکظ‡ ط¯ط± ع©ط¯ ط«ط§ط¨طھ ع©ظ†ظ†ط¯.
- طھطµظ…غŒظ… ط¯ط±ط¨ط§ط±ظ‡ظ” ط§ط³طھط±ط§طھعکغŒ `active business` ط¨ط§غŒط¯ ط¨ظ‡â€Œطµظˆط±طھ ظ…ط±ع©ط²غŒ طھطµظˆغŒط¨ ظˆ ط³ظ¾ط³ ط¯ط± ظ…ط³طھظ†ط¯ط§طھ endpoint/structure
  ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ط´ظˆط¯.

### 26.4) Update (2026-02-27) â€” ظˆط¶ط¹غŒطھ ظپط¹ظ„غŒ ط´ط§ط®ظ‡â€Œظ‡ط§ ظˆ ط¢ظ…ط§ط¯ظ‡â€Œط³ط§ط²غŒ DB
- ظ¾ط³ ط§ط² طھط«ط¨غŒطھ `businessId` ظˆ ط³ط¨ط² ط´ط¯ظ† build ط±ظˆغŒ `main`طŒ ط¨ط±ظ†ع†â€Œظ‡ط§غŒ ط§ط¶ط§ظپغŒ ط­ط°ظپ ظˆ ظپظ‚ط· ظ…ظˆط§ط±ط¯ ط²غŒط± ظ†ع¯ظ‡ ط¯ط§ط´طھظ‡ ط´ط¯ظ†ط¯:
  - `main`
  - `feature/backend-db-integration-prep`
- ظ‡ط¯ظپ ط¨ط±ظ†ع† DB integration prep:
  - ط¢ظ…ط§ط¯ظ‡â€Œط³ط§ط²غŒ ظپط§غŒظ„â€Œظ‡ط§/ظ…ط§عکظˆظ„â€Œظ‡ط§ ط¨ط±ط§غŒ ط§طھطµط§ظ„ ع©ط§ظ…ظ„ ط¨ظ‡ DB ظˆ ط­ط°ظپ hardcodeظ‡ط§غŒ ظ…ظˆظ‚طھ (ظ…ط«ظ„ط§ظ‹ registrationId ظ¾غŒط´â€Œظپط±ط¶)
  - طھط«ط¨غŒطھ ط¬ط±غŒط§ظ† Context â†’ Service â†’ Prisma ط¯ط± طھظ…ط§ظ… ط³ط±ظˆغŒط³â€Œظ‡ط§غŒ ظ…ط­ط§ظپط¸طھâ€Œط´ط¯ظ‡

### 26.5) Update (1405-03-13) â€” ط¨ظ‡ط¨ظˆط¯ ظ…طھط¯ findBusinessesByUserId
طھط؛غŒغŒط±ط§طھ ط§ط¹ظ…ط§ظ„â€Œط´ط¯ظ‡ ط¯ط± `src/business/business.service.ts`:
- ظ…طھط¯ `findBusinessesByUserId` ط¨ط±ظˆط²ط±ط³ط§ظ†غŒ ط´ط¯ طھط§ ظپغŒظ„ط¯ظ‡ط§غŒ `economicCode` ظˆ `trackingCode` ط±ط§ ظ†غŒط² ط¨ط§ط²ع¯ط±ط¯ط§ظ†ط¯.
- ظ…ظ†ط·ظ‚ ط¬ط¯غŒط¯ ط¨ط±ط§غŒ ظ¾ط± ع©ط±ط¯ظ† ط§غŒظ† ظپغŒظ„ط¯ظ‡ط§:
  1. ط§ظˆظ„ظˆغŒطھ ط¨ط§ ط¬ط¯ظˆظ„ `BusinessRegistration` (ط§ع¯ط± ط«ط¨طھâ€Œظ†ط§ظ… طھع©ظ…غŒظ„ ط´ط¯ظ‡ ط¨ط§ط´ط¯).
  2. fallback ط¨ظ‡ ط¬ط¯ظˆظ„ `Business` (ط§ع¯ط± ط«ط¨طھâ€Œظ†ط§ظ… طھع©ظ…غŒظ„ ظ†ط´ط¯ظ‡ ط¨ط§ط´ط¯).

### 26.6) Update (2026-07-20) â€” Business Ownership ظˆ Onboarding ط§طھظ…غŒع©

#### Backend

- `src/auth/auth.service.ts`
  - Signup ظپظ‚ط· User ط§غŒط¬ط§ط¯ ظ…غŒâ€Œع©ظ†ط¯.
  - Signin/Refresh ط¨ط±ط§غŒ User ط¨ط¯ظˆظ† Business ظ…ط¹طھط¨ط± ط§ط³طھ ظˆ `businessId` ظ…غŒâ€Œطھظˆط§ظ†ط¯ `null` ط¨ط§ط´ط¯.
- `src/business/business.controller.ts`
  - `POST /businesses/create` ط¨ط¯ظ†ظ‡ `RegistrationStep1Dto` ظ…غŒâ€Œع¯غŒط±ط¯.
  - ظ¾ط³ ط§ط² ط§غŒط¬ط§ط¯ ظ…ظˆظپظ‚طŒ `access_token` طھط§ط²ظ‡ ط¨ط§ Business ط¬ط¯غŒط¯ طµط§ط¯ط± ظ…غŒâ€Œط´ظˆط¯.
- `src/business/business.service.ts`
  - ط§غŒط¬ط§ط¯ `Business`, `UserBusiness`, `TaxFile`, `BusinessContact` ظˆ `BusinessRegistration` ط¯ط± غŒع© Prisma Transaction ط§ظ†ط¬ط§ظ… ظ…غŒâ€Œط´ظˆط¯.
- `src/business/dto/onboarding-step1.dto.ts`
  - ظپغŒظ„ط¯ظ‡ط§غŒ ط§طµظ„غŒ non-emptyطŒ `Contact` طھط¹ط±غŒظپâ€Œط´ط¯ظ‡ ظˆ nestedطŒ ظˆ `workshopCode` ط§ط®طھغŒط§ط±غŒ ط§ط³طھ.
- Migration ط¬ط¯غŒط¯ Prisma ط¯ط± ط§غŒظ† ظپط§ط² ط§غŒط¬ط§ط¯ ظ†ط´ط¯.

#### Frontend

- `src/app/api/business/create/route.ts`
  - Body ظˆ Cookie ط±ط§ ط¨ظ‡ Backend ظپظˆط±ظˆط§ط±ط¯ ظˆ `Set-Cookie` ظ¾ط§ط³ط® ط±ط§ ظ…ظ†طھظ‚ظ„ ظ…غŒâ€Œع©ظ†ط¯.
- `src/app/business/onboarding/page.tsx`
  - ظپظ‚ط· غŒع© Submit ط¨ظ‡ `/api/business/create` ط¯ط§ط±ط¯.
  - Manual ظˆ Auto-fill ط§ط² غŒع© ظپط±ظ… ظˆ endpoint ظ…ط´طھط±ع© ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ظ†ط¯.
- `src/components/business/onboarding/OnboardingChoiceModal.tsx`
  - ط§ظ†طھط®ط§ط¨ آ«طھع©ظ…غŒظ„ ط®ظˆط¯ع©ط§ط± ط¨ط§ ظ‚ط§ظ„ط¨ ط¢ظ…ظˆط²ط´غŒ ظ…ظ†ط¬غŒآ» غŒط§ آ«طھع©ظ…غŒظ„ ط¯ط³طھغŒ ظپط±ظ…آ».
- `src/components/business/onboarding/StepRegistration.tsx`
  - ظپط±ظ… ظ…ط´طھط±ع© ظˆ ظ‚ط§ط¨ظ„ ظˆغŒط±ط§غŒط´ ظ‡ط± ط¯ظˆ ط±ظˆط´.
- `src/lib/validation/onboarding.schema.ts`
  - Schema ظ…ط´طھط±ع©ط› `workshopCode` ط§ط®طھغŒط§ط±غŒ.
- `src/app/business/onboarding/step-1/page.tsx`
  - ظ…ط³غŒط± ظ‚ط¯غŒظ…غŒ ط±ط§ ط¨ظ‡ `/business/onboarding` Redirect ظ…غŒâ€Œع©ظ†ط¯.

#### ظˆط¶ط¹غŒطھ طھط³طھ ظˆ Git

- Backend Build/Runtime: ظ…ظˆظپظ‚
- Frontend Build/Runtime: ظ…ظˆظپظ‚
- User A â€” Manual E2E: ظ…ظˆظپظ‚
- User B â€” Auto-fill E2E ظˆ ظˆغŒط±ط§غŒط´ Template: ظ…ظˆظپظ‚
- Isolation ط¨غŒظ† Businessظ‡ط§غŒ User A ظˆ User B: ظ…ظˆظپظ‚
- Frontend Commit: `89083b9 feat: add editable auto-fill onboarding template`
- Frontend Branch: `feature/modian-component-structure-refactor`
- Backend Branch: `migration/backend-architecture-v2`
- طھط³طھâ€Œظ‡ط§غŒ ط¨ط§ظ‚غŒâ€Œظ…ط§ظ†ط¯ظ‡: Rollback ط¹ظ…ط¯غŒ TransactionطŒ Double SubmitطŒ Missing/Invalid Cookie ظˆ Business ط¯ظˆظ… ط¨ط±ط§غŒ FREE
- Routeظ‡ط§غŒ `/api/business/onboarding/step-1` ظˆ `/api/business/switch` طھط§ ظ¾ط§غŒط§ظ† ط§غŒظ† طھط³طھâ€Œظ‡ط§ Legacy ط¨ط§ظ‚غŒ ظ…غŒâ€Œظ…ط§ظ†ظ†ط¯.

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
    â†“
Frontend Eligibility Hook
    â†“
Next.js API Proxy
    â†“
Backend /businesses/create-eligibility
    â†“
BusinessService Eligibility Check
    â†“
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
â”œâ”€ admin/
â”‚  â””â”€ notices/
â”‚     â”œâ”€ [id]/
â”‚     â”‚  â””â”€ edit/
â”‚     â”‚     â””â”€ page.tsx
â”‚     â”œâ”€ new/
â”‚     â”‚  â””â”€ page.tsx
â”‚     â””â”€ page.tsx
â”œâ”€ api/
â”‚  â”œâ”€ auth/
â”‚  â”‚  â””â”€ logout/
â”‚  â”‚     â””â”€ route.ts
â”‚  â”œâ”€ csrf/
â”‚  â”‚  â””â”€ route.ts
â”‚  â”œâ”€ simulators/
â”‚  â”‚  â””â”€ insurance/
â”‚  â”‚     â””â”€ calculate/
â”‚  â”‚        â””â”€ route.ts
â”‚  â”œâ”€ telemetry/
â”‚  â”‚  â””â”€ route.ts
â”‚  â””â”€ utils/
â”‚     â”œâ”€ today/
â”‚     â”‚  â””â”€ route.ts
â”‚     â””â”€ user-info/
â”‚        â””â”€ route.ts
â”œâ”€ auth/
â”‚  â”œâ”€ signin/
â”‚  â”‚  â””â”€ page.tsx
â”‚  â””â”€ signup/
â”‚     â””â”€ page.tsx
â”œâ”€ auth-debug/
â”‚  â””â”€ page.tsx
â”œâ”€ dashboard/
â”‚  â”œâ”€ layout.tsx
â”‚  â”œâ”€ page.tsx
â”‚  â””â”€ Topbar.client.tsx
â”œâ”€ privacy/
â”‚  â””â”€ page.tsx
â”œâ”€ profile/
â”‚  â””â”€ page.tsx
â”œâ”€ business/
â”‚  â””â”€ onboarding/
â”‚     â”œâ”€ page.tsx
â”‚     â”œâ”€ step-1/
â”‚     â”‚  â””â”€ page.tsx
â”‚     â”œâ”€ step-2/
â”‚     â”‚  â””â”€ page.tsx
â”‚     â””â”€ step/
â”‚        â””â”€ 1/
â”‚           â””â”€ route.ts
â”œâ”€ simulators/
â”‚  â”œâ”€ insurance/
â”‚  â”‚  â”œâ”€ free/
â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â””â”€ single/
â”‚  â”‚     â””â”€ page.tsx
â”‚  â”œâ”€ karpooshe/
â”‚  â”‚  â””â”€ login/
â”‚  â”‚     â””â”€ page.tsx
â”‚  â”œâ”€ modian/
â”‚  â”‚  â”œâ”€ declaration/
â”‚  â”‚  â”‚  â”œâ”€ page.tsx
â”‚  â”‚  â”‚  â”œâ”€ statement.tsx
â”‚  â”‚  â”‚  â””â”€ summary.tsx
â”‚  â”‚  â”œâ”€ home/
â”‚  â”‚  â”‚  â”œâ”€ layout.tsx
â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”œâ”€ invoices/
â”‚  â”‚  â”‚  â”œâ”€ buy/
â”‚  â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”‚  â”œâ”€ exports/
â”‚  â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”‚  â”œâ”€ files/
â”‚  â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”‚  â”œâ”€ sales/
â”‚  â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”‚  â””â”€ layout.tsx
â”‚  â”‚  â”œâ”€ login/
â”‚  â”‚  â”‚  â”œâ”€ layout.tsx
â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”œâ”€ otp/
â”‚  â”‚  â”‚  â”œâ”€ layout.tsx
â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”œâ”€ portal/
â”‚  â”‚  â”‚  â”œâ”€ layout.tsx
â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”œâ”€ roles/
â”‚  â”‚  â”‚  â”œâ”€ add/
â”‚  â”‚  â”‚  â”‚  â”œâ”€ layout.tsx
â”‚  â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”‚  â””â”€ layout.tsx
â”‚  â”‚  â”œâ”€ users-roles/
â”‚  â”‚  â”‚  â”œâ”€ add/
â”‚  â”‚  â”‚  â”‚  â”œâ”€ layout.tsx
â”‚  â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”‚  â”œâ”€ layout.tsx
â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â””â”€ layout.tsx
â”‚  â””â”€ salary-tax/
â”‚     â”œâ”€ batch/
â”‚     â”‚  â””â”€ page.tsx
â”‚     â”œâ”€ dashboard/
â”‚     â”‚  â””â”€ page.tsx
â”‚     â”œâ”€ free/
â”‚     â”‚  â””â”€ page.tsx
â”‚     â”œâ”€ login/
â”‚     â”‚  â””â”€ page.tsx
â”‚     â””â”€ pro/
â”‚        â””â”€ page.tsx
â”œâ”€ terms/
â”‚  â””â”€ page.tsx
â”œâ”€ head.tsx
â”œâ”€ layout.tsx
â””â”€ page.tsx
```

<!-- END:APP_TREE -->

### COMPONENTS_TREE
<!-- BEGIN:COMPONENTS_TREE -->
```txt
src\components
â”œâ”€ admin/
â”‚  â””â”€ NoticeForm.tsx
â”œâ”€ auth/
â”‚  â”œâ”€ ChangePasswordForm.tsx
â”‚  â””â”€ LoginForm.tsx
â”œâ”€ common/
â”‚  â”œâ”€ date/
â”‚  â”‚  â””â”€ JalaliDateField.tsx
â”‚  â”œâ”€ help/
â”‚  â”‚  â”œâ”€ HelpModal.tsx
â”‚  â”‚  â””â”€ HelpTrigger.tsx
â”‚  â”œâ”€ Captcha.tsx
â”‚  â”œâ”€ FaDigits.tsx
â”‚  â”œâ”€ HelpGuideButton.tsx
â”‚  â””â”€ InputField.tsx
â”œâ”€ insurance/
â”‚  â”œâ”€ InputGroup.tsx
â”‚  â”œâ”€ InsuranceResultBox.tsx
â”‚  â”œâ”€ InsuranceSingleForm.tsx
â”‚  â””â”€ tax-result.interface.ts
â”œâ”€ landing/
â”‚  â”œâ”€ analytics.ts
â”‚  â”œâ”€ ArticlePreview.tsx
â”‚  â”œâ”€ ComparisonTable.tsx
â”‚  â”œâ”€ DemoCard.tsx
â”‚  â”œâ”€ FeatureCard.tsx
â”‚  â”œâ”€ HeroSection.tsx
â”‚  â”œâ”€ HowItWorks.tsx
â”‚  â”œâ”€ LandingFooter.tsx
â”‚  â”œâ”€ MiniAnchorNav.tsx
â”‚  â”œâ”€ perf-metrics.ts
â”‚  â”œâ”€ SocialProof.tsx
â”‚  â””â”€ TrustStrip.tsx
â”œâ”€ layout/
â”œâ”€ modian/
â”‚  â”œâ”€ admin/
â”‚  â”‚  â”œâ”€ dashboard/
â”‚  â”‚  â”‚  â””â”€ AdminDashboardHelpContent.tsx
â”‚  â”‚  â””â”€ index.ts
â”‚  â”œâ”€ auth/
â”‚  â”‚  â”œâ”€ index.ts
â”‚  â”‚  â”œâ”€ ModianLoginForm.tsx
â”‚  â”‚  â””â”€ ModianOtpForm.tsx
â”‚  â”œâ”€ common/
â”‚  â”‚  â”œâ”€ search/
â”‚  â”‚  â”‚  â”œâ”€ index.ts
â”‚  â”‚  â”‚  â”œâ”€ InvoicesSearchHeader.tsx
â”‚  â”‚  â”‚  â”œâ”€ SearchByFilters.tsx
â”‚  â”‚  â”‚  â””â”€ SearchByTaxId.tsx
â”‚  â”‚  â”œâ”€ index.ts
â”‚  â”‚  â”œâ”€ memoryKey.utils.ts
â”‚  â”‚  â”œâ”€ ModianJalaliDateField.tsx
â”‚  â”‚  â”œâ”€ ModianJalaliDatePicker.tsx
â”‚  â”‚  â”œâ”€ SimulatorBadge.tsx
â”‚  â”‚  â”œâ”€ Tabs.tsx
â”‚  â”‚  â”œâ”€ ToolbarControls.tsx
â”‚  â”‚  â”œâ”€ UploadPublicKeyModal.tsx
â”‚  â”‚  â””â”€ useMemoryPublicKey.ts
â”‚  â”œâ”€ declaration/
â”‚  â”‚  â”œâ”€ DeclarationHelpContent.tsx
â”‚  â”‚  â””â”€ index.ts
â”‚  â”œâ”€ home/
â”‚  â”‚  â”œâ”€ HomeHelpContent.tsx
â”‚  â”‚  â””â”€ index.ts
â”‚  â”œâ”€ layout/
â”‚  â”‚  â”œâ”€ index.ts
â”‚  â”‚  â”œâ”€ ModianFooter.tsx
â”‚  â”‚  â”œâ”€ ModianHeader.tsx
â”‚  â”‚  â”œâ”€ ModianShell.tsx
â”‚  â”‚  â””â”€ ModianSubHeader.tsx
â”‚  â”œâ”€ otp/
â”‚  â”‚  â””â”€ page.tsx
â”‚  â”œâ”€ portal/
â”‚  â”‚  â”œâ”€ index.ts
â”‚  â”‚  â””â”€ PortalHelpContent.tsx
â”‚  â”œâ”€ roles/
â”‚  â”‚  â””â”€ index.ts
â”‚  â”œâ”€ taxfile/
â”‚  â”‚  â”œâ”€ bank-accounts/
â”‚  â”‚  â”‚  â”œâ”€ BankAccountsHelpContent.tsx
â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”œâ”€ bills/
â”‚  â”‚  â”‚  â”œâ”€ BillsHelpContent.tsx
â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”œâ”€ memory-uid/
â”‚  â”‚  â”‚  â”œâ”€ add/
â”‚  â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”‚  â”œâ”€ details/
â”‚  â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”‚  â”œâ”€ edit/
â”‚  â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”‚  â”œâ”€ MemoryUidHelpContent.tsx
â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”œâ”€ payments/
â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”œâ”€ pos-uid/
â”‚  â”‚  â”‚  â””â”€ page.tsx
â”‚  â”‚  â”œâ”€ registration-information/
â”‚  â”‚  â”‚  â”œâ”€ page.tsx
â”‚  â”‚  â”‚  â””â”€ types.ts
â”‚  â”‚  â”œâ”€ trusted-companies/
â”‚  â”‚  â”‚  â”œâ”€ page.tsx
â”‚  â”‚  â”‚  â””â”€ TrustedHelpContent.tsx
â”‚  â”‚  â”œâ”€ index.ts
â”‚  â”‚  â”œâ”€ layout.tsx
â”‚  â”‚  â”œâ”€ page.tsx
â”‚  â”‚  â””â”€ TaxfileSubmenu.tsx
â”‚  â”œâ”€ ui/
â”‚  â”‚  â”œâ”€ Card.tsx
â”‚  â”‚  â”œâ”€ FieldGrid.tsx
â”‚  â”‚  â”œâ”€ FormField.tsx
â”‚  â”‚  â”œâ”€ FormToolbar.tsx
â”‚  â”‚  â”œâ”€ icons.tsx
â”‚  â”‚  â”œâ”€ index.ts
â”‚  â”‚  â”œâ”€ PageShell.tsx
â”‚  â”‚  â””â”€ Section.tsx
â”‚  â”œâ”€ users-roles/
â”‚  â”‚  â”œâ”€ index.ts
â”‚  â”‚  â””â”€ UsersRolesHelpContent.tsx
â”‚  â”œâ”€ workspace/
â”‚  â”‚  â””â”€ index.ts
â”‚  â”œâ”€ faq-data.ts
â”‚  â”œâ”€ index.ts
â”‚  â”œâ”€ karpooshe-code-search.tsx
â”‚  â”œâ”€ menu-items.ts
â”‚  â”œâ”€ ModianFaqTab.tsx
â”‚  â”œâ”€ ModianHome.tsx
â”‚  â”œâ”€ ModianNoticesTabs.tsx
â”‚  â”œâ”€ ModianPortal.tsx
â”‚  â”œâ”€ ModianQuickAccess.tsx
â”‚  â”œâ”€ ModianSidebar.tsx
â”‚  â””â”€ ModianWorkspace.tsx
â”‚  â”œâ”€ ui/
â”‚  â”‚  â”œâ”€ date/
â”‚  â”‚  â”‚  â””â”€ ModianJalaliDatePicker.tsx
â”‚  â”‚  â”œâ”€ Card.tsx
â”‚  â”‚  â”œâ”€ FieldGrid.tsx
â”‚  â”‚  â”œâ”€ FormField.tsx
â”‚  â”‚  â”œâ”€ FormToolbar.tsx
â”‚  â”‚  â”œâ”€ icons.tsx
â”‚  â”‚  â”œâ”€ index.ts
â”‚  â”‚  â”œâ”€ PageShell.tsx
â”‚  â”‚  â”œâ”€ Section.tsx
â”‚  â”‚  â”œâ”€ SimulatorBadge.tsx
â”‚  â”‚  â”œâ”€ Tabs.tsx
â”‚  â”‚  â”œâ”€ ToolbarControls.tsx
â”‚  â”‚  â””â”€ UploadPublicKeyModal.tsx
â”œâ”€ salary-tax/
â”‚  â”œâ”€ page.tsx
â”‚  â”œâ”€ SalaryTaxForm.tsx
â”‚  â”œâ”€ SalaryTaxResult.tsx
â”‚  â””â”€ SimulatorHeader.tsx
â”œâ”€ simulators/
â”‚  â””â”€ karpooshe/
â”‚     â””â”€ KarpoosheLoginForm.tsx
â”œâ”€ ui/
â”‚  â”œâ”€ button.tsx
â”‚  â”œâ”€ card.tsx
â”‚  â”œâ”€ input.tsx
â”‚  â””â”€ SkeletonLoader.tsx
â””â”€ Stepper.tsx
```


<!-- END:COMPONENTS_TREE -->
