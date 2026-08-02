import { axiosInstance } from "@/lib/axios";

export type CreateMedicalCaseByPatientPayload = {
  patientName: string;
  patientAge: number;
  patientPhone: string;
  patientSecurityNumber: string;
  universityId: string;
  toothNumber: number;
  clinicalNotes: string;
};

export async function createMedicalCaseByPatientApi(
  data: CreateMedicalCaseByPatientPayload
) {
  const response = await axiosInstance.post(
    "/MedicalCases/patient",
    data
  );

  return response.data;
}