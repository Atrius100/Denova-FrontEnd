"use client"

import { useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { Phone } from "lucide-react"
import { InputField } from "@/features/auth/components/InputFailed"
import Button from "@/features/auth/components/ButtonAuth"
import { ToothPattern } from "@/components/ui/ToothBattren"
import { Logo } from "@/features/auth/components/Logo"
import { usePaymentFlow } from "../hooks/usePaymentFlow"
import { PaymentStepIndicator } from "./PaymentStepIndicator"
import { PlanSelector } from "./PlanSelector"
import { OrderSummary } from "./OrderSummary"
import { SyriatelCashBadge } from "./SyriatelCashBadge"
import { SyriatelInstructions } from "./SyriatelInstructions"
import { PaymentStatusPanel } from "./PaymentStatusPanel"
import type { SubscriptionPlanId } from "@/types/payment"

export function PaymentCheckout() {
  const t = useTranslations("payment")
  const tErrors = useTranslations("payment.errors")
  const searchParams = useSearchParams()
  const initialPlan =
    searchParams.get("plan")

  const flow = usePaymentFlow({
    initialPlanId: initialPlan,
  })

  const {
    step,
    selectedPlanId,
    setSelectedPlanId,
    selectedPlan,
    plans,
    phone,
    setPhone,
    confirmationCode,
    setConfirmationCode,
    transaction,
    localError,
    goToSummary,
    goToPhone,
    initiatePayment,
    submitVerification,
    retryPayment,
    createPayment,
    verifyPayment,
    isPolling,
  } = flow

  const isTerminal =
    step === "success" || step === "failed"

  const showStatusPanel = [
    "initiating",
    "verifying",
    "success",
    "failed",
  ].includes(step)

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f3f9ff_0%,#ffffff_52%,#eef7ff_100%)] py-8 md:py-12">
      <ToothPattern
        patternId="payment-pattern"
        stroke="#cbd5e1"
        opacity={0.2}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mb-6 flex flex-col items-center text-center">
          <Logo />
          <h1 className="mt-3 text-2xl font-bold text-[var(--denova-primary)] md:text-3xl">
            {t("pageTitle")}
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500">
            {t("pageSubtitle")}
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-white/60 bg-white/80 p-4 shadow-[0_25px_80px_rgba(30,58,109,0.12)] backdrop-blur-xl sm:p-6 md:p-8">
          <PaymentStepIndicator currentStep={step} />

          <div className="grid gap-6 lg:grid-cols-5">
            <div className="space-y-5 lg:col-span-3">
              {!isTerminal && step === "plan" && (
                <>
                  <PlanSelector
                    plans={plans}
                    selectedPlanId={selectedPlanId}
                    onSelect={(id) =>
                      setSelectedPlanId(
                        id as SubscriptionPlanId
                      )
                    }
                  />
                  <Button
                    type="button"
                    onClick={goToSummary}
                    className="bg-gradient-to-br from-[#2563eb] to-[#1e3a6d]"
                  >
                    {t("continue")}
                  </Button>
                </>
              )}

              {!isTerminal && step === "summary" && selectedPlan && (
                <>
                  <SyriatelCashBadge />
                  <OrderSummary plan={selectedPlan} />
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button
                      type="button"
                      onClick={() =>
                        flow.setStep("plan")
                      }
                      className="border border-slate-200 bg-white text-[#1e3a6d] shadow-none hover:bg-slate-50"
                    >
                      {t("back")}
                    </Button>
                    <Button
                      type="button"
                      onClick={goToPhone}
                      className="bg-gradient-to-br from-[#2563eb] to-[#1e3a6d]"
                    >
                      {t("proceedToPay")}
                    </Button>
                  </div>
                </>
              )}

              {!isTerminal && step === "phone" && selectedPlan && (
                <>
                  <SyriatelCashBadge />
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-1 text-lg font-bold text-[#1e3a6d]">
                      {t("phoneTitle")}
                    </h2>
                    <p className="mb-4 text-sm leading-6 text-slate-500">
                      {t("phoneSubtitle")}
                    </p>

                    <InputField
                      id="syriatelPhone"
                      label={t("phoneLabel")}
                      type="tel"
                      inputMode="numeric"
                      placeholder="0944123456"
                      value={phone}
                      onChange={(event) =>
                        setPhone(
                          event.target.value
                        )
                      }
                      icon={
                        <Phone className="h-4 w-4" />
                      }
                      required
                      dir="ltr"
                      className="text-start"
                    />

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {t("phoneHint")}
                    </p>

                    {localError ? (
                      <p className="mt-3 text-sm text-red-600">
                        {tErrors(localError)}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button
                      type="button"
                      onClick={() =>
                        flow.setStep("summary")
                      }
                      className="border border-slate-200 bg-white text-[#1e3a6d] shadow-none hover:bg-slate-50"
                    >
                      {t("back")}
                    </Button>
                    <Button
                      type="button"
                      onClick={initiatePayment}
                      isLoading={
                        createPayment.isPending
                      }
                      loadingText={t(
                        "initiating"
                      )}
                      className="bg-gradient-to-br from-[#2563eb] to-[#1e3a6d]"
                    >
                      {t("payNow")}
                    </Button>
                  </div>
                </>
              )}

              {!isTerminal &&
                (step === "pending" ||
                  step === "initiating") &&
                selectedPlan &&
                transaction && (
                  <>
                    <SyriatelInstructions
                      amount={transaction.amount}
                      phone={transaction.phone}
                    />

                    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                      <h3 className="mb-2 text-sm font-bold text-[#1e3a6d]">
                        {t("verificationOptionalTitle")}
                      </h3>
                      <p className="mb-3 text-xs leading-6 text-slate-500">
                        {t("verificationOptionalDesc")}
                      </p>
                      <InputField
                        id="confirmationCode"
                        label={t(
                          "confirmationCodeLabel"
                        )}
                        placeholder="1234"
                        value={confirmationCode}
                        onChange={(event) =>
                          setConfirmationCode(
                            event.target.value
                          )
                        }
                        dir="ltr"
                        className="text-start"
                      />
                      <div className="mt-4">
                        <Button
                          type="button"
                          onClick={
                            submitVerification
                          }
                          isLoading={
                            verifyPayment.isPending
                          }
                          loadingText={t(
                            "verifying"
                          )}
                          className="bg-gradient-to-br from-[#2563eb] to-[#1e3a6d]"
                        >
                          {t("confirmPayment")}
                        </Button>
                      </div>
                    </div>
                  </>
                )}

              {step === "pending" &&
                transaction && (
                  <PaymentStatusPanel
                    step="pending"
                    reference={transaction.reference}
                    isLoading={isPolling}
                    onVerify={submitVerification}
                    showVerifyAction={false}
                  />
                )}

              {showStatusPanel ? (
                <PaymentStatusPanel
                  step={step}
                  errorKey={localError}
                  reference={
                    transaction?.reference
                  }
                  isLoading={
                    createPayment.isPending ||
                    verifyPayment.isPending ||
                    isPolling
                  }
                  onRetry={retryPayment}
                  onVerify={submitVerification}
                  showVerifyAction={
                    step === "pending"
                  }
                />
              ) : null}
            </div>

            <aside className="lg:col-span-2">
              {selectedPlan ? (
                <div className="sticky top-24 space-y-4">
                  <OrderSummary
                    plan={selectedPlan}
                    transaction={transaction}
                  />

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-xs leading-6 text-slate-600">
                    <p className="font-semibold text-[#1e3a6d]">
                      {t("helpTitle")}
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1">
                      <li>{t("helpTip1")}</li>
                      <li>{t("helpTip2")}</li>
                      <li>{t("helpTip3")}</li>
                    </ul>
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
