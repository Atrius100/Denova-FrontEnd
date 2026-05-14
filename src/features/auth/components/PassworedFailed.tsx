import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

type PasswordFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  compact?: boolean;
};

export function PasswordField({
  id,
  label,
  compact = false,
  className = "",
  ...props
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--denova-primary)]"
      >
        {label}
      </label>

      <div className="relative">
        <Lock
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
        />

        <input
          id={id}
          type={visible ? "text" : "password"}
          placeholder="••••••••"
          className={
            "w-full rounded-xl border border-blue-100 bg-white/55 pl-10 pr-11 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 " +
            (compact ? "h-10" : "h-11") +
            " " +
            className
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
            <EyeOff aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Eye aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}