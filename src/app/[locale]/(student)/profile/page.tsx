"use client";
import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import StudentCases from "@/features/profile/components/StudentCases";
import StudentInfo from "@/features/profile/components/StudentInfo";
import { useStudentCases } from "@/features/profile/hooks/useStudentCases";
import { useStudentProfile } from "@/features/profile/hooks/useStudentProfile";


export default function StudentProfilePage() {

  const {
    data: profile,
    isLoading: profileLoading,
  } = useStudentProfile();

  const {
    data: cases,
    isLoading: casesLoading,
  } = useStudentCases();

  if (profileLoading || casesLoading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>No profile found</div>;
  }
  return (
    <div className="flex h-full flex-col">

      <TitleSectionCommon
        title="الملف الشخصي"
        subtitle="اطلع على بياناتك الشخصية والحالات العلاجية الخاصة بك."

      />

      <div
        className="
      grid
      lg:flex-1
      grid-cols-1
      gap-3 lg:gap-6
      mt-5

      lg:grid-cols-5
    "
      >
        <div className="lg:col-span-2 min-w-0">




          <StudentInfo
            student={{
              fullName: `${profile.firstName} ${profile.lastName}`,
              phoneNumber: profile.phoneNumber,
              studyYear: `Year ${profile.academicYear}`,
              university: profile.university,
            }}
          />
        </div>

        <div className="lg:col-span-3 min-w-0">
          <StudentCases cases={cases ?? []} />
        </div>
      </div>

    </div>
  );
}