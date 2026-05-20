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

type PatientFormModalProps = {

    mode:
    | "create"
    | "request";

    onClose: () => void;

    defaultValues?: any;
};

const universities = [

    {
        value: "tishreen",
        label: "جامعة تشرين",
    },

    {
        value: "manara",
        label: "جامعة المنارة",
    },

    {
        value: "alsham",
        label: "جامعة الشام",
    },
];

export default function PatientFormModal({
    mode,
    onClose,
    defaultValues,
}: PatientFormModalProps) {

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

    const handleSave =
        async () => {

            try {

                /*
                
                create patient
                
                await axios.post(
                  "/patients",
                  formData
                );

                إذا mode=request
                
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

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm">

            <div className="w-full max-w-2xl rounded-[2rem] bg-white shadow-[0_25px_80px_rgba(15,23,42,0.18)]">

                {/* Header */}
                <div className="flex items-start justify-between border-b border-slate-200 px-5 py-5 sm:px-6">

                    <div>

                        <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">

                            {
                                mode ===
                                    "create"

                                    ? "إضافة مريض"

                                    : "استكمال بيانات الطلب"
                            }
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">

                            {
                                mode ===
                                    "create"

                                    ? "إضافة مريض جديد للسجل"

                                    : "تعديل وتحويل الطلب إلى سجل مريض"
                            }
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200"
                    >

                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Form */}
                <div className="grid grid-cols-1 gap-2 md:gap-4 p-2 md:p-6 md:grid-cols-2">

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
                        placeholder="اسم المريض"
                    />

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
                        placeholder="العمر"
                    />

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
                        placeholder="رقم الموبايل"
                    />

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
                        placeholder="الجامعة"
                        options={universities}
                    />

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
                        placeholder="الرقم الوطني"
                        className="md:col-span-2"
                    />

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
                        placeholder="رقم السن"
                    />

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
                        placeholder="الحالة"
                    />
                </div>

                {/* Footer */}
                <div className="flex flex-col-reverse gap-2 md:gap-3 border-t border-slate-200 p-2 md:p-5 sm:flex-row sm:items-center sm:justify-end sm:px-6">

                    <button
                        onClick={onClose}
                        className="h-10 md:h-11 rounded-xl md:rounded-2xl border border-slate-200 px-5 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
                    >

                        إلغاء
                    </button>

                    <button
                        onClick={handleSave}
                        className="h-10 md:h-11 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#1e3a6d] to-[#3b82f6] px-6 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:opacity-90"
                    >

                        حفظ
                    </button>
                </div>
            </div>
        </div>
    );
}