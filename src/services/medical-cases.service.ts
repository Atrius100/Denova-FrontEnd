import api from "@/services/apiClient";
import { extractList } from "@/lib/api/normalize";
import type {
  AvailableMedicalCasesQuery,
  MedicalCaseDto,
  MedicalCasesQuery,
} from "@/types/api/medical-case";

export async function fetchAvailableMedicalCases(
  params: AvailableMedicalCasesQuery,
): Promise<MedicalCaseDto[]> {
  const { data } = await api.get<unknown>("/api/MedicalCases/available", {
    params: {
      studentId: params.studentId,
      studentUniversityId: params.studentUniversityId,
    },
  });
  return extractList<MedicalCaseDto>(data);
}

export async function fetchMedicalCases(
  params: MedicalCasesQuery = {},
): Promise<MedicalCaseDto[]> {
  const { data } = await api.get<unknown>("/api/MedicalCases", {
    params: {
      categoryId: params.categoryId,
      subcategoryId: params.subcategoryId,
      status: params.status,
      universityId: params.universityId,
      page: params.page ?? 1,
      pageSize: params.pageSize ?? 20,
    },
  });
  return extractList<MedicalCaseDto>(data);
}

export async function fetchMedicalCaseById(id: string): Promise<MedicalCaseDto> {
  const { data } = await api.get<MedicalCaseDto>(`/api/MedicalCases/${id}`);
  return data;
}
