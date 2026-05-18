import { axiosInstance } from "@/lib/axios";

export type VerifyPayload = {
  email: string;
  code: string;
};

export async function verifyApi(
  data: VerifyPayload
) {
  const response =
    await axiosInstance.post(
      "/api/Auth/verify-email",
      data
    );

  return response.data;
}