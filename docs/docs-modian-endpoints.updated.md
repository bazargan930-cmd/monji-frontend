 # مودیان — جدول Endpoints و نگاشت فرانت/بک (v0.2)

 > هدف: خط‌کشی دقیق API برای «مودیان» (MVP) + نگاشت صفحات Next به سرویس‌های Nest. این فایل تا پایان MVP مرجع واحد تیم است.

 ---

## ساختار این سند پس از به‌روزرسانی ۱۴۰۴/۰۹/۲۲

- **بخش ۱ — Real Backend API Endpoints**  
  Endpointهایی که در بک‌اند و/یا مسیرهای `src/app/api` پیاده‌سازی شده‌اند و در این سند به‌عنوان «UI-only / TBD» علامت‌گذاری نشده‌اند.
- **بخش ۲ — UI-Only Pages (بدون API / حالت شبیه‌ساز)**  
  صفحاتی که فعلاً فقط UI/شبیه‌ساز هستند و هنوز endpoint رسمی برای آن‌ها تعریف نشده است.
- **بخش ۳ — Future API Mapping (TBD)**  
  جدول‌های نگاشت برنامه‌ریزی‌شده بین فیلدهای UI و پارامترهای API برای فیچرهایی مثل صورتحساب‌های قدیمی، اعلامیه‌های خرید، قراردادها و …

> نکته: هر جا در متن این سند صراحتاً نوشته شده **UI-only** یا **TBD**، آن بخش تا زمان پیاده‌سازی در بک‌اند فقط در حوزهٔ «شبیه‌ساز/طراحی» است و نباید به‌عنوان API واقعی در نظر گرفته شود.

---
## بخش ۱ — Real Backend API Endpoints

### 0) قرارداد نام‌گذاری و پیش‌فرض‌ها

 - **Global API Prefix (Dev):** ندارد (بدون `api/`). در Production ممکن است `api/` افزوده شود.
 - **Namespace (Dev):** روت‌های مودیان تحت **`/simulators/modian/...`**.
 - **Auth:** نشست با **کوکی HttpOnly**؛ همهٔ درخواست‌ها با `credentials:'include'`.
 - **Role/Access:** ستون «گارد» در جدول‌ها مشخص می‌کند (Admin/AccessLevel).
 - **Proxy داخلی فرانت:** `GET /api/utils/user-info` → پاس‌ترو به بک‌اند `GET /utils/user-info` با فوروارد کوکی برای تشخیص کاربر/نقش.  
 - **نسخه‌دهی (اختیاری):** در صورت نیاز `api/v1/...`.

> **Dev-only (برای ۲ نفر فعلی)**: گارد سبک «DEV_BYPASS» فعال با ENV فقط در `NODE_ENV=development` و فقط از `localhost`؛ در Prod کاملاً غیرفعال. (جزئیات و نمونه fetch در §8.)

---

### 1) نگاشت صفحات Next.js → سرویس‌ها

| صفحه (App Router) | هدف | سرویس‌های بک‌اند موردنیاز |
|---|---|---|
| `/simulators/modian/login` | ورود به شبیه‌ساز | **فعلاً** از جریان عمومی استفاده می‌شود: `POST auth/signin` (ست کوکی)، سپس `GET utils/user-info` |
| `/simulators/modian/otp` | تایید OTP (در صورت فعال‌شدن) | `POST api/auth/otp/verify` (رزرو) |
| `/simulators/modian/portal` | کارپوشه/پور تال | `GET modian/portal/summary`, `GET modian/notices` |
| `/simulators/modian/home` | صفحهٔ خانهٔ مودیان | `GET modian/home/tiles` |
| `/simulators/modian/workspace` | شِل کاری | بسته به منوهای فعال |
| `/simulators/modian/invoice/new` | فرم صدور صورتحساب تمرینی | `POST modian/invoice` |
| `/simulators/modian/invoices/buy/detail` | جزئیات صورتحساب خرید داخلی (شبیه‌ساز) | فعلاً UI-only؛ سرویس‌های جزئیات صورتحساب، اقلام و پرداخت‌ها TBD |
| `/simulators/modian/taxfile/registration` | اطلاعات ثبت‌نامی (ادمین) | `GET/PUT modian/taxfile/registration` |
| `/simulators/modian/dashboard` | داشبورد ادمین مودیان | `GET modian/admin/dashboard` |
| `/simulators/modian/admin/taxfile/bills` | قبوض/انشعابات | `GET/POST/PUT/DELETE modian/admin/taxfile/bills` |
| `/simulators/modian/admin/taxfile/trusted/add` | افزودن شرکت‌های معتمد | `POST modian/admin/taxfile/trusted` |
| `/simulators/modian/admin/taxfile/memory-uid` | شناسه یکتا حافظهٔ مالیاتی (فهرست) | `GET modian/admin/taxfile/memory-uid` |
| `/simulators/modian/admin/taxfile/memory-uid/add` | ویزارد صدور شناسه یکتا | `POST .../initialize`, `POST .../upload-public-key`, `POST .../assign-branches`, `POST .../assign-pps`, `POST .../confirm` |
| `/simulators/modian/admin/taxfile/memory-uid/details?uid=:uid[&mode=edit]` | جزئیات / **ویرایش (UI state)** | `GET modian/admin/taxfile/memory-uid/:uid` *(همان سرویس)* |
| `/simulators/modian/users-roles` | تب «کاربران و نقش‌ها» (لیست/جست‌وجو) | `GET api/modian/admin/roles`, `GET api/modian/admin/users` |
| `/simulators/modian/roles/add` | ویزارد ایجاد نقش | `GET api/modian/admin/roles/permissions-schema`, `POST api/modian/admin/roles`, `POST api/modian/admin/roles/:id/users` |
| `/simulators/modian/users-roles/add` | افزودن کاربر جدید | `GET api/modian/admin/users/lookup?nationalId|foreignId=...`, `POST api/modian/admin/users` |
| `/simulators/modian/layout` | شِل ماژول مودیان (هدر، ساب‌هدر، سایدبار) | بدون ارتباط مستقیم API – فقط Container برای سایر صفحات |

> **یادداشت فرانت (Next 15):** صفحات فوق که کلاینتی هستند و از `useSearchParams` استفاده می‌کنند باید زیر یک `layout.tsx` محلی با `<Suspense>` رندر شوند تا خطای *missing-suspense-with-csr-bailout* در بیلد رخ ندهد. همچنین در صفحات کلاینت به‌جای `next/headers` از `GET /api/utils/user-info` استفاده کنید.

> **یادداشت جدید:** ساختار «مودیان» اکنون ماژولار شده و تمام شِل‌ها و هدرهای اختصاصی در مسیر  
`src/components/modian/layout/` قرار دارند. مسیرهای قبلی در `src/components/layout/` فقط برای صفحات اصلی (Site-level) باقی مانده‌اند.

> برای صفحات کلاینتی مانند `otp`, `portal`, `users-roles/add`، ساختار `page.tsx (Server)` + `PageClient.tsx (Client)` استفاده شده تا خطای
`useSearchParams()` و CSR bailout رفع شود.
---

### 2) قرارداد خطا و پاسخ
- **کُدها**: `200/201/204`, خطاهای اعتبارسنجی `400`, عدم اجازه `403`, عدم احراز `401`, عدم‌یافت `404`، خطای سرور `500`.
- **قالب پاسخ مشترک** (پیشنهادی):
```json
{ "ok": true, "data": {...}, "traceId": "..." }
```
- **قالب خطا مشترک**:
```json
{ "ok": false, "error": { "code": "VALIDATION_ERROR", "message": "...", "details": {...} }, "traceId": "..." }
```

---

### 3) API — ماژول «هویت/ابزار»

### 3.1 احراز هویت
| مسیر | متد | ورودی (Body) | خروجی | گارد |
|---|---|---|---|---|
| `auth/signin` | `POST` | `{ phone, password }` | ست **کوکی‌های** `access_token`/`refresh_token` + `{ user }` | عمومی |
| `auth/signup` | `POST` | `{ fullName, phone, password }` | `{ success: true, user }` | عمومی |
| `auth/logout` | `POST` | ـ | پاک‌سازی کوکی‌ها | JWT |
| `auth/refresh` | `POST` | Refresh Cookie | ست کوکی‌های جدید | عمومی (با کوکی معتبر) |
| `auth/dev-login` | `POST` | Header: `X-Dev-Bypass: <token>` | ست کوکی + `{ ok: true, user }` | **Dev-only** |

### 3.2 ابزار
| مسیر | متد | شرح |
|---|---|---|
| `api/utils/today` | `GET` | تاریخ شمسی/میلادی (برای UI) |
| `api/utils/user-info` | `GET` | خلاصه کاربر لاگین‌شده (نام/نقش/AccessLevel) — **Proxy فرانت به** `GET /utils/user-info` بک‌اند |

---

### 4) API — ماژول «مودیان» (کاربر)

### 4.1 Portal/Home
| مسیر | متد | خروجی | گارد |
|---|---|---|---|
| `modian/portal/summary` | `GET` | `{ registrationCompleted, noticesCount, quickLinks[] }` | JWT |
| `modian/home/tiles` | `GET` | کارت‌های داشبورد خانه | JWT |

### 4.2 ثبت‌نام (Taxfile → Registration)
| مسیر | متد | ورودی | خروجی | گارد |
|---|---|---|---|---|
| `modian/taxfile/registration` | `GET` | ـ | `RegistrationInfo` | JWT + مالکیت |
| `modian/taxfile/registration` | `PUT` | `RegistrationUpdateDto` | `{ ok: true }` | JWT + مالکیت |


