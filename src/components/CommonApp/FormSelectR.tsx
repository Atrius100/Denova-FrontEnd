"use client";

import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";

type FormSelectProps = {
  placeholder: string;

  options: {
    label: string;
    value: string;
  }[];

  value?: string;
  name?: string;
  disabled?: boolean;

  onChange?: (
    value: string
  ) => void;

};

export function FormSelectR({
  placeholder,
  options,
  value = "",
  disabled = false,
  onChange,
}: FormSelectProps) {
  const locale = useLocale();

  const isArabic =
    locale === "ar";

  return (
    <div className="relative w-full">

      <select

        disabled={disabled}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`
    w-full
    appearance-none
    rounded-2xl
    border border-slate-200
    bg-slate-50
    outline-none
    transition-all duration-200
placeholder:text-sm
    h-10 md:h-12
    text-sm md:text-base

    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-100

    disabled:cursor-not-allowed
    disabled:bg-slate-100
    disabled:opacity-60

    ${isArabic
            ? "pl-12 pr-4 text-right"
            : "pr-12 pl-4 text-left"
          }

    ${value ? "text-slate-700" : "text-[#999999]"}
  `}
      >
        <option value="" disabled>
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
          pointer-events-none
          absolute
          top-1/2
          h-5
          w-5
          -translate-y-1/2
          text-slate-400

          ${isArabic
            ? "left-4"
            : "right-4"
          }
        `}
      />
    </div>
  );
}