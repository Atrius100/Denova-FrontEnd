import api from "./apiClient"

export const addPatient = (data: {
  name: string
  phone: string
  caseType: string
  description: string
}) => {
  return api.post("/patients", data)
}