import { axiosInstance } from "@/lib/axios";

export type ForgotPasswordPayload = {
  email: string;
};

export async function forgotPasswordApi(
  data: ForgotPasswordPayload
) {
  const response = await axiosInstance.post(
    "/Auth/forgot-password",
    data
  );

  return response.data;
}