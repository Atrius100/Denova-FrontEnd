"use client"

import { useTranslations } from "next-intl"
import { useSettingsSection } from "../../hooks/useSettingsSection"
import { getSettingsSectionMeta } from "../../registry"
import { SettingsSectionShell } from "../SettingsSectionShell"
import {
  SettingsInput,
  SettingsTextarea,
  SettingsToggle,
} from "../SettingsField"

export function SecuritySettingsSection() {
  const t = useTranslations("adminSettings.fields.security")
  const meta = getSettingsSectionMeta("security")!
  const section = useSettingsSection("security")

  if (section.settingsQuery.isLoading || !section.form) {
    return null
  }

  const { form, updateField, errors } = section

  return (
    <SettingsSectionShell
      meta={meta}
      isDirty={section.isDirty}
      isValid={section.isValid}
      isSaving={section.isSaving}
      saveState={section.saveState}
      onSave={section.save}
      onCancel={section.reset}
      onResetDefaults={section.resetToServer}
    >
      <SettingsInput
        id="sessionTimeoutMinutes"
        label={t("sessionTimeoutMinutes")}
        type="number"
        dir="ltr"
        value={form.sessionTimeoutMinutes}
        error={errors.sessionTimeoutMinutes}
        onChange={(v) =>
          updateField(
            "sessionTimeoutMinutes",
            Number(v) || 0
          )
        }
      />
      <SettingsInput
        id="maxLoginAttempts"
        label={t("maxLoginAttempts")}
        type="number"
        dir="ltr"
        value={form.maxLoginAttempts}
        error={errors.maxLoginAttempts}
        onChange={(v) =>
          updateField("maxLoginAttempts", Number(v) || 0)
        }
      />
      <div className="sm:col-span-2">
        <SettingsToggle
          id="requireStrongPassword"
          label={t("requireStrongPassword")}
          checked={form.requireStrongPassword}
          onChange={(v) =>
            updateField("requireStrongPassword", v)
          }
        />
      </div>
      <div className="sm:col-span-2">
        <SettingsToggle
          id="twoFactorEnabled"
          label={t("twoFactorEnabled")}
          hint={t("twoFactorEnabledHint")}
          checked={form.twoFactorEnabled}
          onChange={(v) => updateField("twoFactorEnabled", v)}
        />
      </div>
      <div className="sm:col-span-2">
        <SettingsTextarea
          id="ipAllowlist"
          label={t("ipAllowlist")}
          hint={t("ipAllowlistHint")}
          value={form.ipAllowlist}
          onChange={(v) => updateField("ipAllowlist", v)}
        />
      </div>
    </SettingsSectionShell>
  )
}
