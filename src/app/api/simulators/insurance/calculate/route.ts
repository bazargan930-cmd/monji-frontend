// src/app/api/simulators/insurance/calculate/route.ts
import { NextRequest, NextResponse } from 'next/server';

// تابع محاسبه بیمه تامین اجتماعی
function calculateInsurance(taxableIncome: number) {
  // 📌 فرضیات (بر اساس آخرین قوانین — قابل تنظیم):
  // - سهم کارگر: 7%
  // - سهم کارفرما: 20%
  // - بیمه بیکاری: 3% (که در این نسخه ساده، به سهم کارفرما اضافه می‌شود)
  // - مجموع: 30%

  const employeeShare = Math.round(taxableIncome * 0.07); // 7%
  const employerShare = Math.round(taxableIncome * 0.20); // 20%
  const unemploymentShare = Math.round(taxableIncome * 0.03); // 3%
  const totalInsurance = employeeShare + employerShare + unemploymentShare; // 30%

  return {
    employeeShare,
    employerShare,
    totalInsurance,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { taxableIncome } = body;

    // اعتبارسنجی ورودی
    if (typeof taxableIncome !== 'number' || taxableIncome < 0) {
      return NextResponse.json(
        { error: 'taxableIncome must be a positive number' },
        { status: 400 }
      );
    }

    // محاسبه
    const result = calculateInsurance(taxableIncome);

    // پاسخ موفق
    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error('Error in /api/simulators/insurance/calculate:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
