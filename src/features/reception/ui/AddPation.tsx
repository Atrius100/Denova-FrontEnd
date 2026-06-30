"use client";

import { useState }
from "react";

import { useTranslations }
from "next-intl";

import { X }
from "lucide-react";

import {
    FormInputR
} from "@/components/CommonApp/FormInputR";

import {
    FormSelectR
} from "@/components/CommonApp/FormSelectR";

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

    const t =
        useTranslations(
            "addPatientModal"
        );
const isView = mode === "view";
    /* ================= UNIVERSITIES ================= */

    const universities = [

        {
            value: "tishreen",

            label:
                t(
                    "universities.tishreen"
                ),
        },

        {
            value: "manara",

            label:
                t(
                    "universities.manara"
                ),
        },

        {
            value: "alsham",

            label:
                t(
                    "universities.alsham"
                ),
        },
    ];

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

  toothNumber:
    defaultValues?.toothNumber || "",

  condition:
    defaultValues?.condition ||
    defaultValues?.caseName ||
    defaultValues?.case1?.title ||
    "",

});
const [cases, setCases] = useState([
  {
    toothNumber:
      defaultValues?.toothNumber || "",
    condition:
      defaultValues?.condition || "",
  },
]);
const addCase = () => {
  setCases((prev) => {

    const updatedCases = [
      ...prev,
      {
        toothNumber: "",
        condition: "",
      },
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

    const handleSave =
        async () => {

          try {

    console.log({
        ...formData,
        cases,
    });

    onClose();

} catch (error) {

    console.log(error);

}
        };
        
const [page, setPage] = useState(0);

const casesPerPage = 3;

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
                        options={universities}
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
{/* الحالات */}
{/* الحالات */}
<div className="md:col-span-2">

  <div
    className="
      h-[220px]
      overflow-y-auto
      rounded-2xl
      border border-slate-100
      p-2
    "
  >

    <div className="space-y-3">

{visibleCases.map((item, index) => {

  const realIndex = startIndex + index;

  return (
    <div
      key={realIndex}
      className="grid grid-cols-1 md:grid-cols-2 gap-3"
    >
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
        placeholder={`رقم السن ${realIndex + 1}`}
      />

      <FormInputR
        value={item.condition}
        disabled={isView}
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