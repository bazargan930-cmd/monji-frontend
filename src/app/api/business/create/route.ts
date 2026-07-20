// src/app/api/business/create/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    if (!backendUrl) {
      throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined");
    }

    const authorization = req.headers.get("authorization");
    const cookie = req.headers.get("cookie");
    const requestBody = await req.text();

    const backendRes = await fetch(`${backendUrl}/businesses/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(authorization && { Authorization: authorization }),
        ...(cookie && { Cookie: cookie }),
      },
      body: requestBody,
      cache: "no-store",
    });

    const responseBody = await backendRes.text();

    const response = new NextResponse(responseBody, {
      status: backendRes.status,
      headers: {
        "Content-Type":
          backendRes.headers.get("content-type") ?? "application/json",
      },
    });

    // انتقال access_token جدید از Backend به مرورگر
    const setCookie = backendRes.headers.get("set-cookie");

    if (setCookie) {
      response.headers.set("set-cookie", setCookie);
    }

    return response;
  } catch (error) {
    console.error("Business create proxy error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "ارتباط با سرویس ایجاد کسب‌وکار برقرار نشد.",
      },
      { status: 500 },
    );
  }
}