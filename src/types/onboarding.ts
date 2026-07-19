// src/types/onboarding.ts

export type RegistrationForm = {
  tradeName: string
  entityName: string
  taxpayerType: "LEGAL" | "INDIVIDUAL"
  nationalId: string
  economicCode?: string
  registrationNo?: string
  activityStart: string
  trackingCode?: string
  workshopCode: string
}

export type ContactForm = {
  province: string
  city: string
  county?: string
  postalCode: string
  address: string
  phone: string
  mobile?: string
  fax?: string
}

export type ActivityForm = {
  isicCode: string
  isicTitle?: string
  activityType: string
  activityPercent: number
}

export type MemberForm = {
  fullName: string
  idCode: string
  role: string
  personType: "LEGAL" | "NATURAL"
  nationality?: string
  sharePercent?: number
}

export type TaxOfficeForm = {
  taxOfficeId: string
  taxOfficeName: string
  taxUnitCode?: string
  taxType: string
}

export type BranchForm = {
  branchCode?: string
  branchName: string
  province: string
  city: string
  address: string
}

export type OnboardingFormData = {
  registration: RegistrationForm
  contact: ContactForm
  activities: ActivityForm[]
  members: MemberForm[]
  taxOffice: TaxOfficeForm
  branches: BranchForm[]
}
