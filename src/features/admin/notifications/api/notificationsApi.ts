import { ENV } from "@/config/env"
import { axiosInstance } from "@/lib/axios"
import {
  mockDeleteAllRead,
  mockDeleteNotification,
  mockFetchNotifications,
  mockMarkAllAsRead,
  mockMarkAsRead,
  mockMarkAsUnread,
  getUnreadCount,
} from "../services/notificationsMock.service"
import type {
  AdminNotificationsQuery,
  AdminNotificationsResponse,
} from "@/types/admin-notification"

const USE_MOCK =
  ENV.NOTIFICATIONS_MOCK !== false

export async function fetchAdminNotifications(
  query: AdminNotificationsQuery = {}
): Promise<AdminNotificationsResponse> {
  if (USE_MOCK) {
    return mockFetchNotifications(query)
  }

  const response =
    await axiosInstance.get<AdminNotificationsResponse>(
      "/api/admin/notifications",
      { params: query }
    )

  return response.data
}

export async function fetchUnreadCount(): Promise<number> {
  if (USE_MOCK) {
    await new Promise((r) => setTimeout(r, 100))
    return getUnreadCount()
  }

  const response = await axiosInstance.get<{ count: number }>(
    "/api/admin/notifications/unread-count"
  )

  return response.data.count
}

export async function markNotificationAsRead(id: string) {
  if (USE_MOCK) {
    return mockMarkAsRead(id)
  }

  const response =
    await axiosInstance.patch<AdminNotificationsResponse>(
      `/api/admin/notifications/${id}/read`
    )

  return response.data
}

export async function markNotificationAsUnread(id: string) {
  if (USE_MOCK) {
    return mockMarkAsUnread(id)
  }

  const response =
    await axiosInstance.patch<AdminNotificationsResponse>(
      `/api/admin/notifications/${id}/unread`
    )

  return response.data
}

export async function markAllNotificationsAsRead() {
  if (USE_MOCK) {
    return mockMarkAllAsRead()
  }

  const response =
    await axiosInstance.post<AdminNotificationsResponse>(
      "/api/admin/notifications/read-all"
    )

  return response.data
}

export async function deleteAdminNotification(id: string) {
  if (USE_MOCK) {
    return mockDeleteNotification(id)
  }

  const response =
    await axiosInstance.delete<AdminNotificationsResponse>(
      `/api/admin/notifications/${id}`
    )

  return response.data
}

export async function deleteAllReadNotifications() {
  if (USE_MOCK) {
    return mockDeleteAllRead()
  }

  const response =
    await axiosInstance.delete<AdminNotificationsResponse>(
      "/api/admin/notifications/read"
    )

  return response.data
}
