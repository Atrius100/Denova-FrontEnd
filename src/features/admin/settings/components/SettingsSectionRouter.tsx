"use client"

import type { ComponentType } from "react"
import type { AdminSettingsSectionId } from "@/types/admin-settings"
import { GeneralSettingsSection } from "./sections/GeneralSettingsSection"
import { PlatformSettingsSection } from "./sections/PlatformSettingsSection"
import { BrandingSettingsSection } from "./sections/BrandingSettingsSection"
import { AppearanceSettingsSection } from "./sections/AppearanceSettingsSection"
import { UsersSettingsSection } from "./sections/UsersSettingsSection"
import { PaymentSettingsSection } from "./sections/PaymentSettingsSection"
import { NotificationsSettingsSection } from "./sections/NotificationsSettingsSection"
import { SecuritySettingsSection } from "./sections/SecuritySettingsSection"
import { IntegrationsSettingsSection } from "./sections/IntegrationsSettingsSection"
import { SubscriptionSettingsSection } from "./sections/SubscriptionSettingsSection"
import { LocalizationSettingsSection } from "./sections/LocalizationSettingsSection"

const SECTION_COMPONENTS: Record<
  AdminSettingsSectionId,
  ComponentType
> = {
  general: GeneralSettingsSection,
  platform: PlatformSettingsSection,
  branding: BrandingSettingsSection,
  appearance: AppearanceSettingsSection,
  users: UsersSettingsSection,
  payment: PaymentSettingsSection,
  notifications: NotificationsSettingsSection,
  security: SecuritySettingsSection,
  integrations: IntegrationsSettingsSection,
  subscription: SubscriptionSettingsSection,
  localization: LocalizationSettingsSection,
}

type SettingsSectionRouterProps = {
  section: AdminSettingsSectionId
}

export function SettingsSectionRouter({
  section,
}: SettingsSectionRouterProps) {
  const Component = SECTION_COMPONENTS[section]
  return <Component />
}
