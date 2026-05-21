import type { AdminNotificationEvent } from "@/types/admin-notification"
import { mockPushRandomNotification } from "../services/notificationsMock.service"

export type TransportStatus =
  | "idle"
  | "connecting"
  | "connected"
  | "disconnected"
  | "polling"

export type NotificationTransport = {
  connect: (
    onEvent: (event: AdminNotificationEvent) => void,
    onStatus?: (status: TransportStatus) => void
  ) => () => void
}

/**
 * Polling transport — swap for WebSocket/SSE/Firebase without UI changes.
 */
export function createPollingTransport(
  intervalMs = 45_000,
  simulateEvents = false
): NotificationTransport {
  return {
    connect(onEvent, onStatus) {
      onStatus?.("polling")

      const interval = setInterval(() => {
        if (!simulateEvents) return

        const notification = mockPushRandomNotification()
        onEvent({
          eventId: `evt_${Date.now()}`,
          type: "notification.created",
          notification,
          timestamp: new Date().toISOString(),
        })
      }, intervalMs)

      return () => {
        clearInterval(interval)
        onStatus?.("disconnected")
      }
    },
  }
}

/** WebSocket transport stub — implement when backend is ready */
export function createWebSocketTransport(
  _url: string
): NotificationTransport {
  return {
    connect(_onEvent, onStatus) {
      onStatus?.("connecting")
      onStatus?.("disconnected")
      return () => undefined
    },
  }
}

/** SSE transport stub */
export function createSseTransport(
  _url: string
): NotificationTransport {
  return createWebSocketTransport(_url)
}
