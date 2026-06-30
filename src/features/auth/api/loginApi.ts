import { axiosInstance } from "@/lib/axios";

export type LoginPayload = {
  email: string;
  password: string;
};

export async function loginApi(
  data: LoginPayload
) {
  const response =
    await axiosInstance.post(
      "/Auth/login",
      data
    );

  return response.data;
}