"use client";

import { useTranslations }
    from "next-intl";

type PatientsFiltersProps = {
    activeFilter: string;

    onChange: (
        value: string
    ) => void;
};

const filters = [
    "all",
    "pending",
    "previous",
];

export function PatientsFilters({
    activeFilter,
    onChange,
}: PatientsFiltersProps) {

    const t =
        useTranslations(
            "patientsFilters"
        );

    return (
        <div className="flex flex-wrap gap-3">

            {filters.map((filter) => {

                const isActive =
                    activeFilter === filter;

                return (
                    <button
                        key={filter}
                        onClick={() =>
                            onChange(filter)
                        }
                        className={`
  flex h-11 items-center justify-center rounded-3xl px-5 text-sm font-medium 
  
  ${isActive
                                ? "bg-gradient-to-r from-[#1e3a6d] to-[#3b82f6] text-white shadow-lg shadow-blue-500/20"

                                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-[#1e3a6d]"
                            }
  `}
                    >

                        {t(filter)}
                    </button>
                );
            })}
        </div>
    );
}