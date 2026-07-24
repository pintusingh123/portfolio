import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

function TypingText({
  words = [
    "Full Stack Web Developer",
    "Django & Python Specialist",
    "React & Modern UI Developer",
    "Backend & REST API Architect",
  ],
  typingSpeed = 90,
  deleteSpeed = 60,
  delayBetweenWords = 1500,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }
      } else {
        if (currentText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 text-center overflow-hidden">
      {/* Subtle Ambient Background Spotlight */}
      <div
        className="pointer-events-none fixed -z-10 w-[500px] h-[500px] rounded-full opacity-15 bg-gradient-to-tr from-amber-400 via-yellow-500 to-blue-600 blur-3xl transition-transform duration-700 ease-out transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Grid Pattern Backdrop */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        Available for Full-time Roles & Projects
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl"
      >
        <p className="text-amber-400 font-semibold tracking-widest text-sm uppercase mb-2">
          Hi, I am Pintu Singh
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Crafting High-Performance <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Web Applications
          </span>
        </h1>

        {/* Dynamic Typing Subtitle */}
        <div className="h-12 flex items-center justify-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-slate-300 font-semibold">
            I am a{" "}
            <span className="text-amber-400 border-b-2 border-amber-400/50 pb-0.5">
              {currentText}
            </span>
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="ml-1 text-amber-400"
            >
              |
            </motion.span>
          </h2>
        </div>

        {/* Brief Intro Paragraph */}
        <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
          Dedicated Software Engineer specializing in modern frontend architectures with <strong className="text-slate-200 font-medium">React</strong> and scalable backend systems powered by <strong className="text-slate-200 font-medium">Django & Python</strong>.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="/resume.pdf.docx"
            download="Pintu_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
          >
            <FaFileDownload /> View Resume
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-white font-semibold text-sm sm:text-base hover:border-amber-400/50 hover:bg-slate-900 transition-all hover:scale-105"
          >
            Get In Touch <FaArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

        {/* Social Links & Quick Stack */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 uppercase tracking-widest text-[11px] font-bold">Tech Stack:</span>
            <div className="flex flex-wrap gap-1.5">
              {["React", "Django", "Python", "TailwindCSS", "PostgreSQL", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/pintusingh123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/pintu-jhala-1612b5284/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default TypingText;
