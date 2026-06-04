"use client";

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

type PaginationProps = {

    currentPage: number;

    totalPages: number;

    onPageChange: (
        page: number
    ) => void;
};

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {

    return (

        <div
            className="
        flex items-center justify-center gap-2

        border-t border-slate-100
        bg-white

        px-4 py-5
      "
        >

            {/* Prev */}
            <button
                disabled={
                    currentPage === 1
                }
                onClick={() =>
                    onPageChange(
                        currentPage - 1
                    )
                }
                className="
          flex h-10 w-10 items-center justify-center

          rounded-2xl
          border border-slate-200

          bg-white
          text-slate-500

          transition-all duration-200

          hover:border-blue-200
          hover:bg-blue-50
          hover:text-[#1e3a6d]

          disabled:cursor-not-allowed
          disabled:opacity-40
        "
            >

                <ChevronRight className="h-4 w-4" />
            </button>

            {/* Current Page */}
            <div
                className="
          flex h-10 min-w-[90px] items-center justify-center gap-2

          rounded-2xl

          bg-gradient-to-r
          from-[#1e3a6d]
          to-[#3b82f6]

          px-4

          text-sm font-semibold text-white

          shadow-lg
          shadow-blue-500/20
        "
            >

                <span>
                    {currentPage}
                </span>

                <span className="text-white/70">
                    /
                </span>

                <span>
                    {totalPages}
                </span>
            </div>

            {/* Next */}
            <button
                disabled={
                    currentPage === totalPages
                }
                onClick={() =>
                    onPageChange(
                        currentPage + 1
                    )
                }
                className="
          flex h-10 w-10 items-center justify-center

          rounded-2xl
          border border-slate-200

          bg-white
          text-slate-500

          transition-all duration-200

          hover:border-blue-200
          hover:bg-blue-50
          hover:text-[#1e3a6d]

          disabled:cursor-not-allowed
          disabled:opacity-40
        "
            >

                <ChevronLeft className="h-4 w-4" />
            </button>
        </div>
    );
}