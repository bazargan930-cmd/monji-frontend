// src/hooks/useBusinessCreationEligibility.ts

"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import type {
  BusinessEligibilityReason,
} from "@/components/business/BusinessCreationEligibilityModal";

type EligibilityResponse = {
  allowed?: boolean;
  reason?: BusinessEligibilityReason | string | null;
  message?: string | null;
};

type EligibilityModalState = {
  open: boolean;
  reason: BusinessEligibilityReason | null;
  message: string | null;
};

const unavailableState: EligibilityModalState = {
  open: true,
  reason: "ELIGIBILITY_CHECK_UNAVAILABLE",
  message: null,
};

export function useBusinessCreationEligibility() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(false);
  const [modalState, setModalState] =
    useState<EligibilityModalState>({
      open: false,
      reason: null,
      message: null,
    });

  const closeModal = useCallback(() => {
    setModalState((current) => ({
      ...current,
      open: false,
    }));
  }, []);

  const checkAndNavigate = useCallback(
    async (destination = "/business/onboarding") => {
      if (isChecking) return;

      setIsChecking(true);

      try {
        const response = await fetch(
          "/api/business/create-eligibility",
          {
            method: "GET",
            credentials: "include",
            cache: "no-store",
          },
        );

        const body =
          (await response.json().catch(() => null)) as
            | EligibilityResponse
            | null;

        if (response.status === 401) {
          const next = encodeURIComponent(destination);
          router.push(`/auth/signin?next=${next}`);
          return;
        }

        if (!response.ok || !body) {
          setModalState({
            ...unavailableState,
            message: body?.message ?? null,
          });
          return;
        }

        if (body.allowed === true) {
          router.push(destination);
          return;
        }

        if (body.reason === "FREE_BUSINESS_LIMIT_REACHED") {
          setModalState({
            open: true,
            reason: "FREE_BUSINESS_LIMIT_REACHED",
            message: body.message ?? null,
          });
          return;
        }

        setModalState({
          ...unavailableState,
          message: body.message ?? null,
        });
      } catch (error) {
        console.error(
          "Business creation eligibility check failed:",
          error,
        );
        setModalState(unavailableState);
      } finally {
        setIsChecking(false);
      }
    },
    [isChecking, router],
  );

  return {
    checkAndNavigate,
    closeModal,
    isChecking,
    modalState,
  };
}
