import React, { useState } from "react";
import Button from "./buttons/Button";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCopy, FaCheck } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: FaPhoneAlt,
      title: "Phone & Call",
      lines: ["+91-800-364-2596", "+91-844-199-2003"],
      actionLabel: "Call Now",
      href: "tel:+918003642596",
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      lines: ["pintujhala4@gmail.com", "pintugit982@gmail.com"],
      actionLabel: "Send Email",
      href: "mailto:pintujhala4@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      lines: ["Jhalawar City, Rajasthan", "India"],
      actionLabel: "View Location",
      href: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0b1326] text-[#dae2fd] pt-24 pb-16 px-4 sm:px-6 lg:px-8 grid-overlay">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <Button title="Get In Touch" />
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[#dae2fd] tracking-tight font-display">
            Let’s Connect & Collaborate
          </h2>
          <p className="mt-3 text-[#c7c4d7] max-w-xl text-sm sm:text-base">
            I am actively seeking software development roles, projects, and tech opportunities. Feel free to reach out directly via Phone, WhatsApp, or Email!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center border border-[#c0c1ff]/15 hover:border-[#4cd7f6]/40 transition-all duration-300 shadow-xl"
              >
                <div className="h-14 w-14 rounded-2xl bg-[#c0c1ff]/15 border border-[#c0c1ff]/30 text-[#4cd7f6] flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#dae2fd] mb-2">
                  {method.title}
                </h3>
                <div className="text-[#c7c4d7] text-sm leading-relaxed mb-6 font-mono">
                  {method.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                <a
                  href={method.href}
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#131b2e] border border-[#908fa0]/30 text-xs font-semibold text-[#4cd7f6] hover:bg-[#c0c1ff] hover:text-[#07006c] transition-all"
                >
                  {method.actionLabel}
                </a>
              </div>
            );
          })}
        </div>

        {/* Quick Action Box: WhatsApp & Direct Copy */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#c0c1ff]/15 text-center space-y-6 shadow-2xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#dae2fd] mb-2">
              Need A Quick Response?
            </h3>
            <p className="text-[#c7c4d7] text-sm sm:text-base max-w-lg mx-auto">
              Message me directly on WhatsApp or copy my primary email address for instant recruiter communication.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/918003642596?text=Hi%20Pintu,%20I%20saw%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#4cd7f6] hover:brightness-110 text-[#001f26] font-bold text-sm sm:text-base shadow-lg shadow-[#4cd7f6]/20 transition hover:scale-105"
            >
              <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
            </a>

            <button
              onClick={() => handleCopyEmail("pintujhala4@gmail.com")}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-panel border border-[#c0c1ff]/30 text-[#dae2fd] font-semibold text-sm sm:text-base hover:border-[#4cd7f6]/50 transition hover:scale-105"
            >
              {copied ? (
                <>
                  <FaCheck className="text-[#4cd7f6]" /> Email Copied!
                </>
              ) : (
                <>
                  <FaCopy className="text-[#c0c1ff]" /> Copy Email Address
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
