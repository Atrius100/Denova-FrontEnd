"use client"

import { useEffect, useState } from "react"
import {
  isLoggedIn as checkLoggedIn,
  readAuthSession,
  type AuthSession,
} from "@/lib/auth/session"

export function useAuthSession() {
  const [session, setSession] =
    useState<AuthSession | null>(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [ready, setReady] = useState(false)

  const refresh = () => {
    setSession(readAuthSession())
    setLoggedIn(checkLoggedIn())
  }

  useEffect(() => {
    refresh()
    setReady(true)

    const onStorage = () => refresh()
    window.addEventListener("storage", onStorage)
    return () =>
      window.removeEventListener("storage", onStorage)
  }, [])

  return {
    session,
    ready,
    isLoggedIn: loggedIn,
  }
}
