import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTasks,
  FaLaptopCode,
  FaCrop,
  FaClipboardList,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
  FaFilter,
  FaShoppingCart,
  FaInfoCircle,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";
import SectionBadge from "../ui/SectionBadge";
import ProjectDetailModal from "../ui/ProjectDetailModal";

const projects = [
  {
    title: "E-Commerce Platform",
    icon: FaShoppingCart,
    category: "Full Stack",
    description:
      "Full-stack e-commerce platform built with React.js, Django REST Framework (DRF), and PostgreSQL. Features JWT authentication, product catalog search, cart management, and admin dashboard.",
    live: "https://ecommerce-frontend-pi-roan.vercel.app/",
    github: "https://github.com/pintusingh123",
    tags: ["React", "Django DRF", "PostgreSQL", "JWT Auth", "TailwindCSS"],
    featured: true,
    highlights: [
      "JWT-based Secure User Authentication & Token Refresh",
      "Django REST Framework Backend API with PostgreSQL",
      "Dynamic Product Filtering, Cart Management & Checkout Flow",
      "Admin Control Panel for Product & Inventory CRUD"
    ]
  },
  {
    title: "TaskFlow App",
    icon: FaTasks,
    category: "Full Stack",
    description:
      "Full-stack Django task management system featuring user authentication, PostgreSQL database, analytics dashboard, search filtering, and robust CRUD operations.",
    live: "https://task-manager-sec5.onrender.com/signup",
    github: "https://github.com/pintusingh123/Todo_django",
    tags: ["Django", "Python", "Authentication", "PostgreSQL", "TailwindCSS"],
    featured: true,
    highlights: [
      "Built with Django MVC pattern and PostgreSQL database backend",
      "User auth workflow with session security and password hashing",
      "Real-time task completion statistics & interactive task status filter",
      "Fully responsive dashboard optimized for desktop & mobile devices"
    ]
  },
  {
    title: "Portfolio Website",
    icon: FaLaptopCode,
    category: "Frontend",
    description:
      "A high-performance modern developer portfolio crafted with React, Vite, Three.js 3D Graphics, and Tailwind CSS. Showcases production projects, skills, and interactive UI design.",
    live: "https://portfolio-app-delta-one.vercel.app/",
    github: "https://github.com/pintusingh123/portfolio",
    tags: ["React", "Three.js", "Vite", "TailwindCSS", "Framer Motion"],
    featured: true,
    highlights: [
      "Interactive 3D WebGL Web Canvas using Three.js",
      "Smooth Framer Motion physics and glassmorphism styling",
      "Responsive navigation, recruiter FAQ drawer & project modals",
      "Optimized 60 FPS build with high Lighthouse performance score"
    ]
  },
  {
    title: "Cropify Image Editor",
    icon: FaCrop,
    category: "Full Stack",
    description:
      "Feature-rich web image cropper and editor with account management, client authentication caching, and seamless Stripe payment integration.",
    live: "https://cropify-app.vercel.app/",
    github: "https://github.com/pintusingh123/image-crop-with-user-auth",
    tags: ["JavaScript", "TailwindCSS", "LocalStorage Auth", "Stripe API"],
    featured: false,
    highlights: [
      "Client-side Canvas Image Cropping & Canvas Aspect Ratio Controls",
      "LocalStorage Authentication caching & tier upgrade workflow",
      "Stripe Checkout API Integration for premium features",
      "Export high-resolution cropped images instantly"
    ]
  },
  {
    title: "Daily Tasker App",
    icon: FaClipboardList,
    category: "Frontend",
    description:
      "Productivity task planner offering real-time search, category filters, and a mobile-optimized UI tailored for daily habit management.",
    live: "https://dailytasker01.netlify.app/",
    github: "https://github.com/pintusingh123/todoList_with_js",
    tags: ["JavaScript", "CSS3", "TailwindCSS", "DOM API"],
    featured: false,
    highlights: [
      "Pure Vanilla JS DOM manipulation for high performance",
      "Local persistence storing task data across sessions",
      "Category tags, search filtering, and complete/pending stats",
      "Zero dependencies, fast instantaneous load times"
    ]
  },
  {
    title: "CRUD Dashboard",
    icon: FaCheckCircle,
    category: "Frontend",
    description:
      "Modern React CRUD application with modular components, smooth modal interactions, state management, and real-time list manipulation.",
    live: "https://crud-app-eight-phi.vercel.app/",
    github: "https://github.com/pintusingh123/crud-app",
    tags: ["React", "State Management", "TailwindCSS", "Reusable Components"],
    featured: false,
    highlights: [
      "Clean modular component architecture with custom React hooks",
      "Interactive popup modals for record creation & edits",
      "Real-time state updates with zero full page refreshes",
      "Tailwind CSS responsive design with dark mode color tokens"
    ]
  },
];

