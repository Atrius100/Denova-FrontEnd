"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchCaseCategories } from "@/services/case-categories.service";
import { hasApiBaseUrl } from "@/config/api";

export function useCaseCategoriesFull() {
  return useQuery({
    queryKey: ["case-categories-full"],
    queryFn: fetchCaseCategories,
    enabled: hasApiBaseUrl,
    retry: false,
    staleTime: 60_000,
  });
}
