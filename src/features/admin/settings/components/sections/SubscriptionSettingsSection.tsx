"use client"

import { useTranslations } from "next-intl"
import { useSettingsSection } from "../../hooks/useSettingsSection"
import { getSettingsSectionMeta } from "../../registry"
import { SettingsSectionShell } from "../SettingsSectionShell"
import { SettingsInput } from "../SettingsField"

export function SubscriptionSettingsSection() {
  const t = useTranslations("adminSettings.fields.subscription")
  const meta = getSettingsSectionMeta("subscription")!
  const section = useSettingsSection("subscription")

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
        id="monthlyPriceSyp"
        label={t("monthlyPriceSyp")}
        type="number"
        dir="ltr"
        value={form.monthlyPriceSyp}
        error={errors.monthlyPriceSyp}
        onChange={(v) =>
          updateField("monthlyPriceSyp", Number(v) || 0)
        }
      />
      <SettingsInput
        id="semesterPriceSyp"
        label={t("semesterPriceSyp")}
        type="number"
        dir="ltr"
        value={form.semesterPriceSyp}
        onChange={(v) =>
          updateField("semesterPriceSyp", Number(v) || 0)
        }
      />
      <SettingsInput
        id="annualPriceSyp"
        label={t("annualPriceSyp")}
        type="number"
        dir="ltr"
        value={form.annualPriceSyp}
        onChange={(v) =>
          updateField("annualPriceSyp", Number(v) || 0)
        }
      />
      <SettingsInput
        id="trialDays"
        label={t("trialDays")}
        type="number"
        dir="ltr"
        value={form.trialDays}
        error={errors.trialDays}
        onChange={(v) =>
          updateField("trialDays", Number(v) || 0)
        }
      />
      <SettingsInput
        id="gracePeriodDays"
        label={t("gracePeriodDays")}
        type="number"
        dir="ltr"
        value={form.gracePeriodDays}
        onChange={(v) =>
          updateField("gracePeriodDays", Number(v) || 0)
        }
      />
    </SettingsSectionShell>
  )
}
