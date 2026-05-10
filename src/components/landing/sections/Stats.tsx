import { STATS } from "@/config/stats";

export default function StatsSection() {
  return (
    <section className="mt-20 relative w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {STATS.map((item, index) => {
          const Icon = item.icon; // 🔥 magic

          return (
            <div
              key={index}
              className={`
                bg-surface-container-lowest p-6 rounded-xl shadow-lg border border-white/40
                glass-effect transition-transform duration-500
                hover:rotate-0

                ${index === 0 ? "-rotate-2" : ""}
                ${index === 1 ? "translate-y-8 z-10" : ""}
                ${index === 2 ? "rotate-2" : ""}
              `}
            >

              {/* Header */}
              <div className="flex items-center gap-4 mb-4">

                {/* Icon */}
                <div
                  className={`
                    w-12 h-12 rounded-lg flex items-center justify-center
                    ${
                      item.accent === "secondary"
                        ? "bg-secondary/20 text-[var(--denova-secondary)]"
                        : item.accent === "primary"
                        ? "bg-[var(--denova-primary)]/10 text-[var(--denova-primary)]"
                        : "bg-red-100 text-red-500"
                    }
                  `}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text */}
                <div className="text-right">
                  <p className="text-xs uppercase font-bold tracking-widest text-slate-500">
                    {item.title}
                  </p>

                  <p className="text-2xl font-black text-[var(--denova-primary)] tracking-tighter">
                    {item.value}
                  </p>
                </div>
              </div>

              {/* Body */}
              {item.variant === "progress" && (
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-3/4 rounded-full" />
                </div>
              )}

              {item.variant === "bars" && (
                <div className="flex gap-1">
                  {[0.2, 0.4, 0.6, 1].map((op, i) => (
                    <div
                      key={i}
                      className="h-8 flex-1 bg-secondary rounded-sm"
                      style={{ opacity: op }}
                    />
                  ))}
                </div>
              )}

              {item.variant === "alert" && (
                <p className="text-sm text-slate-500">
                  {item.description}
                </p>
              )}

            </div>
          );
        })}

      </div>
    </section>
  );
}