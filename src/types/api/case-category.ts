export type CaseSubcategoryDto = {
  id: number
  name?: string
  title?: string
  nameAr?: string
  nameEn?: string
}

export type CaseCategoryDto = {
  id: number
  name?: string
  title?: string
  nameAr?: string
  nameEn?: string
  subcategories?: CaseSubcategoryDto[]
}

export interface CaseCategoryCard {
  id: string | number;
  label: string;
}