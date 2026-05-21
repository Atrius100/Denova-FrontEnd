"use client"

import { useTranslations } from "next-intl"
import { Receipt, ShieldCheck } from "lucide-react"
import { formatSypAmount } from "@/config/payment"
import type { SubscriptionPlan } from "@/config/payment"
import type { PaymentTransaction } from "@/types/payment"

type OrderSummaryProps = {
  plan: SubscriptionPlan
  transaction?: PaymentTransaction | null
}

export function OrderSummary({
  plan,
  transaction,
}: OrderSummaryProps) {
  const t = useTranslations("payment")

  const amount =
    transaction?.amount ?? plan.amountSyp

  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <Receipt className="h-5 w-5 text-[#1e3a6d]" />
        <h2 className="text-lg font-bold text-[#1e3a6d]">
          {t("summary.title")}
        </h2>
      </div>

      <dl className="space-y-3 text-sm">
        <div className="flex items-start justify-between gap-3">
          <dt className="text-slate-500">
            {t("summary.plan")}
          </dt>
          <dd className="text-end font-semibold text-slate-800">
            {t(`plans.${plan.id}.name`)}
          </dd>
        </div>

        <div className="flex items-start justify-between gap-3">
          <dt className="text-slate-500">
            {t("summary.duration")}
          </dt>
          <dd className="text-end text-slate-700">
            {t(`plans.${plan.id}.duration`)}
          </dd>
        </div>

        <div className="flex items-start justify-between gap-3">
          <dt className="text-slate-500">
            {t("summary.method")}
          </dt>
          <dd className="text-end font-medium text-[#e60000]">
            {t("summary.syriatelCash")}
          </dd>
        </div>

        {transaction?.reference ? (
          <div className="flex items-start justify-between gap-3">
            <dt className="text-slate-500">
              {t("summary.reference")}
            </dt>
            <dd className="font-mono text-xs text-slate-700">
              {transaction.reference}
            </dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#f3f9ff] px-4 py-3">
        <span className="text-sm font-medium text-slate-600">
          {t("summary.total")}
        </span>
        <span className="text-xl font-bold text-[#1e3a6d]">
          {formatSypAmount(amount)}{" "}
          <span className="text-sm font-medium">
            {t("summary.currency")}
          </span>
        </span>
      </div>

      <p className="mt-4 flex items-start gap-2 text-xs leading-6 text-slate-500">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
        {t("summary.secureNote")}
      </p>
    </div>
  )
}
