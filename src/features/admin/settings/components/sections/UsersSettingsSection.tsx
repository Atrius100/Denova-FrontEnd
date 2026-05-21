"use client"

import { useTranslations } from "next-intl"
import { useSettingsSection } from "../../hooks/useSettingsSection"
import { getSettingsSectionMeta } from "../../registry"
import { SettingsSectionShell } from "../SettingsSectionShell"
import {
  SettingsInput,
  SettingsSelect,
  SettingsToggle,
} from "../SettingsField"
import type { AdminRole } from "@/types/admin-settings"

export function UsersSettingsSection() {
  const t = useTranslations("adminSettings.fields.users")
  const tRoles = useTranslations("adminSettings.options.roles")
  const meta = getSettingsSectionMeta("users")!
  const section = useSettingsSection("users")

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
        id="defaultRole"
        label={t("defaultRole")}
        hint={t("defaultRoleHint")}
        value={form.defaultRole}
        onChange={(v) =>
          updateField("defaultRole", v as AdminRole)
        }
        options={[
          { value: "student", label: tRoles("student") },
          { value: "reception", label: tRoles("reception") },
          { value: "admin", label: tRoles("admin") },
          {
            value: "super_admin",
            label: tRoles("super_admin"),
          },
        ]}
      />
      <SettingsInput
        id="maxStudentsPerUniversity"
        label={t("maxStudentsPerUniversity")}
        type="number"
        dir="ltr"
        value={form.maxStudentsPerUniversity}
        onChange={(v) =>
          updateField(
            "maxStudentsPerUniversity",
            Number(v) || 0
          )
        }
      />
      <div className="sm:col-span-2">
        <SettingsToggle
          id="requireEmailVerification"
          label={t("requireEmailVerification")}
          checked={form.requireEmailVerification}
          onChange={(v) =>
            updateField("requireEmailVerification", v)
          }
        />
      </div>
      <div className="sm:col-span-2">
        <SettingsToggle
          id="allowStudentSelfSignup"
          label={t("allowStudentSelfSignup")}
          checked={form.allowStudentSelfSignup}
          onChange={(v) =>
            updateField("allowStudentSelfSignup", v)
          }
        />
      </div>
    </SettingsSectionShell>
  )
}
