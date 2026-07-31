import { useEffect, useRef, useState } from "react";
import { FaCheck, FaCopy, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const CONTACT_EMAIL = "pintujhala4@gmail.com";
const PHONE = "8003642596";

const contactMethods = [
  {
    icon: FaPhoneAlt,
    label: "Call Now",
    value: "+91 800-364-2596",
    href: `tel:+91${PHONE}`,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Chat instantly",
    href: `https://wa.me/91${PHONE}?text=Hi%20Pintu,%20I%20saw%20your%20portfolio!`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Jhalawar City, Rajasthan, India",
    href: null,
  },
];

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const triggerRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);

    const trigger = triggerRef.current;
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  function handleCopyEmail() {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="shrink-0 self-start rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#241f1b] bg-[#241f1b] px-6 py-4 font-hand text-2xl leading-none text-[#f7f1e6] transition-transform hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#241f1b] sm:px-9 sm:py-6 sm:text-[32px]"
      >
        Say Hello!
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-heading"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(36,31,27,0.55)] p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            className="relative w-full max-w-md rounded-xl border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] bg-[#faf6f0] px-8 py-8 shadow-[6px_6px_0_0_#241f1b]"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full font-sans text-2xl leading-none text-[#6e6356] transition-colors hover:text-[#9a4f2f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c1633b]"
            >
              ×
            </button>

            <h2 id="contact-modal-heading" className="font-hand text-[32px] leading-none text-[#241f1b]">
              {`Let's Talk`}
            </h2>
            <p className="mt-2 font-sans text-base text-[#4a4038]">
              Reach out directly — I respond promptly.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const content = (
                  <>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#241f1b]/8 text-[#9a4f2f]">
                      <Icon />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-sans text-xs font-bold tracking-[0.7px] text-[#6e6356] uppercase">
                        {method.label}
                      </span>
                      <span className="font-sans text-sm text-[#241f1b]">{method.value}</span>
                    </span>
                  </>
                );

                return method.href ? (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-lg border border-[#d8c7ac] px-4 py-2.5 transition-colors hover:border-[#c1633b]"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={method.label} className="flex items-center gap-3 rounded-lg border border-[#d8c7ac] px-4 py-2.5">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-1 border-t border-[#d8c7ac] pt-4 font-sans text-sm text-[#6e6356]">
              <span>
                Or email me directly —{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#9a4f2f] hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg border border-[#d8c7ac] px-3 py-1.5 text-xs font-semibold text-[#241f1b] transition-colors hover:border-[#c1633b]"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-[#7c8b5d]" /> Email Copied!
                  </>
                ) : (
                  <>
                    <FaCopy className="text-[#9a4f2f]" /> Copy Email Address
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
