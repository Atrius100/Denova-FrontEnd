"use client"

import { useTranslations } from "next-intl"
import { useSettingsSection } from "../../hooks/useSettingsSection"
import { getSettingsSectionMeta } from "../../registry"
import { SettingsSectionShell } from "../SettingsSectionShell"
import {
  SettingsInput,
  SettingsToggle,
} from "../SettingsField"

export function BrandingSettingsSection() {
  const t = useTranslations("adminSettings.fields.branding")
  const meta = getSettingsSectionMeta("branding")!
  const section = useSettingsSection("branding")

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
        id="logoUrl"
        label={t("logoUrl")}
        dir="ltr"
        value={form.logoUrl}
        onChange={(v) => updateField("logoUrl", v)}
      />
      <SettingsInput
        id="faviconUrl"
        label={t("faviconUrl")}
        dir="ltr"
        value={form.faviconUrl}
        onChange={(v) => updateField("faviconUrl", v)}
      />
      <SettingsInput
        id="primaryColor"
        label={t("primaryColor")}
        dir="ltr"
        value={form.primaryColor}
        error={errors.primaryColor}
        onChange={(v) => updateField("primaryColor", v)}
      />
      <SettingsInput
        id="secondaryColor"
        label={t("secondaryColor")}
        dir="ltr"
        value={form.secondaryColor}
        error={errors.secondaryColor}
        onChange={(v) => updateField("secondaryColor", v)}
      />
      <div className="sm:col-span-2">
        <SettingsToggle
          id="showPoweredBy"
          label={t("showPoweredBy")}
          checked={form.showPoweredBy}
          onChange={(v) => updateField("showPoweredBy", v)}
        />
      </div>
    </SettingsSectionShell>
  )
}
