"use client"

import { useEffect } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { fetchUnreadCount } from "../api/notificationsApi"
import { createPollingTransport } from "../transport/notificationTransport"
import { useNotificationStore } from "../store/notification.store"
import { ENV } from "@/config/env"

type UseNotificationRealtimeOptions = {
  enabled?: boolean
}

export function useNotificationRealtime(
  options: UseNotificationRealtimeOptions = {}
) {
  const { enabled = true } = options
  const queryClient = useQueryClient()
  const setUnreadCount = useNotificationStore(
    (s) => s.setUnreadCount
  )
  const setTransportStatus = useNotificationStore(
    (s) => s.setTransportStatus
  )
  const prependNotification = useNotificationStore(
    (s) => s.prependNotification
  )

  useEffect(() => {
    if (!enabled) return

    async function syncUnread() {
      const count = await fetchUnreadCount()
      setUnreadCount(count)
    }

    syncUnread()

    const transport = createPollingTransport(
      60_000,
      ENV.NOTIFICATIONS_MOCK
    )

    const disconnect = transport.connect(
      (event) => {
        if (event.type === "notification.created") {
          prependNotification(event.notification)
          queryClient.invalidateQueries({
            queryKey: ["admin-notifications"],
          })
          syncUnread()
        }
      },
      setTransportStatus
    )

    const refreshInterval = setInterval(() => {
      syncUnread()
      queryClient.invalidateQueries({
        queryKey: ["admin-notifications"],
      })
    }, 60_000)

    return () => {
      disconnect()
      clearInterval(refreshInterval)
      setTransportStatus("idle")
    }
  }, [
    enabled,
    prependNotification,
    queryClient,
    setTransportStatus,
    setUnreadCount,
  ])
}
