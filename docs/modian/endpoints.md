 # ظ…ظˆط¯غŒط§ظ† â€” ط¬ط¯ظˆظ„ Endpoints ظˆ ظ†ع¯ط§ط´طھ ظپط±ط§ظ†طھ/ط¨ع© (v0.2)

 > ظ‡ط¯ظپ: ط®ط·â€Œع©ط´غŒ ط¯ظ‚غŒظ‚ API ط¨ط±ط§غŒ آ«ظ…ظˆط¯غŒط§ظ†آ» (MVP) + ظ†ع¯ط§ط´طھ طµظپط­ط§طھ Next ط¨ظ‡ ط³ط±ظˆغŒط³â€Œظ‡ط§غŒ Nest. ط§غŒظ† ظپط§غŒظ„ طھط§ ظ¾ط§غŒط§ظ† MVP ظ…ط±ط¬ط¹ ظˆط§ط­ط¯ طھغŒظ… ط§ط³طھ.

 ---

## ط³ط§ط®طھط§ط± ط§غŒظ† ط³ظ†ط¯ ظ¾ط³ ط§ط² ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ غ±غ´غ°غ´/غ°غ¹/غ²غ²

- **ط¨ط®ط´ غ± â€” Real Backend API Endpoints**
  Endpointظ‡ط§غŒغŒ ع©ظ‡ ط¯ط± ط¨ع©â€Œط§ظ†ط¯ ظˆ/غŒط§ ظ…ط³غŒط±ظ‡ط§غŒ `src/app/api` ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡â€Œط§ظ†ط¯ ظˆ ط¯ط± ط§غŒظ† ط³ظ†ط¯ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† آ«UI-only / TBDآ» ط¹ظ„ط§ظ…طھâ€Œع¯ط°ط§ط±غŒ ظ†ط´ط¯ظ‡â€Œط§ظ†ط¯.
- **ط¨ط®ط´ غ² â€” UI-Only Pages (ط¨ط¯ظˆظ† API / ط­ط§ظ„طھ ط´ط¨غŒظ‡â€Œط³ط§ط²)**
  طµظپط­ط§طھغŒ ع©ظ‡ ظپط¹ظ„ط§ظ‹ ظپظ‚ط· UI/ط´ط¨غŒظ‡â€Œط³ط§ط² ظ‡ط³طھظ†ط¯ ظˆ ظ‡ظ†ظˆط² endpoint ط±ط³ظ…غŒ ط¨ط±ط§غŒ ط¢ظ†â€Œظ‡ط§ طھط¹ط±غŒظپ ظ†ط´ط¯ظ‡ ط§ط³طھ.
- **ط¨ط®ط´ غ³ â€” Future API Mapping (TBD)**
  ط¬ط¯ظˆظ„â€Œظ‡ط§غŒ ظ†ع¯ط§ط´طھ ط¨ط±ظ†ط§ظ…ظ‡â€Œط±غŒط²غŒâ€Œط´ط¯ظ‡ ط¨غŒظ† ظپغŒظ„ط¯ظ‡ط§غŒ UI ظˆ ظ¾ط§ط±ط§ظ…طھط±ظ‡ط§غŒ API ط¨ط±ط§غŒ ظپغŒع†ط±ظ‡ط§غŒغŒ ظ…ط«ظ„ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¯غŒظ…غŒطŒ ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯طŒ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ ظˆ â€¦

> ظ†ع©طھظ‡: ظ‡ط± ط¬ط§ ط¯ط± ظ…طھظ† ط§غŒظ† ط³ظ†ط¯ طµط±ط§ط­طھط§ظ‹ ظ†ظˆط´طھظ‡ ط´ط¯ظ‡ **UI-only** غŒط§ **TBD**طŒ ط¢ظ† ط¨ط®ط´ طھط§ ط²ظ…ط§ظ† ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط¯ط± ط¨ع©â€Œط§ظ†ط¯ ظپظ‚ط· ط¯ط± ط­ظˆط²ظ‡ظ” آ«ط´ط¨غŒظ‡â€Œط³ط§ط²/ط·ط±ط§ط­غŒآ» ط§ط³طھ ظˆ ظ†ط¨ط§غŒط¯ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† API ظˆط§ظ‚ط¹غŒ ط¯ط± ظ†ط¸ط± ع¯ط±ظپطھظ‡ ط´ظˆط¯.

---
## ط¨ط®ط´ غ± â€” Real Backend API Endpoints

### 0) ظ‚ط±ط§ط±ط¯ط§ط¯ ظ†ط§ظ…â€Œع¯ط°ط§ط±غŒ ظˆ ظ¾غŒط´â€Œظپط±ط¶â€Œظ‡ط§

 - **Global API Prefix (Dev):** ظ†ط¯ط§ط±ط¯ (ط¨ط¯ظˆظ† `api/`). ط¯ط± Production ظ…ظ…ع©ظ† ط§ط³طھ `api/` ط§ظپط²ظˆط¯ظ‡ ط´ظˆط¯.
 - Namespace (Dev): ط±ظˆطھâ€Œظ‡ط§غŒ ظ…ظˆط¯غŒط§ظ† طھط­طھ `/simulators/modian/...` (ط¨ط¯ظˆظ† prefix).
 - **Auth:** ظ†ط´ط³طھ ط¨ط§ **ع©ظˆع©غŒ HttpOnly**ط› ظ‡ظ…ظ‡ظ” ط¯ط±ط®ظˆط§ط³طھâ€Œظ‡ط§ ط¨ط§ `credentials:'include'`.
 - **Role/Access:** ط³طھظˆظ† آ«ع¯ط§ط±ط¯آ» ط¯ط± ط¬ط¯ظˆظ„â€Œظ‡ط§ ظ…ط´ط®طµ ظ…غŒâ€Œع©ظ†ط¯ (Admin/AccessLevel).
 - **Proxy ط¯ط§ط®ظ„غŒ ظپط±ط§ظ†طھ:** `GET /api/utils/user-info` â†’ ظ¾ط§ط³â€Œطھط±ظˆ ط¨ظ‡ ط¨ع©â€Œط§ظ†ط¯ `GET /utils/user-info` ط¨ط§ ظپظˆط±ظˆط§ط±ط¯ ع©ظˆع©غŒ ط¨ط±ط§غŒ طھط´ط®غŒطµ ع©ط§ط±ط¨ط±/ظ†ظ‚ط´.
 - **ظ†ط³ط®ظ‡â€Œط¯ظ‡غŒ (ط§ط®طھغŒط§ط±غŒ):** ط¯ط± طµظˆط±طھ ظ†غŒط§ط² `api/v1/...`.

> **Dev-only (ط¨ط±ط§غŒ غ² ظ†ظپط± ظپط¹ظ„غŒ)**: ع¯ط§ط±ط¯ ط³ط¨ع© آ«DEV_BYPASSآ» ظپط¹ط§ظ„ ط¨ط§ ENV ظپظ‚ط· ط¯ط± `NODE_ENV=development` ظˆ ظپظ‚ط· ط§ط² `localhost`ط› ط¯ط± Prod ع©ط§ظ…ظ„ط§ظ‹ ط؛غŒط±ظپط¹ط§ظ„. (ط¬ط²ط¦غŒط§طھ ظˆ ظ†ظ…ظˆظ†ظ‡ fetch ط¯ط± آ§8.)

### 0.1) Update (2026-02-27) â€” ظˆط¶ط¹غŒطھ main ظˆ ظ†ع©طھظ‡ ط¹ظ…ظ„غŒط§طھغŒ PR Merge
- ط¯ط± غŒع© ط±ط®ط¯ط§ط¯ ط¹ظ…ظ„غŒط§طھغŒطŒ ظ¾ط³ ط§ط² PR merge ظ…ط´ط®طµ ط´ط¯ `main` ظ‡ظ†ظˆط² ط®ط·ط§غŒ build ط¯ط§ط±ط¯ط› ط¯ط± ظ†طھغŒط¬ظ‡ ط¨ط§ ظ…ط³غŒط± ط§ظ…ظ† `reflog â†’ cherry-pick`
  ع©ط§ظ…غŒطھ ظپغŒع©ط³ ط±ظˆغŒ `main` ط§ط¹ظ…ط§ظ„ ط´ط¯.
- ظ…ط¹غŒط§ط± ظ¾ط°غŒط±ط´ merge ط¨ط±ط§غŒ ط¨ع©â€Œط§ظ†ط¯ (ط®طµظˆطµط§ظ‹ ط¨ط§ migrations):
  1) `npm run build` ط³ط¨ط² ط±ظˆغŒ ط¨ط±ظ†ع†
  2) ط¨ط¹ط¯ ط§ط² mergeطŒ `main` ط¨ط§غŒط¯ ط¯ط§ط±ط§غŒ SHA ط¬ط¯غŒط¯ ط¨ط§ط´ط¯ + build ظ…ط¬ط¯ط¯ ط³ط¨ط²
---

### 1) ظ†ع¯ط§ط´طھ طµظپط­ط§طھ Next.js â†’ ط³ط±ظˆغŒط³â€Œظ‡ط§

| طµظپط­ظ‡ (App Router) | ظ‡ط¯ظپ | ط³ط±ظˆغŒط³â€Œظ‡ط§غŒ ط¨ع©â€Œط§ظ†ط¯ ظ…ظˆط±ط¯ظ†غŒط§ط² |
|---|---|---|
|âœ… طھع©ظ…غŒظ„â€Œط´ط¯ظ‡ (غ±غ´غ°غµ/غ°غ³/غ±غ³):
|- ط§ط¹طھط¨ط§ط±ط³ظ†ط¬غŒ Captcha ط¯ط± ظپط±ط§ظ†طھâ€Œط§ظ†ط¯
|- Dropdown ط§ظ†طھط®ط§ط¨ ع©ط³ط¨â€Œظˆع©ط§ط± ط¨ط§ `GET businesses/me`
|- ط§ط±ط³ط§ظ„ `POST /api/simulators/modian/login` ط¨ط§ nationalId/password
|- ط§ظ†طھظ‚ط§ظ„ ط¨ظ‡ `/simulators/modian/otp` ظ¾ط³ ط§ط² ظˆط±ظˆط¯ ظ…ظˆظپظ‚

|âœ… ط§غŒط¬ط§ط¯ط´ط¯ظ‡ (غ±غ´غ°غµ/غ°غ³/غ±غ³) â€” UI-only ط¨ط§ Mock:
|- طھظˆظ„غŒط¯ ع©ط¯ غ¶ ط±ظ‚ظ…غŒ ط±ظ†ط¯ظˆظ… ط¯ط± ظپط±ط§ظ†طھâ€Œط§ظ†ط¯
|- ط´ظ…ط§ط±ظ†ط¯ظ‡ ظ…ط¹ع©ظˆط³ غ¶ ط¯ظ‚غŒظ‚ظ‡â€Œط§غŒ (غ³غ¶غ° ط«ط§ظ†غŒظ‡)
|- ظ†ظ…ط§غŒط´ ظ…ظˆط¨ط§غŒظ„ ط¨ط§ ظ¾غŒط§ظ…ع© ط´ط¨غŒظ‡â€Œط³ط§ط²غŒâ€Œط´ط¯ظ‡
|- ط¨ط§ط²ع¯ط´طھ ط®ظˆط¯ع©ط§ط± ط¨ظ‡ Login ط¯ط± طµظˆط±طھ ط§طھظ…ط§ظ… ط²ظ…ط§ظ†
|- TODO: ط§طھطµط§ظ„ ط¨ظ‡ API ظˆط§ظ‚ط¹غŒ OTP

|âœ… طھع©ظ…غŒظ„â€Œط´ط¯ظ‡ (غ±غ´غµ/غ°غ³/غ±غ³):
|- ط§ظپط²ظˆط¯ظ† Header/Footer ط¨ظ‡ Layout
|- ط¯ط±غŒط§ظپطھ ط§ط·ظ„ط§ط¹ط§طھ ع©ط§ط±ط¨ط± ط§ط² `GET /api/utils/user-info`
|- ظ†ظ…ط§غŒط´ ظ¾ط±ظˆظ†ط¯ظ‡â€Œظ‡ط§ ط¨ط§ `GET businesses/me` (ط´ط§ظ…ظ„ economicCode ظˆ trackingCode)
|- ط±ظپط¹ ظ…ط´ع©ظ„ ط®ط§ظ„غŒ ط¨ظˆط¯ظ† ظپغŒظ„ط¯ظ‡ط§غŒ آ«ع©ط¯ ط§ظ‚طھطµط§ط¯غŒآ» ظˆ آ«ع©ط¯ ط±ظ‡ع¯غŒط±غŒ ط«ط¨طھâ€Œظ†ط§ظ…آ»
| `/simulators/modian/home` | طµظپط­ظ‡ظ” ط®ط§ظ†ظ‡ظ” ظ…ظˆط¯غŒط§ظ† | `GET modian/home/tiles` |
| `/simulators/modian/workspace` | ط´ظگظ„ ع©ط§ط±غŒ | ط¨ط³طھظ‡ ط¨ظ‡ ظ…ظ†ظˆظ‡ط§غŒ ظپط¹ط§ظ„ |
| `/simulators/modian/invoice/new` | ظپط±ظ… طµط¯ظˆط± طµظˆط±طھط­ط³ط§ط¨ طھظ…ط±غŒظ†غŒ | `POST modian/invoice` |
| `/simulators/modian/invoices/buy/detail` | ط¬ط²ط¦غŒط§طھ طµظˆط±طھط­ط³ط§ط¨ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ (ط´ط¨غŒظ‡â€Œط³ط§ط²) | ظپط¹ظ„ط§ظ‹ UI-onlyط› ط³ط±ظˆغŒط³â€Œظ‡ط§غŒ ط¬ط²ط¦غŒط§طھ طµظˆط±طھط­ط³ط§ط¨طŒ ط§ظ‚ظ„ط§ظ… ظˆ ظ¾ط±ط¯ط§ط®طھâ€Œظ‡ط§ TBD |
| `/simulators/modian/taxfile/registration` | ط§ط·ظ„ط§ط¹ط§طھ ط«ط¨طھâ€Œظ†ط§ظ…غŒ (ط§ط¯ظ…غŒظ†) | `GET/PUT modian/taxfile/registration` |
| `/simulators/modian/dashboard` | ط¯ط§ط´ط¨ظˆط±ط¯ ط§ط¯ظ…غŒظ† ظ…ظˆط¯غŒط§ظ† | `GET modian/admin/dashboard` |
| `/simulators/modian/admin/taxfile/bills` | ظ‚ط¨ظˆط¶/ط§ظ†ط´ط¹ط§ط¨ط§طھ | `GET/POST/PUT/DELETE modian/admin/taxfile/bills` |
| `/simulators/modian/admin/taxfile/trusted/add` | ط§ظپط²ظˆط¯ظ† ط´ط±ع©طھâ€Œظ‡ط§غŒ ظ…ط¹طھظ…ط¯ | `POST modian/admin/taxfile/trusted` |
| `/simulators/modian/admin/taxfile/memory-uid` | ط´ظ†ط§ط³ظ‡ غŒع©طھط§ ط­ط§ظپط¸ظ‡ظ” ظ…ط§ظ„غŒط§طھغŒ (ظپظ‡ط±ط³طھ) | `GET modian/admin/taxfile/memory-uid` |
| `/simulators/modian/admin/taxfile/memory-uid/add` | ظˆغŒط²ط§ط±ط¯ طµط¯ظˆط± ط´ظ†ط§ط³ظ‡ غŒع©طھط§ | `POST .../initialize`, `POST .../upload-public-key`, `POST .../assign-branches`, `POST .../assign-pps`, `POST .../confirm` |
| `/simulators/modian/admin/taxfile/memory-uid/details?uid=:uid[&mode=edit]` | ط¬ط²ط¦غŒط§طھ / **ظˆغŒط±ط§غŒط´ (UI state)** | `GET modian/admin/taxfile/memory-uid/:uid` *(ظ‡ظ…ط§ظ† ط³ط±ظˆغŒط³)* |
| `/simulators/modian/users-roles` | طھط¨ آ«ع©ط§ط±ط¨ط±ط§ظ† ظˆ ظ†ظ‚ط´â€Œظ‡ط§آ» (ظ„غŒط³طھ/ط¬ط³طھâ€Œظˆط¬ظˆ) | `GET api/modian/admin/roles`, `GET api/modian/admin/users` |
| `/simulators/modian/roles/add` | ظˆغŒط²ط§ط±ط¯ ط§غŒط¬ط§ط¯ ظ†ظ‚ط´ | `GET api/modian/admin/roles/permissions-schema`, `POST api/modian/admin/roles`, `POST api/modian/admin/roles/:id/users` |
| `/simulators/modian/users-roles/add` | ط§ظپط²ظˆط¯ظ† ع©ط§ط±ط¨ط± ط¬ط¯غŒط¯ | `GET api/modian/admin/users/lookup?nationalId|foreignId=...`, `POST api/modian/admin/users` |
| `/simulators/modian/layout` | ط´ظگظ„ ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ† (ظ‡ط¯ط±طŒ ط³ط§ط¨â€Œظ‡ط¯ط±طŒ ط³ط§غŒط¯ط¨ط§ط±) | ط¨ط¯ظˆظ† ط§ط±طھط¨ط§ط· ظ…ط³طھظ‚غŒظ… API â€“ ظپظ‚ط· Container ط¨ط±ط§غŒ ط³ط§غŒط± طµظپط­ط§طھ |

> **غŒط§ط¯ط¯ط§ط´طھ ظپط±ط§ظ†طھ (Next 15):** طµظپط­ط§طھ ظپظˆظ‚ ع©ظ‡ ع©ظ„ط§غŒظ†طھغŒ ظ‡ط³طھظ†ط¯ ظˆ ط§ط² `useSearchParams` ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ظ†ط¯ ط¨ط§غŒط¯ ط²غŒط± غŒع© `layout.tsx` ظ…ط­ظ„غŒ ط¨ط§ `<Suspense>` ط±ظ†ط¯ط± ط´ظˆظ†ط¯ طھط§ ط®ط·ط§غŒ *missing-suspense-with-csr-bailout* ط¯ط± ط¨غŒظ„ط¯ ط±ط® ظ†ط¯ظ‡ط¯. ظ‡ظ…ع†ظ†غŒظ† ط¯ط± طµظپط­ط§طھ ع©ظ„ط§غŒظ†طھ ط¨ظ‡â€Œط¬ط§غŒ `next/headers` ط§ط² `GET /api/utils/user-info` ط§ط³طھظپط§ط¯ظ‡ ع©ظ†غŒط¯.

> **غŒط§ط¯ط¯ط§ط´طھ ط¬ط¯غŒط¯:** ط³ط§ط®طھط§ط± آ«ظ…ظˆط¯غŒط§ظ†آ» ط§ع©ظ†ظˆظ† ظ…ط§عکظˆظ„ط§ط± ط´ط¯ظ‡ ظˆ طھظ…ط§ظ… ط´ظگظ„â€Œظ‡ط§ ظˆ ظ‡ط¯ط±ظ‡ط§غŒ ط§ط®طھطµط§طµغŒ ط¯ط± ظ…ط³غŒط±
`src/components/modian/layout/` ظ‚ط±ط§ط± ط¯ط§ط±ظ†ط¯. ظ…ط³غŒط±ظ‡ط§غŒ ظ‚ط¨ظ„غŒ ط¯ط± `src/components/layout/` ظپظ‚ط· ط¨ط±ط§غŒ طµظپط­ط§طھ ط§طµظ„غŒ (Site-level) ط¨ط§ظ‚غŒ ظ…ط§ظ†ط¯ظ‡â€Œط§ظ†ط¯.

> ط¨ط±ط§غŒ طµظپط­ط§طھ ع©ظ„ط§غŒظ†طھغŒ ظ…ط§ظ†ظ†ط¯ `otp`, `portal`, `users-roles/add`طŒ ط³ط§ط®طھط§ط± `page.tsx (Server)` + `PageClient.tsx (Client)` ط§ط³طھظپط§ط¯ظ‡ ط´ط¯ظ‡ طھط§ ط®ط·ط§غŒ
`useSearchParams()` ظˆ CSR bailout ط±ظپط¹ ط´ظˆط¯.
---

### 2) ظ‚ط±ط§ط±ط¯ط§ط¯ ط®ط·ط§ ظˆ ظ¾ط§ط³ط®
- **ع©ظڈط¯ظ‡ط§**: `200/201/204`, ط®ط·ط§ظ‡ط§غŒ ط§ط¹طھط¨ط§ط±ط³ظ†ط¬غŒ `400`, ط¹ط¯ظ… ط§ط¬ط§ط²ظ‡ `403`, ط¹ط¯ظ… ط§ط­ط±ط§ط² `401`, ط¹ط¯ظ…â€ŒغŒط§ظپطھ `404`طŒ ط®ط·ط§غŒ ط³ط±ظˆط± `500`.
- **ظ‚ط§ظ„ط¨ ظ¾ط§ط³ط® ظ…ط´طھط±ع©** (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ):
```json
{ "ok": true, "data": {...}, "traceId": "..." }
```
- **ظ‚ط§ظ„ط¨ ط®ط·ط§ ظ…ط´طھط±ع©**:
```json
{ "ok": false, "error": { "code": "VALIDATION_ERROR", "message": "...", "details": {...} }, "traceId": "..." }
```

---

### 3) API â€” ظ…ط§عکظˆظ„ آ«ظ‡ظˆغŒطھ/ط§ط¨ط²ط§ط±آ»

### 3.1 ط§ط­ط±ط§ط² ظ‡ظˆغŒطھ
| ظ…ط³غŒط± | ظ…طھط¯ | ظˆط±ظˆط¯غŒ (Body) | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ |
|---|---|---|---|---|
| `auth/signin` | `POST` | `{ phone, password }` | ط³طھ **ع©ظˆع©غŒâ€Œظ‡ط§غŒ** `access_token`/`refresh_token` + `{ user }` | ط¹ظ…ظˆظ…غŒ |
| `auth/signup` | `POST` | `{ fullName, phone, password }` | `{ success: true, user }` | ط¹ظ…ظˆظ…غŒ |
| `auth/logout` | `POST` | ظ€ | ظ¾ط§ع©â€Œط³ط§ط²غŒ ع©ظˆع©غŒâ€Œظ‡ط§ | JWT |
| `auth/refresh` | `POST` | Refresh Cookie | ط³طھ ع©ظˆع©غŒâ€Œظ‡ط§غŒ ط¬ط¯غŒط¯ | ط¹ظ…ظˆظ…غŒ (ط¨ط§ ع©ظˆع©غŒ ظ…ط¹طھط¨ط±) |
| `auth/dev-login` | `POST` | Header: `X-Dev-Bypass: <token>` | ط³طھ ع©ظˆع©غŒ + `{ ok: true, user }` | **Dev-only** |

**ظ‚ط±ط§ط±ط¯ط§ط¯ ع†ط±ط®ظ‡ ظ‡ظˆغŒطھ ظˆ Business (MVP):**
- `auth/signup` ظپظ‚ط· ط±ع©ظˆط±ط¯ `User` ط±ط§ ط§غŒط¬ط§ط¯ ظ…غŒâ€Œع©ظ†ط¯ط› ط³ط§ط®طھ ط®ظˆط¯ع©ط§ط± `Business`طŒ `UserBusiness` غŒط§ `TaxFile` ط¯ط± Signup ظ…ظ…ظ†ظˆط¹ ط§ط³طھ.
- `auth/signin` ظˆ `auth/refresh` ط¨ط±ط§غŒ ع©ط§ط±ط¨ط± ط¨ط¯ظˆظ† ع©ط³ط¨â€Œظˆع©ط§ط± ظ…ط¹طھط¨ط± ظ‡ط³طھظ†ط¯ ظˆ ط¯ط± ط§غŒظ† ط­ط§ظ„طھ `businessId` ط¯ط± Access Token ط¨ط±ط§ط¨ط± `null` ط§ط³طھ.
- ظ¾ط³ ط§ط² ط§غŒط¬ط§ط¯ ظ…ظˆظپظ‚ ع©ط³ط¨â€Œظˆع©ط§ط±طŒ endpoint ط§غŒط¬ط§ط¯ ع©ط³ط¨â€Œظˆع©ط§ط± غŒع© `access_token` طھط§ط²ظ‡ ط¨ط§ `businessId` ط¬ط¯غŒط¯ طµط§ط¯ط± ظ…غŒâ€Œع©ظ†ط¯ط› ط¨ظ†ط§ط¨ط±ط§غŒظ† Login ظ…ط¬ط¯ط¯ ظ„ط§ط²ظ… ظ†غŒط³طھ.
- ط§ظ†طھط®ط§ط¨ ظپط¹ظ„غŒ Business ظپط¹ط§ظ„ ط¨ط±ط§غŒ ع©ط§ط±ط¨ط±غŒ ع©ظ‡ Business ط¯ط§ط±ط¯ ط§ط² ط§ظˆظ„غŒظ† ط±ط§ط¨ط·ظ‡ ظ…ظˆط¬ظˆط¯ ط¯ط± `UserBusiness` ط§ظ†ط¬ط§ظ… ظ…غŒâ€Œط´ظˆط¯ط› ظ…ط¯ظ„ ط§ظ†طھط®ط§ط¨ ع†ظ†ط¯ع©ط³ط¨â€Œظˆع©ط§ط±غŒ ط¯ط± ظپط§ط² ط¨ط¹ط¯ طھطµظ…غŒظ…â€Œع¯غŒط±غŒ ظ…غŒâ€Œط´ظˆط¯.


### 3.2 ط§ط¨ط²ط§ط±
| ظ…ط³غŒط± | ظ…طھط¯ | ط´ط±ط­ |
|---|---|---|
| `api/utils/today` | `GET` | طھط§ط±غŒط® ط´ظ…ط³غŒ/ظ…غŒظ„ط§ط¯غŒ (ط¨ط±ط§غŒ UI) |
| `api/utils/user-info` | `GET` | ط®ظ„ط§طµظ‡ ع©ط§ط±ط¨ط± ظ„ط§ع¯غŒظ†â€Œط´ط¯ظ‡ (ظ†ط§ظ…/ظ†ظ‚ط´/AccessLevel) â€” **Proxy ظپط±ط§ظ†طھ ط¨ظ‡** `GET /utils/user-info` ط¨ع©â€Œط§ظ†ط¯ |

#### ظ„ط§غŒظ‡ ظ¾ط±ظˆع©ط³غŒ ع©ظ„ط§غŒظ†طھ (Next.js API Routes)
ط§غŒظ† ظ…ط³غŒط±ظ‡ط§ ظˆط§ط³ط· ط§ظ…ظ†غŒطھغŒ ط¨غŒظ† ظپط±ط§ظ†طھâ€Œط§ظ†ط¯ ظˆ ط¨ع©â€Œط§ظ†ط¯ NestJS ظ‡ط³طھظ†ط¯ ظˆ ع©ظˆع©غŒ ظ†ط´ط³طھ ط±ط§ ط¨ط¯ظˆظ† ظ†ط´طھ ط¨ظ‡ ع©ظ„ط§غŒظ†طھ ظ¾ط§ط³ ظ…غŒâ€Œط¯ظ‡ظ†ط¯:

| ط±ظˆط´ | ظ…ط³غŒط± ظ¾ط±ظˆع©ط³غŒ | ظ‡ط¯ظپ ط¨ع©â€Œط§ظ†ط¯ | ظˆط¶ط¹غŒطھ |
|---|---|---|---|
| `POST` | `/api/business/create` | `POST /businesses/create` | **ظ…ط³غŒط± ط§طµظ„غŒ MVP**ط› Body ظپط±ظ… ط±ط§ ظپظˆط±ظˆط§ط±ط¯ ظˆ `Set-Cookie` ظ¾ط§ط³ط® ط±ط§ ط¨ظ‡ ظ…ط±ظˆط±ع¯ط± ظ…ظ†طھظ‚ظ„ ظ…غŒâ€Œع©ظ†ط¯ |
| `POST` | `/api/business/onboarding/step-1` | `POST /businesses/onboarding/step-1` | **Legacy**ط› ط®ط§ط±ط¬ ط§ط² Flow ط§طµظ„غŒ ظˆ ظ…ظˆظ‚طھط§ظ‹ طھط§ ظ¾ط§غŒط§ظ† طھط³طھâ€Œظ‡ط§غŒ ظ…ظ†ظپغŒ ظ†ع¯ظ‡â€Œط¯ط§ط±غŒ ظ…غŒâ€Œط´ظˆط¯ |
| `POST` | `/api/business/switch` | ظ…ط³غŒط± Switch ظ…طھظ†ط§ط¸ط± | **Legacy ط¯ط± Flow ط§غŒط¬ط§ط¯**ط› ط§غŒط¬ط§ط¯ ط¬ط¯غŒط¯ ط¨ط±ط§غŒ ظپط¹ط§ظ„â€Œط³ط§ط²غŒ Business ط¨ظ‡ Switch ط¬ط¯ط§ع¯ط§ظ†ظ‡ ظ†غŒط§ط² ظ†ط¯ط§ط±ط¯ |
| `POST` | `/api/business/onboarding/step-2` | `POST /registration/tax-verification` | ظ…ط³غŒط± ظ…ط³طھظ‚ظ„ ظ‚ط¯غŒظ…غŒ/ظ…ط±ط­ظ„ظ‡ ط¨ط¹ط¯ط› ط¬ط²ظˆ Flow ط§طھظ…غŒع© ظپط¹ظ„غŒ Create ظ†غŒط³طھ |

### 3.3) API â€” ظ…ط§عکظˆظ„ آ«ع©ط³ط¨â€Œظˆع©ط§ط± ظˆ ط«ط¨طھâ€Œظ†ط§ظ…آ» (Business & Onboarding)
Endpointظ‡ط§غŒ ظ…ط±ط¨ظˆط· ط¨ظ‡ ط§غŒط¬ط§ط¯ ظ†ظ‡ط§ط¯ ع©ط³ط¨â€Œظˆع©ط§ط± ظˆ طھع©ظ…غŒظ„ ط§ط·ظ„ط§ط¹ط§طھ ط«ط¨طھâ€Œظ†ط§ظ…غŒ (Onboarding).

