"use client";

import { useQuery } from "@tanstack/react-query";

import { useAuthSession } from "@/hooks/useAuthSession";
import { toMedicalCaseCard } from "@/lib/api/normalize";
import { fetchAvailableMedicalCases } from "@/services/medical-cases.service";

export function useAvailableMedicalCases() {
  const { session, ready, canAccessCases } = useAuthSession();

  return useQuery({
    queryKey: [
      "medical-cases-available",
      session?.studentId,
      session?.universityId,
    ],
    queryFn: async () => {
      if (!session) return [];

      const cases = await fetchAvailableMedicalCases({
        studentId: session.studentId,
        studentUniversityId: session.universityId,
      });

      return cases.map(toMedicalCaseCard);
    },
    enabled: ready && canAccessCases,
    staleTime: 30_000,
  });
}
