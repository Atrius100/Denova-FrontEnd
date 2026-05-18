import { Home, Briefcase, UserCircle } from "lucide-react";

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
    key: "myCases",
    href: "/my-cases",
    icon: Home,
  },
];
