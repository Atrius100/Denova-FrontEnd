
"use client";

import Link from "next/link";

import { useState } from "react";

import {
  Menu,
  X,
  Moon,
  Globe,
} from "lucide-react";

import Image from "next/image";

const navLinks = [
  {
    label: "الرئيسية",
    href: "/",
  },

  {
    label: "الحالات",
    href: "/cases",
  },

  {
    label: "الجامعات",
    href: "/universities",
  },

  {
    label: "حول المنصة",
    href: "/about",
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/80 backdrop-blur-xl">
      <nav className="flex h-20 items-center justify-between px-5 md:px-10 lg:px-[60px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          {/* Logo */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white shadow-sm">
            <Image
              src="/logo.png"
              alt="DENOVA Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-wide text-[#1e3a6d]">
              DENOVA
            </span>

            <span className="text-[11px] font-medium text-[#64748b]">
              Dental Platform
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[15px] font-medium text-[#475569] transition duration-200 hover:text-[#1e3a6d]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Language */}
          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e2e8f0] bg-white text-[#64748b] transition hover:border-[#1e3a6d]/20 hover:text-[#1e3a6d]">
            <Globe className="h-5 w-5" />
          </button>

          {/* Theme */}
          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e2e8f0] bg-white text-[#64748b] transition hover:border-[#1e3a6d]/20 hover:text-[#1e3a6d]">
            <Moon className="h-5 w-5" />
          </button>

          {/* Login */}
          <Link
            href="/login"
            className="text-sm font-semibold text-[#475569] transition hover:text-[#1e3a6d]"
          >
            تسجيل الدخول
          </Link>

          {/* CTA */}
          <Link
            href="/register"
            className="rounded-xl bg-gradient-to-r from-[#1e3a6d] to-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-200 hover:scale-[1.03]"
          >
            ابدأ الآن
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e2e8f0] bg-white text-[#1e3a6d] lg:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#e2e8f0] bg-white lg:hidden">
          <div className="space-y-1 px-5 md:px-10 lg:px-[60px] py-5">
            {/* Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl py-3 text-sm font-medium text-[#475569] transition hover:bg-[#f8fafc] hover:text-[#1e3a6d]"
              >
                {link.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="my-4 border-t border-[#e2e8f0]" />

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Theme */}
              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e2e8f0] text-[#64748b]">
                <Moon className="h-5 w-5" />
              </button>

              {/* Language */}
              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e2e8f0] text-[#64748b]">
                <Globe className="h-5 w-5" />
              </button>

              {/* Login */}
              <Link
                href="/login"
                className="flex-1 rounded-xl border border-[#e2e8f0] py-3 text-center text-sm font-semibold text-[#1e293b]"
              >
                تسجيل الدخول
              </Link>

              {/* CTA */}
              <Link
                href="/register"
                className="flex-1 rounded-xl bg-gradient-to-r from-[#1e3a6d] to-[#2563eb] py-3 text-center text-sm font-semibold text-white"
              >
                ابدأ الآن
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}