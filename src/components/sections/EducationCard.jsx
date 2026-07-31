export default function EducationCard() {
  return (
    <div className="relative size-full overflow-hidden rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] bg-[#f2e9da] px-6 py-6 shadow-[4px_4px_0_0_#241f1b] sm:px-9 sm:py-8">
      <svg
        aria-hidden
        viewBox="0 0 110 90"
        className="pointer-events-none absolute top-0 right-4 h-[129px] w-[142px] p-4 text-[#c1633b] opacity-20"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      >
        <path d="M5 30 L55 8 L105 30 L55 52 Z" strokeLinejoin="round" />
        <path d="M28 40 V65 C28 74 40 82 55 82 C70 82 82 74 82 65 V40" strokeLinejoin="round" />
        <path d="M105 30 V58" strokeLinecap="round" />
      </svg>

      <div className="flex max-w-[422px] flex-col gap-5">
        <h3 className="font-sans text-sm font-bold tracking-[0.7px] text-[#9a4f2f] uppercase">
          Academic Foundation
        </h3>
        <div className="flex flex-col gap-1">
          <h4 className="font-hand text-[32px] leading-[1.15] text-[#241f1b]">
            Bachelor of Computer Applications
          </h4>
          <p className="font-sans text-base leading-[1.4] text-[#4a4038]">
            Kota University, Rajasthan
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-lg border border-[rgba(138,124,108,0.4)] px-3.5 py-1.5 font-sans text-base text-[#4a4038]">
            2022 – 2025
          </span>
          <span className="rounded-lg border border-[rgba(138,124,108,0.4)] px-3.5 py-1.5 font-sans text-base text-[#4a4038]">
            CGPA: 7.1/10
          </span>
        </div>
      </div>
    </div>
  );
}
