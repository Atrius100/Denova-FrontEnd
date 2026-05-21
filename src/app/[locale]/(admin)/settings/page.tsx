import { redirect } from "next/navigation"
import { DEFAULT_SETTINGS_SECTION } from "@/features/admin/settings/registry"

type SettingsIndexProps = {
  params: Promise<{ locale: string }>
}

export default async function SettingsIndexPage({
  params,
}: SettingsIndexProps) {
  const { locale } = await params

  redirect(
    `/${locale}/settings/${DEFAULT_SETTINGS_SECTION}`
  )
}
