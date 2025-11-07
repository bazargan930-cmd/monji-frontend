// src/components/modian/ui/PageShell.tsx
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
};

export default function PageShell({ title, subtitle, actions, children }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </header>
      <section className="bg-white rounded-lg border p-4">{children}</section>
    </div>
  );
}
