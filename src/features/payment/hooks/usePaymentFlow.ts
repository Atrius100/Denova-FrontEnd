"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import {
  getPlanById,
  SUBSCRIPTION_PLANS,
  SYRIATEL_PHONE_REGEX,
} from "@/config/payment"
import type {
  PaymentFlowStep,
  PaymentTransaction,
  SubscriptionPlanId,
} from "@/types/payment"
import { useCreatePayment } from "./useCreatePayment"
import { usePaymentStatus } from "./usePaymentStatus"
import { useVerifyPayment } from "./useVerifyPayment"

type UsePaymentFlowOptions = {
  initialPlanId?: string | null
}

export function usePaymentFlow(
  options: UsePaymentFlowOptions = {}
) {
  const [step, setStep] =
    useState<PaymentFlowStep>("plan")
  const [selectedPlanId, setSelectedPlanId] =
    useState<SubscriptionPlanId>(
      (getPlanById(options.initialPlanId || null)
        ?.id as SubscriptionPlanId) ||
        "semester"
    )
  const [phone, setPhone] = useState("")
  const [confirmationCode, setConfirmationCode] =
    useState("")
  const [transaction, setTransaction] =
    useState<PaymentTransaction | null>(null)
  const [localError, setLocalError] =
    useState<string | null>(null)

  const createPayment = useCreatePayment()
  const verifyPayment = useVerifyPayment()

  const selectedPlan = useMemo(
    () => getPlanById(selectedPlanId),
    [selectedPlanId]
  )

  const statusQuery = usePaymentStatus(
    transaction?.id ?? null,
    step === "pending" || step === "verifying"
  )

  const goToSummary = useCallback(() => {
    setLocalError(null)
    setStep("summary")
  }, [])

  const goToPhone = useCallback(() => {
    setLocalError(null)
    setStep("phone")
  }, [])

  const resetFlow = useCallback(() => {
    setStep("plan")
    setPhone("")
    setConfirmationCode("")
    setTransaction(null)
    setLocalError(null)
    createPayment.reset()
    verifyPayment.reset()
  }, [createPayment, verifyPayment])

  const initiatePayment = useCallback(() => {
    if (!selectedPlan) return

    const normalizedPhone = phone
      .replace(/\s/g, "")
      .trim()

    if (!SYRIATEL_PHONE_REGEX.test(normalizedPhone)) {
      setLocalError("invalidPhone")
      return
    }

    setLocalError(null)
    setStep("initiating")

    createPayment.mutate(
      {
        phone: normalizedPhone,
        amount: selectedPlan.amountSyp,
        currency: "SYP",
        method: "syriatel_cash",
        purpose: "subscription",
        planId: selectedPlan.id,
        metadata: {
          planName: selectedPlan.id,
        },
      },
      {
        onSuccess: (response) => {
          setTransaction(response.transaction)
          setStep("pending")
        },
        onError: () => {
          setStep("failed")
          setLocalError("createFailed")
        },
      }
    )
  }, [createPayment, phone, selectedPlan])

  const submitVerification = useCallback(() => {
    if (!transaction) return

    setLocalError(null)
    setStep("verifying")

    verifyPayment.mutate(
      {
        transactionId: transaction.id,
        confirmationCode:
          confirmationCode.trim() || undefined,
      },
      {
        onSuccess: (response) => {
          setTransaction(response.transaction)
          applyTerminalStep(response.transaction.status)
        },
        onError: () => {
          setLocalError("verifyFailed")
          setStep("pending")
        },
      }
    )
  }, [
    confirmationCode,
    transaction,
    verifyPayment,
  ])

  const applyTerminalStep = useCallback(
    (status: PaymentTransaction["status"]) => {
      if (status === "completed") {
        setStep("success")
        return
      }

      if (
        status === "failed" ||
        status === "expired"
      ) {
        setStep("failed")
        return
      }

      setStep("pending")
    },
    []
  )

  useEffect(() => {
    if (!statusQuery.data || step !== "pending") {
      return
    }

    setTransaction(statusQuery.data)

    if (
      statusQuery.data.status === "completed" ||
      statusQuery.data.status === "failed" ||
      statusQuery.data.status === "expired"
    ) {
      if (statusQuery.data.failureReason) {
        setLocalError(statusQuery.data.failureReason)
      }

      applyTerminalStep(statusQuery.data.status)
    }
  }, [applyTerminalStep, statusQuery.data, step])

  useEffect(() => {
    if (
      step === "pending" &&
      statusQuery.isError
    ) {
      setLocalError("statusFailed")
    }
  }, [statusQuery.isError, step])

  const retryPayment = useCallback(() => {
    if (transaction) {
      setStep("phone")
      setLocalError(null)
      return
    }

    resetFlow()
  }, [resetFlow, transaction])

  return {
    step,
    setStep,
    selectedPlanId,
    setSelectedPlanId,
    selectedPlan,
    plans: SUBSCRIPTION_PLANS,
    phone,
    setPhone,
    confirmationCode,
    setConfirmationCode,
    transaction,
    localError,
    setLocalError,
    goToSummary,
    goToPhone,
    initiatePayment,
    submitVerification,
    resetFlow,
    retryPayment,
    createPayment,
    verifyPayment,
    statusQuery,
    isPolling: statusQuery.isFetching,
  }
}
