import { axiosInstance } from "@/lib/axios";

export type CreatePatientCasePayload = {
  categoryId: number;
  subcategoryId: number;
  toothNumber: number;

  patientName: string;
  patientAge: number;
  patientPhone: string;
  patientSecurityNumber: string;

  universityId: string;

  clinicalNotes: string;

  autoAssignToSelf: boolean;
};

export async function createPatientCaseApi(
  data: CreatePatientCasePayload
) {
  const response = await axiosInstance.post(
    "/MedicalCases/student",
    data
  );

  return response.data;
}