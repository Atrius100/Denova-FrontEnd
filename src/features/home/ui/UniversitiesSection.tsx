
import { TitleSectionCommon } from "../../../components/ui/TitleSectionCommon";
import { SupportItem } from "./SuportItem";


const universities = [
  {
    name: "Damascus University",
    phone: "0911111111",
    email: "damascus@denova.com",
  },

  {
    name: "Tishreen University",
    phone: "0933333333",
    email: "tishreen@denova.com",
  },

  {
    name: "Aleppo University",
    phone: "0922222222",
    email: "aleppo@denova.com",
  },

  {
    name: "Al-Baath University",
    phone: "0944444444",
    email: "baath@denova.com",
  },
];

export function UniversitiesSection() {
  return (
    <section className="bg-[#f4f6f9] p-5 md:p-10 lg:p-[60px]">
      <div className="">
        {/* Title */}
        <div className="space-y-3 text-center">
          <TitleSectionCommon
            title={" فرق الدعم"}
            subtitle={` تواصل مباشر مع فرق الدعم والجامعات التعليمية`}
          />

        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="group space-y-5 rounded-3xl border border-gray-300 bg-gradient-to-b from-white to-[#f8fafc] p-5 shadow-md transition duration-300 hover:-translate-y-2 hover:border-[#1e3a6d]/20 hover:shadow-2xl"
            >
              {/* University Name */}
              <h3 className="text-xl font-bold text-[#1e293b] transition group-hover:text-[#1e3a6d]">
                {uni.name}
              </h3>

              {/* Support Items */}
              <div className="space-y-3">
                <SupportItem
                  title="Medical Support"
                  phone={uni.phone}
                  email={uni.email}
                />


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}