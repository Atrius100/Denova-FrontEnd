import { ENV } from "@/config/env"
import { axiosInstance } from "@/lib/axios"
import {
  mockGetAdminSettings,
  mockResetAdminSettingsSection,
  mockUpdateAdminSettingsSection,
} from "../services/settingsMock.service"
import type {
  AdminSettingsResponse,
  AdminSettingsSectionId,
  UpdateAdminSettingsPayload,
} from "@/types/admin-settings"

const USE_MOCK =
  ENV.SETTINGS_MOCK !== false

export async function fetchAdminSettings(): Promise<AdminSettingsResponse> {
  if (USE_MOCK) {
    return mockGetAdminSettings()
  }

  const response =
    await axiosInstance.get<AdminSettingsResponse>(
      "/api/admin/settings"
    )

  return response.data
}

export async function updateAdminSettingsSection<
  T extends AdminSettingsSectionId,
>(payload: UpdateAdminSettingsPayload<T>) {
  if (USE_MOCK) {
    return mockUpdateAdminSettingsSection(payload)
  }

  const response =
    await axiosInstance.patch<AdminSettingsResponse>(
      `/api/admin/settings/${payload.section}`,
      payload.data
    )

  return response.data
}

export async function resetAdminSettingsSection(
  section: AdminSettingsSectionId
) {
  if (USE_MOCK) {
    return mockResetAdminSettingsSection(section)
  }

  const response =
    await axiosInstance.post<AdminSettingsResponse>(
      `/api/admin/settings/${section}/reset`
    )

  return response.data
}
