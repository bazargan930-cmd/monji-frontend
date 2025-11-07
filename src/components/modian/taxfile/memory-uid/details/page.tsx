// src/components/modian/taxfile/memory-uid/details/page.tsx
'use client';

import React from 'react';
import MemoryUIDEditPage from '../edit/page';
import { UploadPublicKeyModal } from '@/components/modian/ui';
import { useMemoryPublicKey } from '@/components/modian/common';
import { useRouter, useSearchParams } from 'next/navigation';

const LS_KEY = 'modian_tax_memory_uids';
const LS_SELECTED_BRANCHES = 'modian_selected_postal_codes';
const LS_MEMORY_PUBKEYS = 'modian_memory_public_keys';
// fallback موقت: شعب ثبت‌نامی از صفحه‌ی اطلاعات ثبت‌نام
import { REGISTRATION_BRANCHES } from '../../registration-information/page';

function getUserPhoneLast4(): string {
  // هم‌راستا با صفحات «لیست» و «ویزارد»: از چند منبع تلاش کن و در نهایت بدنهٔ صفحه را اسکن کن
  try {
    const candidates = [
      localStorage.getItem('modian_user_info'),
      localStorage.getItem('user'),
      localStorage.getItem('auth_user'),
      localStorage.getItem('modian_current_user_phone'),
    ].filter(Boolean) as string[];
    for (const c of candidates) {
      const m = c.match(/09\d{9}/);
     if (m) return m[0].slice(-4);
    }
    const body = document?.body?.innerText || '';
    const m2 = body.match(/09\d{9}/);
    if (m2) return m2[0].slice(-4);
  } catch {}
  return '';
}

// خواندن کلید عمومی ذخیره‌شده برای کاربر جاری از localStorage
function getSavedPublicKeyForCurrentUser(): string {
  try {
    const phone = getUserPhoneLast4();
    const prev = JSON.parse(localStorage.getItem(LS_MEMORY_PUBKEYS) || '[]');
    const arr = Array.isArray(prev) ? prev : [];
   const rec = arr.find((r: any) => r?.phoneLast4 === phone);
    return rec?.key || '';
  } catch {
    return '';
  }
}

