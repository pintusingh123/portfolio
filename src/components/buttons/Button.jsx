import React from "react";

const Button = ({ title, icon: Icon, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-slate-900/80 border border-amber-400/30 text-amber-300 font-semibold text-sm sm:text-base tracking-wide shadow-lg shadow-amber-500/5 backdrop-blur-md hover:border-amber-400/70 hover:bg-slate-900 transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
    >
      <span className="relative z-10 bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent font-medium">
        {title}
      </span>
      {Icon ? (
        <Icon className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:translate-x-1" />
      ) : (
        <svg
          className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:translate-x-1"
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
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default Button;
