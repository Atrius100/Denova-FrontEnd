import { ReactNode } from "react"
import { AdminNotificationProvider } from "@/features/admin/notifications/providers/AdminNotificationProvider"
import { Sidebar } from "@/components/layout/Sidebar"
import NavDash from "@/components/layout/NavDash"

export default function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <AdminNotificationProvider>
      <div className="flex min-h-screen bg-[#f5f7fb]">
        <Sidebar role="admin" />
        <div className="flex min-w-0 flex-1 flex-col">
          <NavDash
            fullName="Admin User"
            role="admin"
          />

          <main className="flex-1 p-2 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </AdminNotificationProvider>
  )
}
