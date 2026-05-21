import type {
  CreateSyriatelPaymentRequest,
  CreatePaymentResponse,
  PaymentTransaction,
  VerifySyriatelPaymentRequest,
  VerifyPaymentResponse,
} from "@/types/payment"

const mockStore = new Map<string, PaymentTransaction>()

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function buildReference() {
  return `DNV-${Date.now().toString(36).toUpperCase()}`
}

function shouldFail(phone: string) {
  return phone.endsWith("0")
}

export async function mockCreateSyriatelPayment(
  data: CreateSyriatelPaymentRequest
): Promise<CreatePaymentResponse> {
  await delay(900)

  const id = `txn_${Date.now()}`
  const reference = buildReference()
  const expiresAt = new Date(
    Date.now() + 10 * 60 * 1000
  ).toISOString()

  const transaction: PaymentTransaction = {
    id,
    reference,
    status: "pending",
    amount: data.amount,
    currency: "SYP",
    phone: data.phone,
    method: "syriatel_cash",
    purpose: data.purpose,
    planId: data.planId,
    createdAt: new Date().toISOString(),
    expiresAt,
    providerTransactionId: `STC-${reference}`,
  }

  mockStore.set(id, transaction)

  return {
    transaction,
    instructions: [
      "openSyriatelApp",
      "confirmAmount",
      "enterPin",
      "waitConfirmation",
    ],
  }
}

export async function mockGetPaymentStatus(
  transactionId: string
): Promise<PaymentTransaction> {
  await delay(500)

  const existing = mockStore.get(transactionId)

  if (!existing) {
    throw new Error("Transaction not found")
  }

  if (
    existing.status !== "pending" ||
    !existing.createdAt
  ) {
    return existing
  }

  const createdMs = new Date(
    existing.createdAt
  ).getTime()
  const elapsed = Date.now() - createdMs

  if (elapsed < 4000) {
    return existing
  }

  const nextStatus = shouldFail(existing.phone)
    ? "failed"
    : "completed"

  const updated: PaymentTransaction = {
    ...existing,
    status: nextStatus,
    failureReason:
      nextStatus === "failed"
        ? "paymentDeclined"
        : undefined,
  }

  mockStore.set(transactionId, updated)

  return updated
}

export async function mockVerifySyriatelPayment(
  data: VerifySyriatelPaymentRequest
): Promise<VerifyPaymentResponse> {
  await delay(700)

  const transaction = await mockGetPaymentStatus(
    data.transactionId
  )

  if (data.confirmationCode === "0000") {
    const failed: PaymentTransaction = {
      ...transaction,
      status: "failed",
      failureReason: "invalidConfirmationCode",
    }
    mockStore.set(data.transactionId, failed)
    return { transaction: failed }
  }

  if (transaction.status === "pending") {
    const completed: PaymentTransaction = {
      ...transaction,
      status: shouldFail(transaction.phone)
        ? "failed"
        : "completed",
      failureReason: shouldFail(transaction.phone)
        ? "paymentDeclined"
        : undefined,
    }
    mockStore.set(data.transactionId, completed)
    return { transaction: completed }
  }

  return { transaction }
}
