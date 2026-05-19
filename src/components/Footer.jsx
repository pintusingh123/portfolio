import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

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
    <footer className="bg-[#020617] text-white border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-10 lg:px-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-yellow-300">
              Keep in touch
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Let’s build something memorable.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            I’m available for new projects, collaborations, and creative website
            work. Reach out anytime via messages or email.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
          >
            <FaEnvelope className="mr-2" />pintujhala4@gmail.com
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
              Quick links
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
              Follow
            </p>
            <div className="mt-4 flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-950/70 px-6 py-5 text-center text-xs text-slate-500 sm:px-10 lg:px-16">
        <p>
          © 2026 Pintu Singh. Built with React, Tailwind CSS, and a lot of passion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
