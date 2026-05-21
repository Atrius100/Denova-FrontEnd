import { axiosInstance } from "@/lib/axios"
import { extractList } from "@/lib/api/normalize"
import type {
  CreateMedicalCasePayload,
  MedicalCaseDto,
} from "@/types/api/medical-case"

export async function fetchMedicalCases(params?: {
  categoryId?: number
  universityId?: string
  page?: number
  pageSize?: number
}): Promise<MedicalCaseDto[]> {
  const response = await axiosInstance.get<unknown>(
    "/api/MedicalCases",
    { params }
  )
  return extractList<MedicalCaseDto>(response.data)
}

export async function createMedicalCase(
  payload: CreateMedicalCasePayload
): Promise<MedicalCaseDto> {
  const response =
    await axiosInstance.post<MedicalCaseDto>(
      "/api/MedicalCases",
      payload
    )
  return response.data
}
