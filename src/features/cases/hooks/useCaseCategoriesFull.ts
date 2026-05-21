import { useQuery } from "@tanstack/react-query"
import { hasApiBaseUrl } from "@/config/api"
import { fetchCaseCategories } from "@/services/case-categories.service"

export function useCaseCategoriesFull() {
  return useQuery({
    queryKey: ["case-categories-full"],
    queryFn: fetchCaseCategories,
    enabled: hasApiBaseUrl,
    retry: 1,
    staleTime: 60_000,
  })
}
