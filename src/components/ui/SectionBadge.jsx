import React from "react";

const SectionBadge = ({ title, icon: Icon, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#171f33]/90 border border-[#c0c1ff]/30 text-[#c0c1ff] font-semibold text-sm sm:text-base tracking-wide shadow-lg shadow-[#8083ff]/10 backdrop-blur-md hover:border-[#c0c1ff]/70 hover:bg-[#222a3d] transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
    >
      <span className="relative z-10 bg-gradient-to-r from-[#c0c1ff] via-[#4cd7f6] to-[#ffafd3] bg-clip-text text-transparent font-medium">
        {title}
      </span>
      {Icon ? (
        <Icon className="w-4 h-4 text-[#4cd7f6] transition-transform duration-300 group-hover:translate-x-1" />
      ) : (
        <svg
          className="w-4 h-4 text-[#4cd7f6] transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      )}
      {/* Subtle glow background */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c0c1ff]/10 via-[#4cd7f6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default SectionBadge;
