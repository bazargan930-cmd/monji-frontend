//src/app/business/onboarding/step/1/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const backendResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/business/onboarding/step-1`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const data = await backendResponse.json();

    return NextResponse.json(data, { status: backendResponse.status });
  } catch (err) {
    console.error("Frontend Step1 Proxy Error:", err);
    return NextResponse.json({ error: "Proxy Error" }, { status: 500 });
  }
}
