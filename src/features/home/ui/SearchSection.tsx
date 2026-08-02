"use client";
import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { useLocale, useTranslations } from "next-intl";
import { useCaseCategories } from "../hooks/useCaseCategories";
import Link from "next/link";
import { isLoggedIn } from "@/lib/auth/session";
import { Lock } from "lucide-react";

export function SearchSection() {
    const t = useTranslations("cases");
  const { data, isLoading } = useCaseCategories();
  const locale = useLocale();
  const loggedIn = isLoggedIn();
  return (
    <section className="p-5 md:p-10 lg:p-[60px]">
      <div className="">
        {/* Title */}
        <div className="mb-5 md:mb-10 text-center">
          <TitleSectionCommon title={t("title")}
            subtitle={t("subtitle")}
          />

        </div>

        {/* Grid */}
       <div className="grid gap-4 md:grid-cols-4 md:gap-6">
  {data?.map((item) => (
    <div
      key={item.id}
      className="
        group
        rounded-2xl
        border
        border-gray-300
        py-6
        text-center
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:border-[#1e3a6d]/20
        hover:shadow-xl
      "
    >
      <h3 className="text-[clamp(1.1rem,4vw,1.5rem)] font-semibold group-hover:text-[#1e3a6d]">
        {locale === "ar" ? item.nameAr : item.name}
      </h3>

      <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#1e3a6d] to-[#3b82f6]" />
    </div>
  ))}
</div>
      </div>
    </section>
  );
}