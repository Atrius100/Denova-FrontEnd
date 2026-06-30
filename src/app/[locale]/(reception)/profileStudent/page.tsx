"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { Eye } from "lucide-react";
import PatientFormModal from "@/features/reception/ui/AddPation";
import Pagination from "@/components/CommonApp/Pagination";
import DataTable from "@/features/reception/ui/DataTable";

const students = [
  {
    id: 1,
    student: "أحمد محمد",
    year: "السنة الخامسة",

    case1: {
      title: "تلبيسة",
      status: "pending",
    },

    case2: {
      title: "قلع",
      status: "completed",
    },

    case3: {
      title: "تنظيف",
      status: "active",
    },

    case4: {
      title: "زرعة",
      status: "completed",
    },

    case5: {
      title: "تقويم",
      status: "pending",
    },
  },

  {
    id: 2,
    student: "لينا حسن",
    year: "السنة الرابعة",

    case1: {
      title: "سحب عصب",
      status: "completed",
    },

    case2: {
      title: "تلبيسة",
      status: "active",
    },

    case3: {
      title: "قلع",
      status: "pending",
    },

    case4: {
      title: "تنظيف",
      status: "completed",
    },

    case5: {
      title: "زرعة",
      status: "active",
    },
  },

  {
    id: 3,
    student: "محمد علي",
    year: "السنة السادسة",

    case1: {
      title: "تنظيف",
      status: "active",
    },

    case2: {
      title: "تقويم",
      status: "completed",
    },

    case3: {
      title: "تلبيسة",
      status: "pending",
    },

    case4: {
      title: "قلع",
      status: "completed",
    },

    case5: {
      title: "زرعة",
      status: "completed",
    },
  },

  {
    id: 4,
    student: "سارة أحمد",
    year: "السنة الثالثة",

    case1: {
      title: "زرعة",
      status: "completed",
    },

    case2: {
      title: "تنظيف",
      status: "completed",
    },

    case3: {
      title: "سحب عصب",
      status: "active",
    },

    case4: {
      title: "تلبيسة",
      status: "pending",
    },

    case5: {
      title: "تقويم",
      status: "completed",
    },
  },

  {
    id: 5,
    student: "علي حسن",
    year: "السنة الرابعة",

    case1: {
      title: "قلع",
      status: "pending",
    },

    case2: {
      title: "تنظيف",
      status: "completed",
    },

    case3: {
      title: "تلبيسة",
      status: "active",
    },

    case4: {
      title: "زرعة",
      status: "pending",
    },

    case5: {
      title: "تقويم",
      status: "completed",
    },
  },
];

const renderStatus = (
  status: string
) => (
  <span
    className={`
      inline-flex
      rounded-full
      px-3 py-1
      text-xs font-medium

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

export default function Page() {

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

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);
  const [selectedStudent, setSelectedStudent] =
    useState<any>(null);

  const [showViewModal, setShowViewModal] =
    useState(false);
  const paginatedStudents =
    useMemo(() => {
      const start =
        (currentPage - 1) *
        itemsPerPage;

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

  const totalPages = Math.ceil(
    students.length /
    itemsPerPage
  );

  return (
  <>
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

          cell: (row) =>
            row.year,
        },

        {
          title: "حالة 1",

          cell: (row) =>
            renderCase(
              row.case1.title,
              row.case1.status
            ),
        },

        {
          title: "حالة 2",

          cell: (row) =>
            renderCase(
              row.case2.title,
              row.case2.status
            ),
        },

        {
          title: "حالة 3",

          cell: (row) =>
            renderCase(
              row.case3.title,
              row.case3.status
            ),
        },

        {
          title: "حالة 4",

          cell: (row) =>
            renderCase(
              row.case4.title,
              row.case4.status
            ),
        },

        {
          title: "حالة 5",

          cell: (row) =>
            renderCase(
              row.case5.title,
              row.case5.status
            ),
        },

        {
          title: "الإجراءات",

          cell: (row) => (
            <div className="flex items-center justify-center">
              <button
                onClick={() => {
                  setSelectedStudent(row);
                  setShowViewModal(true);
                }}
                className="
    rounded-full p-2
    text-slate-400
    hover:bg-slate-100
    hover:text-blue-600
  "
              >
                <Eye className="h-5 w-5" />
              </button>
            </div>
          ),
        },
      ]}
    />
        {showViewModal && (

      <PatientFormModal

        mode="view"

        defaultValues={{

          name: selectedStudent?.student,

          age: "",

          phone: "",

          nationalId: "",

          university: "",

          toothNumber: "",

          condition: selectedStudent?.case1?.title,

        }}

        onClose={() => {

          setShowViewModal(false);

          setSelectedStudent(null);

        }}

      />
)}
  
    </>
  );
}