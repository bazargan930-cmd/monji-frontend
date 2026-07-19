// src/components/business/onboarding/AddBranchModal.tsx

"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface BranchFormData {
  branchCode: string
  branchName: string
  province: string
  city: string
  county: string
  postalCode: string
  branchAddress: string
}

interface AddBranchModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmitBranch: (branch: BranchFormData) => void
}

export default function AddBranchModal({
  open,
  onOpenChange,
  onSubmitBranch,
}: AddBranchModalProps) {
  const [form, setForm] = React.useState<BranchFormData>({
    branchCode: "",
    branchName: "",
    province: "",
    city: "",
    county: "",
    postalCode: "",
    branchAddress: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmitBranch(form)
    setForm({
      branchCode: "",
      branchName: "",
      province: "",
      city: "",
      county: "",
      postalCode: "",
      branchAddress: "",
    })
    onOpenChange(false)
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <DialogPrimitive.Title className="text-lg font-semibold">
              افزودن شعبه
            </DialogPrimitive.Title>

            <DialogPrimitive.Close asChild>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </DialogPrimitive.Close>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="branchCode">کد شعبه</Label>
                <Input
                  id="branchCode"
                  name="branchCode"
                  value={form.branchCode}
                  onChange={handleChange}
                  placeholder="مثلاً 1001"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="branchName">نام شعبه</Label>
                <Input
                  id="branchName"
                  name="branchName"
                  value={form.branchName}
                  onChange={handleChange}
                  placeholder="مثلاً شعبه مرکزی"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="province">استان</Label>
                <Input
                  id="province"
                  name="province"
                  value={form.province}
                  onChange={handleChange}
                  placeholder="مثلاً تهران"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">شهر</Label>
                <Input
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="مثلاً تهران"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="county">شهرستان</Label>
                <Input
                  id="county"
                  name="county"
                  value={form.county}
                  onChange={handleChange}
                  placeholder="مثلاً تهران"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="postalCode">کد پستی</Label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  placeholder="مثلاً 1234567890"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="branchAddress">آدرس شعبه</Label>
                <Input
                  id="branchAddress"
                  name="branchAddress"
                  value={form.branchAddress}
                  onChange={handleChange}
                  placeholder="آدرس کامل شعبه"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                انصراف
              </Button>
              <Button type="submit">ثبت شعبه</Button>
            </div>
          </form>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
