"use client";

import Image from "next/image";

import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { usePreferences } from "@/providers/PreferencesProvider";

export function AboutSection() {
  const { landing } = usePreferences();

  return (
    <section className="border-b border-dnv-border bg-background px-5 py-12 md:px-10 md:py-14 lg:p-[60px]">
      <div className="flex flex-col items-center gap-14 lg:flex-row lg:justify-between lg:gap-12">
        <div className="w-full lg:w-[50%]">
          <TitleSectionCommon
            title={landing.about.title}
            subtitle={landing.about.p1}
          />

          <div className="mt-12">
            <TitleSectionCommon subtitle={landing.about.p2} />
          </div>
        </div>

        <div className="flex w-full max-w-xl justify-center lg:max-w-none lg:w-auto">
          <Image
            src="/abouthand.png"
            alt={landing.about.imageAlt}
            width={500}
            height={500}
            className="h-auto rounded-3xl border border-dnv-border/60 object-contain shadow-sm dark:border-white/15"
            priority
          />
        </div>
      </div>
    </section>
  );
}
