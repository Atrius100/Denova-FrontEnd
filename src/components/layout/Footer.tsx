"use client";

import { usePreferences } from "@/providers/PreferencesProvider";

export function Footer() {
  const { landing } = usePreferences();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dnv-border bg-dnv-navy text-white dark:border-white/10 dark:bg-slate-950">
      <p className="my-7 px-4 text-center text-[15px] font-medium text-white/80">
        {landing.footer.rights} &copy; {currentYear} Denova.
      </p>
    </footer>
  );
}
