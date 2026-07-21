// src/app/api/business/create-eligibility/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    if (!backendUrl) {
      throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined");
    }

    const authorization = req.headers.get("authorization");
    const cookie = req.headers.get("cookie");

    const backendRes = await fetch(
      `${backendUrl}/businesses/create-eligibility`,
      {
        method: "GET",
        headers: {
          ...(authorization && { Authorization: authorization }),
          ...(cookie && { Cookie: cookie }),
        },
        cache: "no-store",
      },
    );

    const responseBody = await backendRes.text();

    return new NextResponse(responseBody, {
      status: backendRes.status,
      headers: {
        "Content-Type":
          backendRes.headers.get("content-type") ?? "application/json",
      },
    });
  } catch (error) {
    console.error("Business eligibility proxy error:", error);

    return NextResponse.json(
      {
        allowed: false,
        reason: "ELIGIBILITY_CHECK_UNAVAILABLE",
        message: "امکان بررسی مجوز ایجاد کسب‌وکار در حال حاضر وجود ندارد. لطفاً دوباره تلاش کنید.",
      },
      { status: 502 },
    );
  }
}
