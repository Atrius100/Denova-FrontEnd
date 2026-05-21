"use client"

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import type {
  AdminSettings,
  AdminSettingsSectionId,
} from "@/types/admin-settings"
import { validateSettingsSection } from "../validation"

export function useSettingsSectionForm<
  T extends AdminSettingsSectionId,
>(section: T, initialData: AdminSettings[T] | undefined) {
  const [form, setForm] = useState<AdminSettings[T] | null>(
    initialData ?? null
  )
  const [savedSnapshot, setSavedSnapshot] =
    useState<AdminSettings[T] | null>(
      initialData ?? null
    )
  const [saveState, setSaveState] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle")

  useEffect(() => {
    if (initialData) {
      setForm(initialData)
      setSavedSnapshot(initialData)
      setSaveState("idle")
    }
  }, [initialData])

  const errors = useMemo(() => {
    if (!form) return {}
    return validateSettingsSection(section, form)
  }, [form, section])

  const isValid = Object.keys(errors).length === 0

  const isDirty = useMemo(() => {
    if (!form || !savedSnapshot) return false
    return (
      JSON.stringify(form) !==
      JSON.stringify(savedSnapshot)
    )
  }, [form, savedSnapshot])

  const updateField = useCallback(
    <K extends keyof AdminSettings[T]>(
      key: K,
      value: AdminSettings[T][K]
    ) => {
      setForm((current) =>
        current
          ? { ...current, [key]: value }
          : current
      )
      setSaveState("idle")
    },
    []
  )

  const reset = useCallback(() => {
    if (savedSnapshot) {
      setForm(savedSnapshot)
      setSaveState("idle")
    }
  }, [savedSnapshot])

  const commit = useCallback(() => {
    if (form) {
      setSavedSnapshot(form)
      setSaveState("saved")
    }
  }, [form])

  return {
    form,
    setForm,
    updateField,
    reset,
    commit,
    isDirty,
    isValid,
    errors,
    saveState,
    setSaveState,
  }
}
