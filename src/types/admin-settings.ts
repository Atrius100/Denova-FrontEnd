export type AdminSettingsSectionId =
  | "general"
  | "platform"
  | "branding"
  | "appearance"
  | "users"
  | "payment"
  | "notifications"
  | "security"
  | "integrations"
  | "subscription"
  | "localization"

export type AdminRole = "super_admin" | "admin" | "reception" | "student"

export type GeneralSettings = {
  siteName: string
  supportEmail: string
  supportPhone: string
  maintenanceMode: boolean
  allowRegistration: boolean
}

export type PlatformSettings = {
  platformTagline: string
  companyName: string
  companyAddress: string
  termsUrl: string
  privacyUrl: string
}

export type BrandingSettings = {
  logoUrl: string
  faviconUrl: string
  primaryColor: string
  secondaryColor: string
  showPoweredBy: boolean
}

export type AppearanceSettings = {
  defaultTheme: "light" | "dark" | "system"
  compactSidebar: boolean
  showHeroPattern: boolean
  borderRadius: "md" | "lg" | "xl"
}

export type UsersPermissionSettings = {
  defaultRole: AdminRole
  requireEmailVerification: boolean
  allowStudentSelfSignup: boolean
  maxStudentsPerUniversity: number
}

export type PaymentSettings = {
  syriatelEnabled: boolean
  syriatelMerchantId: string
  paymentMockMode: boolean
  minAmountSyp: number
  webhookUrl: string
}

export type NotificationSettings = {
  emailNotifications: boolean
  smsNotifications: boolean
  notifyNewCase: boolean
  notifyPaymentSuccess: boolean
  adminAlertEmail: string
}

export type SecuritySettings = {
  sessionTimeoutMinutes: number
  maxLoginAttempts: number
  requireStrongPassword: boolean
  twoFactorEnabled: boolean
  ipAllowlist: string
}

export type IntegrationSettings = {
  apiBaseUrl: string
  syriatelApiKey: string
  syriatelApiSecret: string
  webhookSecret: string
  enableAuditLog: boolean
}

export type SubscriptionSettings = {
  monthlyPriceSyp: number
  semesterPriceSyp: number
  annualPriceSyp: number
  trialDays: number
  gracePeriodDays: number
}

export type LocalizationSettings = {
  defaultLocale: "ar" | "en"
  fallbackLocale: "ar" | "en"
  rtlByDefault: boolean
  dateFormat: "dd/MM/yyyy" | "yyyy-MM-dd"
}

export type AdminSettings = {
  general: GeneralSettings
  platform: PlatformSettings
  branding: BrandingSettings
  appearance: AppearanceSettings
  users: UsersPermissionSettings
  payment: PaymentSettings
  notifications: NotificationSettings
  security: SecuritySettings
  integrations: IntegrationSettings
  subscription: SubscriptionSettings
  localization: LocalizationSettings
}

export type AdminSettingsAuditEntry = {
  id: string
  section: AdminSettingsSectionId
  action: "update" | "reset"
  actorId: string
  actorEmail: string
  changedAt: string
  summary: string
}

export type UpdateAdminSettingsPayload<
  T extends AdminSettingsSectionId = AdminSettingsSectionId,
> = {
  section: T
  data: AdminSettings[T]
}

export type AdminSettingsResponse = {
  settings: AdminSettings
  updatedAt: string
  version: number
}
