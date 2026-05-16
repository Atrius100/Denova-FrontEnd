"use client";

import { useQuery } from "@tanstack/react-query";

import { toCaseCategoryCard } from "@/lib/api/normalize";
import { usePreferences } from "@/providers/PreferencesProvider";
import { fetchCaseCategories } from "@/services/case-categories.service";

export function useCaseCategories() {
  const { locale } = usePreferences();

  return useQuery({
    queryKey: ["case-categories", locale],
    queryFn: async () => {
      const categories = await fetchCaseCategories();
      return categories.map((item) => toCaseCategoryCard(item, locale));
    },
    staleTime: 60_000,
  });
}
