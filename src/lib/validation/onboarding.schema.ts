// src/lib/validation/onboarding.schema.ts

import { z } from "zod";

export const ContactSchema = z.object({
  province: z.string().min(1),
  city: z.string().min(1),
  county: z.string().min(1),
  postalCode: z.string().min(1),
  phone: z.string().min(1),
  mobile: z.string().min(1),
  address: z.string().min(1),
  fax: z.string().optional(),
});

export const registrationStep1Schema = z.object({
  tradeName: z.string().min(1),
  nationalId: z.string().min(1),
  trackingCode: z.string().min(1),
  entityName: z.string().min(1),
  taxpayerType: z.string().min(1),
  economicCode: z.string().min(1),
  registrationNo: z.string().min(1),
  activityStart: z.string().min(1),
  workshopCode: z.string().optional(),
  Contact: ContactSchema,
});

export type RegistrationStep1Input = z.infer<typeof registrationStep1Schema>;