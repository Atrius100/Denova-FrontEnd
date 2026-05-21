"use client"

import { ReactNode } from "react"
import { useTranslations } from "next-intl"
import type { SettingsSectionMeta } from "../registry"
import { SettingsFormActions } from "./SettingsFormActions"

type SettingsSectionShellProps = {
  meta: SettingsSectionMeta
  children: ReactNode
  isDirty: boolean
  isValid: boolean
  isSaving: boolean
  saveState: "idle" | "saving" | "saved" | "error"
  onSave: () => void
  onCancel: () => void
  onResetDefaults?: () => void
}

export function SettingsSectionShell({
  meta,
  children,
  isDirty,
  isValid,
  isSaving,
  saveState,
  onSave,
  onCancel,
  onResetDefaults,
}: SettingsSectionShellProps) {
  const t = useTranslations("adminSettings")
  const Icon = meta.icon

  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20">
            <Icon className="h-6 w-6 text-[#1e3a6d]" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-[#1e3a6d] sm:text-2xl">
              {t(meta.titleKey)}
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              {t(meta.descriptionKey)}
            </p>
          </div>
        </div>
      </div>

      <form
        className="px-5 py-5 sm:px-6 sm:py-6"
        onSubmit={(e) => {
          e.preventDefault()
          onSave()
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {children}
        </div>

        <SettingsFormActions
          isDirty={isDirty}
          isValid={isValid}
          isSaving={isSaving}
          saveState={saveState}
          onSave={onSave}
          onCancel={onCancel}
          onResetDefaults={onResetDefaults}
        />
      </form>
    </div>
  )
}