### 4.3 قبوض/انشعابات (User)
| مسیر | متد | ورودی | خروجی | گارد |
|---|---|---|---|---|
| `/simulators/modian/bills` | `GET` | Query: `type?`, `postalCode?`, `page?`, `pageSize?` | `{ items: any[], total, page, pageSize }` | JWT + مالکیت |
| `/simulators/modian/bills` | `POST` | `CreateBillBody` ← `{ billIdentifier, type, postalCode, branchName?, sharePercent? }` | `{ message, id }` | JWT + مالکیت |
| `/simulators/modian/bills/:id` | `GET` | Path: `id` | `{ bill }` | JWT + مالکیت |
> نگاشت فرانت: متدهای `getBills` و `createBill` در `src/lib/...ین مسیرها استفاده می‌کنند.

### 4.4 اعلان‌ها
| مسیر | متد | خروجی | گارد |
|---|---|---|---|
| `modian/notices` | `GET` | `{ items: Notice[] }` | JWT |

### 4.5 Invoice Data & UI Policy (Training-First)
- «مودی»: فقط از پروفایل/ثبت‌نام DB واکشی شود (Single Source of Truth).
- «طرف مقابل» (فروشنده/خریدار): با Seed/Test Fixtures تولید می‌شود؛ مسیر و فرمت Fixture در ریپو ثبت می‌گردد.
- «Excel Export»: یک Utility واحد (ترجیحاً Modian-Scoped در صورت فرمت خاص)؛ همه صفحات `buy/` و `sales/` فقط از همین Utility استفاده کنند.
- «داشبورد مدیریتی»: نمودار/گزارش‌ها، مصرف‌کنندهٔ دادهٔ صورتحساب‌ها باشند (endpoint/selector مشترک).
> هدف: جلوگیری از چندپارگی داده و تکثیر Utilityها در پروژه.

---

### 5) API — ماژول «مودیان ادمین»

> توجه: این‌ها در UI موجودند و «کامل اما نیازمند بازآرایی ساختاری» گزارش شده‌اند. برای MVP، CRUD حداقلی کافی است.

### 5.1 داشبورد
| مسیر | متد | خروجی | گارد |
|---|---|---|---|
| `api/modian/admin/dashboard` | `GET` | آمار ثبت‌نام/قبوض/فعالیت‌ها | Admin + JWT |

### 5.2 ثبت‌نام
| مسیر | متد | ورودی | خروجی | گارد |
|---|---|---|---|---|
| `api/modian/admin/taxfile/registration` | `GET` | Query | `{ items, total }` | Admin |
| `api/modian/admin/taxfile/registration` | `POST` | `RegistrationCreateDto` | `{ id }` | Admin |
| `api/modian/admin/taxfile/registration/:id` | `PUT` | `RegistrationUpdateDto` | `{ ok: true }` | Admin |
| `api/modian/admin/taxfile/registration/:id` | `DELETE` | ـ | `{ ok: true }` | Admin |

### 5.3 قبوض/انشعابات
| مسیر | متد | ورودی | خروجی | گارد |
|---|---|---|---|---|
| `api/modian/admin/taxfile/bills` | `GET` | `QueryBillsDto` | `{ items, total }` | Admin |
| `api/modian/admin/taxfile/bills` | `POST` | `CreateUtilityBillDto` | `{ id }` | Admin |
| `api/modian/admin/taxfile/bills/:id` | `PUT` | `UpdateUtilityBillDto` | `{ ok: true }` | Admin |
| `api/modian/admin/taxfile/bills/:id` | `DELETE` | ـ | `{ ok: true }` | Admin |

### 5.4 شرکت‌های معتمد
| مسیر | متد | ورودی | خروجی | گارد |
|---|---|---|---|---|
| `api/modian/admin/taxfile/trusted` | `GET`  | Query (paging, search) | `{ items: TrustedCompany[], total }` | Admin |
| `api/modian/admin/taxfile/trusted` | `POST` | `TrustedCompanyCreateDto` | `{ id }` | Admin |
| `api/modian/admin/taxfile/trusted/:id` | `PUT`    | `TrustedCompanyUpdateDto` | `{ ok: true }` | Admin |
| `api/modian/admin/taxfile/trusted/:id` | `DELETE` | ـ | `{ ok: true }` | Admin |

```ts
// مدل نمونه
interface TrustedCompany {
  id: string;
  name: string;
  serviceType: string;
  expire: string; // تاریخ انقضا
}

interface TrustedCompanyCreateDto {
  name: string;
  serviceType: string;
  expire: string;
}

interface TrustedCompanyUpdateDto extends Partial<TrustedCompanyCreateDto> {}

---
```

### 5.5 شناسه یکتا حافظهٔ مالیاتی (Memory UID)
| مسیر | متد | ورودی | خروجی | گارد |
|---|---|---|---|---|
| `api/modian/admin/taxfile/memory-uid`              | `GET`  | `Query` (paging, search, filters) | `{ items: MemoryUidRow[], total }` | Admin |
| `api/modian/admin/taxfile/memory-uid/initialize`   | `POST` | `{ sendMethod: 'مودی' \| 'شرکت‌معتمد_کلید_مودی' \| 'شرکت‌معتمد_کلید_معتمد' }` | `{ draftId }` | Admin |
| `api/modian/admin/taxfile/memory-uid/upload-public-key` | `POST` | `multipart/form-data` → `file` | `{ draftId, keyId }` | Admin |
| `api/modian/admin/taxfile/memory-uid/assign-branches`   | `POST` | `{ draftId, branchIds: string[] }` | `{ ok: true }` | Admin |
| `api/modian/admin/taxfile/memory-uid/assign-pps`        | `POST` | `{ draftId, paymentToolIds: string[] }` | `{ ok: true }` | Admin |
| `api/modian/admin/taxfile/memory-uid/confirm`           | `POST` | `{ draftId }` | `{ ok: true, uid: string }` | Admin |
| `api/modian/admin/taxfile/memory-uid/refresh`           | `POST` | `{}` | `{ ok: true, refreshed: number }` | Admin |
| `api/modian/admin/taxfile/memory-uid/:uid`              | `GET`  | Path: `uid` | `{ uid, memberKey, sendMethod, status, branches[], paymentTools[] }` | Admin |
| `api/modian/admin/taxfile/memory-uid/deactivate-all`    | `POST` | `{}` | `{ ok: true, affected: number }` | Admin |
| `api/modian/admin/taxfile/memory-uid/:uid/deactivate`   | `POST` | Path: `uid` | `{ ok: true }` | Admin |

```ts
// ردیف جدول (نمایش لیست)
interface MemoryUidRow {
  uid?: string;           // شناسهٔ یکتا (در صورت صدور)
  memberKey?: string;     // شناسهٔ کلید اعضا
  trustedCompanyName?: string;
  sendMethod: 'مودی' | 'شرکت‌معتمد_کلید_مودی' | 'شرکت‌معتمد_کلید_معتمد';
  status: 'فعال' | 'غیرفعال' | 'در_انتظار'; // در UI با دایره توخالی رنگی نشان داده می‌شود (سبز/قرمز)
}
```
### 5.5.1 یادداشت‌های UI (state محض برای Frontend)
- **حالت ویرایش** از طریق `mode=edit` در همان مسیر Next.js فعال می‌شود:  
  `/simulators/modian/admin/taxfile/memory-uid/details?uid=:uid&mode=edit`
- در حالت ویرایش، فقط استپر «تعیین نحوه ارسال صورتحساب» نمایش می‌شود و دو گزینهٔ رادیویی در اختیار کاربر است:
  1) «توسط شرکت معتمد/سامانه‌های دولتی — با کلید مودی»
  2) «توسط شرکت معتمد/سامانه‌های دولتی — با کلید شرکت معتمد/سامانه‌های دولتی»
- کلیدهای پایین صفحه: **قبلی/بعدی** (چپ) و **انصراف** (راست). این‌ها صرفاً UI هستند و API جداگانه‌ای ندارند؛ دریافت/ثبت نهایی همچنان از همان `GET/POST`‌های بخش 5.5 استفاده می‌کند.

### 5.6 مدیریت «کاربران و نقش‌ها» (مودیان)
> این بخش با ویزارد چندمرحله‌ای در `/simulators/modian/roles/add` و تب لیستی در
> `/simulators/modian/users-roles` پیاده‌سازی شده است.

#### 5.6.1 نقش‌ها (Roles)
| مسیر | متد | ورودی | خروجی | گارد |
|---|---|---|---|---|
| `api/modian/admin/roles` | `GET` | Query: paging, search | `{ items: Role[], total }` | Admin |
| `api/modian/admin/roles` | `POST` | `RoleCreateDto` | `{ id }` | Admin |
| `api/modian/admin/roles/:id` | `GET` | Path: `id` | `{ role }` | Admin |
| `api/modian/admin/roles/:id` | `PUT` | `RoleUpdateDto` | `{ ok: true }` | Admin |
| `api/modian/admin/roles/:id` | `DELETE` | ـ | `{ ok: true }` | Admin |
| `api/modian/admin/roles/:id/permissions` | `PUT` | `PermissionsMapDto` | `{ ok: true }` | Admin |
| `api/modian/admin/roles/permissions-schema` | `GET` | ـ | `PermissionsSchema` | Admin |

**PermissionsSchema (نمونهٔ پیشنهادی برای ویزارد)**
```ts
type PermissionLevel = 'NONE' | 'VIEW' | 'VIEW_OPERATE'; // «هیچکدام / فقط مشاهده / مشاهده و عملیات»
type PermissionKey =
  | 'taxfile.info'                // اطلاعات پرونده مالیاتی
  | 'membership'                  // عضویت
  | 'contracts.contracting'       // قراردادهای پیمانکاری
  | 'contracts.commission'        // قراردادهای حق‌العمل‌کاری
  | 'requests.raiseSalesLimit'    // افزایش حد مجاز فروش
  | 'requests.rejectReferred'     // رد سیستمی صورتحساب‌های ارجاعی
  | 'tickets'                     // مدیریت شکایات و تخلفات
  | 'downloads'                   // داشبورد مدیریتی (دانلودها)
  | 'invoices.sales'              // صورت‌حساب‌های فروش
  | 'invoices.purchases'          // صورت‌حساب‌های خرید
  | 'users-and-roles';            // دسترسی به صفحهٔ کاربران و نقش‌ها

