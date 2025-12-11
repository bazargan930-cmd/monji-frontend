// src/components/common/FaDigits.tsx
import * as React from 'react';

// اگر alias '@/...' دارید همین را نگه دارید؛ در غیر اینصورت مسیر نسبی را جایگزین کنید:
import { toFaDigits } from '@/lib/i18n/digits';

type FaDigitsProps<T extends React.ElementType = 'span'> = {
  /** عنصرِ رندر: span, div, p, ... */
  as?: T;
  className?: string;
  children: React.ReactNode;
};

/** هر متنی را گرفته و فقط ارقامش را فارسی رندر می‌کند (سمت UI). */
export default function FaDigits<T extends React.ElementType = 'span'>(
  { as, className, children }: FaDigitsProps<T>
) {
  const Tag = (as || 'span') as React.ElementType;

  const render = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') return toFaDigits(node);
    if (typeof node === 'number') return toFaDigits(String(node));
    if (Array.isArray(node)) return node.map(render);
    return node;
  };

  return <Tag className={className}>{render(children)}</Tag>;
}