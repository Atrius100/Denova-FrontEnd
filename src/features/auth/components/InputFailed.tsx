import { InputHTMLAttributes, ReactNode } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  icon?: ReactNode;
  compact?: boolean;
};

export function InputField({
  id,
  label,
  icon,
  compact = false,
  className = "",
  ...props
}: InputFieldProps) {
  return (
    <div className="space-y-1 lg:space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--denova-primary)]"
      >
        {label}
      </label>

      <div className="relative">
        {icon ? (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500">
            {icon}
          </span>
        ) : null}

        <input
          id={id}
          className={
            "w-full rounded-xl border border-blue-100 bg-white/55 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 " +
            (icon ? "pl-10" : "pl-4") +
            " " +
            (compact ? "h-10 pr-3" : "h-11 pr-4") +
            " " +
            className
          }
          {...props}
        />
      </div>
    </div>
  );
}