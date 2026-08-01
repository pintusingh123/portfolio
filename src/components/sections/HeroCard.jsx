const stack = [
  { label: "React", rotate: "-rotate-2" },
  { label: "Django", rotate: "rotate-1" },
  { label: "Python", rotate: "-rotate-2" },
  { label: "SQL", rotate: "-rotate-1" },
  { label: "PostgreSQL", rotate: "rotate-3" },
  { label: "Tailwind CSS", rotate: "" },
];

export default function HeroCard() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    window.history.pushState(null, "", href);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative size-full flex-col justify-center gap-8 overflow-hidden rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] bg-white px-6 py-8 shadow-[4px_4px_0_0_#241f1b] sm:px-9">
      <div className="pointer-events-none absolute -top-12 -right-12 size-48 rounded-full bg-[rgba(193,99,59,0.08)] blur-3xl" />

      <div className="flex flex-col items-start gap-5 sm:gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="-rotate-2 rounded-full border border-[rgba(216,199,172,0.6)] bg-[#241f1b] px-3.5 py-1.5 font-sans text-sm font-bold tracking-[0.7px] text-[#f7f1e6]">
            Full-Stack Developer
          </span>
          <span className="h-0.5 w-12 bg-[rgba(138,124,108,0.4)]" />
        </div>

        <h1 className="font-hand text-[clamp(2rem,4vw+1.2rem,3rem)] leading-[1.2] tracking-[-0.96px] text-[#241f1b]">
          {`Hi, I'm Pintu. I build `}
          <span className="text-[#c1633b] underline decoration-wavy">full-stack web apps</span>
          {` that ship fast.`}
        </h1>

        <p className="max-w-[448px] font-sans text-base leading-[1.6] text-[#4a4038] sm:text-lg">
          Software engineer building responsive React interfaces backed by Django &
          Python REST APIs — from UI polish down to the database schema.
        </p>

        <div className="flex mb-3 flex-wrap gap-4 pt-1">
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "#projects")}
            className="rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#241f1b] bg-[#241f1b] px-6 py-3 font-hand text-lg tracking-[0.3px] text-[#f7f1e6] shadow-[4px_4px_0_0_#d8c7ac] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c1633b]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#241f1b]/30 px-6 py-3 font-hand text-lg tracking-[0.3px] text-[#241f1b] transition-colors hover:bg-[#241f1b]/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#241f1b]"
          >
            {`Let's Talk`}
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {stack.map((item) => (
          <span
            key={item.label}
            className={`${item.rotate} rounded-lg border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#5c5147] bg-[#241f1b] px-5 py-2.5 font-sans text-sm font-bold tracking-[0.7px] text-[#f7f1e6]`}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
