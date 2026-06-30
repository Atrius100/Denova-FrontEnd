"use client";

import { Phone, User, Calendar, FileText, X } from "lucide-react";
import { CaseRequest } from "../type/request";

type Props = {
  request: CaseRequest;
  onClose: () => void;
};

export default function PatientInfoModal({
  request,
  onClose,
}: Props) {
  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/30
        backdrop-blur-sm
        p-5
      "
    >
      <div
        className="
          w-full
          max-w-2xl
          rounded-[2rem]
          bg-white
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Header */}
        <div className="border-b border-slate-100 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a6d]">
                بيانات المريض
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                معلومات التواصل الخاصة بالحالة
              </p>
            </div>

            <button
              onClick={onClose}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                hover:bg-slate-100
              "
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="grid gap-5 p-8 md:grid-cols-2">

          <InfoCard
            icon={<User className="h-5 w-5" />}
            title="اسم المريض"
            value="أحمد علي"
          />

          <InfoCard
            icon={<Phone className="h-5 w-5" />}
            title="رقم الهاتف"
            value="0999999999"
          />

          <InfoCard
            icon={<Calendar className="h-5 w-5" />}
            title="العمر"
            value="42 سنة"
          />

          <InfoCard
            icon={<FileText className="h-5 w-5" />}
            title="الحالة"
            value={request.caseName}
          />

          <InfoCard
            icon={<FileText className="h-5 w-5" />}
            title="رقم السن"
            value={String(request.toothNumber)}
          />
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 px-8 py-5">
          <button
            onClick={onClose}
            className="
              w-full
              rounded-2xl
              bg-gradient-to-br from-[#2563eb] to-[#1e3a6d] 
              py-3
              font-medium
              text-white
              transition
              hover:bg-[#163056]
            "
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <div className="mb-3 flex items-center gap-2 text-[#1e3a6d]">
        {icon}
        <span className="text-sm font-medium text-slate-500">
          {title}
        </span>
      </div>

      <p className="text-lg font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
}