"use client";

import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { usePreferences } from "@/providers/PreferencesProvider";

export function SubmitCaseSection() {
  const { landing } = usePreferences();

  return (
    <section className="border-b border-dnv-border bg-dnv-soft px-5 py-20 md:px-10 dark:border-white/10">
      <div className="container mx-auto px-4">
        <div className="mb-14 mx-auto max-w-[58rem] text-center">
          <TitleSectionCommon
            title={landing.submit.title}
            subtitle={landing.submit.subtitle}
          />
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-dnv-border bg-background p-8 shadow-lg shadow-dnv-border/30 dark:border-white/15 md:p-11">
          <form className="space-y-6" aria-label={landing.submit.title}>
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder={landing.submit.patientName}
                name="patient"
                autoComplete="name"
                className="h-14 rounded-xl border border-dnv-border bg-dnv-soft px-5 text-dnv-heading placeholder:text-dnv-muted outline-none transition focus:border-dnv-accent focus:ring-4 focus:ring-dnv-accent/25 dark:border-white/15 dark:text-neutral-100"
              />

              <input
                type="text"
                inputMode="numeric"
                placeholder={landing.submit.age}
                name="age"
                className="h-14 rounded-xl border border-dnv-border bg-dnv-soft px-5 text-dnv-heading placeholder:text-dnv-muted outline-none transition focus:border-dnv-accent focus:ring-4 focus:ring-dnv-accent/25 dark:border-white/15 dark:text-neutral-100"
              />

              <input
                type="text"
                placeholder={landing.submit.caseType}
                name="caseType"
                className="h-14 rounded-xl border border-dnv-border bg-dnv-soft px-5 text-dnv-heading placeholder:text-dnv-muted outline-none transition focus:border-dnv-accent focus:ring-4 focus:ring-dnv-accent/25 dark:border-white/15 dark:text-neutral-100"
              />

              <input
                type="text"
                placeholder={landing.submit.toothNumber}
                name="tooth"
                className="h-14 rounded-xl border border-dnv-border bg-dnv-soft px-5 text-dnv-heading placeholder:text-dnv-muted outline-none transition focus:border-dnv-accent focus:ring-4 focus:ring-dnv-accent/25 dark:border-white/15 dark:text-neutral-100"
              />
            </div>

            <textarea
              rows={5}
              placeholder={landing.submit.notes}
              name="notes"
              className="w-full rounded-xl border border-dnv-border bg-dnv-soft p-5 text-dnv-heading placeholder:text-dnv-muted outline-none transition focus:border-dnv-accent focus:ring-4 focus:ring-dnv-accent/25 dark:border-white/15 dark:text-neutral-100"
            />

            <button
              type="submit"
              className="h-14 w-full rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a6d] transition hover:scale-[1.01] text-gray-300 "
            >
              {landing.submit.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
