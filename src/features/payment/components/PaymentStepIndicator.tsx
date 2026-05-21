"use client"

import { useTranslations } from "next-intl"
import { Check } from "lucide-react"
import type { PaymentFlowStep } from "@/types/payment"

const STEPS: PaymentFlowStep[] = [
  "plan",
  "summary",
  "phone",
  "pending",
  "success",
]

type PaymentStepIndicatorProps = {
  currentStep: PaymentFlowStep
}

function stepIndex(step: PaymentFlowStep) {

  if (step === "review") return 2
  if (step === "initiating") return 3

  if (step === "initiating") return 2

  if (step === "verifying") return 3
  if (step === "failed") return 3
  if (step === "success") return 4

  const index = STEPS.indexOf(step)
  return index === -1 ? 0 : index
}

export function PaymentStepIndicator({
  currentStep,
}: PaymentStepIndicatorProps) {
  const t = useTranslations("payment.steps")
  const activeIndex = stepIndex(currentStep)

  const labels = [
    t("plan"),
    t("summary"),
    t("phone"),
    t("pay"),
    t("done"),
  ]

  return (
    <ol className="mb-6 flex items-center justify-between gap-1 sm:gap-2">
      {labels.map((label, index) => {
        const isDone = index < activeIndex
        const isActive = index === activeIndex

        return (
          <li
            key={label}
            className="flex min-w-0 flex-1 flex-col items-center gap-1.5"
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                isDone
                  ? "bg-[#1e3a6d] text-white"
                  : isActive
                    ? "bg-gradient-to-br from-[#2563eb] to-[#1e3a6d] text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-400"
              }`}
            >
              {isDone ? (
                <Check className="h-4 w-4" />
              ) : (
                index + 1
              )}
            </span>
            <span
              className={`hidden text-center text-[10px] font-medium sm:block sm:text-xs ${
                isActive || isDone
                  ? "text-[#1e3a6d]"
                  : "text-slate-400"
              }`}
            >
              {label}
            </span>
          </li>
        )
      })}
    </ol>
  )
}
