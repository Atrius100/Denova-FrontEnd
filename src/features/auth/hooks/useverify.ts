import { useMutation } from "@tanstack/react-query";

import { verifyApi } from "../api/verifyApi";

export function useVerify() {
  return useMutation({
    mutationFn: verifyApi,
  });
}