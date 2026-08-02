export type CaseStatus =
  | "Pending"
  | "InProgress"
  | "Completed"
  | "Rejected";

export interface Problem {
  id: string;
  categoryName: string;
  subcategoryName: string;
  toothNumber: number | null;
  status: CaseStatus;
}

export interface StudentCase {
  patientCode: string;
  patientAge: number;
  universityId: string;
  problems: Problem[];
}