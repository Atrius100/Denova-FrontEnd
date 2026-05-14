
import { SignupInput } from "../types";
import { mockSignup } from "../services/authService";
import { useMutation } from "@tanstack/react-query";
;

export function useSignup() {
  return useMutation({
    mutationFn: (input: SignupInput) => mockSignup(input)
  });
}