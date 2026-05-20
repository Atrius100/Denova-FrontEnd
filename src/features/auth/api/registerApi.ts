import { axiosInstance } from "@/lib/axios";

export type RegisterPayload = {
  email: string;

  password: string;

  firstName: string;

  lastName: string;

  university: string;

  academicYear: number;

  
};

export async function registerApi(
  data: RegisterPayload
) {
  const response = await axiosInstance.post(
    "/api/Auth/register",
    data
  );

  return response.data;
}