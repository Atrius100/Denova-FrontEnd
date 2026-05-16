"use client";

import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { SupportItem } from "@/features/home/ui/SuportItem";
import { usePreferences } from "@/providers/PreferencesProvider";

const universities = [
  {
    name: "Damascus University",
    phone: "0911111111",
    email: "damascus@denova.com",
  },
  {
    name: "Tishreen University",
    phone: "0933333333",
    email: "tishreen@denova.com",
  },
  {
    name: "Aleppo University",
    phone: "0922222222",
    email: "aleppo@denova.com",
  },
  {
    name: "Al-Baath University",
    phone: "0944444444",
    email: "baath@denova.com",
  },
];

export function UniversitiesSection() {
  const { landing } = usePreferences();

  return (
    <section className="bg-dnv-soft px-5 py-14 md:px-10 lg:p-[60px] dark:bg-slate-950">
      <div className="space-y-3 text-center mx-auto max-w-[58rem] mb-14">
        <TitleSectionCommon
          title={landing.universities.title}
          subtitle={landing.universities.subtitle}
        />
      </div>

      <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {universities.map((uni) => (
          <div
            key={uni.email}
            className="group space-y-5 rounded-3xl border border-dnv-border bg-gradient-to-b from-background to-dnv-soft/50 p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:border-dnv-accent/35 hover:shadow-2xl dark:border-white/10 dark:from-slate-950 dark:to-slate-950/80"
          >
            <h3 className="text-xl font-bold text-dnv-heading transition group-hover:text-dnv-navy">
              {uni.name}
            </h3>

            <div className="space-y-3">
              <SupportItem
                title={landing.universities.medicalSupport}
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
