import type { SubscriptionPlanId } from "@/types/payment"

export type SubscriptionPlan = {
  id: SubscriptionPlanId
  amountSyp: number
  popular?: boolean
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: "monthly",
    amountSyp: 75000,
  },
  {
    id: "semester",
    amountSyp: 200000,
    popular: true,
  },
  {
    id: "annual",
    amountSyp: 350000,
  },
]

export const SYRIATEL_PHONE_REGEX = /^09\d{8}$/

export const PAYMENT_POLL_INTERVAL_MS = 3000

export const PAYMENT_POLL_MAX_ATTEMPTS = 40

export function getPlanById(
  planId: SubscriptionPlanId | string | null
) {
  return SUBSCRIPTION_PLANS.find(
    (plan) => plan.id === planId
  )
}

export function formatSypAmount(amount: number) {
  return new Intl.NumberFormat("ar-SY", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(amount)
}
