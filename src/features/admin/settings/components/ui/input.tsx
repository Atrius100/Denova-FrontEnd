"use client";

type SecurityFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function SecurityField({
  label,
  type = "text",
  placeholder,
  value,
  disabled = false,
  onChange,
}: SecurityFieldProps) {
  return (
    <div className="space-x-1 md:space-y-2">
      <label className="block text-xs md:text-sm font-medium text-slate-600">
        {label}
      </label>

      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className="
          h-10 md:h-14
          w-full
          rounded-2xl
          border border-slate-200
          bg-white
          px-4
          text-slate-800
          outline-none
          transition

          focus:border-[#1e3a6d]
          focus:ring-2
          focus:ring-blue-100

          disabled:bg-slate-50
          disabled:text-slate-400
        "
      />
    </div>
  );
}