"use client"

import { FormEvent, useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { useAuthSession } from "@/hooks/useAuthSession"
import { useCaseCategoriesFull } from "@/features/cases/hooks/useCaseCategoriesFull"
import { useCreateMedicalCase } from "@/features/cases/hooks/useCreateMedicalCase"
import { InputField } from "@/features/auth/components/InputFailed"
import Button from "@/features/auth/components/ButtonAuth"
import {
  mapGenderToApi,
  toCaseCategoryLabel,
} from "@/lib/api/normalize"

const genderOptions = [
  { value: "male", labelKey: "male" as const },
  { value: "female", labelKey: "female" as const },
]

export default function CasesStudentPage() {
  const t = useTranslations("studentCases")
  const locale = useLocale() as "ar" | "en"
  const { session, ready } = useAuthSession()
  const categoriesQuery = useCaseCategoriesFull()
  const createCase = useCreateMedicalCase()

  const [form, setForm] = useState({
    patientName: "",
    patientSecurityNumber: "",
    patientAge: "",
    patientGender: "",
    categoryId: "",
    subcategoryId: "",
    clinicalNotes: "",
  })
  const [errorMessage, setErrorMessage] = useState<string | null>(
    null
  )
  const [successMessage, setSuccessMessage] = useState("")

  function updateField(field: string, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrorMessage(null)
    setSuccessMessage("")
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (
      !form.patientName.trim() ||
      !form.patientAge ||
      !form.patientGender ||
      !form.categoryId
    ) {
      setErrorMessage(t("errors.required"))
      return
    }

    createCase.mutate(
      {
        patientName: form.patientName.trim(),
        patientSecurityNumber:
          form.patientSecurityNumber.trim() || undefined,
        patientAge: Number(form.patientAge),
        patientGender: mapGenderToApi(form.patientGender),
        categoryId: Number(form.categoryId),
        subcategoryId: form.subcategoryId
          ? Number(form.subcategoryId)
          : undefined,
        clinicalNotes: form.clinicalNotes.trim(),
        universityId: session?.universityId,
      },
      {
        onSuccess() {
          setSuccessMessage(t("successMessage"))
          setForm({
            patientName: "",
            patientSecurityNumber: "",
            patientAge: "",
            patientGender: "",
            categoryId: "",
            subcategoryId: "",
            clinicalNotes: "",
          })
        },
        onError(error) {
          setErrorMessage(
            (error as Error)?.message ||
              t("errors.submitFailed")
          )
        },
      }
    )
  }

  const selectedCategory = categoriesQuery.data?.find(
    (c) => String(c.id) === String(form.categoryId)
  )

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold text-[#1e3a6d] md:text-3xl">
          {t("title")}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
          {t("description")}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        {categoriesQuery.isError ? (
          <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span>{t("errors.loadingCategories")}</span>
              <button
                type="button"
                onClick={() => categoriesQuery.refetch()}
                className="rounded-xl border border-red-100 bg-white px-4 py-2 text-sm font-medium text-[#1e3a6d]"
              >
                {t("retry")}
              </button>
            </div>
          </div>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-2">
          <InputField
            id="patientName"
            label={t("fields.patientName")}
            placeholder={t("placeholders.patientName")}
            value={form.patientName}
            onChange={(e) =>
              updateField("patientName", e.target.value)
            }
            required
          />
          <InputField
            id="patientSecurityNumber"
            label={t("fields.patientSecurityNumber")}
            placeholder={t("placeholders.patientSecurityNumber")}
            value={form.patientSecurityNumber}
            onChange={(e) =>
              updateField(
                "patientSecurityNumber",
                e.target.value
              )
            }
            dir="ltr"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <InputField
            id="patientAge"
            label={t("fields.patientAge")}
            type="number"
            min={0}
            placeholder={t("placeholders.patientAge")}
            value={form.patientAge}
            onChange={(e) =>
              updateField("patientAge", e.target.value)
            }
            required
          />
          <div className="space-y-1.5">
            <label
              htmlFor="patientGender"
              className="block text-sm font-medium text-[var(--denova-primary)]"
            >
              {t("fields.patientGender")}
            </label>
            <select
              id="patientGender"
              value={form.patientGender}
              onChange={(e) =>
                updateField("patientGender", e.target.value)
              }
              className="h-11 w-full rounded-xl border border-blue-100 bg-white/55 px-4 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              required
            >
              <option value="">
                {t("placeholders.selectGender")}
              </option>
              {genderOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {t(`gender.${opt.labelKey}`)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-1.5">
            <label
              htmlFor="categoryId"
              className="block text-sm font-medium text-[var(--denova-primary)]"
            >
              {t("fields.category")}
            </label>
            <select
              id="categoryId"
              value={form.categoryId}
              onChange={(e) => {
                updateField("categoryId", e.target.value)
                updateField("subcategoryId", "")
              }}
              className="h-11 w-full rounded-xl border border-blue-100 bg-white/55 px-4 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              required
              disabled={categoriesQuery.isLoading}
            >
              <option value="">
                {categoriesQuery.isLoading
                  ? t("loadingCategories")
                  : t("placeholders.selectCategory")}
              </option>
              {categoriesQuery.data?.map((category) => (
                <option key={category.id} value={category.id}>
                  {toCaseCategoryLabel(category, locale)}
                </option>
              ))}
            </select>
          </div>

          {selectedCategory?.subcategories?.length ? (
            <div className="space-y-1.5">
              <label
                htmlFor="subcategoryId"
                className="block text-sm font-medium text-[var(--denova-primary)]"
              >
                {t("fields.subcategory")}
              </label>
              <select
                id="subcategoryId"
                value={form.subcategoryId}
                onChange={(e) =>
                  updateField("subcategoryId", e.target.value)
                }
                className="h-11 w-full rounded-xl border border-blue-100 bg-white/55 px-4 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              >
                <option value="">
                  {t("placeholders.selectSubcategory")}
                </option>
                {selectedCategory.subcategories.map((sc) => (
                  <option key={sc.id} value={sc.id}>
                    {locale === "ar"
                      ? sc.nameAr || sc.name || sc.title
                      : sc.nameEn || sc.name || sc.title}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="clinicalNotes"
            className="block text-sm font-medium text-[var(--denova-primary)]"
          >
            {t("fields.clinicalNotes")}
          </label>
          <textarea
            id="clinicalNotes"
            rows={5}
            value={form.clinicalNotes}
            onChange={(e) =>
              updateField("clinicalNotes", e.target.value)
            }
            placeholder={t("placeholders.clinicalNotes")}
            className="w-full rounded-2xl border border-blue-100 bg-white/55 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
          />
        </div>

        {errorMessage ? (
          <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </p>
        ) : null}

        {successMessage ? (
          <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {successMessage}
          </p>
        ) : null}

        <div className="flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">{t("helpText")}</p>
          <Button
            type="submit"
            isLoading={createCase.isPending}
            disabled={
              !ready ||
              createCase.isPending ||
              categoriesQuery.isLoading ||
              categoriesQuery.isError
            }
            className="max-w-xs bg-gradient-to-br from-[#2563eb] to-[#1e3a6d]"
          >
            {t("submit")}
          </Button>
        </div>
      </form>
    </div>
  )
}
