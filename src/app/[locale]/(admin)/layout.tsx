import { ReactNode } from "react"

export default function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-900 text-white">
        <p className="p-4 font-bold">DENOVA Admin</p>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}