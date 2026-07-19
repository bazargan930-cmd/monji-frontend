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
  onCancel
}: Props) {

  const [mode, setMode] = useState<Mode>("fast")

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 w-[420px] shadow-lg">

        <h2 className="text-lg font-bold mb-4">
          انتخاب نحوه ورود اطلاعات
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          برای شروع استفاده از سامانه می‌توانید اطلاعات کسب‌وکار خود را تکمیل کنید
          یا سریع وارد سامانه شوید و تکمیل اطلاعات را به منجی بسپارید.
        </p>

        <div className="space-y-3 mb-6">

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={mode === "fast"}
              onChange={() => setMode("fast")}
            />
            <span>ورود سریع (تکمیل توسط منجی)</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={mode === "form"}
              onChange={() => setMode("form")}
            />
            <span>تکمیل فرم</span>
          </label>

        </div>

        <div className="flex justify-end gap-3">

          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded"
          >
            انصراف
          </button>

          <button
            onClick={() => onConfirm(mode)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            تایید
          </button>

        </div>

      </div>

    </div>
  )
}
