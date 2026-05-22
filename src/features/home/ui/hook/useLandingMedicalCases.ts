"use client";

import { useQuery } from "@tanstack/react-query";

import { useAuthSession } from "@/hooks/useAuthSession";
import { readAuthSession } from "@/lib/auth/session";
import { toMedicalCaseCard } from "@/lib/api/normalize";
import {
  fetchAvailableMedicalCases,
  fetchMedicalCases,
} from "@/services/medical-cases.service";

export function useLandingMedicalCases() {
  const { session, ready, isLoggedIn } = useAuthSession();

  return useQuery({
    queryKey: [
      "landing-medical-cases",
      isLoggedIn,
      session?.studentId,
      session?.universityId,
    ],
    queryFn: async () => {
      const current = readAuthSession();
      if (!current?.token) return [];

      if (current.studentId && current.universityId) {
        const available = await fetchAvailableMedicalCases({
          studentId: current.studentId,
          studentUniversityId: current.universityId,
        });
        return available.map(toMedicalCaseCard);
      }

      const list = await fetchMedicalCases({
        page: 1,
        pageSize: 24,
        status: 2,
      });
      return list.map(toMedicalCaseCard);
    },
    enabled: ready && isLoggedIn,
    retry: 1,
    staleTime: 30_000,
  });
}
