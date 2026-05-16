"use client";

import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { ToothPattern } from "@/components/ui/ToothBattren";
import { usePreferences } from "@/providers/PreferencesProvider";

export function JourneySection() {
  const { landing } = usePreferences();

  return (
    <section className="relative overflow-hidden bg-dnv-deep py-20 md:py-24">
      <div className="absolute inset-0 opacity-[0.09] dark:opacity-[0.06]">
        <ToothPattern />
      </div>

      <div className="relative z-10 px-5 md:px-10 lg:px-[60px]">
        <div className="mb-20 mx-auto max-w-[58rem] text-center">
          <TitleSectionCommon
            title={landing.journey.title}
            subtitle={landing.journey.subtitle}
            classh="text-white"
            className2="text-lg text-blue-50/95 md:text-xl"
          />
        </div>

        <div className="flex flex-wrap justify-between gap-16 md:flex-nowrap md:gap-6 lg:gap-12">
          {landing.journey.steps.map((step, index) => (
            <div key={`${step.title}-${index}`} className="min-w-[10rem] flex-1 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-dnv-accent bg-dnv-deep-mid text-2xl font-bold text-white shadow-xl">
                {index + 1}
              </div>

              <div className="mt-6 px-3">
                <h3 className="mb-3 text-xl font-semibold text-white lg:text-2xl">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-7 text-blue-50/92 md:text-base">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
