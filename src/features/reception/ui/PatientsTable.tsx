"use client";

import {
    Eye,
    Pencil,
} from "lucide-react";

import DataTable from "./DataTable";



type Props = {
  data: any[];
  pagination: React.ReactNode;
  onEdit: (patient: any) => void;
  onView: (patient: any) => void;
};

const renderStatus = (
    value: string
) => (

    <span
        className={`
      inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-medium
      
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

export default function PatientsTable({
  data,
  pagination,
  onEdit,
  onView,
}: Props) {

    return (

        <DataTable
            title="المرضى"

            subtitle="إدارة جميع المرضى"

            data={data}

            pagination={pagination}

           

            /* DESKTOP */
            columns={[

                {
                    title: "المريض",

                    cell: (row) =>
                        row.patient,
                },

                {
                    title: "رقم الموبايل",

                    className:
                        "text-center",

                    cell: (row) =>
                        row.phone,
                },

                {
                    title: "الحالة المرضية",

                    className:
                        "text-center",

                    cell: (row) =>
                        row.condition,
                },

                {
                    title: "الحالة",

                    className:
                        "text-center",

                    cell: (row) => (

                        <div className="flex justify-center">

                            {renderStatus(
                                row.status
                            )}

                        </div>
                    ),
                },

                {
                    title: "الإجراءات",

                    className:
                        "text-center",

                    cell: (row) => (

                        <div className="flex items-center justify-center gap-3">

                            <button
                                className="
                  rounded-full p-2
                  text-slate-400
                  hover:bg-slate-100
                  hover:text-blue-600
                "
                            >

                                <Eye 
                                onClick={() => onView(row)} className="h-5 w-5" />
                            </button>

                            <button
                            
                                onClick={() =>
                                    onEdit(
                                        row
                                    )
                                }
                                className="
                  rounded-full p-2
                  text-slate-400
                  hover:bg-slate-100
                  hover:text-emerald-600
                "
                            >

                                <Pencil className="h-5 w-5" />
                            </button>
                        </div>
                    ),
                },
            ]}
        />
    );
}