import {
  UserCircle,
  Briefcase,
  CreditCard,
  FolderOpen,
} from "lucide-react"

export const studentSidebarLinks = [
  {
    key: "profile",
    href: "/profile",
    icon: UserCircle,
  },
  {
    key: "addCase",
    href: "/casesStudent",
    icon: Briefcase,
  },
  {
    key: "payment",
    href: "/payment",
    icon: CreditCard,
  },
  {
    key: "myCases",
    href: "/my-cases",
    icon: FolderOpen,
  },
]
