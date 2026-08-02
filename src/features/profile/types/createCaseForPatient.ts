import { axiosInstance } from "@/lib/axios";

export type CreateMedicalCaseForPatientPayload = {
  patientSecurityNumber: string;

  categoryId: number;
  subcategoryId: number;
  toothNumber: number;

  clinicalNotes: string;
};

export async function createMedicalCaseForPatientApi(
  data: CreateMedicalCaseForPatientPayload
) {
  const response = await axiosInstance.post(
    "/MedicalCases/for-patient",
    data
  );

  return response.data;
}