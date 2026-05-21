"use client"

import { useTranslations } from "next-intl"
import { CircleAlert, MessageSquare } from "lucide-react"

type SyriatelInstructionsProps = {
  instructionKeys?: string[]
  amount: number
  phone: string
}

export function SyriatelInstructions({
  instructionKeys,
  amount,
  phone,
}: SyriatelInstructionsProps) {
  const t = useTranslations("payment.instructions")

  const steps =
    instructionKeys?.length
      ? instructionKeys.map((key) => t(key))
      : [
          t("openSyriatelApp"),
          t("confirmAmount"),
          t("enterPin"),
          t("waitConfirmation"),
        ]

  return (
    <div className="rounded-[1.75rem] border border-amber-100 bg-amber-50/60 p-5">
      <div className="mb-3 flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-amber-700" />
        <h3 className="font-bold text-amber-900">
          {t("title")}
        </h3>
      </div>

      <ol className="space-y-2.5 text-sm leading-7 text-amber-950">
        {steps.map((step, index) => (
          <li
            key={step}
            className="flex gap-3"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-900">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <div className="mt-4 rounded-xl bg-white/80 px-4 py-3 text-xs leading-6 text-slate-600">
        <p>
          {t("amountHint", {
            amount: amount.toLocaleString("ar-SY"),
            phone,
          })}
        </p>
      </div>

      <p className="mt-3 flex items-start gap-2 text-xs leading-6 text-amber-800">
        <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
        {t("ussdNote")}
      </p>
    </div>
  )
}
