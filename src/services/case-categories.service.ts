import { axiosInstance } from "@/lib/axios"
import { extractList } from "@/lib/api/normalize"
import type { CaseCategoryDto } from "@/types/api/case-category"

export async function fetchCaseCategories(): Promise<
  CaseCategoryDto[]
> {
  const response = await axiosInstance.get<unknown>(
    "/api/CaseCategories"
  )
  return extractList<CaseCategoryDto>(response.data)
}
