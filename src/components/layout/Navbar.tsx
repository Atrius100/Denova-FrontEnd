"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { usePreferences } from "@/providers/PreferencesProvider";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export function Navbar() {
  const {
    theme,
    toggleTheme,
  } = usePreferences();
  
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggleLocale() {
    const nextLocale =
      locale === "ar"
        ? "en"
        : "ar";

    const newPath = pathname.replace(
      /^\/(ar|en)/,
      `/${nextLocale}`
    );

    router.push(newPath);
  }
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = useMemo(
    () => [
      {
        label: t("home"),
        href: "/#home",
      },
      {
        label: t("cases"),
        href: "/#cases",
      },
      {
        label: t("universities"),
        href: "/#universities",
      },
      {
        label: t("about"),
        href: "/#about",
      },
      {
        label: t("reception"),
        href: "/dashboard",
      },
      {
        label: t("student"),
        href: "/profile",
      },
      {
        label: t("admin"),
        href: "/dashboardA",
      },
    ],
    [t]
  );

  useEffect(() => {
    const getScrollY = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const onScroll = () => {
      setScrolled(getScrollY() > 8);
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      onScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );

      window.removeEventListener(
        "resize",
        onScroll
      );
    };
  }, []);

  // إغلاق السايد بار عند الضغط خارجه
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [menuOpen]);

  const solidBar =
    scrolled || menuOpen;

  const headerSurface = solidBar
    ? "border-b border-dnv-border bg-background/95 shadow-sm backdrop-blur-xl"
    : "border-b border-transparent bg-transparent shadow-none";

  const iconBtn =
    "flex h-11 w-11 items-center justify-center rounded-xl border border-dnv-border bg-background text-dnv-muted transition hover:border-dnv-accent/35 hover:text-dnv-navy";

  const linkMuted =
    "text-[14px] xl:text-base  font-medium text-dnv-muted transition duration-200 hover:text-dnv-navy";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300 ${headerSurface}`}
    >
      <nav className="flex h-20 items-center justify-between px-5 md:px-10 lg:px-[60px]">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background shadow-sm">
            <Image
              src="/logo.png"
              alt="DENOVA Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold tracking-wide text-dnv-navy">
              DENOVA
            </span>

            <span className="text-[11px] font-medium text-dnv-muted">
              {t("brandTagline")}
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-3 xl:gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkMuted}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-1.5 xl:gap-3 lg:flex">
          <button
            type="button"
            aria-label={
              locale === "ar"
                ? "Switch to English"
                : "التبديل إلى العربية"
            }
            onClick={() =>
              toggleLocale()
            }
            className={`${iconBtn} w-auto min-w-[4.5rem] gap-2 px-3`}
          >
            <Globe className="h-5 w-5 shrink-0" />

            <span className="text-xs font-bold uppercase tracking-wide">
              {locale}
            </span>
          </button>

          <button
            type="button"
            onClick={() =>
              toggleTheme()
            }
            aria-label={
              theme === "dark"
                ? "Light mode"
                : "Dark mode"
            }
            className={iconBtn}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-amber-400" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <Link
            href="/login"
            className="text-sm font-semibold text-dnv-heading transition duration-200"
          >
            {t("login")}
          </Link>

          <Link
           href="/payment?plan=semester"
            className="rounded-xl bg-gradient-to-r from-dnv-navy to-dnv-blue p-3 xl:p-4 text-sm font-semibold text-white shadow-lg shadow-dnv-accent/25 transition duration-200 hover:scale-[1.03]"
          >
            {t("register")}
          </Link>
        </div>

        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className={`${iconBtn} text-dnv-navy lg:hidden`}
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          ref={menuRef}
          className="border-t border-dnv-border bg-background lg:hidden"
        >
          <div className="space-y-1 px-5 py-5 md:px-10 lg:px-[60px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  setMenuOpen(false)
                }
                className="block rounded-xl py-3 text-sm font-medium text-dnv-heading transition hover:bg-dnv-soft hover:text-dnv-navy"
              >
                {link.label}
              </Link>
            ))}

            <div className="my-4 border-t border-dnv-border" />

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  toggleTheme()
                }
                className={`${iconBtn} flex-1 min-w-[2.75rem]`}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-amber-400" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              <button
                type="button"
                onClick={() =>
                  toggleLocale()
                }
                className={`${iconBtn} flex-1 min-w-[2.75rem]`}
              >
                <Globe className="h-5 w-5" />
              </button>

              <Link
                href="/login"
                className="min-w-[8rem] flex-1 rounded-xl border border-dnv-border py-3 text-center text-sm font-semibold text-dnv-heading"
              >
                {t("login")}
              </Link>

              <Link
                href="/register"
                className="min-w-[8rem] flex-1 rounded-xl bg-gradient-to-r from-dnv-navy to-dnv-blue py-3 text-center text-sm font-semibold text-white"
              >
                {t("register")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
