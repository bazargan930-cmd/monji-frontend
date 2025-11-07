// src/components/modian/ui/Section.tsx
import React from "react";

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  headerRight?: React.ReactNode;
};

export default function Section({ title, description, children, headerRight, className }: Props) {
  return (
    <section className={["bg-white rounded-lg border", className].filter(Boolean).join(" ")}>
      {(title || description || headerRight) && (
        <header className="flex items-start justify-between gap-4 p-4 border-b">
          <div>
            {title ? <h2 className="text-base font-semibold text-gray-900">{title}</h2> : null}
            {description ? <p className="text-sm text-gray-500 mt-1">{description}</p> : null}
          </div>
          {headerRight ? <div className="shrink-0">{headerRight}</div> : null}
        </header>
      )}
      <div className="p-4">{children}</div>
    </section>
  );
}
