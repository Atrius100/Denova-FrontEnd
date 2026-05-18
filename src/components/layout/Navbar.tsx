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
import { useEffect, useMemo, useState } from "react";

import { usePreferences } from "@/providers/PreferencesProvider";

export function Navbar() {
  const { landing, theme, toggleTheme, toggleLocale, locale } =
    usePreferences();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = useMemo(
    () => [
      { label: landing.nav.home, href: "/#home" },
      { label: landing.nav.cases, href: "/#cases" },
      { label: landing.nav.universities, href: "/#universities" },
      { label: landing.nav.about, href: "/#about" },
    ],
    [landing.nav],
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
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const solidBar = scrolled || menuOpen;

  const headerSurface = solidBar
    ? "border-b border-dnv-border bg-background/95 shadow-sm backdrop-blur-xl dark:bg-slate-950/92"
    : "border-b border-transparent bg-transparent shadow-none";

  const iconBtn =
    "flex h-11 w-11 items-center justify-center rounded-xl border border-dnv-border bg-background text-dnv-muted transition hover:border-dnv-accent/35 hover:text-dnv-navy dark:bg-slate-900/80";

  const linkMuted =
    "text-[15px] font-medium text-dnv-muted transition duration-200 hover:text-dnv-navy";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300 ${headerSurface}`}
    >
      <nav className="flex h-20 items-center justify-between px-5 md:px-10 lg:px-[60px]">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-dnv-border bg-background shadow-sm dark:bg-slate-900">
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
            <span className="text-lg font-extrabold tracking-wide text-dnv-navy">
              DENOVA
            </span>
            <span className="text-[11px] font-medium text-dnv-muted">
              {landing.nav.brandTagline}
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkMuted}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label={
              locale === "ar" ? "Switch to English" : "التبديل إلى العربية"
            }
            onClick={() => toggleLocale()}
            className={`${iconBtn} w-auto min-w-[4.5rem] gap-2 px-3`}
          >
            <Globe className="h-5 w-5 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wide">
              {locale}
            </span>
          </button>

          <button
            type="button"
            onClick={() => toggleTheme()}
            aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
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
            className={`text-sm font-semibold transition duration-200 ${
              theme === "dark"
                ? "text-dnv-deep px-4 py-2 rounded-xl"
                : "text-dnv-heading"
            }`}
            style={
              theme === "dark"
                ? { backgroundColor: "var(--foreground)" }
                : undefined
            }
          >
            {landing.nav.login}
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-gradient-to-r from-dnv-navy to-dnv-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-dnv-accent/25 transition duration-200 hover:scale-[1.03]"
          >
            {landing.nav.register}
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
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
        <div className="border-t border-dnv-border bg-background lg:hidden dark:bg-slate-950">
          <div className="space-y-1 px-5 py-5 md:px-10 lg:px-[60px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl py-3 text-sm font-medium text-dnv-heading transition hover:bg-dnv-soft hover:text-dnv-navy dark:hover:bg-slate-900"
              >
                {link.label}
              </Link>
            ))}

            <div className="my-4 border-t border-dnv-border" />

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => toggleTheme()}
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
                onClick={() => toggleLocale()}
                className={`${iconBtn} flex-1 min-w-[2.75rem]`}
              >
                <Globe className="h-5 w-5" />
              </button>

              <Link
                href="/login"
                className="min-w-[8rem] flex-1 rounded-xl border border-dnv-border py-3 text-center text-sm font-semibold text-dnv-heading"
              >
                {landing.nav.login}
              </Link>

              <Link
                href="/register"
                className="min-w-[8rem] flex-1 rounded-xl bg-gradient-to-r from-dnv-navy to-dnv-blue py-3 text-center text-sm font-semibold text-white"
              >
                {landing.nav.register}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
