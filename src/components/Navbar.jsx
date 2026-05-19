import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillGithub } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaFileAlt } from "react-icons/fa";
// import "../style/Navbar.css"; // custom CSS for animated border

function Navbar() {
  const navItems = [
    { name: "Home", path: "/", icon: <AiFillHome size={24} /> },
    { name: "About", path: "/about", icon: <BsFillPersonFill size={24} /> },
    { name: "Contact", path: "/contact", icon: <MdContactMail size={24} /> },
    {
      name: "Resume",
      path: "https://docs.google.com/document/d/15sejEPQGKlSPQqbaPkpQeSJWx3IXEtCwsF30LQWT6F8/edit?usp=sharing",
      icon: <FaFileAlt size={24} />,
      external: true,
    },
    {
      name: "GitHub",
      path: "https://github.com/",
      icon: <AiFillGithub size={24} />,
      external: true,
    },
    {
      name: "LinkedIn",
      path: "https://linkedin.com/",
      icon: <FaLinkedin size={24} />,
      external: true,
    },
  ];

  return (
    <nav className="navbar-border border-white border-1 fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-3xl bg-white/10 backdrop-blur-sm z-10 py-3 px-3 sm:px-4 rounded-[30px]">
      <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6 lg:gap-8">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="group relative flex flex-col items-center cursor-pointer"
          >
            {item.external ? (
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-white transform transition-transform duration-300 ease-in-out  hover:scale-125 focus:scale-125"
              >
                {item.icon}
                <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-sm whitespace-nowrap">
                  {item.name}
                </span>
              </a>
            ) : (
              <Link
                to={item.path}
                className="flex flex-col items-center text-white transform transition-transform duration-300 ease-in-out   hover:scale-125 focus:scale-125"
              >
                {item.icon}
                <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-sm whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
