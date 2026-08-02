import { axiosInstance } from "@/lib/axios";

export type StudentCase = {
  id: string;
  title: string;
  status: string;
  category: string;
  createdAt: string;
};

export async function getStudentCases() {
  const { data } = await axiosInstance.get(
    "/MedicalCases/student/my"
  );

  return data;
}