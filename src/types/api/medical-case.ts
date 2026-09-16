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

export interface MedicalCaseCard {
  id: string;
  title: string;
  subtitle: string;
}

export interface AvailableMedicalCasesQuery {
  studentId?: string | number;
  studentUniversityId?: string | number;
}

export interface MedicalCasesQuery {
  categoryId?: string | number;
  subcategoryId?: string | number;
  status?: string | number;
  universityId?: string | number;
  page?: number;
  pageSize?: number;
}