"use client";

import { useState } from "react";
import { KeyRound } from "lucide-react";
import SecurityCard from "./formCommon";

export default function VerifyPassword() {
  const [form, setForm] = useState({
    code: "",
  });

  function handleChange(
    key: string,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleSubmit() {
    console.log(form);

    // لاحقًا:
    // verifyCode.mutate(form);
  }

  return (
    <SecurityCard
      icon={
        <KeyRound className="h-7 w-7 text-[#1e3a6d]" />
      }
      title="التحقق من الرمز"
      description="أدخل رمز التحقق الذي تم إرساله إلى بريدك الإلكتروني لإكمال العملية."
      fields={[
        {
          key: "code",
          label: "رمز التحقق",
          placeholder: "123456",
        },
      ]}
      values={form}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonText="تأكيد الرمز"
    />
  );
}