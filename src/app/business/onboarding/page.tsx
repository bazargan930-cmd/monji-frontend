// src/app/business/onboarding/page.tsx

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import OnboardingChoiceModal from "@/components/business/onboarding/OnboardingChoiceModal"
import StepRegistration from "@/components/business/onboarding/StepRegistration"
import { Button } from "@/components/ui/button"
import {
  type RegistrationStep1Input,
  registrationStep1Schema,
} from "@/lib/validation/onboarding.schema"

type Mode = "fast" | "form"

const createEmptyFormValues = (): RegistrationStep1Input => ({
  tradeName: "",
  nationalId: "",
  trackingCode: "",
  entityName: "",
  taxpayerType: "",
  economicCode: "",
  registrationNo: "",
  activityStart: "",
  workshopCode: "",
  Contact: {
    province: "",
    city: "",
    county: "",
    postalCode: "",
    phone: "",
    mobile: "",
    address: "",
    fax: "",
  },
})

const createMvpAutoFillTemplate = (): RegistrationStep1Input => ({
  tradeName: "فروشگاه آموزشی منجی",
  nationalId: "10101010101",
  trackingCode: "MVP-TRAINING-001",
  entityName: "شرکت آموزشی منجی",
  taxpayerType: "حقوقی",
  economicCode: "411111111111",
  registrationNo: "14050001",
  activityStart: "2025-03-21",
  workshopCode: "",
  Contact: {
    province: "تهران",
    city: "تهران",
    county: "تهران",
    postalCode: "1111111111",
    phone: "02111111111",
    mobile: "09121111111",
    address: "تهران، نشانی آموزشی نمونه منجی",
    fax: "",
  },
})

export default function OnboardingPage() {
  const [mode, setMode] = useState<Mode | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [entityName, setEntityName] = useState("")
  const router = useRouter()

  const methods = useForm<RegistrationStep1Input>({
    resolver: zodResolver(registrationStep1Schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: createEmptyFormValues(),
  })

  const handleModeConfirm = (selectedMode: Mode) => {
    setMode(selectedMode)
    methods.reset(
      selectedMode === "fast"
        ? createMvpAutoFillTemplate()
        : createEmptyFormValues(),
    )
  }

  const onSubmit = async (data: RegistrationStep1Input) => {
    try {
      setIsSubmitting(true)

      const createRes = await fetch("/api/business/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      })

      const createJson = await createRes.json().catch(() => null)

      if (createRes.status === 409) {
        alert(
          createJson?.message ??
            "این کسب‌وکار قبلاً ثبت شده است. به داشبورد منتقل می‌شوید.",
        )
        router.push("/dashboard")
        return
      }

      if (!createRes.ok || !createJson?.success) {
        throw new Error(
          createJson?.message ?? "خطا در ایجاد کسب‌وکار و پرونده ثبت‌نامی",
        )
      }

      setEntityName(data.tradeName || data.entityName)
      setShowSuccessModal(true)
    } catch (error: unknown) {
      console.error("Error creating business", error)

      const message =
        error instanceof Error
          ? error.message
          : "خطای پیش‌بینی‌نشده‌ای رخ داد"

      alert(`خطا در ثبت اطلاعات: ${message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (mode === null) {
    return (
      <div className="min-h-screen">
        <OnboardingChoiceModal
          open
          onConfirm={handleModeConfirm}
          onCancel={() => router.push("/dashboard")}
        />
      </div>
    )
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">فرم اطلاعات کسب‌وکار</h1>
          <p className="text-sm text-muted-foreground">
            {mode === "fast"
              ? "قالب آموزشی منجی در فرم قرار گرفته است. همه اطلاعات را بررسی و در صورت نیاز ویرایش کنید."
              : "اطلاعات کسب‌وکار را با دقت تکمیل کنید."}
          </p>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={() => setMode(null)}
          disabled={isSubmitting}
        >
          تغییر روش ورود اطلاعات
        </Button>
      </div>

      {mode === "fast" && (
        <div className="rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          اطلاعات این قالب صرفاً آموزشی است و قبل از ثبت نهایی باید توسط کاربر بررسی شود.
        </div>
      )}

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <StepRegistration />

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard")}
              disabled={isSubmitting}
            >
              انصراف
            </Button>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "در حال ارسال..." : "ثبت"}
            </Button>
          </div>
        </form>
      </FormProvider>

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-lg bg-white p-6 space-y-4 shadow-lg">
            <h2 className="text-lg font-bold text-center">
              {entityName} با موفقیت ثبت شد
            </h2>

            <div className="flex justify-center pt-4">
              <Button onClick={() => router.push("/dashboard")}>بستن</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}