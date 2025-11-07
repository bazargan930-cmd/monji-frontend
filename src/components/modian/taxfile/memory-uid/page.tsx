//src\components\modian\taxfile\memory-uid\page.tsx

'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ToolbarBar, ToolbarIconButton, ToolbarSearch } from '@/components/modian/ui';
import { ColumnsIcon } from "@/components/modian/ui";
import HelpTrigger from '@/components/common/help/HelpTrigger';
import { MemoryUIDHelpContent } from '@/components/modian/taxfile';

type Row = {
  uid: string;           // شناسه یکتا حافظه مالیاتی
  signKey: string;       // شناسه کلید امضا
  companyName: string;   // نام شرکت معتمد
  sendMethod: string;    // نحوه ارسال صورت‌حساب
  status: string;        // وضعیت شناسه یکتا
  createdAt: string;     // تاریخ ایجاد/ثبت (fa-IR)
  owner?: string;        // ۴ رقم آخر موبایل مالک
};

const LS_KEY = 'modian_tax_memory_uids';
const LS_TRUSTED = 'modian_trusted_companies';
const LS_MEMORY_UNIQUE_IDS = 'modian_memory_unique_ids';
const LS_MEMORY_PUBKEYS     = 'modian_memory_public_keys';

export default function MemoryUIDPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [rows, setRows] = useState<Row[]>([]);
  const [q, setQ] = useState('');
  // وضعیت دکمه‌های آیکونی (فعلاً فقط UI)
  const [isColsOpen, setIsColsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // ویزارد در این صفحه نمایش داده نمی‌شود (مسیر جداگانه /add)

  // وضعیت نمایش ستون‌ها (سه ستون طبق اسکرین)
  const [cols, setCols] = useState<{ signKey: boolean; companyName: boolean; status: boolean }>({
    signKey: true,
    companyName: true,
    status: true,
  });  
  // فیلتر: پیش‌نویس (در فرم) و اعمال‌شده (روی جدول)
  const [filterDraft, setFilterDraft] = useState<{ sendMethod: string; status: string }>({
    sendMethod: '',
    status: '',
  });
  const [filterApplied, setFilterApplied] = useState<{ sendMethod: string; status: string }>({
    sendMethod: '',
    status: '',
  });
  // کمکی: ۴ رقم آخر موبایل کاربر جاری
  const getUserPhoneLast4 = () => {
    try {
      const candidates = [
        localStorage.getItem('modian_user_info'),
        localStorage.getItem('user'),
        localStorage.getItem('auth_user'),
      ].filter(Boolean) as string[];
      for (const c of candidates) {
        const m = c.match(/09\d{9}/);
        if (m) return m[0].slice(-4);
      }
      const body = document?.body?.innerText || '';
      const m2 = body.match(/09\d{9}/);
      if (m2) return m2[0].slice(-4);
    } catch {}
    return '0000';
  };

  // خواندن/نوشتن رکوردهای همین مالک
  const phoneLast4 = getUserPhoneLast4();
  const loadAll = (): any[] => {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]') || []; } catch { return []; }
  };
  const saveRowsForOwner = (mine: Row[]) => {
    const all = loadAll();
    const others = all.filter((r: any) => r?.owner && r.owner !== phoneLast4);
    const next = [...mine, ...others];
    setRows(mine);
    try { localStorage.setItem(LS_KEY, JSON.stringify(next)); } catch {}
  };

  // بارگیری اولیه + مهاجرت ردیف‌های قدیمی بدون owner
  useEffect(() => {
    const all = loadAll();
    // تلاش برای اتصال ردیف بدون owner به این کاربر، اگر uid شش‌کاراکتری ذخیره‌شده‌اش یافت شد
    try {
      const unique = JSON.parse(localStorage.getItem(LS_MEMORY_UNIQUE_IDS) || '[]');
      const rec = Array.isArray(unique) ? unique.find((r: any) => r?.phoneLast4 === phoneLast4) : null;
      const myUID = rec?.uid;
      if (myUID) {
        let migrated = false;
        const migratedAll = all.map((r: any) => {
          if (!r?.owner && r?.uid === myUID) { migrated = true; return { ...r, owner: phoneLast4 }; }
          return r;
        });
        if (migrated) {
          try { localStorage.setItem(LS_KEY, JSON.stringify(migratedAll)); } catch {}
          const mine = migratedAll.filter((r: any) => r?.owner === phoneLast4);
          setRows(mine);
          return;
        }
      }
    } catch {}
    // پیش‌فرض: فقط ردیف‌های همین مالک را نشان بده
    setRows(all.filter((r: any) => r?.owner === phoneLast4));
  }, []);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    // Predicate برای تطبیق نحوه ارسال (به‌خاطر تفاوت اسامی)
    const matchSendMethod = (val: string) => {
      const s = String(val || '').toLowerCase();
      const f = filterApplied.sendMethod;
      if (!f) return true;
      if (f === 'taxpayer') return s.includes('مودی'); // با کلید مودی
      if (f === 'trusted_taxpayer_key')
        return s.includes('شرکت') && s.includes('مودی'); // «شرکت معتمد باکلید مودی»
      if (f === 'trusted_trusted_key')
        return s.includes('معتمد') || s.includes('سامانه دولتی'); // «کلید معتمد/سامانه دولتی»
      return true;
    };
    const matchStatus = (val: string) => {
      if (!filterApplied.status) return true;
      return String(val || '') === filterApplied.status;
    };

    return rows.filter((r) => {
      const qOk =
        !t ||
        [r.uid, r.signKey, r.companyName, r.sendMethod, r.status]
          .some((v) => String(v || '').toLowerCase().includes(t));
      return qOk && matchSendMethod(r.sendMethod) && matchStatus(r.status);
    });
  }, [rows, q, filterApplied]);

  // به‌روزرسانی فقط رکوردهای مالک فعلی
  const saveRows = (list: Row[]) => saveRowsForOwner(list);

  // غیرفعالسازی همه ردیف‌ها
  const deactivateAll = () => {
    if (!rows.length) return;
    const next = rows.map((r) => ({ ...r, status: 'غیرفعال' }));
    saveRowsForOwner(next);
  };

  // غیرفعالسازی فقط یک ردیف
  const deactivateOne = (uid: string) => {
    if (!uid) return;
    const next = rows.map((r) => (r.uid === uid ? { ...r, status: 'غیرفعال' } : r));
    saveRowsForOwner(next);
  };

  const genId = (prefix = '') =>
    prefix +
    Math.random().toString(36).slice(2, 8).toUpperCase() +
    Math.random().toString(36).slice(2, 4).toUpperCase();

  const handleRequestOrRefresh = () => {
    // تلاش برای گرفتن نام شرکت و نحوه ارسال از انتخاب شرکت معتمد
    let companyName = '-';
    let sendMethod = '-';
    try {
      const list = JSON.parse(localStorage.getItem(LS_TRUSTED) || '[]');
      if (Array.isArray(list) && list.length) {
        const last = list[list.length - 1];
        companyName = last?.name || '-';
        sendMethod =
          last?.permitType === 'trusted'
            ? 'با کلید شرکت معتمد / سامانه دولتی'
            : last?.permitType === 'taxpayer'
            ? 'با کلید مودی'
            : '-';
      }
    } catch {}

    const faNow = new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric', month: '2-digit', day: '2-digit',
    }).format(new Date());

    const newRow: Row = {
      uid: genId('MU-'),
      signKey: genId('SK-'),
      companyName,
      sendMethod,
      status: 'فعال',
      createdAt: faNow,
    };
    saveRows([newRow, ...rows]);
  };

  const handleDelete = (uid: string) => {
    const list = rows.filter((r) => r.uid !== uid);
    saveRowsForOwner(list);
  };

    // تعداد ستون‌های قابل مشاهده برای colSpan ردیفِ «موردی ثبت نشده»
  const visibleColCount =
    4 + // ردیف  شناسه یکتا  نحوه ارسال  عملیات (ثابت‌ها)
    (cols.signKey ? 1 : 0) +
    (cols.companyName ? 1 : 0) +
    (cols.status ? 1 : 0);

  // دکمه بیضی سبز قابل‌تغییر برای هر ستون
  const Pill = ({
    active,
    onClick,
    children,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={
        // پس‌زمینه بیضی سفید؛ در حالت فعال بوردر/متن سبز
       'px-3 py-1.5 rounded-full border flex items-center gap-2 bg-white' +
         (active ? ' text-green-700 border-green-700' : ' text-green-700 border-green-700')
      }
    >
      {/* متن اول بیاید */}
      <span>{children}</span>
      {/* ضربدر در انتها */}
      <span
        className={
          'inline-flex h-5 w-5 items-center justify-center rounded-full text-white ' +
          (active ? 'bg-green-700' : 'bg-gray-400')
        }
        aria-hidden="true"
      >
        ×
      </span>
    </button>
  );

  return (
    <section className="text-sm rtl">
      {/* دکمه/مودال راهنمای صفحه – زیر ساب‌هدر، سمت چپ */}
      <div className="mt-4 px-4 flex justify-end">
        <HelpTrigger
          buttonTitle="راهنمای شناسهٔ یکتا"
          modalTitle="راهنمای شناسه یکتا حافظه مالیاتی"
          size="lg"
        >
          <MemoryUIDHelpContent />
        </HelpTrigger>
      </div>
      {/* نوار ابزار بالا (با کنترل‌های مشترک) */}
      <ToolbarBar
        right={
          <>
            {/* فیلتر */}
            <ToolbarIconButton
              title="فیلتر"
              ariaLabel="فیلتر"
              isActive={isFilterOpen}
              onClick={() => {
                setIsFilterOpen((o) => !o);
                setIsColsOpen(false);
              }}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 4h18l-7 8v5l-4 3v-8L3 4z" />
              </svg>
            </ToolbarIconButton>
            {/* نمایش ستون‌ها */}
            <ToolbarIconButton
              title="نمایش ستون‌ها"
              ariaLabel="نمایش ستون‌ها"
              isActive={isColsOpen}
              onClick={() => {
                setIsColsOpen((o) => !o);
                setIsFilterOpen(false);
              }}
            >
              <ColumnsIcon className="h-5 w-5" />
            </ToolbarIconButton>
            {/* جستجو */}
            <ToolbarSearch
              value={q}
              onChange={setQ}
              placeholder="جستجو شناسه یکتا"
              onSearch={() => {}}
              widthClass="w-60"
            />
          </>
        }
        left={
          <div className="flex items-center gap-2">
            {/* دریافت/فعالسازی شناسه یکتا */}
            <button
              type="button"
              onClick={() => router.push(`${pathname}/add`)}
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
            >
              دریافت/فعالسازی شناسه یکتا حافظه مالیاتی
            </button>

            {/* غیرفعالسازی همه */}
            <button
              type="button"
              onClick={deactivateAll}
              className="px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 flex items-center gap-2"
              title="غیرفعالسازی همه"
            >
              غیرفعالسازی همه
              {/* آیکون ممنوع */}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M5 19L19 5" />
              </svg>
            </button>
          </div>
        }
      />

      {/* پنل نمایش ستون‌ها */}
      {isColsOpen && (
        <div className="relative mb-3 rounded-md border bg-white p-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* دکمه مشکی «همه ستون‌ها» */}
            <button
              type="button"
              className="px-3 py-1.5 rounded-md border border-black bg-white text-blcck"
              onClick={() => setCols({ signKey: true, companyName: true, status: true })}
            >
              همه ستون‌ها
            </button>
            {/* سه بیضی سبز */}
            <Pill
              active={cols.signKey}
              onClick={() => setCols((c) => ({ ...c, signKey: !c.signKey }))}
            >
              شناسه کلید امضا
            </Pill>
            <Pill
              active={cols.companyName}
              onClick={() => setCols((c) => ({ ...c, companyName: !c.companyName }))}
            >
              نام شرکت معتمد
            </Pill>
            <Pill
              active={cols.status}
              onClick={() => setCols((c) => ({ ...c, status: !c.status }))}
            >
              وضعیت شناسه یکتا
            </Pill>
          </div>
        </div>
      )}

      {/* پنل فیلتر داده‌ها */}
      {isFilterOpen && (
        <div className="relative mb-3 rounded-md border border-black bg-white p-3 pb-16">
          <div className="mb-3 text-gray-700">فیلتر داده ها بر اساس:</div>
          {/* فیلدها */}
          <div className="flex flex-wrap items-start gap-3">
            {/* نحوه ارسال صورت‌حساب */}
            <div className="relative">
              <label className="absolute -top-3 right-2 bg-white px-1 text-[11px] text-gray-600">
                نحوه ارسال صورت‌حساب
              </label>
              <select
                className="w-72 rounded-md border px-2 py-2"
                value={filterDraft.sendMethod}
                onChange={(e) => setFilterDraft((d) => ({ ...d, sendMethod: e.target.value }))}
              >
                <option value=""></option>
                <option value="taxpayer">مودی</option>
                <option value="trusted_taxpayer_key">شرکت معتمد باکلید مودی</option>
                <option value="trusted_trusted_key">شرکت معتمد با کلید معتمد</option>
              </select>
            </div>
            {/* وضعیت شناسه یکتا */}
            <div className="relative">
              <label className="absolute -top-3 right-2 bg-white px-1 text-[11px] text-gray-600">
                وضعیت شناسه یکتا
              </label>
              <select
                className="w-56 rounded-md border px-2 py-2"
                value={filterDraft.status}
                onChange={(e) => setFilterDraft((d) => ({ ...d, status: e.target.value }))}
              >
                <option value=""></option>
                <option value="فعال">فعال</option>
                <option value="غیرفعال">غیرفعال</option>
              </select>
            </div>
          </div>
          {/* دکمه‌ها - گوشه پایین سمت راست */}
          <div className="absolute bottom-3 left-3 flex gap-2">
            <button
              type="button"
              className="rounded-md border px-3 py-2 hover:bg-gray-50 text-red-600 border-red-300"
              onClick={() => {
                setFilterDraft({ sendMethod: '', status: '' });
                setFilterApplied({ sendMethod: '', status: '' });
              }}
            >
              حذف فیلتر
            </button>
            <button
              type="button"
              className="rounded-md px-3 py-2 bg-green-600 hover:bg-green-700 text-white border border-green-600"
              onClick={() => {
                setFilterApplied(filterDraft);
                setIsFilterOpen(false);
              }}
            >
              جستجو
            </button>
          </div>
        </div>
      )}

{/* ویزارد حذف شد؛ سناریو افزودن در صفحهٔ /add انجام می‌شود */}      

      {/* جدول */}
      <div className="bg-white rounded-md shadow border overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-2 border w-14">ردیف</th>
              <th className="p-2 border">شناسه یکتا</th>
              {cols.signKey && <th className="p-2 border">شناسه کلید امضا</th>}
              {cols.companyName && <th className="p-2 border">نام شرکت معتمد</th>}
              <th className="p-2 border">نحوه ارسال صورت‌حساب</th>
              {cols.status && <th className="p-2 border">وضعیت شناسه یکتا</th>}
              {/* افزایش عرض ستون عملیات تا دو آیتم در یک خط جا شوند */}
              <th className="p-2 border w-56">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td className="p-6 text-center text-gray-500" colSpan={visibleColCount}>
                  موردی ثبت نشده
                </td>
              </tr>
            ) : (
              filtered.map((r, idx) => (
                <tr key={r.uid} className={idx % 2 ? 'bg-gray-50' : ''}>
                  <td className="p-2 border text-center">{idx + 1}</td>
                  <td className="p-2 border font-mono ltr">{r.uid}</td>
                  {cols.signKey && <td className="p-2 border font-mono ltr">{r.signKey}</td>}
                  {cols.companyName && <td className="p-2 border">{r.companyName}</td>}
                  <td className="p-2 border">{r.sendMethod}</td>
              {cols.status && (
                <td className="p-2 border">
                  {/* فعال = سبز با دایره توخالی سبز | غیرفعال = قرمز با دایره توخالی قرمز */}
                  {r.status === 'فعال' ? (
                    <span className="inline-flex items-center gap-2 text-green-700">
                      <span className="inline-block h-2.5 w-2.5 rounded-full border-2 border-green-600" />
                      فعال
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-red-600">
                      <span className="inline-block h-2.5 w-2.5 rounded-full border-2 border-red-600" />
                      غیرفعال
                    </span>
                  )}
                </td>
              )}
                  <td className="p-2 border text-center">
                    {/* «غیرفعالسازی» فقط همین ردیف را غیر فعال می‌کند */}
                    <button
                      type="button"
                      onClick={() => deactivateOne(r.uid)}
                      className="text-red-600 hover:text-red-700 cursor-pointer"
                      title="غیرفعالسازی این ردیف"
                    >
                      غیرفعالسازی <span className="align-middle">×</span>
                    </button>
                    <span className="mx-3" />
                    {/* جزئیات: به صفحهٔ details با uid می‌رویم */}
                    <button
                      type="button"
                      onClick={() => router.push(`${pathname}/details?uid=${encodeURIComponent(r.uid)}`)}
                      className="text-green-700 hover:text-green-800 underline underline-offset-4"
                      title="مشاهده جزئیات"
                    >
                      جزئیات
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
