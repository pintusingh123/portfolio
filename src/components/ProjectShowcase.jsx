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
} from "react-icons/fa";
import Button from "./buttons/Button";

const projects = [
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
  },
  {
    title: "Portfolio Website",
    icon: FaLaptopCode,
    category: "Frontend",
    description:
      "A high-performance modern developer portfolio crafted with React, Vite, and Tailwind CSS. Showcases production projects, skills, and interactive UI design.",
    live: "https://portfolio-app-delta-one.vercel.app/",
    github: "https://github.com/pintusingh123/portfolio",
    tags: ["React", "Vite", "TailwindCSS", "Framer Motion", "Responsive UI"],
    featured: true,
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
  },
];

const categories = ["All", "Full Stack", "Frontend"];

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-8 flex flex-col items-center">
        <Button title="Featured Work" />
        <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-[#dae2fd] tracking-tight font-display">
          Projects I've Built
        </h2>
        <p className="mt-3 text-[#c7c4d7] max-w-2xl text-sm sm:text-base">
          Production-ready applications demonstrating full-stack problem solving, clean code architecture, and high UI standard.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
        <span className="text-xs text-[#908fa0] uppercase tracking-wider font-semibold mr-2 hidden sm:inline-flex items-center gap-1">
          <FaFilter className="text-[#4cd7f6]" /> Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-[#c0c1ff] text-[#07006c] shadow-md shadow-[#c0c1ff]/20 font-bold"
                : "glass-card text-[#c7c4d7] hover:text-white hover:border-[#c0c1ff]/40"
            }`}
          >
            {cat} {cat === "All" ? `(${projects.length})` : `(${projects.filter(p => p.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative animated-border-card glass-card rounded-2xl p-6 flex flex-col justify-between border border-[#c0c1ff]/15 hover:border-transparent transition-all duration-300 shadow-xl hover:shadow-[0_10px_35px_-5px_rgba(192,193,255,0.25)] cursor-pointer"
              >
                {/* Corner Glow Accent */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#4cd7f6]/10 rounded-full blur-2xl group-hover:bg-[#4cd7f6]/25 transition-all duration-500 pointer-events-none" />

                {/* Featured Ribbon */}
                {project.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-[#c0c1ff]/15 border border-[#c0c1ff]/40 px-3 py-1 text-[10px] font-bold uppercase text-[#c0c1ff] tracking-wider">
                    ★ Featured
                  </div>
                )}

                <div className="relative z-10">
                  {/* Header Icon + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c0c1ff]/15 border border-[#c0c1ff]/30 text-[#4cd7f6] group-hover:bg-[#4cd7f6] group-hover:text-[#0b1326] transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#dae2fd] group-hover:text-[#c0c1ff] transition">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#908fa0] font-mono">
                        {project.tags.slice(0, 2).join(" • ")}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#c7c4d7] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="mb-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#131b2e] border border-[#908fa0]/30 px-2.5 py-1 text-xs text-[#dae2fd] font-medium group-hover:border-[#4cd7f6]/30 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer CTAs */}
                <div className="relative z-10 pt-4 border-t border-[#908fa0]/20 flex items-center justify-between gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#c0c1ff] to-[#4cd7f6] px-4 py-2 text-xs font-bold text-[#07006c] hover:brightness-110 shadow-md transition hover:scale-105"
                  >
                    Live Demo <FaExternalLinkAlt className="w-3 h-3" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg glass-card px-3.5 py-2 text-xs font-semibold text-[#dae2fd] hover:text-white hover:border-[#c0c1ff]/40 transition hover:scale-105"
                  >
                    <FaGithub size={14} /> Code
                  </a>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
