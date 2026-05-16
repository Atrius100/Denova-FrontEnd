import Sidebar from "@/components/layout/Sidebar"
import { PropsWithChildren } from "react"

export default function StudentLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}