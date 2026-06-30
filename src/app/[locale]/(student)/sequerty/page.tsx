import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import ChangePass from "@/features/admin/settings/components/ui/changePass";

export default function StudentSecurityPage() {
  return (
    <div className="flex h-full flex-col">
      <TitleSectionCommon
        title="الأمان"
        subtitle="يمكنك تغيير كلمة المرور الخاصة بحسابك."
      />

      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-2xl">
          <ChangePass />
        </div>
      </div>
    </div>
  );
}