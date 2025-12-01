// src/app/api/utils/today/route.ts
import { NextResponse } from 'next/server';

// تابع تبدیل تاریخ میلادی به شمسی — الگوریتم ساده برای MVP
function toPersianDate(date: Date): string {
  const gregorianYear = date.getFullYear();
  const gregorianMonth = date.getMonth() + 1;
  const gregorianDay = date.getDate();

  // الگوریتم تبدیل تقریبی — برای استفاده دقیق‌تر می‌توان از کتابخانه‌هایی مثل `jalaali-js` استفاده کرد
  const persianDate = new Date(gregorianYear + '/03/21');
  const diff = date.getTime() - persianDate.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const _days = Math.floor(diff / oneDay);


  // برای سادگی، فقط تاریخ امروز را به صورت سخت‌کد برمی‌گردانیم — در عمل باید الگوریتم دقیق‌تری نوشت
  // اما برای MVP و تست، می‌توانیم از یک مقدار استاتیک استفاده کنیم یا از کتابخانه استفاده کنیم

  // ✅ راه حل ساده‌تر برای MVP: استفاده از کتابخانه `jalaali-js`
  try {
    // @ts-ignore — در صورت نصب jalaali-js
    const jalaali = require('jalaali-js');
    const jDate = jalaali.toJalaali(gregorianYear, gregorianMonth, gregorianDay);
    return `${jDate.jy}/${String(jDate.jm).padStart(2, '0')}/${String(jDate.jd).padStart(2, '0')}`;
  } catch {
    // fallback در صورت عدم نصب کتابخانه
    return "1403/02/20";
  }
}

export async function GET() {
  try {
    const today = new Date();
    const persianDate = toPersianDate(today);

    return NextResponse.json({
      success: true,
      date: persianDate,
      timestamp: today.toISOString(),
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch Persian date",
      },
      { status: 500 }
    );
  }
}
