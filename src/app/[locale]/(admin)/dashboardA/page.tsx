"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  Bell,
  FolderOpen,
  Settings,
  Users,
  Clock3,
  GraduationCap,
  Building2,
} from "lucide-react";

import { StatsGrid } from "@/features/reception/ui/StatsGrid";

export default function AdminDashboard() {
  const t = useTranslations("adminDashboard");

  const data = {
    monthlyPatients: 320,
    waitingPatients: 18,
    studentRequests: 45,
    universityPatients: 210,
  };

  const statsItems = [
    {
      title: t("monthlyPatients"),
      description: t("monthlyPatientsDesc"),
      value: data.monthlyPatients,
      icon: Users,
      iconBg:
        "bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20",
    },

    {
      title: t("waitingPatients"),
      description: t("waitingPatientsDesc"),
      value: data.waitingPatients,
      icon: Clock3,
      iconBg:
        "bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20",
    },

    {
      title: t("studentRequests"),
      description: t("studentRequestsDesc"),
      value: data.studentRequests,
      icon: GraduationCap,
      iconBg:
        "bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20",
    },

    {
      title: t("universityPatients"),
      description: t("universityPatientsDesc"),
      value: data.universityPatients,
      icon: Building2,
      iconBg:
        "bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20",
    },
  ];

  const quickLinks = [
    {
      key: "students",
      href: "/studentsA",
      icon: Users,
    },

    {
      key: "cases",
      href: "/casesAdmin",
      icon: FolderOpen,
    },

    {
      key: "notifications",
      href: "/notifications",
      icon: Bell,
    },

    {
      key: "settings",
      href: "/settings/general",
      icon: Settings,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1e3a6d] md:text-3xl">
          {t("title")}
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          {t("subtitle")}
        </p>
      </div>

      {/* Stats */}
      <StatsGrid items={statsItems} />

      {/* Quick Links */}
      <div
        className="
          grid gap-4
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {quickLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.key}
              href={item.href}
              className="
                group rounded-[1.75rem]
                border border-slate-200
                bg-white p-6
                shadow-sm
                transition
                hover:-translate-y-0.5
                hover:shadow-md
              "
            >
              <div
                className="
                  mb-4 flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#1e3a6d]/10
                  to-[#3b82f6]/20
                "
              >
                <Icon
                  className="
                    h-6 w-6
                    text-[#1e3a6d]
                  "
                />
              </div>

              <h2 className="font-bold text-[#1e3a6d]">
                {t(`links.${item.key}.title`)}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {t(`links.${item.key}.desc`)}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}