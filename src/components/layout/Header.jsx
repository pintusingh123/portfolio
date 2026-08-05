import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [activeHref, setActiveHref] = useState("#about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el) => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    window.history.pushState(null, "", href);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[rgba(216,199,172,0.6)] bg-[rgba(250,246,240,0.85)] backdrop-blur-[12px]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, "#about")}
          className="font-hand text-[32px] leading-none text-[#241f1b] transition-colors hover:text-[#9a4f2f]"
        >
          Bintu S.
        </a>

        <nav className="hidden items-center gap-12 sm:flex">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "font-sans text-base font-bold text-[#9a4f2f] underline underline-offset-4"
                    : "font-sans text-sm font-bold tracking-[0.7px] text-[#6e6356] transition-colors hover:text-[#9a4f2f]"
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="block size-10 shrink-0 overflow-hidden rounded-full border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#c1633b] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c1633b]"
          >
            <img
              src="/images/myimg.png"
              alt="Pintu Singh"
              width={40}
              height={40}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 shrink-0 items-center justify-center rounded-lg border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] bg-[#f2e9da] text-[#241f1b] sm:hidden"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t-2 border-[rgba(216,199,172,0.6)] px-8 py-4 sm:hidden">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "rounded-lg px-3 py-2.5 font-sans text-base font-bold text-[#9a4f2f]"
                    : "rounded-lg px-3 py-2.5 font-sans text-base font-bold tracking-[0.7px] text-[#6e6356] transition-colors hover:text-[#9a4f2f]"
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}

export default Header;
