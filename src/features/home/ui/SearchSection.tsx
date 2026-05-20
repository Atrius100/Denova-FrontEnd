
import { Lock, Search } from "lucide-react";
import { TitleSectionCommon } from "../../../components/ui/TitleSectionCommon";

export function SearchSection() {
    return (
        <section className="bg-[#f8f9fb] opacity-60  p-5 md:p-10 lg:p-[60px]">

            {/* Title */}
            <div className="mb-8 text-center">
                <TitleSectionCommon
                    title={" ابحث في قاعدة بيانات الحالات"}
                    subtitle={` استكشف الحالات التعليمية المتاحة بسهولة`}
                />

            </div>

            {/* Search Input */}
            <div className="mx-auto mb-8 max-w-3xl">
                <div className="flex h-16  items-center gap-3 rounded-full bg-white px-6 shadow-lg">
                    <Search className="h-5 w-5 text-gray-400" />

                    <input
                        type="text"
                        placeholder="ابحث بواسطة اسم الحالة أو التصنيف..."
                        className="w-full bg-transparent text-[#1e293b] outline-none placeholder:text-gray-400"
                    />
                </div>
            </div>

            {/* Locked Card */}
            <div className="rounded-[2rem] border  border-gray-200 bg-white px-8 py-10 text-center shadow-sm">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#eef3fb]">
                    <Lock className="h-8 w-8 text-[#1e3a6d]" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-3xl font-bold text-[#1e293b]">
                    هذا القسم متاح للمشتركين فقط
                </h3>

                {/* Desc */}
                <p className="mx-auto mb-6 max-w-2xl leading-8 text-[#1e293b9f]">
                    قم ب الأشتراك للوصول الكامل إلى قاعدة
                    بيانات الحالات التعليمية.
                </p>

                {/* Button */}
                <button className="rounded-full bg-gradient-to-r from-[#1e3a6d] to-[#2563eb] px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02] hover:from-[#244684] hover:to-[#2a6eff]">
                    اشترك الآن
                </button>
            </div>

        </section>
    );
}