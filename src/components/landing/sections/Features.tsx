// components/sections/Features.tsx

const features = [
  {
    title: "Case Tracking",
    desc: "نظام أرشفة ذكي لكل حالة",
  },
  {
    title: "Subscriptions",
    desc: "باقات مرنة تناسبك",
  },
  {
    title: "Verified Cases",
    desc: "توثيق رسمي للحالات",
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-black mb-12">
          ماذا يحصل عليه الطالب؟
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}