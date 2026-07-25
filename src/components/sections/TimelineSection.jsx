import React, { useState } from "react";
import SectionBadge from "../ui/SectionBadge";

const timelineData = [
  {
    year: "2025",
    texts: ["Building scalable full-stack web products, expanding Python/Django & React capabilities, and actively looking for software engineering roles."],
  },
  {
    year: "2024",
    texts: [
      "Dove deep into web development, mastering modern frontend & backend technologies and building over 15 complete web applications.",
      "Designed & launched an E-commerce platform UI in Figma and developed it with Tailwind CSS & JavaScript, featuring clean component architecture.",
    ],
  },
  {
    year: "2023",
    texts: [
      "Started my BCA journey, developing a core passion for coding and building digital solutions.",
      "Acquired my first laptop and self-taught C programming, HTML, CSS, and JavaScript fundamentals.",
    ],
  },
  {
    year: "2022",
    texts: [
      "Completed 12th grade in Mathematics stream with a 67% score.",
      "Balanced academics while pursuing regional cricket, building discipline, teamwork, and leadership skills.",
    ],
  },
  {
    year: "2021",
    texts: [
      "Operated a computer for the first time while learning Tally — the key catalyst that sparked my lifelong curiosity for technology.",
    ],
  },
];

const TimelineSection = () => {
  const [showMore, setShowMore] = useState(false);

  // Show recent timeline initially, expand on click
  const visibleData = showMore ? timelineData : timelineData.slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-[#0b1326] text-[#dae2fd] pt-24 pb-16 px-4 sm:px-6 lg:px-8 grid-overlay overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <SectionBadge title="My Journey & Growth" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#dae2fd] tracking-tight font-display">
            The Journey of Pintu Singh
          </h2>
          <p className="mt-3 text-[#c7c4d7] max-w-xl text-sm sm:text-base">
            From discovering computers to building full-stack software applications — here is my evolution as a developer.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 sm:pl-12 md:pl-14 border-l-2 border-[#4cd7f6]/40 space-y-8 my-8">
          {visibleData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Year Dot / Badge */}
              <div className="absolute -left-[24px] sm:-left-[40px] md:-left-[56px] top-0 flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-full bg-[#131b2e] border border-[#4cd7f6] text-[#4cd7f6] font-mono font-bold text-xs sm:text-sm shadow-md">
                  {item.year}
                </span>
              </div>

              {/* Card Details */}
              <div className="glass-card rounded-2xl p-5 sm:p-6 border border-[#c0c1ff]/15 group-hover:border-[#4cd7f6]/40 transition-all duration-300 shadow-xl">
                <div className="space-y-2">
                  {item.texts.map((text, i) => (
                    <p
                      key={i}
                      className="text-[#c7c4d7] text-sm sm:text-base leading-relaxed"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less Trigger */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-[#07006c] bg-gradient-to-r from-[#c0c1ff] via-[#4cd7f6] to-[#ffafd3] hover:brightness-110 shadow-lg shadow-[#c0c1ff]/20 transition-all hover:scale-105 glow-button"
          >
            {showMore ? "Show Less ↑" : "Show Full Timeline ↓"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
