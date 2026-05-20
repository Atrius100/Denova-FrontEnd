"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bghero.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0  bg-white/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <div className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center text-center">
          {/* Title */}
          <h1 className="mb-8 text-5xl font-extrabold leading-tight text-[#1e3a6d] md:text-7xl">
            منصتك الذكية لإدارة الحالات
            <br />
            المرضية لطلاب طب الأسنان
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-9 text-gray-500">
            نظم، تابع، واعثر على الحالات التعليمية المطلوبة بسهولة.
          </p>

          {/* Buttons */}
          <div className="mb-20 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/register"
              className="rounded-xl  bg-gradient-to-br from-[#2563eb] to-[#1e3a6d] shadow-lg shadow-blue-500/20 px-10 py-4 text-lg font-semibold text-white transition hover:opacity-90"
            >
              إنشاء الآن
            </Link>

            <Link
              href="/cases"
              className="rounded-xl border border-gray-300 bg-white px-10 py-4 text-lg font-semibold text-[#1e3a6d] transition hover:bg-gray-50"
            >
              ابحث عن حالات
            </Link>
          </div>

          {/* Stats */}
          <div className="mx-auto flex max-w-2xl items-center justify-center gap-16">
            <div>
              <h3 className="text-3xl font-bold text-[#1e3a6d]">
                +10
              </h3>

              <p className="mt-2 text-gray-500">
                جامعات
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#1e3a6d]">
                +500
              </h3>

              <p className="mt-2 text-gray-500">
                طالب
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#1e3a6d]">
                +1000
              </h3>

              <p className="mt-2 text-gray-500">
                Cases
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}