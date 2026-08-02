"use client";

import { useState } from "react";
import { Shield } from "lucide-react";
import Link from "next/link";

import SecurityCard from "./formCommon";
import { useChangePassword } from "@/features/profile/hooks/useChangePassword";
import { useRouter } from "next/navigation";

type ChangePassProps = {
  forgotPasswordHref: string;
  successHref: string;
};

export default function ChangePass({
  forgotPasswordHref,
  successHref,
}: ChangePassProps) {
  const router = useRouter();
  const changePassword = useChangePassword();
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    currentPassword: "",
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
  setError("");

  changePassword.mutate(form, {
    onSuccess: () => {
  setError("");
  router.replace(successHref);
},
    onError: (err: any) => {
      setError(
        err.response?.data?.errors?.[0] ?? ""
      );
    },
  });
}

  return (
    <SecurityCard
    
      icon={<Shield className="h-7 w-7 text-[#1e3a6d]" />}
      title="تغيير كلمة المرور"
      description="قم بتحديث كلمة المرور الخاصة بحسابك."
      fields={[
        {
          key: "currentPassword",
          label: "كلمة المرور الحالية",
          type: "password",
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
      error={error}
      values={form}
      onChange={handleChange}
      onSubmit={handleSubmit}
      loading={changePassword.isPending}
      buttonText="تحديث كلمة المرور"
      helperText={
        <Link
          href={forgotPasswordHref}
          className="
            text-sm
            font-medium
            text-[#1e3a6d]
            transition
            hover:underline
          "
        >
          هل نسيت كلمة المرور؟
        </Link>
      }
    />
  );
}