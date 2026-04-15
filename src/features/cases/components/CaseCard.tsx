type Case = {
  id: number
  type: string
  description: string
}
export default function CaseCard({
  caseItem,
}: {
  caseItem: Case
}) {
  return (
    <div>
      <h3>{caseItem.type}</h3>
      <p>{caseItem.description}</p>
    </div>
  )
}