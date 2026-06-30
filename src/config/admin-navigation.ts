import {
  LayoutDashboard,
  Users,
  FolderOpen,
  Settings,
  Bell,
  ClipboardList,
} from "lucide-react"

export const adminSidebarLinks = [
  {
    key: "dashboard",
    href: "/dashboardA",
    icon: LayoutDashboard,
  },
  {
    key: "students",
    href: "/students",
    icon: Users,
  },
  {
    key: "cases",
    href: "/patientsA",
    icon: FolderOpen,
  },
  {
    key: "notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    key: "requests",
    href: "/requestsA",
    icon: ClipboardList,
  },
  {
    key: "settings",
    href: "/settings",
    icon: Settings,
  },
]
