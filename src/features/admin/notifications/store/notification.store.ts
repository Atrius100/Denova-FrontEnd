import { create } from "zustand"
import type { AdminNotification } from "@/types/admin-notification"
import type { TransportStatus } from "../transport/notificationTransport"

type NotificationStore = {
  unreadCount: number
  setUnreadCount: (count: number) => void
  transportStatus: TransportStatus
  setTransportStatus: (status: TransportStatus) => void
  prependNotification: (notification: AdminNotification) => void
  dropdownOpen: boolean
  setDropdownOpen: (open: boolean) => void
}

export const useNotificationStore = create<NotificationStore>(
  (set) => ({
    unreadCount: 0,
    setUnreadCount: (unreadCount) => set({ unreadCount }),
    transportStatus: "idle",
    setTransportStatus: (transportStatus) =>
      set({ transportStatus }),
    prependNotification: (notification) =>
      set((state) => ({
        unreadCount: notification.read
          ? state.unreadCount
          : state.unreadCount + 1,
      })),
    dropdownOpen: false,
    setDropdownOpen: (dropdownOpen) => set({ dropdownOpen }),
  })
)
