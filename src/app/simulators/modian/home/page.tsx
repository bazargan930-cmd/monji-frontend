// src/app/simulators/modian/home/page.tsx
import { ModianHome } from '@/components/modian';
import HelpTrigger from '@/components/common/help/HelpTrigger';
import HomeHelpContent from '@/components/modian/home/HomeHelpContent';

// جلوگیری از SSG/Prerender روی این صفحه
export const dynamic = 'force-dynamic';

export default function Page() {
  // شِل، هدر، سایدبار و فوتر در layout سطح «modian» رندر می‌شوند
  return (
    <>
      {/* راهنمای صفحه (مودال مشترک + محتوای اختصاصی) – زیر ساب‌هدر، سمت چپ */}
      <div className="mt-4 px-4 flex justify-end" dir="rtl">
        <HelpTrigger
          buttonTitle="راهنمای صفحه خانه"
          modalTitle="راهنمای صفحهٔ خانه مودیان"
          size="lg"
        >
          <HomeHelpContent />
        </HelpTrigger>
      </div>

      <ModianHome />
    </>
  );
  
}
