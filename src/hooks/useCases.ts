import { getCases } from "@/services/cases.service"

export const useCases = () => {
  const fetchCases = async () => {
    return getCases()
  }

  return { fetchCases }
}