/**
 * @deprecated Use usePaymentFlow, useCreatePayment, or useVerifyPayment
 */
import { useCreatePayment } from "./useCreatePayment"

export const usePayment = () => {
  const create = useCreatePayment()

  return {
    handlePayment: create.mutateAsync,
    isLoading: create.isPending,
  }
}
