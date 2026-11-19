import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ProblemSolvingSection } from "@/sections/ProblemSolvingSection";
import { EducationSection } from "@/sections/EducationSection";
import { LeadershipSection } from "@/sections/LeadershipSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0c10] text-slate-100 flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ProblemSolvingSection />
      <EducationSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

