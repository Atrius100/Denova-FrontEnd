import { fetchMedicalCases } from "@/services/medical-cases.service";

/** @deprecated Use medical-cases.service instead */
export const getCases = () => fetchMedicalCases();
