"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { studentSidebarLinks } from "@/config/student-navigation"

export function StudentSidebar() {
  const pathname = usePathname()
  const t = useTranslations("studentSidebar")

  return (
    <>
      <aside className="sticky left-0 top-0 z-50 flex h-screen w-20 flex-col items-center bg-gradient-to-b from-[#0f2d5c] to-[#17406f] py-5 lg:hidden">
        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
          <Image
            src="/logo.png"
            alt="DENOVA Logo"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
        </div>
        <nav className="flex flex-1 flex-col gap-3">
          {studentSidebarLinks.map((item) => {
            const Icon = item.icon
            const isActive = pathname.includes(item.href)
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all ${
                  isActive
                    ? "bg-white text-[#1e3a6d] shadow-lg"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                <Icon className="h-5 w-5" />
              </Link>
            )
          })}
        </nav>
      </aside>

      <aside className="hidden w-60 shrink-0 flex-col bg-gradient-to-b from-[#0f2d5c] to-[#17406f] text-white lg:flex xl:w-72">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-5 xl:px-6 xl:py-6">
          <div className="flex h-15 w-15 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white shadow-sm xl:h-16 xl:w-16">
            <Image
              src="/logo.png"
              alt="DENOVA Logo"
              width={45}
              height={45}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide xl:text-2xl">
              DENOVA
            </h1>
            <p className="mt-1 text-xs text-blue-100/70 xl:text-sm">
              {t("subtitle")}
            </p>
          </div>
        </div>
        <nav className="flex-1 space-y-2 px-3 py-5 xl:px-4 xl:py-6">
          {studentSidebarLinks.map((item) => {
            const Icon = item.icon
            const isActive = pathname.includes(item.href)
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`group flex items-center gap-3 rounded-xl py-2.5 ps-3 transition-all xl:px-4 xl:py-3 ${
                  isActive
                    ? "bg-white/15 text-white shadow-lg"
                    : "text-blue-100/80 hover:bg-white/10"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="text-xs font-medium xl:text-sm">
                  {t(item.key)}
                </span>
              </Link>
            )
          })}
        </nav>
        <div className="border-t border-white/10 p-3 xl:p-5">
          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm xl:p-4">
            <p className="text-xs font-medium xl:text-sm">
              {t("footerTitle")}
            </p>
            <p className="mt-1 text-[10px] text-blue-100/70 xl:text-xs">
              {t("footerSubtitle")}
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
