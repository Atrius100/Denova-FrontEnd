"use client"

import { useTranslations } from "next-intl"
import { RotateCcw, Save } from "lucide-react"
import Button from "@/features/auth/components/ButtonAuth"
import { Spinner } from "@/components/ui/Spinner"

type SettingsFormActionsProps = {
  isDirty: boolean
  isValid: boolean
  isSaving: boolean
  saveState: "idle" | "saving" | "saved" | "error"
  onSave: () => void
  onCancel: () => void
  onResetDefaults?: () => void
}

export function SettingsFormActions({
  isDirty,
  isValid,
  isSaving,
  saveState,
  onSave,
  onCancel,
  onResetDefaults,
}: SettingsFormActionsProps) {
  const t = useTranslations("adminSettings.actions")

  return (
    <div className="sticky bottom-0 z-10 -mx-1 mt-8 border-t border-slate-200 bg-white/95 px-1 py-4 backdrop-blur-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm">
          {isSaving ? (
            <>
              <Spinner small />
              <span className="text-slate-500">
                {t("saving")}
              </span>
            </>
          ) : saveState === "saved" && !isDirty ? (
            <span className="font-medium text-emerald-600">
              {t("saved")}
            </span>
          ) : saveState === "error" ? (
            <span className="font-medium text-red-600">
              {t("saveFailed")}
            </span>
          ) : isDirty ? (
            <span className="text-amber-700">
              {t("unsavedChanges")}
            </span>
          ) : (
            <span className="text-slate-400">
              {t("noChanges")}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {onResetDefaults ? (
            <button
              type="button"
              onClick={onResetDefaults}
              disabled={isSaving}
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
            >
              <RotateCcw className="h-4 w-4" />
              {t("resetDefaults")}
            </button>
          ) : null}

          <button
            type="button"
            onClick={onCancel}
            disabled={!isDirty || isSaving}
            className="h-11 rounded-xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t("cancel")}
          </button>

          <Button
            type="button"
            onClick={onSave}
            disabled={!isDirty || !isValid || isSaving}
            isLoading={isSaving}
            loadingText={t("saving")}
            className="!h-11 !w-auto min-w-[140px] bg-gradient-to-br from-[#2563eb] to-[#1e3a6d] px-6"
          >
            <span className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              {t("save")}
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
