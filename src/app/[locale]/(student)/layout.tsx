import { StudentSidebar } from "@/components/layout/StudentSidebar"
import { PropsWithChildren } from "react"

export default function StudentLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <StudentSidebar />
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">{children}</main>
    </div>
  )
}