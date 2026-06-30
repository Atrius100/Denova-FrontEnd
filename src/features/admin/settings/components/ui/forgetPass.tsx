"use client";

import { Mail } from "lucide-react";
import SecurityField from "./input";
import Link from "next/link";
import SecurityCard from "./formCommon";

export default function ForgotPass() {
  return (
<SecurityCard
  icon={<Mail className="h-7 w-7 text-[#1e3a6d]" />}
  title="نسيت كلمة المرور"
  description="أدخل البريد الإلكتروني المرتبط بحسابك لإرسال رمز التحقق."
  fields={[
    {
      label: "البريد الإلكتروني",
      type: "email",
      placeholder: "example@gmail.com",
    },
  ]}
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