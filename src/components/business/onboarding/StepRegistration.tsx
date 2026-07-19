// src/components/business/onboarding/StepRegistration.tsx

import { useFormContext } from "react-hook-form";
import type { RegistrationStep1Input } from "@/lib/validation/onboarding.schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StepRegistration() {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegistrationStep1Input>();

  return (
    <div className="space-y-8">

      <Card>
        <CardHeader>
          <CardTitle>اطلاعات اصلی کسب‌وکار</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="space-y-2">
            <Label>نام تجاری</Label>
            <Input {...register("tradeName")} placeholder="نام تجاری" />
          </div>

          <div className="space-y-2">
            <Label>شناسه ملی / کد اتباع</Label>
            <Input {...register("nationalId")} />
          </div>

          <div className="space-y-2">
            <Label>شماره پیگیری ثبت</Label>
            <Input {...register("trackingCode")} />
          </div>

          <div className="space-y-2">
            <Label>نام شخصیت حقوقی</Label>
            <Input {...register("entityName")} />
          </div>

          <div className="space-y-2">
            <Label>نوع مودی</Label>
            <select
              {...register("taxpayerType")}
              className="border rounded-md px-3 py-2 text-sm"
            >
              <option value="">انتخاب کنید</option>
              <option value="حقیقی">حقیقی</option>
              <option value="حقوقی">حقوقی</option>
              <option value="اتباع خارجی">اتباع خارجی</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label>کد اقتصادی</Label>
            <Input {...register("economicCode")} />
          </div>

          <div className="space-y-2">
            <Label>شماره ثبت</Label>
            <Input {...register("registrationNo")} />
          </div>

          <div className="space-y-2">
            <Label>تاریخ شروع فعالیت</Label>
            <Input {...register("activityStart")} type="date" />
          </div>

          <div className="space-y-2">
            <Label>کد کارگاه</Label>
            <Input {...register("workshopCode")} />
          </div>

        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>اقامتگاه قانونی کسب‌وکار</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">

          <div className="space-y-2">
            <Label>استان</Label>
            <Input {...register("Contact.province")} />
          </div>

          <div className="space-y-2">
            <Label>شهر</Label>
            <Input {...register("Contact.city")} />
          </div>

          <div className="space-y-2">
            <Label>شهرستان</Label>
            <Input {...register("Contact.county")} />
          </div>

          <div className="space-y-2">
            <Label>کد پستی</Label>
            <Input {...register("Contact.postalCode")} />
          </div>

          <div className="space-y-2">
            <Label>تلفن ثابت</Label>
            <Input {...register("Contact.phone")} />
          </div>

          <div className="space-y-2">
            <Label>موبایل</Label>
            <Input {...register("Contact.mobile")} />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label>آدرس</Label>
            <Input {...register("Contact.address")} />
          </div>

          <div className="space-y-2">
            <Label>فکس</Label>
            <Input {...register("Contact.fax")} />
          </div>

        </CardContent>
      </Card>

    </div>
  );
}
