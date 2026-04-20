import { FileCheck, TrendingUp, AlertTriangle } from "lucide-react";

export const STATS = [
  {
    title: "إجمالي الحالات",
    value: "١٤٢ حالة",
    icon: FileCheck,
    variant: "progress",
    accent: "secondary",
  },
  {
    title: "معدل الإنجاز",
    value: "٨٩٪",
    icon: TrendingUp,
    variant: "bars",
    accent: "primary",
  },
  {
    title: "حالات عاجلة",
    value: "٣ مواعيد",
    icon: AlertTriangle,
    variant: "alert",
    description: "اليوم في الساعة ٤:٠٠ م",
    accent: "error",
  },
];