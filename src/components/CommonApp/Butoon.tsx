type Props = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
};

export default function Button({
  type = "button",
  children,
  isLoading = false,
  className = "",
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={`
        flex
        h-12
        w-full
        items-center
        justify-center
        rounded-xl
        bg-primary
        px-5
        text-sm
        font-semibold
        text-white
        transition
        hover:opacity-90
        disabled:cursor-not-allowed
        disabled:opacity-70
        ${className}
      `}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}