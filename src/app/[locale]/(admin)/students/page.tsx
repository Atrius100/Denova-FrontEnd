"use client";

import { useState } from "react";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import DataTable from "@/features/reception/ui/DataTable";

const universities = [
  "الكل",
  "جامعة تشرين",
  "جامعة المنارة",
  "جامعة الشام الخاصة",
];

const students = [
  {
    id: 1,
    student: "أحمد محمد",
    university: "جامعة تشرين",
    year: "السنة الخامسة",

    cases: [
      {
        name: "تلبيسة",
        status: "pending",
      },

      {
        name: "قلع",
        status: "completed",
      },

      {
        name: "تنظيف",
        status: "active",
      },

      {
        name: "زرعة",
        status: "completed",
      },

      {
        name: "تقويم",
        status: "pending",
      },
    ],
  },

  {
    id: 2,
    student: "لينا حسن",
    university: "جامعة المنارة",
    year: "السنة الرابعة",

    cases: [
      {
        name: "سحب عصب",
        status: "completed",
      },

      {
        name: "تلبيسة",
        status: "active",
      },

      {
        name: "قلع",
        status: "pending",
      },

      {
        name: "تنظيف",
        status: "completed",
      },

      {
        name: "زرعة",
        status: "active",
      },
    ],
  },

  {
    id: 3,
    student: "محمد علي",
    university: "جامعة الشام الخاصة",
    year: "السنة السادسة",

    cases: [
      {
        name: "تقويم",
        status: "active",
      },

      {
        name: "تنظيف",
        status: "completed",
      },

      {
        name: "تلبيسة",
        status: "pending",
      },

      {
        name: "قلع",
        status: "completed",
      },

      {
        name: "زرعة",
        status: "completed",
      },
    ],
  },
];

const renderStatus = (
  status: string
) => (
  <span
    className={`
      inline-flex rounded-full
      px-3 py-1 text-xs font-medium

      ${
        status === "pending"
          ? "bg-amber-100 text-amber-700"

          : status === "active"
          ? "bg-blue-100 text-blue-700"

          : "bg-emerald-100 text-emerald-700"
      }
    `}
  >
    {status}
  </span>
);

const renderCase = (
  title: string,
  status: string
) => (
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs font-medium text-slate-600">
      {title}
    </span>

    {renderStatus(status)}
  </div>
);

export default function AdminStudentsPage() {
  const [
    selectedUniversity,
    setSelectedUniversity,
  ] = useState("الكل");

  const filteredStudents =
    selectedUniversity === "الكل"
      ? students
      : students.filter(
          (student) =>
            student.university ===
            selectedUniversity
        );

  return (
    <div className="space-y-6">

      {/* Filters */}

      <div className="flex flex-wrap gap-3">

        {universities.map(
          (university) => (
            <button
              key={university}
              onClick={() =>
                setSelectedUniversity(
                  university
                )
              }
              className={`
                rounded-xl px-5 py-3
                text-sm font-semibold
                transition

                ${
                  selectedUniversity ===
                  university
                    ? `
                    bg-gradient-to-r
                    from-[#1e3a6d]
                    to-[#3b82f6]
                    text-white
                    shadow-lg
                    shadow-blue-500/20
                  `
                    : `
                    border border-slate-200
                    bg-white
                    text-slate-600
                  `
                }
              `}
            >
              {university}
            </button>
          )
        )}
      </div>

      <DataTable
        title="الطلاب"
        subtitle="إدارة الطلاب"

        data={filteredStudents}

        columns={[
          {
            title: "الطالب",

            cell: (row) =>
              row.student,
          },

          {
            title: "السنة",

            cell: (row) =>
              row.year,
          },

          {
            title: "حالة 1",

            cell: (row) =>
              renderCase(
                row.cases[0].name,
                row.cases[0].status
              ),
          },

          {
            title: "حالة 2",

            cell: (row) =>
              renderCase(
                row.cases[1].name,
                row.cases[1].status
              ),
          },

          {
            title: "حالة 3",

            cell: (row) =>
              renderCase(
                row.cases[2].name,
                row.cases[2].status
              ),
          },

          {
            title: "حالة 4",

            cell: (row) =>
              renderCase(
                row.cases[3].name,
                row.cases[3].status
              ),
          },

          {
            title: "حالة 5",

            cell: (row) =>
              renderCase(
                row.cases[4].name,
                row.cases[4].status
              ),
          },

          {
            title: "الإجراءات",

            className:
              "text-center",

            cell: () => (
              <div className="flex items-center justify-center gap-2">

                <button
                  className="
                    rounded-full p-2
                    text-blue-600
                    hover:bg-blue-50
                  "
                >
                  <Eye className="h-5 w-5" />
                </button>

                <button
                  className="
                    rounded-full p-2
                    text-amber-600
                    hover:bg-amber-50
                  "
                >
                  <Pencil className="h-5 w-5" />
                </button>

                <button
                  className="
                    rounded-full p-2
                    text-red-600
                    hover:bg-red-50
                  "
                >
                  <Trash2 className="h-5 w-5" />
                </button>

              </div>
            ),
          },
        ]}
      />
    </div>
  );
}