"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { Spinner } from "@/components/ui/Spinner";
import { LandingCasesLock } from "@/features/home/ui/LandingCasesLock";
import { useLandingMedicalCases } from "@/features/home/ui/hook/useLandingMedicalCases";
import { useAuthSession } from "@/hooks/useAuthSession";
import { useTranslations } from "next-intl";


export function CasesSection() {
const t = useTranslations("cases");
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
      <div className="mb-5 md:mb-10 mx-auto max-w-[58rem] text-center">
        <TitleSectionCommon
          title={t("title")}
          subtitle={t("subtitle")}
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
            <div className="
  flex
  h-12 md:h-14

  items-center
  gap-3

  rounded-full
  border border-dnv-border

  bg-dnv-soft

  px-5 md:px-6
">
              <Search className="h-5 w-5 shrink-0 text-dnv-muted" aria-hidden />
              <label className="sr-only" htmlFor="cases-section-search">
                {t("searchPlaceholder")}
              </label>
              <input
                id="cases-section-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full bg-transparent text-dnv-heading outline-none placeholder:text-dnv-muted"
              />
            </div>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center gap-4 py-12">
              <Spinner />
              <p className="text-dnv-muted">{t("loading")}</p>
            </div>
          ) : isError ? (
            <p className="py-8 text-center text-red-600 dark:text-red-400">
              {t("error")}
            </p>
          ) : filtered.length === 0 ? (
            <p className="py-8 text-center text-dnv-muted">{t("empty")}</p>
          ) : (
<div
  className="
    grid
    gap-4

    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4

    lg:gap-8
  "
>              {filtered.map((item) => (
             <article
  key={item.id}
  className="
    rounded-3xl
    border border-dnv-border

    bg-dnv-soft
    p-5

    shadow-sm
    transition-all
    duration-300

    hover:-translate-y-1
    hover:border-dnv-accent/30
    hover:shadow-xl
  "
>
  <h3
    className="
      text-dnv-navy
      font-semibold

      text-[clamp(1rem,3vw,1.2rem)]
    "
  >
    {item.title}
  </h3>

  {item.subtitle && (
    <p
      className="
        mt-3
        leading-7
        text-dnv-muted

        text-[clamp(.9rem,2.5vw,1rem)]
      "
    >
      {item.subtitle}
    </p>
  )}
</article>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