// داده‌ی شعب ثبت‌نامی را از تمام کلیدهای localStorage «بو» می‌کشیم!
// هر آبجکتی که postalCode و یکی از address/branchAddress/آدرس داشت، برداشته می‌شود.
// اگر allowedPostals داده شود، فقط همان کدپستی‌ها نگه داشته می‌شوند.
function sniffRegistrationBranchesFromStorage(
  allowedPostals?: string[],
): Array<{ postalCode: string; address: string }> {
  const out: Array<{ postalCode: string; address: string }> = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k) continue;
      const raw = localStorage.getItem(k);
      if (!raw) continue;
      let parsed: any;
      try { parsed = JSON.parse(raw); } catch { continue; }
      const tryPush = (arr: any[]) => {
        arr.forEach((r: any) => {
          const pc = r?.postalCode ?? r?.postCode ?? r?.کدپستی ?? r?.postal_code;
          const addr = r?.address ?? r?.branchAddress ?? r?.آدرس ?? r?.addressLine ?? r?.branch_address;
          if (pc || addr) {
            const rec = { postalCode: String(pc ?? ''), address: String(addr ?? '') };
            if (!allowedPostals?.length || allowedPostals.includes(rec.postalCode)) {
              out.push(rec);
            }
          }
        });
      };
      if (Array.isArray(parsed)) {
        tryPush(parsed);
      } else if (parsed && typeof parsed === 'object') {
        const arr =
          parsed?.branches || parsed?.شعب || parsed?.branchList || parsed?.addresses || parsed?.branchAddresses;
        if (Array.isArray(arr)) tryPush(arr);
      }
    }
  } catch {}
  // حذف رکوردهای تکراری
  const seen = new Set<string>();
  return out.filter(b => {
    const key = `${b.postalCode}|${b.address}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// تولید شناسهٔ ۳۶ کاراکتری از متن (ساده و پایدار برای شبیه‌ساز)
function make36IdFromText(t: string): string {
  const base = t.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || Math.random().toString(36).slice(2);
  const need = 32; // 32 حرف + 4 خط تیره = 36
  let s = base.repeat(Math.ceil((need) / base.length)).slice(0, need);
  return `${s.slice(0,8)}-${s.slice(8,12)}-${s.slice(12,16)}-${s.slice(16,20)}-${s.slice(20,32)}`;
}
  // ——— کمکی‌های سادهٔ تاریخ برای تب «آرشیو»
const toISO = (s: string): string => {
  if (!s) return '';
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const fixed = s.replace(/[۰-۹]/g, (d) => String(persianDigits.indexOf(d)));
  const norm = fixed.replace(/\//g, '-');
  const d = new Date(norm);
  return isNaN(d.getTime()) ? '' : d.toISOString();
};
const toDisplay = (isoOrText: string): string => {
  if (!isoOrText) return '—';
  if (isoOrText.includes('T') || isoOrText.includes('-')) {
    const ymd = isoOrText.substring(0, 10).replace(/-/g, '/');
    return ymd;
  }
  return isoOrText;
};

// به‌روزرسانی رکورد جاری در LS_KEY
function patchCurrentRowInLocalStorage(owner: string, uid: string, patch: Record<string, any>) {
  const list = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
  const arr = Array.isArray(list) ? list : [];
  const idx = arr.findIndex((r: any) => r?.owner === owner && r?.uid === uid);
  if (idx >= 0) {
    arr[idx] = { ...arr[idx], ...patch };
    localStorage.setItem(LS_KEY, JSON.stringify(arr));
    return arr[idx];
  }
  return null;
}
// --- نوع کمینه برای شعب موردنیاز این صفحه
type RegBranch = { postalCode: string; address: string };

export default function MemoryUIDDetailsPage() {
  const router = useRouter();
  const params = useSearchParams();
  const uidFromQuery = params.get('uid') || '';
  const isEditMode = params.get('mode') === 'edit';
  const [row, setRow] = React.useState<any | null>(null);        // رکورد انتخابی
  const [activeUid, setActiveUid] = React.useState<string>('');  // آخرین شناسه‌ی یکتای فعال
  const [postals, setPostals] = React.useState<string[]>([]);
  const [tab, setTab] = React.useState<'info' | 'archive'>('info'); // تب‌ها
  const [sendMenuOpen, setSendMenuOpen] = React.useState(false);
  // یک‌پارچه با کامپوننت مشترک
  const ownerUid = uidFromQuery || '__current__';
  const { key: publicKey, save: savePublicKey } = useMemoryPublicKey(ownerUid);
  const [openUpload, setOpenUpload] = React.useState(false);
  // حالت‌های تب «آرشیو پروفایل‌ها»
  const [archiveFrom, setArchiveFrom] = React.useState<string>('');
  const [archiveTo, setArchiveTo]   = React.useState<string>('');
  const [archiveRows, setArchiveRows] = React.useState<any[]>([]);
  const [archiveSearched, setArchiveSearched] = React.useState(false);
  // سطر انتخاب‌شده در نتایج آرشیو (برای نمایش «جزئیات»)
  const [archiveDetailsRow, setArchiveDetailsRow] = React.useState<any | null>(null);

  /* ---------- Helpers (مشابه مرحله Add) ---------- */
  function normalizeUid(v: string): string {
    // فقط حروف/اعداد و خط‌تیره بماند، حروف کوچک، نهایت 36 کاراکتر
    return (v || '').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 36);
  }
  function genMemoryPublicKey(): string {
    const seg = (n: number) => Array.from({ length: n }, () => Math.floor(Math.random() * 36).toString(36)).join('');
    // الگوی 8-4-4-4-12 (36 کاراکتر با خط‌تیره)
    return `${seg(8)}-${seg(4)}-${seg(4)}-${seg(4)}-${seg(12)}`;
  }
  const [branches, setBranches] = React.useState<RegBranch[]>([]);
  // --- حالت‌های مودال «افزودن کد پستی»
  const [showAddPostal, setShowAddPostal] = React.useState(false);
  const [postalCandidates, setPostalCandidates] = React.useState<RegBranch[]>([]);
  const [pickedPostals, setPickedPostals] = React.useState<Record<string, boolean>>({});
  // وضعیت موقت «مشخصات حافظه مالیاتی»
  const [memorySerial, setMemorySerial] = React.useState<string>('');
  const [memoryType, setMemoryType]   = React.useState<string>('');
  const [memoryModel, setMemoryModel] = React.useState<string>('');
  const memoryFilled = Boolean(memorySerial.trim() && memoryType && memoryModel.trim());
  // — حالت‌ها و فیلدهای مودال «افزودن پایانه فروشگاهی»
  const [showAddPos, setShowAddPos]   = React.useState(false);
  const [posSerial, setPosSerial]     = React.useState('');
  const [posType, setPosType]         = React.useState('');
  const [posModel, setPosModel]       = React.useState('');
  const posFilled = Boolean(posSerial.trim() && posType && posModel.trim());

  // تابع جست‌وجوی آرشیو باید داخل کامپوننت باشد تا به state دسترسی داشته باشد
  function runArchiveSearch() {
    try {
      const list = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
      const arr = Array.isArray(list) ? list : [];
      // نگاشت رکوردها به سطر جدول
      let rows = arr.map((r: any, i: number) => {
        const lastRaw =
          r?.updatedAt ?? r?.lastEditedAt ?? r?.lastEdit ?? r?.last_update ??
          r?.updated_at ?? r?.lastEditDate ?? r?.['تاریخ آخرین ویرایش'] ?? '';
        const lastISO = typeof lastRaw === 'string' ? toISO(lastRaw) : '';
        return {
          idx: i + 1,
          uid: normalizeUid(String(r?.uid || '')),
          signKey: String(r?.signKey || '—'),
          company: String(r?.trustedCompanyName || r?.companyName || 'ندارد'),
          sendMethod: String(r?.sendMethod || 'مودی'),
          status: String(
            r?.status === 'inactive' ? 'غیرفعال' : r?.status === 'active' ? 'فعال' : (r?.status || 'فعال')
          ),
          lastISO,
          lastDisplay: lastISO ? toDisplay(lastISO) : toDisplay(String(lastRaw || '')),
        };
      });
      // فیلتر تاریخ (بر اساس «تاریخ آخرین ویرایش»)
      if (archiveFrom || archiveTo) {
        const from = archiveFrom ? new Date(archiveFrom) : null;
        const to   = archiveTo   ? new Date(archiveTo)   : null;
        if (to) to.setHours(23, 59, 59, 999);
        rows = rows.filter((r) => {
          if (!r.lastISO) return false;
          const d = new Date(r.lastISO);
          if (isNaN(d.getTime())) return false;
          if (from && d < from) return false;
          if (to && d > to) return false;
          return true;
        });
      }
      // مرتب‌سازی نزولی بر اساس تاریخ
      rows.sort((a, b) => (b.lastISO || '').localeCompare(a.lastISO || ''));
      setArchiveRows(rows);
      setArchiveSearched(true);
    } catch {
      setArchiveRows([]);
      setArchiveSearched(true);
    }
  }
  React.useEffect(() => {
    const owner = getUserPhoneLast4();
    // ۱) بازیابی «شناسهٔ فعال» و رکورد جاری از LS
    try {
      const list = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
      const arr = Array.isArray(list) ? list : [];
      // رکورد فعال برای صاحب فعلی (سازگار با «فعال» فارسی و active انگلیسی)
      const active = arr.find(
        (r: any) => r?.owner === owner && (r?.status === 'فعال' || r?.status === 'active')
      );
      const chosenUid = uidFromQuery || (active?.uid ?? '');
      setActiveUid(chosenUid);
      const currentRow =
        arr.find((r: any) => r?.uid === chosenUid && r?.owner === owner) || active || null;
      setRow(currentRow);
    } catch {}
    // ۲) فهرست کُدپستی‌های منتخب (برای فیلتر شعب)
    try {
      const pc = JSON.parse(localStorage.getItem(LS_SELECTED_BRANCHES) || '[]');
      setPostals(Array.isArray(pc) ? pc : []);
    } catch {}
  }, [uidFromQuery]);

  // تلاش برای دریافت شعب از API ثبت‌نامی؛ اگر نبود از LS بخوان
  React.useEffect(() => {
    let cancelled = false;
    async function fetchRegistrationBranches(): Promise<RegBranch[]> {
      const tryMap = (arr: any[]): RegBranch[] =>
        (arr || [])
          .map((b: any) => ({
            postalCode: String(
              b?.postalCode ?? b?.postCode ?? b?.['کدپستی'] ?? b?.postal_code ?? ''
            ),
            address: String(
              b?.branchAddress ?? b?.address ?? b?.['آدرس_شعبه'] ?? b?.['نشانی'] ?? ''
            ),
          }))
          .filter((r) => r.postalCode || r.address);
      const tryFetch = async (url: string) => {
        try {
          const r = await fetch(url, { credentials: 'include' });
          if (!r.ok) return [] as RegBranch[];
          const j = await r.json();
          // آرایه‌ای با نام‌های رایج در خروجی ثبت‌نامی
          const arr =
            Array.isArray(j?.branches) ? j.branches :
            Array.isArray(j?.offices) ? j.offices :
            Array.isArray(j?.branchList) ? j.branchList :
            Array.isArray(j) ? j : [];
          return tryMap(arr);
        } catch {
          return [] as RegBranch[];
        }
      };
      // 1) مسیرهای محتمل API
      const api1 = await tryFetch('/simulators/modian/registration');
      const api2 = api1.length ? api1 : await tryFetch('/simulators/modian/registration-information');
      // 2) اگر API خالی بود، از LS «بو» بکش
      const fromLs = sniffRegistrationBranchesFromStorage(undefined);
      let fallback = api2.length ? api2 : fromLs;
      // 2.5) اگر هنوز چیزی نداریم، از ثابتِ موقت صفحه‌ی ثبت‌نام استفاده کن
      if (!fallback.length && Array.isArray(REGISTRATION_BRANCHES)) {
        fallback = tryMap(REGISTRATION_BRANCHES as any[]);
      }
      // 3) فیلتر بر اساس کدپستی‌های منتخب (اگر وجود داشته باشد)
      const filtered =
        postals && postals.length
          ? fallback.filter((m) => postals.includes(m.postalCode))
          : fallback;
      return filtered;
    }
    fetchRegistrationBranches().then((rows) => {
      if (!cancelled) setBranches(rows);
    });
    return () => { cancelled = true; };
  }, [postals]);
  // اگر با کوئری «mode=edit» وارد شده‌ایم، همان UI ویرایش را داخل این Route نشان بده
  if (isEditMode) {
    return <MemoryUIDEditPage />;
  }

  if (!activeUid) {
    return (
      <div className="p-4">
        <div className="rounded-md border p-4 bg-yellow-50 text-yellow-900">
          شناسه یکتای فعال پیدا نشد.
        </div>
        <div className="mt-4">
          <button className="btn btn-primary bg-green-600 text-white px-4 py-2 rounded-md" onClick={() => router.back()}>
            بازگشت
          </button>
        </div>
      </div>
    );
  }

  // آیا در جدول ابزار پرداخت، ردیفی وجود دارد؟
  // در آینده با پرکردن row.payments این وضعیت خودکار فعال/غیرفعال می‌شود.
  const hasPaymentRows = !!(row?.payments?.length);
  return (
    <div className="p-4">
      {/* تب‌ها – بدون کادر/پس‌زمینه اضافی و با عرض مساوی */}
        <div className="p-0">
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setTab('info')}
              className={`w-full py-0 rounded-md text-xs md:text-sm ${
                tab === 'info' ? 'bg-green-700 text-white' : 'text-green-800 hover:bg-green-50'
              }`}
            >
              اطلاعات شناسه یکتا
            </button>
            <button
              onClick={() => setTab('archive')}
              className={`w-full py-2 rounded-md text-xs md:text-sm ${
                tab === 'archive' ? 'bg-green-700 text-white' : 'text-green-800 hover:bg-green-50'
              }`}
            >
              مشاهده آرشیو پروفایل‌های این شناسه یکتا
            </button>
          </div>
        </div>
      {/* کادر اصلی سبز (هم‌اندازه کادر نارنجیِ مرجع) */}
      <div className="border border-green-700  bg-white rounded-md overflow-hidden">
        {/* بدنه تب‌ها */}
        <div className="px-4 pb-4 md:px-5 md:pb-5">
          {/* فیلد بالای صفحه فقط در تب «اطلاعات شناسه یکتا» نمایش داده شود */}
          {tab === 'info' && (
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-4 mt-4 md:mt-5">
              <div className="rounded-md p-3">
                <div className="relative">
                  <span className="absolute -top-2 right-2 bg-white px-2 text-xs text-gray-500">شناسه یکتا</span>
                  <input
                    className="w-full border rounded-md px-3 py-2 bg-white text-gray-300"
                    value={activeUid}
                    readOnly
                  />
                </div>
              </div>
            </div>
          )}

          {tab === 'info' ? (
            <div className="space-y-16 mt-1">
              {/* خلاصه (کلید عمومی/گواهی امضا / نحوه ارسال صورتحساب / وضعیت) */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                <div className="rounded-md p-3">
                  <div className="relative">
                    <span className="absolute -top-3 right-2 bg-white px-2 text-xs text-gray-500">
                      وضعیت شناسه یکتا
                    </span>
                  <input
                    className="w-full border rounded-md px-3 py-2 bg-white text-gray-300"
                    value={row?.status === 'inactive' ? 'غیرفعال' : 'فعال'}
                    readOnly
                  />
                  </div>
                </div>    
                <div className="rounded-md p-3">
                  <div className="relative">
                    <span className="absolute -top-3 right-2 bg-white px-2 text-xs text-gray-500">
                      نحوه ارسال صورتحساب
                      </span>
                  {/* آیکون مداد (ویرایش روش ارسال) – وسط‌چین عمودی */}
                  <button
                    type="button"
                    title="تغییر نحوه ارسال"
                    aria-label="تغییر نحوه ارسال"
                    className="absolute top-1/2 -translate-y-1/2 left-2 h-5 w-5 text-green-700 z-10"
                    onClick={() => {
                      const q = new URLSearchParams(window.location.search);
                      if (activeUid) q.set('uid', String(activeUid));
                      q.set('mode', 'edit'); // ← حالت ویرایش
                      router.push(`/simulators/modian/admin/taxfile/memory-uid/details?${q.toString()}`);
                    }}
                  >
                    {/* مداد با استایل شبیه مرجع */}
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21l3-.8 12-12-2.2-2.2-12 12L3 21z"/>
                      <path d="M14.7 4.3l2.9 2.9"/>
                    </svg>
                  </button>
                  <input
                    className="w-full border rounded-md px-3 py-2 bg-white text-gray-300"
                    /* 2) مقدار صحیح فیلد «نحوه ارسال صورتحساب» از رکورد: پیش‌فرض «مودی» */
                    value={row?.sendMethod ?? 'مودی'}
                    readOnly
                  />
                  {/* منوی کوچک تغییر روش ارسال */}
                  {sendMenuOpen && (
                    <div className="absolute z-10 left-0 top-6 w-48 bg-white border rounded-md shadow">
                      {(['مودی','شرکت‌معتمد_کلید_مودی','شرکت‌معتمد_کلید_معتمد'] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className="block w-full text-right px-3 py-2 hover:bg-gray-50"
                          onClick={() => {
                            const owner = getUserPhoneLast4();
                            const updated = patchCurrentRowInLocalStorage(owner, activeUid, { sendMethod: opt });
                            if (updated) setRow(updated);
                            setSendMenuOpen(false);
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}                  
                  </div>
                </div>
                <div className="rounded-md p-3">
                  <div className="relative">
                    <span className="absolute -top-3 right-2 bg-white px-2 text-xs text-gray-500">
                      کلید عمومی/گواهی امضا
                    </span>
                  {/* آیکون گیره (انتخاب فایل کلید/گواهی) – وسط‌چین عمودی */}
                  <button
                    type="button"
                    title="بارگذاری/تغییر گواهی"
                    aria-label="بارگذاری گواهی"
                    className="absolute top-1/2 -translate-y-1/2 left-2 h-5 w-5 text-green-700 z-10"
                    onClick={() => setOpenUpload(true)}
                  >
                    {/* گیره کاغذ شبیه مرجع */}
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.44 11.05l-8.49 8.49a5 5 0 0 1-7.07-7.07l8.49-8.49a3.5 3.5 0 1 1 4.95 4.95L10 17.5a2 2 0 1 1-2.83-2.83l8.49-8.49"/>
                    </svg>
                  </button>
                  <input
                    dir="ltr"
                    className="w-full border rounded-md px-3 py-2 bg-white text-right text-gray-300"
                    value={row?.signKey || getSavedPublicKeyForCurrentUser() || ''}
                    readOnly
                  />    
                  </div>
                </div>                
              </div>

              {/* جدول سریال ابزار پرداخت (تیتر + جدول با فاصله عمودی صفر) */}
              <div className="space-y-0">
                {/* 1) تیتر یک درجه کوچک‌تر و بدون فاصله پایینی */}
                <div className="px-4 py-4 text-green-600 text-sm leading-5 mb-0">
                  سریال ابزار پرداخت تخصیص داده شده
                </div>
                {/* 2) جدول چسبیده به تیتر */}
                <section className="rounded-md border mt-0" style={{ marginTop: 0 }}>
                  <div className="overflow-auto">
                  <table className="min-w-[700px] w-full text-sm">
                    {/* 3+4) سرستون‌ها بولد و زمینه آبی کم‌رنگ مثل مرجع */}
                    <thead className="bg-blue-50">
                      <tr className="text-gray-700">
                        <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">نوع ابزار پرداخت</th>
                        <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">شماره سوئیچ پرداخت</th>
                        <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">کد پذیرنده فروشگاهی</th>
                        <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">شماره پایانه</th>
                        <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={5} className="py-6 text-center text-gray-500">
                          موردی ثبت نشده
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </section>
                {/* دکمه/لینک: + افزودن ابزار پرداخت (راستِ زیر جدول) */}
                <div className="px-4 py-2 flex justify-start">
                  <button
                    type="button"
                    disabled={!hasPaymentRows}
                    aria-disabled={!hasPaymentRows}
                    className={
                      "text-sm leading-5 " +
                      (hasPaymentRows
                        ? "text-green-600 hover:text-green-700"
                        : "text-gray-400 cursor-not-allowed")
                    }
                  >
                    + افزودن ابزار پرداخت
                  </button>
                </div>                
              </div>

              {/* لیست شعبه‌های تخصیص داده شده (جدول دوم) */}
              <div className="space-y-0">
                {/* 1) تیتر هم‌سایزِ تیتر جدول بالا */}
                <div className="px-4 py-4 text-green-600 text-sm leading-5 mb-0">
                  لیست شعبه های تخصیص داده شده
                </div>
                {/* 2) جدول سه ستونه با سرستون آبی کم‌رنگ */}
                <section className="rounded-md border mt-0" style={{ marginTop: 0 }}>
                  <div className="overflow-auto">
                    <table className="min-w-[700px] w-full text-sm">
                      <thead className="bg-blue-50">
                        <tr className="text-gray-700">
                          <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">کد پستی</th>
                          <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">نشانی</th>
                          <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">عملیات</th>
                        </tr>
                      </thead>
                      <tbody>
                        {branches.length ? (
                          branches.map((b, idx) => {
                            const disableDelete = branches.length <= 1;
                            return (
                              <tr key={`${b.postalCode}-${idx}`} className="odd:bg-white even:bg-gray-50">
                                <td className="px-3 py-2 border-t text-right">{b.postalCode || '—'}</td>
                                <td className="px-3 py-2 border-t text-right">{b.address || '—'}</td>
                                <td className="px-3 py-2 border-t text-right">
                                  <button
                                    type="button"
                                    disabled={disableDelete}
                                    className={
                                      disableDelete
                                        ? 'text-gray-400 cursor-not-allowed'
                                        : 'text-red-600 hover:text-red-700'
                                    }
                                    onClick={() => {
                                      if (disableDelete) return;
                                      const next = branches.filter((_, i) => i !== idx);
                                      setBranches(next);
                                    }}
                                  >
                                    حذف ×
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td colSpan={3} className="py-6 text-center text-gray-500">
                              موردی ثبت نشده
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </section>
                {/* 5) لینک: +افزودن کد پستی (فعال و سبز) – راست‌چین مثل مرجع */}
                <div className="px-4 py-2 flex justify-start">
                  <button
                    type="button"
                    className="text-sm leading-5 text-green-600 hover:text-green-700"
                    onClick={() => {
                      // همهٔ شعب ممکن را از LS «بو» بکش؛ اگر نبود از ثابتِ ثبت‌نام استفاده کن
                      let all = sniffRegistrationBranchesFromStorage(undefined);
                      if (!all.length && Array.isArray(REGISTRATION_BRANCHES)) {
                        all = (REGISTRATION_BRANCHES as any[])
                          .map((b: any) => ({
                            postalCode: String(b?.postalCode ?? b?.کدپستی ?? ''),
                            address: String(b?.branchAddress ?? b?.address ?? b?.آدرس_شعبه ?? ''),
                          }))
                          .filter((r) => r.postalCode || r.address);
                      }
                      // کاندیداها = همهٔ شعب منهای مواردی که همین حالا در جدول هست
                      //  و همچنین کدپستی‌های ذخیره‌شده در LS_SELECTED_BRANCHES (قبلاً برای حافظه‌ای ثبت شده‌اند)
                      const existing = new Set(branches.map((b) => String(b.postalCode)));
                      let saved: string[] = [];
                      try {
                        const raw = JSON.parse(localStorage.getItem(LS_SELECTED_BRANCHES) || '[]');
                        saved = Array.isArray(raw) ? raw.map((x: any) => String(x)) : [];
                      } catch {}
                      const exclude = new Set<string>([...existing, ...saved]);
                      const cand = all.filter((b) => b.postalCode && !exclude.has(String(b.postalCode)));
                      setPostalCandidates(cand);
                      setPickedPostals({});
                      setShowAddPostal(true);
                    }}                    
                  >
                    + افزودن کد پستی
                  </button>
                </div>
              </div>
            {/* ===== مودال مشترک بارگذاری کلید ===== */}
            <UploadPublicKeyModal
              open={openUpload}
              onClose={() => setOpenUpload(false)}
              ownerUid={ownerUid}
              onSaved={(k) => { savePublicKey(k); }}
            /> 
            {/* ===== مودال انتخاب کد پستی ===== */}
            {showAddPostal && (
              <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                <div className="bg-white rounded-md shadow-lg w-[720px] max-w-[95vw]">
                  <div className="px-5 pt-5">
                    {/* تیتر بولد + تیک سبز */}
                    <div className="flex items-center gap-2 font-bold text-gray-800">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-green-600 text-green-700">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <span>انتخاب کد پستی</span>
                    </div>
                    {/* جمله راهنما */}
                    <p className="mt-3 text-sm text-gray-600">
                      لطفا یک یا چند کد پستی را انتخاب کنید
                    </p>
                    {/* جدول کاندیداها */}
                    <div className="mt-3 overflow-auto border rounded-md">
                      <table className="w-full text-sm min-w-[600px]">
                        <thead className="bg-blue-50">
                          <tr className="text-gray-700">
                            {/* ستون انتخاب (با انتخاب همه) */}
                            <th className="whitespace-nowrap py-2 px-3 text-center font-bold text-sm">
                              <input
                                type="checkbox"
                                checked={
                                  postalCandidates.length > 0 &&
                                  postalCandidates.every((b) => !!pickedPostals[b.postalCode])
                                }
                                onChange={(e) => {
                                  const checked = e.target.checked;
                                  setPickedPostals((prev) => {
                                    const next: Record<string, boolean> = { ...prev };
                                    postalCandidates.forEach((b) => {
                                      next[b.postalCode] = checked;
                                    });
                                    return next;
                                  });
                                }}
                              />
                            </th>
                            <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">کد پستی</th>
                            <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">نشانی</th>
                          </tr>
                        </thead>
                        <tbody>
                          {postalCandidates.length ? (
                            postalCandidates.map((b, idx) => {
                              const checked = !!pickedPostals[b.postalCode];
                              return (
                                <tr key={`${b.postalCode}-${idx}`} className="odd:bg-white even:bg-gray-50">
                                  {/* چک‌باکس انتخاب هر ردیف */}
                                  <td className="px-3 py-2 border-t text-center">
                                    <input
                                      type="checkbox"
                                      checked={checked}
                                      onChange={(e) =>
                                        setPickedPostals((p) => ({
                                          ...p,
                                          [b.postalCode]: e.target.checked,
                                        }))
                                      }
                                    />
                                  </td>
                                  <td className="px-3 py-2 border-t text-right">{b.postalCode || '—'}</td>
                                  <td className="px-3 py-2 border-t text-right">{b.address || '—'}</td>
                                </tr>
                              );
                            })
                          ) : (
                            <tr>
                              <td colSpan={3} className="py-8 text-center text-gray-500">
                                موردی ثبت نشده
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* دکمه‌ها – چپ‌چین، «ثبت» تا زمان انتخاب غیرفعال */}
                  <div className="px-5 py-4 flex justify-end gap-2">
                    <button
                      type="button"
                      className="px-3 py-2 rounded-md bg-red-600 text-white text-sm"
                      onClick={() => { setShowAddPostal(false); setPickedPostals({}); }}
                    >
                      انصراف
                    </button>
                    <button
                      type="button"
                      disabled={!Object.values(pickedPostals).some(Boolean)}
                      className={`px-6 py-2 rounded-md text-white text-sm ${
                        Object.values(pickedPostals).some(Boolean)
                          ? 'bg-green-600'
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                      onClick={() => {
                        const toAdd = postalCandidates.filter((b) => pickedPostals[b.postalCode]);
                        if (toAdd.length) {
                          // اضافه به جدول
                          setBranches((prev) => {
                            const set = new Set(prev.map((x) => x.postalCode));
                            return [...prev, ...toAdd.filter((x) => !set.has(x.postalCode))];
                          });
                          // به‌روزرسانی انتخاب‌ها در LS برای استفاده‌های بعدی
                          try {
                            const prev = JSON.parse(localStorage.getItem(LS_SELECTED_BRANCHES) || '[]');
                            const arr = Array.isArray(prev) ? prev : [];
                            const union = Array.from(new Set([...arr, ...toAdd.map((x) => x.postalCode)]));
                            localStorage.setItem(LS_SELECTED_BRANCHES, JSON.stringify(union));
                          } catch {}
                        }
                        setShowAddPostal(false);
                        setPickedPostals({});
                      }}
                    >
                      ثبت
                    </button>
                  </div>
                </div>
              </div>
            )}                       
              {/* ——————————————————————————————————————————————— */}
              {/* کادر: مشخصات حافظه مالیاتی (تمام عرض) */}
              <section className="relative rounded-md border border-green-600 mt-6">
                {/* لیبل سبز بالای کادر، مشابه سایت اصلی */}
                <div className="absolute -top-7">
                  <span className="inline-block bg-green-600 text-white text-sm rounded-md px-3 py-1">
                    مشخصات حافظه مالیاتی
                  </span>
                </div>
                {/* بدنه: سه فیلد سریال / نوع / مدل */}
                <div className="p-4">
                  {/* سه ستون برابر + یک ستون باریک مخصوص آیکون‌ها (راست به چپ: سریال، نوع، مدل، آیکون‌ها) */}
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] items-end gap-4">
                    {/* سریال حافظه مالیاتی */}
                    <div className="relative">
                      <label className="absolute -top-3 right-2 bg-white px-2 text-xs text-gray-500">
                        سریال حافظه مالیاتی
                      </label>
                      <input
                        value={memorySerial}
                        onChange={(e) => setMemorySerial(e.target.value)}
                        className="w-full border rounded-md px-3 py-2"
                      />
                    </div>
                    {/* نوع حافظه مالیاتی */}
                    <div className="relative">
                      <label className="absolute -top-3 right-2 bg-white px-2 text-xs text-gray-500">
                        نوع حافظه مالیاتی
                      </label>
                      <select
                        value={memoryType}
                        onChange={(e) => setMemoryType(e.target.value)}
                        className="w-full border rounded-md px-3 py-2 bg-white"
                      >
                        <option value=""></option>
                        <option value="سخت افزار">سخت افزار</option>
                        <option value="نرم افزار">نرم افزار</option>
                        <option value="ابری">ابری</option>
                      </select>
                    </div>
                    {/* مدل حافظه مالیاتی (بدون آیکون؛ آیکون‌ها در ستون بعدی) */}
                    <div className="relative">
                      <label className="absolute -top-3 right-2 bg-white px-2 text-xs text-gray-500">
                        مدل حافظه مالیاتی
                      </label>
                      <input
                        value={memoryModel}
                        onChange={(e) => setMemoryModel(e.target.value)}
                        className="w-full border rounded-md px-3 py-2"
                      /> 
                    </div>
                    {/* ستون مخصوص اکشن‌ها (انتهای ردیف پس از فیلد «مدل») */}
                    <div className="flex items-center gap-2 md:mt-5">
                      {/* تیک تایید */}
                      <button
                        type="button"
                        aria-disabled={!memoryFilled}
                        className={
                          'h-10 w-10 flex items-center justify-center ' +
                          (memoryFilled ? 'text-green-600' : 'text-gray-300 cursor-not-allowed pointer-events-none')
                        }
                        title="تایید"
                        onClick={() => {
                          if (!memoryFilled) return;
                          console.debug('Memory Spec saved', { memorySerial, memoryType, memoryModel });
                        }}
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </button>
                      {/* سطل زباله */}
                      <button
                        type="button"
                        aria-disabled={!memoryFilled}
                        className={
                          'h-10 w-10 flex items-center justify-center ' +
                          (memoryFilled ? 'text-green-600' : 'text-gray-300 cursor-not-allowed pointer-events-none')
                        }
                        title="حذف"
                        onClick={() => {
                          if (!memoryFilled) return;
                          setMemorySerial('');
                          setMemoryType('');
                          setMemoryModel('');
                        }}
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 6h18" />
                          <path d="M8 6V4h8v2" />
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                          <path d="M10 11v6M14 11v6" />
                        </svg>
                      </button>
                    </div>                    
                  </div>
                </div>
              </section>

              {/* ——————————————————————————————————————————————— */}
              {/* کادر: مشخصات پایانه های فروشگاهی (تمام عرض) */}
              <section className="relative rounded-md border border-green-600 mt-6">
                {/* لیبل سبز بالای کادر، مشابه سایت اصلی */}
                <div className="absolute -top-7">
                  <span className="inline-block bg-green-600 text-white text-sm rounded-md px-3 py-1">
                    مشخصات پایانه های فروشگاهی
                  </span>
                </div>
                {/* دکمه در بالای کادر، کمی داخل‌تر از سمت راست */}
                <button
                  type="button"
                  className="absolute top-9 right-9 text-sm leading-5 text-green-600 hover:text-green-700"
                  onClick={() => setShowAddPos(true)}
                >
                  + افزودن پایانه فروشگاهی
                </button>
                {/* بدنهٔ خالی با ارتفاعی کمی بزرگ‌تر از ردیف معمولی */}
                <div className="p-4 min-h-[100px]"></div>
              </section>
            </div>
          ) : (
            /* تب آرشیو پروفایل‌ها */
            <div className="mt-2">
              {/* ظرف بدون کادر داخلی (فقط فیلتر و نتایج) */}
              <div className="relative min-h-[160px] pt-24 pb-16">
                {/* فیلدهای تاریخ: بالا-راست */}
                <div className="absolute top-6 right-6 flex items-start gap-4">
                  {/* از تاریخ */}
                  <div className="w-52">
                    <label className="block text-xs text-gray-600 mb-1 text-right">از تاریخ</label>
                    <input
                      dir="ltr"
                      type="date"
                      value={archiveFrom}
                      onChange={(e) => setArchiveFrom(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 bg-white"
                    />
                  </div>
                  {/* تا تاریخ */}
                  <div className="w-52">
                    <label className="block text-xs text-gray-600 mb-1 text-right">تا تاریخ</label>
                    <input
                      dir="ltr"
                      type="date"
                      value={archiveTo}
                      onChange={(e) => setArchiveTo(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 bg-white"
                    />
                  </div>
                </div>
               

                {/* نتایج جستجو: جدول مطابق اسکرین */}
                {archiveSearched && (
                  <div className="mt-6 overflow-auto border rounded-md">
                    <table className="w-full text-sm min-w-[920px]">
                      <thead className="bg-blue-50">
                        <tr className="text-gray-700">
                          <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">ردیف</th>
                          <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">شناسه یکتا</th>
                          <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">شناسه کلید امضا</th>
                          <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">نام شرکت معتمد</th>
                          <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">نحوه ارسال صورتحساب</th>
                          <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">وضعیت شناسه یکتا</th>
                          <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">تاریخ آخرین ویرایش</th>
                          <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">عملیات</th>
                        </tr>
                      </thead>
                      <tbody>
                        {archiveRows.length ? (
                          archiveRows.map((r, i) => (
                            <tr key={`${r.uid}-${i}`} className="odd:bg-white even:bg-gray-50">
                              <td className="px-3 py-2 border-t text-right">{i + 1}</td>
                              <td className="px-3 py-2 border-t text-right">{r.uid || '—'}</td>
                              <td className="px-3 py-2 border-t text-right">{r.signKey}</td>
                              <td className="px-3 py-2 border-t text-right">{r.company}</td>
                              <td className="px-3 py-2 border-t text-right">{r.sendMethod}</td>
                              <td className="px-3 py-2 border-t text-right">{r.status}</td>
                              <td className="px-3 py-2 border-t text-right">{r.lastDisplay}</td>
                              <td className="px-3 py-2 border-t text-right">
                                <button
                                  type="button"
                                  className="text-blue-600 hover:text-blue-700"
                                  title="مشاهده جزئیات"
                                  onClick={() => setArchiveDetailsRow(r)}
                                >
                                  {/* آیکون چشم آبی */}
                                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                                    <circle cx="12" cy="12" r="3" />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={8} className="py-6 text-center text-gray-500">
                              موردی ثبت نشده
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                 {/* دکمه جستجو: بالا-چپ (بالای «بستن») */}
                <div className="absolute left-4 top-4">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
                    onClick={runArchiveSearch}
                  >
                    جستجو
                  </button>
                </div>
                
                {/* ——— ناحیهٔ جزئیات زیر جدول نتایج ——— */}
                {archiveDetailsRow && (
                  <>
                    {/* دکمه بستن قرمز */}
                    <div className="mt-4 flex justify-end">
                      <button
                        type="button"
                        className="px-3 py-2 rounded-md bg-red-600 text-white text-sm"
                        onClick={() => setArchiveDetailsRow(null)}
                      >
                        بستن
                      </button>
                    </div>

                    {/* کادر بزرگ «جزئیات» */}
                    <section className="relative rounded-md border border-green-600 mt-4">
                      <div className="absolute -top-7">
                        <span className="inline-block bg-green-600 text-white text-sm rounded-md px-3 py-1">
                          جزئیات
                        </span>
                      </div>
                      <div className="p-4">
                        {/* چهارفیلد اول (جابجایی «شناسه کلید امضا» و «وضعیت شناسه یکتا») */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          {/* 1) شناسه یکتا */}
                          <div className="relative">
                            <label className="absolute -top-3 right-2 bg-white px-2 text-xs text-gray-500">شناسه یکتا</label>
                            <input readOnly className="w-full border rounded-md px-3 py-2 bg-white text-right text-gray-700" value={archiveDetailsRow.uid || '—'} />
                          </div>
                          {/* 2) وضعیت شناسه یکتا */}
                          <div className="relative">
                            <label className="absolute -top-3 right-2 bg-white px-2 text-xs text-gray-500">وضعیت شناسه یکتا</label>
                            <input readOnly className="w-full border rounded-md px-3 py-2 bg-white text-right text-gray-700" value={archiveDetailsRow.status || '—'} />
                          </div>
                          {/* 3) نحوه ارسال صورتحساب */}
                          <div className="relative">
                            <label className="absolute -top-3 right-2 bg-white px-2 text-xs text-gray-500">نحوه ارسال صورتحساب</label>
                            <input readOnly className="w-full border rounded-md px-3 py-2 bg-white text-right text-gray-700" value={archiveDetailsRow.sendMethod || '—'} />
                          </div>
                          {/* 4) شناسه کلید امضا */}
                          <div className="relative">
                            <label className="absolute -top-3 right-2 bg-white px-2 text-xs text-gray-500">شناسه کلید امضا</label>
                            <input readOnly className="w-full border rounded-md px-3 py-2 bg-white text-right text-gray-700" value={archiveDetailsRow.signKey || '—'} />
                          </div>
                        </div>

                        {/* جدول سریال ابزار پرداخت تخصیص داده شده */}
                        <div className="mt-6">
                          <div className="px-4 py-4 text-green-600 text-sm leading-5 mb-0">
                            سریال ابزار پرداخت تخصیص داده شده
                          </div>
                          <section className="rounded-md border mt-0">
                            <div className="overflow-auto">
                              <table className="min-w-[700px] w-full text-sm">
                                <thead className="bg-blue-50">
                                  <tr className="text-gray-700">
                                    <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">نوع ابزار پرداخت</th>
                                    <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">شماره سوئیچ پرداخت</th>
                                    <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">کد پذیرنده فروشگاهی</th>
                                    <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">شماره پایانه</th>
                                    <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">عملیات</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td colSpan={5} className="py-6 text-center text-gray-500">موردی ثبت نشده</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </section>
                        </div>

                        {/* جدول لیست شعبه های تخصیص داده شده */}
                        <div className="mt-6">
                          <div className="px-4 py-4 text-green-600 text-sm leading-5 mb-0">
                            لیست شعبه های تخصیص داده شده
                          </div>
                          <section className="rounded-md border mt-0">
                            <div className="overflow-auto">
                              <table className="min-w-[700px] w-full text-sm">
                                <thead className="bg-blue-50">
                                  <tr className="text-gray-700">
                                    <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">کد پستی</th>
                                    <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">نشانی</th>
                                    <th className="whitespace-nowrap py-2 px-3 text-right font-bold text-sm">عملیات</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {branches.length ? (
                                    branches.map((b, idx) => (
                                      <tr key={`${b.postalCode}-${idx}`} className="odd:bg-white even:bg-gray-50">
                                        <td className="px-3 py-2 border-t text-right">{b.postalCode || '—'}</td>
                                        <td className="px-3 py-2 border-t text-right">{b.address || '—'}</td>
                                        <td className="px-3 py-2 border-t text-right">—</td>
                                      </tr>
                                    ))
                                  ) : (
                                    <tr>
                                      <td colSpan={3} className="py-6 text-center text-gray-500">موردی ثبت نشده</td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </section>
                        </div>
                      </div>
                    </section>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===== مودال افزودن پایانه فروشگاهی ===== */}
      {showAddPos && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          {/* ظرف مودال: ستون/ستون (column) برای چسباندن دکمه‌ها به پایین، با ارتفاع حداقلی */}
          <div className="bg-gray-100 rounded-md shadow-lg w-[720px] max-w-[95vw] min-h-[320px] md:min-h-[360px] flex flex-col">
            <div className="px-5 pt-5 flex-1 flex flex-col">
              {/* تیتر بولد + تیک سبز داخل دایره */}
              <div className="flex items-center gap-2 font-bold text-gray-800">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-green-600 text-green-700">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span>افزودن پایانه فروشگاهی</span>
              </div>
              {/* متن راهنما */}
              <p className="mt-3 text-sm text-gray-700">
                لطفا اطلاعات پایانه فروشگاهی را وارد کنید.
              </p>
             {/* سه فیلد: کوچک‌تر، در پایینِ ناحیهٔ محتوا و وسط افقی (مثل اسکرین مرجع) */}
              <div className="mt-auto flex justify-center pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* سریال پایانه فروشگاهی */}
                  <div className="relative w-48">
                    <label className="absolute -top-2 right-2 bg-gray-50 px-2 text-xs text-gray-600">
                      سریال پایانه فروشگاهی
                    </label>
                    <input
                      className="w-full border rounded-md px-3 py-2 bg-white"
                      value={posSerial}
                      onChange={(e) => setPosSerial(e.target.value)}
                    />
                  </div>
                  {/* نوع پایانه فروشگاهی */}
                  <div className="relative w-48">
                    <label className="absolute -top-2 right-2 bg-gray-100 px-2 text-xs text-gray-600">
                      نوع پایانه فروشگاهی
                    </label>
                    <select
                      className="w-full border rounded-md px-3 py-2 bg-white"
                      value={posType}
                      onChange={(e) => setPosType(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="سخت افزار">سخت افزار</option>
                      <option value="نرم افزار">نرم افزار</option>
                      <option value="ابری">ابری</option>
                    </select>
                  </div>
                  {/* مدل پایانه فروشگاهی */}
                  <div className="relative w-48">
                    <label className="absolute -top-2 right-2 bg-gray-100 px-2 text-xs text-gray-600">
                      مدل پایانه فروشگاهی
                    </label>
                    <input
                      className="w-full border rounded-md px-3 py-2 bg-white"
                      value={posModel}
                      onChange={(e) => setPosModel(e.target.value)}
                    />
                  </div>
                </div>
              </div>

            </div>
            {/* دکمه‌ها – پایین مودال، چپ‌چین */}
            <div className="px-5 py-4 flex justify-end gap-2">
              <button
                type="button"
                className="px-3 py-2 rounded-md bg-red-600 text-white text-sm"
                onClick={() => { setShowAddPos(false); setPosSerial(''); setPosType(''); setPosModel(''); }}
              >
                انصراف
              </button>
              <button
                type="button"
                disabled={!posFilled}
                className={`px-6 py-2 rounded-md text-white text-sm ${
                  posFilled ? 'bg-green-600' : 'bg-gray-400 cursor-not-allowed'
                }`}
                onClick={() => {
                  // در آینده این‌جا ذخیره‌سازی/افزودن رکورد انجام می‌شود
                  setShowAddPos(false);
                }}
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      )}      
    </div>
  );
}
