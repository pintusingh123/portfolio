 "use client";
import React, { useRef, useEffect, useState, memo } from "react";

const SCROLL_SPEED = 1;

const Card = memo(({ card, progress, zIndex }) => {
  const translateY = 100 - progress * 100;
  const opacity = progress < 0.05 ? 0 : progress;
  const scale = 0.8 + progress * 0.1;
  const imgTranslateY = translateY * 0.5;
  const textTranslateY = translateY * 0.3;

  return (
    <div
      className="absolute top-[5%] left-1/2 w-4/5 max-w-[950px] h-[90%] flex flex-col items-center justify-center rounded-2xl p-8 text-center overflow-hidden shadow-2xl"
      style={{
        background: card.color || "white",
        transform: `translate(-50%, ${translateY}%) scale(${scale})`,
        opacity,
        zIndex,
      }}
    >
      <div className="flex flex-col items-center gap-6 w-full max-w-[800px]">
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700"
          style={{ transform: `translateY(${textTranslateY}px)` }}
        >
          {card.title}
        </h1>
        <img
          src={card.img}
          alt={card.title}
          className="w-full max-h-[400px] object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          style={{ transform: `translateY(${imgTranslateY}px)` }}
        />
        <p className="text-lg text-gray-700 max-w-[700px]">{card.desc}</p>
        <p className="text-sm text-gray-500 bg-gray-100 px-4 py-1 rounded-full font-medium">
          Tech Used: {card.tech.join(", ")}
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href={card.liveLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-full font-semibold text-white bg-black shadow-md hover:bg-gray-800 transition-all"
          >
            🌐 Live
          </a>
          <a
            href={card.githubLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-full font-semibold text-white bg-gray-800 shadow-md hover:bg-gray-900 transition-all"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </div>
  );
});

const ScrollStack = () => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [category, setCategory] = useState("Fullstack");

  const projects = {
    Fullstack: [
      { title: "Short URL App", img: "https://via.placeholder.com/800x400?text=Short+URL", desc: "A full-stack URL shortener with Node.js, Express, MongoDB, and React.", tech: ["Node.js", "Express", "MongoDB", "React"], liveLink: "#", githubLink: "#" },
      { title: "E-Commerce Store", img: "https://via.placeholder.com/800x400?text=E-Commerce", desc: "Online store with authentication, cart, and Stripe integration.", tech: ["React", "Redux", "Stripe API"], liveLink: "#", githubLink: "#" },
      { title: "Social Media Clone", img: "https://via.placeholder.com/800x400?text=Social+App", desc: "MERN social app with JWT auth, posts, and comments.", tech: ["React", "Node.js", "Express", "MongoDB"], liveLink: "#", githubLink: "#" },
      { title: "Blog CMS", img: "https://via.placeholder.com/800x400?text=Blog+CMS", desc: "Full CMS with dashboard, markdown editor, and admin control.", tech: ["React", "Node.js", "MongoDB", "Express"], liveLink: "#", githubLink: "#" },
      { title: "Chat App", img: "https://via.placeholder.com/800x400?text=Chat+App", desc: "Real-time chat app using WebSockets and Node.js backend.", tech: ["React", "Socket.io", "Node.js"], liveLink: "#", githubLink: "#" },
    ],
    Frontend: [
      { title: "Portfolio Website", img: "https://via.placeholder.com/800x400?text=Portfolio", desc: "A personal portfolio built with React showcasing projects and skills.", tech: ["React", "Framer Motion", "TailwindCSS"], liveLink: "#", githubLink: "#" },
      { title: "Crypto Dashboard", img: "https://via.placeholder.com/800x400?text=Crypto", desc: "Real-time crypto dashboard with charts and API integration.", tech: ["React", "Chart.js", "API"], liveLink: "#", githubLink: "#" },
      { title: "Portfolio Redesign", img: "https://via.placeholder.com/800x400?text=Redesign", desc: "UI/UX redesign of portfolio site with animation effects.", tech: ["React", "Framer Motion"], liveLink: "#", githubLink: "#" },
      { title: "Weather App", img: "https://via.placeholder.com/800x400?text=Weather", desc: "A weather forecast app using OpenWeather API.", tech: ["React", "API", "TailwindCSS"], liveLink: "#", githubLink: "#" },
      { title: "Movie Finder", img: "https://via.placeholder.com/800x400?text=Movie+App", desc: "Search and explore movies using public APIs.", tech: ["React", "API", "Styled-Components"], liveLink: "#", githubLink: "#" },
    ],
    Backend: [
      { title: "REST API Boilerplate", img: "https://via.placeholder.com/800x400?text=REST+API", desc: "A modular and scalable REST API with Node.js and Express.", tech: ["Node.js", "Express", "JWT"], liveLink: "#", githubLink: "#" },
      { title: "Authentication Service", img: "https://via.placeholder.com/800x400?text=Auth+Service", desc: "JWT authentication service with MongoDB and bcrypt.", tech: ["Node.js", "MongoDB", "JWT"], liveLink: "#", githubLink: "#" },
      { title: "File Upload API", img: "https://via.placeholder.com/800x400?text=File+API", desc: "Backend for uploading and serving files.", tech: ["Node.js", "Multer", "Express"], liveLink: "#", githubLink: "#" },
      { title: "Payment Service", img: "https://via.placeholder.com/800x400?text=Payments", desc: "Stripe-based backend for payment processing.", tech: ["Node.js", "Stripe API", "Express"], liveLink: "#", githubLink: "#" },
      { title: "Logging Microservice", img: "https://via.placeholder.com/800x400?text=Logs", desc: "Centralized logging system using Winston and MongoDB.", tech: ["Node.js", "Winston", "MongoDB"], liveLink: "#", githubLink: "#" },
    ],
  };

  const cards = projects[category];
  const numCards = cards.length;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let target = 0;
    let current = 0;
    let rafId;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollTop = Math.min(Math.max(windowHeight - rect.top, 0), rect.height + windowHeight);
      target = scrollTop * SCROLL_SPEED;
    };

    const smoothScroll = () => {
      current += (target - current) * 0.15;
      setScrollY(current);
      rafId = requestAnimationFrame(smoothScroll);
    };

    smoothScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [category]);

  const sectionHeight = window.innerHeight * (numCards + 1);

  return (
    <section ref={sectionRef} style={{ height: `${sectionHeight}px` }} className="relative">
      {/* Category Tabs */}
      <div className="sticky mx-auto top-0 w-[70%]  bg-black/90 backdrop-blur-md flex justify-center gap-4 py-4 z-50 border-b border-gray-200 flex-wrap">
        {["Fullstack", "Frontend", "Backend"].map((cat) => (
          <button
            key={cat}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              cat === category ? "bg-gradient-to-r from-blue-600 to-yellow-400 text-white" : "bg-transparent text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {cards.map((card, i) => {
          const start = i * window.innerHeight;
          const end = (i + 1) * window.innerHeight;
          const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
          return <Card key={i} card={card} progress={progress} zIndex={i + 1} />;
        })}
      </div>
    </section>
  );
};

export default ScrollStack;
