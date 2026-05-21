"use client"

import { useTranslations } from "next-intl"
import { useSettingsSection } from "../../hooks/useSettingsSection"
import { getSettingsSectionMeta } from "../../registry"
import { SettingsSectionShell } from "../SettingsSectionShell"
import {
  SettingsSelect,
  SettingsToggle,
} from "../SettingsField"

export function LocalizationSettingsSection() {
  const t = useTranslations("adminSettings.fields.localization")
  const tOpts = useTranslations("adminSettings.options")
  const meta = getSettingsSectionMeta("localization")!
  const section = useSettingsSection("localization")

  if (section.settingsQuery.isLoading || !section.form) {
    return null
  }

  const { form, updateField } = section

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
      <SettingsSelect
        id="defaultLocale"
        label={t("defaultLocale")}
        value={form.defaultLocale}
        onChange={(v) =>
          updateField(
            "defaultLocale",
            v as typeof form.defaultLocale
          )
        }
        options={[
          { value: "ar", label: tOpts("localeAr") },
          { value: "en", label: tOpts("localeEn") },
        ]}
      />
      <SettingsSelect
        id="fallbackLocale"
        label={t("fallbackLocale")}
        value={form.fallbackLocale}
        onChange={(v) =>
          updateField(
            "fallbackLocale",
            v as typeof form.fallbackLocale
          )
        }
        options={[
          { value: "ar", label: tOpts("localeAr") },
          { value: "en", label: tOpts("localeEn") },
        ]}
      />
      <SettingsSelect
        id="dateFormat"
        label={t("dateFormat")}
        value={form.dateFormat}
        onChange={(v) =>
          updateField(
            "dateFormat",
            v as typeof form.dateFormat
          )
        }
        options={[
          {
            value: "dd/MM/yyyy",
            label: tOpts("dateDmy"),
          },
          {
            value: "yyyy-MM-dd",
            label: tOpts("dateYmd"),
          },
        ]}
      />
      <div className="sm:col-span-2">
        <SettingsToggle
          id="rtlByDefault"
          label={t("rtlByDefault")}
          checked={form.rtlByDefault}
          onChange={(v) => updateField("rtlByDefault", v)}
        />
      </div>
    </SettingsSectionShell>
  )
}
