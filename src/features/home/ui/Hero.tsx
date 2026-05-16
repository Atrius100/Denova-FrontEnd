"use client";

import Link from "next/link";

import { usePreferences } from "@/providers/PreferencesProvider";

export function HeroSection() {
  const { landing } = usePreferences();

  return (
    <section className="relative -mt-20 min-h-screen overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bghero.png')",
        }}
      />

      <div className="absolute inset-0 bg-white/62 backdrop-blur-[1px] dark:bg-slate-950/55 dark:backdrop-blur-sm" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/85 to-transparent dark:from-background/95" />

      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 pb-24 pt-12">
        <div className="mx-auto flex max-w-[46rem] flex-col items-center text-center lg:max-w-5xl">
          <div className="mb-8 inline-flex items-center rounded-full border border-dnv-border/80 bg-background/65 px-4 py-2 text-[13px] font-medium text-dnv-muted shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-slate-900/65">
            DENOVA — {landing.nav.brandTagline}
          </div>

          <h1 className="font-extrabold leading-[1.12] tracking-tight text-dnv-heading dark:text-neutral-50 text-balance">
            <span className="block text-[clamp(1.75rem,4.5vw,3.25rem)]">
              {landing.hero.title1}
            </span>
            <span className="mt-3 block bg-gradient-to-l from-dnv-accent via-dnv-blue to-dnv-navy bg-clip-text text-[clamp(1.6rem,3.75vw,2.5rem)] text-transparent dark:from-blue-300 dark:to-sky-200">
              {landing.hero.title2}
            </span>
          </h1>

          <p className="mx-auto mb-14 mt-10 max-w-2xl text-lg leading-relaxed text-dnv-muted sm:text-xl">
            {landing.hero.subtitle}
          </p>

          <div className="mb-20 flex w-full flex-col items-stretch justify-center gap-5 sm:flex-row sm:items-center">
            <Link
              href="/register"
              className="inline-flex justify-center rounded-xl bg-gradient-to-r from-dnv-navy to-dnv-blue px-10 py-[1.05rem] text-lg font-semibold text-white shadow-lg shadow-dnv-accent/25 transition hover:opacity-[0.95] hover:shadow-xl"
            >
              {landing.hero.ctaPrimary}
            </Link>

            <Link
              href="/cases"
              className="inline-flex justify-center rounded-xl border border-dnv-border bg-background px-10 py-[1.05rem] text-lg font-semibold text-dnv-heading shadow-sm backdrop-blur-sm transition hover:border-dnv-navy hover:bg-background dark:border-neutral-700 dark:bg-slate-900/90 dark:text-neutral-100"
            >
              {landing.hero.ctaSecondary}
            </Link>
          </div>

          <div className="mx-auto mt-auto flex flex-wrap justify-center gap-12 pt-8 sm:gap-20">
            <div className="min-w-[5.5rem] text-center">
              <div className="text-4xl font-bold text-dnv-navy md:text-[2.85rem]">
                +10
              </div>
              <div className="mt-3 text-[15px] font-medium leading-snug text-dnv-muted">
                {landing.hero.statUnis}
              </div>
            </div>
            <div className="min-w-[5.5rem] text-center">
              <div className="text-4xl font-bold text-dnv-navy md:text-[2.85rem]">
                +500
              </div>
              <div className="mt-3 text-[15px] font-medium leading-snug text-dnv-muted">
                {landing.hero.statStudents}
              </div>
            </div>
            <div className="min-w-[5.5rem] text-center">
              <div className="text-4xl font-bold text-dnv-navy md:text-[2.85rem]">
                +1000
              </div>
              <div className="mt-3 text-[15px] font-medium leading-snug text-dnv-muted">
                {landing.hero.statCases}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
