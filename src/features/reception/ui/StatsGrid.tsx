"use client";

import { LucideIcon }
from "lucide-react";

import { StatCard }
from "./StatCard";

export type StatsItem = {

    title: string;

    value: number;

    description: string;

    icon: LucideIcon;

    iconBg: string;
};

type StatsGridProps = {

    items: StatsItem[];
};

export function StatsGrid({
    items,
}: StatsGridProps) {

    return (

        <div
            className="
        grid gap-4

        grid-cols-1
        sm:grid-cols-2
        2xl:grid-cols-4
      "
        >

            {items.map(
                (
                    item,
                    index
                ) => (

                    <StatCard
                        key={index}
                        title={item.title}
                        value={item.value}
                        description={item.description}
                        icon={item.icon}
                        iconBg={item.iconBg}
                    />
                )
            )}
        </div>
    );
}