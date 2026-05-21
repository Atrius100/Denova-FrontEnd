"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  RefreshCw,
  XCircle,
} from "lucide-react"
import { Spinner } from "@/components/ui/Spinner"
import Button from "@/features/auth/components/ButtonAuth"
import type { PaymentFlowStep } from "@/types/payment"

type PaymentStatusPanelProps = {
  step: PaymentFlowStep
  errorKey?: string | null
  reference?: string
  isLoading?: boolean
  onRetry?: () => void
  onVerify?: () => void
  showVerifyAction?: boolean
}

export function PaymentStatusPanel({
  step,
  errorKey,
  reference,
  isLoading = false,
  onRetry,
  onVerify,
  showVerifyAction = false,
}: PaymentStatusPanelProps) {
  const t = useTranslations("payment.status")
  const tErrors = useTranslations("payment.errors")

  if (
    step === "initiating" ||
    step === "verifying" ||
    (step === "pending" && isLoading)
  ) {
    return (
      <div className="flex flex-col items-center rounded-[1.75rem] border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
        <Spinner />
        <h2 className="mt-6 text-xl font-bold text-[#1e3a6d]">
          {step === "verifying"
            ? t("verifyingTitle")
            : t("processingTitle")}
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-7 text-slate-500">
          {step === "verifying"
            ? t("verifyingDesc")
            : t("processingDesc")}
        </p>
      </div>
    )
  }

  if (step === "pending") {
    return (
      <div className="rounded-[1.75rem] border border-blue-100 bg-white p-6 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
          <Clock3 className="h-8 w-8 text-[#1e3a6d]" />
        </div>
        <h2 className="text-xl font-bold text-[#1e3a6d]">
          {t("pendingTitle")}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-500">
          {t("pendingDesc")}
        </p>
        {reference ? (
          <p className="mt-4 font-mono text-xs text-slate-600">
            {t("reference")}: {reference}
          </p>
        ) : null}

        {showVerifyAction && onVerify ? (
          <div className="mt-6">
            <Button
              type="button"
              onClick={onVerify}
              className="bg-gradient-to-br from-[#2563eb] to-[#1e3a6d]"
            >
              {t("confirmManually")}
            </Button>
          </div>
        ) : null}

        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
          <RefreshCw className="h-3.5 w-3.5 animate-spin" />
          {t("autoChecking")}
        </p>
      </div>
    )
  }

  if (step === "success") {
    return (
      <div className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
        </div>
        <h2 className="text-xl font-bold text-emerald-700">
          {t("successTitle")}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-500">
          {t("successDesc")}
        </p>
        {reference ? (
          <p className="mt-4 font-mono text-xs text-slate-600">
            {t("reference")}: {reference}
          </p>
        ) : null}
        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a6d] px-8 text-sm font-medium text-white shadow-lg"
        >
          {t("backHome")}
        </Link>
      </div>
    )
  }

  if (step === "failed") {
    const message = errorKey
      ? tErrors(errorKey)
      : t("failedDesc")

    return (
      <div className="rounded-[1.75rem] border border-red-100 bg-white p-6 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
          <XCircle className="h-8 w-8 text-red-600" />
        </div>
        <h2 className="text-xl font-bold text-red-600">
          {t("failedTitle")}
        </h2>
        <p className="mx-auto mt-2 flex max-w-md items-start justify-center gap-2 text-sm leading-7 text-slate-500">
          <AlertCircle className="mt-1 h-4 w-4 shrink-0 text-red-500" />
          <span>{message}</span>
        </p>
        {onRetry ? (
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Button
              type="button"
              onClick={onRetry}
              className="bg-gradient-to-br from-[#2563eb] to-[#1e3a6d]"
            >
              {t("retry")}
            </Button>
          </div>
        ) : null}
      </div>
    )
  }

  return null
}
