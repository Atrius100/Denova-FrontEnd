import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  CreditCard,
  Info,
  Shield,
  UserCog,
  XCircle,
  Clock,
  ClipboardCheck,
} from "lucide-react"
import type { AdminNotificationType } from "@/types/admin-notification"

export function getNotificationIcon(type: AdminNotificationType) {
  switch (type) {
    case "success":
      return CheckCircle2
    case "error":
      return XCircle
    case "warning":
      return AlertTriangle
    case "payment":
      return CreditCard
    case "security":
      return Shield
    case "admin_activity":
      return UserCog
    case "approval":
      return ClipboardCheck
    case "reminder":
      return Clock
    case "system":
      return Bell
    default:
      return Info
  }
}

export function getNotificationStyles(type: AdminNotificationType) {
  switch (type) {
    case "success":
      return {
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        dot: "bg-emerald-500",
      }
    case "error":
      return {
        iconBg: "bg-red-50",
        iconColor: "text-red-600",
        dot: "bg-red-500",
      }
    case "warning":
      return {
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
        dot: "bg-amber-500",
      }
    case "payment":
      return {
        iconBg: "bg-blue-50",
        iconColor: "text-[#1e3a6d]",
        dot: "bg-blue-500",
      }
    case "security":
      return {
        iconBg: "bg-violet-50",
        iconColor: "text-violet-600",
        dot: "bg-violet-500",
      }
    default:
      return {
        iconBg: "bg-slate-100",
        iconColor: "text-slate-600",
        dot: "bg-slate-400",
      }
  }
}

export function formatNotificationTime(
  iso: string,
  locale: string
) {
  const date = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60_000)

  if (diffMins < 1) {
    return locale === "ar" ? "الآن" : "Just now"
  }
  if (diffMins < 60) {
    return locale === "ar"
      ? `منذ ${diffMins} د`
      : `${diffMins}m ago`
  }

  const diffHours = Math.floor(diffMins / 60)
  if (diffHours < 24) {
    return locale === "ar"
      ? `منذ ${diffHours} س`
      : `${diffHours}h ago`
  }

  return date.toLocaleDateString(
    locale === "ar" ? "ar-SY" : "en-US",
    { day: "numeric", month: "short" }
  )
}
