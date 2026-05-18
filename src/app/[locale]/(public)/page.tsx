import { AboutSection } from "@/features/home/ui/AboutSection";
import BenefitCard from "@/features/home/ui/BenefitCard";
import { CasesSection } from "@/features/home/ui/CasesSection";
import { HeroSection } from "@/features/home/ui/Hero";
import { JourneySection } from "@/features/home/ui/JourneySection";
import { SubmitCaseSection } from "@/features/home/ui/SubmitCaseSection";
import { UniversitiesSection } from "@/features/home/ui/UniversitiesSection";
import  {SearchSection}  from "./../../../components/landing/sections/SearchSection";

export default function HomePage() {
  return (
    <main>

      <HeroSection />

      <SubmitCaseSection />

      <AboutSection />

      <BenefitCard />
      <SearchSection />
      <JourneySection />
      <CasesSection />

      <UniversitiesSection />
    </main>
  )
}