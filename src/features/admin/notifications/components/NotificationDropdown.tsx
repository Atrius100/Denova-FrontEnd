"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { CheckCheck } from "lucide-react"
import { useAdminNotifications } from "../hooks/useAdminNotifications"
import { useNotificationMutations } from "../hooks/useNotificationMutations"
import { useNotificationStore } from "../store/notification.store"
import { NotificationItem } from "./NotificationItem"
import { NotificationEmptyState } from "./NotificationEmptyState"
import { NotificationSkeleton } from "./NotificationSkeleton"

export function NotificationDropdown() {
  const t = useTranslations("adminNotifications")
  const dropdownRef = useRef<HTMLDivElement>(null)
  const open = useNotificationStore((s) => s.dropdownOpen)
  const setDropdownOpen = useNotificationStore(
    (s) => s.setDropdownOpen
  )

  const { data, isLoading, isError, refetch } =
    useAdminNotifications({
      page: 1,
      pageSize: 6,
      filter: "all",
      enabled: open,
    })

  const mutations = useNotificationMutations()

  useEffect(() => {
    if (!open) return

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setDropdownOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false)
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    )
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      )
      document.removeEventListener(
        "keydown",
        handleEscape
      )
    }
  }, [open, setDropdownOpen])

  if (!open) return null

  return (
    <div
      ref={dropdownRef}
      className="absolute end-0 top-full z-50 mt-2 w-[min(100vw-2rem,380px)] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(30,58,109,0.18)]"
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <h3 className="font-bold text-[#1e3a6d]">
          {t("dropdownTitle")}
        </h3>
        <button
          type="button"
          onClick={() => mutations.markAllRead.mutate()}
          disabled={mutations.isLoading}
          className="flex items-center gap-1 text-xs font-medium text-[#1e3a6d] hover:underline disabled:opacity-50"
        >
          <CheckCheck className="h-3.5 w-3.5" />
          {t("markAllRead")}
        </button>
      </div>

      <div className="max-h-[min(60vh,400px)] overflow-y-auto p-2">
        {isLoading ? (
          <NotificationSkeleton count={4} />
        ) : isError ? (
          <div className="p-4 text-center">
            <p className="text-sm text-red-600">
              {t("loadError")}
            </p>
            <button
              type="button"
              onClick={() => refetch()}
              className="mt-2 text-xs font-medium text-[#1e3a6d] underline"
            >
              {t("retry")}
            </button>
          </div>
        ) : !data?.items.length ? (
          <NotificationEmptyState variant="dropdown" />
        ) : (
          <div className="space-y-2">
            {data.items.map((item) => (
              <NotificationItem
                key={item.id}
                notification={item}
                compact
                onMarkRead={(id) =>
                  mutations.markRead.mutate(id)
                }
                onDelete={(id) =>
                  mutations.remove.mutate(id)
                }
                onNavigate={() =>
                  setDropdownOpen(false)
                }
              />
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-slate-100 p-3">
        <Link
          href="/notifications"
          onClick={() => setDropdownOpen(false)}
          className="flex h-10 w-full items-center justify-center rounded-xl bg-[#f3f9ff] text-sm font-semibold text-[#1e3a6d] transition hover:bg-blue-100"
        >
          {t("viewAll")}
        </Link>
      </div>
    </div>
  )
}
