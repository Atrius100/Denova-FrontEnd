
import { LoginInput } from "../types";
import { mockLogin } from "../services/authService";
import { useMutation } from "@tanstack/react-query";


export function useLogin() {
  return useMutation({
    mutationFn: (input: LoginInput) => mockLogin(input)
  });
}