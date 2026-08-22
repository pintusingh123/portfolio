import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
  FaLayerGroup,
  FaServer,
} from "react-icons/fa";

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[rgba(36,31,27,0.65)] backdrop-blur-sm"
          />

          {/* Modal Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#faf6f0] border-t-2 border-b-2 border-l-4 border-r-[3px] border-[#d8c7ac] rounded-xl shadow-[6px_6px_0_0_#241f1b] z-10 overflow-hidden text-left"
          >
            {/* Window Header */}
            <div className="bg-[#f2e9da] px-5 py-3 border-b-2 border-[#d8c7ac] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#c1633b]" />
                <span className="w-3 h-3 rounded-full bg-[#d8c7ac]" />
                <span className="w-3 h-3 rounded-full bg-[#7c8b5d]" />
                <span className="ml-2 font-mono text-xs font-semibold text-[#6e6356]">
                  project-spec / {project.title.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-[#6e6356] hover:text-[#9a4f2f] transition p-1 rounded-md"
                aria-label="Close modal"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-[rgba(193,99,59,0.12)] text-[#9a4f2f] mb-2 font-sans">
                    {project.category || "Full-Stack Project"}
                  </span>
                  <h3 className="font-hand text-3xl font-bold text-[#241f1b]">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Overview */}
              <div className="bg-white border border-[#d8c7ac] rounded-xl p-4 shadow-sm">
                <h4 className="font-sans text-xs font-bold text-[#9a4f2f] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FaLayerGroup /> System Overview
                </h4>
                <p className="font-sans text-sm text-[#4a4038] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Core Features & Highlights */}
              <div>
                <h4 className="font-sans text-xs font-bold text-[#241f1b] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-[#c1633b]" /> Key Capabilities & Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(project.highlights || [
                    "REST API endpoints with structured JSON responses",
                    "Modular, component-based frontend architecture",
                    "Responsive user interface optimized for mobile & desktop",
                    "Production deployment with environment configuration"
                  ]).map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 bg-[#f2e9da] p-3 rounded-lg border border-[#d8c7ac] font-sans text-xs text-[#241f1b]"
                    >
                      <span className="text-[#c1633b] mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Breakdown */}
              <div>
                <h4 className="font-sans text-xs font-bold text-[#6e6356] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FaServer /> Tech Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-md bg-[#241f1b] text-[#f7f1e6] font-sans"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTAs */}
              <div className="pt-4 border-t border-[#d8c7ac] flex flex-wrap items-center justify-end gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#241f1b] font-sans text-xs font-bold text-[#241f1b] hover:bg-[#f2e9da] transition"
                  >
                    <FaGithub size={14} /> Source Code
                  </a>
                )}
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#241f1b] font-sans text-xs font-bold text-[#f7f1e6] shadow-[3px_3px_0_0_#d8c7ac] hover:-translate-y-0.5 transition"
                  >
                    Launch Live App <FaExternalLinkAlt size={11} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
