"use client";

import { useState }
from "react";

import { useTranslations }
from "next-intl";

import {
    Search,
    Plus,
    Clock3,
    UserCheck,
    Activity,
    Users,
} from "lucide-react";


import { StatsGrid }
from "@/features/reception/ui/StatsGrid";
import PatientFormModal from "@/features/reception/ui/AddPation";

export default function ReceptionDashboard() {

    const t =
        useTranslations(
            "receptionDashboard"
        );

    /* ================= MODAL ================= */

    const [
        openModal,
        setOpenModal,
    ] = useState(false);

    /* ================= SEARCH ================= */

    const [
        search,
        setSearch,
    ] = useState("");

    /* ================= BACKEND DATA ================= */

    const data = {

        pendingRequests: 12,

        waitingPatients: 8,

        activeTreatments: 24,

        registeredPatients: 140,
    };

    /* ================= STATS ================= */

    const statsItems = [

        {
            title:
                t("pendingRequests"),

            description:
                t("pendingRequestsDesc"),

            value:
                data.pendingRequests,

            icon: Clock3,

            iconBg:
                "bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20",
        },

        {
            title:
                t("waitingPatients"),

            description:
                t("waitingPatientsDesc"),

            value:
                data.waitingPatients,

            icon: UserCheck,

            iconBg:
                "bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20",
        },

        {
            title:
                t("activeTreatments"),

            description:
                t("activeTreatmentsDesc"),

            value:
                data.activeTreatments,

            icon: Activity,

            iconBg:
                "bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20",
        },

        {
            title:
                t("registeredPatients"),

            description:
                t("registeredPatientsDesc"),

            value:
                data.registeredPatients,

            icon: Users,

            iconBg:
                "bg-gradient-to-br from-[#1e3a6d]/10 to-[#3b82f6]/20",
        },
    ];

    return (

        <div className="space-y-6">

            {/* ================= TOP ACTIONS ================= */}
            <div
                className="
          flex flex-col gap-4
          lg:flex-row lg:items-center lg:justify-between
        "
            >

                {/* Search */}
                <div
                    className="
            relative w-full
            lg:max-w-md
          "
                >

                    <Search
                        className="
              absolute left-4 top-1/2
              h-5 w-5 -translate-y-1/2
              text-slate-400
            "
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                        placeholder={t("search")}
                        className="
              h-12 w-full rounded-2xl
              border border-slate-200
              bg-white

              pl-12 pr-4

              text-sm text-slate-700

              outline-none
              transition

              placeholder:text-slate-400

              focus:border-[#3b82f6]
              focus:ring-4
              focus:ring-blue-100
            "
                    />
                </div>

                {/* Add Patient */}
                <button
                    onClick={() =>
                        setOpenModal(true)
                    }
                    className="
            flex h-12 items-center justify-center gap-2

            rounded-2xl
            bg-gradient-to-r
            from-[#1e3a6d]
            to-[#3b82f6]

            px-6

            text-sm font-medium text-white

            shadow-lg shadow-blue-500/20

            transition-all duration-300
            hover:scale-[1.02]
            hover:opacity-95
          "
                >

                    <Plus className="h-5 w-5" />

                    {t("addPatient")}
                </button>
            </div>

            {/* ================= STATS ================= */}
            <StatsGrid
                items={statsItems}
            />

            {/* ================= MODAL ================= */}
            {
                openModal && (

                    <PatientFormModal
                        onClose={() =>
                            setOpenModal(false)
                        }
                    />
                )
            }
        </div>
    );
}