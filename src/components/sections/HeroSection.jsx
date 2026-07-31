import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaCheckCircle,
  FaCode,
  FaRocket,
  FaLaptopCode,
  FaTerminal,
} from "react-icons/fa";
import Hero3DCanvas from "../ui/Hero3DCanvas";

function HeroSection({
  words = [
    "Full Stack Web Developer",
    "Django & Python Specialist",
    "React & Modern UI Architect",
    "Backend & REST API Specialist",
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
    { label: "Production Projects", value: "15+", icon: FaRocket },
    { label: "Core Stack", value: "React & Django", icon: FaCode },
    { label: "CGPA (Kota Univ)", value: "7.1 / 10", icon: FaCheckCircle },
    { label: "Interactive 3D UI", value: "60 FPS", icon: FaLaptopCode },
  ];

  return (
    <section className="relative min-h-[95vh] w-full max-w-full flex flex-col items-center justify-center pt-28 pb-16 px-4 text-center overflow-hidden bg-[#070d19]">
      {/* 3D Interactive Three.js WebGL Canvas */}
      <Hero3DCanvas />

      {/* Ambient Spotlight Background Glow */}
      <div
        className="hidden md:block pointer-events-none fixed -z-10 w-[600px] h-[600px] rounded-full opacity-25 bg-gradient-to-tr from-[#ffd700] via-[#4cd7f6] to-[#ff3b9a] blur-3xl transition-transform duration-700 ease-out transform -translate-x-1/2 -translate-y-1/2"
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
        className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4cd7f6]/10 border border-[#4cd7f6]/40 text-[#4cd7f6] text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-lg shadow-[#4cd7f6]/10"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4cd7f6]"></span>
        </span>
        Available for Full-time Roles & Remote Projects
      </motion.div>

      {/* Main Headline & Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 max-w-5xl"
      >
        <p className="text-[#ffd700] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 flex items-center justify-center gap-2">
          <span>Pintu Singh</span>
          <span className="text-[#4cd7f6]">•</span>
          <span>Full Stack Engineer</span>
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#dae2fd] tracking-tight leading-tight mb-5 font-display">
          Building Scalable Systems & <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#4cd7f6] via-[#ffd700] to-[#c0c1ff] bg-clip-text text-transparent">
            High-Impact Digital Products
          </span>
        </h1>

        {/* Dynamic Typing Subtitle */}
        <div className="h-12 flex items-center justify-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-[#c7c4d7] font-semibold">
            Specializing in{" "}
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
              className="ml-1 text-[#ffd700]"
            >
              |
            </motion.span>
          </h2>
        </div>

        {/* Brief Intro Paragraph */}
        <p className="text-[#c7c4d7] text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          Engineered <strong className="text-[#dae2fd] font-semibold">15+ web applications</strong> combining high-speed <strong className="text-[#4cd7f6] font-semibold">React & Three.js</strong> user interfaces with secure <strong className="text-[#ffd700] font-semibold">Django REST API & PostgreSQL</strong> backends.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="/resume.pdf.docx"
            download="Pintu_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ffd700] via-[#4cd7f6] to-[#c0c1ff] text-[#07006c] font-black text-sm sm:text-base hover:brightness-110 shadow-xl shadow-[#4cd7f6]/25 transition-all hover:scale-105"
          >
            <FaFileDownload /> Download Resume
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#131f37]/90 backdrop-blur-md border border-[#c0c1ff]/30 text-[#dae2fd] font-bold text-sm sm:text-base hover:border-[#ffd700]/60 hover:bg-[#1a2b4a] transition-all hover:scale-105 shadow-md"
          >
            Get In Touch <FaArrowRight className="w-4 h-4 text-[#ffd700]" />
          </Link>
        </div>

        {/* Interactive macOS Developer Console Terminal Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-2xl mx-auto mb-10 text-left bg-[#0c1527]/90 backdrop-blur-xl border border-[#c0c1ff]/20 rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="bg-[#152238] px-4 py-2 border-b border-[#c0c1ff]/15 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-[11px] font-mono text-[#908fa0] flex items-center gap-1.5">
              <FaTerminal size={11} className="text-[#ffd700]" /> engineer-environment.js
            </span>
            <span className="text-[10px] font-mono text-[#00ff87]">v2.4.0</span>
          </div>

          <div className="p-4 font-mono text-xs space-y-2 text-[#dae2fd]">
            <p className="flex items-center gap-2 text-[#908fa0]">
              <span className="text-[#00ff87]">➜</span>
              <span className="text-[#4cd7f6]">~</span>
              <span>pintu.getEngineeringProfile()</span>
            </p>
            <div className="pl-4 space-y-1 text-[#c7c4d7]">
              <p>
                <span className="text-[#ffd700]">status:</span> <span className="text-[#00ff87]">"🟢 Available for Full-Time / Contract Roles"</span>
              </p>
              <p>
                <span className="text-[#ffd700]">frontend:</span> <span className="text-[#4cd7f6]">["React", "Vite", "Three.js WebGL", "TailwindCSS"]</span>
              </p>
              <p>
                <span className="text-[#ffd700]">backend:</span> <span className="text-[#c0c1ff]">["Django", "Python", "REST APIs", "PostgreSQL"]</span>
              </p>
            </div>
          </div>
        </motion.div>

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
                className="bg-[#0e172a]/80 backdrop-blur-md rounded-2xl p-4 border border-[#c0c1ff]/20 flex flex-col items-center justify-center hover:border-[#ffd700]/50 transition-all shadow-lg group"
              >
                <Icon className="text-[#4cd7f6] group-hover:text-[#ffd700] mb-1 text-lg transition-colors" />
                <span className="text-xl sm:text-2xl font-black text-[#c0c1ff] group-hover:text-[#ffd700] font-mono transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs text-[#908fa0] mt-0.5 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

      
      </motion.div>
    </section>
  );
}

export default HeroSection;
