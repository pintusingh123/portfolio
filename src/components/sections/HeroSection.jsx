import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFileDownload, FaGithub, FaLinkedin, FaCheckCircle, FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";

function HeroSection({
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

  const heroStats = [
    { label: "Projects Completed", value: "7+", icon: FaRocket },
    { label: "Core Tech Stack", value: "React & Django", icon: FaCode },
    { label: "CGPA (Kota Univ)", value: "7.1 / 10", icon: FaCheckCircle },
    { label: "UI Polish & Speed", value: "Fast 60 FPS", icon: FaLaptopCode },
  ];

  return (
    <section className="relative min-h-[95vh] w-full max-w-full flex flex-col items-center justify-center pt-28 pb-16 px-4 text-center overflow-hidden bg-[#0b1326] grid-overlay">
      {/* Ambient Spotlight Background Glow */}
      <div
        className="hidden md:block pointer-events-none fixed -z-10 w-[500px] h-[500px] rounded-full opacity-20 bg-gradient-to-tr from-[#c0c1ff] via-[#4cd7f6] to-[#8083ff] blur-3xl transition-transform duration-700 ease-out transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4cd7f6]/10 border border-[#4cd7f6]/30 text-[#4cd7f6] text-xs sm:text-sm font-medium mb-6 backdrop-blur-md"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4cd7f6]"></span>
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
        <p className="text-[#c0c1ff] font-semibold tracking-widest text-sm uppercase mb-2">
          Hi, I am Pintu Singh
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#dae2fd] tracking-tight leading-tight mb-4 font-display">
          Crafting High-Performance <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#c0c1ff] via-[#4cd7f6] to-[#ffafd3] bg-clip-text text-transparent">
            Web Applications
          </span>
        </h1>

        {/* Dynamic Typing Subtitle */}
        <div className="h-12 flex items-center justify-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-[#c7c4d7] font-semibold">
            I am a{" "}
            <span className="text-[#4cd7f6] border-b-2 border-[#4cd7f6]/50 pb-0.5">
              {currentText}
            </span>
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="ml-1 text-[#4cd7f6]"
            >
              |
            </motion.span>
          </h2>
        </div>

        {/* Brief Intro Paragraph */}
        <p className="text-[#c7c4d7] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
          Dedicated Software Engineer specializing in modern frontend architectures with <strong className="text-[#dae2fd] font-medium">React</strong> and scalable backend systems powered by <strong className="text-[#dae2fd] font-medium">Django & Python</strong>.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="/resume.pdf.docx"
            download="Pintu_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#c0c1ff] to-[#4cd7f6] text-[#07006c] font-bold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-[#c0c1ff]/20 transition-all hover:scale-105 glow-button"
          >
            <FaFileDownload /> View Resume
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel text-[#dae2fd] font-semibold text-sm sm:text-base hover:border-[#c0c1ff]/50 hover:bg-[#171f33] transition-all hover:scale-105"
          >
            Get In Touch <FaArrowRight className="w-4 h-4 text-[#4cd7f6]" />
          </Link>
        </div>

        {/* Hero Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
          {heroStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="glass-card rounded-2xl p-4 border border-[#c0c1ff]/15 flex flex-col items-center justify-center hover:border-[#4cd7f6]/40 transition-all"
              >
                <Icon className="text-[#4cd7f6] mb-1 text-lg" />
                <span className="text-xl sm:text-2xl font-extrabold text-[#c0c1ff] font-mono">
                  {stat.value}
                </span>
                <span className="text-xs text-[#908fa0] mt-0.5">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Social Links & Quick Stack */}
        <div className="pt-6 border-t border-[#908fa0]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#c7c4d7] text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#908fa0] uppercase tracking-widest text-[11px] font-bold">Tech Stack:</span>
            <div className="flex flex-wrap gap-1.5">
              {["React", "Django", "Python", "TailwindCSS", "PostgreSQL", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#171f33] border border-[#908fa0]/30 text-[#dae2fd] text-xs"
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
              className="p-2 rounded-full bg-[#171f33] border border-[#908fa0]/20 hover:border-[#c0c1ff]/40 text-[#dae2fd] hover:text-[#c0c1ff] transition"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/pintu-jhala-1612b5284/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#171f33] border border-[#908fa0]/20 hover:border-[#4cd7f6]/40 text-[#dae2fd] hover:text-[#4cd7f6] transition"
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

export default HeroSection;
