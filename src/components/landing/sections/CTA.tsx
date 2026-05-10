// components/sections/CTA.tsx

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">

        <div className="bg-[linear-gradient(135deg,var(--denova-primary),#0f2540)] p-16 rounded-3xl text-white">
          <h2 className="text-4xl font-black mb-6">
            ابدأ رحلتك الآن
          </h2>

          <p className="mb-8">
            انضم إلى مجتمع دينوفا
          </p>

          <button className="bg-white text-[var(--denova-primary)] px-10 py-4 rounded-full font-bold">
            اشترك الآن
          </button>
        </div>

      </div>
    </section>
  );
}