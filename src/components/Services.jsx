import React from "react";
import Button from "./buttons/Button";

const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive and interactive user interfaces using React, Vue, and more.",
  },
  {
    title: "Backend Development",
    desc: "Designing robust APIs and server-side logic with Node.js, Express, and databases.",
  },
  {
    title: "UI/UX Design",
    desc: "Crafting intuitive and engaging user experiences with modern design tools.",
  },
 
  {
    title: "API Integration",
    desc: "Connecting third-party services and building scalable integrations.",
  },
];

function Services() {
  return (
    <section className="py-16   text-white flex flex-col items-center">
      <div className="      mb-8">
        <Button  title="Services" />
      </div>
      <div className="w-[65%] flex flex-col gap-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden flex justify-between items-center px-6 py-4 rounded-lg   border border-gray-400"
          >
            {/* Animated border overlays */}
            <div className="absolute inset-0 pointer-events-none z-0">
              {/* Top */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-900 via-red-900 to-yellow-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              {/* Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out delay-75" />
              {/* Left */}
              <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-yellow-400 via-red-500 to-yellow-400 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-150" />
              {/* Right */}
              <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-gradient-to-b from-yellow-400 via-red-500 to-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-200" />
            </div>

            {/* Left side content */}
            <div className="relative z-10">
              <h2 className="text-lg font-semibold">{service.title}</h2>
              <p className="text-sm text-gray-200">{service.desc}</p>
            </div>
            <button className="relative z-10 ml-4 px-4 py-2 bg-yellow-500 text-black font-medium rounded-md hover:bg-yellow-400 transition">
              More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
