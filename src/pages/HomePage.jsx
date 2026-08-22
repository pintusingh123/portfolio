import { lazy, Suspense } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroCard from "../components/sections/HeroCard";
import AvatarCard from "../components/sections/AvatarCard";
import StatCard from "../components/sections/StatCard";
import SkillsCard from "../components/sections/SkillsCard";
import ExperienceSection from "../components/sections/ExperienceSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectCard from "../components/sections/ProjectCard";
import ContactCard from "../components/sections/ContactCard";
import EducationCard from "../components/sections/EducationCard";
import ScrollAnimate from "../components/ui/ScrollAnimate";

const RecruiterFAQSection = lazy(() => import("../components/sections/RecruiterFAQSection"));

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform built with React.js, Django REST Framework, and PostgreSQL. Features JWT authentication, product catalog search, and cart management.",
    role: "Solo-built the full stack — UI, backend, and JWT auth end-to-end.",
    tags: ["React", "Django DRF", "PostgreSQL"],
    href: "https://ecommerce-frontend-pi-roan.vercel.app/",
    bg: "bg-white",
    titleColor: "text-[#241f1b]",
    descriptionColor: "text-[#4a4038]",
    tagBg: "bg-[rgba(193,99,59,0.1)]",
    tagColor: "text-[#9a4f2f]",
  },
  {
    title: "TaskFlow App",
    description:
      "Full-stack Django task management system with user authentication, PostgreSQL database, an analytics dashboard, and search filtering.",
    role: "Built the Django backend, authentication, and analytics dashboard.",
    tags: ["Django", "PostgreSQL", "Auth"],
    href: "https://task-manager-sec5.onrender.com/signup",
    bg: "bg-[#f2e9da]",
    titleColor: "text-[#241f1b]",
    descriptionColor: "text-[#4a4038]",
    tagBg: "bg-[rgba(36,31,27,0.08)]",
    tagColor: "text-[#4a4038]",
  },
  {
    title: "Portfolio Website",
    description:
      "A high-performance modern developer portfolio crafted with React, Vite, and Tailwind CSS, showcasing production projects and interactive UI design.",
    role: "Designed and built the entire site — UI, layout, and deployment.",
    tags: ["React", "Vite", "Tailwind CSS"],
    href: "https://bintu-jhala-portfolio12.vercel.app/",
    bg: "bg-[#eef0e6]",
    titleColor: "text-[#241f1b]",
    descriptionColor: "text-[#4a4038]",
    tagBg: "bg-[rgba(124,139,93,0.18)]",
    tagColor: "text-[#5f6b48]",
  },
  {
    title: "Smart Scanner Generator",
    description:
      "Developed a document scanning and management application using Django, enabling users to upload, organize, and manage digital documents efficiently.",
    role: "Built the reusable component system and state management.",
    tags: ["Django", "Python", "REST APIs", "Pillow", "PostgreSQL"],
    href: "https://scanner-app-3mrd.onrender.com/",
    bg: "bg-[#eef0e6]",
    titleColor: "text-[#241f1b]",
    descriptionColor: "text-[#4a4038]",
    tagBg: "bg-[rgba(124,139,93,0.18)]",
    tagColor: "text-[#5f6b48]",
  },
  {
    title: "Cropify Image Editor",
    description:
      "Feature-rich web image cropper and editor with account management, client authentication caching, and Stripe payment integration.",
    role: "Built the editor UI, auth caching, and Stripe payment integration.",
    tags: ["JavaScript", "Stripe API", "Auth"],
    href: "https://cropify-app.vercel.app/",
    bg: "bg-[#f5e3d6]",
    titleColor: "text-[#241f1b]",
    descriptionColor: "text-[#4a4038]",
    tagBg: "bg-[rgba(193,99,59,0.12)]",
    tagColor: "text-[#9a4f2f]",
  },
  {
    title: "Daily Tasker App",
    description:
      "Productivity task planner offering real-time search, category filters, and a mobile-optimized UI for daily habit management.",
    role: "Built the search, category filters, and mobile-first UI.",
    tags: ["JavaScript", "CSS3", "DOM API"],
    href: "https://dailytasker01.netlify.app/",
    bg: "bg-[#f7ecd0]",
    titleColor: "text-[#241f1b]",
    descriptionColor: "text-[#4a4038]",
    tagBg: "bg-[rgba(193,99,59,0.12)]",
    tagColor: "text-[#9a4f2f]",
  },
  {
    title: "CRUD Dashboard",
    description:
      "Modern React CRUD application with modular components, smooth modal interactions, and real-time list manipulation.",
    role: "Built the reusable component system and state management.",
    tags: ["React", "State Management", "Tailwind CSS"],
    href: "https://crud-app-eight-phi.vercel.app/",
    bg: "bg-[#241f1b]",
    titleColor: "text-[#f7f1e6]",
    descriptionColor: "text-[#d8c7ac]",
    tagBg: "bg-[rgba(247,241,230,0.1)]",
    tagColor: "text-[#f7f1e6]",
  },

];

