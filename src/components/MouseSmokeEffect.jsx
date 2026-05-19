import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SmokeEffect({ color = "white", particlesPerEmit = 3 }) {
  const [particles, setParticles] = useState([]);

  const createParticle = useCallback((x, y, id) => ({
    id,
    x,
    y,
    angle: (Math.random() * Math.PI) / 3 - Math.PI / 6 - Math.PI / 2,
    speed: Math.random() * 10 + 10,
    size: Math.random() * 12 + 8,
    opacity: Math.random() * 0.3 + 0.1,
  }), []);

  const emitParticles = useCallback((x, y) => {
    const newParticles = Array.from({ length: particlesPerEmit }, (_, i) =>
      createParticle(x, y, Date.now() + i)
    );
    setParticles((prev) => [...prev, ...newParticles]);

    // Remove particles after 1 second
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.find((np) => np.id === p.id))
      );
    }, 1000);
  }, [createParticle, particlesPerEmit]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    emitParticles(x, y);
  };

  return (
    <div
      className="w-full min-h-screen bg-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full blur-md pointer-events-none"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 1,
              opacity: particle.opacity,
            }}
            animate={{
              x: particle.x + Math.cos(particle.angle) * 300 * particle.speed,
              y: particle.y + Math.sin(particle.angle) * 300 * particle.speed,
              scale: 2,
              opacity: 0,
            }}
            exit={{ opacity: 0, scale: 3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: color,
            }}
          />
        ))}
      </AnimatePresence>

      <div className="absolute top-0 left-0 w-full p-4 text-white z-10">
        <h1 className="text-3xl font-bold">Mouse Smoke Effect</h1>
        <p className="text-gray-400">Move your mouse around the screen ✨</p>
      </div>
    </div>
  );
}

export default SmokeEffect;
