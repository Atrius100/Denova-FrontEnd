// components/sections/Steps.tsx

const steps = [
  "الاشتراك",
  "الوصول للحالات",
  "رفع الحالات",
  "التقويم",
];

export default function Steps() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 text-center">

        <h2 className="text-4xl font-black mb-12">
          رحلة اشتراكك
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                {i + 1}
              </div>

              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}