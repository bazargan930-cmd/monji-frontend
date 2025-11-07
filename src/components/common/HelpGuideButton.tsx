// src/components/common/HelpGuideButton.tsx
'use client';

import { Button } from '@/components/ui/button';

type Props = {
  className?: string;
  title?: string;
  onClick?: () => void;
};

// دکمهٔ کاملاً عمومیِ «راهنمای صفحه»
// - فاقد هرگونه متن/منطق دامنه‌ای
// - مصرف‌کننده (هر صفحه) رفتار onClick را تزریق می‌کند
export default function HelpGuideButton({ className, title = 'راهنمای صفحه', onClick }: Props) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={onClick}
      className={`text-xs bg-amber-100 border border-amber-400 text-amber-800 hover:bg-amber-100 ${className ?? ''}`}
      title={title}
    >
      {title}
    </Button>
  );
}