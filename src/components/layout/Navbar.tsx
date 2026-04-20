"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/config/navigation";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState({ width: 0, left: 0 });

  const refs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // ✅ Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      let current = NAV_LINKS[0].id;

      NAV_LINKS.forEach((link) => {
        const el = document.getElementById(link.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = link.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Underline animation
  useEffect(() => {
    const el = refs.current[active];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement?.getBoundingClientRect();

    if (!parentRect) return;

    setStyle({
      width: rect.width,
      left: rect.left - parentRect.left,
    });
  }, [active]);

  // ✅ scroll click
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl">
      <nav className="flex flex-row-reverse justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="text-2xl font-black">DENOVA</div>

        {/* Links */}
        <div className="relative hidden md:flex flex-row-reverse gap-8">

          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              ref={(el) => (refs.current[link.id] = el)}
              onClick={(e) => handleScroll(e, link.id)}
              className={`pb-2 transition-colors duration-300 ${
                active === link.id
                  ? "text-blue-600 font-bold"
                  : "text-slate-600 hover:text-blue-500"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* underline */}
          <span
            className="absolute bottom-0 h-[2px] bg-blue-600 transition-all duration-300"
            style={{
              width: style.width,
              left: style.left,
            }}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <button className="bg-[var(--denova-primary)] text-white px-5 py-2 rounded-full">
            ابدأ الآن
          </button>

          <button className="text-[var(--denova-primary)]">
            تسجيل الدخول
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="md:hidden bg-white p-6 flex flex-col gap-4 text-right">

          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className={`${
                active === link.id
                  ? "text-blue-600 font-bold"
                  : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

        </div>
      )}
    </header>
  );
}