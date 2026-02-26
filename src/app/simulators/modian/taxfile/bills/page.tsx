//src\app\simulators\modian\taxfile\bills\page.tsx

'use client';

import { BillsPage } from '@/features/modian';
  
  // این فایل فقط یک Route Wrapper است تا URL فعلی حفظ شود.
  // محتوای اصلی صفحه در src\features\modian/taxfile/bills/BillsPage نگهداری می‌شود.
  export default function BillsRoute() {
    return <BillsPage />;
  }
