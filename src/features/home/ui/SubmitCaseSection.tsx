import { TitleSectionCommon } from "../../../components/ui/TitleSectionCommon";

export function SubmitCaseSection() {
  return (
    <section className="bg-[#f8f9fb] py-24">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="mb-14 text-center">
          <TitleSectionCommon
            title={"إرسال الحالة"}
            subtitle={`قم ب إدخال تفاصيل الحالة و إرفاق معلومات المريض`}
          />

        </div>

        {/* Form */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
          <form className="space-y-6">
            {/* Inputs */}
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="اسم المريض"
                className="h-14 rounded-xl border border-gray-200 bg-[#fafafa] px-5 text-[#1e293b] placeholder:text-gray-400 outline-none transition focus:border-[#1e3a6d] focus:ring-4 focus:ring-[#1e3a6d]/10"
              />

              <input
                type="text"
                placeholder="العمر"
                className="h-14 rounded-xl border border-gray-200 bg-[#fafafa] px-5 text-[#1e293b] placeholder:text-gray-400 outline-none transition focus:border-[#1e3a6d] focus:ring-4 focus:ring-[#1e3a6d]/10"
              />

              <input
                type="text"
                placeholder="نوع الحالة"
                className="h-14 rounded-xl border border-gray-200 bg-[#fafafa] px-5 text-[#1e293b] placeholder:text-gray-400 outline-none transition focus:border-[#1e3a6d] focus:ring-4 focus:ring-[#1e3a6d]/10"
              />

              <input
                type="text"
                placeholder="رقم السن"
                className="h-14 rounded-xl border border-gray-200 bg-[#fafafa] px-5 text-[#1e293b] placeholder:text-gray-400 outline-none transition focus:border-[#1e3a6d] focus:ring-4 focus:ring-[#1e3a6d]/10"
              />
            </div>

            {/* Textarea */}
            <textarea
              rows={5}
              placeholder="ملاحظات إضافية"
              className="w-full rounded-xl border border-gray-200 bg-[#fafafa] p-5 text-[#1e293b] placeholder:text-gray-400 outline-none transition focus:border-[#1e3a6d] focus:ring-4 focus:ring-[#1e3a6d]/10"
            />

            {/* Button */}
            <button
              type="submit"
              className="h-14 w-full rounded-xl bg-gradient-to-r from-[#1e3a6d] to-[#3b82f6] text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.01] hover:opacity-95"
            >
              إرسال الحالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}