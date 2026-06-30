"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export function HomeCtaSection() {
  const t = useTranslations("homeCta");

  return (
    <section className="p-5  md:py-8 md:px-10 md:py-10 lg:px-[60px]">
      <div
        className="
          mx-auto
          max-w-5xl

          rounded-[2rem]

          bg-gradient-to-br
          from-[#1e3a6d]
          to-[#0f2540]

          px-5 py-8
          sm:px-8 sm:py-10
          

          text-center
          text-white

          shadow-xl
        "
      >
        {/* Title */}
        <h2
          className="
            font-bold
            leading-tight

            text-[clamp(1.4rem,4vw,2rem)]
          "
        >
          {t("title")}
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-4

            max-w-2xl
            text-blue-100/90

            text-[clamp(.95rem,2.8vw,1.1rem)]
          "
        >
          {t("description")}
        </p>

        {/* Button */}
        <Link
          href="/payment?plan=semester"
          className="
          mt-4
            md:mt-8

            inline-flex
            items-center
            justify-center

            rounded-full
            bg-white

            px-8 py-3
            sm:px-10

            font-bold
            text-[#1e3a6d]

            text-[clamp(.95rem,2.5vw,1.1rem)]

            shadow-lg
            transition-all
            duration-300

            hover:scale-[1.02]
          "
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}