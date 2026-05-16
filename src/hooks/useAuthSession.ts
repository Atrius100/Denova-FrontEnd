"use client";

import { useEffect, useState } from "react";

import {
  canAccessMedicalCases,
  readAuthSession,
  type AuthSession,
} from "@/lib/auth/session";

export function useAuthSession() {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSession(readAuthSession());
    setReady(true);

    const onStorage = () => setSession(readAuthSession());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return {
    session,
    ready,
    isLoggedIn: Boolean(session?.token),
    canAccessCases: canAccessMedicalCases(session),
  };
}
