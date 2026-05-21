"use client"

import { ReactNode } from "react"
import { useTranslations } from "next-intl"

type SettingsFieldProps = {
  id: string
  label: string
  hint?: string
  error?: string
  children: ReactNode
}

export function SettingsField({
  id,
  label,
  hint,
  error,
  children,
}: SettingsFieldProps) {
  const tErrors = useTranslations("adminSettings.errors")

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--denova-primary)]"
      >
        {label}
      </label>
      {children}
      {hint ? (
        <p className="text-xs leading-5 text-slate-500">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="text-xs text-red-600">
          {tErrors(error)}
        </p>
      ) : null}
    </div>
  )
}

type SettingsInputProps = {
  id: string
  label: string
  hint?: string
  error?: string
  value: string | number
  onChange: (value: string) => void
  type?: string
  placeholder?: string
  dir?: "ltr" | "rtl"
  disabled?: boolean
}

export function SettingsInput({
  id,
  label,
  hint,
  error,
  value,
  onChange,
  type = "text",
  placeholder,
  dir,
  disabled,
}: SettingsInputProps) {
  return (
    <SettingsField
      id={id}
      label={label}
      hint={hint}
      error={error}
    >
      <input
        id={id}
        type={type}
        value={value}
        disabled={disabled}
        dir={dir}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:bg-slate-50"
      />
    </SettingsField>
  )
}

type SettingsTextareaProps = {
  id: string
  label: string
  hint?: string
  error?: string
  value: string
  onChange: (value: string) => void
  rows?: number
}

export function SettingsTextarea({
  id,
  label,
  hint,
  error,
  value,
  onChange,
  rows = 3,
}: SettingsTextareaProps) {
  return (
    <SettingsField
      id={id}
      label={label}
      hint={hint}
      error={error}
    >
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
      />
    </SettingsField>
  )
}

type SettingsSelectProps = {
  id: string
  label: string
  hint?: string
  error?: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
}

export function SettingsSelect({
  id,
  label,
  hint,
  error,
  value,
  onChange,
  options,
}: SettingsSelectProps) {
  return (
    <SettingsField
      id={id}
      label={label}
      hint={hint}
      error={error}
    >
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full appearance-none rounded-xl border border-blue-100 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </SettingsField>
  )
}

type SettingsToggleProps = {
  id: string
  label: string
  hint?: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export function SettingsToggle({
  id,
  label,
  hint,
  checked,
  onChange,
}: SettingsToggleProps) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3">
      <div className="min-w-0">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-[var(--denova-primary)]"
        >
          {label}
        </label>
        {hint ? (
          <p className="mt-1 text-xs leading-5 text-slate-500">
            {hint}
          </p>
        ) : null}
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition ${
          checked ? "bg-[#1e3a6d]" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition ${
            checked ? "start-5" : "start-0.5"
          }`}
        />
      </button>
    </div>
  )
}
