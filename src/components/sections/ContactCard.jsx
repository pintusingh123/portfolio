import ContactModal from "./ContactModal";

export default function ContactCard() {
  return (
    <div className="flex size-full flex-col items-start gap-6 rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] bg-[#c1633b] px-6 py-8 shadow-[4px_4px_0_0_#241f1b] sm:px-9 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="font-hand text-[clamp(1.75rem,4vw+1rem,3rem)] leading-[1.15] tracking-tight text-[#241f1b]">
          {`Let's build something great together.`}
        </h2>
        <p className="font-sans text-lg text-[rgba(36,31,27,0.75)]">
          Available for freelance and full-time roles.
        </p>
      </div>

      <ContactModal />
    </div>
  );
}
