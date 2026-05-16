"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Lock, Search } from "lucide-react";

import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { Spinner } from "@/components/ui/Spinner";
import { useAvailableMedicalCases } from "@/features/home/hooks/useAvailableMedicalCases";
import { useAuthSession } from "@/hooks/useAuthSession";
import { usePreferences } from "@/providers/PreferencesProvider";

export function SearchSection() {
  const { landing } = usePreferences();
  const { ready, canAccessCases, isLoggedIn } = useAuthSession();
  const [query, setQuery] = useState("");
  const { data: cases = [], isLoading, isError } = useAvailableMedicalCases();

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
    <section className="border-y border-dnv-border bg-dnv-soft px-5 py-16 md:px-10 md:py-[4.75rem] lg:p-[60px] dark:border-white/10 dark:bg-slate-950">
      <div className="mb-8 mx-auto max-w-[58rem] text-center">
        <TitleSectionCommon
          title={landing.search.title}
          subtitle={landing.search.subtitle}
        />
      </div>

      <div className="mx-auto mb-12 max-w-3xl">
        <div
          className={`flex h-16 items-center gap-3 rounded-full border border-dnv-border/80 bg-background px-7 shadow-xl shadow-dnv-border/35 dark:border-white/15 dark:bg-slate-950 ${!canAccessCases ? "opacity-60" : ""}`}
        >
          <Search className="h-6 w-6 shrink-0 text-dnv-muted" aria-hidden />
          <label className="sr-only" htmlFor="landing-case-search">
            {landing.search.title}
          </label>
          <input
            id="landing-case-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            disabled={!canAccessCases}
            placeholder={landing.search.placeholder}
            className="w-full rounded-full bg-transparent text-dnv-heading outline-none placeholder:text-dnv-muted disabled:cursor-not-allowed dark:text-neutral-50"
          />
        </div>
      </div>

      {!ready ? (
        <div className="flex justify-center py-12">
          <Spinner />
        </div>
      ) : canAccessCases ? (
        <CasesResults
          title={landing.search.resultsTitle}
          loadingLabel={landing.search.loading}
          emptyLabel={landing.search.empty}
          errorLabel={landing.search.error}
          isLoading={isLoading}
          isError={isError}
          items={filtered}
        />
      ) : (
        <LockCard landing={landing} isLoggedIn={isLoggedIn} />
      )}
    </section>
  );
}

type LockLanding = {
  search: {
    lockTitle: string;
    lockDesc: string;
    subscribe: string;
    login: string;
  };
};

function LockCard({
  landing,
  isLoggedIn,
}: {
  landing: LockLanding;
  isLoggedIn: boolean;
}) {
  return (
    <div className="rounded-[2rem] border border-dnv-border bg-background px-8 py-12 text-center shadow-md dark:border-white/15 dark:bg-slate-900 dark:shadow-black/35">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-dnv-accent/15 dark:bg-blue-950/85">
        <Lock className="h-10 w-10 text-dnv-navy dark:text-blue-300" aria-hidden />
      </div>
      <h3 className="mx-auto mb-4 max-w-2xl text-2xl font-bold text-dnv-heading md:text-3xl">
        {landing.search.lockTitle}
      </h3>
      <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-dnv-muted md:text-xl">
        {landing.search.lockDesc}
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/signup"
          className="rounded-full bg-gradient-to-r from-dnv-navy to-dnv-blue px-12 py-[1.125rem] text-lg font-semibold text-white shadow-lg shadow-dnv-accent/35 transition hover:scale-[1.02]"
        >
          {landing.search.subscribe}
        </Link>
        {!isLoggedIn ? (
          <Link
            href="/login"
            className="rounded-full border border-dnv-border px-10 py-[1.125rem] text-lg font-semibold text-dnv-heading transition hover:border-dnv-navy dark:border-white/20"
          >
            {landing.search.login}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function CasesResults({
  title,
  loadingLabel,
  emptyLabel,
  errorLabel,
  isLoading,
  isError,
  items,
}: {
  title: string;
  loadingLabel: string;
  emptyLabel: string;
  errorLabel: string;
  isLoading: boolean;
  isError: boolean;
  items: { id: string; title: string; subtitle: string }[];
}) {
  return (
    <div>
      <h3 className="mb-8 text-center text-2xl font-bold text-dnv-heading">{title}</h3>
      {isLoading ? (
        <div className="flex flex-col items-center gap-4 py-12">
          <Spinner />
          <p className="text-dnv-muted">{loadingLabel}</p>
        </div>
      ) : isError ? (
        <p className="py-8 text-center text-red-600 dark:text-red-400">{errorLabel}</p>
      ) : items.length === 0 ? (
        <p className="py-8 text-center text-dnv-muted">{emptyLabel}</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-dnv-border bg-background p-6 text-start shadow-sm transition hover:border-dnv-accent/40 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
            >
              <h4 className="text-lg font-semibold text-dnv-navy">{item.title}</h4>
              {item.subtitle ? (
                <p className="mt-3 text-sm leading-relaxed text-dnv-muted">{item.subtitle}</p>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
