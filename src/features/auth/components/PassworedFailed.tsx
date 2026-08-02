import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

type PasswordFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  compact?: boolean;
  error?: string;
};
export function PasswordField({
  id,
  label,
  compact = false,
  className = "",
  error,
  ...props
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="space-y-1 lg:space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--denova-primary)]"
      >
        {label}
      </label>

      <div className="relative">
        <Lock
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500"
        />

        <input
          id={id}
          type={visible ? "text" : "password"}
          placeholder="••••••••"
          className={
            `w-full border border-blue-100 rounded-xl bg-white/55 pl-10 pr-11 text-slate-700 outline-none transition placeholder:text-slate-400
  ${error
              ? "border-red-500 focus:border-red-500 focus:ring-red-100"
              : "border-blue-100 focus:border-primary/40 focus:ring-primary/10"
            }
  ${compact ? "h-10" : "h-11"}
  ${className}`
          }
          {...props}
        />

        <button
          type="button"
          aria-label={visible ? "Hide password" : "Show password"}
          onClick={() => setVisible((current) => !current)}
          className="absolute inset-y-0 right-3 flex items-center text-slate-500 transition hover:text-[var(--denova-primary)] focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          {visible ? (
            <EyeOff aria-hidden="true" className="size-4" />
          ) : (
            <Eye aria-hidden="true" className="size-4" />
          )}
        </button>
      </div>
      {error && (
  <p className="mt-1 text-sm text-red-500">
    {error}
  </p>
)}
    </div>
  );
}