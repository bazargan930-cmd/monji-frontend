// src/components/modian/ui/FieldGrid.tsx
import React from "react";

type Props = {
  cols?: 1 | 2 | 3 | 4;
  className?: string;
  children: React.ReactNode;
};

export default function FieldGrid({ cols = 2, className, children }: Props) {
  const colCls =
    cols === 1 ? "grid-cols-1" :
    cols === 2 ? "grid-cols-1 md:grid-cols-2" :
    cols === 3 ? "grid-cols-1 md:grid-cols-3" :
    "grid-cols-1 md:grid-cols-4";

  return (
    <div className={["grid gap-4", colCls, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
