// src/components/common/help/HelpTrigger.tsx
'use client';
import React, { useEffect, useState } from 'react';
import HelpGuideButton from '@/components/common/HelpGuideButton';
import HelpModal, { HelpModalAction } from '@/components/common/help/HelpModal';

type HelpTriggerProps = {
  buttonTitle?: string;
  modalTitle?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  actions?: HelpModalAction[];
  children?: React.ReactNode; // محتوای اختصاصی هر صفحه
};

export default function HelpTrigger({
  buttonTitle = 'راهنمای صفحه',
  modalTitle = 'راهنمای صفحه',
  size = 'lg',
  actions,
  children,
}: HelpTriggerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <HelpGuideButton title={buttonTitle} onClick={() => setOpen(true)} />
      <HelpModal
        open={open}
        onClose={() => setOpen(false)}
        title={modalTitle}
        size={size}
        actions={actions}
      >
        {children}
      </HelpModal>
    </>
  );
}
