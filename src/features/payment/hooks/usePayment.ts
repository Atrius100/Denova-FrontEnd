import { createPayment } from "@/services/payment.service"
import { PaymentPayload } from "@/types/payment"

export const usePayment = () => {
  const handlePayment = async (data: PaymentPayload) => {
    return await createPayment(data)
  }

  return { handlePayment }
}