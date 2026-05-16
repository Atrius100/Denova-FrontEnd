"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  type LandingCopy,
  type Locale,
  landingMessages,
} from "@/i18n/landing-messages";

type Theme = "light" | "dark";

const THEME_KEY = "denova-theme";
const LOCALE_KEY = "denova-locale";

type PreferencesContextValue = {
  theme: Theme;
  locale: Locale;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  landing: LandingCopy;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(
  null,
);

function applyDomTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function applyDomLocale(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
}

export function PreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    const storedLocale = localStorage.getItem(LOCALE_KEY) as Locale | null;

    const initialTheme: Theme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    const initialLocale: Locale =
      storedLocale === "en" || storedLocale === "ar"
        ? storedLocale
        : "ar";

    setThemeState(initialTheme);
    setLocaleState(initialLocale);
    applyDomTheme(initialTheme);
    applyDomLocale(initialLocale);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem(THEME_KEY, t);
    applyDomTheme(t);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      applyDomTheme(next);
      return next;
    });
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(LOCALE_KEY, l);
    applyDomLocale(l);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "ar" ? "en" : "ar";
      localStorage.setItem(LOCALE_KEY, next);
      applyDomLocale(next);
      return next;
    });
  }, []);

  const landing = landingMessages[locale];

  const value = useMemo(
    () => ({
      theme,
      locale,
      setTheme,
      toggleTheme,
      setLocale,
      toggleLocale,
      landing,
    }),
    [
      theme,
      locale,
      setTheme,
      toggleTheme,
      setLocale,
      toggleLocale,
      landing,
    ],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }
  return ctx;
}
