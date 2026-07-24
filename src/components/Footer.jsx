import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

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
    <footer className="bg-slate-950 text-white border-t border-white/10 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Left Column */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-xs">
                PS
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                Pintu Singh
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Full Stack Web Developer crafting scalable applications with React, Django, Python, and modern web architectures.
            </p>
            <a
              href="mailto:pintujhala4@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition"
            >
              <FaEnvelope /> pintujhala4@gmail.com
            </a>
          </div>

          {/* Right Column: Links & Socials */}
          <div className="flex flex-wrap items-start gap-12 sm:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Navigation
              </p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-300 hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
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
                    className="flex h-10 w-10 items-center justify-center rounded-xl glass-card border border-white/10 text-slate-300 hover:border-amber-400/50 hover:text-amber-300 hover:scale-105 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
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