interface PermissionsSchema {
  groups: Array<{
    title: string; // مثل «دسترسی‌های پرونده مالیاتی»، «دسترسی‌های صورت‌حساب‌ها» …
    items: Array<{ key: PermissionKey; label: string; help?: string }>;
  }>;
}
```

**DTOها**
```ts
interface RoleCreateDto { title: string; permissions: Partial<Record<PermissionKey, PermissionLevel>>; }
interface RoleUpdateDto extends Partial<RoleCreateDto> {}
interface PermissionsMapDto { permissions: Partial<Record<PermissionKey, PermissionLevel>>; }
```

#### 5.6.2 تخصیص کاربر به نقش
| مسیر | متد | ورودی | خروجی | گارد |
|---|---|---|---|---|
| `api/modian/admin/roles/:id/users` | `GET` | Query: paging/search | `{ items: User[], total }` | Admin |
| `api/modian/admin/roles/:id/users` | `POST` | `{ userIds: string[] }` | `{ ok: true, added: number }` | Admin |
| `api/modian/admin/roles/:id/users/:userId` | `DELETE` | Path | `{ ok: true }` | Admin |

#### 5.6.3 کاربران (جستجو/ایجاد)
| مسیر | متد | ورودی | خروجی |
|---|---|---|---|
| `api/modian/admin/users` | `GET` | Query: paging, `q` (نام/کد) | `{ items: User[], total }` |
| `api/modian/admin/users/lookup` | `GET` | `nationalId` \| `foreignId` | `{ exists: boolean, user?: User }` |
| `api/modian/admin/users` | `POST` | `UserCreateDto` | `{ id }` |

> **یادداشت‌های UI (ویزارْد)**
> - سطح دسترسی «users-and-roles» با انتخاب «مشاهده و عملیات» هشدار تمام‌عرضی نشان می‌دهد.
> - دکمه‌های **انتخاب همه** (سبز) و **هیچکدام** (قرمز) بر اساس وضعیت انتخاب/عدم‌انتخاب چک‌باکس‌های جدول فعال/غیرفعال می‌شوند.
> - مرحلهٔ پایانی، دکمهٔ **تأیید نهایی** را به‌جای «بعدی» نمایش می‌دهد.


## 6) DTOهای کلیدی (Simplified)
```ts
// Registration
interface RegistrationUpdateDto {
  tradeName?: string;
  nationalOrForeignOrLegalId?: string;
  registrationTrackingNumber?: string;
  entityName?: string;
  taxpayerType?: string; // حقیقی/حقوقی/اتباع...
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

> **یادداشت مدل‌ها:** نام‌ها با Prisma هماهنگ انتخاب شده‌اند (Registration/LegalInfo/UtilityBill/Notice/Simulator/SimulatorAccess/User). هنگام پیاده‌سازی نهایی با `schema.prisma` همگام‌سازی شود.

---

## 7) Dependency Graph — صفحه‌های بحرانی

### 7.1 `/simulators/modian/portal`
1) `GET utils/user-info` → شناسه/نقش/AccessLevel
2) `GET modian/portal/summary`
3) `GET modian/notices` (اختیاری)
### 7.2 `/simulators/modian/admin/dashboard`
1) `GET api/modian/admin/dashboard`

### 7.3 `/simulators/modian/taxfile/registration`
1) `GET api/modian/admin/taxfile/registration`
2) `POST/PUT/DELETE api/modian/admin/taxfile/registration...`

### 7.4 `/simulators/modian/taxfile/bills`
1) `GET api/modian/admin/taxfile/bills`
2) `POST/PUT/DELETE api/modian/admin/taxfile/bills...`

### 7.5 `/simulators/modian/roles/add` (ویزارد نقش)
1) `GET api/modian/admin/roles/permissions-schema` → ترسیم بلوک‌های دسترسی و رادیوها  
2) `POST api/modian/admin/roles` → ایجاد پیش‌نویس نقش (title + permissions)  
3) `GET/POST api/modian/admin/users` → جست‌وجو/انتخاب کاربران؛ سپس  
4) `POST api/modian/admin/roles/:id/users` → تخصیص نهایی کاربران به نقش

---

### 8) Dev Bypass (فقط برای دورهٔ دو‌نفرهٔ پیش از تیم)
- ENV: `DEV_BYPASS_TOKEN` و `DEV_BYPASS_ENABLED=true` (فقط در Development)
- شرط‌ها: درخواست از `127.0.0.1/::1`، هدر `X-Dev-Bypass: <token>`, مسیر مجاز: `auth/dev-login`.
- خروج: صدور نشست تستی با نقش انتخابی (`role=ADMIN` یا سطح دسترسی مشخص) فقط برای UI/QA.
- **هشدار:** در محض آماده‌شدن MVP، این گارد باید حذف/غیرفعال شود.

---

## 9) چک‌لیست پذیرش مودیان (MVP)
- [ ] Portal بدون خطا؛ Summary/Notices بارگیری می‌شوند.
- [ ] Registration (GET/PUT) برای کاربر عادی کار می‌کند.
- [ ] Bills (GET) برای کاربر عادی و CRUD کامل برای Admin.
- [ ] Admin Dashboard اعداد صحیح می‌دهد.
- [ ] تمام روت‌ها JWT‑Protected (به‌جز login/refresh) و **Log/Audit** فعال است.

## بخش ۲ — UI-Only Pages (بدون API / حالت شبیه‌ساز)

### به‌روزرسانی ۱۴۰۴/۰۷/۲۲ — Trusted Companies و تاریخ شمسی (UI)

- بر اساس گزارش تیم، فیلترهای صفحهٔ شرکت‌های معتمد با **تقویم جلالی اختصاصی** و فیلد تاریخ به‌روزرسانی شدند:
  - `src/components/modian/common/ModianJalaliDatePicker.tsx`
  - `src/components/modian/common/ModianJalaliDateField.tsx`
  - صفحهٔ مصرف‌کننده در قلمرو `modian/taxfile/trusted-companies/page.tsx` (مطابق ساختار فعلی پروژه). 

- **تغییر API در این فاز گزارش نشده است**؛ این تغییرات در سطح **UI/UX فیلترها و ورودی تاریخ** هستند و با ساختار فعلی endpoints همخوانی دارند. در صورت تغییر در کنترلرها (مثل `simulator-modian/*`) مستند جداگانه افزوده خواهد شد. :contentReference[oaicite:10]{index=10}

#### قرارداد نمایش/ذخیره تاریخ
- **نمایش**: جلالی در UI (JDN/Jalali utils اختصاصی مودیان).  
- **ذخیره/ارسال**: ISO8601 (گرینویچ) یا قالب مورد توافق سرویس‌ها؛ تبدیل در لایهٔ lib/کامپوننت، نه در بک‌اند. (مطابق راهنمای UX تصویب‌شده).

— پایان v0.1 —



---
### Update (2025-10-22 06:03)

#### Utilities
- `GET /api/csrf` — Issue CSRF token for logout (double-submit pattern).
- `POST /api/telemetry` — Lightweight telemetry endpoint.

#### UI — Shared Search Suite (Invoices و زیرماژول‌های وابسته)
- Components: `src/components/modian/common/search/{SearchByTaxId.tsx, SearchByFilters.tsx, InvoicesSearchHeader.tsx, index.ts}`
- مصرف در صفحات:
  - نسل فعلی صورتحساب‌ها: `/simulators/modian/invoices/buy`, `/simulators/modian/invoices/sales`, `/simulators/modian/invoices/exports`
  - صورتحساب‌های قبل از ۱۴۰۲/۰۳/۲۶: `/simulators/modian/old-Invoices/buy`, `/simulators/modian/old-Invoices/sales`, `/simulators/modian/old-Invoices/exports`
  - اعلامیه‌های خرید: `/simulators/modian/purchase-announcements/imports`, `/simulators/modian/purchase-announcements/bourse`
  - قراردادهای پیمانکاری (و در آینده احتمالاً حق‌العملکاری): `/simulators/modian/contracts/contracting`
- سیاست طراحی API جستجو:
  - پارامترهای Query برای جستجو باید بر اساس همین Suite طراحی شوند.
  - پیش از پیاده‌سازی هر endpoint نهایی، یک جدول نگاشت در همین سند اضافه می‌شود که نام فیلدهای UI
  - **مرجع نگاشت رسمی:** §3.1 (بخش ۳) «Search Suite Mapping Table (Unified)» که نام فیلدهای UI
    (مثلاً `role`, `status`, `subject`, `branchCode`, `invoiceDateFrom`, `invoiceDateTo` و …)
    را به نام پارامترهای API متناظر (مثل `role`, `status`, `subject`, `branchCode`,
    `invoiceIssueDateFrom`, `invoiceIssueDateTo` و …) وصل می‌کند.
