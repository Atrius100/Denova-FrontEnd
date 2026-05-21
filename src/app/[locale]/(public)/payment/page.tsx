"use client"

import { Suspense } from "react"
import { PaymentCheckout } from "@/features/payment/components/PaymentCheckout"
import { Spinner } from "@/components/ui/Spinner"

function PaymentFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Spinner />
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<PaymentFallback />}>
      <PaymentCheckout />
    </Suspense>
  )
}
