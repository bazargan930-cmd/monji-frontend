//src/app/business/registration-status/route.ts

import { NextResponse } from "next/server";

// فعلاً حالت موقت: بعداً وصلش می‌کنیم به Prisma
export async function GET() {
  // TODO: بعداً براساس دیتابیس تعیین شود
  const isCompleted = false;

  return NextResponse.json({
    isCompleted,
    missingSteps: isCompleted ? [] : [1, 2, 3, 4, 5],
  });
}