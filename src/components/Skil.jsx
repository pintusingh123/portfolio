"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Skill() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "DOM",
  ];

  const backendSkills = [
    "Django",
    "Flask",
    "fireBase",
    "Django-ORM",
    "Postman",
    "REST API",
    "Zod Validation",
    "PostgreSQL",
    "MySQL",
    "Zerodha Payments",
  ];

  const otherSkills = [
    "DSA Python",
    "Python",
    "OOPS",
    "Git",
    "GitHub",
    "Linux",
    "Vercel",
    "Render deployment",
    "AWS basics",
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center  text-white px-4 py-20 overflow-hidden">
      {/* Title */}
      <div className="relative mb-16">
        <h2
          className="text-lg md:text-xl font-semibold tracking-widest px-8 py-3 rounded-md shadow-md
    bg-gradient-to-r from-[#2858c0] to-[#fdda2e] text-black
    Hover:border-l-4 hover:scale-105 border-transparent hover:border-l-4 hover:border-[#fdda2e]
    transition-all duration-500 ease-in-out"
        >
          MY SKILLS
        </h2>

        <div className="absolute left-1/2 -translate-x-1/2 top-full h-12 w-[2px] bg-gradient-to-b from-transparent via-zinc-600 to-transparent"></div>
      </div>

      {/* Skill Groups Container */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-28 items-start justify-center relative w-full max-w-6xl">
        {/* Horizontal Line */}
        <div className="hidden md:block absolute  top-0 left-1/2 h-[2px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-400 to-transparent"></div>

        {/* Frontend */}
        <motion.div
          className="flex flex-col mt-2 items-end gap-4 w-full md:w-1/3"
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SkillGroup
            title="Frontend & Tools"
            skills={frontendSkills}
            align="right"
          />
        </motion.div>

        {/* Backend */}
        <motion.div
          className="flex flex-col mt-2 items-start gap-4 w-full md:w-1/3"
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SkillGroup title="Backend" skills={backendSkills} align="left" />
        </motion.div>
      </div>

      {/* Database & Others */}
      <motion.div
        className="mt-16 flex flex-wrap justify-center gap-3 max-w-4xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {otherSkills.map((skill, i) => (
          <span
            key={i}
            className="border  border-zinc-700 text-zinc-300 px-4 py-2 rounded-md text-sm md:text-base hover:bg-zinc-800 transition-all"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function SkillGroup({ title, skills, align }) {
  return (
    <div
      className={`flex flex-col gap-3 items-center md:items-${
        align === "right" ? "end" : "start"
      }`}
    >
      <h3 className="text-zinc-400 text-sm uppercase tracking-wider mb-2">
        {title}
      </h3>
      <div
        className={`flex flex-wrap gap-3 justify-center md:justify-${
          align === "right" ? "end" : "start"
        }`}
      >
        {skills.map((skill, i) => (
          <span
            key={i}
            className="border border-zinc-700 text-zinc-300 px-4 py-2 rounded-md text-sm md:text-base hover:bg-zinc-800 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
