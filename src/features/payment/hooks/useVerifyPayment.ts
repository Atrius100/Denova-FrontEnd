import { useMutation } from "@tanstack/react-query"
import { verifySyriatelPayment } from "../api/paymentApi"

export function useVerifyPayment() {
  return useMutation({
    mutationFn: verifySyriatelPayment,
  })
}
