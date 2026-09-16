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

export interface Student {
  fullName: string;
  age: number;
  studyYear: string;
  university: string;
}

export interface LegacyStudentCase {
  id: string;
  name: string;
  toothNumber: number;
  status: "pending" | "accepted" | "completed" | "rejected";
}