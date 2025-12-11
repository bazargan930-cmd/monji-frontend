// src/lib/date/jalali.ts
export type ISOString = string; // ISO 8601 in UTC (e.g. 2025-10-09T00:00:00.000Z)

// —————— ابزارهای کمکی ریاضی ——————
const div = (a: number, b: number) => Math.floor(a / b);

// Gregorian date -> JDN
function g2d(gy: number, gm: number, gd: number): number {
  const d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) +
            div(153 * ((gm + 9) % 12) + 2, 5) + gd - 34840408;
  return d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
}
// JDN -> Gregorian
function d2g(j: number) {
  const j2 = 4 * j + 139361631;
  const i = div(j2 % 146097, 4) * 4 + 3;
  const gd = div((i % 1461), 4) * 5 + 308;
  const gdd = div((gd % 153), 5) + 1;
  const gmm = ((div(gd, 153) + 2) % 12) + 1;
  const gyy = div(j2, 146097) - 100100 + div(i, 1461);
  return { gy: gyy, gm: gmm, gd: gdd };
}
// Jalali -> JDN
function j2d(jy: number, jm: number, jd: number): number {
  const r = jy - (jy >= 0 ? 979 : 980);
  return 365 * r + div(r, 33) * 8 + div((r % 33 + 3), 4) +
         jd + (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186) + 226895;
}
// JDN -> Jalali
function d2j(jdn: number) {
  jdn = jdn - 226895;
  const jy = 979 + 33 * div(jdn, 12053);
  jdn %= 12053;
  const y = 33 * div(jdn, 1461);
  let d = jdn % 1461;
  const jy2 = jy + y + (d > 365 ? div(d - 1, 365) : 0);
  d = d > 365 ? (d - 1) % 365 : d;
  const jm = d < 186 ? 1 + div(d, 31) : 7 + div(d - 186, 30);
  const jd = 1 + (d < 186 ? d % 31 : (d - 186) % 30);
  return { jy: jy2, jm, jd };
}
const toJ = (gy: number, gm: number, gd: number) => d2j(g2d(gy, gm, gd));
const toG = (jy: number, jm: number, jd: number) => d2g(j2d(jy, jm, jd));
const isLeapJ = (jy: number) => ((((jy - (jy > 0 ? 474 : 473)) % 2820) + 474) % 33) % 4 === 1;
const monthLenJ = (jy: number, jm: number) => jm <= 6 ? 31 : jm <= 11 ? 30 : (isLeapJ(jy) ? 30 : 29);

// —————— تبدیل/فرمت ——————
export function toJalali(input: Date | ISOString): string {
  const d = (input instanceof Date) ? input : new Date(input);
  const j = toJ(d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate());
  const faDigits = (n: number) => n.toString().padStart(2, '0').replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
  return `${j.jy.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])}/${faDigits(j.jm)}/${faDigits(j.jd)}`;
}

export function parseJalali(jalali: string): ISOString | null {
  // پشتیبانی از ارقام فارسی/انگلیسی
  const en = jalali.replace(/[۰-۹]/g, d => '0123456789'['۰۱۲۳۴۵۶۷۸۹'.indexOf(d)]);
  const m = en.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
  if (!m) return null;
  const jy = +m[1], jm = +m[2], jd = +m[3];
  if (jm < 1 || jm > 12) return null;
  if (jd < 1 || jd > monthLenJ(jy, jm)) return null;
  // مبدأ روز تهران (بدون DST از 1401 به بعد: +03:30)
  const g = toG(jy, jm, jd);
  // تاریخ گرِگوریَن در نیمه‌شب "تهران": 00:00 Asia/Tehran => UTC = -03:30
  const utcMs = Date.UTC(g.gy, g.gm - 1, g.gd, 0, -210, 0, 0); // -210min = -03:30
  return new Date(utcMs).toISOString();
}

export function startOfDayTehranISO(jy: number, jm: number, jd: number): ISOString {
  const g = toG(jy, jm, jd);
  const utcMs = Date.UTC(g.gy, g.gm - 1, g.gd, 0, -210, 0, 0);
  return new Date(utcMs).toISOString();
}

export function endOfDayTehranISO(jy: number, jm: number, jd: number): ISOString {
  const g = toG(jy, jm, jd);
  const utcMs = Date.UTC(g.gy, g.gm - 1, g.gd, 23, 59 - 210, 59, 999);
  return new Date(utcMs).toISOString();
}

export function fromJalali(jy: number, jm: number, jd: number): ISOString {
  return startOfDayTehranISO(jy, jm, jd);
}