const categories = ["All", "Full Stack", "Frontend"];

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12 flex flex-col items-center">
        <SectionBadge title="Crafted Software & Apps" />
        <h2 className="mt-4 text-3xl sm:text-5xl font-black text-[#dae2fd] tracking-tight font-display">
          Featured Engineering Projects
        </h2>
        <p className="mt-3 text-[#c7c4d7] max-w-2xl text-sm sm:text-base leading-relaxed">
          Production-ready software applications engineered with clean full-stack architecture, high performance UI, and robust database backends.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2.5 mb-12 overflow-x-auto max-w-full pb-2">
        <span className="text-xs text-[#908fa0] uppercase tracking-wider font-semibold mr-2 hidden sm:inline-flex items-center gap-1.5">
          <FaFilter className="text-[#4cd7f6]" /> Category:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-[#c0c1ff] to-[#4cd7f6] text-[#07006c] shadow-lg shadow-[#4cd7f6]/25 scale-105"
                : "bg-[#131f37]/80 text-[#c7c4d7] border border-[#c0c1ff]/15 hover:text-white hover:border-[#c0c1ff]/40"
            }`}
          >
            {cat} {cat === "All" ? `(${projects.length})` : `(${projects.filter(p => p.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          variants={gridVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
        >
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                onClick={() => setActiveModalProject(project)}
                className="animated-border-card group relative bg-[#0e172a]/95 backdrop-blur-xl border border-[#c0c1ff]/20 hover:border-transparent transition-colors duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* macOS Code Header */}
                <div className="bg-[#152238] px-4 py-2.5 border-b border-[#c0c1ff]/15 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#908fa0] flex items-center gap-1">
                    <FaCode size={11} className="text-[#4cd7f6]" /> {project.category.toLowerCase()}
                  </span>
                  {project.featured ? (
                    <span className="px-2 py-0.5 rounded-full bg-[#c0c1ff]/15 text-[#c0c1ff] border border-[#c0c1ff]/30 text-[9px] font-bold uppercase tracking-wider">
                      Featured
                    </span>
                  ) : (
                    <span className="w-4" />
                  )}
                </div>

                {/* Card Main Body */}
                <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    {/* Header Icon + Title */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a2847] to-[#0f192e] border border-[#4cd7f6]/30 text-[#4cd7f6] group-hover:scale-110 group-hover:border-[#4cd7f6] group-hover:text-white transition-all duration-300 shadow-md">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#dae2fd] group-hover:text-[#4cd7f6] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-[#908fa0] font-mono">
                          {project.tags.slice(0, 2).join(" • ")}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#c7c4d7] text-sm leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mb-6 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-[#142138] border border-[#908fa0]/20 px-2.5 py-1 text-[11px] text-[#dae2fd] font-medium group-hover:border-[#4cd7f6]/40 transition"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Action bar & Architecture trigger */}
                  <div className="pt-4 border-t border-[#908fa0]/15 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c0c1ff] hover:text-[#4cd7f6] transition group-hover:translate-x-0.5"
                    >
                      <FaInfoCircle size={13} /> Architecture
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-[#16233d] border border-[#c0c1ff]/20 text-[#dae2fd] hover:text-white hover:border-[#c0c1ff]/50 transition"
                        title="View Source Code"
                      >
                        <FaGithub size={14} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#c0c1ff] to-[#4cd7f6] px-3.5 py-1.5 text-xs font-bold text-[#07006c] hover:brightness-110 shadow-md transition hover:scale-105"
                      >
                        Live Demo <FaExternalLinkAlt size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Project Detail Architecture Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
