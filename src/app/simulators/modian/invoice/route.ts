import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { invoiceNumber, invoiceDate, buyerNationalId, totalAmount } = body;

  if (!invoiceNumber || !invoiceDate || !totalAmount) {
    return NextResponse.json({ message: 'اطلاعات ناقص است' }, { status: 400 });
  }

  // ساخت پاسخ جعلی
  const fakeTrackingCode = 'INV-' + Math.floor(100000 + Math.random() * 900000);
  const timestamp = new Date().toISOString();

  return NextResponse.json({
    trackingCode: fakeTrackingCode,
    status: 'موفق',
    registeredAt: timestamp,
    invoice: {
      invoiceNumber,
      invoiceDate,
      buyerNationalId,
      totalAmount,
    },
  });
}
