"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

import { useAuthSession } from "@/hooks/useAuthSession";
import { useCaseCategoriesFull } from "@/features/cases/hooks/useCaseCategoriesFull";
import { useCreateMedicalCase } from "@/features/cases/hooks/useCreateMedicalCase";
import { InputField } from "@/features/auth/components/InputFailed";
import Button from "@/features/auth/components/ButtonAuth";
import { usePreferences } from "@/providers/PreferencesProvider";
import { toCaseCategoryCard } from "@/lib/api/normalize";

const genderOptions = [
  { value: "male", label: "ذكر" },
  { value: "female", label: "أنثى" },
];

export default function CasesPage() {
  const t = useTranslations("studentCases");
  const { session, ready } = useAuthSession();
  const categoriesFullQuery = useCaseCategoriesFull();
  const { locale } = usePreferences();
  const createCase = useCreateMedicalCase();

  const [form, setForm] = useState({
    patientCode: "",
    patientAge: "",
    patientGender: "",
    categoryId: "",
    subcategoryId: "",
    clinicalNotes: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");

  function updateField(field: string, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrorMessage(null);
    setSuccessMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !form.patientCode ||
      !form.patientAge ||
      !form.patientGender ||
      !form.categoryId
    ) {
      setErrorMessage(t("errors.required"));
      return;
    }

    createCase.mutate(
      {
        patientCode: form.patientCode,
        patientAge: Number(form.patientAge),
        patientGender: form.patientGender,
        categoryId: Number(form.categoryId),
        subcategoryId: form.subcategoryId ? Number(form.subcategoryId) : undefined,
        clinicalNotes: form.clinicalNotes,
        studentId: session?.studentId,
        universityId: session?.universityId,
      },
      {
        onSuccess() {
          setSuccessMessage(t("successMessage"));
          setForm({
            patientCode: "",
            patientAge: "",
            patientGender: "",
            categoryId: "",
            subcategoryId: "",
            clinicalNotes: "",
          });
        },
        onError(error) {
          setErrorMessage(
            (error as Error)?.message || t("errors.submitFailed"),
          );
        },
      },
    );
  }

  const isSubmitting = createCase.isPending;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/40">
        <h1 className="text-3xl font-semibold text-slate-900">
          {t("title")}
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          {t("description")}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/40"
      >
        {categoriesFullQuery.isError ? (
          <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
            <div className="flex items-center justify-between">
              <div>{t("errors.loadingCategories")}</div>
              <button
                type="button"
                onClick={() => categoriesFullQuery.refetch()}
                className="ml-4 rounded-md bg-white/80 px-3 py-1 text-sm text-[var(--denova-primary)]"
              >
                {t("retry")}
              </button>
            </div>
          </div>
        ) : null}
        <div className="grid gap-6 lg:grid-cols-2">
          <InputField
            id="patientCode"
            label={t("fields.patientCode")}
            placeholder={t("placeholders.patientCode")}
            value={form.patientCode}
            onChange={(event) =>
              updateField("patientCode", event.target.value)
            }
            required
          />

          <InputField
            id="patientAge"
            label={t("fields.patientAge")}
            type="number"
            min={0}
            placeholder={t("placeholders.patientAge")}
            value={form.patientAge}
            onChange={(event) =>
              updateField("patientAge", event.target.value)
            }
            required
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-1 lg:space-y-1.5">
            <label
              htmlFor="patientGender"
              className="block text-sm font-medium text-[var(--denova-primary)]"
            >
              {t("fields.patientGender")}
            </label>
            <select
              id="patientGender"
              value={form.patientGender}
              onChange={(event) =>
                updateField("patientGender", event.target.value)
              }
              className="h-11 w-full rounded-xl border border-blue-100 bg-white/55 px-4 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              required
            >
              <option value="">{t("placeholders.selectGender")}</option>
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1 lg:space-y-1.5">
            <label
              htmlFor="categoryId"
              className="block text-sm font-medium text-[var(--denova-primary)]"
            >
              {t("fields.category")}
            </label>
            <select
              id="categoryId"
              value={form.categoryId}
              onChange={(event) =>
                updateField("categoryId", event.target.value)
              }
              className="h-11 w-full rounded-xl border border-blue-100 bg-white/55 px-4 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
              required
            >
              <option value="">{t("placeholders.selectCategory")}</option>
              {categoriesFullQuery.isLoading ? (
                <option value="">{t("loadingCategories")}</option>
              ) : null}
              {categoriesFullQuery.data?.map((category) => {
                // label localized via toCaseCategoryCard
                const label = toCaseCategoryCard(category, locale).label;
                return (
                  <option key={category.id} value={category.id}>
                    {label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {/** Subcategory select (if available) */}
        {(() => {
          const selectedCat = categoriesFullQuery.data?.find(
            (c) => String(c.id) === String(form.categoryId),
          );

          if (!selectedCat || !selectedCat.subcategories?.length) return null;

          function subLabel(sc: any) {
            if (locale === "ar") {
              return sc.nameAr || sc.name || sc.title || sc.nameEn || `#${sc.id}`;
            }
            return sc.nameEn || sc.name || sc.title || sc.nameAr || `#${sc.id}`;
          }

          return (
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-1 lg:space-y-1.5">
                <label
                  htmlFor="subcategoryId"
                  className="block text-sm font-medium text-[var(--denova-primary)]"
                >
                  {t("fields.subcategory")}
                </label>

                <select
                  id="subcategoryId"
                  value={form.subcategoryId}
                  onChange={(e) => updateField("subcategoryId", e.target.value)}
                  className="h-11 w-full rounded-xl border border-blue-100 bg-white/55 px-4 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                >
                  <option value="">{t("placeholders.selectSubcategory")}</option>
                  {selectedCat.subcategories.map((sc) => (
                    <option key={sc.id} value={sc.id}>
                      {subLabel(sc)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          );
        })()}
        <div className="space-y-1 lg:space-y-1.5">
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
            onChange={(event) =>
              updateField("clinicalNotes", event.target.value)
            }
            placeholder={t("placeholders.clinicalNotes")}
            className="w-full rounded-3xl border border-blue-100 bg-white/55 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
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

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-500">
            {t("helpText")}
          </div>

          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting || !ready || categoriesFullQuery.isError || categoriesFullQuery.isLoading}
            className="max-w-xs"
          >
            {t("submit")}
          </Button>
        </div>
      </form>
    </div>
  );
}