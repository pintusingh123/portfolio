export default function AvatarCard() {
  return (
    <div className="relative size-full overflow-hidden rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] bg-[#241f1b] shadow-[4px_4px_0_0_#241f1b]">
      <img
        src="/images/myimg.png"
        alt="Pintu Singh"
        className="absolute inset-0 size-full object-cover grayscale"
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col bg-gradient-to-t from-[rgba(36,31,27,0.92)] to-transparent p-6">
        <div className="flex items-center gap-2">
          <span className="size-2 shrink-0 rounded-full bg-[#c1633b]" />
          <span className="font-sans text-sm font-bold tracking-[1.4px] text-[#f7f1e6] uppercase">
            Available for hire
          </span>
        </div>
      </div>
    </div>
  );
}
