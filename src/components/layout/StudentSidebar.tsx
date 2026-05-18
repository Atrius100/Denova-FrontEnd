"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { studentSidebarLinks } from "@/app/[locale]/(student)/dataLink/data";

export function StudentSidebar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("studentSidebar");

  return (
    <aside className="flex w-72 flex-col bg-linear-to-b from-[#0f2d5c] to-[#17406f] text-white">
      <div className="border-b border-white/10 px-6 py-7">
        <h1 className="text-3xl font-bold tracking-wide">DENOVA</h1>
        <p className="mt-1 text-sm text-blue-100/70">{t("subtitle")}</p>
      </div>

      <nav className="flex-1 space-y-2 px-4 py-6">
        {studentSidebarLinks.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.includes(item.href);
          const translatedHref = locale ? `/${locale}${item.href}` : item.href;

          return (
            <Link
              key={item.key}
              href={translatedHref}
              className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-white/15 text-white shadow-lg"
                  : "text-blue-100/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{t(item.key)}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-5">
        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <p className="text-sm font-medium">{t("footerTitle")}</p>
          <p className="mt-1 text-xs text-blue-100/70">{t("footerSubtitle")}</p>
        </div>
      </div>
    </aside>
  );
}
