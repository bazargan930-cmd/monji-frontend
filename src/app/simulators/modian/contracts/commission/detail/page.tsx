//src\app\simulators\modian\contracts\commission\detail\page.tsx
'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const CONTRACTING_STORAGE_KEY = 'modian.contracting.contracts';

type Row = {
  contractNo: string;
  role: string;
  employerEconomicCode: string;
  contractorEconomicCode: string;
  employerIdentityCode: string;
  contractorIdentityCode: string;
  employerName: string;
  contractorName: string;
  contractType: string;
  internalContractNo: string;
  contractDate: string;
  registrationDate: string;
  totalAmount: string;
  contractSubject: string;
  article18Responsibility: string;
  contractStatus: string;
};

function readRows(): Row[] {
  try {
    const raw = localStorage.getItem(CONTRACTING_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as Row[]) : [];
  } catch {
    return [];
  }
}

function Field({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-2 text-sm">
      <div className="text-gray-700">{label}</div>
      <div className="font-medium text-gray-900">{value}</div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-green-300 bg-white">
      <div className="flex items-center justify-end bg-green-600 px-3 py-2 text-sm font-medium text-white">
        {title}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default function ModianContractsContractingDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contractNo = (searchParams.get('contractNo') || '').trim();

  const [row, setRow] = React.useState<Row | null>(null);

  React.useEffect(() => {
    const all = readRows();
    const found = all.find((r) => String(r?.contractNo || '').trim() === contractNo) || null;
    setRow(found);
  }, [contractNo]);

  return (
    <div className="space-y-4 mx-auto w-full max-w-[1200px] px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">جزئیات قرارداد</h1>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm"
            onClick={() => router.back()}
          >
            بازگشت
          </button>
          <button
            type="button"
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            onClick={() => {
              // اسکلت: حذف/اتصال در مرحله بعد
            }}
          >
            حذف
          </button>
        </div>
      </div>

      <Section title="مشخصات قرارداد">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-1">
            <Field label="تاریخ عقد قرارداد:" value={row?.contractDate || '—'} />
            <Field label="مبلغ کل قرارداد(ریال):" value={row?.totalAmount || '—'} />
            <Field label="تاریخ شروع قرارداد:" value="—" />
            <Field label="تاریخ پیش‌بینی اتمام قرارداد:" value="—" />
          </div>
          <div className="space-y-1">
            <Field label="شماره قرارداد:" value={row?.contractNo || '—'} />
            <Field label="نوع قرارداد:" value={row?.contractType || '—'} />
            <Field label="موضوع قرارداد:" value={row?.contractSubject || '—'} />
            <Field label="وضعیت قرارداد:" value={row?.contractStatus || '—'} />
          </div>
        </div>
      </Section>

      <Section title="مشخصات کارفرما">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="شماره اقتصادی:" value={row?.employerEconomicCode || '—'} />
          <Field label="نام:" value={row?.employerName || '—'} />
        </div>
      </Section>

      <Section title="مشخصات پیمانکار">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="شماره اقتصادی:" value={row?.contractorEconomicCode || '—'} />
          <Field label="نام:" value={row?.contractorName || '—'} />
        </div>
      </Section>

      <Section title="اطلاعات تکمیلی">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="تاریخ ثبت قرارداد در سامانه:" value={row?.registrationDate || '—'} />
          <Field label="شماره داخلی قرارداد:" value={row?.internalContractNo || '—'} />
        </div>
      </Section>

      <Section title="جدول پیش پرداخت و علی الحساب ها">
        <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
          <table className="w-full min-w-full table-fixed text-sm">
            <thead className="bg-green-50 text-gray-800">
              <tr className="text-xs">
                <th className="px-3 py-2 text-right w-12">ردیف</th>
                <th className="px-3 py-2 text-right">شناسه یکتا پرداخت</th>
                <th className="px-3 py-2 text-right">مبلغ پرداخت(ریال)</th>
                <th className="px-3 py-2 text-right">تاریخ پرداخت</th>
                <th className="px-3 py-2 text-right">نوع پرداخت</th>
                <th className="px-3 py-2 text-right">شناسه یکتا</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  className="border-t border-gray-200 px-3 py-8 text-center text-sm text-gray-600"
                  colSpan={6}
                >
                  موردی یافت نشد
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}

