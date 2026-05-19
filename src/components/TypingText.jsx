 import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function TypingText({
  words = ["DevOps", "Full Stack Web Dev", "Back End Dev", "Front End Dev"],
  typingSpeed = 100,
  deleteSpeed = 100,
  delayBetweenWords = 1000,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  // ✅ GSAP Cursor + Magnifier Effect
  useEffect(() => {
    const trailContainer = document.createElement("div");
    const lens = document.createElement("div");

    // Lens styles
    lens.style.position = "fixed";
    lens.style.width = "50px";
    lens.style.height = "50px";
    lens.style.borderRadius = "50%";
    lens.style.border = "2px solid rgba(255,255,255,0.2)";
    lens.style.boxShadow = "0 0 10px rgba(255,255,255,0.3)";
    lens.style.pointerEvents = "none";
    lens.style.zIndex = 9999;
    lens.style.backdropFilter = "blur(1px)";
    lens.style.transform = "translate(-50%, -50%) scale(1.3)";
    lens.style.transition = "opacity 0.2s ease";
    lens.style.opacity = "0";
    lens.style.background =
      "radial-gradient(rgba(255,255,255,0.05), rgba(0,0,0,0))";
    document.body.appendChild(lens);

    trailContainer.style.position = "fixed";
    trailContainer.style.top = 0;
    trailContainer.style.left = 0;
    trailContainer.style.pointerEvents = "none";
    trailContainer.style.zIndex = 9998;
    document.body.appendChild(trailContainer);

    const createTrail = (x, y) => {
      const circle = document.createElement("div");
      circle.style.position = "fixed";
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.width = "30px";
      circle.style.height = "30px";
      circle.style.borderRadius = "50%";
      circle.style.border = "1px solid rgba(255,255,255,0.3)";
      circle.style.backgroundColor = "rgba(25,0,255,0.05)";
      circle.style.pointerEvents = "none";
      circle.style.zIndex = 9997;
      circle.style.transform = "translate(-50%, -50%) scale(2)";
      circle.style.backdropFilter = "blur(3px)";
      trailContainer.appendChild(circle);

      gsap.to(circle, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => circle.remove(),
      });
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      lens.style.left = `${clientX}px`;
      lens.style.top = `${clientY}px`;

      // Detect if cursor is over text element
      const el = document.elementFromPoint(clientX, clientY);
      const isTextTag =
        el &&
        ["P", "H1", "H2", "SPAN", "A"].includes(el.tagName.toUpperCase());

      lens.style.opacity = isTextTag ? "1" : "0";

      createTrail(clientX, clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      lens.remove();
      trailContainer.remove();
    };
  }, []);

  return (
    <div className="flex   flex-col items-center justify-center min-h-[70vh]  md:min-h-[90vh]  text-white px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
        Hey..I'Am Pintu Singh
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-semibold mb-4">
        A'Passionate
      </h2>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-mono mb-6 flex items-center">
        {currentText}
        <motion.span
          className="ml-1 text-yellow-400"
          animate={{ opacity: [0.2, 1] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          |
        </motion.span>
      </h1>

      <p className="text-center text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl">
        Full Stack Developer with expertise in Frontend technologies and Backend
        frameworks, adept at developing end-to-end solutions that optimize user
        experience and system performance.
      </p>

      <Link
        to="/blog"
        className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
      >
        Go to Blog
      </Link>
    </div>
  );
}

export default function TypingAnimatedText() {
  return <TypingText />;
}
