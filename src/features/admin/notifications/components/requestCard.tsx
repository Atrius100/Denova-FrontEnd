"use client";

import { Phone, X } from "lucide-react";
import { CaseRequest } from "../type/request";

type Props = {
  request: CaseRequest;
  onReject: () => void;
  onContact: () => void;
};

export function RequestCard({
  request,
  onReject,
  onContact,
}: Props){
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white px-6 py-5 shadow-sm transition hover:border-blue-100">
      <div className="flex items-start justify-between gap-5">
        <div className="flex gap-4">
          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#1e3a6d]" />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-slate-800">
                {request.studentName}
              </h3>

              <span className="text-sm text-slate-400">
                • {request.universityName}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-600">
              طلب حجز حالة{" "}
              <span className="font-medium">
                {request.caseName}
              </span>
            </p>

            <p className="mt-1 text-sm text-slate-500">
              السن {request.toothNumber}
            </p>

            <p className="mt-2 text-xs text-slate-400">
              {request.createdAt}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
         <button
  onClick={onContact}
  className="
    flex h-10 w-10 items-center justify-center
    rounded-full
    bg-blue-50
    text-[#1e3a6d]
    hover:bg-blue-100
  "
>
  <Phone className="h-4 w-4" />
</button>
          <button
            onClick={onReject}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}