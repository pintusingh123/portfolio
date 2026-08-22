import { FaCode, FaDesktop, FaServer, FaDatabase } from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Full-Stack Web App Development",
    description:
      "Building robust, end-to-end web applications combining dynamic React interfaces with scalable Django REST Framework backends and PostgreSQL databases.",
    highlights: [
      "Custom RESTful API Architecture",
      "Full Authentication & Authorization",
      "State Management & Data Flow",
    ],
    tags: ["React.js", "Django DRF", "PostgreSQL"],
    bg: "bg-white",
    iconBg: "bg-[rgba(193,99,59,0.12)]",
    iconColor: "text-[#c1633b]",
    tagBg: "bg-[rgba(193,99,59,0.1)]",
    tagColor: "text-[#9a4f2f]",
  },
  {
    icon: FaDesktop,
    title: "Frontend UI/UX & Web Apps",
    description:
      "Crafting high-performance, mobile-first web applications using React, Vite, and Tailwind CSS. Focused on accessible, pixel-perfect, interactive UI designs.",
    highlights: [
      "Responsive & Mobile-First Design",
      "Smooth Micro-Animations & Interactivity",
      "Optimized Page Loading Speed",
    ],
    tags: ["React", "JavaScript (ES6+)", "Tailwind CSS"],
    bg: "bg-[#f2e9da]",
    iconBg: "bg-[rgba(36,31,27,0.08)]",
    iconColor: "text-[#241f1b]",
    tagBg: "bg-[rgba(36,31,27,0.08)]",
    tagColor: "text-[#4a4038]",
  },
  {
    icon: FaServer,
    title: "Backend API & Systems Architecture",
    description:
      "Designing clean, maintainable backend services and REST APIs with Python and Django. Integrated with JWT authentication, third-party APIs, and security best practices.",
    highlights: [
      "JWT & Session Authentication",
      "Third-Party Service Integration (Stripe, Cloud)",
      "Clean Code & Scalable Endpoint Architecture",
    ],
    tags: ["Python", "Django", "REST APIs"],
    bg: "bg-[#eef0e6]",
    iconBg: "bg-[rgba(124,139,93,0.2)]",
    iconColor: "text-[#5f6b48]",
    tagBg: "bg-[rgba(124,139,93,0.18)]",
    tagColor: "text-[#5f6b48]",
  },
  {
    icon: FaDatabase,
    title: "Database Design & Optimization",
    description:
      "Schema design, complex SQL queries, and database optimization for PostgreSQL and MySQL. Ensuring data integrity, fast query execution, and seamless deployment.",
    highlights: [
      "Relational Schema & Migration Design",
      "Query Performance Tuning & Indexing",
      "Production Deployment (Vercel, Render)",
    ],
    tags: ["PostgreSQL", "SQL", "Deployment"],
    bg: "bg-[#f5e3d6]",
    iconBg: "bg-[rgba(193,99,59,0.15)]",
    iconColor: "text-[#9a4f2f]",
    tagBg: "bg-[rgba(193,99,59,0.12)]",
    tagColor: "text-[#9a4f2f]",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center text-center mb-10">
        <span className="font-sans text-sm font-bold tracking-[0.7px] text-[#9a4f2f] uppercase">
          What I Offer
        </span>
        <h2 className="mt-2 font-hand text-[clamp(2rem,4vw+1rem,3rem)] leading-[1.15] text-[#241f1b]">
          Specialized Web Engineering Services
        </h2>
        <p className="mt-3 max-w-2xl font-sans text-base text-[#4a4038] sm:text-lg">
          From full-stack web applications to polished frontend interfaces and high-performance backend REST APIs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`group flex flex-col justify-between rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] p-6 shadow-[4px_4px_0_0_#241f1b] transition-transform hover:-translate-y-1 sm:p-8 ${service.bg}`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(216,199,172,0.8)] ${service.iconBg} ${service.iconColor} transition-transform group-hover:scale-110`}
                  >
                    <Icon size={22} />
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded px-2.5 py-1 font-sans text-xs font-semibold ${service.tagBg} ${service.tagColor}`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-hand text-[28px] leading-[1.2] text-[#241f1b] mb-3 sm:text-[32px]">
                  {service.title}
                </h3>

                <p className="font-sans text-base leading-[1.6] text-[#4a4038] mb-5">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(216,199,172,0.6)]">
                <ul className="flex flex-col gap-2 font-sans text-sm text-[#4a4038]">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="size-1.5 shrink-0 rounded-full bg-[#c1633b]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
