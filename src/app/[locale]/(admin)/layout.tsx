import { ReactNode } from "react"
import AdminNavDash from "@/components/layout/AdminNavDash"
import { AdminSidebar } from "@/components/layout/AdminSidebar"
import { AdminNotificationProvider } from "@/features/admin/notifications/providers/AdminNotificationProvider"

export default function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <AdminNotificationProvider>
      <div className="flex min-h-screen bg-[#f5f7fb]">
        <AdminSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <AdminNavDash
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
