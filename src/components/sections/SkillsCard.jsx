import { FaTerminal } from "react-icons/fa";

const skillGroups = [
  { title: "Languages", items: ["JavaScript (ES6+)", "Python"] },
  { title: "Backend", items: ["Django / DRF", "Flask", "REST APIs"] },
  { title: "Frontend", items: ["React.js / Next.js", "Tailwind CSS"] },
  { title: "Data & Cloud", items: ["PostgreSQL / MySQL", "Firebase", "Vercel / Render"] },
];

export default function SkillsCard() {
  return (
    <div className="flex size-full flex-col gap-8 rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] bg-[#241f1b] px-6 py-6 shadow-[4px_4px_0_0_#241f1b] sm:px-9 sm:py-8">
      <div className="flex items-center justify-between">
        <h2 className="font-hand text-[32px] leading-none text-[#f7f1e6] underline decoration-[rgba(193,99,59,0.5)]">
          Technical Arsenal
        </h2>
        <FaTerminal className="text-[#c1633b]" size={20} />
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-2">
            <h3 className="font-sans text-sm font-bold tracking-[0.7px] text-[#cd8262] uppercase">
              {group.title}
            </h3>
            <ul className="flex flex-col gap-1">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 font-sans text-base text-[#e0d5c4]">
                  <span className="size-1.5 shrink-0 rounded-full bg-[#8a7c6c]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
