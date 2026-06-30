import { axiosInstance } from "@/lib/axios";

export type RegisterPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  university: string;
  academicYear: number;
  phoneNumber: string;
  nationalId: string;
};

export async function registerApi(
  data: RegisterPayload
) {
  const response = await axiosInstance.post(
    "/Auth/register",
    data
  );

  return response.data;
}