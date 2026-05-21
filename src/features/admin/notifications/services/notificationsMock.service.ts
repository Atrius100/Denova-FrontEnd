import type {
  AdminNotification,
  AdminNotificationFilter,
  AdminNotificationsQuery,
  AdminNotificationsResponse,
} from "@/types/admin-notification"

const seedNotifications: AdminNotification[] = [
  {
    id: "ntf_001",
    type: "payment",
    category: "payment",
    title: "paymentReceived",
    message: "paymentReceivedMsg",
    read: false,
    createdAt: new Date(Date.now() - 5 * 60_000).toISOString(),
    actionUrl: "/settings/payment",
    metadata: { amount: 200000, reference: "DNV-ABC123" },
  },
  {
    id: "ntf_002",
    type: "security",
    category: "security",
    title: "loginAttempt",
    message: "loginAttemptMsg",
    read: false,
    createdAt: new Date(Date.now() - 20 * 60_000).toISOString(),
    metadata: { ip: "185.123.45.10" },
  },
  {
    id: "ntf_003",
    type: "admin_activity",
    category: "admin",
    title: "settingsUpdated",
    message: "settingsUpdatedMsg",
    read: false,
    createdAt: new Date(Date.now() - 45 * 60_000).toISOString(),
    actionUrl: "/settings/general",
    actorName: "Admin User",
  },
  {
    id: "ntf_004",
    type: "approval",
    category: "approval",
    title: "casePendingApproval",
    message: "casePendingApprovalMsg",
    read: true,
    createdAt: new Date(Date.now() - 2 * 3600_000).toISOString(),
    actionUrl: "/casesAdmin",
  },
  {
    id: "ntf_005",
    type: "system",
    category: "system",
    title: "systemBackup",
    message: "systemBackupMsg",
    read: true,
    createdAt: new Date(Date.now() - 5 * 3600_000).toISOString(),
  },
  {
    id: "ntf_006",
    type: "warning",
    category: "system",
    title: "maintenanceScheduled",
    message: "maintenanceScheduledMsg",
    read: false,
    createdAt: new Date(Date.now() - 8 * 3600_000).toISOString(),
  },
  {
    id: "ntf_007",
    type: "success",
    category: "admin",
    title: "studentRegistered",
    message: "studentRegisteredMsg",
    read: true,
    createdAt: new Date(Date.now() - 24 * 3600_000).toISOString(),
    actionUrl: "/students",
  },
  {
    id: "ntf_008",
    type: "error",
    category: "payment",
    title: "paymentFailed",
    message: "paymentFailedMsg",
    read: true,
    createdAt: new Date(Date.now() - 30 * 3600_000).toISOString(),
  },
  {
    id: "ntf_009",
    type: "reminder",
    category: "admin",
    title: "reviewSubscriptions",
    message: "reviewSubscriptionsMsg",
    read: false,
    createdAt: new Date(Date.now() - 48 * 3600_000).toISOString(),
    actionUrl: "/settings/subscription",
  },
  {
    id: "ntf_010",
    type: "info",
    category: "system",
    title: "apiConnected",
    message: "apiConnectedMsg",
    read: true,
    createdAt: new Date(Date.now() - 72 * 3600_000).toISOString(),
    actionUrl: "/settings/integrations",
  },
]

let notificationsStore: AdminNotification[] = [
  ...seedNotifications,
]

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function filterItems(
  items: AdminNotification[],
  filter: AdminNotificationFilter
) {
  switch (filter) {
    case "unread":
      return items.filter((n) => !n.read)
    case "payment":
      return items.filter((n) => n.category === "payment")
    case "security":
      return items.filter((n) => n.category === "security")
    case "system":
      return items.filter((n) => n.category === "system")
    case "admin":
      return items.filter((n) => n.category === "admin")
    default:
      return items
  }
}

export function getUnreadCount() {
  return notificationsStore.filter((n) => !n.read).length
}

export async function mockFetchNotifications(
  query: AdminNotificationsQuery = {}
): Promise<AdminNotificationsResponse> {
  await delay(500)

  const page = query.page ?? 1
  const pageSize = query.pageSize ?? 10
  const filter = query.filter ?? "all"

  const sorted = [...notificationsStore].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  )

  const filtered = filterItems(sorted, filter)
  const start = (page - 1) * pageSize
  const items = filtered.slice(start, start + pageSize)

  return {
    items,
    total: filtered.length,
    page,
    pageSize,
    unreadCount: getUnreadCount(),
  }
}

export async function mockMarkAsRead(id: string) {
  await delay(200)
  notificationsStore = notificationsStore.map((n) =>
    n.id === id ? { ...n, read: true } : n
  )
  return mockFetchNotifications({ page: 1, pageSize: 5 })
}

export async function mockMarkAsUnread(id: string) {
  await delay(200)
  notificationsStore = notificationsStore.map((n) =>
    n.id === id ? { ...n, read: false } : n
  )
  return mockFetchNotifications({ page: 1, pageSize: 5 })
}

export async function mockMarkAllAsRead() {
  await delay(300)
  notificationsStore = notificationsStore.map((n) => ({
    ...n,
    read: true,
  }))
  return mockFetchNotifications({ page: 1, pageSize: 10 })
}

export async function mockDeleteNotification(id: string) {
  await delay(250)
  notificationsStore = notificationsStore.filter(
    (n) => n.id !== id
  )
  return mockFetchNotifications({ page: 1, pageSize: 10 })
}

export async function mockDeleteAllRead() {
  await delay(300)
  notificationsStore = notificationsStore.filter(
    (n) => !n.read
  )
  return mockFetchNotifications({ page: 1, pageSize: 10 })
}

/** Simulates a realtime event for development */
export function mockPushRandomNotification() {
  const id = `ntf_${Date.now()}`
  const item: AdminNotification = {
    id,
    type: "info",
    category: "system",
    title: "realtimeTest",
    message: "realtimeTestMsg",
    read: false,
    createdAt: new Date().toISOString(),
  }
  notificationsStore = [item, ...notificationsStore]
  return item
}
