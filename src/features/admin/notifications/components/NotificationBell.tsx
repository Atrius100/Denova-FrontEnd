"use client"

import { Bell } from "lucide-react"
import { useTranslations } from "next-intl"
import { useNotificationStore } from "../store/notification.store"
import { NotificationDropdown } from "./NotificationDropdown"

export function NotificationBell() {
  const t = useTranslations("adminNotifications")
  const unreadCount = useNotificationStore(
    (s) => s.unreadCount
  )
  const open = useNotificationStore((s) => s.dropdownOpen)
  const setDropdownOpen = useNotificationStore(
    (s) => s.setDropdownOpen
  )

  const displayCount =
    unreadCount > 99 ? "99+" : unreadCount

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={t("bellLabel")}
        aria-expanded={open}
        onClick={() => setDropdownOpen(!open)}
        className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition ${
          open
            ? "bg-[#f3f9ff] text-[#1e3a6d]"
            : "text-slate-600 hover:bg-slate-100 hover:text-[#1e3a6d]"
        }`}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 ? (
          <span className="absolute -top-0.5 -end-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
            {displayCount}
          </span>
        ) : null}
      </button>

      <NotificationDropdown />
    </div>
  )
}
