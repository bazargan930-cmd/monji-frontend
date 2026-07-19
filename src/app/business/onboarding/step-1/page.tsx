// src/app/business/onboarding/step-1/page.tsx

"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StepRegistration from "@/components/business/onboarding/StepRegistration";
import { Button } from "@/components/ui/button";
import {
  registrationStep1Schema,
  type RegistrationStep1Input,
} from "@/lib/validation/onboarding.schema";

export default function Step1() {
  const [loading, setLoading] = useState(false);
  const methods = useForm<RegistrationStep1Input>({
    resolver: zodResolver(registrationStep1Schema),
    defaultValues: {
      tradeName: "",
      nationalId: "",
      trackingCode: "",
      entityName: "",
      taxpayerType: "LEGAL",
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
    },
    mode: "onTouched",
  });

  const onSubmit = methods.handleSubmit(async (form) => {
     try {
    setLoading(true);
    const res = await fetch("/api/business/onboarding/step-1", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify({
        ...form,
      }),
    });

    const json = await res.json();
      if (json.ok) {
        window.location.href = "/business/onboarding/step-2";
      }
    } finally {
      setLoading(false);
    }
  });
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit}
        className="max-w-4xl mx-auto space-y-6 p-6"
      >

        <StepRegistration />

        <div className="flex justify-end">
          <Button disabled={loading} type="submit" size="lg">
            {loading ? "در حال ارسال..." : "ادامه"}
          </Button>
        </div>

      </form>
    </FormProvider>
  );
}
