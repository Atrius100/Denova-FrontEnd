import { ENV } from "@/config/env"
import { axiosInstance } from "@/lib/axios"
import {
  mockCreateSyriatelPayment,
  mockGetPaymentStatus,
  mockVerifySyriatelPayment,
} from "../services/syriatelMock.service"
import type {
  CreateSyriatelPaymentRequest,
  CreatePaymentResponse,
  PaymentTransaction,
  VerifySyriatelPaymentRequest,
  VerifyPaymentResponse,
} from "@/types/payment"

export async function createSyriatelPayment(
  data: CreateSyriatelPaymentRequest
): Promise<CreatePaymentResponse> {
  if (ENV.PAYMENT_MOCK) {
    return mockCreateSyriatelPayment(data)
  }

  const response =
    await axiosInstance.post<CreatePaymentResponse>(
      "/api/payments/syriatel/create",
      data
    )

  return response.data
}

export async function getPaymentStatus(
  transactionId: string
): Promise<PaymentTransaction> {
  if (ENV.PAYMENT_MOCK) {
    return mockGetPaymentStatus(transactionId)
  }

  const response =
    await axiosInstance.get<PaymentTransaction>(
      `/api/payments/${transactionId}/status`
    )

  return response.data
}

export async function verifySyriatelPayment(
  data: VerifySyriatelPaymentRequest
): Promise<VerifyPaymentResponse> {
  if (ENV.PAYMENT_MOCK) {
    return mockVerifySyriatelPayment(data)
  }

  const response =
    await axiosInstance.post<VerifyPaymentResponse>(
      "/api/payments/syriatel/verify",
      data
    )

  return response.data
}
