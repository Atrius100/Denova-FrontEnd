"use client"

import { PropsWithChildren, useEffect } from "react"
import { useNotificationRealtime } from "../hooks/useNotificationRealtime"
import { useAdminNotifications } from "../hooks/useAdminNotifications"
import { useNotificationStore } from "../store/notification.store"

export function AdminNotificationProvider({
  children,
}: PropsWithChildren) {
  useNotificationRealtime({ enabled: true })

  const { data } = useAdminNotifications({
    page: 1,
    pageSize: 1,
    filter: "all",
  })

  const setUnreadCount = useNotificationStore(
    (s) => s.setUnreadCount
  )

  useEffect(() => {
    if (data) {
      setUnreadCount(data.unreadCount)
    }
  }, [data, setUnreadCount])

  return <>{children}</>
}
