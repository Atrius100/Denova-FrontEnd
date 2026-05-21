"use client";

import { useTranslations }
    from "next-intl";

import {
    Plus,
    Search,
} from "lucide-react";
type DashboardActionsProps = {
    onAddPatient: () => void;
};

export function DashboardActions({
    onAddPatient,
}: DashboardActionsProps) {
    const t =
        useTranslations(
            "dashboardActions"
        );

    return (
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}
            <div className="relative h-10 md:h-12 rounded-xl  w-full md:rounded-2xl shadow-[0_25px_80px_rgba(30,58,109,0.18)] lg:max-w-md">

                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                    type="text"
                    placeholder={t(
                        "searchPlaceholder"
                    )}
                    className="h-10 md:h-12 rounded-xl  w-full md:rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm outline-none transition focus:border-[var(--denova-primary)] focus:ring-4 focus:ring-blue-100"
                />
            </div>

            {/* Add Patient */}
            <button
                onClick={onAddPatient}
                className="flex h-10 md:h-12 rounded-xl  w-[150px] md:rounded-2xl items-center justify-center gap-2 bg-gradient-to-r from-[#1e3a6d] to-[#3b82f6] px-6 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90"
            >
                <Plus className="h-5 w-5" />

                {t("addPatient")}
            </button>

        </div>
    );
}