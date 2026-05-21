import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  resetAdminSettingsSection,
  updateAdminSettingsSection,
} from "../api/settingsApi"
import type {
  AdminSettingsResponse,
  AdminSettingsSectionId,
  UpdateAdminSettingsPayload,
} from "@/types/admin-settings"

export function useUpdateAdminSettings() {
  const queryClient = useQueryClient()

  const updateMutation = useMutation<
    AdminSettingsResponse,
    Error,
    UpdateAdminSettingsPayload<AdminSettingsSectionId>
  >({
    mutationFn: updateAdminSettingsSection,
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["admin-settings"],
        data
      )
    },
  })

  const resetMutation = useMutation<
    AdminSettingsResponse,
    Error,
    AdminSettingsSectionId
  >({
    mutationFn: resetAdminSettingsSection,
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["admin-settings"],
        data
      )
    },
  })

  function updateSection<
    T extends AdminSettingsSectionId,
  >(payload: UpdateAdminSettingsPayload<T>) {
    return updateMutation.mutateAsync(payload)
  }

  function resetSection(section: AdminSettingsSectionId) {
    return resetMutation.mutateAsync(section)
  }

  return {
    updateSection,
    resetSection,
    isUpdating: updateMutation.isPending,
    isResetting: resetMutation.isPending,
    updateError: updateMutation.error,
    resetError: resetMutation.error,
    isSuccess: updateMutation.isSuccess,
  }
}
