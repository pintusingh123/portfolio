import React, { useState } from "react";
import Button from "./buttons/Button";

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

const Ab = () => {
  const [showMore, setShowMore] = useState(false);

  // Show recent timeline initially, expand on click
  const visibleData = showMore ? timelineData : timelineData.slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <Button title="My Journey & Growth" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Journey of Pintu Singh
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            From discovering computers to building full-stack software applications — here is my evolution as a developer.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-14 border-l-2 border-amber-400/40 space-y-8 my-8">
          {visibleData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Year Dot / Badge */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[63px] top-0 flex items-center justify-center">
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-amber-400 text-amber-300 font-mono font-bold text-xs sm:text-sm shadow-md">
                  {item.year}
                </span>
              </div>

              {/* Card Details */}
              <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/10 group-hover:border-amber-400/40 transition-all duration-300 shadow-xl">
                <div className="space-y-2">
                  {item.texts.map((text, i) => (
                    <p
                      key={i}
                      className="text-slate-300 text-sm sm:text-base leading-relaxed"
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
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
          >
            {showMore ? "Show Less ↑" : "Show Full Timeline ↓"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ab;
