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
      download: "Pintu_Singh_Resume.docx",
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
    <header className="fixed top-4 inset-x-3 sm:inset-x-6 mx-auto max-w-4xl z-50">
      <nav className="glass-panel rounded-full px-4 py-2.5 sm:px-6 sm:py-3 border border-[#c0c1ff]/20 shadow-2xl shadow-[#060e20]/80 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-white font-bold tracking-tight text-base sm:text-lg group"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#c0c1ff] via-[#4cd7f6] to-[#ffafd3] p-[1.5px] shadow-lg shadow-[#4cd7f6]/20 group-hover:scale-105 group-hover:shadow-[#4cd7f6]/40 transition-all">
            <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0b1326] group-hover:bg-[#131b2e] transition-colors">
              <span className="bg-gradient-to-r from-[#c0c1ff] via-[#4cd7f6] to-[#ffafd3] bg-clip-text text-transparent font-black text-sm tracking-tight font-display">
                PJ
              </span>
            </span>
          </span>
          <span className="hidden xs:inline bg-gradient-to-r from-[#dae2fd] via-[#c0c1ff] to-[#4cd7f6] bg-clip-text text-transparent font-bold">
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
                    download={item.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-[#c7c4d7] hover:text-white hover:bg-[#222a3d]/80 transition-all duration-200"
                  >
                    <span className="text-[#4cd7f6]">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            }

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    active
                      ? "bg-[#c0c1ff]/20 text-[#c0c1ff] border border-[#c0c1ff]/40 shadow-sm"
                      : "text-[#c7c4d7] hover:text-white hover:bg-[#222a3d]/80"
                  }`}
                >
                  <span className={active ? "text-[#c0c1ff]" : "text-[#908fa0]"}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action button - Hire Me Quick Link */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[#c0c1ff] to-[#4cd7f6] text-[#07006c] text-xs font-bold hover:brightness-110 shadow-md shadow-[#c0c1ff]/20 transition-all glow-button"
          >
            Hire Me
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#c7c4d7] hover:text-white hover:bg-white/10 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 glass-panel rounded-2xl p-4 border border-[#c0c1ff]/20 shadow-2xl overflow-hidden animate-fade-in-up w-full max-w-full">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = !item.external && isActive(item.path);

              if (item.external) {
                return (
                  <li key={item.name}>
                    <a
                      href={item.path}
                      download={item.download}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-[#dae2fd] hover:bg-white/10 transition"
                    >
                      <span className="text-[#4cd7f6]">{item.icon}</span>
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
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                      active
                        ? "bg-[#c0c1ff]/20 text-[#c0c1ff] font-semibold border border-[#c0c1ff]/30"
                        : "text-[#dae2fd] hover:bg-white/10"
                    }`}
                  >
                    <span className={active ? "text-[#c0c1ff]" : "text-[#908fa0]"}>
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
