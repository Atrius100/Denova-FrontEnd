"use client";

import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { SupportItem } from "@/features/home/ui/SuportItem";
import { usePreferences } from "@/providers/PreferencesProvider";

export function UniversitiesSection() {
  const { landing } = usePreferences();

  return (
    <section className="bg-dnv-soft px-5 py-14 md:px-10 lg:p-[60px]">
      <div className="space-y-3 text-center mx-auto max-w-[58rem] mb-14">
        <TitleSectionCommon
          title={landing.universities.title}
          subtitle={landing.universities.subtitle}
        />
      </div>

      <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {landing.universities.branches.map((uni) => (
          <div
            key={uni.email}
            className="group space-y-5 rounded-3xl border border-dnv-border bg-gradient-to-b from-background to-dnv-soft/50 p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:border-dnv-accent/35 hover:shadow-2xl "
          >
            <h3 className="text-xl font-bold text-dnv-heading transition group-hover:text-dnv-navy">
              {uni.name}
            </h3>

            <div className="space-y-3">
              <SupportItem
                title={
                  uni.name === "Atrius"
                    ? landing.universities.support
                    : landing.universities.medicalSupport
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
