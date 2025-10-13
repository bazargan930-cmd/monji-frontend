//src\app\simulators\modian\login\layout.tsx
'use client';
// Client layout — wraps children in Suspense to satisfy CSR hooks
import { Suspense, type ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div className="p-4">در حال بارگذاری…</div>}>
      {children}
    </Suspense>
  );
}
