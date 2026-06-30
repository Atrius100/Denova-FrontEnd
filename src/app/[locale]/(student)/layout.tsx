import { Sidebar } from "@/components/layout/Sidebar"
import { PropsWithChildren } from "react"

export default function StudentLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <Sidebar role="student" />
      <main className="min-w-0 flex-1 p-2 lg:p-6">
        {children}
      </main>
    </div>
  )
}
