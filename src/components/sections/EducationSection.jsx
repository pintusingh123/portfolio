import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionBadge from "../ui/SectionBadge";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const educationTabs = [
  {
    id: "bca",
    label: "BCA Graduation",
    icon: FaGraduationCap,
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Kota University (2022–2025)",
    score: "CGPA: 7.1 / 10",
    highlights: [
      "Specialized in Software Engineering, Database Management, and Web Technologies.",
      "Built multiple web applications using React, Python, and SQL during academic coursework.",
      "Developed a passion for modern web frameworks and full-stack architecture.",
    ],
  },
  {
    id: "12th",
    label: "Senior Secondary (12th)",
    icon: FaSchool,
    title: "Senior Secondary School - Mathematics Stream",
    institution: "Jhalawar Govt Senior Secondary School (2021–2022)",
    score: "Score: 67%",
    highlights: [
      "Completed Senior Secondary education with a strong core in Mathematics and Logical Reasoning.",
      "Developed analytical problem-solving skills that built the baseline for algorithm design in software engineering.",
    ],
  },
];

export default function EducationSection() {
  const [activeTab, setActiveTab] = useState(educationTabs[0]);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10 flex flex-col items-center">
        <SectionBadge title="Academic Foundation" />
        <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-[#dae2fd] tracking-tight font-display">
          Education & Qualifications
        </h2>
      </div>

      {/* Main Glass Container */}
      <div className="glass-card rounded-2xl border border-[#c0c1ff]/15 shadow-2xl overflow-hidden">
        {/* Navigation Tabs */}
        <div className="flex border-b border-[#908fa0]/20 bg-[#060e20]/60 p-2 gap-2 overflow-x-auto">
          {educationTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap flex-1 justify-center ${
                  isSelected
                    ? "bg-[#c0c1ff]/20 text-[#c0c1ff] border border-[#c0c1ff]/40 shadow-md"
                    : "text-[#908fa0] hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={isSelected ? "text-[#c0c1ff]" : "text-[#908fa0]"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="p-6 sm:p-8 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#908fa0]/20">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#dae2fd]">
                    {activeTab.title}
                  </h3>
                  <p className="text-[#4cd7f6] text-sm font-medium mt-1">
                    {activeTab.institution}
                  </p>
                </div>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#c0c1ff]/10 border border-[#c0c1ff]/30 text-[#c0c1ff] text-xs font-bold font-mono w-fit">
                  {activeTab.score}
                </span>
              </div>

              <div className="space-y-2 pt-2">
                {activeTab.highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 text-[#c7c4d7] text-sm sm:text-base leading-relaxed">
                    <span className="text-[#4cd7f6] mt-1">▹</span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
