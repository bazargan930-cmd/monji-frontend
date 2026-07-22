// src/components/business/BusinessCreationEligibilityModal.tsx

"use client";

import { ShieldAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export type BusinessEligibilityReason =
  | "FREE_BUSINESS_LIMIT_REACHED"
  | "ELIGIBILITY_CHECK_UNAVAILABLE";

type BusinessCreationEligibilityModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reason: BusinessEligibilityReason | null;
  message?: string | null;
};

export function BusinessCreationEligibilityModal({
  open,
  onOpenChange,
  reason,
  message,
}: BusinessCreationEligibilityModalProps) {
  const isFreeLimit = reason === "FREE_BUSINESS_LIMIT_REACHED";

  const title = isFreeLimit ? "محدودیت طرح رایگان" : "امکان بررسی مجوز وجود ندارد";
  const description =
    message ??
    (isFreeLimit
      ? "در طرح رایگان فقط امکان ایجاد یک کسب‌وکار وجود دارد. برای افزودن کسب‌وکار جدید، لازم است طرح حساب خود را ارتقا دهید."
      : "امکان بررسی مجوز ایجاد کسب‌وکار در حال حاضر وجود ندارد. لطفاً دوباره تلاش کنید.");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        dir="rtl"
        className="max-w-md text-right"
      >
        <DialogHeader className="items-start text-right sm:text-right">
          <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-700">
            <ShieldAlert className="h-6 w-6" aria-hidden="true" />
          </div>

          <DialogTitle className="text-right leading-7">
            {title}
          </DialogTitle>

          <DialogDescription className="text-right leading-7">
            {description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-2 sm:space-x-0">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            بازگشت
          </Button>

          {isFreeLimit && (
            <Button type="button" disabled>
              ارتقای طرح — به‌زودی
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
