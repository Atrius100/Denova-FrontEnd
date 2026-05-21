"use client"

import { useTranslations } from "next-intl"
import { useSettingsSection } from "../../hooks/useSettingsSection"
import { getSettingsSectionMeta } from "../../registry"
import { SettingsSectionShell } from "../SettingsSectionShell"
import {
  SettingsInput,
  SettingsToggle,
} from "../SettingsField"

export function NotificationsSettingsSection() {
  const t = useTranslations("adminSettings.fields.notifications")
  const meta = getSettingsSectionMeta("notifications")!
  const section = useSettingsSection("notifications")

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
          id="adminAlertEmail"
          label={t("adminAlertEmail")}
          type="email"
          dir="ltr"
          value={form.adminAlertEmail}
          error={errors.adminAlertEmail}
          onChange={(v) => updateField("adminAlertEmail", v)}
        />
      </div>
      <div className="sm:col-span-2">
        <SettingsToggle
          id="emailNotifications"
          label={t("emailNotifications")}
          checked={form.emailNotifications}
          onChange={(v) => updateField("emailNotifications", v)}
        />
      </div>
      <div className="sm:col-span-2">
        <SettingsToggle
          id="smsNotifications"
          label={t("smsNotifications")}
          hint={t("smsNotificationsHint")}
          checked={form.smsNotifications}
          onChange={(v) => updateField("smsNotifications", v)}
        />
      </div>
      <div className="sm:col-span-2">
        <SettingsToggle
          id="notifyNewCase"
          label={t("notifyNewCase")}
          checked={form.notifyNewCase}
          onChange={(v) => updateField("notifyNewCase", v)}
        />
      </div>
      <div className="sm:col-span-2">
        <SettingsToggle
          id="notifyPaymentSuccess"
          label={t("notifyPaymentSuccess")}
          checked={form.notifyPaymentSuccess}
          onChange={(v) => updateField("notifyPaymentSuccess", v)}
        />
      </div>
    </SettingsSectionShell>
  )
}
