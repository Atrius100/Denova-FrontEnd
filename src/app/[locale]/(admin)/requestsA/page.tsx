"use client";

import { useMemo, useState } from "react";
import { Eye, Pencil, Phone, Trash2, X } from "lucide-react";

import DataTable from "@/features/reception/ui/DataTable";
import FilterTabs from "@/components/CommonApp/FilterTabs";
import DeleteConfirmModal from "@/features/admin/ui/DeleteModel";
import PatientFormModal from "@/features/reception/ui/AddPation";
import Pagination from "@/components/CommonApp/Pagination";

const filters = [
    "كل الطلبات",
    "طلبات جامعة تشرين",
    "طلبات جامعة المنارة",
    "طلبات جامعة الشام الخاصة",
];


const initialRequests = [
    {
        id: 1,
        patientName: "أحمد علي",
        age: 42,
        phone: "0999999999",
        nationalId: "123456789",
        university: "جامعة تشرين",
        caseName: "علاج عصب",
        toothNumber: 36,
    },

    {
        id: 2,
        patientName: "محمد حسن",
        age: 33,
        phone: "0988888888",
        nationalId: "555555555",
        university: "جامعة المنارة",
        caseName: "قلع",
        toothNumber: 18,
    },

    {
        id: 3,
        patientName: "لينا محمد",
        age: 28,
        phone: "0933333333",
        nationalId: "777777777",
        university: "جامعة الشام الخاصة",
        caseName: "تركيب",
        toothNumber: 11,
    },
];

export default function RequestsPage() {
    const PAGE_SIZE = 6;

    const [page, setPage] = useState(1);

    const [showEditModal, setShowEditModal] =
        useState(false);

    useState(false);
    const [requests, setRequests] =
        useState(initialRequests);

    const [selectedFilter, setSelectedFilter] =
        useState("كل الطلبات");

    const [selectedRequest, setSelectedRequest] =
        useState<any>(null);

    const [showDeleteModal, setShowDeleteModal] =
        useState(false);

    const [showViewModal, setShowViewModal] =
        useState(false);

    const filteredRequests = useMemo(() => {
        switch (selectedFilter) {
            case "طلبات جامعة تشرين":
                return requests.filter(
                    (r) => r.university === "جامعة تشرين"
                );

            case "طلبات جامعة المنارة":
                return requests.filter(
                    (r) => r.university === "جامعة المنارة"
                );

            case "طلبات جامعة الشام الخاصة":
                return requests.filter(
                    (r) =>
                        r.university === "جامعة الشام الخاصة"
                );

            default:
                return requests;
        }
    }, [requests, selectedFilter]);
    const paginatedRequests = useMemo(() => {
        const start = (page - 1) * PAGE_SIZE;

        return filteredRequests.slice(
            start,
            start + PAGE_SIZE
        );
    }, [filteredRequests, page]);

    const totalPages = Math.ceil(
        filteredRequests.length / PAGE_SIZE
    );
    function handleDelete() {
        setRequests((prev) =>
            prev.filter(
                (item) => item.id !== selectedRequest.id
            )
        );

        setShowDeleteModal(false);
        setSelectedRequest(null);
    }

    return (
        <>
            <div className="space-y-6">

                <FilterTabs
                    items={filters}
                    selected={selectedFilter}
                    onChange={setSelectedFilter}
                />

                <DataTable
                    title="طلبات الحالات الواردة"
                    subtitle="الحالات القادمة من الموقع"

                    data={paginatedRequests}

                    columns={[
                        {
                            title: "اسم المريض",
                            cell: (row) => row.patientName,
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
                            title: "الحالة",

                            cell: (row) => (
                                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                                    {row.caseName}
                                </span>
                            ),
                        },

                        {
                            title: "رقم السن",
                            className: "text-center",

                            cell: (row) => (
                                <span className="font-semibold text-slate-700">
                                    {row.toothNumber}
                                </span>
                            ),
                        },

                        {
                            title: "الإجراءات",

                            className: "text-center",

                            cell: (row) => (
                                <div className="flex items-center justify-center gap-2">

                                    {/* VIEW */}
                                    <button
                                        className="rounded-full p-2 text-blue-600 hover:bg-blue-50"
                                        onClick={() => {
                                            setSelectedRequest(row);
                                            setShowViewModal(true);
                                        }}
                                    >
                                        <Eye className="h-5 w-5" />
                                    </button>

                                    {/* EDIT */}
                                    <button
                                        className="rounded-full p-2 text-amber-600 hover:bg-amber-50"
                                        onClick={() => {
                                            setSelectedRequest(row);
                                            setShowEditModal(true);
                                        }}
                                    >
                                        <Pencil className="h-5 w-5" />
                                    </button>

                                    {/* DELETE */}
                                    <button
                                        className="rounded-full p-2 text-red-600 hover:bg-red-50"
                                        onClick={() => {
                                            setSelectedRequest(row);
                                            setShowDeleteModal(true);
                                        }}
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>

                                </div>
                            ),
                        }
                    ]}
                />
                {totalPages > 1 && (
  <Pagination
    currentPage={page}
    totalPages={totalPages}
    onPageChange={setPage}
  />
)}
            </div>

            {showViewModal && (
  <PatientFormModal
    mode="view"
    defaultValues={selectedRequest}
    onClose={() => {
      setShowViewModal(false);
      setSelectedRequest(null);
    }}
  />
)}
{showEditModal && (
  <PatientFormModal
    mode="edit"
    defaultValues={selectedRequest}
    onClose={() => {
      setShowEditModal(false);
      setSelectedRequest(null);
    }}
  />
)}

            {showDeleteModal && (
                <DeleteConfirmModal
                    onClose={() => {
                        setShowDeleteModal(false);
                        setSelectedRequest(null);
                    }}
                    onConfirm={handleDelete}
                />
            )}
        </>
    );
}