- Sample page اولیه برای اتصال: `/simulators/modian/invoices/buy` (فعلاً UI-only؛ API mapping در حال طراحی است).
## Update (2025-11-10 / 1404-08-19)

### UI — هدر جستجوی صورتحساب‌های خرید (Invoices / Buy)
- تب‌بندی کامل «جستجو با فیلتر / جستجو با شماره مالیاتی» پیاده‌سازی شد و در `InvoicesSearchHeader` مصرف می‌شود.  
  (Shared Suite: `src/components/modian/common/search/*`)  [WIP صفحه‌ی نمونه: `/simulators/modian/invoices/buy`]. :contentReference[oaicite:12]{index=12}
- منطق نوار ابزار: وقتی «پیشرفته» بسته است، جفت‌دکمه‌ها (جستجو/فیلتر پیش‌فرض) بالا نشان داده می‌شوند؛ وقتی باز است، همان جفت‌دکمه‌ها فقط پایین فرم نمایش داده می‌شود. 
- «دوره زمانی (سال/فصل)»: پیش‌فرض «فصل جاری جلالی / سال جاری» است.

### Update (1404-09-02) — صورتحساب‌های «فروش داخلی» (UI)

- صفحات جدید فروش داخلی در فرانت‌اند اضافه شده‌اند:
  - لیست: `/simulators/modian/invoices/sales` → `src/app/simulators/modian/invoices/sales/page.tsx`
  - جزئیات: `/simulators/modian/invoices/sales/detail` → `src/app/simulators/modian/invoices/sales/detail/page.tsx`
- هر دو صفحه بر اساس اسکلت خرید داخلی ساخته شده‌اند (لیست و جزئیات) و شامل به‌روزرسانی فیلترها، جدول اقلام و بخش پرداخت مطابق UI سامانه اصلی هستند.
- در این فاز هیچ تغییری در بک‌اند/DB گزارش نشده است؛ نگاشت نهایی این صفحات به endpoints فروش (داخلی/صادراتی) هنوز **TBD** است و در نسخه‌های بعدی این سند تکمیل می‌شود.
- در کامپوننت مشترک `SearchByFilters` منطق تشخیص مسیر `/simulators/modian/invoices/sales` اضافه شده تا:
  - لیبل‌های طرف مقابل فقط در صفحهٔ فروش داخلی از «فروشنده» به «خریدار» تغییر کنند،
  - گزینهٔ «الگوی بورس کالا» فقط برای همین صفحه به‌صورت شرطی در فیلد الگوی صورتحساب نمایش داده شود.
- وضعیت کیفیت/CI این فیچر:
  - `npm run build` و `npm run lint` روی برنچ فیچر سبز هستند؛
  - `npm run lint:ci` (با `ESLINT_STRICT=1`) هنوز به‌علت خطاهای سراسری قدیمی در ماژول‌های دیگر (landing، admin، insurance، salary-tax، taxfile و …) قرمز است؛ این خطاها مربوط به این فیچر نیستند و در طرح جداگانهٔ بهبود ESLint رفع خواهند شد.ذخیره‌شده `YYYY-Q{1..4}` است.

### به‌روزرسانی ۱۴۰۴/۰۹/۰۷ — صورتحساب‌های قبل از ۱۴۰۲/۰۳/۲۶ (UI فقط)

**دامنهٔ فیچر (ماژول خرید داخلی – صورتحساب‌های قدیمی)**

- اضافه‌شدن گروه منوی جدید «صورتحساب‌های قبل از ۱۴۰۲/۰۳/۲۶» در سایدبار مودیان، با زیرمنوی «خرید داخلی».
- مسیر فرانت‌اند:
  - صفحه: `/simulators/modian/old-Invoices/buy`
  - فایل: `src/app/simulators/modian/old-Invoices/buy/page.tsx`
  - هدف: شبیه‌سازی UI جستجو و مرور صورتحساب‌های خرید قبل از تاریخ ۱۴۰۲/۰۳/۲۶ در محیط آموزشی (بدون اتصال به بک‌اند واقعی).

**وضعیت پیاده‌سازی UI**

- استفادهٔ مجدد از اسکلت صفحات خرید داخلی:
  - استفاده از همان هدر/ساب‌هدر، جدول، و نوار اکشن پایین صفحه، با عنوان‌ها و برِدکرامب مطابق اسکرین رسمی سامانه.
- ساده‌سازی نوار جستجو برای این صفحه:
  - حذف تب‌ها و نمایش نوار جستجو به‌صورت یک «کارت سفید» یک‌تکه در بالا.
  - قرار دادن سه فیلد خلاصه در سمت راست همان کارت، و چسباندن دکمه‌های «جستجو» و «جستجو پیشرفته» در همان ردیف.
  - سه فیلد خلاصه در این صفحه **فقط نمایشی** هستند و در حال حاضر غیرقابل ویرایش/تعامل‌اند.
- تفاوت‌های اختصاصی در `SearchByFilters`:
  - تشخیص صفحهٔ قدیمی با فلگ داخلی (مثلاً `isOldInvoicesPage`) و اعمال تغییرات فقط برای مسیرهای `old-Invoices/*`.
  - چینش ویژهٔ ردیف خلاصه و دکمه‌ها برای old-Invoices (سه فیلد سمت راست + دو دکمهٔ جستجو در همان ردیف).
  - پیاده‌سازی پنل «جستجو پیشرفته» با:
    - تیتر راست‌چین،
    - دکمهٔ «بستن» در سمت چپ هدر،
    - خط سبز زیر تیتر،
    - و دکمهٔ اصلی جستجو در پایین فرم، فقط در حالت old-Invoices.
  - هماهنگی ظاهری دکمهٔ «جستجو پیشرفته» با سامانهٔ اصلی (آیکون چرخ‌دنده بدون بوردر، رنگ و فاصله‌ها مطابق اسکرین مرجع).
- پیکربندی فیلدهای فیلتر در این صفحه:
  - حذف برخی فیلدها فقط برای old-Invoices (از جمله: «تاریخ درج در کارپوشه»، «مجموع صورتحساب»، «شماره/شناسه اقتصادی»، «شناسه هویتی»، «نام/نام تجاری فروشنده» و چک‌باکس «فقط موارد دارای اقدام»).
  - چیدمان فیلدهای باقی‌مانده مطابق اسکرین:
    - ردیف اول: «کد شعبه، موضوع صورتحساب، الگوی صورتحساب، وضعیت حد مجاز»
    - ردیف دوم: «تاریخ صدور صورتحساب از / تا».

### به‌روزرسانی ۱۴۰۴/۰۹/۰۹ — old-Invoices (خرید داخلی، فروش داخلی، فروش صادراتی) – UI

**دامنهٔ فیچر**

- تکمیل صفحهٔ لیست خرید داخلی قدیمی:
  - مسیر: `/simulators/modian/old-Invoices/buy`
  - فایل: `src/app/simulators/modian/old-Invoices/buy/page.tsx`
  - هم‌ترازسازی ساختار جدول با سامانه اصلی (ستون‌ها، ترتیب، حالت پیش‌فرض نمایش/عدم‌نمایش)،
    حذف دکمه‌های اضافی بالای جدول (تأیید، رد، انتقال صورتحساب) و فعال‌سازی ستون ثابت «جزئیات» برای مسیریابی به صفحهٔ جزئیات.
- صفحات جدید/تکمیل‌شده در ماژول old-Invoices:
  - جزئیات خرید داخلی قدیمی:
    - مسیر: `/simulators/modian/old-Invoices/buy/detail`
    - فایل: `src/app/simulators/modian/old-Invoices/buy/detail/page.tsx`
    - شامل سکشن‌های مشخصات صورتحساب، فروشنده، خریدار، اقلام، جمع کل و اطلاعات تکمیلی، به‌همراه مدال جزئیات پرداخت.
  - فروش داخلی قدیمی:
    - لیست: `/simulators/modian/old-Invoices/sales` → `src/app/simulators/modian/old-Invoices/sales/page.tsx`
    - جزئیات: `/simulators/modian/old-Invoices/sales/detail` → `src/app/simulators/modian/old-Invoices/sales/detail/page.tsx`
    - اسکلت و رفتار از خرید داخلی کپی و متن‌ها/مسیریابی با سناریوی «فروش داخلی» تطبیق داده شده‌اند؛
      ستون ثابت «جزئیات» در لیست فعال است و به صفحهٔ جزئیات فروش داخلی لینک می‌دهد.
  - فروش صادراتی قدیمی:
    - لیست: `/simulators/modian/old-Invoices/exports` → `src/app/simulators/modian/old-Invoices/exports/page.tsx`
    - جزئیات: `/simulators/modian/old-Invoices/exports/detail` → `src/app/simulators/modian/old-Invoices/exports/detail/page.tsx`

**تغییرات مهم UI در لیست‌ها و جزئیات**

- خرید داخلی – لیست:
  - فعال‌سازی ستون ثابت «جزئیات» در انتهای جدول و مسیریابی به `/simulators/modian/old-Invoices/buy/detail`.
