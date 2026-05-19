// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },

        "border-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        "border-move": "border-move 3s linear infinite",
      },
    },
  },
  plugins: [],
};
