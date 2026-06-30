
export type RequestStatus =
  | "pending"
  | "approved"
  | "rejected";




export type CaseRequest = {
  id: string;
  studentName: string;
  universityName: string;
  caseName: string;
  toothNumber: number;
  createdAt: string;
};
