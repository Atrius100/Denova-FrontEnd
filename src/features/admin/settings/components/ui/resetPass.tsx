"use client";

import { useState } from "react";
import { KeyRound } from "lucide-react";
import SecurityCard from "./formCommon";

export default function ResetPassword() {
  const [form, setForm] = useState({
    code: "",
    newPassword: "",
    confirmNewPassword: "",
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
    if (
      form.newPassword !==
      form.confirmNewPassword
    ) {
      alert("كلمتا المرور غير متطابقتين");
      return;
    }

    console.log(form);

    // هون لاحقًا رح نستدعي useResetPassword()
  }

  return (
    <SecurityCard
      icon={
        <KeyRound className="h-7 w-7 text-[#1e3a6d]" />
      }
      title="إعادة تعيين كلمة المرور"
      description="أدخل رمز التحقق وكلمة المرور الجديدة لإكمال العملية."
      fields={[
        {
          key: "code",
          label: "رمز التحقق",
          placeholder: "123456",
        },
        {
          key: "newPassword",
          label: "كلمة المرور الجديدة",
          type: "password",
        },
        {
          key: "confirmNewPassword",
          label: "تأكيد كلمة المرور الجديدة",
          type: "password",
        },
      ]}
      values={form}
      onChange={handleChange}
      onSubmit={handleSubmit}
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