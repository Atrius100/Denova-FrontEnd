"use client";

import Link from "next/link";
import { usePreferences } from "@/providers/PreferencesProvider";

export function HeroSection() {
  const { landing } = usePreferences();

  return (
    <section className="relative -mt-20 min-h-screen overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bghero.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 pb-24 pt-12">
        <div className="mx-auto flex max-w-[46rem] flex-col items-center text-center lg:max-w-5xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-[13px] font-medium text-slate-600 shadow-sm backdrop-blur-sm">
            DENOVA — {landing.nav.brandTagline}
          </div>

          {/* Title */}
          <h1 className="text-balance font-extrabold leading-[1.12] tracking-tight text-[#1e293b]">
            <span className="block text-[clamp(1.75rem,4.5vw,3.25rem)]">
              {landing.hero.title1}
            </span>

            <span className="mt-3 block bg-gradient-to-l from-[#3b82f6] via-[#2563eb] to-[#1e3a6d] bg-clip-text text-[clamp(1.6rem,3.75vw,2.5rem)] text-transparent">
              {landing.hero.title2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-14 mt-10 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            {landing.hero.subtitle}
          </p>

          {/* Buttons */}
          <div className="mb-20 flex w-full flex-col items-stretch justify-center gap-5 sm:flex-row sm:items-center">
            <Link
              href="/signup"
              className="inline-flex justify-center rounded-xl bg-gradient-to-r from-[#1e3a6d] to-[#2563eb] px-10 py-[14px] text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95 hover:shadow-xl"
            >
              {landing.hero.ctaPrimary}
            </Link>

            <Link
              href="/payment"
              className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-10 py-[13px] text-lg font-semibold text-[#1e293b] shadow-sm backdrop-blur-sm transition hover:border-[#1e3a6d]"
            >
              {landing.hero.ctaSecondary}
            </Link>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-auto flex flex-wrap justify-center gap-12 pt-8 sm:gap-20">
            <div className="min-w-[5.5rem] text-center">
              <div className="text-4xl font-bold text-[#1e3a6d] md:text-[2.85rem]">
                +3
              </div>

              <div className="mt-3 text-[15px] font-medium leading-snug text-slate-600">
                {landing.hero.statUnis}
              </div>
            </div>

            <div className="min-w-[5.5rem] text-center">
              <div className="text-4xl font-bold text-[#1e3a6d] md:text-[2.85rem]">
                +500
              </div>

              <div className="mt-3 text-[15px] font-medium leading-snug text-slate-600">
                {landing.hero.statStudents}
              </div>
            </div>

            <div className="min-w-[5.5rem] text-center">
              <div className="text-4xl font-bold text-[#1e3a6d] md:text-[2.85rem]">
                +100
              </div>

              <div className="mt-3 text-[15px] font-medium leading-snug text-slate-600">
                {landing.hero.statCases}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}