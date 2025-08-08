import { NextResponse } from 'next/server';
const moment = require('moment-jalaali');

export async function GET() {
  moment.loadPersian({ usePersianDigits: false }); // اعداد انگلیسی برای خوانایی
  const today = moment().format('dddd jD jMMMM jYYYY');
  return NextResponse.json({ today });
}
