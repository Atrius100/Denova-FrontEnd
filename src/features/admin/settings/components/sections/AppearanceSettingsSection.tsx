"use client"

import { useTranslations } from "next-intl"
import { useSettingsSection } from "../../hooks/useSettingsSection"
import { getSettingsSectionMeta } from "../../registry"
import { SettingsSectionShell } from "../SettingsSectionShell"
import {
  SettingsSelect,
  SettingsToggle,
} from "../SettingsField"

export function AppearanceSettingsSection() {
  const t = useTranslations("adminSettings.fields.appearance")
  const tOpts = useTranslations("adminSettings.options")
  const meta = getSettingsSectionMeta("appearance")!
  const section = useSettingsSection("appearance")

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
        id="defaultTheme"
        label={t("defaultTheme")}
        value={form.defaultTheme}
        onChange={(v) =>
          updateField(
            "defaultTheme",
            v as typeof form.defaultTheme
          )
        }
        options={[
          { value: "light", label: tOpts("themeLight") },
          { value: "dark", label: tOpts("themeDark") },
          { value: "system", label: tOpts("themeSystem") },
        ]}
      />
      <SettingsSelect
        id="borderRadius"
        label={t("borderRadius")}
        value={form.borderRadius}
        onChange={(v) =>
          updateField(
            "borderRadius",
            v as typeof form.borderRadius
          )
        }
        options={[
          { value: "md", label: tOpts("radiusMd") },
          { value: "lg", label: tOpts("radiusLg") },
          { value: "xl", label: tOpts("radiusXl") },
        ]}
      />
      <div className="sm:col-span-2">
        <SettingsToggle
          id="compactSidebar"
          label={t("compactSidebar")}
          checked={form.compactSidebar}
          onChange={(v) => updateField("compactSidebar", v)}
        />
      </div>
      <div className="sm:col-span-2">
        <SettingsToggle
          id="showHeroPattern"
          label={t("showHeroPattern")}
          checked={form.showHeroPattern}
          onChange={(v) => updateField("showHeroPattern", v)}
        />
      </div>
    </SettingsSectionShell>
  )
}
