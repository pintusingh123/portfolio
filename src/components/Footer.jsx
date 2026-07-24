import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/pintusingh123",
      icon: <FaGithub className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pintu-jhala-1612b5284/",
      icon: <FaLinkedin className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="bg-[#060e20] text-[#dae2fd] border-t border-[#908fa0]/20 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-[#908fa0]/20">
          {/* Left Column */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-[#c0c1ff] text-[#07006c] font-bold flex items-center justify-center text-xs">
                PS
              </span>
              <span className="text-xl font-bold tracking-tight text-[#dae2fd] font-display">
                Pintu Singh
              </span>
            </div>
            <p className="text-sm text-[#c7c4d7] leading-relaxed">
              Full Stack Web Developer crafting scalable applications with React, Django, Python, and modern web architectures.
            </p>
            <a
              href="mailto:pintujhala4@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#c0c1ff] to-[#4cd7f6] text-[#07006c] font-bold text-xs hover:brightness-110 transition glow-button"
            >
              <FaEnvelope /> pintujhala4@gmail.com
            </a>
          </div>

          {/* Right Column: Links & Socials */}
          <div className="flex flex-wrap items-start gap-12 sm:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#908fa0] mb-3">
                Navigation
              </p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#908fa0] mb-3">
                Connect
              </p>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl glass-panel border border-[#908fa0]/20 text-[#dae2fd] hover:border-[#c0c1ff]/40 hover:text-[#c0c1ff] hover:scale-105 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#908fa0]">
          <p>© {new Date().getFullYear()} Pintu Singh. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
