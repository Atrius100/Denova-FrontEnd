import { useQuery } from "@tanstack/react-query"
import {
  PAYMENT_POLL_INTERVAL_MS,
  PAYMENT_POLL_MAX_ATTEMPTS,
} from "@/config/payment"
import { getPaymentStatus } from "../api/paymentApi"
import type { PaymentProviderStatus } from "@/types/payment"

const TERMINAL_STATUSES: PaymentProviderStatus[] = [
  "completed",
  "failed",
  "expired",
]

export function usePaymentStatus(
  transactionId: string | null,
  enabled = true
) {
  return useQuery({
    queryKey: ["payment-status", transactionId],
    queryFn: () =>
      getPaymentStatus(transactionId as string),
    enabled: Boolean(transactionId) && enabled,
    refetchInterval: (query) => {
      const status = query.state.data?.status

      if (
        !status ||
        TERMINAL_STATUSES.includes(status)
      ) {
        return false
      }

      if (
        query.state.dataUpdateCount >=
        PAYMENT_POLL_MAX_ATTEMPTS
      ) {
        return false
      }

      return PAYMENT_POLL_INTERVAL_MS
    },
  })
}
