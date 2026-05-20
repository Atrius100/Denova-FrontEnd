"use client";

import { ChevronDown }
  from "lucide-react";

import { useLocale }
  from "next-intl";

type FormSelectProps = {
  placeholder: string;

  options: {
    label: string;
    value: string;
  }[];
};

export function FormSelectR({
  placeholder,
  options,
}: FormSelectProps) {

  const locale =
    useLocale();

  const isArabic =
    locale === "ar";

  return (
    <div className="relative w-full">

      <select
        defaultValue=""
        className={`
        h-12 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#999999] outline-none transition
        
        focus:border-[#1e3a6d]
        focus:ring-4
        focus:ring-blue-100
        
        ${isArabic
            ? "pl-12"
            : "pr-12"
          }
        `}
      >

        <option
          value=""
          disabled
        >
          {placeholder}
        </option>

        {options.map((item) => (

          <option
            key={item.value}
            value={item.value}
            className="text-slate-700"
          >

            {item.label}
          </option>
        ))}
      </select>

      <ChevronDown
        className={`
        pointer-events-none absolute top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400
        
        ${isArabic
            ? "left-4"
            : "right-4"
          }
        `}
      />
    </div>
  );
}