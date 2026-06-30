"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FormInputR } from "@/components/CommonApp/FormInputR";
import { FormSelectR } from "@/components/CommonApp/FormSelectR";
import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";

export default function AddPatientCaseForm() {
  const t = useTranslations("addPatientModal");
const patientFields = [
  {
    key: "patientName",
    placeholder: t("patientName"),
  },
  {
    key: "age",
    placeholder: t("age"),
  },
  {
    key: "phone",
    placeholder: t("phone"),
  },
];
  const universities = [
    {
      value: "tishreen",
      label: t("universities.tishreen"),
    },
    {
      value: "manara",
      label: t("universities.manara"),
    },
    {
      value: "alsham",
      label: t("universities.alsham"),
    },
  ];

  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    phone: "",
    nationalId: "",
    university: "",
  });

  const [cases, setCases] = useState([
    {
      toothNumber: "",
      condition: "",
    },
  ]);

  const [page, setPage] = useState(0);

  const casesPerPage = 3;

  const startIndex = page * casesPerPage;

  const visibleCases = cases.slice(
    startIndex,
    startIndex + casesPerPage
  );

  function handleChange(
    key: string,
    value: string
  ) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function updateCase(
    index: number,
    key: string,
    value: string
  ) {
    setCases((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, [key]: value }
          : item
      )
    );
  }

  function addCase() {
    setCases((prev) => [
      ...prev,
      {
        toothNumber: "",
        condition: "",
      },
    ]);
  }

  return (
    <div className="mx-auto max-w-5xl ">
  <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">

    {/* Header */}
    <div className="border-b border-slate-100 px-5 py-5 md:px-8">
      <TitleSectionCommon
        title="إضافة مريض جديد"
        subtitle="قم بإدخال بيانات المريض والحالات المطلوبة."
        classA="text-[clamp(2.5rem,3vw,3rem)]"
         className2="
                text-dnv-muted
                text-[clamp(1rem,2.8vw,1.1rem)]
                leading-8
              "
      
      />
    </div>

    {/* Body */}
    <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 md:gap-4 md:p-8">

      {patientFields.map((field) => (
        <FormInputR
          key={field.key}
          value={formData[field.key as keyof typeof formData]}
          onChange={(e) =>
            handleChange(field.key, e.target.value)
          }
          placeholder={field.placeholder}
        />
      ))}

      <FormSelectR
        value={formData.university}
        onChange={(value) =>
          handleChange("university", value)
        }
        placeholder={t("university")}
        options={universities}
      />

      <FormInputR
        value={formData.nationalId}
        onChange={(e) =>
          handleChange(
            "nationalId",
            e.target.value
          )
        }
        placeholder={t("nationalId")}
        className="md:col-span-2"
      />

      {/* الحالات */}
      <div className="space-y-3 md:col-span-2">
        {visibleCases.map((item, index) => {
          const realIndex = startIndex + index;

          return (
            <div
              key={realIndex}
              className="grid grid-cols-1 gap-3 md:grid-cols-2"
            >
              <FormInputR
                value={item.toothNumber}
                onChange={(e) =>
                  updateCase(
                    realIndex,
                    "toothNumber",
                    e.target.value
                  )
                }
                placeholder={`رقم السن ${realIndex + 1}`}
              />

              <FormInputR
                value={item.condition}
                onChange={(e) =>
                  updateCase(
                    realIndex,
                    "condition",
                    e.target.value
                  )
                }
                placeholder={`الحالة ${realIndex + 1}`}
              />
            </div>
          );
        })}
      </div>

      {/* Slider */}
      <div className="flex items-center justify-between text-sm md:col-span-2">
        <button
          type="button"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="font-medium text-[#1e3a6d] disabled:text-slate-300"
        >
          السابق
        </button>

        <button
          type="button"
          disabled={
            (page + 1) * casesPerPage >= cases.length
          }
          onClick={() => setPage(page + 1)}
          className="font-medium text-[#1e3a6d] disabled:text-slate-300"
        >
          التالي
        </button>
      </div>

      {/* Add Case */}
      <button
        type="button"
        onClick={addCase}
        className="
          md:col-span-2
          rounded-2xl
          border border-dashed border-blue-300
          py-3
          text-sm
          font-medium
          text-[#1e3a6d]
          transition
          hover:bg-blue-50
        "
      >
        + إضافة حالة جديدة
      </button>
    </div>

    {/* Footer */}
    <div className="border-t border-slate-100 px-5 py-5 md:px-8">
      <button
        className="
          h-11
          rounded-xl
          bg-gradient-to-br
          from-[#2563eb]
          to-[#1e3a6d]
          px-8
          text-sm
          font-medium
          text-white
          transition
          hover:opacity-90
        "
      >
        إرسال الطلب
      </button>
    </div>
  </div>
</div>
  );
}
