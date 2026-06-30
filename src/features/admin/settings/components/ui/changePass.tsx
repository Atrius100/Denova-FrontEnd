import { Shield } from "lucide-react";
import Link from "next/link";
import SecurityCard from "./formCommon";

export default function ChangePass() {
  return (
    <SecurityCard
      icon={<Shield className="h-7 w-7 text-[#1e3a6d]" />}
      title="تغيير كلمة المرور"
      description="قم بتحديث كلمة المرور الخاصة بحسابك."
      fields={[
        {
          label: "كلمة المرور الحالية",
          type: "password",
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
      buttonText="تحديث كلمة المرور"
      helperText={
        <Link
          href="/settings/security/ForgotPass"
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