- خرید داخلی – پنل جستجو:
  - اضافه‌شدن زیرمنوهای ثابت «سال مالیاتی» (۱۴۰۰ تا ۱۴۰۳) و «دوره مالیاتی» (بهار، تابستان، پاییز، زمستان) بدون چک‌باکس.
  - در حالت بازبودن پنل پیشرفته، دکمهٔ «جستجوی پیشرفته» به «حذف فیلتر» تبدیل می‌شود
    (استیت رنگی خاکستری در حالت اولیه و متن/آیکون قرمز با پس‌زمینهٔ سفید هنگام فعال بودن) و با کلیک تمام فیلترها پاک می‌شوند.
- فروش داخلی – لیست و جزئیات:
  - ساختار جدول و جزئیات بر اساس خرید داخلی، با متون و عنوان‌های متناسب با «فروش داخلی».
  - ستون «جزئیات» در لیست فروش داخلی فعال و به `/simulators/modian/old-Invoices/sales/detail` متصل است.
- فروش صادراتی – لیست:
  - حذف فیلدهای «نوع صورتحساب» و «الگوی صورتحساب» از فیلترهای سادهٔ بالای صفحه.
  - در جستجوی پیشرفته:
    - تغییر لیبل «وضعیت صورتحساب» به «وضعیت تطابق»،
    - غیرفعال‌بودن این فیلد (read-only) و اعمال استایل بوردر خط‌چین طبق سامانهٔ اصلی.
  - بازتعریف مجموعه ستون‌های جدول صادراتی براساس سناریوی صادرات (شماره مالیاتی، مجموع صورتحساب، مجموع مالیات بر ارزش افزوده،
    نقش مؤدی، شماره قرارداد حق‌العملکاری، وضعیت واکنش آمر، شماره اقتصادی آمر، تاریخ صدور، وضعیت تطابق، وضعیت صورتحساب،
    موضوع صورتحساب، کد شعبه فروشنده، سال مالیاتی، تاریخ/شماره کوتاژ و …) و تنظیم حالت پیش‌فرض:
    فقط ستون‌های «مجموع صورتحساب»، «مجموع مالیات بر ارزش افزوده»، «تاریخ صدور صورتحساب» و «وضعیت تطابق» روشن هستند.
  - فعال‌سازی ستون ثابت «جزئیات» و مسیریابی هر ردیف به `/simulators/modian/old-Invoices/exports/detail`.
- فروش صادراتی – جزئیات:
  - پیاده‌سازی صفحهٔ جزئیات براساس جزئیات فروش داخلی با تطبیق عنوان‌ها و استایل.
  - حذف سکشن‌های «مشخصات خریدار»، «اطلاعات پرداخت» و «جدول پرداخت» طبق اسکرین مرجع.
  - بازطراحی کامل تنظیمات ستون‌های جدول اقلام متناسب با سناریوی صادرات
    (نرخ/مبلغ مالیات، سایر وجوه قانونی، شماره قرارداد حق‌العملکاری، وضعیت واکنش آمر و …) و تعریف پیش‌فرض‌ها:
    ستون‌های علامت‌خورده به‌عنوان «(پیشفرض)» روشن، بقیه خاموش.
  - رفع باگ‌های نمایش ستون‌ها: اضافه‌کردن ستون «شرح» به نوار نمایش ستون‌ها و حذف جفت تکراری
    «نرخ سایر وجوه قانونی / مبلغ سایر وجوه قانونی».

**وضعیت بک‌اند / API و ریسک‌ها**

- در این فاز هنوز endpoint اختصاصی برای old-Invoices تعریف نشده و تمام صفحات فوق با دادهٔ نمایشی/ماک کار می‌کنند؛
  تغییری در لیست endpoints بک‌اند مودیان ثبت نشده است.
- وابستگی UI به رفتار آتی API پررنگ است؛ در حال حاضر نام ستون‌ها و فیلترها در فرانت‌اند مستقل از مدل نهایی بک‌اند تعریف شده‌اند.
- مطابق پیشنهاد تیم مودیان، در گام بعدی باید یک فایل mapping رسمی بین نام ستون‌ها/فیلترهای فرانت‌اند و فیلدهای پاسخ/QueryString
  سرویس‌های old-Invoices در همین سند (`docs-modian-endpoints`) تعریف شود تا هر دو تیم (فرانت و بک‌اند) به آن متعهد باشند.
- استانداردسازی اشتراک‌گذاری کانفیگ ستون‌ها:
  - گزینهٔ پیشنهادی فعلی: ایجاد یک ماژول کانفیگ مشترک فقط برای old-Invoices در این اسپرینت؛
    در صورت نیاز، در اسپرینت‌های بعدی ارتقاء به «Registry ستون‌ها» در کیت UI مودیان.
- رفتار فیلد «وضعیت تطابق» در جستجوی پیشرفتهٔ صادرات فعلاً صرفاً informtional و read-only در نظر گرفته شده
  تا زمانی که سناریوی دقیق بک‌اند برای این فیلد مشخص شود.

**وضعیت بک‌اند / API و ریسک‌ها**

- در این اسپرینت، برای سناریوی old-Invoices (خرید داخلی پیش از ۱۴۰۲/۰۳/۲۶) **هیچ endpoint جدیدی در بک‌اند و هیچ تغییری در Prisma/DB** ثبت نشده است؛
  این صفحه فعلاً صرفاً یک پیاده‌سازی UI است و منطق جستجو/دریافت داده‌ها به API واقعی متصل نشده است.
- اتصال فیلترها به API شبیه‌ساز و همچنین تکمیل زیرمنوهای مشابه برای «فروش داخلی» و «فروش صادراتی» در old-Invoices
  به‌عنوان کارهای آینده (WIP/Next) در گزارش تیم مودیان ثبت شده و در نسخه‌های بعدی این سند، پس از نهایی‌شدن قراردادهای API، مستند خواهد شد.
- به‌دلیل اضافه‌شدن شاخه‌های شرطی جدید در `SearchByFilters` (برای صفحات `invoices/*` و `old-Invoices/*`)،
  توصیه می‌شود در کنار تست‌های دستی، سناریوهای کلیدی برای این صفحات به‌صورت تست‌های واحد/اسنپ‌شات هم پوشش داده شوند تا در refactorهای بعدی رفتاری ناخواسته ایجاد نشود.
- «نقش مودی»: به منوی چندانتخابی (checkbox list) با گزینه‌های **عادی / حق‌العملکار / آمر** تغییر کرد. *(گزینه‌های قبلی خریدار/فروشنده حذف شدند.)*
- «وضعیت صورتحساب»: به منوی چندانتخابی تبدیل شد با ترتیب دقیق دامنه:  
  `رد شده، تایید شده، تایید سیستمی، در انتظار واکنش، عدم امکان واکنش، عدم نیاز به واکنش، ابطال شده`.
- پنل «پیشرفته»: چیدمان چهارستونه مطابق مرجع؛ برچسب‌ها تک‌خطی و دارای ellipsis. فیلدهای تاریخ با **ورودی جلالی اختصاصی** کار می‌کنند و خروجی را به **ISO** تبدیل می‌‎کنند (قرارداد نمایش/ذخیره تاریخ پابرجاست).

### یادداشت WIP (ستون‌ها و خروجی اکسل)
- «نمایش ستون‌ها»: لیست چک‌باکس و ذخیره‌سازی تنظیمات کاربر (پیشنهاد تیم: localStorage) در جریان است.
- «خروجی اکسل»: تبدیل داده‌های جدول به CSV/Excel وابسته به ماک یا قرارداد JSON است. دامنهٔ خروجی نیاز به تصمیم دارد (کل رکوردهای فیلترشده یا فقط صفحهٔ جاری). 
- «موضوع صورتحساب»: فیلد کشویی با لیست چک‌باکس‌دار (واژگان نهایی در هماهنگی دامنه قفل می‌شود).

### WIP (تا گزارش بعدی)
- اتصال چهارفیلد تاریخ (ردیف اول پنل پیشرفته) به انتخاب‌گر جلالی (onChange + ISO) در جریان است (Reuse از `ModianJalaliDateField`). 
- تکمیل گزینه‌های «موضوع صورتحساب» پس از تأیید واژگان دامنه.
- بازآرایی مصرف‌کننده‌ها برای بهره‌گیری از «Shared Search Suite» در صفحات صورتحساب دیگر.

### Update (1404-08-24) — جزئیات صورتحساب‌های خرید داخلی (UI)

#### UI — جزئیات صورتحساب‌های خرید داخلی (Invoices / Buy / Detail)
- صفحه `src/app/simulators/modian/invoices/buy/detail/page.tsx` پیاده‌سازی شده و شامل موارد زیر است:
  - هدر «صورتحساب خرید» با لینک برگشت به لیست.
  - بلوک‌های «مشخصات صورتحساب»، «مشخصات فروشنده»، «مشخصات خریدار».
  - جدول «اقلام صورتحساب» با ۲۹ ستون و اسکرول افقی محلی به‌همراه منوی «نمایش ستون‌ها» و دکمه «پیش‌فرض».
  - بخش «اطلاعات پرداخت» که با استایل مشترک `InvoiceDetailSection` رندر می‌شود.
  - جدول «پرداخت‌ها» و اتصال دادهٔ واقعی/Mock برای مشخصات، اقلام، اطلاعات پرداخت و پرداخت‌ها هنوز در حال توسعه است و در اسپرینت بعدی تکمیل می‌شود.

### کیفیت و CI
- Build/Lint: سبز. هشدارهای پراکنده‌ی قبلی در محدوده‌های غیردامنه‌ای به‌مرور پاک‌سازی می‌شوند (CI روی lint با آستانهٔ warn تنظیم است).

