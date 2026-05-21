"use client"

import { useTranslations } from "next-intl"
import Button from "@/features/auth/components/ButtonAuth"
import { OrderSummary } from "./OrderSummary"
import type { SubscriptionPlan } from "@/config/payment"

type PaymentReviewStepProps = {
  plan: SubscriptionPlan
  phone: string
  isLoading: boolean
  errorMessage: string | null
  onBack: () => void
  onConfirm: () => void
}

export function PaymentReviewStep({
  plan,
  phone,
  isLoading,
  errorMessage,
  onBack,
  onConfirm,
}: PaymentReviewStepProps) {
  const t = useTranslations("payment.review")

  return (
    <div className="space-y-6">
      <p className="text-sm leading-7 text-slate-500">
        {t("description")}
      </p>

      <OrderSummary plan={plan} />

      <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm">
        <span className="text-slate-500">{t("phoneLabel")}: </span>
        <span className="font-semibold text-[#1e3a6d]" dir="ltr">
          {phone}
        </span>
      </div>

      {errorMessage ? (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {errorMessage}
        </p>
      ) : null}

      <div className="flex flex-col gap-2 sm:flex-row-reverse">
        <Button
          type="button"
          onClick={onConfirm}
          isLoading={isLoading}
          loadingText={t("confirming")}
          className="bg-gradient-to-br from-[#2563eb] to-[#1e3a6d] sm:flex-1"
        >
          {t("confirmPay")}
        </Button>
        <button
          type="button"
          onClick={onBack}
          disabled={isLoading}
          className="h-11 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50 sm:flex-1"
        >
          {t("back")}
        </button>
      </div>
    </div>
  )
}
