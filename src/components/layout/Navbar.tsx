
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { NAV_LINKS } from "@/config/navigation";
// import ThemeToggle from "../ThemeToggle";

// export default function Navbar() {
//   const [active, setActive] = useState("hero");
//   const [open, setOpen] = useState(false);
//   const [style, setStyle] = useState({ width: 0, left: 0 });

//   const refs = useRef<Record<string, HTMLAnchorElement | null>>({});

//   // ✅ Scroll Spy
//   useEffect(() => {
//     const handleScroll = () => {
//       let current = NAV_LINKS[0].id;

//       NAV_LINKS.forEach((link) => {
//         const el = document.getElementById(link.id);
//         if (!el) return;

//         const rect = el.getBoundingClientRect();

//         if (rect.top <= 150 && rect.bottom >= 150) {
//           current = link.id;
//         }
//       });

//       setActive(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Underline animation
//   useEffect(() => {
//     const el = refs.current[active];
//     if (!el) return;

//     const rect = el.getBoundingClientRect();
//     const parentRect = el.parentElement?.getBoundingClientRect();

//     if (!parentRect) return;

//     setStyle({
//       width: rect.width,
//       left: rect.left - parentRect.left,
//     });
//   }, [active]);

//   // ✅ scroll click
//   const handleScroll = (e: React.MouseEvent, id: string) => {
//     e.preventDefault();

//     const el = document.getElementById(id);
//     if (!el) return;

//     el.scrollIntoView({ behavior: "smooth" });
//     setOpen(false);
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl">
//       <nav className="flex flex-row-reverse justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">

//         {/* Logo */}
//         <div className="text-2xl font-black">DENOVA</div>

//         {/* Links */}
//         <div className="relative hidden md:flex flex-row-reverse gap-8">

//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.id}
//               href={`#${link.id}`}
//               ref={(el) => (refs.current[link.id] = el)}
//               onClick={(e) => handleScroll(e, link.id)}
//               className={`pb-2 transition-colors duration-300 ${active === link.id
//                   ? "text-blue-600 font-bold"
//                   : "text-slate-600 hover:text-blue-500"
//                 }`}
//             >
//               {link.label}
//             </Link>
//           ))}

//           {/* underline */}
//           <span
//             className="absolute bottom-0 h-[2px] bg-blue-600 transition-all duration-300"
//             style={{
//               width: style.width,
//               left: style.left,
//             }}
//           />
//         </div>

//         {/* Actions */}
//         <div className="flex items-center gap-3">

//           <button className="bg-[var(--denova-primary)] text-white px-5 py-2 rounded-full">
//             ابدأ الآن
//           </button>

//           <button className="text-[var(--denova-primary)]">
//             تسجيل الدخول
//           </button>

//           <button onClick={() => setOpen(!open)} className="md:hidden">
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>
//       <div className="flex items-center gap-3">
//         <ThemeToggle />
//       </div>
//       </nav>
//       {/* Mobile */}
//       {open && (
//         <div className="md:hidden bg-white p-6 flex flex-col gap-4 text-right">

//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.id}
//               href={`#${link.id}`}
//               onClick={(e) => handleScroll(e, link.id)}
//               className={`${active === link.id
//                   ? "text-blue-600 font-bold"
//                   : "text-slate-600"
//                 }`}
//             >
//               {link.label}
//             </Link>
//           ))}

//         </div>
//       )}
//     </header>
//   );
// }
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