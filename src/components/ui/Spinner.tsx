type SpinnerProps = {
  small?: boolean;
};

export function Spinner({ small = false }: SpinnerProps) {
  return (
    <span
      className={
        "inline-block animate-spin rounded-full border-2 border-current border-t-transparent text-[var(--denova-primary)] " +
        (small ? "h-5 w-5 text-white" : "h-14 w-14")
      }
      aria-label="Loading"
      role="status"
    />
  );
}