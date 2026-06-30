import { useMutation } from "@tanstack/react-query";
import { resendVerificationApi } from "../api/resendVerification";

export function useResendVerification() {
  return useMutation({
    mutationKey: ["resend-verification"],
    mutationFn: resendVerificationApi,
  });
}