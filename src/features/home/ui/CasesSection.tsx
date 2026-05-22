"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { Spinner } from "@/components/ui/Spinner";
import { LandingCasesLock } from "@/features/home/ui/LandingCasesLock";
import { useLandingMedicalCases } from "@/features/home/ui/hook/useLandingMedicalCases";
import { useAuthSession } from "@/hooks/useAuthSession";
import { usePreferences } from "@/providers/PreferencesProvider";

export function CasesSection() {
  const { landing } = usePreferences();
  const { ready, isLoggedIn } = useAuthSession();
  const [query, setQuery] = useState("");
  const { data: cases = [], isLoading, isError } = useLandingMedicalCases();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cases;
    return cases.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q),
    );
  }, [cases, query]);

  return (
    <section id="cases" className="border-y border-dnv-border bg-background px-5 py-14 md:px-10 md:py-16 lg:p-[60px]">
      <div className="mb-10 mx-auto max-w-[58rem] text-center">
        <TitleSectionCommon
          title={landing.cases.title}
          subtitle={landing.cases.subtitle}
        />
      </div>

      {!ready ? (
        <div className="flex justify-center py-16">
          <Spinner />
        </div>
      ) : !isLoggedIn ? (
        <LandingCasesLock />
      ) : (
        <>
          <div className="mx-auto mb-10 max-w-3xl">
            <div className="flex h-14 items-center gap-3 rounded-full border border-dnv-border bg-dnv-soft px-6 dark:bg-slate-900">
              <Search className="h-5 w-5 shrink-0 text-dnv-muted" aria-hidden />
              <label className="sr-only" htmlFor="cases-section-search">
                {landing.cases.searchPlaceholder}
              </label>
              <input
                id="cases-section-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={landing.cases.searchPlaceholder}
                className="w-full bg-transparent text-dnv-heading outline-none placeholder:text-dnv-muted"
              />
            </div>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center gap-4 py-12">
              <Spinner />
              <p className="text-dnv-muted">{landing.cases.loading}</p>
            </div>
          ) : isError ? (
            <p className="py-8 text-center text-red-600 dark:text-red-400">
              {landing.cases.error}
            </p>
          ) : filtered.length === 0 ? (
            <p className="py-8 text-center text-dnv-muted">{landing.cases.empty}</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-dnv-border bg-gradient-to-b from-background to-dnv-soft/40 p-5 shadow-sm transition hover:border-dnv-accent/40 hover:shadow-lg dark:border-white/10"
                >
                  <h3 className="text-lg font-semibold text-dnv-navy">{item.title}</h3>
                  {item.subtitle ? (
                    <p className="mt-2 text-sm leading-relaxed text-dnv-muted">
                      {item.subtitle}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
