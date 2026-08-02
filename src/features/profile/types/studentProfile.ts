import { axiosInstance } from "@/lib/axios";

export type StudentProfile = {
  profileId: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  nationalId: string;
  university: string;
  academicYear: number;
  isPremium: boolean;
  allowedCasesQuota: number;
};

export async function getStudentProfile() {
  const { data } =
    await axiosInstance.get<StudentProfile>(
      "/Students/me"
    );

  return data;
}