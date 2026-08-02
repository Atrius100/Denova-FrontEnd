"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FormInputR } from "@/components/CommonApp/FormInputR";
import { FormSelectR } from "@/components/CommonApp/FormSelectR";
import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { useCreatePatientCase } from "@/features/profile/hooks/useCreatePatientCase";
import { useCaseCategories } from "@/features/home/hooks/useCaseCategories";
import { useUniversities } from "@/features/auth/hooks/useUniversity";
import { useCreateMedicalCaseForPatient } from "@/features/profile/hooks/useCreateCaseForPatient";

export default function AddPatientCaseForm() {


  const { data: universities = [] } = useUniversities();
  const createMedicalCaseForPatient =
  useCreateMedicalCaseForPatient();

  const universityOptions = universities.map((u) => ({
    value: String(u.id),
    label: u.nameAr,
  }));
  const { data: categories = [] } = useCaseCategories();
  const createPatientCase = useCreatePatientCase();
  const t = useTranslations("addPatientModal");
  const categoryOptions = categories.map((category) => ({
    value: String(category.id),
    label: category.nameAr,
  }));
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

  const genders = [
    {
      value: "Male",
      label: "ذكر",
    },
    {
      value: "Female",
      label: "أنثى",
    },
  ];
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    phone: "",
    nationalId: "",
    university: "",
    gender: "Male",
  });

  const [autoAssignToSelf, setAutoAssignToSelf] =
    useState(true);
  const [cases, setCases] = useState([
    {
      categoryId: "",
      subcategoryId: "",
      toothNumber: "",
    }
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
        categoryId: "",
        subcategoryId: "",
        toothNumber: "",
      },
    ]);
  }
async function handleSubmit() {
  const firstCase = cases[0];
  const remainingCases = cases.slice(1);

  const patientPayload = {
    categoryId: Number(firstCase.categoryId),
    subcategoryId: Number(firstCase.subcategoryId),
    toothNumber: Number(firstCase.toothNumber),

    patientName: formData.patientName,
    patientAge: Number(formData.age),
    patientGender: formData.gender as "Male" | "Female",
    patientPhone: formData.phone,
    patientSecurityNumber: formData.nationalId,

    universityId: formData.university,

    clinicalNotes: "",

    autoAssignToSelf,
  };

  try {
    // أول حالة + إنشاء المريض
    await createPatientCase.mutateAsync(patientPayload);

    // باقي الحالات (إذا موجودة)
    await Promise.all(
      remainingCases.map((item) =>
        createMedicalCaseForPatient.mutateAsync({
          patientSecurityNumber: formData.nationalId,

          categoryId: Number(item.categoryId),
          subcategoryId: Number(item.subcategoryId),
          toothNumber: Number(item.toothNumber),

          clinicalNotes: "",
        })
      )
    );

    // تصفير الفورم
    setFormData({
      patientName: "",
      age: "",
      phone: "",
      nationalId: "",
      university: "",
      gender: "Male",
    });

    setCases([
      {
        categoryId: "",
        subcategoryId: "",
        toothNumber: "",
      },
    ]);

    setPage(0);
  } catch (err) {
    console.error(err);
  }
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
            options={universityOptions}
          />

          <div className="grid grid-cols-1 gap-3 md:col-span-2 md:grid-cols-2">
            <FormInputR
              value={formData.nationalId}
              onChange={(e) =>
                handleChange(
                  "nationalId",
                  e.target.value
                )
              }
              placeholder={t("nationalId")}
            />

            <FormSelectR
              value={formData.gender}
              onChange={(value) =>
                handleChange("gender", value)
              }
              placeholder="اختر الجنس"
              options={genders}
            />
          </div>

          {/* الحالات */}
          <div className="space-y-3 md:col-span-2">
            {visibleCases.map((item, index) => {
              const realIndex = startIndex + index;
              const selectedCategory = categories.find(
                (c) => String(c.id) === item.categoryId
              );

              const subcategoryOptions =
                selectedCategory?.subcategories.map((sub) => ({
                  value: String(sub.id),
                  label: sub.nameAr,
                })) ?? [];

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

                  <FormSelectR
                    value={item.categoryId}
                    onChange={(value) => {
                      updateCase(realIndex, "categoryId", value);

                      updateCase(realIndex, "subcategoryId", "");
                    }}
                    placeholder="اختر التصنيف"
                    options={categoryOptions}
                  />
                  <FormSelectR
                    value={item.subcategoryId}
                    onChange={(value) =>
                      updateCase(realIndex, "subcategoryId", value)
                    }
                    placeholder="اختر الحالة"
                    options={subcategoryOptions}
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
          h-11 lg:h-12
          rounded-2xl
          border border-dashed border-blue-300
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
            type="button"
            onClick={handleSubmit}
            disabled={createPatientCase.isPending}
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
            {createPatientCase.isPending
              ? "جاري الإرسال..."
              : "إرسال الطلب"}
          </button>
        </div>
      </div>
    </div>
  );
}
