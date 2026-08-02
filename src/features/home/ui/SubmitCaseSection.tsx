"use client";

import { useState } from "react";
import { FormInputR } from "@/components/CommonApp/FormInputR";
import { FormSelectR } from "@/components/CommonApp/FormSelectR";
import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCreateMedicalCaseByPatient } from "../hooks/useCreateMedicalCaseByPatient";
import { useUniversities } from "@/features/auth/hooks/useUniversity";
import { useCreateMedicalCaseForPatient } from "@/features/profile/hooks/useCreateCaseForPatient";
import { useCreatePatientCase } from "@/features/profile/hooks/useCreatePatientCase";
import { useCaseCategories } from "../hooks/useCaseCategories";
import { readAuthSession } from "@/lib/auth/session";

interface ToothEntry {
  id: string;
  toothNumber: string;
  categoryId: string;
  subcategoryId: string;
  selected: boolean;
}

interface SubmitCaseSectionProps {
  role?: "student" | "guest" | "admin" | "reception";
}

function isTokenExpired(token: string | undefined): boolean {
  if (!token) return true;
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) return true;
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    
    const { exp } = JSON.parse(jsonPayload);
    return Date.now() >= exp * 1000;
  } catch (error) {
    return true; 
  }
}

export function SubmitCaseSection({ role: initialRole = "student" }: SubmitCaseSectionProps) {
  const session = readAuthSession();
  const isExpired = isTokenExpired(session?.token); 

  // 💡 حل مشكلة TypeScript: تحويل الـ session إلى any لقراءة الـ role بأمان وتفادي خطأ ts(2339)
  const sessionData = session as any;
  const currentRole = (session && !isExpired) ? (sessionData?.role || "student") : "guest"; 

  const createPatientCase = useCreatePatientCase();
  const createMedicalCaseForPatient = useCreateMedicalCaseForPatient();
  const createMedicalCaseByPatient = useCreateMedicalCaseByPatient();
  
  const { data: categories = [] } = useCaseCategories();
  const { data: universities = [] } = useUniversities();

  const isStudent = currentRole === "student" || currentRole === "admin";
  const isGuest = currentRole === "guest";

  const universityOptions = universities.map((u) => ({
    value: String(u.id),
    label: u.nameAr,
  }));

  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    phone: "",
    nationalId: "",
    university: "",
    toothNumber: "", 
    clinicalNotes: "",
  });

  const [teeth, setTeeth] = useState<ToothEntry[]>([
    {
      id: Date.now().toString(),
      toothNumber: "",
      categoryId: "",
      subcategoryId: "",
      selected: false,
    },
  ]);

  const [sliderIndex, setSliderIndex] = useState(0);
  const t = useTranslations("submit");

  const visibleTeeth = teeth.slice(sliderIndex, sliderIndex + 2);

  function handleChange(key: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const addTooth = () => {
    const newTooth: ToothEntry = {
      id: Date.now().toString(),
      toothNumber: "",
      categoryId: "",
      subcategoryId: "",
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
          toothNumber: "",
          categoryId: "",
          subcategoryId: "",
          selected: false,
        },
      ]);
      setSliderIndex(0);
    }
  };

  const updateTooth = (id: string, field: keyof ToothEntry, value: string | boolean) => {
    setTeeth((prevTeeth) =>
      prevTeeth.map((tooth) =>
        tooth.id === id ? { ...tooth, [field]: value } : tooth
      )
    );
  };

  const toggleSelected = (id: string) => {
    setTeeth((prevTeeth) =>
      prevTeeth.map((tooth) =>
        tooth.id === id ? { ...tooth, selected: !tooth.selected } : tooth
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

  function resetForm() {
    setFormData({
      patientName: "",
      age: "",
      phone: "",
      nationalId: "",
      university: "",
      toothNumber: "",
      clinicalNotes: "",
    });

    setTeeth([
      {
        id: Date.now().toString(),
        toothNumber: "",
        categoryId: "",
        subcategoryId: "",
        selected: false,
      },
    ]);

    setSliderIndex(0);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (isGuest) {
      createMedicalCaseByPatient.mutate(
        {
          patientName: formData.patientName,
          patientAge: Number(formData.age) || 0,
          patientPhone: formData.phone,
          patientSecurityNumber: formData.nationalId,
          universityId: formData.university,
          toothNumber: 0, // تم تصفيره تلقائياً لأن الحقل حُذف من الواجهة للزائر
          clinicalNotes: formData.clinicalNotes.trim() || "ملاحظات افتراضية للزائر",
        },
        {
          onSuccess: () => {
            resetForm();
          },
        }
      );
      return;
    }

    if (isStudent) {
      const firstCase = teeth[0];
      if (!firstCase) return;

      createPatientCase.mutate(
        {
          categoryId: Number(firstCase.categoryId) || 0,
          subcategoryId: Number(firstCase.subcategoryId) || 0,
          toothNumber: Number(firstCase.toothNumber) || 0, 
          patientName: formData.patientName,
          patientAge: Number(formData.age) || 0,
          patientPhone: formData.phone,
          patientSecurityNumber: formData.nationalId,
          universityId: formData.university, 
          clinicalNotes: "حالة مضافة بواسطة الطالب أو الأدمن", 
          autoAssignToSelf: false,
        },
        {
          onSuccess: () => {
            createMedicalCaseForPatient.mutate(
              {
                patientSecurityNumber: formData.nationalId,
                categoryId: Number(firstCase.categoryId) || 0,
                subcategoryId: Number(firstCase.subcategoryId) || 0,
                toothNumber: Number(firstCase.toothNumber) || 0,
                clinicalNotes: "حالة مضافة بواسطة الطالب أو الأدمن",
              },
              {
                onSuccess: () => {
                  resetForm();
                },
              }
            );
          },
        }
      );
    }
  }

  const fields = [
    { name: "patientName", placeholder: t("patientName") },
    { name: "age", placeholder: t("age") },
    { name: "phone", placeholder: t("phone"), type: "tel", dir: "ltr" },
    { name: "nationalId", placeholder: t("nationalId") },
  ];

  const categoryOptions = categories.map((c) => ({
    value: String(c.id),
    label: c.nameAr,
  }));

  return (
    <section className="border-b border-dnv-border bg-dnv-soft p-5 md:p-8 lg:p-10 dark:border-white/10">
      <div className="mx-auto w-full">
        <div className="mb-5 mx-auto max-w-[58rem] text-center">
          <TitleSectionCommon title={t("title")} subtitle={t("subtitle")} />
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-dnv-border bg-background p-3 md:p-5 shadow-lg shadow-dnv-border/30 dark:border-white/15 md:p-7">
          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-6" autoComplete="off" aria-label={t("title")}>
            <div className="grid gap-2 md:gap-5 md:grid-cols-2">
              {/* الحقول المشتركة */}
              {fields.map((field) => (
                <FormInputR
                  key={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                  dir={field.dir}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              ))}

              {/* حقل الجامعة */}
              <div className="md:col-span-2">
                <FormSelectR
                  value={formData.university}
                  onChange={(value) => handleChange("university", value)}
                  name="university"
                  placeholder={t("selectUniversity")}
                  options={universityOptions}
                />
              </div>

              {/* حقول الزائر فقط (تم حذف حقل رقم السن وبقي فقط صندوق الملاحظات) */}
              {isGuest && (
                <div className="md:col-span-2">
                  <textarea
                    name="clinicalNotes"
                    placeholder="اوصف الوجع والأسنان اللي فيها مشكلة..."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 min-h-28 text-sm text-slate-700 outline-none transition placeholder:text-[#999999] focus:border-[#1e3a6d] focus:ring-4 focus:ring-blue-100"
                    value={formData.clinicalNotes}
                    onChange={(e) => handleChange("clinicalNotes", e.target.value)}
                  />
                </div>
              )}

              {/* حقول الطالب / الأدمن فقط */}
              {isStudent && (
                <div className="md:col-span-2">
                  <div className="grid gap-6">
                    {visibleTeeth.map((tooth, idx) => {
                      const actualIndex = sliderIndex + idx;
                      const selectedCategory = categories.find((c) => String(c.id) === tooth.categoryId);
                      const subcategoryOptions = selectedCategory
                        ? selectedCategory.subcategories.map((sc) => ({
                            value: String(sc.id),
                            label: sc.nameAr,
                          }))
                        : [];

                      return (
                        <div key={tooth.id} className="flex flex-col gap-4 border-slate-200">
                          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-2">
                            <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-2">
                              <FormInputR
                                name={`toothNumber-${tooth.id}`}
                                type="text"
                                placeholder={`رقم السن - الحالة ${actualIndex + 1}`}
                                value={tooth.toothNumber}
                                onChange={(e) => updateTooth(tooth.id, "toothNumber", e.target.value)}
                              />

                              <FormSelectR
                                name={`category-${tooth.id}`}
                                placeholder={`التصنيف الرئيسي - الحالة ${actualIndex + 1}`}
                                value={tooth.categoryId}
                                onChange={(value) => {
                                  updateTooth(tooth.id, "categoryId", value);
                                  updateTooth(tooth.id, "subcategoryId", "");
                                }}
                                options={categoryOptions}
                              />

                              <FormSelectR
                                name={`subcategory-${tooth.id}`}
                                placeholder={`التصنيف الفرعي - الحالة ${actualIndex + 1}`}
                                value={tooth.subcategoryId}
                                onChange={(value) => updateTooth(tooth.id, "subcategoryId", value)}
                                options={subcategoryOptions}
                                disabled={!tooth.categoryId}
                              />
                            </div>
                            <div className="flex items-center gap-2 mt-2 md:mt-0">
                              <input
                                type="checkbox"
                                checked={tooth.selected}
                                onChange={() => toggleSelected(tooth.id)}
                                className="size-4 md:size-5 accent-blue-600"
                              />
                              <button
                                type="button"
                                onClick={() => removeTooth(tooth.id)}
                                className="text-red-500 hover:bg-red-50 flex items-center justify-center p-1 rounded"
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
              )}

              {/* تحكم الـ Slider للطالب */}
              {isStudent && teeth.length > 2 && (
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
                    {Math.min(sliderIndex + visibleTeeth.length, teeth.length)} من {teeth.length}
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

              {/* أزرار الإرسال والإضافة للطالب */}
              {isStudent && (
                <div className="md:col-span-2 flex gap-4 w-full">
                  <button
                    type="button"
                    onClick={addTooth}
                    className="h-10 md:h-12 flex-1 rounded-xl border border-dashed border-slate-300 text-slate-600 hover:bg-slate-50 transition"
                  >
                    + إضافة حالة
                  </button>

                  <button
                    type="submit"
                    className="h-10 md:h-12 flex-1 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a6d] text-white transition hover:scale-[1.01]"
                  >
                    {t("submit")}
                  </button>
                </div>
              )}
            </div>

            {/* زر الإرسال للزائر */}
            {isGuest && (
              <button
                type="submit"
                className="h-10 md:h-14 w-full rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a6d] text-white transition hover:scale-[1.01]"
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