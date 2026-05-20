"use client";

import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    Eye,
} from "lucide-react";

import Pagination
from "@/components/CommonApp/Pagination";

import DataTable
from "@/features/reception/ui/DataTable";

const students = [

    {
        id: 1,
        student: "أحمد محمد",
        year: "السنة الخامسة",
        rootCanal: "completed",
        crown: "pending",
        cleaning: "active",
        implant: "completed",
    },

    {
        id: 2,
        student: "لينا حسن",
        year: "السنة الرابعة",
        rootCanal: "pending",
        crown: "completed",
        cleaning: "completed",
        implant: "active",
    },

    {
        id: 3,
        student: "محمد علي",
        year: "السنة السادسة",
        rootCanal: "active",
        crown: "completed",
        cleaning: "pending",
        implant: "completed",
    },

    {
        id: 4,
        student: "سارة أحمد",
        year: "السنة الثالثة",
        rootCanal: "completed",
        crown: "completed",
        cleaning: "completed",
        implant: "active",
    },

    {
        id: 5,
        student: "علي حسن",
        year: "السنة الرابعة",
        rootCanal: "pending",
        crown: "active",
        cleaning: "completed",
        implant: "pending",
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

                : value === "active"
                    ? "bg-blue-100 text-blue-700"

                    : "bg-emerald-100 text-emerald-700"
            }
    `}
    >

        {value}
    </span>
);

export default function Page() {

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

    const paginatedStudents =
        useMemo(() => {

            const start =
                (currentPage - 1)
                * itemsPerPage;

            const end =
                start +
                itemsPerPage;

            return students.slice(
                start,
                end
            );

        }, [
            currentPage,
            itemsPerPage,
        ]);

    const totalPages =
        Math.ceil(
            students.length
            / itemsPerPage
        );

    return (

        <DataTable
            title="الطلاب"

            subtitle="إدارة حالات الطلاب"

            data={paginatedStudents}

            pagination={
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            }

            columns={[

                {
                    title: "الطالب",

                    cell: (row) =>
                        row.student,
                },

                {
                    title: "السنة الدراسية",

                    className:
                        "text-center",

                    cell: (row) =>
                        row.year,
                },

                {
                    title: "سحب عصب",

                    className:
                        "text-center",

                    cell: (row) =>

                        renderStatus(
                            row.rootCanal
                        ),
                },

                {
                    title: "تلبيسة",

                    className:
                        "text-center",

                    cell: (row) =>

                        renderStatus(
                            row.crown
                        ),
                },

                {
                    title: "تنظيف",

                    className:
                        "text-center",

                    cell: (row) =>

                        renderStatus(
                            row.cleaning
                        ),
                },

                {
                    title: "زرعة",

                    className:
                        "text-center",

                    cell: (row) =>

                        renderStatus(
                            row.implant
                        ),
                },

                {
                    title: "الإجراءات",

                    className:
                        "text-center",

                    cell: () => (

                        <div className="flex items-center justify-center">

                            <button className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-blue-600">

                                <Eye className="h-5 w-5" />
                            </button>
                        </div>
                    ),
                },
            ]}
        />
    );
}