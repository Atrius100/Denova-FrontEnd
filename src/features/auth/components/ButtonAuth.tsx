
import { Spinner } from "@/components/ui/Spinner";
import { ButtonHTMLAttributes } from "react";


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  loadingText?: string;
};

export default function Button({ children, isLoading = false, loadingText = "Loading...", disabled, className = "", ...props }: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={
        "flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a6d] px-5 text-base font-medium text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-blue-500/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 " +
        className
      }
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <Spinner small />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
