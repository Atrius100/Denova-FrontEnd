import { addPatient } from "@/services/patient.service"
import { AddPatientPayload } from "@/types/patient"

export const useAddPatient = () => {
  const handleAdd = (data: AddPatientPayload) => {
    return addPatient(data)
  }

  return { handleAdd }
}