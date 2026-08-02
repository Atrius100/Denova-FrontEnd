"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Link from "next/link";

import SecurityCard from "./formCommon";
import { useForgotPassword } from "@/features/profile/hooks/useForgotPassword";
import { useRouter } from "next/navigation";

export default function ForgotPass() {
  const router = useRouter();

  const forgotPassword =
    useForgotPassword();

  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
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
    setError("");

    forgotPassword.mutate(form, {
      onSuccess: () => {
        router.replace(
          "/security/verfiyS"
        );
      },

      onError: (err: any) => {
        const data = err.response?.data;

        setError(
          data?.errors?.[0] ??
          data?.message ??
          "حدث خطأ"
        );
      },
    });
  }

  return (
    <SecurityCard
      icon={<Mail className="h-7 w-7 text-[#1e3a6d]" />}
      title="نسيت كلمة المرور"
      description="أدخل البريد الإلكتروني المرتبط بحسابك لإرسال رمز التحقق."
      fields={[
        {
          key: "email",
          label: "البريد الإلكتروني",
          type: "email",
          placeholder: "example@gmail.com",
        },
      ]}
      values={form}
      onChange={handleChange}
      onSubmit={handleSubmit}
      loading={forgotPassword.isPending}
      error={error}
      buttonText="إرسال رمز التحقق"
      footer={
        <Link
          href="/settings"
          className="
            text-sm
            text-slate-500
            hover:text-[#1e3a6d]
            transition
          "
        >
          العودة إلى تغيير كلمة المرور
        </Link>
      }
    />
  );
}