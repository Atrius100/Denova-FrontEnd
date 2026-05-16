import api from "@/services/apiClient";
import { extractList } from "@/lib/api/normalize";
import type { CaseCategoryDto } from "@/types/api/case-category";

export async function fetchCaseCategories(): Promise<CaseCategoryDto[]> {
  const { data } = await api.get<unknown>("/api/CaseCategories");
  return extractList<CaseCategoryDto>(data);
}

export async function fetchCaseCategoryById(
  id: number,
): Promise<CaseCategoryDto> {
  const { data } = await api.get<CaseCategoryDto>(`/api/CaseCategories/${id}`);
  return data;
}
