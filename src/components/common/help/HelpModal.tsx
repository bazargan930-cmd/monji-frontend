// src/components/common/help/HelpModal.tsx
'use client';
import React from 'react';

export type HelpModalAction = {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
};

type HelpModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  backdropClassName?: string;
  className?: string;
  actions?: HelpModalAction[];
  children?: React.ReactNode;
};

const sizeToMaxW: Record<NonNullable<HelpModalProps['size']>, string> = {
  sm: 'max-w-md', md: 'max-w-lg', lg: 'max-w-2xl', xl: 'max-w-4xl',
};

export default function HelpModal({
  open,
  onClose,
  title = 'راهنمای صفحه',
  size = 'lg',
  backdropClassName,
  className,
  actions = [{ label: 'متوجه شدم', variant: 'primary' }],
  children,
}: HelpModalProps) {
  if (!open) return null;

  const onBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const actionCls = (v: HelpModalAction['variant']) =>
    v === 'secondary' ? 'btn btn-outline btn-sm'
    : v === 'ghost' ? 'btn btn-ghost btn-sm'
    : 'btn btn-primary btn-sm';

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-[1px] ${backdropClassName ?? ''} flex items-start justify-center p-4`}
      role="dialog" aria-modal="true" dir="rtl" onMouseDown={onBackdrop}
    >
      <div className={`mt-16 w-full ${sizeToMaxW[size]} rounded-2xl bg-white shadow-2xl border border-gray-200 ${className ?? ''}`}>
        <div className="flex items-center justify-start px-5 py-4 border-b">
          <h2 className="text-base font-bold">{title}</h2>
        </div>

        <div className="px-5 py-4 space-y-4 text-sm leading-7 text-gray-700">
          {children}
        </div>

        <div className="px-5 py-3 border-t flex items-center justify-end gap-2">
          {actions.map((a, i) => (
            <button key={i} onClick={a.onClick ?? onClose} className={actionCls(a.variant)}>
              {a.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
