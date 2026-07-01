import { CTASection } from "@/components/home/cta-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { HeroSection } from "@/components/home/hero-section";
import { QuickIntroSection } from "@/components/home/quick-intro-section";
import { SkillsSection } from "@/components/home/skills-section";

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-6">
        <HeroSection />
        <QuickIntroSection />
        <FeaturedProjectsSection />
        <SkillsSection />
      </div>

      <div className="mx-auto mb-16 mt-8 w-full max-w-6xl px-6">
        <CTASection />
      </div>
    </>
  );
}
