type ToothPatternProps = {
  stroke?: string;
  opacity?: number;
  patternId?: string;
};

export function ToothPattern({
  stroke = "#ffffff",
  opacity = 0.06,
  patternId = "tooth-pattern",
}: ToothPatternProps) {
  return (
    <div
      className="absolute inset-0 h-full w-full"
      style={{ opacity }}
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="90"
            height="90"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M46 16C35 15 26 21 24 34C21 50 31 59 33 75C35 90 48 91 48 77C48 64 58 64 58 77C58 91 71 90 73 75C75 59 85 50 82 34C80 21 71 15 60 16C54 17 52 20 49 20C47 20 45 17 39 17"
              fill="none"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
        />
      </svg>
    </div>
  );
}