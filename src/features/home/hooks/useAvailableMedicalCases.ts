"use client";

import { useQuery } from "@tanstack/react-query";

import { useAuthSession } from "@/hooks/useAuthSession";
import { toMedicalCaseCard } from "@/lib/api/normalize";
import { hasApiBaseUrl } from "@/config/api";
import { fetchAvailableMedicalCases } from "@/services/medical-cases.service";

export function useAvailableMedicalCases() {
  const { session, ready, isLoggedIn } = useAuthSession();

  return useQuery({
    queryKey: [
      "medical-cases-available",
      session?.studentId,
      session?.universityId,
    ],
    queryFn: async () => {
      if (!session?.studentId || !session.universityId) return [];

      const cases = await fetchAvailableMedicalCases({
        studentId: session.studentId,
        studentUniversityId: session.universityId,
      });

      return cases.map(toMedicalCaseCard);
    },
    enabled:
      ready &&
      isLoggedIn &&
      hasApiBaseUrl &&
      Boolean(session?.studentId && session?.universityId),
    retry: false,
    staleTime: 30_000,
  });
}
