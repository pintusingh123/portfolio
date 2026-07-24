import React from "react";
import Button from "./buttons/Button";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

function Experience() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-10 flex flex-col items-center">
        <Button title="Professional Experience" />
        <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Work History & Highlights
        </h2>
      </div>

      {/* Experience Timeline Card */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/30">
              <FaBriefcase className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Front-End Developer
              </h3>
              <p className="text-amber-400 text-sm font-semibold mt-0.5">
                Trader Portfolio & Information Web Application
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono w-fit">
            <FaCalendarAlt className="text-amber-400" />
            <span>March 2025 — Present</span>
          </div>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          Architected and developed a high-converting responsive single-page web application for a professional trader to display trading portfolio metrics, market insights, and analytical highlights. Integrated custom financial section views, fluid CSS animations, and optimized load performance.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {["React.js", "Tailwind CSS", "Single Page Application", "Analytics UI", "Responsive Design"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Role: Front-End Developer
          </span>
        </div>
      </div>
    </section>
  );
}

export default Experience;
