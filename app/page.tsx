import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Hero } from "@/components/Hero";
import { LanesSection } from "@/components/LanesSection";
import { ProofSection } from "@/components/ProofSection";
import { ReposSection } from "@/components/ReposSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <LanesSection />
        <ProofSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ReposSection />
      </main>
      <SiteFooter />
    </>
  );
}
