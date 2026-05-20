"use client";

import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    Eye,
    Pencil,
} from "lucide-react";

import Pagination
from "@/components/CommonApp/Pagination";

import PatientFormModal
from "@/features/reception/ui/AddPation";

import DataTable
from "@/features/reception/ui/DataTable";

const requests = [

    {
        id: 1,
        name: "أحمد محمد",
        age: 24,
        phone: "0999999999",
        nationalId: "12345678901",
        status: "pending",
    },

    {
        id: 2,
        name: "لينا حسن",
        age: 21,
        phone: "0988888888",
        nationalId: "98765432100",
        status: "reviewing",
    },

    {
        id: 3,
        name: "محمد علي",
        age: 26,
        phone: "0977777777",
        nationalId: "55544433322",
        status: "approved",
    },

    {
        id: 4,
        name: "سارة أحمد",
        age: 22,
        phone: "0966666666",
        nationalId: "11122233344",
        status: "pending",
    },

    {
        id: 5,
        name: "علي حسن",
        age: 25,
        phone: "0955555555",
        nationalId: "77788899966",
        status: "reviewing",
    },
];

const renderStatus = (
    value: string
) => (

    <span
        className={`
      inline-flex items-center justify-center
      rounded-full px-3 py-1.5 text-xs font-medium
      
      ${value === "pending"
                ? "bg-amber-100 text-amber-700"

                : value === "reviewing"
                    ? "bg-blue-100 text-blue-700"

                    : "bg-emerald-100 text-emerald-700"
            }
    `}
    >

        {value}
    </span>
);

export default function RequestsPage() {

    /* ================= ITEMS ================= */
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

    const paginatedRequests =
        useMemo(() => {

            const start =
                (currentPage - 1)
                * itemsPerPage;

            const end =
                start +
                itemsPerPage;

            return requests.slice(
                start,
                end
            );

        }, [
            currentPage,
            itemsPerPage,
        ]);

    const totalPages =
        Math.ceil(
            requests.length
            / itemsPerPage
        );

    /* ================= MODAL ================= */
    const [
        selectedRequest,
        setSelectedRequest,
    ] = useState<any>(
        null
    );

    return (

        <>
            <DataTable
                title="الطلبات الواردة"

                subtitle="إدارة جميع طلبات المرضى القادمة من الموقع"

                data={paginatedRequests}

                pagination={
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                }

                columns={[

                    {
                        title: "اسم المريض",

                        cell: (row) =>
                            row.name,
                    },

                    {
                        title: "العمر",

                        className:
                            "text-center",

                        cell: (row) =>
                            row.age,
                    },

                    {
                        title: "رقم الموبايل",

                        className:
                            "text-center",

                        cell: (row) =>
                            row.phone,
                    },

                    {
                        title: "الرقم الوطني",

                        className:
                            "text-center",

                        cell: (row) =>
                            row.nationalId,
                    },

                    {
                        title: "الحالة",

                        className:
                            "text-center",

                        cell: (row) =>

                            renderStatus(
                                row.status
                            ),
                    },

                    {
                        title: "الإجراءات",

                        className:
                            "text-center",

                        cell: (row) => (

                            <div className="flex items-center justify-center gap-3">

                                <button className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-blue-600">

                                    <Eye className="h-5 w-5" />
                                </button>

                                <button
                                    onClick={() =>
                                        setSelectedRequest(
                                            row
                                        )
                                    }
                                    className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-emerald-600"
                                >

                                    <Pencil className="h-5 w-5" />
                                </button>
                            </div>
                        ),
                    },
                ]}
            />

            {/* MODAL */}
            {
                selectedRequest && (

                    <PatientFormModal
                        mode="request"
                        defaultValues={
                            selectedRequest
                        }
                        onClose={() =>
                            setSelectedRequest(
                                null
                            )
                        }
                    />
                )
            }
        </>
    );
}