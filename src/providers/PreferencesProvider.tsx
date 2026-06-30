"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

const THEME_KEY = "denova-theme";

type PreferencesContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const PreferencesContext =
  createContext<PreferencesContextValue | null>(null);

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle(
    "dark",
    theme === "dark"
  );
}

export function PreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] =
    useState<Theme>("light");

  useEffect(() => {
    const storedTheme =
      localStorage.getItem(THEME_KEY) as Theme | null;

    const initialTheme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : "light";

    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const setTheme = useCallback((theme: Theme) => {
    setThemeState(theme);
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next =
        prev === "dark"
          ? "light"
          : "dark";

      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);

      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error(
      "usePreferences must be used within PreferencesProvider"
    );
  }

  return context;
}