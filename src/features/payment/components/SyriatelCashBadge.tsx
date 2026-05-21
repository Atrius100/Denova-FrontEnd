"use client"

import { Smartphone } from "lucide-react"
import { useTranslations } from "next-intl"

export function SyriatelCashBadge() {
  const t = useTranslations("payment.syriatel")

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-red-100 bg-gradient-to-l from-[#fff5f5] to-white p-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e60000] text-white shadow-sm">
        <Smartphone className="h-6 w-6" />
      </div>

      <div className="min-w-0">
        <p className="text-sm font-bold text-[#1e3a6d]">
          {t("title")}
        </p>
        <p className="mt-0.5 text-xs leading-5 text-slate-500">
          {t("subtitle")}
        </p>
      </div>
    </div>
  )
}
