import { useMutation } from "@tanstack/react-query";
import { createMedicalCaseForPatientApi, CreateMedicalCaseForPatientPayload } from "../types/createCaseForPatient";



export function useCreateMedicalCaseForPatient() {
  return useMutation({
    mutationFn: (
      data: CreateMedicalCaseForPatientPayload
    ) => createMedicalCaseForPatientApi(data),
  });
}