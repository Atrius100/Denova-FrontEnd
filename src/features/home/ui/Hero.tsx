"use client"

import Link from "next/link"
import { LANDING_HERO } from "@/config/landing"

export function HeroSection() {
  return (
    <section className="relative -mt-20 min-h-screen overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bghero.png')" }}
      />
      <div className="absolute inset-0 bg-white/62 backdrop-blur-[1px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/90 to-transparent" />

      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 pb-24 pt-12">
        <div className="mx-auto flex max-w-[46rem] flex-col items-center text-center lg:max-w-5xl">
          <div className="mb-8 inline-flex items-center rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-[13px] font-medium text-slate-500 shadow-sm backdrop-blur-sm">
            {LANDING_HERO.badge}
          </div>

          <h1 className="font-extrabold leading-[1.12] tracking-tight text-[#1e3a6d]">
            <span className="block text-[clamp(1.75rem,4.5vw,3.25rem)]">
              {LANDING_HERO.title1}
            </span>
            <span className="mt-3 block bg-gradient-to-l from-[#3b82f6] via-[#2563eb] to-[#1e3a6d] bg-clip-text text-[clamp(1.6rem,3.75vw,2.5rem)] text-transparent">
              {LANDING_HERO.title2}
            </span>
          </h1>

          <p className="mx-auto mb-14 mt-10 max-w-2xl text-lg leading-relaxed text-slate-500 sm:text-xl">
            {LANDING_HERO.subtitle}
          </p>

          <div className="mb-20 flex w-full flex-col items-stretch justify-center gap-5 sm:flex-row sm:items-center">
            <Link
              href="/signup"
              className="inline-flex justify-center rounded-xl bg-gradient-to-r from-[#1e3a6d] to-[#3b82f6] px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95"
            >
              {LANDING_HERO.ctaPrimary}
            </Link>
            <Link
              href="/payment?plan=semester"
              className="inline-flex justify-center rounded-xl border border-slate-200 bg-white px-10 py-4 text-lg font-semibold text-[#1e3a6d] shadow-sm transition hover:border-[#1e3a6d] hover:bg-slate-50"
            >
              {LANDING_HERO.ctaSecondary}
            </Link>
          </div>

          <div className="mx-auto flex flex-wrap justify-center gap-12 pt-8 sm:gap-20">
            <div className="min-w-[5.5rem] text-center">
              <div className="text-4xl font-bold text-[#1e3a6d] md:text-5xl">
                +10
              </div>
              <div className="mt-3 text-sm font-medium text-slate-500">
                {LANDING_HERO.statUnis}
              </div>
            </div>
            <div className="min-w-[5.5rem] text-center">
              <div className="text-4xl font-bold text-[#1e3a6d] md:text-5xl">
                +500
              </div>
              <div className="mt-3 text-sm font-medium text-slate-500">
                {LANDING_HERO.statStudents}
              </div>
            </div>
            <div className="min-w-[5.5rem] text-center">
              <div className="text-4xl font-bold text-[#1e3a6d] md:text-5xl">
                +1000
              </div>
              <div className="mt-3 text-sm font-medium text-slate-500">
                {LANDING_HERO.statCases}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
