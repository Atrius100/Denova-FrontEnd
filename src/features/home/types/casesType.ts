export interface CaseSubcategory {
  id: number;
  categoryId: number;
  name: string;
  nameAr: string;
  description: string | null;
}

export interface CaseCategory {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  subcategories: CaseSubcategory[];
}