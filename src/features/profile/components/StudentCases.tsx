"use client";

import { StudentCase } from "@/types/profile";
import CaseCard from "./caseCard";

type Props = {
    cases: StudentCase[];
};

export default function StudentCases({
    cases,
}: Props) {
    return (
        <section
            className="
               flex
               h-full
        p-3 lg:p-5
        rounded-2xl
        flex-col
        border
        border-slate-200
        bg-white
        shadow-sm
      "
        >
            {/* Header */}

            <div className="">

                <h2 className="text-2xl font-bold text-[#1e3a6d]">
                    حالاتي
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    جميع الحالات العلاجية الخاصة بك
                </p>

            </div>

            {/* Body */}

            <div className="flex-1 mt-2 lg:mt-4">

                {cases.length === 0 ? (
                    <div className="flex h-full items-center justify-center">

                        <p className="text-slate-400">
                            لا توجد حالات حالياً
                        </p>

                    </div>
                ) : (
                    <div
                        className="
              grid
             gap-2 lg:gap-4

              md:grid-cols-2
            "
                    >
                        {cases.map((item) => (
                            
                            <CaseCard
                                key={item.patientCode}
                                item={item}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}