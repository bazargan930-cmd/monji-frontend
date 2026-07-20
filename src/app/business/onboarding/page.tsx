// src/app/business/onboarding/page.tsx

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import StepRegistration from "@/components/business/onboarding/StepRegistration"
import {
  type RegistrationStep1Input,
  registrationStep1Schema,
} from "@/lib/validation/onboarding.schema"
import { Button } from "@/components/ui/button"

type Mode = "fast" | "form"

export default function OnboardingPage() {
  // حالت fast فعلاً غیرفعال است ولی برای آینده نگه داشته می‌شود
  const [mode] = useState<Mode>("form")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [entityName, setEntityName] = useState<string>("")
  const router = useRouter()

  const methods = useForm<RegistrationStep1Input>({
    resolver: zodResolver(registrationStep1Schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      taxpayerType: "",
      workshopCode: "",
      Contact: { // ✅ تطابق با backend: Contact به جای legalInfo
        province: "",
        city: "",
        county: "",
        postalCode: "",
        phone: "", // ✅ تطابق با backend: phone به جای landline
        mobile: "",
        address: "",
        fax: "",
      },
    },
  })

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

  // ✅ فعلاً فقط حالت فرم را نمایش می‌دهیم، fast برای آینده محفوظ است
  if (mode === "fast") {
    // TODO: پیاده‌سازی حالت fast در آینده
    return (
      <div className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">ورود سریع اطلاعات (در حال آماده‌سازی)</h1>
        <p className="text-sm text-muted-foreground">
          این قابلیت به‌زودی در دسترس قرار می‌گیرد. فعلاً لطفاً از فرم تکمیل اطلاعات استفاده کنید.
        </p>
      </div>
    )
  }

  // mode === "form"
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">فرم اطلاعات کسب‌وکار</h1>
        <p className="text-sm text-muted-foreground">
          لطفاً اطلاعات زیر را با دقت تکمیل کنید.
        </p>
      </div>

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
               onClick={() => router.push('/dashboard')}
             >
               انصراف
             </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "در حال ارسال..." : "ثبت"}
            </Button>
          </div>
        </form>
      </FormProvider>

      {/* ✅ Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-lg bg-white p-6 space-y-4 shadow-lg">
            <h2 className="text-lg font-bold text-center">
              {entityName} با موفقیت ثبت شد
            </h2>

            <div className="flex justify-center pt-4">
              <Button
                onClick={() => router.push("/dashboard")}
              >
                بستن
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
