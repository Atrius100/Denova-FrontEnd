import Link from "next/link"

export function HomeCtaSection() {
  return (
    <section className="px-5 py-16 md:px-10 lg:px-[60px]">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-[#1e3a6d] to-[#0f2540] px-8 py-14 text-center text-white shadow-xl md:px-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          ابدأ رحلتك الآن
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-blue-100/90">
          انضم إلى مجتمع DENOVA وفعّل اشتراكك للوصول الكامل إلى قاعدة
          الحالات التعليمية.
        </p>
        <Link
          href="/payment?plan=semester"
          className="mt-8 inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-[#1e3a6d] shadow-lg transition hover:scale-[1.02]"
        >
          اشترك الآن
        </Link>
      </div>
    </section>
  )
}
