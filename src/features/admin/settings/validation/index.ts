import type {
  AdminSettings,
  AdminSettingsSectionId,
} from "@/types/admin-settings"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^09\d{8}$/
const URL_REGEX =
  /^(https?:\/\/|\/)[^\s]*$/

export function validateSettingsSection<
  T extends AdminSettingsSectionId,
>(
  section: T,
  data: AdminSettings[T]
): Record<string, string> {
  const errors: Record<string, string> = {}

  switch (section) {
    case "general": {
      const d = data as AdminSettings["general"]
      if (!d.siteName.trim()) {
        errors.siteName = "required"
      }
      if (!EMAIL_REGEX.test(d.supportEmail)) {
        errors.supportEmail = "invalidEmail"
      }
      if (
        d.supportPhone &&
        !PHONE_REGEX.test(d.supportPhone.replace(/\s/g, ""))
      ) {
        errors.supportPhone = "invalidPhone"
      }
      break
    }
    case "platform": {
      const d = data as AdminSettings["platform"]
      if (!d.platformTagline.trim()) {
        errors.platformTagline = "required"
      }
      if (!d.companyName.trim()) {
        errors.companyName = "required"
      }
      break
    }
    case "branding": {
      const d = data as AdminSettings["branding"]
      if (!d.primaryColor.match(/^#[0-9A-Fa-f]{6}$/)) {
        errors.primaryColor = "invalidColor"
      }
      if (!d.secondaryColor.match(/^#[0-9A-Fa-f]{6}$/)) {
        errors.secondaryColor = "invalidColor"
      }
      break
    }
    case "payment": {
      const d = data as AdminSettings["payment"]
      if (d.minAmountSyp < 1000) {
        errors.minAmountSyp = "minAmount"
      }
      if (
        d.webhookUrl &&
        !URL_REGEX.test(d.webhookUrl)
      ) {
        errors.webhookUrl = "invalidUrl"
      }
      break
    }
    case "notifications": {
      const d = data as AdminSettings["notifications"]
      if (
        d.emailNotifications &&
        !EMAIL_REGEX.test(d.adminAlertEmail)
      ) {
        errors.adminAlertEmail = "invalidEmail"
      }
      break
    }
    case "security": {
      const d = data as AdminSettings["security"]
      if (d.sessionTimeoutMinutes < 5) {
        errors.sessionTimeoutMinutes = "minSession"
      }
      if (d.maxLoginAttempts < 1) {
        errors.maxLoginAttempts = "minAttempts"
      }
      break
    }
    case "integrations": {
      const d = data as AdminSettings["integrations"]
      if (
        d.apiBaseUrl &&
        !URL_REGEX.test(d.apiBaseUrl)
      ) {
        errors.apiBaseUrl = "invalidUrl"
      }
      break
    }
    case "subscription": {
      const d = data as AdminSettings["subscription"]
      if (d.monthlyPriceSyp < 1000) {
        errors.monthlyPriceSyp = "minPrice"
      }
      if (d.trialDays < 0) {
        errors.trialDays = "minZero"
      }
      break
    }
    default:
      break
  }

  return errors
}
