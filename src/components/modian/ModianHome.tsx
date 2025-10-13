// src/components/modian/ModianHome.tsx

'use client';

import ModianQuickAccess from '@/components/modian/ModianQuickAccess';
import ModianNoticesTabs from '@/components/modian/ModianNoticesTabs';


export default function ModianHome() {
  // توجه: سایدبار در layout سطح «/simulators/modian» رندر می‌شود.
  // این صفحه فقط محتوای وسط را نمایش می‌دهد.
  return (
    <div className="px-6 py-8 space-y-6">
      <ModianQuickAccess />
      <ModianNoticesTabs />
    </div>
  );
}
