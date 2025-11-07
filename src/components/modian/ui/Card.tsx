// src/components/modian/ui/Card.tsx
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={["bg-white rounded-lg border p-4", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}