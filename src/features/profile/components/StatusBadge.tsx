"use client";

import { CaseStatus } from "@/types/profile";

type Props = {
  status: CaseStatus;
};

const statusMap: Record<
  CaseStatus,
  {
    label: string;
    className: string;
  }
> = {
  pending: {
    label: "قيد الانتظار",
    className:
      "bg-amber-50 text-amber-700 border border-amber-200",
  },

  accepted: {
    label: "تم القبول",
    className:
      "bg-blue-50 text-blue-700 border border-blue-200",
  },

  completed: {
    label: "مكتملة",
    className:
      "bg-emerald-50 text-emerald-700 border border-emerald-200",
  },

  rejected: {
    label: "مرفوضة",
    className:
      "bg-red-50 text-red-700 border border-red-200",
  },
};

export default function StatusBadge({
  status,
}: Props) {
  const badge = statusMap[status];

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        px-3
        py-1

        text-xs
        font-semibold

        ${badge.className}
      `}
    >
      {badge.label}
    </span>
  );
}