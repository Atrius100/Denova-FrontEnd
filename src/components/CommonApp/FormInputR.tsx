"use client";

type FormInputProps = {
    placeholder: string;

    className?: string;

    type?: string;
};

export function FormInputR({
    placeholder,
    className = "",
    type = "text",
}: FormInputProps) {

    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`
      h-10 md:h-12 rounded-xl  w-full md:rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition
      
      placeholder:text-[#999999]
      
      focus:border-[#1e3a6d]
      focus:ring-4
      focus:ring-blue-100
      
      ${className}
      `}
        />
    );
}