import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import Image from "next/image";


export function AboutSection() {
  return (
    <section className="bg-white p-5 md:p-10 lg:p-[60px]">
      <div className="flex justify-between items-center gap-10">
        <div className=" w-[50%]">
          <TitleSectionCommon
            title={`بنيت بواسطة الطالب , من أجل الطالب`}
            subtitle={`من حجم التحديات التي يواجهها طلاب طب الاسنان خلال سنوات التدريب مثل ضياع سجلات المرضى الى صعوبة تتبع الحالات المرضية`}
          //  className={"text-3xl font-bold"}
          />
          <TitleSectionCommon subtitle="لذلك صممنا  بنيه رقميه متكاملة تجمع الدقة الطبية وسهولة الاستخدام التقني " />

        </div>
        <div className="">
          <Image
            src="/abouthand.png"
            alt="Dental"
            width={500}
            height={500}
            className="rounded-xl object-contain"
            priority

          />



        </div>


      </div>
    </section>
  );
}