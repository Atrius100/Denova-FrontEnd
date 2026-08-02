import { isLoggedIn } from "@/lib/auth/session";
import { AboutSection } from "../../../features/home/ui/AboutSection";
import BenefitCard from "../../../features/home/ui/BenefitCard";
import { HeroSection } from "../../../features/home/ui/Hero";
import { HomeCtaSection } from "../../../features/home/ui/HomeCtaSection";
import { JourneySection } from "../../../features/home/ui/JourneySection";
import { SearchSection } from "../../../features/home/ui/SearchSection";
import { SubmitCaseSection } from "../../../features/home/ui/SubmitCaseSection";
import { UniversitiesSection } from "../../../features/home/ui/UniversitiesSection";
import { LandingCasesLock } from "@/features/home/ui/LandingCasesLock";


export default function HomePage() {
  const loggedIn = isLoggedIn();

  return (
    <main>
      <HeroSection />
      <SubmitCaseSection />
      <AboutSection />
      <BenefitCard />
      {loggedIn ? < LandingCasesLock/> : <SearchSection/>}
      <JourneySection />
      <UniversitiesSection />
      <HomeCtaSection />
    </main>
  );
}