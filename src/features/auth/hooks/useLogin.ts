import { useMutation } from "@tanstack/react-query";

import { loginApi } from "../api/loginApi";

export function useLogin() {
  return useMutation({
    mutationFn: loginApi,
  });
}