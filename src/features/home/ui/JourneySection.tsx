import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { ToothPattern } from "@/components/ui/ToothBattren";


const steps = [
    {
        number: "1",
        title: "سجّل الآن",
        desc: "أنشئ حسابك وابدأ رحلتك التعليمية",
    },

    {
        number: "2",
        title: "أرسل حالتك",
        desc: "أضف الحالة الطبية المطلوبة",
    },

    {
        number: "3",
        title: "ابدأ البحث",
        desc: "ابحث عن الحالات المناسبة",
    },

    {
        number: "4",
        title: "تقدّم",
        desc: "تابع تطورك خطوة بخطوة",
    },
];

export function JourneySection() {
    return (
        <section className="relative overflow-hidden bg-[#041b4a] py-20">
            {/* Tooth Pattern */}
            <div className="absolute inset-0 opacity-[0.07]">
                <ToothPattern />
            </div>

            <div className=" relative z-10 px-5 md:px-10 lg:px-[60px]">
                {/* Title */}
                <div className="mb-20 text-center">
                    <TitleSectionCommon
                        classh="text-white" className2="text-white/80" title={"ماذا يحصل عليه الطالب"}
                        subtitle={`تجربة احترافية حديثة لإدارة الحالات التعليمية`}
                    />
                </div>

                {/* Steps */}
                <div className="flex justify-between items-center">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative text-center"
                        >




                            {/* Circle */}
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#3b82f6] bg-[#0c2458] text-2xl font-bold text-white shadow-lg">
                                {step.number}
                            </div>

                            {/* Content */}
                            <div className="mt-6">
                                <h3 className="mb-3 text-2xl font-semibold text-white">
                                    {step.title}
                                </h3>

                                <p className="leading-7 text-blue-100">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}