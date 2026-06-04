"use client";

import { CheckCircle, GraduationCap, Search } from "lucide-react";

import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { usePreferences } from "@/providers/PreferencesProvider";

export default function BenefitCard() {
  const { landing } = usePreferences();
  const icons = [
    Search,
    GraduationCap,
    CheckCircle,
  ] as const;

  return (
    <section className="bg-dnv-soft px-5 py-14 md:px-10 md:py-16 lg:p-[60px]">
      <div>
        <div className="mb-16 max-w-[58rem] mx-auto text-center lg:mx-auto">
          <TitleSectionCommon
            title={landing.benefits.title}
            subtitle={landing.benefits.subtitle}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {landing.benefits.cards.map((title, index) => {
            const Icon = icons[index];

            return (
              <div
                key={`${title}-${index}`}
                className="group rounded-3xl border border-dnv-border bg-gradient-to-b from-background to-dnv-soft/60 p-10 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:border-dnv-navy/20 hover:shadow-2xl"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-dnv-accent/15 text-dnv-navy transition group-hover:bg-dnv-navy group-hover:text-white ">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold leading-snug text-dnv-heading">
                  {title}
                </h3>

                <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-dnv-navy to-dnv-accent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
