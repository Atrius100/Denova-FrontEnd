import { useMutation } from "@tanstack/react-query";
import { createMedicalCaseByPatientApi, CreateMedicalCaseByPatientPayload } from "../types/createMedicalCaseByPatient";

export function useCreateMedicalCaseByPatient() {
  return useMutation({
    mutationFn: (
      data: CreateMedicalCaseByPatientPayload
    ) => createMedicalCaseByPatientApi(data),
  });
}