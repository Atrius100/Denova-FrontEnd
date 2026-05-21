import type {
  AdminSettings,
  AdminSettingsAuditEntry,
  AdminSettingsResponse,
  AdminSettingsSectionId,
  UpdateAdminSettingsPayload,
} from "@/types/admin-settings"

const defaultSettings: AdminSettings = {
  general: {
    siteName: "DENOVA",
    supportEmail: "support@denova.sy",
    supportPhone: "0944000000",
    maintenanceMode: false,
    allowRegistration: true,
  },
  platform: {
    platformTagline:
      "منصتك الذكية لإدارة الحالات المرضية لطلاب طب الأسنان",
    companyName: "DENOVA Dental Platform",
    companyAddress: "دمشق، سوريا",
    termsUrl: "/terms",
    privacyUrl: "/privacy",
  },
  branding: {
    logoUrl: "/logo.png",
    faviconUrl: "/favicon.ico",
    primaryColor: "#1e3a6d",
    secondaryColor: "#3b82f6",
    showPoweredBy: true,
  },
  appearance: {
    defaultTheme: "light",
    compactSidebar: false,
    showHeroPattern: true,
    borderRadius: "lg",
  },
  users: {
    defaultRole: "student",
    requireEmailVerification: true,
    allowStudentSelfSignup: true,
    maxStudentsPerUniversity: 500,
  },
  payment: {
    syriatelEnabled: true,
    syriatelMerchantId: "",
    paymentMockMode: true,
    minAmountSyp: 10000,
    webhookUrl: "",
  },
  notifications: {
    emailNotifications: true,
    smsNotifications: false,
    notifyNewCase: true,
    notifyPaymentSuccess: true,
    adminAlertEmail: "admin@denova.sy",
  },
  security: {
    sessionTimeoutMinutes: 60,
    maxLoginAttempts: 5,
    requireStrongPassword: true,
    twoFactorEnabled: false,
    ipAllowlist: "",
  },
  integrations: {
    apiBaseUrl: "http://denova.somee.com",
    syriatelApiKey: "",
    syriatelApiSecret: "",
    webhookSecret: "",
    enableAuditLog: true,
  },
  subscription: {
    monthlyPriceSyp: 75000,
    semesterPriceSyp: 200000,
    annualPriceSyp: 350000,
    trialDays: 7,
    gracePeriodDays: 3,
  },
  localization: {
    defaultLocale: "ar",
    fallbackLocale: "ar",
    rtlByDefault: true,
    dateFormat: "dd/MM/yyyy",
  },
}

let settingsStore: AdminSettings = {
  ...defaultSettings,
  general: { ...defaultSettings.general },
  platform: { ...defaultSettings.platform },
  branding: { ...defaultSettings.branding },
  appearance: { ...defaultSettings.appearance },
  users: { ...defaultSettings.users },
  payment: { ...defaultSettings.payment },
  notifications: { ...defaultSettings.notifications },
  security: { ...defaultSettings.security },
  integrations: { ...defaultSettings.integrations },
  subscription: { ...defaultSettings.subscription },
  localization: { ...defaultSettings.localization },
}

let version = 1
const auditLog: AdminSettingsAuditEntry[] = []

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function mockGetAdminSettings(): Promise<AdminSettingsResponse> {
  await delay(600)

  return {
    settings: settingsStore,
    updatedAt: new Date().toISOString(),
    version,
  }
}

export async function mockUpdateAdminSettingsSection<
  T extends AdminSettingsSectionId,
>(payload: UpdateAdminSettingsPayload<T>) {
  await delay(800)

  settingsStore = {
    ...settingsStore,
    [payload.section]: payload.data,
  }

  version += 1

  auditLog.unshift({
    id: `audit_${Date.now()}`,
    section: payload.section,
    action: "update",
    actorId: "admin_1",
    actorEmail: "admin@denova.sy",
    changedAt: new Date().toISOString(),
    summary: `Updated ${payload.section} settings`,
  })

  return {
    settings: settingsStore,
    updatedAt: new Date().toISOString(),
    version,
  }
}

export async function mockResetAdminSettingsSection(
  section: AdminSettingsSectionId
) {
  await delay(500)

  settingsStore = {
    ...settingsStore,
    [section]: defaultSettings[section],
  }

  version += 1

  return {
    settings: settingsStore,
    updatedAt: new Date().toISOString(),
    version,
  }
}

export function mockGetAuditLog() {
  return auditLog
}
