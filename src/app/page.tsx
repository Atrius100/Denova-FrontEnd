import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/sections/Hero";
import About from "@/components/landing/sections/About";
import Features from "@/components/landing/sections/Features";
import Steps from "@/components/landing/sections/Steps";
import CTA from "@/components/landing/sections/CTA";
import Footer from "@/components/layout/Footer";
import SupportSection from "@/components/landing/sections/Support";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <section id="hero">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="features">
                    <Features />
                </section>
                <section id="steps">
                    <Steps />
                </section>
                <section>
                    <SupportSection />
                </section>
                <section id="cta">
                    <CTA />
                </section>
            </main>
            <Footer />
        </>
    );
}