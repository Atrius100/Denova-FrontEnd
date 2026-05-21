"use client";

import { LucideIcon }
from "lucide-react";

type StatCardProps = {

    title: string;

    value: number;

    description: string;

    icon: LucideIcon;

    iconBg: string;
};

export function StatCard({
    title,
    value,
    description,
    icon: Icon,
    iconBg,
}: StatCardProps) {

    return (

        <div
            className="
        rounded-3xl
        border border-slate-200
        bg-white

        p-5
        sm:p-6

        shadow-sm
        transition-all duration-300

        hover:-translate-y-1
        hover:shadow-md
      "
        >

            <div className="flex items-start justify-between gap-4">

                <div className="min-w-0">

                    <p
                        className="
              text-xs font-medium text-slate-500
              sm:text-sm
            "
                    >

                        {title}
                    </p>

                    <h2
                        className="
              mt-3

              text-3xl font-bold text-slate-800
              sm:text-4xl
            "
                    >

                        {value}
                    </h2>

                    <p
                        className="
              mt-2

              text-xs text-slate-400
              sm:text-sm
            "
                    >

                        {description}
                    </p>
                </div>

                <div
                    className={`
            flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl
            sm:h-14 sm:w-14

            ${iconBg}
          `}
                >

                    <Icon
                        className="
              h-5 w-5 text-[#1e3a6d]
              sm:h-6 sm:w-6
            "
                    />
                </div>
            </div>
        </div>
    );
}