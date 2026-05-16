"use client";

import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { Spinner } from "@/components/ui/Spinner";
import { useCaseCategories } from "@/features/home/hooks/useCaseCategories";
import { usePreferences } from "@/providers/PreferencesProvider";

export function CasesSection() {
  const { landing } = usePreferences();
  const { data, isLoading, isError } = useCaseCategories();

  const fallbackItems = landing.cases.items.map((label, index) => ({
    id: index,
    label,
  }));

  const items = data && data.length > 0 ? data : fallbackItems;
  const fromApi = Boolean(data && data.length > 0);

  return (
    <section className="border-y border-dnv-border bg-background px-5 py-14 md:px-10 md:py-16 lg:p-[60px]">
      <div>
        <div className="mb-16 mx-auto max-w-[58rem] text-center">
          <TitleSectionCommon
            title={landing.cases.title}
            subtitle={landing.cases.subtitle}
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center py-16">
            <Spinner />
          </div>
        ) : (
          <>
            {isError && !fromApi ? (
              <p className="mb-8 text-center text-sm text-amber-700 dark:text-amber-300">
                {landing.cases.fallbackNotice}
              </p>
            ) : null}

            <div className="grid gap-6 md:grid-cols-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl border border-dnv-border bg-gradient-to-b from-background to-dnv-soft/40 py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-dnv-accent/40 hover:shadow-xl dark:border-white/10 dark:to-slate-950/90"
                >
                  <h3 className="px-4 text-xl font-semibold leading-snug text-dnv-heading transition group-hover:text-dnv-navy">
                    {item.label}
                  </h3>
                  <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-dnv-navy to-dnv-accent" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
