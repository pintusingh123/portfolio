import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { label: "GitHub", href: "https://github.com/pintusingh123", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pintu-jhala-1612b5284/", icon: FaLinkedin },
];

function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-[rgba(216,199,172,0.6)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-8 py-14 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-hand text-[32px] leading-none text-[#241f1b]">Pintu Singh</p>
          <p className="mt-3 max-w-xs font-sans text-base text-[#4a4038]">
            Building fast, reliable web apps with React, Django, and Python — one clean deploy at a time.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[#8a7c6c] hover:text-[#c1633b] transition-colors"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <p className="font-sans text-sm text-[#6e6356]">
          © {new Date().getFullYear()} Pintu Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
