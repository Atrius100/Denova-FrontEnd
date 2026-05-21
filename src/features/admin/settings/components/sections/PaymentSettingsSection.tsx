"use client"

import { useTranslations } from "next-intl"
import { useSettingsSection } from "../../hooks/useSettingsSection"
import { getSettingsSectionMeta } from "../../registry"
import { SettingsSectionShell } from "../SettingsSectionShell"
import {
  SettingsInput,
  SettingsToggle,
} from "../SettingsField"

export function PaymentSettingsSection() {
  const t = useTranslations("adminSettings.fields.payment")
  const meta = getSettingsSectionMeta("payment")!
  const section = useSettingsSection("payment")

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
        <SettingsToggle
          id="syriatelEnabled"
          label={t("syriatelEnabled")}
          hint={t("syriatelEnabledHint")}
          checked={form.syriatelEnabled}
          onChange={(v) => updateField("syriatelEnabled", v)}
        />
      </div>
      <SettingsInput
        id="syriatelMerchantId"
        label={t("syriatelMerchantId")}
        dir="ltr"
        value={form.syriatelMerchantId}
        onChange={(v) => updateField("syriatelMerchantId", v)}
        disabled={!form.syriatelEnabled}
      />
      <SettingsInput
        id="minAmountSyp"
        label={t("minAmountSyp")}
        type="number"
        dir="ltr"
        value={form.minAmountSyp}
        error={errors.minAmountSyp}
        onChange={(v) =>
          updateField("minAmountSyp", Number(v) || 0)
        }
      />
      <div className="sm:col-span-2">
        <SettingsInput
          id="webhookUrl"
          label={t("webhookUrl")}
          hint={t("webhookUrlHint")}
          dir="ltr"
          value={form.webhookUrl}
          error={errors.webhookUrl}
          onChange={(v) => updateField("webhookUrl", v)}
        />
      </div>
      <div className="sm:col-span-2">
        <SettingsToggle
          id="paymentMockMode"
          label={t("paymentMockMode")}
          hint={t("paymentMockModeHint")}
          checked={form.paymentMockMode}
          onChange={(v) => updateField("paymentMockMode", v)}
        />
      </div>
    </SettingsSectionShell>
  )
}
