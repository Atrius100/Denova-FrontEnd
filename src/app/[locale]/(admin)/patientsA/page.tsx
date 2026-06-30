"use client";

import { useMemo, useState } from "react";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import DataTable from "@/features/reception/ui/DataTable";
import PatientFormModal from "@/features/reception/ui/AddPation";
import DeleteConfirmModal from "@/features/admin/ui/DeleteModel";
import FilterTabs from "@/components/CommonApp/FilterTabs";


const filters = [
  "كل المرضى",
  "مرضى جامعة تشرين",
  "مرضى جامعة المنارة",
  "مرضى جامعة الشام الخاصة",
];

const initialPatients = [
  {
    id: 1,
    name: "محمد أحمد",
    age: 45,
    phone: "0999999999",
    nationalId: "123456789",
    university: "جامعة تشرين",
    casesCount: 3,
  },

  {
    id: 2,
    name: "علي حسن",
    age: 38,
    phone: "0988888888",
    nationalId: "555555555",
    university: "جامعة المنارة",
    casesCount: 5,
  },

  {
    id: 3,
    name: "لينا محمد",
    age: 29,
    phone: "0933333333",
    nationalId: "777777777",
    university: "جامعة الشام الخاصة",
    casesCount: 2,
  },
];

export default function PatientsAPage() {
  const [patients, setPatients] =
    useState(initialPatients);

  const [selectedFilter, setSelectedFilter] =
    useState("كل المرضى");

  const [selectedPatient, setSelectedPatient] =
    useState<any>(null);

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);
const [showViewModal, setShowViewModal] =
  useState(false);
  const filteredPatients = useMemo(() => {
    switch (selectedFilter) {
      case "مرضى جامعة تشرين":
        return patients.filter(
          (p) => p.university === "جامعة تشرين"
        );

      case "مرضى جامعة المنارة":
        return patients.filter(
          (p) => p.university === "جامعة المنارة"
        );

      case "مرضى جامعة الشام الخاصة":
        return patients.filter(
          (p) =>
            p.university ===
            "جامعة الشام الخاصة"
        );

      default:
        return patients;
    }
  }, [patients, selectedFilter]);

  const handleDelete = () => {
    setPatients((prev) =>
      prev.filter(
        (item) =>
          item.id !== selectedPatient.id
      )
    );

    setShowDeleteModal(false);
    setSelectedPatient(null);
  };

  return (
    <>
      <div className="space-y-6">

        {/* FILTERS */}

       <FilterTabs
  items={filters}
  selected={selectedFilter}
  onChange={setSelectedFilter}
/>

        {/* TABLE */}

        <DataTable
          title="المرضى"
          subtitle="إدارة المرضى والحالات"
          data={filteredPatients}
          columns={[
            {
              title: "اسم المريض",
              cell: (row) => row.name,
            },

            {
              title: "الموبايل",
              cell: (row) => row.phone,
            },

            {
              title: "العمر",
              cell: (row) => row.age,
            },

            {
              title: "الجامعة",
              cell: (row) => row.university,
            },

            {
              title: "عدد الحالات",

              className: "text-center",

              cell: (row) => (
                <span
                  className="
                  rounded-full
                  bg-blue-100
                  px-3 py-1
                  text-blue-700
                  text-sm
                  font-semibold
                "
                >
                  {row.casesCount}
                </span>
              ),
            },

            {
              title: "الإجراءات",

              className: "text-center",

              cell: (row) => (
                <div className="flex items-center justify-center gap-2">

                  {/* VIEW */}

                  {/* VIEW */}
<button
  className="rounded-full p-2 text-blue-600 hover:bg-blue-50"
  onClick={() => {
    setSelectedPatient(row);
    setShowViewModal(true);
  }}
>
  <Eye className="h-5 w-5" />
</button>

                  {/* EDIT */}

                  <button
                    className="rounded-full p-2 text-amber-600 hover:bg-amber-50"
                    onClick={() => {
                      setSelectedPatient(
                        row
                      );

                      setShowEditModal(
                        true
                      );
                    }}
                  >
                    <Pencil className="h-5 w-5" />
                  </button>

                  {/* DELETE */}
{/* VIEW */}

{showViewModal && (
  <PatientFormModal
    mode="view"
    defaultValues={selectedPatient}
    onClose={() => {
      setShowViewModal(false);
      setSelectedPatient(null);
    }}
  />
)}
                  <button
                    className="rounded-full p-2 text-red-600 hover:bg-red-50"
                    onClick={() => {
                      setSelectedPatient(
                        row
                      );

                      setShowDeleteModal(
                        true
                      );
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

      {/* EDIT */}

      {showEditModal && (
  <PatientFormModal
    mode="edit"
    defaultValues={selectedPatient}
    onClose={() => {
      setShowEditModal(false);
      setSelectedPatient(null);
    }}
  />
)}

      {/* DELETE */}

      {showDeleteModal && (
        <DeleteConfirmModal
          onClose={() =>
            setShowDeleteModal(false)
          }
          onConfirm={handleDelete}
        />
      )}
    </>
  );
}