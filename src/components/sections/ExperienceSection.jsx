const experience = [
  {
    period: "Mar 2024 – Oct 2024",
    company: "TransposeOn Pvt Ltd, Gurgaon, Haryana",
    role: "Software Developer Intern (Remote)",
    description:
      "Contributed to both frontend development and backend API development for web applications. Worked with Django, Django REST Framework (DRF), and React.js to develop and integrate core features.",
    bg: "bg-[#f2e9da]",
    periodColor: "text-[#9a4f2f]",
    dot: "bg-[#c1633b]",
    current: false,
  },
  {
    period: "Mar 2025 – May 2025",
    company: "Trader Portfolio Web App",
    role: "Front-End Developer",
    description:
      "Built a responsive single-page application for a professional trader to display portfolio metrics and market insights, with custom analytics views and fluid CSS animations.",
    bg: "bg-[#f2e9da]",
    periodColor: "text-[#9a4f2f]",
    dot: "bg-[#c1633b]",
    current: false,
  },
];

export default function ExperienceSection() {
  return (
    <ol className="flex size-full flex-col">
      {experience.map((role, i) => (
        <li key={role.company} className="flex gap-5">
          <div className="flex flex-col items-center">
            <span
              className={`mt-2 size-3.5 shrink-0 rounded-full border-2 border-[#241f1b] ${role.dot}`}
            />
            {i < experience.length - 1 && (
              <span className="my-1 w-0.5 flex-1 bg-[#d8c7ac]" />
            )}
          </div>

          <div
            className={`mb-6 min-w-0 flex-1 rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] px-5 py-5 shadow-[4px_4px_0_0_#241f1b] sm:px-7 sm:py-6 ${role.bg}`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className={`font-sans text-sm font-bold tracking-[0.7px] ${role.periodColor}`}>
                {role.period}
              </span>
              
            </div>

            <h3 className="font-hand pt-1 text-[32px] leading-none text-[#241f1b]">
              {role.company}
            </h3>

            <p className="pt-2 font-sans text-base leading-[1.6] text-[#4a4038]">
              <span className="font-bold text-[#241f1b]">{role.role}</span> • {role.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
