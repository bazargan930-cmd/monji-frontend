// // src\app\api\utils\user-info\route.ts

// import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// console.log('📩 /api/utils/user-info called');

// export async function GET(req: NextRequest) {
//   try {
//     // ۱. دریافت توکن از کوکی
//     const token = req.cookies.get('accessToken')?.value;

//     if (!token) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     // ۲. بررسی اعتبار توکن
//     const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret123') as any;

//     // ۳. بازگشت اطلاعات کاربر (در حالت واقعی از دیتابیس بگیر)
//     return NextResponse.json({
//       fullName: 'کاربر تستی',
//       nationalId: payload.username,
//     });
//   } catch (err) {
//     return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
//   }
// }


// این بخش موقت برای تست صفحات بدون لاگین ایجاد شد
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    fullName: 'کاربر تستی',
    nationalId: '09123456789',
    accessLevel: 'ADMIN',
    today: '1404/05/11', // یا هر تاریخ شمسی که داری
  });
}
