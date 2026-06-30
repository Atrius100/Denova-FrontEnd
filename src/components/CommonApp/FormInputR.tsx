"use client";

import React from "react";

type FormInputProps = {
  name?: string;
  autoComplete?: string;
  placeholder: string;
  className?: string;
  type?: string;
  value?: string;
  dir?:string,
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FormInputR({
  name,
  autoComplete,
  placeholder,
  className = "",
  type = "text",
  value,
  dir,
  onChange,
  disabled = false,
}: FormInputProps) {
  return (
    <input
    dir={dir}
      name={name}
      autoComplete={autoComplete}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      
      placeholder={placeholder}
      className={`
        ${dir === "ltr"
      ? "text-left placeholder:text-left rtl:placeholder:text-right"
      : ""}
        w-full
        bg-slate-50
        border
        border-slate-200
        px-4
        text-slate-700
        outline-none
        transition-all
        duration-200
        
        /* إعدادات الريسبونسف للطول، الحواف، وحجم الخط */
        h-10 rounded-xl text-sm
        md:h-12 md:rounded-2xl md:text-base

        /* إعدادات الـ Placeholder */
        placeholder:text-[#999999]
        placeholder:text-sm

        /* تأثيرات التفاعل (Focus) */
        focus:border-[#1e3a6d]
        focus:bg-white
        focus:ring-4
        focus:ring-blue-100/50

        /* حالة التعطيل (Disabled) */
        disabled:cursor-not-allowed
        disabled:bg-slate-100
        disabled:text-slate-500
        disabled:opacity-70

        /* السماح بإضافة كلاسات خارجية */
        ${className}
      `}
    />
  );
}