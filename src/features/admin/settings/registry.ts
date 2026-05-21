import {
  Bell,
  CreditCard,
  Globe,
  Layers,
  Palette,
  Plug,
  Settings,
  Shield,
  SlidersHorizontal,
  Users,
  Building2,
} from "lucide-react"
import type { AdminRole, AdminSettingsSectionId } from "@/types/admin-settings"

export type SettingsSectionMeta = {
  id: AdminSettingsSectionId
  icon: typeof Settings
  titleKey: string
  descriptionKey: string
  /** Future RBAC: roles allowed to view/edit this section */
  allowedRoles: AdminRole[]
}

export const ADMIN_SETTINGS_SECTIONS: SettingsSectionMeta[] = [
  {
    id: "general",
    icon: SlidersHorizontal,
    titleKey: "sections.general.title",
    descriptionKey: "sections.general.description",
    allowedRoles: ["super_admin", "admin"],
  },
  {
    id: "platform",
    icon: Building2,
    titleKey: "sections.platform.title",
    descriptionKey: "sections.platform.description",
    allowedRoles: ["super_admin", "admin"],
  },
  {
    id: "branding",
    icon: Palette,
    titleKey: "sections.branding.title",
    descriptionKey: "sections.branding.description",
    allowedRoles: ["super_admin", "admin"],
  },
  {
    id: "appearance",
    icon: Layers,
    titleKey: "sections.appearance.title",
    descriptionKey: "sections.appearance.description",
    allowedRoles: ["super_admin", "admin"],
  },
  {
    id: "users",
    icon: Users,
    titleKey: "sections.users.title",
    descriptionKey: "sections.users.description",
    allowedRoles: ["super_admin", "admin"],
  },
  {
    id: "payment",
    icon: CreditCard,
    titleKey: "sections.payment.title",
    descriptionKey: "sections.payment.description",
    allowedRoles: ["super_admin", "admin"],
  },
  {
    id: "notifications",
    icon: Bell,
    titleKey: "sections.notifications.title",
    descriptionKey: "sections.notifications.description",
    allowedRoles: ["super_admin", "admin"],
  },
  {
    id: "security",
    icon: Shield,
    titleKey: "sections.security.title",
    descriptionKey: "sections.security.description",
    allowedRoles: ["super_admin"],
  },
  {
    id: "integrations",
    icon: Plug,
    titleKey: "sections.integrations.title",
    descriptionKey: "sections.integrations.description",
    allowedRoles: ["super_admin"],
  },
  {
    id: "subscription",
    icon: Settings,
    titleKey: "sections.subscription.title",
    descriptionKey: "sections.subscription.description",
    allowedRoles: ["super_admin", "admin"],
  },
  {
    id: "localization",
    icon: Globe,
    titleKey: "sections.localization.title",
    descriptionKey: "sections.localization.description",
    allowedRoles: ["super_admin", "admin"],
  },
]

export const DEFAULT_SETTINGS_SECTION: AdminSettingsSectionId =
  "general"

export function getSettingsSectionMeta(
  sectionId: string | undefined
) {
  return ADMIN_SETTINGS_SECTIONS.find(
    (section) => section.id === sectionId
  )
}

export function isValidSettingsSection(
  sectionId: string | undefined
): sectionId is AdminSettingsSectionId {
  return ADMIN_SETTINGS_SECTIONS.some(
    (section) => section.id === sectionId
  )
}
