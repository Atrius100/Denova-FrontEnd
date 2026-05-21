export type PaymentMethod = "syriatel_cash"

export type PaymentPurpose = "subscription" | "one_time"

export type SubscriptionPlanId = "monthly" | "semester" | "annual"

export type PaymentProviderStatus =
  | "pending"
  | "completed"
  | "failed"
  | "expired"

export type PaymentFlowStep =
  | "plan"
  | "summary"
  | "phone"
  | "review"
  | "initiating"
  | "pending"
  | "verifying"
  | "success"
  | "failed"

/** @deprecated Use CreateSyriatelPaymentRequest */
export type PaymentPayload = {
  phone: string
  amount: number
}

export type CreateSyriatelPaymentRequest = {
  phone: string
  amount: number
  currency: "SYP"
  method: PaymentMethod
  purpose: PaymentPurpose
  planId?: SubscriptionPlanId
  metadata?: Record<string, string>
}

export type VerifySyriatelPaymentRequest = {
  transactionId: string
  confirmationCode?: string
}

export type PaymentTransaction = {
  id: string
  reference: string
  status: PaymentProviderStatus
  amount: number
  currency: "SYP"
  phone: string
  method: PaymentMethod
  purpose: PaymentPurpose
  planId?: SubscriptionPlanId
  createdAt: string
  expiresAt?: string
  providerTransactionId?: string
  failureReason?: string
}

export type CreatePaymentResponse = {
  transaction: PaymentTransaction
  instructions: string[]
}

export type VerifyPaymentResponse = {
  transaction: PaymentTransaction
}

/** Shape for future backend webhook reconciliation */
export type PaymentWebhookEvent = {
  eventId: string
  type: "payment.completed" | "payment.failed" | "subscription.activated"
  transactionId: string
  provider: "syriatel_cash"
  payload: Record<string, unknown>
  receivedAt: string
}
