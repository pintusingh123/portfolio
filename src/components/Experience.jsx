 import React from "react";
import Button from "./buttons/Button";

function Experience() {
  return (
    <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[67%] mx-auto my-10 p-4 sm:p-6 font-sans">
      {/* Header */}
      <header className="text-center mb-6">
        <Button title="Experience" />
      </header>

      {/* Experience Card */}
      <div className="grid grid-cols-1 gap-5">
        <div className="relative rounded-xl p-5 shadow-lg border border-slate-200 bg-white/10 backdrop-blur-md">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
            <h2 className="text-base sm:text-lg font-semibold text-slate-100">
              Trader Portfolio and Information Web App
            </h2>
            <p className="text-sm text-slate-300">March 2025 — Present</p>
          </div>

          {/* Description */}
          <p className="text-slate-100 leading-6 text-sm sm:text-base mt-2">
            Designed and developed a responsive single-page application for a
            professional trader to showcase their trading profile, experience,
            and market expertise. The application includes dynamic sections for
            analytics, portfolio insights, and smooth animations.
          </p>

          {/* Role Div — Responsive Behavior */}
          <div
            className="
              bg-slate-100 text-slate-900 font-medium rounded-full px-3 py-1 text-xs sm:text-sm mt-4
              md:absolute md:bottom-3 md:right-3 md:mt-0
            "
          >
            Role: Front-End Developer
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-slate-100 px-3 py-1 rounded-full text-xs sm:text-sm text-slate-900">
              React.js
            </span>
            <span className="bg-slate-100 px-3 py-1 rounded-full text-xs sm:text-sm text-slate-900">
              TailwindCSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
