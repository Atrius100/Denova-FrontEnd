import { useQuery } from "@tanstack/react-query"
import { fetchAdminNotifications } from "../api/notificationsApi"
import type {
  AdminNotificationFilter,
} from "@/types/admin-notification"

type UseAdminNotificationsOptions = {
  page?: number
  pageSize?: number
  filter?: AdminNotificationFilter
  enabled?: boolean
}

export function useAdminNotifications(
  options: UseAdminNotificationsOptions = {}
) {
  const {
    page = 1,
    pageSize = 10,
    filter = "all",
    enabled = true,
  } = options

  return useQuery({
    queryKey: [
      "admin-notifications",
      page,
      pageSize,
      filter,
    ],
    queryFn: () =>
      fetchAdminNotifications({
        page,
        pageSize,
        filter,
      }),
    enabled,
    staleTime: 15_000,
  })
}
