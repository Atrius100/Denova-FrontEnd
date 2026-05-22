import type { CaseCategoryCard, CaseCategoryDto } from "@/types/api/case-category";
import type { MedicalCaseCard, MedicalCaseDto } from "@/types/api/medical-case";

function pickLabel(
  record: Record<string, unknown>,
  keys: string[],
): string | undefined {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return undefined;
}

export function extractList<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) {
    return payload as T[];
  }

  if (payload && typeof payload === "object") {
    const record = payload as Record<string, unknown>;
    const candidates = [
      record.items,
      record.data,
      record.results,
      record.categories,
      record.cases,
      record.medicalCases,
    ];

    for (const candidate of candidates) {
      if (Array.isArray(candidate)) {
        return candidate as T[];
      }
    }
  }

  return [];
}

export function toCaseCategoryCard(
  dto: CaseCategoryDto,
  locale: "ar" | "en",
): CaseCategoryCard {
  const record = dto as unknown as Record<string, unknown>;
  const label =
    (locale === "ar"
      ? pickLabel(record, ["nameAr", "name", "title", "nameEn"])
      : pickLabel(record, ["nameEn", "name", "title", "nameAr"])) ??
    `Category #${dto.id}`;

  return { id: dto.id, label };
}

export function toMedicalCaseCard(dto: MedicalCaseDto): MedicalCaseCard {
  const record = dto as unknown as Record<string, unknown>;
  const title =
    pickLabel(record, [
      "categoryName",
      "subcategoryName",
      "type",
      "title",
    ]) ?? `Case ${dto.id.slice(0, 8)}`;

  const parts: string[] = [];
  if (dto.patientCode) parts.push(dto.patientCode);
  if (dto.patientAge != null) parts.push(`${dto.patientAge}`);
  if (dto.patientGender) parts.push(dto.patientGender);
  if (dto.clinicalNotes) parts.push(dto.clinicalNotes);

  const subtitle =
    parts.join(" · ") || (dto.status != null ? `Status: ${dto.status}` : "");

  return {
    id: dto.id,
    title,
    subtitle,
  };
}
