// src/app/simulators/modian/home/page.tsx
import ModianHome from '@/components/modian/ModianHome';

// جلوگیری از SSG/Prerender روی این صفحه
export const dynamic = 'force-dynamic';

export default function Page() {
  // شِل، هدر، سایدبار و فوتر در layout سطح «modian» رندر می‌شوند
  return <ModianHome />;
}