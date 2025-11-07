// src/components/modian/common/Tabs.tsx
'use client';
import * as React from 'react';

export type TabItem<T extends string> = {
  id: T;
  title: string;
  content: React.ReactNode;
};

type Props<T extends string> = {
  items: TabItem<T>[];
  value?: T;
  defaultValue?: T;
  onChange?: (id: T) => void;
  className?: string;
  'aria-label'?: string;
};

export default function Tabs<T extends string>({
  items,
  value,
  defaultValue,
  onChange,
  className,
  'aria-label': ariaLabel = 'tabs',
}: Props<T>) {
  const [internal, setInternal] = React.useState<T>(defaultValue ?? items[0]?.id);
  const active = (value ?? internal) as T;

  const setActive = (id: T) => {
    if (value === undefined) setInternal(id);
    onChange?.(id);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const idx = items.findIndex((t) => t.id === active);
    if (idx < 0) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      const dir = e.key === 'ArrowLeft' ? -1 : 1;
      const next = (idx + dir + items.length) % items.length;
      setActive(items[next].id);
    }
  };

  return (
    <section className={className} dir="rtl">
      {/* نوار تب‌ها: بدون بک‌گراند، راست‌چین، فقط خط زیر */}
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="flex items-end justify-start gap-2 px-0"
        onKeyDown={onKeyDown}
      >
        {items.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-controls={`panel-${t.id}`}
              aria-selected={isActive}
              onClick={() => setActive(t.id)}
              className={[
                'text-sm px-4 py-2 rounded-t transition-colors',
                isActive
                  ? 'bg-white text-gray-900 border border-gray-200 border-b-transparent'
                  : 'text-gray-600 hover:text-gray-800',
              ].join(' ')}
            >
              {t.title}
            </button>
          );
        })}
      </div>

      {/* بدنه: کارت سفید بی حاشیه */}
      <div className="rounded-b rounded-tr bg-white p-4">
        {items.map((t) => (
          <div
            key={t.id}
            role="tabpanel"
            id={`panel-${t.id}`}
            aria-labelledby={`tab-${t.id}`}
            hidden={t.id !== active}
          >
            {t.content}
          </div>
        ))}
      </div>
    </section>
  );
}
