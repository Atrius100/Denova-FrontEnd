"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import { ADMIN_SETTINGS_SECTIONS } from "../registry"
import type { AdminSettingsSectionId } from "@/types/admin-settings"

type SettingsNavProps = {
  activeSection: AdminSettingsSectionId
}

export function SettingsNav({
  activeSection,
}: SettingsNavProps) {
  const t = useTranslations("adminSettings")
  const pathname = usePathname()

  return (
    <>
      <nav className="mb-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
        {ADMIN_SETTINGS_SECTIONS.map((section) => {
          const Icon = section.icon
          const isActive = activeSection === section.id
          const href = `/settings/${section.id}`

          return (
            <Link
              key={section.id}
              href={href}
              className={`flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-gradient-to-r from-[#1e3a6d] to-[#3b82f6] text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-600"
              }`}
            >
              <Icon className="h-4 w-4" />
              {t(section.titleKey)}
            </Link>
          )
        })}
      </nav>

      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm">
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            {t("navTitle")}
          </p>
          <ul className="space-y-1">
            {ADMIN_SETTINGS_SECTIONS.map((section) => {
              const Icon = section.icon
              const isActive =
                pathname.includes(
                  `/settings/${section.id}`
                ) || activeSection === section.id
              const href = `/settings/${section.id}`

              return (
                <li key={section.id}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                      isActive
                        ? "bg-[#f3f9ff] font-semibold text-[#1e3a6d]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#1e3a6d]"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="min-w-0 truncate">
                      {t(section.titleKey)}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}
