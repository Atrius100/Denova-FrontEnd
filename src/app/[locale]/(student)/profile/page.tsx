import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import StudentCases from "@/features/profile/components/StudentCases";
import StudentInfo from "@/features/profile/components/StudentInfo";

import { mockCases, mockStudent } from "@/types/mock";


export default function StudentProfilePage() {
  return (
   <div className="flex h-full flex-col">

  <TitleSectionCommon
    title="الملف الشخصي"
    subtitle="اطلع على بياناتك الشخصية والحالات العلاجية الخاصة بك."
  
  />

  <div
    className="
      grid
      flex-1
      grid-cols-1
      gap-3 lg:gap-6
      mt-5

      lg:grid-cols-5
    "
  >
    <div className="lg:col-span-2 min-w-0">
      <StudentInfo student={mockStudent} />
    </div>

    <div className="lg:col-span-3 min-w-0">
      <StudentCases cases={mockCases} />
    </div>
  </div>

</div>
  );
}