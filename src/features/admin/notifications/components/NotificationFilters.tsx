"use client"

import { useTranslations } from "next-intl"
import type { AdminNotificationFilter } from "@/types/admin-notification"

const FILTERS: AdminNotificationFilter[] = [
  "all",
  "unread",
  "payment",
  "security",
  "system",
  "admin",
]

type NotificationFiltersProps = {
  active: AdminNotificationFilter
  onChange: (filter: AdminNotificationFilter) => void
}

export function NotificationFilters({
  active,
  onChange,
}: NotificationFiltersProps) {
  const t = useTranslations("adminNotifications.filters")

  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((filter) => {
        const isActive = active === filter

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`flex h-10 items-center rounded-2xl px-4 text-sm font-medium transition ${
              isActive
                ? "bg-gradient-to-r from-[#1e3a6d] to-[#3b82f6] text-white shadow-md"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50"
            }`}
          >
            {t(filter)}
          </button>
        )
      })}
    </div>
  )
}
