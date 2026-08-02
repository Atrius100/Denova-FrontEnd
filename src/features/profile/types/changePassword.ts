import { axiosInstance } from "@/lib/axios";

export type ChangePasswordPayload = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export async function changePasswordApi(
  data: ChangePasswordPayload
) {
  const response = await axiosInstance.post(
    "/Auth/change-password",
    data
  );

  return response.data;
}