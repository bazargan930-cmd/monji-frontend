// src/components/modian/ModianHome.tsx

'use client';

import ModianSidebar from '@/components/modian/ModianSidebar';
import ModianQuickAccess from '@/components/modian/ModianQuickAccess';
import ModianNoticesTabs from '@/components/modian/ModianNoticesTabs';


export default function ModianHome() {
  return (
    <div className="flex flex-row gap-6 px-6 py-8">
      {/* منوی کناری */}
      <div className="w-1/4">
        <ModianSidebar />
      </div>

      {/* محتوا */}
      <div className="w-3/4 space-y-6">
        <ModianQuickAccess />
        <ModianNoticesTabs />
      </div>
    </div>
  );
}
