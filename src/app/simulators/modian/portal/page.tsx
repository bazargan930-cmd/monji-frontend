//src/app/simulators/modian/portal/page.tsx
import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

import HelpTrigger from '@/components/common/help/HelpTrigger';
import { PortalHelpContent } from '@/features/modian';
import { ModianPortal } from '@/features/modian';


export const dynamic = 'force-dynamic';

type PortalUser = {
  fullName: string;
  nationalId: string;
  accessLevel: string;
};

export default async function Page() {

  // ساختن baseUrl با fallback به host جاری (برای زمانی که NEXT_PUBLIC_SITE_URL تعریف نشده است)
  const hdrs = await headers();
  const ck = await cookies(); // ⬅️ در این محیط Promise است، پس await
  const host = hdrs.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `${protocol}://${host}`;

  // ✅ شرط 1 و 2: بایپس لاگین + نشست ماندگار
  // - فعال‌سازی بایپس با یکی از این دو:
  //   الف) NEXT_PUBLIC_BYPASS_MODIAN_LOGIN === "true"
  //   ب) قبلاً وارد پرتال شده باشد و کوکی پایدار داشته باشد
   const hasStickySession = ck.get('modian_portal_session')?.value === '1';
  const bypassLogin = process.env.NEXT_PUBLIC_BYPASS_MODIAN_LOGIN === 'true' || hasStickySession;
  if (bypassLogin) {
    const user: PortalUser = {
      fullName: 'ادمین توسعه',
      nationalId: '0000000000',
      accessLevel: 'ADMIN',
    };
    return (
      <Suspense fallback={<div className="p-4 text-gray-500">در حال بارگذاری…</div>}>
        {/* راهنمای صفحه (مودال مشترک + محتوای اختصاصی) – زیر ساب‌هدر، سمت چپ */}
        <div className="mt-4 px-4 flex justify-end" dir="rtl">
            <HelpTrigger
              buttonTitle="راهنمای صفحه پرتال"
              modalTitle="راهنمای صفحهٔ پرتال مودیان"
              size="lg"
            >
              <PortalHelpContent />
            </HelpTrigger>
          </div>
        <ModianPortal user={user} />
      </Suspense>
    );
  }

  // 🔁 پاس‌ترو کامل هدر کوکی جاری (access_token و ... را حمل می‌کند)
  const cookieHeader = hdrs.get('cookie') ?? '';
  const res = await fetch(`${baseUrl}/api/utils/user-info`, {
    method: 'GET',
    headers: { cookie: cookieHeader },
    cache: 'no-store',
  });

  if (!res.ok) {
    // اگر نشست پایدار داریم، مستقیم پورتال را رندر کن (بایپس لاگین)
    if (ck.get('modian_portal_session')?.value === '1') {
      const user: PortalUser = {
        fullName: 'ادمین',
        nationalId: '0000000000',
        accessLevel: 'ADMIN',
      };
      return (
        <Suspense fallback={<div className="p-4 text-gray-500">در حال بارگذاری…</div>}>
          <div className="mt-4 px-4 flex justify	end" dir="rtl">
          <HelpTrigger
            buttonTitle="راهنمای صفحه پرتال"
            modalTitle="راهنمای صفحهٔ پرتال مودیان"
            size="lg"
          >
            <PortalHelpContent />
          </HelpTrigger>
        </div>
          <ModianPortal user={user} />
        </Suspense>
      );
    }
    return redirect('/simulators/modian/login');
  }

  const user: PortalUser = await res.json();

  return (
    <Suspense fallback={<div className="p-4 text-gray-500">در حال بارگذاری…</div>}>
        <div className="mt-4 px-4 flex justify	end" dir="rtl">
          <HelpTrigger
            buttonTitle="راهنمای صفحه پرتال"
            modalTitle="راهنمای صفحهٔ پرتال مودیان"
            size="lg"
          >
            <PortalHelpContent />
          </HelpTrigger>
        </div>
        <ModianPortal user={user} />
    </Suspense>
  );
}
