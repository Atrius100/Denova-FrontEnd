"use client"

import { useTranslations } from "next-intl"
import { AlertCircle } from "lucide-react"
import { Spinner } from "@/components/ui/Spinner"
import { useAdminSettings } from "../hooks/useAdminSettings"
import { SettingsNav } from "./SettingsNav"
import { SettingsSectionRouter } from "./SettingsSectionRouter"
import type { AdminSettingsSectionId } from "@/types/admin-settings"

type AdminSettingsPageProps = {
  section: AdminSettingsSectionId
}

export function AdminSettingsPage({
  section,
}: AdminSettingsPageProps) {
  const t = useTranslations("adminSettings")
  const settingsQuery = useAdminSettings()

  if (settingsQuery.isLoading) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[1.75rem] border border-slate-200 bg-white">
        <Spinner />
        <p className="mt-4 text-sm text-slate-500">
          {t("loading")}
        </p>
      </div>
    )
  }

  if (settingsQuery.isError) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[1.75rem] border border-red-100 bg-red-50/50 p-8 text-center">
        <AlertCircle className="h-10 w-10 text-red-500" />
        <h2 className="mt-4 text-lg font-bold text-red-700">
          {t("loadErrorTitle")}
        </h2>
        <p className="mt-2 max-w-md text-sm text-red-600/80">
          {t("loadErrorDesc")}
        </p>
        <button
          type="button"
          onClick={() => settingsQuery.refetch()}
          className="mt-6 rounded-xl bg-[#1e3a6d] px-6 py-2.5 text-sm font-medium text-white"
        >
          {t("retry")}
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1e3a6d] md:text-3xl">
          {t("pageTitle")}
        </h1>
        <p className="mt-1 text-sm leading-6 text-slate-500">
          {t("pageSubtitle")}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr]">
        <SettingsNav activeSection={section} />
        <div className="min-w-0">
          <SettingsSectionRouter section={section} />
        </div>
      </div>
    </div>
  )
}