| ظ…ط³غŒط± | ظ…طھط¯ | ظˆط±ظˆط¯غŒ (Body) | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ | ظˆط¶ط¹غŒطھ |
|---|---|---|---|---|---|
| `businesses/create` | `POST` | `RegistrationStep1Dto` | `{ success, businessId, registrationId, taxFileId, message }` + ع©ظˆع©غŒ `access_token` طھط§ط²ظ‡ | JWT | **ظ…ط³غŒط± ط§طµظ„غŒ MVP** |
| `businesses/onboarding/step-1` | `POST` | `RegistrationStep1Dto` | `{ registrationId }` | JWT | **Legacyط› ط®ط§ط±ط¬ ط§ط² Flow ط§طµظ„غŒ** |
| `businesses/me` | `GET` | ظ€ط› User ط§ط² JWT | `BusinessInfo[]` ط´ط§ظ…ظ„ `id`, `name`, `nationalId`, `economicCode`, `entityName`, `trackingCode`, `taxpayerType`, `postalCode`, `address`, `city`, `userRole` | JWT | ظپط¹ط§ظ„ |
| `admin/grant-admin-access` | `POST` | `{ phone: string }` | `{ success, user: { id, phone, accessLevel } }` | Dev-Guard | ظپظ‚ط· Development |

#### ظ‚ط±ط§ط±ط¯ط§ط¯ ط§طھظ…غŒع© `POST /businesses/create`

Backend ظ¾ط³ ط§ط² ط§ط¹طھط¨ط§ط±ط³ظ†ط¬غŒ ع©ط§ظ…ظ„ DTOطŒ طھظ…ط§ظ… ط¹ظ…ظ„غŒط§طھ ط²غŒط± ط±ط§ ط¯ط± **غŒع© Prisma Transaction** ط§ظ†ط¬ط§ظ… ظ…غŒâ€Œط¯ظ‡ط¯:

1. ع©ظ†طھط±ظ„ ظ…ط­ط¯ظˆط¯غŒطھ طھط¹ط¯ط§ط¯ ع©ط³ط¨â€Œظˆع©ط§ط± ط¨ط±ط§غŒ AccessLevel ع©ط§ط±ط¨ط±ط›
2. ط§غŒط¬ط§ط¯ `Business` ط§ط² ط§ط·ظ„ط§ط¹ط§طھ Registrationط›
3. ط§غŒط¬ط§ط¯ ط±ط§ط¨ط·ظ‡ `UserBusiness` ط¨ط§ ظ†ظ‚ط´ `ADMIN`ط›
4. ط§غŒط¬ط§ط¯ `TaxFile` ط¨ط§ ظˆط¶ط¹غŒطھ `DRAFT`ط›
5. ط§غŒط¬ط§ط¯ `BusinessContact`ط›
6. ط§غŒط¬ط§ط¯ `BusinessRegistration`ط›
7. ظ¾ط³ ط§ط² Commit ظ…ظˆظپظ‚طŒ طµط¯ظˆط± `access_token` طھط§ط²ظ‡ ط¨ط§ `businessId` ط¬ط¯غŒط¯.

ط¯ط± طµظˆط±طھ ط´ع©ط³طھ ظ‡ط± ظ…ط±ط­ظ„ظ‡طŒ Transaction ط¨ط§غŒط¯ Rollback ط´ظˆط¯ ظˆ ظ‡غŒع† Aggregate ظ†ط§ظ‚طµغŒ ط¨ط§ظ‚غŒ ظ†ظ…ط§ظ†ط¯.

ظˆط¶ط¹غŒطھ طھط³طھ ط§طھظ…غŒع© ط§غŒظ† Endpoint:

- ظ…ط³غŒط± ظ…ظˆظپظ‚ ط§غŒط¬ط§ط¯ Aggregate ط´ط§ظ…ظ„ `Business`طŒ `UserBusiness`طŒ `TaxFile`طŒ `BusinessContact` ظˆ `BusinessRegistration`: **ظ…ظˆظپظ‚**ط›
- طھط³طھ Failure Injection ع©ظ†طھط±ظ„â€Œط´ط¯ظ‡ ط¯ط± ظ…ط­غŒط· DevelopmentطŒ ظ¾ط³ ط§ط² ط§غŒط¬ط§ط¯ `BusinessContact`: **ظ…ظˆظپظ‚**ط›
- ظ¾ط§ط³ط® Endpoint ط¯ط± ط®ط·ط§غŒ ط¹ظ…ط¯غŒ: `500 Internal Server Error`ط›
- Rollback ع©ط§ظ…ظ„ Prisma Transaction ظˆ ط¹ط¯ظ… ط¨ط§ظ‚غŒâ€Œظ…ط§ظ†ط¯ظ† ظ‡غŒع† Aggregate ظ†ط§ظ‚طµ ط¯ط± ط¬ط¯ط§ظˆظ„ ظ…ط±طھط¨ط·: **طھط£غŒغŒط¯ ط´ط¯**ط›
- ط­ط°ظپ ع©ط§ظ…ظ„ Failure Injection ظ…ظˆظ‚طھ ط§ط² `src/business/business.service.ts`: **ط§ظ†ط¬ط§ظ… ط´ط¯**ط›
- Build ظ†ظ‡ط§غŒغŒ Backend ظ¾ط³ ط§ط² ط­ط°ظپ ط§ط¨ط²ط§ط± طھط³طھ: **ظ…ظˆظپظ‚**ط›
- ط¯ط§ط¯ظ‡ Aggregate ظ…ط±ط¨ظˆط· ط¨ظ‡ طھط³طھ ظ…ط«ط¨طھ ط¨ظ‡â€Œطµظˆط±طھ ظ…ط­ط¯ظˆط¯ ظˆ ع©ظ†طھط±ظ„â€Œط´ط¯ظ‡ ظ¾ط§ع© ط´ط¯ ظˆ User ط¢ط²ظ…ط§غŒط´غŒ ط­ظپط¸ ط´ط¯.

#### ظ‚ط±ط§ط±ط¯ط§ط¯ UI â€” Manual / Auto-fill

- `Manual Form` ظˆ `Auto-fill Template` ظ‡ط± ط¯ظˆ ظ‡ظ…ط§ظ† `RegistrationStep1Dto` ط±ط§ ط¨ظ‡ ظ‡ظ…ط§ظ† endpoint ط§ط±ط³ط§ظ„ ظ…غŒâ€Œع©ظ†ظ†ط¯.
- Auto-fill ظپظ‚ط· ظپط±ظ… ط±ط§ ط¨ط§ Template ط«ط§ط¨طھ ط¢ظ…ظˆط²ط´غŒ MVP ظ¾ط± ظ…غŒâ€Œع©ظ†ط¯ط› ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ ظپظ‚ط· ظ¾ط³ ط§ط² ظ…ط´ط§ظ‡ط¯ظ‡/ظˆغŒط±ط§غŒط´ ظˆ طھط£غŒغŒط¯ ع©ط§ط±ط¨ط± ط§ظ†ط¬ط§ظ… ظ…غŒâ€Œط´ظˆط¯.
- Template ظپط¹ظ„غŒ ط¨ط±ط§غŒ ظ‡ظ…ظ‡ ع©ط§ط±ط¨ط±ط§ظ† غŒع©ط³ط§ظ† ط§ط³طھطŒ ط§ظ…ط§ ط´ظ†ط§ط³ظ‡â€Œظ‡ط§غŒ DBطŒ ظ…ط§ظ„ع©غŒطھ ظˆ ط±ظˆط§ط¨ط· ظ‡ط± User ظ…ط³طھظ‚ظ„ ط§غŒط¬ط§ط¯ ظ…غŒâ€Œط´ظˆظ†ط¯.
- ظ¾ط³ ط§ط² ط«ط¨طھ ظ…ظˆظپظ‚طŒ Modal ظ…ظˆظپظ‚غŒطھ ظ†ظ…ط§غŒط´ ط¯ط§ط¯ظ‡ ظˆ ع©ط§ط±ط¨ط± ط¨ط¯ظˆظ† Login غŒط§ Switch ظ…ط¬ط¯ط¯ ط¨ظ‡ Dashboard ظ…ظ†طھظ‚ظ„ ظ…غŒâ€Œط´ظˆط¯.

#### ظˆط¶ط¹غŒطھ طھط³طھ ظ¾ط°غŒط±ط´

- User A â€” Manual Form: ظ…ظˆظپظ‚
- User B â€” Auto-fill Template + ظˆغŒط±ط§غŒط´ ظ¾غŒط´ ط§ط² ط«ط¨طھ: ظ…ظˆظپظ‚
- ط§غŒط¬ط§ط¯ `Business`, `UserBusiness`, `TaxFile`, `BusinessContact`, `BusinessRegistration`: ظ…ظˆظپظ‚
- ط¬ط¯ط§ط³ط§ط²غŒ Businessظ‡ط§غŒ User A ظˆ User B: ظ…ظˆظپظ‚
- Build/Runtime Backend ظˆ Build/Runtime Frontend: ظ…ظˆظپظ‚

ظ†ع©ط§طھ ط§ظ…ظ†غŒطھغŒ:
- User/Ownership ط§ط² JWT ظˆ ط±ظˆط§ط¨ط· ظ…ط¹طھط¨ط± Backend ط§ط³طھط®ط±ط§ط¬ ظ…غŒâ€Œط´ظˆط¯ط› Client ظ†ط¨ط§غŒط¯ `businessId` ط±ط§ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ظ…ظ†ط¨ط¹ ط­ظ‚غŒظ‚طھ ط§ط±ط³ط§ظ„ ع©ظ†ط¯.
- ط§ط±ط³ط§ظ„ `businessId` ط¯ط± ظ¾ط§ط³ط® ط§ظˆظ„غŒظ‡ Create ظپظ‚ط· ط¨ط±ط§غŒ ط§ط¹ظ„ط§ظ… ظ†طھغŒط¬ظ‡ ظ…ط¬ط§ط² ط§ط³طھ.
- Endpointظ‡ط§غŒ `admin` ظپظ‚ط· ط¯ط± ظ…ط­غŒط· Development ظپط¹ط§ظ„ ظ‡ط³طھظ†ط¯.
- ظ…ط³غŒط±ظ‡ط§غŒ Legacy طھط§ ظ¾ط§غŒط§ظ† طھط³طھâ€Œظ‡ط§غŒ ظ…ظ†ظپغŒ ظ†ع¯ظ‡â€Œط¯ط§ط±غŒ ظ…غŒâ€Œط´ظˆظ†ط¯ ظˆ ظ†ط¨ط§غŒط¯ ط¯ط± طھظˆط³ط¹ظ‡ ط¬ط¯غŒط¯ ظ…طµط±ظپ ط´ظˆظ†ط¯.

## Business Creation Eligibility Endpoint

### GET /businesses/create-eligibility

Purpose:

Checks whether the authenticated user is allowed to start a new business creation flow.

Authentication:

Required

Guard:

JwtAuthGuard

---

### Response: Allowed

HTTP 200

Example:

{
  "allowed": true,
  "reason": null,
  "message": null
}

---

### Response: Free Plan Limit Reached

HTTP 200

Example:

{
  "allowed": false,
  "reason": "FREE_BUSINESS_LIMIT_REACHED",
  "message": "ط¯ط± ط·ط±ط­ ط±ط§غŒع¯ط§ظ† ظپظ‚ط· ط§ظ…ع©ط§ظ† ط§غŒط¬ط§ط¯ غŒع© ع©ط³ط¨â€Œظˆع©ط§ط± ظˆط¬ظˆط¯ ط¯ط§ط±ط¯..."
}

---

### Frontend Integration

Frontend consumes this endpoint through:

src/app/api/business/create-eligibility/route.ts

and:

src/hooks/useBusinessCreationEligibility.ts

The dashboard uses this flow before redirecting users to:

/business/onboarding

---

### 4) API â€” ظ…ط§عکظˆظ„ آ«ظ…ظˆط¯غŒط§ظ†آ» (ع©ط§ط±ط¨ط±)

### 4.1 Portal/Home
| ظ…ط³غŒط± | ظ…طھط¯ | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ |
|---|---|---|---|
| `modian/portal/summary` | `GET` | `{ registrationCompleted, noticesCount, quickLinks[] }` | JWT |
| `modian/home/tiles` | `GET` | ع©ط§ط±طھâ€Œظ‡ط§غŒ ط¯ط§ط´ط¨ظˆط±ط¯ ط®ط§ظ†ظ‡ | JWT |

### 4.2 ط«ط¨طھâ€Œظ†ط§ظ… (Taxfile â†’ Registration)
| ظ…ط³غŒط± | ظ…طھط¯ | ظˆط±ظˆط¯غŒ | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ |
|---|---|---|---|---|
| `modian/taxfile/registration` | `GET` | ظ€ | `RegistrationInfo` | JWT + ظ…ط§ظ„ع©غŒطھ |
| `modian/taxfile/registration` | `PUT` | `RegistrationUpdateDto` | `{ ok: true }` | JWT + ظ…ط§ظ„ع©غŒطھ |


### 4.3 ظ‚ط¨ظˆط¶/ط§ظ†ط´ط¹ط§ط¨ط§طھ (User) â€” ظ†ط³ط®ظ‡ ط§طµظ„ط§ط­â€Œط´ط¯ظ‡

| ظ…ط³غŒط± | ظ…طھط¯ | ظˆط±ظˆط¯غŒ | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ |
|---|---|---|---|---|
| `/simulators/modian/bills` | GET | QueryBillsDto | `{items,total,page,pageSize}` | JWT + Business Ownership |
| `/simulators/modian/bills` | POST | CreateUtilityBillDto | `{message,id}` | JWT + Business Ownership |
| `/simulators/modian/bills/:id` | PUT | UpdateUtilityBillDto | `{message,id}` | JWT + Business Ownership |
| `/simulators/modian/bills/:id` | DELETE | Path id | `{message}` | JWT + Business Ownership |
| `/simulators/modian/bills/:id` | `GET` | Path: `id` | `{ bill }` | JWT + ظ…ط§ظ„ع©غŒطھ |
> ظ†ع¯ط§ط´طھ ظپط±ط§ظ†طھ: ظ…طھط¯ظ‡ط§غŒ `getBills` ظˆ `createBill` ط¯ط± `src/lib/...غŒظ† ظ…ط³غŒط±ظ‡ط§ ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ظ†ط¯.

## ظ…ط¹ظ…ط§ط±غŒ ط§ظ…ظ†غŒطھغŒ ط¬ط¯غŒط¯

 ظ‚ط¨ظ„:

 SimulatorModianController
        |
 SimulatorModianService
        |
 UtilityBill

 ط¨ط¹ط¯:

 BillsController
        |
 BillsService
        |
 RequestContextService
        |
 Business Scope
        |
 UtilityBill

 ## ط­ط°ظپ ظ…ط³غŒط± Legacy

 SimulatorModianService ط­ط°ظپ ط´ط¯.

 ظ…ط³ط¦ظˆظ„غŒطھâ€Œظ‡ط§غŒ ظ‚ط¯غŒظ…غŒ:
 - listBills
 - createBill
 - updateBill
 - deleteBill

 ط¨ظ‡ BillsService ظ…ظ†طھظ‚ظ„ ط´ط¯ظ†ط¯.

 ## ظ‚ط±ط§ط±ط¯ط§ط¯ ط§ظ…ظ†غŒطھغŒ

 - businessId ط§ط² JWT Context ط§ط³طھط®ط±ط§ط¬ ظ…غŒâ€Œط´ظˆط¯.
 - registrationId طھظˆط³ط· Backend طھط¹غŒغŒظ† ظ…غŒâ€Œط´ظˆط¯.
 - ط¯ط±غŒط§ظپطھ ط§غŒظ† ظ…ظ‚ط§ط¯غŒط± ط§ط² Body/Query ظ…ظ…ظ†ظˆط¹ ط§ط³طھ.

 ## ظˆط¶ط¹غŒطھ ط¹ظ…ظ„غŒط§طھغŒ

 طھط³طھâ€Œظ‡ط§غŒ ط§ظ†ط¬ط§ظ…â€Œط´ط¯ظ‡:

 - POST ظ‚ط¨ط¶: 201 Created
 - GET ظ‚ط¨ط¶â€Œظ‡ط§: 200 OK
 - PUT ظ‚ط¨ط¶: 200 OK
 - DELETE ظ†ط±ظ… ظ‚ط¨ط¶: 200 OK

 Soft Delete ط¨ط§ deletedAt ط§ظ†ط¬ط§ظ… ظ…غŒâ€Œط´ظˆط¯
 ظˆ ط±ع©ظˆط±ط¯ ظپغŒط²غŒع©غŒ ط­ط°ظپ ظ†ظ…غŒâ€Œط´ظˆط¯.

#### 4.3.1 Update (2026-02-27) â€” ط§ظ„ط²ط§ظ… businessId ط¯ط± UtilityBill
- ط¯ط± ظ…ط¯ظ„ DBطŒ `UtilityBill.businessId` ط§ط¬ط¨ط§ط±غŒ ط§ط³طھ.
- ظ‚ط±ط§ط±ط¯ط§ط¯ ط§ط¬ط±ط§غŒغŒ: ظ‡ظ†ع¯ط§ظ… ط§غŒط¬ط§ط¯ ظ‚ط¨ط¶ (ظ‡ط± ط¯ظˆ ظ…ط³غŒط± ط³ط±ظˆغŒط³)طŒ ظ…ظ‚ط¯ط§ط± `businessId` ط¨ط§غŒط¯ ط§ط² آ«ظ…ظ†ط¨ط¹ ظ…ط¹طھط¨ط±آ» طھط¹غŒغŒظ† ط´ظˆط¯
  (طھط±ط¬غŒط­ط§ظ‹ Context ط§ط³طھط®ط±ط§ط¬â€Œط´ط¯ظ‡ ط§ط² JWT غŒط§ ط§ط±طھط¨ط§ط· Registrationâ†”Business) ظˆ ظ†ط¨ط§غŒط¯ ط§ط² body/query ط¨ظ‡ ط¹ظ†ظˆط§ظ† ظ…ظ†ط¨ط¹ ط­ظ‚غŒظ‚طھ ط§ط³طھظپط§ط¯ظ‡ ط´ظˆط¯.
- ظ†طھغŒط¬ظ‡: build ط¨ع©â€Œط§ظ†ط¯ ط±ظˆغŒ `main` ط³ط¨ط² ظˆ ط§غŒط¬ط§ط¯ ظ‚ط¨ط¶ ط¨ط¯ظˆظ† ط®ط·ط§غŒ TypeScript ط§ظ†ط¬ط§ظ… ظ…غŒâ€Œط´ظˆط¯.
### 4.4 ط§ط¹ظ„ط§ظ†â€Œظ‡ط§
| ظ…ط³غŒط± | ظ…طھط¯ | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ |
|---|---|---|---|
| `modian/notices` | `GET` | `{ items: Notice[] }` | JWT |

### 4.5 Invoice Data & UI Policy (Training-First)
- آ«ظ…ظˆط¯غŒآ»: ظپظ‚ط· ط§ط² ظ¾ط±ظˆظپط§غŒظ„/ط«ط¨طھâ€Œظ†ط§ظ… DB ظˆط§ع©ط´غŒ ط´ظˆط¯ (Single Source of Truth).
- آ«ط·ط±ظپ ظ…ظ‚ط§ط¨ظ„آ» (ظپط±ظˆط´ظ†ط¯ظ‡/ط®ط±غŒط¯ط§ط±): ط¨ط§ Seed/Test Fixtures طھظˆظ„غŒط¯ ظ…غŒâ€Œط´ظˆط¯ط› ظ…ط³غŒط± ظˆ ظپط±ظ…طھ Fixture ط¯ط± ط±غŒظ¾ظˆ ط«ط¨طھ ظ…غŒâ€Œع¯ط±ط¯ط¯.
- آ«Excel Exportآ»: غŒع© Utility ظˆط§ط­ط¯ (طھط±ط¬غŒط­ط§ظ‹ Modian-Scoped ط¯ط± طµظˆط±طھ ظپط±ظ…طھ ط®ط§طµ)ط› ظ‡ظ…ظ‡ طµظپط­ط§طھ `buy/` ظˆ `sales/` ظپظ‚ط· ط§ط² ظ‡ظ…غŒظ† Utility ط§ط³طھظپط§ط¯ظ‡ ع©ظ†ظ†ط¯.
- آ«ط¯ط§ط´ط¨ظˆط±ط¯ ظ…ط¯غŒط±غŒطھغŒآ»: ظ†ظ…ظˆط¯ط§ط±/ع¯ط²ط§ط±ط´â€Œظ‡ط§طŒ ظ…طµط±ظپâ€Œع©ظ†ظ†ط¯ظ‡ظ” ط¯ط§ط¯ظ‡ظ” طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§ ط¨ط§ط´ظ†ط¯ (endpoint/selector ظ…ط´طھط±ع©).
> ظ‡ط¯ظپ: ط¬ظ„ظˆع¯غŒط±غŒ ط§ط² ع†ظ†ط¯ظ¾ط§ط±ع¯غŒ ط¯ط§ط¯ظ‡ ظˆ طھع©ط«غŒط± Utilityظ‡ط§ ط¯ط± ظ¾ط±ظˆعکظ‡.

**Update (1405-03-13)** â€” ط§طµظ„ط§ط­ ط³ط§ط®طھط§ط± ظ¾ط§ط³ط® `businesses/me`:
- ظپغŒظ„ط¯ `nationalOrForeignOrLegalId` ط­ط°ظپ ظˆ ط¨ط§ `nationalId` ط¬ط§غŒع¯ط²غŒظ† ط´ط¯
- ط§ظˆظ„ظˆغŒطھâ€Œط¯ظ‡غŒ ط¨ظ‡ `reg?.economicCode` ظ‚ط¨ظ„ ط§ط² `ub.business.economicCode`
- ط§ظپط²ظˆط¯ظ† `trackingCode` ط§ط² ط¬ط¯ظˆظ„ `BusinessRegistration`
---

### 5) API â€” ظ…ط§عکظˆظ„ آ«ظ…ظˆط¯غŒط§ظ† ط§ط¯ظ…غŒظ†آ»

> طھظˆط¬ظ‡: ط§غŒظ†â€Œظ‡ط§ ط¯ط± UI ظ…ظˆط¬ظˆط¯ظ†ط¯ ظˆ آ«ع©ط§ظ…ظ„ ط§ظ…ط§ ظ†غŒط§ط²ظ…ظ†ط¯ ط¨ط§ط²ط¢ط±ط§غŒغŒ ط³ط§ط®طھط§ط±غŒآ» ع¯ط²ط§ط±ط´ ط´ط¯ظ‡â€Œط§ظ†ط¯. ط¨ط±ط§غŒ MVPطŒ CRUD ط­ط¯ط§ظ‚ظ„غŒ ع©ط§ظپغŒ ط§ط³طھ.

### 5.1 ط¯ط§ط´ط¨ظˆط±ط¯
| ظ…ط³غŒط± | ظ…طھط¯ | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ |
|---|---|---|---|
| `api/modian/admin/dashboard` | `GET` | ط¢ظ…ط§ط± ط«ط¨طھâ€Œظ†ط§ظ…/ظ‚ط¨ظˆط¶/ظپط¹ط§ظ„غŒطھâ€Œظ‡ط§ | Admin + JWT |

### 5.2 ط«ط¨طھâ€Œظ†ط§ظ…
| ظ…ط³غŒط± | ظ…طھط¯ | ظˆط±ظˆط¯غŒ | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ |
|---|---|---|---|---|
| `api/modian/admin/taxfile/registration` | `GET` | Query | `{ items, total }` | Admin |
| `api/modian/admin/taxfile/registration` | `POST` | `RegistrationCreateDto` | `{ id }` | Admin |
| `api/modian/admin/taxfile/registration/:id` | `PUT` | `RegistrationUpdateDto` | `{ ok: true }` | Admin |
| `api/modian/admin/taxfile/registration/:id` | `DELETE` | ظ€ | `{ ok: true }` | Admin |

### 5.3 ظ‚ط¨ظˆط¶/ط§ظ†ط´ط¹ط§ط¨ط§طھ
| ظ…ط³غŒط± | ظ…طھط¯ | ظˆط±ظˆط¯غŒ | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ |
|---|---|---|---|---|
| `api/modian/admin/taxfile/bills` | `GET` | `QueryBillsDto` | `{ items, total }` | Admin |
| `api/modian/admin/taxfile/bills` | `POST` | `CreateUtilityBillDto` | `{ id }` | Admin |
| `api/modian/admin/taxfile/bills/:id` | `PUT` | `UpdateUtilityBillDto` | `{ ok: true }` | Admin |
| `api/modian/admin/taxfile/bills/:id` | `DELETE` | ظ€ | `{ ok: true }` | Admin |

### 5.4 ط´ط±ع©طھâ€Œظ‡ط§غŒ ظ…ط¹طھظ…ط¯
| ظ…ط³غŒط± | ظ…طھط¯ | ظˆط±ظˆط¯غŒ | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ |
|---|---|---|---|---|
| `api/modian/admin/taxfile/trusted` | `GET`  | Query (paging, search) | `{ items: TrustedCompany[], total }` | Admin |
| `api/modian/admin/taxfile/trusted` | `POST` | `TrustedCompanyCreateDto` | `{ id }` | Admin |
| `api/modian/admin/taxfile/trusted/:id` | `PUT`    | `TrustedCompanyUpdateDto` | `{ ok: true }` | Admin |
| `api/modian/admin/taxfile/trusted/:id` | `DELETE` | ظ€ | `{ ok: true }` | Admin |

```ts
// ظ…ط¯ظ„ ظ†ظ…ظˆظ†ظ‡
interface TrustedCompany {
  id: string;
  name: string;
  serviceType: string;
  expire: string; // طھط§ط±غŒط® ط§ظ†ظ‚ط¶ط§
}

interface TrustedCompanyCreateDto {
  name: string;
  serviceType: string;
  expire: string;
}

interface TrustedCompanyUpdateDto extends Partial<TrustedCompanyCreateDto> {}

