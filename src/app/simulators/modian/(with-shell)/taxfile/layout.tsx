//src/app/simulators/modian/taxfile/layout.tsx

import { TaxfileLayoutView } from '@/features/modian';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <TaxfileLayoutView>{children}</TaxfileLayoutView>;
}