function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main id="main-content" className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-8 py-16">
        <section id="about" className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          <ScrollAnimate delay={0} className="lg:col-span-8">
            <HeroCard />
          </ScrollAnimate>
          <ScrollAnimate delay={0.15} className="aspect-square lg:aspect-auto lg:col-span-4">
            <AvatarCard />
          </ScrollAnimate>
        </section>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <ScrollAnimate delay={0} className="h-[180px]">
            <StatCard
              value="07+"
              label="Projects Completed"
              bg="bg-[#c1633b]"
              valueColor="text-[#241f1b]"
              labelColor="text-[rgba(36,31,27,0.75)]"
            />
          </ScrollAnimate>
          <ScrollAnimate delay={0.1} className="h-[180px]">
            <StatCard
              value="15+"
              label="Web Apps Shipped"
              bg="bg-[#f2e9da]"
              valueColor="text-[#241f1b]"
              labelColor="text-[#6e6356]"
            />
          </ScrollAnimate>
          <ScrollAnimate delay={0.2} className="h-[180px]">
            <StatCard
              value="80+"
              label="Solved Leetcode Problems"
              bg="bg-[#7c8b5d]"
              valueColor="text-[#241f1b]"
              labelColor="text-[rgba(36,31,27,0.7)]"
              progress={71}
            />
          </ScrollAnimate>
        </section>

        <section id="experience" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ScrollAnimate delay={0}>
            <SkillsCard />
          </ScrollAnimate>
          <ScrollAnimate delay={0.15}>
            <ExperienceSection />
          </ScrollAnimate>
        </section>

        <section id="services" className="w-full pt-6">
          <ScrollAnimate delay={0.1}>
            <ServicesSection />
          </ScrollAnimate>
        </section>

        {/* Tactile Divider between Services and Projects */}
        <div className="relative my-8 flex items-center justify-center">
          <div className="w-full border-t-2 border-[#d8c7ac]" />
          <span className="absolute bg-[#faf6f0]  py-1 font-hand text-lg font-bold text-[#9a4f2f] px-2  ">
            Projects Showcase
          </span>
        </div>

        <section id="projects" className="w-full ">


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <ScrollAnimate key={project.title} delay={(idx % 3) * 0.1} className="h-full">
                <ProjectCard {...project} />
              </ScrollAnimate>
            ))}
          </div>
        </section>

        {/* Divider between Projects and Contact */}
        <div className="relative my-8 flex items-center justify-center">
          <div className="w-full border-t-2 border-[#d8c7ac]" />
          <span className="absolute bg-[#faf6f0]  py-1 font-hand text-lg font-bold text-[#9a4f2f] px-2  ">
           Contact & Education
          </span>
        </div>

        <section id="contact" className="grid grid-cols-1 gap-6 lg:grid-cols-12">


          <ScrollAnimate delay={0} className="min-h-[265px] lg:col-span-7">
            <ContactCard />
          </ScrollAnimate>
          <ScrollAnimate delay={0.15} className="min-h-[265px] lg:col-span-5">
            <EducationCard />
          </ScrollAnimate>
        </section>

        <Suspense fallback={null}>
          <ScrollAnimate delay={0.1}>
            <RecruiterFAQSection />
          </ScrollAnimate>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
