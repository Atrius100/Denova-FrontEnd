"use client";

import {
    useEffect,
    useMemo,
    useState,
} from "react";

import PatientsPagination
from "@/components/CommonApp/Pagination";

import PatientFormModal
from "@/features/reception/ui/AddPation";

import PatientsTable
from "@/features/reception/ui/PatientsTable";

import FilterTabs from "@/components/CommonApp/FilterTabs";

const patients = [

    {
        id: 1,

        patient: "أحمد محمد",

        phone: "099999999",

        condition: "سحب عصب",

        status: "active",
    },

    {
        id: 2,

        patient: "لينا حسن",

        phone: "098888888",

        condition: "تلبيسة",

        status: "pending",
    },

    {
        id: 3,

        patient: "محمد علي",

        phone: "097777777",

        condition: "تنظيف",

        status: "completed",
    },

    {
        id: 4,

        patient: "سارة أحمد",

        phone: "096666666",

        condition: "تقويم",

        status: "active",
    },

    {
        id: 5,

        patient: "علي حسن",

        phone: "095555555",

        condition: "تنظيف",

        status: "pending",
    },
];

export default function PatientsPage() {
    
const filters = [
  "كل المرضى",
  "تم علاجهم",
  "بانتظار طبيب",
];

const [selectedFilter, setSelectedFilter] =
  useState("كل المرضى");
  const filteredPatients = useMemo(() => {
  switch (selectedFilter) {
    case "تم علاجهم":
      return patients.filter(
        (patient) => patient.status === "completed"
      );

    case "بانتظار طبيب":
      return patients.filter(
        (patient) => patient.status === "pending"
      );

    default:
      return patients;
  }
}, [selectedFilter]);
    /* ================= ITEMS PER PAGE ================= */
    const [
    itemsPerPage,
    setItemsPerPage,
] = useState(4);

useEffect(() => {

    const handleResize = () => {

        if (window.innerWidth < 768) {

            setItemsPerPage(1);

        } else {

            setItemsPerPage(4);
        }
    };

    handleResize();

    window.addEventListener(
        "resize",
        handleResize
    );

    return () =>
        window.removeEventListener(
            "resize",
            handleResize
        );

}, []);

    /* ================= PAGINATION ================= */
    const [
        currentPage,
        setCurrentPage,
    ] = useState(1);

    const paginatedPatients =
        useMemo(() => {

            const start =
                (currentPage - 1)
                * itemsPerPage;

            const end =
                start +
                itemsPerPage;

            return filteredPatients.slice(start, end);

        }, [
  currentPage,
  itemsPerPage,
  filteredPatients,
]);

    const totalPages =
  Math.ceil(
    filteredPatients.length /
      itemsPerPage
  );

    /* ================= MODAL ================= */
    const [
        openModal,
        setOpenModal,
    ] = useState(false);
const [
  viewModal,
  setViewModal,
] = useState(false);
    const [
        selectedPatient,
        setSelectedPatient,
    ] = useState<any>(
        null
    );

    return (

        <>
            {/* Add Button */}
            <div className="mb-3 lg:mb-5 flex justify-end">

                <button
                    onClick={() => {

                        setSelectedPatient(
                            null
                        );

                        setOpenModal(
                            true
                        );
                    }}
                    className="
            h-11 rounded-2xl
            bg-gradient-to-r
            from-[#1e3a6d]
            to-[#3b82f6]

            px-6
            text-sm font-medium text-white

            shadow-lg shadow-blue-500/20
            transition hover:opacity-90
          "
                >

                    إضافة مريض
                </button>
            </div>
<div className="mb-5">
    <FilterTabs
  items={filters}
  selected={selectedFilter}
  onChange={setSelectedFilter}
/>
</div>
            {/* Table */}
            <PatientsTable
                data={paginatedPatients}

                pagination={
                    <PatientsPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                }

                onEdit={(patient) => {
  setSelectedPatient(patient);
  setOpenModal(true);
}}

onView={(patient) => {
  setSelectedPatient(patient);
  setViewModal(true);
}}
            />

            {/* Modal */}
            {
                openModal && (

                    <PatientFormModal
                        mode={
  selectedPatient
    ? "edit"
    : "create"
}
                        defaultValues={
                            selectedPatient
                        }
                        onClose={() =>
                            setOpenModal(
                                false
                            )
                        }
                    />
                )
            }
            {/* View Modal */}
{
  viewModal && (
    <PatientFormModal
      mode="view"
      defaultValues={selectedPatient}
      onClose={() => {
        setViewModal(false);
        setSelectedPatient(null);
      }}
    />
  )
}
        </>
    );
}