### ریسک‌ها و تصمیم‌ها
- **یکپارچگی تاریخ جلالی** (Parsing/Formatting/ISO): ایجاد util مرکزی و مصرف یکنواخت در SearchByFilters توصیه شد. 
- **دیکشنری «موضوع صورتحساب»**: نیاز به تأیید دامنه برای جلوگیری از دوباره‌کاری UI. پیشنهاد: قفل واژگان و تولید enum/constant واحد.

## Update (1404-08-24)

### UI — جزئیات صورتحساب‌های خرید داخلی (Invoices / Buy / Detail)

- صفحه `/simulators/modian/invoices/buy/detail` در فرانت‌اند پیاده‌سازی شده است (`src/app/simulators/modian/invoices/buy/detail/page.tsx`).
- ساختار صفحه شامل این بخش‌هاست:
  - بلوک‌های اطلاعاتی «مشخصات صورتحساب»، «مشخصات فروشنده»، «مشخصات خریدار» و «اطلاعات پرداخت» بر پایهٔ کامپوننت مشترک `InvoiceDetailSection` (مسیر: `src/components/modian/common/InvoiceDetailSection.tsx`).
  - جدول «اقلام صورتحساب» با ۲۹ ستون و اسکرول افقی محلی، همراه با منوی «نمایش ستون‌ها» و دکمه «پیش‌فرض» با رفتار مشابه صفحه لیست صورتحساب‌های خرید.
- در حال حاضر این صفحه از دادهٔ نمایشی استفاده می‌کند؛ نگاشت به سرویس‌های بک‌اند برای هدر صورتحساب، اقلام، اطلاعات پرداخت و جدول «پرداخت‌ها» هنوز تعریف نشده و باید در گام‌های بعدی در همین فایل تکمیل شود.
- جدول «پرداخت‌ها» در حد طراحی و تعریف ۱۹ ستون (شامل تاریخ و مبلغ پرداخت، روش پرداخت، وضعیت‌ها، سهم مالیات و عوارض، بدهی فروشنده/اعتبار خریدار و ستون ثابت «جزئیات» در انتهای جدول) مشخص شده است؛ منوی «نمایش ستون‌ها» و اسکرول افقی با ستون ثابت جزئیات برای این جدول در وضعیت برنامه‌ریزی‌شده قرار دارد.

#### به‌روزرسانی ۱۴۰۴/۰۹/۰۵ — گزارش فایل‌های خروجی صورتحساب‌ها (UI)

**دامنهٔ فیچر**

- صفحه/مودال «گزارش فایل‌های خروجی» برای صورتحساب‌ها در مودیان.
- تمرکز فعلی روی UI و رفتارهای فرمی در تب «فایل صورتحساب‌ها» و «اظهارنامه».

**وضعیت پیاده‌سازی**

- پیاده‌سازی UI:
  - استفاده از `ScrollableTableShell` برای نمایش جدول وضعیت فایل‌های خروجی (نام فایل، تاریخ ایجاد، وضعیت ارسال و ...).
  - استفاده از `FieldGrid` و `FormField` با `variant="floating"` برای چیدمان فیلترها.
  - استفاده از `ModianJalaliDateField` برای فیلترهای تاریخ در تب «فایل صورتحساب‌ها».
- اتصال به بک‌اند:
  - در این مرحله، داده‌ها ماک هستند و هنوز به API لیست فایل‌های خروجی متصل نشده‌ایم.
  - تصمیم نهایی دربارهٔ مرج UI (با دادهٔ ماک) یا بلوکه‌کردن تا آماده شدن API در سطح مدیریت پروژه گرفته می‌شود
    (گزینهٔ پیشنهادی تیم: مرج UI با دادهٔ ماک، همراه با مستندسازی صریح ماک بودن).

**نکات محصولی/تحلیلی**

- پیش‌فرض دوره/سال در تب «اظهارنامه» بر اساس فصل جاری محاسبه می‌شود
  (مثال: اگر فصل جاری Q3 سال ۱۴۰۴ باشد، مقدار پیش‌فرض فیلتر دوره، `1404-Q2` است).
- این رفتار باید با منطق نهایی کسب‌وکاری در بک‌اند هم‌راستا شود؛ در صورت نیاز، منطق دقیق‌تری بر اساس تاریخ شروع/پایان دوره
  در نسخه‌های بعدی اعمال خواهد شد.

> این به‌روزرسانی صرفاً وضعیت فعلی UI را مستندسازی می‌کند و تا قبل از اتصال نهایی به سرویس‌های
> `simulator-modian` برای خروجی فایل‌ها، به عنوان **ماک** در نظر گرفته می‌شود.
#### به‌روزرسانی ۱۴۰۴/۰۹/۱۴ — اعلامیه‌های خرید (Imports / بورس کالا، UI-only)

**مسیرها و صفحات UI**
- زیرمنوی «اعلامیه‌های خرید» در ماژول مودیان با ساختار زیر پیاده‌سازی شده است (طبق `app-tree.txt` و گزارش تیم مودیان ۱۴۰۴/۰۹/۱۴):
  - `/simulators/modian/purchase-announcements` — شِل/Wrapper اصلی زیرمنو.
  - `/simulators/modian/purchase-announcements/imports` — صفحه «اعلامیه‌های واردات».
  - `/simulators/modian/purchase-announcements/bourse` — صفحه «خرید از بورس کالا».
- هر دو زیرصفحه از همان الگوی جستجو و جدول صورتحساب‌ها استفاده می‌کنند:
  - تب «جستجو با فیلتر / جستجو با شماره مالیاتی».
  - پنل فیلتر پیشرفته با دکمه‌های «جستجو» و «فیلتر پیش‌فرض».
  - نوار ابزار بین جستجو و جدول (خروجی اکسل، نمایش ستون‌ها، انتقال شعبه).
  - جدول با حدود ۱۵ ستون قابل نمایش/مخفی‌سازی و ستون ثابت «جزئیات» در انتهای ردیف.

**وضعیت اتصال به بک‌اند**
- مطابق گزارش تیم، این زیرمنوها در حال حاضر صرفاً در سطح UI/شبیه‌ساز پیاده‌سازی شده‌اند؛
  هیچ قرارداد جدیدی برای endpoint «اعلامیه‌های خرید» در بک‌اند این سند تعریف نشده است.
- بنابراین در این نسخه:
  - **هیچ مسیر/endpoint جدیدی** برای `purchase-announcements` اضافه نمی‌کنیم.
  - این دو صفحه در وضعیت **UI-only** باقی می‌مانند تا زمانی که قرارداد رسمی بک‌اند برای اعلامیه‌های خرید (Imports و بورس کالا) نهایی شود.

**نکته برای نسخه‌های بعدی**
- مشابه سناریوی old-Invoices، در زمان اتصال واقعی به سرویس‌های مودیان باید:
  - mapping رسمی بین فیلدهای فیلتر (وضعیت اعلامیه، موضوع اعلامیه، بازهٔ تاریخ، نوع منبع: واردات / بورس کالا و …) و پارامترهای Query/Body بک‌اند تعریف شود؛
  - ساختار پاسخ لیست اعلامیه‌ها (ستون‌های جدول، وضعیت‌ها، موضوع‌ها) در همین سند به‌صورت جدولی مستند گردد.

#### فهرست صفحات UI-only مودیان (برای برنامه‌ریزی بک‌اند)

در حال حاضر صفحات زیر در ماژول مودیان صرفاً در نقش **UI-only / شبیه‌ساز** پیاده‌سازی شده‌اند
و هنوز endpoint نهایی برای آن‌ها در بک‌اند این سند تعریف نشده است. این جدول برای برنامه‌ریزی
و اولویت‌دهی طراحی API استفاده می‌شود.

| مسیر صفحه (App Router) | گروه دامنه | توضیح وضعیت |
| --- | --- | --- |
| `/simulators/modian/invoices/buy/detail` | صورتحساب‌های نسل فعلی | جزئیات صورتحساب خرید؛ داده‌ها ماک هستند، سرویس جزئیات، اقلام و پرداخت‌ها TBD. |
| `/simulators/modian/invoices/sales` | صورتحساب‌های نسل فعلی | لیست فروش داخلی؛ جدول، Search Suite و ستون‌ها کامل، اتصال به API TBD. |
| `/simulators/modian/invoices/sales/detail` | صورتحساب‌های نسل فعلی | جزئیات فروش داخلی؛ مشابه بالا، فقط UI. |
| `/simulators/modian/invoices/exports` | صورتحساب‌های نسل فعلی | لیست فروش صادراتی؛ فیلترها و ستون‌ها آماده، endpoint جستجو TBD. |
| `/simulators/modian/invoices/exports/detail` | صورتحساب‌های نسل فعلی | جزئیات فروش صادراتی؛ فقط UI. |
| `/simulators/modian/old-Invoices/buy` | صورتحساب‌های قدیمی | لیست خرید داخلی قبل از ۱۴۰۲/۰۳/۲۶؛ فقط UI برای آموزش/شبیه‌سازی. |
| `/simulators/modian/old-Invoices/buy/detail` | صورتحساب‌های قدیمی | جزئیات خرید داخلی قدیمی؛ فقط UI. |
| `/simulators/modian/old-Invoices/sales` | صورتحساب‌های قدیمی | لیست فروش داخلی قدیمی؛ فقط UI. |
| `/simulators/modian/old-Invoices/sales/detail` | صورتحساب‌های قدیمی | جزئیات فروش داخلی قدیمی؛ فقط UI. |
| `/simulators/modian/old-Invoices/exports` | صورتحساب‌های قدیمی | لیست فروش صادراتی قدیمی؛ فقط UI. |
| `/simulators/modian/old-Invoices/exports/detail` | صورتحساب‌های قدیمی | جزئیات فروش صادراتی قدیمی؛ فقط UI. |
| `/simulators/modian/purchase-announcements` | اعلامیه‌های خرید | شِل/Wrapper زیرمنو؛ بدون تماس مستقیم API. |
| `/simulators/modian/purchase-announcements/imports` | اعلامیه‌های خرید | لیست اعلامیه‌های واردات؛ Search Suite و جدول آماده، endpointها TBD. |
| `/simulators/modian/purchase-announcements/bourse` | اعلامیه‌های خرید | لیست خریدهای بورس کالا؛ فقط UI. |
| `/simulators/modian/contracts/contracting` | قراردادها | لیست قراردادهای پیمانکاری؛ جدول و فیلترها کامل، API ثبت/لیست قرارداد TBD. |
| `/simulators/modian/contracts/contracting/new` | قراردادها | قدم اول ویزارد ثبت قرارداد پیمانکاری؛ فقط UI. |
| `/simulators/modian/contracts/commission` | قراردادها | لیست قراردادهای حق‌العملکاری؛ اسکلت لیست و دکمه «ثبت جدید» آماده، API TBD. |

