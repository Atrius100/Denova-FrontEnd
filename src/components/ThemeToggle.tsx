"use client";

import { Moon, Sun } from "lucide-react";
import { usePreferences } from "@/providers/PreferencesProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } =
    usePreferences();

  return (
    <button
      onClick={toggleTheme}
      className="
        flex h-11 w-11 items-center justify-center
        rounded-xl border border-dnv-border
        bg-background
        transition
      "
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-amber-400" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}