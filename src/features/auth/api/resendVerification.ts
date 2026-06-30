import { axiosInstance } from "@/lib/axios";

export type ResendVerificationPayload = {
  email: string;
};

export async function resendVerificationApi(
  data: ResendVerificationPayload
) {
  const response = await axiosInstance.post(
    "/Auth/resend-verification-code",
    data
  );

  return response.data;
}