#### به‌روزرسانی ۱۴۰۴/۰۹/۱۷ — قراردادهای پیمانکاری و حق‌العملکاری (UI-only)

**مسیرها و صفحات UI (قراردادها)**

- منوی «قراردادها» در سایدبار مودیان فعال شده و شامل زیرمسیرهای زیر است:
  - لیست قراردادهای پیمانکاری:
    - صفحه: `/simulators/modian/contracts/contracting`
  - ویزارد ثبت قرارداد پیمانکاری (قدم اول):
    - صفحه: `/simulators/modian/contracts/contracting/new`
  - لیست قراردادهای حق‌العملکاری:
    - صفحه: `/simulators/modian/contracts/commission`

**وضعیت پیاده‌سازی UI و Search Suite**

- لیست پیمانکاری (`/simulators/modian/contracts/contracting`) بر اساس اسکلت جدول old-Invoices/exports ساخته شده
  و از کامپوننت‌های مشترک `ScrollableTableShell`, `ColumnsVisibilityBar`, `EmptyTableRow` برای نمایش جدول و وضعیت «موردی ثبت نشده» استفاده می‌کند.
- آرایهٔ `columnsConfig` برای جدول قراردادهای پیمانکاری کامل شده است؛
  تمام ستون‌های مورد نیاز (از جمله «شماره قرارداد»، «نقش مودی»، شناسه‌ها و وضعیت‌ها) هم در جدول و هم در نوار «نمایش ستون‌ها»
  در دسترس هستند.
- برای مسیر `/simulators/modian/contracts/contracting` کانفیگ اختصاصی در `SearchByFilters` تعریف شده است:
  - UI جستجوی ساده و پیشرفته با صفحهٔ مرجع هم‌تراز شده،
  - ۱۷ فیلد جستجوی پیشرفته (تاریخ‌ها، فیلدهای متنی/عددی و کشویی) با لیبل و نوع ورودی مناسب پیاده‌سازی شده‌اند،
  - گزینه‌های سه فیلد کشویی «نوع قرارداد»، «وضعیت قرارداد» و «موضوع قرارداد» تنظیم شده‌اند،
  - رفتار دکمهٔ «حذف فیلتر» برای پاک‌کردن فیلدهای تاریخ اصلاح شده و مشکل از دست رفتن فوکِس در فیلدهای متنی/عددی برطرف شده است.
- قدم اول ویزارد `/simulators/modian/contracts/contracting/new` شامل استپر مشترک و مرحلهٔ «تعیین نقش» است
  (رادیوهای «کارفرما / پیمانکار» با پیش‌فرض «کارفرما» و دکمهٔ «ادامه»).
- صفحهٔ لیست حق‌العملکاری (`/simulators/modian/contracts/commission`) از نظر اسکلت لیست، نوار ابزار و دکمهٔ «ثبت قرارداد جدید»
  با لیست پیمانکاری هم‌تراز شده است؛ هم‌ترازسازی کامل فیلترها و ستون‌ها بعد از نهایی‌شدن قوانین دامنه‌ای پیمانکاری انجام خواهد شد.

**وضعیت اتصال به بک‌اند در این فاز**

- در بازهٔ مربوط به این به‌روزرسانی، هیچ endpoint جدیدی در بک‌اند ماژول مودیان برای فیچرهای زیر تعریف نشده است:
  - صورتحساب‌های old-Invoices (خرید داخلی، فروش داخلی، فروش صادراتی)،
  - اعلامیه‌های خرید (واردات، بورس کالا)،
  - قراردادهای پیمانکاری و حق‌العملکاری.
- تمام صفحات زیر در حال حاضر در نقش **UI-only / شبیه‌ساز** هستند و فقط دادهٔ ماک نمایش می‌دهند:
  - `/simulators/modian/invoices/sales`, `/simulators/modian/invoices/sales/detail`
  - `/simulators/modian/invoices/exports`, `/simulators/modian/invoices/exports/detail`
  - `/simulators/modian/invoices/buy/detail`
  - `/simulators/modian/old-Invoices/buy`, `/simulators/modian/old-Invoices/buy/detail`
  - `/simulators/modian/old-Invoices/sales`, `/simulators/modian/old-Invoices/sales/detail`
  - `/simulators/modian/old-Invoices/exports`, `/simulators/modian/old-Invoices/exports/detail`
  - `/simulators/modian/purchase-announcements`, `/simulators/modian/purchase-announcements/imports`,
    `/simulators/modian/purchase-announcements/bourse`
  - `/simulators/modian/contracts/contracting`, `/simulators/modian/contracts/contracting/new`,
    `/simulators/modian/contracts/commission`
- بخش‌های قبلی سند که endpointهای موجود مودیان را پوشش می‌دهند (مانند `taxfile`, `bills`, `memory-uid`,
  `users-roles`, `roles`, `portal`, `home` و …) در این فاز بدون تغییر باقی می‌مانند؛
  تنها مصرف UI جدید روی همین endpoints در گزارش‌های فیچر توضیح داده شده است.
  +


## بخش ۳ — Future API Mapping (TBD)

در این بخش، برای فیچرهای زیر **جدول نگاشت UI → API** تعریف خواهد شد. تا زمانی‌که endpointهای متناظر در بک‌اند پیاده‌سازی و در
`backend-src` تأیید نشده‌اند، این فیچرها در وضعیت «UI-only / شبیه‌ساز» باقی می‌مانند و صرفاً برای طراحی و دمو استفاده می‌شوند:

- صورتحساب‌های خرید/فروش/صادرات قبل از ۱۴۰۲/۰۳/۲۶ (`old-Invoices/*`)
- گزارش فایل‌های خروجی صورتحساب‌ها
- اعلامیه‌های خرید (Imports / بورس کالا)
- قراردادهای پیمانکاری و حق‌العملکاری

### 3.1 Search Suite Mapping Table (Unified)

این جدول «قرارداد مشترک» بین تیم UI و تیم بک‌اند برای تمام صفحاتی است که از **Shared Search Suite** استفاده می‌کنند.
هر endpoint جستجو/لیست که برای این صفحات ساخته می‌شود باید **دقیقاً** از همین نام‌گذاری و تبدیل‌ها پیروی کند.

**Legend وضعیت**
- **Existing**: در بک‌اند پیاده‌سازی و قابل استفاده
- **Mock**: فعلاً دادهٔ نمایشی در UI
- **UI-only**: صرفاً UI/شبیه‌ساز (endpoint رسمی ندارد)
- **TBD**: قرارداد/endpoint هنوز نهایی نشده

#### 3.1.1 فیلدهای مشترک (SearchByFilters / SearchByTaxId)