---
```

### 5.5 ط´ظ†ط§ط³ظ‡ غŒع©طھط§ ط­ط§ظپط¸ظ‡ظ” ظ…ط§ظ„غŒط§طھغŒ (Memory UID)
| ظ…ط³غŒط± | ظ…طھط¯ | ظˆط±ظˆط¯غŒ | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ |
|---|---|---|---|---|
| `api/modian/admin/taxfile/memory-uid`              | `GET`  | `Query` (paging, search, filters) | `{ items: MemoryUidRow[], total }` | Admin |
| `api/modian/admin/taxfile/memory-uid/initialize`   | `POST` | `{ sendMethod: 'ظ…ظˆط¯غŒ' \| 'ط´ط±ع©طھâ€Œظ…ط¹طھظ…ط¯_ع©ظ„غŒط¯_ظ…ظˆط¯غŒ' \| 'ط´ط±ع©طھâ€Œظ…ط¹طھظ…ط¯_ع©ظ„غŒط¯_ظ…ط¹طھظ…ط¯' }` | `{ draftId }` | Admin |
| `api/modian/admin/taxfile/memory-uid/upload-public-key` | `POST` | `multipart/form-data` â†’ `file` | `{ draftId, keyId }` | Admin |
| `api/modian/admin/taxfile/memory-uid/assign-branches`   | `POST` | `{ draftId, branchIds: string[] }` | `{ ok: true }` | Admin |
| `api/modian/admin/taxfile/memory-uid/assign-pps`        | `POST` | `{ draftId, paymentToolIds: string[] }` | `{ ok: true }` | Admin |
| `api/modian/admin/taxfile/memory-uid/confirm`           | `POST` | `{ draftId }` | `{ ok: true, uid: string }` | Admin |
| `api/modian/admin/taxfile/memory-uid/refresh`           | `POST` | `{}` | `{ ok: true, refreshed: number }` | Admin |
| `api/modian/admin/taxfile/memory-uid/:uid`              | `GET`  | Path: `uid` | `{ uid, memberKey, sendMethod, status, branches[], paymentTools[] }` | Admin |
| `api/modian/admin/taxfile/memory-uid/deactivate-all`    | `POST` | `{}` | `{ ok: true, affected: number }` | Admin |
| `api/modian/admin/taxfile/memory-uid/:uid/deactivate`   | `POST` | Path: `uid` | `{ ok: true }` | Admin |

```ts
// ط±ط¯غŒظپ ط¬ط¯ظˆظ„ (ظ†ظ…ط§غŒط´ ظ„غŒط³طھ)
interface MemoryUidRow {
  uid?: string;           // ط´ظ†ط§ط³ظ‡ظ” غŒع©طھط§ (ط¯ط± طµظˆط±طھ طµط¯ظˆط±)
  memberKey?: string;     // ط´ظ†ط§ط³ظ‡ظ” ع©ظ„غŒط¯ ط§ط¹ط¶ط§
  trustedCompanyName?: string;
  sendMethod: 'ظ…ظˆط¯غŒ' | 'ط´ط±ع©طھâ€Œظ…ط¹طھظ…ط¯_ع©ظ„غŒط¯_ظ…ظˆط¯غŒ' | 'ط´ط±ع©طھâ€Œظ…ط¹طھظ…ط¯_ع©ظ„غŒط¯_ظ…ط¹طھظ…ط¯';
  status: 'ظپط¹ط§ظ„' | 'ط؛غŒط±ظپط¹ط§ظ„' | 'ط¯ط±_ط§ظ†طھط¸ط§ط±'; // ط¯ط± UI ط¨ط§ ط¯ط§غŒط±ظ‡ طھظˆط®ط§ظ„غŒ ط±ظ†ع¯غŒ ظ†ط´ط§ظ† ط¯ط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯ (ط³ط¨ط²/ظ‚ط±ظ…ط²)
}
```
### 5.5.1 غŒط§ط¯ط¯ط§ط´طھâ€Œظ‡ط§غŒ UI (state ظ…ط­ط¶ ط¨ط±ط§غŒ Frontend)
- **ط­ط§ظ„طھ ظˆغŒط±ط§غŒط´** ط§ط² ط·ط±غŒظ‚ `mode=edit` ط¯ط± ظ‡ظ…ط§ظ† ظ…ط³غŒط± Next.js ظپط¹ط§ظ„ ظ…غŒâ€Œط´ظˆط¯:
  `/simulators/modian/admin/taxfile/memory-uid/details?uid=:uid&mode=edit`
- ط¯ط± ط­ط§ظ„طھ ظˆغŒط±ط§غŒط´طŒ ظپظ‚ط· ط§ط³طھظ¾ط± آ«طھط¹غŒغŒظ† ظ†ط­ظˆظ‡ ط§ط±ط³ط§ظ„ طµظˆط±طھط­ط³ط§ط¨آ» ظ†ظ…ط§غŒط´ ظ…غŒâ€Œط´ظˆط¯ ظˆ ط¯ظˆ ع¯ط²غŒظ†ظ‡ظ” ط±ط§ط¯غŒظˆغŒغŒ ط¯ط± ط§ط®طھغŒط§ط± ع©ط§ط±ط¨ط± ط§ط³طھ:
  1) آ«طھظˆط³ط· ط´ط±ع©طھ ظ…ط¹طھظ…ط¯/ط³ط§ظ…ط§ظ†ظ‡â€Œظ‡ط§غŒ ط¯ظˆظ„طھغŒ â€” ط¨ط§ ع©ظ„غŒط¯ ظ…ظˆط¯غŒآ»
  2) آ«طھظˆط³ط· ط´ط±ع©طھ ظ…ط¹طھظ…ط¯/ط³ط§ظ…ط§ظ†ظ‡â€Œظ‡ط§غŒ ط¯ظˆظ„طھغŒ â€” ط¨ط§ ع©ظ„غŒط¯ ط´ط±ع©طھ ظ…ط¹طھظ…ط¯/ط³ط§ظ…ط§ظ†ظ‡â€Œظ‡ط§غŒ ط¯ظˆظ„طھغŒآ»
- ع©ظ„غŒط¯ظ‡ط§غŒ ظ¾ط§غŒغŒظ† طµظپط­ظ‡: **ظ‚ط¨ظ„غŒ/ط¨ط¹ط¯غŒ** (ع†ظ¾) ظˆ **ط§ظ†طµط±ط§ظپ** (ط±ط§ط³طھ). ط§غŒظ†â€Œظ‡ط§ طµط±ظپط§ظ‹ UI ظ‡ط³طھظ†ط¯ ظˆ API ط¬ط¯ط§ع¯ط§ظ†ظ‡â€Œط§غŒ ظ†ط¯ط§ط±ظ†ط¯ط› ط¯ط±غŒط§ظپطھ/ط«ط¨طھ ظ†ظ‡ط§غŒغŒ ظ‡ظ…ع†ظ†ط§ظ† ط§ط² ظ‡ظ…ط§ظ† `GET/POST`â€Œظ‡ط§غŒ ط¨ط®ط´ 5.5 ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ط¯.

### 5.6 ظ…ط¯غŒط±غŒطھ آ«ع©ط§ط±ط¨ط±ط§ظ† ظˆ ظ†ظ‚ط´â€Œظ‡ط§آ» (ظ…ظˆط¯غŒط§ظ†)
> ط§غŒظ† ط¨ط®ط´ ط¨ط§ ظˆغŒط²ط§ط±ط¯ ع†ظ†ط¯ظ…ط±ط­ظ„ظ‡â€Œط§غŒ ط¯ط± `/simulators/modian/roles/add` ظˆ طھط¨ ظ„غŒط³طھغŒ ط¯ط±
> `/simulators/modian/users-roles` ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡ ط§ط³طھ.

#### 5.6.1 ظ†ظ‚ط´â€Œظ‡ط§ (Roles)
| ظ…ط³غŒط± | ظ…طھط¯ | ظˆط±ظˆط¯غŒ | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ |
|---|---|---|---|---|
| `api/modian/admin/roles` | `GET` | Query: paging, search | `{ items: Role[], total }` | Admin |
| `api/modian/admin/roles` | `POST` | `RoleCreateDto` | `{ id }` | Admin |
| `api/modian/admin/roles/:id` | `GET` | Path: `id` | `{ role }` | Admin |
| `api/modian/admin/roles/:id` | `PUT` | `RoleUpdateDto` | `{ ok: true }` | Admin |
| `api/modian/admin/roles/:id` | `DELETE` | ظ€ | `{ ok: true }` | Admin |
| `api/modian/admin/roles/:id/permissions` | `PUT` | `PermissionsMapDto` | `{ ok: true }` | Admin |
| `api/modian/admin/roles/permissions-schema` | `GET` | ظ€ | `PermissionsSchema` | Admin |

**PermissionsSchema (ظ†ظ…ظˆظ†ظ‡ظ” ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ ط¨ط±ط§غŒ ظˆغŒط²ط§ط±ط¯)**
```ts
type PermissionLevel = 'NONE' | 'VIEW' | 'VIEW_OPERATE'; // آ«ظ‡غŒع†ع©ط¯ط§ظ… / ظپظ‚ط· ظ…ط´ط§ظ‡ط¯ظ‡ / ظ…ط´ط§ظ‡ط¯ظ‡ ظˆ ط¹ظ…ظ„غŒط§طھآ»
type PermissionKey =
  | 'taxfile.info'                // ط§ط·ظ„ط§ط¹ط§طھ ظ¾ط±ظˆظ†ط¯ظ‡ ظ…ط§ظ„غŒط§طھغŒ
  | 'membership'                  // ط¹ط¶ظˆغŒطھ
  | 'contracts.contracting'       // ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ
  | 'contracts.commission'        // ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„â€Œع©ط§ط±غŒ
  | 'requests.raiseSalesLimit'    // ط§ظپط²ط§غŒط´ ط­ط¯ ظ…ط¬ط§ط² ظپط±ظˆط´
  | 'requests.rejectReferred'     // ط±ط¯ ط³غŒط³طھظ…غŒ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ط§ط±ط¬ط§ط¹غŒ
  | 'tickets'                     // ظ…ط¯غŒط±غŒطھ ط´ع©ط§غŒط§طھ ظˆ طھط®ظ„ظپط§طھ
  | 'downloads'                   // ط¯ط§ط´ط¨ظˆط±ط¯ ظ…ط¯غŒط±غŒطھغŒ (ط¯ط§ظ†ظ„ظˆط¯ظ‡ط§)
  | 'invoices.sales'              // طµظˆط±طھâ€Œط­ط³ط§ط¨â€Œظ‡ط§غŒ ظپط±ظˆط´
  | 'invoices.purchases'          // طµظˆط±طھâ€Œط­ط³ط§ط¨â€Œظ‡ط§غŒ ط®ط±غŒط¯
  | 'users-and-roles';            // ط¯ط³طھط±ط³غŒ ط¨ظ‡ طµظپط­ظ‡ظ” ع©ط§ط±ط¨ط±ط§ظ† ظˆ ظ†ظ‚ط´â€Œظ‡ط§

interface PermissionsSchema {
  groups: Array<{
    title: string; // ظ…ط«ظ„ آ«ط¯ط³طھط±ط³غŒâ€Œظ‡ط§غŒ ظ¾ط±ظˆظ†ط¯ظ‡ ظ…ط§ظ„غŒط§طھغŒآ»طŒ آ«ط¯ط³طھط±ط³غŒâ€Œظ‡ط§غŒ طµظˆط±طھâ€Œط­ط³ط§ط¨â€Œظ‡ط§آ» â€¦
    items: Array<{ key: PermissionKey; label: string; help?: string }>;
  }>;
}
```

**DTOظ‡ط§**
```ts
interface RoleCreateDto { title: string; permissions: Partial<Record<PermissionKey, PermissionLevel>>; }
interface RoleUpdateDto extends Partial<RoleCreateDto> {}
interface PermissionsMapDto { permissions: Partial<Record<PermissionKey, PermissionLevel>>; }
```

#### 5.6.2 طھط®طµغŒطµ ع©ط§ط±ط¨ط± ط¨ظ‡ ظ†ظ‚ط´
| ظ…ط³غŒط± | ظ…طھط¯ | ظˆط±ظˆط¯غŒ | ط®ط±ظˆط¬غŒ | ع¯ط§ط±ط¯ |
|---|---|---|---|---|
| `api/modian/admin/roles/:id/users` | `GET` | Query: paging/search | `{ items: User[], total }` | Admin |
| `api/modian/admin/roles/:id/users` | `POST` | `{ userIds: string[] }` | `{ ok: true, added: number }` | Admin |
| `api/modian/admin/roles/:id/users/:userId` | `DELETE` | Path | `{ ok: true }` | Admin |

#### 5.6.3 ع©ط§ط±ط¨ط±ط§ظ† (ط¬ط³طھط¬ظˆ/ط§غŒط¬ط§ط¯)
| ظ…ط³غŒط± | ظ…طھط¯ | ظˆط±ظˆط¯غŒ | ط®ط±ظˆط¬غŒ |
|---|---|---|---|
| `api/modian/admin/users` | `GET` | Query: paging, `q` (ظ†ط§ظ…/ع©ط¯) | `{ items: User[], total }` |
| `api/modian/admin/users/lookup` | `GET` | `nationalId` \| `foreignId` | `{ exists: boolean, user?: User }` |
| `api/modian/admin/users` | `POST` | `UserCreateDto` | `{ id }` |

> **غŒط§ط¯ط¯ط§ط´طھâ€Œظ‡ط§غŒ UI (ظˆغŒط²ط§ط±ظ’ط¯)**
> - ط³ط·ط­ ط¯ط³طھط±ط³غŒ آ«users-and-rolesآ» ط¨ط§ ط§ظ†طھط®ط§ط¨ آ«ظ…ط´ط§ظ‡ط¯ظ‡ ظˆ ط¹ظ…ظ„غŒط§طھآ» ظ‡ط´ط¯ط§ط± طھظ…ط§ظ…â€Œط¹ط±ط¶غŒ ظ†ط´ط§ظ† ظ…غŒâ€Œط¯ظ‡ط¯.
> - ط¯ع©ظ…ظ‡â€Œظ‡ط§غŒ **ط§ظ†طھط®ط§ط¨ ظ‡ظ…ظ‡** (ط³ط¨ط²) ظˆ **ظ‡غŒع†ع©ط¯ط§ظ…** (ظ‚ط±ظ…ط²) ط¨ط± ط§ط³ط§ط³ ظˆط¶ط¹غŒطھ ط§ظ†طھط®ط§ط¨/ط¹ط¯ظ…â€Œط§ظ†طھط®ط§ط¨ ع†ع©â€Œط¨ط§ع©ط³â€Œظ‡ط§غŒ ط¬ط¯ظˆظ„ ظپط¹ط§ظ„/ط؛غŒط±ظپط¹ط§ظ„ ظ…غŒâ€Œط´ظˆظ†ط¯.
> - ظ…ط±ط­ظ„ظ‡ظ” ظ¾ط§غŒط§ظ†غŒطŒ ط¯ع©ظ…ظ‡ظ” **طھط£غŒغŒط¯ ظ†ظ‡ط§غŒغŒ** ط±ط§ ط¨ظ‡â€Œط¬ط§غŒ آ«ط¨ط¹ط¯غŒآ» ظ†ظ…ط§غŒط´ ظ…غŒâ€Œط¯ظ‡ط¯.


## 6) DTOظ‡ط§غŒ ع©ظ„غŒط¯غŒ (Simplified)
```ts
// Create Business + Registration Aggregate
interface RegistrationStep1Dto {
  tradeName: string;
  nationalId: string;
  trackingCode: string;
  entityName: string;
  taxpayerType: string;
  economicCode: string;
  registrationNo: string;
  activityStart: string; // ISO date
  workshopCode?: string;
  Contact: {
    province: string;
    city: string;
    county: string;
    postalCode: string;
    phone: string;
    mobile: string;
    address: string;
    fax?: string;
  };
}

// Registration Update (ظ…ط³غŒط±ظ‡ط§غŒ ظˆغŒط±ط§غŒط´ ظ¾ط³ ط§ط² ط§غŒط¬ط§ط¯)
interface RegistrationUpdateDto {
  tradeName?: string;
  nationalOrForeignOrLegalId?: string;
  registrationTrackingNumber?: string;
  entityName?: string;
  taxpayerType?: string; // ط­ظ‚غŒظ‚غŒ/ط­ظ‚ظˆظ‚غŒ/ط§طھط¨ط§ط¹...
  economicCode?: string;
  businessRegistrationNo?: string;
  activityStartDate?: string; // ISO
  legalInfo?: Partial<LegalInfoDto>;
}

// UtilityBill filters
interface QueryBillsDto { page?: number; pageSize?: number; type?: 'electricity'|'water'|'gas'; postalCode?: string; }
interface CreateUtilityBillDto { type: string; billIdentifier: string; share: number; postalCode: string; }
interface UpdateUtilityBillDto extends Partial<CreateUtilityBillDto> {}

