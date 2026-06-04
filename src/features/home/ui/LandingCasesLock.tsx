"use client";

import Link from "next/link";
import { Lock } from "lucide-react";

import { usePreferences } from "@/providers/PreferencesProvider";

export function LandingCasesLock() {
  const { landing } = usePreferences();

  return (
    <div className="rounded-[2rem] border border-dnv-border bg-background px-8 py-12 text-center shadow-md">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-dnv-accent/15">
        <Lock className="h-10 w-10 text-dnv-navy" aria-hidden />
      </div>
      <h3 className="mx-auto mb-4 max-w-2xl text-2xl font-bold text-dnv-heading md:text-3xl">
        {landing.cases.lockTitle}
      </h3>
      <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-dnv-muted md:text-xl">
        {landing.cases.lockDesc}
      </p>
      <Link
        href="/login"
        className="inline-flex rounded-full bg-gradient-to-r from-dnv-navy to-dnv-blue px-12 py-[1.125rem] text-lg font-semibold text-white shadow-lg shadow-dnv-accent/35 transition hover:scale-[1.02]"
      >
        {landing.cases.login}
      </Link>
    </div>
  );
}
