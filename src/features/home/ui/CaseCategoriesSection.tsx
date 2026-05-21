import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon"
import { LANDING_CASE_CATEGORIES } from "@/config/landing"

export function CaseCategoriesSection() {
  return (
    <section className="bg-white p-5 md:p-10 lg:p-[60px]">
      <div className="mb-16 text-center">
        <TitleSectionCommon
          title="تصنيفات الحالات التعليمية"
          subtitle="استكشف أنواع الحالات السريرية المتاحة على المنصة"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {LANDING_CASE_CATEGORIES.map((item) => (
          <div
            key={item}
            className="group rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-[#f8fafc] py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#1e3a6d]/20 hover:shadow-xl"
          >
            <h3 className="text-lg font-semibold text-slate-600 transition group-hover:text-[#1e3a6d] sm:text-xl">
              {item}
            </h3>
            <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#1e3a6d] to-[#3b82f6]" />
          </div>
        ))}
      </div>
    </section>
  )
}
