import {
  createSyriatelPayment,
  getPaymentStatus,
  verifySyriatelPayment,
} from "@/features/payment/api/paymentApi"
import type {
  CreateSyriatelPaymentRequest,
  VerifySyriatelPaymentRequest,
} from "@/types/payment"

/** @deprecated Use createSyriatelPayment from paymentApi */
export const createPayment = (data: {
  phone: string
  amount: number
}) => {
  return createSyriatelPayment({
    phone: data.phone,
    amount: data.amount,
    currency: "SYP",
    method: "syriatel_cash",
    purpose: "one_time",
  })
}

export const verifyPayment = (id: string) => {
  return getPaymentStatus(id)
}

export {
  createSyriatelPayment,
  getPaymentStatus,
  verifySyriatelPayment,
}

export type { VerifySyriatelPaymentRequest }
