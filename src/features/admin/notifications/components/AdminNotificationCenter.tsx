"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { AlertCircle, CheckCheck, Trash2 } from "lucide-react"
import Pagination from "@/components/CommonApp/Pagination"
import type { AdminNotificationFilter } from "@/types/admin-notification"
import { useAdminNotifications } from "../hooks/useAdminNotifications"
import { useNotificationMutations } from "../hooks/useNotificationMutations"
import { useNotificationStore } from "../store/notification.store"
import { NotificationFilters } from "./NotificationFilters"
import { NotificationItem } from "./NotificationItem"
import { NotificationEmptyState } from "./NotificationEmptyState"
import { NotificationSkeleton } from "./NotificationSkeleton"

const PAGE_SIZE = 8

export function AdminNotificationCenter() {
  const t = useTranslations("adminNotifications")
  const [filter, setFilter] =
    useState<AdminNotificationFilter>("all")
  const [page, setPage] = useState(1)

  const { data, isLoading, isError, refetch } =
    useAdminNotifications({
      page,
      pageSize: PAGE_SIZE,
      filter,
    })

  const mutations = useNotificationMutations()
  const unreadCount = useNotificationStore(
    (s) => s.unreadCount
  )

  const totalPages = data
    ? Math.ceil(data.total / PAGE_SIZE)
    : 1

  function handleFilterChange(
    next: AdminNotificationFilter
  ) {
    setFilter(next)
    setPage(1)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a6d] md:text-3xl">
            {t("pageTitle")}
          </h1>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            {t("pageSubtitle")}
          </p>
          {unreadCount > 0 ? (
            <p className="mt-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#1e3a6d]">
              {t("unreadBadge", { count: unreadCount })}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => mutations.markAllRead.mutate()}
            disabled={
              mutations.isLoading || unreadCount === 0
            }
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
          >
            <CheckCheck className="h-4 w-4" />
            {t("markAllRead")}
          </button>
          <button
            type="button"
            onClick={() =>
              mutations.removeAllRead.mutate()
            }
            disabled={mutations.isLoading}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:opacity-50"
          >
            <Trash2 className="h-4 w-4" />
            {t("deleteRead")}
          </button>
        </div>
      </div>

      <NotificationFilters
        active={filter}
        onChange={handleFilterChange}
      />

      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        {isLoading ? (
          <NotificationSkeleton count={5} />
        ) : isError ? (
          <div className="flex flex-col items-center py-12 text-center">
            <AlertCircle className="h-10 w-10 text-red-500" />
            <p className="mt-4 text-sm text-red-600">
              {t("loadError")}
            </p>
            <button
              type="button"
              onClick={() => refetch()}
              className="mt-4 rounded-xl bg-[#1e3a6d] px-5 py-2 text-sm text-white"
            >
              {t("retry")}
            </button>
          </div>
        ) : !data?.items.length ? (
          <NotificationEmptyState />
        ) : (
          <>
            <div className="space-y-3">
              {data.items.map((item) => (
                <NotificationItem
                  key={item.id}
                  notification={item}
                  onMarkRead={(id) =>
                    mutations.markRead.mutate(id)
                  }
                  onMarkUnread={(id) =>
                    mutations.markUnread.mutate(id)
                  }
                  onDelete={(id) =>
                    mutations.remove.mutate(id)
                  }
                />
              ))}
            </div>

            {totalPages > 1 ? (
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  )
}
