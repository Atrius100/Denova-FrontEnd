import { Student , StudentCase } from "./profile";


export const mockStudent: Student = {
  fullName: "أحمد محمد العلي",
  age: 22,
  studyYear: "السنة الرابعة",
  university: "جامعة دمشق",
};

export const mockCases: StudentCase[] = [
  {
    id: "1",
    name: "علاج عصب",
    toothNumber: 36,
    status: "pending",
  },
  {
    id: "2",
    name: "تركيب تاج",
    toothNumber: 14,
    status: "accepted",
  },
  {
    id: "3",
    name: "خلع ضرس",
    toothNumber: 48,
    status: "completed",
  },
  {
    id: "4",
    name: "حشو مركب",
    toothNumber: 25,
    status: "rejected",
  },
  {
    id: "5",
    name: "تنظيف جذور",
    toothNumber: 11,
    status: "pending",
  },
  {
    id: "6",
    name: "تبييض الأسنان",
    toothNumber: 21,
    status: "accepted",
  },
];