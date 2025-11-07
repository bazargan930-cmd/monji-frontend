//src\app\simulators\modian\admin\taxfile\memory-uid\layout.tsx

import { Suspense } from 'react';
import type { ReactNode } from 'react';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div className="p-4 text-gray-500">در حال بارگذاری…</div>}>
      {children}
    </Suspense>
  );
}
