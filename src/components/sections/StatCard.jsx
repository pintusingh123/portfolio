export default function StatCard({ value, label, bg, valueColor, labelColor, progress }) {
  return (
    <div
      className={`flex size-full flex-col items-center justify-center rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] px-9 py-11 shadow-[4px_4px_0_0_#241f1b] ${bg}`}
    >
      <span className={`font-hand text-[48px] leading-none tracking-[-0.96px] ${valueColor}`}>
        {value}
      </span>
      <span className={`mt-2 text-center font-sans text-sm font-bold tracking-[-0.7px] uppercase ${labelColor}`}>
        {label}
      </span>
      {progress !== undefined && (
        <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-[rgba(36,31,27,0.15)]">
          <div className="h-full bg-[#241f1b]" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}
