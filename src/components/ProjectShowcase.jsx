import React from "react";
import { motion } from "framer-motion";
import {
  FaTasks,
  FaLaptopCode,
  FaCrop,
  FaClipboardList,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import Button from "./buttons/Button";

const projects = [
  {
    title: "TaskFlow App",
    icon: FaTasks,
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
    description:
      "Modern React CRUD application with modular components, smooth modal interactions, state management, and real-time list manipulation.",
    live: "https://crud-app-eight-phi.vercel.app/",
    github: "https://github.com/pintusingh123/crud-app",
    tags: ["React", "State Management", "TailwindCSS", "Reusable Components"],
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProjectShowcase() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-12 flex flex-col items-center">
        <Button title="Featured Work" />
        <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Projects I've Built
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
          Production-ready applications demonstrating full-stack problem solving, clean code architecture, and high UI standard.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="group relative glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              {/* Featured Ribbon */}
              {project.featured && (
                <div className="absolute right-4 top-4 rounded-full bg-amber-400/10 border border-amber-400/40 px-3 py-1 text-[10px] font-bold uppercase text-amber-300 tracking-wider">
                  ★ Featured
                </div>
              )}

              <div>
                {/* Header Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {project.tags.slice(0, 2).join(" • ")}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-300 shadow-md transition"
                >
                  Live Demo <FaExternalLinkAlt className="w-3 h-3" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg glass-card px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-amber-400/30 transition"
                >
                  <FaGithub size={14} /> Code
                </a>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
