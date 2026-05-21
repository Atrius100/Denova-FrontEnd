"use client"

import { useTranslations } from "next-intl"
import { useSettingsSection } from "../../hooks/useSettingsSection"
import { getSettingsSectionMeta } from "../../registry"
import { SettingsSectionShell } from "../SettingsSectionShell"
import {
  SettingsInput,
  SettingsToggle,
} from "../SettingsField"

export function GeneralSettingsSection() {
  const t = useTranslations("adminSettings.fields.general")
  const meta = getSettingsSectionMeta("general")!
  const {
    form,
    updateField,
    errors,
    isDirty,
    isValid,
    isSaving,
    saveState,
    save,
    reset,
    resetToServer,
    settingsQuery,
  } = useSettingsSection("general")

  if (settingsQuery.isLoading || !form) {
    return null
  }

  return (
    <SettingsSectionShell
      meta={meta}
      isDirty={isDirty}
      isValid={isValid}
      isSaving={isSaving}
      saveState={saveState}
      onSave={save}
      onCancel={reset}
      onResetDefaults={resetToServer}
    >
      <div className="sm:col-span-2">
        <SettingsInput
          id="siteName"
          label={t("siteName")}
          hint={t("siteNameHint")}
          value={form.siteName}
          error={errors.siteName}
          onChange={(v) => updateField("siteName", v)}
        />
      </div>
      <SettingsInput
        id="supportEmail"
        label={t("supportEmail")}
        type="email"
        dir="ltr"
        value={form.supportEmail}
        error={errors.supportEmail}
        onChange={(v) => updateField("supportEmail", v)}
      />
      <SettingsInput
        id="supportPhone"
        label={t("supportPhone")}
        hint={t("supportPhoneHint")}
        dir="ltr"
        value={form.supportPhone}
        error={errors.supportPhone}
        onChange={(v) => updateField("supportPhone", v)}
      />
      <div className="sm:col-span-2">
        <SettingsToggle
          id="maintenanceMode"
          label={t("maintenanceMode")}
          hint={t("maintenanceModeHint")}
          checked={form.maintenanceMode}
          onChange={(v) => updateField("maintenanceMode", v)}
        />
      </div>
      <div className="sm:col-span-2">
        <SettingsToggle
          id="allowRegistration"
          label={t("allowRegistration")}
          hint={t("allowRegistrationHint")}
          checked={form.allowRegistration}
          onChange={(v) => updateField("allowRegistration", v)}
        />
      </div>
    </SettingsSectionShell>
  )
}
