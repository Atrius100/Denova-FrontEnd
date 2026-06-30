import { AboutSection } from "../../../features/home/ui/AboutSection";
import BenefitCard from "../../../features/home/ui/BenefitCard";
import { CasesSection } from "../../../features/home/ui/CasesSection";
import { HeroSection } from "../../../features/home/ui/Hero";
import { HomeCtaSection } from "../../../features/home/ui/HomeCtaSection";
import { JourneySection } from "../../../features/home/ui/JourneySection";
import { SearchSection } from "../../../features/home/ui/SearchSection";
import { SubmitCaseSection } from "../../../features/home/ui/SubmitCaseSection";
import { UniversitiesSection } from "../../../features/home/ui/UniversitiesSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SubmitCaseSection role="guest" /> 
<SubmitCaseSection role="student" /> 
      <AboutSection />
      <BenefitCard />
      <CasesSection />
      <SearchSection />
      <JourneySection />
      <UniversitiesSection />
      <HomeCtaSection />
    </main>
  )
}
