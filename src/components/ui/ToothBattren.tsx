
export function ToothPattern() {
  return (
    <div className="absolute inset-0 z-0 text-[var(--denova-primary)] opacity-[0.04]" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="denova-tooth-pattern" x="0" y="0" width="92" height="104" patternUnits="userSpaceOnUse">
            <path
              d="M46 16 C35 15 26 21 24 34 C21 50 31 59 33 75 C35 90 48 91 48 77 C48 64 58 64 58 77 C58 91 71 90 73 75 C75 59 85 50 82 34 C80 21 71 15 60 16 C54 17 52 20 49 20 C47 20 45 17 39 17"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35 30 C37 23 42 22 47 23"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#denova-tooth-pattern)" />
      </svg>
    </div>
  );
}