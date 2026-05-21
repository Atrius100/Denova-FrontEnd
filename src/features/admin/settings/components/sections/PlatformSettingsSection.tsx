"use client"

import { useTranslations } from "next-intl"
import { useSettingsSection } from "../../hooks/useSettingsSection"
import { getSettingsSectionMeta } from "../../registry"
import { SettingsSectionShell } from "../SettingsSectionShell"
import {
  SettingsInput,
  SettingsTextarea,
} from "../SettingsField"

export function PlatformSettingsSection() {
  const t = useTranslations("adminSettings.fields.platform")
  const meta = getSettingsSectionMeta("platform")!
  const section = useSettingsSection("platform")

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
        <SettingsTextarea
          id="platformTagline"
          label={t("platformTagline")}
          value={form.platformTagline}
          error={errors.platformTagline}
          onChange={(v) => updateField("platformTagline", v)}
        />
      </div>
      <SettingsInput
        id="companyName"
        label={t("companyName")}
        value={form.companyName}
        error={errors.companyName}
        onChange={(v) => updateField("companyName", v)}
      />
      <SettingsInput
        id="companyAddress"
        label={t("companyAddress")}
        value={form.companyAddress}
        onChange={(v) => updateField("companyAddress", v)}
      />
      <SettingsInput
        id="termsUrl"
        label={t("termsUrl")}
        dir="ltr"
        value={form.termsUrl}
        onChange={(v) => updateField("termsUrl", v)}
      />
      <SettingsInput
        id="privacyUrl"
        label={t("privacyUrl")}
        dir="ltr"
        value={form.privacyUrl}
        onChange={(v) => updateField("privacyUrl", v)}
      />
    </SettingsSectionShell>
  )
}
