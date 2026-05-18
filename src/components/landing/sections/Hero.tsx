import Image from "next/image";
import pghero from "./../../../../public/bghero.png";
import StatsSection from "./Stats";


export default function Hero() {
    return (
        <section id="home" className="relative  min-h-screen flex items-center overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={pghero}
                    alt="clinic"
                    fill
                    className="object-cover opacity-10 grayscale"
                />
            </div>
            <div className="flex flex-col justify-center align-center w-full">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--denova-primary)] leading-tight">
                        منصتك الذكية لإدارة الحالات
                    </h1>

                    <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                        نظام متكامل لتتبع الحالات السريرية لطلاب طب الأسنان
                    </p>

                    <div className="flex gap-4 justify-center mt-10">
                        <button className="bg-[linear-gradient(135deg,var(--denova-primary),#0f2540)] text-white px-8 py-4 rounded-full text-lg font-bold">
                            اشترك الآن
                        </button>

                        <button className="border px-8 py-4 rounded-full text-[var(--denova-primary)]">
                            تسجيل الدخول
                        </button>
                    </div>
                </div>
                <StatsSection />
            </div>
        </section>
    );
}