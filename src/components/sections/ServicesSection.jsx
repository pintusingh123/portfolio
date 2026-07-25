import React from "react";
import SectionBadge from "../ui/SectionBadge";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaServer, FaPaintBrush, FaPlug, FaArrowRight } from "react-icons/fa";

const services = [
  {
    num: "01",
    icon: FaLaptopCode,
    title: "Frontend Web Development",
    desc: "Crafting blazing fast, accessible, and responsive user interfaces with React, Vite, JavaScript (ES6+), and Tailwind CSS with smooth state management.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Redux/Context", "Responsive Layouts"],
  },
  {
    num: "02",
    icon: FaServer,
    title: "Backend & API Engineering",
    desc: "Architecting robust backend services, business logic, and RESTful APIs using Python, Django, Flask, and relational databases like PostgreSQL & MySQL.",
    tags: ["Python", "Django", "Django ORM", "REST APIs", "PostgreSQL"],
  },
  {
    num: "03",
    icon: FaPaintBrush,
    title: "UI/UX & Modern Web Aesthetics",
    desc: "Designing modern visual identity systems, glassmorphism UI components, dynamic micro-interactions, and intuitive user flows tuned for high conversion.",
    tags: ["Figma", "Glassmorphism", "Dark Mode UI", "Micro-Animations"],
  },
  {
    num: "04",
    icon: FaPlug,
    title: "API & Third-Party Integration",
    desc: "Seamlessly connecting payment gateways (Stripe, Zerodha APIs), authentication workflows, external webhooks, and cloud database integrations.",
    tags: ["Stripe / Payments", "OAuth / Auth", "Postman", "Webhooks"],
  },
];

function ServicesSection() {
  return (
    <section className="py-20 text-white w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <SectionBadge title="Services & Capabilities" />
        <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-[#dae2fd] tracking-tight font-display">
          What I Bring To The Table
        </h2>
        <p className="mt-3 text-[#c7c4d7] max-w-xl text-sm sm:text-base">
          End-to-end technical solutions designed to deliver scalable code, exceptional visual polish, and seamless performance.
        </p>
      </div>

      {/* Services Grid - Full Width on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.num}
              className="group relative glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#c0c1ff]/15 hover:border-[#4cd7f6]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-[#060e20]/40 overflow-hidden"
            >
              {/* Background Glow Accent on Hover */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-[#4cd7f6]/10 rounded-full blur-2xl group-hover:bg-[#4cd7f6]/25 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header row with Number and Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold font-mono text-[#c0c1ff]/80 group-hover:text-[#c0c1ff] transition">
                    {service.num}
                  </span>
                  <div className="h-12 w-12 rounded-xl bg-[#c0c1ff]/10 border border-[#c0c1ff]/20 text-[#4cd7f6] flex items-center justify-center group-hover:bg-[#4cd7f6] group-hover:text-[#0b1326] transition-all duration-300 shadow-md">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#dae2fd] mb-3 group-hover:text-[#c0c1ff] transition">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-[#c7c4d7] text-sm sm:text-base leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#131b2e] border border-[#908fa0]/30 text-xs font-medium text-[#dae2fd] group-hover:border-[#4cd7f6]/30 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#908fa0]/20 flex items-center justify-between">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4cd7f6] group-hover:text-[#c0c1ff] transition"
                >
                  Discuss Requirement <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-xs text-[#908fa0] font-mono">Custom Built</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
