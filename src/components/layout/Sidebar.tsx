"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { sidebarLinks } from "../../app/[locale]/(reception)/dataLink/data";
import { adminSidebarLinks } from "@/config/admin-navigation";
import { studentSidebarLinks } from "@/config/student-navigation";


interface SidebarProps {
  role?: "admin" | "reception" | "student";
}
export function Sidebar({
  role = "reception",
}: SidebarProps) {
 const links =
  role === "admin"
    ? adminSidebarLinks
    : role === "student"
    ? studentSidebarLinks
    : sidebarLinks;
  const router = useRouter();
  const pathname = usePathname();
const t = useTranslations(
  role === "admin"
    ? "adminSidebar"
    : role === "student"
    ? "studentSidebar"
    : "receptionSidebar"
);  // استخراج الـ locale من الـ pathname
  const locale = pathname.split("/")[1];

  const handleLogoClick = () => {
    router.push(`/${locale}`);
  };
  

  return (
    <>
      {/* ================= MOBILE / TABLET ================= */}
      {/* تحت 1024 */}
      <aside
        className="
          sticy left-0 top-0 z-50
          flex h-auto lg:h-screen w-20 flex-col items-center

          bg-gradient-to-b
          from-[#0f2d5c]
          to-[#17406f]

          py-5

          lg:hidden
        "
      >
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="
            mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white hover:shadow-lg transition-shadow cursor-pointer border-0
          "
        >
          <Image
            src="/logo.png"
            alt="DENOVA Logo"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
        </button>

        {/* Icons */}
        <nav className="flex flex-1 flex-col gap-3">
          {links.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.includes(item.href);

            return (
              <button
                key={item.key}
                onClick={() => router.push(item.href)}
                className={`
                  flex h-12 w-12 items-center justify-center rounded-2xl transition-all border-0 cursor-pointer

                  ${
                    isActive
                      ? "bg-white text-[#1e3a6d] shadow-lg"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon className="h-5 w-5" />
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ================= DESKTOP ================= */}
      {/* فوق 1024 */}
      <aside
        className="
          hidden lg:flex
          w-60 xl:w-72
          flex-col
          shrink-0
          bg-gradient-to-b
          from-[#0f2d5c]
          to-[#17406f]

          text-white
        "
      >
        {/* Header */}
        <button
          onClick={handleLogoClick}
          className="
            flex items-center gap-3
            border-b border-white/10

            px-4 py-5
            xl:px-6 xl:py-6

            hover:bg-white/5 transition-colors border-0 cursor-pointer w-full
          "
        >
          <div
            className="
              flex h-15 w-15 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white shadow-sm
              
              xl:h-16 xl:w-16
            "
          >
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
            <h1
              className="
                text-xl font-bold tracking-wide
                xl:text-3xl
              "
            >
              DENOVA
            </h1>

            <p
              className="
                mt-1 text-xs text-blue-100/70
                xl:text-sm
              "
            >
              {t("subtitle")}
            </p>
          </div>
        </button>

        {/* Navigation */}
        <nav
          className="
            flex-1 space-y-2

            px-3 py-5
            xl:px-4 xl:py-6
          "
        >
          {links.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.includes(item.href);

            return (
              <button
                key={item.key}
                onClick={() => router.push(item.href)}
                className={`
                  group flex items-center gap-3 rounded-xl transition-all duration-200 w-full border-0 cursor-pointer

                  ps-3 py-2.5
                  xl:px-4 xl:py-3

                  ${
                    isActive
                      ? "bg-white/15 text-white shadow-lg"
                      : "text-blue-100/80 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon className="h-5 w-5 shrink-0" />

                <span
                  className="
                      text-xs font-medium
                      xl:text-sm
                    "
                >
                  {t(item.key)}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div
          className="
            border-t border-white/10

            p-3
            xl:p-5
          "
        >
          <div
            className="
              rounded-2xl bg-white/10 p-3 backdrop-blur-sm
              
              xl:p-4
            "
          >
            <p
              className="
                text-xs font-medium
                xl:text-sm
              "
            >
              {t("footerTitle")}
            </p>

            <p
              className="
                mt-1 text-[10px] text-blue-100/70
                xl:text-xs
              "
            >
              {t("footerSubtitle")}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
