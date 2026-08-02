"use client";

import { StudentCase } from "@/types/profile";
import StatusBadge from "./StatusBadge";

type Props = {
  item: StudentCase;
};

export default function CaseCard({
  item,
}: Props) {
  const problem = item.problems[0];

  return (
    <div
      className="
        flex
        lg:min-h-[100px]
        flex-col
        justify-between
        rounded-2xl
        border
        gap-2
        border-slate-200
        bg-[#fafbfd]
        p-3
        transition-all
        duration-200
        hover:border-[#2563eb]/30
        hover:bg-white
        hover:shadow-md
      "
    >
      {/* اسم الحالة */}
      <div>
        <h3
          className="
            lg:text-lg
            font-bold
            text-[#1e3a6d]
          "
        >
          {problem.subcategoryName}
        </h3>
      </div>

      {/* Footer */}
      <div
        className="
          lg:mt-5
          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500">
            رقم السن
          </span>

          <span
            className="
              rounded-lg
              bg-slate-100
              lg:px-2
              px-1 py-1
              text-sm
              font-bold
              text-slate-700
            "
          >
            {problem.toothNumber ?? "-"}
          </span>
        </div>

        <StatusBadge status={problem.status} />
      </div>
    </div>
  );
}