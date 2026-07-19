// src/app/simulators/modian/purchase-announcements/page.tsx
import { redirect } from 'next/navigation';

export default function PurchaseAnnouncementsPage() {
  // پیش‌فرض: رفتن به «اعلامیه‌های واردات»
  redirect('/simulators/modian/purchase-announcements/imports');
}
