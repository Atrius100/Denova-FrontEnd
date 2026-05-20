"use client";

import { useTranslations }
    from "next-intl";

import {
    Clock3,
    UserCheck,
    Activity,
    Users,
} from "lucide-react";

import { StatCard }
    from "./StatCard";

import { useDashboardStats }
    from "../hook/useDashboardStats";

const statsConfig = [

    {
        key: "pendingRequests",
        descKey: "pendingRequestsDesc",
        valueKey: "pendingRequests",
        icon: Clock3,
        iconBg:
            "bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20",
    },

    {
        key: "waitingPatients",
        descKey: "waitingPatientsDesc",
        valueKey: "waitingPatients",
        icon: UserCheck,
        iconBg:
            "bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20",
    },

    {
        key: "activeTreatments",
        descKey: "activeTreatmentsDesc",
        valueKey: "activeTreatments",
        icon: Activity,
        iconBg:
            "bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20",
    },

    {
        key: "registeredPatients",
        descKey: "registeredPatientsDesc",
        valueKey: "registeredPatients",
        icon: Users,
        iconBg:
            "bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20",
    },
];

export function StatsGrid() {

    const t =
        useTranslations(
            "dashboardStats"
        );

    const { data } =
        useDashboardStats();

    return (

        <div
            className="
        grid gap-4

        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
      "
        >

            {statsConfig.map((item) => (

                <StatCard
                    key={item.key}
                    title={t(item.key)}
                    value={
                        data?.[
                        item.valueKey as keyof typeof data
                        ] || 0
                    }
                    description={t(item.descKey)}
                    icon={item.icon}
                    iconBg={item.iconBg}
                />
            ))}
        </div>
    );
}