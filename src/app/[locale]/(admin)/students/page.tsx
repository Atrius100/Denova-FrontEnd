"use client";

import { useState } from "react";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import DataTable from "@/features/reception/ui/DataTable";
import PatientFormModal from "@/features/reception/ui/AddPation";
import DeleteConfirmModal from "@/features/admin/ui/DeleteModel";
import FilterTabs from "@/components/CommonApp/FilterTabs";
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

      ${status === "pending"
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
  const [selectedStudent, setSelectedStudent] =
  useState<any>(null);

const [showViewModal, setShowViewModal] =
  useState(false);

const [showEditModal, setShowEditModal] =
  useState(false);

const [showDeleteModal, setShowDeleteModal] =
  useState(false);
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
    <>
    <div className="space-y-6">

      {/* Filters */}

      <FilterTabs
  items={universities}
  selected={selectedUniversity}
  onChange={setSelectedUniversity}
/>

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

            cell: (row) => (
              <div className="flex items-center justify-center gap-2">

                {/* VIEW */}
                <button
                  className="rounded-full p-2 text-blue-600 hover:bg-blue-50"
                  onClick={() => {
                    setSelectedStudent(row);
                    setShowViewModal(true);
                  }}
                >
                  <Eye className="h-5 w-5" />
                </button>

                {/* EDIT */}
                <button
                  className="rounded-full p-2 text-amber-600 hover:bg-amber-50"
                  onClick={() => {
                    setSelectedStudent(row);
                    setShowEditModal(true);
                  }}
                >
                  <Pencil className="h-5 w-5" />
                </button>

                {/* DELETE */}
                <button
                  className="rounded-full p-2 text-red-600 hover:bg-red-50"
                  onClick={() => {
                    setSelectedStudent(row);
                    setShowDeleteModal(true);
                  }}
                >
                  <Trash2 className="h-5 w-5" />
                </button>

              </div>
            ),
          },
        ]}
      />
      
        </div>

    {showViewModal && (
      <PatientFormModal
        mode="view"
        defaultValues={{
          name: selectedStudent?.student,
          university: selectedStudent?.university,
        }}
        onClose={() => {
          setShowViewModal(false);
          setSelectedStudent(null);
        }}
      />
    )}

    {showEditModal && (
      <PatientFormModal
        mode="edit"
        defaultValues={{
          name: selectedStudent?.student,
          university: selectedStudent?.university,
        }}
        onClose={() => {
          setShowEditModal(false);
          setSelectedStudent(null);
        }}
      />
    )}

    {showDeleteModal && (
      <DeleteConfirmModal
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedStudent(null);
        }}
        onConfirm={() => {
          setShowDeleteModal(false);
          setSelectedStudent(null);
        }}
      />
    )}
  </>
  );
} 