import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  deleteAdminNotification,
  deleteAllReadNotifications,
  markAllNotificationsAsRead,
  markNotificationAsRead,
  markNotificationAsUnread,
} from "../api/notificationsApi"
import { useNotificationStore } from "../store/notification.store"

export function useNotificationMutations() {
  const queryClient = useQueryClient()
  const setUnreadCount = useNotificationStore(
    (s) => s.setUnreadCount
  )

  function syncFromResponse(
    data: { unreadCount: number } | undefined
  ) {
    if (data) {
      setUnreadCount(data.unreadCount)
    }
    queryClient.invalidateQueries({
      queryKey: ["admin-notifications"],
    })
  }

  const markRead = useMutation({
    mutationFn: markNotificationAsRead,
    onSuccess: syncFromResponse,
  })

  const markUnread = useMutation({
    mutationFn: markNotificationAsUnread,
    onSuccess: syncFromResponse,
  })

  const markAllRead = useMutation({
    mutationFn: markAllNotificationsAsRead,
    onSuccess: syncFromResponse,
  })

  const remove = useMutation({
    mutationFn: deleteAdminNotification,
    onSuccess: syncFromResponse,
  })

  const removeAllRead = useMutation({
    mutationFn: deleteAllReadNotifications,
    onSuccess: syncFromResponse,
  })

  return {
    markRead,
    markUnread,
    markAllRead,
    remove,
    removeAllRead,
    isLoading:
      markRead.isPending ||
      markUnread.isPending ||
      markAllRead.isPending ||
      remove.isPending ||
      removeAllRead.isPending,
  }
}
