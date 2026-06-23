import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCrop,
  FaTasks ,
  FaClipboardList,
  FaCheckCircle,
} from "react-icons/fa";
import Button from "./buttons/Button";

const projects = [
  {
    title: "TaskFlow App",
    icon: FaTasks,
    description:
      "Developed a Django-based task management system with authentication, task tracking, analytics dashboard, search, filtering, CRUD operations, and PostgreSQL integration.",
    live: "https://task-manager-sec5.onrender.com/signup",
    github: "https://github.com/pintusingh123/Todo_django",
    tags: ["Django","Django ORM", "Authentication", "TailwindCSS", "Responsive UI"],
    featured: true,
  },
  {
    title: "Portfolio Website",
    icon: FaLaptopCode,
    description:
      "A polished portfolio experience built with React, Vite and TailwindCSS. Highlights career wins, project outcomes, and the technical decisions that make the UI feel fast and professional.",
    live: "https://portfolio-app-delta-one.vercel.app/",
    github: "https://github.com/pintusingh123/portfolio",
    tags: ["React", "Vite", "TailwindCSS", "Responsive UI"],
    featured: true,
  },
  {
    title: "Cropify App",
    icon: FaCrop,
    description:
      "A user-first image editor with account management, local-cache authentication, and premium Stripe payment flow. Built to demonstrate full-stack ownership and polished interaction design.",
    live: "https://cropify-app.vercel.app/",
    github: "https://github.com/pintusingh123/image-crop-with-user-auth",
    tags: ["JavaScript", "TailwindCSS", "LocalStorage Auth", "Stripe"],
  },
  {
    title: "Daily Tasker App",
    icon: FaClipboardList,
    description:
      "A task planner that keeps users organized with search, filters, and a mobile-friendly UI. Designed for productivity and fast habit-building during everyday workflows.",
    live: "https://dailytasker01.netlify.app/",
    github: "https://github.com/pintusingh123/todoList_with_js",
    tags: ["JavaScript", "CSS", "TailwindCSS", "Search"],
  },
  {
    title: "CRUD Dashboard",
    icon: FaCheckCircle,
    description:
      "A clean CRUD dashboard built in React with reusable components and smooth interactions. Demonstrates data management, edit flows, and strong attention to interface detail.",
    live: "https://crud-app-eight-phi.vercel.app/",
    github: "https://github.com/pintusingh123/crud-app",
    tags: ["React", "CRUD", "TailwindCSS", "Component Reuse"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ProjectShowcase() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <Button title="Selected Projects" />
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
          Curated projects that highlight practical skills, production-readiness
          and results — useful to reference in interviews and on your resume.
        </p>
      </div>

      <motion.div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.title}
              variants={card}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-3xl bg-slate-950/90 border border-white/10 p-6 shadow-2xl shadow-black/20"
            >
              {p.featured && (
                <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold uppercase text-slate-950 tracking-[0.22em]">
                  Featured
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-500/20">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">
                    {p.tags.slice(0, 2).join(" • ")}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                {p.description}
              </p>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-sm font-semibold text-white">
                  Technologies used
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
                  >
                    Live Site
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500"
                >
                  View source
                </a>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
