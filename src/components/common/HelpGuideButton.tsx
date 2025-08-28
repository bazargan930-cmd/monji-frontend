
'use client';

import { Button } from '@/components/ui/button';
import helpLines from '@/constants/help/adminDashboardHelp';

type Props = {
  className?: string;
  title?: string;
  lines?: string[];
};


export default function HelpGuideButton({ className, title = 'راهنمای صفحه', lines }: Props) {
  const handleClick = () => {
    const content = lines && lines.length > 0 ? lines : helpLines;
    alert(content.join('\n'));
  };


  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleClick}
      className={`text-xs bg-amber-100 border border-amber-400 text-amber-800 hover:bg-amber-100 ${className ?? ''}`}
      title="راهنمای ویژه تراز"
    >
      {title}
    </Button>
  );
}
