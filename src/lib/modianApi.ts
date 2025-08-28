// src/lib/modianApi.ts

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3001';

export type GetOpts = {
  type?: '' | 'برق' | 'گاز' | 'آب' | 'مخابرات' | 'همه';
  billIdentifier?: string;
  postalCode?: string;
  page?: number;
  pageSize?: number;
};


export type CreateBillBody = {
  billIdentifier: string;
  type: 'برق' | 'گاز' | 'آب' | 'مخابرات'; // همان برچسب‌های UI
  postalCode: string;
  branchName?: string;   // نام شعبه
  sharePercent?: number; // درصد اشتراک (۱ تا ۱۰۰)
};

async function handle<T>(res: Response): Promise<T> {
  const ct = res.headers.get('content-type') || '';
  const isJson = ct.includes('application/json');
  const data = isJson ? await res.json() : await res.text();
  if (!res.ok) {
    const msg = isJson ? data?.message || data?.error || res.statusText : String(data);
    throw new Error(msg || 'Request failed');
  }
  return data as T;
}

// پارامترهای مجاز برای دریافت قبوض (نسخه نهایی)
export type BillsGetOpts = {
  type?: 'برق' | 'گاز' | 'آب' | 'مخابرات' | 'همه' | '';
  billIdentifier?: string;   // جستجو با شناسه قبض
  postalCode?: string;       // جستجو با کدپستی
  page?: number;
  pageSize?: number;
};

export async function getBills(q: BillsGetOpts = {}) {
   const params = new URLSearchParams();
   if (q.type && q.type !== 'همه') params.set('type', q.type);
   if (q.billIdentifier) params.append('billIdentifier', q.billIdentifier);
   if (q.postalCode) params.set('postalCode', q.postalCode);
   if (q.page)                          params.set('page', String(q.page));
   if (q.pageSize)                      params.set('pageSize', String(q.pageSize));
   const url = `${API_BASE}/simulators/modian/bills${params.toString() ? `?${params.toString()}` : ''}`;
   const res = await fetch(url, { method: 'GET' });
   return handle<{ items: any[]; total: number; page: number; pageSize: number }>(res);
 }

export async function createBill(body: CreateBillBody) {
  const url = `${API_BASE}/simulators/modian/bills`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      billIdentifier: body.billIdentifier,
      type: body.type,
      postalCode: body.postalCode,
      branchName: body.branchName,
      sharePercent: body.sharePercent ?? 100,
    }),
  });
  return handle<{ message: string; id: number }>(res);
}

// حذف قبض
export async function deleteBill(id: number) {
  const url = `${API_BASE}/simulators/modian/bills/${id}`;
  const res = await fetch(url, { method: 'DELETE' });
  return handle<{ message: string }>(res);
}

// ویرایش قبض
export async function updateBill(id: number, payload: {
  billIdentifier?: string;
  type?: 'آب'|'برق'|'گاز'|'مخابرات';
  postalCode?: string;
  branchName?: string;
  sharePercent?: number;
})

{ 
   // سناریوهای احتمالی بک‌اند: PUT/PATCH روی /:id یا PATCH روی ?id= و یا /:id/edit
  const base = `${API_BASE}/simulators/modian/bills`;
  const tries: Array<RequestInfo | [RequestInfo, RequestInit]> = [
    [ `${base}/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) } ],
  ];


  let lastStatus = 0, lastText = '';
  let lastHref = '';
 const debug: Array<{ href: string; method: string; status?: number; note?: string }> = [];
 for (const t of tries) {
   const [href, init] = Array.isArray(t) ? t : [t, {}];
   lastHref = String(href);
   try {
     const res = await fetch(href as string, init as RequestInit);
     if (res.ok) {
       return handle<{ message: string }>(res);
     }
     lastStatus = res.status;
     lastText = (await res.text()) || res.statusText;
     debug.push({ href: lastHref, method: (init as any)?.method || 'GET', status: res.status, note: (lastText || '').slice(0, 140) });
     if (res.status === 404 || res.status === 405) continue;
     throw new Error(lastText || `HTTP ${res.status}`);
   } catch (e: any) {
     lastText = e?.message || String(e);
     debug.push({ href: lastHref, method: (init as any)?.method || 'ERR', note: (lastText || '').slice(0, 140) });
     continue;
   }
 }
 throw new Error(
   `ویرایش قبض ناموفق بود.\n` +
   `آخرین وضعیت: ${lastStatus} ${lastText}\n` +
   `تلاش‌ها:\n` + debug.map(d => `- [${d.method}] ${d.href} => ${d.status ?? 'ERR'} ${d.note ?? ''}`).join('\n')
 );

}

