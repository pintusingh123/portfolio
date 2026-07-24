import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiFillGithub } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { FaLinkedin, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <AiFillHome size={18} /> },
    { name: "About", path: "/about", icon: <BsFillPersonFill size={18} /> },
    { name: "Contact", path: "/contact", icon: <MdContactMail size={18} /> },
    {
      name: "Resume",
      path: "/resume.pdf.docx",
      icon: <FaFileAlt size={18} />,
      download: "Bintu_Singh_Resume.pdf",
      external: true,
    },
    {
      name: "GitHub",
      path: "https://github.com/pintusingh123",
      icon: <AiFillGithub size={18} />,
      external: true,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/pintu-jhala-1612b5284/",
      icon: <FaLinkedin size={18} />,
      external: true,
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-4xl z-50">
      <nav className="glass-card rounded-full px-4 py-2.5 sm:px-6 sm:py-3 border border-white/10 shadow-2xl shadow-black/80 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-bold tracking-tight text-base sm:text-lg group"
        >
          <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 text-slate-950 flex items-center justify-center font-extrabold text-sm shadow-md shadow-amber-400/20 group-hover:scale-105 transition-transform">
            PS
          </span>
          <span className="hidden xs:inline bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Pintu Singh
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1.5 sm:gap-2">
          {navItems.map((item) => {
            const active = !item.external && isActive(item.path);

            if (item.external) {
              return (
                <li key={item.name}>
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    <span className="text-amber-400">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            }

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${active
                      ? "bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                >
                  <span className={active ? "text-amber-300" : "text-slate-400"}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action button - Contact Quick Link */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 text-xs font-semibold hover:brightness-110 shadow-md shadow-amber-500/20 transition-all"
          >
            Hire Me
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 glass-card rounded-2xl p-4 border border-white/10 shadow-2xl animate-fadeIn">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = !item.external && isActive(item.path);

              if (item.external) {
                return (
                  <li key={item.name}>
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 transition"
                    >
                      <span className="text-amber-400">{item.icon}</span>
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${active
                        ? "bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30"
                        : "text-slate-200 hover:bg-white/10"
                      }`}
                  >
                    <span className={active ? "text-amber-300" : "text-slate-400"}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
