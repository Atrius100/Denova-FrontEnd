"use client"

import { BellOff } from "lucide-react"
import { useTranslations } from "next-intl"

type NotificationEmptyStateProps = {
  variant?: "inbox" | "dropdown"
}

export function NotificationEmptyState({
  variant = "inbox",
}: NotificationEmptyStateProps) {
  const t = useTranslations("adminNotifications.empty")

  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        variant === "dropdown" ? "py-10 px-4" : "py-16"
      }`}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
        <BellOff className="h-8 w-8 text-slate-400" />
      </div>
      <h3 className="text-base font-bold text-[#1e3a6d]">
        {t("title")}
      </h3>
      <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
        {variant === "dropdown"
          ? t("dropdownDesc")
          : t("inboxDesc")}
      </p>
    </div>
  )
}
