"use client"

import { useTranslations } from "next-intl"
import { Check } from "lucide-react"
import {
  formatSypAmount,
  type SubscriptionPlan,
} from "@/config/payment"
import type { SubscriptionPlanId } from "@/types/payment"

type PlanSelectorProps = {
  plans: SubscriptionPlan[]
  selectedPlanId: SubscriptionPlanId
  onSelect: (planId: SubscriptionPlanId) => void
}

export function PlanSelector({
  plans,
  selectedPlanId,
  onSelect,
}: PlanSelectorProps) {
  const t = useTranslations("payment")

  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-xl font-bold text-[#1e3a6d] sm:text-2xl">
          {t("planTitle")}
        </h2>
        <p className="mt-1 text-sm leading-6 text-slate-500">
          {t("planSubtitle")}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {plans.map((plan) => {
          const isSelected =
            plan.id === selectedPlanId

          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => onSelect(plan.id)}
              className={`relative rounded-[1.5rem] border p-4 text-start transition ${
                isSelected
                  ? "border-[#1e3a6d] bg-[#f3f9ff] shadow-md"
                  : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"
              }`}
            >
              {plan.popular ? (
                <span className="absolute -top-2.5 start-4 rounded-full bg-gradient-to-r from-[#1e3a6d] to-[#2563eb] px-3 py-0.5 text-[10px] font-bold text-white">
                  {t("popular")}
                </span>
              ) : null}

              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-[#1e3a6d]">
                    {t(`plans.${plan.id}.name`)}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {t(`plans.${plan.id}.description`)}
                  </p>
                </div>

                {isSelected ? (
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1e3a6d] text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-lg font-bold text-slate-800">
                {formatSypAmount(plan.amountSyp)}{" "}
                <span className="text-xs font-medium text-slate-500">
                  {t("summary.currency")}
                </span>
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {t(`plans.${plan.id}.duration`)}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
