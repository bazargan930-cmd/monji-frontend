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
    
    const backendRes = await fetch(
      `${backendUrl}/businesses/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authorization && { Authorization: authorization }),
          ...(cookie && { Cookie: cookie }),
        },
        credentials: "include",
      }
    );
    
    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch (err) {
    return NextResponse.json(
      { ok: false, message: "API Error", error: String(err) },
      { status: 500 }
    );
  }
}