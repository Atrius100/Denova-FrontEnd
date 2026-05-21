export type AdminNotificationType =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "payment"
  | "security"
  | "admin_activity"
  | "approval"
  | "reminder"
  | "system"

export type AdminNotificationCategory =
  | "system"
  | "payment"
  | "security"
  | "admin"
  | "approval"

export type AdminNotification = {
  id: string
  type: AdminNotificationType
  category: AdminNotificationCategory
  title: string
  message: string
  read: boolean
  createdAt: string
  actionUrl?: string
  actorName?: string
  metadata?: Record<string, unknown>
}

export type AdminNotificationFilter =
  | "all"
  | "unread"
  | "payment"
  | "security"
  | "system"
  | "admin"

export type AdminNotificationsQuery = {
  page?: number
  pageSize?: number
  filter?: AdminNotificationFilter
}

export type AdminNotificationsResponse = {
  items: AdminNotification[]
  total: number
  page: number
  pageSize: number
  unreadCount: number
}

export type AdminNotificationEvent = {
  eventId: string
  type: "notification.created" | "notification.updated" | "notification.deleted"
  notification: AdminNotification
  timestamp: string
}
