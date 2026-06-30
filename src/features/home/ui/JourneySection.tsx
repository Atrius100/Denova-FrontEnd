"use client";
import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { ToothPattern } from "@/components/ui/ToothBattren";
import { useTranslations } from "next-intl";

export function JourneySection() {
  const t = useTranslations("journey");
  return (
    <section
      className="
    relative
    overflow-hidden

    bg-gradient-to-br
    from-[#1e3a6d]
    to-[#0f2540]

    py-5
    md:py-8
    lg:py-12
  "
    >
      {/* Tooth Pattern */}
      <div className="">
        <ToothPattern
          patternId="journey-pattern"
          stroke="#ffffff"
          opacity={0.05}
        />
      </div>

      <div className="relative z-10 px-5 md:px-10 lg:px-[60px]">
        <div className="mb-5 md:mb-10 mx-auto max-w-[58rem] text-center">
          <TitleSectionCommon
            title={t("title")}
            subtitle={t("subtitle")}
classh="
text-white
font-bold
tracking-tight
text-[clamp(1.8rem,6vw,2.65rem)]
"           
className2="
w-full
text-center
text-blue-50/95
text-[clamp(.95rem,3vw,1.15rem)]
"
          />
        </div>

        <div
          className="
    grid
    gap-5

    sm:grid-cols-2
    lg:grid-cols-4

    lg:gap-8
  "
        >
          {t.raw("steps").map(
            (
              step: { title: string; desc: string },
              index: number
            ) => (
              <div
                key={`${step.title}-${index}`}
                className=" group text-center">
                {/* Number */}
                <div
                  className="
      mx-auto

      flex
      size-16 md:size-20

      items-center
      justify-center

      rounded-full

      border-4 border-dnv-accent

      bg-[#10284a]

      text-xl md:text-2xl
      font-bold
      text-white

      shadow-xl
    "
                >
                  {index + 1}
                </div>

                {/* Content */}
                <div className="mt-2 md:mt-5">
                  <h3
                    className="mb-2 md:mb-3 font-semibold
        text-white
        text-[clamp(1.1rem,3vw,1.5rem)]
      "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
        text-blue-50/90
        leading-7

        text-[clamp(.92rem,2.5vw,1rem)]
      "
                  >
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
