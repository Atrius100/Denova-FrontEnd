export type MedicalCaseDto = {
  id: string;
  categoryId?: number;
  subcategoryId?: number;
  categoryName?: string;
  subcategoryName?: string;
  patientCode?: string;
  patientAge?: number;
  patientGender?: string;
  clinicalNotes?: string;
  status?: number;
  universityId?: string;
};

export type MedicalCaseCard = {
  id: string;
  title: string;
  subtitle: string;
};

export type MedicalCasesQuery = {
  categoryId?: number;
  subcategoryId?: number;
  status?: number;
  universityId?: string;
  page?: number;
  pageSize?: number;
};

export type AvailableMedicalCasesQuery = {
  studentId: string;
  studentUniversityId: string;
};
