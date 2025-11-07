//src\app\simulators\modian\roles\add\page.tsx
'use client';

import { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';  // افزودن hook router برای هدایت
import HelpGuideButton from '@/components/common/HelpGuideButton';

export default function RoleAddPage() {
  const [title, setTitle] = useState('');
  // 0: عنوان نقش، 1: پرونده مالیاتی، 2: صورت‌حساب‌ها، 3: دسترسی کاربران/نقش‌ها، 4: انتخاب کاربران، 5: تأیید نهایی
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
  // مرحلهٔ «کاربران و نقش‌ها»: مقدار دسترسی انتخاب‌شده
  const [userRolesAccess, setUserRolesAccess] = useState<'none' | 'read' | 'write'>('none');
  // مرحلهٔ «کاربران»: جستجو و انتخاب‌ها
  const [userSearch, setUserSearch] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<Record<string, boolean>>({});
  const users = [
    { id: 'u1', name: 'مهدی محمدی', nid: '۱۳۸۹۵۱۱۷۷' },
    { id: 'u2', name: 'ابراهیم صبوری', nid: '۰۰۵۳۹۳۹۵۳' },
  ];
  const filtered = users.filter(
    (u) =>
      u.name.includes(userSearch.trim()) ||
      u.nid.includes(userSearch.trim())
  );
  const router = useRouter(); // اضافه کردن hook router برای هدایت

 // تابع برای رفتن به صفحه اصلی تب نقش‌ها
 const handleFinalSubmit = () => {
   // به‌روزرسانی وضعیت (در صورت نیاز)
   // انتقال به صفحه اصلی تب نقش‌ها
   router.push('/simulators/modian/users-roles?tab=roles');
 };
  const allVisibleSelected = filtered.length > 0 && filtered.every((u) => selectedUsers[u.id]);
  // تعداد انتخاب‌ها برای وضعیت دکمه‌ها
  const selectedCount = filtered.filter((u) => !!selectedUsers[u.id]).length;
  const selectAllDisabled = filtered.length > 0 && selectedCount === filtered.length; // همه انتخاب شده‌اند
  const selectNoneDisabled = selectedCount === 0; // هیچ‌کدام انتخاب نشده

  // نگه‌داشت انتخاب‌های سطح دسترسی برای نمایش در «تأیید نهایی»
  type Access = 'none' | 'read' | 'write';
  const [perm, setPerm] = useState<Record<string, Access>>({
    // پرونده مالیاتی (استانداردسازی کلیدها با مرحلهٔ تعیین دسترسی)
    'taxfile.info': 'none',
    'taxfile.membership': 'none',
    'contracts.contracting': 'none',
    'contracts.agency': 'none',
    'requests.increaseLimit': 'none',
    'requests.rejectReferral': 'none',
    'complaints': 'none',
    'managersLedger': 'none',
    // صورت‌حساب‌ها
    'inv.sales': 'none',
    'inv.purchases': 'none',
  });
  const setAccess = (key: string, val: Access) =>
    setPerm((p) => ({ ...p, [key]: val }));
  const accessLabel = (val: Access) =>
    val === 'write' ? 'مشاهده و عملیات' : val === 'read' ? 'فقط مشاهده' : 'هیچکدام';

 

  // یک ردیف دسترسی با سه گزینه (با قابلیت عنوان بولد و زیرعنوان خاکستری)
  const PermissionRow = ({
    name,
    label,
    title,
    subtitle,
  }: {
    name: string;            // کلید وضعیت
    label?: string;          // لیبل ساده
    title?: string;          // تیتر بولد
    subtitle?: string;       // زیرتیتر خاکستری
  }) => (
    <div className="grid grid-cols-12 items-center py-3">
      <div className="col-span-6 pr-2">
        {title ? (
          <>
            <div className="text-base font-semibold text-gray-800">{title}</div>
            {subtitle && (
              <div className="mt-1 text-xs text-gray-500">{subtitle}</div>
            )}
          </>
        ) : (
          <div className="text-sm text-gray-700">{label}</div>
        )}
      </div>
      <label className="col-span-2 flex items-center gap-2 justify-center text-sm">
        <input
          type="radio"
          name={name}
          checked={perm[name] === 'none'}
          onChange={() => setAccess(name, 'none')}
        />
        <span>هیچکدام</span>
      </label>
      <label className="col-span-2 flex items-center gap-2 justify-center text-sm">
        <input
          type="radio"
          name={name}
          checked={perm[name] === 'read'}
          onChange={() => setAccess(name, 'read')}
        />
        <span>فقط مشاهده</span>
      </label>
      <label className="col-span-2 flex items-center gap-2 justify-center text-sm">
        <input
          type="radio"
          name={name}
          checked={perm[name] === 'write'}
          onChange={() => setAccess(name, 'write')}
        />
        <span>مشاهده و عملیات</span>
      </label>
    </div>
  );

  return (
    <Suspense fallback={<div dir="rtl" className="p-6 text-sm text-gray-500">در حال بارگذاری…</div>}>
    <div dir="rtl" className="space-y-4">
      {/* کارت سفید اصلی؛ بلندتر + چسباندن نوار دکمه‌ها به کف کارت */}
      <div className="border rounded-md bg-white min-h-[520px] flex flex-col">
        {/* محتوای بالایی کارت */}
        <div className="flex-1 p-6 flex flex-col">
          {/* تیتر */}
          <h2 className="text-right text-lg font-semibold mb-8">ایجاد نقش</h2>

          {/* 2) استپر: دایره‌ها و خط‌چین‌ها بالای عنوان‌ها */}
          {(() => {
            const steps = [
              'عنوان نقش',
              'دسترسی پرونده مالیاتی',
              'دسترسی صورت‌حساب‌ها',
              'دسترسی کاربران و نقش‌ها',
              'کاربران',
              'تایید نهایی',
            ];
            return (
              <div className="text-sm text-gray-600 mt-2">
                {/* ردیف بالا: نقطه‌ها + خطوط بین آن‌ها با رنگ پویا */}
                <ol className="grid grid-cols-6 gap-0 mb-2">
                  {steps.map((_, i) => {
                    const leftClass =
                      step > i
                        ? 'border-green-600 border-solid'
                        : 'border-gray-300 border-dashed';
                    const rightClass =
                      step >= i
                        ? 'border-green-600 border-solid'
                        : 'border-gray-300 border-dashed';
                    const isDone = i < step;
                    const isCurrent = i === step;
                    return (
                      <li
                        key={'dot-' + i}
                        className="relative flex items-start justify-center overflow-visible"
                      >
                        {/* نیمهٔ چپ: اتصال به مرحلهٔ بعد (در RTL سمت چپ) */}
                        {i < steps.length - 1 && (
                          <span className={`absolute top-2 left-0 w-1/2 border-t ${leftClass}`} />
                        )}
                        {/* نیمهٔ راست: اتصال به مرحلهٔ قبلی (در RTL سمت راست) */}
                        {i > 0 && (
                          <span className={`absolute top-2 right-0 w-1/2 border-t ${rightClass}`} />
                        )}
                        {/* نماد مرحله: انجام‌شده = تیک سبز (بدون دایره)، جاری = دایره سبز، آتی = نقطه طوسی */}
                        {isDone ? (
                          <svg
                            viewBox="0 0 20 20"
                            className="h-8 w-8 text-green-600 z-10"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M8.143 13.314 4.83 10l1.18-1.18 2.133 2.133 5.847-5.847L15.17 6.29z" />
                          </svg>
                        ) : (
                          <span
                            className={
                              'inline-block rounded-full z-10 ' +
                              (isCurrent ? 'h-3.5 w-3.5 bg-green-600' : 'h-2.5 w-2.5 bg-gray-300')
                            }
                          />
                        )}
                      </li>
                    );
                  })}
                </ol>
                {/* ردیف پایین: عناوین زیر دایره‌ها */}
                <ol className="grid grid-cols-6 gap-6">
                  {steps.map((label, i) => (
                    <li key={'label-' + i} className="text-center">
                      <span className={i === step ? 'text-green-700 font-medium' : ''}>{label}</span>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })()}

          {/* توضیح مرحله (زیر استپر) — برای مرحله‌های ۳ و ۴ نمایش نده */}
          {step !== 3 && step !== 4 && (
            <p className="mt-10 mb-0 text-sm font-semibold text-gray-700 text-justify leading-6">
              {step === 0 &&
                'عنوان مورد نظر برای نقش را وارد کنید.'}
              {step === 1 &&
                'دسترسی‌هایی که در این قسمت به نقش اختصاص می‌دهید مربوط به پروندهٔ مالیاتی می‌باشد و در صورت تخصیص، بدون توجه به شعبه‌های کاربر فعال می‌شود.'}
              {step === 2 &&
                'دسترسی به صورت‌حساب‌های هر شعبه فقط برای کاربران همان شعبه ممکن است. برای اعمال این دسترسی‌ها کاربر باید شعبه داشته باشد.'}
            </p>
          )}

          {/* محتوای مرحله‌ها */}
          {step === 0 ? (
            /* مرحله ۱: عنوان نقش */
            <div className="flex-1 flex flex-col items-right justify-center mt-8">
              <p className="mb-10 text-right text-sm font-bold text-gray-600"></p>
              <div className="relative w-full">
                <input
                  id="role-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border rounded-md px-3 py-3 text-right placeholder:text-gray-400"
                  placeholder="عنوان نقش را وارد کنید"
                />
                <label
                  htmlFor="role-title"
                  className="absolute right-3 -top-2 bg-white px-1 text-xs text-gray-600"
                >
                  عنوان نقش
                </label>
              </div>
            </div>
          ) : step === 1 ? (
            /* مرحله ۲: دسترسی‌های پرونده مالیاتی */
            <div className="flex-1 mt-8">

              {/* سکشن دسترسی‌های پرونده مالیاتی */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-green-50 border-b px-4 py-3 text-sm font-medium text-green-800">
                  دسترسی‌های پرونده مالیاتی
                </div>
                <div className="px-4 py-4">
                  {/* بلوک 1: تک‌بخشی - اطلاعات پرونده مالیاتی */}
                  <section className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0">
                    <PermissionRow name="taxfile.info" label="اطلاعات پرونده مالیاتی" />
                  </section>

                  {/* بلوک 2: تک‌بخشی - عضویت */}
                  <section className="border-t border-gray-200 pt-4">
                    <PermissionRow name="taxfile.membership" label="عضویت" />
                  </section>

                  {/* بلوک 3: دو‌بخشی - قراردادها */}
                  <section className="border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-medium text-gray-800 mb-2">قراردادها</h3>
                    <PermissionRow
                      name="contracts.contracting"
                      label="قراردادهای پیمانکاری"
                    />
                    <PermissionRow
                      name="contracts.agency"
                      label="قراردادهای حق‌العمل‌کاری"
                    />
                  </section>

                  {/* بلوک 4: دو‌بخشی - درخواست‌ها */}
                  <section className="border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-medium text-gray-800 mb-2">درخواست‌ها</h3>
                    <PermissionRow
                      name="requests.increaseLimit"
                      label="افزایش حد مجاز فروش"
                    />
                    <PermissionRow
                      name="requests.rejectReferral"
                      label="رد سیستمی صورتحساب‌های ارجاعی"
                    />
                  </section>

                  {/* بلوک 5: تک‌بخشی - مدیریت شکایات و تخلفات */}
                  <section className="border-t border-gray-200 pt-4">
                    <PermissionRow name="complaints" label="مدیریت شکایات و تخلفات" />
                  </section>

                  {/* بلوک 6: تک‌بخشی - داشبورد مدیریتی */}
                  <section className="border-t border-gray-200 pt-4">
                    <PermissionRow name="managersLedger" label="داشبورد مدیریتی" />
                  </section>
                </div>
              </div>
            </div>
          ) : step === 2 ? (
            /* مرحله ۳: دسترسی‌های صورت‌حساب‌ها */
            <div className="flex-1 mt-8">
              <div className="border rounded-md overflow-hidden">
                <div className="bg-green-50 border-b px-4 py-3 text-sm font-medium text-green-800">
                  دسترسی‌های صورت‌حساب‌ها
                </div>
                <div className="px-4 py-4">
                  <section className="pt-2">
                    <PermissionRow
                      name="inv.sales"
                      title="صورت‌حساب‌های فروش"
                      subtitle="صورتحساب های فروش داخلی و صورتحسابهای فروش صادراتی"
                    />
                  </section>
                  <section className="border-t border-gray-200 pt-4">
                    <PermissionRow
                      name="inv.purchases"
                      title="صورت‌حساب‌های خرید"
                      subtitle="صورتحساب های خرید داخلی و اعلامیه های وارداتی و اعلامیه های خرید از بورس"
                    />
                  </section>
                </div>
              </div>
            </div>
          ) : step === 3 ? (
            /* مرحله ۴: دسترسی‌های کاربران و نقش‌ها — حذف کارت/جدول و نمایش صرف گزینه‌ها */
            <div className="flex-1 mt-8">
              <fieldset className="space-y-4">
                <label className="flex items-center gap-3 text-sm">
                  <input
                    name="userroles.access"
                    type="radio"
                    checked={userRolesAccess === 'none'}
                    onChange={() => setUserRolesAccess('none')}
                  />
                  <span>عدم اجازه دسترسی به کاربران و نقش‌ها</span>
                </label>
                <label className="flex items-center gap-3 text-sm">
                  <input
                    name="userroles.access"
                    type="radio"
                    checked={userRolesAccess === 'read'}
                    onChange={() => setUserRolesAccess('read')}
                  />
                  <span>اجازه مشاهده کاربران و نقش‌ها</span>
                </label>
                <label className="flex items-center gap-3 text-sm">
                  <input
                    name="userroles.access"
                    type="radio"
                    checked={userRolesAccess === 'write'}
                    onChange={() => setUserRolesAccess('write')}
                  />
                  <span>اجازه مشاهده و عملیات کاربران و نقش‌ها</span>
                </label>
              </fieldset>

              {/* هشدار تمام‌عرض هنگام انتخاب «مشاهده و عملیات» */}
              {userRolesAccess === 'write' && (
                <div className="mt-6 rounded-md border border-amber-300 bg-red-50 text-amber-900 p-4">
                  <div className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 20 20"
                      className="h-5 w-5 text-orange-500 mt-0.5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.533 1.102-.533 1.402 0l7.518 13.36c.285.507-.083 1.136-.701 1.136H2.232c-.618 0-.986-.629-.701-1.136l7.518-13.36zM10 13a1 1 0 100 2 1 1 0 000-2zm-.75-6.5a.75.75 0 011.5 0v5a.75.75 0 01-1.5 0v-5z" />
                    </svg>
                    <p className="text-sm leading-7">
                      با اختصاص دسترسی <span className="font-semibold">مشاهده و عملیات کاربران و نقش‌ها</span> به این نقش،
                      کاربر منسوب می‌تواند دسترسی کامل به همهٔ کاربران دیگر و همهٔ نقش‌ها داشته باشد. پیشنهاد می‌شود این
                      دسترسی تنها به نقش‌هایی داده شود که مشخصاً <span className="font-semibold">معتمدین پرونده</span> می‌باشند.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : step === 4 ? (
            /* مرحله ۵: انتخاب کاربران برای تخصیص نقش */
            <div className="flex-1 mt-8">
              <p className="mb-3 text-sm text-gray-700">
                لطفاً کاربرانی را که می‌خواهید به نقش تخصیص دهید انتخاب کنید.
              </p>

              {/* نوار ابزار انتخاب‌ها: وضعیت و رنگ دکمه‌ها طبق شرط‌ها */}
              <div className="flex items-center gap-3 mb-3">
                <button
                  type="button"
                  disabled={selectAllDisabled}
                  onClick={() => {
                    if (selectAllDisabled) return;
                    const next: Record<string, boolean> = { ...selectedUsers };
                    filtered.forEach((u) => (next[u.id] = true));
                    setSelectedUsers(next);
                  }}
                  className={
                    'px-3 py-2 rounded-md border bg-white text-sm ' +
                    (selectAllDisabled
                      ? 'border-gray-300 text-gray-300 cursor-not-allowed opacity-60'
                      : 'border-green-600 text-green-700 hover:bg-green-50')
                  }
                >
                  انتخاب همه
                </button>
                <button
                  type="button"
                  disabled={selectNoneDisabled}
                  onClick={() => {
                    if (selectNoneDisabled) return;
                    const next: Record<string, boolean> = { ...selectedUsers };
                    filtered.forEach((u) => (next[u.id] = false));
                    setSelectedUsers(next);
                  }}
                  className={
                    'px-3 py-2 rounded-md border bg-white text-sm ' +
                    (selectNoneDisabled
                      ? 'border-gray-300 text-gray-300 cursor-not-allowed opacity-60'
                      : 'border-red-500 text-red-600 hover:bg-red-50')
                  }
                >
                  هیچکدام
                </button>
              </div>

              {/* فیلد جستجو: آیکون بیرون و سمت راست فیلد با بوردر مربع */}
              <div className="flex items-center gap-2 mb-4">
                <button
                  type="button"
                  aria-label="جستجو"
                  className="h-9 w-9 flex items-center justify-center border rounded-md bg-white"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 text-gray-600"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.44 12.02l3.27 3.27-1.42 1.42-3.27-3.27a7 7 0 1 1 1.42-1.42zM8.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" />
                  </svg>
                </button>
                <input
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  className="w-96 border rounded-md px-3 py-2 text-sm"
                  placeholder="جستجو با نام، کد فراگیر یا کد ملّی"
                />
              </div>

              {/* جدول کاربران: دو ستون نام/کد + ستون چک‌باکس بدون تیتر */}
              <div className="border rounded-md overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-green-50 text-green-800">
                    <tr>
                      <th className="w-12 px-4 py-2"><span className="sr-only">انتخاب</span></th>
                      <th className="text-right font-medium px-4 py-2">نام و نام خانوادگی</th>
                      <th className="text-right font-medium px-4 py-2">کد ملّی / کد فراگیر</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {filtered.map((u) => (
                      <tr key={u.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 text-center">
                          <input
                            type="checkbox"
                            checked={!!selectedUsers[u.id]}
                            onChange={(e) =>
                              setSelectedUsers((prev) => ({ ...prev, [u.id]: e.target.checked }))
                            }
                          />
                        </td>
                        <td className="px-4 py-2 text-gray-800">{u.name}</td>
                        <td className="px-4 py-2 text-gray-600">{u.nid}</td>
                      </tr>
                    ))}
                    {filtered.length === 0 && (
                      <tr>
                        <td colSpan={3} className="px-4 py-6 text-center text-gray-500">
                          کاربری یافت نشد.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* مرحله ۶: تأیید نهایی */
            <div className="flex-1 mt-8">
              <p className="mb-6 text-sm text-gray-700 text-justify">
                موارد ثبت‌شده برای نقش، بشرح زیر است. آیا آن‌ها را تأیید می‌کنید؟
              </p>

              {/* عنوان نقش */}
              <div className="mb-6">
                <span className="font-medium text-gray-700">عنوان نقش: </span>
                <span className="text-gray-900">{title || '—'}</span>
              </div>

              {/* خلاصه دسترسی پرونده مالیاتی */}
              <div className="border rounded-md overflow-hidden mb-6">
                <div className="bg-green-50 border-b px-4 py-3 text-sm font-medium text-green-800">
                  دسترسی‌های پرونده مالیاتی
                </div>
                <div className="px-4 py-3 text-sm divide-y">
                  {/* نمایش فقط مواردی که دسترسی‌شان none نیست */}
                  {perm['taxfile.info'] !== 'none' && (
                    <div className="py-2 flex items-center justify-between">
                      <span>اطلاعات پرونده مالیاتی</span>
                      <span className="text-gray-700">{accessLabel(perm['taxfile.info'])}</span>
                    </div>
                  )}
                  {perm['taxfile.membership'] !== 'none' && (
                    <div className="py-2 flex items-center justify-between">
                      <span>عضویت</span>
                      <span className="text-gray-700">{accessLabel(perm['taxfile.membership'])}</span>
                    </div>
                  )}
                  {(['contracts.contracting', 'contracts.agency'] as const).some(
                    (k) => perm[k] !== 'none'
                  ) && (
                    <div className="py-2">
                      <div className="mb-1 font-medium text-gray-800">قراردادها</div>
                      {perm['contracts.contracting'] !== 'none' && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">قراردادهای پیمانکاری</span>
                          <span className="text-gray-700">
                            {accessLabel(perm['contracts.contracting'])}
                          </span>
                        </div>
                      )}
                      {perm['contracts.agency'] !== 'none' && (
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-gray-700">قراردادهای حق‌العمل‌کاری</span>
                          <span className="text-gray-700">
                            {accessLabel(perm['contracts.agency'])}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  {(['requests.increaseLimit', 'requests.rejectReferral'] as const).some(
                    (k) => perm[k] !== 'none'
                  ) && (
                    <div className="py-2">
                      <div className="mb-1 font-medium text-gray-800">درخواست‌ها</div>
                      {perm['requests.increaseLimit'] !== 'none' && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">افزایش حد مجاز فروش</span>
                          <span className="text-gray-700">
                            {accessLabel(perm['requests.increaseLimit'])}
                          </span>
                        </div>
                      )}
                      {perm['requests.rejectReferral'] !== 'none' && (
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-gray-700">رد سیستمی صورتحساب‌های ارجاعی</span>
                          <span className="text-gray-700">
                            {accessLabel(perm['requests.rejectReferral'])}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  {perm['complaints'] !== 'none' && (
                    <div className="py-2 flex items-center justify-between">
                      <span>مدیریت شکایات و تخلفات</span>
                      <span className="text-gray-700">{accessLabel(perm['complaints'])}</span>
                    </div>
                  )}
                  {perm['managersLedger'] !== 'none' && (
                    <div className="py-2 flex items-center justify-between">
                      <span>داشبورد مدیریتی</span>
                      <span className="text-gray-700">{accessLabel(perm['managersLedger'])}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* خلاصه دسترسی صورت‌حساب‌ها */}
              <div className="border rounded-md overflow-hidden mb-6">
                <div className="bg-green-50 border-b px-4 py-3 text-sm font-medium text-green-800">
                  دسترسی‌های صورت‌حساب‌ها
                </div>
                <div className="px-4 py-3 text-sm divide-y">
                  {perm['inv.sales'] !== 'none' && (
                    <div className="py-2 flex items-center justify-between">
                      <span>صورت‌حساب‌های فروش</span>
                      <span className="text-gray-700">{accessLabel(perm['inv.sales'])}</span>
                    </div>
                  )}
                  {perm['inv.purchases'] !== 'none' && (
                    <div className="py-2 flex items-center justify-between">
                      <span>صورت‌حساب‌های خرید</span>
                      <span className="text-gray-700">{accessLabel(perm['inv.purchases'])}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* خلاصه دسترسی کاربران و نقش‌ها */}
              <div className="border rounded-md overflow-hidden mb-6">
                <div className="bg-green-50 border-b px-4 py-3 text-sm font-medium text-green-800">
                  دسترسی کاربران و نقش‌ها
                </div>
                <div className="px-4 py-3 text-sm">
                  <span className="text-gray-700">
                    {userRolesAccess === 'write'
                      ? 'اجازه مشاهده و عملیات کاربران و نقش‌ها'
                      : userRolesAccess === 'read'
                      ? 'اجازه مشاهده کاربران و نقش‌ها'
                      : 'عدم اجازه دسترسی به کاربران و نقش‌ها'}
                  </span>
                </div>
              </div>

              {/* کاربران انتخاب‌شده */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-green-50 border-b px-4 py-3 text-sm font-medium text-green-800">
                  کاربران
                </div>
                <div className="px-4 py-4">
                  <div className="border rounded-md overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-right font-medium px-4 py-2">نام و نام خانوادگی</th>
                          <th className="text-right font-medium px-4 py-2">کد ملّی / کد فراگیر</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {users.filter((u) => selectedUsers[u.id]).map((u) => (
                          <tr key={'s-' + u.id}>
                            <td className="px-4 py-2 text-gray-800">{u.name}</td>
                            <td className="px-4 py-2 text-gray-600">{u.nid}</td>
                          </tr>
                        ))}
                        {users.filter((u) => selectedUsers[u.id]).length === 0 && (
                          <tr>
                            <td colSpan={2} className="px-4 py-6 text-center text-gray-500">
                              کاربری انتخاب نشده است.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* دکمه‌ها: راست=انصراف | چپ=بعدی */}
        </div> {/* /content */}

        {/* نوار دکمه‌ها؛ همیشه به کف کارت می‌چسبد */}
        <div className="flex items-center justify-between px-12 py-12">
          <a
            href="/simulators/modian/users-roles?tab=roles"
            className="px-5 py-2 rounded-md border border-black bg-gray-100 text-gray-700 hover:bg-gray-50"
          >
            انصراف
          </a>
          <div className="flex items-center gap-3">
            {step > 0 && (
              <button
                type="button"
                className="px-5 py-2 rounded-md border bg-white hover:bg-gray-50"
                onClick={() => setStep((s) => (s > 0 ? ((s - 1) as 0 | 1 | 2 | 3 | 4 | 5) : s))}
              >
                قبلی
              </button>
            )}
            <button
              type="button"
              className="px-5 py-2 rounded-md bg-green-700 text-white hover:bg-green-700"
              onClick={() => setStep((s) => (s < 5 ? ((s + 1) as 0 | 1 | 2 | 3 | 4 | 5) : s))}
            >
              {step === 5 ? 'تایید نهایی' : 'بعدی'}
            </button>
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  );
}