| دامنه/صفحه | بخش UI | فیلد UI (Label) | کلید UI (پیشنهادی) | نوع | Query/Body (پیشنهادی) | API Field (پیشنهادی) | وضعیت | توضیح |
|---|---|---|---|---|---|---|---|---|
| invoices/*, old-Invoices/* | تب «شماره مالیاتی» | شماره مالیاتی | `taxId` | string | `taxId` | `taxId` | TBD | ورودی دقیق؛ برای جستجو مستقیم |
| invoices/*, old-Invoices/* | تب «فیلترها» | نقش مؤدی | `role` | string[] | `role` | `role` | TBD | گزینه‌ها: «عادی / حق‌العملکار / آمر» |
| invoices/*, old-Invoices/* | تب «فیلترها» | وضعیت صورتحساب | `status` | string[] | `status` | `status` | TBD | دامنه UI: رد شده، تایید شده، تایید سیستمی، در انتظار واکنش، عدم امکان واکنش، عدم نیاز به واکنش، ابطال شده |
| invoices/*, old-Invoices/* | تب «فیلترها» | موضوع صورتحساب | `subject` | string[] | `subject` | `subject` | TBD | واژگان دامنه باید قفل شود (Enum/Constant) |
| invoices/*, old-Invoices/* | تب «فیلترها» | کد شعبه | `branchCode` | string | `branchCode` | `branchCode` | TBD | عدد/متن (مطابق UI) |
| invoices/*, old-Invoices/* | تب «فیلترها» | الگوی صورتحساب | `invoicePattern` | string | `invoicePattern` | `invoicePattern` | TBD | در فروش داخلی گزینه «الگوی بورس کالا» شرطی است |
| invoices/*, old-Invoices/* | تب «فیلترها» | تاریخ صدور از | `invoiceIssueDateFrom` | date | `invoiceIssueDateFrom` | `invoiceIssueDate` | TBD | UI جلالی → API باید ISO8601 باشد |
| invoices/*, old-Invoices/* | تب «فیلترها» | تاریخ صدور تا | `invoiceIssueDateTo` | date | `invoiceIssueDateTo` | `invoiceIssueDate` | TBD | UI جلالی → API باید ISO8601 باشد |

#### 3.1.2 فیلدهای اختصاصی old-Invoices

| دامنه/صفحه | بخش UI | فیلد UI (Label) | کلید UI (پیشنهادی) | نوع | Query/Body (پیشنهادی) | API Field (پیشنهادی) | وضعیت | توضیح |
|---|---|---|---|---|---|---|---|---|
| old-Invoices/* | زیرمنوهای ثابت | سال مالیاتی | `taxYear` | string | `taxYear` | `taxYear` | TBD | گزینه‌ها: ۱۴۰۰ تا ۱۴۰۳ (در UI فعلاً ثابت) |
| old-Invoices/* | زیرمنوهای ثابت | دوره مالیاتی (فصل) | `taxPeriod` | string | `taxPeriod` | `taxPeriod` | TBD | گزینه‌ها: بهار/تابستان/پاییز/زمستان |

#### 3.1.3 فیلدهای اختصاصی اعلامیه‌های خرید

| دامنه/صفحه | بخش UI | فیلد UI (Label) | کلید UI (پیشنهادی) | نوع | Query/Body (پیشنهادی) | API Field (پیشنهادی) | وضعیت | توضیح |
|---|---|---|---|---|---|---|---|---|
| purchase-announcements/imports | فیلترها | نوع منبع | `sourceType` | const | `sourceType=imports` | `sourceType` | UI-only | از مسیر صفحه قابل استنتاج است |
| purchase-announcements/bourse | فیلترها | نوع منبع | `sourceType` | const | `sourceType=bourse` | `sourceType` | UI-only | از مسیر صفحه قابل استنتاج است |
| purchase-announcements/* | فیلترها | وضعیت اعلامیه | `noticeStatus` | string[] | `noticeStatus` | `noticeStatus` | TBD | واژگان دامنه TBD |
| purchase-announcements/* | فیلترها | موضوع اعلامیه | `noticeSubject` | string[] | `noticeSubject` | `noticeSubject` | TBD | واژگان دامنه TBD |
| purchase-announcements/* | فیلترها | تاریخ از/تا | `noticeDateFrom/To` | date | `noticeDateFrom`, `noticeDateTo` | `noticeDate` | TBD | UI جلالی → ISO8601 |

#### 3.1.4 فیلدهای اختصاصی قراردادها (Contracting)

| دامنه/صفحه | بخش UI | فیلد UI (Label) | کلید UI (پیشنهادی) | نوع | Query/Body (پیشنهادی) | API Field (پیشنهادی) | وضعیت | توضیح |
|---|---|---|---|---|---|---|---|---|
| contracts/contracting | جستجو پیشرفته | نوع قرارداد | `contractType` | string | `contractType` | `contractType` | TBD | گزینه‌ها در UI تنظیم شده‌اند |
| contracts/contracting | جستجو پیشرفته | وضعیت قرارداد | `contractStatus` | string | `contractStatus` | `contractStatus` | TBD | گزینه‌ها در UI تنظیم شده‌اند |
| contracts/contracting | جستجو پیشرفته | موضوع قرارداد | `contractSubject` | string | `contractSubject` | `contractSubject` | TBD | گزینه‌ها در UI تنظیم شده‌اند |
| contracts/contracting/new | ویزارد (قدم ۱) | نقش | `contractRole` | string | `contractRole` | `contractRole` | UI-only | گزینه‌ها: «کارفرما / پیمانکار» |
| contracts/contracting | جستجو پیشرفته | سایر فیلدهای پیشرفته (۱۷ مورد) | — | — | — | — | TBD | **نیازمند استخراج دقیق کلیدها از کانفیگ SearchByFilters** |

#### 3.1.5 Governance (الزامی)
- هر صفحه‌ای که از Search Suite استفاده می‌کند باید فقط از `src/components/modian/common/search/*` مصرف کند؛ **کپی/فورک ممنوع**.
- هر تغییر در نام/دامنهٔ فیلدهای Search Suite باید هم‌زمان در این جدول و قرارداد endpoint مربوطه اعمال شود.
- تبدیل تاریخ: UI جلالی → API همیشه ISO8601 (گرینویچ/توافق‌شده) و تبدیل فقط در لایه UI/lib انجام می‌شود.

### 3.2 قراردادها — Draft API Mapping (TBD)

> این بخش صرفاً **پیشنویس قرارداد API** برای «قراردادها» است و هنوز هیچ ادعایی دربارهٔ وجود/پیاده‌سازی در بک‌اند ندارد.
> تا قبل از پیاده‌سازی و تأیید رسمی در بک‌اند، همهٔ مسیرهای `/simulators/modian/contracts/*` در وضعیت **UI-only** باقی می‌مانند.

#### 3.2.1 مسیرهای UI (Reference / UI-only)

- `/simulators/modian/contracts/contracting`
- `/simulators/modian/contracts/contracting/new`
- `/simulators/modian/contracts/commission`

#### 3.2.2 Endpointهای پیشنهادی (TBD)

| مسیر (API) | متد | شرح | وضعیت |
| --- | --- | --- | --- |
| `/api/modian/contracts/contracting` | `GET` | لیست قراردادهای پیمانکاری (پشتیبانی از Search Suite؛ Query TBD) | TBD |
| `/api/modian/contracts/contracting` | `POST` | ثبت قرارداد پیمانکاری (خروجی: `id` قرارداد) | TBD |
| `/api/modian/contracts/commission` | `GET` | لیست قراردادهای حق‌العملکاری (Query TBD) | TBD |
| `/api/modian/contracts/:id` | `GET` | جزئیات قرارداد (برای صفحهٔ جزئیات/ویرایش در آینده) | TBD |
| `/api/modian/contracts/:id` | `PATCH` | ویرایش/تکمیل قرارداد (برای ویزارد چندمرحله‌ای در آینده) | TBD |
| `/api/modian/contracts` | `GET` | لیست کلی قراردادها (فیلترهای مشترک مثل `role=...` و ...) | TBD |

#### 3.2.3 Queryهای مشترک پیشنهادی (TBD)

- `role`: نقش مودی در قرارداد (`employer` یا `contractor`) — نمونه: `GET /api/modian/contracts?role=employer`
- `page`, `pageSize`: صفحه‌بندی
- `sort`, `order`: مرتب‌سازی
- سایر فیلترهای Search Suite (وضعیت‌ها، شناسه‌ها، بازه تاریخ و ...) در Block B به‌صورت جدول Mapping تعریف می‌شوند.

#### 3.2.4 Mapping حداقلی ویزارد «ثبت قرارداد پیمانکاری / قدم اول» (TBD)

> مرجع UI: صفحهٔ `/simulators/modian/contracts/contracting/new` (Stateهای فعلی در UI).  
> هدف این جدول: فقط هم‌نام‌سازی اولیهٔ فیلدها برای طراحی API آینده (بدون الزام به این نام‌ها).

| فیلد/State در UI | پیشنهاد نام فیلد در API | محل | توضیح | وضعیت |
| --- | --- | --- | --- | --- |
| `role` | `role` | Body | نقش مودی: `employer` / `contractor` | TBD |
| `economicCode` | `counterpartyEconomicCode` | Body | وقتی حالت پیش‌فرض «ثبت با شماره اقتصادی پیمانکار» فعال است | TBD |
| `useIdentityAndPostalMode` | `useIdentityAndPostalMode` | Body | وقتی کاربر به حالت «شناسه هویتی + کدپستی» سوییچ می‌کند | TBD |
| `personType` | `counterpartyPersonType` | Body | نوع شخص: حقیقی ایرانی/غیرایرانی/حقوقی/مشارکت مدنی | TBD |
| `nationalOrForeignId` | `counterpartyNationalOrForeignId` | Body | شماره ملی یا شماره فراگیر (بسته به `personType`) | TBD |
| `postalCode` | `counterpartyPostalCode` | Body | کدپستی (۱۰ رقم) | TBD |
| `legalId` | `counterpartyLegalId` | Body | شناسه ملی (۱۱ رقم) — فقط در حالت `حقوقی` | TBD |
| `partnershipId` | `counterpartyPartnershipId` | Body | شناسه مشارکت مدنی (۱۱ رقم) — فقط در حالت `مشارکت مدنی` | TBD |

**قیدهای پیشنهادی اعتبارسنجی (TBD)**

- اگر `useIdentityAndPostalMode=false`:
  - `counterpartyEconomicCode` اجباری و دقیقاً ۱۱ رقم.
- اگر `useIdentityAndPostalMode=true`:
  - `counterpartyPersonType` اجباری.
  - `counterpartyPostalCode` اجباری و دقیقاً ۱۰ رقم.
  - بر اساس `counterpartyPersonType` یکی از فیلدهای شناسه (`counterpartyNationalOrForeignId` یا `counterpartyLegalId` یا `counterpartyPartnershipId`) اجباری است.
  