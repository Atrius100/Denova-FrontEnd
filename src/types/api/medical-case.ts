export type MedicalCaseDto = {
  id: string
  categoryId?: number
  subcategoryId?: number
  categoryName?: string
  subcategoryName?: string
  patientName?: string
  patientCode?: string
  patientAge?: number
  patientGender?: string
  clinicalNotes?: string
  status?: number | string
  universityId?: string
}

export type CreateMedicalCasePayload = {
  categoryId: number
  subcategoryId?: number
  patientName: string
  patientAge: number
  patientGender: string
  patientPhone?: string
  patientSecurityNumber?: string
  universityId?: string
  clinicalNotes: string
}
