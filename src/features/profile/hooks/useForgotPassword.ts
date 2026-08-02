import { useMutation } from "@tanstack/react-query";
import { forgotPasswordApi, ForgotPasswordPayload } from "../types/forgotPassword";


export function useForgotPassword() {
  return useMutation({
    mutationFn: (
      data: ForgotPasswordPayload
    ) => forgotPasswordApi(data),
  });
}