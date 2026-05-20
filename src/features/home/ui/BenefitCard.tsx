
import {
  Search,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import { TitleSectionCommon } from "../../../components/ui/TitleSectionCommon";

const benefits = [
  {
    icon: <Search className="h-7 w-7" />,
    title: "البحث المنظم للحالات",
  },

  {
    icon: <GraduationCap className="h-7 w-7" />,
    title: "انتشار شامل وتعليم كامل",
  },

  {
    icon: <CheckCircle className="h-7 w-7" />,
    title: "الوصول لحالات موثوقة",
  },
];

export default function BenefitCard() {
  return (
    <section className="bg-[#f4f6f9] p-5 md:p-10 lg:p-[60px]">
      <div className="">
        {/* Title */}
        <div className="mb-16 text-center">
          <TitleSectionCommon title={"ماذا يحصل عليه الطالب"}
            subtitle={`تجربة احترافية حديثة لإدارة الحالات التعليمية`}
          />

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-300 bg-gradient-to-b from-white to-[#f8fafc] p-10 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:border-[#1e3a6d]/20 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef3fb] text-[#1e3a6d] transition group-hover:bg-[#1e3a6d] group-hover:text-white">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#1e293b9f]">
                {item.title}
              </h3>

              {/* Small line */}
              <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#1e3a6d] to-[#3b82f6]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}