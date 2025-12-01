// src/components/modian/ui/FormField.tsx
import React from "react";

type Props = {
  label: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
  /** نوع نمایش لیبل: پیش‌فرض بالا (stacked) | شناور روی خط بالایی فیلد (floating) */
  variant?: "stacked" | "floating";
  /** اگر true، لیبل فقط برای اسکرین‌ریدر نمایش داده می‌شود (برای فیلدهای بدون لیبل ظاهری) */
  srOnly?: boolean;
  /** آیکون سمت راست داخل فیلد (مثل تقویم/جستجو/درُپ‌داون) */
  rightIcon?: React.ReactNode;
  /** آیکون سمت چپ داخل فیلد (در صورت نیاز) */
  leftIcon?: React.ReactNode;
  /** اگر true، placeholder پیش‌فرض input[type=date] (مثل mm/dd/yyyy) پنهان می‌شود */
  hideDatePlaceholder?: boolean;
};

export default function FormField({
  label,
  htmlFor,
  required,
  hint,
  error,
  className,
  children,
  variant = "stacked",
  srOnly = false,
  rightIcon,
  leftIcon,
  /** اگر true، placeholder پیش‌فرض input[type=date] (مثل mm/dd/yyyy) پنهان می‌شود */
  hideDatePlaceholder: _hideDatePlaceholder,
}: Props) {
  return (
    <div
      className={[
        "w-full",
        className,
      ].filter(Boolean).join(" ")}
    >
      {/* لیبل حالت عادی */}
      {variant !== "floating" ? (
        <label
          htmlFor={htmlFor}
          className={[
            srOnly ? "sr-only" : "block mb-1",
            "text-sm font-medium text-gray-700",
          ].join(" ")}
        >
          {label}
          {required ? <span className="text-red-500 mr-1">*</span> : null}
        </label>
      ) : null}
      {/* بدنهٔ فیلد + آیکون‌ها (لیبلِ شناور داخل همین کانتینر position می‌شود) */}
      <div className="relative">
        {variant === "floating" ? (
          <label
            htmlFor={htmlFor}
            className="absolute right-3 top-0 -translate-y-1/2 z-10 px-1 bg-white text-xs text-gray-600"
          >
            {label}
            {required ? <span className="text-red-500 mr-1">*</span> : null}
          </label>
        ) : null}
        {rightIcon ? (
          <span className="pointer-events-none absolute inset-y-0 left-2 flex items-center text-gray-500">
            {rightIcon}
          </span>
        ) : null}
        {leftIcon ? (
          <span className="pointer-events-none absolute inset-y-0 left-2 flex items-center text-gray-500">
            {leftIcon}
          </span>
        ) : null}
        {children}
      </div>

      {hint && !error && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}

      {/* استایل‌های صفحه‌محور در خود صفحه اعمال می‌شوند */}
    </div>
  );
}
