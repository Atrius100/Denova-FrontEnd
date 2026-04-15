import { useCases } from "@/hooks/useCases"

export default function CasesPage() {
  const { fetchCases } = useCases()

  return <div>Cases Page</div>
}