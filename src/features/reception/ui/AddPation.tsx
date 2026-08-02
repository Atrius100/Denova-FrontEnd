"use client";

import { useState }
  from "react";

import { X }
  from "lucide-react";

import {
  FormInputR
} from "@/components/CommonApp/FormInputR";

import {
  FormSelectR
} from "@/components/CommonApp/FormSelectR";
import { useLocale, useTranslations } from "next-intl";
import { useUniversities } from "@/features/auth/hooks/useUniversity";
import { useCaseCategories } from "@/features/home/hooks/useCaseCategories";
import { useCreatePatientCase } from "@/features/profile/hooks/useCreatePatientCase";
import { useCreateMedicalCaseForPatient } from "@/features/profile/hooks/useCreateCaseForPatient";

type PatientFormModalProps = {

  mode: "create" | "edit" | "request" | "view"

  onClose: () => void;

  defaultValues?: any;
};

export default function PatientFormModal({
  mode,
  onClose,
  defaultValues,
}: PatientFormModalProps) {
  const createPatientCase = useCreatePatientCase();
const createMedicalCaseForPatient = useCreateMedicalCaseForPatient();
  const locale = useLocale();
  const { data: universities = [] } = useUniversities();

  const universityOptions = universities.map((item) => ({
    value: item.id.toString(),
    label: locale === "ar" ? item.nameAr : item.name,
  }));



  const { data: categories = [] } = useCaseCategories();

  const t = useTranslations("addPatientModal");
  const isView = mode === "view";
  /* ================= UNIVERSITIES ================= */

  const categoryOptions =
    categories?.map((item) => ({
      value: item.id.toString(),
      label: locale === "ar" ? item.nameAr : item.name,
    })) ?? [];



  /* ================= FORM ================= */

  const [
    formData,
    setFormData,
  ] = useState({

    patientName:
      defaultValues?.patientName ||
      defaultValues?.patient ||
      defaultValues?.name ||
      defaultValues?.student ||
      "",

    age:
      defaultValues?.age || "",

    phone:
      defaultValues?.phone || "",

    nationalId:
      defaultValues?.nationalId || "",

    university:
      defaultValues?.university ||
      defaultValues?.studentUniversity ||
      "",

    

  });
  const [cases, setCases] = useState([
    {
      categoryId: "",
      subcategoryId: "",
      toothNumber: "",
    },
  ]);
  const addCase = () => {
    setCases((prev) => {

      const updatedCases = [
        ...prev,
        {
          categoryId: "",
          subcategoryId: "",
          toothNumber: "",
        }
      ];

      setPage(
        Math.floor(
          (updatedCases.length - 1) / casesPerPage
        )
      );

      return updatedCases;
    });
  };

  const updateCase = (
    index: number,
    key: string,
    value: string
  ) => {
    setCases((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, [key]: value }
          : item
      )
    );
  };
  const handleChange = (
    key: string,
    value: string
  ) => {

    setFormData(
      (prev) => ({
        ...prev,

        [key]: value,
      })
    );
  };

  /* ================= SAVE ================= */

  const handleSave = () => {
  const firstCase = cases[0];

  if (!firstCase) return;

  createPatientCase.mutate(
    {
      categoryId: Number(firstCase.categoryId),
      subcategoryId: Number(firstCase.subcategoryId),
      toothNumber: Number(firstCase.toothNumber),

      patientName: formData.patientName,
      patientAge: Number(formData.age),

      patientPhone: formData.phone,
      patientSecurityNumber: formData.nationalId,

      universityId: formData.university,

      clinicalNotes: "",

      autoAssignToSelf: false,
    },
    {
      onSuccess: () => {
        createMedicalCaseForPatient.mutate(
          {
            patientSecurityNumber:
              formData.nationalId,

            categoryId: Number(firstCase.categoryId),

            subcategoryId: Number(
              firstCase.subcategoryId
            ),

            toothNumber: Number(
              firstCase.toothNumber
            ),

            clinicalNotes: "",
          },
          {
            onSuccess: () => {
              onClose();
            },
          }
        );
      },
    }
  );
};
  const [page, setPage] = useState(0);

  const casesPerPage = 1;

  const startIndex = page * casesPerPage;

  const visibleCases = cases.slice(
    startIndex,
    startIndex + casesPerPage
  );

  return (

    <div
      className="
        fixed inset-0 z-50

        flex items-center justify-center

        bg-black/30
        p-4

        backdrop-blur-sm
      "
    >

      <div
        className="
    w-full max-w-2xl
    rounded-[2rem]
    bg-white
    shadow-[0_25px_80px_rgba(15,23,42,0.18)]

    max-h-[90vh]
    overflow-y-auto
  "
      >

        {/* ================= HEADER ================= */}
        <div
          className="
            flex items-start justify-between

            border-b border-slate-200

            px-5 py-5
            sm:px-6
          "
        >

          <div>

            <h2
              className="
                text-xl font-bold text-slate-800
                sm:text-2xl
              "
            >

              {
                mode === "create"
                  ? t("title")
                  : mode === "edit"
                    ? "تعديل البيانات"
                    : mode === "view"
                      ? "عرض البيانات"
                      : t("requestTitle")
              }
            </h2>

            <p
              className="
                mt-1 text-sm text-slate-500
              "
            >

              {
                mode === "create"
                  ? t("subtitle")
                  : mode === "edit"
                    ? "تعديل بيانات المريض"
                    : mode === "view"
                      ? "عرض بيانات المريض"
                      : t("requestSubtitle")
              }
            </p>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="
              flex h-10 w-10 items-center justify-center

              rounded-xl

              bg-slate-100
              text-slate-500

              transition
              hover:bg-slate-200
            "
          >

            <X className="h-5 w-5" />
          </button>
        </div>

        {/* ================= FORM ================= */}
        <div
          className="
            grid grid-cols-1 gap-3

            p-3

            md:grid-cols-2
            md:gap-4
            md:p-6
          "
        >

          {/* Patient Name */}
          <FormInputR
            value={
              formData.patientName
            }
            disabled={isView}
            onChange={(e) =>
              handleChange(
                "patientName",
                e.target.value
              )
            }
            placeholder={
              t("patientName")
            }
          />

          {/* Age */}
          <FormInputR
            value={
              formData.age
            }
            disabled={isView}
            onChange={(e) =>
              handleChange(
                "age",
                e.target.value
              )
            }
            placeholder={
              t("age")
            }
          />

          {/* Phone */}
          <FormInputR
            value={
              formData.phone
            }
            disabled={isView}
            onChange={(e) =>
              handleChange(
                "phone",
                e.target.value
              )
            }
            placeholder={
              t("phone")
            }
          />

          {/* University */}
          <FormSelectR
            value={
              formData.university
            }
            disabled={isView}
            onChange={(value) =>
              handleChange(
                "university",
                value
              )
            }
            placeholder={
              t("university")
            }
            options={universityOptions}
          />

          {/* National ID */}
          <FormInputR
            value={
              formData.nationalId
            }
            disabled={isView}
            onChange={(e) =>
              handleChange(
                "nationalId",
                e.target.value
              )
            }
            placeholder={
              t("nationalId")
            }
            className="md:col-span-2"
          />

          {/* Tooth Number */}

          <div className="md:col-span-2">

            <div
              className="
      
      overflow-y-auto
      rounded-2xl
      border border-slate-100
      p-2
    "
            >

              <div className="space-y-3">

                {visibleCases.map((item, index) => {
                  const realIndex = startIndex + index;
                  const selectedCategory = categories.find(
                    (c) => String(c.id) === item.categoryId
                  );

                  const subcategoryOptions = selectedCategory
                    ? selectedCategory.subcategories.map((sc) => ({
                      value: String(sc.id),
                      label: locale === "ar" ? sc.nameAr : sc.name,
                    }))
                    : [];

                  

                  return (
                    <div className="grid grid-cols-1 gap-3">

                      <FormSelectR
                        value={item.categoryId}
                        disabled={isView}
                        onChange={(value) =>
                          updateCase(realIndex, "categoryId", value)
                        }
                        placeholder="التصنيف"
                        options={categoryOptions}
                      />

                      <FormSelectR
                        value={item.subcategoryId}
                        disabled={isView}
                        onChange={(value) =>
                          updateCase(realIndex, "subcategoryId", value)
                        }
                        placeholder="التصنيف الفرعي"
                        options={subcategoryOptions}
                      />

                      <FormInputR
                        value={item.toothNumber}
                        disabled={isView}
                        onChange={(e) =>
                          updateCase(
                            realIndex,
                            "toothNumber",
                            e.target.value
                          )
                        }
                        placeholder="رقم السن"
                      />

                    </div>
                  );

                })}
                <div className="md:col-span-2 flex justify-between mt-3">

                  <button
                    type="button"
                    disabled={page === 0}
                    onClick={() => setPage(page - 1)}
                    className="text-blue-600 disabled:text-gray-300"
                  >
                    السابق
                  </button>

                  <button
                    type="button"
                    disabled={(page + 1) * casesPerPage >= cases.length}
                    onClick={() => setPage(page + 1)}
                    className="text-blue-600 disabled:text-gray-300"
                  >
                    التالي
                  </button>

                </div>
              </div>

            </div>

          </div>

          {/* زر إضافة حالة */}
          {!isView && (
            <button
              type="button"
              onClick={addCase}
              className="
      md:col-span-2
      rounded-2xl
      border border-dashed border-blue-300
      py-3
      text-blue-600
      hover:bg-blue-50
    "
            >
              + إضافة حالة جديدة
            </button>
          )}

        </div>

        {/* ================= FOOTER ================= */}
        {/* ================= FOOTER ================= */}
        <div
          className="
    flex flex-col-reverse gap-2

    border-t border-slate-200

    p-3

    sm:flex-row
    sm:items-center
    sm:justify-end

    md:gap-3
    md:p-5
    md:px-6
  "
        >
          {/* Cancel */}
          <button
            onClick={onClose}
            className="
      h-10
      rounded-xl

      border border-slate-200

      px-5

      text-sm font-medium text-slate-600

      transition
      hover:bg-slate-100

      md:h-11
      md:rounded-2xl
    "
          >
            {t("cancel")}
          </button>

          {/* Save */}
          {!isView && (
            <button
              onClick={handleSave}
              className="
        h-10
        rounded-xl

        bg-gradient-to-r
        from-[#1e3a6d]
        to-[#3b82f6]

        px-6

        text-sm font-medium text-white

        shadow-lg shadow-blue-500/20

        transition
        hover:opacity-90

        md:h-11
        md:rounded-2xl
      "
            >
              {t("save")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}