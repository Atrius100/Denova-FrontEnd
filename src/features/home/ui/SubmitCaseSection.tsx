"use client";

import { useState } from "react";
import { FormInputR } from "@/components/CommonApp/FormInputR";
import { FormSelectR } from "@/components/CommonApp/FormSelectR";
import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
interface ToothEntry {
  id: string;
  number: string;
  condition: string;
  selected: boolean;
}
interface SubmitCaseSectionProps {
  role?: "student" | "guest" | "admin" | "reception";
}

export function SubmitCaseSection({ role = "student" }: SubmitCaseSectionProps) {
  const t = useTranslations("submit");
  const [university, setUniversity] = useState("");
  const [teeth, setTeeth] = useState<ToothEntry[]>([
    {
      id: Date.now().toString(),
      number: "",
      condition: "",
      selected: false,
    },
  ]);
  const [sliderIndex, setSliderIndex] = useState(0);

  const addTooth = () => {
    const newTooth: ToothEntry = {
      id: Date.now().toString(),
      number: "",
      condition: "",
      selected: false,
    };
    setTeeth([...teeth, newTooth]);
  };


  const removeTooth = (id: string) => {
    const newTeeth = teeth.filter((tooth) => tooth.id !== id);
    if (newTeeth.length > 0) {
      setTeeth(newTeeth);
      if (sliderIndex >= newTeeth.length - 2) {
        setSliderIndex(Math.max(0, newTeeth.length - 2));
      }
    } else {
      setTeeth([
        {
          id: Date.now().toString(),
          number: "",
          condition: "",
          selected: false,
        },
      ]);
      setSliderIndex(0);
    }
  };

  const updateTooth = (
    id: string,
    field: "number" | "condition",
    value: string
  ) => {
    setTeeth(
      teeth.map((tooth) =>
        tooth.id === id ? { ...tooth, [field]: value } : tooth
      )
    );
  };

  const nextSlide = () => {
    if (sliderIndex < teeth.length - 2) {
      setSliderIndex(sliderIndex + 1);
    }
  };

  const prevSlide = () => {
    if (sliderIndex > 0) {
      setSliderIndex(sliderIndex - 1);
    }
  };

  const isStudent = role === "student";
  const isGuest = role === "guest";
  const visibleTeeth = teeth.slice(sliderIndex, sliderIndex + 2);
  const toggleSelected = (id: string) => {
    setTeeth(
      teeth.map((tooth) =>
        tooth.id === id
          ? { ...tooth, selected: !tooth.selected }
          : tooth
      )
    );
  };
  const fields = [
    {
      name: "patientName",
      placeholder: t("patientName"),
    },
    {
      name: "age",
      placeholder: t("age"),
    },
    {
      name: "phone",
      placeholder: t("phone"),
      type: "tel",
      dir: "ltr",
    },
    {
      name: "nationalId",
      placeholder: t("nationalId"),
    },
  ];
  const universities = [
    {
      label: t("universities.tishreen"),
      value: "tishreen",
    },
    {
      label: t("universities.manara"),
      value: "manara",
    },
    {
      label: t("universities.sham"),
      value: "sham",
    },
  ];
  const conditionOptions = [
    {
      label: "قلع",
      value: "extraction",
    },
    {
      label: "عصب",
      value: "endo",
    },
    {
      label: "حشوة",
      value: "filling",
    },
    {
      label: "تقويم",
      value: "ortho",
    },
  ];
  return (
    <section className="border-b border-dnv-border bg-dnv-soft p-5 md:p-8 lg:p-10 dark:border-white/10">
      <div className="mx-auto w-full">
        <div className="mb-5 mx-auto max-w-[58rem] text-center">
          <TitleSectionCommon
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-dnv-border bg-background p-3 md:p-5 shadow-lg shadow-dnv-border/30 dark:border-white/15 md:p-7">
          <form
            className="space-y-2 md:space-y-6"
            autoComplete="off"
            aria-label={t("title")}
          >
            <div className="grid gap-2 md:gap-5 md:grid-cols-2">
              {/* الحقول المشتركة */}
              {fields.map((field) => (
                <FormInputR
                  key={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                  dir={field.dir}
                />
              ))}

              {/* حقل الجامعة مشترك */}
              <div className="md:col-span-2">
                <FormSelectR
                  name="university"
                  placeholder={t("selectUniversity")}
                  value={university}
                  onChange={setUniversity}
                  options={universities}
                />
              </div>

              {/* حقول الأسنان للطالب فقط */}
              {isStudent && (
                <>


                  {/* عرض حالتين */}
                  <div className="md:col-span-2">
                    <div className="grid gap-6 ">
                      {visibleTeeth.map((tooth, idx) => {
                        const actualIndex = sliderIndex + idx;
                        return (
                          <div
                            key={tooth.id}
                            className="flex flex-col gap-4  border-slate-200"
                          >

                            <div className="flex justify-between items-center w-full gap-2">
                              <div className="flex justify-between w-full gap-2">
                                <FormInputR
                                  name={`toothNumber-${tooth.id}`}
                                  type="text"
                                  placeholder={`رقم السن - الحالة ${actualIndex + 1}`}
                                  value={tooth.number}
                                  onChange={(e) =>
                                    updateTooth(
                                      tooth.id,
                                      "number",
                                      (e.target as HTMLInputElement).value
                                    )
                                  }
                                />

                                <FormSelectR
                                  name={`condition-${tooth.id}`}
                                  placeholder={`حالة السن - الحالة ${actualIndex + 1}`}
                                  value={tooth.condition}
                                  onChange={(value) =>
                                    updateTooth(
                                      tooth.id,
                                      "condition",
                                      value
                                    )
                                  }
                                  options={conditionOptions}
                                />
                              </div>
                              <div className="flex items-center gap-0.5 md:gap-2">

                                <input
                                  type="checkbox"
                                  checked={tooth.selected}
                                  onChange={() => toggleSelected(tooth.id)}
                                  className="size-4 md:size-5 accent-blue-600"
                                />

                                <button
                                  type="button"
                                  onClick={() => removeTooth(tooth.id)}
                                  className="
      
      text-red-500
      hover:bg-red-50
      flex items-center justify-center
    "
                                >
                                  <Trash2 size={18} />
                                </button>

                              </div>
                            </div>



                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* السلايدر إذا كانت أكثر من حالتين */}
                  {teeth.length > 2 && (
                    <div className="md:col-span-2 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={prevSlide}
                        disabled={sliderIndex === 0}
                        className="p-2 hover:bg-slate-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                      >
                        <ChevronRight size={20} />
                      </button>

                      <div className="text-sm text-slate-500">
                        {sliderIndex + visibleTeeth.length} من {teeth.length}
                      </div>

                      <button
                        type="button"
                        onClick={nextSlide}
                        disabled={sliderIndex >= teeth.length - 2}
                        className="p-2 hover:bg-slate-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                      >
                        <ChevronLeft size={20} />
                      </button>

                    </div>
                  )}

                  <div className="md:col-span-2 flex gap-4 w-full">

                    {isStudent && (
                      <button
                        type="button"
                        onClick={addTooth}
                        className="h-10
        md:h-14
        flex-1
        rounded-xl
        border border-dashed border-slate-300
        text-slate-600
        hover:bg-slate-50
        transition
      "
                      >
                        + إضافة حالة
                      </button>
                    )}

                    <button
                      type="submit"
                      className="
                      h-10
      md:h-14
      flex-1
      rounded-xl
      bg-gradient-to-br
      from-[#2563eb]
      to-[#1e3a6d]
      text-white
      transition
      hover:scale-[1.01]
    "
                    >
                      {t("submit")}
                    </button>

                  </div>
                </>
              )}

              {/* حقل الملاحظات للزائر فقط */}
              {isGuest && (
                <div className="md:col-span-2">
                  <textarea
                    name="notes"
                    placeholder="اوصف الوجع والأسنان اللي فيها مشكلة (مثلاً: واجعني كذا ضرس في الجهة اليمين...)"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-5
                      py-3
                      min-h-28
                      text-sm
                      text-slate-700
                      outline-none
                      transition
                      placeholder:text-[#999999]
                      focus:border-[#1e3a6d]
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>
              )}
            </div>
            {isGuest && (
              <button
                type="submit"
                className="
                h-10
                md:h-14
                w-full
                rounded-xl
                bg-gradient-to-br
                from-[#2563eb]
                to-[#1e3a6d]
                text-white
                transition
                hover:scale-[1.01]
              "
              >
                {t("submit")}
              </button>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}
