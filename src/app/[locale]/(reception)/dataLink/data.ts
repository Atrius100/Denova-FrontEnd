import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Settings,
  UserCircle,
} from "lucide-react";

export const sidebarLinks = [
  {
    key: "dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    key: "patients",
    href: "/patients",
    icon: Users,
  },

  {
    key: "requests",
    href: "/requests",
    icon: ClipboardList,
  },

  {
    key: "profile",
    href: "/profile",
    icon: UserCircle,
  },

  {
    key: "settings",
    href: "/settings",
    icon: Settings,
  },
];