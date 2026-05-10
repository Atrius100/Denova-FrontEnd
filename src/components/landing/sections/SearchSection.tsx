"use client";

import { SEARCH_SECTION } from "@/config/search";
import { Search, Lock } from "lucide-react";

export default function SearchSection() {
  const isLoggedIn = false; 

  return (
    <section
      id="search"
      className="py-24 bg-surface relative brand-pattern-bg brand-pattern-light"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-[var(--denova-primary)] mb-6">
            {SEARCH_SECTION.title}
          </h2>

          {/* Search Input */}
          <div className="max-w-2xl mx-auto relative">
            <input
              disabled={!isLoggedIn}
              placeholder={SEARCH_SECTION.placeholder}
              className="w-full h-16 rounded-full bg-white shadow-xl px-12 text-lg text-right focus:ring-2 focus:ring-secondary/50 transition-all disabled:opacity-70"
            />

            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
          </div>
        </div>

        {/* Results Container */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-8">

          {/* Fake Results (blurred) */}
          <div
            className={`
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
              ${!isLoggedIn ? "blur-md pointer-events-none select-none opacity-40" : ""}
            `}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-40 bg-slate-100 rounded-xl"
              />
            ))}
          </div>

          {/* Overlay */}
          {!isLoggedIn && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-md">

              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
                <Lock className="w-8 h-8 text-[var(--denova-primary)]" />
              </div>

              <h3 className="text-2xl font-black text-[var(--denova-primary)] mb-4 text-center">
                {SEARCH_SECTION.lockedTitle}
              </h3>

              <p className="text-slate-500 mb-8 max-w-md text-center">
                {SEARCH_SECTION.lockedDescription}
              </p>

              <button className="bg-[var(--denova-secondary)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--denova-primary)] transition-all">
                {SEARCH_SECTION.cta}
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}