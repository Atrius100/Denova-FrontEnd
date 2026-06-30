"use client";

import SecurityCard from "@/features/admin/settings/components/ui/formCommon";
import { KeyRound } from "lucide-react";

export default function VerifyPassword() {
  return (
    <SecurityCard
      icon={
        <KeyRound className="h-7 w-7 text-[#1e3a6d]" />
      }
      title="التحقق من الرمز"
      description="أدخل رمز التحقق الذي تم إرساله إلى بريدك الإلكتروني لإكمال العملية."
      fields={[
        {
          label: "رمز التحقق",
          placeholder: "123456",
        },
      ]}
      buttonText="تأكيد الرمز"
    />
  );
}