"use client"

import { useTranslations } from "next-intl"
import { useSettingsSection } from "../../hooks/useSettingsSection"
import { getSettingsSectionMeta } from "../../registry"
import { SettingsSectionShell } from "../SettingsSectionShell"
import {
  SettingsInput,
  SettingsToggle,
} from "../SettingsField"

export function IntegrationsSettingsSection() {
  const t = useTranslations("adminSettings.fields.integrations")
  const meta = getSettingsSectionMeta("integrations")!
  const section = useSettingsSection("integrations")

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
      <div className="sm:col-span-2">
        <SettingsInput
          id="apiBaseUrl"
          label={t("apiBaseUrl")}
          dir="ltr"
          value={form.apiBaseUrl}
          error={errors.apiBaseUrl}
          onChange={(v) => updateField("apiBaseUrl", v)}
        />
      </div>
      <SettingsInput
        id="syriatelApiKey"
        label={t("syriatelApiKey")}
        type="password"
        dir="ltr"
        value={form.syriatelApiKey}
        onChange={(v) => updateField("syriatelApiKey", v)}
      />
      <SettingsInput
        id="syriatelApiSecret"
        label={t("syriatelApiSecret")}
        type="password"
        dir="ltr"
        value={form.syriatelApiSecret}
        onChange={(v) => updateField("syriatelApiSecret", v)}
      />
      <div className="sm:col-span-2">
        <SettingsInput
          id="webhookSecret"
          label={t("webhookSecret")}
          hint={t("webhookSecretHint")}
          type="password"
          dir="ltr"
          value={form.webhookSecret}
          onChange={(v) => updateField("webhookSecret", v)}
        />
      </div>
      <div className="sm:col-span-2">
        <SettingsToggle
          id="enableAuditLog"
          label={t("enableAuditLog")}
          hint={t("enableAuditLogHint")}
          checked={form.enableAuditLog}
          onChange={(v) => updateField("enableAuditLog", v)}
        />
      </div>
    </SettingsSectionShell>
  )
}
