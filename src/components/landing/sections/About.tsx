import Image from "next/image";
import abouthand from "./../../../../public/abouthand.png";


export default function About() {
  return (
    <section id="about" className="py-24 bg-surface-container-low">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="text-right">
          <h2 className="text-4xl font-black text-[var(--denova-primary)] mb-6">
            بنيت بواسطة الطلاب، من أجل الطلاب
          </h2>

          <p className="text-lg text-muted-foreground mb-4">
            ندرك التحديات التي يواجهها طالب طب الأسنان
          </p>

          <p className="text-lg text-muted-foreground">
            لذلك صممنا بيئة رقمية متكاملة تساعدك على إدارة حالاتك بسهولة
          </p>
        </div>

        <div className="relative h-[400px]">
          <Image
            src={abouthand}
            alt="dentist"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}