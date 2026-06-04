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

    mode: "create" | "edit" | "request";

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
            defaultValues?.name || "",

        age:
            defaultValues?.age || "",

        phone:
            defaultValues?.phone || "",

        nationalId:
            defaultValues?.nationalId || "",

        university:
            defaultValues?.university || "",

        toothNumber:
            defaultValues?.toothNumber || "",

        condition:
            defaultValues?.condition || "",
    });

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

                /*
                
                create patient
                
                await axios.post(
                  "/patients",
                  formData
                );

                if request:
                
                await axios.delete(
                  `/requests/${defaultValues.id}`
                );
                
                */

                console.log(
                    formData
                );

                onClose();

            } catch (error) {

                console.log(
                    error
                );
            }
        };

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

          overflow-hidden

          rounded-[2rem]
          bg-white

          shadow-[0_25px_80px_rgba(15,23,42,0.18)]
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
                                mode ===
                                    "create"

                                    ? t("title")

                                    : t("requestTitle")
                            }
                        </h2>

                        <p
                            className="
                mt-1 text-sm text-slate-500
              "
                        >

                            {
                                mode ===
                                    "create"

                                    ? t("subtitle")

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
                    <FormInputR
                        value={
                            formData.toothNumber
                        }
                        onChange={(e) =>
                            handleChange(
                                "toothNumber",
                                e.target.value
                            )
                        }
                        placeholder={
                            t("toothNumber")
                        }
                    />

                    {/* Condition */}
                    <FormInputR
                        value={
                            formData.condition
                        }
                        onChange={(e) =>
                            handleChange(
                                "condition",
                                e.target.value
                            )
                        }
                        placeholder={
                            t("condition")
                        }
                    />
                </div>

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
                </div>
            </div>
        </div>
    );
}