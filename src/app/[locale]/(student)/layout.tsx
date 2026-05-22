import { Sidebar } from "@/components/layout/Sidebar"
import { PropsWithChildren } from "react"
import { StudentSidebar } from "@/components/layout/StudentSidebar"

export default function StudentLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <StudentSidebar />
      <main className="min-w-0 flex-1 p-2 lg:p-6">
        {children}
      </main>
    </div>
  )
}
