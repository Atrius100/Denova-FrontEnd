"use client"

import { notFound } from "next/navigation"
import { use } from "react"
import { AdminSettingsPage } from "@/features/admin/settings/components/AdminSettingsPage"
import { isValidSettingsSection } from "@/features/admin/settings/registry"
import type { AdminSettingsSectionId } from "@/types/admin-settings"

type SettingsSectionPageProps = {
  params: Promise<{ section: string }>
}

export default function SettingsSectionPage({
  params,
}: SettingsSectionPageProps) {
  const { section } = use(params)

  if (!isValidSettingsSection(section)) {
    notFound()
  }

  return (
    <AdminSettingsPage
      section={section as AdminSettingsSectionId}
    />
  )
}
