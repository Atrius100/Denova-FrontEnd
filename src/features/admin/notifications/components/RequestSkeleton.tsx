export function NotificationSkeleton({
  count = 5,
}: {
  count?: number
}) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex animate-pulse gap-3 rounded-2xl border border-slate-100 bg-white p-4"
        >
          <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-200" />
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-4 w-2/3 rounded bg-slate-200" />
            <div className="h-3 w-full rounded bg-slate-100" />
            <div className="h-3 w-1/3 rounded bg-slate-100" />
          </div>
        </div>
      ))}
    </div>
  )
}
