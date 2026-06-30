"use client";

import SecurityCard from "@/features/admin/settings/components/ui/formCommon";
import { KeyRound } from "lucide-react";

export default function ResetPassword() {
  return (
    <SecurityCard
      icon={
        <KeyRound className="h-7 w-7 text-[#1e3a6d]" />
      }
      title="إعادة تعيين كلمة المرور"
      description="أدخل رمز التحقق وكلمة المرور الجديدة لإكمال العملية."
      fields={[
        {
          label: "رمز التحقق",
          placeholder: "123456",
        },
        {
          label: "كلمة المرور الجديدة",
          type: "password",
        },
        {
          label: "تأكيد كلمة المرور الجديدة",
          type: "password",
        },
      ]}
      buttonText="إعادة تعيين كلمة المرور"
      footer={
        <button
          className="
            text-sm
            text-slate-500
            transition
            hover:text-[#1e3a6d]
          "
        >
          إعادة إرسال الرمز
        </button>
      }
    />
  );
}