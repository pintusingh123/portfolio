import React, { useState } from "react";
import Button from "./buttons/Button";

const timelineData = [
  {
    year: "2025",
    texts: ["Building something new this year, stay tuned."],
  },
  {
    year: "2024",
    texts: [
      "Dove deep into web development, mastering modern technologies and building more than 15 projects.",
      "Designed a basic E-commerce project using Figma for UI design and developed with TailwindCSS & JavaScript, implementing clean, responsive code.",
    ],
  },
  {
    year: "2023",
    texts: [
      "Shifted focus from kabaddi due to family priorities, but gained clarity on my passion for technology.",
      "Started my BCA journey without prior programming knowledge and quickly developed a love for coding.",
      "Bought my first laptop and taught myself C programming and web development—sparking my passion for building software.",
    ],
  },
  {
    year: "2022",
    texts: [
      "Completed 12th grade in the Mathematics stream with a 65% score.",
      "Balanced academics while pursuing professional cricket, performing well in both fields.",
    ],
  },
  {
    year: "2021",
    texts: [
      "Used a computer for the first time while learning Tally — the moment that sparked my curiosity for technology.",
      "At that time, I had no idea this experience would become the foundation of my journey into the digital world.",
    ],
  },
  {
    year: "2020",
    texts: [
      "Started watching kabaddi and became an instant fan of a young Aslam Imandar, sparking my passion for the sport.",
    ],
  },
  {
    year: "2003",
    texts: [
      "The year I was born, the first future software developer in the family!",
    ],
  },
];

const Ab = () => {
  const [showMore, setShowMore] = useState(false);

  // Split timeline: 2022 & earlier always visible, later only on click
  const visibleData = showMore
    ? timelineData
    : timelineData.filter((item) => parseInt(item.year) <= 2022);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-black to-black p-4">
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-black text-white rounded-lg shadow-lg">
        {/* 🌟 Top Center Button */}
        <div className="mt-10 flex justify-center mb-1">
          <Button title="Welcome My About Page" />
        </div>

        {/* 🧠 Title */}
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-blue-100 mb-10">
          The Evolution of Pintu
        </h2>

        {/* 🕓 Timeline */}
        <div
          className={`relative flex flex-col gap-8 overflow-hidden transition-all duration-700 ease-in-out ${
            showMore ? "max-h-[5000px]" : "max-h-[800px]"
          } before:absolute before:left-3 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-yellow-400 before:to-blue-500`}
        >
          {visibleData.map((item, index) => (
            <div key={index} className="relative   pl-28">
              {/* Year */}
              <div className="absolute   -left-[1rem] top-0">
                <Button title={item.year} />
              </div>

              {/* Description */}
              <div className="space-y-2 mt-3">
                {item.texts.map((text, i) => (
                  <p
                    key={i}
                    className="text-gray-300 leading-relaxed text-sm sm:text-base"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 🌈 Show More / Less Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="relative overflow-hidden px-6 py-2 rounded-full font-semibold text-black   bg-gradient-to-r from-yellow-100 hover:scale-120 to-blue-300 transition-all duration-500"
          >
            {showMore ? "Show Less ↑" : "Show More ↓"}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p className="mt-2">
            Designed and developed by{" "}
            <span className="text-yellow-400">Pintu Singh</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ab;
