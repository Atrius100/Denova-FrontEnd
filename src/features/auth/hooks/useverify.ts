
import { useMutation } from "@tanstack/react-query";
import { mockVerify } from "../services/authService";


export function useVerify() {
  return useMutation({
    mutationFn: mockVerify
  });
}