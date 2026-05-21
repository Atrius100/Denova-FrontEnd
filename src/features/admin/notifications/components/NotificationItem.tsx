"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import {
  Check,
  Mail,
  Trash2,
} from "lucide-react"
import type { AdminNotification } from "@/types/admin-notification"
import {
  formatNotificationTime,
  getNotificationIcon,
  getNotificationStyles,
} from "../utils/notificationMeta"

type NotificationItemProps = {
  notification: AdminNotification
  compact?: boolean
  onMarkRead?: (id: string) => void
  onMarkUnread?: (id: string) => void
  onDelete?: (id: string) => void
  onNavigate?: () => void
}

export function NotificationItem({
  notification,
  compact = false,
  onMarkRead,
  onMarkUnread,
  onDelete,
  onNavigate,
}: NotificationItemProps) {
  const t = useTranslations("adminNotifications")
  const tItems = useTranslations("adminNotifications.items")
  const locale = useLocale()

  const Icon = getNotificationIcon(notification.type)
  const styles = getNotificationStyles(notification.type)

  const title = tItems(notification.title)
  const message = tItems(notification.message)

  const content = (
    <div
      className={`group relative flex gap-3 rounded-2xl border transition ${
        notification.read
          ? "border-slate-100 bg-white"
          : "border-blue-100 bg-[#f8fbff] shadow-sm"
      } ${compact ? "p-3" : "p-4 hover:shadow-md"}`}
    >
      {!notification.read ? (
        <span
          className={`absolute top-4 end-3 h-2 w-2 rounded-full ${styles.dot}`}
        />
      ) : null}

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles.iconBg}`}
      >
        <Icon className={`h-5 w-5 ${styles.iconColor}`} />
      </div>

      <div className="min-w-0 flex-1 pe-4">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-slate-800">
            {title}
          </p>
          <span className="shrink-0 text-[10px] text-slate-400">
            {formatNotificationTime(
              notification.createdAt,
              locale
            )}
          </span>
        </div>
        <p className="mt-1 text-xs leading-5 text-slate-500 line-clamp-2">
          {message}
        </p>
        {notification.actorName ? (
          <p className="mt-1 text-[10px] text-slate-400">
            {t("byActor", {
              name: notification.actorName,
            })}
          </p>
        ) : null}
      </div>

      {!compact ? (
        <div className="flex shrink-0 flex-col gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
          {notification.read ? (
            onMarkUnread ? (
              <button
                type="button"
                title={t("markUnread")}
                onClick={() =>
                  onMarkUnread(notification.id)
                }
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-[#1e3a6d]"
              >
                <Mail className="h-4 w-4" />
              </button>
            ) : null
          ) : onMarkRead ? (
            <button
              type="button"
              title={t("markRead")}
              onClick={() =>
                onMarkRead(notification.id)
              }
              className="rounded-lg p-1.5 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600"
            >
              <Check className="h-4 w-4" />
            </button>
          ) : null}
          {onDelete ? (
            <button
              type="button"
              title={t("delete")}
              onClick={() =>
                onDelete(notification.id)
              }
              className="rounded-lg p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-500"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  )

  if (notification.actionUrl) {
    return (
      <Link
        href={notification.actionUrl}
        onClick={onNavigate}
        className="block"
      >
        {content}
      </Link>
    )
  }

  return content
}