// Admin Dashboard (example)
interface AdminDashboardOut { registrations: number; bills: number; notices: number; lastUpdated: string; }
```

> **غŒط§ط¯ط¯ط§ط´طھ ظ…ط¯ظ„â€Œظ‡ط§:** ظ†ط§ظ…â€Œظ‡ط§ ط¨ط§ Prisma ظ‡ظ…ط§ظ‡ظ†ع¯ ط§ظ†طھط®ط§ط¨ ط´ط¯ظ‡â€Œط§ظ†ط¯ (Registration/LegalInfo/UtilityBill/Notice/Simulator/SimulatorAccess/User). ظ‡ظ†ع¯ط§ظ… ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ظ†ظ‡ط§غŒغŒ ط¨ط§ `schema.prisma` ظ‡ظ…ع¯ط§ظ…â€Œط³ط§ط²غŒ ط´ظˆط¯.

---

## 7) Dependency Graph â€” طµظپط­ظ‡â€Œظ‡ط§غŒ ط¨ط­ط±ط§ظ†غŒ

### 7.1 `/simulators/modian/portal`
1) `GET utils/user-info` â†’ ط´ظ†ط§ط³ظ‡/ظ†ظ‚ط´/AccessLevel
2) `GET modian/portal/summary`
3) `GET modian/notices` (ط§ط®طھغŒط§ط±غŒ)
### 7.2 `/simulators/modian/admin/dashboard`
1) `GET api/modian/admin/dashboard`

### 7.3 `/simulators/modian/taxfile/registration`
1) `GET api/modian/admin/taxfile/registration`
2) `POST/PUT/DELETE api/modian/admin/taxfile/registration...`

### 7.4 `/simulators/modian/taxfile/bills`
1) `GET api/modian/admin/taxfile/bills`
2) `POST/PUT/DELETE api/modian/admin/taxfile/bills...`

### 7.5 `/simulators/modian/roles/add` (ظˆغŒط²ط§ط±ط¯ ظ†ظ‚ط´)
1) `GET api/modian/admin/roles/permissions-schema` â†’ طھط±ط³غŒظ… ط¨ظ„ظˆع©â€Œظ‡ط§غŒ ط¯ط³طھط±ط³غŒ ظˆ ط±ط§ط¯غŒظˆظ‡ط§
2) `POST api/modian/admin/roles` â†’ ط§غŒط¬ط§ط¯ ظ¾غŒط´â€Œظ†ظˆغŒط³ ظ†ظ‚ط´ (title + permissions)
3) `GET/POST api/modian/admin/users` â†’ ط¬ط³طھâ€Œظˆط¬ظˆ/ط§ظ†طھط®ط§ط¨ ع©ط§ط±ط¨ط±ط§ظ†ط› ط³ظ¾ط³
4) `POST api/modian/admin/roles/:id/users` â†’ طھط®طµغŒطµ ظ†ظ‡ط§غŒغŒ ع©ط§ط±ط¨ط±ط§ظ† ط¨ظ‡ ظ†ظ‚ط´

---

### 8) Dev Bypass (ظپظ‚ط· ط¨ط±ط§غŒ ط¯ظˆط±ظ‡ظ” ط¯ظˆâ€Œظ†ظپط±ظ‡ظ” ظ¾غŒط´ ط§ط² طھغŒظ…)
- ENV: `DEV_BYPASS_TOKEN` ظˆ `DEV_BYPASS_ENABLED=true` (ظپظ‚ط· ط¯ط± Development)
- ط´ط±ط·â€Œظ‡ط§: ط¯ط±ط®ظˆط§ط³طھ ط§ط² `127.0.0.1/::1`طŒ ظ‡ط¯ط± `X-Dev-Bypass: <token>`, ظ…ط³غŒط± ظ…ط¬ط§ط²: `auth/dev-login`.

#### 8.1) Admin Dev Access (Development Only)
ط¨ط±ط§غŒ طھط³طھâ€Œظ‡ط§غŒ ظ…ط­ظ„غŒطŒ ط§ظ…ع©ط§ظ† ط§ط±طھظ‚ط§غŒ ط³ط·ط­ ط¯ط³طھط±ط³غŒ ع©ط§ط±ط¨ط± ط¨ظ‡ ADMIN ط¨ط¯ظˆظ† ط¯غŒطھط§ط¨غŒط³ ظˆط§ظ‚ط¹غŒ ظپط±ط§ظ‡ظ… ط´ط¯ظ‡ ط§ط³طھ.
| ظ…ط³غŒط±
|ظ…طھط¯
|ظˆط±ظˆط¯غŒ
|ط®ط±ظˆط¬غŒ
|ظˆط¶ط¹غŒطھ
|
| ---|---|---|---|---|
| /admin/grant-admin-access
|POST
|{ "phone": "09..." }
|{ "success": true, "message": "..." }
|Active in Dev only

- ط®ط±ظˆط¬: طµط¯ظˆط± ظ†ط´ط³طھ طھط³طھغŒ ط¨ط§ ظ†ظ‚ط´ ط§ظ†طھط®ط§ط¨غŒ (`role=ADMIN` غŒط§ ط³ط·ط­ ط¯ط³طھط±ط³غŒ ظ…ط´ط®طµ) ظپظ‚ط· ط¨ط±ط§غŒ UI/QA.
- **ظ‡ط´ط¯ط§ط±:** ط¯ط± ظ…ط­ط¶ ط¢ظ…ط§ط¯ظ‡â€Œط´ط¯ظ† MVPطŒ ط§غŒظ† ع¯ط§ط±ط¯ ط¨ط§غŒط¯ ط­ط°ظپ/ط؛غŒط±ظپط¹ط§ظ„ ط´ظˆط¯.

---

## 9) ع†ع©â€Œظ„غŒط³طھ ظ¾ط°غŒط±ط´ ظ…ظˆط¯غŒط§ظ† (MVP)
- [ ] Portal ط¨ط¯ظˆظ† ط®ط·ط§ط› Summary/Notices ط¨ط§ط±ع¯غŒط±غŒ ظ…غŒâ€Œط´ظˆظ†ط¯.
- [ ] Registration (GET/PUT) ط¨ط±ط§غŒ ع©ط§ط±ط¨ط± ط¹ط§ط¯غŒ ع©ط§ط± ظ…غŒâ€Œع©ظ†ط¯.
- [ ] Bills (GET) ط¨ط±ط§غŒ ع©ط§ط±ط¨ط± ط¹ط§ط¯غŒ ظˆ CRUD ع©ط§ظ…ظ„ ط¨ط±ط§غŒ Admin.
- [ ] Admin Dashboard ط§ط¹ط¯ط§ط¯ طµط­غŒط­ ظ…غŒâ€Œط¯ظ‡ط¯.
- [ ] طھظ…ط§ظ… ط±ظˆطھâ€Œظ‡ط§ JWTâ€‘Protected (ط¨ظ‡â€Œط¬ط² login/refresh) ظˆ **Log/Audit** ظپط¹ط§ظ„ ط§ط³طھ.

## ط¨ط®ط´ غ² â€” UI-Only Pages (ط¨ط¯ظˆظ† API / ط­ط§ظ„طھ ط´ط¨غŒظ‡â€Œط³ط§ط²)

### ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ غ±غ´غ°غ´/غ°غ·/غ²غ² â€” Trusted Companies ظˆ طھط§ط±غŒط® ط´ظ…ط³غŒ (UI)

- ط¨ط± ط§ط³ط§ط³ ع¯ط²ط§ط±ط´ طھغŒظ…طŒ ظپغŒظ„طھط±ظ‡ط§غŒ طµظپط­ظ‡ظ” ط´ط±ع©طھâ€Œظ‡ط§غŒ ظ…ط¹طھظ…ط¯ ط¨ط§ **طھظ‚ظˆغŒظ… ط¬ظ„ط§ظ„غŒ ط§ط®طھطµط§طµغŒ** ظˆ ظپغŒظ„ط¯ طھط§ط±غŒط® ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ط´ط¯ظ†ط¯:
  - `src/components/modian/common/ModianJalaliDatePicker.tsx`
  - `src/components/modian/common/ModianJalaliDateField.tsx`
  - طµظپط­ظ‡ظ” ظ…طµط±ظپâ€Œع©ظ†ظ†ط¯ظ‡ ط¯ط± ظ‚ظ„ظ…ط±ظˆ `modian/taxfile/trusted-companies/page.tsx` (ظ…ط·ط§ط¨ظ‚ ط³ط§ط®طھط§ط± ظپط¹ظ„غŒ ظ¾ط±ظˆعکظ‡).

- **طھط؛غŒغŒط± API ط¯ط± ط§غŒظ† ظپط§ط² ع¯ط²ط§ط±ط´ ظ†ط´ط¯ظ‡ ط§ط³طھ**ط› ط§غŒظ† طھط؛غŒغŒط±ط§طھ ط¯ط± ط³ط·ط­ **UI/UX ظپغŒظ„طھط±ظ‡ط§ ظˆ ظˆط±ظˆط¯غŒ طھط§ط±غŒط®** ظ‡ط³طھظ†ط¯ ظˆ ط¨ط§ ط³ط§ط®طھط§ط± ظپط¹ظ„غŒ endpoints ظ‡ظ…ط®ظˆط§ظ†غŒ ط¯ط§ط±ظ†ط¯. ط¯ط± طµظˆط±طھ طھط؛غŒغŒط± ط¯ط± ع©ظ†طھط±ظ„ط±ظ‡ط§ (ظ…ط«ظ„ `simulator-modian/*`) ظ…ط³طھظ†ط¯ ط¬ط¯ط§ع¯ط§ظ†ظ‡ ط§ظپط²ظˆط¯ظ‡ ط®ظˆط§ظ‡ط¯ ط´ط¯. :contentReference[oaicite:10]{index=10}

#### ظ‚ط±ط§ط±ط¯ط§ط¯ ظ†ظ…ط§غŒط´/ط°ط®غŒط±ظ‡ طھط§ط±غŒط®
- **ظ†ظ…ط§غŒط´**: ط¬ظ„ط§ظ„غŒ ط¯ط± UI (JDN/Jalali utils ط§ط®طھطµط§طµغŒ ظ…ظˆط¯غŒط§ظ†).
- **ط°ط®غŒط±ظ‡/ط§ط±ط³ط§ظ„**: ISO8601 (ع¯ط±غŒظ†ظˆغŒع†) غŒط§ ظ‚ط§ظ„ط¨ ظ…ظˆط±ط¯ طھظˆط§ظپظ‚ ط³ط±ظˆغŒط³â€Œظ‡ط§ط› طھط¨ط¯غŒظ„ ط¯ط± ظ„ط§غŒظ‡ظ” lib/ع©ط§ظ…ظ¾ظˆظ†ظ†طھطŒ ظ†ظ‡ ط¯ط± ط¨ع©â€Œط§ظ†ط¯. (ظ…ط·ط§ط¨ظ‚ ط±ط§ظ‡ظ†ظ…ط§غŒ UX طھطµظˆغŒط¨â€Œط´ط¯ظ‡).

â€” ظ¾ط§غŒط§ظ† v0.1 â€”



---
### Update (2025-10-22 06:03)

#### Utilities
- `GET /api/csrf` â€” Issue CSRF token for logout (double-submit pattern).
- `POST /api/telemetry` â€” Lightweight telemetry endpoint.

#### UI â€” Shared Search Suite (Invoices ظˆ ط²غŒط±ظ…ط§عکظˆظ„â€Œظ‡ط§غŒ ظˆط§ط¨ط³طھظ‡)
- Components: `src/components/modian/common/search/{SearchByTaxId.tsx, SearchByFilters.tsx, InvoicesSearchHeader.tsx, index.ts}`
- ظ…طµط±ظپ ط¯ط± طµظپط­ط§طھ:
  - ظ†ط³ظ„ ظپط¹ظ„غŒ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§: `/simulators/modian/invoices/buy`, `/simulators/modian/invoices/sales`, `/simulators/modian/invoices/exports`
  - طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¨ظ„ ط§ط² غ±غ´غ°غ²/غ°غ³/غ²غ¶: `/simulators/modian/old-Invoices/buy`, `/simulators/modian/old-Invoices/sales`, `/simulators/modian/old-Invoices/exports`
  - ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯: `/simulators/modian/purchase-announcements/imports`, `/simulators/modian/purchase-announcements/bourse`
  - ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ (ظˆ ط¯ط± ط¢غŒظ†ط¯ظ‡ ط§ط­طھظ…ط§ظ„ط§ظ‹ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ): `/simulators/modian/contracts/contracting`
- ط³غŒط§ط³طھ ط·ط±ط§ط­غŒ API ط¬ط³طھط¬ظˆ:
  - ظ¾ط§ط±ط§ظ…طھط±ظ‡ط§غŒ Query ط¨ط±ط§غŒ ط¬ط³طھط¬ظˆ ط¨ط§غŒط¯ ط¨ط± ط§ط³ط§ط³ ظ‡ظ…غŒظ† Suite ط·ط±ط§ط­غŒ ط´ظˆظ†ط¯.
  - ظ¾غŒط´ ط§ط² ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ظ‡ط± endpoint ظ†ظ‡ط§غŒغŒطŒ غŒع© ط¬ط¯ظˆظ„ ظ†ع¯ط§ط´طھ ط¯ط± ظ‡ظ…غŒظ† ط³ظ†ط¯ ط§ط¶ط§ظپظ‡ ظ…غŒâ€Œط´ظˆط¯ ع©ظ‡ ظ†ط§ظ… ظپغŒظ„ط¯ظ‡ط§غŒ UI
  - **ظ…ط±ط¬ط¹ ظ†ع¯ط§ط´طھ ط±ط³ظ…غŒ:** آ§3.1 (ط¨ط®ط´ غ³) آ«Search Suite Mapping Table (Unified)آ» ع©ظ‡ ظ†ط§ظ… ظپغŒظ„ط¯ظ‡ط§غŒ UI
    (ظ…ط«ظ„ط§ظ‹ `role`, `status`, `subject`, `branchCode`, `invoiceDateFrom`, `invoiceDateTo` ظˆ â€¦)
    ط±ط§ ط¨ظ‡ ظ†ط§ظ… ظ¾ط§ط±ط§ظ…طھط±ظ‡ط§غŒ API ظ…طھظ†ط§ط¸ط± (ظ…ط«ظ„ `role`, `status`, `subject`, `branchCode`,
    `invoiceIssueDateFrom`, `invoiceIssueDateTo` ظˆ â€¦) ظˆطµظ„ ظ…غŒâ€Œع©ظ†ط¯.
- Sample page ط§ظˆظ„غŒظ‡ ط¨ط±ط§غŒ ط§طھطµط§ظ„: `/simulators/modian/invoices/buy` (ظپط¹ظ„ط§ظ‹ UI-onlyط› API mapping ط¯ط± ط­ط§ظ„ ط·ط±ط§ط­غŒ ط§ط³طھ).
## Update (2025-11-10 / 1404-08-19)

### UI â€” ظ‡ط¯ط± ط¬ط³طھط¬ظˆغŒ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ط®ط±غŒط¯ (Invoices / Buy)
- طھط¨â€Œط¨ظ†ط¯غŒ ع©ط§ظ…ظ„ آ«ط¬ط³طھط¬ظˆ ط¨ط§ ظپغŒظ„طھط± / ط¬ط³طھط¬ظˆ ط¨ط§ ط´ظ…ط§ط±ظ‡ ظ…ط§ظ„غŒط§طھغŒآ» ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ ظˆ ط¯ط± `InvoicesSearchHeader` ظ…طµط±ظپ ظ…غŒâ€Œط´ظˆط¯.
  (Shared Suite: `src/components/modian/common/search/*`)  [WIP طµظپط­ظ‡â€ŒغŒ ظ†ظ…ظˆظ†ظ‡: `/simulators/modian/invoices/buy`]. :contentReference[oaicite:12]{index=12}
- ظ…ظ†ط·ظ‚ ظ†ظˆط§ط± ط§ط¨ط²ط§ط±: ظˆظ‚طھغŒ آ«ظ¾غŒط´ط±ظپطھظ‡آ» ط¨ط³طھظ‡ ط§ط³طھطŒ ط¬ظپطھâ€Œط¯ع©ظ…ظ‡â€Œظ‡ط§ (ط¬ط³طھط¬ظˆ/ظپغŒظ„طھط± ظ¾غŒط´â€Œظپط±ط¶) ط¨ط§ظ„ط§ ظ†ط´ط§ظ† ط¯ط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆظ†ط¯ط› ظˆظ‚طھغŒ ط¨ط§ط² ط§ط³طھطŒ ظ‡ظ…ط§ظ† ط¬ظپطھâ€Œط¯ع©ظ…ظ‡â€Œظ‡ط§ ظپظ‚ط· ظ¾ط§غŒغŒظ† ظپط±ظ… ظ†ظ…ط§غŒط´ ط¯ط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯.
- آ«ط¯ظˆط±ظ‡ ط²ظ…ط§ظ†غŒ (ط³ط§ظ„/ظپطµظ„)آ»: ظ¾غŒط´â€Œظپط±ط¶ آ«ظپطµظ„ ط¬ط§ط±غŒ ط¬ظ„ط§ظ„غŒ / ط³ط§ظ„ ط¬ط§ط±غŒآ» ط§ط³طھ.

### Update (1404-09-02) â€” طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ آ«ظپط±ظˆط´ ط¯ط§ط®ظ„غŒآ» (UI)

- طµظپط­ط§طھ ط¬ط¯غŒط¯ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ ط¯ط± ظپط±ط§ظ†طھâ€Œط§ظ†ط¯ ط§ط¶ط§ظپظ‡ ط´ط¯ظ‡â€Œط§ظ†ط¯:
  - ظ„غŒط³طھ: `/simulators/modian/invoices/sales` â†’ `src/app/simulators/modian/invoices/sales/page.tsx`
  - ط¬ط²ط¦غŒط§طھ: `/simulators/modian/invoices/sales/detail` â†’ `src/app/simulators/modian/invoices/sales/detail/page.tsx`
- ظ‡ط± ط¯ظˆ طµظپط­ظ‡ ط¨ط± ط§ط³ط§ط³ ط§ط³ع©ظ„طھ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ ط³ط§ط®طھظ‡ ط´ط¯ظ‡â€Œط§ظ†ط¯ (ظ„غŒط³طھ ظˆ ط¬ط²ط¦غŒط§طھ) ظˆ ط´ط§ظ…ظ„ ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ظپغŒظ„طھط±ظ‡ط§طŒ ط¬ط¯ظˆظ„ ط§ظ‚ظ„ط§ظ… ظˆ ط¨ط®ط´ ظ¾ط±ط¯ط§ط®طھ ظ…ط·ط§ط¨ظ‚ UI ط³ط§ظ…ط§ظ†ظ‡ ط§طµظ„غŒ ظ‡ط³طھظ†ط¯.
- ط¯ط± ط§غŒظ† ظپط§ط² ظ‡غŒع† طھط؛غŒغŒط±غŒ ط¯ط± ط¨ع©â€Œط§ظ†ط¯/DB ع¯ط²ط§ط±ط´ ظ†ط´ط¯ظ‡ ط§ط³طھط› ظ†ع¯ط§ط´طھ ظ†ظ‡ط§غŒغŒ ط§غŒظ† طµظپط­ط§طھ ط¨ظ‡ endpoints ظپط±ظˆط´ (ط¯ط§ط®ظ„غŒ/طµط§ط¯ط±ط§طھغŒ) ظ‡ظ†ظˆط² **TBD** ط§ط³طھ ظˆ ط¯ط± ظ†ط³ط®ظ‡â€Œظ‡ط§غŒ ط¨ط¹ط¯غŒ ط§غŒظ† ط³ظ†ط¯ طھع©ظ…غŒظ„ ظ…غŒâ€Œط´ظˆط¯.
- ط¯ط± ع©ط§ظ…ظ¾ظˆظ†ظ†طھ ظ…ط´طھط±ع© `SearchByFilters` ظ…ظ†ط·ظ‚ طھط´ط®غŒطµ ظ…ط³غŒط± `/simulators/modian/invoices/sales` ط§ط¶ط§ظپظ‡ ط´ط¯ظ‡ طھط§:
  - ظ„غŒط¨ظ„â€Œظ‡ط§غŒ ط·ط±ظپ ظ…ظ‚ط§ط¨ظ„ ظپظ‚ط· ط¯ط± طµظپط­ظ‡ظ” ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ ط§ط² آ«ظپط±ظˆط´ظ†ط¯ظ‡آ» ط¨ظ‡ آ«ط®ط±غŒط¯ط§ط±آ» طھط؛غŒغŒط± ع©ظ†ظ†ط¯طŒ
  - ع¯ط²غŒظ†ظ‡ظ” آ«ط§ظ„ع¯ظˆغŒ ط¨ظˆط±ط³ ع©ط§ظ„ط§آ» ظپظ‚ط· ط¨ط±ط§غŒ ظ‡ظ…غŒظ† طµظپط­ظ‡ ط¨ظ‡â€Œطµظˆط±طھ ط´ط±ط·غŒ ط¯ط± ظپغŒظ„ط¯ ط§ظ„ع¯ظˆغŒ طµظˆط±طھط­ط³ط§ط¨ ظ†ظ…ط§غŒط´ ط¯ط§ط¯ظ‡ ط´ظˆط¯.
- ظˆط¶ط¹غŒطھ ع©غŒظپغŒطھ/CI ط§غŒظ† ظپغŒع†ط±:
  - `npm run build` ظˆ `npm run lint` ط±ظˆغŒ ط¨ط±ظ†ع† ظپغŒع†ط± ط³ط¨ط² ظ‡ط³طھظ†ط¯ط›
  - `npm run lint:ci` (ط¨ط§ `ESLINT_STRICT=1`) ظ‡ظ†ظˆط² ط¨ظ‡â€Œط¹ظ„طھ ط®ط·ط§ظ‡ط§غŒ ط³ط±ط§ط³ط±غŒ ظ‚ط¯غŒظ…غŒ ط¯ط± ظ…ط§عکظˆظ„â€Œظ‡ط§غŒ ط¯غŒع¯ط± (landingطŒ adminطŒ insuranceطŒ salary-taxطŒ taxfile ظˆ â€¦) ظ‚ط±ظ…ط² ط§ط³طھط› ط§غŒظ† ط®ط·ط§ظ‡ط§ ظ…ط±ط¨ظˆط· ط¨ظ‡ ط§غŒظ† ظپغŒع†ط± ظ†غŒط³طھظ†ط¯ ظˆ ط¯ط± ط·ط±ط­ ط¬ط¯ط§ع¯ط§ظ†ظ‡ظ” ط¨ظ‡ط¨ظˆط¯ ESLint ط±ظپط¹ ط®ظˆط§ظ‡ظ†ط¯ ط´ط¯.ط°ط®غŒط±ظ‡â€Œط´ط¯ظ‡ `YYYY-Q{1..4}` ط§ط³طھ.

### ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ غ±غ´غ°غ´/غ°غ¹/غ°غ· â€” طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¨ظ„ ط§ط² غ±غ´غ°غ²/غ°غ³/غ²غ¶ (UI ظپظ‚ط·)

**ط¯ط§ظ…ظ†ظ‡ظ” ظپغŒع†ط± (ظ…ط§عکظˆظ„ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ â€“ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¯غŒظ…غŒ)**

- ط§ط¶ط§ظپظ‡â€Œط´ط¯ظ† ع¯ط±ظˆظ‡ ظ…ظ†ظˆغŒ ط¬ط¯غŒط¯ آ«طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¨ظ„ ط§ط² غ±غ´غ°غ²/غ°غ³/غ²غ¶آ» ط¯ط± ط³ط§غŒط¯ط¨ط§ط± ظ…ظˆط¯غŒط§ظ†طŒ ط¨ط§ ط²غŒط±ظ…ظ†ظˆغŒ آ«ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒآ».
- ظ…ط³غŒط± ظپط±ط§ظ†طھâ€Œط§ظ†ط¯:
  - طµظپط­ظ‡: `/simulators/modian/old-Invoices/buy`
  - ظپط§غŒظ„: `src/app/simulators/modian/old-Invoices/buy/page.tsx`
  - ظ‡ط¯ظپ: ط´ط¨غŒظ‡â€Œط³ط§ط²غŒ UI ط¬ط³طھط¬ظˆ ظˆ ظ…ط±ظˆط± طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ط®ط±غŒط¯ ظ‚ط¨ظ„ ط§ط² طھط§ط±غŒط® غ±غ´غ°غ²/غ°غ³/غ²غ¶ ط¯ط± ظ…ط­غŒط· ط¢ظ…ظˆط²ط´غŒ (ط¨ط¯ظˆظ† ط§طھطµط§ظ„ ط¨ظ‡ ط¨ع©â€Œط§ظ†ط¯ ظˆط§ظ‚ط¹غŒ).

**ظˆط¶ط¹غŒطھ ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ UI**

- ط§ط³طھظپط§ط¯ظ‡ظ” ظ…ط¬ط¯ط¯ ط§ط² ط§ط³ع©ظ„طھ طµظپط­ط§طھ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ:
  - ط§ط³طھظپط§ط¯ظ‡ ط§ط² ظ‡ظ…ط§ظ† ظ‡ط¯ط±/ط³ط§ط¨â€Œظ‡ط¯ط±طŒ ط¬ط¯ظˆظ„طŒ ظˆ ظ†ظˆط§ط± ط§ع©ط´ظ† ظ¾ط§غŒغŒظ† طµظپط­ظ‡طŒ ط¨ط§ ط¹ظ†ظˆط§ظ†â€Œظ‡ط§ ظˆ ط¨ط±ظگط¯ع©ط±ط§ظ…ط¨ ظ…ط·ط§ط¨ظ‚ ط§ط³ع©ط±غŒظ† ط±ط³ظ…غŒ ط³ط§ظ…ط§ظ†ظ‡.
- ط³ط§ط¯ظ‡â€Œط³ط§ط²غŒ ظ†ظˆط§ط± ط¬ط³طھط¬ظˆ ط¨ط±ط§غŒ ط§غŒظ† طµظپط­ظ‡:
  - ط­ط°ظپ طھط¨â€Œظ‡ط§ ظˆ ظ†ظ…ط§غŒط´ ظ†ظˆط§ط± ط¬ط³طھط¬ظˆ ط¨ظ‡â€Œطµظˆط±طھ غŒع© آ«ع©ط§ط±طھ ط³ظپغŒط¯آ» غŒع©â€Œطھع©ظ‡ ط¯ط± ط¨ط§ظ„ط§.
  - ظ‚ط±ط§ط± ط¯ط§ط¯ظ† ط³ظ‡ ظپغŒظ„ط¯ ط®ظ„ط§طµظ‡ ط¯ط± ط³ظ…طھ ط±ط§ط³طھ ظ‡ظ…ط§ظ† ع©ط§ط±طھطŒ ظˆ ع†ط³ط¨ط§ظ†ط¯ظ† ط¯ع©ظ…ظ‡â€Œظ‡ط§غŒ آ«ط¬ط³طھط¬ظˆآ» ظˆ آ«ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡آ» ط¯ط± ظ‡ظ…ط§ظ† ط±ط¯غŒظپ.
  - ط³ظ‡ ظپغŒظ„ط¯ ط®ظ„ط§طµظ‡ ط¯ط± ط§غŒظ† طµظپط­ظ‡ **ظپظ‚ط· ظ†ظ…ط§غŒط´غŒ** ظ‡ط³طھظ†ط¯ ظˆ ط¯ط± ط­ط§ظ„ ط­ط§ط¶ط± ط؛غŒط±ظ‚ط§ط¨ظ„ ظˆغŒط±ط§غŒط´/طھط¹ط§ظ…ظ„â€Œط§ظ†ط¯.
- طھظپط§ظˆطھâ€Œظ‡ط§غŒ ط§ط®طھطµط§طµغŒ ط¯ط± `SearchByFilters`:
  - طھط´ط®غŒطµ طµظپط­ظ‡ظ” ظ‚ط¯غŒظ…غŒ ط¨ط§ ظپظ„ع¯ ط¯ط§ط®ظ„غŒ (ظ…ط«ظ„ط§ظ‹ `isOldInvoicesPage`) ظˆ ط§ط¹ظ…ط§ظ„ طھط؛غŒغŒط±ط§طھ ظپظ‚ط· ط¨ط±ط§غŒ ظ…ط³غŒط±ظ‡ط§غŒ `old-Invoices/*`.
  - ع†غŒظ†ط´ ظˆغŒعکظ‡ظ” ط±ط¯غŒظپ ط®ظ„ط§طµظ‡ ظˆ ط¯ع©ظ…ظ‡â€Œظ‡ط§ ط¨ط±ط§غŒ old-Invoices (ط³ظ‡ ظپغŒظ„ط¯ ط³ظ…طھ ط±ط§ط³طھ + ط¯ظˆ ط¯ع©ظ…ظ‡ظ” ط¬ط³طھط¬ظˆ ط¯ط± ظ‡ظ…ط§ظ† ط±ط¯غŒظپ).
  - ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ظ¾ظ†ظ„ آ«ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡آ» ط¨ط§:
    - طھغŒطھط± ط±ط§ط³طھâ€Œع†غŒظ†طŒ
    - ط¯ع©ظ…ظ‡ظ” آ«ط¨ط³طھظ†آ» ط¯ط± ط³ظ…طھ ع†ظ¾ ظ‡ط¯ط±طŒ
    - ط®ط· ط³ط¨ط² ط²غŒط± طھغŒطھط±طŒ
    - ظˆ ط¯ع©ظ…ظ‡ظ” ط§طµظ„غŒ ط¬ط³طھط¬ظˆ ط¯ط± ظ¾ط§غŒغŒظ† ظپط±ظ…طŒ ظپظ‚ط· ط¯ط± ط­ط§ظ„طھ old-Invoices.
  - ظ‡ظ…ط§ظ‡ظ†ع¯غŒ ط¸ط§ظ‡ط±غŒ ط¯ع©ظ…ظ‡ظ” آ«ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡آ» ط¨ط§ ط³ط§ظ…ط§ظ†ظ‡ظ” ط§طµظ„غŒ (ط¢غŒع©ظˆظ† ع†ط±ط®â€Œط¯ظ†ط¯ظ‡ ط¨ط¯ظˆظ† ط¨ظˆط±ط¯ط±طŒ ط±ظ†ع¯ ظˆ ظپط§طµظ„ظ‡â€Œظ‡ط§ ظ…ط·ط§ط¨ظ‚ ط§ط³ع©ط±غŒظ† ظ…ط±ط¬ط¹).
- ظ¾غŒع©ط±ط¨ظ†ط¯غŒ ظپغŒظ„ط¯ظ‡ط§غŒ ظپغŒظ„طھط± ط¯ط± ط§غŒظ† طµظپط­ظ‡:
  - ط­ط°ظپ ط¨ط±ط®غŒ ظپغŒظ„ط¯ظ‡ط§ ظپظ‚ط· ط¨ط±ط§غŒ old-Invoices (ط§ط² ط¬ظ…ظ„ظ‡: آ«طھط§ط±غŒط® ط¯ط±ط¬ ط¯ط± ع©ط§ط±ظ¾ظˆط´ظ‡آ»طŒ آ«ظ…ط¬ظ…ظˆط¹ طµظˆط±طھط­ط³ط§ط¨آ»طŒ آ«ط´ظ…ط§ط±ظ‡/ط´ظ†ط§ط³ظ‡ ط§ظ‚طھطµط§ط¯غŒآ»طŒ آ«ط´ظ†ط§ط³ظ‡ ظ‡ظˆغŒطھغŒآ»طŒ آ«ظ†ط§ظ…/ظ†ط§ظ… طھط¬ط§ط±غŒ ظپط±ظˆط´ظ†ط¯ظ‡آ» ظˆ ع†ع©â€Œط¨ط§ع©ط³ آ«ظپظ‚ط· ظ…ظˆط§ط±ط¯ ط¯ط§ط±ط§غŒ ط§ظ‚ط¯ط§ظ…آ»).
  - ع†غŒط¯ظ…ط§ظ† ظپغŒظ„ط¯ظ‡ط§غŒ ط¨ط§ظ‚غŒâ€Œظ…ط§ظ†ط¯ظ‡ ظ…ط·ط§ط¨ظ‚ ط§ط³ع©ط±غŒظ†:
    - ط±ط¯غŒظپ ط§ظˆظ„: آ«ع©ط¯ ط´ط¹ط¨ظ‡طŒ ظ…ظˆط¶ظˆط¹ طµظˆط±طھط­ط³ط§ط¨طŒ ط§ظ„ع¯ظˆغŒ طµظˆط±طھط­ط³ط§ط¨طŒ ظˆط¶ط¹غŒطھ ط­ط¯ ظ…ط¬ط§ط²آ»
    - ط±ط¯غŒظپ ط¯ظˆظ…: آ«طھط§ط±غŒط® طµط¯ظˆط± طµظˆط±طھط­ط³ط§ط¨ ط§ط² / طھط§آ».

### ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ غ±غ´غ°غ´/غ°غ¹/غ°غ¹ â€” old-Invoices (ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒطŒ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒطŒ ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒ) â€“ UI

**ط¯ط§ظ…ظ†ظ‡ظ” ظپغŒع†ط±**

- طھع©ظ…غŒظ„ طµظپط­ظ‡ظ” ظ„غŒط³طھ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ ظ‚ط¯غŒظ…غŒ:
  - ظ…ط³غŒط±: `/simulators/modian/old-Invoices/buy`
  - ظپط§غŒظ„: `src/app/simulators/modian/old-Invoices/buy/page.tsx`
  - ظ‡ظ…â€Œطھط±ط§ط²ط³ط§ط²غŒ ط³ط§ط®طھط§ط± ط¬ط¯ظˆظ„ ط¨ط§ ط³ط§ظ…ط§ظ†ظ‡ ط§طµظ„غŒ (ط³طھظˆظ†â€Œظ‡ط§طŒ طھط±طھغŒط¨طŒ ط­ط§ظ„طھ ظ¾غŒط´â€Œظپط±ط¶ ظ†ظ…ط§غŒط´/ط¹ط¯ظ…â€Œظ†ظ…ط§غŒط´)طŒ
    ط­ط°ظپ ط¯ع©ظ…ظ‡â€Œظ‡ط§غŒ ط§ط¶ط§ظپغŒ ط¨ط§ظ„ط§غŒ ط¬ط¯ظˆظ„ (طھط£غŒغŒط¯طŒ ط±ط¯طŒ ط§ظ†طھظ‚ط§ظ„ طµظˆط±طھط­ط³ط§ط¨) ظˆ ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ط³طھظˆظ† ط«ط§ط¨طھ آ«ط¬ط²ط¦غŒط§طھآ» ط¨ط±ط§غŒ ظ…ط³غŒط±غŒط§ط¨غŒ ط¨ظ‡ طµظپط­ظ‡ظ” ط¬ط²ط¦غŒط§طھ.
- طµظپط­ط§طھ ط¬ط¯غŒط¯/طھع©ظ…غŒظ„â€Œط´ط¯ظ‡ ط¯ط± ظ…ط§عکظˆظ„ old-Invoices:
  - ط¬ط²ط¦غŒط§طھ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ ظ‚ط¯غŒظ…غŒ:
    - ظ…ط³غŒط±: `/simulators/modian/old-Invoices/buy/detail`
    - ظپط§غŒظ„: `src/app/simulators/modian/old-Invoices/buy/detail/page.tsx`
    - ط´ط§ظ…ظ„ ط³ع©ط´ظ†â€Œظ‡ط§غŒ ظ…ط´ط®طµط§طھ طµظˆط±طھط­ط³ط§ط¨طŒ ظپط±ظˆط´ظ†ط¯ظ‡طŒ ط®ط±غŒط¯ط§ط±طŒ ط§ظ‚ظ„ط§ظ…طŒ ط¬ظ…ط¹ ع©ظ„ ظˆ ط§ط·ظ„ط§ط¹ط§طھ طھع©ظ…غŒظ„غŒطŒ ط¨ظ‡â€Œظ‡ظ…ط±ط§ظ‡ ظ…ط¯ط§ظ„ ط¬ط²ط¦غŒط§طھ ظ¾ط±ط¯ط§ط®طھ.
  - ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ ظ‚ط¯غŒظ…غŒ:
    - ظ„غŒط³طھ: `/simulators/modian/old-Invoices/sales` â†’ `src/app/simulators/modian/old-Invoices/sales/page.tsx`
    - ط¬ط²ط¦غŒط§طھ: `/simulators/modian/old-Invoices/sales/detail` â†’ `src/app/simulators/modian/old-Invoices/sales/detail/page.tsx`
    - ط§ط³ع©ظ„طھ ظˆ ط±ظپطھط§ط± ط§ط² ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ ع©ظ¾غŒ ظˆ ظ…طھظ†â€Œظ‡ط§/ظ…ط³غŒط±غŒط§ط¨غŒ ط¨ط§ ط³ظ†ط§ط±غŒظˆغŒ آ«ظپط±ظˆط´ ط¯ط§ط®ظ„غŒآ» طھط·ط¨غŒظ‚ ط¯ط§ط¯ظ‡ ط´ط¯ظ‡â€Œط§ظ†ط¯ط›
      ط³طھظˆظ† ط«ط§ط¨طھ آ«ط¬ط²ط¦غŒط§طھآ» ط¯ط± ظ„غŒط³طھ ظپط¹ط§ظ„ ط§ط³طھ ظˆ ط¨ظ‡ طµظپط­ظ‡ظ” ط¬ط²ط¦غŒط§طھ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ ظ„غŒظ†ع© ظ…غŒâ€Œط¯ظ‡ط¯.
  - ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒ ظ‚ط¯غŒظ…غŒ:
    - ظ„غŒط³طھ: `/simulators/modian/old-Invoices/exports` â†’ `src/app/simulators/modian/old-Invoices/exports/page.tsx`
    - ط¬ط²ط¦غŒط§طھ: `/simulators/modian/old-Invoices/exports/detail` â†’ `src/app/simulators/modian/old-Invoices/exports/detail/page.tsx`

**طھط؛غŒغŒط±ط§طھ ظ…ظ‡ظ… UI ط¯ط± ظ„غŒط³طھâ€Œظ‡ط§ ظˆ ط¬ط²ط¦غŒط§طھ**

- ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ â€“ ظ„غŒط³طھ:
  - ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ط³طھظˆظ† ط«ط§ط¨طھ آ«ط¬ط²ط¦غŒط§طھآ» ط¯ط± ط§ظ†طھظ‡ط§غŒ ط¬ط¯ظˆظ„ ظˆ ظ…ط³غŒط±غŒط§ط¨غŒ ط¨ظ‡ `/simulators/modian/old-Invoices/buy/detail`.
- ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ â€“ ظ¾ظ†ظ„ ط¬ط³طھط¬ظˆ:
  - ط§ط¶ط§ظپظ‡â€Œط´ط¯ظ† ط²غŒط±ظ…ظ†ظˆظ‡ط§غŒ ط«ط§ط¨طھ آ«ط³ط§ظ„ ظ…ط§ظ„غŒط§طھغŒآ» (غ±غ´غ°غ° طھط§ غ±غ´غ°غ³) ظˆ آ«ط¯ظˆط±ظ‡ ظ…ط§ظ„غŒط§طھغŒآ» (ط¨ظ‡ط§ط±طŒ طھط§ط¨ط³طھط§ظ†طŒ ظ¾ط§غŒغŒط²طŒ ط²ظ…ط³طھط§ظ†) ط¨ط¯ظˆظ† ع†ع©â€Œط¨ط§ع©ط³.
  - ط¯ط± ط­ط§ظ„طھ ط¨ط§ط²ط¨ظˆط¯ظ† ظ¾ظ†ظ„ ظ¾غŒط´ط±ظپطھظ‡طŒ ط¯ع©ظ…ظ‡ظ” آ«ط¬ط³طھط¬ظˆغŒ ظ¾غŒط´ط±ظپطھظ‡آ» ط¨ظ‡ آ«ط­ط°ظپ ظپغŒظ„طھط±آ» طھط¨ط¯غŒظ„ ظ…غŒâ€Œط´ظˆط¯
    (ط§ط³طھغŒطھ ط±ظ†ع¯غŒ ط®ط§ع©ط³طھط±غŒ ط¯ط± ط­ط§ظ„طھ ط§ظˆظ„غŒظ‡ ظˆ ظ…طھظ†/ط¢غŒع©ظˆظ† ظ‚ط±ظ…ط² ط¨ط§ ظ¾ط³â€Œط²ظ…غŒظ†ظ‡ظ” ط³ظپغŒط¯ ظ‡ظ†ع¯ط§ظ… ظپط¹ط§ظ„ ط¨ظˆط¯ظ†) ظˆ ط¨ط§ ع©ظ„غŒع© طھظ…ط§ظ… ظپغŒظ„طھط±ظ‡ط§ ظ¾ط§ع© ظ…غŒâ€Œط´ظˆظ†ط¯.
- ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ â€“ ظ„غŒط³طھ ظˆ ط¬ط²ط¦غŒط§طھ:
  - ط³ط§ط®طھط§ط± ط¬ط¯ظˆظ„ ظˆ ط¬ط²ط¦غŒط§طھ ط¨ط± ط§ط³ط§ط³ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒطŒ ط¨ط§ ظ…طھظˆظ† ظˆ ط¹ظ†ظˆط§ظ†â€Œظ‡ط§غŒ ظ…طھظ†ط§ط³ط¨ ط¨ط§ آ«ظپط±ظˆط´ ط¯ط§ط®ظ„غŒآ».
  - ط³طھظˆظ† آ«ط¬ط²ط¦غŒط§طھآ» ط¯ط± ظ„غŒط³طھ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ ظپط¹ط§ظ„ ظˆ ط¨ظ‡ `/simulators/modian/old-Invoices/sales/detail` ظ…طھطµظ„ ط§ط³طھ.
- ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒ â€“ ظ„غŒط³طھ:
  - ط­ط°ظپ ظپغŒظ„ط¯ظ‡ط§غŒ آ«ظ†ظˆط¹ طµظˆط±طھط­ط³ط§ط¨آ» ظˆ آ«ط§ظ„ع¯ظˆغŒ طµظˆط±طھط­ط³ط§ط¨آ» ط§ط² ظپغŒظ„طھط±ظ‡ط§غŒ ط³ط§ط¯ظ‡ظ” ط¨ط§ظ„ط§غŒ طµظپط­ظ‡.
  - ط¯ط± ط¬ط³طھط¬ظˆغŒ ظ¾غŒط´ط±ظپطھظ‡:
    - طھط؛غŒغŒط± ظ„غŒط¨ظ„ آ«ظˆط¶ط¹غŒطھ طµظˆط±طھط­ط³ط§ط¨آ» ط¨ظ‡ آ«ظˆط¶ط¹غŒطھ طھط·ط§ط¨ظ‚آ»طŒ
    - ط؛غŒط±ظپط¹ط§ظ„â€Œط¨ظˆط¯ظ† ط§غŒظ† ظپغŒظ„ط¯ (read-only) ظˆ ط§ط¹ظ…ط§ظ„ ط§ط³طھط§غŒظ„ ط¨ظˆط±ط¯ط± ط®ط·â€Œع†غŒظ† ط·ط¨ظ‚ ط³ط§ظ…ط§ظ†ظ‡ظ” ط§طµظ„غŒ.
  - ط¨ط§ط²طھط¹ط±غŒظپ ظ…ط¬ظ…ظˆط¹ظ‡ ط³طھظˆظ†â€Œظ‡ط§غŒ ط¬ط¯ظˆظ„ طµط§ط¯ط±ط§طھغŒ ط¨ط±ط§ط³ط§ط³ ط³ظ†ط§ط±غŒظˆغŒ طµط§ط¯ط±ط§طھ (ط´ظ…ط§ط±ظ‡ ظ…ط§ظ„غŒط§طھغŒطŒ ظ…ط¬ظ…ظˆط¹ طµظˆط±طھط­ط³ط§ط¨طŒ ظ…ط¬ظ…ظˆط¹ ظ…ط§ظ„غŒط§طھ ط¨ط± ط§ط±ط²ط´ ط§ظپط²ظˆط¯ظ‡طŒ
    ظ†ظ‚ط´ ظ…ط¤ط¯غŒطŒ ط´ظ…ط§ط±ظ‡ ظ‚ط±ط§ط±ط¯ط§ط¯ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒطŒ ظˆط¶ط¹غŒطھ ظˆط§ع©ظ†ط´ ط¢ظ…ط±طŒ ط´ظ…ط§ط±ظ‡ ط§ظ‚طھطµط§ط¯غŒ ط¢ظ…ط±طŒ طھط§ط±غŒط® طµط¯ظˆط±طŒ ظˆط¶ط¹غŒطھ طھط·ط§ط¨ظ‚طŒ ظˆط¶ط¹غŒطھ طµظˆط±طھط­ط³ط§ط¨طŒ
    ظ…ظˆط¶ظˆط¹ طµظˆط±طھط­ط³ط§ط¨طŒ ع©ط¯ ط´ط¹ط¨ظ‡ ظپط±ظˆط´ظ†ط¯ظ‡طŒ ط³ط§ظ„ ظ…ط§ظ„غŒط§طھغŒطŒ طھط§ط±غŒط®/ط´ظ…ط§ط±ظ‡ ع©ظˆطھط§عک ظˆ â€¦) ظˆ طھظ†ط¸غŒظ… ط­ط§ظ„طھ ظ¾غŒط´â€Œظپط±ط¶:
    ظپظ‚ط· ط³طھظˆظ†â€Œظ‡ط§غŒ آ«ظ…ط¬ظ…ظˆط¹ طµظˆط±طھط­ط³ط§ط¨آ»طŒ آ«ظ…ط¬ظ…ظˆط¹ ظ…ط§ظ„غŒط§طھ ط¨ط± ط§ط±ط²ط´ ط§ظپط²ظˆط¯ظ‡آ»طŒ آ«طھط§ط±غŒط® طµط¯ظˆط± طµظˆط±طھط­ط³ط§ط¨آ» ظˆ آ«ظˆط¶ط¹غŒطھ طھط·ط§ط¨ظ‚آ» ط±ظˆط´ظ† ظ‡ط³طھظ†ط¯.
  - ظپط¹ط§ظ„â€Œط³ط§ط²غŒ ط³طھظˆظ† ط«ط§ط¨طھ آ«ط¬ط²ط¦غŒط§طھآ» ظˆ ظ…ط³غŒط±غŒط§ط¨غŒ ظ‡ط± ط±ط¯غŒظپ ط¨ظ‡ `/simulators/modian/old-Invoices/exports/detail`.
- ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒ â€“ ط¬ط²ط¦غŒط§طھ:
  - ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ طµظپط­ظ‡ظ” ط¬ط²ط¦غŒط§طھ ط¨ط±ط§ط³ط§ط³ ط¬ط²ط¦غŒط§طھ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ ط¨ط§ طھط·ط¨غŒظ‚ ط¹ظ†ظˆط§ظ†â€Œظ‡ط§ ظˆ ط§ط³طھط§غŒظ„.
  - ط­ط°ظپ ط³ع©ط´ظ†â€Œظ‡ط§غŒ آ«ظ…ط´ط®طµط§طھ ط®ط±غŒط¯ط§ط±آ»طŒ آ«ط§ط·ظ„ط§ط¹ط§طھ ظ¾ط±ط¯ط§ط®طھآ» ظˆ آ«ط¬ط¯ظˆظ„ ظ¾ط±ط¯ط§ط®طھآ» ط·ط¨ظ‚ ط§ط³ع©ط±غŒظ† ظ…ط±ط¬ط¹.
  - ط¨ط§ط²ط·ط±ط§ط­غŒ ع©ط§ظ…ظ„ طھظ†ط¸غŒظ…ط§طھ ط³طھظˆظ†â€Œظ‡ط§غŒ ط¬ط¯ظˆظ„ ط§ظ‚ظ„ط§ظ… ظ…طھظ†ط§ط³ط¨ ط¨ط§ ط³ظ†ط§ط±غŒظˆغŒ طµط§ط¯ط±ط§طھ
    (ظ†ط±ط®/ظ…ط¨ظ„ط؛ ظ…ط§ظ„غŒط§طھطŒ ط³ط§غŒط± ظˆط¬ظˆظ‡ ظ‚ط§ظ†ظˆظ†غŒطŒ ط´ظ…ط§ط±ظ‡ ظ‚ط±ط§ط±ط¯ط§ط¯ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒطŒ ظˆط¶ط¹غŒطھ ظˆط§ع©ظ†ط´ ط¢ظ…ط± ظˆ â€¦) ظˆ طھط¹ط±غŒظپ ظ¾غŒط´â€Œظپط±ط¶â€Œظ‡ط§:
    ط³طھظˆظ†â€Œظ‡ط§غŒ ط¹ظ„ط§ظ…طھâ€Œط®ظˆط±ط¯ظ‡ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† آ«(ظ¾غŒط´ظپط±ط¶)آ» ط±ظˆط´ظ†طŒ ط¨ظ‚غŒظ‡ ط®ط§ظ…ظˆط´.
  - ط±ظپط¹ ط¨ط§ع¯â€Œظ‡ط§غŒ ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§: ط§ط¶ط§ظپظ‡â€Œع©ط±ط¯ظ† ط³طھظˆظ† آ«ط´ط±ط­آ» ط¨ظ‡ ظ†ظˆط§ط± ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§ ظˆ ط­ط°ظپ ط¬ظپطھ طھع©ط±ط§ط±غŒ
    آ«ظ†ط±ط® ط³ط§غŒط± ظˆط¬ظˆظ‡ ظ‚ط§ظ†ظˆظ†غŒ / ظ…ط¨ظ„ط؛ ط³ط§غŒط± ظˆط¬ظˆظ‡ ظ‚ط§ظ†ظˆظ†غŒآ».

**ظˆط¶ط¹غŒطھ ط¨ع©â€Œط§ظ†ط¯ / API ظˆ ط±غŒط³ع©â€Œظ‡ط§**

- ط¯ط± ط§غŒظ† ظپط§ط² ظ‡ظ†ظˆط² endpoint ط§ط®طھطµط§طµغŒ ط¨ط±ط§غŒ old-Invoices طھط¹ط±غŒظپ ظ†ط´ط¯ظ‡ ظˆ طھظ…ط§ظ… طµظپط­ط§طھ ظپظˆظ‚ ط¨ط§ ط¯ط§ط¯ظ‡ظ” ظ†ظ…ط§غŒط´غŒ/ظ…ط§ع© ع©ط§ط± ظ…غŒâ€Œع©ظ†ظ†ط¯ط›
  طھط؛غŒغŒط±غŒ ط¯ط± ظ„غŒط³طھ endpoints ط¨ع©â€Œط§ظ†ط¯ ظ…ظˆط¯غŒط§ظ† ط«ط¨طھ ظ†ط´ط¯ظ‡ ط§ط³طھ.
- ظˆط§ط¨ط³طھع¯غŒ UI ط¨ظ‡ ط±ظپطھط§ط± ط¢طھغŒ API ظ¾ط±ط±ظ†ع¯ ط§ط³طھط› ط¯ط± ط­ط§ظ„ ط­ط§ط¶ط± ظ†ط§ظ… ط³طھظˆظ†â€Œظ‡ط§ ظˆ ظپغŒظ„طھط±ظ‡ط§ ط¯ط± ظپط±ط§ظ†طھâ€Œط§ظ†ط¯ ظ…ط³طھظ‚ظ„ ط§ط² ظ…ط¯ظ„ ظ†ظ‡ط§غŒغŒ ط¨ع©â€Œط§ظ†ط¯ طھط¹ط±غŒظپ ط´ط¯ظ‡â€Œط§ظ†ط¯.
- ظ…ط·ط§ط¨ظ‚ ظ¾غŒط´ظ†ظ‡ط§ط¯ طھغŒظ… ظ…ظˆط¯غŒط§ظ†طŒ ط¯ط± ع¯ط§ظ… ط¨ط¹ط¯غŒ ط¨ط§غŒط¯ غŒع© ظپط§غŒظ„ mapping ط±ط³ظ…غŒ ط¨غŒظ† ظ†ط§ظ… ط³طھظˆظ†â€Œظ‡ط§/ظپغŒظ„طھط±ظ‡ط§غŒ ظپط±ط§ظ†طھâ€Œط§ظ†ط¯ ظˆ ظپغŒظ„ط¯ظ‡ط§غŒ ظ¾ط§ط³ط®/QueryString
  ط³ط±ظˆغŒط³â€Œظ‡ط§غŒ old-Invoices ط¯ط± ظ‡ظ…غŒظ† ط³ظ†ط¯ (`docs-modian-endpoints`) طھط¹ط±غŒظپ ط´ظˆط¯ طھط§ ظ‡ط± ط¯ظˆ طھغŒظ… (ظپط±ط§ظ†طھ ظˆ ط¨ع©â€Œط§ظ†ط¯) ط¨ظ‡ ط¢ظ† ظ…طھط¹ظ‡ط¯ ط¨ط§ط´ظ†ط¯.
- ط§ط³طھط§ظ†ط¯ط§ط±ط¯ط³ط§ط²غŒ ط§ط´طھط±ط§ع©â€Œع¯ط°ط§ط±غŒ ع©ط§ظ†ظپغŒع¯ ط³طھظˆظ†â€Œظ‡ط§:
  - ع¯ط²غŒظ†ظ‡ظ” ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ ظپط¹ظ„غŒ: ط§غŒط¬ط§ط¯ غŒع© ظ…ط§عکظˆظ„ ع©ط§ظ†ظپغŒع¯ ظ…ط´طھط±ع© ظپظ‚ط· ط¨ط±ط§غŒ old-Invoices ط¯ط± ط§غŒظ† ط§ط³ظ¾ط±غŒظ†طھط›
    ط¯ط± طµظˆط±طھ ظ†غŒط§ط²طŒ ط¯ط± ط§ط³ظ¾ط±غŒظ†طھâ€Œظ‡ط§غŒ ط¨ط¹ط¯غŒ ط§ط±طھظ‚ط§ط، ط¨ظ‡ آ«Registry ط³طھظˆظ†â€Œظ‡ط§آ» ط¯ط± ع©غŒطھ UI ظ…ظˆط¯غŒط§ظ†.
- ط±ظپطھط§ط± ظپغŒظ„ط¯ آ«ظˆط¶ط¹غŒطھ طھط·ط§ط¨ظ‚آ» ط¯ط± ط¬ط³طھط¬ظˆغŒ ظ¾غŒط´ط±ظپطھظ‡ظ” طµط§ط¯ط±ط§طھ ظپط¹ظ„ط§ظ‹ طµط±ظپط§ظ‹ informtional ظˆ read-only ط¯ط± ظ†ط¸ط± ع¯ط±ظپطھظ‡ ط´ط¯ظ‡
  طھط§ ط²ظ…ط§ظ†غŒ ع©ظ‡ ط³ظ†ط§ط±غŒظˆغŒ ط¯ظ‚غŒظ‚ ط¨ع©â€Œط§ظ†ط¯ ط¨ط±ط§غŒ ط§غŒظ† ظپغŒظ„ط¯ ظ…ط´ط®طµ ط´ظˆط¯.

**ظˆط¶ط¹غŒطھ ط¨ع©â€Œط§ظ†ط¯ / API ظˆ ط±غŒط³ع©â€Œظ‡ط§**

- ط¯ط± ط§غŒظ† ط§ط³ظ¾ط±غŒظ†طھطŒ ط¨ط±ط§غŒ ط³ظ†ط§ط±غŒظˆغŒ old-Invoices (ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ ظ¾غŒط´ ط§ط² غ±غ´غ°غ²/غ°غ³/غ²غ¶) **ظ‡غŒع† endpoint ط¬ط¯غŒط¯غŒ ط¯ط± ط¨ع©â€Œط§ظ†ط¯ ظˆ ظ‡غŒع† طھط؛غŒغŒط±غŒ ط¯ط± Prisma/DB** ط«ط¨طھ ظ†ط´ط¯ظ‡ ط§ط³طھط›
  ط§غŒظ† طµظپط­ظ‡ ظپط¹ظ„ط§ظ‹ طµط±ظپط§ظ‹ غŒع© ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ UI ط§ط³طھ ظˆ ظ…ظ†ط·ظ‚ ط¬ط³طھط¬ظˆ/ط¯ط±غŒط§ظپطھ ط¯ط§ط¯ظ‡â€Œظ‡ط§ ط¨ظ‡ API ظˆط§ظ‚ط¹غŒ ظ…طھطµظ„ ظ†ط´ط¯ظ‡ ط§ط³طھ.
- ط§طھطµط§ظ„ ظپغŒظ„طھط±ظ‡ط§ ط¨ظ‡ API ط´ط¨غŒظ‡â€Œط³ط§ط² ظˆ ظ‡ظ…ع†ظ†غŒظ† طھع©ظ…غŒظ„ ط²غŒط±ظ…ظ†ظˆظ‡ط§غŒ ظ…ط´ط§ط¨ظ‡ ط¨ط±ط§غŒ آ«ظپط±ظˆط´ ط¯ط§ط®ظ„غŒآ» ظˆ آ«ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒآ» ط¯ط± old-Invoices
  ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† ع©ط§ط±ظ‡ط§غŒ ط¢غŒظ†ط¯ظ‡ (WIP/Next) ط¯ط± ع¯ط²ط§ط±ط´ طھغŒظ… ظ…ظˆط¯غŒط§ظ† ط«ط¨طھ ط´ط¯ظ‡ ظˆ ط¯ط± ظ†ط³ط®ظ‡â€Œظ‡ط§غŒ ط¨ط¹ط¯غŒ ط§غŒظ† ط³ظ†ط¯طŒ ظ¾ط³ ط§ط² ظ†ظ‡ط§غŒغŒâ€Œط´ط¯ظ† ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ APIطŒ ظ…ط³طھظ†ط¯ ط®ظˆط§ظ‡ط¯ ط´ط¯.
- ط¨ظ‡â€Œط¯ظ„غŒظ„ ط§ط¶ط§ظپظ‡â€Œط´ط¯ظ† ط´ط§ط®ظ‡â€Œظ‡ط§غŒ ط´ط±ط·غŒ ط¬ط¯غŒط¯ ط¯ط± `SearchByFilters` (ط¨ط±ط§غŒ طµظپط­ط§طھ `invoices/*` ظˆ `old-Invoices/*`)طŒ
  طھظˆطµغŒظ‡ ظ…غŒâ€Œط´ظˆط¯ ط¯ط± ع©ظ†ط§ط± طھط³طھâ€Œظ‡ط§غŒ ط¯ط³طھغŒطŒ ط³ظ†ط§ط±غŒظˆظ‡ط§غŒ ع©ظ„غŒط¯غŒ ط¨ط±ط§غŒ ط§غŒظ† طµظپط­ط§طھ ط¨ظ‡â€Œطµظˆط±طھ طھط³طھâ€Œظ‡ط§غŒ ظˆط§ط­ط¯/ط§ط³ظ†ظ¾â€Œط´ط§طھ ظ‡ظ… ظ¾ظˆط´ط´ ط¯ط§ط¯ظ‡ ط´ظˆظ†ط¯ طھط§ ط¯ط± refactorظ‡ط§غŒ ط¨ط¹ط¯غŒ ط±ظپطھط§ط±غŒ ظ†ط§ط®ظˆط§ط³طھظ‡ ط§غŒط¬ط§ط¯ ظ†ط´ظˆط¯.
- آ«ظ†ظ‚ط´ ظ…ظˆط¯غŒآ»: ط¨ظ‡ ظ…ظ†ظˆغŒ ع†ظ†ط¯ط§ظ†طھط®ط§ط¨غŒ (checkbox list) ط¨ط§ ع¯ط²غŒظ†ظ‡â€Œظ‡ط§غŒ **ط¹ط§ط¯غŒ / ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط± / ط¢ظ…ط±** طھط؛غŒغŒط± ع©ط±ط¯. *(ع¯ط²غŒظ†ظ‡â€Œظ‡ط§غŒ ظ‚ط¨ظ„غŒ ط®ط±غŒط¯ط§ط±/ظپط±ظˆط´ظ†ط¯ظ‡ ط­ط°ظپ ط´ط¯ظ†ط¯.)*
- آ«ظˆط¶ط¹غŒطھ طµظˆط±طھط­ط³ط§ط¨آ»: ط¨ظ‡ ظ…ظ†ظˆغŒ ع†ظ†ط¯ط§ظ†طھط®ط§ط¨غŒ طھط¨ط¯غŒظ„ ط´ط¯ ط¨ط§ طھط±طھغŒط¨ ط¯ظ‚غŒظ‚ ط¯ط§ظ…ظ†ظ‡:
  `ط±ط¯ ط´ط¯ظ‡طŒ طھط§غŒغŒط¯ ط´ط¯ظ‡طŒ طھط§غŒغŒط¯ ط³غŒط³طھظ…غŒطŒ ط¯ط± ط§ظ†طھط¸ط§ط± ظˆط§ع©ظ†ط´طŒ ط¹ط¯ظ… ط§ظ…ع©ط§ظ† ظˆط§ع©ظ†ط´طŒ ط¹ط¯ظ… ظ†غŒط§ط² ط¨ظ‡ ظˆط§ع©ظ†ط´طŒ ط§ط¨ط·ط§ظ„ ط´ط¯ظ‡`.
- ظ¾ظ†ظ„ آ«ظ¾غŒط´ط±ظپطھظ‡آ»: ع†غŒط¯ظ…ط§ظ† ع†ظ‡ط§ط±ط³طھظˆظ†ظ‡ ظ…ط·ط§ط¨ظ‚ ظ…ط±ط¬ط¹ط› ط¨ط±ع†ط³ط¨â€Œظ‡ط§ طھع©â€Œط®ط·غŒ ظˆ ط¯ط§ط±ط§غŒ ellipsis. ظپغŒظ„ط¯ظ‡ط§غŒ طھط§ط±غŒط® ط¨ط§ **ظˆط±ظˆط¯غŒ ط¬ظ„ط§ظ„غŒ ط§ط®طھطµط§طµغŒ** ع©ط§ط± ظ…غŒâ€Œع©ظ†ظ†ط¯ ظˆ ط®ط±ظˆط¬غŒ ط±ط§ ط¨ظ‡ **ISO** طھط¨ط¯غŒظ„ ظ…غŒâ€Œâ€ژع©ظ†ظ†ط¯ (ظ‚ط±ط§ط±ط¯ط§ط¯ ظ†ظ…ط§غŒط´/ط°ط®غŒط±ظ‡ طھط§ط±غŒط® ظ¾ط§ط¨ط±ط¬ط§ط³طھ).

### غŒط§ط¯ط¯ط§ط´طھ WIP (ط³طھظˆظ†â€Œظ‡ط§ ظˆ ط®ط±ظˆط¬غŒ ط§ع©ط³ظ„)
- آ«ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§آ»: ظ„غŒط³طھ ع†ع©â€Œط¨ط§ع©ط³ ظˆ ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ طھظ†ط¸غŒظ…ط§طھ ع©ط§ط±ط¨ط± (ظ¾غŒط´ظ†ظ‡ط§ط¯ طھغŒظ…: localStorage) ط¯ط± ط¬ط±غŒط§ظ† ط§ط³طھ.
- آ«ط®ط±ظˆط¬غŒ ط§ع©ط³ظ„آ»: طھط¨ط¯غŒظ„ ط¯ط§ط¯ظ‡â€Œظ‡ط§غŒ ط¬ط¯ظˆظ„ ط¨ظ‡ CSV/Excel ظˆط§ط¨ط³طھظ‡ ط¨ظ‡ ظ…ط§ع© غŒط§ ظ‚ط±ط§ط±ط¯ط§ط¯ JSON ط§ط³طھ. ط¯ط§ظ…ظ†ظ‡ظ” ط®ط±ظˆط¬غŒ ظ†غŒط§ط² ط¨ظ‡ طھطµظ…غŒظ… ط¯ط§ط±ط¯ (ع©ظ„ ط±ع©ظˆط±ط¯ظ‡ط§غŒ ظپغŒظ„طھط±ط´ط¯ظ‡ غŒط§ ظپظ‚ط· طµظپط­ظ‡ظ” ط¬ط§ط±غŒ).
- آ«ظ…ظˆط¶ظˆط¹ طµظˆط±طھط­ط³ط§ط¨آ»: ظپغŒظ„ط¯ ع©ط´ظˆغŒغŒ ط¨ط§ ظ„غŒط³طھ ع†ع©â€Œط¨ط§ع©ط³â€Œط¯ط§ط± (ظˆط§عکع¯ط§ظ† ظ†ظ‡ط§غŒغŒ ط¯ط± ظ‡ظ…ط§ظ‡ظ†ع¯غŒ ط¯ط§ظ…ظ†ظ‡ ظ‚ظپظ„ ظ…غŒâ€Œط´ظˆط¯).

### WIP (طھط§ ع¯ط²ط§ط±ط´ ط¨ط¹ط¯غŒ)
- ط§طھطµط§ظ„ ع†ظ‡ط§ط±ظپغŒظ„ط¯ طھط§ط±غŒط® (ط±ط¯غŒظپ ط§ظˆظ„ ظ¾ظ†ظ„ ظ¾غŒط´ط±ظپطھظ‡) ط¨ظ‡ ط§ظ†طھط®ط§ط¨â€Œع¯ط± ط¬ظ„ط§ظ„غŒ (onChange + ISO) ط¯ط± ط¬ط±غŒط§ظ† ط§ط³طھ (Reuse ط§ط² `ModianJalaliDateField`).
- طھع©ظ…غŒظ„ ع¯ط²غŒظ†ظ‡â€Œظ‡ط§غŒ آ«ظ…ظˆط¶ظˆط¹ طµظˆط±طھط­ط³ط§ط¨آ» ظ¾ط³ ط§ط² طھط£غŒغŒط¯ ظˆط§عکع¯ط§ظ† ط¯ط§ظ…ظ†ظ‡.
- ط¨ط§ط²ط¢ط±ط§غŒغŒ ظ…طµط±ظپâ€Œع©ظ†ظ†ط¯ظ‡â€Œظ‡ط§ ط¨ط±ط§غŒ ط¨ظ‡ط±ظ‡â€Œع¯غŒط±غŒ ط§ط² آ«Shared Search Suiteآ» ط¯ط± طµظپط­ط§طھ طµظˆط±طھط­ط³ط§ط¨ ط¯غŒع¯ط±.

### Update (1404-08-24) â€” ط¬ط²ط¦غŒط§طھ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ (UI)

#### UI â€” ط¬ط²ط¦غŒط§طھ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ (Invoices / Buy / Detail)
- طµظپط­ظ‡ `src/app/simulators/modian/invoices/buy/detail/page.tsx` ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡ ظˆ ط´ط§ظ…ظ„ ظ…ظˆط§ط±ط¯ ط²غŒط± ط§ط³طھ:
  - ظ‡ط¯ط± آ«طµظˆط±طھط­ط³ط§ط¨ ط®ط±غŒط¯آ» ط¨ط§ ظ„غŒظ†ع© ط¨ط±ع¯ط´طھ ط¨ظ‡ ظ„غŒط³طھ.
  - ط¨ظ„ظˆع©â€Œظ‡ط§غŒ آ«ظ…ط´ط®طµط§طھ طµظˆط±طھط­ط³ط§ط¨آ»طŒ آ«ظ…ط´ط®طµط§طھ ظپط±ظˆط´ظ†ط¯ظ‡آ»طŒ آ«ظ…ط´ط®طµط§طھ ط®ط±غŒط¯ط§ط±آ».
  - ط¬ط¯ظˆظ„ آ«ط§ظ‚ظ„ط§ظ… طµظˆط±طھط­ط³ط§ط¨آ» ط¨ط§ غ²غ¹ ط³طھظˆظ† ظˆ ط§ط³ع©ط±ظˆظ„ ط§ظپظ‚غŒ ظ…ط­ظ„غŒ ط¨ظ‡â€Œظ‡ظ…ط±ط§ظ‡ ظ…ظ†ظˆغŒ آ«ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§آ» ظˆ ط¯ع©ظ…ظ‡ آ«ظ¾غŒط´â€Œظپط±ط¶آ».
  - ط¨ط®ط´ آ«ط§ط·ظ„ط§ط¹ط§طھ ظ¾ط±ط¯ط§ط®طھآ» ع©ظ‡ ط¨ط§ ط§ط³طھط§غŒظ„ ظ…ط´طھط±ع© `InvoiceDetailSection` ط±ظ†ط¯ط± ظ…غŒâ€Œط´ظˆط¯.
  - ط¬ط¯ظˆظ„ آ«ظ¾ط±ط¯ط§ط®طھâ€Œظ‡ط§آ» ظˆ ط§طھطµط§ظ„ ط¯ط§ط¯ظ‡ظ” ظˆط§ظ‚ط¹غŒ/Mock ط¨ط±ط§غŒ ظ…ط´ط®طµط§طھطŒ ط§ظ‚ظ„ط§ظ…طŒ ط§ط·ظ„ط§ط¹ط§طھ ظ¾ط±ط¯ط§ط®طھ ظˆ ظ¾ط±ط¯ط§ط®طھâ€Œظ‡ط§ ظ‡ظ†ظˆط² ط¯ط± ط­ط§ظ„ طھظˆط³ط¹ظ‡ ط§ط³طھ ظˆ ط¯ط± ط§ط³ظ¾ط±غŒظ†طھ ط¨ط¹ط¯غŒ طھع©ظ…غŒظ„ ظ…غŒâ€Œط´ظˆط¯.

### ع©غŒظپغŒطھ ظˆ CI
- Build/Lint: ط³ط¨ط². ظ‡ط´ط¯ط§ط±ظ‡ط§غŒ ظ¾ط±ط§ع©ظ†ط¯ظ‡â€ŒغŒ ظ‚ط¨ظ„غŒ ط¯ط± ظ…ط­ط¯ظˆط¯ظ‡â€Œظ‡ط§غŒ ط؛غŒط±ط¯ط§ظ…ظ†ظ‡â€Œط§غŒ ط¨ظ‡â€Œظ…ط±ظˆط± ظ¾ط§ع©â€Œط³ط§ط²غŒ ظ…غŒâ€Œط´ظˆظ†ط¯ (CI ط±ظˆغŒ lint ط¨ط§ ط¢ط³طھط§ظ†ظ‡ظ” warn طھظ†ط¸غŒظ… ط§ط³طھ).

### ط±غŒط³ع©â€Œظ‡ط§ ظˆ طھطµظ…غŒظ…â€Œظ‡ط§
- **غŒع©ظ¾ط§ط±ع†ع¯غŒ طھط§ط±غŒط® ط¬ظ„ط§ظ„غŒ** (Parsing/Formatting/ISO): ط§غŒط¬ط§ط¯ util ظ…ط±ع©ط²غŒ ظˆ ظ…طµط±ظپ غŒع©ظ†ظˆط§ط®طھ ط¯ط± SearchByFilters طھظˆطµغŒظ‡ ط´ط¯.
- **ط¯غŒع©ط´ظ†ط±غŒ آ«ظ…ظˆط¶ظˆط¹ طµظˆط±طھط­ط³ط§ط¨آ»**: ظ†غŒط§ط² ط¨ظ‡ طھط£غŒغŒط¯ ط¯ط§ظ…ظ†ظ‡ ط¨ط±ط§غŒ ط¬ظ„ظˆع¯غŒط±غŒ ط§ط² ط¯ظˆط¨ط§ط±ظ‡â€Œع©ط§ط±غŒ UI. ظ¾غŒط´ظ†ظ‡ط§ط¯: ظ‚ظپظ„ ظˆط§عکع¯ط§ظ† ظˆ طھظˆظ„غŒط¯ enum/constant ظˆط§ط­ط¯.

## Update (1404-08-24)

### UI â€” ط¬ط²ط¦غŒط§طھ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ (Invoices / Buy / Detail)

- طµظپط­ظ‡ `/simulators/modian/invoices/buy/detail` ط¯ط± ظپط±ط§ظ†طھâ€Œط§ظ†ط¯ ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡ ط§ط³طھ (`src/app/simulators/modian/invoices/buy/detail/page.tsx`).
- ط³ط§ط®طھط§ط± طµظپط­ظ‡ ط´ط§ظ…ظ„ ط§غŒظ† ط¨ط®ط´â€Œظ‡ط§ط³طھ:
  - ط¨ظ„ظˆع©â€Œظ‡ط§غŒ ط§ط·ظ„ط§ط¹ط§طھغŒ آ«ظ…ط´ط®طµط§طھ طµظˆط±طھط­ط³ط§ط¨آ»طŒ آ«ظ…ط´ط®طµط§طھ ظپط±ظˆط´ظ†ط¯ظ‡آ»طŒ آ«ظ…ط´ط®طµط§طھ ط®ط±غŒط¯ط§ط±آ» ظˆ آ«ط§ط·ظ„ط§ط¹ط§طھ ظ¾ط±ط¯ط§ط®طھآ» ط¨ط± ظ¾ط§غŒظ‡ظ” ع©ط§ظ…ظ¾ظˆظ†ظ†طھ ظ…ط´طھط±ع© `InvoiceDetailSection` (ظ…ط³غŒط±: `src/components/modian/common/InvoiceDetailSection.tsx`).
  - ط¬ط¯ظˆظ„ آ«ط§ظ‚ظ„ط§ظ… طµظˆط±طھط­ط³ط§ط¨آ» ط¨ط§ غ²غ¹ ط³طھظˆظ† ظˆ ط§ط³ع©ط±ظˆظ„ ط§ظپظ‚غŒ ظ…ط­ظ„غŒطŒ ظ‡ظ…ط±ط§ظ‡ ط¨ط§ ظ…ظ†ظˆغŒ آ«ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§آ» ظˆ ط¯ع©ظ…ظ‡ آ«ظ¾غŒط´â€Œظپط±ط¶آ» ط¨ط§ ط±ظپطھط§ط± ظ…ط´ط§ط¨ظ‡ طµظپط­ظ‡ ظ„غŒط³طھ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ط®ط±غŒط¯.
- ط¯ط± ط­ط§ظ„ ط­ط§ط¶ط± ط§غŒظ† طµظپط­ظ‡ ط§ط² ط¯ط§ط¯ظ‡ظ” ظ†ظ…ط§غŒط´غŒ ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ط¯ط› ظ†ع¯ط§ط´طھ ط¨ظ‡ ط³ط±ظˆغŒط³â€Œظ‡ط§غŒ ط¨ع©â€Œط§ظ†ط¯ ط¨ط±ط§غŒ ظ‡ط¯ط± طµظˆط±طھط­ط³ط§ط¨طŒ ط§ظ‚ظ„ط§ظ…طŒ ط§ط·ظ„ط§ط¹ط§طھ ظ¾ط±ط¯ط§ط®طھ ظˆ ط¬ط¯ظˆظ„ آ«ظ¾ط±ط¯ط§ط®طھâ€Œظ‡ط§آ» ظ‡ظ†ظˆط² طھط¹ط±غŒظپ ظ†ط´ط¯ظ‡ ظˆ ط¨ط§غŒط¯ ط¯ط± ع¯ط§ظ…â€Œظ‡ط§غŒ ط¨ط¹ط¯غŒ ط¯ط± ظ‡ظ…غŒظ† ظپط§غŒظ„ طھع©ظ…غŒظ„ ط´ظˆط¯.
- ط¬ط¯ظˆظ„ آ«ظ¾ط±ط¯ط§ط®طھâ€Œظ‡ط§آ» ط¯ط± ط­ط¯ ط·ط±ط§ط­غŒ ظˆ طھط¹ط±غŒظپ غ±غ¹ ط³طھظˆظ† (ط´ط§ظ…ظ„ طھط§ط±غŒط® ظˆ ظ…ط¨ظ„ط؛ ظ¾ط±ط¯ط§ط®طھطŒ ط±ظˆط´ ظ¾ط±ط¯ط§ط®طھطŒ ظˆط¶ط¹غŒطھâ€Œظ‡ط§طŒ ط³ظ‡ظ… ظ…ط§ظ„غŒط§طھ ظˆ ط¹ظˆط§ط±ط¶طŒ ط¨ط¯ظ‡غŒ ظپط±ظˆط´ظ†ط¯ظ‡/ط§ط¹طھط¨ط§ط± ط®ط±غŒط¯ط§ط± ظˆ ط³طھظˆظ† ط«ط§ط¨طھ آ«ط¬ط²ط¦غŒط§طھآ» ط¯ط± ط§ظ†طھظ‡ط§غŒ ط¬ط¯ظˆظ„) ظ…ط´ط®طµ ط´ط¯ظ‡ ط§ط³طھط› ظ…ظ†ظˆغŒ آ«ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§آ» ظˆ ط§ط³ع©ط±ظˆظ„ ط§ظپظ‚غŒ ط¨ط§ ط³طھظˆظ† ط«ط§ط¨طھ ط¬ط²ط¦غŒط§طھ ط¨ط±ط§غŒ ط§غŒظ† ط¬ط¯ظˆظ„ ط¯ط± ظˆط¶ط¹غŒطھ ط¨ط±ظ†ط§ظ…ظ‡â€Œط±غŒط²غŒâ€Œط´ط¯ظ‡ ظ‚ط±ط§ط± ط¯ط§ط±ط¯.

#### ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ غ±غ´غ°غ´/غ°غ¹/غ°غµ â€” ع¯ط²ط§ط±ط´ ظپط§غŒظ„â€Œظ‡ط§غŒ ط®ط±ظˆط¬غŒ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§ (UI)

**ط¯ط§ظ…ظ†ظ‡ظ” ظپغŒع†ط±**

- طµظپط­ظ‡/ظ…ظˆط¯ط§ظ„ آ«ع¯ط²ط§ط±ط´ ظپط§غŒظ„â€Œظ‡ط§غŒ ط®ط±ظˆط¬غŒآ» ط¨ط±ط§غŒ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§ ط¯ط± ظ…ظˆط¯غŒط§ظ†.
- طھظ…ط±ع©ط² ظپط¹ظ„غŒ ط±ظˆغŒ UI ظˆ ط±ظپطھط§ط±ظ‡ط§غŒ ظپط±ظ…غŒ ط¯ط± طھط¨ آ«ظپط§غŒظ„ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§آ» ظˆ آ«ط§ط¸ظ‡ط§ط±ظ†ط§ظ…ظ‡آ».

**ظˆط¶ط¹غŒطھ ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ**

- ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ UI:
  - ط§ط³طھظپط§ط¯ظ‡ ط§ط² `ScrollableTableShell` ط¨ط±ط§غŒ ظ†ظ…ط§غŒط´ ط¬ط¯ظˆظ„ ظˆط¶ط¹غŒطھ ظپط§غŒظ„â€Œظ‡ط§غŒ ط®ط±ظˆط¬غŒ (ظ†ط§ظ… ظپط§غŒظ„طŒ طھط§ط±غŒط® ط§غŒط¬ط§ط¯طŒ ظˆط¶ط¹غŒطھ ط§ط±ط³ط§ظ„ ظˆ ...).
  - ط§ط³طھظپط§ط¯ظ‡ ط§ط² `FieldGrid` ظˆ `FormField` ط¨ط§ `variant="floating"` ط¨ط±ط§غŒ ع†غŒط¯ظ…ط§ظ† ظپغŒظ„طھط±ظ‡ط§.
  - ط§ط³طھظپط§ط¯ظ‡ ط§ط² `ModianJalaliDateField` ط¨ط±ط§غŒ ظپغŒظ„طھط±ظ‡ط§غŒ طھط§ط±غŒط® ط¯ط± طھط¨ آ«ظپط§غŒظ„ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§آ».
- ط§طھطµط§ظ„ ط¨ظ‡ ط¨ع©â€Œط§ظ†ط¯:
  - ط¯ط± ط§غŒظ† ظ…ط±ط­ظ„ظ‡طŒ ط¯ط§ط¯ظ‡â€Œظ‡ط§ ظ…ط§ع© ظ‡ط³طھظ†ط¯ ظˆ ظ‡ظ†ظˆط² ط¨ظ‡ API ظ„غŒط³طھ ظپط§غŒظ„â€Œظ‡ط§غŒ ط®ط±ظˆط¬غŒ ظ…طھطµظ„ ظ†ط´ط¯ظ‡â€Œط§غŒظ….
  - طھطµظ…غŒظ… ظ†ظ‡ط§غŒغŒ ط¯ط±ط¨ط§ط±ظ‡ظ” ظ…ط±ط¬ UI (ط¨ط§ ط¯ط§ط¯ظ‡ظ” ظ…ط§ع©) غŒط§ ط¨ظ„ظˆع©ظ‡â€Œع©ط±ط¯ظ† طھط§ ط¢ظ…ط§ط¯ظ‡ ط´ط¯ظ† API ط¯ط± ط³ط·ط­ ظ…ط¯غŒط±غŒطھ ظ¾ط±ظˆعکظ‡ ع¯ط±ظپطھظ‡ ظ…غŒâ€Œط´ظˆط¯
    (ع¯ط²غŒظ†ظ‡ظ” ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ طھغŒظ…: ظ…ط±ط¬ UI ط¨ط§ ط¯ط§ط¯ظ‡ظ” ظ…ط§ع©طŒ ظ‡ظ…ط±ط§ظ‡ ط¨ط§ ظ…ط³طھظ†ط¯ط³ط§ط²غŒ طµط±غŒط­ ظ…ط§ع© ط¨ظˆط¯ظ†).

**ظ†ع©ط§طھ ظ…ط­طµظˆظ„غŒ/طھط­ظ„غŒظ„غŒ**

- ظ¾غŒط´â€Œظپط±ط¶ ط¯ظˆط±ظ‡/ط³ط§ظ„ ط¯ط± طھط¨ آ«ط§ط¸ظ‡ط§ط±ظ†ط§ظ…ظ‡آ» ط¨ط± ط§ط³ط§ط³ ظپطµظ„ ط¬ط§ط±غŒ ظ…ط­ط§ط³ط¨ظ‡ ظ…غŒâ€Œط´ظˆط¯
  (ظ…ط«ط§ظ„: ط§ع¯ط± ظپطµظ„ ط¬ط§ط±غŒ Q3 ط³ط§ظ„ غ±غ´غ°غ´ ط¨ط§ط´ط¯طŒ ظ…ظ‚ط¯ط§ط± ظ¾غŒط´â€Œظپط±ط¶ ظپغŒظ„طھط± ط¯ظˆط±ظ‡طŒ `1404-Q2` ط§ط³طھ).
- ط§غŒظ† ط±ظپطھط§ط± ط¨ط§غŒط¯ ط¨ط§ ظ…ظ†ط·ظ‚ ظ†ظ‡ط§غŒغŒ ع©ط³ط¨â€Œظˆع©ط§ط±غŒ ط¯ط± ط¨ع©â€Œط§ظ†ط¯ ظ‡ظ…â€Œط±ط§ط³طھط§ ط´ظˆط¯ط› ط¯ط± طµظˆط±طھ ظ†غŒط§ط²طŒ ظ…ظ†ط·ظ‚ ط¯ظ‚غŒظ‚â€Œطھط±غŒ ط¨ط± ط§ط³ط§ط³ طھط§ط±غŒط® ط´ط±ظˆط¹/ظ¾ط§غŒط§ظ† ط¯ظˆط±ظ‡
  ط¯ط± ظ†ط³ط®ظ‡â€Œظ‡ط§غŒ ط¨ط¹ط¯غŒ ط§ط¹ظ…ط§ظ„ ط®ظˆط§ظ‡ط¯ ط´ط¯.

> ط§غŒظ† ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ طµط±ظپط§ظ‹ ظˆط¶ط¹غŒطھ ظپط¹ظ„غŒ UI ط±ط§ ظ…ط³طھظ†ط¯ط³ط§ط²غŒ ظ…غŒâ€Œع©ظ†ط¯ ظˆ طھط§ ظ‚ط¨ظ„ ط§ط² ط§طھطµط§ظ„ ظ†ظ‡ط§غŒغŒ ط¨ظ‡ ط³ط±ظˆغŒط³â€Œظ‡ط§غŒ
> `simulator-modian` ط¨ط±ط§غŒ ط®ط±ظˆط¬غŒ ظپط§غŒظ„â€Œظ‡ط§طŒ ط¨ظ‡ ط¹ظ†ظˆط§ظ† **ظ…ط§ع©** ط¯ط± ظ†ط¸ط± ع¯ط±ظپطھظ‡ ظ…غŒâ€Œط´ظˆط¯.
#### ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ غ±غ´غ°غ´/غ°غ¹/غ±غ´ â€” ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯ (Imports / ط¨ظˆط±ط³ ع©ط§ظ„ط§طŒ UI-only)

**ظ…ط³غŒط±ظ‡ط§ ظˆ طµظپط­ط§طھ UI**
- ط²غŒط±ظ…ظ†ظˆغŒ آ«ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯آ» ط¯ط± ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ† ط¨ط§ ط³ط§ط®طھط§ط± ط²غŒط± ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡ ط§ط³طھ (ط·ط¨ظ‚ `app-tree.txt` ظˆ ع¯ط²ط§ط±ط´ طھغŒظ… ظ…ظˆط¯غŒط§ظ† غ±غ´غ°غ´/غ°غ¹/غ±غ´):
  - `/simulators/modian/purchase-announcements` â€” ط´ظگظ„/Wrapper ط§طµظ„غŒ ط²غŒط±ظ…ظ†ظˆ.
  - `/simulators/modian/purchase-announcements/imports` â€” طµظپط­ظ‡ آ«ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ظˆط§ط±ط¯ط§طھآ».
  - `/simulators/modian/purchase-announcements/bourse` â€” طµظپط­ظ‡ آ«ط®ط±غŒط¯ ط§ط² ط¨ظˆط±ط³ ع©ط§ظ„ط§آ».
- ظ‡ط± ط¯ظˆ ط²غŒط±طµظپط­ظ‡ ط§ط² ظ‡ظ…ط§ظ† ط§ظ„ع¯ظˆغŒ ط¬ط³طھط¬ظˆ ظˆ ط¬ط¯ظˆظ„ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§ ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ظ†ط¯:
  - طھط¨ آ«ط¬ط³طھط¬ظˆ ط¨ط§ ظپغŒظ„طھط± / ط¬ط³طھط¬ظˆ ط¨ط§ ط´ظ…ط§ط±ظ‡ ظ…ط§ظ„غŒط§طھغŒآ».
  - ظ¾ظ†ظ„ ظپغŒظ„طھط± ظ¾غŒط´ط±ظپطھظ‡ ط¨ط§ ط¯ع©ظ…ظ‡â€Œظ‡ط§غŒ آ«ط¬ط³طھط¬ظˆآ» ظˆ آ«ظپغŒظ„طھط± ظ¾غŒط´â€Œظپط±ط¶آ».
  - ظ†ظˆط§ط± ط§ط¨ط²ط§ط± ط¨غŒظ† ط¬ط³طھط¬ظˆ ظˆ ط¬ط¯ظˆظ„ (ط®ط±ظˆط¬غŒ ط§ع©ط³ظ„طŒ ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§طŒ ط§ظ†طھظ‚ط§ظ„ ط´ط¹ط¨ظ‡).
  - ط¬ط¯ظˆظ„ ط¨ط§ ط­ط¯ظˆط¯ غ±غµ ط³طھظˆظ† ظ‚ط§ط¨ظ„ ظ†ظ…ط§غŒط´/ظ…ط®ظپغŒâ€Œط³ط§ط²غŒ ظˆ ط³طھظˆظ† ط«ط§ط¨طھ آ«ط¬ط²ط¦غŒط§طھآ» ط¯ط± ط§ظ†طھظ‡ط§غŒ ط±ط¯غŒظپ.

**ظˆط¶ط¹غŒطھ ط§طھطµط§ظ„ ط¨ظ‡ ط¨ع©â€Œط§ظ†ط¯**
- ظ…ط·ط§ط¨ظ‚ ع¯ط²ط§ط±ط´ طھغŒظ…طŒ ط§غŒظ† ط²غŒط±ظ…ظ†ظˆظ‡ط§ ط¯ط± ط­ط§ظ„ ط­ط§ط¶ط± طµط±ظپط§ظ‹ ط¯ط± ط³ط·ط­ UI/ط´ط¨غŒظ‡â€Œط³ط§ط² ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡â€Œط§ظ†ط¯ط›
  ظ‡غŒع† ظ‚ط±ط§ط±ط¯ط§ط¯ ط¬ط¯غŒط¯غŒ ط¨ط±ط§غŒ endpoint آ«ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯آ» ط¯ط± ط¨ع©â€Œط§ظ†ط¯ ط§غŒظ† ط³ظ†ط¯ طھط¹ط±غŒظپ ظ†ط´ط¯ظ‡ ط§ط³طھ.
- ط¨ظ†ط§ط¨ط±ط§غŒظ† ط¯ط± ط§غŒظ† ظ†ط³ط®ظ‡:
  - **ظ‡غŒع† ظ…ط³غŒط±/endpoint ط¬ط¯غŒط¯غŒ** ط¨ط±ط§غŒ `purchase-announcements` ط§ط¶ط§ظپظ‡ ظ†ظ…غŒâ€Œع©ظ†غŒظ….
  - ط§غŒظ† ط¯ظˆ طµظپط­ظ‡ ط¯ط± ظˆط¶ط¹غŒطھ **UI-only** ط¨ط§ظ‚غŒ ظ…غŒâ€Œظ…ط§ظ†ظ†ط¯ طھط§ ط²ظ…ط§ظ†غŒ ع©ظ‡ ظ‚ط±ط§ط±ط¯ط§ط¯ ط±ط³ظ…غŒ ط¨ع©â€Œط§ظ†ط¯ ط¨ط±ط§غŒ ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯ (Imports ظˆ ط¨ظˆط±ط³ ع©ط§ظ„ط§) ظ†ظ‡ط§غŒغŒ ط´ظˆط¯.

**ظ†ع©طھظ‡ ط¨ط±ط§غŒ ظ†ط³ط®ظ‡â€Œظ‡ط§غŒ ط¨ط¹ط¯غŒ**
- ظ…ط´ط§ط¨ظ‡ ط³ظ†ط§ط±غŒظˆغŒ old-InvoicesطŒ ط¯ط± ط²ظ…ط§ظ† ط§طھطµط§ظ„ ظˆط§ظ‚ط¹غŒ ط¨ظ‡ ط³ط±ظˆغŒط³â€Œظ‡ط§غŒ ظ…ظˆط¯غŒط§ظ† ط¨ط§غŒط¯:
  - mapping ط±ط³ظ…غŒ ط¨غŒظ† ظپغŒظ„ط¯ظ‡ط§غŒ ظپغŒظ„طھط± (ظˆط¶ط¹غŒطھ ط§ط¹ظ„ط§ظ…غŒظ‡طŒ ظ…ظˆط¶ظˆط¹ ط§ط¹ظ„ط§ظ…غŒظ‡طŒ ط¨ط§ط²ظ‡ظ” طھط§ط±غŒط®طŒ ظ†ظˆط¹ ظ…ظ†ط¨ط¹: ظˆط§ط±ط¯ط§طھ / ط¨ظˆط±ط³ ع©ط§ظ„ط§ ظˆ â€¦) ظˆ ظ¾ط§ط±ط§ظ…طھط±ظ‡ط§غŒ Query/Body ط¨ع©â€Œط§ظ†ط¯ طھط¹ط±غŒظپ ط´ظˆط¯ط›
  - ط³ط§ط®طھط§ط± ظ¾ط§ط³ط® ظ„غŒط³طھ ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§ (ط³طھظˆظ†â€Œظ‡ط§غŒ ط¬ط¯ظˆظ„طŒ ظˆط¶ط¹غŒطھâ€Œظ‡ط§طŒ ظ…ظˆط¶ظˆط¹â€Œظ‡ط§) ط¯ط± ظ‡ظ…غŒظ† ط³ظ†ط¯ ط¨ظ‡â€Œطµظˆط±طھ ط¬ط¯ظˆظ„غŒ ظ…ط³طھظ†ط¯ ع¯ط±ط¯ط¯.

#### ظپظ‡ط±ط³طھ طµظپط­ط§طھ UI-only ظ…ظˆط¯غŒط§ظ† (ط¨ط±ط§غŒ ط¨ط±ظ†ط§ظ…ظ‡â€Œط±غŒط²غŒ ط¨ع©â€Œط§ظ†ط¯)

ط¯ط± ط­ط§ظ„ ط­ط§ط¶ط± طµظپط­ط§طھ ط²غŒط± ط¯ط± ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ† طµط±ظپط§ظ‹ ط¯ط± ظ†ظ‚ط´ **UI-only / ط´ط¨غŒظ‡â€Œط³ط§ط²** ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡â€Œط§ظ†ط¯
ظˆ ظ‡ظ†ظˆط² endpoint ظ†ظ‡ط§غŒغŒ ط¨ط±ط§غŒ ط¢ظ†â€Œظ‡ط§ ط¯ط± ط¨ع©â€Œط§ظ†ط¯ ط§غŒظ† ط³ظ†ط¯ طھط¹ط±غŒظپ ظ†ط´ط¯ظ‡ ط§ط³طھ. ط§غŒظ† ط¬ط¯ظˆظ„ ط¨ط±ط§غŒ ط¨ط±ظ†ط§ظ…ظ‡â€Œط±غŒط²غŒ
ظˆ ط§ظˆظ„ظˆغŒطھâ€Œط¯ظ‡غŒ ط·ط±ط§ط­غŒ API ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆط¯.

| ظ…ط³غŒط± طµظپط­ظ‡ (App Router) | ع¯ط±ظˆظ‡ ط¯ط§ظ…ظ†ظ‡ | طھظˆط¶غŒط­ ظˆط¶ط¹غŒطھ |
| --- | --- | --- |
| `/simulators/modian/invoices/buy/detail` | طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ†ط³ظ„ ظپط¹ظ„غŒ | ط¬ط²ط¦غŒط§طھ طµظˆط±طھط­ط³ط§ط¨ ط®ط±غŒط¯ط› ط¯ط§ط¯ظ‡â€Œظ‡ط§ ظ…ط§ع© ظ‡ط³طھظ†ط¯طŒ ط³ط±ظˆغŒط³ ط¬ط²ط¦غŒط§طھطŒ ط§ظ‚ظ„ط§ظ… ظˆ ظ¾ط±ط¯ط§ط®طھâ€Œظ‡ط§ TBD. |
| `/simulators/modian/invoices/sales` | طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ†ط³ظ„ ظپط¹ظ„غŒ | ظ„غŒط³طھ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒط› ط¬ط¯ظˆظ„طŒ Search Suite ظˆ ط³طھظˆظ†â€Œظ‡ط§ ع©ط§ظ…ظ„طŒ ط§طھطµط§ظ„ ط¨ظ‡ API TBD. |
| `/simulators/modian/invoices/sales/detail` | طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ†ط³ظ„ ظپط¹ظ„غŒ | ط¬ط²ط¦غŒط§طھ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒط› ظ…ط´ط§ط¨ظ‡ ط¨ط§ظ„ط§طŒ ظپظ‚ط· UI. |
| `/simulators/modian/invoices/exports` | طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ†ط³ظ„ ظپط¹ظ„غŒ | ظ„غŒط³طھ ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒط› ظپغŒظ„طھط±ظ‡ط§ ظˆ ط³طھظˆظ†â€Œظ‡ط§ ط¢ظ…ط§ط¯ظ‡طŒ endpoint ط¬ط³طھط¬ظˆ TBD. |
| `/simulators/modian/invoices/exports/detail` | طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ†ط³ظ„ ظپط¹ظ„غŒ | ط¬ط²ط¦غŒط§طھ ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒط› ظپظ‚ط· UI. |
| `/simulators/modian/old-Invoices/buy` | طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¯غŒظ…غŒ | ظ„غŒط³طھ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ ظ‚ط¨ظ„ ط§ط² غ±غ´غ°غ²/غ°غ³/غ²غ¶ط› ظپظ‚ط· UI ط¨ط±ط§غŒ ط¢ظ…ظˆط²ط´/ط´ط¨غŒظ‡â€Œط³ط§ط²غŒ. |
| `/simulators/modian/old-Invoices/buy/detail` | طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¯غŒظ…غŒ | ط¬ط²ط¦غŒط§طھ ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒ ظ‚ط¯غŒظ…غŒط› ظپظ‚ط· UI. |
| `/simulators/modian/old-Invoices/sales` | طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¯غŒظ…غŒ | ظ„غŒط³طھ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ ظ‚ط¯غŒظ…غŒط› ظپظ‚ط· UI. |
| `/simulators/modian/old-Invoices/sales/detail` | طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¯غŒظ…غŒ | ط¬ط²ط¦غŒط§طھ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ ظ‚ط¯غŒظ…غŒط› ظپظ‚ط· UI. |
| `/simulators/modian/old-Invoices/exports` | طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¯غŒظ…غŒ | ظ„غŒط³طھ ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒ ظ‚ط¯غŒظ…غŒط› ظپظ‚ط· UI. |
| `/simulators/modian/old-Invoices/exports/detail` | طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ظ‚ط¯غŒظ…غŒ | ط¬ط²ط¦غŒط§طھ ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒ ظ‚ط¯غŒظ…غŒط› ظپظ‚ط· UI. |
| `/simulators/modian/purchase-announcements` | ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯ | ط´ظگظ„/Wrapper ط²غŒط±ظ…ظ†ظˆط› ط¨ط¯ظˆظ† طھظ…ط§ط³ ظ…ط³طھظ‚غŒظ… API. |
| `/simulators/modian/purchase-announcements/imports` | ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯ | ظ„غŒط³طھ ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ظˆط§ط±ط¯ط§طھط› Search Suite ظˆ ط¬ط¯ظˆظ„ ط¢ظ…ط§ط¯ظ‡طŒ endpointظ‡ط§ TBD. |
| `/simulators/modian/purchase-announcements/bourse` | ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯ | ظ„غŒط³طھ ط®ط±غŒط¯ظ‡ط§غŒ ط¨ظˆط±ط³ ع©ط§ظ„ط§ط› ظپظ‚ط· UI. |
| `/simulators/modian/contracts/contracting` | ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ | ظ„غŒط³طھ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒط› ط¬ط¯ظˆظ„طŒ Search Suite ظˆ ط³طھظˆظ†â€Œظ‡ط§ ع©ط§ظ…ظ„طŒ API ط«ط¨طھ/ظ„غŒط³طھ ظ‚ط±ط§ط±ط¯ط§ط¯ TBD. |
| `/simulators/modian/contracts/contracting/new` | ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ | ظˆغŒط²ط§ط±ط¯ ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ (ع†ظ†ط¯ظ…ط±ط­ظ„ظ‡â€Œط§غŒ طھط§ آ«طھط£غŒغŒط¯ ظ†ظ‡ط§غŒغŒآ»ط› ط´ط§ظ…ظ„ ط§ط¹طھط¨ط§ط±ط³ظ†ط¬غŒ ظˆ ط¬ط¯ظˆظ„ ظ¾غŒط´â€Œظ¾ط±ط¯ط§ط®طھ/ط¹ظ„غŒâ€Œط§ظ„ط­ط³ط§ط¨)ط› UI-onlyطŒ API TBD. |
| `/simulators/modian/contracts/contracting/detail` | ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ | طµظپط­ظ‡ ط¬ط²ط¦غŒط§طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒط› UI-only (TBD: ظ†ع¯ط§ط´طھ ط¯ظ‚غŒظ‚ ط¨ظ‡ API/ط´ظ†ط§ط³ظ‡). |
| `/simulators/modian/contracts/commission` | ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ | ظ„غŒط³طھ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒط› Search Suite ظˆ ط¬ط¯ظˆظ„ ظ‡ظ…ط³ط§ظ†â€Œط³ط§ط²غŒ ط´ط¯ظ‡طŒ ط¯ع©ظ…ظ‡ آ«ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ط¬ط¯غŒط¯آ» ظپط¹ط§ظ„طŒ API TBD. |
| `/simulators/modian/contracts/commission/new` | ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ | ظˆغŒط²ط§ط±ط¯ ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒط› ط´ط§ظ…ظ„ ظپغŒظ„ط¯ آ«ظ†ط±ط® ع©ط§ط±ظ…ط²ط¯آ» (ط§ط®طھغŒط§ط±غŒ) ظˆ ظ…ط±طھط¨â€Œط³ط§ط²غŒ طھط£غŒغŒط¯ ظ†ظ‡ط§غŒغŒ ظ…ط·ط§ط¨ظ‚ UIط› UI-onlyطŒ API TBD. |
| `/simulators/modian/contracts/commission/detail` | ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ | طµظپط­ظ‡ ط¬ط²ط¦غŒط§طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒط› UI-only (TBD: ظ†ع¯ط§ط´طھ ط¯ظ‚غŒظ‚ ط¨ظ‡ API/ط´ظ†ط§ط³ظ‡). |

#### ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ غ±غ´غ°غ´/غ°غ¹/غ±غ· â€” ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ ظˆ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ (UI-only)

**ظ…ط³غŒط±ظ‡ط§ ظˆ طµظپط­ط§طھ UI (ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§)**

- ظ…ظ†ظˆغŒ آ«ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§آ» ط¯ط± ط³ط§غŒط¯ط¨ط§ط± ظ…ظˆط¯غŒط§ظ† ظپط¹ط§ظ„ ط´ط¯ظ‡ ظˆ ط´ط§ظ…ظ„ ط²غŒط±ظ…ط³غŒط±ظ‡ط§غŒ ط²غŒط± ط§ط³طھ:
  - ظ„غŒط³طھ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ:
    - طµظپط­ظ‡: `/simulators/modian/contracts/contracting`
  - ظˆغŒط²ط§ط±ط¯ ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ (ع†ظ†ط¯ظ…ط±ط­ظ„ظ‡â€Œط§غŒ طھط§ طھط£غŒغŒط¯ ظ†ظ‡ط§غŒغŒ):
    - طµظپط­ظ‡: `/simulators/modian/contracts/contracting/new`
  - ظ„غŒط³طھ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ:
    - طµظپط­ظ‡: `/simulators/modian/contracts/commission`
  - ظˆغŒط²ط§ط±ط¯ ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ:
    - طµظپط­ظ‡: `/simulators/modian/contracts/commission/new`

**ظˆط¶ط¹غŒطھ ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ UI ظˆ Search Suite**

- ظ„غŒط³طھ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ (`/simulators/modian/contracts/contracting`) ط¨ط± ط§ط³ط§ط³ ط§ط³ع©ظ„طھ ط¬ط¯ظˆظ„ old-Invoices/exports ط³ط§ط®طھظ‡ ط´ط¯ظ‡
  ظˆ ط§ط² ع©ط§ظ…ظ¾ظˆظ†ظ†طھâ€Œظ‡ط§غŒ ظ…ط´طھط±ع© `ScrollableTableShell`, `ColumnsVisibilityBar`, `EmptyTableRow` ط¨ط±ط§غŒ ظ†ظ…ط§غŒط´ ط¬ط¯ظˆظ„ ظˆ ظˆط¶ط¹غŒطھ آ«ظ…ظˆط±ط¯غŒ ط«ط¨طھ ظ†ط´ط¯ظ‡آ» ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ط¯.
- ط¢ط±ط§غŒظ‡ظ” `columnsConfig` ط¨ط±ط§غŒ ط¬ط¯ظˆظ„ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ ع©ط§ظ…ظ„ ط´ط¯ظ‡ ط§ط³طھط›
  طھظ…ط§ظ… ط³طھظˆظ†â€Œظ‡ط§غŒ ظ…ظˆط±ط¯ ظ†غŒط§ط² (ط§ط² ط¬ظ…ظ„ظ‡ آ«ط´ظ…ط§ط±ظ‡ ظ‚ط±ط§ط±ط¯ط§ط¯آ»طŒ آ«ظ†ظ‚ط´ ظ…ظˆط¯غŒآ»طŒ ط´ظ†ط§ط³ظ‡â€Œظ‡ط§ ظˆ ظˆط¶ط¹غŒطھâ€Œظ‡ط§) ظ‡ظ… ط¯ط± ط¬ط¯ظˆظ„ ظˆ ظ‡ظ… ط¯ط± ظ†ظˆط§ط± آ«ظ†ظ…ط§غŒط´ ط³طھظˆظ†â€Œظ‡ط§آ»
  ط¯ط± ط¯ط³طھط±ط³ ظ‡ط³طھظ†ط¯.
- ط¨ط±ط§غŒ ظ…ط³غŒط± `/simulators/modian/contracts/contracting` ع©ط§ظ†ظپغŒع¯ ط§ط®طھطµط§طµغŒ ط¯ط± `SearchByFilters` طھط¹ط±غŒظپ ط´ط¯ظ‡ ط§ط³طھ:
  - UI ط¬ط³طھط¬ظˆغŒ ط³ط§ط¯ظ‡ ظˆ ظ¾غŒط´ط±ظپطھظ‡ ط¨ط§ طµظپط­ظ‡ظ” ظ…ط±ط¬ط¹ ظ‡ظ…â€Œطھط±ط§ط² ط´ط¯ظ‡طŒ
  - غ±غ· ظپغŒظ„ط¯ ط¬ط³طھط¬ظˆغŒ ظ¾غŒط´ط±ظپطھظ‡ (طھط§ط±غŒط®â€Œظ‡ط§طŒ ظپغŒظ„ط¯ظ‡ط§غŒ ظ…طھظ†غŒ/ط¹ط¯ط¯غŒ ظˆ ع©ط´ظˆغŒغŒ) ط¨ط§ ظ„غŒط¨ظ„ ظˆ ظ†ظˆط¹ ظˆط±ظˆط¯غŒ ظ…ظ†ط§ط³ط¨ ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡â€Œط§ظ†ط¯طŒ
  - ع¯ط²غŒظ†ظ‡â€Œظ‡ط§غŒ ط³ظ‡ ظپغŒظ„ط¯ ع©ط´ظˆغŒغŒ آ«ظ†ظˆط¹ ظ‚ط±ط§ط±ط¯ط§ط¯آ»طŒ آ«ظˆط¶ط¹غŒطھ ظ‚ط±ط§ط±ط¯ط§ط¯آ» ظˆ آ«ظ…ظˆط¶ظˆط¹ ظ‚ط±ط§ط±ط¯ط§ط¯آ» طھظ†ط¸غŒظ… ط´ط¯ظ‡â€Œط§ظ†ط¯طŒ
  - ط±ظپطھط§ط± ط¯ع©ظ…ظ‡ظ” آ«ط­ط°ظپ ظپغŒظ„طھط±آ» ط¨ط±ط§غŒ ظ¾ط§ع©â€Œع©ط±ط¯ظ† ظپغŒظ„ط¯ظ‡ط§غŒ طھط§ط±غŒط® ط§طµظ„ط§ط­ ط´ط¯ظ‡ ظˆ ظ…ط´ع©ظ„ ط§ط² ط¯ط³طھ ط±ظپطھظ† ظپظˆع©ظگط³ ط¯ط± ظپغŒظ„ط¯ظ‡ط§غŒ ظ…طھظ†غŒ/ط¹ط¯ط¯غŒ ط¨ط±ط·ط±ظپ ط´ط¯ظ‡ ط§ط³طھ.
- ظ‚ط¯ظ… ط§ظˆظ„ ظˆغŒط²ط§ط±ط¯ `/simulators/modian/contracts/contracting/new` ط´ط§ظ…ظ„ ط§ط³طھظ¾ط± ظ…ط´طھط±ع© ظˆ ظ…ط±ط­ظ„ظ‡ظ” آ«طھط¹غŒغŒظ† ظ†ظ‚ط´آ» ط§ط³طھ
  (ط±ط§ط¯غŒظˆظ‡ط§غŒ آ«ع©ط§ط±ظپط±ظ…ط§ / ظ¾غŒظ…ط§ظ†ع©ط§ط±آ» ط¨ط§ ظ¾غŒط´â€Œظپط±ط¶ آ«ع©ط§ط±ظپط±ظ…ط§آ» ظˆ ط¯ع©ظ…ظ‡ظ” آ«ط§ط¯ط§ظ…ظ‡آ»).
- طµظپط­ظ‡ظ” ظ„غŒط³طھ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ (`/simulators/modian/contracts/commission`) ط§ط² ظ†ط¸ط± ط§ط³ع©ظ„طھ ظ„غŒط³طھطŒ ظ†ظˆط§ط± ط§ط¨ط²ط§ط± ظˆ ط¯ع©ظ…ظ‡ظ” آ«ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ط¬ط¯غŒط¯آ»
  ط¨ط§ ظ„غŒط³طھ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ ظ‡ظ…â€Œطھط±ط§ط² ط´ط¯ظ‡ ط§ط³طھط› ظ‡ظ…â€Œطھط±ط§ط²ط³ط§ط²غŒ ع©ط§ظ…ظ„ ظپغŒظ„طھط±ظ‡ط§ ظˆ ط³طھظˆظ†â€Œظ‡ط§ ط¨ط¹ط¯ ط§ط² ظ†ظ‡ط§غŒغŒâ€Œط´ط¯ظ† ظ‚ظˆط§ظ†غŒظ† ط¯ط§ظ…ظ†ظ‡â€Œط§غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ ط§ظ†ط¬ط§ظ… ط®ظˆط§ظ‡ط¯ ط´ط¯.


#### ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ غ±غ´غ°غ´/غ±غ°/غ°غ¶ â€” طھع©ظ…غŒظ„ ظ…ظ†ظˆغŒ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ ظˆ طھط«ط¨غŒطھ Flowظ‡ط§ (UI-only)

**ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ (Commission)**
- طھع©ظ…غŒظ„ ظ…ظ†ظˆغŒ آ«ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§آ» ظˆ ظپط¹ط§ظ„â€Œط³ط§ط²غŒ Flow ط¯ع©ظ…ظ‡ظ” آ«ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ط¬ط¯غŒط¯آ» ط¯ط± ظ„غŒط³طھ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ (ظ†ظ…ط§غŒط´ ظ…ط±ط§ط­ظ„ ط¯ط±ط³طھ ظ…ط·ط§ط¨ظ‚ UI).
- ط§طµظ„ط§ط­ ط¨ط±ع†ط³ط¨â€Œظ‡ط§غŒ ظ†ظ‚ط´â€Œظ‡ط§ ط¯ط± ظ„غŒط³طھ ظˆ ظˆغŒط²ط§ط±ط¯: آ«ط¢ظ…ط± / ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±آ».
- ط§طµظ„ط§ط­ ط¬ط³طھط¬ظˆغŒ ظ¾غŒط´ط±ظپطھظ‡ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ:
  - آ«ظ†ظˆط¹ ظ‚ط±ط§ط±ط¯ط§ط¯آ» ظ…ط­ط¯ظˆط¯ ط¨ظ‡ آ«ط®ط±غŒط¯ / ظپط±ظˆط´آ».
  - ط¬ط§غŒع¯ط²غŒظ†غŒ طھظ…ط§ظ… ظ„غŒط¨ظ„â€Œظ‡ط§غŒ آ«ع©ط§ط±ظپط±ظ…ط§/ظ¾غŒظ…ط§ظ†ع©ط§ط±آ» ط¨ط§ آ«ط¢ظ…ط±/ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±آ».
- طھط؛غŒغŒط±ط§طھ ظˆغŒط²ط§ط±ط¯ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ:
  - ط­ط°ظپ ظپغŒظ„ط¯ آ«ظ†ظˆط¹ ط¢ظ…ط±آ» ط§ط² ظ…ط±ط­ظ„ظ‡ظ” آ«ظ†ظˆط¹ ظˆ طھط§ط±غŒط® ظ‚ط±ط§ط±ط¯ط§ط¯آ».
  - ط§ظپط²ظˆط¯ظ† ظپغŒظ„ط¯ ط¬ط¯غŒط¯ آ«ظ†ط±ط® ع©ط§ط±ظ…ط²ط¯ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ (ط§ط®طھغŒط§ط±غŒ)آ» ط¨غŒظ† آ«ط´ظ…ط§ط±ظ‡ ط¯ط§ط®ظ„غŒ ظ‚ط±ط§ط±ط¯ط§ط¯آ» ظˆ آ«طھظˆط¶غŒط­ط§طھآ».
  - ظ…ط±طھط¨â€Œط³ط§ط²غŒ ط¢غŒطھظ…â€Œظ‡ط§غŒ ظ…ط±ط­ظ„ظ‡ظ” آ«طھط£غŒغŒط¯ ظ†ظ‡ط§غŒغŒآ» ظ…ط·ط§ط¨ظ‚ ط´ظ…ط§ط±ظ‡â€Œط¨ظ†ط¯غŒ UI.
- ط¬ط¯ظˆظ„ ظ„غŒط³طھ: ط­ط°ظپ ط³طھظˆظ† آ«ظ…ط³ط¦ظˆظ„غŒطھ ظ…ط§ط¯ظ‡غ±غ¸آ».

**ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ (Contracting)**
- طھع©ظ…غŒظ„ ظˆغŒط²ط§ط±ط¯ ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ طھط§ ظ…ط±ط­ظ„ظ‡ظ” آ«طھط£غŒغŒط¯ ظ†ظ‡ط§غŒغŒآ» (ظ†ظˆط¹ ظˆ طھط§ط±غŒط® ظ‚ط±ط§ط±ط¯ط§ط¯طŒ ط§ط·ظ„ط§ط¹ط§طھ ظ‚ط±ط§ط±ط¯ط§ط¯طŒ ط§ط·ظ„ط§ط¹ط§طھ طھع©ظ…غŒظ„غŒطŒ طھط£غŒغŒط¯ ظ†ظ‡ط§غŒغŒ).
- ط§ط¹طھط¨ط§ط±ط³ظ†ط¬غŒ ظپغŒظ„ط¯ظ‡ط§غŒ ط§ط¬ط¨ط§ط±غŒ آ«ظ…ط¨ظ„ط؛ ظ‚ط±ط§ط±ط¯ط§ط¯(ط±غŒط§ظ„)آ» ظˆ آ«طھط§ط±غŒط® ط´ط±ظˆط¹ ظ‚ط±ط§ط±ط¯ط§ط¯آ» ط¨ط§ ظ¾غŒط§ظ… ط®ط·ط§غŒ ظ‚ط±ظ…ط² ظ‡ظ†ع¯ط§ظ… طھظ„ط§ط´ ط¨ط±ط§غŒ ط¹ط¨ظˆط±.
- ط¬ط¯ظˆظ„ آ«ظ¾غŒط´â€Œظ¾ط±ط¯ط§ط®طھ ظˆ ط¹ظ„غŒâ€Œط§ظ„ط­ط³ط§ط¨â€Œظ‡ط§آ»: ط§ظپط²ظˆط¯ظ†/ط­ط°ظپ ط¯ط± state ظˆ ط¹ط¯ظ… ظ†ظ…ط§غŒط´ طھغŒطھط±/ط¬ط¯ظˆظ„ ط¯ط± آ«طھط£غŒغŒط¯ ظ†ظ‡ط§غŒغŒآ» ط¯ط± طµظˆط±طھ ط®ط§ظ„غŒ ط¨ظˆط¯ظ†.
- ط¨ظ‡ط¨ظˆط¯ظ‡ط§غŒ UX/Flow ع¯ط²ط§ط±ط´â€Œط´ط¯ظ‡: ط§طµظ„ط§ط­ طھظˆط³طھ ظ…ط§ط¯ظ‡ غ±غ¸ ظˆ ط§ظپط²ظˆط¯ظ† ظ…ط³غŒط± آ«ط«ط¨طھâ€Œظ†ط§ظ…â€Œط´ط¯ع¯ط§ظ†آ» + ظ…ط±ط­ظ„ظ‡ظ” آ«طھط£غŒغŒط¯ ظ¾ط±ظˆظ†ط¯ظ‡آ» ط¨ط±ط§غŒ ط³ظ†ط§ط±غŒظˆغŒ ط«ط¨طھâ€Œظ†ط§ظ…â€Œط´ط¯ع¯ط§ظ†.

**ط§ط³طھط§ظ†ط¯ط§ط±ط¯ط³ط§ط²غŒ Importظ‡ط§ (Barrelظ‡ط§) ظˆ ع©غŒظپغŒطھ**
- ط§غŒط¬ط§ط¯/ط¢ظ¾ط¯غŒطھ Barrelظ‡ط§غŒ ظ…ط´طھط±ع© ط¨ط±ط§غŒ ط¬ط³طھط¬ظˆ ظˆ ط¬ط¯ظˆظ„:
  - `src/components/modian/common/search/index.ts`
  - `src/components/modian/common/table/index.ts`
- Lint ط¨ط±ط§غŒ ظپط§غŒظ„â€Œظ‡ط§غŒ ط§طµظ„ط§ط­â€Œط´ط¯ظ‡/ط§غŒط¬ط§ط¯ط´ط¯ظ‡ ط¯ط± ط§غŒظ† ط¯ظˆط±ظ‡ ع¯ط²ط§ط±ط´طŒ طµظپط± ط´ط¯ظ‡ ط§ط³طھط› ظ†طھغŒط¬ظ‡ظ” Build ط¯ط± ع¯ط²ط§ط±ط´ ط«ط¨طھ ظ†ط´ط¯ظ‡ ط§ط³طھ.

**ظ…ظˆط§ط±ط¯ ظ†غŒط§ط²ظ…ظ†ط¯ طھطµظ…غŒظ… ظ…ط¯غŒط± ظ¾ط±ظˆعکظ‡**
- ط³غŒط§ط³طھ طھغŒظ… ط¯ط±ط¨ط§ط±ظ‡ظ” `eslint-disable`ظ‡ط§غŒ ظ…ظˆط¶ط¹غŒ ط¨ط±ط§غŒ `no-restricted-imports` ظˆ ط§طµظ„ط§ط­ ظ…ط±ع©ط²غŒ Rule (ظ¾غŒط´ظ†ظ‡ط§ط¯ طھغŒظ…: ط§طµظ„ط§ط­ ظ…ط±ع©ط²غŒ).
- ط§ظ„ط²ط§ظ… ط§ط¬ط±ط§غŒ `npm run build` ظ‚ط¨ظ„ ط§ط² merge ظˆ ط«ط¨طھ ط®ط±ظˆط¬غŒ ط¯ط± ع¯ط²ط§ط±ط´.

**ظˆط¶ط¹غŒطھ ط§طھطµط§ظ„ ط¨ظ‡ ط¨ع©â€Œط§ظ†ط¯ ط¯ط± ط§غŒظ† ظپط§ط²**

- ط¯ط± ط¨ط§ط²ظ‡ظ” ظ…ط±ط¨ظˆط· ط¨ظ‡ ط§غŒظ† ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒطŒ ظ‡غŒع† endpoint ط¬ط¯غŒط¯غŒ ط¯ط± ط¨ع©â€Œط§ظ†ط¯ ظ…ط§عکظˆظ„ ظ…ظˆط¯غŒط§ظ† ط¨ط±ط§غŒ ظپغŒع†ط±ظ‡ط§غŒ ط²غŒط± طھط¹ط±غŒظپ ظ†ط´ط¯ظ‡ ط§ط³طھ:
  - طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ old-Invoices (ط®ط±غŒط¯ ط¯ط§ط®ظ„غŒطŒ ظپط±ظˆط´ ط¯ط§ط®ظ„غŒطŒ ظپط±ظˆط´ طµط§ط¯ط±ط§طھغŒ)طŒ
  - ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯ (ظˆط§ط±ط¯ط§طھطŒ ط¨ظˆط±ط³ ع©ط§ظ„ط§)طŒ
  - ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ ظˆ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ.
- طھظ…ط§ظ… طµظپط­ط§طھ ط²غŒط± ط¯ط± ط­ط§ظ„ ط­ط§ط¶ط± ط¯ط± ظ†ظ‚ط´ **UI-only / ط´ط¨غŒظ‡â€Œط³ط§ط²** ظ‡ط³طھظ†ط¯ ظˆ ظپظ‚ط· ط¯ط§ط¯ظ‡ظ” ظ…ط§ع© ظ†ظ…ط§غŒط´ ظ…غŒâ€Œط¯ظ‡ظ†ط¯:
  - `/simulators/modian/invoices/sales`, `/simulators/modian/invoices/sales/detail`
  - `/simulators/modian/invoices/exports`, `/simulators/modian/invoices/exports/detail`
  - `/simulators/modian/invoices/buy/detail`
  - `/simulators/modian/old-Invoices/buy`, `/simulators/modian/old-Invoices/buy/detail`
  - `/simulators/modian/old-Invoices/sales`, `/simulators/modian/old-Invoices/sales/detail`
  - `/simulators/modian/old-Invoices/exports`, `/simulators/modian/old-Invoices/exports/detail`
  - `/simulators/modian/purchase-announcements`, `/simulators/modian/purchase-announcements/imports`,
    `/simulators/modian/purchase-announcements/bourse`
  - `/simulators/modian/contracts/contracting`
- `/simulators/modian/contracts/contracting/new`
- `/simulators/modian/contracts/contracting/detail`
- `/simulators/modian/contracts/commission`
- `/simulators/modian/contracts/commission/new`
- `/simulators/modian/contracts/commission/detail`
- ط¨ط®ط´â€Œظ‡ط§غŒ ظ‚ط¨ظ„غŒ ط³ظ†ط¯ ع©ظ‡ endpointظ‡ط§غŒ ظ…ظˆط¬ظˆط¯ ظ…ظˆط¯غŒط§ظ† ط±ط§ ظ¾ظˆط´ط´ ظ…غŒâ€Œط¯ظ‡ظ†ط¯ (ظ…ط§ظ†ظ†ط¯ `taxfile`, `bills`, `memory-uid`,
  `users-roles`, `roles`, `portal`, `home` ظˆ â€¦) ط¯ط± ط§غŒظ† ظپط§ط² ط¨ط¯ظˆظ† طھط؛غŒغŒط± ط¨ط§ظ‚غŒ ظ…غŒâ€Œظ…ط§ظ†ظ†ط¯ط›
  طھظ†ظ‡ط§ ظ…طµط±ظپ UI ط¬ط¯غŒط¯ ط±ظˆغŒ ظ‡ظ…غŒظ† endpoints ط¯ط± ع¯ط²ط§ط±ط´â€Œظ‡ط§غŒ ظپغŒع†ط± طھظˆط¶غŒط­ ط¯ط§ط¯ظ‡ ط´ط¯ظ‡ ط§ط³طھ.


## ط¨ط®ط´ غ³ â€” Future API Mapping (TBD)

ط¯ط± ط§غŒظ† ط¨ط®ط´طŒ ط¨ط±ط§غŒ ظپغŒع†ط±ظ‡ط§غŒ ط²غŒط± **ط¬ط¯ظˆظ„ ظ†ع¯ط§ط´طھ UI â†’ API** طھط¹ط±غŒظپ ط®ظˆط§ظ‡ط¯ ط´ط¯. طھط§ ط²ظ…ط§ظ†غŒâ€Œع©ظ‡ endpointظ‡ط§غŒ ظ…طھظ†ط§ط¸ط± ط¯ط± ط¨ع©â€Œط§ظ†ط¯ ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ظˆ ط¯ط±
`backend-src` طھط£غŒغŒط¯ ظ†ط´ط¯ظ‡â€Œط§ظ†ط¯طŒ ط§غŒظ† ظپغŒع†ط±ظ‡ط§ ط¯ط± ظˆط¶ط¹غŒطھ آ«UI-only / ط´ط¨غŒظ‡â€Œط³ط§ط²آ» ط¨ط§ظ‚غŒ ظ…غŒâ€Œظ…ط§ظ†ظ†ط¯ ظˆ طµط±ظپط§ظ‹ ط¨ط±ط§غŒ ط·ط±ط§ط­غŒ ظˆ ط¯ظ…ظˆ ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œط´ظˆظ†ط¯:

- طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§غŒ ط®ط±غŒط¯/ظپط±ظˆط´/طµط§ط¯ط±ط§طھ ظ‚ط¨ظ„ ط§ط² غ±غ´غ°غ²/غ°غ³/غ²غ¶ (`old-Invoices/*`)
- ع¯ط²ط§ط±ط´ ظپط§غŒظ„â€Œظ‡ط§غŒ ط®ط±ظˆط¬غŒ طµظˆط±طھط­ط³ط§ط¨â€Œظ‡ط§
- ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯ (Imports / ط¨ظˆط±ط³ ع©ط§ظ„ط§)
- ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ ظˆ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ

### 3.1 Search Suite Mapping Table (Unified)

ط§غŒظ† ط¬ط¯ظˆظ„ آ«ظ‚ط±ط§ط±ط¯ط§ط¯ ظ…ط´طھط±ع©آ» ط¨غŒظ† طھغŒظ… UI ظˆ طھغŒظ… ط¨ع©â€Œط§ظ†ط¯ ط¨ط±ط§غŒ طھظ…ط§ظ… طµظپط­ط§طھغŒ ط§ط³طھ ع©ظ‡ ط§ط² **Shared Search Suite** ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ظ†ط¯.
ظ‡ط± endpoint ط¬ط³طھط¬ظˆ/ظ„غŒط³طھ ع©ظ‡ ط¨ط±ط§غŒ ط§غŒظ† طµظپط­ط§طھ ط³ط§ط®طھظ‡ ظ…غŒâ€Œط´ظˆط¯ ط¨ط§غŒط¯ **ط¯ظ‚غŒظ‚ط§ظ‹** ط§ط² ظ‡ظ…غŒظ† ظ†ط§ظ…â€Œع¯ط°ط§ط±غŒ ظˆ طھط¨ط¯غŒظ„â€Œظ‡ط§ ظ¾غŒط±ظˆغŒ ع©ظ†ط¯.

**Legend ظˆط¶ط¹غŒطھ**
- **Existing**: ط¯ط± ط¨ع©â€Œط§ظ†ط¯ ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ظˆ ظ‚ط§ط¨ظ„ ط§ط³طھظپط§ط¯ظ‡
- **Mock**: ظپط¹ظ„ط§ظ‹ ط¯ط§ط¯ظ‡ظ” ظ†ظ…ط§غŒط´غŒ ط¯ط± UI
- **UI-only**: طµط±ظپط§ظ‹ UI/ط´ط¨غŒظ‡â€Œط³ط§ط² (endpoint ط±ط³ظ…غŒ ظ†ط¯ط§ط±ط¯)
- **TBD**: ظ‚ط±ط§ط±ط¯ط§ط¯/endpoint ظ‡ظ†ظˆط² ظ†ظ‡ط§غŒغŒ ظ†ط´ط¯ظ‡

#### 3.1.1 ظپغŒظ„ط¯ظ‡ط§غŒ ظ…ط´طھط±ع© (SearchByFilters / SearchByTaxId)

| ط¯ط§ظ…ظ†ظ‡/طµظپط­ظ‡ | ط¨ط®ط´ UI | ظپغŒظ„ط¯ UI (Label) | ع©ظ„غŒط¯ UI (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ) | ظ†ظˆط¹ | Query/Body (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ) | API Field (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ) | ظˆط¶ط¹غŒطھ | طھظˆط¶غŒط­ |
|---|---|---|---|---|---|---|---|---|
| invoices/*, old-Invoices/* | طھط¨ آ«ط´ظ…ط§ط±ظ‡ ظ…ط§ظ„غŒط§طھغŒآ» | ط´ظ…ط§ط±ظ‡ ظ…ط§ظ„غŒط§طھغŒ | `taxId` | string | `taxId` | `taxId` | TBD | ظˆط±ظˆط¯غŒ ط¯ظ‚غŒظ‚ط› ط¨ط±ط§غŒ ط¬ط³طھط¬ظˆ ظ…ط³طھظ‚غŒظ… |
| invoices/*, old-Invoices/* | طھط¨ آ«ظپغŒظ„طھط±ظ‡ط§آ» | ظ†ظ‚ط´ ظ…ط¤ط¯غŒ | `role` | string[] | `role` | `role` | TBD | ع¯ط²غŒظ†ظ‡â€Œظ‡ط§: آ«ط¹ط§ط¯غŒ / ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط± / ط¢ظ…ط±آ» |
| invoices/*, old-Invoices/* | طھط¨ آ«ظپغŒظ„طھط±ظ‡ط§آ» | ظˆط¶ط¹غŒطھ طµظˆط±طھط­ط³ط§ط¨ | `status` | string[] | `status` | `status` | TBD | ط¯ط§ظ…ظ†ظ‡ UI: ط±ط¯ ط´ط¯ظ‡طŒ طھط§غŒغŒط¯ ط´ط¯ظ‡طŒ طھط§غŒغŒط¯ ط³غŒط³طھظ…غŒطŒ ط¯ط± ط§ظ†طھط¸ط§ط± ظˆط§ع©ظ†ط´طŒ ط¹ط¯ظ… ط§ظ…ع©ط§ظ† ظˆط§ع©ظ†ط´طŒ ط¹ط¯ظ… ظ†غŒط§ط² ط¨ظ‡ ظˆط§ع©ظ†ط´طŒ ط§ط¨ط·ط§ظ„ ط´ط¯ظ‡ |
| invoices/*, old-Invoices/* | طھط¨ آ«ظپغŒظ„طھط±ظ‡ط§آ» | ظ…ظˆط¶ظˆط¹ طµظˆط±طھط­ط³ط§ط¨ | `subject` | string[] | `subject` | `subject` | TBD | ظˆط§عکع¯ط§ظ† ط¯ط§ظ…ظ†ظ‡ ط¨ط§غŒط¯ ظ‚ظپظ„ ط´ظˆط¯ (Enum/Constant) |
| invoices/*, old-Invoices/* | طھط¨ آ«ظپغŒظ„طھط±ظ‡ط§آ» | ع©ط¯ ط´ط¹ط¨ظ‡ | `branchCode` | string | `branchCode` | `branchCode` | TBD | ط¹ط¯ط¯/ظ…طھظ† (ظ…ط·ط§ط¨ظ‚ UI) |
| invoices/*, old-Invoices/* | طھط¨ آ«ظپغŒظ„طھط±ظ‡ط§آ» | ط§ظ„ع¯ظˆغŒ طµظˆط±طھط­ط³ط§ط¨ | `invoicePattern` | string | `invoicePattern` | `invoicePattern` | TBD | ط¯ط± ظپط±ظˆط´ ط¯ط§ط®ظ„غŒ ع¯ط²غŒظ†ظ‡ آ«ط§ظ„ع¯ظˆغŒ ط¨ظˆط±ط³ ع©ط§ظ„ط§آ» ط´ط±ط·غŒ ط§ط³طھ |
| invoices/*, old-Invoices/* | طھط¨ آ«ظپغŒظ„طھط±ظ‡ط§آ» | طھط§ط±غŒط® طµط¯ظˆط± ط§ط² | `invoiceIssueDateFrom` | date | `invoiceIssueDateFrom` | `invoiceIssueDate` | TBD | UI ط¬ظ„ط§ظ„غŒ â†’ API ط¨ط§غŒط¯ ISO8601 ط¨ط§ط´ط¯ |
| invoices/*, old-Invoices/* | طھط¨ آ«ظپغŒظ„طھط±ظ‡ط§آ» | طھط§ط±غŒط® طµط¯ظˆط± طھط§ | `invoiceIssueDateTo` | date | `invoiceIssueDateTo` | `invoiceIssueDate` | TBD | UI ط¬ظ„ط§ظ„غŒ â†’ API ط¨ط§غŒط¯ ISO8601 ط¨ط§ط´ط¯ |

#### 3.1.2 ظپغŒظ„ط¯ظ‡ط§غŒ ط§ط®طھطµط§طµغŒ old-Invoices

| ط¯ط§ظ…ظ†ظ‡/طµظپط­ظ‡ | ط¨ط®ط´ UI | ظپغŒظ„ط¯ UI (Label) | ع©ظ„غŒط¯ UI (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ) | ظ†ظˆط¹ | Query/Body (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ) | API Field (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ) | ظˆط¶ط¹غŒطھ | طھظˆط¶غŒط­ |
|---|---|---|---|---|---|---|---|---|
| old-Invoices/* | ط²غŒط±ظ…ظ†ظˆظ‡ط§غŒ ط«ط§ط¨طھ | ط³ط§ظ„ ظ…ط§ظ„غŒط§طھغŒ | `taxYear` | string | `taxYear` | `taxYear` | TBD | ع¯ط²غŒظ†ظ‡â€Œظ‡ط§: غ±غ´غ°غ° طھط§ غ±غ´غ°غ³ (ط¯ط± UI ظپط¹ظ„ط§ظ‹ ط«ط§ط¨طھ) |
| old-Invoices/* | ط²غŒط±ظ…ظ†ظˆظ‡ط§غŒ ط«ط§ط¨طھ | ط¯ظˆط±ظ‡ ظ…ط§ظ„غŒط§طھغŒ (ظپطµظ„) | `taxPeriod` | string | `taxPeriod` | `taxPeriod` | TBD | ع¯ط²غŒظ†ظ‡â€Œظ‡ط§: ط¨ظ‡ط§ط±/طھط§ط¨ط³طھط§ظ†/ظ¾ط§غŒغŒط²/ط²ظ…ط³طھط§ظ† |

#### 3.1.3 ظپغŒظ„ط¯ظ‡ط§غŒ ط§ط®طھطµط§طµغŒ ط§ط¹ظ„ط§ظ…غŒظ‡â€Œظ‡ط§غŒ ط®ط±غŒط¯

| ط¯ط§ظ…ظ†ظ‡/طµظپط­ظ‡ | ط¨ط®ط´ UI | ظپغŒظ„ط¯ UI (Label) | ع©ظ„غŒط¯ UI (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ) | ظ†ظˆط¹ | Query/Body (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ) | API Field (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ) | ظˆط¶ط¹غŒطھ | طھظˆط¶غŒط­ |
|---|---|---|---|---|---|---|---|---|
| purchase-announcements/imports | ظپغŒظ„طھط±ظ‡ط§ | ظ†ظˆط¹ ظ…ظ†ط¨ط¹ | `sourceType` | const | `sourceType=imports` | `sourceType` | UI-only | ط§ط² ظ…ط³غŒط± طµظپط­ظ‡ ظ‚ط§ط¨ظ„ ط§ط³طھظ†طھط§ط¬ ط§ط³طھ |
| purchase-announcements/bourse | ظپغŒظ„طھط±ظ‡ط§ | ظ†ظˆط¹ ظ…ظ†ط¨ط¹ | `sourceType` | const | `sourceType=bourse` | `sourceType` | UI-only | ط§ط² ظ…ط³غŒط± طµظپط­ظ‡ ظ‚ط§ط¨ظ„ ط§ط³طھظ†طھط§ط¬ ط§ط³طھ |
| purchase-announcements/* | ظپغŒظ„طھط±ظ‡ط§ | ظˆط¶ط¹غŒطھ ط§ط¹ظ„ط§ظ…غŒظ‡ | `noticeStatus` | string[] | `noticeStatus` | `noticeStatus` | TBD | ظˆط§عکع¯ط§ظ† ط¯ط§ظ…ظ†ظ‡ TBD |
| purchase-announcements/* | ظپغŒظ„طھط±ظ‡ط§ | ظ…ظˆط¶ظˆط¹ ط§ط¹ظ„ط§ظ…غŒظ‡ | `noticeSubject` | string[] | `noticeSubject` | `noticeSubject` | TBD | ظˆط§عکع¯ط§ظ† ط¯ط§ظ…ظ†ظ‡ TBD |
| purchase-announcements/* | ظپغŒظ„طھط±ظ‡ط§ | طھط§ط±غŒط® ط§ط²/طھط§ | `noticeDateFrom/To` | date | `noticeDateFrom`, `noticeDateTo` | `noticeDate` | TBD | UI ط¬ظ„ط§ظ„غŒ â†’ ISO8601 |

#### 3.1.4 ظپغŒظ„ط¯ظ‡ط§غŒ ط§ط®طھطµط§طµغŒ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ (Contracting / Commission)

| ط¯ط§ظ…ظ†ظ‡/طµظپط­ظ‡ | ط¨ط®ط´ UI | ظپغŒظ„ط¯ UI (Label) | ع©ظ„غŒط¯ UI (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ) | ظ†ظˆط¹ | Query/Body (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ) | API Field (ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ) | ظˆط¶ط¹غŒطھ | طھظˆط¶غŒط­ |
|---|---|---|---|---|---|---|---|---|
| contracts/contracting | ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡ | ظ†ظˆط¹ ظ‚ط±ط§ط±ط¯ط§ط¯ | `contractType` | `contractType` | TBD | ع¯ط²غŒظ†ظ‡â€Œظ‡ط§ ط¯ط± UI طھظ†ط¸غŒظ… ط´ط¯ظ‡â€Œط§ظ†ط¯ |
| contracts/contracting | ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡ | ظˆط¶ط¹غŒطھ ظ‚ط±ط§ط±ط¯ط§ط¯ | `contractStatus` | `contractStatus` | TBD | ع¯ط²غŒظ†ظ‡â€Œظ‡ط§ ط¯ط± UI طھظ†ط¸غŒظ… ط´ط¯ظ‡â€Œط§ظ†ط¯ |
| contracts/contracting | ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡ | ظ…ظˆط¶ظˆط¹ ظ‚ط±ط§ط±ط¯ط§ط¯ | `contractSubject` | `contractSubject` | TBD | ع¯ط²غŒظ†ظ‡â€Œظ‡ط§ ط¯ط± UI طھظ†ط¸غŒظ… ط´ط¯ظ‡â€Œط§ظ†ط¯ |
| contracts/contracting/new | ظˆغŒط²ط§ط±ط¯ | ظ†ظ‚ط´ | `contractRole` | `contractRole` | UI-only | ع¯ط²غŒظ†ظ‡â€Œظ‡ط§: آ«ع©ط§ط±ظپط±ظ…ط§ / ظ¾غŒظ…ط§ظ†ع©ط§ط±آ» (ظ¾غŒط´â€Œظپط±ط¶ UI: ع©ط§ط±ظپط±ظ…ط§) |
| contracts/contracting | ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡ | ط³ط§غŒط± ظپغŒظ„ط¯ظ‡ط§غŒ ظ¾غŒط´ط±ظپطھظ‡ | â€” | â€” | TBD | **ظ†غŒط§ط²ظ…ظ†ط¯ ط§ط³طھط®ط±ط§ط¬ ط¯ظ‚غŒظ‚ ع©ظ„غŒط¯ظ‡ط§ ط§ط² ع©ط§ظ†ظپغŒع¯ SearchByFilters** |
| contracts/commission | ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡ | ظ†ظ‚ط´ ظ…ظˆط¯غŒ | `role` | `role` | TBD | ظ„غŒط¨ظ„â€Œظ‡ط§غŒ UI: آ«ط¢ظ…ط± / ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±آ» |
| contracts/commission | ط¬ط³طھط¬ظˆ ظ¾غŒط´ط±ظپطھظ‡ | ظ†ظˆط¹ ظ‚ط±ط§ط±ط¯ط§ط¯ | `contractType` | `contractType` | TBD | ع¯ط²غŒظ†ظ‡â€Œظ‡ط§: ظپظ‚ط· آ«ط®ط±غŒط¯ / ظپط±ظˆط´آ» (ظ¾غŒط´ظ†ظ‡ط§ط¯ ظ…ظ‚ط¯ط§ط± ط°ط®غŒط±ظ‡â€Œط³ط§ط²غŒ: `buy` / `sell`) |
| contracts/commission/new | ظˆغŒط²ط§ط±ط¯ | ظ†ط±ط® ع©ط§ط±ظ…ط²ط¯ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ (ط§ط®طھغŒط§ط±غŒ) | `commissionRate` | `commissionRate` | UI-only | ط¯ط±طµط¯ (غ° طھط§ غ±غ°غ°) â€” ظ…ط­ظ„ ظ†ظ…ط§غŒط´: ط¨غŒظ† آ«ط´ظ…ط§ط±ظ‡ ط¯ط§ط®ظ„غŒ ظ‚ط±ط§ط±ط¯ط§ط¯آ» ظˆ آ«طھظˆط¶غŒط­ط§طھآ» |


#### 3.1.5 Governance (ط§ظ„ط²ط§ظ…غŒ)
- ظ‡ط± طµظپط­ظ‡â€Œط§غŒ ع©ظ‡ ط§ط² Search Suite ط§ط³طھظپط§ط¯ظ‡ ظ…غŒâ€Œع©ظ†ط¯ ط¨ط§غŒط¯ ظپظ‚ط· ط§ط² `src/components/modian/common/search/*` ظ…طµط±ظپ ع©ظ†ط¯ط› **ع©ظ¾غŒ/ظپظˆط±ع© ظ…ظ…ظ†ظˆط¹**.
- ظ‡ط± طھط؛غŒغŒط± ط¯ط± ظ†ط§ظ…/ط¯ط§ظ…ظ†ظ‡ظ” ظپغŒظ„ط¯ظ‡ط§غŒ Search Suite ط¨ط§غŒط¯ ظ‡ظ…â€Œط²ظ…ط§ظ† ط¯ط± ط§غŒظ† ط¬ط¯ظˆظ„ ظˆ ظ‚ط±ط§ط±ط¯ط§ط¯ endpoint ظ…ط±ط¨ظˆط·ظ‡ ط§ط¹ظ…ط§ظ„ ط´ظˆط¯.
- طھط¨ط¯غŒظ„ طھط§ط±غŒط®: UI ط¬ظ„ط§ظ„غŒ â†’ API ظ‡ظ…غŒط´ظ‡ ISO8601 (ع¯ط±غŒظ†ظˆغŒع†/طھظˆط§ظپظ‚â€Œط´ط¯ظ‡) ظˆ طھط¨ط¯غŒظ„ ظپظ‚ط· ط¯ط± ظ„ط§غŒظ‡ UI/lib ط§ظ†ط¬ط§ظ… ظ…غŒâ€Œط´ظˆط¯.

### 3.2 ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ â€” Draft API Mapping (TBD)

> ط§غŒظ† ط¨ط®ط´ طµط±ظپط§ظ‹ **ظ¾غŒط´ظ†ظˆغŒط³ ظ‚ط±ط§ط±ط¯ط§ط¯ API** ط¨ط±ط§غŒ آ«ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§آ» ط§ط³طھ ظˆ ظ‡ظ†ظˆط² ظ‡غŒع† ط§ط¯ط¹ط§غŒغŒ ط¯ط±ط¨ط§ط±ظ‡ظ” ظˆط¬ظˆط¯/ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط¯ط± ط¨ع©â€Œط§ظ†ط¯ ظ†ط¯ط§ط±ط¯.
> طھط§ ظ‚ط¨ظ„ ط§ط² ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ظˆ طھط£غŒغŒط¯ ط±ط³ظ…غŒ ط¯ط± ط¨ع©â€Œط§ظ†ط¯طŒ ظ‡ظ…ظ‡ظ” ظ…ط³غŒط±ظ‡ط§غŒ `/simulators/modian/contracts/*` ط¯ط± ظˆط¶ط¹غŒطھ **UI-only** ط¨ط§ظ‚غŒ ظ…غŒâ€Œظ…ط§ظ†ظ†ط¯.

#### 3.2.1 ظ…ط³غŒط±ظ‡ط§غŒ UI (Reference / UI-only)

- `/simulators/modian/contracts/contracting`
- `/simulators/modian/contracts/contracting/new`
- `/simulators/modian/contracts/commission`
- `/simulators/modian/contracts/commission/new`

#### 3.2.2 Endpointظ‡ط§غŒ ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ (TBD)

| ظ…ط³غŒط± (API) | ظ…طھط¯ | ط´ط±ط­ | ظˆط¶ط¹غŒطھ |
| --- | --- | --- | --- |
| `/api/modian/contracts/contracting` | `GET` | ظ„غŒط³طھ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ (ظ¾ط´طھغŒط¨ط§ظ†غŒ ط§ط² Search Suiteط› Query TBD) | TBD |
| `/api/modian/contracts/contracting` | `POST` | ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ (ط®ط±ظˆط¬غŒ: `id` ظ‚ط±ط§ط±ط¯ط§ط¯) | TBD |
| `/api/modian/contracts/commission` | `GET` | ظ„غŒط³طھ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§غŒ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ (Query TBD) | TBD |
| `/api/modian/contracts/commission` | `POST` | ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ط­ظ‚â€Œط§ظ„ط¹ظ…ظ„ع©ط§ط±غŒ (ط®ط±ظˆط¬غŒ: `id` ظ‚ط±ط§ط±ط¯ط§ط¯) | TBD |
| `/api/modian/contracts/:id` | `GET` | ط¬ط²ط¦غŒط§طھ ظ‚ط±ط§ط±ط¯ط§ط¯ (ط¨ط±ط§غŒ طµظپط­ظ‡ظ” ط¬ط²ط¦غŒط§طھ/ظˆغŒط±ط§غŒط´ ط¯ط± ط¢غŒظ†ط¯ظ‡) | TBD |
| `/api/modian/contracts/:id` | `PATCH` | ظˆغŒط±ط§غŒط´/طھع©ظ…غŒظ„ ظ‚ط±ط§ط±ط¯ط§ط¯ (ط¨ط±ط§غŒ ظˆغŒط²ط§ط±ط¯ ع†ظ†ط¯ظ…ط±ط­ظ„ظ‡â€Œط§غŒ ط¯ط± ط¢غŒظ†ط¯ظ‡) | TBD |
| `/api/modian/contracts` | `GET` | ظ„غŒط³طھ ع©ظ„غŒ ظ‚ط±ط§ط±ط¯ط§ط¯ظ‡ط§ (ظپغŒظ„طھط±ظ‡ط§غŒ ظ…ط´طھط±ع© ظ…ط«ظ„ `role=...` ظˆ ...) | TBD |

#### 3.2.3 Queryظ‡ط§غŒ ظ…ط´طھط±ع© ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ (TBD)

- `role`: ظ†ظ‚ط´ ظ…ظˆط¯غŒ ط¯ط± ظ‚ط±ط§ط±ط¯ط§ط¯ (`employer` غŒط§ `contractor`) â€” ظ†ظ…ظˆظ†ظ‡: `GET /api/modian/contracts?role=employer`
- `page`, `pageSize`: طµظپط­ظ‡â€Œط¨ظ†ط¯غŒ
- `sort`, `order`: ظ…ط±طھط¨â€Œط³ط§ط²غŒ
- ط³ط§غŒط± ظپغŒظ„طھط±ظ‡ط§غŒ Search Suite (ظˆط¶ط¹غŒطھâ€Œظ‡ط§طŒ ط´ظ†ط§ط³ظ‡â€Œظ‡ط§طŒ ط¨ط§ط²ظ‡ طھط§ط±غŒط® ظˆ ...) ط¯ط± Block B ط¨ظ‡â€Œطµظˆط±طھ ط¬ط¯ظˆظ„ Mapping طھط¹ط±غŒظپ ظ…غŒâ€Œط´ظˆظ†ط¯.

#### 3.2.4 Mapping ط­ط¯ط§ظ‚ظ„غŒ ظˆغŒط²ط§ط±ط¯ آ«ط«ط¨طھ ظ‚ط±ط§ط±ط¯ط§ط¯ ظ¾غŒظ…ط§ظ†ع©ط§ط±غŒ / ظ‚ط¯ظ… ط§ظˆظ„آ» (TBD)

> ظ…ط±ط¬ط¹ UI: طµظپط­ظ‡ظ” `/simulators/modian/contracts/contracting/new` (Stateظ‡ط§غŒ ظپط¹ظ„غŒ ط¯ط± UI).
> ظ‡ط¯ظپ ط§غŒظ† ط¬ط¯ظˆظ„: ظپظ‚ط· ظ‡ظ…â€Œظ†ط§ظ…â€Œط³ط§ط²غŒ ط§ظˆظ„غŒظ‡ظ” ظپغŒظ„ط¯ظ‡ط§ ط¨ط±ط§غŒ ط·ط±ط§ط­غŒ API ط¢غŒظ†ط¯ظ‡ (ط¨ط¯ظˆظ† ط§ظ„ط²ط§ظ… ط¨ظ‡ ط§غŒظ† ظ†ط§ظ…â€Œظ‡ط§).

| ظپغŒظ„ط¯/State ط¯ط± UI | ظ¾غŒط´ظ†ظ‡ط§ط¯ ظ†ط§ظ… ظپغŒظ„ط¯ ط¯ط± API | ظ…ط­ظ„ | طھظˆط¶غŒط­ | ظˆط¶ط¹غŒطھ |
| --- | --- | --- | --- | --- |
| `role` | `role` | Body | ظ†ظ‚ط´ ظ…ظˆط¯غŒ: `employer` / `contractor` | TBD |
| `economicCode` | `counterpartyEconomicCode` | Body | ظˆظ‚طھغŒ ط­ط§ظ„طھ ظ¾غŒط´â€Œظپط±ط¶ آ«ط«ط¨طھ ط¨ط§ ط´ظ…ط§ط±ظ‡ ط§ظ‚طھطµط§ط¯غŒ ظ¾غŒظ…ط§ظ†ع©ط§ط±آ» ظپط¹ط§ظ„ ط§ط³طھ | TBD |
| `useIdentityAndPostalMode` | `useIdentityAndPostalMode` | Body | ظˆظ‚طھغŒ ع©ط§ط±ط¨ط± ط¨ظ‡ ط­ط§ظ„طھ آ«ط´ظ†ط§ط³ظ‡ ظ‡ظˆغŒطھغŒ + ع©ط¯ظ¾ط³طھغŒآ» ط³ظˆغŒغŒع† ظ…غŒâ€Œع©ظ†ط¯ | TBD |
| `personType` | `counterpartyPersonType` | Body | ظ†ظˆط¹ ط´ط®طµ: ط­ظ‚غŒظ‚غŒ ط§غŒط±ط§ظ†غŒ/ط؛غŒط±ط§غŒط±ط§ظ†غŒ/ط­ظ‚ظˆظ‚غŒ/ظ…ط´ط§ط±ع©طھ ظ…ط¯ظ†غŒ | TBD |
| `nationalOrForeignId` | `counterpartyNationalOrForeignId` | Body | ط´ظ…ط§ط±ظ‡ ظ…ظ„غŒ غŒط§ ط´ظ…ط§ط±ظ‡ ظپط±ط§ع¯غŒط± (ط¨ط³طھظ‡ ط¨ظ‡ `personType`) | TBD |
| `postalCode` | `counterpartyPostalCode` | Body | ع©ط¯ظ¾ط³طھغŒ (غ±غ° ط±ظ‚ظ…) | TBD |
| `legalId` | `counterpartyLegalId` | Body | ط´ظ†ط§ط³ظ‡ ظ…ظ„غŒ (غ±غ± ط±ظ‚ظ…) â€” ظپظ‚ط· ط¯ط± ط­ط§ظ„طھ `ط­ظ‚ظˆظ‚غŒ` | TBD |
| `partnershipId` | `counterpartyPartnershipId` | Body | ط´ظ†ط§ط³ظ‡ ظ…ط´ط§ط±ع©طھ ظ…ط¯ظ†غŒ (غ±غ± ط±ظ‚ظ…) â€” ظپظ‚ط· ط¯ط± ط­ط§ظ„طھ `ظ…ط´ط§ط±ع©طھ ظ…ط¯ظ†غŒ` | TBD |

**ظ‚غŒط¯ظ‡ط§غŒ ظ¾غŒط´ظ†ظ‡ط§ط¯غŒ ط§ط¹طھط¨ط§ط±ط³ظ†ط¬غŒ (TBD)**

- ط§ع¯ط± `useIdentityAndPostalMode=false`:
  - `counterpartyEconomicCode` ط§ط¬ط¨ط§ط±غŒ ظˆ ط¯ظ‚غŒظ‚ط§ظ‹ غ±غ± ط±ظ‚ظ….
- ط§ع¯ط± `useIdentityAndPostalMode=true`:
  - `counterpartyPersonType` ط§ط¬ط¨ط§ط±غŒ.
  - `counterpartyPostalCode` ط§ط¬ط¨ط§ط±غŒ ظˆ ط¯ظ‚غŒظ‚ط§ظ‹ غ±غ° ط±ظ‚ظ….
  - ط¨ط± ط§ط³ط§ط³ `counterpartyPersonType` غŒع©غŒ ط§ط² ظپغŒظ„ط¯ظ‡ط§غŒ ط´ظ†ط§ط³ظ‡ (`counterpartyNationalOrForeignId` غŒط§ `counterpartyLegalId` غŒط§ `counterpartyPartnershipId`) ط§ط¬ط¨ط§ط±غŒ ط§ط³طھ.


---
## Update (1404-10-17 / Requests + Tax Bills UI Flow)

> ظ…ظ†ط¨ط¹: `team2-status-report-14041017.txt`
> ط§غŒظ† ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ طµط±ظپط§ظ‹ ظˆط¶ط¹غŒطھ **UI/Flow** ط±ط§ ط«ط¨طھ ظ…غŒâ€Œع©ظ†ط¯ ظˆ ط¨ظ‡â€Œظ…ط¹ظ†ط§غŒ ظˆط¬ظˆط¯ endpoint ط¬ط¯غŒط¯ ط¯ط± ط¨ع©â€Œط§ظ†ط¯ ظ†غŒط³طھ.

### UI-only / Flow Status (ع¯ط²ط§ط±ط´â€Œط´ط¯ظ‡)

- ط¬ط±غŒط§ظ† آ«ط¯ط±ط®ظˆط§ط³طھâ€Œظ‡ط§ > ط§ظپط²ط§غŒط´ ط­ط¯ ظ…ط¬ط§ط² ظپط±ظˆط´آ» طھط§ ط³ط·ط­ ط§ط³ع©ظ„طھ ظˆ ظ…ظˆط¯ط§ظ„ظ‡ط§غŒ ع†ظ†ط¯ظ…ط±ط­ظ„ظ‡â€Œط§غŒ ط¯ط± UI ظ¾غŒط§ط¯ظ‡â€Œط³ط§ط²غŒ ط´ط¯ظ‡ ط§ط³طھ.
- ط¨ط®ط´ آ«طµط¯ظˆط± ظ‚ط¨ظˆط¶ ظ…ط§ظ„غŒط§طھغŒآ» ظ†غŒط² طھط§ ط³ط·ط­ ط§ط³ع©ظ„طھ/ط§طھطµط§ظ„ ظ…ظˆط¯ط§ظ„ طµط¯ظˆط± ظ‚ط¨ط¶ ط¯ط± UI ع¯ط²ط§ط±ط´ ط´ط¯ظ‡ ط§ط³طھ.
- ط±ظپطھط§ط± ظ…ظ†ظˆغŒ ع©ط´ظˆغŒغŒ آ«ط¯ط±ط®ظˆط§ط³طھâ€Œظ‡ط§آ» ط¯ط± ط³ط§غŒط¯ط¨ط§ط± ط¨ظ‡â€Œطµظˆط±طھ toggle (ط¨ط¯ظˆظ† redirect ط®ظˆط¯ع©ط§ط± ط¨ظ‡ ط§ظˆظ„غŒظ† ط²غŒط±ظ…ظ†ظˆ) طھط«ط¨غŒطھ ط´ط¯ظ‡ ط§ط³طھ.

### ط¬ط²ط¦غŒط§طھ Flow ط«ط¨طھâ€Œط´ط¯ظ‡ ط¨ط±ط§غŒ `/simulators/modian/requests/increase-sales-limit` (UI-only)

- ظ…ط±ط­ظ„ظ‡ غ±: ط§ظ†طھط®ط§ط¨ ظ†ظˆط¹ ط¯ط±ط®ظˆط§ط³طھ + ط³ط§ظ„/ط¯ظˆط±ظ‡ (ط¨ط§ ظ¾غŒط´â€Œظپط±ط¶â€Œظ‡ط§غŒ UI ع¯ط²ط§ط±ط´â€Œط´ط¯ظ‡)
- ظ…ط±ط­ظ„ظ‡ غ² (ظ¾ط±ط¯ط§ط®طھ ظ†ظ‚ط¯غŒ): آ«ظ…ط§ط´غŒظ† ظ…ط­ط§ط³ط¨ظ‡آ» ط¨ط§ ظ…ط­ط§ط³ط¨ظ‡ ط®ظˆط¯ع©ط§ط± ظ…ط¨ظ„ط؛ ظ¾ط±ط¯ط§ط®طھغŒ
- ظ…ط±ط­ظ„ظ‡ غ² (ط§ط±ط§ط¦ظ‡ طھط¶ظ…غŒظ†): ط§ظ†طھط®ط§ط¨ ظ†ظˆط¹ طھط¶ظ…غŒظ† ط¨ط§ ظپط¹ط§ظ„â€Œط¨ظˆط¯ظ† آ«ع†ع© طµغŒط§ط¯غŒ/ع†ع© ط§ظ„ع©طھط±ظˆظ†غŒع©غŒآ»
- ظ…ط±ط­ظ„ظ‡ غ³ (ظ¾ط±ط¯ط§ط®طھ ظ†ظ‚ط¯غŒ): ظ…ظˆط¯ط§ظ„ آ«ط¨ط±ط±ط³غŒ ظ†ظ‡ط§غŒغŒآ» (ظ†ظ…ط§غŒط´ ط®ظ„ط§طµظ‡ ط§ظ†طھط®ط§ط¨â€Œظ‡ط§)

### WIP Validation (ظ‡ظ†ظˆط² ظ†ظ‡ط§غŒغŒ ظ†ط´ط¯ظ‡ / UI-level)

- ط§ط¹طھط¨ط§ط±ط³ظ†ط¬غŒ آ«ط´ظ†ط§ط³ظ‡ طµغŒط§ط¯ = ط¯ظ‚غŒظ‚ط§ظ‹ 16 ط±ظ‚ظ… ط¹ط¯ط¯غŒآ» ط¯ط± ع¯ط²ط§ط±ط´ ط¨ظ‡â€Œط¹ظ†ظˆط§ظ† WIP ط«ط¨طھ ط´ط¯ظ‡ ط§ط³طھ.
- طھط§ ط²ظ…ط§ظ† طھط¹ط±غŒظپ/طھط£غŒغŒط¯ endpoint ط±ط³ظ…غŒ ط¨ط±ط§غŒ ط§غŒظ† ط¬ط±غŒط§ظ†طŒ ط§غŒظ† ط§ط¹طھط¨ط§ط±ط³ظ†ط¬غŒâ€Œظ‡ط§ ط¯ط± ط­ظˆط²ظ‡ UI/ط´ط¨غŒظ‡â€Œط³ط§ط² طھظ„ظ‚غŒ ظ…غŒâ€Œط´ظˆظ†ط¯.

---
## Update (1404-12-06 / Multi-tenant Business Isolation â€“ Backend Contract Notes)

> ظ…ظ†ط§ط¨ط¹: `team2-status-report-14041206.txt` + `team2-status2-report-14041206.txt`
> ط§غŒظ† ط¨ط®ط´ آ«ظ‚ط±ط§ط±ط¯ط§ط¯ ط¹ظ…ظ„غŒط§طھغŒ/ط§ظ…ظ†غŒطھغŒآ» endpointظ‡ط§غŒ ظ…ظˆط¬ظˆط¯ ط±ط§ ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ ظ…غŒâ€Œع©ظ†ط¯ ظˆ endpoint ط¬ط¯غŒط¯ ط§ط¶ط§ظپظ‡ ظ†ظ…غŒâ€Œع©ظ†ط¯.

### Auth / Context Contract (ط¨ظ‡â€Œط±ظˆط²ط±ط³ط§ظ†غŒ)

- ظپط§ط² ط§ظˆظ„ Business Isolation ط¯ط± ط¨ع©â€Œط§ظ†ط¯ طھع©ظ…غŒظ„ ط´ط¯ظ‡ ظˆ `businessId` ط§ع©ظ†ظˆظ† ط¯ط± JWT ظ‚ط±ط§ط± ظ…غŒâ€Œع¯غŒط±ط¯.
- Middleware/Context ط¨ط±ط§غŒ ط§ط³طھط®ط±ط§ط¬ `businessId` ط§ط² JWT ظˆ ظ†ع¯ظ‡ط¯ط§ط±غŒ request-scoped (AsyncLocalStorage) ع¯ط²ط§ط±ط´ ط´ط¯ظ‡ ط§ط³طھ.
- ط§ط³طھط§ظ†ط¯ط§ط±ط¯ ط§ظ…ظ†غŒطھغŒ: `businessId` ظپظ‚ط· ط§ط² JWT ط§ط³طھط®ط±ط§ط¬ ط´ظˆط¯ ظˆ ط¨ظ‡ body/request ط§ط¹طھظ…ط§ط¯ ظ†ط´ظˆط¯.

### Update (2026-02-27) â€” طھط«ط¨غŒطھ ط¹ظ…ظ„غŒط§طھغŒ Bills + ط¢ظ…ط§ط¯ظ‡â€Œط³ط§ط²غŒ DB Integration
- ط¨ط±ط§غŒ ط¬ظ„ظˆع¯غŒط±غŒ ط§ط² ط´ع©ط³طھ build ظˆ ظ‡ظ…â€Œط±ط§ط³طھط§ط³ط§ط²غŒ ط¨ط§ ط§ظ„ط²ط§ظ… `businessId`طŒ ظ…ط³غŒط±ظ‡ط§غŒ create ظ‚ط¨ط¶ ط¯ط± ط³ط±ظˆغŒط³â€Œظ‡ط§غŒ ظ…ط±ط¨ظˆط·ظ‡
  ط¨ط§ ط³طھâ€Œع©ط±ط¯ظ† `businessId` ط§طµظ„ط§ط­ ط´ط¯ظ†ط¯.
- ط¨ط±ظ†ع† ع©ط§ط±غŒ ط¬ط¯غŒط¯ ط¨ط±ط§غŒ ط¢ظ…ط§ط¯ظ‡â€Œط³ط§ط²غŒ ط§طھطµط§ظ„ ع©ط§ظ…ظ„ DB ط§غŒط¬ط§ط¯ ط´ط¯:
  - `feature/backend-db-integration-prep`
- ط³غŒط§ط³طھ hygiene ط¨ط±ظ†ع†â€Œظ‡ط§ ط¯ط± ط¨ع©â€Œط§ظ†ط¯:
  - ط±ظˆغŒ ط±غŒظ…ظˆطھ ظپظ‚ط· `main` ظˆ ط¨ط±ظ†ع† ع©ط§ط±غŒ ظپط¹ط§ظ„ ظ†ع¯ظ‡ ط¯ط§ط´طھظ‡ ظ…غŒâ€Œط´ظˆط¯ (ط­ط°ظپ ط³ط§غŒط± ط¨ط±ظ†ع†â€Œظ‡ط§ ظ¾ط³ ط§ط² طھط«ط¨غŒطھ).
### Update (2026-07-20) â€” طھط«ط¨غŒطھ Business Onboarding ط§طھظ…غŒع©

- Endpoint ط§طµظ„غŒ ط«ط¨طھ ط§ظˆظ„غŒظ‡ ط§ط² ظ…ط³غŒط± ظ‚ط¯غŒظ…غŒ `POST /businesses/onboarding/step-1` ط¨ظ‡ `POST /businesses/create` ظ…ظ†طھظ‚ظ„ ط´ط¯ظ‡ ط§ط³طھ.
- `POST /businesses/create` ط¨ط¯ظ†ظ‡ ع©ط§ظ…ظ„ `RegistrationStep1Dto` ط±ط§ ط¯ط±غŒط§ظپطھ ظˆ Aggregate ط´ط§ظ…ظ„ `Business`, `UserBusiness`, `TaxFile`, `BusinessContact` ظˆ `BusinessRegistration` ط±ط§ ط¯ط± غŒع© Transaction ط§غŒط¬ط§ط¯ ظ…غŒâ€Œع©ظ†ط¯.
- ظ…ط³غŒط± `POST /businesses/onboarding/step-1` ظˆ Proxy ظ…طھظ†ط§ط¸ط± ط¢ظ† ظپط¹ظ„ط§ظ‹ **Legacy** ظ‡ط³طھظ†ط¯ ظˆ ظ¾ط³ ط§ط² طھط³طھ Rollback/Regression ط­ط°ظپ ط®ظˆط§ظ‡ظ†ط¯ ط´ط¯.
- Signup ظپظ‚ط· User ظ…غŒâ€Œط³ط§ط²ط¯ط› Signin/Refresh ط¨ط§ `businessId=null` ط¨ط±ط§غŒ User ط¨ط¯ظˆظ† Business ظ…ط¹طھط¨ط± ظ‡ط³طھظ†ط¯.
- ظ¾ط³ ط§ط² Create ظ…ظˆظپظ‚طŒ Access Token طھط§ط²ظ‡ ط¨ط§ Business ط¬ط¯غŒط¯ طµط§ط¯ط± ظ…غŒâ€Œط´ظˆط¯ ظˆ Flow ط§طµظ„غŒ ط¨ظ‡ Switch ط¬ط¯ط§ع¯ط§ظ†ظ‡ ظˆط§ط¨ط³طھظ‡ ظ†غŒط³طھ.

### Test/QA Contract for Protected Endpoints

- ط¯ط± طھط³طھ endpointظ‡ط§غŒ ظ…ط­ط§ظپط¸طھâ€Œط´ط¯ظ‡ ط¨ط§غŒط¯ طµط±ط§ط­طھط§ظ‹ ط§ط² **access token** ظ…ط¹طھط¨ط± ط§ط³طھظپط§ط¯ظ‡ ط´ظˆط¯ط› ط§ط±ط³ط§ظ„ Refresh Token ط¨ظ‡â€Œط¬ط§غŒ Access Token ظ…ط¬ط§ط² ظ†غŒط³طھ.
- ط³ظ†ط§ط±غŒظˆظ‡ط§غŒ ظ…ط«ط¨طھ Manual ظˆ Auto-fill ظˆ ظ‡ظ…ع†ظ†غŒظ† Isolation ط¨غŒظ† User A/User B ظ…ظˆظپظ‚ ط¨ظˆط¯ظ‡â€Œط§ظ†ط¯.
- طھط³طھâ€Œظ‡ط§غŒ ط¨ط§ظ‚غŒâ€Œظ…ط§ظ†ط¯ظ‡ ظ‚ط¨ظ„ ط§ط² ط­ط°ظپ Legacy: Rollback ط¹ظ…ط¯غŒ TransactionطŒ Double SubmitطŒ Missing/Invalid Cookie ظˆ ظ…ط­ط¯ظˆط¯غŒطھ Business ط¯ظˆظ… ط¨ط±ط§غŒ FREE.

### PM Decision Hook (ط¨ط±ط§غŒ ظپط§ط²ظ‡ط§غŒ ط¨ط¹ط¯)

- ط¯ط± MVPطŒ ظ…ظ†ط¨ط¹ ط¹ط¶ظˆغŒطھ/ظ…ط§ظ„ع©غŒطھ ط¹ظ…ظ„غŒط§طھغŒ ط±ط§ط¨ط·ظ‡ `UserBusiness` ط§ط³طھ ظˆ Template ط¢ظ…ظˆط²ط´غŒ Auto-fill ط¨ط±ط§غŒ ظ‡ظ…ظ‡ ع©ط§ط±ط¨ط±ط§ظ† ط«ط§ط¨طھ ظˆ ظ‚ط§ط¨ظ„ ظˆغŒط±ط§غŒط´ ط§ط³طھ.
- ط§ظ†طھط®ط§ط¨ ظپط¹ظ„غŒ Business ظپط¹ط§ظ„ ط¯ط± Signin/Refresh ط§ط² ط§ظˆظ„غŒظ† ط±ط§ط¨ط·ظ‡ `UserBusiness` ط§ظ†ط¬ط§ظ… ظ…غŒâ€Œط´ظˆط¯.
- ط·ط±ط§ط­غŒ ط§ظ†طھط®ط§ط¨ ع†ظ†ط¯ع©ط³ط¨â€Œظˆع©ط§ط±غŒ ظˆ ط¨ط±ط±ط³غŒ ط§ظپط²ظˆط¯ظ† `ownerUserId` ط¨ظ‡ `Business` ط¨ظ‡ ظپط§ط² ط¨ط¹ط¯ ط§ط² طھط«ط¨غŒطھ MVP ظ…ظˆع©ظˆظ„ ط´ط¯ظ‡ ط§ط³طھ.
