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
        "flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary px-5 text-base font-medium text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:from-primary/90 hover:to-secondary/90 focus:outline-none focus:ring-4 focus:ring-primary/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 " +
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
