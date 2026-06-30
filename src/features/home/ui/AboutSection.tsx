"use client";

import Image from "next/image";
import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="
      border-b border-dnv-border
      bg-background
      px-5 py-12
      md:px-10 md:py-16
      lg:px-[60px] lg:py-[80px]
    ">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-10

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-16
        "
      >
        {/* Text */}
        <div className="w-full lg:flex-1">
          <TitleSectionCommon
            title={t("title")}
            subtitle={t("p1")}
            className2="
              text-dnv-muted
              text-[clamp(0.95rem,3vw,1.15rem)]
              leading-8
            "
          />

          <div className=" mt-2 md:mt-8">
            <TitleSectionCommon
              subtitle={t("p2")}
              className2="
                text-dnv-muted
                text-[clamp(0.95rem,3vw,1.15rem)]
                leading-8
              "
            />
          </div>
        </div>

        {/* Image */}
        <div
          className="
            w-full
            max-w-[320px]

            sm:max-w-[380px]
            md:max-w-[450px]
            lg:max-w-[500px]
          "
        >
          <Image
            src="/abouthand.png"
            alt={t("imageAlt")}
            width={500}
            height={500}
            priority
            className="
              h-auto
              w-full
              rounded-3xl
              border border-dnv-border/60
              object-contain
              shadow-sm
              dark:border-white/15
            "
          />
        </div>
      </div>
    </section>
  );
}