// src/app/api/business/switch/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl) {
      throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined");
    }
    
    const body = await req.json();
    const authorization = req.headers.get("authorization");
    const cookie = req.headers.get("cookie");
    
    const backendRes = await fetch(
      `${backendUrl}/businesses/switch`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authorization && { Authorization: authorization }),
          ...(cookie && { Cookie: cookie }),
        },
        credentials: "include",
        body: JSON.stringify(body),
      }
    );
    
    const data = await backendRes.json();
    
    // ✅ کوکی جدید را از بک‌اند بگیر و در response ست کن
    const setCookie = backendRes.headers.get('set-cookie');
    if (setCookie) {
      return NextResponse.json(data, { 
        status: backendRes.status,
        headers: { 'set-cookie': setCookie }
      });
    }
    
    return NextResponse.json(data, { status: backendRes.status });
  } catch (err) {
    return NextResponse.json(
      { ok: false, message: "API Error", error: String(err) },
      { status: 500 }
    );
  }
}