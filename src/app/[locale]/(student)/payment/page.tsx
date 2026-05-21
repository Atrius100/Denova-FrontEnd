"use client"

import { Suspense } from "react"
import { PaymentCheckout } from "@/features/payment/components/PaymentCheckout"
import { Spinner } from "@/components/ui/Spinner"

export default function StudentPaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[40vh] items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <PaymentCheckout />
    </Suspense>
  )
}
