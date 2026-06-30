"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import { useTranslations } from "next-intl";


export function LandingCasesLock() {
  const t = useTranslations("cases");
  return (
    <div
      className="
    rounded-[2rem]
    border border-dnv-border

    bg-background
    py-4 md:py-8

    px-5
    md:px-8

    text-center
    shadow-md
  "
    >
      <div
        className="
    mx-auto mb-5

    flex size-16 md:size-20
    items-center justify-center

    rounded-full

    bg-dnv-accent/10
  "
      >        <Lock className="size-7 md:size-10 text-dnv-navy" aria-hidden />
      </div>
      <h3 className="mx-auto mb-4 max-w-2xl  font-bold text-dnv-heading text-[clamp(1.4rem,4vw,2rem)]">
        {t("lockTitle")}
      </h3>
      <p className="mx-auto mb-4 md:mb-10 max-w-2xl text-dnv-muted text-[clamp(.95rem,2.8vw,1.1rem)]">
        {t("lockDesc")}
      </p>
      <Link
        href="/login"
        className="
  inline-flex
  rounded-full

  bg-gradient-to-br from-[#2563eb] to-[#1e3a6d]

  px-10 py-4

  text-base
  font-semibold
  text-white

  shadow-lg

  transition
  hover:scale-[1.02]
"      >
        {t("login")}
      </Link>
    </div>
  );
}
