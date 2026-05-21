import type { CaseCategoryDto } from "@/types/api/case-category"
import type { MedicalCaseDto } from "@/types/api/medical-case"

function pickLabel(
  record: Record<string, unknown>,
  keys: string[]
): string | undefined {
  for (const key of keys) {
    const value = record[key]
    if (typeof value === "string" && value.trim()) {
      return value.trim()
    }
  }
  return undefined
}

export function extractList<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) {
    return payload as T[]
  }

  if (payload && typeof payload === "object") {
    const record = payload as Record<string, unknown>
    const candidates = [
      record.items,
      record.data,
      record.results,
      record.categories,
      record.cases,
      record.medicalCases,
    ]

    for (const candidate of candidates) {
      if (Array.isArray(candidate)) {
        return candidate as T[]
      }
    }
  }

  return []
}

export function toCaseCategoryLabel(
  dto: CaseCategoryDto,
  locale: "ar" | "en"
) {
  const record = dto as unknown as Record<string, unknown>
  return (
    (locale === "ar"
      ? pickLabel(record, ["nameAr", "name", "title", "nameEn"])
      : pickLabel(record, ["nameEn", "name", "title", "nameAr"])) ??
    `Category #${dto.id}`
  )
}

export function mapGenderToApi(gender: string) {
  if (gender === "female") return "Female"
  if (gender === "male") return "Male"
  return gender
}
