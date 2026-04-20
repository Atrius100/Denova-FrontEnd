import { SUPPORT_HEADER, SUPPORT_CARDS } from "@/config/support";
import { Phone } from "lucide-react";

export default function SupportSection() {
  return (
    <section className="py-24 bg-surface-container-low brand-pattern-bg">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">

          <div className="text-right">
            <h2 className="text-4xl font-black text-[var(--denova-primary)] mb-4">
              {SUPPORT_HEADER.title}
            </h2>

            <p className="text-slate-500">
              {SUPPORT_HEADER.description}
            </p>
          </div>

          <div className="hidden md:block w-20 h-2 bg-secondary rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {SUPPORT_CARDS.map((card, i) => {
            const Icon = card.icon; // 🔥 important trick

            return (
              <div
                key={i}
                className={`
                  p-8 rounded-2xl transition-all duration-300 group hover:-translate-y-2

                  ${
                    card.featured
                      ? "bg-[var(--denova-primary)] text-white shadow-xl shadow-primary/20"
                      : "bg-white border border-slate-200 hover:border-secondary/30"
                  }
                `}
              >

                {/* Icon */}
                <Icon
                  className={`w-10 h-10 mb-4 ${
                    card.featured ? "text-white" : "text-[var(--denova-primary)]"
                  }`}
                />

                {/* Title */}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    card.featured ? "text-white" : "text-[var(--denova-primary)]"
                  }`}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm ${
                    card.featured ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {card.description}
                </p>

                {/* Phone */}
                <div className="mt-8 flex items-center gap-3">
                  <Phone
                    className={`w-5 h-5 ${
                      card.featured ? "text-white" : "text-[var(--denova-secondary)]"
                    }`}
                  />

                  <span className="font-mono text-lg" dir="ltr">
                    {card.phone}
                  </span>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}