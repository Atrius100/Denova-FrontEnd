import { useMutation } from "@tanstack/react-query"
import { createSyriatelPayment } from "../api/paymentApi"

export function useCreatePayment() {
  return useMutation({
    mutationFn: createSyriatelPayment,
  })
}
