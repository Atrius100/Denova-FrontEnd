import { getCases } from "@/services/cases.service"

export const useCases = () => {
  const fetchCases = async () => {
    const res = await getCases()
    return res.data
  }

  return { fetchCases }
}