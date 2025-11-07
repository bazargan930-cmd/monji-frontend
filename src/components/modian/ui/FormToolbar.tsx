// src/components/modian/ui/FormToolbar.tsx
import React from "react";

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean };

export function PrimaryButton({ children, loading, ...rest }: BtnProps) {
  return (
    <button
      {...rest}
      className={[
        "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium",
        "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",
      ].join(" ")}
    >
      {loading ? "..." : children}
    </button>
  );
}

export function GhostButton({ children, ...rest }: BtnProps) {
  return (
    <button
      {...rest}
      className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium border hover:bg-gray-50"
    >
      {children}
    </button>
  );
}

type ToolbarProps = {
  onSave?: () => void;
  onCancel?: () => void;
  onReset?: () => void;
  saving?: boolean;
  className?: string;
};

export default function FormToolbar({ onSave, onCancel, onReset, saving, className }: ToolbarProps) {
  return (
    <div className={["flex items-center gap-2", className].filter(Boolean).join(" ")}>
      <PrimaryButton onClick={onSave} disabled={saving} loading={saving}>ذخیره</PrimaryButton>
      {onReset ? <GhostButton onClick={onReset}>بازنشانی</GhostButton> : null}
      {onCancel ? <GhostButton onClick={onCancel}>انصراف</GhostButton> : null}
    </div>
  );
}
