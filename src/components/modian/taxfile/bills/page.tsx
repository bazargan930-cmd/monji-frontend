//src\components\modian\taxfile\bills\page.tsx

'use client';

import { useState, useEffect } from 'react';
import ModianHeader from '@/components/layout/ModianHeader';
import ModianSubHeader from '@/components/layout/ModianSubHeader';
import ModianSidebar from '@/components/modian/ModianSidebar';
import HelpGuideButton from '@/components/common/HelpGuideButton';
import { FiEdit2, FiTrash2, FiSearch, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
// ⬇️ ایمپورت لیست شعب  تایپ آن
import {
  REGISTRATION_BRANCHES,
  BranchInfo,
} from '@/components/modian/taxfile/registration-information/page';
import { getBills, createBill, updateBill, deleteBill, type GetOpts } from '@/lib/modianApi';
import ModianFooter from '../../../layout/ModianFooter';

type Bill = {
  id: number;
  billIdentifier: string;
  type: string;
  postalCode: string;
  branch: string;
  sharePercent: number;
};

export default function BillsPage() {
  const helpLinesBills = [
    'صفحه قبوض پرونده مالیاتی',
    'این صفحه شبیه‌سازی بخش قبوض در کارپوشه مودیان است',
    'در نسخه بعدی، جستجوی واقعی و CRUD وصل می‌شود',
  ];

  const [bills, setBills] = useState<Bill[]>([]);

  // گزینه‌های کدپستی (شعبه): «کدپستی (نام شعبه - کد شعبه)»
  const branchOptions = (REGISTRATION_BRANCHES as BranchInfo[]).map((b) => ({
    value: b.کدپستی,
    label: `${b.کدپستی} (${b.نام_شعبه} - ${b.کد_شعبه})`,
  }));

  // فیلتر نوع و جستجو با شناسه قبض
  // نوع فیلتر را به همان یونیون تایپ API محدود می‌کنیم (به‌علاوه‌ی '' برای حالت خالی)
  const [filterType, setFilterType] = useState<GetOpts['type'] | ''>('');
  const [searchId, setSearchId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const filteredBills = bills; // فیلتر فعلاً سمت سرور
 
  const load = async () => {
    setLoading(true);
    try {
    const res = await getBills({
      // اگر 'همه' یا خالی بود، به سرور نفرست
      type: filterType && filterType !== 'همه' ? filterType : undefined,
      billIdentifier: (searchId && searchId.trim()) ? searchId.trim() : undefined,
      page: 1,
      pageSize: 50,
    });
      const mapped: Bill[] = res.items.map((it: any) => ({
        id: it.id,
        billIdentifier: it['شناسه_قبض'],
        type: it['نوع'],
        postalCode: it['کدپستی'],
        branch: it['شعبه'] ?? '',
        sharePercent: parseInt(String(it['درصد_اشتراک']).replace('%','')) || 0,
      }));
      setBills(mapped);
    } catch (e: any) {
      console.error(e);
      alert(e.message || 'خطا در دریافت قبوض');
    } finally {
      setLoading(false);
    }
  };
 
   useEffect(() => { load(); }, []);    // --- افزودن قبض (مودال  اعتبارسنجی ساده) ---
    const [isAddOpen, setIsAddOpen] = useState(false);
    // بستن مودال با ESC
    useEffect(() => {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsAddOpen(false);
      };
      if (isAddOpen) document.addEventListener('keydown', onKeyDown);
      return () => document.removeEventListener('keydown', onKeyDown);
    }, [isAddOpen]);

    const [form, setForm] = useState({
      billIdentifier: '',
      branch: '',
      postalCode: '',
      type: '',
      sharePercent: 100,
    });

        // --- ویرایش قبض ---
        const [isEditOpen, setIsEditOpen] = useState(false);
        const [editForm, setEditForm] = useState({
          id: 0,
          billIdentifier: '',
          branch: '',
          postalCode: '',
          type: '',
          sharePercent: 100,
        });

        const closeEditModal = () => setIsEditOpen(false);

        const handleSubmitEdit = () => {
          const newErrors: { billIdentifier?: string; postalCode?: string; type?: string } = {};
          if (!editForm.billIdentifier.trim()) newErrors.billIdentifier = 'فیلد اجباری پر نشده است';
          if (!editForm.postalCode.trim()) newErrors.postalCode = 'فیلد اجباری پر نشده است';
          if (!editForm.type.trim()) newErrors.type = 'فیلد اجباری پر نشده است';
          if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            return;
          }
          (async () => {
            try {
              await updateBill(editForm.id, {
                billIdentifier: editForm.billIdentifier.trim(),
                type: editForm.type as any,
                postalCode: editForm.postalCode.trim(),
                branchName: editForm.branch?.trim() || undefined,
                sharePercent: editForm.sharePercent,
              });
              await load();
              setIsEditOpen(false);
            } catch (e: any) {
              alert(e.message || 'خطا در ویرایش قبض');
            }
          })();
        };

    // ورودی متنیِ قابل تایپ برای درصد اشتراک (جهت ویرایش مرحله‌ای)
        const [sharePercentInput, setSharePercentInput] = useState('100');
        const [errors, setErrors] = useState<{
          billIdentifier?: string;
          postalCode?: string;
          type?: string;
        }>({});

      const openAddModal = () => {
        setErrors({});
        // ریست کامل فرم در هر بار باز شدن مودال
        setForm({
          billIdentifier: '',
          branch: '',
          postalCode: '',
          type: '',
          sharePercent: 100,
        });
        // مقدار اولیه همیشه «100»
        setSharePercentInput('100');        
        setIsAddOpen(true);
      };


        const closeAddModal = () => {
          setIsAddOpen(false);
        };

      const handleSubmitAdd = () => {
      const newErrors: {
        billIdentifier?: string;
        postalCode?: string;
        type?: string;
      } = {};

      if (!form.billIdentifier.trim()) newErrors.billIdentifier = 'فیلد اجباری پر نشده است';
      if (!form.postalCode.trim())    newErrors.postalCode    = 'فیلد اجباری پر نشده است';
      if (!form.type.trim())          newErrors.type          = 'فیلد اجباری پر نشده است';

      if (Object.keys(newErrors).length) {
        setErrors(newErrors);
        return;
      }
         // ارسال واقعی به بک‌اند
        (async () => {
          try {
            await createBill({
              billIdentifier: form.billIdentifier.trim(),
              type: form.type as any,
              postalCode: form.postalCode.trim(),
              branchName: form.branch?.trim() || undefined,
              sharePercent: form.sharePercent,
            });
            await load();
            setIsAddOpen(false);
          } catch (e: any) {
            const msg = (e?.message || '').toString();
            // خطای تکراری/Unique (Prisma P2002 یا Internal Server Error عمومی)
            if (/internal server error/i.test(msg) || /duplicate/i.test(msg) || /unique/i.test(msg) || /P2002/.test(msg)) {
              setDuplicateMsg('شناسه قبض تکراری است!');
              setIsDuplicateOpen(true);
              } else {
                alert(msg || 'خطا در ثبت قبض');
              }
          }
        })();
    };

    const handleEdit = async (id: number) => {
      const bill = bills.find(b => b.id === id);
      if (!bill) return;
      setErrors({});
      setEditForm({
        id: bill.id,
        billIdentifier: bill.billIdentifier,
        branch: bill.branch,
        postalCode: bill.postalCode,
        type: bill.type,
        sharePercent: bill.sharePercent,
      });
      setSharePercentInput(String(bill.sharePercent));
      setIsEditOpen(true);
    };
  
  const handleDelete = async (id: number) => {
    setDeleteId(id);
    setIsDeleteOpen(true);
  };
  
  // --- حذف قبض (مودال) ---
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const closeDeleteModal = () => { setIsDeleteOpen(false); setDeleteId(null); };

   // --- خطای قبض تکراری (مودال) ---
  const [isDuplicateOpen, setIsDuplicateOpen] = useState(false);
  const [duplicateMsg, setDuplicateMsg] = useState('شناسه قبض تکراری است!');
  const closeDuplicateModal = () => setIsDuplicateOpen(false);

  const handleConfirmDelete = async () => {
    if (deleteId == null) return;
    try {
      await deleteBill(deleteId);
      await load();
      closeDeleteModal();
              } catch (e: any) {
            const msg = (e?.message || '').toString();
            // تشخیص خطای تکراری (پاسخ‌های متداول Back-End)
            if (/internal server error/i.test(msg) || /duplicate/i.test(msg) || /unique/i.test(msg) || /P2002/.test(msg)) {
              setDuplicateMsg('شناسه قبض تکراری است!');
              setIsDuplicateOpen(true);
            } else {
              alert(msg || 'خطا در ثبت قبض');
            }
          }
        };

  
  return (
    <div className="flex flex-col min-h-screen">
      {/* هدر اصلی و ساب‌هدر */}
      <ModianHeader />
      <ModianSubHeader />

      {/* بدنه با منوی سمت راست */}
      <div className="flex flex-1 p-4 gap-4 bg-gray-50">
        {/* سایدبار سمت راست (ثابت) */}
        <div className="w-80 shrink-0">
          <ModianSidebar />
        </div>

        {/* محتوای اصلی – بدون margin منفی تا با سایدبار همپوشانی نداشته باشد */}
        <main className="flex-1">
          {/* تیتر و کلید راهنما (بدون -mr-*) */}
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-lg font-semibold text-gray-800 pr-0">قبوض</h1>
            <HelpGuideButton lines={helpLinesBills} />
          </div>

           {/* کادر بزرگ جستجو مثل سایت اصلی */}
           <div className="bg-white border rounded-md shadow-sm h-20 mb-3 px-3 flex items-center">
             <div className="flex items-center gap-2">
               {/* فیلد نوع با لیبل شناور روی خط کادر */}
                <div className="relative">
                  <span className="absolute -top-2 right-2 bg-white px-1 text-[11px] text-gray-600">نوع</span>
                  <select
                    id="bill-type"
                    className="border rounded-md px-24 py-4 text-sm"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as GetOpts['type'] | '')}
                  >
                    <option value=""> </option>
                    <option value="همه">همه</option>
                    <option value="برق">برق</option>
                    <option value="گاز">گاز</option>
                    <option value="آب">آب</option>
                    <option value="مخابرات">مخابرات</option>
                  </select>

                </div>
               <button
                 type="button"
                 className="inline-flex items-center gap-2 px-6 py-4 rounded-md bg-green-600 text-white text-sm hover:bg-green-700"
                 onClick={load}
               >
                 <FiSearch className="text-base" />
                  <span>جستجو</span>
                </button>
             </div>
           </div>

           {/* نوار کنترل‌های جمع‌وجور (نمایشی) */}
           <div className="rounded-md mt-4 mb-0 px-0 py-3">
             <div className="flex items-center gap-2">
               <input
                  className="border rounded-md px-3 py-2 text-sm bg-transparent focus:bg-transparent"
                  placeholder="جستجو با شناسه قبض"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                />

               {/* دکمه آیکنی جستجو */}
                <button
                  type="button"
                  title="جستجو"
                  className="border rounded-md p-2 text-gray-600 hover:text-green-700"
                  onClick={load}
                  aria-label="search"
                >
                  <FiSearch className="text-base" />
                </button>
               <div className="ms-auto">
                 <button
                   type="button"
                   className="px-3 py-2 rounded-md bg-green-600 text-white text-sm hover:bg-green-700"
                   onClick={openAddModal}
                 >
                   افزودن قبض
                 </button>
               </div>
             </div>
          </div>

          {/* جدول قبوض – در محدوده flex-1 می‌ماند و روی سایدبار نمی‌رود */}
          <div className="bg-white border rounded-md shadow-sm p-0 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-2 border w-16">ردیف</th>
                  <th className="p-2 border">شناسه قبض</th>
                  <th className="p-2 border w-24">نوع</th>
                  <th className="p-2 border">کدپستی</th>
                  <th className="p-2 border">شعبه</th>
                  <th className="p-2 border w-28">درصد اشتراک</th>
                  <th className="p-2 border w-28"></th>
                </tr>
              </thead>
              <tbody>
                {filteredBills.length > 0 ? (
                  filteredBills.map((bill, idx) => (
                    <tr key={`${bill.id}-${idx}`} className="hover:bg-gray-50 text-center">
                      <td className="p-2 border">{idx + 1}</td>
                      <td className="p-2 border" dir="ltr">{bill.billIdentifier}</td>
                      <td className="p-2 border">{bill.type}</td>
                      <td className="p-2 border" dir="ltr">{bill.postalCode}</td>
                      <td className="p-2 border">{bill.branch}</td>
                      <td className="p-2 border">{bill.sharePercent}%</td>
                      <td className="p-2 border">
                        <div className="flex items-center justify-center text-gray-600">
                          <button
                            onClick={() => handleEdit(bill.id)}
                            className="px-1 hover:text-blue-600"
                            title="ویرایش"
                            aria-label="ویرایش"
                          >
                            <FiEdit2 />
                          </button>
                          <span
                            aria-hidden="true"
                            className="mx-2 h-4 w-px bg-gray-300"
                          />
                          <button
                            onClick={() => handleDelete(bill.id)}
                            className="px-1 hover:text-red-600"
                            title="حذف"
                            aria-label="حذف"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="p-4 text-gray-500 text-center">موردی مطابق جستجو/فیلتر یافت نشد.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
                  {/* --- Modal: افزودن قبض --- */}
        {isAddOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={(e) => { if (e.target === e.currentTarget) closeAddModal(); }}
          >
            <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-10">
              <div className="flex items-center gap-2 mb-8">
                <FiCheckCircle className="text-green-600" />
                <h3 className="font-semibold">افزودن قبض</h3>
              </div>

              <div className="space-y-8">
                
                {/* شناسه قبض (اجباری) */}
                <div className="relative">
                  <span className="absolute -top-3 right-2 bg-white px-1 text-[13px] font-bold text-gray-600">شناسه قبض</span>
                  <input
                    dir="rtl"
                    className={`w-full border rounded-md px-3 py-3 text-sm text-right placeholder:text-right ${errors.billIdentifier ? 'border-red-500' : 'border-green-500'}`}
                    value={form.billIdentifier}
                    onChange={(e) => {
                      const v = e.target.value;
                      setForm({ ...form, billIdentifier: v });
                      if (errors.billIdentifier && v.trim()) setErrors(prev => ({ ...prev, billIdentifier: undefined }));
                    }}
                  />
                  {errors.billIdentifier && (
                    <p className="text-xs text-red-600 mt-1">{errors.billIdentifier}</p>
                  )}
                </div>
                  
                {/* کدپستی (شعبه) – نسخه واحد (ظاهرِ فیلد شماره ۱، کارکردِ select واقعی) */}
                <div className="relative">
                  <span className="absolute -top-3 right-2 bg-white px-1 text-[13px] font-bold text-gray-600">کدپستی (شعبه)</span>
                  <select
                    dir="rtl"
                    className={`w-full border rounded-md px-3 py-3 text-sm text-right text-gray-400 ${
                      errors.postalCode ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={form.postalCode || ''}
                    onChange={(e) => {
                      const code = e.target.value;
                      // پاک‌کردن خطا
                      setErrors(prev => ({ ...prev, postalCode: undefined }));
                      // ست مقدار کدپستی  نام شعبه از اطلاعات شعب
                      const info = (REGISTRATION_BRANCHES as BranchInfo[]).find(b => String(b.کدپستی) === String(code));
                      setForm(prev => ({
                        ...prev,
                        postalCode: code,
                        branch: info ? info.نام_شعبه : prev.branch,
                      }));
                    }}
                  >
                    <option value="" disabled>جستجو با کدپستی یا شعبه</option>
                    {branchOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.postalCode && (
                    <p className="text-xs text-red-600 mt-1">{errors.postalCode}</p>
                  )}
                </div>

                {/* نوع قبض – نمایشی */}
                <div className="relative">
                  <span className="absolute -top-3 right-2 bg-white px-1 text-[13px] font-bold text-gray-600">نوع قبض</span>
                  <select
                    dir="rtl"
                                        className={`w-full border rounded-md px-3 py-3 text-sm text-right text-gray-400 ${
                      errors.type ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={form.type}
                    onChange={(e) => {
                      const v = e.target.value;
                      setForm({ ...form, type: v });
                      if (errors.type && v) {
                        setErrors(prev => ({ ...prev, type: undefined }));
                      }
                    }}
                  >
                    <option value="">نوع قبض را انتخاب نمایید</option>
                    <option value="آب">آب</option>
                    <option value="برق">برق</option>
                    <option value="گاز">گاز</option>
                    <option value="مخابرات">مخابرات</option>
                  </select>
                  {errors.type && (
                    <p className="text-xs text-red-600 mt-1">{errors.type}</p>
                  )}
                </div>

                {/* درصد اشتراک – قابل ویرایش (۱..۱۰۰) با نمایش % کنار عدد */}
                <div className="relative">
                  <span className="absolute -top-3 right-2 bg-white px-1 text-[13px] font-bold text-gray-600">
                    درصد اشتراک
                  </span>
                  {/* % کنار عدد (سمت راستِ فیلد و بی‌اثر روی کلیک) */}
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">%</span>
                      <input
                        dir="rtl"
                        type="text"
                        className="w-full border border-gray-300 rounded-md pr-8 pl-3 py-3 text-sm text-right bg-white text-gray-400 cursor-not-allowed"
                        value={sharePercentInput} 
                        readOnly
                        disabled
                      />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4 justify-end">
                <button onClick={closeAddModal} className="px-3 py-2 rounded-md border border-black">
                  انصراف
                </button>
                <button
                  onClick={handleSubmitAdd}
                  className="px-6 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
                >
                  ثبت
                </button>                
              </div>
            </div>
          </div>
        )}

                {/* --- Modal: ویرایش قبض --- */}
                {isEditOpen && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                    onClick={(e) => { if (e.target === e.currentTarget) closeEditModal(); }}
                  >
                    <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-10">
                      <div className="flex items-center gap-2 mb-8">
                        <FiCheckCircle className="text-green-600" />
                        <h3 className="font-semibold">ویرایش قبض</h3>
                      </div>

                      <div className="space-y-8">
                        {/* شناسه قبض */}
                        <div className="relative">
                          <span className="absolute -top-3 right-2 bg-white px-1 text-[13px] font-bold text-gray-600">شناسه قبض</span>
                          <input
                            dir="rtl"
                            className={`w-full border rounded-md px-3 py-3 text-sm text-right placeholder:text-right ${errors.billIdentifier ? 'border-red-500' : 'border-green-500'}`}
                            value={editForm.billIdentifier}
                            onChange={(e) => setEditForm({ ...editForm, billIdentifier: e.target.value })}
                          />
                          {errors.billIdentifier && <p className="text-xs text-red-600 mt-1">{errors.billIdentifier}</p>}
                        </div>

                        {/* کدپستی (شعبه) */}
                        <div className="relative">
                          <span className="absolute -top-3 right-2 bg-white px-1 text-[13px] font-bold text-gray-600">کدپستی (شعبه)</span>
                          <select
                            dir="rtl"
                            className="w-full border rounded-md px-3 py-3 text-sm text-right text-gray-400"
                            value={editForm.postalCode}
                            onChange={(e) => {
                              const code = e.target.value;
                              const info = (REGISTRATION_BRANCHES as BranchInfo[]).find(b => String(b.کدپستی) === String(code));
                              setEditForm(prev => ({
                                ...prev,
                                postalCode: code,
                                branch: info ? info.نام_شعبه : prev.branch,
                              }));
                            }}
                          >
                            <option value="" disabled>جستجو با کدپستی یا شعبه</option>
                            {branchOptions.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                          {errors.postalCode && <p className="text-xs text-red-600 mt-1">{errors.postalCode}</p>}
                        </div>

                        {/* نوع قبض */}
                        <div className="relative">
                          <span className="absolute -top-3 right-2 bg-white px-1 text-[13px] font-bold text-gray-600">نوع قبض</span>
                          <select
                            dir="rtl"
                            className="w-full border rounded-md px-3 py-3 text-sm text-right text-gray-400"
                            value={editForm.type}
                            onChange={(e) => setEditForm({ ...editForm, type: e.target.value })}
                          >
                            <option value="">نوع قبض را انتخاب نمایید</option>
                            <option value="آب">آب</option>
                            <option value="برق">برق</option>
                            <option value="گاز">گاز</option>
                            <option value="مخابرات">مخابرات</option>
                          </select>
                          {errors.type && <p className="text-xs text-red-600 mt-1">{errors.type}</p>}
                        </div>

                        {/* درصد اشتراک */}
                        <div className="relative">
                          <span className="absolute -top-3 right-2 bg-white px-1 text-[13px] font-bold text-gray-600">درصد اشتراک</span>
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">%</span>
                          <input
                            dir="rtl"
                            type="number"
                            min={1}
                            max={100}
                            className="w-full border border-gray-300 rounded-md pr-8 pl-3 py-3 text-sm text-right"
                            value={editForm.sharePercent}
                            onChange={(e) => setEditForm({ ...editForm, sharePercent: Number(e.target.value) || 0 })}
                          />
                        </div>
                      </div>

                      <div className="mt-5 flex items-center gap-4 justify-end">
                        <button onClick={closeEditModal} className="px-3 py-2 rounded-md border border-black">انصراف</button>
                        <button
                          onClick={handleSubmitEdit}
                          className="px-6 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
                        >
                          ثبت
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* --- Modal: حذف قبض --- */}
                {isDeleteOpen && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                    onClick={(e) => { if (e.target === e.currentTarget) closeDeleteModal(); }}
                  >
                    <div className="bg-white w-full max-w-xl rounded-lg shadow-xl p-8">
                      {/* تیتر و آیکون هشدار */}
                      <div className="flex items-center gap-2 mb-4">
                        <FiAlertCircle className="text-red-600 text-xl" aria-hidden="true" />
                        <h3 className="font-bold text-lg text-black">حذف قبض</h3>
                      </div>  
                        <p className="mb-6 text-gray-700 pr-7">آیا از حذف قبض اطمینان دارید؟</p>
                        <div className="flex justify-end gap-3">
                        <button
                          onClick={closeDeleteModal}
                          className="px-4 py-2 rounded-md border border-gray-400"
                        >
                          انصراف
                        </button>
                        <button
                          onClick={handleConfirmDelete}
                          className="px-5 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                        >
                          حذف قبض
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* --- Modal: قبض تکراری --- */}
                {isDuplicateOpen && (
                  <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40"
                    onClick={(e) => { if (e.target === e.currentTarget) closeDuplicateModal(); }}
                  >
                    <div className="bg-white w-full max-w-xl rounded-lg shadow-xl p-8">
                      <h3 className="font-bold text-lg text-black mb-4">قبض تکراری</h3>
                      <p className="mb-6 text-gray-700">شناسه قبض تکراری است!</p>
                      <div className="flex justify-end">
                        <button
                          onClick={closeDuplicateModal}
                          className="px-5 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
                        >
                          تایید
                        </button>
                      </div>
                    </div>
                  </div>
                )}
        </main>        
      </div>
      {/* Footer inside the same container */}
        <div className="mt-auto w-full">
          <ModianFooter />
        </div>
    </div>
  );
}
