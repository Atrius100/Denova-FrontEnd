"use client";

import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { SupportItem } from "@/features/home/ui/SuportItem";
import { useTranslations } from "next-intl";

export function UniversitiesSection() {
  const t = useTranslations("universities");

  return (
    <section className="bg-dnv-soft p-5 md:p-10 lg:p-[60px]">
      <div className="mx-auto mb-5 max-w-[58rem] text-center md:mb-10">
        <TitleSectionCommon
          title={t("title")}
          subtitle={t("subtitle")}
        />
      </div>

      <div
        className="
    mt-6

    flex
    flex-wrap
    justify-between

    gap-4

    lg:grid
    lg:grid-cols-4
    
  "
      >
        {t.raw("branches").map(
          (
            uni: {
              name: string;
              phone: string;
              email: string;
            }
          ) => (
            <div
              key={uni.email}
              className="
  group
   w-full
  sm:w-[300px]
  md:w-[360px]
  lg:w-auto

  rounded-3xl
  border border-dnv-border

  bg-gradient-to-b
  from-background
  to-dnv-soft/50

  p-3 md:p-6
  lg:p-3

  shadow-md
  transition-all
  duration-300

  hover:-translate-y-2
  hover:border-dnv-accent/35
  hover:shadow-2xl
">
              <h3
                className="
    font-bold
    text-dnv-heading
    transition

    text-[clamp(1.05rem,3vw,1.25rem)]

    group-hover:text-dnv-navy
  "
              >                {uni.name}
              </h3>

              <div className="space-y-1.5 md:space-y-3">
                <SupportItem
                  title={
                    uni.name === "Atrius"
                      ? t("support")
                      : t("medicalSupport")
                  }
                  phone={uni.phone}
                  email={uni.email}
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
