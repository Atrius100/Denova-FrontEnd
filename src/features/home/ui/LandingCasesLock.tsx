"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";

export function LandingCasesLock() {
  const t = useTranslations("cases");

  return (
    <section className="p-5 md:p-10 lg:p-[60px]">
      <div className="mx-auto mb-5 max-w-[58rem] text-center md:mb-6">
        <TitleSectionCommon
          title={t("title")}
          subtitle={t("subtitle")}
        />
      </div>

      <div
        className="
          mx-auto
          max-w-5xl
          rounded-[2rem]
          border
          border-dnv-border
          bg-background
          px-5
          py-8
          text-center
          shadow-md
          md:px-8
          md:py-10
        "
      >
        <div
          className="
            mx-auto
            mb-5
            flex
            size-16
            items-center
            justify-center
            rounded-full
            bg-dnv-accent/10
            md:size-20
          "
        >
          <Lock
            className="size-7 text-dnv-navy md:size-10"
            aria-hidden
          />
        </div>

        <h3 className="mx-auto mb-4 max-w-2xl text-[clamp(1.4rem,4vw,2rem)] font-bold text-dnv-heading">
          {t("lockTitle")}
        </h3>

        <p className="mx-auto mb-6 max-w-2xl text-[clamp(.95rem,2.8vw,1.1rem)] leading-8 text-dnv-muted md:mb-10">
          {t("lockDesc")}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            "
          >
            {t("signup")}
          </Link>

          <Link
            href="/login"
            className="
              inline-flex justify-center rounded-xl
border border-slate-300
bg-white
px-8 py-3
text-[clamp(.95rem,3vw,1.1rem)]
font-semibold text-[#1e293b]
shadow-sm backdrop-blur-sm
transition hover:border-[#1e3a6d]
            "
          >
            {t("login")}
          </Link>
        </div>
      </div>
    </section>
  );
}