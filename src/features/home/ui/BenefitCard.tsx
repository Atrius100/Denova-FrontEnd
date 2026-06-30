"use client";

import { CheckCircle, GraduationCap, Search } from "lucide-react";

import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { useTranslations } from "next-intl";

export default function BenefitCard() {

const t = useTranslations("benefits");
  const icons = [
    Search,
    GraduationCap,
    CheckCircle,
  ] as const;

  return (
    <section className="bg-dnv-soft px-5 py-14 md:px-10 md:py-16 lg:p-[60px]">
      <div>
        <div className="mb-5 md:mb-10 max-w-[58rem] mx-auto text-center lg:mx-auto">
          <TitleSectionCommon
  title={t("title")}
  subtitle={t("subtitle")}
/>
        </div>

        <div
  className="
    grid
    gap-4

    sm:grid-cols-3

    lg:gap-8
  "
>
  {t.raw("cards").map((title: string, index: number) => {
    const Icon = icons[index];

    return (
      <div
        key={`${title}-${index}`}
        className="
          group
          flex
          md:min-h-[220px]
          flex-col
          items-center
          justify-center

          rounded-3xl
          border border-dnv-border

          bg-gradient-to-b
          from-background
          to-dnv-soft/60

          px-2 py-4
          sm:px-8 sm:py-10

          text-center
          shadow-md

          transition-all
          duration-300

          hover:-translate-y-2
          hover:border-dnv-navy/20
          hover:shadow-2xl
        "
      >
        {/* Icon */}
        <div className="mb-2 md:mb-6 flex justify-center">
          <div
            className="
              flex
              size-10
              items-center justify-center

              rounded-2xl

              bg-dnv-accent/15
              text-dnv-navy

              transition-all

              group-hover:bg-dnv-navy
              group-hover:text-white

              size-14
            "
          >
            <Icon
              className="h-6 w-6 sm:h-7 sm:w-7"
              aria-hidden
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className="
            text-dnv-heading
            font-semibold
            leading-snug

            text-[clamp(1.1rem,4vw,1.5rem)]
          "
        >
          {title}
        </h3>

        {/* Line */}
        <div className="mx-auto mt-2 md:mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-dnv-navy to-dnv-accent" />
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}
