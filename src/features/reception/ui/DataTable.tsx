"use client";

type DataTableProps = {

    title: string;

    subtitle: string;

    columns: {

        title: string;

        className?: string;

        cell: (
            row: any
        ) => React.ReactNode;
    }[];

    data: any[];

    pagination?: React.ReactNode;
};

export default function DataTable({
    title,
    subtitle,
    columns,
    data,
    pagination,
}: DataTableProps) {

    return (

        <div
            className="
        overflow-hidden
        rounded-[2rem]
        w-full
        border border-slate-200
        bg-white
        shadow-[0_20px_60px_rgba(15,23,42,0.06)]
      "
        >

            {/* HEADER */}
            <div
                className="
          border-b border-slate-100
          px-4 py-4
          lg:px-6
        "
            >

                <h2
                    className="
            text-base font-semibold text-slate-800
            lg:text-lg
          "
                >

                    {title}
                </h2>

                <p
                    className="
            mt-1 text-xs text-slate-500
            lg:text-sm
          "
                >

                    {subtitle}
                </p>
            </div>

            {/* TABLE */}
            <div className="">

                <table className="w-full">

                    {/* DESKTOP HEADER */}
                    <thead
                        className="
              hidden bg-slate-50
              md:table-header-group
            "
                    >

                        <tr>

                            {columns.map(
                                (
                                    column,
                                    index
                                ) => (

                                    <th
                                        key={index}
                                        className={`
                       py-4
                      text-sm font-semibold text-slate-500

                      ${column.className || ""}
                    `}
                                    >

                                        {column.title}
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody>

                        {(data || []).map(
                            (
                                row,
                                rowIndex
                            ) => (

                                <tr
                                    key={rowIndex}
                                    className="
                    block

                      overflow-hidden
                      

                     
                      bg-white

                      

                      md:table-row
                      md:rounded-none
                      md:border-0
                      md:shadow-none
                    "
                                >

                                    {columns.map(
                                        (
                                            column,
                                            colIndex
                                        ) => (

                                            <td
                                                key={colIndex}
                                                className={`
                          flex items-center justify-between gap-4

                          border-b border-slate-100
                          px-4 py-3

                          text-sm text-slate-700

                          last:border-b-0

                          md:table-cell
                          md:px-0
                          lg:px-4
                          lg:py-4
                          text-center

                          ${column.className || ""}
                        `}
                                            >

                                                {/* MOBILE LABEL */}
                                                <span
                                                    className="
                              text-xs font-semibold text-slate-400

                              md:hidden
                            "
                                                >

                                                    {column.title}
                                                </span>

                                                {/* VALUE */}
                                                <div>

                                                    {
                                                        column.cell(
                                                            row
                                                        )
                                                    }
                                                </div>
                                            </td>
                                        )
                                    )}
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>

            {/* PAGINATION */}
            {
                pagination && (

                    <div
                        className="
              border-t border-slate-100
            "
                    >

                        {pagination}
                    </div>
                )
            }
        </div>
    );
}