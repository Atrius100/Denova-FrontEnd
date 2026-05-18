import { useMutation } from "@tanstack/react-query";

import { registerApi } from "../api/registerApi";

export function useSignup() {
  return useMutation({
    mutationFn: registerApi,
  });
}