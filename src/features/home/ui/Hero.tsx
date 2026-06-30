"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("hero");
  const stats = [
    {
      value: "+3",
      label: t("statUnis"),
    },
    {
      value: "+500",
      label: t("statStudents"),
    },
    {
      value: "+100",
      label: t("statCases"),
    },
  ];

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
      <div
        className="
    absolute inset-0
    bg-hero-overlay
    backdrop-blur-[2px]
  "
      />
      {/* Content */}
      <div
        className="
    relative z-10
    flex min-h-[calc(100svh-5rem)]
    flex-col items-center justify-center

    px-5
    pt-10
    pb-16

    md:px-8
    lg:pb-24
  "
      >        <div className="mx-auto flex max-w-[46rem] flex-col items-center text-center lg:max-w-5xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-[13px] font-medium text-slate-600 shadow-sm backdrop-blur-sm">
            DENOVA — {t("brandTagline")}
          </div>

          {/* Title */}
          <h1 className="text-balance font-extrabold leading-tight tracking-tight text-dnv-heading">
            <span className="block text-[clamp(1.7rem,7vw,3.5rem)]">
              {t("title1")}
            </span>

            <span className="mt-2 block bg-gradient-to-l from-[#60a5fa] via-[#3b82f6] to-[#1e3a6d] bg-clip-text text-[clamp(1.4rem,6vw,2.8rem)] text-transparent">
              {t("title2")}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="
    mx-auto
    mt-6
    mb-10
    max-w-2xl
    px-2
    text-[clamp(0.9rem,3.5vw,1.25rem)]
    leading-relaxed
    text-dnv-muted
  "
          >
            {t("subtitle")}
          </p>
          {/* Buttons */}
          <div className="mb-14
flex w-full
flex-col gap-4

sm:flex-row
sm:justify-center items-stretch justify-center sm:items-center">
            <Link
              href="/signup"
              className="
inline-flex justify-center rounded-xl
bg-gradient-to-r from-[#1e3a6d] to-[#2563eb]
px-8 py-3
text-[clamp(.95rem,3vw,1.1rem)]
font-semibold text-white
shadow-lg shadow-blue-500/20
transition hover:opacity-95 hover:shadow-xl
"            >
              {t("ctaPrimary")}
            </Link>

            <Link
              href="/payment"
              className="
inline-flex justify-center rounded-xl
border border-slate-300
bg-white
px-8 py-3
text-[clamp(.95rem,3vw,1.1rem)]
font-semibold text-[#1e293b]
shadow-sm backdrop-blur-sm
transition hover:border-[#1e3a6d]
"            >
              {t("ctaSecondary")}
            </Link>
          </div>

          {/* Stats */}
          <div
            className="
    flex justify-between items-center gap-4 md:gap-8
  "
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="min-w-[5.5rem] text-center"
              >
                <p
                  className="
    text-3xl md:text-[clamp(1.8rem,6vw,2.85rem)]
    font-bold
    text-dnv-navy
  "
                >
                  {item.value}
                </p>

                <p
                  className="
    mt-2
    text-[clamp(12px,2.7vw,15px)]
    font-medium
    leading-snug
    text-dnv-muted
  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}