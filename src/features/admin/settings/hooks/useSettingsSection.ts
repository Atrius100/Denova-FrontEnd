"use client"

import { useCallback } from "react"
import type {
  AdminSettings,
  AdminSettingsSectionId,
} from "@/types/admin-settings"
import { useAdminSettings } from "./useAdminSettings"
import { useSettingsSectionForm } from "./useSettingsSectionForm"
import { useUpdateAdminSettings } from "./useUpdateAdminSettings"

export function useSettingsSection<
  T extends AdminSettingsSectionId,
>(section: T) {
  const settingsQuery = useAdminSettings()
  const updater = useUpdateAdminSettings()

  const sectionData = settingsQuery.data?.settings[
    section
  ] as AdminSettings[T] | undefined

  const form = useSettingsSectionForm(
    section,
    sectionData
  )

  const save = useCallback(async () => {
    if (!form.form || !form.isValid) return

    form.setSaveState("saving")

    try {
      await updater.updateSection({
        section,
        data: form.form,
      })
      form.commit()
    } catch {
      form.setSaveState("error")
    }
  }, [form, section, updater])

  const resetToServer = useCallback(async () => {
    form.setSaveState("saving")

    try {
      const response =
        await updater.resetSection(section)
      const next = response.settings[section]
      form.setForm(next)
      form.commit()
    } catch {
      form.setSaveState("error")
    }
  }, [form, section, updater])

  return {
    settingsQuery,
    ...form,
    save,
    resetToServer,
    isSaving:
      updater.isUpdating || updater.isResetting,
  }
}
