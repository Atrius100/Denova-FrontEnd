import {
  LayoutDashboard,
  Users,
  FolderOpen,
  Settings,
  Bell,
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
    href: "/casesAdmin",
    icon: FolderOpen,
  },
  {
    key: "notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    key: "settings",
    href: "/settings/general",
    icon: Settings,
  },
]
