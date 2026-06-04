"use client";
import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { usePreferences } from "@/providers/PreferencesProvider";

export function SearchSection() {
  const { landing } = usePreferences();
  return (
    <section className="  p-5 md:p-10 lg:p-[60px]">
      <div className="">
        {/* Title */}
        <div className="mb-16 text-center">
          <TitleSectionCommon title={landing.cases.title}
            subtitle={landing.cases.subtitle}
          />

        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {landing.cases.items.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-300  py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#1e3a6d]/20 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold  transition group-hover:text-[#1e3a6d]">
                {item}
              </h3>

              <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#1e3a6d] to-[#3b82f6]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}