//src/app/api/simulators/modian/login/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const cookies = req.headers.get('cookie') || '';

    const res = await fetch('http://localhost:3001/simulators/modian/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookies,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}