import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
  FaLayerGroup,
  FaServer,
  FaCodeBranch,
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
            className="fixed inset-0 bg-[#070d19]/80 backdrop-blur-md"
          />

          {/* Modal Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0e172a] border border-[#c0c1ff]/30 rounded-2xl shadow-[0_20px_60px_-15px_rgba(76,215,246,0.3)] z-10 overflow-hidden text-left"
          >
            {/* macOS Bar */}
            <div className="bg-[#152238] px-4 py-3 border-b border-[#c0c1ff]/15 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-2 text-xs font-mono text-[#908fa0]">
                  architecture-spec / {project.title.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-[#908fa0] hover:text-white transition p-1 rounded-md hover:bg-[#c0c1ff]/10"
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
                  <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#4cd7f6]/10 border border-[#4cd7f6]/30 text-[#4cd7f6] mb-2">
                    {project.category} Architecture
                  </span>
                  <h3 className="text-2xl font-black text-[#dae2fd]">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Overview */}
              <div className="bg-[#131d33] border border-[#c0c1ff]/15 rounded-xl p-4">
                <h4 className="text-xs font-bold text-[#c0c1ff] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FaLayerGroup /> System Overview
                </h4>
                <p className="text-sm text-[#c7c4d7] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Core Features & Architectural Highlights */}
              <div>
                <h4 className="text-xs font-bold text-[#4cd7f6] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FaCheckCircle /> Key Capabilities & Highlights
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
                      className="flex items-start gap-2 bg-[#17253f]/60 p-2.5 rounded-lg border border-[#c0c1ff]/10 text-xs text-[#dae2fd]"
                    >
                      <span className="text-[#4cd7f6] mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Breakdown */}
              <div>
                <h4 className="text-xs font-bold text-[#c0c1ff] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FaServer /> Tech Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-[#1a2845] border border-[#4cd7f6]/30 text-[#4cd7f6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTAs */}
              <div className="pt-4 border-t border-[#c0c1ff]/15 flex items-center justify-end gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#16243d] border border-[#c0c1ff]/30 text-xs font-semibold text-[#dae2fd] hover:text-white hover:border-[#c0c1ff]/60 transition"
                >
                  <FaGithub size={14} /> View Source Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-[#c0c1ff] to-[#4cd7f6] text-xs font-bold text-[#07006c] hover:brightness-110 shadow-lg shadow-[#4cd7f6]/20 transition transform hover:scale-105"
                >
                  Launch Live App <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
