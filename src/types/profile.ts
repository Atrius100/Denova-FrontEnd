export type CaseStatus =
  | "pending"
  | "accepted"
  | "completed"
  | "rejected";

export interface Student {
  fullName: string;
  age: number;
  studyYear: string;
  university: string;
}

export interface StudentCase {
  id: string;
  name: string;
  toothNumber: number;
  status: CaseStatus;
}