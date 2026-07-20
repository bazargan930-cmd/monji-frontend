// src/components/business/onboarding/OnboardingChoiceModal.tsx

"use client"

import { useState } from "react"

type Mode = "fast" | "form"

interface Props {
  open: boolean
  onConfirm: (mode: Mode) => void
  onCancel?: () => void
}

export default function OnboardingChoiceModal({
  open,
  onConfirm,
  onCancel,
}: Props) {
  const [mode, setMode] = useState<Mode>("fast")

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[420px] rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-bold">انتخاب روش ورود اطلاعات</h2>

        <p className="mb-6 text-sm text-gray-600">
          در هر دو روش، فرم نهایی پیش از ثبت نمایش داده می‌شود و تمام اطلاعات قابل ویرایش است.
        </p>

        <div className="mb-6 space-y-3">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="onboarding-mode"
              checked={mode === "fast"}
              onChange={() => setMode("fast")}
            />
            <span>تکمیل خودکار با قالب آموزشی منجی</span>
          </label>

          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="onboarding-mode"
              checked={mode === "form"}
              onChange={() => setMode("form")}
            />
            <span>تکمیل دستی فرم</span>
          </label>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded border px-4 py-2"
          >
            انصراف
          </button>

          <button
            type="button"
            onClick={() => onConfirm(mode)}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            تأیید
          </button>
        </div>
      </div>
    </div>
  )
}