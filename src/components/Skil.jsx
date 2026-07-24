import React from "react";
import { motion } from "framer-motion";
import Button from "./buttons/Button";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: FaCode,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "DOM Manipulation"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    skills: ["Python", "Django", "Django ORM", "Flask", "RESTful APIs", "Zod Validation", "Zerodha Payment API"],
  },
  {
    title: "Databases & Cloud",
    icon: FaDatabase,
    skills: ["PostgreSQL", "MySQL", "Firebase", "AWS Basics", "Vercel Deployment", "Render Hosting"],
  },
  {
    title: "Core CS & Workflow",
    icon: FaTools,
    skills: ["Data Structures (Python)", "OOP Concepts", "Git & GitHub", "Linux CLI", "Postman API Testing"],
  },
];

export default function Skill() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <Button title="Technical Stack" />
        <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Skills & Core Competencies
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
          Proven experience with modern technologies, frameworks, and web development practices.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-amber-400/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-300 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
