import React from "react";
import HeroSection from "../components/sections/HeroSection";
import ProjectShowcase from "../components/sections/ProjectShowcase";
import ServicesSection from "../components/sections/ServicesSection";
import SkillsSection from "../components/sections/SkillsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import EducationSection from "../components/sections/EducationSection";
import RecruiterFAQSection from "../components/sections/RecruiterFAQSection";
import ContactPage from "./ContactPage";

function HomePage() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0b1326] text-[#dae2fd] selection:bg-[#c0c1ff] selection:text-[#07006c]">
      <HeroSection />
      <ProjectShowcase />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <RecruiterFAQSection />
      <ContactPage />
    </main>
  );
}

export default HomePage;
